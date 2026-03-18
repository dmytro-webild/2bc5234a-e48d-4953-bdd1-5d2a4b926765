"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import Link from "next/link";
import { Camera, Zap, TrendingUp } from "lucide-react";

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
      title: "Quick Links",
      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/#menu" },
        { label: "Gallery", href: "/gallery" },
        { label: "Reviews", href: "/#reviews" },
      ],
    },
    {
      title: "Order & Contact",
      items: [
        { label: "Order Online", href: "/#order" },
        { label: "Call Us", href: "tel:2397850423" },
        { label: "Locations & Hours", href: "/#locations" },
        { label: "Contact", href: "#contact" },
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
        { label: "Open Until 9PM", href: "#locations" },
        { label: "Delivery Available", href: "/#order" },
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
          button={{ text: "Order Now", href: "/#order" }}
        />
      </div>

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
              id: "jerk-pork",
              category: "Main Dishes",
              title: "Jerk Pork Did Not Disappoint",
              excerpt: "Perfectly seasoned and grilled, bursting with island spices and authentic Jamaican flavor.",
              imageSrc: "http://img.b2bpic.net/free-photo/hot-spicy-grilled-pork-salad-with-berry-rice_1339-6325.jpg",
              imageAlt: "Jerk pork platter with rice and tropical slaw",
              authorName: "Caribbean Flair Team",
              authorAvatar: "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",
              date: "Fresh Daily",
            },
            {
              id: "curry-goat",
              category: "Featured",
              title: "Curry Goat - A Community Favorite",
              excerpt: "Tender, aromatic, and cooked to perfection. Every bite transports you straight to Jamaica.",
              imageSrc: "http://img.b2bpic.net/free-photo/rice-dish-with-sauce-near-spices_23-2147894777.jpg",
              imageAlt: "Rich curry goat served over rice and peas",
              authorName: "Caribbean Flair Team",
              authorAvatar: "http://img.b2bpic.net/free-vector/colorful-avatars_23-2147502919.jpg",
              date: "Popular Choice",
            },
            {
              id: "festival-sides",
              category: "Sides",
              title: "Festival Dumplings & Tropical Slaw",
              excerpt: "Crispy, golden festival dumplings paired with our signature tropical slaw for the perfect complement.",
              imageSrc: "http://img.b2bpic.net/free-photo/deep-fried-samosas-rustic-crockery-plate-generated-by-ai_188544-41080.jpg",
              imageAlt: "Festival dumplings with tropical slaw and mac and cheese",
              authorName: "Caribbean Flair Team",
              authorAvatar: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",
              date: "Must Try",
            },
            {
              id: "escovitch-fish",
              category: "Seafood",
              title: "Escovitch Fish - Island Tradition",
              excerpt: "Fresh fish prepared in authentic Jamaican style with pickled vegetables and bold island flavors.",
              imageSrc: "http://img.b2bpic.net/free-photo/grilled-chicken-served-with-aubergine-lemon-parsley_140725-1554.jpg",
              imageAlt: "Escovitch fish with pickled vegetables and lime",
              authorName: "Caribbean Flair Team",
              authorAvatar: "http://img.b2bpic.net/free-photo/young-male-holding-hands-pockets-white-shirt-jacket-looking-elegant-front-view_176474-99655.jpg",
              date: "Customer Favorite",
            },
            {
              id: "mac-cheese",
              category: "Sides",
              title: "Creamy Island Mac & Cheese",
              excerpt: "Smooth, rich, and soul-warming comfort food that pairs perfectly with any of our signature mains.",
              imageSrc: "http://img.b2bpic.net/free-photo/delicious-food-presentation_23-2151914003.jpg",
              imageAlt: "Creamy mac and cheese side dish",
              authorName: "Caribbean Flair Team",
              authorAvatar: "http://img.b2bpic.net/free-photo/pleased-young-brunette-caucasian-girl-looks-camera_141793-103873.jpg",
              date: "Comfort Classic",
            },
            {
              id: "grill-action",
              category: "Behind the Scenes",
              title: "Fresh Off The Grill - Live Action",
              excerpt: "Watch our expert grill masters prepare your meal with passion, precision, and authentic Caribbean technique.",
              imageSrc: "http://img.b2bpic.net/free-photo/friends-having-nice-barbeque-together_23-2149271905.jpg",
              imageAlt: "Chef grilling jerk meats on foil with smoke",
              authorName: "Caribbean Flair Team",
              authorAvatar: "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",
              date: "Daily Special",
            },
          ]}
        />
      </div>

      <div id="gallery-cta" data-section="gallery-cta">
        <FeatureCardTen
          title="Experience Caribbean Flair In Person"
          description="Visit our food truck to taste the vibrant island flavors captured in these photos. Every meal is prepared fresh with premium ingredients and authentic Caribbean passion."
          tag="Ready to Visit"
          tagIcon={Camera}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          buttons={[
            {
              text: "Order Online Now",
              href: "/#order",
            },
            {
              text: "Find Our Location",
              href: "/#locations",
            },
          ]}
          features={[
            {
              id: "gallery-highlight",
              title: "Every Photo Tells a Story",
              description: "From fresh ingredients to the final plated masterpiece, our gallery showcases the care and craftsmanship in every Caribbean Flair dish.",
              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/side-view-fried-eggs-with-shrimps-vegetables-pan-served-with-sauces_140725-11952.jpg",
                imageAlt: "Beautiful plated Caribbean Flair dish",
              },
              items: [
                {
                  icon: Zap,
                  text: "Fresh daily preparation",
                },
                {
                  icon: TrendingUp,
                  text: "Premium quality showcase",
                },
              ],
              reverse: false,
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208291.jpg"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          logoText="Caribbean Flair"
          copyrightText="© 2025 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}