import React from "react";
import { Button } from "./ui/button";
import { DropDownMenuCard, DropDownMenuCardProps } from "./DropDownMenuCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { BadgeBtn } from "./ui/BadgeBtn";
import { ShoppingBagIcon } from "lucide-react";

const data: DropDownMenuCardProps[] = [
  {
    id: "1",
    name: "Wireless Earbuds",
    catagrories: ["Black", "In-ear", "Black"],
    price: "79.00",
    img: "decoala/deck-spot-14-a19.jpg",
  },
  {
    id: "2",
    name: "Sunglasses",
    catagrories: ["Reflective", "lenses"],
    price: "99.00",
    img: "decoala/deck-spot-14-a19.jpg",
  },
  {
    id: "3",
    name: "Smartwatch",
    catagrories: ["Waterproof", "lenses"],
    price: "129.00",
    img: "decoala/deck-spot-14-a19.jpg",
  },
];

export const ShoppingBag: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <BadgeBtn length={data.length}>
          <ShoppingBagIcon className=" size-5" />
        </BadgeBtn>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] overflow-y-auto">
        <DropdownMenuLabel className=" text-lg">My Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {data.map((item) => (
            <DropDownMenuCard {...item} />
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Button className=" w-full">Go to cart</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
