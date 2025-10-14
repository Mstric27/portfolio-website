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
    id: 2,
    image: BrilliantQR_Thumbnail,
    title: "BrilliantQR",
    github: "",
    demo: "https://youtu.be/Dpz9w_azVqQ",
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
                    {github && github.trim() !== "" && (
                      <a
                        href={github}
                        className="btn btn-outline-primary btn-sm"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    <a
                      href={demo}
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
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
