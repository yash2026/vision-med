import Callicon from "@/icons/callicon";
import Facebookicon from "@/icons/facebookicon";
import Linkedinicon from "@/icons/linkedinicon";
import Twittericon from "@/icons/twittericon";
import { Button } from "@nextui-org/react";
import React from "react";

function Widget() {
  return (
    <div>
      <Button>Quick Enquiry</Button>
      <div>
        <Button>
          <Facebookicon /> Facebook
        </Button>
        <Button>
          <Twittericon /> Twitter
        </Button>
        <Button>
          <Linkedinicon /> Linkedin
        </Button>
      </div>
      <Callicon />
    </div>
  );
}

export default Widget;
