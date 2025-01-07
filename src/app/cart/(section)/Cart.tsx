"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { useRestaurant } from "@/context/RestaurantContext";
import { formattedItemPrice } from "@/lib/formatted-item-price";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Cart = ({ }) => {
  const router = useRouter();
  const { cartItems, updateItem, removeItem, cartValue } = useCart();
  const { restaurant } = useRestaurant()
  const totalAmount = parseFloat(
    cartItems
      .reduce((total, item) => {
        return total + (item.price?.value || 0);
      }, 0)
      .toFixed(2),
  );
  console.log(cartItems, "==cartitems");

  return (
    <section className="flex h-full min-h-[90vh] w-full max-w-[1300px] flex-col gap-4 pt-4">
      <div className="px-6 flex flex-col gap-4 items-center justify-center">
        <Card className="flex max-h-[500px] w-full flex-1 flex-col justify-between border-[1px]">
          <h1 className="flex items-end gap-4 border-b-[1px] border-dashed p-4 font-playfair text-3xl font-semibold">
            Cart
          </h1>
          {cartItems.length !== 0 ?
            <div className="custom-scrollbar flex w-full flex-1 flex-col gap-4 overflow-y-scroll py-4 pl-4 pr-4">
              {cartItems.map((item, index) => (
                <div
                  key={item._idMenuItem}
                  className={`flex max-h-[150px] w-full items-center justify-between gap-2 py-4 ${index !== cartItems.length - 1
                    ? "border-b border-dashed border-[#BC995D66]"
                    : ""
                    }`}
                >
                  <div className="flex gap-2">
                    <div className="flex flex-col items-start justify-between">
                      <p className="font-semibold">{item.name}</p>
                      <p className="font-semibold">
                        £ {formattedItemPrice(item.price.value)}
                      </p>
                      <p className="font-light">{item.notes}</p>
                    </div>
                  </div>
                  <div className="flex h-fit w-fit items-center gap-3 bg-[#BC995D] p-2 text-black">
                    <Button
                      className="h-fit w-fit rounded-full bg-transparent p-0 hover:bg-transparent"
                      onClick={() => {
                        if (item.quantity <= 1) {
                          return removeItem(item._idMenuItem);
                        }
                        updateItem(item._idMenuItem, item.quantity - 1);
                      }}
                    >
                      <Icons.remove className="text-[#282828]" />
                    </Button>
                    {item.quantity}
                    <Button
                      className="h-fit w-fit rounded-full bg-transparent p-0 hover:bg-transparent"
                      onClick={() => {
                        updateItem(item._idMenuItem, item.quantity + 1);
                      }}
                    >
                      <Icons.add className="text-[#282828]" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            :
            <div className="w-full flex h-[10vh] flex-col items-center justify-center">
              <p className="w-full font-bold text-center">Cart Is Empty</p>
            </div>
          }
          <div className="flex items-center justify-between gap-4 border-t-[1px] border-dashed p-4 text-lg font-semibold">
            <p>Items: {cartItems.length || 0}</p>
            <p>Total: £ {formattedItemPrice(totalAmount) || 0}</p>
          </div>
        </Card>
        {!restaurant?.isDeliveryEnabled || !restaurant?.isTakeAwayEnabled && (
          <p className="font-[500] text-2xl text-red-600">Currently Restaurant Delivery is Closed Sorry for convenience</p>
        )}
      </div>
      <div className="fixed bottom-0 flex w-full max-w-[1300px] gap-3 px-4 py-3">
        <Button
          type="button"
          className="w-1/2 cursor-pointer justify-center rounded-md h-12"
          variant="outline"
          onClick={() => router.back()}
        >
          Back
        </Button>
        {cartItems.length !== 0 ?
          <Button
            type="submit"
            className={cn(
              "w-1/2 justify-between rounded-md h-12",
              cartItems.length === 0 && "pointer-events-none cursor-not-allowed",
            )}
            asChild
            disabled={cartItems.length === 0 ? true : false || !restaurant?.isDeliveryEnabled || !restaurant.isTakeAwayEnabled}
          >
            <Link href="/checkout">
              Checkout
              <span className="font-semibold text-[#282828]">
                £ {formattedItemPrice(cartValue())}
              </span>
            </Link>
          </Button>
          :
          <Button
            type="button"
            className={cn(
              "w-1/2 rounded-md h-12"
            )}
            asChild
          >
            <Link href="/menu">
              View Menu
            </Link>
          </Button>
        }


      </div>
    </section >
  );
};

export default Cart;
