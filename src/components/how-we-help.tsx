import React from "react";
import WidthWrapper from "./width-wrapper";
import AdmSupport from "@/icons/admSupport";
import Image from "next/image";
import Coaching from "@/icons/coaching";
import Hostels from "@/icons/hostels";
import VisaTravel from "@/icons/visaTravel";

function Howhelp() {
  return (
    <WidthWrapper>
      <div className="flex flex-col items-center text-sm gap-2 leading-7">
        <h3 className="font-bold text-[25px]">HOW DO WE HELP?</h3>
        <p className="mb-20 text-center">
          MBBS With The Vision Medicos for Indian students promises unmatchable
          scope and opportunities. At Rus Education, we aim to make the best out
          of your stay and learning abroad with our exclusive services. Because
          we are there not only for your admission but also for your graduation!
        </p>
      </div>
      <div className="hidden max-[800px]:block mb-10">
        <Image
          src="/doctorduet.webp"
          width={500}
          height={400}
          className="max-w-[500px]"
          alt="doctor image"
        />
      </div>
      <div className="grid grid-cols-[1.5fr_3fr] max-[800px]:grid-cols-1 text-sm max-[550px]:gap-4">
        <div className="max-[800px]:hidden">
          <Image
            src="/doctorduet.webp"
            width={500}
            height={400}
            alt="doctor image"
          />
        </div>
        <div className="grid grid-cols-2 gap-10 max-[490px]:grid-cols-1 max-[600px]:gap-4 max-[490px]:gap-10">
          <div className="flex gap-2 items-start">
            <div className="w-[60px]">
              <AdmSupport
                className="w-[60px] h-[60px] max-[500px]:w-[30px] max-[500px]:h-[30px]"
                fill="#2d9999"
              />
            </div>
            <div className="flex flex-col gap-4 leading-7">
              <p className="font-bold text-[25px] text-[#2f4688]">
                100% Admission Support
              </p>
              <p>
                From university selection to all the paperwork, we provide you
                with complete support for your admission.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-[60px]">
              <VisaTravel
                className="w-[60px] h-[60px] max-[500px]:w-[30px] max-[500px]:h-[30px]"
                stroke="#2d9999"
              />
            </div>

            <div className="flex flex-col gap-4 leading-7">
              <p className="font-bold text-[25px] text-[#2f4688]">
                Visa & Travel Arrangements
              </p>
              <p>
                Heckle free Visa procurement and best fared air travels, get the
                maximum benefits, throughout the course.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[60px]">
              <Coaching
                className="w-[60px] h-[60px] max-[500px]:w-[30px] max-[500px]:h-[30px]"
                fill="#2d9999"
              />
            </div>
            <div className="flex flex-col gap-4 leading-7">
              <p className="font-bold text-[25px] text-[#2f4688]">
                FMGE/NEXT Coaching
              </p>
              <p>
                Attend FMGE/NEXT Coaching during your study, within the
                university and get the best career guidance from the experts.
                make changes in the universtity.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[60px]">
              <Hostels
                className="w-[60px] h-[60px] max-[500px]:w-[30px] max-[500px]:h-[30px]"
                stroke="#2d9999"
              />
            </div>
            <div className="flex flex-col gap-4 leading-7">
              <p className="font-bold text-[25px] text-[#2f4688]">
                Hostels, Canteens & more
              </p>
              <p>
                Get comfy hostels, Indian canteens, and many other benefits
                during your stay in Russia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
}

export default Howhelp;
