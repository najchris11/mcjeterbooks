"use client";

import Image from "next/image";
import { useState } from "react";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoCarouselProps {
  photos: Photo[];
}

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  return (
    <div className="carousel-wrap">
      <Image
        src={photos[current].src}
        alt={photos[current].alt}
        width={600}
        height={500}
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
      />
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={prev} aria-label="Previous photo">
          &#8249;
        </button>
        <div className="carousel-dots">
          {photos.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
        <button className="carousel-btn" onClick={next} aria-label="Next photo">
          &#8250;
        </button>
      </div>
    </div>
  );
}
