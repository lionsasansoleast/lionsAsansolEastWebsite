import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What are the visiting hours?",
    answer:
      "Our visiting hours are from 9:30 AM to 4:00 PM, Monday to Saturday. We are closed on Thursdays and public holidays.",
  },
  {
    question: "Do I need an appointment for a consultation?",
    answer:
      "Yes, we recommend scheduling an appointment to ensure timely consultation with our specialists. You can book an appointment online or call our reception.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of services including comprehensive eye exams, cataract surgery, glaucoma treatment, emergency eye care, and pediatric eye care.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Please bring a valid ID, your medical records, and any prescription glasses or contact lenses you use. If you have insurance, bring your insurance card as well.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major insurance plans. Please check with our reception for specific details regarding your insurance provider.",
  },
  {
    question: "How can I contact the hospital?",
    answer:
      "You can contact us via phone at 123-456-7890 or email us at contact@lionshospitalasansol.com. For emergencies, please visit our hospital directly.",
  },
];
const FAQs = () => {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto lg:px-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full mt-16">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={faq.question}>
              <AccordionTrigger className="flex justify-between items-center py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-left">{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="py-4">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
