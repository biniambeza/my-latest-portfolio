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
    featured: true,
    award: null,
    title: "Medhanit — Pharmacy Inventory Management System",
    description:
      "Full-stack pharmacy management platform featuring role-based access control, real-time stock tracking, batch and expiry monitoring, and automated low-stock alerts. Designed for pharmacies to streamline inventory, sales, and supplier workflows across admin, pharmacist, and cashier roles.",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    image: null,
    github: "https://github.com/biniambeza",
    live: "https://pharmacy-inventory-management-sand.vercel.app",
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