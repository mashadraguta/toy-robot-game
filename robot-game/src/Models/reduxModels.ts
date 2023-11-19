// export const DIRECTIONS = {
//     north: "NORTH",
//     south: "SOUTH",
//     east: "EAST",
//     west: "WEST",
//   };

export interface Square {
  'x': number;
  'y': number;
  'filled': boolean;
}
export interface Robot {
  'column': number;
  'row': number;
  'direction': string;
}


export interface GameModel{
  board:Array<Square>,
  square: Square,
  robot: Robot,
  squareNr:number
}