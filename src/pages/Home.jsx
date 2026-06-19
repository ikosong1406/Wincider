import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaCheck,
  FaStar,
  FaWhatsapp,
  FaCode,
  FaMobile,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaAward,
  FaQuoteLeft,
  FaArrowRight,
  FaChartLine,
  FaCogs,
  FaServer,
  FaEnvelope,
} from "react-icons/fa";
import { RiFlashlightLine, RiCodeBoxLine } from "react-icons/ri";
import uarra from "../assets/uarra.png";
import alxenix from "../assets/alxenix.png";
import trashit from "../assets/trashitlogo.png";
import uarralogo from "../assets/uarralogo.png";
import jobbinexlogo from "../assets/jobbinexlogo.png";

// Background images - using dark, atmospheric images
const heroBg =
  "https://i.pinimg.com/736x/0b/4c/84/0b4c84fff48a3ad3b3172325de05c2c5.jpg";
const servicesBg =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80";
const ctaBg =
  "https://i.pinimg.com/736x/d2/0c/35/d20c358aba40020a96d5bbf9f434c6f2.jpg";
const techTeam =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";
const uarraLogistics = uarra;

const Home = () => {
  const [activeLanguage, setActiveLanguage] = useState("javascript");

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

  const codeSnippets = {
    javascript: `
const innovate = async () => {
  const solution = await WinciderTech.build({
    vision: "Your vision",
    technology: "Cutting-edge",
    timeline: "Agile",
    results: "Exceptional"
  });
  
  return solution.ready();
};`,

    python: `
async def innovate():
    solution = await WinciderTech.build({
        "vision": "Your vision",
        "technology": "Cutting-edge",
        "timeline": "Agile",
        "results": "Exceptional"
    })
    
    return solution.ready()`,

    php: `<?php
class Innovation {
    public static function innovate() {
        $solution = WinciderTech::build([
            'vision' => 'Your vision',
            'technology' => 'Cutting-edge',
            'timeline' => 'Agile',
            'results' => 'Exceptional'
        ]);
        
        return $solution->ready();
    }
}
?>`,

    java: `
public class Innovation {
    public static Solution innovate() {
        Solution solution = WinciderTech.build(
            new BuildParams()
                .setVision("Your vision")
                .setTechnology("Cutting-edge")
                .setTimeline("Agile")
                .setResults("Exceptional")
        );
        
        return solution.ready();
    }
}`,

    ruby: `
def innovate
  solution = WinciderTech.build(
    vision: "Your vision",
    technology: "Cutting-edge",
    timeline: "Agile",
    results: "Exceptional"
  )
  
  solution.ready
end`,

    golang: `
package main

func innovate() *Solution {
    params := &BuildParams{
        Vision:     "Your vision",
        Technology: "Cutting-edge",
        Timeline:   "Agile",
        Results:    "Exceptional",
    }
    
    solution := WinciderTech.Build(params)
    return solution.Ready()
}`,
  };

  const testimonials = [
    {
      id: 1,
      name: "David Chen",
      role: "CTO, Global Finance Corp",
      comment:
        "Wincider Tech delivered an exceptional financial dashboard that transformed how we monitor our investments. Their attention to detail and technical expertise is outstanding.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Product Manager, HealthPlus",
      comment:
        "The telemedicine app they built for us exceeded all expectations. Our patients love it, and it's helped us expand our reach significantly.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Founder, Green Future Initiative",
      comment:
        "Working with Wincider was a game-changer. They understood our sustainability mission and built a platform that truly makes a difference.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      name: "Jennifer Lee",
      role: "Director of Operations, RetailTech",
      comment:
        "Their AI-powered inventory system has revolutionized our supply chain. We've seen dramatic improvements in efficiency and cost savings.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const reasons = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Expert Developers",
      description: "Senior-level engineers with 7+ years average experience",
    },
    {
      id: 2,
      icon: <FaRocket />,
      title: "Agile Methodology",
      description: "Fast iterations, continuous delivery, and regular updates",
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: "Security First",
      description: "Enterprise-grade security in every project we build",
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: "Proven Results",
      description: "Data-driven solutions that deliver measurable ROI",
    },
  ];

  const services = [
    {
      id: 1,
      name: "Full Stack Development",
      icon: <FaCode />,
      description: "End-to-end web applications with modern architectures",
      features: [
        "Custom web application development",
        "RESTful API design & implementation",
        "Database design & optimization",
        "Real-time features",
      ],
    },
    {
      id: 2,
      name: "Mobile Development",
      icon: <FaMobile />,
      description: "Native and cross-platform mobile apps for iOS & Android",
      features: [
        "Cross-platform or native development",
        "App store deployment",
        "Push notifications",
        "Offline functionality",
      ],
    },
    {
      id: 3,
      name: "DevOps & Cloud",
      icon: <FaCloud />,
      description: "Scalable infrastructure and automated deployment",
      features: [
        "Cloud infrastructure (AWS/Azure/GCP)",
        "CI/CD pipeline setup",
        "Container orchestration",
        "24/7 monitoring",
      ],
    },
    {
      id: 4,
      name: "MVP Development",
      icon: <FaRocket />,
      description: "Rapid development to validate your business idea",
      features: [
        "Product strategy workshop",
        "Core feature development",
        "User testing",
        "Investor-ready demo",
      ],
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "7+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" },
  ];

  const partnerLogos = [alxenix, trashit, uarralogo, jobbinexlogo];

  return (
    <div className="bg-black">
      {/* Hero Section with Background Image */}
      <section
        className="relative hero-section fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out min-h-[70vh] md:min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 py-8 md:py-20 lg:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2 w-full">
              <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
                Building <span className="text-[#FFD700]">Digital</span>
                <br />
                Solutions That Matter
              </h1>

              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl">
                We transform complex challenges into seamless digital
                experiences. From startups to enterprises, we deliver cutting
                edge technology solutions that drive real business growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-12">
                <button
                  onClick={() => (window.location.href = "/contact")}
                  className="bg-[#FFD700] text-black px-5 md:px-8 py-2.5 md:py-4 rounded-xl font-semibold text-sm md:text-lg flex items-center gap-2 md:gap-3 hover:bg-[#FFD700]/90 transition-all duration-300"
                >
                  Start Your Project
                  <FaArrowRight className="text-sm md:text-base" />
                </button>
                <button
                  onClick={() => (window.location.href = "/portfolio")}
                  className="border border-[#FFD700]/20 text-white px-5 md:px-8 py-2.5 md:py-4 rounded-xl font-semibold text-sm md:text-lg hover:border-[#FFD700]/40 transition-all duration-300"
                >
                  View Our Work
                </button>
              </div>

              {/* Partner Logos - Infinite Scroll */}
              <div className="overflow-hidden w-full">
                <div className="flex animate-scroll items-center gap-4 md:gap-12">
                  {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-10 h-10 md:w-16 md:h-16 bg-white/10 rounded-xl flex items-center justify-center border border-[#FFD700]/20"
                    >
                      <img
                        src={logo}
                        alt="Partner"
                        className="w-6 h-6 md:w-12 md:h-12 object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Code Visualization */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-[#1e1e1e] rounded-3xl border border-[#FFD700]/20 overflow-hidden shadow-2xl">
                {/* Language Tabs - Scrollable on mobile */}
                <div className="flex overflow-x-auto border-b border-[#FFD700]/20 bg-[#2d2d2d] no-scrollbar">
                  {[
                    "javascript",
                    "python",
                    "php",
                    "java",
                    "ruby",
                    "golang",
                  ].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveLanguage(lang)}
                      className={`px-3 md:px-6 py-1.5 md:py-3 text-[10px] md:text-sm font-mono transition-colors whitespace-nowrap ${
                        activeLanguage === lang
                          ? "text-[#FFD700] border-b-2 border-[#FFD700] bg-[#1e1e1e]"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Code Display */}
                <div className="p-3 md:p-6 bg-[#1e1e1e] min-h-[150px] md:min-h-[300px] overflow-x-auto">
                  <pre className="text-[10px] md:text-sm text-gray-300 font-mono">
                    <code>{codeSnippets[activeLanguage]}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-24 border-t border-[#FFD700]/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10">
                <img
                  src={techTeam}
                  alt="Wincider Tech Team"
                  className="w-full h-[300px] md:h-[500px] object-cover rounded-3xl border border-[#FFD700]/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-3xl"></div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 border border-[#FFD700]/20 rounded-full px-3 md:px-4 py-1 md:py-2 mb-4 md:mb-6">
                <RiCodeBoxLine className="text-[#FFD700]" />
                <span className="text-[#FFD700] text-xs md:text-sm">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                We Don't Just Write Code,
                <br />
                <span className="text-[#FFD700]">We Build Solutions</span>
              </h2>

              <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8">
                Our team combines technical expertise with business acumen to
                deliver solutions that not only work flawlessly but also drive
                real value for your organization.
              </p>

              <div className="space-y-4 md:space-y-6">
                {reasons.map((reason) => (
                  <div
                    key={reason.id}
                    className="flex items-start gap-3 md:gap-4 group"
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-[#FFD700]/10 rounded-xl border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700] text-base md:text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-400">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Background */}
      <section
        className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-24 border-y border-[#FFD700]/20 relative"
        style={{
          backgroundImage: `url(${servicesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 border border-[#FFD700]/20 rounded-full px-3 md:px-4 py-1 md:py-2 mb-3 md:mb-4">
              <FaCogs className="text-[#FFD700]" />
              <span className="text-[#FFD700] text-xs md:text-sm">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">
              Comprehensive Tech Solutions
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              From concept to deployment, we services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-black/90 rounded-2xl border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-300 overflow-hidden backdrop-blur-sm"
              >
                <div className="p-4 md:p-6">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] text-lg md:text-2xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1 md:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs md:text-sm text-gray-400"
                      >
                        <FaCheck className="text-[#FFD700] text-[10px] md:text-xs mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <button
              onClick={() => (window.location.href = "/services")}
              className="inline-flex items-center gap-2 text-[#FFD700] hover:gap-3 transition-all text-sm md:text-base"
            >
              View All Services <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-5xl font-bold text-[#FFD700] mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs md:text-base text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project - Uarra Logistics (Black Background) */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 border border-[#FFD700]/20 rounded-full px-3 md:px-4 py-1 md:py-2 mb-4 md:mb-6">
                <FaRocket className="text-[#FFD700]" />
                <span className="text-[#FFD700] text-xs md:text-sm">
                  Featured Project
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                Uarra Logistics System
              </h2>
              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
                A comprehensive logistics platform with three interconnected
                applications
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-center gap-3 md:gap-4 text-gray-300">
                  <FaCheck className="text-[#FFD700] text-sm md:text-base flex-shrink-0" />
                  <span className="text-sm md:text-base">
                    <strong>Merchant App:</strong> Customer-facing app for
                    ordering and tracking deliveries
                  </span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-gray-300">
                  <FaCheck className="text-[#FFD700] text-sm md:text-base flex-shrink-0" />
                  <span className="text-sm md:text-base">
                    <strong>Hero App:</strong> Driver application for receiving
                    and completing deliveries
                  </span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-gray-300">
                  <FaCheck className="text-[#FFD700] text-sm md:text-base flex-shrink-0" />
                  <span className="text-sm md:text-base">
                    <strong>ALT App:</strong> Logistics business management and
                    analytics dashboard
                  </span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-gray-300">
                  <FaCheck className="text-[#FFD700] text-sm md:text-base flex-shrink-0" />
                  <span className="text-sm md:text-base">
                    Real-time tracking and automated dispatching system
                  </span>
                </div>
              </div>
              <button
                onClick={() => (window.location.href = "/portfolio")}
                className="bg-[#FFD700] text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-[#FFD700]/90 transition-all duration-300"
              >
                View Case Study
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                src={uarraLogistics}
                alt="Uarra Logistics System"
                className="w-full rounded-3xl border border-[#FFD700]/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination-custom",
              }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="pb-12"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-[#FFD700]/20 h-full">
                    <div className="flex items-center gap-1 md:gap-2 mb-3 md:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-[#FFD700] text-sm md:text-base"
                        />
                      ))}
                    </div>
                    <div className="text-[#FFD700] text-2xl md:text-3xl mb-3 md:mb-4 opacity-50">
                      <FaQuoteLeft />
                    </div>
                    <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 italic">
                      {testimonial.comment}
                    </p>
                    <div className="flex items-center gap-3 md:gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-[#FFD700]/20"
                      />
                      <div>
                        <h4 className="font-bold text-white text-sm md:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-xs md:text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center items-center gap-4 mt-6">
              <button className="swiper-button-prev-custom text-[#FFD700] hover:text-[#FFD700]/70 transition-colors text-2xl">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="swiper-pagination-custom flex gap-2"></div>
              <button className="swiper-button-next-custom text-[#FFD700] hover:text-[#FFD700]/70 transition-colors text-2xl">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact CTA Section with Background */}
      <section
        className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12">
              Let's discuss your project and turn your vision into reality
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <button
                onClick={() =>
                  window.open("https://wa.me/1234567890", "_blank")
                }
                className="bg-[#FFD700] text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-3 hover:bg-[#FFD700]/90 transition-all duration-300"
              >
                <FaWhatsapp className="text-lg md:text-xl" />
                Chat on WhatsApp
              </button>

              <button
                onClick={() => (window.location.href = "/contact")}
                className="bg-transparent border border-[#FFD700] text-[#FFD700] px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-3 hover:bg-[#FFD700]/10 transition-all duration-300"
              >
                <FaEnvelope className="text-lg md:text-xl" />
                Send an Email
              </button>
            </div>

            <p className="text-gray-500 text-xs md:text-sm mt-6 md:mt-8">
              Quick response guaranteed within 2-4 hours
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .fade-in-section {
          transition:
            opacity 0.8s ease-out,
            transform 0.8s ease-out;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        /* Hide scrollbar for language tabs */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Custom Swiper styles */
        .swiper-pagination-custom .swiper-pagination-bullet {
          background: #ffd700 !important;
          opacity: 0.3;
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 50%;
          margin: 0 4px;
        }

        .swiper-pagination-custom .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }

        /* Global Swiper styles override */
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          display: none !important;
        }

        :global(.swiper-pagination) {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default Home;
