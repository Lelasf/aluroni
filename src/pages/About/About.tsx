import styles from "./About.module.scss";
import house from "../../assets/about/casa.png";

export default function About() {
  return (
    <section>
      <h3 className={styles.title}>Sobre Nós</h3>
      <div className={styles.aboutUs}>
        <img src={house} alt="Casa Aluroni" />
        <div className={styles.aboutUs__text}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </div>
    </section>
  );
}
