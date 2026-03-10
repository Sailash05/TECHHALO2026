export default function EventCard({ title, desc }) {

  return (
    <div className="event-card">

      <h3>{title}</h3>

      <p>{desc}</p>

      <button>Register</button>

    </div>
  );
}