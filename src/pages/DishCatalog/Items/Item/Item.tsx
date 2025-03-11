import { Dish } from "types/dishes";
import styles from "./Item.module.scss";
import { useNavigate } from "react-router-dom";
import { lazy, memo } from "react";

const DishTags = lazy(() => import("components/DishTags/DishTags"));

function Item(props: Dish) {
  const { id, title, description, photo } = props;
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
        <DishTags {...props} />
      </div>
    </div>
  );
}

export default memo(Item);
