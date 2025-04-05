const tshirts = [
  { title: "Blue T-Shirt", image: "images/blue-t-shirt.jpg", price: 7.99, stock: 4 },
  { title: "Bright Purple T-Shirt", image: "images/bright-purple-t-shirt.jpg", price: 5.99, stock: 1 },
  { title: "Cobalt Blue T-Shirt", image: "images/cobalt-blue-t-shirt.jpg", price: 9.99, stock: 5 },
  { title: "Green T-Shirt", image: "images/green-t-shirt.jpg", price: 6.99, stock: 0 },
  { title: "Grey T-Shirt", image: "images/grey-t-shirt.jpg", price: 4.99, stock: 2 },
  { title: "Light Green T-Shirt", image: "images/light-green-t-shirt.jpg", price: 7.99, stock: 4 },
  { title: "Purple T-Shirt", image: "images/purple-t-shirt.jpg", price: 7.99, stock: 0 },
  { title: "Red T-Shirt", image: "images/red-t-shirt.jpg", price: 6.99, stock: 3 },
  { title: "Teal T-Shirt", image: "images/teal-t-shirt.jpg", price: 7.99, stock: 2 }
];

  
  function App() {
    const [products, setProducts] = React.useState(tshirts);
  
    const handleBuy = (index, qty) => {
      const updated = [...products];
      updated[index].stock -= qty;
      setProducts(updated);
    };
  
    return (
      <div style={{ padding: "1rem", fontFamily: "Arial" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>T-Shirt Store</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
          {products.map((shirt, index) => (
            <div key={index} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
              <img src={shirt.image} alt={shirt.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <h2>{shirt.title}</h2>
              <p>${shirt.price.toFixed(2)}</p>
              {shirt.stock > 0 ? (
                <div>
                  <p style={{ color: "green" }}>In Stock: {shirt.stock}</p>
                  <select id={`qty-${index}`}>
                    {Array.from({ length: shirt.stock }, (_, i) => i + 1).map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <button
                    style={{ marginLeft: "0.5rem" }}
                    onClick={() => {
                      const qty = parseInt(document.getElementById(`qty-${index}`).value);
                      handleBuy(index, qty);
                    }}
                  >
                    Buy
                  </button>
                </div>
              ) : (
                <p style={{ color: "red" }}>Out of Stock</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);