import {
  bulletPoint1,
  bulletPoint2,
  bulletPoint3,
  icoComment,
  icoDashboard,
  icoFacebook,
  icoFolders,
  icoInstagram,
  icoLinkedin,
  icoProfiles,
  icoStatistic,
  icoTailored,
  icoX,
  logoAmazon,
  logoGoogle,
  logoNetflix,
  logoSlack,
  logoZoom,
} from "../assets";

export const branding = [
  {
    id: "0",
    alt: "Logo Google",
    image: logoGoogle,
  },
  {
    id: "1",
    alt: "Logo Slack",
    image: logoSlack,
  },
  {
    id: "2",
    alt: "Logo Amazon",
    image: logoAmazon,
  },
  {
    id: "3",
    alt: "Logo Zoom",
    image: logoZoom,
  },
  {
    id: "4",
    alt: "Logo Netflix",
    image: logoNetflix,
  },
];

export const features = [
  {
    id: "0",
    alt: "Icon Dashboard",
    image: icoDashboard,
    title: "Tableau de bord",
    text: "Visualisez toutes vos données clés en un seul endroit. Suivez vos performances en temps réel et prenez des décisions éclairées.",
  },
  {
    id: "1",
    alt: "Icon Comment",
    image: icoComment,
    title: "Commentaires",
    text: "Collaborez efficacement avec votre équipe grâce à notre système de commentaires intuitif et réactif.",
  },
  {
    id: "2",
    alt: "Icon Tailored",
    image: icoTailored,
    title: "Personnalisation",
    text: "Adaptez l'interface à vos besoins spécifiques pour une expérience utilisateur optimale et personnalisée.",
  },
  {
    id: "3",
    alt: "Icon Statistic",
    image: icoStatistic,
    title: "Analytiques",
    text: "Accédez à des rapports détaillés et des analyses avancées pour suivre la croissance de votre entreprise.",
  },
  {
    id: "4",
    alt: "Icon Profiles",
    image: icoProfiles,
    title: "Gestion des profils",
    text: "Créez et gérez facilement les profils utilisateurs avec différents niveaux d'accès et de permissions.",
  },
  {
    id: "5",
    alt: "Icon Folders",
    image: icoFolders,
    title: "Organisation",
    text: "Structurez vos projets et vos fichiers de manière logique pour une meilleure productivité au quotidien.",
  },
];

export const bulletPoints = [
  {
    id: "0",
    alt: "Saas Bullet Point 1",
    image: bulletPoint1,
    width: 550,
    height: 300,
    title: "How does it work?",
    text: "Our landing page template works on all devices, so you only have to set it up once and get beautiful results.",
  },
  {
    id: "1",
    alt: "Saas Bullet Point 2",
    image: bulletPoint2,
    width: 542,
    height: 348,
    title: "How does it work?",
    text: "Our landing page template works on all devices, so you only have to set it up once and get beautiful results.",
  },
  {
    id: "2",
    alt: "Saas Bullet Point 3",
    image: bulletPoint3,
    width: 550,
    height: 300,
    title: "How does it work?",
    text: "Our landing page template works on all devices, so you only have to set it up once and get beautiful results.",
  },
];

export const pricing = [
  {
    id: "0",
    plan: "Free",
    amount: 0,
    featured: false,
    features: [
      "7,000,000+ Events",
      "4 Custom Domains",
      "Dedicated Support Agent",
      "12 Months Data History",
      "1 Dedicated SSL",
    ],
  },
  {
    id: "1",
    plan: "basic",
    amount: 23,
    featured: true,
    features: [
      "7,000,000+ Events",
      "4 Custom Domains",
      "Dedicated Support Agent",
      "12 Months Data History",
      "1 Dedicated SSL",
    ],
  },
  {
    id: "2",
    plan: "Premium",
    amount: 59,
    featured: false,
    features: [
      "7,000,000+ Events",
      "4 Custom Domains",
      "Dedicated Support Agent",
      "12 Months Data History",
      "1 Dedicated SSL",
    ],
  },
];

export const social = [
  {
    id: "0",
    ico: icoFacebook,
    alt: "Facebook",
    link: "#/",
  },
  {
    id: "1",
    ico: icoX,
    alt: "X",
    link: "#/",
  },
  {
    id: "2",
    ico: icoInstagram,
    alt: "Instagram",
    link: "#/",
  },
  {
    id: "3",
    ico: icoLinkedin,
    alt: "Linkedin",
    link: "#/",
  },
];
