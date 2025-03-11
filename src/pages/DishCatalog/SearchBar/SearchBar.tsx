import React, { memo, useMemo } from "react";
import styles from "./SearchBar.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ search, setSearch }: Props) {
  const element = useMemo(() => <CgSearch size={20} color="#4C4D5E" />, []);
  return (
    <div className={styles.searcher}>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search"
      />
      {element}
    </div>
  );
}

export default memo(SearchBar);
