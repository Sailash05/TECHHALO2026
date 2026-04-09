import { useRef } from "react";
import SpaceBackground from "../../components/SpaceBackground";
import CursorTrail from "../../components/CursorTrail";
import Navbar from "../../components/Navbar";
import './registerPage.css'
import Footer from "../../components/Footer";

export default function Register(){

    const cardRef = useRef(null);
    
    function handleMove(e){
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -(y - centerY) / 18;
        const rotateY = (x - centerX) / 18;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function resetTilt(){
        cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }

    return(

        <div className="register-page">

            <CursorTrail/>
            <SpaceBackground/>
            <Navbar />

            {/* REGISTER CARD */}

            <div ref={cardRef} className="register-container" onMouseMove={handleMove} onMouseLeave={resetTilt} >

                <h1 className="register-title">TECHHALO'26</h1>
                <div className="register-divider"></div>
                <p className="register-info">
Anna University Regional Campus – Tirunelveli  
<br /><br />
Department of Computer Science and Engineering
</p>

<p className="register-details">
TECHHALO'26 is a Technical Symposium designed to explore creativity,
innovation, and technical knowledge through various technical and
non-technical events.
</p>

<div className="register-meta">

<span className="old-date">April 15, 2026</span>
<span className="new-date">April 16, 2026 9.00 A.M</span>
<p><strong>Registration Fee:</strong> ₹200 per head</p>

<br />

<ul className="register-list">

  <li>All participants must fill out and submit the registration form.</li>

  <li>After submitting the registration form, the Team Leader must visit the official website and apply for the selected events.</li>

  <li>Only teams whose Team Leader successfully completes the event application will be eligible to participate.</li>

    <li>Participants must visit the official website and register separately for individual events.</li>
    
</ul>



</div>

                <button className="register-btn" onClick={()=>window.open("https://forms.gle/akxn31VZ7v4gdfaz6","_blank")} >
                    Register Now
                </button>
            </div>
            <Footer />
        </div>
    )
}
