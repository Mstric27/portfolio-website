import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container d-flex flex-column align-items-center">
        <a href="#top" className="footer__logo">
          MICHAEL STRICKLAND
        </a>

        <div className="footer__socials d-flex gap-3 mb-3">
          <a
            href="https://www.linkedin.com/in/michael-patrick-strickland"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Mstric27"
            aria-label="GitHub profile"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="footer__copyright">
          <small>© {new Date().getFullYear()} Michael Strickland. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
