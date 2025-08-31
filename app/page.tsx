export default function Home() {
  return (
    <main className="hero">
      {/* Poster */}
      <img
        className="poster"
        src="/images/poster.jpg"
        alt="Red Fist Poster"
      />

      {/* Bottom buttons (open PDFs in new tab) */}
      <div className="buttons">
        <a className="btn" href="/pdfs/investor.pdf" target="_blank" rel="noreferrer">
          Investor PDF
        </a>
        <a className="btn" href="/pdfs/marketing.pdf" target="_blank" rel="noreferrer">
          Marketing PDF
        </a>
        <a className="btn" href="/pdfs/story-bible.pdf" target="_blank" rel="noreferrer">
          US Story Bible PDF
        </a>
        <a className="btn" href="/pdfs/story-bible-china.pdf" target="_blank" rel="noreferrer">
          China Story Bible PDF
        </a>
      </div>

      {/* Contact */}
      <div className="contact">
        <div className="contact-line">
          <span>Contact:</span>&nbsp;
          <a
            href="https://www.linkedin.com/in/aaron-m-kushner/"
            target="_blank"
            rel="noreferrer"
            aria-label="Aaron Kushner, Ph.D. on LinkedIn"
          >
            <strong>Aaron Kushner, Ph.D.</strong>
          </a>
          <span className="dot">•</span>
          <a href="mailto:aaron.m.kushner@gmail.com">aaron.m.kushner@gmail.com</a>
          <span className="dot">•</span>
          <a href="tel:+15109144096">510&nbsp;914&nbsp;4096</a>
        </div>
      </div>
    </main>
  );
}
