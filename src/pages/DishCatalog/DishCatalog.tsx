import styles from "./DishCatalog.module.scss";
import { useState } from "react";
import Filters from "./Filters/Filters";
import Items from "./Items/Items";
import SearchBar from "./SearchBar/SearchBar";
import Sorter from "./Sorter/Sorter";


export default function DishCatalog() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [sorter, setSorter] = useState("");
  return (
    <main>
     
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do codigo e da massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Menu</h3>
        <SearchBar search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Sorter sorter={sorter} setSorter={setSorter} />
        </div>
        <Items search={search} filter={filter} sorter={sorter} />
      </section>
    </main>
  );
}
