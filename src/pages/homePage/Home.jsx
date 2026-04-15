import { useEffect, useState } from "react";
import CursorTrail from "../../components/CursorTrail";
import SpaceBackground from "../../components/SpaceBackground";
import SpaceParallax from "../../components/SpaceParallax";
import Navbar from "../../components/Navbar";
import './homePage.css'
import Footer from "../../components/Footer";
import logo from '../../assets/clg-logo.jpeg';

export default function Home(){

    const eventDate = new Date("April 16, 2026 9:00:00").getTime();

    // 🔥 CLOSE AT 11:59 PM
    const deadline = new Date("April 15, 2026 23:55:59").getTime();

    const [time,setTime]=useState({
        days:0,
        hours:0,
        minutes:0,
        seconds:0
    });

    const [eventStarted,setEventStarted] = useState(false);
    const [isClosed,setIsClosed] = useState(false);

    useEffect(()=>{
        const timer=setInterval(()=>{
            const now=new Date().getTime();

            // 🔥 REGISTRATION CLOSE
            if(now >= deadline){
                setIsClosed(true);
            }

            const distance=eventDate-now;

            if(distance <= 0){
                clearInterval(timer);
                setEventStarted(true);
                setTime({ days:0, hours:0, minutes:0, seconds:0 });
                return;
            }

            const days=Math.floor(distance/(1000*60*60*24));
            const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
            const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
            const seconds=Math.floor((distance%(1000*60))/1000);

            setTime({days,hours,minutes,seconds});

        },1000);

        return ()=>clearInterval(timer);
    },[]);

    return(

    <div className="home">
        <SpaceParallax/>
        <SpaceBackground/>
        <CursorTrail/>
        <Navbar />

        <div className="hero">

            <div className="college-container">
                <img src={logo} alt="College Logo" className="college-logo"/>
                <h2 className="college">
                    Anna University Regional Campus-Tirunelveli
                </h2>
            </div>

            <p className="department">Department of Computer Science and Engineering</p>
            <p className="presents">TECH SOCIETY PRESENTS</p>

            <h1 className="event-name">TECHHALO'26</h1>

            {/* DATE */}
            <p className="event-date">
                <span className="old-date">April 15, 2026</span>
                <span className="new-date">April 16, 2026 • 9:00 AM</span>
            </p>

            {/* REGISTRATION STATUS */}
            {!isClosed ? (
                <p className="registration-status registration-open">
                    ⚠️ Registration closes today (15.04.2026) at 11:59 PM
                </p>
            ) : (
                <p className="registration-status registration-closed">
                    ❌ Registration Closed
                </p>
            )}

            {/* COUNTDOWN */}
            {!eventStarted && (
            <div className="countdown">
                <div>
                    <h3>{time.days}</h3>
                    <span>Days</span>
                </div>
                <div>
                    <h3>{time.hours}</h3>
                    <span>Hours</span>
                </div>
                <div>
                    <h3>{time.minutes}</h3>
                    <span>Minutes</span>
                </div>
                <div>
                    <h3>{time.seconds}</h3>
                    <span>Seconds</span>
                </div>
            </div>
            )}

            {/* EVENT LIVE */}
            {eventStarted && (
                <div className="event-live">
                    <h2>🚀 TECHHALO'26 is LIVE!</h2>
                    <p>
                        Welcome to the biggest tech event of the year.
                        Explore events, participate and enjoy!
                    </p>
                </div>
            )}

        </div>

        <Footer />
    </div>
    );
}
