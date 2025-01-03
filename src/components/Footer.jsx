import "../CSS/Footer.css";
export default function Footer() {
  return (
    <footer>
      <section>
        <section>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Buttons</title>
          <link rel="stylesheet" href="styles.css" />
          <div className="flex-container">
            <button className="btn linkedin">LinkedIn</button>
            <button className="btn github">GitHub</button>
            <button className="btn instagram">Instagram</button>
          </div>
        </section>
      </section>
    </footer>
  );
}
