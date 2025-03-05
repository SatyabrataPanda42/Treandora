import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 shadow-md">
    <h1 className="text-xl font-bold">Myntra Clone</h1>
    <input
      type="text"
      placeholder="Search for products"
      className="border rounded px-2 py-1"
    />
    <Button>Login</Button>
  </nav>
);

const Hero = () => (
  <div className="bg-gray-100 p-8 text-center">
    <h2 className="text-2xl font-semibold">Exclusive Fashion Deals</h2>
    <p>Shop the latest trends now</p>
    <Button className="mt-4">Shop Now</Button>
  </div>
);

const ProductCard = ({ name, price, img }) => (
  <div className="border rounded-lg p-4 shadow-sm">
    <img src={img} alt={name} className="w-full h-40 object-cover" />
    <h3 className="font-medium mt-2">{name}</h3>
    <p className="text-sm text-gray-600">${price}</p>
    <Button className="mt-2">Add to Cart</Button>
  </div>
);

const ProductList = () => {
  const products = [
    { name: "T-shirt", price: 20, img: "https://via.placeholder.com/150" },
    { name: "Jeans", price: 40, img: "https://via.placeholder.com/150" },
    { name: "Shoes", price: 60, img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

const Footer = () => (
  <footer className="text-center p-4 bg-gray-200 mt-8">
    <p>&copy; 2025 Myntra Clone. All rights reserved.</p>
  </footer>
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
