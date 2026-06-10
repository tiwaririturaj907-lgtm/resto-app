import "./Booking.css";

function Booking() {
  return (
    <section id="booking" className="booking">
      <h2>Reserve Your Table</h2>

      <form className="booking-form">
        <input type="text" placeholder="Your Name" />

        <input type="tel" placeholder="Phone Number" />

        <input type="date" />

        <input type="time" />

        <input type="number" placeholder="Guests" />

        <button type="submit">Book Table</button>
        <p className="booking-note">
  Instant confirmation for table reservations.
</p>
      </form>
    </section>
  );
}

export default Booking;