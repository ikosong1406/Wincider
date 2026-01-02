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
  FaInstagram,
  FaCalendarAlt,
  FaUsers,
  FaAward,
  FaQuoteLeft,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import bridal from "../assets/bridal.jpg";
import event from "../assets/event.jpg";
import photoshoot from "../assets/photoshot.jpg";

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
      }
    );

    document.querySelectorAll(".fade-in-section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Bride",
      comment:
        "Absolutely stunning bridal makeup! The team made me feel like a princess on my special day. Highly recommend!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Emily Chen",
      role: "Event Attendee",
      comment:
        "Professional service with incredible attention to detail. My makeup lasted all night and looked perfect in photos!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Michelle Rodriguez",
      role: "Model",
      comment:
        "The photoshoot makeup was exactly what we needed. The artist understood the lighting requirements perfectly.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const reasons = [
    {
      id: 1,
      icon: <FaUsers />,
      title: "Expert Team",
      description: "Certified makeup artists with 5+ years experience",
    },
    {
      id: 2,
      icon: <FaAward />,
      title: "Premium Products",
      description: "Using only high-end, hypoallergenic cosmetics",
    },
    {
      id: 3,
      icon: <FaCheck />,
      title: "Custom Looks",
      description: "Personalized makeup tailored to your features",
    },
    {
      id: 4,
      icon: <FaCalendarAlt />,
      title: "Flexible Booking",
      description: "Available for last-minute appointments",
    },
  ];

  const services = [
    {
      id: 1,
      name: "Bridal Makeup",
      subServices: [
        "Bespoke bridal consultation",
        "luxury skin prep and complextion perfection",
        "HD / Soft Glam / Rdadient bridal finish",
        "False lashes included",
        "Touch-up on request",
        "Calm, Professional Bridal experience",
      ],
      image: bridal,
    },
    {
      id: 2,
      name: "Event Makeup",
      subServices: [
        "Soft Glam",
        "Full Glam",
        "Neutral Elegance",
        "Radient / dewy Looks",
        "Evening Glam",
      ],
      image: event,
    },
    {
      id: 3,
      name: "Photoshoot Makeup",
      subServices: [
        "Editorial Shoot",
        "Branding Shoot",
        "Fashion Campaigns",
        "Content Creators and Influencers",
      ],
      image: photoshoot,
    },
  ];

  return (
    <div>
      {/* Hero Section - Image on Left, Write-up on Right */}
      <section className="bg-[#ffda93] hero-section fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Write-up Part - Right Side */}
            <div className="lg:w-1/2 lg:pl-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight mb-6">
                Enhance Your Natural Beauty with Our Expert Makeup Services
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Professional makeup artistry for your most special moments. We
                create stunning looks that highlight your unique features and
                bring out your inner confidence.
              </p>

              <button
                onClick={() => (window.location.href = "/contact")}
                className="bg-[#b9a281] text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mb-10"
              >
                Book Your Session
                <FiArrowRight className="text-xl" />
              </button>
            </div>

            {/* Image Part - Left Side */}
            <div className="lg:w-1/2 relative">
              <div className="relative overflow-hidden">
                <img
                  src={img1}
                  alt="Makeup Studio"
                  className="w-full h-[430px] md:w-[350px] md:h-[480px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Caption near image */}
              <div className="absolute -bottom-6 -left-15 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-xl border-l-4 border-[#b9a281] max-w-[220px]">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Professional Artists
                </h3>
                <p className="text-sm text-gray-600">
                  Certified makeup specialists
                </p>
              </div>

              {/* Caption far right */}
              <div className="absolute -top-6 -right-15 md:-right-5 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-xl border-l-4 border-[#b9a281] max-w-[220px]">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  5+ Years Experience
                </h3>
                <p className="text-sm text-gray-600">
                  Serving satisfied clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Write-up Part */}
            <div className="lg:w-1/2">
              <h4 className="text-base font-semibold text-[#ffda9e] mb-2">
                ENTER AS STRANGERS, LEAVE AS FRIENDS
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold text-[#b9a281] mb-6">
                Hello Gorgoeus!
              </h2>
              <p className="text-lg text-[#b9a281] mb-8">
                We believe every face tells a story. Our mission is to enhance
                your natural beauty with expert techniques and premium products.
              </p>

              <div className="space-y-6">
                {reasons.map((reason) => (
                  <div key={reason.id} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center text-[#333333] text-xl flex-shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#ffda9e] mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-[#b9a281]">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Part */}
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-2xl">
                <img
                  src={img2}
                  alt="Makeup Studio Work"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#b9a281] fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Treatment of Makeup
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized makeup services for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image with overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {service.name}
                      </h3>
                      <button
                        onClick={() => (window.location.href = "/contact")}
                        className="bg-white text-[#333333] px-6 py-2 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Service details */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#333333]">
                      {service.name}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {service.subServices.map((sub, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <span className="text-[#333333] mr-2">•</span>
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image Part */}
            <div className="lg:w-1/2">
              <img
                src={img3}
                alt="Makeup Studio Experience"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Write-up Part */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#b9a281] mb-6">
                Years of Excellence in Beauty
              </h2>
              <p className="text-lg text-[#b9a281] mb-8">
                With over half a decade of experience, we've perfected the art
                of makeup application for every skin type and occasion.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#ffda9e] mb-2">
                    500+
                  </div>
                  <div className="text-[#b9a281] font-medium">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#ffda9e] mb-2">
                    5+
                  </div>
                  <div className="text-[#b9a281] font-medium">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ffda9e] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-[#b9a281]">
              Real experiences from our beautiful clients
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
                  <div className="bg-[#ffda9e] p-6 rounded-2xl shadow-lg h-full">
                    <div className="text-[#333333] text-3xl mb-4">
                      <FaQuoteLeft />
                    </div>
                    <p className="text-gray-600 mb-6 italic">
                      {testimonial.comment}
                    </p>

                    <div className="flex items-center gap-4">
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">{testimonial.role}</p>
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
      <section
        className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-24 bg-[#ffda9e]"
        style={{ borderTopLeftRadius: 70, borderTopRightRadius: 70 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image Part */}
            <div className="lg:w-1/2">
              <img
                src={img4}
                alt="Contact Us"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>

            {/* Write-up Part */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Look?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Book your appointment today and let our experts create your
                perfect look.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    window.open("https://wa.me/1234567890", "_blank")
                  }
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-colors duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  Message on WhatsApp
                </button>

                <button
                  onClick={() =>
                    window.open("https://instagram.com/yourstudio", "_blank")
                  }
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-opacity duration-300"
                >
                  <FaInstagram className="text-xl" />
                  Follow on Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .fade-in-section {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        /* Custom swiper styles */
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: #ec4899 !important;
        }

        :global(.swiper-pagination-bullet-active) {
          background: #ec4899 !important;
        }
      `}</style>
    </div>
  );
};

export default Home;
