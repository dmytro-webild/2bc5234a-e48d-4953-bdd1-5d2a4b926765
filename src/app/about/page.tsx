"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import Link from "next/link";
import { Heart, Facebook, Zap, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About Us", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "Locations", id: "locations" },
  ];

  const navItemsWithLinks = navItems.map((item) => ({
    ...item,
    href:
      item.id === "home"
        ? "/"
        : item.id === "menu"
        ? "/#menu"
        : item.id === "about"
        ? "/about"
        : item.id === "gallery"
        ? "/gallery"
        : item.id === "reviews"
        ? "/#reviews"
        : "/#locations",
  }));

  const footerColumns = [
    {
      title: "Quick Links",
      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/#menu" },
        { label: "Gallery", href: "/gallery" },
        { label: "Reviews", href: "/#reviews" },
      ],
    },
    {
      title: "Order & Contact",
      items: [
        { label: "Order Online", href: "/#order" },
        { label: "Call Us", href: "tel:2397850423" },
        { label: "Locations & Hours", href: "/#locations" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Connect With Us",
      items: [
        { label: "Facebook", href: "https://facebook.com/caribbeanflair" },
        { label: "About Us", href: "/about" },
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
      ],
    },
    {
      title: "Located In",
      items: [
        { label: "801 Leeland Heights Blvd W", href: "#map" },
        { label: "Lehigh Acres, FL 33936", href: "#map" },
        { label: "Open Until 9PM", href: "#locations" },
        { label: "Delivery Available", href: "/#order" },
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
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Caribbean Flair"
          navItems={navItems}
          button={{ text: "Order Now", href: "/#order" }}
        />
      </div>

      <div id="owners-spotlight" data-section="owners-spotlight">
        <TeamCardTwo
          title="Meet the Island Visionaries"
          description="Teria Bryant and Deb Farrell: Passionate Black-owned, women-owned entrepreneurs bringing authentic Caribbean soul to Lehigh Acres."
          tag="Community Leaders"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="two-columns-alternating-heights"
          members={[
            {
              id: "teria-bryant",
              name: "Teria Bryant",
              role: "Founder & Head Chef",
              description: "Teria brings 15+ years of Caribbean culinary expertise and authentic island passion to every dish. Her vision transformed Caribbean Flair from a dream into a premium dining destination serving Lehigh Acres with pride.",
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-professional-chef-working_23-2151232185.jpg?_wi=2",
              imageAlt: "Teria Bryant, founder of Caribbean Flair",
              socialLinks: [
                {
                  icon: Facebook,
                  url: "https://facebook.com/caribbeanflair",
                },
              ],
            },
            {
              id: "deb-farrell",
              name: "Deb Farrell",
              role: "Co-Owner & Operations Lead",
              description: "Deb ensures every customer experience is smooth, welcoming, and unforgettable. Together with Teria, she's building a thriving Black- and women-owned business that celebrates Caribbean culture and community impact.",
              imageSrc: "http://img.b2bpic.net/free-photo/successful-business-woman-blue-suit_158595-5024.jpg?_wi=2",
              imageAlt: "Deb Farrell, co-owner of Caribbean Flair",
              socialLinks: [
                {
                  icon: Facebook,
                  url: "https://facebook.com/caribbeanflair",
                },
              ],
            },
          ]}
        />
      </div>

      <div id="about-mission" data-section="about-mission">
        <FeatureCardTen
          title="Our Mission & Story"
          description="Caribbean Flair was born from a simple belief: authentic Caribbean cuisine should be accessible, affordable, and made with love. Teria and Deb partnered to create a space where island flavors, community values, and culinary excellence come together on every plate."
          tag="Built on Values"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: "authenticity",
              title: "Authentic Island Recipes",
              description: "Every dish honors traditional Caribbean cooking methods with modern quality standards. Fresh ingredients, time-tested techniques, and genuine island spirit in every bite.",
              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/friends-having-nice-barbeque-together_23-2149271905.jpg?_wi=2",
                imageAlt: "Chef grilling jerk meats with expertise",
              },
              items: [
                {
                  icon: Zap,
                  text: "Fresh daily preparation",
                },
                {
                  icon: TrendingUp,
                  text: "Premium quality ingredients",
                },
              ],
              reverse: false,
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208291.jpg?_wi=3"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          logoText="Caribbean Flair"
          copyrightText="© 2025 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}