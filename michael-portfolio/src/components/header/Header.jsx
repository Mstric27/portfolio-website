import './header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-8">
            <h5 className="text-secondary">Hello I'm</h5>
            <h1 className="fw-bold">Michael Strickland</h1>
            <p className="text-light" contentEditable="true">
              Software Engineer
            </p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <a
                href="https://drive.google.com/file/d/1mkXQavgLeT-yYgRuyx6ZHBhfBeyefGc2/view?usp=sharing"
                download
                className="btn"
                target="_blank"
              >
                <FontAwesomeIcon icon={faDownload} /> Resume
              </a>
              <a href="#contact" className="btn btn-primary">
                Contact Me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
