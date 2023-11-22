import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/ReduxHooks";
import {
    moveRobotEast,
    moveRobotNorth,
    moveRobotSouth,
    moveRobotWest,
    placeRobotCoords,
    setNewDirectionAction,
} from "../Store/gameActions";
import { useStyles } from "./RobotControls.style";

export const RobotControls = () => {
    const stateRobot = useAppSelector((state) => state.game.robot);
    let boardState = useAppSelector((state) => state.game.board);
    const boardDimension = useAppSelector((state) => state.game.squareNr);
    const dispatch = useAppDispatch();
    let [row, setRow] = useState(0);
    let [column, setColumn] = useState(0);
    let [directionU, setDirection] = useState("");
    const styles = useStyles();

    const setRobotXY = () => {
        const isNextPositionFilled = boardState.some(
            (square) => square.x === column && square.y === row && square.filled
        );
        if (isNextPositionFilled) {
            return;
        }
        dispatch(placeRobotCoords(column, row, directionU));
    };

    const moveRobot = () => {
        let nextColumn = stateRobot.column;
        let nextRow = stateRobot.row;

        switch (stateRobot.direction) {
            case "NORTH":
                nextRow += 1;
                break;
            case "SOUTH":
                nextRow -= 1;
                break;
            case "EAST":
                nextColumn += 1;
                break;
            case "WEST":
                nextColumn -= 1;
                break;
            default:
                return;
        }

        if (
            nextColumn < 1 ||
            nextColumn > boardDimension ||
            nextRow < 1 ||
            nextRow > boardDimension
        ) {
            return;
        }

        const isNextPositionFilled = boardState.some(
            (square) =>
                square.x === nextColumn && square.y === nextRow && square.filled
        );
        if (isNextPositionFilled) {
            return;
        }

        switch (stateRobot.direction) {
            case "NORTH":
                dispatch(
                    moveRobotNorth(
                        stateRobot.column,
                        stateRobot.row,
                        stateRobot.direction
                    )
                );
                break;
            case "SOUTH":
                dispatch(
                    moveRobotSouth(
                        stateRobot.column,
                        stateRobot.row,
                        stateRobot.direction
                    )
                );
                break;
            case "EAST":
                dispatch(
                    moveRobotEast(stateRobot.column, stateRobot.row, stateRobot.direction)
                );
                break;
            case "WEST":
                dispatch(
                    moveRobotWest(stateRobot.column, stateRobot.row, stateRobot.direction)
                );
                break;
            default:
                return;
        }
    };
    const turnRobotLeft = () => {
        //north west // south east
        const order = ["NORTH", "WEST", "SOUTH", "EAST"];
        const i = order.indexOf(stateRobot.direction);
        const newI = (i + 1) % order.length;
        const newDirection = order[newI];
        dispatch(setNewDirectionAction(newDirection));
    };

    const turnRobotRight = () => {
        //north est // south west
        const order = ["NORTH", "EAST", "SOUTH", "WEST"];
        const i = order.indexOf(stateRobot.direction);
        const newI = (i + 1) % order.length;
        const newDirection = order[newI];
        dispatch(setNewDirectionAction(newDirection));
    };
    return (
        <div>
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
                <button onClick={setRobotXY}>place robot</button>
                <button onClick={moveRobot}>move robot</button>
                <button onClick={turnRobotLeft}>LEFT</button>
                <button onClick={turnRobotRight}>RIGHT</button>
            </div>
        </div>
    );
};
