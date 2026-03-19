"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  Award,
  Zap,
  TrendingUp,
  Facebook,
  Phone,
  ShoppingCart,
  ExternalLink,
  Clock,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function OrderNowPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopButtonsVisible, setIsDesktopButtonsVisible] = useState(true);
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      setShowCookiePreferences(true);
    } else {
      setCookiesAccepted(true);
    }
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setCookiesAccepted(true);
    setShowCookiePreferences(false);
  };

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
        { label: "Order Now", href: "/order-now" },
        { label: "Gallery", href: "/#featured-gallery" },
        { label: "Reviews", href: "/#testimonials" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Uber Eats", href: "https://www.ubereats.com/search?q=caribbean%20flair&location=Lehigh%20Acres%2C%20FL" },
        { label: "DoorDash", href: "https://www.doordash.com/search?q=caribbean%20flair&location=Lehigh%20Acres%2C%20FL" },
        { label: "Grubhub", href: "https://www.grubhub.com/search?q=caribbean%20flair&location=Lehigh%20Acres%2C%20FL" },
        { label: "Call Us", href: "tel:2397850423" },
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

        @keyframes glowHover {
          0% {
            box-shadow: 0 0 0px rgba(227, 68, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(227, 68, 0, 0.6);
          }
          100% {
            box-shadow: 0 0 30px rgba(227, 68, 0, 0.8);
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

        #order-providers {
          animation-delay: 0.2s;
        }

        #final-cta {
          animation-delay: 0.3s;
        }

        #footer {
          animation-delay: 0.4s;
        }

        img {
          animation: slideInFromRight 1s ease-out forwards;
          opacity: 0;
        }

        #hero img {
          animation-delay: 0.3s;
        }

        button, [role="button"], a[href*="#"], a[href*="/"] {
          position: relative;
          transition: all 0.3s ease;
        }

        button:hover, [role="button"]:hover, a[href*="#"]:hover, a[href*="/"]:hover {
          animation: glowHover 0.6s ease-in-out;
        }

        .bg-gradient-to-r, .bg-primary-cta, [class*="bg-blue"], [class*="bg-orange"], [class*="bg-red"] {
          transition: all 0.3s ease;
        }

        .bg-gradient-to-r:hover, .bg-primary-cta:hover, [class*="bg-blue"]:hover, [class*="bg-orange"]:hover, [class*="bg-red"]:hover {
          filter: brightness(1.1);
          animation: glowHover 0.6s ease-in-out;
        }
      `}</style>

      {/* Persistent Top Navigation Bar */}
      <div id="nav" data-section="nav" className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
        <NavbarStyleCentered
          brandName="Caribbean Flair"
          navItems={navItems}
          button={{
            text: "See Full Menu",            href: "/"
          }}
        />
      </div>

      {/* Floating Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-16 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-2xl m-4 border border-white/20">
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-gray-800 hover:text-primary-cta font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="/" className="w-full bg-primary-cta text-white py-2 rounded-lg font-semibold hover:opacity-90 text-center block">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Desktop Action Buttons */}
      {isDesktopButtonsVisible && (
        <div className="hidden md:fixed md:right-6 md:bottom-6 md:z-20 md:flex md:flex-col md:gap-3">
          <a
            href="tel:2397850423"
            className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-full p-4 shadow-lg hover:shadow-xl hover:bg-white transition-all flex items-center justify-center group"
            title="Call Us"
          >
            <Phone className="w-6 h-6 text-primary-cta group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="/"
            className="bg-gradient-to-r from-primary-cta to-accent text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all flex items-center justify-center group font-semibold"
            title="Back to Home"
          >
            <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      )}

      {/* Cookie Preferences Popup */}
      {showCookiePreferences && !cookiesAccepted && (
        <div className="fixed bottom-6 left-6 right-6 z-50 max-w-sm bg-white/95 backdrop-blur-lg rounded-lg shadow-2xl border border-white/20 p-4 md:p-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Cookie Preferences</h3>
            <p className="text-sm text-gray-600">
              We use cookies to enhance your experience, personalize content, and analyze site traffic.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleCookieAccept}
                className="flex-1 bg-primary-cta text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Accept All
              </button>
              <button
                onClick={() => setShowCookiePreferences(false)}
                className="flex-1 border border-gray-300 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Order Your Caribbean Feast"
          description="Fresh off the grill. Order authentic Jamaican jerk, curry, and soul food through your favorite delivery service. Get it delivered hot, fresh, and delicious."
          tag="Multiple Delivery Options"
          tagIcon={Award}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Explore Delivery Options",              href: "#order-providers"
            },
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773884559172-6jmwoep9.png"
          imageAlt="Caribbean Flair Island Jerk Grill Order Now"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Hero section for order now page"
        />
      </div>

      {/* Delivery Providers Section */}
      <div id="order-providers" data-section="order-providers">
        <FeatureCardTen
          title="Choose Your Delivery Partner"
          description="Order your Caribbean Flair favorites through these trusted delivery platforms. Fast, reliable, and convenient delivery straight to your door."
          tag="Seamless Ordering"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              id: "uber-eats",              title: "Uber Eats",              description: "Order on Uber Eats for fast, convenient delivery. Browse our full menu and track your order in real-time.",              media: {
                imageSrc: "data:image/svg+xml,%3Csvg xmlns=?_wi=1'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23000000' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='20' font-weight='bold' text-anchor='middle' dominant-baseline='middle' fill='%23FFFFFF'%3EUber Eats%3C/text%3E%3C/svg%3E"
              },
              items: [
                {
                  icon: ExternalLink,
                  text: "Fast delivery available"
                },
                {
                  icon: TrendingUp,
                  text: "Real-time order tracking"
                },
              ],
              reverse: false,
            },
            {
              id: "doordash",              title: "DoorDash",              description: "Order via DoorDash for reliable delivery service. Enjoy exclusive deals and quick service to your location.",              media: {
                imageSrc: "data:image/svg+xml,%3Csvg xmlns=?_wi=2'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23FF3008' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='20' font-weight='bold' text-anchor='middle' dominant-baseline='middle' fill='%23FFFFFF'%3EDoorDash%3C/text%3E%3C/svg%3E"
              },
              items: [
                {
                  icon: ExternalLink,
                  text: "Exclusive DoorDash deals"
                },
                {
                  icon: TrendingUp,
                  text: "Reliable delivery service"
                },
              ],
              reverse: true,
            },
            {
              id: "grubhub",              title: "Grubhub",              description: "Order through Grubhub for convenient food delivery. Discover our menu and enjoy delicious Caribbean cuisine at home.",              media: {
                imageSrc: "data:image/svg+xml,%3Csvg xmlns=?_wi=3'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23FF8000' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='20' font-weight='bold' text-anchor='middle' dominant-baseline='middle' fill='%23FFFFFF'%3EGrubhub%3C/text%3E%3C/svg%3E"
              },
              items: [
                {
                  icon: ExternalLink,
                  text: "Easy menu browsing"
                },
                {
                  icon: TrendingUp,
                  text: "Convenient home delivery"
                },
              ],
              reverse: false,
            },
          ]}
        />
      </div>

      {/* Direct Ordering CTA Section */}
      <div id="final-cta" data-section="final-cta">
        <FeatureCardTen
          title="Can't Wait? Call Us Directly"
          description="Want to place a quick order or have special requests? Call Caribbean Flair directly and speak with our team. We're here to serve you!"
          tag="Direct Ordering"
          tagIcon={Phone}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Call (239) 785-0423",              href: "tel:2397850423"
            },
            {
              text: "Back to Home",              href: "/"
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: "direct-call",              title: "Phone Orders",              description: "Skip the apps and call us directly for personalized service and custom orders.",              media: {
                imageSrc: "data:image/svg+xml,%3Csvg xmlns=?_wi=4'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ECall Us Today%3C/text%3E%3C/svg%3E"
              },
              items: [
                {
                  icon: Phone,
                  text: "(239) 785-0423"
                },
                {
                  icon: Clock,
                  text: "Open until 9PM daily"
                },
              ],
              reverse: false,
            },
          ]}
        />
      </div>

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="data:image/svg+xml,%3Csvg xmlns=?_wi=5'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EFooter Image%3C/text%3E%3C/svg%3E"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          logoText="Caribbean Flair"
          copyrightText="© 2025 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}
