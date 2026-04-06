import { useRef } from "react";
import SpaceBackground from "../../components/SpaceBackground";
import CursorTrail from "../../components/CursorTrail";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./sponsorsPage.css";

const SponsorsPage = () => {

  const cardRef = useRef(null);

  function handleMove(e){
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function resetTilt(){
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div className="sponsors-page">

      <CursorTrail/>
      <SpaceBackground/>
      <Navbar/>

      <div 
        ref={cardRef}
        className="sponsors-container"
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
      >

        <h1 className="sponsors-title">SPONSOR TECHHALO'26</h1>
        <div className="sponsors-divider"></div>

        <p className="sponsors-desc">
          TECHHALO'26 is a technical symposium bringing together passionate
          developers, innovators, and future engineers.
          <br /><br />
          We invite you to partner with us and showcase your brand to a
          vibrant student community 🚀
        </p>

        {/* BENEFITS */}
        <div className="sponsor-section">

          <ul className="sponsor-list">
            <li>Reach 500+ engineering students</li>
            <li>Promote your brand across campus & online platforms</li>
            <li>Engage directly with emerging tech talent</li>
            <li>Increase visibility among future professionals</li>
          </ul>

        </div>

        {/* CTA */}
        <div className="sponsor-contact">

          <p>
            Interested in sponsoring TECHHALO'26?
            Let’s collaborate and create impact together.
          </p>

          <button 
            className="sponsor-btn"
            onClick={() => window.open("https://forms.gle/tGEk5xYDWxwAnbmG8")}
          >
            Sponsor Now
          </button>

        </div>

      </div>

      <Footer/>
    </div>
  );
};

export default SponsorsPage;