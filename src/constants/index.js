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
    alt: "Interface intuitive",
    image: bulletPoint1,
    width: 550,
    height: 300,
    title: "Interface intuitive",
    text: "Notre plateforme a été conçue pour être simple d'utilisation. En quelques clics, créez et gérez vos projets facilement.",
  },
  {
    id: "1",
    alt: "Collaboration en temps réel",
    image: bulletPoint2,
    width: 542,
    height: 348,
    title: "Collaboration en temps réel",
    text: "Travaillez en équipe efficacement avec nos outils de collaboration qui permettent des mises à jour instantanées et une communication fluide.",
  },
  {
    id: "2",
    alt: "Analyses avancées",
    image: bulletPoint3,
    width: 550,
    height: 300,
    title: "Analyses détaillées",
    text: "Accédez à des tableaux de bord complets et des rapports personnalisés pour suivre vos performances et prendre des décisions éclairées.",
  },
];

export const pricing = [
  {
    id: "0",
    plan: "Essentiel",
    amount: 0,
    featured: false,
    features: [
      "Jusqu'à 3 utilisateurs",
      "5 Go de stockage cloud",
      "Support par email",
      "Rapports de base",
      "1 domaine personnalisé",
    ],
  },
  {
    id: "1",
    plan: "Professionnel",
    amount: 29,
    featured: true,
    features: [
      "Jusqu'à 15 utilisateurs",
      "50 Go de stockage cloud",
      "Support prioritaire",
      "Rapports avancés",
      "3 domaines personnalisés",
    ],
  },
  {
    id: "2",
    plan: "Entreprise",
    amount: 59,
    featured: false,
    features: [
      "Utilisateurs illimités",
      "Stockage illimité",
      "Support 24/7",
      "Analyses avancées",
      "Domaines personnalisés illimités",
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
