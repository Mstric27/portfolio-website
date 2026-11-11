import { useEffect, useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const destinations = [
  { id: "about", name: "Field notes", number: "01", x: 82, y: 324 },
  { id: "skills", name: "Equipment", number: "02", x: 176, y: 222 },
  { id: "experiences", name: "Expeditions", number: "03", x: 274, y: 292 },
  { id: "portfolio", name: "Artifacts", number: "04", x: 384, y: 164 },
  { id: "contact", name: "Make contact", number: "05", x: 448, y: 245 },
];

const getDestinationFromHash = () => {
  const hashDestination = window.location.hash.slice(1);
  return destinations.some(({ id }) => id === hashDestination)
    ? hashDestination
    : "about";
};

const Header = () => {
  const [activeDestination, setActiveDestination] = useState(getDestinationFromHash);

  useEffect(() => {
    const syncDestinationToHash = () => {
      setActiveDestination(getDestinationFromHash());
    };

    window.addEventListener("hashchange", syncDestinationToHash);
    return () => window.removeEventListener("hashchange", syncDestinationToHash);
  }, []);

  const activeName =
    destinations.find(({ id }) => id === activeDestination)?.name ?? "Field notes";

  return (
    <header id="top" className="hero">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="site-nav__brand" href="#top" aria-label="Michael Strickland, home">
          <svg
            className="brand-mark"
            viewBox="0 0 80 80"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="40" cy="40" r="38" />
            <text x="40" y="36" textAnchor="middle" dominantBaseline="central">M</text>
          </svg>
          <span>MICHAEL STRICKLAND</span>
        </a>
        <div className="site-nav__links">
          {destinations.map(({ id, name, number }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeDestination === id ? "is-active" : ""}
              aria-current={activeDestination === id ? "location" : undefined}
            >
              <span>{number}</span> {name}
            </a>
          ))}
        </div>
      </nav>

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="signal-dot" /> Open to the next horizon
          </p>
          <h1>
            Michael
            <br />
            <em>Strickland</em>
          </h1>
          <p className="hero__role">Software engineer &amp; systems thinker</p>
          <p className="hero__summary">
            I build dependable software for complex worlds—from real-time
            financial data to the tools teams rely on every day.
          </p>
          <div className="hero__actions">
            <a
              href="https://drive.google.com/file/d/1mkXQavgLeT-yYgRuyx6ZHBhfBeyefGc2/view?usp=sharing"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> View resume
            </a>
            <a href="#portfolio" className="hero__text-link">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero__coordinates" aria-label="Portfolio coordinates">
            <span className="coordinate-status">FIELD LOG · 2026</span>
            <span>ROUTE OPEN</span>
          </div>
        </div>

        <div className="atlas" aria-label="Interactive portfolio map">
          <div className="atlas__topline">
            <span className="eyebrow">Personal field atlas</span>
            <span className="atlas__edition">NO. 027 · FIELD ATLAS</span>
          </div>
          <div className="atlas__map">
            <svg
              className="atlas__svg"
              viewBox="0 0 560 430"
              role="img"
              aria-labelledby="atlas-title atlas-description"
            >
              <title id="atlas-title">A map of Michael's portfolio</title>
              <desc id="atlas-description">
                Five marked destinations link to the about, skills, experience,
                projects, and contact sections.
              </desc>
              <defs>
                <pattern id="atlas-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                  <path d="M 36 0 L 0 0 0 36" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.13" />
                </pattern>
                <radialGradient id="atlas-glow">
                  <stop offset="0%" stopColor="#d38a4e" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#d38a4e" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="560" height="430" fill="url(#atlas-grid)" />
              <ellipse cx="288" cy="215" rx="226" ry="187" fill="url(#atlas-glow)" />
              <g className="atlas__contours" fill="none">
                <path d="M-20 101C57 32 118 48 171 87s114 70 167 20 112-66 242-8" />
                <path d="M-24 116C53 47 116 61 167 101s111 69 168 19 116-62 244-1" />
                <path d="M-28 132C49 63 113 76 163 115s108 69 168 20 120-58 248 7" />
                <path d="M-34 151C44 81 107 92 157 131s107 67 169 20 124-51 250 17" />
                <path d="M-38 172C37 102 101 110 151 148s106 65 169 20 129-42 252 28" />
                <path d="M-43 195C30 124 94 130 145 167s105 61 169 19 133-33 254 38" />
                <path d="M-49 219C23 148 87 151 138 187s104 58 169 17 137-23 258 49" />
                <path d="M-55 244C15 173 79 174 130 208s103 54 169 14 142-11 262 62" />
                <path d="M-61 271C6 200 71 198 122 230s101 50 169 12 147 1 266 75" />
                <path d="M-66 299C-1 228 63 224 114 254s100 46 168 9 152 14 269 88" />
                <path d="M-70 330C-7 259 54 252 104 280s99 42 167 6 157 28 271 101" />
                <path d="M-75 361C-13 290 47 281 96 306s98 37 166 4 161 42 274 113" />
                <path d="M75-26C117 26 117 66 91 107S45 194 83 234s50 106 9 220" />
                <path d="M93-31C135 21 135 62 109 102s-45 87-7 127 51 108 10 227" />
                <path d="M112-36C153 15 153 57 128 97s-45 85-8 125 53 110 13 230" />
                <path d="M423-32C388 22 389 66 419 106s53 85 19 127-47 104-2 225" />
                <path d="M443-36C408 20 410 63 440 104s54 85 20 127-46 105 0 226" />
              </g>
              <g className="atlas__landmark" aria-hidden="true">
                <circle cx="305" cy="94" r="2" />
                <circle cx="327" cy="83" r="1.5" />
                <circle cx="289" cy="79" r="1.5" />
                <path d="M302 112l7-12 7 12z" />
                <text x="321" y="109">HIGH GROUND</text>
                <text x="24" y="388">SCALE 1 : 01 LIFE</text>
                <text x="391" y="389">FIELD GRID / 027</text>
              </g>
              <path className="atlas__route" d="M82 324C116 290 142 246 176 222s62 71 98 70 73-102 110-128 64 62 64 81" />
              {destinations.map(({ id, name, number, x, y }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`atlas__pin ${activeDestination === id ? "is-active" : ""}`}
                  aria-label={`Go to ${name}`}
                  aria-current={activeDestination === id ? "location" : undefined}
                >
                  <circle className="atlas__pin-halo" cx={x} cy={y} r="18" />
                  <circle className="atlas__pin-ring" cx={x} cy={y} r="9" />
                  <circle className="atlas__pin-core" cx={x} cy={y} r="3" />
                  <text
                    x={x + 15}
                    y={y - 11}
                  >
                    {number} / {name.toUpperCase()}
                  </text>
                  <rect
                    className="atlas__pin-target"
                    x={x - 14}
                    y={y - 25}
                    width="112"
                    height="40"
                    rx="14"
                  />
                </a>
              ))}
              <g className="atlas__compass" aria-hidden="true" transform="translate(504 58)">
                <circle r="20" />
                <path d="M0-15L4 0 0 15-4 0z" />
                <text x="0" y="-26" textAnchor="middle">N</text>
              </g>
            </svg>
          </div>
          <div className="atlas__bottomline">
            <span><span className="atlas__live-dot" /> CURRENT SECTOR: {activeName.toUpperCase()}</span>
            <span>SELECT A MARKER TO TRAVEL</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
