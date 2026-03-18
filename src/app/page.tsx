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
  Instagram,
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
        { label: "Facebook", href: "https://facebook.com/caribbeanflair" },
        { label: "Instagram", href: "https://instagram.com/caribbeanflair" },
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
            text: "Order Now",            href: "#signature-dishes"}}
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
              <button className="w-full bg-primary-cta text-white py-2 rounded-lg font-semibold hover:opacity-90">
                Order Online
              </button>
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
            href="#signature-dishes"
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
              text: "Order Online Now",              href: "#signature-dishes"},
            {
              text: "View Full Menu",              href: "#signature-dishes"},
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-2gw0wih3.jpg?_wi=3"
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
              text: "Explore Full Menu",              href: "#signature-dishes"},
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
          products={[
            {
              id: "jerk-chicken",              name: "Jerk Chicken Platter",              price: "$15.95",              variant: "Full Rack",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-wha24yfi.jpg?_wi=2",              imageAlt: "Jerk chicken grilled on foil with spices"},
            {
              id: "curry-shrimp",              name: "Curry Shrimp Platter",              price: "$16.95",              variant: "Fresh Daily",              imageSrc:
                "http://img.b2bpic.net/free-photo/side-view-fried-eggs-with-shrimps-vegetables-pan-served-with-sauces_140725-11952.jpg?_wi=1",              imageAlt: "Curry shrimp over rice and peas"},
            {
              id: "conch-fritters",              name: "Conch Fritters Combo",              price: "$12.95",              variant: "6 Pieces",              imageSrc:
                "http://img.b2bpic.net/free-photo/chicken-nuggets-served-with-french-fries-sauces_140725-5759.jpg?_wi=1",              imageAlt: "Golden conch fritters with dipping sauce"},
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
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-qcfdeh7f.jpg?_wi=2",              imageAlt: "Jerk pork platter with rice and tropical slaw",              authorName: "Caribbean Flair Team",              authorAvatar:
                "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",              date: "Fresh Daily"},
            {
              id: "curry-goat",              category: "Featured",              title: "Curry Goat - A Community Favorite",              excerpt:
                "Tender, aromatic, and cooked to perfection. Every bite transports you straight to Jamaica.",              imageSrc:
                "http://img.b2bpic.net/free-photo/rice-dish-with-sauce-near-spices_23-2147894777.jpg?_wi=1",              imageAlt: "Rich curry goat served over rice and peas",              authorName: "Caribbean Flair Team",              authorAvatar:
                "http://img.b2bpic.net/free-vector/colorful-avatars_23-2147502919.jpg",              date: "Popular Choice"},
            {
              id: "festival-sides",              category: "Sides",              title: "Festival Dumplings & Tropical Slaw",              excerpt:
                "Crispy, golden festival dumplings paired with our signature tropical slaw for the perfect complement.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-dk53z92a.jpg?_wi=2",              imageAlt:
                "Festival dumplings with tropical slaw and mac and cheese",              authorName: "Caribbean Flair Team",              authorAvatar:
                "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",              date: "Must Try"},
            {
              id: "escovitch-fish",              category: "Seafood",              title: "Escovitch Fish - Island Tradition",              excerpt:
                "Fresh fish prepared in authentic Jamaican style with pickled vegetables and bold island flavors.",              imageSrc:
                "http://img.b2bpic.net/free-photo/grilled-chicken-served-with-aubergine-lemon-parsley_140725-1554.jpg?_wi=1",              imageAlt: "Escovitch fish with pickled vegetables and lime",              authorName: "Caribbean Flair Team",              authorAvatar:
                "http://img.b2bpic.net/free-photo/young-male-holding-hands-pockets-white-shirt-jacket-looking-elegant-front-view_176474-99655.jpg",              date: "Customer Favorite"},
            {
              id: "mac-cheese",              category: "Sides",              title: "Creamy Island Mac & Cheese",              excerpt:
                "Smooth, rich, and soul-warming comfort food that pairs perfectly with any of our signature mains.",              imageSrc:
                "http://img.b2bpic.net/free-photo/delicious-food-presentation_23-2151914003.jpg?_wi=1",              imageAlt: "Creamy mac and cheese side dish",              authorName: "Caribbean Flair Team",              authorAvatar:
                "http://img.b2bpic.net/free-photo/pleased-young-brunette-caucasian-girl-looks-camera_141793-103873.jpg",              date: "Comfort Classic"},
            {
              id: "grill-action",              category: "Behind the Scenes",              title: "Fresh Off The Grill - Live Action",              excerpt:
                "Watch our expert grill masters prepare your meal with passion, precision, and authentic Caribbean technique.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-y2tu4f81.jpg?_wi=2",              imageAlt: "Chef grilling jerk meats on foil with smoke",              authorName: "Caribbean Flair Team",              authorAvatar:
                "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",              date: "Daily Special"},
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
              id: "review-1",              name: "Sarah Johnson",              handle: "@sarahjohn2024",              testimonial:
                "Every dish packed with authentic island flavor! Teria and Deb truly know how to deliver Caribbean excellence.",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-woman-eating-delicious-tiramisu-cafe_1303-25270.jpg?_wi=1",              imageAlt: "Sarah Johnson smiling"},
            {
              id: "review-2",              name: "Michael Chen",              handle: "@mikeflavorseek",              testimonial:
                "Jerk pork did not disappoint! Best food truck in Lehigh Acres. Fresh, authentic, and made with real passion.",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/couple-enjoying-spending-good-time-together-while-having-date-restaurant_58466-16035.jpg?_wi=1",              imageAlt: "Michael Chen enjoying Caribbean Flair"},
            {
              id: "review-3",              name: "Amanda Davis",              handle: "@amandataste",              testimonial:
                "The curry shrimp is absolutely incredible! You can taste the love in every bite. Supporting Black-owned, women-owned businesses never tasted so good.",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/sideways-shot-attractive-curly-woman-has-happy-expression-enjoys-electronic-song-modern-headphones-has-recreation-time-reads-text-message-cell-phone_273609-3485.jpg?_wi=1",              imageAlt: "Amanda Davis with Caribbean Flair meal"},
            {
              id: "review-4",              name: "David Martinez",              handle: "@davidsflavorquests",              testimonial:
                "Finally, real Caribbean food in Lehigh Acres! The menu, the quality, the service—everything is top-tier. This is my new favorite spot.",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/crazy-dealer-happy-expression_1194-4005.jpg?_wi=1",              imageAlt: "David Martinez at Caribbean Flair"},
            {
              id: "review-5",              name: "Jessica Williams",              handle: "@jessicaeats_local",              testimonial:
                "Conch fritters are crispy heaven! The whole experience feels premium yet so authentic. Teria and Deb are changing the food game.",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/friends-eating-barbecue_23-2148733607.jpg?_wi=1",              imageAlt: "Jessica Williams enjoying meal"},
            {
              id: "review-6",              name: "Robert Thompson",              handle: "@robfeeds",              testimonial:
                "Island fusion done right. The quality of ingredients and cooking technique is professional-level. Worth every penny and the drive. Highly recommend!",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/woman-with-thumbs-up_1149-1163.jpg?_wi=1",              imageAlt: "Robert Thompson thumbs up"},
          ]}
        />
      </div>

      {/* Owners Spotlight Section */}
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
              id: "teria-bryant",              name: "Teria Bryant",              role: "Founder & Head Chef",              description:
                "Teria brings 15+ years of Caribbean culinary expertise and authentic island passion to every dish. Her vision transformed Caribbean Flair from a dream into a premium dining destination serving Lehigh Acres with pride.",              imageSrc:
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
              text: "Order Online Now",              href: "#signature-dishes"},
            {
              text: "Call (239) 785-0423",              href: "tel:2397850423"},
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
                  "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg?_wi=1"},
              items: [
                {
                  icon: Zap,
                  text: "Ready in 15 minutes"},
                {
                  icon: TrendingUp,
                  text: "Peak fresh quality"},
              ],
              reverse: false,
            },
          ]}
        />
      </div>

      {/* Footer with Local Map Info and Social Links */}
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