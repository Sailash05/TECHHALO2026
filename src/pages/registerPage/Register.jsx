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
                    Anna University Regional Campus-Tirunelveli
                    <br/>
                    <br />
                    Department of Computer Science and Engineering
                </p>
                <p className="register-details">
                    TECHHALO'26 is a Technical Symposium designed to explore creativity,
                    innovation, and technical knowledge through various technical and
                    non-technical events.
                </p>
                <div className="register-meta">
                    <p>Event Date : March 26, 2026</p>
                    <p>💰 Registration Fee : ₹200 (per head)</p>
                </div>
                <div className="register-meta">
<p>All participants must fill out and submit the registration form.</p>
<br />
<p>After submitting the registration form, the Team Leader must visit the official website and apply for the events selected by the team.</p>
<br />
<p>Only teams whose Team Leader successfully completes the event application through the official website will be eligible to participate in the events with their team.</p>
 </div>

                <button className="register-btn" onClick={()=>window.open("https://forms.gle/rCArNAc54fnAbTqj8","_blank")} >
                    Register Now
                </button>
            </div>
            <Footer />
        </div>
    )
}