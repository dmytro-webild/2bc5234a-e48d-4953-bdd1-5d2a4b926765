"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
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

  const deliveryServices = [
    { name: "Uber Eats", href: "https://www.ubereats.com" },
    { name: "DoorDash", href: "https://www.doordash.com" },
    { name: "Grubhub", href: "https://www.grubhub.com" },
    { name: "Seamless", href: "https://www.seamless.com" },
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
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773929131328-mphgod14.jpg?_wi=1"
          imageAlt="Caribbean Flair delivery service"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Order now section with delivery options"
        />
      </div>

      {/* Delivery Options Section */}
      <div id="delivery-options" data-section="delivery-options">
        <div className="px-4 py-12 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Delivery Service</h2>
              <p className="text-lg text-gray-600">Select your preferred delivery partner to bring Caribbean Flair straight to your table. Fast, reliable service with real-time tracking.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliveryServices.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg p-6 bg-white border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-32 text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300" />
                  <div className="relative z-10">
                    <p className="font-bold text-lg mb-1 group-hover:text-orange-600 transition-colors">{service.name}</p>
                    <p className="text-sm text-gray-500 group-hover:text-gray-700">Order online →</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Local Map Info and Social Links */}
      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773929131328-mphgod14.jpg?_wi=2"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          logoText="Caribbean Flair"
          copyrightText="© 2026 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}
