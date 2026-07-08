export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Research Paper Publication',
    company: 'Computer Vision Group, TUM',
    location: 'Munich, Germany',
    start: 'Mar 2025',
    end: 'Mar 2025',
    bullets: [
      'Researched multi-agent navigation of vehicles in unconstrained environments through reinforcement learning, including an extensive literature review and advanced visualizations.',
      'Published at IEEE Intelligent Vehicles Symposium (IV) 2025, including review of third-party submissions.'
    ],
    tech: ['Reinforcement Learning', 'Multi-Agent Systems', 'Research']
  },
  {
    role: 'Student Assistant',
    company: 'Computer Vision Group (MuMoL), TUM',
    location: 'Munich, Germany',
    start: 'Sep 2024',
    end: 'Present',
    bullets: [
      'Adapted open-source software for medical purposes, including local large-scale deployment of LLMs.',
      'Engineered LLM agents with LangGraph and improved performance through custom prompt engineering.',
      'Managed and analyzed datasets as part of ongoing research work.'
    ],
    tech: ['LLMs', 'LangGraph', 'Prompt Engineering', 'Deployment']
  },
  {
    role: 'Working Student – Software Engineer',
    company: 'Levigo Solutions GmbH',
    location: 'Munich, Germany',
    start: 'Aug 2021',
    end: 'Oct 2024',
    bullets: [
      'Introduced software quality assurance measures for Kubernetes clusters with Testkube and Postman to improve code quality and reduce redundant tasks.',
      'Implemented a PDF/A verification tool for documents in Java as a back-end API.'
    ],
    tech: ['Java', 'Kubernetes', 'REST API', 'Testkube']
  },
  {
    role: 'IT Infrastructure Lead',
    company: 'Corona Test Facility',
    location: 'Germany',
    start: 'Mar 2021',
    end: 'Mar 2022',
    bullets: [
      'Responsible for IT infrastructure and shift staff at a COVID-19 test facility.'
    ],
    tech: ['IT Infrastructure', 'Operations']
  }
];
