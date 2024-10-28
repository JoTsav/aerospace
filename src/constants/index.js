import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true, 
  },
];

export const heroIcons =[homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Innovative Space Technology for a New Era of Exploration",
  "Next-Generation Aerospace Solutions",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice Command Recognition",
    text: "Allow users to interact hands-free, like true pilots in the cockpit. The AI co-pilot responds to voice commands, making navigation through the app smooth and effortless.",
    date: "November 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Mission Control Gamification",
    text: "Incorporate mission-style challenges, achievements, and leaderboards to inspire user engagement. Each level brings new aviation-themed rewards, pushing users to explore further.",
    date: "November 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Cockpit  customization",
    text: "Give users the tools to personalize their AI co-pilot’s interface and behavior, creating a more engaging and immersive experience for all aerospace needs.",
    date: "November 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Flight Path Integration",
    text: "Seamlessly connect the co-pilot with aviation networks, weather data, and aerospace communication tools. Enable real-time updates and optimized performance through advanced API integrations.",
    date: "November 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With seamless integration and cutting-edge automation, AAA’s aerospace technology stands at the forefront of scientific and exploratory excellence, preparing for missions that redefine the possibilities of space.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Perfect for aviation enthusiasts beginning their journey",
    price: "0",
    features: [
      "Intelligent Flight Assistant: Get basic answers to your aviation queries",
      "Flight Path Recommendations: Suggestions tailored to your aerospace interests",
      "Explore the Skies: Free access to features to help you get started",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced support for serious aviators and industry professionals",
    price: "9.99",
    features: [
      "Enhanced Co-Pilot AI: Answers complex aviation and aeronautics queries",
      "Flight Log Dashboard: Track your interactions and analytics",
      "Priority Turbulence Assistance: Fast support to resolve any issuesy",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Complete control for large aviation teams and enterprises",
    price: null,
    features: [
      "Tailored Flight Intelligence AI: Customized AI solutions for your specific aerospace needs.",
      "Aviation Analytics Suite: Advanced insights and analytics.",
      "Mission Support: Dedicated assistance to guide your fleet.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Unleash Potential",
    text: "Empowering breakthroughs in aerospace with cutting-edge technology and expertise.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Advance Every Day",
    text: "Leveraging advanced research and innovation to push the boundaries of space travel and exploration.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Global Connectivity",
    text: "Bridging distances and connecting people worldwide through reliable satellite and launch solutions.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Rapid Response",
    text: "Our team ensures timely and effective solutions, designed for the dynamic world of aerospace technology.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Pioneering Exploration",
    text: "Transforming space exploration into reality, one mission at a time.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Innovation-Driven",
    text: "Driven by a passion for innovation, we design technologies that shape the future of space.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
