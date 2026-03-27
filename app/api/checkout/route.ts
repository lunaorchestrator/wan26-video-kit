import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'embedded',
      ui_mode: 'embedded',
      return_url: `${req.nextUrl.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID as string,
          quantity: 1,
        },
      ],
    });

    return NextResponse.json({ client_secret: session.client_secret });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
