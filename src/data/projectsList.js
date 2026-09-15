import BahirlinkImage from "../assets/Bahirlink.png";

export const projectsList = [
  {
    id: 1,
    featured: true,
    award: "🏆 1st Place — Best Final-Year Project Award",
    title: "BahirLink — Unified Emergency & Public Safety Ecosystem",
    description:
      "A centralized high-availability platform connecting Ethiopian citizens with emergency dispatch and public municipal service providers. Incorporates real-time incident mapping, video call assessment, emergency alerts, and cross-platform mobile dispatch. Awarded 1st place among all university engineering capstone projects.",
    tags: ["React", "Flutter", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: BahirlinkImage,
    github: "https://github.com/biniambeza",
    live: "https://bahirdarlinkweb.vercel.app/",
  },
  {
    id: 2,
    featured: false,
    award: null,
    title: "AfroTask — Collaborative Sprint & Workflow Management",
    description:
      "Full-stack team productivity platform featuring interactive Kanban boards, sprint tracking, real-time team notifications, and granular role-based permissions. Designed for agile engineering squads to streamline issue tracking and deployment milestones.",
    tags: ["React", "Node.js", "PostgreSQL", "Express.js", "Tailwind CSS"],
    image: null,
    github: "https://github.com/biniambeza",
    live: "https://github.com/biniambeza",
  },
  {
    id: 3,
    featured: false,
    award: null,
    title: "PulsePay — Merchant Billing & Payment Processing Suite",
    description:
      "Secure backend payment gateway integration with interactive merchant analytics dashboard. Implements encrypted API keys, webhook event listeners, automated billing reconciliation, and JWT token-based authentication.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs", "React"],
    image: null,
    github: "https://github.com/biniambeza",
    live: "https://github.com/biniambeza",
  },
];