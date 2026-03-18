"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { MapPin, Clock, Phone, Zap, TrendingUp, CheckCircle, AlertCircle, BarChart3 } from "lucide-react";

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
          title="Visit Caribbean Flair - Locations & Hours"
          description="Find us in Lehigh Acres, FL. Check our hours, get directions, and see real-time information about wait times and popular hours."
          tag="Open Now"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Get Directions",              href: "https://maps.google.com/?q=801+Leeland+Heights+Blvd+W+Lehigh+Acres+FL+33936"},
            {
              text: "Call (239) 785-0423",              href: "tel:2397850423"},
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208291.jpg?_wi=1"
          imageAlt="Caribbean Flair Island Jerk Grill Trailer Location"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Locations and hours hero section for Caribbean Flair"
        />
      </div>

      {/* Location Details with Map and Info */}
      <div id="location-details" data-section="location-details">
        <FeatureBento
          title="Find Us Here"
          description="Caribbean Flair Island Jerk Grill is located in the heart of Lehigh Acres. We're easy to find and ready to serve you authentic Caribbean flavors."
          tag="Primary Location"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              title: "Address",              description: "801 Leeland Heights Blvd W, Lehigh Acres, FL 33936",              bentoComponent: "map"},
            {
              title: "Hours of Operation",              description: "Open daily. See schedule below.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Clock, label: "Monday-Friday", value: "11 AM - 9 PM" },
                { icon: Clock, label: "Saturday", value: "12 PM - 10 PM" },
                { icon: Clock, label: "Sunday", value: "12 PM - 9 PM" },
                { icon: AlertCircle, label: "Holidays", value: "Call Ahead" },
              ],
            },
            {
              title: "Popular Times",              description: "Peak times for Caribbean Flair dining.",              bentoComponent: "timeline",              items: [
                { label: "Lunch Rush", detail: "12 PM - 1:30 PM" },
                { label: "Afternoon Slow", detail: "2 PM - 4:30 PM" },
                { label: "Dinner Peak", detail: "6 PM - 8 PM" },
              ],
              completedLabel: "Current Time"},
            ],
          ]}
        />
      </div>

      {/* Contact Information and Directions */}
      <div id="contact-info" data-section="contact-info">
        <FeatureCardTen
          title="Get In Touch - We're Ready to Serve"
          description="Whether you're ordering ahead, looking for directions, or have questions about our menu—reach out! We're here to provide the best Caribbean Flair experience."
          tag="Contact Us"
          tagIcon={Phone}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Call (239) 785-0423",              href: "tel:2397850423"},
            {
              text: "Get Directions",              href: "https://maps.google.com/?q=801+Leeland+Heights+Blvd+W+Lehigh+Acres+FL+33936"},
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: "service-info",              title: "How to Order",              description:
                "Visit us in person, call ahead for pickup, or order online through our website. We offer delivery and catering for special events.",              media: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/side-view-smiley-man-getting-coffee_23-2149663609.jpg?_wi=1"},
              items: [
                {
                  icon: CheckCircle,
                  text: "On-Site Ordering"},
                {
                  icon: Phone,
                  text: "Phone Orders"},
                {
                  icon: TrendingUp,
                  text: "Online Ordering"},
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