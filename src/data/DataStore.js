import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";

export const HoneyStoreDataStore = createStore(ShopReducer);
