import { CheckoutButton } from "./components/CheckoutButton";

const FEATURES = [
  "5,000 image builds / month",
  "10 concurrent builds",
  "Private registries",
  "Build caching & layer reuse",
  "Priority email support",
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="wrap">
      <nav className="top">
        <div className="brand">
          <span className="brand-mark">🖼️</span>
          ImageForge
        </div>
      </nav>

      <header className="hero">
        <h1>
          Simple pricing for
          <br />
          <span>building images at scale</span>
        </h1>
        <p className="sub">One plan, everything included. Cancel anytime.</p>
      </header>

      <main>
        <section className="plan">
          <div className="plan-name">Pro subscription</div>
          <div className="price-row">
            <span className="price">$29</span>
            <span className="price-period">/ month</span>
          </div>
          <CheckoutButton>Buy Now</CheckoutButton>
          <ul className="features">
            {FEATURES.map((feature) => (
              <li key={feature}>
                <CheckIcon />
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>© 2026 ImageForge. All rights reserved.</footer>
    </div>
  );
}
