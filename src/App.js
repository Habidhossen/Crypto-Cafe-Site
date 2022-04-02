import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import CoinDetail from "./components/CoinDetail/CoinDetail";
import Coins from "./components/Coins/Coins";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coin-detail/:id" element={<CoinDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
