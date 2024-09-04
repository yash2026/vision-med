"use client";
import useEmblaCarousel from "embla-carousel-react";
import carsouselImageOne from "./images/Carousel-image-1.png";
import carsouselImageTwo from "./images/Carousel-image-2.png";
import carsouselImageThree from "./images/Carousel-image-3.png";
import carsouselImageFour from "./images/Carousel-image-4.png";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect } from "react";

const imagesCarousel = [
  carsouselImageOne,
  carsouselImageTwo,
  carsouselImageThree,
  carsouselImageFour,
];

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <div
      className="overflow-hidden h-[60vh] max-[1200px]:h-[50vh] max-[1000px]:h-[40vh] max-[800px]:h-[30vh] max-[500px]:h-[30vh]"
      ref={emblaRef}
    >
      <div className="flex h-full">
        {imagesCarousel?.map((img, index) => (
          <div key={index} className="flex-[0_0_100%]">
            <Image
              // width={500}
              // height={500}
              className="w-full h-full"
              src={img}
              alt="carousel image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
