import Navbar from "../../components/Navbar";
import "./coordinators.css";

import CursorTrail from "../../components/CursorTrail";
import SpaceBackground from "../../components/SpaceBackground";

const CoordinatorsPage = () => {

const leadership = [
{ name: "Abilash Kannan S J", role: "President", dept:"CSE" },
{ name: "Siva Sakthi C", role: "Vice President", dept:"CSE" },
{ name: "Franisha Merlin F V", role: "Secretary", dept:"CSE" },
{ name: "Karishma S", role: "Joint Secretary", dept:"CSE" },
{ name: "Muthu Selvi S", role: "Treasurer", dept:"CSE" },
{ name: "Siva Ranjani K", role: "Joint Treasurer", dept:"CSE" }
];

const executiveMembers = {

"IV Year":[
{ name:"Abinaya S", dept:"CSE" },
{ name:"Oviya S", dept:"CSE" },
{ name:"Angelina Celine S", dept:"CSE" },
{ name:"Janani T", dept:"CSE" },
{ name:"Anns Linisha L", dept:"CSE" },
{ name:"Priya M", dept:"CSE" },
{ name:"Aravind R", dept:"CSE" },
{ name:"Sree Nidhi M", dept:"CSE" },
{ name:"Buvana S", dept:"CSE" },
{ name:"Sylvia Gajadas D", dept:"CSE" },
{ name:"Esakkiammal M", dept:"CSE" },
{ name:"Vinodha P", dept:"CSE" },
{ name:"Harishkumar V", dept:"CSE" },
{ name:"Indra E", dept:"CSE" },
{ name:"Lelin Roch", dept:"CSE" },
{ name:"Merlin S", dept:"CSE" }
],

"III Year":[
{ name:"Nathiya V", dept:"CSE" },
{ name:"Anshi A", dept:"CSE" },
{ name:"Esakki Muthu S", dept:"CSE" },
{ name:"Lavanya M", dept:"CSE" },
{ name:"Martina P", dept:"CSE" }
],

"II Year":[
{ name:"Jaya Subiksha R", dept:"CSE" },
{ name:"Lavanya A", dept:"CSE" },
{ name:"Harishragavan M", dept:"CSE" },
{ name:"Madhan Kumar S", dept:"CSE" },
{ name:"Mariarajan Rohith K", dept:"CSE" },
{ name:"Palraj J", dept:"CSE" },
{ name:"Adhilakshmi S", dept:"AI&DS" },
{ name:"Asha G", dept:"AI&DS" },
{ name:"Mahalakshmi N", dept:"AI&DS" },
{ name:"Swetha R", dept:"AI&DS" }
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

<h2 className="section-title">Leadership</h2>

<div className="coordinators-grid">

{leadership.map((member,index)=>(

<div key={index} className="coordinator-card">

<h2>{member.name}</h2>
<p className="role">{member.role}</p>
<p>{member.dept}</p>

</div>

))}

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
<p className="role">Executive Member</p>
<p>{member.dept}</p>

</div>

))}

</div>

</div>

))}

</div>

);

};

export default CoordinatorsPage;
