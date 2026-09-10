import { NextResponse } from "next/server";
import { dodopayments } from "../../../lib/dodopayments";

export async function POST(request) {
  const productId = process.env.DODO_PAYMENTS_PRODUCT_ID;
  if (!productId) {
    return NextResponse.json({ error: "Product is not configured" }, { status: 500 });
  }

  const { origin } = new URL(request.url);

  try {
    const session = await dodopayments.checkoutSessions.create({
      product_cart: [{ product_id: productId, quantity: 1 }],
      return_url: `${origin}/checkout/success`,
    });

    return NextResponse.json({ checkoutUrl: session.checkout_url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 });
  }
}
