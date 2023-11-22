
export interface Square {
  x: number;
  y: number;
  filled: boolean;
  element?: HTMLDivElement | null; 
}
export interface Robot {
  column: number;
  row: number;
  direction: string;
}
export interface Wall {
  column: number;
  row: number;
 
}

export interface GameModel{
  board:Array<Square>,
  square: Square,
  robot: Robot,
  wall: Wall,
  squareNr:number
}