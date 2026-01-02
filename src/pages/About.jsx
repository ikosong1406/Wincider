import React, { useEffect } from "react";
import { FaUsers, FaAward, FaHeart, FaStar, FaRibbon } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import aboutHero from "../assets/makeup.jpg";
// import team1 from "../assets/team1.jpg";
// import team2 from "../assets/team2.jpg";
// import team3 from "../assets/team3.jpg";

const About = () => {
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

  const coreValues = [
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Passion for Beauty",
      description:
        "We believe makeup is an art form that celebrates individuality",
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: "Excellence",
      description: "Only premium products and latest techniques",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Client-First",
      description: "Your satisfaction is our ultimate goal",
    },
    {
      icon: <FaRibbon className="text-3xl" />,
      title: "Professionalism",
      description: "Certified artists with continuous education",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Alexandra Chen",
      role: "Lead Makeup Artist & Founder",
      experience: "8+ years",
      specialty: "Bridal & Editorial",
      bio: "Alexandra trained at the London College of Fashion and has worked with numerous fashion magazines and celebrities.",
      // image: team1
    },
    {
      id: 2,
      name: "Maya Rodriguez",
      role: "Senior Makeup Artist",
      experience: "6+ years",
      specialty: "Prosthetics & Special FX",
      bio: "Maya specializes in creative and avant-garde makeup for photoshoots and film productions.",
      // image: team2
    },
    {
      id: 3,
      name: "Sophie Williams",
      role: "Makeup Artist",
      experience: "4+ years",
      specialty: "Natural Glam & Skincare",
      bio: "Sophie focuses on enhancing natural beauty with skincare-focused makeup techniques.",
      // image: team3
    },
  ];

  const milestones = [
    {
      year: "2018",
      event: "Studio Founded",
      detail: "Started as a small boutique studio",
    },
    {
      year: "2019",
      event: "First Awards",
      detail: "Best Bridal Makeup - Local Beauty Awards",
    },
    {
      year: "2020",
      event: "Team Expansion",
      detail: "Hired two additional certified artists",
    },
    {
      year: "2021",
      event: "Premium Partnership",
      detail: "Became official partner of luxury cosmetic brands",
    },
    {
      year: "2022",
      event: "500+ Clients",
      detail: "Milestone of serving over 500 happy clients",
    },
    {
      year: "2023",
      event: "New Location",
      detail: "Expanded to a larger studio space",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#ffda93] hero-section fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-6">
                Our Story
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Founded in 2018, we began with a simple mission: to make every
                client feel confident and beautiful. What started as a passion
                project has grown into a premier makeup studio trusted by
                hundreds.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#333333]">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#333333]">8+</div>
                  <div className="text-gray-600">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#333333]">100%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src={aboutHero}
                alt="Our Studio"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#b9a281] mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that makeup should enhance, not mask. Our approach
              combines artistry with individuality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center text-[#b9a281] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#f8f5f0] fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#b9a281] mb-4">
              Meet Our Artists
            </h2>
            <p className="text-lg text-gray-600">
              Certified professionals dedicated to your beauty journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    // src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#b9a281] font-semibold mb-3">
                    {member.role}
                  </p>
                  <div className="flex gap-4 mb-4">
                    <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm">
                      {member.experience} experience
                    </span>
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                      {member.specialty}
                    </span>
                  </div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#b9a281] mb-4">
              Our Journey
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#ffda93] to-[#b9a281] hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="lg:w-1/2 lg:px-8 mb-6 lg:mb-0">
                    <div
                      className={`bg-white p-6 rounded-2xl shadow-lg ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <div className="text-2xl font-bold text-[#b9a281] mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600">{milestone.detail}</p>
                    </div>
                  </div>

                  <div className="lg:w-1/2 lg:px-8">
                    <div
                      className={`flex justify-center ${
                        index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                      }`}
                    >
                      <div className="w-6 h-6 bg-[#b9a281] rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 lg:px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
