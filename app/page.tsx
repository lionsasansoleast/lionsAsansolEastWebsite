import About from "@/components/about";
import ContactUs from "@/components/contact";
import FAQs from "@/components/faqs";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <ContactUs />
      <FAQs />
    </main>
  );
}
