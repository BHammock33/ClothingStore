
import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    img: "/images/categories/nhlLogo.svg",
    categoryName: "Hockey",
  },
  {
    _id: uuid(),
    img: "/images/categories/Nfl.png",
    categoryName: "Football",
  },
  {
    _id: uuid(),
    img: "/images/categories/Mlb.png",
    categoryName: "Baseball",
  },
  {
    _id: uuid(),
    img: "/images/categories/craftBeer.png",
    categoryName: "Craft",
  },
 
];