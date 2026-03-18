"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Heart, Package, Settings, LogOut, Menu, X, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export default function AccountPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("orders");

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
        { label: "Reviews", href: "/" },
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

  const orderHistory = [
    {
      id: "order-001",      date: "Jan 15, 2025",      items: "Jerk Chicken Platter x2, Curry Shrimp Platter x1",      total: "$49.85",      status: "Delivered"},
    {
      id: "order-002",      date: "Jan 10, 2025",      items: "Conch Fritters Combo x3, Mac & Cheese x2",      total: "$45.75",      status: "Delivered"},
    {
      id: "order-003",      date: "Jan 5, 2025",      items: "Curry Goat Platter x1, Festival Dumplings x1",      total: "$38.90",      status: "Delivered"},
  ];

  const favorites = [
    {
      id: "fav-1",      name: "Jerk Chicken Platter",      price: "$15.95",      image: "http://img.b2bpic.net/free-photo/from-shrimps-batter-with-red-rice-greens-white-plate_176474-2654.jpg?_wi=1"},
    {
      id: "fav-2",      name: "Curry Shrimp Platter",      price: "$16.95",      image: "http://img.b2bpic.net/free-photo/side-view-fried-eggs-with-shrimps-vegetables-pan-served-with-sauces_140725-11952.jpg?_wi=1"},
    {
      id: "fav-3",      name: "Conch Fritters Combo",      price: "$12.95",      image: "http://img.b2bpic.net/free-photo/chicken-nuggets-served-with-french-fries-sauces_140725-5759.jpg?_wi=1"},
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

      {/* Main Content */}
      <main className="min-h-screen bg-gradient-to-br from-background to-card pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">My Account</h1>
            <p className="text-foreground/70">Welcome back! Manage your orders and favorites.</p>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-cta text-foreground hover:opacity-90 transition-opacity"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              <span>{sidebarOpen ? "Close" : "Menu"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside
              className={`lg:col-span-1 ${
                sidebarOpen ? "block" : "hidden lg:block"
              } lg:sticky lg:top-24 h-fit`}
            >
              <nav
                className="space-y-2 bg-card rounded-lg p-6 border border-card/50 backdrop-blur-sm"
                role="navigation"
                aria-label="Account navigation"
              >
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === "orders"
                      ? "bg-primary-cta text-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-background/50"
                  }`}
                  aria-current={activeTab === "orders" ? "page" : undefined}
                >
                  <Package size={20} />
                  <span>Order History</span>
                </button>
                <button
                  onClick={() => setActiveTab("favorites")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === "favorites"
                      ? "bg-primary-cta text-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-background/50"
                  }`}
                  aria-current={activeTab === "favorites" ? "page" : undefined}
                >
                  <Heart size={20} />
                  <span>Favorites</span>
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === "settings"
                      ? "bg-primary-cta text-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-background/50"
                  }`}
                  aria-current={activeTab === "settings" ? "page" : undefined}
                >
                  <Settings size={20} />
                  <span>Settings</span>
                </button>
                <hr className="my-2 border-card/30" />
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:text-foreground hover:bg-background/50 transition-all"
                  aria-label="Logout"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </nav>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Order History Tab */}
              {activeTab === "orders" && (
                <section id="orders" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Order History</h2>
                    <p className="text-foreground/70 mb-6">View all your previous orders and reorder your favorites.</p>
                  </div>

                  <div className="space-y-4">
                    {orderHistory.map((order) => (
                      <div
                        key={order.id}
                        className="bg-card rounded-lg p-6 border border-card/50 backdrop-blur-sm hover:border-primary-cta/50 transition-all"
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-semibold text-primary-cta">Order #{order.id}</span>
                              <span
                                className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent"
                                role="status"
                              >
                                {order.status}
                              </span>
                            </div>
                            <p className="text-foreground/70 text-sm mb-1">{order.date}</p>
                            <p className="text-foreground mb-2">{order.items}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-primary-cta mb-3">{order.total}</p>
                            <button
                              className="px-4 py-2 bg-primary-cta text-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                              aria-label={`Reorder items from ${order.id}`}
                            >
                              Reorder
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Favorites Tab */}
              {activeTab === "favorites" && (
                <section id="favorites" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Favorite Items</h2>
                    <p className="text-foreground/70 mb-6">Quick access to your most loved Caribbean Flair dishes.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.map((item) => (
                      <div
                        key={item.id}
                        className="bg-card rounded-lg overflow-hidden border border-card/50 backdrop-blur-sm hover:border-primary-cta/50 transition-all group"
                      >
                        <div className="relative overflow-hidden aspect-square bg-background/50">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <button
                            className="absolute top-3 right-3 p-2 bg-primary-cta rounded-full text-foreground hover:opacity-90 transition-opacity"
                            aria-label={`Remove ${item.name} from favorites`}
                          >
                            <Heart size={18} className="fill-current" />
                          </button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                          <p className="text-primary-cta font-bold mb-3">{item.price}</p>
                          <button
                            className="w-full px-3 py-2 bg-primary-cta text-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                            aria-label={`Add ${item.name} to cart`}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <section id="settings" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Account Settings</h2>
                    <p className="text-foreground/70 mb-6">Manage your profile and communication preferences.</p>
                  </div>

                  <div className="space-y-6">
                    {/* Profile Information */}
                    <div className="bg-card rounded-lg p-6 border border-card/50 backdrop-blur-sm">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Profile Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 bg-background border border-card/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary-cta"
                            aria-label="Full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                          <input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-2 bg-background border border-card/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary-cta"
                            aria-label="Email address"
                          />
                        </div>
                        <button className="px-6 py-2 bg-primary-cta text-foreground rounded-lg hover:opacity-90 transition-opacity font-medium">
                          Save Changes
                        </button>
                      </div>
                    </div>

                    {/* Delivery Address */}
                    <div className="bg-card rounded-lg p-6 border border-card/50 backdrop-blur-sm">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Default Delivery Address</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Street Address</label>
                          <input
                            type="text"
                            placeholder="123 Main Street"
                            className="w-full px-4 py-2 bg-background border border-card/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary-cta"
                            aria-label="Street address"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">City</label>
                            <input
                              type="text"
                              placeholder="Lehigh Acres"
                              className="w-full px-4 py-2 bg-background border border-card/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary-cta"
                              aria-label="City"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">ZIP Code</label>
                            <input
                              type="text"
                              placeholder="33936"
                              className="w-full px-4 py-2 bg-background border border-card/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary-cta"
                              aria-label="ZIP code"
                            />
                          </div>
                        </div>
                        <button className="px-6 py-2 bg-primary-cta text-foreground rounded-lg hover:opacity-90 transition-opacity font-medium">
                          Update Address
                        </button>
                      </div>
                    </div>

                    {/* Notification Preferences */}
                    <div className="bg-card rounded-lg p-6 border border-card/50 backdrop-blur-sm">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-5 h-5 rounded border-card/30 text-primary-cta focus:ring-primary-cta"
                            aria-label="Email notifications for orders"
                          />
                          <span className="text-foreground">Email me order updates</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-5 h-5 rounded border-card/30 text-primary-cta focus:ring-primary-cta"
                            aria-label="SMS notifications"
                          />
                          <span className="text-foreground">Text me special offers</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-5 h-5 rounded border-card/30 text-primary-cta focus:ring-primary-cta"
                            aria-label="Marketing emails"
                          />
                          <span className="text-foreground">Marketing emails and promotions</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Quick Contact Section */}
      <section className="bg-card/50 backdrop-blur-sm py-12 border-t border-card/30" aria-labelledby="quick-contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quick-contact-heading" className="text-2xl font-bold text-foreground text-center mb-8">
            Need Help? Get in Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-primary-cta rounded-full mb-3">
                <Phone size={24} className="text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
              <p className="text-foreground/70">
                <a href="tel:2397850423" className="hover:text-primary-cta transition-colors">
                  (239) 785-0423
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-primary-cta rounded-full mb-3">
                <Mail size={24} className="text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-foreground/70">
                <a href="mailto:info@caribbeanflair.com" className="hover:text-primary-cta transition-colors">
                  info@caribbeanflair.com
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-primary-cta rounded-full mb-3">
                <MapPin size={24} className="text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
              <p className="text-foreground/70">801 Leeland Heights Blvd W<br />Lehigh Acres, FL 33936</p>
            </div>
          </div>
        </div>
      </section>

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