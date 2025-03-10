import { Dish } from "types/dishes";
import styles from "./Item.module.scss";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function Item(props: Dish) {
  const { id, title, description, photo, category, size, serving, price } =
    props;

  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <div className={styles.tags}>
          <div
            className={classNames({
              [styles.tags__type]: true,
              [styles[`tags__type${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.tags__portion}>{size}g</div>
          <div className={styles.tags__peopleQty}>
            Serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className={styles.tags__price}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
