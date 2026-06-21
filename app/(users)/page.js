import Hero from "./components_home/Hero";
import Intro from "./components_home/Intro";
import Process from "./components_home/Process";
import Showcase from "./components_home/Showcase";
import Testimonial from "./components_home/Testimonial";
import Inquiry from "./components_home/Inquiry";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Intro />
      <Process />
      <Showcase />
      <Testimonial />
      <Inquiry />
    </main>
  );
}
