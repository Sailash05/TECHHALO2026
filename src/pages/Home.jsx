import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CursorTrail from "../components/CursorTrail";
import SpaceBackground from "../components/SpaceBackground";
import SpaceParallax from "../components/SpaceParallax";
import Navbar from "../components/Navbar";

export default function Home(){

const eventDate = new Date("March 26, 2026 09:00:00").getTime();
const [time,setTime]=useState({});

useEffect(()=>{

const timer=setInterval(()=>{

const now=new Date().getTime();
const distance=eventDate-now;

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

{/* Main Content */}

<div className="hero">

<h2 className="college">
Anna University Regional Campus Tirunelveli
</h2>

<p className="dept">
Department of Computer Science and Engineering
</p>

<p className="presents">
PRESENTS
</p>

<h1 className="event-name">
TECHHALO'26
</h1>

<p className="event-date">
📅March 26, 2026
</p>

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

<div className="buttons">

<Link to="/events">
<button>Explore Events</button>
</Link>
<Link to="/register">
<button>Register</button>
</Link>
<button>Coordinators</button>

</div>

</div>
{/* Robot Assistant */}


</div>

);
}