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
    title: "Content Strategy",
  },
  {
    id: "world-2",
    imgUrl: "/Planet02.png",
    title: "Copywriting",
  },
  {
    id: "world-3",
    imgUrl: "/Planet03.png",
    title: "Content Distribution",
  },
  {
    id: "world-4",
    imgUrl: "/Planet04.png",
    title: "Content Design",
  },
  {
    id: "world-5",
    imgUrl: "/Planet05.png",
    title: "SEO",
  },
  {
    id: "world-5",
    imgUrl: "/Planet05.png",
    title: "SEM & PPC",
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
