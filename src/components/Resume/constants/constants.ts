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
    body: 'As a Frontend Engineer, I’ve had the chance to work on federal government projects, building front-end solutions with React, TypeScript, Material UI, Apollo Client, and other tools. One of my key achievements was leveraging GraphQL queries with Apollo Client to create dynamic, data-driven interfaces that improved user experience. I also led the migration of several applications to MUI v5 and Node 20, standardizing design components and streamlining development. Focused on quality, I wrote extensive Jest and Vitest tests to significantly boost test coverage and improve code stability. I also spearheaded large-scale refactors of legacy code, ensuring business continuity while updating outdated practices. As a code owner, I used Jira and Confluence to document progress, manage bugs, and provide detailed code reviews, helping to mentor my team and ensure high coding standards across the board.',
  },
  {
    title: 'Programmer I',
    location: 'Anne Arundel County OIT • 2017 - 2021',
    body: 'I’ve worked closely with designers, backend engineers, and stakeholders to build a full-stack inventory management platform using React, React Native, Node.js, and GraphQL, which helped teams track inventory more efficiently. I also developed a web-based system for a Police Department to manage detainee processing and generate legal reports in PDF format. Beyond that, I created a middleware app to handle and route data requests from multiple sources, integrating a decision engine for automation. Earlier in my career, I designed and maintained web pages for the county’s CMS using HTML, CSS, and JavaScript, and implemented mobile-first designs for public-facing pages like the Youth Engagement Activities Hub, greatly improving accessibility across devices.',
  },
];

export const skillsSchema: SkillsSchemaInterface[] = [
  {
    title: 'Programming Languages',
    list: ['JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS'],
  },
  {
    title: 'Libraries & Frameworks',
    list: ['React', 'Redux', 'GraphQL', 'Apollo Client', 'jQuery', 'Vite'],
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
