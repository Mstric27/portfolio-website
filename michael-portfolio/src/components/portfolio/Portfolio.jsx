import "./portfolio.css";
import BitBox_Thumbnail from "../../assets/bitbox.png"
import Classroom1b_Thumbnail from "../../assets/classroom1b.png"
import BrilliantQR_Thumbnail from "../../assets/brilliantqr.png"

const data = [
  {
    id: 1,
    image: BitBox_Thumbnail,
    title: "BitBox - Board Game Identifier",
    github: "https://github.com/Mstric27/BitBox",
    demo: "https://www.youtube.com/watch?v=NcveBjLxhbw",
  },
  {
    id: 2,
    image: Classroom1b_Thumbnail,
    title: "Classroom1b",
    github: "",
    demo: "https://youtu.be/OYbQwuoWabE",
  },
  {
    id: 3,
    image: BrilliantQR_Thumbnail,
    title: "BrilliantQR",
    github: "",
    demo: "https://youtu.be/Dpz9w_azVqQ",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-heading-wrap">
        <p className="section-kicker">04 / Artifacts</p>
        <h2 className="section-heading">Things made during the journey.</h2>
        <p className="section-intro">
          A few real-world builds, each with a different problem to solve.
        </p>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {data.map(({ id, image, title, github, demo }) => (
            <div key={id} className="col">
              <div className="card portfolio__item h-100">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                  <span className="portfolio__image-index">FIELD ARTIFACT / 0{id}</span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="portfolio__description">
                    {title === "Classroom1b"
                      ? "A classroom companion for recording student behavioral data and supporting educators."
                      : title === "BrilliantQR"
                        ? "A QR-code tracking platform built to help a delivery team connect campaigns with real-world engagement."
                        : "A board-game identifier that turns a camera into a quick way to recognize games from the collection."}
                  </p>
                  <div className="d-flex gap-2">
                    {github && github.trim() !== "" && (
                      <a
                        href={github}
                        className="btn btn-outline-primary btn-sm"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source
                      </a>
                    )}
                    <a
                      href={demo}
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
