import "./Gallery.css";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600",
    "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600",
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Food Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt="food" />
        ))}
      </div>
    </section>
  );
}

export default Gallery;