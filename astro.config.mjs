import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { visit } from 'unist-util-visit';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? '';
const isUserSite = repositoryName.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const base = process.env.BASE ?? (repositoryName ? (isUserSite ? '/' : `/${repositoryName}/`) : '/');
const site = process.env.SITE ?? (owner ? `https://${owner}.github.io` : 'https://example.com');

// Markdown body content (e.g. project write-ups) can reference public/ assets with
// root-relative paths like "/images/foo.png". Unlike component templates, plain
// markdown doesn't go through withBase(), so on project-page deployments (base !== '/')
// those images 404. This rewrites them at build time to match the configured base.
function remarkBaseUrls() {
  const prefix = base.replace(/\/$/, '');
  return () => (tree) => {
    if (!prefix) return;
    visit(tree, 'image', (node) => {
      if (node.url?.startsWith('/') && !node.url.startsWith(prefix + '/')) {
        node.url = prefix + node.url;
      }
    });
  };
}

export default defineConfig({
  site,
  base,
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkBaseUrls()],
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
