"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Star, Heart, Zap, TrendingUp, Award } from "lucide-react";

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
          title="Customer Reviews - 5-Star Island Experiences"
          description="See what our community says about their authentic Caribbean Flair dining experience. Real stories from real customers who love our island flavors."
          tag="Highly Rated"
          tagIcon={Star}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Order Online Now",              href: "/menu"},
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/friends-eating-barbecue_23-2148733607.jpg?_wi=1"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Reviews hero section showcasing customer testimonials"
        />
      </div>

      {/* Review Statistics Section */}
      <div id="review-stats" data-section="review-stats">
        <MetricCardThree
          title="Caribbean Flair by the Numbers"
          description="Our commitment to quality and customer satisfaction, reflected in real community feedback."
          tag="Community Verified"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          metrics={[
            {
              id: "rating",              icon: Star,
              title: "Average Rating",              value: "4.9/5"},
            {
              id: "reviews",              icon: Heart,
              title: "Customer Reviews",              value: "500+"},
            {
              id: "satisfaction",              icon: Award,
              title: "Satisfaction Rate",              value: "98%"},
            {
              id: "returning",              icon: TrendingUp,
              title: "Returning Customers",              value: "85%"},
          ]}
        />
      </div>

      {/* Full Testimonials Section */}
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Customers Say"
          description="Real five-star reviews from customers who've experienced authentic Caribbean Flair dining."
          tag="5-Star Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          showRating={true}
          testimonials={[
            {
              id: "review-1",              name: "Sarah Johnson",              handle: "@sarahjohn2024",              testimonial:
                "Every dish packed with authentic island flavor! Teria and Deb truly know how to deliver Caribbean excellence. I've been five times in the last month alone!",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-woman-eating-delicious-tiramisu-cafe_1303-25270.jpg?_wi=1",              imageAlt: "Sarah Johnson smiling"},
            {
              id: "review-2",              name: "Michael Chen",              handle: "@mikeflavorseek",              testimonial:
                "Jerk pork did not disappoint! Best food truck in Lehigh Acres. Fresh, authentic, and made with real passion. This is my go-to spot every Friday!",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/couple-enjoying-spending-good-time-together-while-having-date-restaurant_58466-16035.jpg?_wi=1",              imageAlt: "Michael Chen enjoying Caribbean Flair"},
            {
              id: "review-3",              name: "Amanda Davis",              handle: "@amandataste",              testimonial:
                "The curry shrimp is absolutely incredible! You can taste the love in every bite. Supporting Black-owned, women-owned businesses never tasted so good. Highly recommend!",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/sideways-shot-attractive-curly-woman-has-happy-expression-enjoys-electronic-song-modern-headphones-has-recreation-time-reads-text-message-cell-phone_273609-3485.jpg?_wi=1",              imageAlt: "Amanda Davis with Caribbean Flair meal"},
            {
              id: "review-4",              name: "David Martinez",              handle: "@davidsflavorquests",              testimonial:
                "Finally, real Caribbean food in Lehigh Acres! The menu, the quality, the service—everything is top-tier. This is my new favorite spot for family dinners.",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/crazy-dealer-happy-expression_1194-4005.jpg?_wi=1",              imageAlt: "David Martinez at Caribbean Flair"},
            {
              id: "review-5",              name: "Jessica Williams",              handle: "@jessicaeats_local",              testimonial:
                "Conch fritters are crispy heaven! The whole experience feels premium yet so authentic. Teria and Deb are changing the food game in Lehigh Acres.",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/friends-eating-barbecue_23-2148733607.jpg?_wi=1",              imageAlt: "Jessica Williams enjoying meal"},
            {
              id: "review-6",              name: "Robert Thompson",              handle: "@robfeeds",              testimonial:
                "Island fusion done right. The quality of ingredients and cooking technique is professional-level. Worth every penny and the drive. Highly recommend to everyone!",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/woman-with-thumbs-up_1149-1163.jpg?_wi=1",              imageAlt: "Robert Thompson thumbs up"},
          ]}
        />
      </div>

      {/* Call to Action Section */}
      <div id="reviews-cta" data-section="reviews-cta">
        <FeatureCardTen
          title="Join Thousands of Satisfied Customers"
          description="Experience why customers consistently give us 5-star reviews. Authentic Caribbean flavors, passionate owners, and community-driven quality that you can taste in every bite."
          tag="Order Today"
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
              id: "customer-service",              title: "Why We're 5-Star Rated",              description:
                "Authentic recipes, fresh ingredients, passionate service, and community commitment create an unforgettable dining experience.",              media: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg?_wi=1"},
              items: [
                {
                  icon: Zap,
                  text: "Fresh & Fast Service"},
                {
                  icon: TrendingUp,
                  text: "Authentic Caribbean Quality"},
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