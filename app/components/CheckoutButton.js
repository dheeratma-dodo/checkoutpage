"use client";

import { useState } from "react";

export function CheckoutButton({ children }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", { method: "POST" });
      const data = await response.json();

      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.error || "Checkout URL was not returned");
      }

      window.location.href = data.checkoutUrl;
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to start checkout. Please try again.");
      setLoading(false);
    }
  };

  return (
    <button className="cta" type="button" onClick={handleCheckout} disabled={loading}>
      {loading ? "Loading..." : children}
    </button>
  );
}
