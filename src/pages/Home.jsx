import React, { useEffect } from "react";
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

// Replaced images with ones that don't have blue tones - using more neutral/golden tone images
const techHero =
  "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"; // Dark tech setup with warm lighting
const techTeam =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"; // Team meeting with warm tones
const techOffice =
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"; // Modern office with warm lighting
const techDashboard =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"; // Analytics dashboard with dark theme

const Home = () => {
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

  const partners = [
    { name: "TechCorp", logo: "T" },
    { name: "InnovateLabs", logo: "I" },
    { name: "FutureFund", logo: "F" },
    { name: "CloudScale", logo: "C" },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative bg-black hero-section fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 border border-[#FFD700]/20 rounded-full px-4 py-2 mb-8">
                <span className="text-[#FFD700] text-sm">
                  Innovation Driven Excellence
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Building <span className="text-[#FFD700]">Digital</span>
                <br />
                Solutions That Matter
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
                We transform complex challenges into seamless digital
                experiences. From startups to enterprises, we deliver
                cutting-edge technology solutions that drive real business
                growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => (window.location.href = "/contact")}
                  className="bg-[#FFD700] text-black px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 hover:bg-[#FFD700]/90 transition-all duration-300"
                >
                  Start Your Project
                  <FaArrowRight />
                </button>
                <button
                  onClick={() => (window.location.href = "/portfolio")}
                  className="border border-[#FFD700]/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-[#FFD700]/40 transition-all duration-300"
                >
                  View Our Work
                </button>
              </div>

              {/* Partner Logos */}
              <div className="flex items-center gap-8">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="text-gray-500 text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity"
                  >
                    {partner.logo}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Code Visualization */}
            <div className="lg:w-1/2 relative">
              <div className="relative bg-gray-900 rounded-3xl border border-[#FFD700]/20 p-8">
                <pre className="text-sm text-gray-400 overflow-x-auto">
                  <code>
                    {`// Your next big idea starts here
const innovate = async () => {
  const solution = await WinciderTech.build({
    vision: "Your vision",
    technology: "Cutting-edge",
    timeline: "Agile",
    results: "Exceptional"
  });
  
  return solution.ready();
};`}
                  </code>
                </pre>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-gray-900 border border-[#FFD700]/20 p-5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFD700]/10 rounded-lg flex items-center justify-center">
                    <FaRocket className="text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-white font-bold">50+ Projects</p>
                    <p className="text-gray-400 text-sm">
                      Successfully delivered
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-gray-900 border border-[#FFD700]/20 p-5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFD700]/10 rounded-lg flex items-center justify-center">
                    <FaUsers className="text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-white font-bold">98% Clients</p>
                    <p className="text-gray-400 text-sm">Would recommend us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-24 border-t border-[#FFD700]/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left - Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10">
                <img
                  src={techTeam}
                  alt="Wincider Tech Team"
                  className="w-full h-[500px] object-cover rounded-3xl border border-[#FFD700]/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-3xl"></div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gray-900 border border-[#FFD700]/20 p-6 rounded-2xl z-20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FFD700]">7+</div>
                  <div className="text-gray-400">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 border border-[#FFD700]/20 rounded-full px-4 py-2 mb-6">
                <RiCodeBoxLine className="text-[#FFD700]" />
                <span className="text-[#FFD700] text-sm">Why Choose Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                We Don't Just Write Code,
                <br />
                <span className="text-[#FFD700]">We Build Solutions</span>
              </h2>

              <p className="text-lg text-gray-400 mb-8">
                Our team combines technical expertise with business acumen to
                deliver solutions that not only work flawlessly but also drive
                real value for your organization.
              </p>

              <div className="space-y-6">
                {reasons.map((reason) => (
                  <div key={reason.id} className="flex items-start gap-4 group">
                    <div className="w-14 h-14 bg-[#FFD700]/10 rounded-xl border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700] text-xl group-hover:scale-110 transition-transform">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-400">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-900 fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-24 border-y border-[#FFD700]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-[#FFD700]/20 rounded-full px-4 py-2 mb-4">
              <FaCogs className="text-[#FFD700]" />
              <span className="text-[#FFD700] text-sm">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Tech Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end services
              tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-black rounded-2xl border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-14 h-14 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <FaCheck className="text-[#FFD700] text-xs mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => (window.location.href = "/services")}
              className="inline-flex items-center gap-2 text-[#FFD700] hover:gap-3 transition-all"
            >
              View All Services <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl font-bold text-[#FFD700] mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 border border-[#FFD700]/20 rounded-full px-4 py-2 mb-6">
                <FaRocket className="text-[#FFD700]" />
                <span className="text-[#FFD700] text-sm">Featured Project</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                FinTech Dashboard Pro
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                An enterprise-grade financial analytics platform serving 50+
                investment firms
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-gray-400">
                  <FaCheck className="text-[#FFD700]" />
                  <span>Real-time portfolio tracking with live updates</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <FaCheck className="text-[#FFD700]" />
                  <span>Advanced data visualization with custom charts</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <FaCheck className="text-[#FFD700]" />
                  <span>Automated reporting and compliance features</span>
                </div>
              </div>
              <button
                onClick={() => (window.location.href = "/portfolio")}
                className="bg-[#FFD700] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#FFD700]/90 transition-all duration-300"
              >
                View Case Study
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                src={techDashboard}
                alt="Featured Project"
                className="w-full rounded-3xl border border-[#FFD700]/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-[#FFD700]/20 rounded-full px-4 py-2 mb-4">
              <FaUsers className="text-[#FFD700]" />
              <span className="text-[#FFD700] text-sm">Client Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-12"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-gray-900 p-8 rounded-2xl border border-[#FFD700]/20 h-full">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-[#FFD700]" />
                      ))}
                    </div>
                    <div className="text-[#FFD700] text-3xl mb-4 opacity-50">
                      <FaQuoteLeft />
                    </div>
                    <p className="text-gray-300 mb-6 italic">
                      {testimonial.comment}
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#FFD700]/20"
                      />
                      <div>
                        <h4 className="font-bold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-24 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Let's discuss your project and turn your vision into reality
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() =>
                  window.open("https://wa.me/1234567890", "_blank")
                }
                className="bg-[#FFD700] text-black px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:bg-[#FFD700]/90 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                Chat on WhatsApp
              </button>

              <button
                onClick={() => (window.location.href = "/contact")}
                className="bg-transparent border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:bg-[#FFD700]/10 transition-all duration-300"
              >
                <FaEnvelope className="text-xl" />
                Send an Email
              </button>
            </div>

            <p className="text-gray-500 text-sm mt-8">
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

        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: #ffd700 !important;
        }

        :global(.swiper-pagination-bullet) {
          background: #ffd700 !important;
          opacity: 0.3;
        }

        :global(.swiper-pagination-bullet-active) {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Home;
