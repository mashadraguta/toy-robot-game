import { useEffect, useState } from "react";
import { useAppSelector } from "../Hooks/ReduxHooks";

import Robot from "./01.png";
import { useStyles } from "./Board.style";
export const Board = () => {
    let squares = [];
    const boardDimension = useAppSelector((state) => state.game.squareNr);
    let [row, setRow] = useState(0);
    let [column, setColumn] = useState(0);
    let [rowW, setRowW] = useState(0);
    let [columnW, setColumnW] = useState(0);
    let [filled, setFilled] = useState(false)
    let [directionU, setDirection] = useState("");
    let [robot, setRobot] = useState({
        x: 1,
        y: 1,
        direction: "",
    });
    let [wall, setWall] = useState({
        x: 0,
        y: 0
    })


    console.log(`boardDimension is====>`, boardDimension)
    const styles = useStyles({ directionU, boardDimension });
    class Square {
        column: number;
        row: number;
        element: HTMLElement | undefined;
        filled: boolean;
        constructor(row: number, column: number, filled: boolean) {
            this.row = row;
            this.column = column;
            this.filled = filled;
        }
    }

    for (let i = 1; i <= boardDimension; i++) {
        for (let j = 1; j <= boardDimension; j++) {
            let square = new Square(i, j, false);
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
        //  console.log(robot);
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
    const placeWall = () => {
        setWall({
            x: columnW,
            y: rowW
        })
        //setFilled(true)
        // let matchElement = reversedArray.find(item => item.column == wall.y && item.row == wall.x)

        // console.log(matchElement)
    };

    return (
        <div className={styles.flexMain}>
            <div className={styles.flexControls}>
                <div>
                    <h2>PLACE ROBOT</h2>
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
                    <button onClick={moveRobotRight}>right</button>
                    <button onClick={moveRobotLeft}>left</button>
                    <button onClick={moveRobotUp}>up</button>
                    <button onClick={moveRobotDown}>down</button>
                </div>
            </div>
            <div className={styles.container} id="container">
                {reversedArray.map((item, index) => (
                    <>
                        <div key={index} className={styles.gridItem}>
                            {item.column}r {item.row}c
                            {item.column == robot.y && item.row == robot.x ? (
                                <img src={Robot} className={styles.robot}></img>
                            ) : null}
                            {/* <div>
                                {item.column == wall.y && item.row == wall.x ? (
                                    <div className={styles.robot}>here we go</div>
                                ) : null}
                            </div> */}
                        </div>
                    </>
                ))}
            </div>
            <div className={styles.flexControls}>
                <div >
                    <h2>PLACE WALL</h2>
                    <fieldset>
                        <legend>Which row?:</legend>
                        <input type="text" placeholder="ROW" onChange={(e) => setRowW(Number(e.target.value))}></input>
                    </fieldset>
                    <fieldset>
                        <legend>Which column?:</legend>
                        <input type="text" placeholder="COLUMN" onChange={(e) => setColumnW(Number(e.target.value))}></input>
                    </fieldset>
                </div>
                <div>
                    <div className={styles.controls}>
                        <button onClick={placeWall}>place wall</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


//(item.column == wall.y && item.row == wall.x) ? styles.wall 
