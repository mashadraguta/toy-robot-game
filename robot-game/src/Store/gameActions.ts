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

export const setAllSquares = (
  array: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    dispatch(gameActions.setArrayOfSquares(array));
  };
};
export const setFilledToTrueAction = (
  x:number,
  y:number,
  filled: boolean
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
  //getState().game.board.forEach(i=> (i.x === x && i.y === y) ?  : '')
  
  dispatch(gameActions.setSquare({
    x:y,
    y:y,
    filled: true,
  }))
    
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




// export const setCoordsOfSquares = (
//   x: number,
//   y: number,
//   filled: boolean
// ): ThunkAction<void, RootState, unknown, AnyAction> => {
//   return (dispatch, getState) => {
//     //@ts-ignore
//     dispatch(gameActions.setSquare(x, y, filled));
//   };
// };
