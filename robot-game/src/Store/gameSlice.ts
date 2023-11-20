import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameModel, Robot, Square } from "../Models/reduxModels";

const initialGameState: GameModel = {
  square: {
    x: 1,
    y: 1,
    filled: false,
    element: null,
  },
  robot: {
    column: 1,
    row: 1,
    direction: "",
  },
  board: [],
  squareNr: 5,
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    setBoard(state, action: PayloadAction<number>) {
      state.squareNr = action.payload;
    },
    setSquare(state, action: PayloadAction<Square>) {
      //@ts-ignore
      state.square = action.payload;
    },
    
    setRobot(state, action: PayloadAction<Robot>) {
      state.robot = action.payload;
    },
    setArrayOfSquares(state, action: PayloadAction<any>) {
      state.board = action.payload;
    },
    setFilledToTrue(state, action: PayloadAction<any>) {
      state.board = action.payload.filled
    },
    setRobotCoords(state, action: PayloadAction<Robot>) {
      state.robot = action.payload;
    },
    // setRobotNorth(state, action: PayloadAction<Robot>) {
    //   state.robot = action.payload;
    // },
    // setRobotSouth(state, action: PayloadAction<Robot>) {
    //   state.robot = action.payload;
    // },
  },
});

export default gameSlice;
