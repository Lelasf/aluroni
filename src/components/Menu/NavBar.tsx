import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Link to="/" className={styles.link}>
        Inicio
      </Link>
      <Link to="/catalog" className={styles.link}>
        Cardapio
      </Link>
      <Link to="/about" className={styles.link}>
        Sobre
      </Link>
    </>
  );
}
