export default function CheckoutSuccessPage() {
  return (
    <div className="wrap">
      <main>
        <section className="plan" style={{ textAlign: "center" }}>
          <h1>Payment successful</h1>
          <p>Thank you for subscribing. Check your email for confirmation.</p>
          <a href="/" className="cta" style={{ display: "inline-block", marginTop: "1.5rem" }}>
            Return home
          </a>
        </section>
      </main>
    </div>
  );
}
