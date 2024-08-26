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
      <div className="grid grid-cols-[1fr_1.5fr_1fr] text-sm">
        <div className="flex flex-col gap-20">
          <div className="flex gap-2 items-start">
            <div className="w-[60px]">
              <AdmSupport width={60} height={60} fill="#2d9999" />
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
              <VisaTravel width={60} height={60} stroke="#2d9999" />
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
        </div>
        <div>
          <Image
            src="/doctorduet.webp"
            width={500}
            height={400}
            alt="doctor image"
          />
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex gap-2">
            <div className="w-[60px]">
              <Coaching width={60} height={60} fill="#2d9999" />
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
              <Hostels width={60} height={60} stroke="#2d9999" />
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
