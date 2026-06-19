import React, { useEffect } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";
import { RiChatSmileLine, RiMailSendLine } from "react-icons/ri";

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
      "Hello! I'm interested in learning more about Wincidre's services. Can you provide more information?",
    );
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:support@wincidre.com";
  };

  const contactMethods = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      description: "Quickest response time",
      action: handleWhatsAppClick,
      buttonText: "Chat Now",
      color: "text-[#25D366]",
      bgColor: "bg-[#25D366]/10",
      borderColor: "border-[#25D366]",
      hoverColor: "hover:border-[#25D366]/40",
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: "Email",
      description: "Detailed inquiries",
      action: handleEmailClick,
      buttonText: "Send Email",
      color: "text-blue-300",
      bgColor: "bg-blue-300/10",
      borderColor: "border-blue-300",
      hoverColor: "hover:border-blue-300/40",
    },
  ];

  return (
    <div className="bg-[#151515] min-h-screen">
      {/* Hero Section with Background */}
      <section
        className="relative hero-section fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-20 md:py-28 border-b border-[#FFD700]/10"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Get in </span>
              <span className="text-[#FFD700]">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss how Wincider Tech can help transform your business
              with innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {contactMethods.map((method) => (
                <div
                  key={method.id}
                  className={`group rounded-2xl border ${method.borderColor} ${method.hoverColor} transition-all duration-500 p-8 md:p-10 hover:transform hover:-translate-y-2`}
                >
                  <div className="text-center">
                    <div
                      className={`w-20 h-20 ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 border ${method.borderColor} group-hover:scale-110 transition-transform`}
                    >
                      <div className={`text-4xl ${method.color}`}>
                        {method.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{method.description}</p>
                    <button
                      onClick={method.action}
                      className="w-full bg-[#FFD700]/95 text-black px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#FFD700]/90 transition-all duration-300 group/btn"
                    >
                      <span>{method.buttonText}</span>
                      <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Details */}
            <div className="rounded-2xl border border-[#FFD700]/10 p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] flex-shrink-0">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:support@wincider.org"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEmailClick();
                      }}
                      className="text-gray-400 hover:text-[#FFD700] transition-colors"
                    >
                      support@wincidre.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      For general inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] flex-shrink-0">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                    <button
                      onClick={handleWhatsAppClick}
                      className="text-gray-400 hover:text-[#25D366] transition-colors text-left"
                    >
                      +1 (234) 567-890
                    </button>
                    <p className="text-sm text-gray-500 mt-1">
                      Quick responses guaranteed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] flex-shrink-0">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-400">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-sm text-gray-500 mt-1">GMT / UTC +0</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] flex-shrink-0">
                    <RiMailSendLine className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Response Time
                    </h4>
                    <p className="text-gray-400">2-4 hours</p>
                    <p className="text-sm text-gray-500 mt-1">
                      During business hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .fade-in-section {
          transition:
            opacity 0.8s ease-out,
            transform 0.8s ease-out;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        ::-webkit-scrollbar-thumb {
          background: #ffd700;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Contact;
