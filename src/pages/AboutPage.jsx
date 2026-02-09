import { motion } from "framer-motion";

import hero from "../assets/images/hero.jpeg";
import worker1 from "../assets/images/worker1.jpeg";
import worker2 from "../assets/images/worker2.jpeg";
import worker3 from "../assets/images/worker3.jpeg";
import worker4 from "../assets/images/worker4.jpeg"; 

export default function AboutPage() {
  return (
    <div className="bg-[#0f0f0f] text-[#EDEBE6] min-h-screen">

      {/* HERO */}
      <section className="py-24 px-6 md:px-20 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold italic tracking-tight mb-6"
        >
          Built for creators.  
          Designed for focus.
        </motion.h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          NexTek creates refined workspace products and setups that blend
          performance, minimalism, and comfort into a seamless daily experience.
        </p>
      </section>


      {/* STORY */}
      <section className="py-20 px-6 md:px-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={hero}
          alt="Workspace"
          className="rounded-3xl shadow-2xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold italic mb-6">
            Our Story
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            NexTek was born from a simple idea: workspaces should feel inspiring,
            calm, and powerful at the same time. We design and curate tools that
            help creators stay focused, productive, and comfortable — whether
            coding, designing, or building something meaningful.
          </p>
        </motion.div>
      </section>


      {/* MISSION + VISION */}
      <section className="py-20 px-6 md:px-20 bg-[#151515]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold italic mb-4">
              Our Mission
            </h3>
            <p className="text-gray-400 leading-relaxed">
              To deliver premium workspace products and curated setups that
              elevate productivity, comfort, and design — helping people build
              environments they actually enjoy working in.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold italic mb-4">
              Our Vision
            </h3>
            <p className="text-gray-400 leading-relaxed">
              To become a globally trusted brand for modern workspaces,
              combining craftsmanship, technology, and minimalist design into
              a seamless experience.
            </p>
          </motion.div>

        </div>
      </section>


      {/* VALUES / BRAND FEEL */}
      <section className="py-24 px-6 md:px-20 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold italic text-center mb-14"
        >
          What We Believe
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Craftsmanship",
              text: "Every product is selected for quality, durability, and thoughtful design."
            },
            {
              title: "Focus",
              text: "A clean workspace creates a clear mind. Simplicity is powerful."
            },
            {
              title: "Timeless Design",
              text: "We value aesthetics that last longer than trends."
            }
          ].map((value, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-[#151515] p-8 rounded-3xl border border-[#222]"
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* TEAM */}
<section className="py-24 px-6 md:px-20 max-w-6xl mx-auto">
  <motion.h2
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-bold italic text-center mb-14"
  >
    Meet Our Team
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
    {[
      {
        name: "Steven Parker",
        role: "Founder & CEO",
        img: worker4
      },
      {
        name: "Micheal Reed",
        role: "Product Manager",
        img: worker2
      },
      {
        name: "Olivier Chen",
        role: "Marketting & Operations",
        img: worker3
      },
      {
        name: "Daniel Elemide",
        role: "Developer",
        img: worker1
      }
    ].map((member, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -8 }}
        className="text-center"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-36 h-36 mx-auto rounded-full object-cover mb-4 border border-[#222]"
        />
        <h3 className="font-semibold text-lg">{member.name}</h3>
        <p className="text-gray-400 text-sm">{member.role}</p>
      </motion.div>
    ))}
  </div>
</section>


{/* TESTIMONIALS */}
<section className="py-24 px-6 md:px-20 bg-[#151515]">
  <div className="max-w-6xl mx-auto">
    
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold italic text-center mb-14"
    >
      What Customers Say
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          quote:
            "The quality of the workspace setups is incredible. It completely changed my productivity.",
          name: "James Walker",
          role: "UI Designer"
        },
        {
          quote:
            "Clean design, fast delivery, and premium products. NexTek feels like Apple for workspaces.",
          name: "Sarah Kim",
          role: "Frontend Developer"
        },
        {
          quote:
            "My desk finally looks professional. Everything feels curated and intentional.",
          name: "David Osei",
          role: "Content Creator"
        }
      ].map((testimonial, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -6 }}
          className="bg-[#0f0f0f] border border-[#222] p-8 rounded-3xl"
        >
          <p className="text-gray-300 leading-relaxed mb-6">
            “{testimonial.quote}”
          </p>

          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-gray-400 text-sm">{testimonial.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* NEWSLETTER */}
      <section className="py-24 px-6 md:px-20 bg-[#151515] text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold italic mb-6"
        >
          Join the NexTek Community
        </motion.h2>

        <p className="text-gray-400 mb-8">
          Get workspace inspiration, new releases, and exclusive offers.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#333] text-white w-full"
          />
          <button className="bg-[#C6A87D] text-black font-semibold px-6 py-3 rounded-xl hover:opacity-90">
            Subscribe
          </button>
        </div>
      </section>

    </div>
  );
}
