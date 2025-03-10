const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

// my code from here
import { useState } from "react";

const tshirts = [
  { title: "Blue T-Shirt", image: "blue-t-shirt.jpg", price: 7.99, stock: 4 },
  { title: "Bright Purple T-Shirt", image: "bright-purple-t-shirt.jpg", price: 5.99, stock: 1 },
  { title: "Cobalt Blue T-Shirt", image: "cobalt-blue-t-shirt.jpg", price: 9.99, stock: 5 },
  { title: "Green T-Shirt", image: "green-t-shirt.jpg", price: 6.99, stock: 0 },
  { title: "Grey T-Shirt", image: "blue-t-shirt.jpg", price: 4.99, stock: 2 },
  { title: "Light Green T-Shirt", image: "light-green-t-shirt.jpg", price: 7.99, stock: 4 },
  { title: "Purple T-Shirt", image: "purple-t-shirt.jpg", price: 7.99, stock: 0 },
  { title: "Red T-Shirt", image: "red-t-shirt.jpg", price: 6.99, stock: 3 },
  { title: "Teal T-Shirt", image: "teal-t-shirt.jpg", price: 7.99, stock: 2 }
];

export function TShirtStore() {
  const [products, setProducts] = useState(tshirts);

  useEffect(() => {
    document.title = "T-Shirts"; 
  }, []);

  const handleBuy = (index, quantity) => {
    setProducts(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, stock: item.stock - quantity } : item
      )
    );
  };

  return (
    <div className="p-6">
    <h1 className="text-4xl font-bold text-left mb-6">T-Shirts</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((tshirt, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md">
          <img src={tshirt.image} alt={tshirt.title} className="w-full h-48 object-cover mb-2" />
          <h2 className="text-lg font-semibold">{tshirt.title}</h2>
          <p className="text-gray-700">${tshirt.price.toFixed(2)}</p>
          {tshirt.stock > 0 ? (
            <div>
              <p className="text-green-600">In Stock: {tshirt.stock}</p>
              <select
                className="border rounded p-1 my-2"
                onChange={(e) => handleBuy(index, Number(e.target.value))}
              >
                {Array.from({ length: tshirt.stock }, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
                onClick={() => handleBuy(index, 1)}
              >
                Buy
              </button>
            </div>
          ) : (
            <p className="text-red-500">Out of Stock</p>
          )}
        </div>
      ))}
    </div>
  </div>
);
}


