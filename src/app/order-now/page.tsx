"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  Award,
  Truck,
  Phone,
  ShoppingCart,
  MapPin,
  Clock,
  Facebook,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function OrderNowPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopButtonsVisible, setIsDesktopButtonsVisible] = useState(true);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "signature-dishes" },
    { name: "About Us", id: "owners-spotlight" },
    { name: "Gallery", id: "featured-gallery" },
    { name: "Reviews", id: "testimonials" },
    { name: "Locations", id: "footer" },
  ];

  const footerColumns = [
    {
      title: "Quick Links",      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/#signature-dishes" },
        { label: "Gallery", href: "/#featured-gallery" },
        { label: "Reviews", href: "/#testimonials" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Order Online", href: "/order-now" },
        { label: "Call Us", href: "tel:2397850423" },
        { label: "Locations & Hours", href: "/#footer" },
        { label: "Contact", href: "/#footer" },
      ],
    },
    {
      title: "Connect With Us",      items: [
        { label: "Facebook", href: "https://www.facebook.com/share/1CckZyvyXX/?mibextid=wwXIfr" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
    {
      title: "Located In",      items: [
        { label: "801 Leeland Heights Blvd W", href: "#" },
        { label: "Lehigh Acres, FL 33936", href: "#" },
        { label: "Open Until 9PM", href: "#" },
        { label: "Delivery Available", href: "#" },
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
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          animation: fadeIn 0.8s ease-out;
        }

        [data-section] {
          animation: fadeIn 1.2s ease-out forwards;
          opacity: 0;
        }

        #hero [data-section] {
          animation-delay: 0.1s;
        }

        #delivery-options {
          animation-delay: 0.2s;
        }

        #footer {
          animation-delay: 0.3s;
        }
      `}</style>

      {/* Persistent Top Navigation Bar */}
      <div id="nav" data-section="nav" className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
        <NavbarStyleCentered
          brandName="Caribbean Flair"
          navItems={navItems}
          button={{
            text: "Order Now",            href: "/order-now"
          }}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Order Your Island Feast"
          description="Choose your delivery service and get your authentic Caribbean meal fresh and hot. We deliver island flavors straight to your door."
          tag="Quick Delivery"
          tagIcon={Truck}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "View Menu",              href: "/#signature-dishes"
            },
            {
              text: "Call (239) 785-0423",              href: "tel:2397850423"
            },
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773887611478-094w00ok.jpg?_wi=2"
          imageAlt="Caribbean Flair delivery service"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Order now section with delivery options"
        />
      </div>

      {/* Delivery Options Section */}
      <div id="delivery-options" data-section="delivery-options">
        <FeatureCardTwentySeven
          title="Choose Your Delivery Service"
          description="Select your preferred delivery partner to bring Caribbean Flair straight to your table."
          tag="Multiple Options"
          tagIcon={Truck}
          tagAnimation="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              id: "doordash",              title: "DoorDash",              descriptions: [
                "Fast delivery with real-time tracking",                "Easy app-based ordering",                "Contactless delivery available"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773887611478-8nakpzaa.jpg?_wi=2",              imageAlt: "DoorDash delivery service logo"
            },
            {
              id: "ubereats",              title: "Uber Eats",              descriptions: [
                "Seamless ordering experience",                "Fast and reliable delivery",                "Track your order in real-time"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773887611478-i3ll7ifz.jpg?_wi=2",              imageAlt: "Uber Eats delivery service logo"
            },
            {
              id: "grubhub",              title: "Grubhub",              descriptions: [
                "Wide reach and convenient ordering",                "Loyalty rewards program",                "Quick and professional delivery"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773887611478-60e6tsue.jpg?_wi=2",              imageAlt: "Grubhub delivery service logo"
            },
            {
              id: "instacart",              title: "Instacart",              descriptions: [
                "Fresh food delivery expertise",                "Same-day delivery available",                "Easy scheduling options"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773887611478-gby1l988.jpg?_wi=2",              imageAlt: "Instacart delivery service logo"
            },
          ]}
        />
      </div>

      {/* Footer with Local Map Info and Social Links */}
      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773887611478-094w00ok.jpg?_wi=3"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          logoText="Caribbean Flair"
          copyrightText="© 2026 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}