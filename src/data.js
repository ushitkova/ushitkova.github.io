import ussCover from "../assets/uss/uss_cover.png";
import ussResearch from "../assets/uss/user_survey_2.png";
import ussProcess from "../assets/uss/card_sorting_1.png";
import ussDesktop from "../assets/uss/user_interface.png";
import ussMobile from "../assets/uss/mobile.png";
import sugarwishCover from "../assets/sugarwish/sugarwish_cover.png";
import sugarwishResearch from "../assets/sugarwish/research.png";
import sugarwishJourney from "../assets/sugarwish/user_journey.png";
import sugarwishDesktop from "../assets/sugarwish/user_interface.png";
import sugarwishMobile from "../assets/sugarwish/mobile.png";

export const projects = [
  {
    slug: "uss",
    eyebrow: "Student services · 5 weeks",
    title: "Building trust between students and their representatives",
    shortTitle: "University Student Assembly",
    summary: "A service platform for UKIM students to find reliable information, understand the assembly’s work, and report academic problems through one official channel.",
    cover: ussCover,
    accent: "coral",
    meta: [
      ["Focus", "Research, IA, responsive UI"],
      ["Audience", "Current and future UKIM students, ages 16–24"],
      ["Scope", "50+ pages across desktop and mobile"],
    ],
    challenge: "The University Student Assembly communicated mainly through social media. Students knew it existed, but often did not understand its role, trust its influence, or know how to reach it when they needed help.",
    job: "When I run into an academic or administrative problem, I need one credible place to find guidance and contact the right representative, so I can act without queueing or searching across scattered channels.",
    evidence: [
      "25 open-ended interviews explored enrollment, student services, rights, and perceptions of the assembly.",
      "80% of surveyed students relied on the internet for study-related information.",
      "40% named unavailable professors as a frequent issue; 31% cited queues for student questions.",
      "Students wanted email, social channels, and an official platform—not another isolated source.",
    ],
    researchImage: ussResearch,
    researchAlt: "Survey charts about common student problems and awareness of the student assembly",
    decisions: [
      ["Make service visible", "Put reporting and frequently asked questions in the main journey instead of hiding them behind institutional content."],
      ["Design for orientation", "Use card sorting and a clear information architecture to group representatives, rights, news, events, and services."],
      ["Close the loop", "Give students a direct way to submit a problem and understand what happens after it is raised."],
    ],
    processImage: ussProcess,
    processAlt: "Card sorting exercise used to shape the student platform information architecture",
    solution: "The concept combines an approachable public-facing website with a service layer: students can learn who represents them, browse decisions and events, submit a problem, and participate in polls from desktop or mobile.",
    desktopImage: ussDesktop,
    desktopAlt: "Desktop screens for the University Student Assembly platform",
    mobileImage: ussMobile,
    mobileAlt: "Mobile screens for the University Student Assembly platform",
    impactLabel: "Expected impact",
    impact: "The original study did not include post-launch analytics, so the outcome is framed as a design hypothesis: a single official channel should reduce time-to-information and make participation easier. The next step would be task-based usability testing followed by service metrics such as successful submissions, response time, and repeated visits.",
  },
  {
    slug: "sugarwish",
    eyebrow: "E-commerce · 4 weeks",
    title: "Making a complex gifting flow feel simple and joyful",
    shortTitle: "Sugarwish gifting flow",
    summary: "A responsive redesign of the “Send a Sugarwish” journey, created to support a growing catalog without making gift selection harder for buyers.",
    cover: sugarwishCover,
    accent: "teal",
    meta: [
      ["Focus", "Flow redesign, research, responsive UI"],
      ["Audience", "Personal buyers, corporate buyers, and recipients"],
      ["Scope", "20+ screens within an existing design system"],
    ],
    challenge: "As Sugarwish expanded from three product categories to seven, the ordering flow became harder to scale. The redesign needed to reduce abandonment and improve usability while staying within the existing brand and design system.",
    job: "When I want to send a thoughtful gift, I need to understand the choices and move through the order quickly, so the experience feels generous—not like administration.",
    evidence: [
      "30% of documented product-page issues related to missing filters.",
      "27% related to a complicated or confusing ordering process.",
      "Participants called out missing product details, unclear e-card language, and a flow that could take around 15 minutes.",
      "The research separated personal buyers, corporate buyers, and recipients because each enters with a different goal.",
    ],
    researchImage: sugarwishResearch,
    researchAlt: "Research chart showing key usability issues in the Sugarwish product page",
    decisions: [
      ["Show progress", "Turn the flow into three explicit stages—choose an e-card, create a gift, share happiness—so users always know where they are."],
      ["Reduce choice friction", "Add filters, clearer product categories, helpful prompts, and a persistent order summary."],
      ["Design mobile-first moments", "Move dense desktop controls into focused mobile steps, cards, and contextual panels."],
    ],
    processImage: sugarwishJourney,
    processAlt: "User journey documenting actions, goals, touchpoints, and emotional state",
    solution: "The redesigned flow keeps the playful brand but gives it stronger structure. Clear stages, filtering, product details, helpful tips, and a visible basket make the order easier to understand on both desktop and mobile.",
    desktopImage: sugarwishDesktop,
    desktopAlt: "Desktop screens for the redesigned Sugarwish gifting flow",
    mobileImage: sugarwishMobile,
    mobileAlt: "Mobile screens for the redesigned Sugarwish gifting flow",
    impactLabel: "Reflection",
    impact: "This study strengthened the connection between research and interface decisions, especially in e-commerce. Because no production experiment or conversion data was supplied, success should be validated with completion rate, time on task, error rate, and abandonment by step before claiming business impact.",
  },
];
