"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Flame } from "lucide-react";

export default function FullMenuPage() {
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
        { label: "Gallery", href: "/gallery" },
        { label: "Reviews", href: "/reviews" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Order Online", href: "/menu" },
        { label: "Call Us", href: "tel:2397850423" },
        { label: "Locations & Hours", href: "/locations" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Connect With Us",      items: [
        { label: "Facebook", href: "https://www.facebook.com/share/1CckZyvyXX/?mibextid=wwXIfr" },
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

  const allMenuItems = [
    {
      id: "jerk-chicken",      name: "Jerk Chicken Platter",      price: "$15.95",      variant: "Full Rack",      imageSrc: "http://img.b2bpic.net/free-photo/from-shrimps-batter-with-red-rice-greens-white-plate_176474-2654.jpg?_wi=1",      imageAlt: "Jerk chicken grilled on foil with spices"},
    {
      id: "curry-goat",      name: "Curry Goat Platter",      price: "$17.95",      variant: "Tender & Aromatic",      imageSrc: "http://img.b2bpic.net/free-photo/rice-dish-with-sauce-near-spices_23-2147894777.jpg?_wi=1",      imageAlt: "Curry goat served over rice and peas"},
    {
      id: "jerk-pork",      name: "Jerk Pork Platter",      price: "$16.95",      variant: "Juicy & Spiced",      imageSrc: "http://img.b2bpic.net/free-photo/hot-spicy-grilled-pork-salad-with-berry-rice_1339-6325.jpg?_wi=1",      imageAlt: "Jerk pork platter with rice"},
    {
      id: "escovitch-fish",      name: "Escovitch Fish",      price: "$18.95",      variant: "Island Tradition",      imageSrc: "http://img.b2bpic.net/free-photo/grilled-chicken-served-with-aubergine-lemon-parsley_140725-1554.jpg?_wi=1",      imageAlt: "Escovitch fish with pickled vegetables"},
    {
      id: "curry-shrimp",      name: "Curry Shrimp Platter",      price: "$16.95",      variant: "Fresh Daily",      imageSrc: "http://img.b2bpic.net/free-photo/side-view-fried-eggs-with-shrimps-vegetables-pan-served-with-sauces_140725-11952.jpg?_wi=1",      imageAlt: "Curry shrimp over rice and peas"},
    {
      id: "conch-fritters",      name: "Conch Fritters Combo",      price: "$12.95",      variant: "6 Pieces",      imageSrc: "http://img.b2bpic.net/free-photo/deep-fried-samosas-rustic-crockery-plate-generated-by-ai_188544-41080.jpg?_wi=1",      imageAlt: "Golden conch fritters with dipping sauce"},
    {
      id: "jerk-chicken-sandwich",      name: "Jerk Chicken Sandwich",      price: "$11.95",      variant: "Fresh Bread",      imageSrc: "http://img.b2bpic.net/free-photo/from-shrimps-batter-with-red-rice-greens-white-plate_176474-2654.jpg?_wi=1",      imageAlt: "Jerk chicken sandwich with slaw"},
    {
      id: "curry-goat-sandwich",      name: "Curry Goat Sandwich",      price: "$12.95",      variant: "Hearty & Flavorful",      imageSrc: "http://img.b2bpic.net/free-photo/rice-dish-with-sauce-near-spices_23-2147894777.jpg?_wi=1",      imageAlt: "Curry goat sandwich"},
    {
      id: "pulled-pork-sandwich",      name: "Pulled Pork Sandwich",      price: "$11.95",      variant: "Smoky & Tender",      imageSrc: "http://img.b2bpic.net/free-photo/hot-spicy-grilled-pork-salad-with-berry-rice_1339-6325.jpg?_wi=1",      imageAlt: "Pulled pork sandwich"},
    {
      id: "rice-peas",      name: "Rice & Peas",      price: "$4.95",      variant: "Classic Caribbean",      imageSrc: "http://img.b2bpic.net/free-photo/rice-dish-with-sauce-near-spices_23-2147894777.jpg?_wi=1",      imageAlt: "Rice and peas side"},
    {
      id: "mac-cheese",      name: "Creamy Mac & Cheese",      price: "$5.95",      variant: "Comfort Classic",      imageSrc: "http://img.b2bpic.net/free-photo/delicious-food-presentation_23-2151914003.jpg?_wi=1",      imageAlt: "Creamy mac and cheese"},
    {
      id: "festival",      name: "Festival Dumplings",      price: "$4.95",      variant: "Golden & Crispy",      imageSrc: "http://img.b2bpic.net/free-photo/deep-fried-samosas-rustic-crockery-plate-generated-by-ai_188544-41080.jpg?_wi=1",      imageAlt: "Festival dumplings"},
    {
      id: "sorrel-punch",      name: "Sorrel Punch",      price: "$3.95",      variant: "16 oz",      imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg?_wi=1",      imageAlt: "Tropical sorrel punch"},
    {
      id: "ginger-beer",      name: "Island Ginger Beer",      price: "$3.95",      variant: "Refreshing",      imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg?_wi=1",      imageAlt: "Ginger beer"},
    {
      id: "combo-1",      name: "Island Feast Combo",      price: "$22.95",      variant: "Jerk Chicken + Sides",      imageSrc: "http://img.b2bpic.net/free-photo/from-shrimps-batter-with-red-rice-greens-white-plate_176474-2654.jpg?_wi=1",      imageAlt: "Island feast combo"},
    {
      id: "seafood-special",      name: "Seafood Special",      price: "$24.95",      variant: "Curry Shrimp + Sides",      imageSrc: "http://img.b2bpic.net/free-photo/side-view-fried-eggs-with-shrimps-vegetables-pan-served-with-sauces_140725-11952.jpg?_wi=1",      imageAlt: "Seafood special"},
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
            text: "Order Now",            href: "/menu"}}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Complete Island Menu"
          description="Explore our full selection of authentic Caribbean dishes. Every item is crafted fresh and packed with island soul."
          tag="Exclusive"
          tagIcon={Flame}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Call to Order",              href: "tel:2397850423"},
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-vector/summer-label-collectio_23-2148160410.jpg?_wi=3"
          imageAlt="Caribbean Flair Full Menu"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Full menu page hero section"
        />
      </div>

      {/* Full Menu Section */}
      <div id="full-menu" data-section="full-menu">
        <ProductCardFour
          title="All Menu Items"
          description="Discover our complete selection of authentic Caribbean dishes, sides, drinks, and specials. All items are fresh and made to order."
          tag="Complete Selection"
          tagIcon={Flame}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Order Now",              href: "/menu"},
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
          products={allMenuItems}
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
