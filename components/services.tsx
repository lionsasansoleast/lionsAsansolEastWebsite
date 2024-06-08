import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { EyeIcon, Stethoscope, Syringe } from "lucide-react";

const services = [
  {
    title: "Comprehensive Eye Exams",
    description: "Detailed eye exams to assess your vision and eye health.",
    icon: <EyeIcon className="text-blue-500 w-12 h-12" />,
  },
  {
    title: "Cataract Surgery",
    description: "State-of-the-art cataract removal and lens implantation.",
    icon: <Syringe className="text-green-500 w-12 h-12" />,
  },
  {
    title: "Glaucoma Treatment",
    description: "Advanced treatments to manage and control glaucoma.",
    icon: <Stethoscope className="text-red-500 w-12 h-12" />,
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <CardHeader className="p-4 flex justify-center">
                {service.icon}
              </CardHeader>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter className="p-4 text-center flex justify-end">
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
