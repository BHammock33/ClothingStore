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
    title: "Wicked Weed Shirt(f)",
    imgSrc:
      "/images/beer/wicked.png",
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
        "/images/beer/bootBetter.jpeg",
    description:
        "Can you complete the boot challenge! Don't forget about the bubble!",
    price: 21.99,
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
        "/images/DnD/players.jpeg",
    description:
        "Your go to book to building your DnD character",
    price: 44.99,
    updatedPrice: 40.99,
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
        "/images/DnD/DmGuide.png",
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
  {
    _id: uuid(),
    title: "Craft Beer Tasting Journal",
    imgSrc:
        "/images/beer/journal.jpg",
    description:
        "Hardcover craft beer tasting journal with space to record tasting notes, ratings, and impressions. Includes helpful tips for beer tasting.",
    price: 10.99,
    updatedPrice: 14.99,
    starRating: 4.8,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Craft",
  },
  {
    _id: uuid(),
    title: "Craft Beer Bottle Opener",
    imgSrc:
        "/images/beer/opener.jpg",
    description:
        "Stainless steel craft beer bottle opener with a sleek design. Features a comfortable grip and built-in magnet for easy storage on the fridge.",
    price: 9.99,
    updatedPrice: 5.99,
    starRating: 3.8,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Craft",
  },
  {
    _id: uuid(),
    title: "Home Brewing Starter Kit",
    imgSrc:
        "/images/beer/brewKit.png",
    description:
        "Complete homebrewing starter kit including fermenter, airlock, brewing ingredients, and step-by-step instructions. Perfect for beginners.",
    price: 84.99,
    updatedPrice: 79.99,
    starRating: 4.3,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Craft",
  },
  {
    _id: uuid(),
    title: "Craft Beer Glass Set",
    imgSrc:
        "/images/beer/glasses.jpg",
    description:
        "Set of four assorted craft beer glasses suitable for different styles of beer",
    price: 29.99,
    updatedPrice: 24.99,
    starRating: 3.8,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Craft",
  },
  {
    _id: uuid(),
    title: "Carolina Hurricanes Replica Jersey",
    imgSrc:
        "/images/hockey/jersey.jpg",
    description:
        "Officially licensed Carolina Hurricanes replica jersey with the team logo and colors. Made of breathable fabric for comfort during game days or watching at home",
    price: 119.99,
    updatedPrice: 119.99,
    starRating: 4.5,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Hockey",
  },
  {
    _id: uuid(),
    title: "Carolina Hurricanes Logo Cap",
    imgSrc:
        "/images/hockey/cap.jpg",
    description:
        "Adjustable Carolina Hurricanes cap featuring the team logo embroidered on the front. Made of durable cotton twill with a curved brim for a classic look.",
    price: 24.99,
    updatedPrice: 19.99,
    starRating: 4.0,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Hockey",
  },
  {
    _id: uuid(),
    title: "Sherpa Blanket",
    imgSrc:
        "/images/hockey/blanket.jpg",
    description:
        "Cozy Carolina Hurricanes sherpa blanket featuring the team logo and colors. Perfect for keeping warm during chilly game nights or lounging on the couch",
    price: 39.99,
    updatedPrice: 44.99,
    starRating: 4.8,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Hockey",
  },
  {
    _id: uuid(),
    title: "Team Flag",
    imgSrc:
        "/images/hockey/flag.jpg",
    description:
        "Large Carolina Hurricanes team flag suitable for displaying indoors or outdoors. Made of durable polyester with grommets for easy hanging.",
    price: 29.99,
    updatedPrice: 24.99,
    starRating: 4.2,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Hockey",
  },
  {
    _id: uuid(),
    title: "Carolina Hurricanes Stainless Steel Tumbler",
    imgSrc:
        "/images/hockey/cup.jpg",
    description:
        " Insulated stainless steel tumbler featuring the Carolina Hurricanes logo. Keeps beverages hot or cold for hours, perfect for enjoying drinks while watching the game",
    price: 32.99,
    updatedPrice: 34.99,
    starRating: 4.7,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Hockey",
  },
  {
    _id: uuid(),
    title: "Tampa Bay Buccaneers Tailgate Chair",
    imgSrc:
        "/images/football/chair.jpg",
    description:
        "Folding Tampa Bay Buccaneers tailgate chair featuring the team logo and colors. Comes with a built-in cup holder and carrying bag for easy transportation.",
    price: 49.99,
    updatedPrice: 44.99,
    starRating: 4.3,
    size: "Regular",
    inStock: true,
    fastDelivery: false,
    category: "Football",
  },
  {
    _id: uuid(),
    title: "Tampa Bay Buccaneers Vintage T-Shirt",
    imgSrc:
        "/images/football/vShirt.jpg",
    description:
        "Retro-style Tampa Bay Buccaneers t-shirt with a distressed team logo for a vintage look. Made of soft, comfortable cotton fabric.",
    price: 29.99,
    updatedPrice: 24.99,
    starRating: 4.8,
    size: "Regular",
    inStock: false,
    fastDelivery: true,
    category: "Football",
  },
  {
    _id: uuid(),
    title: "Tampa Bay Buccaneers Ceramic Mug",
    imgSrc:
        "/images/football/mug.jpg",
    description:
        "Ceramic Tampa Bay Buccaneers mug featuring the team logo. Perfect for enjoying your favorite hot beverage while showing team pride.",
    price: 14.99,
    updatedPrice: 9.99,
    starRating: 3.2,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Football",
  },
  {
    _id: uuid(),
    title: "Tampa Bay Buccaneers Fleece Throw Blanket",
    imgSrc:
        "/images/football/bucsBlanket.jpg",
    description:
        "Cozy Tampa Bay Buccaneers fleece throw blanket featuring the team logo and colors. Ideal for staying warm while watching games at home or at the stadium.",
    price: 49.99,
    updatedPrice: 40.99,
    starRating: 5.0,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Football",
  },
  {
    _id: uuid(),
    title: "Team Flag",
    imgSrc:
        "/images/football/flag.jpg",
    description:
        "Large Carolina Hurricanes team flag suitable for displaying indoors or outdoors. Made of durable polyester with grommets for easy hanging.",
    price: 29.99,
    updatedPrice: 24.99,
    starRating: 4.2,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Football",
  },
  {
    _id: uuid(),
    title: "Dungeons and Dragons DM Screen",
    imgSrc:
        "/images/DnD/dmScreen.png",
    description:
        "Sturdy, three-panel Dungeon Master's screen featuring essential reference tables, charts, and artwork to streamline gameplay. Helps Dungeon Masters manage encounters, track initiative, and keep game secrets hidden.",
    price: 24.99,
    updatedPrice: 24.99,
    starRating: 4.4,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "DnD",
  },
  {
    _id: uuid(),
    title: "Dungeons and Dragons Dice Set",
    imgSrc:
        "/images/DnD/dice.jpg",
    description:
        "High-quality polyhedral dice set designed for Dungeons & Dragons gameplay. Includes all the dice needed for rolling character stats, casting spells, and resolving battles.",
    price: 19.99,
    updatedPrice: 10.00,
    starRating: 4.4,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "DnD",
  },
  {
    _id: uuid(),
    title: "Dungeons and Dragons Art and Arcana Book",
    imgSrc:
        "/images/DnD/artBook.jpg",
    description:
        "Lavishly illustrated book exploring the history and art of Dungeons & Dragons. Features concept art, behind-the-scenes stories, and insights into the game's evolution.",
    price: 45.99,
    updatedPrice: 39.99,
    starRating: 4.7,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "DnD",
  },
  {
    _id: uuid(),
    title: "Dungeons and Dragons Miniatures Starter Set",
    imgSrc:
        "/images/DnD/minis.jpg",
    description:
        "Starter set of Dungeons & Dragons miniatures, featuring a variety of pre-painted figures representing heroes, monsters, and NPCs. Perfect for enhancing tabletop gameplay.",
    price: 35.99,
    updatedPrice: 29.99,
    starRating: 4.6,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "DnD",
  },
  {
    _id: uuid(),
    title: "Dungeons and Dragons Tavern Mug",
    imgSrc:
        "/images/DnD/tavernMug.jpg",
    description:
        "Ceramic mug featuring iconic Dungeons & Dragons artwork, perfect for enjoying a beverage during game sessions or displaying as a collectible.",
    price: 13.99,
    updatedPrice: 12.99,
    starRating: 4.5,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "DnD",
  },
  {
    _id: uuid(),
    title: "Tampa Bay Rays Car Decal",
    imgSrc:
        "/images/baseball/raysSticker.jpg",
    description:
        " Weather-resistant Tampa Bay Rays car decal featuring the team's logo. Perfect for showing off team pride on your vehicle's window or bumper.",
    price: 10.99,
    updatedPrice: 8.99,
    starRating: 3.2,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Baseball",
  },
  {
    _id: uuid(),
    title: "Tampa Bay Rays Insulated Tumbler",
    imgSrc:
        "/images/baseball/raysCup.jpg",
    description:
        "Double-walled, insulated tumbler featuring the Tampa Bay Rays logo. Keeps beverages hot or cold for extended periods, ideal for game days or everyday use.",
    price: 30.99,
    updatedPrice: 29.99,
    starRating: 4.4,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Baseball",
  },
  {
    _id: uuid(),
    title: "Tampa Bay Rays Beach Towel",
    imgSrc:
        "/images/baseball/towel.jpg",
    description:
        "Vibrant Tampa Bay Rays beach towel featuring the team's logo and colors. Made of soft and absorbent cotton, perfect for lounging by the pool or at the beach.",
    price: 22.99,
    updatedPrice: 22.99,
    starRating: 4.6,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Baseball",
  },
  {
    _id: uuid(),
    title: "Tampa Bay Rays Ball Cap",
    imgSrc:
        "/images/hockey/raysCap.jpg",
    description:
        "Adjustable Tampa Bay Rays baseball cap featuring the team logo embroidered on the front. Made of durable cotton twill with a curved brim.",
    price: 20.99,
    updatedPrice: 19.99,
    starRating: 4.5,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Baseball",
  },
  {
    _id: uuid(),
    title: "Tampa Bay Rays Authentic Jersey",
    imgSrc:
        "/images/baseball/raysJersey.jpg",
    description:
        "Official Tampa Bay Rays authentic jersey with the team's colors and logo. Made of high-quality fabric, identical to what the players wear on the field.",
    price: 139.99,
    updatedPrice: 12.99,
    starRating: 4.8,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Baseball",
  },


];