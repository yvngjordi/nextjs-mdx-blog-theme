import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/logo.PNG",
  siteUrl: "https://spark.study",
  siteName: "Spark Study Blog",
  siteDescription:
    "Spark Study blog page.",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    twitter: "https://twitter.com/sparkstudy",
    linkedin: "https://www.linkedin.com/in/company/sparkstudy/",
    instagram: "https://www.instagram.com/sparkstudy/",
  },
};
export default siteConfig;
