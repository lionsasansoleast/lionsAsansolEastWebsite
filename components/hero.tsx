"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

type ImageProps = {
  src: string;
  title: string;
  description?: string;
};
const carouselImages: ImageProps[] = [
  {
    src: "/images/lions-family.jpg",
    title: "Welcome to Lions Eye Hospital Asansol",
    description: "",
  },
  {
    src: "/images/lions-hospital-front.jpg",
    title: "Lions Asansol East Eye Hospital",
    description: "",
  },
  {
    src: "/images/ambulance.jpeg",
    title: "Patient Transport",
    description: "",
  },
  {
    src: "/images/operation-theatre.jpeg",
    title: "Operation Theatre",
    description: "",
  },
  {
    src: "/images/image1.jpeg",
    title: "Hospital Women Staff",
    description: "",
  },
  {
    src: "/images/image3.jpeg",
    title: "Health checkup at a camp",
    description: "",
  },
  {
    src: "/images/image4.jpeg",
    title: "Patients after successful eye surgery",
    description: "",
  },
  {
    src: "/images/image5.jpeg",
    title: "Out patient department at hospital",
    description: "",
  },
  {
    src: "/images/image6.jpeg",
    title: "Eye checkup at a camp",
    description: "",
  },
];

const Hero = () => {
  return (
    <section className="relative">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="h-[600px] relative">
                <Image
                  src={image.src}
                  alt={image.title}
                  layout="fill"
                  objectFit="cover"
                />

                <div
                  className={`absolute p-4 bottom-0 right-0 m-8 rounded-lg bg-blue-800/80`}
                >
                  <div className="text-white">
                    <h2 className="text-2xl font-light">{image.title}</h2>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="right-4 bg-white/60 hover:bg-white" ></CarouselNext>
        <CarouselPrevious className="left-4 bg-white/60 hover:bg-white"/>
      </Carousel>
    </section>
  );
};

export default Hero;
