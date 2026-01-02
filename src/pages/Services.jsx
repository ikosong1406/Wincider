import React, { useState, useEffect } from "react";
import {
  FaCheck,
  FaClock,
  FaUsers,
  FaPalette,
  FaCrown,
  FaCamera,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bridalHero from "../assets/bridal.jpg";
import eventHero from "../assets/event.jpg";
import photoshootHero from "../assets/photoshot.jpg";
import service1 from "../assets/bridal.jpg";
import service2 from "../assets/event.jpg";
import service3 from "../assets/photoshot.jpg";

const Services = () => {
  const [activeService, setActiveService] = useState(1);

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
      }
    );

    document.querySelectorAll(".fade-in-section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const mainServices = [
    {
      id: 1,
      name: "Bridal Makeup",
      icon: <FaCrown />,
      color: "from-pink-100 to-rose-100",
      textColor: "text-pink-700",
      bgColor: "bg-pink-50",
      heroImage: bridalHero,
      description:
        "Make your wedding day perfect with our bespoke bridal makeup services",
      duration: "2-3 hours",
      startingPrice: "$299",
      includes: [
        "Pre-wedding consultation",
        "Trial session included",
        "Bridal skin prep & glow",
        "HD makeup application",
        "False lashes included",
        "Touch-up kit provided",
        "Up to 4 hours coverage",
        "Mother of bride/bridesmaid packages available",
      ],
      addons: [
        { name: "Early Morning Service", price: "+$50" },
        { name: "Additional Person", price: "+$150/person" },
        { name: "Travel within 50km", price: "Included" },
        { name: "Extra Touch-up Hours", price: "+$75/hour" },
      ],
    },
    {
      id: 2,
      name: "Event Makeup",
      icon: <FaUsers />,
      color: "from-purple-100 to-indigo-100",
      textColor: "text-purple-700",
      bgColor: "bg-purple-50",
      heroImage: eventHero,
      description: "Perfect for parties, galas, and special occasions",
      duration: "1-2 hours",
      startingPrice: "$149",
      includes: [
        "Skin analysis & prep",
        "Custom look design",
        "Long-lasting formulas",
        "Waterproof options",
        "False lash application",
        "Professional blending",
        "Color matching",
        "Photography-ready finish",
      ],
      addons: [
        { name: "Group Booking (3+)", price: "10% discount" },
        { name: "Express Service", price: "-20% (1 hour)" },
        { name: "Studio Session", price: "No travel fee" },
        { name: "Premium Products", price: "+$30" },
      ],
    },
    {
      id: 3,
      name: "Photoshoot Makeup",
      icon: <FaCamera />,
      color: "from-amber-100 to-orange-100",
      textColor: "text-amber-700",
      bgColor: "bg-amber-50",
      heroImage: photoshootHero,
      description: "Professional makeup for photography and video shoots",
      duration: "1.5-3 hours",
      startingPrice: "$199",
      includes: [
        "Lighting consideration",
        "HD-ready makeup",
        "Camera-friendly colors",
        "Matte/gloss control",
        "Color correction",
        "Retouch throughout shoot",
        "Multiple looks available",
        "Collaboration with photographer",
      ],
      addons: [
        { name: "Multiple Looks", price: "+$75/look" },
        { name: "On-Location Service", price: "+$50" },
        { name: "Model Preparation", price: "+$100" },
        { name: "Full Day Package", price: "$499 (8 hours)" },
      ],
    },
  ];

  const serviceGallery = [
    { id: 1, serviceId: 1, image: service1, category: "Bridal" },
    { id: 2, serviceId: 2, image: service2, category: "Event" },
    { id: 3, serviceId: 3, image: service3, category: "Photoshoot" },
    { id: 4, serviceId: 1, image: service1, category: "Bridal" },
    { id: 5, serviceId: 2, image: service2, category: "Event" },
    { id: 6, serviceId: 3, image: service3, category: "Photoshoot" },
  ];

  const activeServiceData = mainServices.find(
    (service) => service.id === activeService
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#ffda93] hero-section fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-6">
              Our Services
            </h1>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              Professional makeup artistry tailored to your unique style and
              occasion
            </p>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mainServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activeService === service.id
                    ? `${service.bgColor} ${service.textColor} shadow-lg`
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    activeService === service.id
                      ? service.textColor
                      : "text-gray-400"
                  }`}
                >
                  {service.icon}
                </div>
                {service.name}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          {activeServiceData && (
            <div className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  {/* Left Column - Hero Image */}
                  <div className="md:w-2/5">
                    <img
                      src={activeServiceData.heroImage}
                      alt={activeServiceData.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>

                  {/* Right Column - Details */}
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                          {activeServiceData.name}
                        </h2>
                        <p className="text-gray-600">
                          {activeServiceData.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#b9a281]">
                          {activeServiceData.startingPrice}
                        </div>
                        <div className="text-gray-500 text-sm">
                          Starting Price
                        </div>
                      </div>
                    </div>

                    {/* Info Cards */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                        <FaClock className="text-[#b9a281]" />
                        <span className="text-gray-700">
                          {activeServiceData.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                        <FaCalendarAlt className="text-[#b9a281]" />
                        <span className="text-gray-700">
                          Book 2 weeks in advance
                        </span>
                      </div>
                    </div>

                    {/* Two Column Layout for Includes & Addons */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* What's Included */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <FaCheck className="text-green-500" />
                          What's Included
                        </h3>
                        <ul className="space-y-3">
                          {activeServiceData.includes.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                {/* <FiCheck className="text-green-600 text-xs" /> */}
                              </div>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Addons */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <FaPalette className="text-[#b9a281]" />
                          Optional Addons
                        </h3>
                        <ul className="space-y-3">
                          {activeServiceData.addons.map((addon, index) => (
                            <li
                              key={index}
                              className="flex justify-between items-center py-2 border-b border-gray-100"
                            >
                              <span className="text-gray-700">
                                {addon.name}
                              </span>
                              <span className="font-semibold text-[#b9a281]">
                                {addon.price}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => {
                        window.location.href = `/contact?service=${activeServiceData.name
                          .toLowerCase()
                          .replace(" ", "-")}`;
                      }}
                      className="mt-8 bg-gradient-to-r from-[#b9a281] to-[#ffda93] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      Book This Service
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
