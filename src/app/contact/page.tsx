"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Heart, Zap } from "lucide-react";

export default function ContactPage() {
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
        { label: "Reviews", href: "/reviews" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Order Online", href: "/order" },
        { label: "Call Us", href: "tel:2397850423" },
        { label: "Locations & Hours", href: "/locations" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Connect With Us",      items: [
        { label: "Facebook", href: "https://facebook.com/caribbeanflair" },
        { label: "About Us", href: "/about" },
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
      ],
    },
    {
      title: "Located In",      items: [
        { label: "801 Leeland Heights Blvd W", href: "#map" },
        { label: "Lehigh Acres, FL 33936", href: "#map" },
        { label: "Open Until 9PM", href: "/locations" },
        { label: "Delivery Available", href: "/order" },
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
          button={{
            text: "Order Now",            href: "/order"}}
        />
      </div>

      <div id="contact-hero" data-section="contact-hero">
        <FeatureCardTen
          title="Get in Touch with Caribbean Flair"
          description="Have questions about our menu, catering options, or special requests? Contact us directly. We're here to make your Caribbean dining experience unforgettable."
          tag="We Love Hearing From You"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Call (239) 785-0423",              href: "tel:2397850423"},
            {
              text: "Visit Us Today",              href: "/order"},
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              id: "phone-contact",              title: "Call Us Directly",              description: "Speak with our team for custom orders, catering, or any questions about our authentic Caribbean menu.",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg?_wi=4"},
              items: [
                {
                  icon: Zap,
                  text: "(239) 785-0423"},
                {
                  icon: Heart,
                  text: "Available until 9PM"},
              ],
              reverse: false,
            },
          ]}
        />
      </div>

      <div id="contact-details" data-section="contact-details">
        <FeatureCardTen
          title="Find Us at Our Location"
          description="Visit Caribbean Flair Island Jerk Grill at our Lehigh Acres location. We're a premium food truck dedicated to bringing authentic Jamaican island flavors to your community."
          tag="Black & Women-Owned"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Order Online Now",              href: "/order"},
            {
              text: "View Full Menu",              href: "/menu"},
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: "location-details",              title: "Lehigh Acres, Florida",              description: "Experience premium Caribbean fusion at our convenient Lehigh Acres location. Fresh-grilled authentic island cuisine made with love and expertise.",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208291.jpg?_wi=8"},
              items: [
                {
                  icon: Zap,
                  text: "801 Leeland Heights Blvd W"},
                {
                  icon: Heart,
                  text: "Daily Service Until 9PM"},
              ],
              reverse: true,
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208291.jpg?_wi=9"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          logoText="Caribbean Flair"
          copyrightText="© 2025 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}
