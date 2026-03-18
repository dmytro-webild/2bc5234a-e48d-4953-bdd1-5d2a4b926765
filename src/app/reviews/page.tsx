"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";
import { Star, Zap } from "lucide-react";

export default function ReviewsPage() {
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
              id: "review-1",
              name: "Sarah Johnson",
              handle: "@sarahjohn2024",
              testimonial: "Every dish packed with authentic island flavor! Teria and Deb truly know how to deliver Caribbean excellence.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-delicious-tiramisu-cafe_1303-25270.jpg",
              imageAlt: "smiling woman enjoying restaurant meal",
            },
            {
              id: "review-2",
              name: "Michael Chen",
              handle: "@mikeflavorseek",
              testimonial: "Jerk pork did not disappoint! Best food truck in Lehigh Acres. Fresh, authentic, and made with real passion.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/couple-enjoying-spending-good-time-together-while-having-date-restaurant_58466-16035.jpg",
              imageAlt: "happy man enjoying food truck meal",
            },
            {
              id: "review-3",
              name: "Amanda Davis",
              handle: "@amandataste",
              testimonial: "The curry shrimp is absolutely incredible! You can taste the love in every bite. Supporting Black-owned, women-owned businesses never tasted so good.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/sideways-shot-attractive-curly-woman-has-happy-expression-enjoys-electronic-song-modern-headphones-has-recreation-time-reads-text-message-cell-phone_273609-3485.jpg",
              imageAlt: "woman smiling holding caribbean food",
            },
            {
              id: "review-4",
              name: "David Martinez",
              handle: "@davidsflavorquests",
              testimonial: "Finally, real Caribbean food in Lehigh Acres! The menu, the quality, the service—everything is top-tier. This is my new favorite spot.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/crazy-dealer-happy-expression_1194-4005.jpg",
              imageAlt: "man happy thumbs up food quality",
            },
            {
              id: "review-5",
              name: "Jessica Williams",
              handle: "@jessicaeats_local",
              testimonial: "Conch fritters are crispy heaven! The whole experience feels premium yet so authentic. Teria and Deb are changing the food game.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-barbecue_23-2148733607.jpg",
              imageAlt: "woman smiling holding plate of food",
            },
            {
              id: "review-6",
              name: "Robert Thompson",
              handle: "@robfeeds",
              testimonial: "Island fusion done right. The quality of ingredients and cooking technique is professional-level. Worth every penny and the drive. Highly recommend!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/woman-with-thumbs-up_1149-1163.jpg",
              imageAlt: "man approving satisfied testimonial portrait",
            },
          ]}
        />
      </div>

      <div id="reviews-cta" data-section="reviews-cta">
        <FeatureCardTen
          title="Love Our Flavors? Share Your Story"
          description="Join our growing community of Caribbean Flair fans. Every review fuels our passion to deliver authentic island excellence. Share your dining experience and help us grow!"
          tag="Your Voice Matters"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Order Your Favorite Now",
              href: "/order",
            },
            {
              text: "Visit Us Today",
              href: "/locations",
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              id: "community-love",
              title: "Join Our Island Community",
              description: "Every review tells our story. Connect with fellow Caribbean Flair lovers and celebrate authentic island cuisine.",
              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-barbecue_23-2148733607.jpg",
                imageAlt: "friends enjoying caribbean food together",
              },
              items: [
                {
                  icon: Star,
                  text: "5-Star Authentic Experience",
                },
                {
                  icon: Zap,
                  text: "Premium Island Flavors",
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
          imageAlt="red food trailer caribbean palm tree evening"
          logoText="Caribbean Flair"
          copyrightText="© 2025 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}