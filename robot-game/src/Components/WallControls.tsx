import { Button } from "@mui/material";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../Hooks/ReduxHooks";
import { setFilledToTrueAction } from "../Store/gameActions";
import { useStyles } from "./RobotControls.style";

export const WallControls = () => {
    let [rowW, setRowW] = useState(0);
    let [columnW, setColumnW] = useState(0);
    let [show, setShow] = useState(false);
    const stateRobot = useAppSelector((state) => state.game.robot);
    const dispatch = useAppDispatch();
    const styles = useStyles();

    const squareHasRobot =
        columnW === stateRobot.column && rowW === stateRobot.row;

    const placeWall = () => {
        if (squareHasRobot) return;
        dispatch(setFilledToTrueAction(columnW, rowW, true));
    };

    const showActualPosition = () => {
        setShow(!show);
    };
    return (
        <div>
            <div>
                <h2>PLACE WALL</h2>
                <fieldset>
                    <div>Which row?:</div>
                    <input
                        type="text"
                        placeholder="ROW"
                        onChange={(e) => setRowW(Number(e.target.value))}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Which column?:</legend>
                    <input
                        type="text"
                        placeholder="COLUMN"
                        onChange={(e) => setColumnW(Number(e.target.value))}
                    ></input>
                </fieldset>
            </div>
            <div className={styles.control}>
                <Button variant="contained" size="large" onClick={placeWall} >
                    place wall
                </Button>
                <Button variant="contained" size="medium" onClick={showActualPosition} data-testid='print-btn'>
                    {show ? "Hide Robot Position" : "Show Robot Position"}
                </Button>
            </div>
            {show ? (
                <div data-testid='print-info'>
                    <div>Row is {stateRobot.row}</div>
                    <div>Column is {stateRobot.column}</div>
                    <div>Direction is {stateRobot.direction.toLowerCase()}</div>
                </div>
            ) : null}
        </div>
    );
};
