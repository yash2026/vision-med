import BookAppointment from "@/components/book-appointment";
import WelcomeSection from "@/components/section-card/welcome-section";
import WidthWrapper from "@/components/width-wrapper";
import { ContentHeading } from "@/components/section-card/section-card";
import * as AboutPageLayout from "@/components/common-layout";
import SidebarLinkCard from "@/components/sidebar-link-card";

function Page() {
  return (
    <WidthWrapper>
      <div className="mt-24">
        <WelcomeSection />
        <AboutPageLayout.Root className="text-sm mt-20 gap-10">
          <AboutPageLayout.LeftSection className="flex flex-col gap-4">
            <ContentHeading className="text-[25px]">
              Some reasons which makes The MD House most trusted:
            </ContentHeading>

            <p className="leading-7">
              The MD House has been identified as the most trusted career
              partner by thousands of satisfied students and parents. Following
              are the reasons that gives The MD House an edge over others
            </p>
            <p className="leading-7">
              The MD House is having a team of most seasons, experienced, tried
              and tested career counselors.
            </p>
            <p className="leading-7">
              The MD House has the exceptionally good know – how of immigration
              laws, visa laws, large base of foreign partners for providing our
              students post landing to placement services.
            </p>
            <p className="leading-7">
              The MD House never hides any facts and truths.
            </p>
            <p className="leading-7">
              The MD House never charges any hidden expenses.
            </p>
            <p className="leading-7">
              The MD House provides very detailed and transparent information
              and advice.
            </p>
            <p className="leading-7">
              The MD House has excellent student- parent support system.
            </p>
            <p className="leading-7">
              The MD House was the first and oldest consultant started sending
              students to pursue
            </p>
            <p className="leading-7">
              The MD House and associates have successfully placed 2000+
              students from all over India to foreign destination for doing
              MBBS.
            </p>
          </AboutPageLayout.LeftSection>
          <AboutPageLayout.RightSection className="flex flex-col gap-5">
            <BookAppointment />
            <SidebarLinkCard
              heading="Top Countries For Indian Students To Study MBBS"
              links={[
                {
                  label: "Poland",
                  link: "#",
                },
                {
                  label: "Uzbekistan",
                  link: "#",
                },
                {
                  label: "Ukraine",
                  link: "#",
                },
              ]}
            />
          </AboutPageLayout.RightSection>
        </AboutPageLayout.Root>
      </div>
    </WidthWrapper>
  );
}

export default Page;
