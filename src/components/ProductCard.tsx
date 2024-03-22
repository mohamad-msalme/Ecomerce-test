import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { EyeIcon } from "lucide-react";
import { Product } from "@src/models/Product";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { useNavigate } from "react-router-dom";

type ProductCardProps = Product & {
  lastElement: boolean;
  innerRef: React.Ref<HTMLParagraphElement>;
};
export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
  store,
  views,
  stock_status,
  price,
  lastElement,
  innerRef,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={(e) => {
        console.log(e);
        console.log({ asdasd: 4545 });
        navigate(`/${id}`);
      }}
      className="relative cursor-pointer shadow-md grid overflow-hidden grid-rows-[250px] grid-cols-1 gap-4"
    >
      <CardHeader className="grid grid-rows-[250px] grid-cols-1 overflow-hidden p-0">
        <img
          className="object-cover w-full h-full"
          src={import.meta.env.VITE_BASE_URL_ASSETS + image}
          alt=""
        />
      </CardHeader>
      <CardContent className=" flex flex-col space-y-4 mb-auto">
        <div className="flex justify-between item-center flex-wrap gap-4">
          <p className="text-gray-500 font-medium  ">{store.name}</p>
          <div className="flex items-center">
            <EyeIcon className=" w-5 h-5 text-gray-500" />
            <p className="text-gray-600 font-bold text-sm ml-1">
              {views} views
            </p>
          </div>
          <Badge className=" bg-green-500 px-3 py-1">
            {stock_status.label}
          </Badge>
        </div>
        <h3 className=" font-bold text-gray-800 md:text-xl text-xl line-clamp-1">
          {name}
        </h3>
        <CardDescription
          className=" line-clamp-3"
          dangerouslySetInnerHTML={{ __html: description }}
        ></CardDescription>
        <p className="text-xl font-bold text-gray-800">
          {"$" + price.toString()}
        </p>
        <div
          ref={lastElement ? innerRef : undefined}
          className=" flex justify-center gap-2"
        >
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              console.log("first");
            }}
            size="sm"
          >
            Add to cart{" "}
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("Whilst");
            }}
            size="sm"
          >
            Add to Whilst
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
