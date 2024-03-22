import React from "react";
import { DropDownMenuCard, DropDownMenuCardProps } from "./DropDownMenuCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { BadgeBtn } from "./ui/BadgeBtn";
import { HeartIcon } from "lucide-react";

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

export const Wishlist: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="">
        <BadgeBtn length={data.length}>
          <HeartIcon className=" size-5" />
        </BadgeBtn>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] overflow-y-auto ">
        <DropdownMenuLabel className=" text-lg">My Wishlist</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {data.map((item) => (
            <DropDownMenuCard {...item} wishlist />
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
