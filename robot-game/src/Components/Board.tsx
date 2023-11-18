import { useEffect, useState } from "react";
import { NR_COLUMNS, NR_ROWS } from "../consts";
import styles from "./Board.module.css";
import Robot from './dibujo.png'
export const Board = () => {
    let squares = [];
    // todo: find a way to replace in css those consts
    let [row, setRow] = useState(0);
    let [column, setColumn] = useState(0);
    let [robot, setRobot] = useState({
        x: 1,
        y: 1,
    })

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
            y: row
        })
    };
    const moveRobotRight = () => {
        setRobot((prevState) => ({
            x: prevState.x + 1,
            y: row
        }))
    }
    const moveRobotLeft = () => {
        setRobot((prevState) => ({
            x: prevState.x - 1,
            y: row
        }))
    }
    const moveRobotUp = () => {
        setRobot((prevState) => ({
            x: prevState.x,
            y: prevState.y + 1
        }))
    }
    const moveRobotDown = () => {
        setRobot((prevState) => ({
            x: prevState.x,
            y: prevState.y - 1
        }))
    }
    return (
        <div>
            <div className={styles.flex}>
                <div>
                    <h2>Row</h2>
                    <input
                        type="text"
                        placeholder="ROW"
                        id="userRow"
                        onChange={(e) => setRow(Number(e.target.value))}
                    ></input>
                    <h2>Column</h2>
                    <input
                        type="text"
                        placeholder="COLUMN"
                        id="userColumn"
                        onChange={(e) => setColumn(Number(e.target.value))}
                    ></input>
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
                            {item.column}r  {item.row}c
                            {item.column == robot.y && item.row == robot.x ? <img src={Robot} className={styles.robot}></img> : null}
                        </div>

                    </>
                ))}
            </div>
        </div >
    );
};


