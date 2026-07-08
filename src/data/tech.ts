export type TechGroup = {
  title: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    title: 'AI / ML',
    items: ['Deep Learning', 'Computer Vision', 'NLP', 'Reinforcement Learning', 'LLM Agents', 'Diffusion Models', '3D Geometry']
  },
  {
    title: 'Programming',
    items: ['Python', 'PyTorch', 'Java', 'C', 'SQL']
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'Docker', 'Kubernetes', 'LangGraph', 'REST API', 'JUnit', 'Testkube']
  }
];
