import Navbar from '../../components/Navbar';
import './aboutPage.css';

import CursorTrail from "../../components/CursorTrail";
import SpaceBackground from "../../components/SpaceBackground";
import Footer from '../../components/Footer';

const AboutPage = () => {

  return (
    <div className="college-page">

      <Navbar />
      <CursorTrail/>
      <SpaceBackground/>

      <div className="college-container">

        <h1 className="page-title">
          Anna University Regional Campus – Tirunelveli
        </h1>

        <br />
        <br />

        <p className="page-subtitle">
          A Constituent College of Anna University, Chennai
        </p>

        {/* GRID */}

        <div className="news-grid">
          
          {/* ABOUT COLLEGE */}

          <div className="college-card main-article">

            <h2>About the College</h2>

            <p>
              Anna University Regional Campus – Tirunelveli (AURCT) is one of the
              constituent campuses of Anna University, Chennai. Established in 2007,
              the campus aims to provide quality technical education to students
              from the southern districts of Tamil Nadu.
              <br /><br />
              The institution offers undergraduate and postgraduate programs in
              various engineering disciplines and focuses on innovation, research,
              and technical excellence. With modern laboratories, experienced faculty,
              and a vibrant academic environment, the campus encourages students
              to develop strong technical and professional skills.
            </p>

          </div>


          {/* LOCATION */}

          <div className="college-card location">

            <h2>Location</h2>

            <p>
              The campus is located in Tirunelveli, Tamil Nadu. It offers a
              peaceful learning environment with modern laboratories,
              libraries, and academic facilities.
            </p>

            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <a
                href="https://maps.app.goo.gl/hAeuJFQn73yZ4MS26"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  padding: "8px 18px",
                  color: "cyan",
                  border: "1px solid cyan",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontSize: "14px",
                  boxShadow: "0 0 10px rgba(0,255,255,0.4)"
                }}
              >
                View Location
              </a>
            </div>

          </div>


          {/* TECH SOCIETY */}

          <div className="college-card techhalo">

            <h2>About TECH SOCIETY</h2>

            <p>
              Tech Society is a student-driven technical community in
              Anna University Regional Campus – Tirunelveli.
              <br /><br />
              The society is created to help students build their technical
              knowledge, improve problem-solving skills, and explore modern
              technologies beyond the classroom.
              <br /><br />
              It organizes technical events, workshops, coding sessions,
              and symposium activities that encourage creativity,
              innovation, and collaboration among students.
              <br /><br />
              The Tech Society is maintained and coordinated by
              passionate students who aim to create opportunities
              for learning, leadership, and technical growth.
            </p>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default AboutPage;