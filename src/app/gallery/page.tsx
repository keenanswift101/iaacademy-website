import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery — Life at IA Academy",
  description: "Photos of student life, sports, and activities at Innovative Academics Academy in Windhoek, Namibia.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        title="Life at IA Academy"
        description="A glimpse into the environment, activities, and daily life that make IA Academy a place where children feel at home."
        breadcrumb={[{ label: "Gallery", href: "/gallery" }]}
      />
      <GalleryClient />
    </>
  );
}
