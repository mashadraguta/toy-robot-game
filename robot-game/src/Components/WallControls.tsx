import { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../Hooks/ReduxHooks";
import { setFilledToTrueAction } from "../Store/gameActions";

export const WallControls = () => {
    let [rowW, setRowW] = useState(0);
    let [columnW, setColumnW] = useState(0);
    const dispatch = useAppDispatch()
    let [userWall, setUserWall] = useState({})
    let boardState = useAppSelector(state => state.game.board)

    const placeWall = () => {

        dispatch(setFilledToTrueAction(columnW, rowW, true))
    }

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
            </div>
        </div >
    );
};
