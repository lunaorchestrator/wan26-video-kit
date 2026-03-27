'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';

export default function CheckoutPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stripe, setStripe] = useState<any>(null);
  const searchParams = useSearchParams();
  const priceId = searchParams.get('price') || undefined;

  useEffect(() => {
    async function initializeStripe() {
      try {
        const stripeInstance = await loadStripe(
          process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
        );
        setStripe(stripeInstance);

        // Build URL with optional price query param
        const apiUrl = priceId ? `/api/checkout?price=${priceId}` : '/api/checkout';
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch checkout session: ${response.statusText}`);
        }
        const { client_secret } = await response.json();

        if (stripeInstance && client_secret) {
          const { error } = await stripeInstance.confirmEmbeddedCheckout({
            clientSecret: client_secret,
          });
          if (error) {
            setError(error.message);
          }
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    initializeStripe();
  }, [priceId]);

  const handleBuyNow = async () => {
    if (!stripe) return;

    setLoading(true);
    setError(null);

    try {
      const apiUrl = priceId ? `/api/checkout?price=${priceId}` : '/api/checkout';
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch checkout session: ${response.statusText}`);
      }
      const { client_secret } = await response.json();

      const { error } = await stripe.confirmEmbeddedCheckout({
        clientSecret: client_secret,
      });
      if (error) {
        setError(error.message);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={handleBuyNow}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        Buy Now
      </button>
    </div>
  );
}
