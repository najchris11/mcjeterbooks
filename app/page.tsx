import PhotoCarousel from "./components/PhotoCarousel";

const photos = [
  { src: "/mcj/IMG_6090.JPG", alt: "Photo of M.C. Jeter" },
  { src: "/mcj/IMG_6041.JPG", alt: "Photo of M.C. Jeter" },
  { src: "/mcj/IMG_6150.JPG", alt: "Photo of M.C. Jeter" },
];

export default function AboutPage() {
  return (
    <main className="page-content">
      <div className="content-card">
        <h1>M.C. Jeter Updates!</h1>
        <p>
          <a href="https://a.co/d/hofcGNV">
            <strong>The Gems: Available Now</strong>
          </a>
        </p>
        <p>Scroll down to join the newsletter!</p>
      </div>

      <article>
        <h2 className="section-heading">About M. C.</h2>

        <div className="content-card">
          <p>
            M. C. Jeter is the indie author of The Gems, a new adult fantasy novel. She graduated
            from the Ohio State University with a BS in Neuroscience and a minor in American Sign
            Language. For fun, M. C. likes to read, write, dance, sing and play on her Nintendo
            Switch. As of right now, M. C. has many diverse stories bouncing around in her brain
            that she is so excited to share with the world.
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
