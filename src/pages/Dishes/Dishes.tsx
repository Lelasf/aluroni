import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { lazy } from "react";
import styles from "./Dishes.module.scss";
import catalog from "data/menu.json";

const NotFound = lazy(() => import("pages/NotFound/NotFound"));
const DishTags = lazy(() => import("components/DishTags/DishTags"));
const Header = lazy(() => import("components/Header/Header"));

export default function Dishes() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dish = catalog.find((item) => item.id === Number(id));
  if (!dish) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<Header />}>
        <Route
          index
          element={
            <>
              <button className={styles.back} onClick={() => navigate(-1)}>
                {"< Voltar"}
              </button>
              <section className={styles.container}>
                <h1 className={styles.title}>{dish.title}</h1>
                <div className={styles.image}>
                  <img src={dish.photo} alt={dish.title} />
                </div>
                <div className={styles.content}>
                  <p className={styles.content__description}>
                    {dish.description}
                  </p>
                  <DishTags {...dish} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
