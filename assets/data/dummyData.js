const restaurantList = [
  {
    id: 2,
    name: "Food Circles",
    image: "https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo.png",
    location: "Sheedaha",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
    cuisines: ["Indian", "Turkish", "French"],
  },
  {
    id: 3,
    name: "Burger King",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png",
    location: "Star Area",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
    cuisines: ["Somali", "Italian", "French", "Indian"],
  },
  {
    id: 4,
    name: "Domino's Pizza",
    image:
      "https://www.zilliondesigns.com/blog/wp-content/uploads/Dominos-Pizza-logo-2.jpg",
    location: "Masalaha",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
    cuisines: ["Arabic", "Yemani", "Ethiopian", "Indian"],
  },
  {
    id: 5,
    name: "Happy Veggie",
    image:
      "data:image/png;base64,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",
    location: "Gantaalaha",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
    cuisines: ["Chinese", "Yemani", "Japanese", "Turkish"],
  },
];

const couponList = [
  {
    id: 5,
    name: "Happy Veggie",
    couponId: 2131,
    value: "-33%",
    ends: "Satuday 23rd",
    image:
      "data:image/png;base64,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",
    location: "Gantaalaha",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
  },
  {
    id: 4,
    name: "Domino's Pizza",
    couponId: 7384,
    value: "-120,000 SLSH",
    ends: "Monday 30th",
    image:
      "https://www.zilliondesigns.com/blog/wp-content/uploads/Dominos-Pizza-logo-2.jpg",
    location: "Masalaha",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
  },
];

export { restaurantList, couponList };
