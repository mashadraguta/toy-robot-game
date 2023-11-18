import { useEffect, useState } from "react";
import { NR_COLUMNS, NR_ROWS } from "../consts";

import Robot from "./01.png";
import { useStyles } from "./Board.style";
export const Board = () => {
    let squares = [];
    //@ts-ignore

    // NORTH, SOUTH, EAST, WEST
    // todo: find a way to replace in css those consts
    let [row, setRow] = useState(0);
    let [column, setColumn] = useState(0);
    let [directionU, setDirection] = useState("");
    let [robot, setRobot] = useState({
        x: 1,
        y: 1,
        direction: "",
    });
    const styles = useStyles({ directionU });
    class Square {
        column: number;
        row: number;
        element: HTMLElement | undefined;

        constructor(row: number, column: number) {
            this.row = row;
            this.column = column;
        }
    }

    for (let i = 1; i <= NR_COLUMNS; i++) {
        for (let j = 1; j <= NR_ROWS; j++) {
            let square = new Square(i, j);
            square.element = document.createElement("div");
            square.element.id = `${j}${i}`;
            square.row = j;
            square.column = i;
            squares.push(square);
        }
    }
    let reversedArray = squares.reverse();

    const placeRobot = () => {
        setRobot({
            x: column,
            y: row,
            direction: directionU,
        });
        console.log(robot);
    };
    const moveRobotRight = () => {
        setRobot((prevState) => ({
            x: prevState.x + 1,
            y: row,
            direction: prevState.direction,
        }));
    };
    const moveRobotLeft = () => {
        setRobot((prevState) => ({
            x: prevState.x - 1,
            y: row,
            direction: prevState.direction,
        }));
    };
    const moveRobotUp = () => {
        setRobot((prevState) => ({
            x: prevState.x,
            y: prevState.y + 1,
            direction: prevState.direction,
        }));
    };
    const moveRobotDown = () => {
        setRobot((prevState) => ({
            x: prevState.x,
            y: prevState.y - 1,
            direction: prevState.direction,
        }));
    };

    return (
        <div className={styles.flex}>
            <div className={styles.flex}>
                <div>
                    <fieldset>
                        <legend>Which row?:</legend>
                        <input
                            type="text"
                            placeholder="ROW"
                            onChange={(e) => setRow(Number(e.target.value))}
                        ></input>
                    </fieldset>
                    <fieldset>
                        <legend>Which column?:</legend>
                        <input
                            type="text"
                            placeholder="COLUMN"
                            onChange={(e) => setColumn(Number(e.target.value))}
                        ></input>
                    </fieldset>
                    <fieldset>
                        <legend>Choose your robot's direction:</legend>
                        <div>
                            <input
                                type="radio"
                                id="NORTH"
                                name="direction"
                                onChange={(e) => setDirection(e.target.id)}
                            />
                            <label>NORTH</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="SOUTH"
                                name="direction"
                                onChange={(e) => setDirection(e.target.id)}
                            />
                            <label>SOUTH</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="EAST"
                                name="direction"
                                onChange={(e) => setDirection(e.target.id)}
                            />
                            <label>EAST</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="WEST"
                                name="direction"
                                onChange={(e) => setDirection(e.target.id)}
                            />
                            <label>WEST</label>
                        </div>
                    </fieldset>
                </div>
                <div className={styles.controls}>
                    <button onClick={placeRobot}>place robot</button>
                    <button onClick={moveRobotRight}>move robot to right</button>
                    <button onClick={moveRobotLeft}>move robot to left</button>
                    <button onClick={moveRobotUp}>up</button>
                    <button onClick={moveRobotDown}>down</button>
                </div>
            </div>
            <div className={styles.container} id="container">
                {reversedArray.map((item, index) => (
                    <>
                        <div key={index} className={styles.gridItem}>
                            {/* {item.column}r {item.row}c */}
                            {item.column == robot.y && item.row == robot.x ? (
                                <img src={Robot} className={styles.robot}></img>
                            ) : null}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};
