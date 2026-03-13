import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CursorTrail from "../components/CursorTrail";
import SpaceBackground from "../components/SpaceBackground";
import SpaceParallax from "../components/SpaceParallax";
import Navbar from "../components/Navbar";

export default function Home(){

const eventDate = new Date("March 26, 2026 09:00:00").getTime();

const [time,setTime]=useState({
  days:0,
  hours:0,
  minutes:0,
  seconds:0
});

const [eventStarted,setEventStarted] = useState(false);

useEffect(()=>{

const timer=setInterval(()=>{

const now=new Date().getTime();
const distance=eventDate-now;

if(distance <= 0){

clearInterval(timer);
setEventStarted(true);

setTime({
days:0,
hours:0,
minutes:0,
seconds:0
});

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
📅 March 26, 2026
</p>

{/* Show countdown before event */}
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

{/* Section after countdown ends */}

{eventStarted && (

<div className="event-live">

<h2>🚀 TECHHALO'26 is LIVE!</h2>

<p>
Welcome to the biggest tech event of the year.
Explore events, participate and enjoy!
</p>


</div>

)}

<div className="buttons">

<Link to="/events">
<button>Explore Events</button>
</Link>

<Link to="/register">
<button>Register</button>
</Link>

</div>

</div>

</div>

);

}