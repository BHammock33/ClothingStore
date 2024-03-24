import { v4 as uuid } from "uuid";

//mock Db for now
export const products = [
  {
    _id: uuid(),
    title: "Canes Shirt",
    imgSrc:
      "https://fanatics.frgimages.com/carolina-hurricanes/mens-fanatics-branded-black-carolina-hurricanes-team-primary-logo-t-shirt_pi3805000_altimages_ff_3805865-a5acfffc24de1b899e86alt1_full.jpg?_hv=2&w=900",
    description:
      "Each time the Carolina Hurricanes hit the ice, you want to show off just how much you love them. Now you can do just that by wearing this Carolina Hurricanes Primary Logo T-shirt. This Fanatics Branded tee features bold Carolina Hurricanes graphics across the front, which will help you illustrate your die-hard loyalty for the team.",
    price: 27.99,
    updatedPrice: 19.59,
    starRating: 4.5,
    size: "Oversize",
    inStock: true,
    fastDelivery: true,
    category: "Hockey",
  }, //1
  {
    _id: uuid(),
    title: "Bucs Jersey",
    imgSrc:
      "https://fanatics.frgimages.com/tampa-bay-buccaneers/mens-nike-baker-mayfield-red-tampa-bay-buccaneers-game-jersey_ss5_p-200057864+pv-1+u-omba58mwcumjsw2pgm68+v-3b7kddc8tlzpggnll0wd.jpg?_hv=2&w=900",
    description:
      "Rep the on-field look of your favorite Tampa Bay Buccaneers player with this Baker Mayfield Game Jersey from Nike. Its heat-sealed name, numbers and team details provide a kickoff-ready aesthetic while also offering a comfortable, lightweight feel. Designed for ease of movement, this jersey has a versatile tailored fit and features mesh side panels for added ventilation as you celebrate every big play by the Tampa Bay Buccaneers this season.",
    price: 129.99,
    updatedPrice: 129.99,
    starRating: 4.1,
    size: "Oversize",
    inStock: true,
    fastDelivery: true,
    category: "Football",
  }, //3
  {
    _id: uuid(),
    title: "Rays Up",
    imgSrc:
      "https://fanatics.frgimages.com/tampa-bay-rays/mens-nike-navy-tampa-bay-rays-rally-rule-t-shirt_pi4913000_altimages_ff_4913684-3dda1879e99fee60038falt1_full.jpg?_hv=2&w=900",
    description:
      "180 GSM, 100% Cotton Single Jersey Pre-Shrunk & Bio-Washed Fabric,Screen Printed, Oversize Fit, Each piece is hand dyed making it abstract, unique, and slightly different From the Listing Image ,Colors may vary due to photography and your screen setting",
    price: 34.99,
    updatedPrice: 34.99,
    starRating: 3.8,
    size: "Oversize",
    inStock: true,
    fastDelivery: true,
    category: "Baseball",
  }, //4
  {
    _id: uuid(),
    title: "Wicked Weed F Shirt",
    imgSrc:
      "/images/wicked.png",
    description:
      "Bella + Canvas Triblend Collection Color: Neon Green Feminine sizing 50% Polyester, 25% cotton, 25% Rayon",
    price: 24.99,
    updatedPrice: 24.99,
    starRating: 3.8,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Craft",
  },
  {
    _id: uuid(),
    title: "Das Boot!",
    imgSrc:
        "/images/bootBetter.png",
    description:
        "Can you complete the boot challenge! Don't forget about the bubble!",
    price: 15.99,
    updatedPrice: 20.00,
    starRating: 4.5,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Craft",
  },
  {
    _id: uuid(),
    title: "Players Handbook",
    imgSrc:
        "/images/players.jpeg",
    description:
        "Your go to book to building your DnD character",
    price: 44.99,
    updatedPrice: 44.99,
    starRating: 4.8,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "DnD",
  },
  {
    _id: uuid(),
    title: "Dungeon Masters Guide",
    imgSrc:
        "/images/DmGuide.png",
    description:
        "Everything you need to start your own Dungeon and Dragons Game",
    price: 49.99,
    updatedPrice: 39.99,
    starRating: 5.0,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "DnD",
  },//5

];