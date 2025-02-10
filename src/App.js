import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import History from "./components/History";
import Map from "./components/Map";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./Footer";
import { Routes, Route } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/map" element={<Map />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
