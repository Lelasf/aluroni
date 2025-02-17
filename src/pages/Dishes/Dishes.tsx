import { useNavigate, useParams } from "react-router-dom";
import styles from "./Dishes.module.scss";
import catalog from "data/menu.json";
import classNames from "classnames";
import NotFound from "pages/NotFound/NotFound";

export default function Dishes() {
  const { id } = useParams();
  const dish = catalog.find((item) => item.id === Number(id));
  if (!dish) {
    return <NotFound />;
  }

  const navigate = useNavigate();

  return (
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
          <p className={styles.content__description}>{dish.description}</p>
          <div className={styles.tags}>
            <div
              className={classNames({
                [styles.tags__type]: true,
                [styles[`tags__type${dish.category.label.toLowerCase()}`]]:
                  true,
              })}
            >
              {dish.category.label}
            </div>
            <div className={styles.tags__portion}>{dish.size}g</div>
            <div className={styles.tags__peopleQty}>
              Serve {dish.serving} pessoa{dish.serving === 1 ? "" : "s"}
            </div>
            <div className={styles.tags__price}>R$ {dish.price.toFixed(2)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
