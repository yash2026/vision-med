"use client";
import Image, { StaticImageData } from "next/image";
import imageOne from "./images/1.jpg";
import imageTwo from "./images/2.jpg";
import imageThree from "./images/3.jpg";
import imageFour from "./images/4.jpg";
import imageFive from "./images/5.jpg";
import imageSix from "./images/6.jpg";
import imageSeven from "./images/7.jpg";
import imageEight from "./images/8.jpg";
import imageNine from "./images/9.jpg";
import imageTen from "./images/10.jpg";
import imageEleven from "./images/11.jpg";
import imageTwele from "./images/12.jpg";
import imageThirteen from "./images/13.jpg";
import imageFourteen from "./images/14.jpg";
import imageFifteen from "./images/15.jpg";
import imageSixteen from "./images/16.jpg";
import { useState } from "react";
import GalleyModal from "./galley-modal";
import TruthyRenderer from "../truthy-renderer";

const imagesData = [
  imageEight,
  imageEleven,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageSix,
  imageFive,
  imageSeven,
  imageNine,
  imageTen,
  imageTwele,
  imageThirteen,
  imageFourteen,
  imageFifteen,
  imageSixteen,
];
export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mt-7 max-[500px]:grid-cols-2">
        {imagesData.map((img, index) => (
          <button key={index} onClick={() => setSelectedImage(index)}>
            <Image
              src={img}
              width={200}
              height={200}
              className="w-full h-full"
              style={{ objectFit: "cover" }}
              alt="image"
            />
          </button>
        ))}
      </div>
      <TruthyRenderer value={selectedImage !== null}>
        <GalleyModal
          setImageState={setSelectedImage}
          images={imagesData}
          selectedIndex={selectedImage}
        />
      </TruthyRenderer>
    </>
  );
}
