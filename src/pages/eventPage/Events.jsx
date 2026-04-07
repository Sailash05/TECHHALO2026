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
  <h3>⚠️ Important Notice</h3>

  <ul>
    <li><strong>Brain & Buzz</strong> and <strong>Paper Presentation</strong> are conducted at the same time.</li>
    <li><strong>Prompt Engineering</strong> and <strong>Code Debugging</strong> are conducted at the same time.</li>
    <li><strong>Bioscope</strong> and <strong>Connection</strong> are conducted at the same time.</li>
  </ul>

  <p className="warning-text">
    You cannot participate in overlapping events. Please choose your events carefully before applying.
  </p>
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