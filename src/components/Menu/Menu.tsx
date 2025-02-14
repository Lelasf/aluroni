import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import NavBar from "./NavBar";

export default function Menu() {
  return (

      <nav className={styles.menu}>
        <Logo className={styles.menu__logo} />
        <ul className={styles.menu__list}>
          <NavBar />
        </ul>
      </nav>
  );
}
