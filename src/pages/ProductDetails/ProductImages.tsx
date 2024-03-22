import React from "react";

type ProductImagesProps = {
  images: string[];
};

/* This code snippet defines a React functional component named `ProductImages`. It takes in a prop
object `images` which is an array of strings representing image URLs. */
export const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [state, setState] = React.useState(images[0]);
  return (
    <div className="grid gap-4">
      <img
        alt="Product Image"
        className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
        height={600}
        src={import.meta.env.VITE_BASE_URL_ASSETS + state}
        width={600}
      />
      <div className="hidden md:flex gap-4 items-start">
        {images.map((src) => (
          <button
            key={src}
            onClick={() => setState(src)}
            className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50"
          >
            <img
              alt="Preview thumbnail"
              className="aspect-square object-cover"
              height={100}
              src={import.meta.env.VITE_BASE_URL_ASSETS + src}
              width={100}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
