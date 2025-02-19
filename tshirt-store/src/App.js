import { useEffect } from "react";
import TShirtStore from "./TShirtStore";

function App() {
  useEffect(() => {
    document.title = "T-Shirts"; 
  }, []);

  return (
    <div className="App">
      <TShirtStore />
    </div>
  );
}

export default App;

