import About from "@/components/about";
import Appointment from "@/components/appointment";
import Hero from "@/components/hero";
import Prefooter from "@/components/pre-footer";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Appointment />
    </main>
  );
}
