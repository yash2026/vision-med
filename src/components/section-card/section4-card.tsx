import Image from "next/image";
import WidthWrapper from "../width-wrapper";
import * as Section4Layout from "./section-card";

function Section4card() {
  return (
    <WidthWrapper className="max-[1250px]:px-10 max-[600px]:px-4">
      <Section4Layout.Root className="pt-12">
        <Section4Layout.FlexChildLayout className="flex flex-col gap-4 leading-9 text-sm">
          <Section4Layout.ContentHeading className="text-[25px]">
            Bukovinian State Medical University, Ukraine
          </Section4Layout.ContentHeading>
          <p>
            Bukovinian State Medical University (BSMU) is one of the largest
            higher educational establishments in Chernivtsi, Ukraine. Bukovinian
            State Medical University was founded in 1944. It is a fully
            governmental multistructural educational institution of the highest
            level of accreditation providing educational programmes of different
            levels. BSMU was included into the general register of the WHO,
            Magna Charta Universitatum (Bologna, Italy), European University
            Association (EUA), Association of the Carpathian Region
            Universities.
          </p>
          <p>
            Over the years of its existence (1944-2022) the University has
            trained more than 31 000 specialists including the following
            specialties: General Medicine, Dentistry, Pharmacy, Nursing,
            Pediatrics, Medical Psychology, Clinical Pharmacy.
          </p>
        </Section4Layout.FlexChildLayout>
        <Section4Layout.FlexChildLayout className="max-[880px]:self-center ">
          <Image
            src="/images/Bukovinian-Ukraine.jpg"
            alt="Welcome Image"
            width="500"
            height="500"
            className="rounded-lg"
          />
        </Section4Layout.FlexChildLayout>
      </Section4Layout.Root>
    </WidthWrapper>
  );
}

export default Section4card;
