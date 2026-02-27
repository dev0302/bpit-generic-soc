import React, { useRef, useEffect, useState } from "react";
import teamData from "../data/teamData";
import NewCard from "../components/NewCard";
import headsData from "../data/headsData";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Team2() {
  const [activeTab, setActiveTab] = useState("core");

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const teamGridRef = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       heroRef.current,
  //       { opacity: 0, y: 50 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: heroRef.current,
  //           start: "top 85%",
  //         },
  //       }
  //     );

  //     if (teamGridRef.current) {
  //       gsap.fromTo(
  //         teamGridRef.current.children,
  //         { opacity: 0, y: 40 },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.8,
  //           ease: "power2.out",
  //           stagger: 0.15,
  //           scrollTrigger: {
  //             trigger: teamGridRef.current,
  //             start: "top 80%",
  //           },
  //         }
  //       );
  //     }
  //   },
  //   { scope: containerRef }
  // );

  useEffect(() => {
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  }, [activeTab]);

  const displayedData = activeTab === "core" ? teamData : headsData;

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen darkthemebg pt-32 overflow-hidden"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="pb-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight font-alfa tracking-tight">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
              Team
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-nunito font-normal">
            The passionate minds behind GFG BVCOE Student Chapter, driving
            innovation and fostering a community of learners.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="mt-10 max-w-4xl mx-auto w-10/12 flex justify-center">
        <div className="inline-flex p-1 rounded-full border border-gray-300/20 bg-[#1e1e2f]">
          <button
            onClick={() => setActiveTab("core")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === "core"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Core
          </button>
          <button
            onClick={() => setActiveTab("heads")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === "heads"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Heads
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={teamGridRef}
        className="TEAM_SECTION mt-16 justify-center items-center flex flex-wrap w-10/12 mx-auto gap-16 pb-12 md:gap-y-20"
      >
        {displayedData && displayedData.length > 0 ? (
          displayedData.map((person, index) => (
            <NewCard key={`${activeTab}-${index}`} person={person} />
          ))
        ) : (
          <div className="text-center text-gray-300 w-full">
            Heads data coming soon.
          </div>
        )}
      </div>
    </div>
  );
}

export default Team2;
