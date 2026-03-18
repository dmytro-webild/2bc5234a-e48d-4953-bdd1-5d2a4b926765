"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Phone, MessageCircle, Facebook, MessageSquare, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ id: string; sender: "user" | "bot"; text: string }>>([]);
  const [chatInput, setChatInput] = useState("");

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

  const handleChatSend = () => {
    if (!chatInput.trim()) return;

    const newMessage = { id: Date.now().toString(), sender: "user" as const, text: chatInput };
    setChatMessages([...chatMessages, newMessage]);
    setChatInput("");

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "Thanks for reaching out! How can we help you today?",        "Great question! Our team is here to assist you.",        "We appreciate your inquiry. One moment while we connect you with our team.",        "Caribbean Flair is committed to excellent customer service. What can we do for you?"];
      const botResponse = {
        id: (Date.now() + 1).toString(),
        sender: "bot" as const,
        text: responses[Math.floor(Math.random() * responses.length)],
      };
      setChatMessages((prev) => [...prev, botResponse]);
    }, 800);
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
            text: "Order Now",            href: "/order-online"}}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Get in Touch with Caribbean Flair"
          description="We'd love to hear from you! Whether you have questions about our menu, want to place a bulk order, or just want to say hello, reach out to us through any of these channels."
          tag="We're Here to Help"
          tagIcon={MessageCircle}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          buttons={[
            {
              text: "Start Live Chat",              href: "#live-chat"},
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-qcfdeh7f.jpg"
          imageAlt="Contact Caribbean Flair"
          mediaAnimation="opacity"
          imagePosition="right"
          ariaLabel="Contact hero section"
        />
      </div>

      {/* Contact Methods Section */}
      <div id="contact-methods" data-section="contact-methods" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Call Button */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary-cta" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a
                href="tel:2397850423"
                className="inline-block px-4 py-2 bg-primary-cta text-white rounded-lg hover:opacity-90 transition font-semibold"
              >
                Call (239) 785-0423
              </a>
            </div>

            {/* Text Option */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-primary-cta" />
              <h3 className="text-lg font-semibold mb-2">Text Us</h3>
              <p className="text-gray-600 mb-4">Quick responses via SMS</p>
              <a
                href="sms:2397850423?body=Hi%20Caribbean%20Flair"
                className="inline-block px-4 py-2 bg-primary-cta text-white rounded-lg hover:opacity-90 transition font-semibold"
              >
                Send a Text
              </a>
            </div>

            {/* Facebook Link */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <Facebook className="w-12 h-12 mx-auto mb-4 text-primary-cta" />
              <h3 className="text-lg font-semibold mb-2">Facebook</h3>
              <p className="text-gray-600 mb-4">Follow and message us</p>
              <a
                href="https://facebook.com/caribbeanflair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary-cta text-white rounded-lg hover:opacity-90 transition font-semibold"
              >
                Visit Page
              </a>
            </div>

            {/* Live Chat */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary-cta" />
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support team</p>
              <button
                onClick={() => setShowLiveChat(!showLiveChat)}
                className="inline-block px-4 py-2 bg-primary-cta text-white rounded-lg hover:opacity-90 transition font-semibold"
              >
                Open Chat
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Widget */}
      {showLiveChat && (
        <div id="live-chat" data-section="live-chat" className="fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col max-h-96">
          <div className="bg-primary-cta text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Caribbean Flair Support</h3>
            <button
              onClick={() => setShowLiveChat(false)}
              className="text-white hover:opacity-80 transition"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chatMessages.length === 0 ? (
              <div className="text-center text-gray-500 py-4">
                <p className="mb-2">👋 Welcome to Caribbean Flair!</p>
                <p className="text-sm">How can we assist you today?</p>
              </div>
            ) : (
              chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-primary-cta text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="border-t p-3 flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleChatSend()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary-cta"
            />
            <button
              onClick={handleChatSend}
              className="px-3 py-2 bg-primary-cta text-white rounded-lg hover:opacity-90 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Contact Form Section */}
      <div id="contact-form" data-section="contact-form">
        <ContactSplit
          tag="Get in Touch"
          title="Send us a Message"
          description="Fill out the form below and we'll get back to you as soon as possible with all the information you need."
          background={{ variant: "glowing-orb" }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-dk53z92a.jpg"
          imageAlt="Contact form - Caribbean Flair"
          mediaAnimation="opacity"
          mediaPosition="left"
          inputPlaceholder="Enter your email"
          buttonText="Send Message"
          termsText="By sending this message, you agree to our Terms of Service and Privacy Policy."
          onSubmit={(email) => {
            console.log("Contact form submitted:", email);
            alert("Thank you for contacting us! We'll be in touch soon.");
          }}
        />
      </div>

      {/* Location & Hours Section */}
      <div id="location-hours" data-section="location-hours">
        <FeatureCardTen
          title="Visit Us Today"
          description="Come experience authentic Caribbean flavors at our Lehigh Acres location. We're open daily until 9 PM with delivery available."
          tag="Find Us"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: "location-hours",              title: "Location & Hours",              description:
                "801 Leeland Heights Blvd W, Lehigh Acres, FL 33936. Open daily until 9 PM. Delivery available within service area.",              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1773849790665-y2tu4f81.jpg"},
              items: [
                {
                  icon: MapPin,
                  text: "Lehigh Acres, FL 33936"},
                {
                  icon: Clock,
                  text: "Open Until 9 PM Daily"},
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