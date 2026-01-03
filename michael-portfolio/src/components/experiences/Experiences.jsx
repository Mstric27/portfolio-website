import "./experiences.css";
import AiSociety_Logo from "../../assets/society_of_computer_scientists_scs_logo.png"

const Experiences = () => {
  return (
    <section id="experiences" className="py-5">
      <h2 className="experiences__category mb-3">My Work Experience</h2>

      <div className="container experiences__container">
        <article className="experience text-center mb-4">
          <div className="experience__avatar">
            <img
              src="https://sumo.co/wp-content/themes/sumotheme/images/sumo_logo_icon.svg"
              alt="Sumo Capital logo"
              className="img-fluid sumo"
            />
          </div>
          <h5 className="experience__name">Sumo Capital</h5>
          <h6 className="experience__name">
            Software Engineer Intern | Mar 2025 - Oct 2025
          </h6>
          <small className="experience__bullet">
            • Built a high-performance C++ component for 
            interfacing with the CME Reference Data API using 
            Boost.Asio, HTTP/2, and multithreading to process up to 
            <span> 100 concurrent requests</span>.
          </small>
          <small className="experience__bullet">
            • Integrated C++ component into internal trading 
            applications, improving accessibility of Futures 
            Definitions data by 
            <span> 24x</span> and efficiently handling queries that require up to 
            <span> 900,000+ API requests</span>.
          </small>
          <small className="experience__bullet">
            •	Optimized open source PyCapnp library, 
            <span> fixed 3 core issues</span> to improve graceful 
            shutdowns and enable efficient multi-connection 
            handling on a single thread.
          </small>
          <small className="experience__bullet">
            • Authored 
            <span> 15-page paper</span> on PyCapnp modifications and 
            <span> 8-page paper</span> on message brokers, strengthening 
            team understanding of system design tradeoffs and third-party service integration.
          </small>
        </article>

        <article className="experience text-center mb-4">
          <h5 className="experience__name">Covalent Enterprises, LLC</h5>
          <h6 className="experience__name">
            Full-Stack Engineer | Mar 2024 - Present
          </h6>
          <small className="experience__bullet">
            •	Engineered a full-stack web app (Classroom1b) with Bulma, 
            Supabase, and Svelte to track student behavioral data; facilitated 
            <span> 6,000+ tasks</span> since Feb 2025 and 
            <span> utilized by 2 schools</span>.
          </small>
          <small className="experience__bullet">
            •	Developed and deployed a QR-code tracking platform (BrilliantQR) handling 
            <span> 1,600+ unique codes</span>, in active field testing with ADL Delivery 
            to streamline marketing and sales strategies.
          </small>
          <small className="experience__bullet">
            •	Collaborated with a 
            <span> 4-person development team</span> to design, build, and launch production-ready 
            applications, ensuring scalability, data security, and real-world adoption.
          </small>
        </article>
      </div>

      <h2 className="experiences__category">My Leadership Experience</h2>
      <div className="container experiences__container">
        <article className="experience text-center mb-4">
          <div className="experience__avatar">
            <img
              src={AiSociety_Logo}
              alt="AI Society Logo"
              className="img-fluid"
            />
          </div>
          <h5 className="experience__name">AI Society at USF</h5>
          <h6 className="experience__name">Vice President | Aug 2024 - Jan 2025</h6>
          <small className="experience__bullet">
            •	Managed internal communications for over 
            <span> 150 members</span>, keeping all members informed of events, meetings, and key updates.
          </small>
          <small className="experience__bullet">
            •	Led and collaborated with 
            <span> 27 officers</span>, effectively delegating responsibilities and ensuring all 
            efforts were aligned with the organization's strategic goals and objectives.
          </small>
          <small className="experience__bullet">
            •	Directed the organization in the President's absence, ensuring smooth operations and leadership continuity.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Experiences;
