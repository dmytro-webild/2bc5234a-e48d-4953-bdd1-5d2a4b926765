"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Star, Heart, Award } from "lucide-react";

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
      title: "Quick Links",      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "Gallery", href: "/" },
        { label: "Reviews", href: "/reviews" },
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
        { label: "About Us", href: "/" },
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

      {/* Five-Star Reviews Section */}
      <div id="reviews-featured" data-section="reviews-featured">
        <TestimonialCardThirteen
          title="Real Island Flavor Stories"
          description="Hear from our community about their authentic Caribbean Flair dining experience. Our customers rate us 5-stars for quality, authenticity, and passionate service."
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
                "Every dish packed with authentic island flavor! Teria and Deb truly know how to deliver Caribbean excellence. I've been here 5 times already!",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-woman-eating-delicious-tiramisu-cafe_1303-25270.jpg?_wi=1",              imageAlt: "Sarah Johnson smiling"},
            {
              id: "review-2",              name: "Michael Chen",              handle: "@mikeflavorseek",              testimonial:
                "Jerk pork did not disappoint! Best food truck in Lehigh Acres. Fresh, authentic, and made with real passion. Absolutely worth the visit.",              rating: 5,
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
                "Conch fritters are crispy heaven! The whole experience feels premium yet so authentic. Teria and Deb are changing the food game in Lehigh Acres.",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/friends-eating-barbecue_23-2148733607.jpg?_wi=1",              imageAlt: "Jessica Williams enjoying meal"},
            {
              id: "review-6",              name: "Robert Thompson",              handle: "@robfeeds",              testimonial:
                "Island fusion done right. The quality of ingredients and cooking technique is professional-level. Worth every penny and the drive. Highly recommend!",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/woman-with-thumbs-up_1149-1163.jpg?_wi=1",              imageAlt: "Robert Thompson thumbs up"},
          ]}
          buttons={[
            {
              text: "Order Now",              href: "/menu"},
          ]}
          buttonAnimation="slide-up"
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
