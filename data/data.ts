import { Company, Roadmap, Article, Social, Service } from "./data.interface";

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

export const roadmaps: Roadmap[] = [
  {
    id: "week-1",
    imgUrl: "/img01.jpg",
    title: "Week 1",
    subtitle: "Get acquainted",
    description:
      "First dates aren't easy. But what we know is that we both swiped right. We begin our journey together by identifying what your goals are and how we can help. No ghosting allowed 👻",
  },
  {
    id: "week-2",
    imgUrl: "/img02.jpg",
    title: "Week 2",
    subtitle: "Pull out the stethoscope",
    description:
      "Through social listening, competitive research, and meeting your internal product experts with your team, we'll diagnose your key challenges and unearth opportunities for growth.",
  },
  {
    id: "week-3",
    imgUrl: "/img03.jpg",
    title: "Week 3",
    subtitle: "Document the damn strategy",
    description:
      "We then gather all our learnings from week 2 into a documented strategy, which is broken down into four parts: content plan, technical audit, voice guide, and distribution plan.",
  },
  {
    id: "week-4",
    imgUrl: "/img04.jpg",
    title: "Week 4",
    subtitle: "Kick the content machine into gear",
    description:
      "Once aligned, our content team will begin the content production process. We'll simultaneously set up foundational reporting dashboards so we can track and measure progress. Transparency is 🔑.",
  },
  {
    id: "week-5",
    imgUrl: "/img05.jpg",
    title: "Week 5+",
    subtitle: "Trim the fat and turn up the heat",
    description:
      "Content marketing is an ongoing testing process. We'll double (or quadruple) down on things that work.",
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

export const services: Service[] = [
  {
    imgUrl: "/Service01.png",
    title: " Content Strategy",
    subtitle:
      "We help plan, create, measure, and optimize content strategies tied to tangible business goals.",
  },
  {
    imgUrl: "/Service02.png",
    title: "Copywriting",
    subtitle:
      "From ad copy to ebooks and everything in between, we take create content that makes a difference.",
  },
  {
    imgUrl: "/Service03.png",
    title: "Content Distribution",
    subtitle:
      "Content is king and distribution is queen. We make sure our content goes beyond your site and into the hands of your targeted readers.",
  },
  {
    imgUrl: "/Service04.png",
    title: " Content Design",
    subtitle:
      "We build, write, and optimize powerful landing pages, websites, and social content at scale.",
  },
  {
    imgUrl: "/Service05.png",
    title: "SEO",
    subtitle:
      "We rigorously audit every piece of content we produce, and provide the knowledge and tools you need to rank higher, faster.",
  },
  {
    imgUrl: "/Service06.png",
    title: "SEM & PPC",
    subtitle:
      "We help craft and manage powerful content-driven paid campaigns that build trust and drive conversions.",
  },
];

export const socials: Social[] = [
  {
    name: "twitter",
    url: "/twitter.svg",
  },
  {
    name: "linkedin",
    url: "/linkedin.svg",
  },
  {
    name: "instagram",
    url: "/instagram.svg",
  },
  {
    name: "facebook",
    url: "/facebook.svg",
  },
];
