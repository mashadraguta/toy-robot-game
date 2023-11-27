import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import gameSlice from "./gameSlice";

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: { game: gameSlice.reducer },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  });
};


const store = createReduxStore()

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;


