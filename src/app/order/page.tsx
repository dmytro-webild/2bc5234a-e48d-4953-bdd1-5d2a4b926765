"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import ProductCartItem from "@/components/ecommerce/cart/ProductCartItem";
import {
  CreditCard,
  Heart,
  ShoppingCart,
  Lock,
  Check,
} from "lucide-react";

export default function OrderPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About Us", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "Locations", id: "locations" },
    { name: "Order Online", id: "order" },
  ];

  const [cart, setCart] = useState<
    Array<{
      id: string;
      name: string;
      variants?: string[];
      price: string;
      quantity: number;
      imageSrc: string;
      imageAlt?: string;
    }>
  >([
    {
      id: "jerk-chicken",      name: "Jerk Chicken Platter",      price: "$15.95",      quantity: 1,
      imageSrc:
        "http://img.b2bpic.net/free-photo/from-shrimps-batter-with-red-rice-greens-white-plate_176474-2654.jpg?_wi=1",      imageAlt: "Jerk chicken platter",      variants: ["Full Rack"],
    },
    {
      id: "curry-shrimp",      name: "Curry Shrimp Platter",      price: "$16.95",      quantity: 1,
      imageSrc:
        "http://img.b2bpic.net/free-photo/side-view-fried-eggs-with-shrimps-vegetables-pan-served-with-sauces_140725-11952.jpg?_wi=1",      imageAlt: "Curry shrimp platter",      variants: ["Fresh Daily"],
    },
  ]);

  const [paymentMethod, setPaymentMethod] = useState<
    "credit-card" | "apple-pay" | "paypal"
  >("credit-card");
  const [orderStage, setOrderStage] = useState<
    "cart" | "checkout" | "confirmation"
  >("cart");

  const handleQuantityChange = (id: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

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

  if (orderStage === "confirmation") {
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
              text: "Order Now",              href: "/order"}}
          />
        </div>

        <div id="confirmation" data-section="confirmation" className="min-h-screen flex items-center justify-center px-4 py-12">
          <div className="max-w-md w-full text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-green-100 p-4">
                <Check className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order. Your Caribbean Flair meal will be ready in approximately 20 minutes.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <p className="text-sm text-gray-600 mb-2">Order #: CF-2025-001234</p>
              <p className="font-semibold text-lg mb-1">Total: ${total.toFixed(2)}</p>
              <p className="text-sm text-gray-600">Payment: {paymentMethod === "credit-card" ? "Credit Card" : paymentMethod === "apple-pay" ? "Apple Pay" : "PayPal"}</p>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setOrderStage("cart");
                  setCart([]);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Place Another Order
              </button>
              <a
                href="/"
                className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition text-center"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>

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

  if (orderStage === "checkout") {
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
              text: "Order Now",              href: "/order"}}
          />
        </div>

        <div id="checkout" data-section="checkout" className="min-h-screen px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Secure Checkout</h1>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>
                      ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax (7%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Secure Payment
              </h2>

              {/* Credit Card */}
              <div
                className={`border-2 rounded-lg p-4 mb-4 cursor-pointer transition ${
                  paymentMethod === "credit-card"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                }`}
                onClick={() => setPaymentMethod("credit-card")}
              >
                <div className="flex items-center mb-4">
                  <CreditCard className="w-6 h-6 mr-3" />
                  <span className="font-semibold">Credit Card</span>
                </div>
                {paymentMethod === "credit-card" && (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-3 py-2 border rounded-lg text-sm"
                    />
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="flex-1 px-3 py-2 border rounded-lg text-sm"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="flex-1 px-3 py-2 border rounded-lg text-sm"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Apple Pay */}
              <div
                className={`border-2 rounded-lg p-4 mb-4 cursor-pointer transition ${
                  paymentMethod === "apple-pay"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                }`}
                onClick={() => setPaymentMethod("apple-pay")}
              >
                <div className="flex items-center">
                  <span className="font-bold text-xl mr-3">🍎</span>
                  <span className="font-semibold">Apple Pay</span>
                </div>
              </div>

              {/* PayPal */}
              <div
                className={`border-2 rounded-lg p-4 cursor-pointer transition ${
                  paymentMethod === "paypal"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                }`}
                onClick={() => setPaymentMethod("paypal")}
              >
                <div className="flex items-center">
                  <span className="font-bold text-blue-600 mr-3">PP</span>
                  <span className="font-semibold">PayPal</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setOrderStage("cart")}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition"
              >
                Back to Cart
              </button>
              <button
                onClick={() => setOrderStage("confirmation")}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Complete Order
              </button>
            </div>
          </div>
        </div>

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

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Order Your Caribbean Feast Online"
          description="Build your custom order from our signature island dishes. Fast, secure checkout with multiple payment options."
          tag="Quick & Easy Ordering"
          tagIcon={ShoppingCart}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            {
              text: "Proceed to Checkout",              onClick: () => setOrderStage("checkout"),
            },
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-2gw0wih3.jpg"
          imageAlt="Caribbean Flair food display"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Order online hero section"
        />
      </div>

      {/* Shopping Cart Section */}
      <div id="cart" data-section="cart" className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-xl text-gray-600">Your cart is empty</p>
              <a
                href="/menu"
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Browse Menu
              </a>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {cart.map((item) => (
                  <ProductCartItem
                    key={item.id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemove}
                  />
                ))}
              </div>

              {/* Cart Summary */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (7%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href="/menu"
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition text-center"
                >
                  Continue Shopping
                </a>
                <button
                  onClick={() => setOrderStage("checkout")}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
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