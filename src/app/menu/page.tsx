"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Flame, Zap, TrendingUp } from "lucide-react";

export default function MenuPage() {
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
        { label: "Gallery", href: "/" },
        { label: "Reviews", href: "/" },
      ],
    },
    {
      title: "Order & Contact",
      items: [
        { label: "Order Online", href: "/" },
        { label: "Call Us", href: "tel:2397850423" },
        { label: "Locations & Hours", href: "/" },
        { label: "Contact", href: "/" },
      ],
    },
    {
      title: "Connect With Us",
      items: [
        { label: "Facebook", href: "https://facebook.com/caribbeanflair" },
        { label: "About Us", href: "/" },
        { label: "Privacy Policy", href: "/" },
        { label: "Terms of Service", href: "/" },
      ],
    },
    {
      title: "Located In",
      items: [
        { label: "801 Leeland Heights Blvd W", href: "/" },
        { label: "Lehigh Acres, FL 33936", href: "/" },
        { label: "Open Until 9PM", href: "/" },
        { label: "Delivery Available", href: "/" },
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
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Caribbean Flair"
          navItems={navItems}
          button={{
            text: "Order Now",
            href: "/menu",
          }}
        />
      </div>

      {/* Full Menu Section */}
      <div id="full-menu" data-section="full-menu">
        <ProductCardFour
          title="Complete Island Menu"
          description="Explore our full range of authentic Caribbean dishes, from mains to sides. Every item is prepared fresh to order with premium island ingredients."
          tag="All Dishes"
          tagIcon={Flame}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Back to Home",
              href: "/",
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          gridVariant="bento-grid"
          animationType="slide-up"
          useInvertedBackground={false}
          products={[
            {
              id: "jerk-chicken",
              name: "Jerk Chicken Platter",
              price: "$15.95",
              variant: "Full Rack",
              imageSrc:
                "http://img.b2bpic.net/free-photo/from-shrimps-batter-with-red-rice-greens-white-plate_176474-2654.jpg?_wi=2",
              imageAlt: "Jerk chicken grilled on foil with spices",
            },
            {
              id: "curry-shrimp",
              name: "Curry Shrimp Platter",
              price: "$16.95",
              variant: "Fresh Daily",
              imageSrc:
                "http://img.b2bpic.net/free-photo/side-view-fried-eggs-with-shrimps-vegetables-pan-served-with-sauces_140725-11952.jpg?_wi=2",
              imageAlt: "Curry shrimp over rice and peas",
            },
            {
              id: "conch-fritters",
              name: "Conch Fritters Combo",
              price: "$12.95",
              variant: "6 Pieces",
              imageSrc:
                "http://img.b2bpic.net/free-photo/chicken-nuggets-served-with-french-fries-sauces_140725-5759.jpg?_wi=2",
              imageAlt: "Golden conch fritters with dipping sauce",
            },
            {
              id: "jerk-pork",
              name: "Jerk Pork Platter",
              price: "$16.95",
              variant: "Premium Cut",
              imageSrc:
                "http://img.b2bpic.net/free-photo/hot-spicy-grilled-pork-salad-with-berry-rice_1339-6325.jpg?_wi=2",
              imageAlt: "Jerk pork platter with rice and tropical slaw",
            },
            {
              id: "curry-goat",
              name: "Curry Goat Stew",
              price: "$17.95",
              variant: "Traditional Recipe",
              imageSrc:
                "http://img.b2bpic.net/free-photo/rice-dish-with-sauce-near-spices_23-2147894777.jpg?_wi=2",
              imageAlt: "Rich curry goat served over rice and peas",
            },
            {
              id: "festival-sides",
              name: "Festival & Slaw Combo",
              price: "$8.95",
              variant: "Sides Bundle",
              imageSrc:
                "http://img.b2bpic.net/free-photo/deep-fried-samosas-rustic-crockery-plate-generated-by-ai_188544-41080.jpg?_wi=2",
              imageAlt: "Festival dumplings with tropical slaw and mac and cheese",
            },
          ]}
        />
      </div>

      {/* Order CTA Section */}
      <div id="order-cta" data-section="order-cta">
        <FeatureCardTen
          title="Ready to Order?"
          description="Browse our full menu above and place your order now. Call us or order online for fast, hot, and fresh Caribbean island cuisine delivered straight to your door."
          tag="Quick Order"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Order Online",
              href: "/menu",
            },
            {
              text: "Call (239) 785-0423",
              href: "tel:2397850423",
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: "order-simple",
              title: "Simple & Fast",
              description:
                "Order online or call. Your meal is prepared fresh and ready for pickup or delivery.",
              media: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg?_wi=2",
              },
              items: [
                {
                  icon: Zap,
                  text: "Quick service",
                },
                {
                  icon: TrendingUp,
                  text: "Always fresh",
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
          imageSrc="http://img.b2bpic.net/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208291.jpg?_wi=2"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          logoText="Caribbean Flair"
          copyrightText="© 2025 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}