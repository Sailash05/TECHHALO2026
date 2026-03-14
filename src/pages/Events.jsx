import { useState } from "react";
import Navbar from "../components/Navbar";
import CursorTrail from "../components/CursorTrail";
import SpaceBackground from "../components/SpaceBackground";

export default function EventsPage(){

const [selectedEvent,setSelectedEvent] = useState(null)

const technical = [
{
name:"Brain & Buzz",
details:[
"Team Size: 2 Members",
"Riddle Rush – Solve logical riddles",
"AI Image Decode – Identify objects",
"Truth Tracker – Find correct statements"
]
},
{
name:"Paper Presentation",
details:[
"Team Size: 2 Members",
"Present innovative ideas",
"PPT allowed",
"Judged on innovation"
]
},
{
name:"Prompt Engineering",
details:[
"Team Size: Individual",
"Create effective AI prompts",
"Generate outputs using AI tools",
"Judged on creativity"
]
},
{
name:"Code Debugging",
details:[
"Team Size: Individual",
"Fix bugs in programs",
"Languages: C, Python, Java",
"Judged by speed"
]
}
]

const nonTechnical = [
{
name:"Bioscope",
details:[
"Team Size: 2 Members",
"Identify movies from clues",
"Entertainment knowledge",
"Fastest answers win"
]
},
{
name:"Connexion",
details:[
"Team Size: 2 Members",
"Find connection between clues",
"Logical thinking required",
"Multiple rounds"
]
}
]

const submission = [
{
name:"Photography / Videography",
details:[
"Team Size: Individual / Team",
"Capture photos based on theme",
"Focus on originality",
"Judged on creativity"
]
},
{
name:"Poster Making",
details:[
"Team Size: Individual",
"Create attractive posters",
"Express ideas visually",
"Judged on creativity"
]
}
]

return(

<div className="events-page">

<Navbar/>
<CursorTrail/>
<SpaceBackground/>

{/* TECHNICAL */}

<h1 className="event-section-title">TECHNICAL EVENTS</h1>

<div className="events-grid">

{technical.map((event,index)=>(

<div key={index} className="event-card">

<h2>{event.name}</h2>

<button
className="instruction-btn"
onClick={()=>setSelectedEvent(event)}

>

Instructions </button>

</div>
))}

</div>

{/* NON TECHNICAL */}

<h1 className="event-section-title">NON TECHNICAL EVENTS</h1>

<div className="events-grid">

{nonTechnical.map((event,index)=>(

<div key={index} className="event-card">

<h2>{event.name}</h2>

<button
className="instruction-btn"
onClick={()=>setSelectedEvent(event)}

>

Instructions </button>

</div>
))}

</div>

{/* SUBMISSION */}

<h1 className="event-section-title">SUBMISSION EVENTS</h1>

<div className="events-grid">

{submission.map((event,index)=>(

<div key={index} className="event-card">

<h2>{event.name}</h2>

<button
className="instruction-btn"
onClick={()=>setSelectedEvent(event)}

>

Instructions </button>

</div>
))}

</div>

{/* POPUP */}

{selectedEvent && (

<div className="popup-overlay">

<div className="popup">

<h2>{selectedEvent.name}</h2>

<ul>
{selectedEvent.details.map((item,i)=>(
<li key={i}>{item}</li>
))}
</ul>

<button
className="close-btn"
onClick={()=>setSelectedEvent(null)}

>

Close </button>

</div>

</div>

)}

</div>

)

}
