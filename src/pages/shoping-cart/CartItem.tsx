import React from "react";
import { Button } from "@src/components/ui/button";

type CartItemProps = {
  imageUrl: string;
  productName: string;
  price: string;
};

/**
 * The `CartItem` component in TypeScript React renders a styled card displaying product information
 * and quantity controls with a button to remove the item.
 * @param  - The `CartItem` component is a functional component in React that displays information
 * about a product in a shopping cart. It takes three props as input:
 * @returns The `CartItem` component is being returned. It is a functional component that displays a
 * product item in a shopping cart. The component includes the product image, name, price, quantity
 * input with increment and decrement buttons, and a button to remove the item from the cart.
 */
export const CartItem: React.FC<CartItemProps> = ({
  imageUrl,
  productName,
  price,
}) => {
  return (
    <div className=" mb-6 rounded-lg bg-white p-6 shadow-md space-y-2 flex flex-col ">
      <div className="justify-between sm:flex sm:justify-start">
        <img
          src={imageUrl}
          alt="product-image"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{productName}</h2>
            <p className="text-sm">{price}</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                {" "}
                -{" "}
              </span>
              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="number"
                value="2"
                min="1"
              />
              <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                {" "}
                +{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Button className=" w-fit self-center sm:self-end">Remove item</Button>
    </div>
  );
};
