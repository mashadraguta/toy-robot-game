import classNames from "classnames";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/ReduxHooks";
import { SquareT } from "../Models/reduxModels";
import { setAllSquares } from "../Store/gameActions";

import Robot from "./01.png";
import { useStyles } from "./Board.style";
import { RobotControls } from "./RobotControls";
import { WallControls } from "./WallControls";

export const Board = () => {
  let squares: Array<SquareT> = [];
  const stateRobot = useAppSelector((state) => state.game.robot);
  const stateDirection = useAppSelector((state) => state.game.robot.direction);
  const boardDimension = useAppSelector((state) => state.game.squareNr);
  const stateBoard = useAppSelector((state) => state.game.board);
  const dispatch = useAppDispatch();
  const styles = useStyles({ stateDirection, boardDimension });
  class Square {
    x: number;
    y: number;
    element?: HTMLElement | undefined;
    filled: boolean;
    constructor(x: number, y: number, filled: boolean) {
      this.x = x;
      this.y = y;
      this.filled = filled;
    }
  }
  for (let i = 1; i <= boardDimension; i++) {
    for (let j = 1; j <= boardDimension; j++) {
      let square = new Square(i, j, false);
      square.element = document.createElement("div");
      square.x = j;
      square.y = i;
      square.filled = false;
      squares.push(square);
    }
  }
  useEffect(() => {
    dispatch(setAllSquares(squares));
  }, [boardDimension]);
  return (
    <div className={styles.flexMain} data-testid='main-board'>
      <RobotControls />
      <div className={styles.container}>
        {[...stateBoard].reverse().map((item: any, index: number) => (
          <div
            key={index}
            data-testid='square-item'
            className={classNames(styles.gridItem, {
              [styles.filled]: item.filled,
            })}
          >
            {item.x == stateRobot.column && item.y == stateRobot.row ? (
              <img src={Robot} className={styles.robot} data-testid='robot-item'></img>
            ) : null}
          </div>
        ))}
      </div>
      <WallControls />
    </div>
  );
};
