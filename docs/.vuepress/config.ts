import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",

  lang: "zh-CN",
  title: "",
  description: "",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
