"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  ShoppingCart,
  CreditCard,
  Apple,
  DollarSign,
  CheckCircle,
  Zap,
  TrendingUp,
  Facebook,
} from "lucide-react";
import { useState } from "react";

export default function OrderOnlinePage() {
  const [cartItems, setCartItems] = useState<Array<{ id: string; name: string; price: number; quantity: number }>>([
    { id: "jerk-chicken", name: "Jerk Chicken Platter", price: 15.95, quantity: 1 },
  ]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "apple-pay" | "paypal" | null>(null);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const navItems = [
    { name: "Home", id: "/" },
    { name: "Order Online", id: "/order-online" },
    { name: "Contact", id: "/contact" },
    { name: "Gallery", id: "/" },
    { name: "Reviews", id: "/" },
    { name: "Locations", id: "/" },
  ];

  const footerColumns = [
    {
      title: "Quick Links",      items: [
        { label: "Home", href: "/" },
        { label: "Order Online", href: "/order-online" },
        { label: "Gallery", href: "/" },
        { label: "Reviews", href: "/" },
      ],
    },
    {
      title: "Order & Contact",      items: [
        { label: "Order Online", href: "/order-online" },
        { label: "Call Us", href: "tel:2397850423" },
        { label: "Locations & Hours", href: "/" },
        { label: "Contact", href: "/contact" },
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

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleAddToCart = (productName: string, price: number) => {
    const existingItem = cartItems.find((item) => item.name === productName);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { id: Date.now().toString(), name: productName, price, quantity: 1 },
      ]);
    }
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handlePaymentSubmit = (method: "card" | "apple-pay" | "paypal") => {
    setPaymentMethod(method);
    // Simulate payment processing
    setTimeout(() => {
      setOrderConfirmed(true);
      // In a real app, send receipt via email here
    }, 1500);
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
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Caribbean Flair"
          navItems={navItems}
          button={{
            text: "Contact Us",            href: "/contact"}}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Order Your Island Feast Online"
          description="Browse our authentic Caribbean menu, add items to your cart, and securely checkout. Meals are prepared fresh to order and ready for pickup or delivery."
          tag="Fast & Secure Checkout"
          tagIcon={ShoppingCart}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "View Menu",              href: "#menu"},
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-2gw0wih3.jpg"
          imageAlt="Order Online - Caribbean Flair Menu"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Order Online hero section"
        />
      </div>

      {/* Cart & Checkout Section */}
      <div id="cart-checkout" data-section="cart-checkout" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {!orderConfirmed ? (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Menu Items */}
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-8">Select Your Items</h2>
                <div className="space-y-4">
                  {[
                    { id: "jerk-chicken", name: "Jerk Chicken Platter", price: 15.95, desc: "Full Rack" },
                    { id: "curry-shrimp", name: "Curry Shrimp Platter", price: 16.95, desc: "Fresh Daily" },
                    { id: "conch-fritters", name: "Conch Fritters Combo", price: 12.95, desc: "6 Pieces" },
                    { id: "escovitch-fish", name: "Escovitch Fish", price: 17.95, desc: "Island Tradition" },
                    { id: "curry-goat", name: "Curry Goat", price: 16.95, desc: "Community Favorite" },
                    { id: "festival-sides", name: "Festival & Slaw", price: 8.95, desc: "Must Try" },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-bold">${item.price.toFixed(2)}</p>
                        <button
                          onClick={() => handleAddToCart(item.name, item.price)}
                          className="px-4 py-2 bg-primary-cta text-white rounded-lg hover:opacity-90 transition"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Summary */}
              <div className="md:col-span-1">
                <div className="border border-gray-200 rounded-lg p-6 sticky top-20">
                  <h3 className="text-xl font-bold mb-4">Your Cart</h3>
                  <div className="space-y-3 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                          <button
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="text-xs text-red-500 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg mb-4">
                      <span>Total:</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={handleCheckout}
                      disabled={cartItems.length === 0}
                      className="w-full px-4 py-3 bg-primary-cta text-white rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* Checkout Form */}
          {showCheckout && !orderConfirmed && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Secure Checkout</h2>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Select Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => handlePaymentSubmit("card")}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-cta hover:bg-blue-50 transition flex items-center justify-center gap-2"
                  >
                    <CreditCard size={24} />
                    <span>Credit Card</span>
                  </button>
                  <button
                    onClick={() => handlePaymentSubmit("apple-pay")}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-cta hover:bg-blue-50 transition flex items-center justify-center gap-2"
                  >
                    <Apple size={24} />
                    <span>Apple Pay</span>
                  </button>
                  <button
                    onClick={() => handlePaymentSubmit("paypal")}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary-cta hover:bg-blue-50 transition flex items-center justify-center gap-2"
                  >
                    <DollarSign size={24} />
                    <span>PayPal</span>
                  </button>
                </div>
              </div>

              {/* Credit Card Form */}
              {paymentMethod === "card" && (
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold">Credit Card Details</h3>
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Card Number (16 digits)"
                    maxLength={16}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      maxLength={3}
                      className="px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Billing Address */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold">Billing Address</h3>
                <input
                  type="text"
                  placeholder="Full Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-3">Order Summary</h3>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm mb-2">
                    <span>{item.name} x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => handlePaymentSubmit(paymentMethod || "card")}
                className="w-full px-6 py-3 bg-primary-cta text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Complete Purchase
              </button>
            </div>
          )}

          {/* Order Confirmation */}
          {orderConfirmed && (
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="mb-6">
                <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Order Confirmed!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your order has been successfully placed. A receipt has been sent to your email.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-3">Order Details</h3>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm mb-2">
                    <span>{item.name} x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-3 mt-3 flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Payment Method: {paymentMethod}</p>
              <p className="text-gray-600 mb-8">Your meal will be ready for pickup in approximately 15-20 minutes.</p>
              <Link
                href="/"
                className="px-6 py-3 bg-primary-cta text-white rounded-lg font-semibold hover:opacity-90 transition inline-block"
              >
                Return Home
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div id="order-features" data-section="order-features">
        <FeatureCardTen
          title="Why Order with Caribbean Flair?"
          description="Experience seamless online ordering with secure payment, fast preparation, and delicious authentic Caribbean meals delivered right to you."
          tag="Premium Experience"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: "secure-payment",              title: "Secure Payment Processing",              description:
                "We use industry-leading encryption for all transactions. Your payment information is always protected.",              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-wha24yfi.jpg"},
              items: [
                {
                  icon: CreditCard,
                  text: "Multiple Payment Options"},
                {
                  icon: CheckCircle,
                  text: "Encrypted Transactions"},
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