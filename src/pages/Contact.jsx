import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaCheck,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    services: [],
    message: "",
    contactMethod: "whatsapp",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Extract service from URL query params
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get("service");
    if (serviceParam) {
      const decodedService = decodeURIComponent(serviceParam);
      if (!formData.services.includes(decodedService)) {
        setFormData((prev) => ({
          ...prev,
          services: [...prev.services, decodedService],
        }));
      }
    }

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
  }, [location.search]);

  const availableServices = [
    { id: "bridal-makeup", name: "Bridal Makeup", price: "From $299" },
    { id: "event-makeup", name: "Event Makeup", price: "From $149" },
    { id: "photoshoot-makeup", name: "Photoshoot Makeup", price: "From $199" },
    { id: "trial-session", name: "Bridal Trial Session", price: "$99" },
    {
      id: "group-booking",
      name: "Group Booking (3+ people)",
      price: "10% off",
    },
    { id: "touch-up-service", name: "Touch-up Service", price: "$75/hour" },
    { id: "early-morning", name: "Early Morning Service", price: "+$50" },
    {
      id: "travel-service",
      name: "Travel Service (50km+)",
      price: "Quote based",
    },
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleServiceToggle = (serviceId) => {
    setFormData((prev) => {
      if (prev.services.includes(serviceId)) {
        return {
          ...prev,
          services: prev.services.filter((id) => id !== serviceId),
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, serviceId],
        };
      }
    });
  };

  const generateMessage = () => {
    const selectedServices = availableServices.filter((service) =>
      formData.services.includes(service.id)
    );

    let message = `*NEW BOOKING INQUIRY*\n\n`;
    message += `*Name:* ${formData.name}\n`;
    message += `*Email:* ${formData.email}\n`;
    message += `*Phone:* ${formData.phone}\n\n`;

    if (formData.date) {
      message += `*Preferred Date:* ${formData.date}\n`;
    }
    if (formData.time) {
      message += `*Preferred Time:* ${formData.time}\n`;
    }

    if (selectedServices.length > 0) {
      message += `\n*Selected Services:*\n`;
      selectedServices.forEach((service) => {
        message += `• ${service.name} ${service.price}\n`;
      });
    }

    message += `\n*Additional Message:*\n${
      formData.message || "No additional message"
    }`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      alert("Please select at least one service");
      return;
    }

    const message = generateMessage();

    if (formData.contactMethod === "whatsapp") {
      window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
    } else if (formData.contactMethod === "instagram") {
      // Instagram DM requires app, so we'll open profile with pre-filled message
      window.open(`https://instagram.com/direct/new`, "_blank");
      // Note: Instagram doesn't support pre-filled DMs in web
      alert("Please send us a DM on Instagram with your inquiry details");
    }

    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        services: [],
        message: "",
        contactMethod: "whatsapp",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#ffda93] hero-section fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto">
            Book your appointment or ask us anything. We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center text-[#b9a281]">
                      <FaPhone />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-600 hover:text-[#b9a281]"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center text-[#b9a281]">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <a
                        href="mailto:hello@makeupstudio.com"
                        className="text-gray-600 hover:text-[#b9a281]"
                      >
                        hello@makeupstudio.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center text-[#b9a281]">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Studio Location
                      </h3>
                      <p className="text-gray-600">
                        123 Beauty Street
                        <br />
                        Makeup City, MC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center text-[#b9a281]">
                      <FaClock />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Working Hours
                      </h3>
                      <p className="text-gray-600">
                        Mon - Sat: 9:00 AM - 7:00 PM
                        <br />
                        Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-4">
                    Connect with Us
                  </h3>
                  <div className="flex gap-4">
                    <button
                      onClick={() =>
                        window.open("https://wa.me/1234567890", "_blank")
                      }
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <FaWhatsapp />
                      WhatsApp
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          "https://instagram.com/yourstudio",
                          "_blank"
                        )
                      }
                      className="flex-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 text-white px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-opacity"
                    >
                      <FaInstagram />
                      Instagram
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Book Your Session
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill in your details and select your preferred services
                </p>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center gap-3 text-green-700">
                      <FaCheck className="text-xl" />
                      <div>
                        <p className="font-semibold">
                          Message sent successfully!
                        </p>
                        <p className="text-sm">
                          Redirecting to{" "}
                          {formData.contactMethod === "whatsapp"
                            ? "WhatsApp"
                            : "Instagram"}
                          ...
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        <FaUser className="inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b9a281] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        <FaEnvelope className="inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b9a281] focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        <FaPhone className="inline mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b9a281] focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          <FaCalendarAlt className="inline mr-2" />
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b9a281] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Preferred Time
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b9a281] focus:border-transparent"
                        >
                          <option value="">Select a time slot</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">
                      Select Services *
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {availableServices.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => handleServiceToggle(service.id)}
                          className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.services.includes(service.id)
                              ? "border-[#b9a281] bg-[#ffda93]/10"
                              : "border-gray-200 hover:border-[#b9a281]/50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                {service.name}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                {service.price}
                              </p>
                            </div>
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                formData.services.includes(service.id)
                                  ? "bg-[#b9a281] border-[#b9a281]"
                                  : "border-gray-300"
                              }`}
                            >
                              {formData.services.includes(service.id) && (
                                <FaCheck className="text-white text-xs" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {formData.services.length === 0 && (
                      <p className="text-red-500 text-sm mt-2">
                        Please select at least one service
                      </p>
                    )}
                  </div>

                  {/* Additional Message */}
                  <div className="mb-8">
                    <label className="block text-gray-700 mb-2 font-medium">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b9a281] focus:border-transparent"
                      placeholder="Tell us about your occasion, skin type, preferred style, or any special requests..."
                    />
                  </div>

                  {/* Contact Method Selection */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      How would you like to contact us? *
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <label className="flex-1">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="whatsapp"
                          checked={formData.contactMethod === "whatsapp"}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div
                          className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.contactMethod === "whatsapp"
                              ? "border-green-500 bg-green-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                formData.contactMethod === "whatsapp"
                                  ? "bg-green-500 border-green-500"
                                  : "border-gray-300"
                              }`}
                            >
                              {formData.contactMethod === "whatsapp" && (
                                <FaCheck className="text-white text-xs" />
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <FaWhatsapp className="text-green-500 text-xl" />
                              <div>
                                <p className="font-semibold text-gray-800">
                                  WhatsApp Message
                                </p>
                                <p className="text-sm text-gray-600">
                                  Fast response, ideal for booking
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>

                      <label className="flex-1">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="instagram"
                          checked={formData.contactMethod === "instagram"}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div
                          className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.contactMethod === "instagram"
                              ? "border-pink-500 bg-pink-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                formData.contactMethod === "instagram"
                                  ? "bg-pink-500 border-pink-500"
                                  : "border-gray-300"
                              }`}
                            >
                              {formData.contactMethod === "instagram" && (
                                <FaCheck className="text-white text-xs" />
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <FaInstagram className="text-pink-500 text-xl" />
                              <div>
                                <p className="font-semibold text-gray-800">
                                  Instagram DM
                                </p>
                                <p className="text-sm text-gray-600">
                                  See our work and chat directly
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Preview & Submit */}
                  <div className="bg-gray-50 p-6 rounded-xl mb-8">
                    <h3 className="font-bold text-gray-800 mb-4">
                      Your Inquiry Summary
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>
                        <span className="font-medium">Name:</span>{" "}
                        {formData.name || "Not provided"}
                      </p>
                      <p>
                        <span className="font-medium">Services:</span>{" "}
                        {formData.services.length} selected
                      </p>
                      {formData.date && (
                        <p>
                          <span className="font-medium">Date:</span>{" "}
                          {formData.date}
                        </p>
                      )}
                      {formData.time && (
                        <p>
                          <span className="font-medium">Time:</span>{" "}
                          {formData.time}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#b9a281] to-[#ffda93] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    {formData.contactMethod === "whatsapp" ? (
                      <>
                        <FaWhatsapp className="text-xl" />
                        Send via WhatsApp
                      </>
                    ) : (
                      <>
                        <FaInstagram className="text-xl" />
                        Contact via Instagram
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-500 text-sm mt-4">
                    By submitting, you'll be redirected to{" "}
                    {formData.contactMethod === "whatsapp"
                      ? "WhatsApp"
                      : "Instagram"}
                    with your inquiry details
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
