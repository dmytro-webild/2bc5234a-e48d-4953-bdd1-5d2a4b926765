"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import TimelineProcessFlow from "@/components/cardStack/layouts/timelines/TimelineProcessFlow";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  Award,
  Heart,
  Zap,
  TrendingUp,
  Facebook,
  Users,
  Target,
} from "lucide-react";

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
        { label: "Gallery", href: "/gallery" },
        { label: "Reviews", href: "/" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Order Online", href: "/menu" },
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

  const timelineItems = [
    {
      id: "founded",      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">Founded Caribbean Flair</h3>
          <p>Teria Bryant and Deb Farrell launch their dream of bringing authentic Jamaican cuisine to Lehigh Acres with passion and purpose.</p>
        </div>
      ),
      media: (
        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg h-full flex items-center justify-center text-white text-3xl font-bold">
          2023
        </div>
      ),
      reverse: false,
    },
    {
      id: "community",      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">Community Reception</h3>
          <p>The community embraces Caribbean Flair, supporting Black-owned and women-owned business excellence and authentic Caribbean culture.</p>
        </div>
      ),
      media: (
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg h-full flex items-center justify-center text-white text-3xl font-bold">
          2024
        </div>
      ),
      reverse: true,
    },
    {
      id: "growth",      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">Expansion & Recognition</h3>
          <p>Caribbean Flair becomes a beloved staple in Lehigh Acres, serving thousands of satisfied customers and earning 5-star recognition.</p>
        </div>
      ),
      media: (
        <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg h-full flex items-center justify-center text-white text-3xl font-bold">
          2025
        </div>
      ),
      reverse: false,
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
          title="Our Island Story"
          description="Teria Bryant and Deb Farrell: Two passionate entrepreneurs bringing authentic Jamaican soul and Caribbean excellence to Lehigh Acres through authentic flavors and community-first business."
          tag="Community Leaders"
          tagIcon={Award}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Order Now",              href: "/menu"},
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-vector/summer-label-collectio_23-2148160410.jpg"
          imageAlt="Caribbean Flair About Us"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="About us hero section"
        />
      </div>

      {/* Meet the Owners Section */}
      <div id="owners-spotlight" data-section="owners-spotlight">
        <TeamCardTwo
          title="Meet the Island Visionaries"
          description="Teria Bryant and Deb Farrell: Passionate Black-owned, women-owned entrepreneurs bringing authentic Caribbean soul to Lehigh Acres."
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
                "Teria brings 15+ years of Caribbean culinary expertise and authentic island passion to every dish. Her vision transformed Caribbean Flair from a dream into a premium dining destination serving Lehigh Acres with pride and excellence.",              imageSrc:
                "http://img.b2bpic.net/free-photo/medium-shot-professional-chef-working_23-2151232185.jpg?_wi=1",              imageAlt: "Teria Bryant, founder of Caribbean Flair",              socialLinks: [
                {
                  icon: Facebook,
                  url: "https://facebook.com/caribbeanflair"},
              ],
            },
            {
              id: "deb-farrell",              name: "Deb Farrell",              role: "Co-Owner & Operations Lead",              description:
                "Deb ensures every customer experience is smooth, welcoming, and unforgettable. Together with Teria, she's building a thriving Black- and women-owned business that celebrates Caribbean culture and community impact.",              imageSrc:
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
        <TimelineProcessFlow
          title="Our Journey"
          description="From vision to reality—the Caribbean Flair story of authentic flavors, community pride, and culinary excellence."
          tag="Our Evolution"
          tagIcon={Target}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          items={timelineItems}
          buttons={[
            {
              text: "Join Our Story",              href: "/menu"},
          ]}
        />
      </div>

      {/* Community Impact Section */}
      <div id="community-impact" data-section="community-impact">
        <SocialProofOne
          names={[
            "Supporting Local Economy",            "Women Empowerment",            "Black Business Excellence",            "Community Events",            "Authentic Jamaican Culture",            "Local Partnerships"]}
          title="Community Impact"
          description="Caribbean Flair is more than a restaurant—we're a force for community pride, Black excellence, and women empowerment in Lehigh Acres."
          tag="Making a Difference"
          tagIcon={Users}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          showCard={true}
          buttons={[
            {
              text: "Support Local Business",              href: "/menu"},
          ]}
        />
      </div>

      {/* Final CTA Section */}
      <div id="final-cta" data-section="final-cta">
        <FeatureCardTen
          title="Experience Our Island Story"
          description="Join Teria, Deb, and the Caribbean Flair community. Every meal supports Black- and women-owned business excellence and authentic Caribbean culture."
          tag="Be Part of Our Journey"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Order Now",              href: "/menu"},
            {
              text: "Call (239) 785-0423",              href: "tel:2397850423"},
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: "mission",              title: "Our Mission",              description:
                "Deliver authentic Caribbean excellence while uplifting our community through Black- and women-owned business pride.",              media: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg?_wi=1"},
              items: [
                {
                  icon: Heart,
                  text: "Authentic Flavors"},
                {
                  icon: TrendingUp,
                  text: "Community Pride"},
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