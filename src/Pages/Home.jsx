import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import ServiceCard from "../Components/ServiceCard";

const Home = () => {
  return (
    <div className="page lg:h-full lg:overflow-y-auto">
      <Title text="ABOUT ME" />
      <p className="py-5">
        Hi, I'm Kuro — a full-stack web developer who turns ideas into fast,
        modern websites. I specialize in building custom, clean, and responsive
        websites using React.js, Tailwind CSS, Node.js, and MongoDB. Whether
        you're a creator, artist, or small business owner, I can help you build
        a beautiful digital space that reflects your style and purpose. I’ve
        built full-stack platforms like NekoNime — an anime-focused site with
        user lists, discussions, and rating systems. I focus on performance,
        clean UI, and features that *actually* matter to users. Let’s create
        something amazing together!
      </p>

      <div>
        <h2 className="text-3xl font-medium pb-5">🛠️ Services I Offer</h2>
        {/* <div className='grid xl:grid-cols-2 gap-3'> */}
        <div className="grid xl:grid-cols-1 gap-3">
          <ServiceCard
            icon={assets.html_icon}
            title="Custom Web Development"
            description="I build modern, fast, and mobile-friendly websites using React, Tailwind, and Node.js — fully tailored to your needs. Whether it's a portfolio, blog, or small business site, I can bring it to life."
            bgColor="bg-[#FFEBD1]"
          />

          <ServiceCard
            icon={assets.themed_icon}
            title="Themed & Creator Websites"
            description="Specializing in themed and creator-friendly sites. I design platforms perfect for artists, streamers, or fandom pages, complete with stylish UI and smooth performance."
            bgColor="bg-[#F2F7FC]"
          />

          <ServiceCard
            icon={assets.fullstack_icon}
            title="Full-Stack Features & Auth Systems"
            description="Need logins, user dashboards, or dynamic content? I build secure backend systems using Express.js and MongoDB, including user auth, protected routes, and data handling."
            bgColor="bg-[#FFEBD1]"
          />

          <ServiceCard
            icon={assets.api_icon}
            title="API Integration & Dynamic Dashboards"
            description="I can integrate third-party APIs like AniList, YouTube, or OpenWeather to fetch live data into your site. Also build custom dashboards for admin control and real-time updates."
            bgColor="bg-[#F2F7FC]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
