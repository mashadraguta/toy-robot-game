import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { GameModel, Robot, Square } from "../Models/reduxModels";

const initialGameState: GameModel = {
  square: {
    x: 1,
    y: 1,
    filled: false,
  },
  robot: {
    column: 0,
    row: 0,
    direction: "",
  },
  board:[],
  squareNr:1,
};


const gameSlice = createSlice({
    name:'game',
    initialState: initialGameState,
    reducers:{
        setBoard(state,action:PayloadAction<number>){
            state.squareNr = action.payload;
        },
        setSquare(state,action:PayloadAction<Square>){
            state.square = action.payload;
        },
        setRobot(state,action:PayloadAction<Robot>){
            state.robot = action.payload
        }
    }
})

export default gameSlice