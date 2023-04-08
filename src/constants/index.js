import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  thebigleaf,
  pruthatek,
  movieflex,
  onestop,
  rhythm,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile App Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'PruthaTek',
    icon: pruthatek,
    iconBg: '#E6DEDD',
    date: 'May 2020 - December 2020',
    points: [
      'Designed and implemented responsive UI/UX for multiple websites, which resulted in a 20% lower bounce rate and 15% longer session duration, boosting customer engagement and satisfaction.',
      'Collaborated with cross-functional teams to gather business requirements and translate them into technical specifications and features, ensuring timely and quality delivery of all projects.',
      'Managed web applications on Digital Ocean and GoDaddy web hosting services using cPanel and CentOS web panels, optimizing server performance and security through load balancing, caching, and other techniques for a 30% increase in uptime and 25% faster page loads.',
    ],
  },
  {
    title: 'Full Stack Developer (Work Integrated Learning)',
    company_name: 'The Big Leaf',
    icon: thebigleaf,
    iconBg: '#E6DEDD',
    date: 'May 2021 - August 2022',
    points: [
      'Collaborated in a team project to develop the academic and non-academic feedback platform, which could help organizations or individuals to understand the cause and led to more than 20% improvement in end-user satisfaction.',
      'Implemented a new signup/sign-in feature on the website to authenticate and authorize various kinds of users using email verification. These led to a 30% increase in registered users and a 20% decrease in fraudulent activity on the platform.',
      'Developed a new feature to export survey data, which resulted in a 50% reduction in time spent manually compiling and formatting the data for reporting purposes.',
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
//     name: 'Sara Lee',
//     designation: 'CFO',
//     company: 'Acme Co',
//     image: 'https://randomuser.me/api/portraits/women/4.jpg',
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: 'Chris Brown',
//     designation: 'COO',
//     company: 'DEF Corp',
//     image: 'https://randomuser.me/api/portraits/men/5.jpg',
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: 'Lisa Wang',
//     designation: 'CTO',
//     company: '456 Enterprises',
//     image: 'https://randomuser.me/api/portraits/women/6.jpg',
//   },
// ];

const projects = [
  {
    name: 'Movieflex',
    description:
      'Web application that enable users to search and book movie tickets in their nearest theatre and review the orders. Along with the admin dashboard, admin can handle the database for creating and modifying the movie details, view user basic info, and ticket details.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    ],
    image: movieflex,
    source_code_link: 'https://github.com/Vrushank796/movieflex-client',
  },
  {
    name: 'OneStop',
    description:
      'Developed a scalable eCommerce Website where customers can explore various clothes with product filtering and purchase the products smoothly. Implemented features such as mail updates, order tracking, and customer support in order to make it more reliable.',
    tags: [
      {
        name: 'php',
        color: 'blue-text-gradient',
      },
      {
        name: 'sql',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: onestop,
    source_code_link: 'https://github.com/Vrushank796/OneStop',
  },
  {
    name: 'Rhythm',
    description:
      'Mobile application which allows users to access a vast library of music from a variety of genres and artists.It uses the Napster API, which provides a seamless integration with the Napster music streaming service. This enables Rhythm users to enjoy high-quality audio streaming and a wide range of features such as playlists, favorites, and recommendations.',
    tags: [
      {
        name: 'swift',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'napsterapi',
        color: 'pink-text-gradient',
      },
    ],
    image: rhythm,
    source_code_link: 'https://github.com/Vrushank796/Rhythm',
  },
];

export { services, technologies, experiences, projects };
