import "./experiences.css";
import ReliaQuest_Logo from "../../assets/RQ_Exponent.png";
import AiSociety_Logo from "../../assets/society_of_computer_scientists_scs_logo.png"

const Experiences = () => {
  return (
    <section id="experiences" className="experience-section">
      <div className="section-heading-wrap">
        <p className="section-kicker">03 / Expeditions</p>
        <h2 className="section-heading">Where I've made my mark.</h2>
        <p className="section-intro">
          A trail through product engineering, platform work, and the teams
          that made each stop matter.
        </p>
      </div>

      <div className="container experiences__container">
        <article className="experience text-center mb-4">
          <span className="experience__index">TAMPA, FL / 01</span>
          <div className="experience__avatar experience__avatar--reliaquest">
            <img
              src={ReliaQuest_Logo}
              alt="ReliaQuest logo"
              className="img-fluid reliaquest"
            />
          </div>
          <h5 className="experience__name">
            Associate Software Engineer
          </h5>
          <h6 className="experience__name">
            ReliaQuest | Mar 2026 - Present
          </h6>
          <small className="experience__bullet">
            Led foundational development of a reusable, entity-agnostic
            access-control library, now being implemented for
            <span> 2 resource types</span>.
          </small>
          <small className="experience__bullet">
            Co-led a <span>6-person team</span> through a ServiceNow
            migration, coordinating with <span>4 departments</span> to gather
            requirements and support the transition to internally developed
            software.
          </small>
          <small className="experience__bullet">
            Implemented normalized field mapping for ticket synchronization
            with external customer platforms and helped deploy the initial
            <span> 2 ticketing integrations</span>.
          </small>
          <small className="experience__bullet">
            Used Claude for AI-assisted implementation, SDLC automation, and
            architectural design.
          </small>
        </article>

        <article className="experience text-center mb-4">
          <span className="experience__index">REMOTE / 02</span>
          <div className="experience__avatar">
            <img
              src="https://sumo.co/wp-content/themes/sumotheme/images/sumo_logo_icon.svg"
              alt="Sumo Capital logo"
              className="img-fluid sumo"
            />
          </div>
          <h5 className="experience__name">
            Software Engineer Intern
          </h5>
          <h6 className="experience__name">
            Sumo Capital | Mar 2025 - Oct 2025
          </h6>
          <small className="experience__bullet">
            Built a high-performance C++ component for
            interfacing with the CME Reference Data API using 
            Boost.Asio, HTTP/2, and multithreading to process up to 
            <span> 100 concurrent requests</span>.
          </small>
          <small className="experience__bullet">
            Integrated C++ component into internal trading
            applications, improving accessibility of Futures 
            Definitions data by 
            <span> 24x</span> and efficiently handling queries that require up to 
            <span> 900,000+ API requests</span>.
          </small>
          <small className="experience__bullet">
            Optimized open source PyCapnp library,
            <span> fixed 3 core issues</span> to improve graceful 
            shutdowns and enable efficient multi-connection 
            handling on a single thread.
          </small>
          <small className="experience__bullet">
            Authored
            <span> 15-page paper</span> on PyCapnp modifications and 
            <span> 8-page paper</span> on message brokers, strengthening 
            team understanding of system design tradeoffs and third-party service integration.
          </small>
        </article>

        <article className="experience text-center mb-4">
          <span className="experience__index">REMOTE / 03</span>
          <h5 className="experience__name">
            Full-Stack Software Developer
          </h5>
          <h6 className="experience__name">
            Independent Contractor | Mar 2024 - Feb 2026
          </h6>
          <small className="experience__bullet">
            Primary client: Covalent Enterprises, LLC
          </small>
          <small className="experience__bullet">
            Engineered a full-stack web app (Classroom1b) with Bulma,
            Supabase, and Svelte to track student behavioral data; facilitated 
            <span> 6,000+ tasks</span> across
            <span> 2 schools</span> during a school year.
          </small>
          <small className="experience__bullet">
            Developed and deployed a QR-code tracking platform (BrilliantQR) handling
            <span> 1,600+ unique codes</span>, and supported field testing with ADL Delivery.
          </small>
          <small className="experience__bullet">
            Collaborated with a
            <span> 4-person development team</span> to design, build, and launch production applications.
          </small>
        </article>
      </div>

      <div className="section-heading-wrap leadership-heading">
        <p className="section-kicker">Crew leadership</p>
        <h2 className="section-heading">Leadership beyond the code.</h2>
      </div>
      <div className="container experiences__container">
        <article className="experience text-center mb-4">
          <span className="experience__index">USF / 01</span>
          <div className="experience__avatar">
            <img
              src={AiSociety_Logo}
              alt="AI Society Logo"
              className="img-fluid"
            />
          </div>
          <h5 className="experience__name">Vice President</h5>
          <h6 className="experience__name">
            AI Society at USF | Aug 2024 - Jan 2025
          </h6>
          <small className="experience__bullet">
            Managed internal communications for over
            <span> 150 members</span>, keeping all members informed of events, meetings, and key updates.
          </small>
          <small className="experience__bullet">
            Led and collaborated with
            <span> 27 officers</span>, effectively delegating responsibilities and ensuring all 
            efforts were aligned with the organization's strategic goals and objectives.
          </small>
          <small className="experience__bullet">
            Directed the organization in the President's absence, ensuring smooth operations and leadership continuity.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Experiences;
