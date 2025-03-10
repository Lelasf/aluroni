import Home from "pages/Home/Home";
import DishCatalog from "pages/DishCatalog/DishCatalog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "components/Menu/Menu";
import Header from "components/Header/Header";
import About from "pages/About/About";
import Footer from "components/Footer/Footer";
import NotFound from "pages/NotFound/NotFound";
import Dishes from "pages/Dishes/Dishes";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />

        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<DishCatalog />} />
            <Route path="about" element={<About />} />
          </Route>

          <Route path="*" element={<NotFound />} />
          <Route path="prato/:id" element={<Dishes />} />
        </Routes>

        <Footer />
      </Router>
    </main>
  );
}
