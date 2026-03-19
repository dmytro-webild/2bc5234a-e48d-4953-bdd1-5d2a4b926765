"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  Award,
  Flame,
  Phone,
  ShoppingCart,
  MapPin,
  Clock,
  Star,
  Heart,
  Zap,
  TrendingUp,
  Facebook,
} from "lucide-react";
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
        { label: "Menu", href: "/menu" },
        { label: "Gallery", href: "/#featured-gallery" },
        { label: "Reviews", href: "/#testimonials" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Order Online", href: "/menu" },
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

        #menu-header {
          animation-delay: 0.1s;
        }

        #full-menu {
          animation-delay: 0.2s;
        }

        #mains {
          animation-delay: 0.3s;
        }

        #sides {
          animation-delay: 0.4s;
        }

        #beverages {
          animation-delay: 0.5s;
        }

        #footer {
          animation-delay: 0.6s;
        }

        img {
          animation: slideInFromRight 1s ease-out forwards;
          opacity: 0;
        }

        #full-menu img {
          animation-delay: 0.3s;
        }

        #mains img {
          animation-delay: 0.4s;
        }

        #sides img {
          animation-delay: 0.5s;
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
            text: "Order Now",            href: "/menu"
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
                  href={item.id === "home" ? "/" : `/#${item.id}`}
                  className="block text-gray-800 hover:text-primary-cta font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="/menu" className="w-full bg-primary-cta text-white py-2 rounded-lg font-semibold hover:opacity-90 text-center block">
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
            href="/menu"
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

      {/* Menu Header Section */}
      <div id="menu-header" data-section="menu-header" className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Full Island Menu</h1>
          <p className="text-lg text-gray-600">Authentic Caribbean dishes crafted fresh daily by our expert grill masters. Every meal is made with love and island passion.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a href="tel:2397850423" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary-cta text-primary-cta rounded-full font-semibold hover:bg-primary-cta hover:text-white transition-all">
              <Phone className="w-5 h-5" />
              Call (239) 785-0423
            </a>
            <div className="inline-flex items-center gap-2 text-gray-700">
              <Clock className="w-5 h-5 text-primary-cta" />
              Open Until 9PM
            </div>
          </div>
        </div>
      </div>

      {/* Main Dishes Section */}
      <div id="mains" data-section="mains">
        <ProductCardFour
          title="Main Island Dishes"
          description="Signature mains grilled to perfection with authentic Caribbean spices and flavors."
          tag="Must Try"
          tagIcon={Flame}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Order Online",              href: "#order"
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
          products={[
            {
              id: "jerk-chicken",              name: "Jerk Chicken Platter",              price: "$15.95",              variant: "Full Rack | Rice & Peas",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773884559172-6jmwoep9.png",              imageAlt: "Jerk chicken grilled on foil with spices"
            },
            {
              id: "curry-shrimp",              name: "Curry Shrimp Platter",              price: "$16.95",              variant: "Fresh Daily | Festival Dumplings",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Curry shrimp over rice and peas"
            },
            {
              id: "conch-fritters",              name: "Conch Fritters Combo",              price: "$12.95",              variant: "6 Pieces | Dipping Sauce",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Golden conch fritters with dipping sauce"
            },
            {
              id: "curry-goat",              name: "Curry Goat Platter",              price: "$17.95",              variant: "Tender & Aromatic | Bread",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Rich curry goat served over rice and peas"
            },
            {
              id: "escovitch-fish",              name: "Escovitch Fish",              price: "$16.95",              variant: "Fresh Fish | Pickled Veggies",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Escovitch fish with pickled vegetables and lime"
            },
            {
              id: "jerk-pork",              name: "Jerk Pork Ribs",              price: "$18.95",              variant: "Half Rack | Mac & Cheese",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Perfectly seasoned jerk pork ribs with island spices"
            },
          ]}
        />
      </div>

      {/* Sides & Extras Section */}
      <div id="sides" data-section="sides">
        <ProductCardFour
          title="Sides & Extras"
          description="Perfect complements to your main dish. All made fresh daily with authentic Caribbean flavors."
          tag="Sides & Accompaniments"
          tagIcon={Star}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Add to Order",              href: "#order"
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={true}
          products={[
            {
              id: "rice-peas",              name: "Rice & Peas",              price: "$4.95",              variant: "Island Classic | Per Side",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Fluffy rice and peas side dish"
            },
            {
              id: "mac-cheese",              name: "Creamy Mac & Cheese",              price: "$5.95",              variant: "Soul Food Special | Comfort Classic",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Creamy mac and cheese side dish"
            },
            {
              id: "festival",              name: "Festival Dumplings",              price: "$3.95",              variant: "6 Pieces | Golden & Crispy",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Crispy golden festival dumplings"
            },
            {
              id: "tropical-slaw",              name: "Tropical Slaw",              price: "$4.95",              variant: "Fresh Veggies | Island Dressing",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Fresh tropical slaw with island dressing"
            },
            {
              id: "plantain-chips",              name: "Plantain Chips",              price: "$5.95",              variant: "Crispy & Salted | Caribbean Favorite",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Crispy plantain chips"
            },
            {
              id: "johnny-cakes",              name: "Johnny Cakes",              price: "$4.95",              variant: "4 Pieces | Fresh Baked",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Fresh baked johnny cakes"
            },
          ]}
        />
      </div>

      {/* Beverages Section */}
      <div id="beverages" data-section="beverages">
        <ProductCardFour
          title="Beverages & Drinks"
          description="Cool off with our refreshing Caribbean drinks and island favorites."
          tag="Quench Your Thirst"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Add Drink",              href: "#order"
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
          products={[
            {
              id: "ginger-beer",              name: "Ginger Beer",              price: "$3.95",              variant: "Bottle | Refreshing & Spicy",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Cold ginger beer bottle"
            },
            {
              id: "sorrel",              name: "Sorrel Drink",              price: "$4.95",              variant: "Seasonal | Caribbean Favorite",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Traditional sorrel drink"
            },
            {
              id: "mango-juice",              name: "Fresh Mango Juice",              price: "$5.95",              variant: "Fresh Pressed | No Sugar Added",              imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Fresh mango juice"
            },
          ]}
        />
      </div>

      {/* Order CTA Section */}
      <div id="order" data-section="order" className="py-16 md:py-24 px-4 bg-gradient-to-r from-primary-cta to-accent">
        <div className="max-w-2xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Order?</h2>
          <p className="text-lg opacity-90">Call us now or visit our location to experience authentic Caribbean island flavors made fresh daily.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="tel:2397850423" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-cta rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
              <Phone className="w-6 h-6" />
              Call (239) 785-0423
            </a>
            <a href="https://www.google.com/maps/search/caribbean+flair+island+jerk+grill+lehigh+acres" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/30 transition-all">
              <MapPin className="w-6 h-6" />
              Visit Us
            </a>
          </div>
          <div className="pt-6 border-t border-white/30 space-y-2 text-sm">
            <p>📍 801 Leeland Heights Blvd W, Lehigh Acres, FL 33936</p>
            <p>🕐 Open Until 9PM Daily</p>
            <p>🚚 Delivery Available</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773884559172-6jmwoep9.png"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          logoText="Caribbean Flair"
          copyrightText="© 2025 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}
