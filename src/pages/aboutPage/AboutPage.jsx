import Navbar from '../../components/Navbar';
import './aboutPage.css';

import CursorTrail from "../../components/CursorTrail";
import SpaceBackground from "../../components/SpaceBackground";

const AboutPage = () => {

  return (
    <div className="college-page">

      <Navbar />
      <CursorTrail/>
      <SpaceBackground/>

      <div className="college-container">

        <h1 className="college-title">
          Anna University Regional Campus – Tirunelveli
        </h1>

        <p className="college-subtitle">
          A Constituent College of Anna University, Chennai
        </p>


        {/* NEWSPAPER GRID */}

        <div className="news-grid">

          {/* BIG ARTICLE */}

          <div className="college-card main-article">

            <h2>About the College</h2>

            <p>
              Anna University Regional Campus Tirunelveli (AURCT) is one of the
              prestigious constituent colleges of Anna University, Chennai.
              The campus was established to provide quality technical education
              to students in the southern districts of Tamil Nadu.
            </p>

            <p>
              The institution offers undergraduate and postgraduate programs
              in various engineering disciplines and focuses on innovation,
              research, and technical excellence.
            </p>

          </div>


          {/* SIDE ARTICLE */}

          <div className="college-card location">

            <h2>Location</h2>

            <p>
              The campus is located in Tirunelveli, Tamil Nadu. It offers a
              peaceful learning environment with modern laboratories,
              libraries, and academic facilities.
            </p>

          </div>


          {/* DEPARTMENTS */}

          <div className="college-card departments">

            <h2>Departments</h2>

            <ul>
              <li>Computer Science and Engineering</li>
              <li>Electronics and Communication Engineering</li>
              <li>Mechanical Engineering</li>
              <li>Civil Engineering</li>
              <li>Electrical and Electronics Engineering</li>
            </ul>

          </div>


          {/* TECHHALO */}

          <div className="college-card techhalo">

            <h2>About TECHHALO</h2>

            <p>
              TECHHALO is a technical symposium organized by the
              Department of Computer Science and Engineering.
              The event encourages students to showcase innovation,
              participate in competitions, and explore modern technologies.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AboutPage;