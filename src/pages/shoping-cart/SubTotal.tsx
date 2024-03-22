type SubtotalProps = {
  subtotal: string;
  shipping: string;
  total: string;
};

/**
 * The Subtotal component in TypeScript React displays subtotal, shipping, and total amounts in a
 * styled format.
 * @param  - The `Subtotal` component in the code snippet is a React functional component that takes in
 * three props: `subtotal`, `shipping`, and `total`. These props are used to display the subtotal,
 * shipping cost, and total cost of an order within the component.
 * @returns The `Subtotal` component is being returned. It displays the subtotal, shipping cost, and
 * total cost in a styled format within a `div` element. The subtotal, shipping, and total values are
 * passed as props to the component and displayed accordingly using JSX.
 */
export const Subtotal: React.FC<SubtotalProps> = ({
  subtotal,
  shipping,
  total,
}) => {
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">{subtotal}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">{shipping}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">{total}</p>
        </div>
      </div>
    </div>
  );
};
