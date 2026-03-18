"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import BlogCardThree from "@/components/sections/blog/BlogCardThree";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  Award,
  Flame,
  Camera,
  Star,
  Heart,
  Zap,
  TrendingUp,
  Facebook,
  Phone,
  ShoppingCart,
  X,
  MapPin,
  Clock,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
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
        { label: "Menu", href: "#signature-dishes" },
        { label: "Gallery", href: "#featured-gallery" },
        { label: "Reviews", href: "#testimonials" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Order Online", href: "#signature-dishes" },
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

        #signature-dishes {
          animation-delay: 0.2s;
        }

        #featured-gallery {
          animation-delay: 0.3s;
        }

        #testimonials {
          animation-delay: 0.4s;
        }

        #owners-spotlight {
          animation-delay: 0.5s;
        }

        #final-cta {
          animation-delay: 0.6s;
        }

        #footer {
          animation-delay: 0.7s;
        }

        img {
          animation: slideInFromRight 1s ease-out forwards;
          opacity: 0;
        }

        #hero img {
          animation-delay: 0.3s;
        }

        #signature-dishes img {
          animation-delay: 0.4s;
        }

        #featured-gallery img {
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
            text: "See Full Menu",            href: "/menu"
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
              <a href="/menu" className="w-full bg-primary-cta text-white py-2 rounded-lg font-semibold hover:opacity-90 text-center block">
                See Full Menu
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
            title="See Full Menu"
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
          title="Caribbean Flair Island"
          description="Fresh off the grill. Jerk, curry, and soul food made with love by Teria Bryant & Deb Farrell. Experience premium Caribbean fusion like never before."
          tag="Black & Women-Owned"
          tagIcon={Award}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Order Online Now",              href: "/menu"
            },
            {
              text: "View Full Menu",              href: "/menu"
            },
          ]}
          buttonAnimation="slide-up"
          imageSrc="data:image/svg+xml,%3Csvg xmlns=?_wi=1'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E"
          imageAlt="Red Caribbean Flair Island Jerk Grill Trailer"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Hero section showcasing Caribbean Flair trailer and authentic island flavors"
        />
      </div>

      {/* Signature Dishes Section */}
      <div id="signature-dishes" data-section="signature-dishes">
        <ProductCardFour
          title="Signature Island Flavors"
          description="Discover our most beloved authentic Caribbean dishes, expertly crafted and grilled fresh daily."
          tag="Most Ordered"
          tagIcon={Flame}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Explore Full Menu",              href: "/menu"
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
          products={[
            {
              id: "jerk-chicken",              name: "Jerk Chicken Platter",              price: "$15.95",              variant: "Full Rack",              imageSrc:
                "data:image/svg+xml,%3Csvg xmlns=?_wi=2'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Jerk chicken grilled on foil with spices"
            },
            {
              id: "curry-shrimp",              name: "Curry Shrimp Platter",              price: "$16.95",              variant: "Fresh Daily",              imageSrc:
                "data:image/svg+xml,%3Csvg xmlns=?_wi=3'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Curry shrimp over rice and peas"
            },
            {
              id: "conch-fritters",              name: "Conch Fritters Combo",              price: "$12.95",              variant: "6 Pieces",              imageSrc:
                "data:image/svg+xml,%3Csvg xmlns=?_wi=4'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Golden conch fritters with dipping sauce"
            },
          ]}
        />
      </div>

      {/* Featured Gallery Section */}
      <div id="featured-gallery" data-section="featured-gallery">
        <BlogCardThree
          title="Island Feast Gallery"
          description="Explore our vibrant collection of authentic Caribbean dishes, fresh ingredients, and behind-the-scenes moments from the grill."
          tag="Visual Journey"
          tagIcon={Camera}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          blogs={[
            {
              id: "jerk-pork",              category: "Main Dishes",              title: "Jerk Pork Did Not Disappoint",              excerpt:
                "Perfectly seasoned and grilled, bursting with island spices and authentic Jamaican flavor.",              imageSrc:
                "data:image/svg+xml,%3Csvg xmlns=?_wi=5'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Jerk pork platter with rice and tropical slaw",              authorName: "Caribbean Flair Team",              authorAvatar:
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e8e8e8'/%3E%3Ctext x='50%' y='50%' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EAuthor%3C/text%3E%3C/svg%3E",              date: "Fresh Daily"
            },
            {
              id: "curry-goat",              category: "Featured",              title: "Curry Goat - A Community Favorite",              excerpt:
                "Tender, aromatic, and cooked to perfection. Every bite transports you straight to Jamaica.",              imageSrc:
                "data:image/svg+xml,%3Csvg xmlns=?_wi=6'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Rich curry goat served over rice and peas",              authorName: "Caribbean Flair Team",              authorAvatar:
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e8e8e8'/%3E%3Ctext x='50%' y='50%' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EAuthor%3C/text%3E%3C/svg%3E",              date: "Popular Choice"
            },
            {
              id: "festival-sides",              category: "Sides",              title: "Festival Dumplings & Tropical Slaw",              excerpt:
                "Crispy, golden festival dumplings paired with our signature tropical slaw for the perfect complement.",              imageSrc:
                "data:image/svg+xml,%3Csvg xmlns=?_wi=7'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt:
                "Festival dumplings with tropical slaw and mac and cheese",              authorName: "Caribbean Flair Team",              authorAvatar:
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e8e8e8'/%3E%3Ctext x='50%' y='50%' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EAuthor%3C/text%3E%3C/svg%3E",              date: "Must Try"
            },
            {
              id: "escovitch-fish",              category: "Seafood",              title: "Escovitch Fish - Island Tradition",              excerpt:
                "Fresh fish prepared in authentic Jamaican style with pickled vegetables and bold island flavors.",              imageSrc:
                "data:image/svg+xml,%3Csvg xmlns=?_wi=8'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Escovitch fish with pickled vegetables and lime",              authorName: "Caribbean Flair Team",              authorAvatar:
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e8e8e8'/%3E%3Ctext x='50%' y='50%' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EAuthor%3C/text%3E%3C/svg%3E",              date: "Customer Favorite"
            },
            {
              id: "mac-cheese",              category: "Sides",              title: "Creamy Island Mac & Cheese",              excerpt:
                "Smooth, rich, and soul-warming comfort food that pairs perfectly with any of our signature mains.",              imageSrc:
                "data:image/svg+xml,%3Csvg xmlns=?_wi=9'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Creamy mac and cheese side dish",              authorName: "Caribbean Flair Team",              authorAvatar:
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e8e8e8'/%3E%3Ctext x='50%' y='50%' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EAuthor%3C/text%3E%3C/svg%3E",              date: "Comfort Classic"
            },
            {
              id: "grill-action",              category: "Behind the Scenes",              title: "Fresh Off The Grill - Live Action",              excerpt:
                "Watch our expert grill masters prepare your meal with passion, precision, and authentic Caribbean technique.",              imageSrc:
                "data:image/svg+xml,%3Csvg xmlns=?_wi=10'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              imageAlt: "Chef grilling jerk meats on foil with smoke",              authorName: "Caribbean Flair Team",              authorAvatar:
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e8e8e8'/%3E%3Ctext x='50%' y='50%' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EAuthor%3C/text%3E%3C/svg%3E",              date: "Daily Special"
            },
          ]}
        />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Real Island Flavor Stories"
          description="Hear from our community about their authentic Caribbean Flair dining experience."
          tag="5-Star Rated"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          showRating={true}
          testimonials={[
            {
              id: "review-1",              name: "A wonderful escape from the rush",              handle: "@happycustomer",              testimonial: "Caribbean Flair is like stepping into a tropical paradise in the middle of Lehigh Acres. The food is authentic, the portions are generous, and you can taste the passion in every bite. Highly recommend!",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773858120920-110y3vfr.png",              imageAlt: "Happy customer"
            },
            {
              id: "review-2",              name: "Authentic flavors that transport you",              handle: "@flavorseeker",              testimonial: "Every time I order from Caribbean Flair, I feel like I'm on vacation. The jerk seasoning is perfect, the sides are fresh, and Teria and Deb's passion for the business really shows. This is the real deal!",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773858120921-5ihmnmey.png",              imageAlt: "Satisfied diner"
            },
            {
              id: "review-3",              name: "Supporting local black-owned excellence",              handle: "@communityproud",              testimonial: "I love supporting local black-owned and women-owned businesses, and Caribbean Flair is setting the bar high. The quality of food is on par with restaurants charging twice the price. This is what community means!",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773858120921-a2zauysc.png",              imageAlt: "Community supporter"
            },
            {
              id: "review-4",              name: "Best food truck experience ever",              handle: "@foodlover",              testimonial: "I've been to a lot of food trucks, but Caribbean Flair stands out. Fresh ingredients, perfect seasoning, quick service, and amazing people running it. This is exactly what Lehigh Acres needed!",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773858120921-ulw90m6s.png",              imageAlt: "Food enthusiast"
            },
            {
              id: "review-5",              name: "Worth every penny",              handle: "@valueseeker",              testimonial: "For the quality and quantity of food you get at Caribbean Flair, the prices are incredibly fair. You're not just getting a meal, you're getting an authentic Caribbean experience made with love and expertise.",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773858120921-j0in75sv.png",              imageAlt: "Value-conscious customer"
            },
          ]}
        />
      </div>

      {/* Owners Spotlight Section */}
      <div id="owners-spotlight" data-section="owners-spotlight">
        <TeamCardTwo
          title="Meet the Owners"
          description="Teris Bryan and Deb Farrell: Passionate entrepreneurs bringing authentic Caribbean soul to Lehigh Acres."
          tag="Community Leaders"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="two-columns-alternating-heights"
          members={[
            {
              id: "teria-bryant",              name: "Teria Bryant",              role: "Founder & Head Chef",              description:
                "Teria brings 15+ years of Caribbean culinary expertise and authentic island passion to every dish. They transformed Caribbean Flair from a dream into a premium dining destination serving Lehigh Acres with pride.",              videoSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773857612004-vaw7ydy1.jpg",              videoAriaLabel: "Teria Bryant, founder of Caribbean Flair",              socialLinks: [
                {
                  icon: Facebook,
                  url: "https://www.facebook.com/share/1CckZyvyXX/?mibextid=wwXIfr"
                },
              ],
            },
            {
              id: "deb-farrell",              name: "Deb Farrell",              role: "Co-Owner & Operations Lead",              description:
                "Deb ensures every customer experience is smooth, welcoming, and unforgettable. Together with Teria, they are building a thriving Black- and women-owned business that celebrates Caribbean culture and community impact.",              videoSrc:
                "data:image/svg+xml,%3Csvg xmlns=?_wi=18'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E",              videoAriaLabel: "Deb Farrell, co-owner of Caribbean Flair",              socialLinks: [
                {
                  icon: Facebook,
                  url: "https://www.facebook.com/share/1CckZyvyXX/?mibextid=wwXIfr"
                },
              ],
            },
          ]}
        />
      </div>

      {/* Final CTA Section */}
      <div id="final-cta" data-section="final-cta">
        <FeatureCardTen
          title="Order Your Island Feast Today"
          description="Experience authentic Jamaican island fusion made fresh, packed with flavor, and served with love. Start your Caribbean journey now—order online or call us for the ultimate food truck experience."
          tag="Ready to Order"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Order Online Now",              href: "/menu"
            },
            {
              text: "Call (239) 785-0423",              href: "tel:2397850423"
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: "fast-delivery",              title: "Fast & Fresh",              description:
                "Grilled fresh to order. Your meal arrives hot, delicious, and packed with island flavor.",              media: {
                imageSrc:
                  "data:image/svg+xml,%3Csvg xmlns=?_wi=19'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E"
              },
              items: [
                {
                  icon: Zap,
                  text: "Ready in 15 minutes"
                },
                {
                  icon: TrendingUp,
                  text: "Peak fresh quality"
                },
              ],
              reverse: false,
            },
          ]}
        />
      </div>

      {/* Footer with Local Map Info and Social Links */}
      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="data:image/svg+xml,%3Csvg xmlns=?_wi=20'http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e8e8e8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ETemplate Image%3C/text%3E%3C/svg%3E"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          logoText="Caribbean Flair"
          copyrightText="© 2025 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}