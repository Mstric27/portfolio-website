import "./about.css";
import Headshot from "../../assets/myself.jpg";

const About = () => {
  return (
    <section id="about" className="py-5">
      <h2 className="text-primary text-center mb-5">About Me</h2>

      <div className="container">
        <div className="row align-items-center g-5">
          {/* Profile image */}
          <div className="col-12 col-md-5">
            <div className="about__me mx-auto">
              <div className="about__me-image">
                <img src={Headshot} alt="About" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-12 col-md-7">
            <h4>
              Hello! I am a recent Summa Cum Laude graduate from the University 
              of South Florida with a B.S. in Computer Science, specializing 
              in full-stack development with a strong focus on back-end engineering. 
            </h4>
            <h4 className="mt-4">
              I have experience building scalable web platforms, high-performance 
              C++ applications, and mobile solutions across finance, education, and 
              logistics. I enjoy tackling complex technical challenges, optimizing 
              performance, and delivering impactful, user-focused software.
            </h4>
            <h4 className="mt-4">
              Beyond coding, I'm an avid board game enthusiast with a 
              special love for space-themed, area control, and 4X strategy 
              games. I often recommend Dune: Imperium to newcomers looking 
              for a rich, thematic experience, while for those deeply invested 
              in the hobby, nothing compares to the epic, eight-hour space 
              opera of Twilight Imperium: Fourth Edition.
            </h4>

            {/* Contact */}
            <div className="mt-4">
              <a href="#contact" className="btn btn-primary">
                Contact Me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
