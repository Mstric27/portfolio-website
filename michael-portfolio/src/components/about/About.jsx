import "./about.css";
import Headshot from "../../assets/myself.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-heading-wrap">
        <p className="section-kicker">01 / Field notes</p>
        <h2 className="section-heading">A little about the navigator.</h2>
        <p className="section-intro">
          The person behind the pull requests, prototypes, and very long board-game nights.
        </p>
      </div>

      <div className="container about__container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-md-5">
            <div className="about__portrait-wrap">
              <div className="about__me-image">
                <img src={Headshot} alt="Michael Strickland" className="img-fluid" />
              </div>
              <span className="about__portrait-index">FIELD PORTRAIT · 01</span>
              <div className="about__seal" aria-hidden="true">
                <span>MS</span>
                <small>USF · 2025</small>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7 about__copy">
            <p className="about__lead">
              Hello! I'm a software engineer and Summa Cum Laude graduate of
              the University of South Florida, where I earned a
              B.S. in Computer Science with a 3.91 GPA. I build reliable
              full-stack software, with experience in backend engineering,
              system design, integrations, and AI-assisted development.
            </p>
            <p>
              Since March 2026, I've been an Associate Software Engineer at
              ReliaQuest. I lead foundational work on reusable access-control
              software, co-led a six-person team through an internal ServiceNow
              migration, and helped deliver customer ticketing integrations.
              I also use AI-assisted development to streamline implementation
              and SDLC tasks while focusing on system-level engineering.
            </p>
            <p>
              Before ReliaQuest, I was a remote Software Engineer Intern at
              Sumo Capital from March to October 2025, building high-performance
              C++ software for financial data systems. I also worked as an
              independent contractor from March 2024 to February 2026, with
              Covalent Enterprises, LLC as my primary client, delivering
              software for education and logistics.
            </p>
            <p>
              Beyond software engineering, I'm an avid board game enthusiast
              with a special love for space-themed, area-control, and 4X 
              strategy games. I often recommend Dune: Imperium to newcomers 
              looking for a rich, thematic experience, while for those deeply 
              invested in the hobby, nothing compares to the epic, eight-hour 
              space opera of Twilight Imperium: Fourth Edition.
            </p>

            <div className="about__facts" aria-label="Quick facts">
              <span><strong>3.91</strong> GPA</span>
              <span><strong>Summa</strong> Cum Laude</span>
            </div>
            <div className="about__actions">
              <a href="#contact" className="btn btn-primary">
                Send a signal <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
