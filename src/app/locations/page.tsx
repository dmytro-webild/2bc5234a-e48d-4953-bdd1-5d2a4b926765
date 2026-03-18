"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import BlogCardThree from "@/components/sections/blog/BlogCardThree";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";
import { MapPin, Clock, Phone, Camera } from "lucide-react";

export default function LocationsPage() {
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

      <div id="locations-hero" data-section="locations-hero">
        <FeatureCardTen
          title="Find Caribbean Flair Near You"
          description="Visit our premium food truck location in Lehigh Acres for authentic Jamaican island cuisine. Fresh off the grill, made with love by Teria Bryant & Deb Farrell."
          tag="Open Daily"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Get Directions",
              href: "#map",
            },
            {
              text: "Call Us Now",
              href: "tel:2397850423",
            },
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              id: "main-location",
              title: "Lehigh Acres Location",
              description: "Our flagship Caribbean Flair trailer serves the community daily with premium Jamaican jerk, curry, and soul food crafted with authentic island passion.",
              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208291.jpg?_wi=6",
                imageAlt: "Caribbean Flair trailer in Lehigh Acres",
              },
              items: [
                {
                  icon: MapPin,
                  text: "801 Leeland Heights Blvd W, Lehigh Acres, FL 33936",
                },
                {
                  icon: Clock,
                  text: "Open Daily Until 9PM",
                },
              ],
              reverse: false,
            },
          ]}
        />
      </div>

      <div id="hours-details" data-section="hours-details">
        <BlogCardThree
          title="Hours & Services Available"
          description="Plan your Caribbean Flair visit with detailed operating hours and available services. We're ready to serve you fresh, authentic island flavors."
          tag="Easy Access"
          tagIcon={Clock}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          blogs={[
            {
              id: "weekday-hours",
              category: "Weekday Schedule",
              title: "Monday - Friday Hours",
              excerpt: "Open from 11AM to 9PM. Perfect for lunch breaks, after-work dinners, and Caribbean cravings throughout your weekday.",
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg?_wi=3",
              imageAlt: "fast food service preparation",
              authorName: "Caribbean Flair Team",
              authorAvatar: "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",
              date: "11AM - 9PM",
              onBlogClick: null,
            },
            {
              id: "weekend-hours",
              category: "Weekend Schedule",
              title: "Saturday & Sunday Hours",
              excerpt: "Extended weekend hours from 10AM to 10PM. More time to enjoy authentic Caribbean cuisine with family and friends.",
              imageSrc: "http://img.b2bpic.net/free-photo/friends-having-nice-barbeque-together_23-2149271905.jpg?_wi=4",
              imageAlt: "friends enjoying food together",
              authorName: "Caribbean Flair Team",
              authorAvatar: "http://img.b2bpic.net/free-photo/colorful-avatars_23-2147502919.jpg",
              date: "10AM - 10PM",
              onBlogClick: null,
            },
            {
              id: "services-available",
              category: "Our Services",
              title: "Online Orders & Delivery",
              excerpt: "Order ahead online for faster service or request delivery to your location. We make Caribbean flavors convenient for your lifestyle.",
              imageSrc: "http://img.b2bpic.net/free-photo/delivery-man-making-thumbs-up-gesture_23-2148807711.jpg",
              imageAlt: "delivery service available",
              authorName: "Caribbean Flair Team",
              authorAvatar: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",
              date: "Fast & Fresh",
              onBlogClick: null,
            },
            {
              id: "catering-events",
              category: "Special Services",
              title: "Catering & Private Events",
              excerpt: "Bring Caribbean Flair to your events! Perfect for parties, corporate gatherings, and celebrations. Contact us for custom catering packages.",
              imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-barbecue_23-2148733607.jpg?_wi=4",
              imageAlt: "group enjoying caribbean food celebration",
              authorName: "Caribbean Flair Team",
              authorAvatar: "http://img.b2bpic.net/free-photo/young-male-holding-hands-pockets-white-shirt-jacket-looking-elegant-front-view_176474-99655.jpg",
              date: "Call for Details",
              onBlogClick: null,
            },
            {
              id: "contact-us",
              category: "Get In Touch",
              title: "Direct Contact & Information",
              excerpt: "Have questions? Call us directly at (239) 785-0423. Our team is happy to help with orders, catering, or any Caribbean Flair inquiries.",
              imageSrc: "http://img.b2bpic.net/free-photo/phone-communication-technology-concept_23-2150300988.jpg",
              imageAlt: "contact us phone service",
              authorName: "Caribbean Flair Team",
              authorAvatar: "http://img.b2bpic.net/free-photo/pleased-young-brunette-caucasian-girl-looks-camera_141793-103873.jpg",
              date: "(239) 785-0423",
              onBlogClick: null,
            },
            {
              id: "visit-today",
              category: "Island Experience",
              title: "Visit Our Food Truck Today",
              excerpt: "Experience the authentic Caribbean vibe. From the moment you approach our vibrant trailer, you'll feel the island warmth and passion in every detail.",
              imageSrc: "http://img.b2bpic.net/free-photo/summer-label-collectio_23-2148160410.jpg",
              imageAlt: "vibrant Caribbean Flair trailer",
              authorName: "Caribbean Flair Team",
              authorAvatar: "http://img.b2bpic.net/free-vector/colorful-avatars_23-2147502919.jpg",
              date: "Always Welcome",
              onBlogClick: null,
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208291.jpg?_wi=7"
          imageAlt="red food trailer caribbean palm tree evening"
          logoText="Caribbean Flair"
          copyrightText="© 2025 Caribbean Flair Island Jerk Grill | Black & Women-Owned | Lehigh Acres, FL"
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}