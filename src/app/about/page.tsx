"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import TimelineHorizontalCardStack from "@/components/cardStack/layouts/timelines/TimelineHorizontalCardStack";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Award, Heart, Zap, TrendingUp, Facebook } from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About Us", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "Locations", id: "locations" },
  ];

  const footerColumns = [
    {
      title: "Quick Links",      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "Gallery", href: "/" },
        { label: "Reviews", href: "/" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Order Online", href: "/" },
        { label: "Call Us", href: "tel:2397850423" },
        { label: "Locations & Hours", href: "/" },
        { label: "Contact", href: "/" },
      ],
    },
    {
      title: "Connect With Us",      items: [
        { label: "Facebook", href: "https://facebook.com/caribbeanflair" },
        { label: "About Us", href: "/about" },
        { label: "Privacy Policy", href: "/" },
        { label: "Terms of Service", href: "/" },
      ],
    },
    {
      title: "Located In",      items: [
        { label: "801 Leeland Heights Blvd W", href: "/" },
        { label: "Lehigh Acres, FL 33936", href: "/" },
        { label: "Open Until 9PM", href: "/" },
        { label: "Delivery Available", href: "/" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="compact"
      sizing="medium"
      background="none"
      cardStyle="inset"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Caribbean Flair"
          navItems={navItems}
          button={{
            text: "Order Now",            href: "/menu"}}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Our Caribbean Journey"
          description="Meet the visionaries behind Caribbean Flair: Teria Bryant and Deb Farrell. Bringing authentic island flavors and Black & women-owned excellence to Lehigh Acres."
          tag="About Our Story"
          tagIcon={Award}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Order Online Now",              href: "/menu"},
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-vector/summer-label-collectio_23-2148160410.jpg"
          imageAlt="Caribbean Flair Story"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="About us hero section"
        />
      </div>

      {/* Meet the Owners Section */}
      <div id="owners-spotlight" data-section="owners-spotlight">
        <TeamCardTwo
          title="Meet the Island Visionaries"
          description="Teria Bryant and Deb Farrell: Passionate Black-owned, women-owned entrepreneurs bringing authentic Caribbean soul to Lehigh Acres with decades of culinary expertise and community commitment."
          tag="Our Founders"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="two-columns-alternating-heights"
          members={[
            {
              id: "teria-bryant",              name: "Teria Bryant",              role: "Founder & Head Chef",              description:
                "Teria brings 15+ years of Caribbean culinary expertise and authentic island passion to every dish. Her vision transformed Caribbean Flair from a dream into a premium dining destination serving Lehigh Acres with pride. With deep roots in Jamaican cooking traditions, Teria ensures every plate delivers the bold flavors and soul that define our brand.",              imageSrc:
                "http://img.b2bpic.net/free-photo/medium-shot-professional-chef-working_23-2151232185.jpg?_wi=1",              imageAlt: "Teria Bryant, founder of Caribbean Flair",              socialLinks: [
                {
                  icon: Facebook,
                  url: "https://facebook.com/caribbeanflair"},
              ],
            },
            {
              id: "deb-farrell",              name: "Deb Farrell",              role: "Co-Owner & Operations Lead",              description:
                "Deb ensures every customer experience is smooth, welcoming, and unforgettable. Together with Teria, she's building a thriving Black- and women-owned business that celebrates Caribbean culture and community impact. With a passion for hospitality and business excellence, Deb has been instrumental in creating the warm, authentic atmosphere that defines Caribbean Flair.",              imageSrc:
                "http://img.b2bpic.net/free-photo/successful-business-woman-blue-suit_158595-5024.jpg?_wi=1",              imageAlt: "Deb Farrell, co-owner of Caribbean Flair",              socialLinks: [
                {
                  icon: Facebook,
                  url: "https://facebook.com/caribbeanflair"},
              ],
            },
          ]}
        />
      </div>

      {/* Brand Story Timeline */}
      <div id="brand-story" data-section="brand-story">
        <TimelineHorizontalCardStack
          title="Our Island Journey"
          description="From concept to community favorite: the authentic story of Caribbean Flair's growth and commitment to excellence."
          tag="Our Timeline"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Explore Our Menu",              href: "/menu"},
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        >
          <div className="flex gap-6 overflow-x-auto pb-6 px-4">
            {[
              {
                year: "2020",                milestone: "The Dream Begins",                description: "Teria and Deb unite their culinary passion and business vision to create Caribbean Flair, dreaming of bringing authentic island flavors to Lehigh Acres."},
              {
                year: "2021",                milestone: "Launch Day",                description: "Caribbean Flair opens its doors with a full menu of signature dishes, jerk specialties, and authentic Caribbean sides prepared fresh daily."},
              {
                year: "2022",                milestone: "Community Love",                description: "Rapidly becomes a local favorite. Customers praise the authenticity, quality, and genuine warmth of Teria and Deb's hospitality."},
              {
                year: "2023",                milestone: "Expansion & Recognition",                description: "Expanded menu offerings, grew customer base, and received recognition as a standout Black & women-owned business in the community."},
              {
                year: "2024",                milestone: "Island Excellence",                description: "Continues to deliver premium authentic Caribbean cuisine while expanding delivery options and growing community presence."},
            ].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-[var(--card)] rounded-lg p-6 border border-[var(--accent)]/20 hover:border-[var(--accent)]/50 transition-colors"
              >
                <div className="text-3xl font-bold text-[var(--primary-cta)] mb-2">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                  {item.milestone}
                </h3>
                <p className="text-[var(--foreground)]/70">{item.description}</p>
              </div>
            ))}
          </div>
        </TimelineHorizontalCardStack>
      </div>

      {/* Community Impact Section */}
      <div id="community-impact" data-section="community-impact">
        <FeatureCardTen
          title="Community Impact & Our Commitment"
          description="Caribbean Flair is more than a food truck—we're committed to celebrating Black and women-owned excellence, supporting local communities, and bringing authentic Caribbean culture to Lehigh Acres."
          tag="Community First"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Support Local",              href: "/menu"},
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              id: "authentic-flavors",              title: "Authentic Island Flavors",              description:
                "Every dish is prepared with traditional Jamaican techniques and the freshest ingredients, honoring Caribbean culinary heritage.",              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-2gw0wih3.jpg"},
              items: [
                {
                  icon: Award,
                  text: "Authentic recipes passed down through generations"},
                {
                  icon: TrendingUp,
                  text: "Fresh ingredients sourced with care"},
              ],
              reverse: false,
            },
            {
              id: "women-empowerment",              title: "Women & Black Business Excellence",              description:
                "As a Black & women-owned enterprise, we're proud to inspire our community and demonstrate the power of entrepreneurship, passion, and determination.",              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-wha24yfi.jpg"},
              items: [
                {
                  icon: Heart,
                  text: "Celebrating Black & women entrepreneurs"},
                {
                  icon: Zap,
                  text: "Building generational wealth through excellence"},
              ],
              reverse: true,
            },
            {
              id: "community-engagement",              title: "Community Engagement & Support",              description:
                "We're invested in our Lehigh Acres community, supporting local events, collaborations, and initiatives that strengthen our neighborhood.",              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-qcfdeh7f.jpg"},
              items: [
                {
                  icon: Award,
                  text: "Active in local community events"},
                {
                  icon: TrendingUp,
                  text: "Supporting neighborhood growth & connection"},
              ],
              reverse: false,
            },
          ]}
        />
      </div>

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208291.jpg?_wi=1"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          logoText="Caribbean Flair"
          copyrightText="© 2025 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}