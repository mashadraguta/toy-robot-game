import gameSlice from "./gameSlice";

import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { Square } from "../Models/reduxModels";

export const gameActions = gameSlice.actions;
export const setNumberOfSquares = (
  nr: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    dispatch(gameActions.setBoard(nr));
  };
};
export const setAllSquares = (
  array: Array<Square>
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    dispatch(gameActions.setArrayOfSquares(array));
  };
};
export const setFilledToTrueAction = (
  x: number,
  y: number,
  filled:boolean
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    dispatch(gameActions.setFilled({ x, y ,filled}));
  };
};

export const placeRobotCoords = (
  x: number,
  y: number,
  dir: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    dispatch(
      gameActions.setRobotCoords({
        column: x,
        row: y,
        direction: dir,
      })
    );
  };
};
export const moveRobot = (
  x: number,
  y: number,
  dir: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    dispatch(
      gameActions.setRobotCoords({
        column: x,
        row: y,
        direction: dir,
      })
    );
  };
};
export const moveRobotNorth = (
  x: number,
  y: number,
  dir: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    let stateColumn = getState().game.robot.column;
    dispatch(
      gameActions.setRobotCoords({
        column: stateColumn + 1,
        row: y,
        direction: dir,
      })
    );
  };
};
export const moveRobotSouth = (
  x: number,
  y: number,
  dir: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    let stateColumn = getState().game.robot.column;
    dispatch(
      gameActions.setRobotCoords({
        column: stateColumn - 1,
        row: y,
        direction: dir,
      })
    );
  };
};
export const moveRobotWest = (
  x: number,
  y: number,
  dir: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    let stateRow = getState().game.robot.row;
    dispatch(
      gameActions.setRobotCoords({
        column: x,
        row: stateRow - 1,
        direction: dir,
      })
    );
  };
};
export const moveRobotEast = (
  x: number,
  y: number,
  dir: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    let stateRow = getState().game.robot.row;
    dispatch(
      gameActions.setRobotCoords({
        column: x,
        row: stateRow + 1,
        direction: dir,
      })
    );
  };
};

//north right -> west
//north left -> east
//east right -> south
//east right -> west
