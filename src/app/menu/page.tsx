"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  Award,
  Flame,
  Star,
  Zap,
  TrendingUp,
  Facebook,
} from "lucide-react";
import { useState } from "react";

export default function MenuPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About Us", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "Locations", id: "locations" },
  ];

  const [activeCategory, setActiveCategory] = useState("mains");

  const footerColumns = [
    {
      title: "Quick Links",      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "Gallery", href: "/gallery" },
        { label: "Reviews", href: "/" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Order Online", href: "/menu" },
        { label: "Call Us", href: "tel:2397850423" },
        { label: "Locations & Hours", href: "/" },
        { label: "Contact", href: "/" },
      ],
    },
    {
      title: "Connect With Us",      items: [
        { label: "Facebook", href: "https://facebook.com/caribbeanflair" },
        { label: "About Us", href: "/about" },
        { label: "Privacy Policy", href: "/" },
        { label: "Terms of Service", href: "/" },
      ],
    },
    {
      title: "Located In",      items: [
        { label: "801 Leeland Heights Blvd W", href: "/" },
        { label: "Lehigh Acres, FL 33936", href: "/" },
        { label: "Open Until 9PM", href: "/" },
        { label: "Delivery Available", href: "/" },
      ],
    },
  ];

  const menuItems = {
    mains: [
      {
        id: "jerk-chicken",        name: "Jerk Chicken Platter",        price: "$15.95",        variant: "Full Rack",        imageSrc:
          "http://img.b2bpic.net/free-photo/from-shrimps-batter-with-red-rice-greens-white-plate_176474-2654.jpg?_wi=1",        imageAlt: "Jerk chicken grilled on foil with spices"},
      {
        id: "curry-goat",        name: "Curry Goat Platter",        price: "$17.95",        variant: "Tender & Aromatic",        imageSrc:
          "http://img.b2bpic.net/free-photo/rice-dish-with-sauce-near-spices_23-2147894777.jpg?_wi=1",        imageAlt: "Curry goat served over rice and peas"},
      {
        id: "jerk-pork",        name: "Jerk Pork Platter",        price: "$16.95",        variant: "Juicy & Spiced",        imageSrc:
          "http://img.b2bpic.net/free-photo/hot-spicy-grilled-pork-salad-with-berry-rice_1339-6325.jpg?_wi=1",        imageAlt: "Jerk pork platter with rice"},
      {
        id: "escovitch-fish",        name: "Escovitch Fish",        price: "$18.95",        variant: "Island Tradition",        imageSrc:
          "http://img.b2bpic.net/free-photo/grilled-chicken-served-with-aubergine-lemon-parsley_140725-1554.jpg?_wi=1",        imageAlt: "Escovitch fish with pickled vegetables"},
    ],
    sandwiches: [
      {
        id: "jerk-chicken-sandwich",        name: "Jerk Chicken Sandwich",        price: "$11.95",        variant: "Fresh Bread",        imageSrc:
          "http://img.b2bpic.net/free-photo/from-shrimps-batter-with-red-rice-greens-white-plate_176474-2654.jpg?_wi=1",        imageAlt: "Jerk chicken sandwich with slaw"},
      {
        id: "curry-goat-sandwich",        name: "Curry Goat Sandwich",        price: "$12.95",        variant: "Hearty & Flavorful",        imageSrc:
          "http://img.b2bpic.net/free-photo/rice-dish-with-sauce-near-spices_23-2147894777.jpg?_wi=1",        imageAlt: "Curry goat sandwich"},
      {
        id: "pulled-pork-sandwich",        name: "Pulled Pork Sandwich",        price: "$11.95",        variant: "Smoky & Tender",        imageSrc:
          "http://img.b2bpic.net/free-photo/hot-spicy-grilled-pork-salad-with-berry-rice_1339-6325.jpg?_wi=1",        imageAlt: "Pulled pork sandwich"},
    ],
    sides: [
      {
        id: "rice-peas",        name: "Rice & Peas",        price: "$4.95",        variant: "Classic Caribbean",        imageSrc:
          "http://img.b2bpic.net/free-photo/rice-dish-with-sauce-near-spices_23-2147894777.jpg?_wi=1",        imageAlt: "Rice and peas side"},
      {
        id: "mac-cheese",        name: "Creamy Mac & Cheese",        price: "$5.95",        variant: "Comfort Classic",        imageSrc:
          "http://img.b2bpic.net/free-photo/delicious-food-presentation_23-2151914003.jpg?_wi=1",        imageAlt: "Creamy mac and cheese"},
      {
        id: "festival",        name: "Festival Dumplings",        price: "$4.95",        variant: "Golden & Crispy",        imageSrc:
          "http://img.b2bpic.net/free-photo/deep-fried-samosas-rustic-crockery-plate-generated-by-ai_188544-41080.jpg?_wi=1",        imageAlt: "Festival dumplings"},
    ],
    drinks: [
      {
        id: "sorrel-punch",        name: "Sorrel Punch",        price: "$3.95",        variant: "16 oz",        imageSrc:
          "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg?_wi=1",        imageAlt: "Tropical sorrel punch"},
      {
        id: "ginger-beer",        name: "Island Ginger Beer",        price: "$3.95",        variant: "Refreshing",        imageSrc:
          "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg?_wi=1",        imageAlt: "Ginger beer"},
    ],
    specials: [
      {
        id: "combo-1",        name: "Island Feast Combo",        price: "$22.95",        variant: "Jerk Chicken + Sides",        imageSrc:
          "http://img.b2bpic.net/free-photo/from-shrimps-batter-with-red-rice-greens-white-plate_176474-2654.jpg?_wi=1",        imageAlt: "Island feast combo"},
      {
        id: "seafood-special",        name: "Seafood Special",        price: "$24.95",        variant: "Curry Shrimp + Sides",        imageSrc:
          "http://img.b2bpic.net/free-photo/side-view-fried-eggs-with-shrimps-vegetables-pan-served-with-sauces_140725-11952.jpg?_wi=1",        imageAlt: "Seafood special"},
    ],
  };

  const getMenuItems = () => {
    return menuItems[activeCategory as keyof typeof menuItems] || [];
  };

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

        #menu-categories {
          animation-delay: 0.2s;
        }

        #testimonials {
          animation-delay: 0.3s;
        }

        #final-cta {
          animation-delay: 0.4s;
        }

        #footer {
          animation-delay: 0.5s;
        }

        img {
          animation: slideInFromRight 1s ease-out forwards;
          opacity: 0;
        }

        #hero img {
          animation-delay: 0.3s;
        }

        #menu-categories img {
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

      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Caribbean Flair"
          navItems={navItems}
          button={{
            text: "Order Now",            href: "/menu"}}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Browse Our Island Menu"
          description="Explore authentic Caribbean flavors. From jerk meats to curry dishes, each item is crafted fresh and packed with island soul."
          tag="Fresh Daily"
          tagIcon={Flame}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "See Full Menu",              href: "/full-menu"},
            {
              text: "Call to Order",              href: "tel:2397850423"},
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-vector/summer-label-collectio_23-2148160410.jpg?_wi=3"
          imageAlt="Caribbean Flair Menu"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Menu page hero section"
        />
      </div>

      {/* Menu Categories Section */}
      <div id="menu-categories" data-section="menu-categories" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "mains", label: "Mains" },
              { id: "sandwiches", label: "Sandwiches" },
              { id: "sides", label: "Sides" },
              { id: "drinks", label: "Drinks" },
              { id: "specials", label: "Specials" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full transition-all ${                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <ProductCardFour
            title={`${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Selection`}
            description={`Discover our premium ${activeCategory} offerings, each crafted with authentic Caribbean passion.`}
            tag="Featured"
            tagIcon={Flame}
            tagAnimation="slide-up"
            buttons={[
              {
                text: "See Full Menu",                href: "/full-menu"},
            ]}
            buttonAnimation="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            useInvertedBackground={false}
            products={getMenuItems()}
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Customers Say About Our Menu"
          description="Real reviews from real Caribbean Flair customers who love our authentic flavors."
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
                "Every dish on the menu is packed with authentic island flavor! The variety is amazing.",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-woman-eating-delicious-tiramisu-cafe_1303-25270.jpg?_wi=1",              imageAlt: "Sarah Johnson"},
            {
              id: "review-2",              name: "Michael Chen",              handle: "@mikeflavorseek",              testimonial:
                "Tried everything on the menu. Each item is better than the last. Highly recommend!",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/couple-enjoying-spending-good-time-together-while-having-date-restaurant_58466-16035.jpg?_wi=1",              imageAlt: "Michael Chen"},
            {
              id: "review-3",              name: "Amanda Davis",              handle: "@amandataste",              testimonial:
                "The menu showcases real Caribbean recipes. You can taste the authenticity in every bite.",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/sideways-shot-attractive-curly-woman-has-happy-expression-enjoys-electronic-song-modern-headphones-has-recreation-time-reads-text-message-cell-phone_273609-3485.jpg?_wi=1",              imageAlt: "Amanda Davis"},
          ]}
        />
      </div>

      {/* Final CTA Section */}
      <div id="final-cta" data-section="final-cta">
        <FeatureCardTen
          title="Ready to Order?"
          description="Choose your favorite items from our authentic Caribbean menu and get them fresh off the grill."
          tag="Ready to Order"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Call (239) 785-0423",              href: "tel:2397850423"},
            {
              text: "Visit Us Today",              href: "/"},
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: "quality",              title: "Authentic Quality",              description:
                "Every item prepared with premium ingredients and authentic Caribbean techniques.",              media: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg?_wi=1"},
              items: [
                {
                  icon: Zap,
                  text: "Fresh Daily"},
                {
                  icon: TrendingUp,
                  text: "Peak Quality"},
              ],
              reverse: false,
            },
          ]}
        />
      </div>

      {/* Footer */}
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
