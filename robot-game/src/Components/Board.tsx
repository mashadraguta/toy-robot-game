import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/ReduxHooks";
import { Square } from "../Models/reduxModels";
import { setAllSquares } from "../Store/gameActions";


import Robot from "./01.png";
import { useStyles } from "./Board.style";
import { RobotControls } from "./RobotControls";
import { WallControls } from "./WallControls";





export const Board = () => {
    let squares: any = [];
    const stateRobot = useAppSelector((state) => state.game.robot);
    const stateDirection = useAppSelector((state) => state.game.robot.direction);
    const boardDimension = useAppSelector((state) => state.game.squareNr);

    const dispatch = useAppDispatch();
    const styles = useStyles({ stateDirection, boardDimension });
    class Square {
        x: number;
        y: number;
        element: HTMLElement | undefined;
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
            squares.push(square);
        }
    }
    useEffect(() => { dispatch(setAllSquares(squares)) }, [])
    return (
        <div className={styles.flexMain}>
            <RobotControls />
            <div className={styles.container} id="container">
                {squares.reverse().map((item: any, index: number) => (
                    <div>
                        <div key={index} className={styles.gridItem}>
                            {item.y}r {item.x}c
                            {item.x == stateRobot.row && item.y == stateRobot.column ? (
                                <img src={Robot} className={styles.robot}></img>
                            ) : null}
                        </div>

                    </div>
                ))}
            </div>
            <WallControls />
        </div>
    );
};


