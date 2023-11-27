import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameModel, Robot, SquareT } from "../Models/reduxModels";

export const initialGameState: GameModel = {
  square: {
    x: 1,
    y: 1,
    filled: false,
    element: null,
  },
  robot: {
    column: 1,
    row: 1,
    direction: "NORTH",
  },
  board: [],
  squareNr: 5,
};

export const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    setBoard(state, action: PayloadAction<number>) {
      state.squareNr = action.payload;
    },
    setFilled(state, action: PayloadAction<SquareT>) {
      const { x, y, filled } = action.payload;
      const index = state.board.findIndex(
        (square) => square.x === x && square.y === y
      );
      if (index !== -1) {
        state.board[index] = { ...state.board[index], filled: filled };
      }
    },
    setNewDirection(state, action: PayloadAction<any>) {
      const { direction } = action.payload;
      state.robot = { ...state.robot, direction: direction };
    },
    setRobot(state, action: PayloadAction<Robot>) {
      state.robot = action.payload;
    },
    setArrayOfSquares(state, action: PayloadAction<any>) {
      state.board = action.payload;
    },
    setRobotCoords(state, action: PayloadAction<Robot>) {
      state.robot = action.payload;
    },
  },
});

export default gameSlice;
