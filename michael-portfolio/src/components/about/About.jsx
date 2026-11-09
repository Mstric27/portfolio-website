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
              Hello! I am a software engineer and Summa Cum Laude graduate of the 
              University of South Florida with a B.S. in Computer Science. I specialize 
              in full-stack development, with a strong focus on back-end engineering, 
              system architecture, and AI-driven software development. 
            </h4>
            <h4 className="mt-4">
              Currently, I'm an Associate Software Engineer at ReliaQuest, 
              where I build features for an enterprise security operations 
              platform using Java, Spring Boot, JavaScript, and React. I 
              incorporate AI-assisted development into my daily workflow, 
              leveraging tools like Claude to accelerate implementation, 
              automate software development processes, and dedicate more 
              time to architectural decisions and complex engineering challenges.
            </h4>
            <h4 className="mt-4">
              My previous experience includes building high-performance 
              C++ applications for financial data systems at Sumo Capital 
              and developing full-stack applications as an independent 
              contractor across education and logistics. I enjoy
              working across the stack, improving system performance, 
              and building reliable software that solves real-world problems.
            </h4>
            <h4 className="mt-4">
              I'm currently exploring software engineering opportunities in Missouri
              and am open to relocating to the area.
            </h4>
            <h4 className="mt-4">
              Beyond software engineering, I'm an avid board game enthusiast
              with a special love for space-themed, area-control, and 4X 
              strategy games. I often recommend Dune: Imperium to newcomers 
              looking for a rich, thematic experience, while for those deeply 
              invested in the hobby, nothing compares to the epic, eight-hour 
              space opera of Twilight Imperium: Fourth Edition.
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
