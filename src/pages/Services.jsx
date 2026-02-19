import React, { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaMobile,
  FaPaintBrush,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaClock,
  FaUsers,
  FaCog,
  FaDatabase,
  FaServer,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaFigma,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiAdobexd,
  SiFramer,
  SiFirebase,
  SiGooglecloud,
  SiTrello,
  SiJira,
} from "react-icons/si";
import {
  RiCodeBoxLine,
  RiGitBranchLine,
  RiTestTubeLine,
  RiPaletteLine,
} from "react-icons/ri";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef();

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

  // Auto-pagination
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === mainServices.length - 1 ? 0 : prevIndex + 1,
        );
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mainServices.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === mainServices.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const mainServices = [
    {
      id: 1,
      name: "Full Stack Development",
      icon: <FaCode />,
      textColor: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      borderColor: "border-[#FFD700]/20",
      iconArray: [
        <FaReact />,
        <FaNodeJs />,
        <SiTypescript />,
        <FaPython />,
        <SiPostgresql />,
        <SiMongodb />,
      ],
      description: "End-to-end web applications with modern architectures",
      duration: "2-12 weeks",
      technologies: [
        "React",
        "Node.js",
        "Python",
        "TypeScript",
        "PostgreSQL",
        "MongoDB",
      ],
      includes: [
        "Custom web application development",
        "RESTful API design & implementation",
        "Database design & optimization",
        "Authentication & authorization",
        "Responsive frontend development",
        "Third-party integrations",
        "Performance optimization",
        "Comprehensive testing",
      ],
      addons: [
        { name: "E-commerce Integration" },
        { name: "Real-time Features (WebSocket)" },
        { name: "Admin Dashboard" },
        { name: "Maintenance Package" },
      ],
      stats: {
        projects: "50+",
        satisfaction: "98%",
        delivery: "On-time",
      },
    },
    {
      id: 2,
      name: "Mobile Development",
      icon: <FaMobile />,
      textColor: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      borderColor: "border-[#FFD700]/20",
      iconArray: [
        <SiFlutter />,
        <SiSwift />,
        <SiKotlin />,
        <FaReact />,
        <SiFirebase />,
        <FaAndroid />,
      ],
      description: "Native and cross-platform mobile applications",
      duration: "4-16 weeks",
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "iOS/Android",
      ],
      includes: [
        "Cross-platform or native development",
        "UI/UX implementation",
        "App store deployment assistance",
        "Push notifications",
        "Offline functionality",
        "Biometric authentication",
        "Analytics integration",
        "Performance optimization",
      ],
      addons: [
        { name: "App Store Optimization" },
        { name: "AR Features" },
        { name: "Wearable Integration" },
        { name: "Enterprise License" },
      ],
      stats: {
        projects: "35+",
        satisfaction: "96%",
        delivery: "On-time",
      },
    },
    {
      id: 3,
      name: "UI/UX Design",
      icon: <RiPaletteLine />,
      textColor: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      borderColor: "border-[#FFD700]/20",
      iconArray: [
        <FaFigma />,
        <SiAdobexd />,
        <SiFramer />,
        <FaPaintBrush />,
        <SiTrello />,
        <SiJira />,
      ],
      description: "User-centered design that drives engagement and conversion",
      duration: "2-8 weeks",
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Framer",
        "Principle",
      ],
      includes: [
        "User research & personas",
        "Wireframing & prototyping",
        "Visual design & branding",
        "Interaction design",
        "Usability testing",
        "Design system creation",
        "Accessibility compliance",
        "Developer handoff",
      ],
      addons: [
        { name: "Custom Illustrations" },
        { name: "Motion Design" },
        { name: "User Testing Sessions" },
        { name: "Brand Guidelines" },
      ],
      stats: {
        projects: "60+",
        satisfaction: "99%",
        delivery: "On-time",
      },
    },
    {
      id: 4,
      name: "DevOps & Cloud",
      icon: <FaCloud />,
      textColor: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      borderColor: "border-[#FFD700]/20",
      iconArray: [
        <FaAws />,
        <SiGooglecloud />,
        <FaDocker />,
        <SiKubernetes />,
        <SiTerraform />,
        <SiJenkins />,
      ],
      description: "Scalable infrastructure and automated deployment pipelines",
      duration: "3-10 weeks",
      technologies: [
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
      ],
      includes: [
        "Cloud infrastructure setup",
        "CI/CD pipeline implementation",
        "Container orchestration",
        "Monitoring & logging",
        "Security hardening",
        "Auto-scaling configuration",
        "Disaster recovery planning",
        "Performance optimization",
      ],
      addons: [
        { name: "24/7 Support" },
        { name: "Multi-region Deployment" },
        { name: "SOC2 Compliance" },
        { name: "Load Testing" },
      ],
      stats: {
        projects: "40+",
        satisfaction: "97%",
        delivery: "On-time",
      },
    },
    {
      id: 5,
      name: "Cybersecurity",
      icon: <FaShieldAlt />,
      textColor: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      borderColor: "border-[#FFD700]/20",
      iconArray: [
        <FaShieldAlt />,
        <FaServer />,
        <FaDatabase />,
        <FaCog />,
        <FaCloud />,
        <FaCheck />,
      ],
      description: "Comprehensive security solutions for your digital assets",
      duration: "2-6 weeks",
      technologies: [
        "Penetration Testing",
        "Security Audits",
        "Encryption",
        "IAM",
        "WAF",
        "SIEM",
      ],
      includes: [
        "Vulnerability assessment",
        "Penetration testing",
        "Security architecture review",
        "Incident response planning",
        "Compliance auditing (GDPR/SOC2)",
        "Employee security training",
        "Network security hardening",
        "Ongoing monitoring setup",
      ],
      addons: [
        { name: "Annual Penetration Testing" },
        { name: "Security Training Program" },
        { name: "Bug Bounty Program Setup" },
        { name: "Managed SIEM" },
      ],
      stats: {
        projects: "30+",
        satisfaction: "100%",
        delivery: "On-time",
      },
    },
    {
      id: 6,
      name: "MVP Development",
      icon: <FaRocket />,
      textColor: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      borderColor: "border-[#FFD700]/20",
      iconArray: [
        <FaRocket />,
        <FaCode />,
        <FaMobile />,
        <FaCloud />,
        <FaDatabase />,
        <FaUsers />,
      ],
      description: "Rapid development to validate your business idea",
      duration: "4-12 weeks",
      technologies: [
        "Rapid Prototyping",
        "Agile",
        "Lean Methodology",
        "Product Strategy",
      ],
      includes: [
        "Product strategy workshop",
        "Core feature development",
        "User testing with real users",
        "Iterative improvements",
        "Basic analytics setup",
        "Feedback collection tools",
        "Investor-ready demo",
        "3 months of support",
      ],
      addons: [
        { name: "Extended User Testing" },
        { name: "Pitch Deck Creation" },
        { name: "Market Research" },
        { name: "Post-MVP Roadmap" },
      ],
      stats: {
        projects: "25+",
        satisfaction: "95%",
        delivery: "On-time",
      },
    },
  ];

  const currentService = mainServices[currentIndex];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-black hero-section fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-20 border-b border-[#FFD700]/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="text-white">Our </span>
              <span className="text-[#FFD700]">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Comprehensive technology solutions tailored to accelerate your
              business growth
            </p>
          </div>
        </div>
      </section>

      {/* Service Carousel */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Service Counter */}
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div className="text-gray-400 text-sm md:text-base">
              <span className="text-[#FFD700] font-bold">
                {currentIndex + 1}
              </span>
              <span className="text-gray-600"> / {mainServices.length}</span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-2 md:gap-3">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#FFD700]/20 bg-black hover:bg-[#FFD700]/10 flex items-center justify-center transition-all group"
                aria-label="Previous service"
              >
                <FaArrowLeft className="text-[#FFD700] text-sm md:text-base group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#FFD700]/20 bg-black hover:bg-[#FFD700]/10 flex items-center justify-center transition-all group"
                aria-label="Next service"
              >
                <FaArrowRight className="text-[#FFD700] text-sm md:text-base group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Service Details Card */}
          <div className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <div className="bg-gray-900 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-[#FFD700]/20">
              {/* Mobile: Icon Grid First */}
              <div className="lg:hidden">
                <div className="bg-black p-6 flex items-center justify-center border-b border-[#FFD700]/20">
                  {/* Icon Grid - Smaller for mobile */}
                  <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                    {currentService.iconArray.slice(0, 6).map((icon, index) => (
                      <div
                        key={index}
                        className={`aspect-square rounded-xl ${currentService.bgColor} border ${currentService.borderColor} flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}
                      >
                        <div
                          className={`text-3xl md:text-4xl ${currentService.textColor}`}
                        >
                          {icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:flex">
                {/* Left Column - Icon Grid for Desktop */}
                <div className="hidden lg:block lg:w-2/5 bg-black p-8 flex items-center justify-center border-r border-[#FFD700]/20">
                  {/* Icon Grid */}
                  <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                    {currentService.iconArray.map((icon, index) => (
                      <div
                        key={index}
                        className={`aspect-square rounded-2xl ${currentService.bgColor} border ${currentService.borderColor} flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}
                      >
                        <div
                          className={`text-5xl xl:text-6xl ${currentService.textColor}`}
                        >
                          {icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:w-3/5 p-6 md:p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex items-start mb-6">
                    <div>
                      <div className="flex items-center gap-2 md:gap-3 mb-2">
                        <div
                          className={`p-2 md:p-3 rounded-xl ${currentService.bgColor} border ${currentService.borderColor}`}
                        >
                          <div
                            className={`text-xl md:text-2xl ${currentService.textColor}`}
                          >
                            {currentService.icon}
                          </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          {currentService.name}
                        </h2>
                      </div>
                      <p className="text-sm md:text-base text-gray-400 ml-10 md:ml-16">
                        {currentService.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats Cards - Responsive grid */}
                  <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6 md:mb-8">
                    <div className="bg-black/50 rounded-lg p-2 md:p-3 border border-[#FFD700]/10">
                      <p className="text-xs text-gray-500">Projects</p>
                      <p className="text-base md:text-xl font-bold text-[#FFD700]">
                        {currentService.stats.projects}
                      </p>
                    </div>
                    <div className="bg-black/50 rounded-lg p-2 md:p-3 border border-[#FFD700]/10">
                      <p className="text-xs text-gray-500">Satisfaction</p>
                      <p className="text-base md:text-xl font-bold text-[#FFD700]">
                        {currentService.stats.satisfaction}
                      </p>
                    </div>
                    <div className="bg-black/50 rounded-lg p-2 md:p-3 border border-[#FFD700]/10">
                      <p className="text-xs text-gray-500">Delivery</p>
                      <p className="text-base md:text-xl font-bold text-[#FFD700]">
                        {currentService.stats.delivery}
                      </p>
                    </div>
                  </div>

                  {/* Info Cards - Wrap on mobile */}
                  <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8">
                    <div className="flex items-center gap-1 md:gap-2 bg-black/50 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-[#FFD700]/10">
                      <FaClock className="text-[#FFD700] text-xs md:text-sm" />
                      <span className="text-xs md:text-sm text-gray-300">
                        {currentService.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2 bg-black/50 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-[#FFD700]/10">
                      <FaUsers className="text-[#FFD700] text-xs md:text-sm" />
                      <span className="text-xs md:text-sm text-gray-300">
                        Dedicated Team
                      </span>
                    </div>
                  </div>

                  {/* Technologies - Responsive */}
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3 flex items-center gap-2">
                      <FaCog className="text-[#FFD700] text-sm md:text-base" />
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {currentService.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-2 md:px-3 py-1 ${currentService.bgColor} border ${currentService.borderColor} rounded-full text-xs md:text-sm text-gray-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Two Column Layout - Stack on mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                    {/* What's Included */}
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                        <FaCheck className="text-green-500 text-sm md:text-base" />
                        What's Included
                      </h3>
                      <ul className="space-y-2 md:space-y-3">
                        {currentService.includes
                          .slice(0, 6)
                          .map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-4 h-4 md:w-5 md:h-5 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <FaCheck className="text-green-500 text-[10px] md:text-xs" />
                              </div>
                              <span className="text-xs md:text-sm text-gray-400">
                                {item}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Addons */}
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                        <FaDatabase className="text-[#FFD700] text-sm md:text-base" />
                        Optional Addons
                      </h3>
                      <ul className="space-y-2 md:space-y-3">
                        {currentService.addons.map((addon, index) => (
                          <li
                            key={index}
                            className="flex justify-between items-center py-1.5 md:py-2 border-b border-[#FFD700]/10"
                          >
                            <span className="text-xs md:text-sm text-gray-400">
                              {addon.name}
                            </span>
                            <span className="text-xs md:text-sm text-gray-500">
                              Available
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      window.location.href = `/contact?service=${currentService.name
                        .toLowerCase()
                        .replace(/ /g, "-")}`;
                    }}
                    className="w-full bg-[#FFD700] text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 hover:bg-[#FFD700]/90 transition-all duration-300 group"
                  >
                    <span>Start Your Project</span>
                    <FaArrowRight className="text-sm md:text-base group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Service Dots */}
          <div className="flex justify-center mt-6 md:mt-8 gap-1.5 md:gap-2">
            {mainServices.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-1.5 md:h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 md:w-8 bg-[#FFD700]"
                    : "w-1.5 md:w-2 bg-[#FFD700]/30 hover:bg-[#FFD700]/50"
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
