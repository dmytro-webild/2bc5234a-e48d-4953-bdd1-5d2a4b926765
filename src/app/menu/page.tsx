"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Award, Zap } from "lucide-react";
import { useState } from "react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("mains");

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
        { label: "Gallery", href: "/" },
        { label: "Reviews", href: "/" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Order Online", href: "/" },
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
        id: "jerk-chicken",        name: "Jerk Chicken Platter",        price: "$15.95",        variant: "Full Rack",        imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-2gw0wih3.jpg",        imageAlt: "Jerk chicken platter"},
      {
        id: "curry-goat",        name: "Curry Goat Platter",        price: "$17.95",        variant: "Premium Cut",        imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-wha24yfi.jpg",        imageAlt: "Curry goat platter"},
      {
        id: "jerk-pork",        name: "Jerk Pork Platter",        price: "$16.95",        variant: "Tender Cut",        imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-qcfdeh7f.jpg",        imageAlt: "Jerk pork platter"},
      {
        id: "escovitch-fish",        name: "Escovitch Fish",        price: "$18.95",        variant: "Fresh Daily",        imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-dk53z92a.jpg",        imageAlt: "Escovitch fish"},
    ],
    sandwiches: [
      {
        id: "jerk-chicken-sandwich",        name: "Jerk Chicken Sandwich",        price: "$11.95",        variant: "On Coco Bread",        imageSrc: "http://img.b2bpic.net/free-photo/side-view-fried-eggs-with-shrimps-vegetables-pan-served-with-sauces_140725-11952.jpg?_wi=1",        imageAlt: "Jerk chicken sandwich"},
      {
        id: "curry-shrimp-sandwich",        name: "Curry Shrimp Sandwich",        price: "$12.95",        variant: "Loaded",        imageSrc: "http://img.b2bpic.net/free-photo/from-shrimps-batter-with-red-rice-greens-white-plate_176474-2654.jpg?_wi=1",        imageAlt: "Curry shrimp sandwich"},
      {
        id: "ackee-saltfish-sandwich",        name: "Ackee & Saltfish Sandwich",        price: "$10.95",        variant: "Traditional",        imageSrc: "http://img.b2bpic.net/free-photo/chicken-nuggets-served-with-french-fries-sauces_140725-5759.jpg?_wi=1",        imageAlt: "Ackee and saltfish sandwich"},
    ],
    sides: [
      {
        id: "rice-peas",        name: "Rice & Peas",        price: "$3.95",        variant: "Island Classic",        imageSrc: "http://img.b2bpic.net/free-photo/rice-dish-with-sauce-near-spices_23-2147894777.jpg?_wi=1",        imageAlt: "Rice and peas"},
      {
        id: "mac-cheese",        name: "Creamy Mac & Cheese",        price: "$4.95",        variant: "Comfort Classic",        imageSrc: "http://img.b2bpic.net/free-photo/delicious-food-presentation_23-2151914003.jpg?_wi=1",        imageAlt: "Creamy mac and cheese"},
      {
        id: "festival-dumplings",        name: "Festival Dumplings",        price: "$3.50",        variant: "6 Pieces",        imageSrc: "http://img.b2bpic.net/free-photo/deep-fried-samosas-rustic-crockery-plate-generated-by-ai_188544-41080.jpg?_wi=1",        imageAlt: "Festival dumplings"},
      {
        id: "tropical-slaw",        name: "Tropical Slaw",        price: "$2.95",        variant: "Fresh Daily",        imageSrc: "http://img.b2bpic.net/free-photo/grilled-chicken-served-with-aubergine-lemon-parsley_140725-1554.jpg?_wi=1",        imageAlt: "Tropical slaw"},
    ],
    drinks: [
      {
        id: "ginger-beer",        name: "Island Ginger Beer",        price: "$3.50",        variant: "Refreshing",        imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg?_wi=1",        imageAlt: "Ginger beer"},
      {
        id: "sorrel-punch",        name: "Sorrel Punch",        price: "$3.95",        variant: "Seasonal",        imageSrc: "http://img.b2bpic.net/free-photo/couple-enjoying-spending-good-time-together-while-having-date-restaurant_58466-16035.jpg?_wi=1",        imageAlt: "Sorrel punch"},
      {
        id: "jamaica-juice",        name: "Jamaica Juice Special",        price: "$4.50",        variant: "House Blend",        imageSrc: "http://img.b2bpic.net/free-photo/sideways-shot-attractive-curly-woman-has-happy-expression-enjoys-electronic-song-modern-headphones-has-recreation-time-reads-text-message-cell-phone_273609-3485.jpg?_wi=1",        imageAlt: "Jamaica juice special"},
    ],
    specials: [
      {
        id: "conch-fritters",        name: "Conch Fritters Combo",        price: "$12.95",        variant: "6 Pieces",        imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-y2tu4f81.jpg",        imageAlt: "Conch fritters combo"},
      {
        id: "curry-shrimp",        name: "Curry Shrimp Platter",        price: "$16.95",        variant: "Fresh Daily",        imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-barbecue_23-2148733607.jpg?_wi=1",        imageAlt: "Curry shrimp platter"},
      {
        id: "family-bundle",        name: "Family Island Bundle",        price: "$49.95",        variant: "Serves 4",        imageSrc: "http://img.b2bpic.net/free-photo/friends-having-nice-barbeque-together_23-2149271905.jpg?_wi=1",        imageAlt: "Family island bundle"},
    ],
  };

  const categoryLabels = {
    mains: "Mains",    sandwiches: "Sandwiches",    sides: "Sides",    drinks: "Drinks",    specials: "Specials"};

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
          title="Explore Our Island Menu"
          description="Authentic Caribbean flavors crafted fresh daily. Browse our full selection of signature dishes, fresh sides, and island refreshments."
          tag="Interactive Menu"
          tagIcon={Award}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Order Online Now",              href: "#"},
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-vector/summer-label-collectio_23-2148160410.jpg"
          imageAlt="Caribbean Flair Menu"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Menu hero section"
        />
      </div>

      {/* Interactive Menu with Tabs */}
      <div id="menu-items" data-section="menu-items" className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === key
                    ? "bg-[var(--primary-cta)] text-white shadow-lg"
                    : "bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--background-accent)]"
                }`}
                aria-pressed={activeCategory === key}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item) => (
              <div
                key={item.id}
                className="bg-[var(--card)] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative overflow-hidden h-48 bg-[var(--background-accent)]">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[var(--foreground)] opacity-70 mb-3">
                    {item.variant}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[var(--primary-cta)]">
                      {item.price}
                    </span>
                    <button className="bg-[var(--primary-cta)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div id="featured-menu" data-section="featured-menu">
        <ProductCardFour
          title="Customer Favorites"
          description="Our most ordered dishes that keep customers coming back for authentic Caribbean excellence."
          tag="Top Picks"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Browse Full Menu",              href: "#menu-items"},
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
          products={[
            {
              id: "jerk-chicken",              name: "Jerk Chicken Platter",              price: "$15.95",              variant: "Full Rack",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-2gw0wih3.jpg",              imageAlt: "Jerk chicken platter"},
            {
              id: "curry-shrimp",              name: "Curry Shrimp Platter",              price: "$16.95",              variant: "Fresh Daily",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-wha24yfi.jpg",              imageAlt: "Curry shrimp platter"},
            {
              id: "conch-fritters",              name: "Conch Fritters Combo",              price: "$12.95",              variant: "6 Pieces",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-y2tu4f81.jpg",              imageAlt: "Conch fritters combo"},
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