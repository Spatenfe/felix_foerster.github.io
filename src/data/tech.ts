export type TechGroup = {
  title: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    title: 'Machine Learning & Deep Learning',
    items: ['Computer Vision', 'Natural Language Processing', 'Reinforcement Learning', 'LLM Agents', 'Audio Processing', '3D Geometry']
  },
  {
    title: 'Programming & Tools',
    items: ['Python', 'PyTorch', 'Slurm', 'vLLM', 'LangGraph', 'Java', 'C', 'SQL', 'Dart/Flutter', 'Assembly', 'Git', 'Docker', 'Kubernetes', 'JUnit']
  }
];
