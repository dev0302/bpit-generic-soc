import { NavLink, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import UpcomingEventSection from "../components/UpcomingEventSection";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const navigate = useNavigate();
  const titleRef = useRef();
  const descRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.05, smoothWheel: true });

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });
    gsap.from(descRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.2,
    });
    gsap.from(btnRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.4,
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-slate-950 text-slate-50">
      {/* Hero */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.4) 0, transparent 55%), radial-gradient(circle at 80% 80%, rgba(129,140,248,0.35) 0, transparent 55%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-24 text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-400/80">
            Society Sync · College Society Management
          </p>

          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              One system for every
            </span>
            <br className="hidden md:block" />
            <span className="text-slate-100">college society and role</span>
          </h1>

          <p
            ref={descRef}
            id="home-desc"
            className="max-w-3xl text-base md:text-lg text-slate-300 leading-relaxed font-nunito"
          >
            Society Sync is a centralized platform to manage college societies in a
            fair and transparent way. Handle recruitment, interviews, panels, events,
            and verified digital certificates, while making sure each student is
            officially part of only one society and faculty can validate every record.
          </p>

          <div
            ref={btnRef}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center font-nunito"
          >
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-3 rounded-full bg-sky-500 text-white font-semibold text-sm md:text-base shadow-lg shadow-sky-500/30 hover:bg-sky-400 hover:shadow-sky-400/40 transition-all duration-300"
            >
              Open Admin Demo
            </button>
            <button
              onClick={() => navigate("/events")}
              className="px-8 py-3 rounded-full border border-slate-600/80 text-slate-100 text-sm md:text-base hover:bg-slate-800/80 hover:border-slate-400/70 transition-all duration-300"
            >
              View Events from Backend
            </button>
            <a
              href="https://society-management-project-hackatho.vercel.app/admin/college"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-sky-500/70 text-sky-300 text-sm md:text-base hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-300 inline-flex items-center justify-center"
            >
              Redirect Back
            </a>
          </div>
        </div>
      </div>

      {/* Audience sections */}
      <section className="relative z-10 py-16 px-6 border-t border-slate-800/60 bg-slate-950/95">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 text-center mb-10">
            Built for students, societies, and faculty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-6 shadow-lg shadow-slate-900/60">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-400 mb-3">
                For Students
              </p>
              <h3 className="text-lg font-semibold mb-3 text-slate-50">
                Apply once, choose wisely
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Apply to multiple societies during recruitment, track your status, and
                receive verified digital certificates for events and roles – while the
                system guarantees only one official society membership.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-6 shadow-lg shadow-slate-900/60">
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-400 mb-3">
                For Societies
              </p>
              <h3 className="text-lg font-semibold mb-3 text-slate-50">
                Structured recruitment & events
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Run interview panels, shortlist candidates, manage core and general
                members, publish events, and issue certificates – all from one
                dashboard that’s connected to the institute database.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-6 shadow-lg shadow-slate-900/60">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-3">
                For Faculty & Admin
              </p>
              <h3 className="text-lg font-semibold mb-3 text-slate-50">
                Oversight without micromanaging
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Verify memberships, approve selections, validate certificates, and
                view activity logs across all societies through institution-level
                dashboards designed for compliance and audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-16 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 text-center mb-4">
            Key capabilities in this prototype
          </h2>
          <p className="text-sm md:text-base text-slate-300 text-center max-w-3xl mx-auto mb-10">
            The backend you are interacting with is production-style – using role‑based
            access, event automation, and activity logging – but presented here as a
            generic engine for any college or university.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-6">
              <h3 className="text-base md:text-lg font-semibold text-slate-50 mb-2">
                Centralized recruitment & interview flows
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Configure societies, open recruitment windows, manage applications, and
                move candidates through interviews and panels with clear status
                tracking visible to both societies and faculty.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-6">
              <h3 className="text-base md:text-lg font-semibold text-slate-50 mb-2">
                Event automation & attendance records
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Create events, manage registrations, and keep upcoming and past events
                in sync across pages using the same database powering this prototype.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-6">
              <h3 className="text-base md:text-lg font-semibold text-slate-50 mb-2">
                Verified digital certificates
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Issue digitally signed certificates for participation, organizing,
                and positions of responsibility that faculty and admins can verify
                directly through the platform.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-6">
              <h3 className="text-base md:text-lg font-semibold text-slate-50 mb-2">
                Institution‑ready audit trails
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every important action – from event uploads to member changes – can be
                tracked, making it easier to justify decisions to faculty, deans, or
                external reviewers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live events from backend */}
      <section className="relative z-10 py-16 px-6 bg-slate-950 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
                Upcoming & recent events
              </h2>
              <p className="text-sm md:text-base text-slate-300 mt-2 max-w-xl">
                This section is wired to the real backend and database, so you can
                demonstrate practical event management without any hard‑coded data.
              </p>
            </div>
            <NavLink
              to="/events"
              className="text-sm md:text-base text-sky-300 hover:text-sky-200 underline underline-offset-4"
            >
              Open full events page
            </NavLink>
          </div>

          <UpcomingEventSection variant="home" />
        </div>
      </section>
    </div>
  );
}

export default Home;
