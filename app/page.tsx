export default function Home() {
  return (
    <main className="hero">
      <img
        className="poster"
        src="/images/poster.jpg"
        alt="Red Fist Poster"
      />

      {/* Keep the three buttons */}
      <div className="buttons">
        <a className="btn" href="/pdfs/investor.pdf" target="_blank" rel="noreferrer">Investor PDF</a>
        <a className="btn" href="/pdfs/marketing.pdf" target="_blank" rel="noreferrer">Marketing PDF</a>
        <a className="btn" href="/pdfs/story-bible.pdf" target="_blank" rel="noreferrer">Draft Story Bible PDF</a>
      </div>

      {/* Contact line */}
      <div className="contact">
        <div className="contact-line">
          <span>Contact:</span>&nbsp;
          <strong>Aaron Kushner, Ph.D.</strong>
          <span className="dot">•</span>
          <a href="mailto:aaron.m.kushner@gmail.com">aaron.m.kushner@gmail.com</a>
          <span className="dot">•</span>
          <a href="tel:+15109144096">510&nbsp;914&nbsp;4096</a>
        </div>
      </div>
    </main>
  )
}
