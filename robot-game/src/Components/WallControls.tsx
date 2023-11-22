import { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../Hooks/ReduxHooks";
import { setFilledToTrueAction } from "../Store/gameActions";

export const WallControls = () => {
    let [rowW, setRowW] = useState(0);
    let [columnW, setColumnW] = useState(0);
    let [show, setShow] = useState(false);
    const stateRobot = useAppSelector((state) => state.game.robot);
    const dispatch = useAppDispatch();
    const placeWall = () => {
        dispatch(setFilledToTrueAction(columnW, rowW, true));
    };
    const showActualPosition = () => {
        setShow(!show)
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
            <div>
                <button onClick={placeWall}>place wall</button>
                <button onClick={showActualPosition}>{show ? 'Hide Robot Position' : 'Show Robot Position'}</button>
            </div>
            {show ? (
                <div>
                    <div>Row is {stateRobot.row}</div>
                    <div>Column is {stateRobot.column}</div>
                    <div>Direction is {stateRobot.direction.toLowerCase()}</div>
                </div>
            ) : null}

        </div>
    );
};
