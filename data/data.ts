import {
  Company,
  ExploreWorld,
  Article,
  NewFeature,
  Social,
} from "./data.interface";

export const companies: Company[] = [
  {
    name: "Search Engine Land",
    imgUrl: "/Company01.png",
  },
  {
    name: "Drift",
    imgUrl: "/Company02.png",
  },
  {
    name: "Forbes",
    imgUrl: "/Company03.png",
  },
  {
    name: "Elementor",
    imgUrl: "/Company04.png",
  },
  {
    name: "Appsflyer",
    imgUrl: "/Company05.png",
  },
  {
    name: "Gansevoort",
    imgUrl: "/Company06.png",
  },
];

export const exploreWorlds: ExploreWorld[] = [
  {
    id: "world-1",
    imgUrl: "/Planet01.png",
    title: "Week 1",
    subtitle: "Get acquainted",
    description:
      "First dates aren't easy. But what we know is that we both swiped right. We begin our journey together by identifying what your goals are and how we can help. No ghosting allowed 👻",
  },
  {
    id: "world-2",
    imgUrl: "/Planet02.png",
    title: "Week 2",
    subtitle: "Pull out the stethoscope",
    description:
      "Through social listening, competitive research, and meeting your internal product experts with your team, we'll diagnose your key challenges and unearth opportunities for growth.",
  },
  {
    id: "world-3",
    imgUrl: "/Planet03.png",
    title: "Week 3",
    subtitle: "Document the damn strategy",
    description:
      "We then gather all our learnings from week 2 into a documented strategy, which is broken down into four parts: content plan, technical audit, voice guide, and distribution plan.",
  },
  {
    id: "world-4",
    imgUrl: "/Planet04.png",
    title: "Week 4",
    subtitle: "Kick the content machine into gear",
    description:
      "Once aligned, our content team will begin the content production process. We'll simultaneously set up foundational reporting dashboards so we can track and measure progress. Transparency is 🔑.",
  },
  {
    id: "world-5",
    imgUrl: "/Planet05.png",
    title: "Week 5+",
    subtitle: "Trim the fat and turn up the heat",
    description:
      "Content marketing is an ongoing testing process. We'll double (or quadruple) down on things that work.",
  },
];

export const startingFeatures: string[] = [
  "Find a world that suits you and you want to enter",
  "Enter the world by reading basmalah to be safe",
  "No need to beat around the bush, just stay on the gas and have fun",
];

export const newFeatures: NewFeature[] = [
  {
    imgUrl: "/VrPano.svg",
    title: "A new world",
    subtitle:
      "We have a variety of virtual worlds for you to explore and play around",
  },
  {
    imgUrl: "/Headset.svg",
    title: "Realistic",
    subtitle:
      "In the latest update, our virual worlds are focused more realistic than ever",
  },
];

export const articles: Article[] = [
  {
    imgUrl: "/Article01.png",
    title: "Content Driven Sales: Strategies, Formats, and Tips that Work!",
    subtitle: "Content Strategy - March 15, 2022",
  },
  {
    imgUrl: "/Article02.png",
    title:
      "Guide: How to easily earn content marketing buy-in across your organization",
    subtitle: "Content Strategy - March 15, 2022",
  },
  {
    imgUrl: "/Article03.png",
    title: "How Yuta Media Creates Content That Matters",
    subtitle: "Content Strategy - March 15, 2022",
  },
];

export const socials: Social[] = [
  {
    name: "twitter",
    url: "/Twitter.svg",
  },
  {
    name: "linkedin",
    url: "/Linkedin.svg",
  },
  {
    name: "instagram",
    url: "/Instagram.svg",
  },
  {
    name: "facebook",
    url: "/Facebook.svg",
  },
];
