import { useEffect, useRef, useState } from "react";

import nextek1 from "../assets/images/nextek1.png"
import nextek2 from "../assets/images/nextek2.jpeg"
import nextek3 from "../assets/images/nextek3.jpeg"
import nextek4 from "../assets/images/nextek4.jpeg"

  const whyChooseNextek = [
    {
      id: 0,
      title: "Premium Build Quality",
      description:
        "Built using high-grade materials with attention to durability, comfort, and long-term performance.",
      image: nextek4,
    },
    {
      id: 1,
      title: "Designed for Productivity",
      description:
        "Every product is ergonomically designed to improve posture, reduce fatigue, and boost focus.",
      image: nextek2,
    },
    {
      id: 2,
      title: "Seamless Tech Integration",
      description:
        "Compatible with modern devices, wireless standards, and smart workspace setups.",
      image: nextek3,
    },
    {
      id: 3,
      title: "Fast & Reliable Delivery",
      description:
        "Quick order processing, secure packaging, and dependable shipping every time.",
      image: nextek1,
    },
  ];

export default function WhyChooseNexTek() {
  const [active, setActive] = useState(0);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT – Sticky content */}
        <div className="lg:sticky lg:top-24 h-fit space-y-12">
          <h2 className="text-4xl font-semibold">Why Choose NexTek</h2>

          <div className="space-y-10">
            {features.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (itemsRef.current[index] = el)}
                data-index={index}
                className={`transition-opacity duration-300 ${
                  active === index ? "opacity-100" : "opacity-40"
                }`}
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-2 text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – Image panel */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          {features.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                active === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
