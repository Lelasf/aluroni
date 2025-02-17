import catalog from "../../data/menu.json";
import styles from "./Home.module.scss";
import ourHouse from "../../assets/nossa_casa.png";

export default function Home() {
  let recommendedDishes = [...catalog];

  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={styles.title}>Recomendações da Cozinha</h3>
      <div className={styles.recommended}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recommendedItem}>
            <div className={styles.recommendedItem__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommendedItem__button}>Ver Mais</button>
          </div>
        ))}
      </div>
      <h3 className={styles.title}>Nossa Casa</h3>
      <div className={styles.ourHouse}>
        <img src={ourHouse} alt="Casa do Aluroni" />
        <div className={styles.ourHouse__address}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
