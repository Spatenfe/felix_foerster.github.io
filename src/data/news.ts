export type NewsSegment = {
  text: string;
  link?: string;
  external?: boolean;
};

export type NewsItem = {
  date: string;
  text?: string;
  segments?: NewsSegment[];
  link?: string;
  external?: boolean;
};

export const news: NewsItem[] = [
  {
    date: 'Jul 2026',
    segments: [
      { text: "I'm happy to join " },
      { text: 'Sophia Koepke', link: 'https://akoepke.github.io/', external: true },
      { text: ' and ' },
      {
        text: 'Alexei (Alyosha) Efros',
        link: 'https://scholar.google.com/citations?user=d97bGd8AAAAJ&hl=en',
        external: true
      },
      { text: ' at ' },
      { text: 'BAIR, UC Berkeley', link: 'https://bair.berkeley.edu/', external: true },
      { text: ' for my research stay this summer.' }
    ]
  },
  {
    date: 'Feb 2026',
    text: 'Published an ML benchmark for VBF Higgs-pair events with Lars Schneider and Johannes Mesner, advised by Lars Linden and Celine Stauch (LMU Munich).',
    link: 'https://spatenfe.github.io/vbf_event_classifier/',
    external: true
  },
  {
    date: 'Apr 2025',
    text: 'Joined the Computer Vision Group (MuMoL) at TUM as a Student Assistant.',
    link: 'https://akoepke.github.io/mumol.html',
    external: true
  },
  {
    date: 'Mar 2025',
    text: 'Paper "Decentralized Reinforcement Learning for Multi-Agent Navigation in Unconstrained Environments" accepted at IEEE IV 2025.',
    link: 'https://spatenfe.github.io/Decentralized_Reinforcement_Learning_for_Multi-Agent-Navigation_in_Unconstrained_Environments/',
    external: true
  },
  {
    date: 'Oct 2024',
    text: 'Started the M.Sc. Computer Science program at the Technical University of Munich.'
  }
];
