import Image from "next/image";

const contentWarnings = [
  "Blood and Gore",
  "Death",
  "Generational Trauma",
  "Guns",
  "Mental Illness",
  "Murder",
  "Sexual Assault (Graphic)",
  "Sexually Explicit Scenes",
  "Suicide Ideation",
  "Swearing",
  "Torture",
  "Violence",
];

export default function BooksPage() {
  return (
    <main className="page-content">
      <h1 className="section-heading">Books</h1>

      <div className="book-card">
        <Image
          className="book-cover"
          src="/books/The Gems.png"
          alt="The Gems — book cover for M.C. Jeter's debut new adult fantasy novel"
          width={300}
          height={450}
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 300px"
          style={{ objectFit: "cover" }}
          priority
        />

        <div className="book-details">
          <h2>The Gems</h2>
          <p>
            Stressed with school and her step mother&rsquo;s cruelty, 17 year-old Ruby Jenkins just
            wants to finish high school and get the hell out of Ohio. But when Ruby discovers that
            she is anything but normal, nothing she wants seems to matter anymore.
          </p>
          <p>
            A realistic dream, new student, and inexplicable secrets thrust her into a world of the
            unknown. Having to leave her whole life behind to stop her newly discovered uncle from
            creating a world of devastation, Ruby and her new allies are forced to find others like
            them for help. And when someone from her old life can&rsquo;t seem to let her go, saving
            the world gets a lot more complicated.
          </p>
          <p>Will Ruby be able to put her past behind her and fight with her new family before chaos erupts?</p>

          <p>
            <strong>Content warnings — the following subjects appear in The Gems:</strong>
          </p>
          <ul aria-label="Content warnings">
            {contentWarnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>

          <a
            className="buy-button"
            href="https://a.co/d/hofcGNV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy The Gems on Amazon (opens in new tab)"
          >
            Buy Now!
          </a>
        </div>
      </div>

      <iframe
        className="book-video"
        src="https://www.youtube.com/embed/yRU0fev98O8"
        title="The Gems — official book trailer by M.C. Jeter"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </main>
  );
}
