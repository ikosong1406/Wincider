import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaFilter,
  FaInstagram,
  FaHeart,
  FaExpand,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

// Sample images - replace with actual imports
const portfolioImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "bridal",
    title: "Traditional Bridal Look",
    description: "Classic Indian bridal makeup with heavy gold accents",
    likes: 245,
    tags: ["bridal", "traditional", "gold"],
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "event",
    title: "Evening Glam",
    description: "Sophisticated evening makeup for gala events",
    likes: 189,
    tags: ["event", "glam", "evening"],
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "photoshoot",
    title: "Editorial Makeup",
    description: "Avant-garde look for fashion editorial shoot",
    likes: 312,
    tags: ["editorial", "creative", "fashion"],
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "bridal",
    title: "Western Bridal",
    description: "Natural glam bridal makeup for outdoor wedding",
    likes: 278,
    tags: ["bridal", "natural", "outdoor"],
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "event",
    title: "Party Makeup",
    description: "Sparkling makeup for New Year's Eve party",
    likes: 156,
    tags: ["event", "sparkle", "party"],
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "photoshoot",
    title: "Black & White Shoot",
    description: "High contrast makeup for monochrome photography",
    likes: 221,
    tags: ["photoshoot", "bw", "contrast"],
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "bridal",
    title: "Mehndi Function",
    description: "Vibrant makeup for pre-wedding ceremonies",
    likes: 198,
    tags: ["bridal", "colorful", "ceremony"],
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "event",
    title: "Corporate Event",
    description: "Professional yet glamorous makeup for business events",
    likes: 134,
    tags: ["event", "professional", "corporate"],
  },
];

const categories = ["all", "bridal", "event", "photoshoot"];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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

  const filteredImages = portfolioImages.filter((image) => {
    const matchesCategory = filter === "all" || image.category === filter;
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#ffda93] hero-section fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto">
            Browse our collection of makeup transformations and artistic
            creations
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="fade-in-section opacity-0 translate-y-10 transition-all duration-700 ease-out py-16">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-4">
                No results found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="inline-block bg-white text-[#b9a281] px-3 py-1 rounded-full text-xs font-semibold">
                            {image.category.toUpperCase()}
                          </span>
                          <div className="flex items-center gap-3 text-white">
                            <button className="hover:text-pink-400 transition-colors">
                              <FaHeart />
                            </button>
                            <button className="hover:text-[#b9a281] transition-colors">
                              <FaExpand />
                            </button>
                          </div>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">
                          {image.title}
                        </h3>
                        <p className="text-white/80 text-sm line-clamp-2">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {image.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Image Count */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Showing {filteredImages.length} of {portfolioImages.length} works
            </p>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-[#b9a281] transition-colors"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 rounded-b-lg">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white/90 mb-4">{selectedImage.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedImage.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
