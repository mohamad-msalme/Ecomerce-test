import React from "react";
import { Button } from "@src/components/ui/button";
import { StarIcon } from "lucide-react";
import { Separator } from "@src/components/ui/separator";
import { ProductImages } from "./ProductImages";
import { useProductsData } from "../product/useProductsData";
import { ProductCustomerReview } from "./ProductCustomerReview";
import { useNavigate, useParams } from "react-router-dom";

/* This code snippet defines a functional component named `ProductDetail` in a TypeScript React
application. Here's a breakdown of what the component is doing: */
export const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const { productId } = useParams()
  const { data } = useProductsData(false);
  const productData = React.useMemo(() => {
    return data?.pages[0].data.find((item) => item.id === Number(productId || 0))
  }, [productId])
  
  return (
    <>
      <Button onClick={() => navigate(-1)}> Back</Button>
      <div className="grid md:grid-cols-2 items-start max-w-6xl gap-6 lg:gap-12 px-4 mx-auto py-6">
        <div className="grid gap-4 md:gap-10 items-start">
          <div className=" items-start">
            <div className="grid gap-4">
              <h1 className="font-bold text-3xl lg:text-4xl">
                {productData?.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
                (354 reviews)
              </div>
              <div className="text-4xl font-bold">{"$" + productData?.price}</div>
            </div>
          </div>
          <Separator />
          <div className="grid gap-4 text-sm leading-loose" >
            <p dangerouslySetInnerHTML={{__html: productData?.description || ""}}>
            </p>
          </div>
        </div>
        <div className="grid gap-3 items-start">
          <ProductImages
            images={productData?.images || []}
          />
        </div>
      </div>
      <ProductCustomerReview />
    </>
  );
};
