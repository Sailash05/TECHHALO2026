export default function EventPopup({ instructions, submissionLink, closePopup }) {

return (

<div className="popup-overlay" onClick={closePopup}>

<div className="popup" onClick={(e)=>e.stopPropagation()}>

<h2 className="popup-title">Event Instructions</h2>

<div className="popup-divider"></div>

<ul className="popup-list">
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

<button className="close-btn" onClick={closePopup}>
Close
</button>

</div>

</div>

);

}
