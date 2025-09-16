export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const myTechStack = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript (ES6+)",
  "React",
  "Git",
  "Python(Flask)",
  "Python(Django)",
  "PostgreSql",
];

export const projects = [
  {
    id: 1,
    title: "The Tech POWA: An online Tech Academy",
    description:
      "The Tech Powa is an active digital learning platform and community for young people to learn digital tech skills and network with like minds, especially tech related fields. Made with plain html, tailwind and vanilla javasript for the front end, and Python(flask) at the backend due to its light weight nature. It features an admin page for customization and updating of course, student management. Personalized css styled email for student follow up.",
    className: "",
    titleClassName: "justify-end",
    img: "/assets/powa-pic.png",
    github: "https://github.com/sobee-dev/powa",
    link: "https://www.thetechpowa.com",
    techs: ["HTML", "JavaScript", "Python(Flask)", "Tailwind", "Postgre Sql"],
    features: ["Student Database Management ", "Automated Personalized html email upon registration.","Admin dashboard"],
    challenges:["Removed login authentication halfway through and revamped Database","No UI reference provided"] ,
    solutions:["Used db-migrate to add new fields to the existing db","Maintained same styles for repeatable elemnets"]
  },
  {
    id: 2,
    title: "Billbuzz: A fast VTU and bills payment webapp",
    description:
      "This app is made to ease airtime and internet top up, pay utility bills and register businesses. React.js was use in the front end, and Python(Django) was used in the backend for its fast third-party API integration. This features a wallet system, smooth API integrations",
    className: "",
    titleClassName: "justify-start",
    img: "/assets/billbuzz-pic.png",
    github: "https://github.com/sobee-dev/billbuzz",
    link: "https://billbuzz.ng",
    techs: ["JavaScript","Git", "React","Python(Django)", "GitHub"],
    features: ["User authenticaton system", "Third party API integrations","Wallet system" ],
    challenges:["Making The backend with Django, not flask because of scalability"] ,
    solutions:[]
  },
  {
    id: 3,
    title: "Lorem & CWT: A Creative Lorem Approach",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, officiis, eum modi inventore natus velit voluptates laudantium nam.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-center",
    img: "https://i.pinimg.com/originals/54/b5/24/54b52468335fd6eb935e330eb3197b25.gif",
    github: "https://github.com/codewithty",
    link: "https://codewithty.dev",
    techs: ["TypeScript", "React", "NextJS", "CSS", "AWS", "GitHub"],
    features: [],
    challenges: [],
    solutions:[]
  }
];

export const workExperience = [
  {
    id: 1,
    company: "BILLBUZZ NIG LTD",
    title: "Full-Stack developer",
    desc: "Designed, build from scratch, initially with flask, then upgraded with Django and migrated to postgresSql. ",
    className: "md:col-span-2",
    location: "Lagos Nigeria",
    period: "8 weeks",
    skills: [
      "Prototyping",
      "User Testing",
      "Project Achitecture design",
      "Front end and graphics design",
      "Backend architecture and third-party AI integration"
    ],
  },
  {
    id: 2,
    company: "The Tech Powa LTD",
    title: "Chief technology officer and developer",
    desc: "Designed and developed the digital academy platform with smooth ui to engage potential students.",
    className: "md:col-span-2",
    location: "Lagos, Nigeria",
    period: "Start Date - End Date",
    skills: [
      "Figma",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "CSS",
    ],
  },
  {
    id: 3,
    company: "Company",
    title: "Design Systems Guru",
    desc: "Crafted design systems that were so organized they could be put in a museum. Pushed for consistent, user-friendly components that made developers’ lives easier.",
    className: "md:col-span-2",
    location: "Remote",
    period: "Start Date - End Date",
    skills: [
      "Figma",
      "React",
      "Design Tokens",
      "Accessibility",
      "Storybook",
      "Collaboration",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "assets/git.svg",
    link: "https://github.com/sobee-dev",
  },
  {
    id: 2,
    img: "assets/linkedin.svg",
    link: "https://www.linkedin.com/in/obinna-e-samuel-0b9788237/",
  },
  {
    id: 3,
    img: "assets/web.svg",
    link: "https://portfolio-sobee-devs-projects.vercel.app/",
  },
  {
    id: 3,
    img: "assets/insta.svg",
    link: "https://www.instagram.com/realsobee",
  },
  {
    id: 3,
    img: "assets/link.svg",
    link: "https://x.com/sobee_dev",
  },
];

export const skills = [
  "HTML",
  "CSS",
  "React",
  "Python",
  "JS",
  "Tailwind",
];
