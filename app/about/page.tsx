"use client";

import LogosSection from "@/components/LogosSection";
import FullImageSection from "@/components/FullImageSection";
import ImageWithTextSection from "@/components/ImageWithTextSection";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] flex flex-col">
          <SectionHeader heading="ABOUT THE" subheading="DEVELOPERS" />
      </section>

      {/* Logos Section */}
      <LogosSection />

      {/* Image with Fatir Developers Info */}
      <ImageWithTextSection
        imageUrl="/assets/about/Image1.png"
        imageAlt="Fatir Developers Building"
        // imageOverlayText="Fatir Developers: Over the past 73 years, FATIR has redefined the dynamics of property development, setting a benchmark for others across the country."
        logoUrl="/assets/home/pvt.png"
        logoAlt="Fatir Developers"
        text="By extending its expertise in master-planned real estate projects nationwide, FATIR has established a significant presence in the real estate across the nation. A master planner and leading property developer and provider of premier lifestyles, FATIR's strengths lie in its comprehensive capabilities in marketing, post-sales, and construction management, delivering outstanding and exceptional value to its clients"
        backgroundColor="#ffffff"
      />

      {/* Full Screen Building Image */}
      <FullImageSection
        imageUrl="/assets/about/Image2.png"
        imageAlt="Colorful Commercial Building"
        objectPosition="contain"
      />

      {/* Image with Falah Developers Info */}
      <ImageWithTextSection
        imageUrl="/assets/about/Image3.png"
        imageAlt="Falah Developers Interior"
        // imageOverlayText="With over 18 years of experience in Dubai’s real estate industry, Falah Developers is built on these values with a commitment to delivering projects that clients can trust, depend on, and take pride in."
        logoUrl="/assets/home/falah.png"
        logoAlt="Falah Developers"
        text="At Falah Developers, we don’t just build projects — we build trust, long-term relationships, and a legacy of integrity."
        backgroundColor="#ffffff"
      />

      <FullImageSection
        imageUrl="/assets/about/Image4.png"
        imageAlt="Falah Developers Building"
        objectPosition="contain"
      />

      {/* Image with Consortium Info */}
      <ImageWithTextSection
        imageUrl="/assets/about/Image5.png"
        imageAlt="DM Consortium Interior"
        // imageOverlayText="With over 18 years of experience in Dubai’s real estate industry, Falah Developers is built on these values with a commitment to delivering projects that clients can trust, depend on, and take pride in."
        logoUrl="/assets/home/consortium.png"
        logoAlt="DM Consortium"
        text="Prior to commencing vertical construction, DM Consortium achieved remarkable success with the completion of a Horizontal Development Project named Serene Farms, situated on Barki Road in Lahore."
        backgroundColor="#ffffff"
      />

      <FullImageSection
        imageUrl="/assets/about/Image6.png"
        imageAlt="DM Consortium Building"
        objectPosition="contain"
      />

    </div>
  );
}
