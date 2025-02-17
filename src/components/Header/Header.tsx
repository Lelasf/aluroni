import styles from "./Header.module.scss";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do codigo e da massa</div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
