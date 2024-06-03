"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
    src: "/images/image1.jpeg",
    title: "Hospital Women Staff",
    description: "",
  },
  {
    src: "/images/image2.jpeg",
    title: "Hospital Staff",
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
    <section className="">
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
                  className={`absolute p-4 bottom-0 right-0 m-8 rounded-lg bg-blue-600/80`}
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
      </Carousel>
    </section>
  );
};

export default Hero;
