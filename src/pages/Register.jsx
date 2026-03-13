import { Link } from "react-router-dom";
import SpaceBackground from "../components/SpaceBackground";
import CursorTrail from "../components/CursorTrail";
import Navbar from "../components/Navbar";

export default function Register(){

return(

<div className="register-page">

<CursorTrail/>
<SpaceBackground/>

{/* Top Right Anchors */}

<Navbar />

{/* Registration Content */}

<div className="register-container">

<h1 className="register-title">TECHHALO'26</h1>

<p className="register-info">
Anna University Regional Campus Tirunelveli <br/>
Department of Computer Science and Engineering
</p>

<p className="register-details">

TECHHALO'26 is a technical symposium designed to explore creativity,
innovation, and technical knowledge through various technical and
non-technical events.

</p>

<div className="register-meta">

<p>📅 Event Date : March 26, 2026</p>

<p>💰 Registration Fee : ₹200</p>

</div>

<button
className="register-btn"
onClick={()=>window.open("https://forms.gle/1oukuSaS1iH2NgzW9","_blank")}
>

Register Now

</button>

</div>

</div>

)

}