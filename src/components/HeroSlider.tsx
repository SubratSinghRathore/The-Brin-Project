import { useState, useEffect } from "react";

const images = [
  "./assets/scroll1.png",
  "./assets/scroll2.jpg",
  "./assets/scroll3.jpg",
  "./assets/scroll4.jpg",
  "./assets/scroll5.jpg",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[70vh] mt-16 relative overflow-hidden" id="home">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-6">
        <div className="text-center text-white drop-shadow-lg max-w-3xl">

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-100">
            Mr. Prashant Mishra
          </h2>

          <p className="text-lg md:text-2xl font-semibold mb-4">
            Hie, Prashant Mishra | FOUNDER: The Brim — a Media Company
          </p>

          <p className="text-sm md:text-lg leading-relaxed text-gray-300">
            Author, Cosmic Wellness Expert, Empowering Youth & Motivation Coach.<br />
            Strategic Brand Development, Visual Identity Design, Market Research,
            Positioning, Content Strategy, Brand Analytics, Consumer Insights, and
            Cross-functional Collaboration. Passionate about AI, Blockchain, IoT & Adaptability.
          </p>

        </div>
      </div>

    </div>
  );
}
