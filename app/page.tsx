import About from "./components/about";
import Hero from "./components/hero";
import Prefooter from "./components/pre-footer";
import Services from "./components/services";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Prefooter />
    </main>
  );
}
