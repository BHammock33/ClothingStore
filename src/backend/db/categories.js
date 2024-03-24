
import { v4 as uuid } from "uuid";
//mock Db for now

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
  {
    _id: uuid(),
    img: "/images/categories/DnD.png",
    categoryName: "DnD",
  },
 
];