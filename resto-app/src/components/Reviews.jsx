import "./Reviews.css";

function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Amazing food and excellent service!",
    },
    {
      name: "Priya Verma",
      text: "Best restaurant experience I've had recently.",
    },
    {
      name: "Amit Singh",
      text: "Loved the ambience and quick delivery.",
    },
  ];

  return (
    <section id="reviews" className="reviews">
      <h2>What Our Customers Say</h2>

      <div className="review-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h3>{review.name}</h3>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;