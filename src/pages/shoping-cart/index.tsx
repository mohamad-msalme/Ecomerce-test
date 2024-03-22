import { Button } from "@src/components/ui/button";
import { CartItem } from "./CartItem";
import { Subtotal } from "./SubTotal";
import { useNavigate } from "react-router-dom";

/**
 * The ShoppingCart component in TypeScript React renders a shopping cart interface with items,
 * subtotal, shipping cost, total, and a checkout button.
 * @returns The `ShoppingCart` component is being returned. It consists of a layout for a shopping cart
 * page with a list of items in the cart, subtotal, shipping cost, total, and a checkout button.
 */
export const ShoppingCart: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <div className="pt-4 ">
        <h1 className="mb-4 text-center text-2xl font-bold">Shopping Cart</h1>
        <div className="mx-auto max-w-5xl gap-4 flex flex-col-reverse justify-center px-6 md:flex-row md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <CartItem
              imageUrl="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              productName="Nike Air Max 2019"
              price="259.000 ₭"
            />
            <CartItem
              imageUrl="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
              productName="Nike Air Max 2019"
              price="259.000 ₭"
            />
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <Subtotal subtotal="$129.99" shipping="$4.99" total="$134.98" />
            <Button className=" w-full mt-6">Check out</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
