import React, { useEffect, useState } from 'react'

const ImageSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/484340176/photo/rocks.jpg?s=612x612&w=0&k=20&c=vW82IjL94OvpFAUC4XjHGNV7pGmK4d5UYBiofJYo-bo=",
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    "https://picsum.photos/id/1024/600/300",
  ];

  let [index, setIndex] = useState(0);   // ✅ fixed
  let [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  let nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  let prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div
        style={{
          width: "600px",
          margin: "auto",
          position: "relative",
        }}
        onMouseEnter={() => setIsPaused(true)}   // pause when hover
        onMouseLeave={() => setIsPaused(false)}  // resume when leave
      >
        <img
          src={images[index]}   // ✅ now works
          alt="slider"
          style={{ width: "100%", height: "300px", borderRadius: "10px" }}
        />
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
          }}
        >
          ⬅
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
          }}
        >
          ➡
        </button>
      </div>
      <p>{index + 1} / {images.length}</p>
    </div>
  );
};

export default ImageSlider;

