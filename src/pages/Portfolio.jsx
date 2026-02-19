import React, { useState, useEffect } from "react";
import {
  FaTimes,
  FaGlobe,
  FaGithub,
  FaApple,
  FaAndroid,
  FaClock,
  FaUsers,
  FaCode,
} from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

// Sample projects data with case studies
const projectsData = [
  {
    id: 1,
    name: "FinTech Dashboard Pro",
    shortDescription: "Enterprise financial analytics platform",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Web Application",
    client: "Global Finance Corp",
    duration: "6 months",
    team: "4 developers, 1 UI/UX designer",
    problem:
      "Client needed a real-time dashboard to monitor multiple investment portfolios with complex data visualization requirements.",
    solution:
      "Built a React-based dashboard with WebSocket connections for real-time updates, integrated D3.js for custom charts, and implemented role-based access control.",
    technologies: [
      "React",
      "Node.js",
      "D3.js",
      "WebSocket",
      "PostgreSQL",
      "Redis",
    ],
    links: {
      web: "https://fintech-demo.wincider.tech",
      github: "https://github.com/wincider/fintech-dashboard",
    },
    features: [
      "Real-time portfolio tracking",
      "Interactive charts and graphs",
      "Automated reporting",
      "Multi-currency support",
    ],
    results: "40% faster decision-making, $2M in optimized investments",
  },
  {
    id: 2,
    name: "MediCare Connect",
    shortDescription: "Telemedicine mobile app for healthcare providers",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Mobile App",
    client: "HealthPlus Network",
    duration: "8 months",
    team: "3 mobile developers, 2 backend developers, 1 UI/UX designer",
    problem:
      "Healthcare providers needed a secure platform for virtual consultations with patients, including video calls and medical record sharing.",
    solution:
      "Developed cross-platform mobile app using React Native with end-to-end encryption, integrated Twilio for video calls, and built HIPAA-compliant backend.",
    technologies: [
      "React Native",
      "Node.js",
      "Twilio",
      "MongoDB",
      "Socket.io",
      "AWS",
    ],
    links: {
      web: "https://medicare-demo.wincider.tech",
      github: "https://github.com/wincider/medicare-connect",
      ios: "https://apps.apple.com",
      android: "https://play.google.com",
    },
    features: [
      "Secure video consultations",
      "Electronic health records",
      "Prescription management",
      "Appointment scheduling",
    ],
    results:
      "500+ healthcare providers onboarded, 10k+ consultations in first month",
  },
  {
    id: 3,
    name: "EcoTrack Sustainability",
    shortDescription: "Carbon footprint tracking platform",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Web Application",
    client: "Green Future Initiative",
    duration: "4 months",
    team: "3 developers, 1 data scientist",
    problem:
      "Organization needed a tool to help businesses track and reduce their carbon emissions with actionable insights.",
    solution:
      "Created a Next.js application with real-time calculations, integrated multiple APIs for emission factors, and built custom analytics dashboard.",
    technologies: [
      "Next.js",
      "Python",
      "FastAPI",
      "TensorFlow",
      "MongoDB",
      "Chart.js",
    ],
    links: {
      web: "https://ecotrack-demo.wincider.tech",
      github: "https://github.com/wincider/ecotrack",
    },
    features: [
      "Carbon footprint calculator",
      "Emission reduction suggestions",
      "Progress tracking",
      "Team collaboration",
    ],
    results:
      "30% average reduction in tracked emissions, 200+ companies using platform",
  },
  {
    id: 4,
    name: "Smart Retail AI",
    shortDescription: "AI-powered inventory management system",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "AI/ML Solution",
    client: "RetailTech Solutions",
    duration: "10 months",
    team: "2 ML engineers, 3 backend developers, 1 frontend developer",
    problem:
      "Retail chain struggling with overstocking and stockouts across 50+ locations.",
    solution:
      "Developed ML models to predict demand, built React dashboard for inventory managers, and integrated with existing POS systems.",
    technologies: [
      "Python",
      "TensorFlow",
      "React",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    links: {
      web: "https://retailai-demo.wincider.tech",
      github: "https://github.com/wincider/retail-ai",
    },
    features: [
      "Demand forecasting",
      "Automated reordering",
      "Inventory optimization",
      "Real-time analytics",
    ],
    results: "35% reduction in inventory costs, 99% product availability",
  },
  {
    id: 5,
    name: "EduLearn Platform",
    shortDescription: "Online learning management system",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Web Application",
    client: "EduTech International",
    duration: "5 months",
    team: "4 developers, 1 UI/UX designer, 1 instructional designer",
    problem:
      "Educational institution needed a modern LMS with interactive features and progress tracking.",
    solution:
      "Built comprehensive platform with video streaming, quizzes, forums, and certification system.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "AWS S3",
    ],
    links: {
      web: "https://edulearn-demo.wincider.tech",
      github: "https://github.com/wincider/edulearn",
      ios: "https://apps.apple.com",
      android: "https://play.google.com",
    },
    features: [
      "Video courses",
      "Interactive quizzes",
      "Student forums",
      "Progress tracking",
      "Certificates",
    ],
    results: "10k+ students enrolled, 95% completion rate",
  },
  {
    id: 6,
    name: "LogiTrack Pro",
    shortDescription: "Fleet management and logistics platform",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Mobile & Web",
    client: "Global Logistics Co.",
    duration: "7 months",
    team: "3 mobile developers, 3 backend developers, 1 UI/UX designer",
    problem:
      "Logistics company needed real-time tracking and route optimization for 200+ vehicles.",
    solution:
      "Created React Native driver app and React admin dashboard with real-time GPS tracking and route optimization algorithms.",
    technologies: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Google Maps API",
      "WebSocket",
    ],
    links: {
      web: "https://logitrack-demo.wincider.tech",
      github: "https://github.com/wincider/logitrack",
      ios: "https://apps.apple.com",
      android: "https://play.google.com",
    },
    features: [
      "Real-time GPS tracking",
      "Route optimization",
      "Delivery confirmation",
      "Driver management",
      "Analytics dashboard",
    ],
    results: "25% reduction in fuel costs, 40% faster deliveries",
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
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 hero-section fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-20 border-b border-[#FFD700]/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-[#FFD700]">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and innovative
            solutions
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-[#FFD700] text-black"
                    : "bg-gray-900 text-gray-400 hover:bg-[#FFD700]/10 hover:text-[#FFD700] border border-[#FFD700]/20"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-8">
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
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#FFD700]/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {project.shortDescription}
                    </p>

                    {/* Quick Stats */}
                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaClock className="text-[#FFD700]" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaUsers className="text-[#FFD700]" />
                        <span>{project.team.split(",")[0]}</span>
                      </div>
                    </div>
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
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-[#FFD700]/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
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
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedProject.name}
                  </h2>
                  <p className="text-xl text-[#FFD700]">
                    {selectedProject.shortDescription}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-[#FFD700]/10">
                    <p className="text-sm text-gray-500 mb-1">Client</p>
                    <p className="text-white font-semibold">
                      {selectedProject.client}
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-[#FFD700]/10">
                    <p className="text-sm text-gray-500 mb-1">Duration</p>
                    <p className="text-white font-semibold">
                      {selectedProject.duration}
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-[#FFD700]/10">
                    <p className="text-sm text-gray-500 mb-1">Team</p>
                    <p className="text-white font-semibold">
                      {selectedProject.team}
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
                      <span className="w-1 h-6 bg-[#FFD700] rounded-full"></span>
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
                        <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></div>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#FFD700] rounded-full"></span>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg text-[#FFD700] text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8 p-6 bg-gradient-to-r from-[#FFD700]/10 to-transparent rounded-xl border border-[#FFD700]/20">
                  <h3 className="text-xl font-bold text-white mb-2">Results</h3>
                  <p className="text-[#FFD700] text-lg">
                    {selectedProject.results}
                  </p>
                </div>

                {/* Links */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#FFD700] rounded-full"></span>
                    Project Links
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.links.web && (
                      <a
                        href={selectedProject.links.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg text-[#FFD700] hover:bg-[#FFD700]/20 transition-colors"
                      >
                        <FaGlobe />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.links.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg text-[#FFD700] hover:bg-[#FFD700]/20 transition-colors"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}
                    {selectedProject.links.ios && (
                      <a
                        href={selectedProject.links.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg text-[#FFD700] hover:bg-[#FFD700]/20 transition-colors"
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
                        className="flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg text-[#FFD700] hover:bg-[#FFD700]/20 transition-colors"
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
    </div>
  );
};

export default Portfolio;
