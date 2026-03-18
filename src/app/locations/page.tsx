"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { MapPin, Clock, TrendingUp } from "lucide-react";

export default function LocationsPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About Us", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "Locations", id: "locations" },
    { name: "Order Online", id: "order" },
  ];

  const footerColumns = [
    {
      title: "Quick Links",      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "Gallery", href: "/" },
        { label: "Reviews", href: "/" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Order Online", href: "/order" },
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
            text: "Order Now",            href: "/order"}}
        />
      </div>

      {/* Locations & Hours Section */}
      <div id="locations-hours" data-section="locations-hours">
        <FeatureBento
          title="Visit Us at Caribbean Flair"
          description="Find us at our convenient Lehigh Acres location. Check our hours, visit our embedded map, and see when we're busiest."
          tag="Open Daily"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              title: "Location & Hours",              description:
                "801 Leeland Heights Blvd W, Lehigh Acres, FL 33936 | Open 11am - 9pm Daily",              button: {
                text: "Get Directions",                href: "https://maps.google.com/?q=801+Leeland+Heights+Blvd+W+Lehigh+Acres+FL+33936"},
              bentoComponent: "map"},
            {
              title: "Open Status",              description: "Currently Open • Closes at 9:00 PM • Peak Hours: 12-1 PM & 5-7 PM",              bentoComponent: "icon-info-cards",              items: [
                { icon: Clock, label: "Status", value: "Open Now" },
                { icon: TrendingUp, label: "Busy Level", value: "Moderate" },
              ],
            },
            {
              title: "Popular Times",              description: "Visit during off-peak hours for shorter wait times.",              bentoComponent: "line-chart"},
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