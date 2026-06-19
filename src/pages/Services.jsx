import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaMobile,
  FaPaintBrush,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaArrowRight,
  FaCheck,
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
  FaChartLine,
  FaUsers,
  FaClock,
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
  SiFramer,
  SiFirebase,
  SiGooglecloud,
} from "react-icons/si";
import { RiCodeBoxLine, RiPaletteLine, RiFlashlightLine } from "react-icons/ri";

// Background image
const servicesHeroBg =
  "https://i.pinimg.com/736x/0b/4c/84/0b4c84fff48a3ad3b3172325de05c2c5.jpg";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

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

  const services = [
    {
      id: 1,
      name: "Full Stack Development",
      icon: <FaCode />,
      iconColor: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      borderColor: "border-[#FFD700]/20",
      description:
        "End-to-end web applications built with modern architectures and best practices",
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "Python",
        "PostgreSQL",
        "MongoDB",
      ],
      features: [
        "Custom web application development",
        "RESTful & GraphQL API design",
        "Database architecture & optimization",
        "Authentication & authorization systems",
        "Responsive & accessible frontend",
        "Third-party integrations",
        "Performance optimization",
        "Comprehensive testing suites",
      ],
      iconArray: [
        <FaReact />,
        <FaNodeJs />,
        <SiTypescript />,
        <FaPython />,
        <SiPostgresql />,
        <SiMongodb />,
      ],
    },
    {
      id: 2,
      name: "Mobile Development",
      icon: <FaMobile />,
      iconColor: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      borderColor: "border-[#FFD700]/20",
      description:
        "Native and cross-platform mobile experiences for iOS and Android",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      features: [
        "Cross-platform & native development",
        "Pixel-perfect UI implementation",
        "App store deployment & optimization",
        "Push notifications & real-time updates",
        "Offline-first architecture",
        "Biometric authentication",
        "Analytics & crash reporting",
        "Performance monitoring",
      ],
      iconArray: [
        <SiFlutter />,
        <SiSwift />,
        <SiKotlin />,
        <FaReact />,
        <SiFirebase />,
        <FaAndroid />,
      ],
    },
    {
      id: 3,
      name: "UI/UX Design",
      icon: <RiPaletteLine />,
      iconColor: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      borderColor: "border-[#FFD700]/20",
      description:
        "Human-centered design that drives engagement and business results",
      technologies: ["Figma", "Adobe XD", "Framer", "Sketch", "InVision"],
      features: [
        "User research & persona development",
        "Wireframing & interactive prototyping",
        "Visual design & brand identity",
        "Interaction & motion design",
        "Usability testing & validation",
        "Design system creation",
        "WCAG accessibility compliance",
        "Developer handoff & documentation",
      ],
      iconArray: [
        <FaFigma />,
        <SiFramer />,
        <FaPaintBrush />,
        <FaCloud />,
        <FaUsers />,
      ],
    },
    {
      id: 4,
      name: "DevOps & Cloud",
      icon: <FaCloud />,
      iconColor: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      borderColor: "border-[#FFD700]/20",
      description:
        "Scalable cloud infrastructure and automated deployment pipelines",
      technologies: [
        "AWS",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
      ],
      features: [
        "Cloud infrastructure architecture",
        "CI/CD pipeline implementation",
        "Containerization & orchestration",
        "Monitoring & observability",
        "Security & compliance hardening",
        "Auto-scaling & load balancing",
        "Disaster recovery planning",
        "Cost optimization strategies",
      ],
      iconArray: [
        <FaAws />,
        <SiGooglecloud />,
        <FaDocker />,
        <SiKubernetes />,
        <SiTerraform />,
        <SiJenkins />,
      ],
    },
    {
      id: 5,
      name: "Cybersecurity",
      icon: <FaShieldAlt />,
      iconColor: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      borderColor: "border-[#FFD700]/20",
      description:
        "Enterprise-grade security solutions protecting your digital assets",
      technologies: [
        "Penetration Testing",
        "Security Audits",
        "Encryption",
        "IAM",
        "WAF",
        "SIEM",
      ],
      features: [
        "Vulnerability assessments",
        "Penetration testing services",
        "Security architecture review",
        "Incident response planning",
        "Compliance auditing (GDPR, SOC2, HIPAA)",
        "Security awareness training",
        "Network security hardening",
        "Continuous monitoring setup",
      ],
      iconArray: [
        <FaShieldAlt />,
        <FaServer />,
        <FaDatabase />,
        <FaCog />,
        <FaCloud />,
        <FaCheck />,
      ],
    },
    {
      id: 6,
      name: "MVP Development",
      icon: <FaRocket />,
      iconColor: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
      borderColor: "border-[#FFD700]/20",
      description:
        "Rapid development to validate your product idea and secure funding",
      technologies: [
        "Lean Methodology",
        "Agile",
        "Rapid Prototyping",
        "Product Strategy",
      ],
      features: [
        "Product strategy workshops",
        "Core feature development",
        "User testing & feedback loops",
        "Iterative improvements",
        "Analytics implementation",
        "Investor-ready demonstrations",
        "Market validation support",
        "Post-launch support",
      ],
      iconArray: [
        <FaRocket />,
        <FaCode />,
        <FaMobile />,
        <FaCloud />,
        <FaDatabase />,
        <FaChartLine />,
      ],
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative hero-section fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-20 md:py-28 border-b border-[#FFD700]/10"
        style={{
          backgroundImage: `url(${servicesHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Comprehensive </span>
              <span className="text-[#FFD700]">Technology</span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver cutting-edge technology services that transform
              businesses and drive measurable results
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-gray-900/50 rounded-2xl border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all duration-500 overflow-hidden hover:transform hover:-translate-y-2"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`p-4 rounded-xl ${service.bgColor} border ${service.borderColor} flex-shrink-0`}
                    >
                      <div className={`text-2xl ${service.iconColor}`}>
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#FFD700]/5 border border-[#FFD700]/10 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 5 && (
                        <span className="px-3 py-1 bg-[#FFD700]/5 border border-[#FFD700]/10 rounded-full text-xs text-[#FFD700]">
                          +{service.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                    {service.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FaCheck className="text-[#FFD700] text-xs mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Icons */}
                  <div className="flex items-center gap-3 mb-6">
                    {service.iconArray.slice(0, 4).map((icon, idx) => (
                      <div
                        key={idx}
                        className={`w-10 h-10 rounded-lg ${service.bgColor} border ${service.borderColor} flex items-center justify-center ${service.iconColor} text-lg`}
                      >
                        {icon}
                      </div>
                    ))}
                    {service.iconArray.length > 4 && (
                      <div className="w-10 h-10 rounded-lg bg-[#FFD700]/5 border border-[#FFD700]/10 flex items-center justify-center text-[#FFD700] text-xs font-bold">
                        +{service.iconArray.length - 4}
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => {
                      window.location.href = `/contact`;
                    }}
                    className="w-full bg-[#FFD700] text-black px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#FFD700]/90 transition-all duration-300 group/btn"
                  >
                    <span>Get Started</span>
                    <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
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

export default Services;
