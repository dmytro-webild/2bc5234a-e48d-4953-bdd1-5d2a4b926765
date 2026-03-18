"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import { ArrowLeft, Lock } from "lucide-react";

export default function MenuPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "signature-dishes" },
    { name: "About Us", id: "owners-spotlight" },
    { name: "Gallery", id: "featured-gallery" },
    { name: "Reviews", id: "testimonials" },
    { name: "Locations", id: "footer" },
  ];

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your actual password
    const correctPassword = "caribbean2025";
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

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

        html {
          scroll-behavior: smooth;
        }

        body {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>

      {/* Navigation Bar */}
      <div className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
        <NavbarStyleCentered
          brandName="Caribbean Flair"
          navItems={navItems}
          button={{
            text: "See Full Menu",            href: "/menu"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {!isAuthenticated ? (
          // Password Protected View
          <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
            <div className="w-full max-w-md">
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 md:p-10">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-primary-cta to-accent p-3 rounded-full">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
                  Full Menu
                </h1>
                <p className="text-center text-gray-600 mb-8">
                  Enter the password to view our complete menu with all available dishes and specials.
                </p>

                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-cta focus:border-transparent"
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-cta to-accent text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Unlock Menu
                  </button>
                </form>

                <p className="text-center text-xs text-gray-500 mt-6">
                  For password assistance, please contact us
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Full Menu View
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
            <div className="mb-8 flex items-center gap-4">
              <Link
                href="/#signature-dishes"
                className="flex items-center gap-2 text-primary-cta hover:opacity-70 transition-opacity"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Full Menu
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Discover all of our authentic Caribbean dishes, crafted with love and served fresh off the grill.
            </p>

            {/* Menu Sections */}
            <div className="space-y-12">
              {/* Main Dishes */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Main Dishes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="pb-6 border-b md:border-b-0 md:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900">Jerk Chicken Platter</h3>
                    <p className="text-gray-600 text-sm mt-1 mb-3">Marinated in authentic Caribbean spices, grilled to perfection. Served with rice & peas, festival dumplings, and tropical slaw.</p>
                    <p className="text-primary-cta font-bold text-lg">$15.95</p>
                  </div>
                  <div className="pb-6 border-b md:border-b-0 md:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900">Curry Shrimp Platter</h3>
                    <p className="text-gray-600 text-sm mt-1 mb-3">Fresh shrimp in our signature curry sauce with Caribbean seasonings. Includes rice & peas, festival dumplings, and tropical slaw.</p>
                    <p className="text-primary-cta font-bold text-lg">$16.95</p>
                  </div>
                  <div className="pb-6 md:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900">Curry Goat</h3>
                    <p className="text-gray-600 text-sm mt-1 mb-3">Tender goat meat cooked in rich curry sauce with traditional island spices. Served with rice & peas and festival dumplings.</p>
                    <p className="text-primary-cta font-bold text-lg">$17.95</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Escovitch Fish</h3>
                    <p className="text-gray-600 text-sm mt-1 mb-3">Fresh fish prepared Jamaican style with pickled vegetables. Authentic island flavors in every bite.</p>
                    <p className="text-primary-cta font-bold text-lg">$16.95</p>
                  </div>
                </div>
              </div>

              {/* Sides & Appetizers */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Sides & Appetizers</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="pb-6 border-b md:border-b-0 md:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900">Conch Fritters Combo</h3>
                    <p className="text-gray-600 text-sm mt-1 mb-3">6 pieces of golden, crispy conch fritters. Served with house-made dipping sauce.</p>
                    <p className="text-primary-cta font-bold text-lg">$12.95</p>
                  </div>
                  <div className="pb-6 border-b md:border-b-0 md:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900">Festival Dumplings</h3>
                    <p className="text-gray-600 text-sm mt-1 mb-3">Crispy, golden fried dumplings. A Caribbean classic that pairs perfectly with any main dish.</p>
                    <p className="text-primary-cta font-bold text-lg">$4.95</p>
                  </div>
                  <div className="pb-6 md:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900">Creamy Island Mac & Cheese</h3>
                    <p className="text-gray-600 text-sm mt-1 mb-3">Smooth, rich, and soul-warming. The perfect comfort food complement to our island mains.</p>
                    <p className="text-primary-cta font-bold text-lg">$5.95</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Tropical Slaw</h3>
                    <p className="text-gray-600 text-sm mt-1 mb-3">Fresh, crisp coleslaw with a tropical twist. Light and refreshing alongside any dish.</p>
                    <p className="text-primary-cta font-bold text-lg">$3.95</p>
                  </div>
                </div>
              </div>

              {/* Beverages */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Beverages</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="pb-6 border-b md:border-b-0 md:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900">Island Ginger Beer</h3>
                    <p className="text-gray-600 text-sm mt-1 mb-3">Refreshing traditional Caribbean ginger beer. Perfectly spiced and ice-cold.</p>
                    <p className="text-primary-cta font-bold text-lg">$2.95</p>
                  </div>
                  <div className="pb-6 md:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900">Fresh Tropical Juice</h3>
                    <p className="text-gray-600 text-sm mt-1 mb-3">Mango, passion fruit, or guava. Fresh squeezed island flavors in every sip.</p>
                    <p className="text-primary-cta font-bold text-lg">$3.95</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-primary-cta to-accent rounded-2xl shadow-lg p-8 md:p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Order?</h2>
              <p className="text-white/90 mb-6">Call us at (239) 785-0423 or visit our location for fresh Caribbean flavors made to order.</p>
              <a
                href="tel:2397850423"
                className="inline-block bg-white text-primary-cta px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}