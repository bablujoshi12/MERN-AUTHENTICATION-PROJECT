require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("../model/ProductModel");

const products = [
  {
    name: "Nike Air Max",
    description: "Comfortable and stylish running shoes",
    price: 4999,
    category: "Shoes",
    stock: 20,
    image: "/images/Nike_Air_Max.jpg",
  },
  {
    name: "Adidas Ultraboost",
    description: "Premium running shoes with extra cushioning",
    price: 6999,
    category: "Shoes",
    stock: 15,
    image: "/images/Adidas_Ultraboost.jpg",
  },
  {
    name: "Puma Sneakers",
    description: "Casual sneakers for everyday use",
    price: 2999,
    category: "Shoes",
    stock: 25,
    image: "/images/puma_snikers.jpg",
  },
  {
    name: "Samsung Galaxy Watch",
    description: "Smartwatch with fitness and health tracking",
    price: 8999,
    category: "Electronics",
    stock: 10,
    image: "/images/Samsung_Galaxy_Watch.jpg",
  },
  {
    name: "Boat Rockerz 450",
    description: "Wireless headphones with powerful bass",
    price: 1499,
    category: "Electronics",
    stock: 30,
    image: "/images/Boat_Rockerz_450.jpg",
  },
  {
    name: "Sony Wireless Headphones",
    description: "Premium headphones with clear sound quality",
    price: 5999,
    category: "Electronics",
    stock: 12,
    image: "/images/Sony_wireless_headphone.jpg",
  },
  {
    name: "Apple AirPods",
    description: "Wireless earbuds with high quality audio",
    price: 12999,
    category: "Electronics",
    stock: 8,
    image: "/images/Apple_airpods.jpg",
  },
  {
    name: "OnePlus Nord CE",
    description: "Powerful smartphone with a smooth display",
    price: 18999,
    category: "Mobiles",
    stock: 14,
    image: "/images/OnePlus_Nord_CE.jpg",
  },
  {
    name: "Samsung Galaxy A55",
    description: "Premium mid-range smartphone",
    price: 27999,
    category: "Mobiles",
    stock: 10,
    image: "/images/Samsung_Galaxy_A55.jpg",
  },
  {
    name: "Redmi Note 14",
    description: "Affordable smartphone with excellent performance",
    price: 15999,
    category: "Mobiles",
    stock: 18,
    image: "/images/Redmi_Note_14.jpg",
  },
  {
    name: "Levi's Denim Jeans",
    description: "Classic blue denim jeans",
    price: 2499,
    category: "Clothing",
    stock: 35,
    image: "/images/Levi's_Denim_Jeans.jpg",
  },
  {
    name: "Polo T-Shirt",
    description: "Comfortable cotton polo t-shirt",
    price: 999,
    category: "Clothing",
    stock: 40,
    image: "/images/Polo_T-Shirt.jpg",
  },
  {
    name: "Hooded Sweatshirt",
    description: "Warm and comfortable hoodie for winter",
    price: 1799,
    category: "Clothing",
    stock: 25,
    image: "/images/Hooded_Sweatshirt.jpg",
  },
  {
    name: "Casual Shirt",
    description: "Slim fit casual shirt for men",
    price: 1299,
    category: "Clothing",
    stock: 30,
    image: "/images/Casual_Shirt.jpg",
  },
  {
    name: "Wildcraft Backpack",
    description: "Durable backpack for college and travel",
    price: 1999,
    category: "Bags",
    stock: 20,
    image: "/images/Wildcraft_Backpack.jpg",
  },
  {
    name: "American Tourister Bag",
    description: "Spacious travel backpack with multiple compartments",
    price: 2499,
    category: "Bags",
    stock: 15,
    image: "/images/American_Tourister_Bag.jpg",
  },
  {
    name: "Casio Digital Watch",
    description: "Classic digital watch with multiple features",
    price: 1799,
    category: "Watches",
    stock: 22,
    image: "/images/Casio_Digital_Watch.jpg",
  },
  {
    name: "Fastrack Analog Watch",
    description: "Stylish analog watch for everyday wear",
    price: 2299,
    category: "Watches",
    stock: 18,
    image: "/images/Fastrack_Analog_Watch.jpg",
  },
  {
    name: "HP Wireless Mouse",
    description: "Ergonomic wireless mouse for work and gaming",
    price: 799,
    category: "Accessories",
    stock: 45,
    image: "/images/HP_Wireless_Mouse.jpg",
  },
  {
    name: "Logitech Keyboard",
    description: "Comfortable wireless keyboard for daily use",
    price: 1499,
    category: "Accessories",
    stock: 28,
    image: "/images/Logitech-Keyboard.jpg",
  },
];

const initDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Atlas Database connected");

    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log(`${products.length} products inserted successfully`);

    await mongoose.connection.close();
  } catch (err) {
    console.log("Error:", err.message);
  }
};

initDB();
