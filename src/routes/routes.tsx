import Menu from "components/Menu/Menu";
import Footer from "components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Header = lazy(() => import("components/Header/Header"));
const Home = lazy(() => import("pages/Home/Home"));
const About = lazy(() => import("pages/About/About"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));
const Dishes = lazy(() => import("pages/Dishes/Dishes"));
const DishCatalog = lazy(() => import("pages/DishCatalog/DishCatalog"));

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />

        <Suspense fallback={<p>...Carregando</p>}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="catalog" element={<DishCatalog />} />
              <Route path="about" element={<About />} />
            </Route>

            <Route path="*" element={<NotFound />} />
            <Route path="prato/:id" element={<Dishes />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </main>
  );
}
