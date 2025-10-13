import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <h2 className="text-primary text-center mb-3">My Technical Skills</h2>

      <div className="container skills__container">
        {/* Languages */}
        <div className="p-2">
          <div className="card skills__card h-100 p-4">
            <h3 className="text-center mb-4">Languages</h3>
            <div className="row row-cols-2">
              {[
                "Javascript",
                "TypeScript",
                "C/C++",
                "Python",
                "HMTL",
                "CSS",
                "COBOL",
                "SQL",
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
                "Firebase",
                "Supabase",
                "Google Cloud Platform",
                "Jira",
                "Docker",
                "Azure"
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
                "ReactJS",
                "NodeJS",
                "ExpressJS",
                "Svelte",
                "Bulma",
                "React Native",
                "PostgreSQL",
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
