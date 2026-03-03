import PhotoCarousel from "./components/PhotoCarousel";

const photos = [
  { src: "/mcj/IMG_6090.JPG", alt: "M.C. Jeter photo 1" },
  { src: "/mcj/IMG_6041.JPG", alt: "M.C. Jeter photo 2" },
  { src: "/mcj/IMG_6150.JPG", alt: "M.C. Jeter photo 3" },
];

export default function AboutPage() {
  return (
    <main className="page-content">
      <div className="content-card">
        <h1>M.C. Jeter Updates!</h1>
        <a href="https://a.co/d/hofcGNV">
          <h2>The Gems: Available Now</h2>
        </a>
        <h3>Scroll down to join my newsletter!</h3>
      </div>

      <article>
        <h1 className="section-heading">About M. C.</h1>

        <div className="content-card">
          <h3>Bio</h3>
          <p>
            M. C. Jeter is the indie author of The Gems, a new adult fantasy novel. She is set to
            graduate from the Ohio State University in May 2024 with a BS in Neuroscience and a
            minor in American Sign Language. For fun, M. C. likes to read, write, dance, sing and
            play on her Nintendo Switch. As of right now, M. C. has many diverse stories bouncing
            around in her brain that she is so excited to share with the world.
          </p>
          <p>
            M. C. Jeter began writing her debut novel in fourth grade and as she grew, her main
            character did too. From starting at 10 years old to ending at 17, Ruby, the main
            character of The Gems, will take you on an adventure full of love, regret, and
            challenges. You can embark on her adventure starting July 1st, 2023!
          </p>
        </div>

        <PhotoCarousel photos={photos} />
      </article>
    </main>
  );
}
