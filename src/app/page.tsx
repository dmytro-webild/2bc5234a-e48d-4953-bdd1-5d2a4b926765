"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import BlogCardThree from "@/components/sections/blog/BlogCardThree";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  Award,
  Flame,
  Camera,
  Star,
  Heart,
  Zap,
  TrendingUp,
  Facebook,
} from "lucide-react";

export default function HomePage() {
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

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Authentic Jamaican Island Flavors in Lehigh Acres"
          description="Fresh off the grill. Jerk, curry, and soul food made with love by Teria Bryant & Deb Farrell. Experience premium Caribbean fusion like never before."
          tag="Black & Women-Owned"
          tagIcon={Award}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Order Online Now",
              href: "/menu",
            },
            {
              text: "View Full Menu",
              href: "/menu",
            },
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-vector/summer-label-collectio_23-2148160410.jpg"
          imageAlt="Red Caribbean Flair Island Jerk Grill Trailer"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Hero section showcasing Caribbean Flair trailer and authentic island flavors"
        />
      </div>

      {/* Signature Dishes Section */}
      <div id="signature-dishes" data-section="signature-dishes">
        <ProductCardFour
          title="Signature Island Flavors"
          description="Discover our most beloved authentic Caribbean dishes, expertly crafted and grilled fresh daily."
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
              imageSrc:
                "http://img.b2bpic.net/free-photo/from-shrimps-batter-with-red-rice-greens-white-plate_176474-2654.jpg",
              imageAlt: "Jerk chicken grilled on foil with spices",
            },
            {
              id: "curry-shrimp",
              name: "Curry Shrimp Platter",
              price: "$16.95",
              variant: "Fresh Daily",
              imageSrc:
                "http://img.b2bpic.net/free-photo/side-view-fried-eggs-with-shrimps-vegetables-pan-served-with-sauces_140725-11952.jpg",
              imageAlt: "Curry shrimp over rice and peas",
            },
            {
              id: "conch-fritters",
              name: "Conch Fritters Combo",
              price: "$12.95",
              variant: "6 Pieces",
              imageSrc:
                "http://img.b2bpic.net/free-photo/chicken-nuggets-served-with-french-fries-sauces_140725-5759.jpg",
              imageAlt: "Golden conch fritters with dipping sauce",
            },
          ]}
        />
      </div>

      {/* Featured Gallery Section */}
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
              excerpt:
                "Perfectly seasoned and grilled, bursting with island spices and authentic Jamaican flavor.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/hot-spicy-grilled-pork-salad-with-berry-rice_1339-6325.jpg",
              imageAlt: "Jerk pork platter with rice and tropical slaw",
              authorName: "Caribbean Flair Team",
              authorAvatar:
                "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",
              date: "Fresh Daily",
            },
            {
              id: "curry-goat",
              category: "Featured",
              title: "Curry Goat - A Community Favorite",
              excerpt:
                "Tender, aromatic, and cooked to perfection. Every bite transports you straight to Jamaica.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/rice-dish-with-sauce-near-spices_23-2147894777.jpg",
              imageAlt: "Rich curry goat served over rice and peas",
              authorName: "Caribbean Flair Team",
              authorAvatar:
                "http://img.b2bpic.net/free-vector/colorful-avatars_23-2147502919.jpg",
              date: "Popular Choice",
            },
            {
              id: "festival-sides",
              category: "Sides",
              title: "Festival Dumplings & Tropical Slaw",
              excerpt:
                "Crispy, golden festival dumplings paired with our signature tropical slaw for the perfect complement.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/deep-fried-samosas-rustic-crockery-plate-generated-by-ai_188544-41080.jpg",
              imageAlt:
                "Festival dumplings with tropical slaw and mac and cheese",
              authorName: "Caribbean Flair Team",
              authorAvatar:
                "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",
              date: "Must Try",
            },
            {
              id: "escovitch-fish",
              category: "Seafood",
              title: "Escovitch Fish - Island Tradition",
              excerpt:
                "Fresh fish prepared in authentic Jamaican style with pickled vegetables and bold island flavors.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/grilled-chicken-served-with-aubergine-lemon-parsley_140725-1554.jpg",
              imageAlt: "Escovitch fish with pickled vegetables and lime",
              authorName: "Caribbean Flair Team",
              authorAvatar:
                "http://img.b2bpic.net/free-photo/young-male-holding-hands-pockets-white-shirt-jacket-looking-elegant-front-view_176474-99655.jpg",
              date: "Customer Favorite",
            },
            {
              id: "mac-cheese",
              category: "Sides",
              title: "Creamy Island Mac & Cheese",
              excerpt:
                "Smooth, rich, and soul-warming comfort food that pairs perfectly with any of our signature mains.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/delicious-food-presentation_23-2151914003.jpg",
              imageAlt: "Creamy mac and cheese side dish",
              authorName: "Caribbean Flair Team",
              authorAvatar:
                "http://img.b2bpic.net/free-photo/pleased-young-brunette-caucasian-girl-looks-camera_141793-103873.jpg",
              date: "Comfort Classic",
            },
            {
              id: "grill-action",
              category: "Behind the Scenes",
              title: "Fresh Off The Grill - Live Action",
              excerpt:
                "Watch our expert grill masters prepare your meal with passion, precision, and authentic Caribbean technique.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/friends-having-nice-barbeque-together_23-2149271905.jpg",
              imageAlt: "Chef grilling jerk meats on foil with smoke",
              authorName: "Caribbean Flair Team",
              authorAvatar:
                "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",
              date: "Daily Special",
            },
          ]}
        />
      </div>

      {/* Testimonials Section */}
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
              testimonial:
                "Every dish packed with authentic island flavor! Teria and Deb truly know how to deliver Caribbean excellence.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-woman-eating-delicious-tiramisu-cafe_1303-25270.jpg",
              imageAlt: "Sarah Johnson smiling",
            },
            {
              id: "review-2",
              name: "Michael Chen",
              handle: "@mikeflavorseek",
              testimonial:
                "Jerk pork did not disappoint! Best food truck in Lehigh Acres. Fresh, authentic, and made with real passion.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/couple-enjoying-spending-good-time-together-while-having-date-restaurant_58466-16035.jpg",
              imageAlt: "Michael Chen enjoying Caribbean Flair",
            },
            {
              id: "review-3",
              name: "Amanda Davis",
              handle: "@amandataste",
              testimonial:
                "The curry shrimp is absolutely incredible! You can taste the love in every bite. Supporting Black-owned, women-owned businesses never tasted so good.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/sideways-shot-attractive-curly-woman-has-happy-expression-enjoys-electronic-song-modern-headphones-has-recreation-time-reads-text-message-cell-phone_273609-3485.jpg",
              imageAlt: "Amanda Davis with Caribbean Flair meal",
            },
            {
              id: "review-4",
              name: "David Martinez",
              handle: "@davidsflavorquests",
              testimonial:
                "Finally, real Caribbean food in Lehigh Acres! The menu, the quality, the service—everything is top-tier. This is my new favorite spot.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/crazy-dealer-happy-expression_1194-4005.jpg",
              imageAlt: "David Martinez at Caribbean Flair",
            },
            {
              id: "review-5",
              name: "Jessica Williams",
              handle: "@jessicaeats_local",
              testimonial:
                "Conch fritters are crispy heaven! The whole experience feels premium yet so authentic. Teria and Deb are changing the food game.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/friends-eating-barbecue_23-2148733607.jpg",
              imageAlt: "Jessica Williams enjoying meal",
            },
            {
              id: "review-6",
              name: "Robert Thompson",
              handle: "@robfeeds",
              testimonial:
                "Island fusion done right. The quality of ingredients and cooking technique is professional-level. Worth every penny and the drive. Highly recommend!",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/woman-with-thumbs-up_1149-1163.jpg",
              imageAlt: "Robert Thompson thumbs up",
            },
          ]}
        />
      </div>

      {/* Owners Spotlight Section */}
      <div id="owners-spotlight" data-section="owners-spotlight">
        <TeamCardTwo
          title="Meet the Island Visionaries"
          description="Teria Bryant and Deb Farrell: Passionate Black-owned, women-owned entrepreneurs bringing authentic Caribbean soul to Lehigh Acres."
          tag="Community Leaders"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="two-columns-alternating-heights"
          members={[
            {
              id: "teria-bryant",
              name: "Teria Bryant",
              role: "Founder & Head Chef",
              description:
                "Teria brings 15+ years of Caribbean culinary expertise and authentic island passion to every dish. Her vision transformed Caribbean Flair from a dream into a premium dining destination serving Lehigh Acres with pride.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/medium-shot-professional-chef-working_23-2151232185.jpg",
              imageAlt: "Teria Bryant, founder of Caribbean Flair",
              socialLinks: [
                {
                  icon: Facebook,
                  url: "https://facebook.com/caribbeanflair",
                },
              ],
            },
            {
              id: "deb-farrell",
              name: "Deb Farrell",
              role: "Co-Owner & Operations Lead",
              description:
                "Deb ensures every customer experience is smooth, welcoming, and unforgettable. Together with Teria, she's building a thriving Black- and women-owned business that celebrates Caribbean culture and community impact.",
              imageSrc:
                "http://img.b2bpic.net/free-photo/successful-business-woman-blue-suit_158595-5024.jpg",
              imageAlt: "Deb Farrell, co-owner of Caribbean Flair",
              socialLinks: [
                {
                  icon: Facebook,
                  url: "https://facebook.com/caribbeanflair",
                },
              ],
            },
          ]}
        />
      </div>

      {/* Final CTA Section */}
      <div id="final-cta" data-section="final-cta">
        <FeatureCardTen
          title="Order Your Island Feast Today"
          description="Experience authentic Jamaican island fusion made fresh, packed with flavor, and served with love. Start your Caribbean journey now—order online or call us for the ultimate food truck experience."
          tag="Ready to Order"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Order Online Now",
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
              id: "fast-delivery",
              title: "Fast & Fresh",
              description:
                "Grilled fresh to order. Your meal arrives hot, delicious, and packed with island flavor.",
              media: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg",
              },
              items: [
                {
                  icon: Zap,
                  text: "Ready in 15 minutes",
                },
                {
                  icon: TrendingUp,
                  text: "Peak fresh quality",
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