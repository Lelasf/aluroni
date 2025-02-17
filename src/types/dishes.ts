import catalog from "data/menu.json";

export type Catalog = typeof catalog;

export type Dish = (typeof catalog)[0];
