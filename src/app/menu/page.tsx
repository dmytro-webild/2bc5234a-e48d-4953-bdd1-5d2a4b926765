"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Award, Flame, Phone, ShoppingCart } from "lucide-react";
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
        { label: "Gallery", href: "/gallery" },
        { label: "Reviews", href: "/reviews" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Order Online", href: "/order-now" },
        { label: "Call Us", href: "tel:2397850423" },
        { label: "Locations & Hours", href: "/locations" },
        { label: "Contact", href: "/contact" },
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

  // All 5 menu pages with their images
  const menuPages = [
    {
      id: "menu-page-1",      name: "Menu Page 1",      title: "Main Dishes",      description: "Signature jerk meats, curry specialties, and authentic Caribbean proteins grilled fresh to order.",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773931203656-6q5n09tb.jpg",      imageAlt: "Menu Page 1 - Main Dishes",      items: [
        { name: "Jerk Chicken Platter", price: "$15.95", variant: "Full Rack" },
        { name: "Curry Goat Platter", price: "$17.95", variant: "Tender & Aromatic" },
        { name: "Jerk Pork Platter", price: "$16.95", variant: "Juicy & Spiced" },
      ]
    },
    {
      id: "menu-page-2",      name: "Menu Page 2",      title: "Seafood & Appetizers",      description: "Fresh seafood selections and delicious appetizers to start your island feast.",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773931203656-k0zmv702.jpg",      imageAlt: "Menu Page 2 - Seafood & Appetizers",      items: [
        { name: "Escovitch Fish", price: "$18.95", variant: "Island Tradition" },
        { name: "Curry Shrimp Platter", price: "$16.95", variant: "Fresh Daily" },
        { name: "Conch Fritters Combo", price: "$12.95", variant: "6 Pieces" },
      ]
    },
    {
      id: "menu-page-3",      name: "Menu Page 3",      title: "Sandwiches & Wraps",      description: "Fresh-grilled sandwiches and wraps packed with authentic Caribbean flavors.",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773931203656-uswy1139.jpg",      imageAlt: "Menu Page 3 - Sandwiches & Wraps",      items: [
        { name: "Jerk Chicken Sandwich", price: "$11.95", variant: "Fresh Bread" },
        { name: "Curry Goat Sandwich", price: "$12.95", variant: "Hearty & Flavorful" },
        { name: "Pulled Pork Sandwich", price: "$11.95", variant: "Smoky & Tender" },
      ]
    },
    {
      id: "menu-page-4",      name: "Menu Page 4",      title: "Sides & Platters",      description: "Classic Caribbean sides and complete platter combinations.",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773931203657-pi7z5ykc.jpg",      imageAlt: "Menu Page 4 - Sides & Platters",      items: [
        { name: "Rice & Peas", price: "$4.95", variant: "Classic Caribbean" },
        { name: "Creamy Mac & Cheese", price: "$5.95", variant: "Comfort Classic" },
        { name: "Festival Dumplings", price: "$4.95", variant: "Golden & Crispy" },
      ]
    },
    {
      id: "menu-page-5",      name: "Menu Page 5",      title: "Beverages & Specials",      description: "Refreshing tropical beverages and special combo selections.",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773931203657-qyiakzyt.jpg",      imageAlt: "Menu Page 5 - Beverages & Specials",      items: [
        { name: "Sorrel Punch", price: "$3.95", variant: "16 oz" },
        { name: "Island Ginger Beer", price: "$3.95", variant: "Refreshing" },
        { name: "Island Feast Combo", price: "$22.95", variant: "Jerk Chicken + Sides" },
      ]
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
          title="Complete Menu - All 5 Pages"
          description="Explore our full authentic Caribbean menu across all categories. Fresh island flavors, grilled to perfection. Click each menu page to see detailed items and pricing."
          tag="Full Menu"
          tagIcon={Award}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Order Online Now",              href: "/order-now"
            },
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773930101919-ghty3a8u.png?_wi=1"
          imageAlt="Caribbean Flair Complete Menu"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Menu page hero section"
        />
      </div>

      {/* All 5 Menu Pages with Interactive Display */}
      <div id="featured-gallery" data-section="featured-gallery">
        <div className="px-4 py-16 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All 5 Menu Pages</h2>
              <p className="text-lg text-gray-600">Browse through our complete menu collection featuring all dishes, sides, and beverages. Click on each page to explore items and pricing.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {menuPages.map((page) => (
                <div
                  key={page.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-gray-200 hover:border-orange-500"
                  onClick={() => {
                    // Open menu page in new context or scroll to details
                    const details = document.getElementById(`details-${page.id}`);
                    if (details) {
                      details.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {/* Menu Page Image */}
                  <div className="relative overflow-hidden h-64 bg-gray-100">
                    <img
                      src={page.imageSrc}
                      alt={page.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                      <div>
                        <p className="text-orange-400 text-sm font-semibold mb-1">{page.name}</p>
                        <h3 className="text-white text-xl font-bold">{page.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Menu Page Details */}
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-4">{page.description}</p>

                    {/* Items Preview */}
                    <div className="space-y-2 mb-4">
                      {page.items.map((item, idx) => (
                        <div key={idx} className="text-sm border-t pt-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-gray-800">{item.name}</p>
                              <p className="text-gray-500 text-xs">{item.variant}</p>
                            </div>
                            <p className="font-bold text-orange-600">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View More Button */}
                    <a
                      href="/order-now"
                      className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      Order from {page.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Menu Details Section */}
      <div className="px-4 py-16 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Menu Categories Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuPages.map((page) => (
              <div
                key={`details-${page.id}`}
                id={`details-${page.id}`}
                className="bg-white rounded-lg p-6 shadow-md border-l-4 border-orange-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={page.imageSrc}
                    alt={page.imageAlt}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{page.name}: {page.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  {page.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <div>
                        <p className="font-semibold text-gray-800">{item.name}</p>
                        <p className="text-gray-500 text-xs">{item.variant}</p>
                      </div>
                      <p className="font-bold text-orange-600 text-lg">{item.price}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="/order-now"
                  className="mt-6 block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </div>
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