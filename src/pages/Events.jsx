import { useState } from "react";
import { Link } from "react-router-dom";
import SpaceBackground from "../components/SpaceBackground";
import CursorTrail from "../components/CursorTrail";
import Navbar from "../components/Navbar";

export default function Events(){

const [showInstructions, setShowInstructions] = useState(false);

return(

<div className="events-page">

<CursorTrail/>
<SpaceBackground/>

{/* Top Right Anchors */}

<Navbar />


{/* TECHNICAL EVENTS */}

<h1 className="event-section-title">TECHNICAL EVENTS</h1>

<div className="events-grid">

<div className="event-card">
<h2>Brain & Buzz</h2>
<p className="team">Team Size: 2 – 3 Members</p>
<ul>
<li>Riddle Rush – Solve technical & logical riddles</li>
<li>AI Image Decode – Identify technical objects</li>
<li>Truth Tracker – Find correct statements</li>
</ul>
</div>

<div className="event-card">
<h2>Paper Presentation</h2>
<p className="team">Team Size: 1 – 3 Members</p>
<ul>
<li>Present innovative technical ideas</li>
<li>PPT presentation allowed</li>
<li>Judged on innovation & clarity</li>
</ul>
</div>

<div className="event-card">
<h2>Prompt Engineering</h2>
<p className="team">Team Size: Individual</p>
<ul>
<li>Create effective AI prompts</li>
<li>Generate outputs using AI tools</li>
<li>Judged on creativity</li>
</ul>
</div>

<div className="event-card">
<h2>Code Debugging</h2>
<p className="team">Team Size: Individual</p>
<ul>
<li>Fix bugs in given programs</li>
<li>Languages: C, Python, Java</li>
<li>Judged by speed</li>
</ul>
</div>

</div>


{/* NON TECHNICAL EVENTS */}

<h1 className="event-section-title">NON TECHNICAL EVENTS</h1>

<div className="events-grid">

<div className="event-card">
<h2>Bioscope</h2>
<p className="team">Team Size: 2 – 3 Members</p>
<ul>
<li>Identify movies from clues</li>
<li>Test entertainment knowledge</li>
<li>Fastest answers score</li>
</ul>
</div>

<div className="event-card">
<h2>Connexion</h2>
<p className="team">Team Size: 2 – 3 Members</p>
<ul>
<li>Find connection between clues</li>
<li>Logical thinking required</li>
<li>Multiple rounds</li>
</ul>
</div>

</div>


{/* SUBMISSION EVENTS */}

<h1 className="event-section-title">SUBMISSION EVENTS</h1>

<div className="events-grid">

<div className="event-card">

<h2>Photography / Videography</h2>
<p className="team">Team Size: Individual / Team (max 3)</p>

<ul>
<li>Capture creative photos based on theme</li>
<li>Focus on originality</li>
<li>Judged on creativity</li>
</ul>

<button
className="instruction-btn"
onClick={()=>setShowInstructions(true)}
>
Instructions
</button>

</div>


<div className="event-card">
<h2>Poster Making</h2>
<p className="team">Team Size: Individual</p>
<ul>
<li>Create attractive posters</li>
<li>Express ideas visually</li>
<li>Judged on creativity</li>
</ul>
</div>

</div>


{/* POPUP */}

{showInstructions && (

<div className="popup-overlay">

<div className="popup">

<h2>Photography & Videography – Submission Event</h2>

<p>
Photography and Videography is a submission-based event where participants showcase creativity through photos and videos.
</p>

<h3>📌 Instructions for Participants</h3> <ul> <li> This is a <b>Submission Event</b>. Submit by <b>23/03/2026 11:59 PM</b></li> <li>🎯 Theme: <b>In My Perspective</b></li> <li> Photography – Individual | Videography – Individual / Team (max 3)</li> <li> Work must be original</li> <li>Video duration: <b>1–3 minutes</b></li> <li>1–3 photos allowed</li> <li> JPEG/PNG (max 100MB)</li> <li> MP4 (max 500MB)</li> <li>Description allowed</li> <li> File name: name_college_dept_year_eventname</li> <li> Editing allowed but must be original</li> <li> Judging: Creativity, Originality, Quality, Storytelling</li> <li> Judges decision is final</li> </ul>
<button
className="close-btn"
onClick={()=>setShowInstructions(false)}
>
Close
</button>

</div>

</div>

)}

</div>

)

}