import { useState } from "react";
import SpaceBackground from "../../components/SpaceBackground";
import CursorTrail from "../../components/CursorTrail";
import Navbar from "../../components/Navbar";
import EventPopup from "../../components/EventPopup";
import { eventsData } from "../../constants/eventData";
import './eventPage.css'
import Footer from "../../components/Footer";

export default function Events(){

    const [showInstructions, setShowInstructions] = useState(false);
    const [selectedInstructions, setSelectedInstructions] = useState([]);
    const [submissionLink, setSubmissionLink] = useState(null);

    const openInstructions = (instructions, link) => {
        setSelectedInstructions(instructions);
        setSubmissionLink(link);
        setShowInstructions(true);
    };

    const closeInstructions = () => {
        setShowInstructions(false);
    };

    return(
        <div className="events-page">
            <CursorTrail/>
            <SpaceBackground/>
            <Navbar />

<div className="event-warning">

  <h3>⚠️ IMPORTANT INSTRUCTIONS FOR REGISTRATION</h3>

  <p className="warning-subtitle">
    The following events will be conducted simultaneously (parallel sessions):
  </p>

  <ul>
    <li><strong>Brain & Buzz</strong> / <strong>Paper Presentation</strong></li>
    <li><strong>Prompt Engineering</strong> / <strong>Code Debugging</strong></li>
    <li><strong>Bioscope</strong> / <strong>Connection</strong></li>
  </ul>

  <p className="warning-text">
    Participants are permitted to register for only one event from each pair.
  </p>

  <div className="warning-note">
    ❗ <strong>Note:</strong>
    <ul>
      <li>Registration for both events in the same time slot is strictly not allowed.</li>
      <li>If a participant registers for both events in a pair, only one event will be allotted based on the decision of the event committee.</li>
    </ul>
  </div>

  <div className="team-note">
    👥 <strong>Team Events:</strong>
    <ul>
      <li>Each team must consist of two members.</li>
      <li>Only the team leader should complete the registration form on behalf of the team.</li>
    </ul>
  </div>

</div>

            {eventsData.map((section, index)=>(

                <div key={index}>
                    <h1 className="event-section-title">{section.section}</h1>
                    <div className="events-grid">

                    {section.events.map((event, i)=>(

                        <div className="event-card" key={i}>

                            <h2>{event.title}</h2>

                            <p className="team">Team Size: {event.team}</p>

                            <ul>
                                {event.points.map((point, j)=>(
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>

                            <button className="instruction-btn" onClick={() => openInstructions(event.instructions, event.submissionLink)} >
                                Instructions
                            </button>
                            {
                                event.applyLink && (
                                    <button
                                    style={{marginLeft: '10px'}}
                                    onClick={() => window.open(event.applyLink, "_blank", "noopener,noreferrer")}
                                    className="instruction-btn"
                                    >
                                    Apply
                                    </button>
                                )
                                }

                        </div>

                    ))}

                    </div>

                </div>

            ))}

            {showInstructions && (
            <EventPopup
                instructions={selectedInstructions}
                submissionLink={submissionLink}
                closePopup={closeInstructions}
            />
            )}
            <Footer />
        </div>
    )
}