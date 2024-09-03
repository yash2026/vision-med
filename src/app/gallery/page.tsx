import { BreadcrumbsBuilder, PageHeading } from "@/components/common";
import GalleryPage from "@/components/gallery/gallery-page";
import WidthWrapper from "@/components/width-wrapper";

const breadsData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
];

export default function Page() {
  return (
    <WidthWrapper>
      <PageHeading className="mt-10">Gallery</PageHeading>
      <BreadcrumbsBuilder breads={breadsData} />
      <GalleryPage />
    </WidthWrapper>
  );
}
