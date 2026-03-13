import Navbar from "../../components/Navbar";
import "./coordinators.css";

import CursorTrail from "../../components/CursorTrail";
import SpaceBackground from "../../components/SpaceBackground";

const CoordinatorsPage = () => {

  const leadership = [
    { name: "Abilash Kannan S J", role: "President" },
    { name: "Siva Sakthi C", role: "Vice President" },
    { name: "Franisha Merlin F V", role: "Secretary" },
    { name: "Karishma S", role: "Joint Secretary" },
    { name: "Muthu Selvi S", role: "Treasurer" },
    { name: "Siva Ranjani K", role: "Joint Treasurer" }
  ];


  const executiveMembers = [
    "Abinaya S",
    "Oviya S",
    "Nathiya V",
    "Angelina Celine S",
    "Janani T",
    "Harishragavan M",
    "Anns Linisha L",
    "Priya M",
    "Jaya Subiksha R",
    "Aravind R",
    "Sree Nidhi M",
    "Lavanya A",
    "Arul Selvi B",
    "Silviya Grace S",
    "Madhan Kumar S",
    "Buvana S",
    "Sylvia Gajadas D",
    "Mariarajan Rohith K",
    "Esakkiammal M",
    "Vinodha P",
    "Palraj J",
    "Harishkumar V",
    "Anshi A",
    "Adhilakshmi S",
    "Indra E",
    "Esakki Muthu S",
    "Asha G",
    "Lelin Roch",
    "Lavanya M",
    "Mahalakshmi N",
    "Merlin S",
    "Martina P",
    "Swetha R"
  ];

  return (
    <div className="coordinators-page">

      <Navbar />
      <CursorTrail />
      <SpaceBackground />

      <h1 className="page-title">
        Tech Society Coordinators
      </h1>


      {/* Leadership */}

      <h2 className="section-title">
        Leadership
      </h2>

      <div className="coordinators-grid">

        {leadership.map((member, index) => (
          <div key={index} className="coordinator-card">

            <h2>{member.name}</h2>

            <p className="role">
              {member.role}
            </p>

            <p>CSE</p>

          </div>
        ))}

      </div>


      {/* Executive Members */}

      <h2 className="section-title">
        Executive Members
      </h2>

      <div className="coordinators-grid">

        {executiveMembers.map((name, index) => (
          <div key={index} className="coordinator-card">

            <h2>{name}</h2>

            <p className="role">
              Executive Member
            </p>

            <p>CSE</p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default CoordinatorsPage;