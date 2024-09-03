"use client";
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Arrow from "./arrow";

type GalleyModalProps = {
  images: StaticImageData[];
  setImageState: Dispatch<SetStateAction<number | null>>;
  selectedIndex: number | null;
};
export default function GalleyModal({
  images,
  setImageState,
  selectedIndex,
}: GalleyModalProps) {
  const [emblaRef, emblaThumbsApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (selectedIndex !== null) {
      emblaThumbsApi?.scrollTo(selectedIndex);
    }
  }, [emblaThumbsApi, selectedIndex]);

  return (
    <div
      onClick={() => setImageState(null)}
      className="fixed top-0 left-0 w-screen h-screen bg-black/80 z-10"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (!emblaThumbsApi) return;
          emblaThumbsApi.scrollPrev();
        }}
        className="absolute top-1/2 left-[10vh] max-[750px]:left-[3vh] -translate-y-1/2 text-white max-[600px]:hidden"
      >
        <Arrow fill="#fff" width={50} height={50} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (!emblaThumbsApi) return;
          emblaThumbsApi.scrollNext();
        }}
        className="absolute top-1/2 -translate-y-1/2 text-white right-[10vh] max-[750px]:right-[3vh] max-[600px]:hidden"
      >
        <Arrow fill="#fff" width={50} height={50} className="rotate-180" />
      </button>
      <div
        className="overflow-hidden w-[50%] max-[800px]:w-[80%] max-[500px]:w-full h-[50vh] max-[500px]:h-[70vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={(e) => e.stopPropagation()}
        ref={emblaRef}
      >
        <div className="flex h-full">
          {images.map((img, index) => (
            <div key={index} className="flex-[0_0_100%]">
              <Image
                key={index}
                src={img}
                width={200}
                height={200}
                className="w-full h-full"
                style={{ objectFit: "contain" }}
                alt="image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
