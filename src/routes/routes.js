import Home from "pages/Home/Home";
import DishCatalog from "pages/DishCatalog/DishCatalog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "components/Menu/Menu";

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<DishCatalog />} />
      </Routes>
    </Router>
  );
}
