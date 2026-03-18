"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import BlogCardThree from "@/components/sections/blog/BlogCardThree";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Award, Camera, Zap, TrendingUp, Facebook } from "lucide-react";

export default function GalleryPage() {
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
        { label: "Contact", href: "/" },
      ],
    },
    {
      title: "Connect With Us",      items: [
        { label: "Facebook", href: "https://facebook.com/caribbeanflair" },
        { label: "About Us", href: "/" },
        { label: "Privacy Policy", href: "/" },
        { label: "Terms of Service", href: "/" },
      ],
    },
    {
      title: "Located In",      items: [
        { label: "801 Leeland Heights Blvd W", href: "/locations" },
        { label: "Lehigh Acres, FL 33936", href: "/locations" },
        { label: "Open Until 9PM", href: "/locations" },
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
            text: "Order Now",            href: "/menu"}}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Gallery - Visual Island Journey"
          description="Explore our vibrant collection of authentic Caribbean dishes, fresh ingredients, and behind-the-scenes moments from the grill."
          tag="Visual Feast"
          tagIcon={Camera}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Order Online Now",              href: "/menu"},
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/friends-having-nice-barbeque-together_23-2149271905.jpg?_wi=1"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Gallery hero section showcasing Caribbean Flair dishes"
        />
      </div>

      {/* Full Gallery Section with Tags and Horizontal Scrolling */}
      <div id="gallery-items" data-section="gallery-items">
        <BlogCardThree
          title="Complete Island Feast Gallery"
          description="Browse our complete collection of authentic Caribbean cuisine with detailed photography and descriptions."
          tag="Tagged Gallery"
          tagIcon={Camera}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          blogs={[
            {
              id: "jerk-pork",              category: "Main Dishes | Grilled",              title: "Jerk Pork Did Not Disappoint",              excerpt:
                "Perfectly seasoned and grilled, bursting with island spices and authentic Jamaican flavor. Our signature jerk pork is marinated for hours and grilled fresh to order.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-2gw0wih3.jpg",              imageAlt: "Jerk pork platter with rice and tropical slaw",              authorName: "Caribbean Flair Team",              authorAvatar:
                "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",              date: "Fresh Daily"},
            {
              id: "curry-goat",              category: "Main Dishes | Featured",              title: "Curry Goat - A Community Favorite",              excerpt:
                "Tender, aromatic, and cooked to perfection. Every bite transports you straight to Jamaica. Our signature curry goat is slow-cooked with Caribbean spices.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-wha24yfi.jpg",              imageAlt: "Rich curry goat served over rice and peas",              authorName: "Caribbean Flair Team",              authorAvatar:
                "http://img.b2bpic.net/free-vector/colorful-avatars_23-2147502919.jpg",              date: "Popular Choice"},
            {
              id: "festival-sides",              category: "Sides | Favorites",              title: "Festival Dumplings & Tropical Slaw",              excerpt:
                "Crispy, golden festival dumplings paired with our signature tropical slaw for the perfect complement. Handmade daily and fried to golden perfection.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-qcfdeh7f.jpg",              imageAlt:
                "Festival dumplings with tropical slaw and mac and cheese",              authorName: "Caribbean Flair Team",              authorAvatar:
                "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",              date: "Must Try"},
            {
              id: "escovitch-fish",              category: "Seafood | Grilled",              title: "Escovitch Fish - Island Tradition",              excerpt:
                "Fresh fish prepared in authentic Jamaican style with pickled vegetables and bold island flavors. A traditional Caribbean preparation that brings island heritage to your plate.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-dk53z92a.jpg",              imageAlt: "Escovitch fish with pickled vegetables and lime",              authorName: "Caribbean Flair Team",              authorAvatar:
                "http://img.b2bpic.net/free-photo/young-male-holding-hands-pockets-white-shirt-jacket-looking-elegant-front-view_176474-99655.jpg",              date: "Customer Favorite"},
            {
              id: "mac-cheese",              category: "Sides | Comfort Food",              title: "Creamy Island Mac & Cheese",              excerpt:
                "Smooth, rich, and soul-warming comfort food that pairs perfectly with any of our signature mains. Made with Caribbean spices for an island twist on a classic.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-y2tu4f81.jpg",              imageAlt: "Creamy mac and cheese side dish",              authorName: "Caribbean Flair Team",              authorAvatar:
                "http://img.b2bpic.net/free-photo/pleased-young-brunette-caucasian-girl-looks-camera_141793-103873.jpg",              date: "Comfort Classic"},
            {
              id: "grill-action",              category: "Behind the Scenes | Live Action",              title: "Fresh Off The Grill - Live Action",              excerpt:
                "Watch our expert grill masters prepare your meal with passion, precision, and authentic Caribbean technique. See the care and expertise that goes into every dish.",              imageSrc:
                "http://img.b2bpic.net/free-photo/friends-having-nice-barbeque-together_23-2149271905.jpg?_wi=1",              imageAlt: "Chef grilling jerk meats on foil with smoke",              authorName: "Caribbean Flair Team",              authorAvatar:
                "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",              date: "Daily Special"},
          ]}
        />
      </div>

      {/* Call to Action Section */}
      <div id="gallery-cta" data-section="gallery-cta">
        <FeatureCardTen
          title="Ready to Taste What You See?"
          description="Every image represents authentic Caribbean flavor and quality that you can experience today. Order now and discover your new island favorite."
          tag="Order Now"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Order Online Now",              href: "/menu"},
            {
              text: "Call (239) 785-0423",              href: "tel:2397850423"},
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: "quality-assurance",              title: "Gallery-to-Table Quality",              description:
                "Every dish photographed is made fresh to order with the same quality and passion you see here.",              media: {
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