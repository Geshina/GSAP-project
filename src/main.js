// Imports
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import App from "./App.svelte";

// Svelte
const app = new App({
  target: document.body,
  props: {},
});
export default app;

// Lenis
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP
gsap.registerPlugin(ScrollTrigger);

// split-type
// const SplitTypes = document.querySelectorAll(".text-reveal");

// SplitTypes.forEach((char, i) => {
//   const text = new SplitType(char, {
//     types: "chars,words",
//   });

//   // GSAP
//   gsap.from(text.chars, {});
// });
