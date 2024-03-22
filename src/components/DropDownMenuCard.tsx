import React from "react";
import { useNavigate } from "react-router-dom";
import { DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { cn } from "@src/lib/utils";

export type DropDownMenuCardProps = {
  id: string;
  name: string;
  catagrories: string[];
  price: string;
  img: string;
  wishlist?: boolean;
};

export const DropDownMenuCard: React.FC<DropDownMenuCardProps> = ({
  id,
  name,
  catagrories,
  price,
  img,
  wishlist,
}) => {
  const src = import.meta.env.VITE_BASE_URL_ASSETS + img;
  const navigate = useNavigate();
  const handelClick = () => {
    console.log({ id });
    navigate("/");
  };
  return (
    <>
      <DropdownMenuItem className=" cursor-pointer" onClick={handelClick}>
        <div
          className={cn("flex items-center gap-4", {
            " flex-wrap": wishlist,
          })}
        >
          <img
            alt="Thumbnail"
            className="rounded-md aspect-square object-cover"
            height="64"
            src={src}
            width="64"
          />
          <div className="grid gap-1 text-xs mr-auto">
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {catagrories.join(", ")}
            </p>
            <p className="font-semibold">{price + " $"}</p>
          </div>
          <Button className={cn("w-full", { " hidden": !wishlist })}>
            Add to cart
          </Button>
        </div>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
    </>
  );
};
