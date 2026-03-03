"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoCarouselProps {
  photos: Photo[];
}

const SLIDE_INTERVAL = 8000;

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  // Auto-advance every 8 s; resets whenever the slide changes (manual or auto)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % photos.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [current, photos.length]);

  return (
    <div className="carousel-wrap" role="region" aria-label="Photo gallery">
      {/* key={current} remounts the wrapper so the CSS animation reruns on every slide change */}
      <div key={current} className="carousel-image-wrap">
        <Image
          src={photos[current].src}
          alt={photos[current].alt}
          width={5184}
          height={3456}
          sizes="(max-width: 768px) 95vw, 900px"
          priority={current === 0}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={prev} aria-label="Previous photo">
          &#8249;
        </button>
        <div className="carousel-dots" role="tablist" aria-label="Select photo">
          {photos.map((_, i) => (
            <button
              key={i}
              role="tab"
              className={`carousel-dot${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Photo ${i + 1} of ${photos.length}`}
              aria-selected={i === current}
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
