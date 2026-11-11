import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading-wrap">
        <p className="section-kicker">02 / Equipment</p>
        <h2 className="section-heading">Tools of the trade.</h2>
        <p className="section-intro">
          A practical kit for building, connecting, and shipping dependable software.
        </p>
      </div>

      <div className="container skills__container">
        {/* Languages */}
        <div className="p-2">
          <div className="card skills__card h-100 p-4">
            <h3 className="text-center mb-4">Languages</h3>
            <div className="row row-cols-2">
              {[
                "Java",
                "JavaScript",
                "TypeScript",
                "C / C++",
                "Python",
                "HTML",
                "CSS",
                "SQL",
                "GraphQL",
              ].map((lang) => (
                <article key={lang} className="skill">
                  <FontAwesomeIcon icon={faCircleCheck} className="icons" />
                  <h6 className="mb-0">{lang}</h6>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Developer Tools */}
        <div className="p-2">
          <div className="card skills__card h-100 p-4">
            <h3 className="text-center mb-4">Developer Tools</h3>
            <div className="row row-cols-2">
              {[
                "Git",
                "Docker",
                "Jira",
                "Firebase",
                "Supabase",
                "PostgreSQL",
                "Google Cloud Platform",
                "Azure",
              ].map((tool) => (
                <article key={tool} className="skill col">
                  <FontAwesomeIcon icon={faCircleCheck} className="icons" />
                  <h6 className="mb-0">{tool}</h6>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Libraries/Frameworks */}
        <div className="p-2">
          <div className="card skills__card h-100 p-4">
            <h3 className="text-center mb-4">Libraries/Frameworks</h3>
            <div className="row row-cols-2">
              {[
                "Spring Boot",
                "React.js",
                "Node.js",
                "Express.js",
                "Svelte",
                "Bulma",
                "React Native",
              ].map((lib) => (
                <article key={lib} className="skill col">
                  <FontAwesomeIcon icon={faCircleCheck} className="icons" />
                  <h6 className="mb-0">{lib}</h6>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
