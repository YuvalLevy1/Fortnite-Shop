import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import ShopItem from "./ShopItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={Home()} />
          <Route path="/about" element={About()} />
          <Route path="/shop" element={Shop()} />
          <Route path="/shop/:id" element={<ShopItem />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

export default App;
