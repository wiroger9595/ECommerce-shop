import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Key",
      email: "key01@sample.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Amy",
      email: "amy02@sample.com",
      password: bcrypt.hashSync("56789"),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: "1",
      name: "Coco nut drink",
      category: "drink",
      image: "/images/p1.jpeg",
      slug: "drinka",
      price: 1.5,
      countInStock: 10,
      brand: "C2O",
      rating: 4.2,
      numReviews: 10,
      description: "very popular and health drink",
    },
    {
      // _id: "2",
      name: "Coco nut water drink",
      category: "drink",
      image: "/images/p2.jpeg",
      slug: "drinkb",
      price: 2.5,
      countInStock: 10,
      brand: "PURE",
      rating: 4.4,
      numReviews: 15,
      description: "very popular and health drink",
    },
    {
      // _id: "3",
      name: "Aloe drink",
      category: "drink",
      image: "/images/p3.jpeg",
      slug: "drinkc",
      price: 3.5,
      countInStock: 20,
      brand: "PURE",
      rating: 4.4,
      numReviews: 25,
      description: "very popular and health drink",
    },
    {
      // _id: "4",
      name: "Aloe mango drink",
      category: "drink",
      image: "/images/p4.jpeg",
      slug: "drinkd",
      price: 2.8,
      countInStock: 17,
      brand: "PURE",
      rating: 4.4,
      numReviews: 35,
      description: "very popular and health drink",
    },
  ],
};

export default data;
