import gameSlice from "./gameSlice";

import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export const gameActions = gameSlice.actions;

export const setNumberOfSquares = (
  nr: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    dispatch(gameActions.setBoard(nr));
  };
};
