import "../CSS/Footer.css";
export default function Footer() {
  return (
    <footer>
      <section>
        <div class="card">
          <span class="card__title">Subscribe</span>
          <p class="card__content">Always be updated on the latest news</p>
          <div class="card__form">
            <input placeholder="Your Email" type="text" />
            <button class="sign-up"> Sign up</button>
          </div>
        </div>
      </section>
    </footer>
  );
}
