export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  overview: string;
  img: string;
  demoLink?: string;
  githubLink?: string;
  techs: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Tech POWA",
    category: "EdTech",
    description:
      "An active virtual learning platform and community.",
    overview:
      "The Tech Powa is an active digital learning platform and community for young people to learn digital tech skills and network with like minds, especially tech related fields. It features an admin page for customization and updating of course, student management. Personalized css styled email for student follow up.",
    img: "/assets/powa-pic.png",
    demoLink: "https://www.thetechpowa.com",
    githubLink: "https://github.com/sobee-dev/powa",
    techs: ["HTML", "JavaScript", "Python(Flask)", "Tailwind", "Postgre Sql"],
    features: [
      "Student Database Management System",
      "Automated Personalized html email upon registration.",
      "Online Payment option integration",
      "Admin dashboard",
    ],
    challenges: [
      "Seeking alternative mail agent since the python built in Mail is not trusted by the available ports in my hosting server",
      "Building the interface without a UI reference at first",
      "Having to add or remove fields from the db multiple times on client request",
    ],
    solutions: [
      "Used Allembic migrations to ensure easy update of db structure",
      "Broke down the UI structure and revisualized the project to get a more fitting design before development",
      "Migrated to sendgrid for personalized messages and ZohoMail for inbox and properly configured in the DNS",
    ],
  },
  {
    id: 2,
    title: "Billbuzz",
    category: "Business Management",
    description:
      "An offline-first business management SaaS that keeps an online record of your sales and other business operations, and generates brandcolor customized invoice that shares directly to email or any social network.",
    overview:
      "Billbuzz is a digital platform that eliminates the need to carry physical paper before being able to issue invoice, access your sales records and customer list. It makes it possible for you to make transactions even while in transit, write a custom invoice with  signature authoriazation from your phone, and keep a digital record of your customers for marketing purposes.",
    img: "/assets/billbuzz-pic.png",
    demoLink: "https://billbuzz.ng",
    githubLink: "https://github.com/sobee-dev/",
    techs: ["Next.js", "Django", "Docker", "REST APIs", "Tailwind CSS"],
    features: [
      "Clean user creation and business onboarding",
      "Brand color customization and custom template",
      "Signature pad for hand-signed authorization.",
      "Business analytics dashboard",
      "Customers and sales records",
      "Offline features for low network areas inside dense markets"
    ],
    challenges: [
      "Including the offline feature",
      "Maintaining identical record for both offline and server db to avoid sync conflict",
      "Cors issues and case conversion for db fields an variables across frontend and backend"
    ],
    solutions: [
      "Used a django middleware to convert the data to camel case before sending and to convert to snake case before hitting the serializer",
      "Used ai to ensure matching value for both offline and server database",
      "Used Typescript in the frontend to ensure typesafety to eliminate conflict with the server datatypes"
    ],
  },
  // {
  //   id: 3,
  //   title: "ChainVault",
  //   category: "Blockchain",
  //   description:
  //     "A decentralised asset vault that lets users lock, track, and transfer crypto assets with smart-contract enforced rules and a clean Web3 UI.",
  //   overview:
  //     "ChainVault gives individuals and DAOs a trustless way to manage on-chain assets. Users deploy personalised vault contracts, set spending limits, schedule unlocks, and audit every transaction — all without handing keys to a third party.",
  //   img: "/images/projects/chainvault.png",
  //   demoLink: "https://chainvault.app",
  //   githubLink: "https://github.com/sobee/chainvault",
  //   techs: ["Solidity", "Hardhat", "Next.js", "ethers.js", "TypeScript", "Tailwind CSS"],
  //   features: [
  //     "One-click personal vault deployment",
  //     "Time-locked and condition-based asset release",
  //     "Multi-sig transfer approval for teams",
  //     "Full on-chain audit trail per vault",
  //     "WalletConnect + MetaMask support",
  //   ],
  //   challenges: [
  //     "Writing gas-efficient smart contracts without sacrificing flexibility",
  //     "Handling wallet disconnects gracefully mid-transaction",
  //   ],
  //   solutions: [
  //     "Used Solidity custom errors and tight storage packing to cut gas ~35%",
  //     "Persisted pending tx hashes in localStorage and re-polled on reconnect",
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "NexaLearn",
  //   category: "EdTech",
  //   description:
  //     "An interactive online learning platform with video courses, progress tracking, quizzes, and certification for tech skills.",
  //   overview:
  //     "NexaLearn makes structured tech education accessible. Instructors record and upload courses; students watch, take quizzes, track their progress on a personal dashboard, and earn verifiable PDF certificates on completion.",
  //   img: "/images/projects/nexalearn.png",
  //   demoLink: "https://nexalearn.vercel.app",
  //   githubLink: "https://github.com/sobee/nexalearn",
  //   techs: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS S3", "Stripe"],
  //   features: [
  //     "Video streaming with resumable playback",
  //     "Per-lesson quizzes with instant grading",
  //     "Student progress dashboard with completion %",
  //     "Auto-generated PDF certificates on course completion",
  //     "Stripe-based course purchase flow",
  //   ],
  //   challenges: [
  //     "Streaming large video files without buffering on slow connections",
  //     "Generating unique branded certificates at scale",
  //   ],
  //   solutions: [
  //     "Served videos via AWS CloudFront with adaptive bitrate via HLS",
  //     "Used Puppeteer on a serverless function to render and sign PDF certificates",
  //   ],
  // },
];