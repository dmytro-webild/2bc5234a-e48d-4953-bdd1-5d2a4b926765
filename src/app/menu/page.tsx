"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import BlogCardThree from "@/components/sections/blog/BlogCardThree";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Award, Camera, Phone, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

export default function MenuPage() {
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
    { name: "Menu", id: "featured-gallery" },
    { name: "About Us", id: "owners-spotlight" },
    { name: "Gallery", id: "featured-gallery" },
    { name: "Reviews", id: "testimonials" },
    { name: "Locations", id: "footer" },
  ];

  const footerColumns = [
    {
      title: "Quick Links",      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "Gallery", href: "#featured-gallery" },
        { label: "Reviews", href: "#testimonials" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Order Online", href: "/order-now" },
        { label: "Call Us", href: "tel:2397850423" },
        { label: "Locations & Hours", href: "#footer" },
        { label: "Contact", href: "#footer" },
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

        #featured-gallery {
          animation-delay: 0.2s;
        }

        #footer {
          animation-delay: 0.3s;
        }

        img {
          animation: slideInFromRight 1s ease-out forwards;
          opacity: 0;
        }

        #hero img {
          animation-delay: 0.3s;
        }

        #featured-gallery img {
          animation-delay: 0.4s;
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
            text: "Order Now",            href: "/order-now"
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
              <a href="/order-now" className="w-full bg-primary-cta text-white py-2 rounded-lg font-semibold hover:opacity-90 text-center block">
                Order Now
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
            href="/order-now"
            className="bg-gradient-to-r from-primary-cta to-accent text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all flex items-center justify-center group font-semibold"
            title="Order Now"
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

      {/* Hero Section - Menu Header */}
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Complete Menu"
          description="Explore our complete menu across all 5 pages. Fresh Caribbean flavors, authentic recipes, and island-inspired specialties grilled to perfection."
          tag="Full Menu"
          tagIcon={Award}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Order Now",              href: "/order-now"
            },
          ]}
          buttonAnimation="slide-up"
          imageSrc="data:image/svg+xml,%3Csvg xmlns=?_wi=1'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EMenu Cover%3C/text%3E%3C/svg%3E"
          imageAlt="Caribbean Flair Complete Menu"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Menu page hero section"
        />
      </div>

      {/* Full Menu Display - All 5 Pages */}
      <div id="featured-gallery" data-section="featured-gallery">
        <BlogCardThree
          title="All 5 Menu Pages"
          description="Browse through our complete menu collection featuring all dishes, sides, and beverages."
          tag="Complete Menu"
          tagIcon={Camera}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          blogs={[
            {
              id: "menu-page-1",              category: "Menu Page 1",              title: "Menu Page 1 - Main Dishes",              excerpt: "Our signature main dishes featuring jerk meats, curry specialties, and authentic Caribbean proteins grilled fresh to order.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773887611478-094w00ok.jpg?_wi=1",              imageAlt: "Menu Page 1 - Main Dishes",              authorName: "Caribbean Flair",              authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e8e8e8'/%3E%3Ctext x='50%' y='50%' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EMenu%3C/text%3E%3C/svg%3E",              date: "Complete Menu"
            },
            {
              id: "menu-page-2",              category: "Menu Page 2",              title: "Menu Page 2 - Seafood & Sides",              excerpt: "Fresh seafood selections including escovitch fish, shrimp dishes, and our famous sides like festival dumplings and tropical slaw.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773887611478-8nakpzaa.jpg?_wi=1",              imageAlt: "Menu Page 2 - Seafood & Sides",              authorName: "Caribbean Flair",              authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e8e8e8'/%3E%3Ctext x='50%' y='50%' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EMenu%3C/text%3E%3C/svg%3E",              date: "Complete Menu"
            },
            {
              id: "menu-page-3",              category: "Menu Page 3",              title: "Menu Page 3 - Platters & Combos",              excerpt: "Our complete platter offerings with combinations of proteins, rice, peas, plantains, and fresh vegetables grilled together.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773887611478-i3ll7ifz.jpg?_wi=1",              imageAlt: "Menu Page 3 - Platters & Combos",              authorName: "Caribbean Flair",              authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e8e8e8'/%3E%3Ctext x='50%' y='50%' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EMenu%3C/text%3E%3C/svg%3E",              date: "Complete Menu"
            },
            {
              id: "menu-page-4",              category: "Menu Page 4",              title: "Menu Page 4 - Appetizers & Starters",              excerpt: "Delicious appetizers to begin your meal including conch fritters, fried plantains, croquettes, and other island favorites.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773887611478-60e6tsue.jpg?_wi=1",              imageAlt: "Menu Page 4 - Appetizers & Starters",              authorName: "Caribbean Flair",              authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e8e8e8'/%3E%3Ctext x='50%' y='50%' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EMenu%3C/text%3E%3C/svg%3E",              date: "Complete Menu"
            },
            {
              id: "menu-page-5",              category: "Menu Page 5",              title: "Menu Page 5 - Beverages & Desserts",              excerpt: "Refresh yourself with authentic Caribbean beverages and indulge in sweet island desserts to complete your meal.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773887611478-gby1l988.jpg?_wi=1",              imageAlt: "Menu Page 5 - Beverages & Desserts",              authorName: "Caribbean Flair",              authorAvatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e8e8e8'/%3E%3Ctext x='50%' y='50%' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EMenu%3C/text%3E%3C/svg%3E",              date: "Complete Menu"
            },
          ]}
        />
      </div>

      {/* Footer with Local Map Info and Social Links */}
      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="data:image/svg+xml,%3Csvg xmlns=?_wi=2'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EFooter Image%3C/text%3E%3C/svg%3E"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          logoText="Caribbean Flair"
          copyrightText="© 2026 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}
