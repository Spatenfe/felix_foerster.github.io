export type EducationEntry = {
  degree: string;
  university: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export const education: EducationEntry[] = [
  {
    degree: 'Degree Title',
    university: 'University Name',
    location: 'City, Country',
    start: 'Mon Year',
    end: 'Present',
    highlights: [
      'Optional highlight, e.g. focus area or notable coursework.'
    ]
  }
];
