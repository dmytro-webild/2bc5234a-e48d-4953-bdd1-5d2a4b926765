"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Flame } from "lucide-react";

export default function OrderPage() {
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
      title: "Quick Links",
      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "Gallery", href: "/gallery" },
        { label: "Reviews", href: "/reviews" },
      ],
    },
    {
      title: "Order & Contact",
      items: [
        { label: "Order Online", href: "/order" },
        { label: "Call Us", href: "tel:2397850423" },
        { label: "Locations & Hours", href: "/locations" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Connect With Us",
      items: [
        { label: "Facebook", href: "https://facebook.com/caribbeanflair" },
        { label: "About Us", href: "/about" },
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
      ],
    },
    {
      title: "Located In",
      items: [
        { label: "801 Leeland Heights Blvd W", href: "#map" },
        { label: "Lehigh Acres, FL 33936", href: "#map" },
        { label: "Open Until 9PM", href: "/locations" },
        { label: "Delivery Available", href: "/order" },
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
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Caribbean Flair"
          navItems={navItems}
          button={{
            text: "Order Now",
            href: "/order",
          }}
        />
      </div>

      <div id="signature-dishes" data-section="signature-dishes">
        <ProductCardFour
          title="Signature Island Flavors"
          description="Discover our most beloved authentic Caribbean dishes, expertly crafted and grilled fresh daily. Order your favorites now and experience premium island cuisine delivered hot and delicious."
          tag="Most Ordered"
          tagIcon={Flame}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Explore Full Menu",
              href: "/menu",
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
          products={[
            {
              id: "jerk-chicken",
              name: "Jerk Chicken Platter",
              price: "$15.95",
              variant: "Full Rack",
              imageSrc: "http://img.b2bpic.net/free-photo/from-shrimps-batter-with-red-rice-greens-white-plate_176474-2654.jpg?_wi=3",
              imageAlt: "Jerk chicken grilled on foil with spices",
              onProductClick: undefined,
              onFavorite: undefined,
              isFavorited: false,
            },
            {
              id: "curry-shrimp",
              name: "Curry Shrimp Platter",
              price: "$16.95",
              variant: "Fresh Daily",
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-fried-eggs-with-shrimps-vegetables-pan-served-with-sauces_140725-11952.jpg?_wi=4",
              imageAlt: "Curry shrimp over rice and peas",
              onProductClick: undefined,
              onFavorite: undefined,
              isFavorited: false,
            },
            {
              id: "conch-fritters",
              name: "Conch Fritters Combo",
              price: "$12.95",
              variant: "6 Pieces",
              imageSrc: "http://img.b2bpic.net/free-photo/chicken-nuggets-served-with-french-fries-sauces_140725-5759.jpg?_wi=3",
              imageAlt: "Golden conch fritters with dipping sauce",
              onProductClick: undefined,
              onFavorite: undefined,
              isFavorited: false,
            },
          ]}
        />
      </div>

      <div id="order-featured" data-section="order-featured">
        <ProductCardFour
          title="Premium Island Combinations"
          description="Build your perfect Caribbean meal with our curated combinations. Each platter includes fresh sides and authentic island flavors prepared fresh on the grill."
          tag="Customer Favorites"
          tagIcon={Flame}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "View All Platters",
              href: "/menu",
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          useInvertedBackground={true}
          products={[
            {
              id: "jerk-pork-combo",
              name: "Jerk Pork Festival Combo",
              price: "$17.95",
              variant: "Complete Platter",
              imageSrc: "http://img.b2bpic.net/free-photo/hot-spicy-grilled-pork-salad-with-berry-rice_1339-6325.jpg?_wi=4",
              imageAlt: "Jerk pork platter with rice and tropical slaw",
              onProductClick: undefined,
              onFavorite: undefined,
              isFavorited: false,
            },
            {
              id: "curry-goat-combo",
              name: "Curry Goat Island Feast",
              price: "$18.95",
              variant: "Family Style",
              imageSrc: "http://img.b2bpic.net/free-photo/rice-dish-with-sauce-near-spices_23-2147894777.jpg?_wi=4",
              imageAlt: "Rich curry goat served over rice and peas",
              onProductClick: undefined,
              onFavorite: undefined,
              isFavorited: false,
            },
            {
              id: "escovitch-fish-combo",
              name: "Escovitch Fish Special",
              price: "$16.95",
              variant: "Fresh Catch",
              imageSrc: "http://img.b2bpic.net/free-photo/grilled-chicken-served-with-aubergine-lemon-parsley_140725-1554.jpg?_wi=3",
              imageAlt: "Escovitch fish with pickled vegetables and lime",
              onProductClick: undefined,
              onFavorite: undefined,
              isFavorited: false,
            },
            {
              id: "seafood-festival",
              name: "Seafood Festival Platter",
              price: "$19.95",
              variant: "Premium Mix",
              imageSrc: "http://img.b2bpic.net/free-photo/deep-fried-samosas-rustic-crockery-plate-generated-by-ai_188544-41080.jpg?_wi=4",
              imageAlt: "Festival dumplings with tropical slaw and mac and cheese",
              onProductClick: undefined,
              onFavorite: undefined,
              isFavorited: false,
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208291.jpg?_wi=10"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          logoText="Caribbean Flair"
          copyrightText="© 2025 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}