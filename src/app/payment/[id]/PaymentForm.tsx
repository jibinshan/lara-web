'use client'
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FC } from "react";

const PaymentForm: FC<{
  _id: string;
}> = ({ _id }) => {
  const [loading, setLoading] = useState(false);
  const { restaurant } = useRestaurant();
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment/${_id}/status`,
      },
    });

    if (error) {
      console.log("[error]", error);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[500px] flex-col items-center justify-center gap-4"
    >
      <div className="w-full flex">
        <MoveLeft onClick={() => router.push('/checkout')} />
      </div>
      <PaymentElement
        className="w-full max-w-[400px]"
        options={{
          layout: "tabs",
          business: {
            name: restaurant?.name ? restaurant?.name : "",
          },
          terms: {
            card: "always",
          },
        }}
      />
      <Button
        disabled={loading || !stripe || !elements}
        type="submit"
        className="w-full max-w-[400px]"
      >
        {loading ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  );
};

export default PaymentForm;
