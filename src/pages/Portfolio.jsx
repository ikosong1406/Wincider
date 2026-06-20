import React, { useState, useEffect } from "react";
import {
  FaGlobe,
  FaGithub,
  FaApple,
  FaAndroid,
  FaClock,
  FaUsers,
  FaCode,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { RiCloseLine, RiCodeBoxLine } from "react-icons/ri";
import uarra from "../assets/uarra.png";
import jobbinex from "../assets/jobbinex.png";
import hero from "../assets/hero.png";
import punterhub from "../assets/punterhub.png";
import sharperly from "../assets/sharperly.png";
import trackapi from "../assets/trackapi.png";
import trashit from "../assets/trashit.png";

const projectsData = [
  {
    id: 1,
    name: "Uarra Logistics",
    shortDescription:
      "Comprehensive logistics platform with three interconnected applications",
    image: uarra,
    category: "Web & Mobile",
    client: "Zaza technologies",
    duration: "8 months",
    problem:
      "Logistics company needed a comprehensive platform with separate apps for merchants, drivers, and administrators to manage deliveries efficiently.",
    solution:
      "Built three interconnected applications: Merchant App for ordering and tracking, Hero App for drivers to receive and complete deliveries, and ALT App for business management and analytics.",
    technologies: [
      "React Native",
      "React Js",
      "Node.js",
      "Express Js",
      "MongoDB",
      "Redis",
      "Google Maps API",
    ],
    links: {
      web: "https://uarra.com",
      android:
        "https://play.google.com/store/apps/details?id=com.creatur.Sharperly&hl=en",
    },
    features: [
      "Real-time GPS tracking",
      "Automated dispatching",
      "Merchant ordering system",
      "Driver management",
      "Analytics dashboard",
      "Payment integration",
    ],
    results: "40% faster delivery times, 25% reduction in operational costs",
    platforms: ["Web", "iOS", "Android"],
  },
  {
    id: 2,
    name: "Jobbinex",
    shortDescription: "Job recruitment and placement platform",
    image: jobbinex,
    category: "Web Application",
    client: "Jobbinex",
    duration: "5 months",
    problem:
      "Recruitment agency needed a digital platform to connect job seekers with employers efficiently and freelancers to international clients.",
    solution:
      "Developed a comprehensive job portal with resume building, job matching algorithms, and real-time application tracking.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "ElasticSearch",
      "AWS S3",
    ],
    links: {
      web: "https://jobbinex.com",
    },
    features: [
      "Job search and filtering",
      "Resume builder",
      "Application tracking",
      "Employer dashboard",
      "Interview scheduling",
      "Email notifications",
    ],
    results: "100+ job seekers registered, 50+ freelancers onboarded",
    platforms: ["Web"],
  },
  {
    id: 3,
    name: "Punterhub",
    shortDescription: "Sports Expert prediction platform",
    image: punterhub,
    category: "Web Application",
    client: "The Punterhub",
    duration: "6 months",
    problem:
      "Sports prediction company needed a real-time platform with live expert user predictions, and user engagement features.",
    solution:
      "Created a real-time betting platform with live odds updates, predictive analytics, and social features for user interaction.",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "WebSocket",
      "Chart.js",
    ],
    links: {
      web: "https://thepunterhub.com",
    },
    features: [
      "Prediction engine",
      "User profiles",
      "Social betting",
      "Analytics dashboard",
      "Payment processing",
    ],
    results: "500 active users, 30% increase in user engagement",
    platforms: ["Web"],
  },
  {
    id: 4,
    name: "Track API",
    shortDescription: "AI-powered digital address API",
    image: trackapi,
    category: "AI/ML",
    client: "Zaza Technologies",
    duration: "4 months",
    problem:
      "Businesses needed an intelligent API to track loaction without proper address in Nigeria for seemless deliveries.",
    solution:
      "Built an AI-powered tracking API that integrates with multiple carrier systems and uses machine learning to generate digital pluscode for places without proper address.",
    technologies: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    links: {
      web: "https://track.uarra.com",
    },
    features: [
      "Multi-carrier integration",
      "Analytics dashboard",
      "Webhook notifications",
      "RESTful API",
    ],
    results: "99.9% digital address accuracy, 50+ businesses integrated",
    platforms: ["API"],
  },
  {
    id: 5,
    name: "Hero App",
    shortDescription: "Driver delivery management mobile application",
    image: hero,
    category: "Mobile App",
    client: "Zaza Technologies",
    duration: "5 months",
    problem:
      "Delivery drivers needed a mobile app to receive, manage, and complete deliveries efficiently.",
    solution:
      "Developed a mobile-first driver application with real-time delivery assignments, GPS navigation, and proof of delivery features.",
    technologies: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Google Maps API",
      "WebSocket",
    ],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.creatur.Uarrahero&hl=en-US",
    },
    features: [
      "Real-time delivery assignment",
      "GPS navigation",
      "Proof of delivery",
      "Delivery history",
      "Earnings tracking",
      "Push notifications",
    ],
    results: "100+ drivers onboarded, 500+ deliveries completed",
    platforms: ["iOS", "Android"],
  },
  {
    id: 6,
    name: "ALT Application",
    shortDescription: "Logistics business management and analytics dashboard",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Web Application",
    client: "Zaza Technologies",
    duration: "6 months",
    problem:
      "Logistics businesses needed a comprehensive dashboard to manage operations, track performance, and analyze data.",
    solution:
      "Built a powerful business intelligence dashboard with real-time analytics, fleet management, and performance tracking features.",
    technologies: ["React", "Node.js", "MongoDB", "D3.js", "Redis", "AWS"],
    links: {
      web: "https://alt.uarra.com",
    },
    features: [
      "Real-time analytics",
      "Performance tracking",
      "Financial reporting",
      "Driver management",
      "Custom dashboards",
    ],
    results:
      "95% client satisfaction, 30% improvement in operational efficiency",
    platforms: ["Web"],
  },
  {
    id: 7,
    name: "Sharperly",
    shortDescription:
      "Fintech app for international money transfers and bill payments",
    image: sharperly,
    category: "Mobile App",
    client: "Sharperly Pty Ltd",
    duration: "5 months",
    problem:
      "Users needed a seamless way to transfer money internationally and pay bills with competitive exchange rates and low fees.",
    solution:
      "Developed a fintech mobile application enabling international money transfers, bill payments, and currency exchange with real-time rates and secure transactions.",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Redis",
      "Payment Gateway API",
      "Exchange Rate API",
    ],
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.sharperly.sharperly&hl=en",
    },
    features: [
      "International money transfers",
      "Bill payments",
      "Real-time exchange rates",
      "Transaction history",
      "Secure authentication",
      "Multi-currency support",
      "Push notifications",
      "Transaction tracking",
    ],
    results: "4.8/5 average rating, 1k+ transactions processed",
    platforms: ["iOS", "Android"],
  },
  {
    id: 8,
    name: "Trashit",
    shortDescription: "Waste management and recycling platform",
    image: trashit,
    category: "Web Application",
    client: "Trashit Integrated Services",
    duration: "6 months",
    problem:
      "Waste management company needed a platform to streamline collection scheduling and recycling tracking.",
    solution:
      "Built a comprehensive waste management platform with web dashboard and mobile app for collection scheduling and environmental impact reporting.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Google Maps API",
      "WebSocket",
    ],
    links: {
      web: "https://trashitintegrated.com",
    },
    features: [
      "Collection scheduling",
      "User dashboard",
      "Payment integration",
      "Real-time notifications",
    ],
    results: "500+ users, 20 tons of waste recycled monthly",
    platforms: ["Web"],
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

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

  // Get unique categories
  const categories = ["all", ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className="bg-[#151515] min-h-screen">
      {/* Hero Section with Background */}
      <section
        className="relative hero-section fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-20 md:py-28 border-b border-[#FFD700]/20"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#151515]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="text-[#FFD700]">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful projects and innovative
              solutions that drive real business value
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-[#FFD700] text-black"
                    : "text-gray-400 border border-[#FFD700]/20"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-8 pb-24">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No projects found
              </h3>
              <p className="text-gray-400">
                Try selecting a different category
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl border border-[#FFD700]/10 hover:border-blue-300/50 transition-all duration-500 hover:transform hover:-translate-y-2"
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-300 text-black px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Client */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <FaUsers className="text-blue-300 text-xs" />
                      <span>{project.client}</span>
                    </div>

                    {/* See More Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-[#FFD700]/90 border border-[#FFD700]/20 text-black px-4 py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:text-black transition-all duration-300 group/btn"
                    >
                      <span>See More Details</span>
                      <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
            <div className="relative bg-gray-900 rounded-3xl border border-[#FFD700]/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-[#FFD700]/20 flex items-center justify-center hover:bg-[#FFD700]/10 transition-colors"
              >
                <RiCloseLine className="text-2xl text-[#FFD700]" />
              </button>

              {/* Project Header Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-[#FFD700]/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedProject.name}
                  </h2>
                  <p className="text-xl text-blue-300">
                    {selectedProject.shortDescription}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/50 rounded-xl p-4 border border-[#FFD700]/10">
                    <p className="text-sm text-gray-500 mb-1">Client</p>
                    <p className="text-white font-semibold">
                      {selectedProject.client}
                    </p>
                  </div>
                  <div className="bg-black/50 rounded-xl p-4 border border-[#FFD700]/10">
                    <p className="text-sm text-gray-500 mb-1">Duration</p>
                    <p className="text-white font-semibold">
                      {selectedProject.duration}
                    </p>
                  </div>
                </div>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-[#FFD700] rounded-full"></span>
                      The Challenge
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-blue-300 rounded-full"></span>
                      Our Solution
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#FFD700] rounded-full"></span>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <FaCheckCircle className="text-blue-300 text-xs" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-300 rounded-full"></span>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#FFD700]/5 border border-[#FFD700]/10 rounded-lg text-gray-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8 p-6 bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <FaCheckCircle className="text-[#FFD700]" />
                    Results
                  </h3>
                  <p className="text-[#FFD700] text-lg">
                    {selectedProject.results}
                  </p>
                </div>

                {/* Links */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-300 rounded-full"></span>
                    Project Links
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.links.web && (
                      <a
                        href={selectedProject.links.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300"
                      >
                        <FaGlobe />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.links.ios && (
                      <a
                        href={selectedProject.links.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300"
                      >
                        <FaApple />
                        App Store
                      </a>
                    )}
                    {selectedProject.links.android && (
                      <a
                        href={selectedProject.links.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300"
                      >
                        <FaAndroid />
                        Google Play
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default Portfolio;
