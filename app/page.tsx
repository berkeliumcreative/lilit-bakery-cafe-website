// @ts-nocheck
"use client";

import content from "../data/content.json";
import { HeroCentered } from "@/components/ui/hero-centered";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlurFade } from "@/components/ui/blur-fade";
import { ServiceGrid } from "@/components/ui/service-grid";
import { GalleryStrip } from "@/components/ui/gallery-strip";
import { TestimonialGrid } from "@/components/ui/testimonial-grid";
import { HoursTable } from "@/components/ui/hours-table";
import { MapEmbed } from "@/components/ui/map-embed";
import { CTABanner } from "@/components/ui/cta-banner";
import { StatsSection } from "@/components/ui/stats-section";
import { FooterMinimal } from "@/components/ui/footer-minimal";
import { AccentLine } from "@/components/ui/accent-line";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroCentered
        heading={content.hero.heading}
        subheading={content.hero.subheading}
        ctaText={content.hero.ctaText}
        ctaLink={content.hero.ctaLink}
      />

      <StatsSection
        stats={[
          { label: "Google Rating", value: 4.5 },
          { label: "Happy Reviews", value: 1425 },
          { label: "Fresh Daily Items", value: 50 },
          { label: "Years of Baking", value: 10 },
        ]}
      />

      <AccentLine />

      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <BlurFade delay={0.1}>
          <SectionHeading title={content.about.heading} />
          {content.about.paragraphs.map((p: string, i: number) => (
            <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </BlurFade>
      </section>

      <section id="bakery" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <SectionHeading title="What We Offer" subtitle="From our ovens to your table" />
        <ServiceGrid services={content.services.map((s: any) => ({ title: s.title, description: s.description }))} columns={3} />
      </section>

      <GalleryStrip images={[
        "/images/photo-1.jpg",
        "/images/photo-2.jpg",
        "/images/photo-3.jpg",
        "/images/photo-4.jpg",
        "/images/photo-5.jpg",
      ]} />

      <section className="py-20 md:py-28 max-w-6xl mx-auto px-6">
        <SectionHeading title="What Our Customers Say" />
        <TestimonialGrid
          testimonials={content.reviews?.map((r: any) => ({
            quote: r.text,
            author: r.name,
            role: "Verified Customer",
            rating: r.rating,
          })) || []}
          columns={2}
        />
      </section>

      <CTABanner
        heading="Order a Custom Cake"
        subheading="From birthdays to weddings — let us create something unforgettable for your celebration."
        ctaText="Call to Order"
        ctaLink={"tel:" + content.contact.phone}
      />

      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading title="Hours & Location" />
          <HoursTable hours={content.contact.hours} />
          <p className="text-muted-foreground mt-6">{content.contact.address}</p>
          <p className="text-muted-foreground mt-1">
            <a href={"tel:" + content.contact.phone} style={{ color: "var(--theme-accent)" }}>
              {content.contact.phone}
            </a>
          </p>
        </div>
        <MapEmbed query={content.contact.mapEmbedQuery} />
      </section>

      <FooterMinimal businessName={content.businessName} />
    </main>
  );
}
