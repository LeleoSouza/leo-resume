interface WorkSchemaInterface {
  title: string;
  location: string;
  body: string;
}
interface SkillsSchemaInterface {
  title: string;
  list: string[];
}
export const workSchema: WorkSchemaInterface[] = [
  {
    title: 'Senior Software Engineer',
    location: 'Acuity, Inc • 2023 - Present',
    body: 'Developed front-end solutions for federal government contracts. Used React, Spring Boot, Node.js, GraphQL, Postgres, and Elasticsearch. Collaborated across departments to design and implement scalable systems.',
  },
  {
    title: 'Full Stack Developer',
    location: 'Anne Arundel County OIT • 2020 - 2021',
    body: 'Built internal tools including an inventory system (web and mobile) using React, React Native, Node.js, and GraphQL to streamline cross-department tracking; developed a detainee processing app for a Police Department with PDF report generation; and engineered a middleware solution with a decision engine to automate data routing and logging across multiple sources.',
  },
  {
    title: 'Programmer I',
    location: 'Anne Arundel County OIT • 2017 - 2020',
    body: 'Developed and maintained web pages for the county’s CMS (SiteExecutive) using HTML, CSS, and JavaScript, including the mobile-first Youth Engagement Activities Hub (YEAH!) and Public Information Request page, improving accessibility and user experience.',
  },
];

export const skillsSchema: SkillsSchemaInterface[] = [
  {
    title: 'Programming Languages',
    list: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Libraries & Frameworks',
    list: ['React', 'Redux', 'GraphQL', ' Apollo Client', 'jQuery', 'Vite'],
  },
  {
    title: 'Tools & Platforms',
    list: ['Git', 'GitHub', 'Jira', 'Postman', 'AWS'],
  },
  {
    title: 'Design Software',
    list: ['Adobe Photoshop', 'Illustrator', 'Lightroom', 'Corel Draw'],
  },
];
