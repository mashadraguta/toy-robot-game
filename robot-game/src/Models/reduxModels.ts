
export interface SquareT {
  x: number;
  y: number;
  filled: boolean;
  element?: HTMLElement | null; 
}
export interface Robot {
  column: number;
  row: number;
  direction: string;
}

export interface GameModel{
  board:Array<SquareT>,
  square: SquareT,
  robot: Robot,
  squareNr:number
}