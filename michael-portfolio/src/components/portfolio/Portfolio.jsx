import "./portfolio.css";
import IMAGE1 from "../../assets/myself.jpg";

const data = [
  {
    id: 1,
    image: IMAGE1,
    title: "BitBox - Board Game Identifier",
    github: "https://github.com/Mstric27/BitBox",
    demo: "https://www.youtube.com/watch?v=NcveBjLxhbw",
  },
  {
    id: 2,
    image: IMAGE1,
    title: "Classroom1b",
    github: "",
    demo: "",
  },
  {
    id: 2,
    image: IMAGE1,
    title: "BrilliantQR",
    github: "",
    demo: "",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5">
      <h2 className="text-primary text-center mb-5">My Recent Projects</h2>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {data.map(({ id, image, title, github, demo }) => (
            <div key={id} className="col">
              <div className="card portfolio__item h-100">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <div className="d-flex gap-2">
                    <a
                      href={github}
                      className="btn btn-outline-primary btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={demo}
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
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
