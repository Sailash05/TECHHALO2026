export default function EventPopup({ instructions, submissionLink, closePopup }) {

  return (

    <div className="popup-overlay">

      <div className="popup">

        <h2>Event Instructions</h2>

        <ul>
          {instructions.map((ins, index) => (
            <li key={index}>{ins}</li>
          ))}
        </ul>

        {submissionLink && (
          <a
            href={submissionLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="submit-btn">
              Submit Your Work
            </button>
          </a>
        )}

        <button class='mybtn' onClick={closePopup}>
          Close
        </button>

      </div>

    </div>

  );

}