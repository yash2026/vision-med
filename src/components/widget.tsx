import Callicon from "@/icons/callicon";
import Facebookicon from "@/icons/facebookicon";
import Linkedinicon from "@/icons/linkedinicon";
import Twittericon from "@/icons/twittericon";
import { Button } from "@nextui-org/react";
import React, { ReactNode } from "react";

function Widget() {
  return (
    <>
      <Button
        variant="solid"
        color="warning"
        className="fixed -right-[40px] bottom-[45%] -rotate-90 text-black/50 font-bold"
      >
        Quick Enquiry
      </Button>
      <div className="flex flex-col gap-5 fixed right-0 bottom-[10%]">
        <div className="flex flex-col gap-1 items-center">
          <SameStyleButton>
            <Facebookicon /> <span className="font-bold">Facebook</span>
          </SameStyleButton>
          <SameStyleButton>
            <Twittericon /> <span className="font-bold">Twitter</span>
          </SameStyleButton>
          <SameStyleButton>
            <Linkedinicon /> <span className="font-bold">Linkedin</span>
          </SameStyleButton>
          <SameStyleButton>
            <Callicon /> <span className="font-bold">Phone</span>
          </SameStyleButton>
        </div>
      </div>
    </>
  );
}

function SameStyleButton({ children }: { children: ReactNode }) {
  return (
    <Button
      variant="solid"
      color="primary"
      className="w-[200px] flex items-center gap-3 justify-start rounded-3xl translate-x-[150px] hover:translate-x-[50px] pl-2"
    >
      {children}
    </Button>
  );
}

export default Widget;
