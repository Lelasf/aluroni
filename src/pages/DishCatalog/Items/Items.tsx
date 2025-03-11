import { Catalog } from "types/dishes";
import catalog from "data/menu.json";
import Item from "./Item/Item";
import styles from "./Items.module.scss";
import { useState, useEffect } from "react";

interface Props {
  search: string;
  filter: number | null;
  sorter: string;
}

export default function Items(props: Props) {
  const [list, setList] = useState(catalog);
  const { search, filter, sorter } = props;

  function isSearchMatch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function isFilterMatch(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function sortList(newList: Catalog) {
    switch (sorter) {
      case "portion":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "people_qty":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "price":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = catalog.filter(
      (item) => isSearchMatch(item.title) && isFilterMatch(item.category.id)
    );
    setList(sortList(newList));
  }, [search, filter, sorter]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
