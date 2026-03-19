"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import { ArrowLeft } from "lucide-react";

export default function MenuPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "signature-dishes" },
    { name: "About Us", id: "owners-spotlight" },
    { name: "Gallery", id: "featured-gallery" },
    { name: "Reviews", id: "testimonials" },
    { name: "Locations", id: "footer" },
  ];

  const menuImages = [
    {
      id: "menu-1",      title: "Signature Jerk Platter",      description: "Fresh grilled jerk seasoned meats with our authentic Caribbean spice blend",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773883141480-85jt966z.jpg"},
    {
      id: "menu-2",      title: "Island Curry Fusion",      description: "Rich, aromatic curry with tender meats and traditional Caribbean flavors",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773883141480-yyr4lilk.jpg"},
    {
      id: "menu-3",      title: "Escovitch Seafood",      description: "Fresh fish with pickled vegetables and authentic island preparation",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773883141481-5qpq55fx.jpg"},
    {
      id: "menu-4",      title: "Conch Fritters",      description: "Golden, crispy conch fritters with house-made dipping sauce",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773883141481-8okohg7v.jpg"},
    {
      id: "menu-5",      title: "Festival Sides",      description: "Festival dumplings, rice & peas, mac & cheese, and tropical slaw",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773883141481-tk7p5ayr.jpg"},
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
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          animation: fadeIn 0.8s ease-out;
        }

        .menu-hero {
          animation: slideUp 0.8s ease-out;
        }

        .menu-gallery {
          animation: fadeIn 1s ease-out 0.2s both;
        }

        .menu-item {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .menu-item:nth-child(1) { animation-delay: 0.3s; }
        .menu-item:nth-child(2) { animation-delay: 0.4s; }
        .menu-item:nth-child(3) { animation-delay: 0.5s; }
        .menu-item:nth-child(4) { animation-delay: 0.6s; }
        .menu-item:nth-child(5) { animation-delay: 0.7s; }
      `}</style>

      {/* Navigation Bar */}
      <div className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
        <NavbarStyleCentered
          brandName="Caribbean Flair"
          navItems={navItems}
          button={{
            text: "Order Now",            href: "/order"}}
        />
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Hero Section */}
        <div className="menu-hero relative px-4 py-16 md:py-24 bg-gradient-to-r from-primary-cta/10 via-accent/10 to-background-accent/10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex items-center gap-4">
              <Link
                href="/#signature-dishes"
                className="flex items-center gap-2 text-primary-cta hover:opacity-70 transition-opacity"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Complete Menu
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover all of our authentic Caribbean dishes, crafted with love and served fresh off the grill.
            </p>
          </div>
        </div>

        {/* Menu Gallery Section */}
        <div className="menu-gallery px-4 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Dishes</h2>
              <p className="text-lg text-gray-600">Experience the visual journey of our premium Caribbean cuisine</p>
            </div>

            {/* Image Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
              {/* Large feature image - spans 2x2 on desktop */}
              <div className="menu-item md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl shadow-xl border border-white/20">
                <img
                  src={menuImages[0].imageSrc}
                  alt={menuImages[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{menuImages[0].title}</h3>
                  <p className="text-gray-200 text-sm">{menuImages[0].description}</p>
                </div>
              </div>

              {/* Right side grid - 3 items */}
              {menuImages.slice(1, 4).map((item, idx) => (
                <div
                  key={item.id}
                  className="menu-item group relative overflow-hidden rounded-2xl shadow-lg border border-white/20"
                  style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                >
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-200 text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Last item - full width */}
            <div className="menu-item group relative overflow-hidden rounded-2xl shadow-xl border border-white/20" style={{ animationDelay: '0.7s' }}>
              <img
                src={menuImages[4].imageSrc}
                alt={menuImages[4].title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">{menuImages[4].title}</h3>
                <p className="text-gray-200 text-lg">{menuImages[4].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Details Section */}
        <div className="px-4 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Complete Menu Options</h2>

            {/* Main Dishes */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-8 md:p-12 mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-primary-cta/20">Main Dishes</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Jerk Chicken Platter</h4>
                  <p className="text-gray-600 mb-3">Marinated in authentic Caribbean spices, grilled to perfection. Served with rice & peas, festival dumplings, and tropical slaw.</p>
                  <p className="text-2xl font-bold text-primary-cta">$15.95</p>
                </div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Curry Shrimp Platter</h4>
                  <p className="text-gray-600 mb-3">Fresh shrimp in our signature curry sauce with Caribbean seasonings. Includes rice & peas, festival dumplings, and tropical slaw.</p>
                  <p className="text-2xl font-bold text-primary-cta">$16.95</p>
                </div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Curry Goat</h4>
                  <p className="text-gray-600 mb-3">Tender goat meat cooked in rich curry sauce with traditional island spices. Served with rice & peas and festival dumplings.</p>
                  <p className="text-2xl font-bold text-primary-cta">$17.95</p>
                </div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Escovitch Fish</h4>
                  <p className="text-gray-600 mb-3">Fresh fish prepared Jamaican style with pickled vegetables. Authentic island flavors in every bite.</p>
                  <p className="text-2xl font-bold text-primary-cta">$18.95</p>
                </div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Jerk Pork Platter</h4>
                  <p className="text-gray-600 mb-3">Succulent jerk pork with our signature island spice blend. Includes all classic sides for the full Caribbean experience.</p>
                  <p className="text-2xl font-bold text-primary-cta">$16.95</p>
                </div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Island Combo Platter</h4>
                  <p className="text-gray-600 mb-3">A sampling of our finest - jerk chicken, curry shrimp, and conch fritters with all the trimmings.</p>
                  <p className="text-2xl font-bold text-primary-cta">$24.95</p>
                </div>
              </div>
            </div>

            {/* Sides & Appetizers */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-8 md:p-12 mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-primary-cta/20">Sides & Appetizers</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Conch Fritters Combo</h4>
                  <p className="text-gray-600 mb-3">6 pieces of golden, crispy conch fritters. Served with house-made dipping sauce.</p>
                  <p className="text-2xl font-bold text-primary-cta">$12.95</p>
                </div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Festival Dumplings</h4>
                  <p className="text-gray-600 mb-3">Crispy, golden fried dumplings. A Caribbean classic that pairs perfectly with any main dish.</p>
                  <p className="text-2xl font-bold text-primary-cta">$4.95</p>
                </div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Creamy Island Mac & Cheese</h4>
                  <p className="text-gray-600 mb-3">Smooth, rich, and soul-warming. The perfect comfort food complement to our island mains.</p>
                  <p className="text-2xl font-bold text-primary-cta">$5.95</p>
                </div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Rice & Peas</h4>
                  <p className="text-gray-600 mb-3">Traditional Caribbean rice and peas. Fresh, aromatic, and perfectly seasoned.</p>
                  <p className="text-2xl font-bold text-primary-cta">$4.95</p>
                </div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Tropical Slaw</h4>
                  <p className="text-gray-600 mb-3">Fresh, crisp coleslaw with a tropical twist. Light and refreshing alongside any dish.</p>
                  <p className="text-2xl font-bold text-primary-cta">$3.95</p>
                </div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Vegetable Medley</h4>
                  <p className="text-gray-600 mb-3">Fresh seasonal vegetables with island seasonings and a hint of Caribbean flair.</p>
                  <p className="text-2xl font-bold text-primary-cta">$5.95</p>
                </div>
              </div>
            </div>

            {/* Beverages */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-primary-cta/20">Beverages</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Island Ginger Beer</h4>
                  <p className="text-gray-600 mb-3">Refreshing traditional Caribbean ginger beer. Perfectly spiced and ice-cold.</p>
                  <p className="text-2xl font-bold text-primary-cta">$2.95</p>
                </div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Fresh Tropical Juice</h4>
                  <p className="text-gray-600 mb-3">Mango, passion fruit, or guava. Fresh squeezed island flavors in every sip.</p>
                  <p className="text-2xl font-bold text-primary-cta">$3.95</p>
                </div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Sorrel Punch</h4>
                  <p className="text-gray-600 mb-3">Traditional Caribbean sorrel punch. Tart, sweet, and refreshingly authentic.</p>
                  <p className="text-2xl font-bold text-primary-cta">$3.95</p>
                </div>
                <div className="pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Cold Beverages</h4>
                  <p className="text-gray-600 mb-3">Selection of cold drinks to complement your Caribbean meal.</p>
                  <p className="text-2xl font-bold text-primary-cta">$2.50</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="px-4 py-16 md:py-20">
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-primary-cta to-accent rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Caribbean Flair?</h2>
            <p className="text-white/90 mb-8 text-lg">Call us at (239) 785-0423 or visit our location for fresh Caribbean flavors made to order.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2397850423"
                className="inline-block bg-white text-primary-cta px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Call Now
              </a>
              <Link
                href="/order"
                className="inline-block bg-white/20 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all"
              >
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
