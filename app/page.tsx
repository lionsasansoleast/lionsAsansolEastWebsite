import About from "@/components/about";
import Appointment from "@/components/appointment";
import FAQs from "@/components/faqs";
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
      <FAQs />
      <Appointment />
    </main>
  );
}
