import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import { Auth } from "./reducer/auth";
import { Assets } from "./reducer/assets";
import { User } from "./reducer/user";
import { UserAssets } from "./reducer/usserAssets";
import { Card } from "./reducer/card";
import thunk from "redux-thunk";
import logger from "redux-logger";
import AsyncStorage from "@react-native-async-storage/async-storage";

const config = {
  key: "root",
  storage: AsyncStorage,
  debug: true,
};

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      auth: Auth,
      card: Card,
      assets: Assets,
      user: User,
      userAssets: UserAssets,
    }),
    applyMiddleware(thunk, logger)
  );

  // const persistor = persistStore(store);

  // return { persistor, store };
  return {store};
};
