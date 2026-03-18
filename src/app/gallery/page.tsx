"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import BlogCardThree from "@/components/sections/blog/BlogCardThree";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  Award,
  Camera,
  Zap,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export default function GalleryPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About Us", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "Locations", id: "locations" },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const galleryImages = [
    {
      id: "user-upload-1",      category: "Dishes",      title: "Caribbean Delight",      excerpt:
        "Stunning presentation of our signature Caribbean feast with vibrant colors and authentic flavors.",      imageSrc:
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-2gw0wih3.jpg?_wi=1",      imageAlt: "User uploaded Caribbean dish",      authorName: "Caribbean Flair Community",      authorAvatar:
        "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",      date: "Community Upload"},
    {
      id: "user-upload-2",      category: "Dishes",      title: "Island Feast Experience",      excerpt:
        "A mouth-watering capture of our authentic Jamaican cuisine in all its glory.",      imageSrc:
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-wha24yfi.jpg?_wi=1",      imageAlt: "User uploaded island feast",      authorName: "Caribbean Flair Community",      authorAvatar:
        "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",      date: "Community Upload"},
    {
      id: "user-upload-3",      category: "Grill",      title: "Fresh Off The Grill",      excerpt:
        "Behind-the-scenes action showing our expert grill masters at work with authentic technique.",      imageSrc:
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-qcfdeh7f.jpg?_wi=1",      imageAlt: "Grilling action",      authorName: "Caribbean Flair Community",      authorAvatar:
        "http://img.b2bpic.net/free-photo/young-male-holding-hands-pockets-white-shirt-jacket-looking-elegant-front-view_176474-99655.jpg",      date: "Community Upload"},
    {
      id: "user-upload-4",      category: "Dishes",      title: "Platter Perfection",      excerpt:
        "A beautifully plated Caribbean meal showcasing the quality and care we put into every order.",      imageSrc:
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-dk53z92a.jpg?_wi=1",      imageAlt: "Platter presentation",      authorName: "Caribbean Flair Community",      authorAvatar:
        "http://img.b2bpic.net/free-photo/pleased-young-brunette-caucasian-girl-looks-camera_141793-103873.jpg",      date: "Community Upload"},
    {
      id: "user-upload-5",      category: "Community",      title: "Community Gathering",      excerpt:
        "Caribbean Flair bringing people together through authentic flavors and shared island experiences.",      imageSrc:
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-y2tu4f81.jpg?_wi=1",      imageAlt: "Community gathering",      authorName: "Caribbean Flair Community",      authorAvatar:
        "http://img.b2bpic.net/free-photo/woman-with-thumbs-up_1149-1163.jpg",      date: "Community Upload"},
    {
      id: "gallery-1",      category: "Main Dishes",      title: "Jerk Pork Did Not Disappoint",      excerpt:
        "Perfectly seasoned and grilled, bursting with island spices and authentic Jamaican flavor.",      imageSrc:
        "http://img.b2bpic.net/free-photo/hot-spicy-grilled-pork-salad-with-berry-rice_1339-6325.jpg?_wi=1",      imageAlt: "Jerk pork platter with rice and tropical slaw",      authorName: "Caribbean Flair Team",      authorAvatar:
        "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",      date: "Fresh Daily"},
    {
      id: "gallery-2",      category: "Featured",      title: "Curry Goat - A Community Favorite",      excerpt:
        "Tender, aromatic, and cooked to perfection. Every bite transports you straight to Jamaica.",      imageSrc:
        "http://img.b2bpic.net/free-photo/rice-dish-with-sauce-near-spices_23-2147894777.jpg?_wi=1",      imageAlt: "Rich curry goat served over rice and peas",      authorName: "Caribbean Flair Team",      authorAvatar:
        "http://img.b2bpic.net/free-vector/colorful-avatars_23-2147502919.jpg",      date: "Popular Choice"},
    {
      id: "gallery-3",      category: "Sides",      title: "Festival Dumplings & Tropical Slaw",      excerpt:
        "Crispy, golden festival dumplings paired with our signature tropical slaw for the perfect complement.",      imageSrc:
        "http://img.b2bpic.net/free-photo/deep-fried-samosas-rustic-crockery-plate-generated-by-ai_188544-41080.jpg?_wi=1",      imageAlt:
        "Festival dumplings with tropical slaw and mac and cheese",      authorName: "Caribbean Flair Team",      authorAvatar:
        "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",      date: "Must Try"},
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
          title="Island Feast Gallery"
          description="Explore our vibrant collection of authentic Caribbean dishes, fresh ingredients, and behind-the-scenes moments from the grill. See what our community is enjoying!"
          tag="Visual Journey"
          tagIcon={Camera}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Order Now",              href: "/menu"},
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-vector/summer-label-collectio_23-2148160410.jpg?_wi=2"
          imageAlt="Caribbean Flair Gallery"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Gallery page hero section"
        />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Gallery lightbox"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Featured Gallery Section */}
      <div id="featured-gallery" data-section="featured-gallery">
        <BlogCardThree
          title="Island Feast Gallery"
          description="Discover the artistry, authenticity, and passion behind every Caribbean Flair creation. Click any image to view in full detail."
          tag="Visual Journey"
          tagIcon={Camera}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          blogs={galleryImages}
        />
      </div>

      {/* Final CTA Section */}
      <div id="final-cta" data-section="final-cta">
        <FeatureCardTen
          title="See It. Taste It. Experience It."
          description="Every image tells a story of authentic Caribbean flavors, community pride, and culinary excellence. Order now and create your own memories."
          tag="Ready to Order"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Order Your Meal Now",              href: "/menu"},
            {
              text: "Call (239) 785-0423",              href: "tel:2397850423"},
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: "visual-quality",              title: "Premium Quality",              description:
                "Every image showcases the premium quality, fresh ingredients, and authentic Caribbean technique behind our food.",              media: {
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