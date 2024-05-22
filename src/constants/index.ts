// import {
//     benefitIcon1,
//     benefitIcon2,
//     benefitIcon3,
//     benefitIcon4,
//     benefitImage2,
//     chromecast,
//     disc02,
//     discord,
//     discordBlack,
//     facebook,
//     figma,
//     file02,
//     framer,
//     homeSmile,
//     instagram,
//     notification2,
//     notification3,
//     notification4,
//     notion,
//     photoshop,
//     plusSquare,
//     protopie,
//     raindrop,
//     recording01,
//     recording03,
//     roadmap1,
//     roadmap2,
//     roadmap3,
//     roadmap4,
//     searchMd,
//     slack,
//     sliders04,
//     telegram,
//     twitter,
//     yourlogo,
//   } from "../../public/assets";

import { 
    faIgloo,
    faPaste,
    faSearch,
    faPlusSquare,
    faQuestion,
    faUpDownLeftRight,
    faNetworkWired,
    faTruckFast,
    faMessage,
    faSquareRss,
    faCompactDisc,
    faMicrophone,
    faSliders,
    faPodcast, 
} from '@fortawesome/free-solid-svg-icons';


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

export const heroIcons = [faIgloo, faPaste, faSearch, faPlusSquare];

export const notificationImages = ['/static/notification/image-2.png', '/static/notification/image-3.png', '/static/notification/image-4.png'];

export const companyLogos = [
    { 
        id: 1,
        name: "YouTube",
        src: '/icons/youtube.png',
        class: 'icon-youtube'
    },
    { 
        id: 2,
        name: "Instagram",
        src: '/icons/instagram.png',
        class: 'icon-instagram',
    },
    { 
        id: 3,
        name: "Facebook",
        src: '/icons/facebook.png',
        class: 'icon-facebook',
    },
    { 
        id: 4,
        name: "Twitter",
        src: '/icons/twitter.png',
        class: 'icon-twitter',
    },
    { 
        id: 5,
        name: "Telegram",
        src: '/icons/telegram.png',
        class: 'icon-telegram',
    }
];


export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
];

export const brainwaveServicesIcons = [
    faPodcast,
    faMicrophone,
    faCompactDisc,
    faSquareRss,
    faSliders,
];

export const roadmap = [
    {
        id: "0",
        title: "Voice recognition",
        text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
        date: "May 2023",
        status: "done",
        imageUrl: "/static/roadmap/image-1.png",
        colorful: true,
    },
    {
        id: "1",
        title: "Gamification",
        text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
        date: "May 2023",
        status: "progress",
        imageUrl: "/static/roadmap/image-2.png"
    },
    {
        id: "2",
        title: "Chatbot customization",
        text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
        date: "May 2023",
        status: "done",
        imageUrl: "/static/roadmap/image-3.png",
    },
    {
        id: "3",
        title: "Integration with APIs",
        text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
        date: "May 2023",
        status: "progress",
        imageUrl: "/static/roadmap/image-4.png",
    },
];
  


export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

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
        icon: '/icons/figma.png',
        width: 32,
        height: 32,
    },
    {
        id: "1",
        title: "Notion", 
        icon: '/icons/notion.png',
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: '/icons/discord.png',
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: '/icons/slack.png',
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: '/icons/photoshop.png',
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Protopie",
        icon: '/icons/protopie.png',
        width: 28,
        height: 32,
    },
    {
        id: "6",
        title: "Framer",
        icon: '/icons/framer.png',
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Raindrop",
        icon: '/icons/raindrop.png',
        width: 38,
        height: 32,
    },
];

export const pricing = [
    {
        id: "0",
        title: "Basic",
        description: "AI chatbot, personalized recommendations",
        price: "0",
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
    {
        id: "1",
        title: "Premium",
        description: "Advanced AI chatbot, priority support, analytics dashboard",
        price: "9.99",
        features: [
            "An advanced AI chatbot that can understand complex queries",
            "An analytics dashboard to track your conversations",
            "Priority support to solve issues quickly",
        ],
    },
    {
        id: "2",
        title: "Enterprise",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        price: null,
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
];

export const benefits = [
    {
        id: "0",
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "assets/benefits/card-1.svg",
        icon: faQuestion,
        imageUrl: '/static/features/image-1.jpg',
    },
    {
        id: "1",
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "assets/benefits/card-2.svg",
        icon: faUpDownLeftRight,
        imageUrl: '/static/features/image-1.jpg',
        light: true,
    },
    {
        id: "2",
        title: "Connect everywhere",
        text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
        backgroundUrl: "assets/benefits/card-3.svg",
        icon: faNetworkWired,
        imageUrl: '/static/features/image-1.jpg',
    },
    {
        id: "3",
        title: "Fast responding",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "assets/benefits/card-4.svg",
        icon: faTruckFast,
        imageUrl: '/static/features/image-1.jpg',
        light: true,
    },
    {
        id: "4",
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "assets/benefits/card-5.svg",
        icon: faMessage,
        imageUrl: '/static/features/image-1.jpg',
    },
    {
        id: "5",
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "assets/benefits/card-6.svg",
        icon: faPlusSquare,
        imageUrl: '/static/features/image-1.jpg',
    },
];
/** 
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

*/