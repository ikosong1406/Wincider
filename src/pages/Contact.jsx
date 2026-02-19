import React, { useEffect } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    document.querySelectorAll(".fade-in-section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in learning more about Wincider Tech's services. Can you provide more information?",
    );
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 hero-section fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-20 border-b border-[#FFD700]/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-white">Get in </span>
            <span className="text-[#FFD700]">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Let's discuss how Wincider Tech can help transform your business
            with innovative technology solutions
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Contact Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border border-[#FFD700]/20 p-8 md:p-12">
              {/* WhatsApp CTA - Prominent */}
              <div className="text-center mb-12">
                <div className="inline-block p-4 bg-[#25D366]/10 rounded-full mb-6 border border-[#25D366]/20">
                  <FaWhatsapp className="text-5xl md:text-6xl text-[#25D366]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to start your project?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Get in touch with us directly on WhatsApp for quick responses
                  and personalized consultation
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD59] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-1"
                >
                  <FaWhatsapp className="text-2xl" />
                  Chat with us on WhatsApp
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#FFD700]/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-br from-gray-900 to-black text-gray-400">
                    Or contact us through
                  </span>
                </div>
              </div>

              {/* Contact Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-900/50 border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all group">
                  <div className="w-14 h-14 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@wincider.tech"
                      className="text-gray-400 hover:text-[#FFD700] transition-colors text-base break-all"
                    >
                      hello@wincider.tech
                    </a>
                    <p className="text-sm text-gray-500 mt-1">24/7 support</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-900/50 border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all group">
                  <div className="w-14 h-14 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform">
                    <FaPhone className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-400 hover:text-[#FFD700] transition-colors text-base"
                    >
                      +1 (234) 567-890
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Mon-Fri, 9am-6pm
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-900/50 border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all group">
                  <div className="w-14 h-14 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Office Location
                    </h3>
                    <p className="text-gray-400">
                      123 Innovation Drive
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-900/50 border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all group">
                  <div className="w-14 h-14 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform">
                    <FaClock className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Working Hours
                    </h3>
                    <p className="text-gray-400">
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat - Sun: By appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 pt-8 border-t border-[#FFD700]/20 text-center">
                <p className="text-gray-400">
                  Prefer email? Send us a message at{" "}
                  <a
                    href="mailto:hello@wincider.tech"
                    className="text-[#FFD700] hover:underline"
                  >
                    hello@wincider.tech
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  We typically respond within 2-4 hours during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
