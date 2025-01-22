import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    try {
      const response = await fetch('/api/checkout-route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems: [] }), 
      });

      const { id } = await response.json();

      if (!stripe) {
        console.error('Stripe failed to load.');
        setLoading(false);
        return;
      }

      const result = await stripe.redirectToCheckout({
        sessionId: id,
      });

      if (result.error) {
        console.error(result.error.message);
        setLoading(false);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleCheckout} disabled={loading}>
      {loading ? 'Loading...' : 'Proceed to Checkout'}
    </Button>
  );
}