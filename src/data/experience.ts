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
    role: 'Job Title',
    company: 'Company Name',
    location: 'City, Country',
    start: 'Mon Year',
    end: 'Present',
    bullets: [
      'First key responsibility or achievement, ideally with a concrete result.',
      'Second key responsibility or achievement.',
      'Third key responsibility or achievement.'
    ],
    tech: ['Skill One', 'Skill Two', 'Skill Three']
  }
];
