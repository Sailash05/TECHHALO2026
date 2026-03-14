import Navbar from "../../components/Navbar";
import "./coordinators.css";

import CursorTrail from "../../components/CursorTrail";
import SpaceBackground from "../../components/SpaceBackground";
import Footer from "../../components/Footer";

const CoordinatorsPage = () => {

const leadership = [
{ name: "Abilash Kannan S J", role: "President", dept:"IV CSE" },
{ name: "Siva Sakthi C", role: "Vice President", dept:"III CSE" },
{ name: "Franisha Merlin F V", role: "Secretary", dept:"IV CSE" },
{ name: "Karishma S", role: "Joint Secretary", dept:"III CSE" },
{ name: "Muthu Selvi S", role: "Treasurer", dept:"IV CSE" },
{ name: "Siva Ranjani K", role: "Joint Treasurer", dept:"III CSE" }
];

const executiveMembers = {

"IV Year":[
{ name:"Abinaya S", dept:"IV CSE" },
{ name:"Oviya S", dept:"IV CSE" },
{ name:"Angelina Celine S", dept:"IV CSE" },
{ name:"Janani T", dept:"IV CSE" },
{ name:"Anns Linisha L", dept:"IV CSE" },
{ name:"Priya M", dept:"IV CSE" },
{ name:"Aravind R", dept:"IV CSE" },
{ name:"Sree Nidhi M", dept:"IV CSE" },
{ name:"Buvana S", dept:"IV CSE" },
{ name:"Sylvia Gajadas D", dept:"IV CSE" },
{ name:"Esakkiammal M", dept:"IV CSE" },
{ name:"Vinodha P", dept:"IV CSE" },
{ name:"Harishkumar V", dept:"IV CSE" },
{ name:"Indra E", dept:"IV CSE" },
{ name:"Lelin Roch", dept:"IV CSE" },
{ name:"Merlin S", dept:"IV CSE" },
{ name:"Lelin Roch R", dept:"IV CSE" }
],

"III Year":[
{ name:"Nathiya V", dept:"III CSE" },
{ name:"Anshi A", dept:"III CSE" },
{ name:"Esakki Muthu S", dept:"III CSE" },
{ name:"Lavanya M", dept:"III CSE" },
{ name:"Martina P", dept:"III CSE" }
],

"II Year":[
{ name:"Jaya Subiksha R", dept:"II CSE" },
{ name:"Lavanya A", dept:"II CSE" },
{ name:"Harishragavan M", dept:"II CSE" },
{ name:"Madhan Kumar S", dept:"II CSE" },
{ name:"Mariarajan Rohith K", dept:"II CSE" },
{ name:"Palraj J", dept:"II CSE" },
{ name:"Adhilakshmi S", dept:"II AI&DS" },
{ name:"Asha G", dept:"II AI&DS" },
{ name:"Mahalakshmi N", dept:"II AI&DS" },
{ name:"Swetha R", dept:"II AI&DS" }
]

};

return (

<div className="coordinators-page">

<Navbar/>
<CursorTrail/>
<SpaceBackground/>

<h1 className="page-title">
Tech Society Coordinators
</h1>

{/* Leadership */}

<h2 className="section-title">Office Bearers</h2>

<div className="coordinators-grid-bearers">

{leadership.map((member,index)=>(

<div key={index} className="coordinator-card">

<h2>{member.name}</h2>
<p className="role">{member.role}</p>
<p>{member.dept}</p>

</div>

))}

</div>


    {/* Developers Team */}

    <h2 className="section-title">Developers Team</h2>

    <div className="developers-grid">

    <div className="developer-card">
    <h2>Jeya Subiksha R</h2>
    <p className="dev-role">Developer</p>
    <p>II CSE</p>
    </div>

    <div className="developer-card">
    <h2>Gomathi</h2>
    <p className="dev-role">Developer</p>
    <p>II CSE</p>
    </div>

    </div>



{/* Executive Members */}

<h2 className="section-title">Executive Members</h2>

{Object.entries(executiveMembers).map(([year,members]) => (

<div key={year} className="dept-box">

<h3 className="dept-title">{year}</h3>

<div className="coordinators-grid">

{members.map((member,index)=>(

<div key={index} className="coordinator-card">

<h2>{member.name}</h2>
{/* <p className="role">Executive Member</p> */}
<p>{member.dept}</p>

</div>

))}

</div>

</div>

))}

<Footer />
</div>

);

};

export default CoordinatorsPage;
