import React, { useEffect } from "react";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/ReduxHooks";
import { useStyles } from "./Initial.style";
import { useNavigate } from "react-router-dom";
import { setNumberOfSquares } from "../Store/gameActions";

export const Initial = () => {
    const dispatch = useAppDispatch();
    const boardDimension = useAppSelector((state) => state.game.squareNr);
    let [userNumber, setUserNumber] = useState(boardDimension);
    const navigate = useNavigate();
    const styles = useStyles();

    const populateBoard = () => {
        dispatch(setNumberOfSquares(userNumber));
        navigate("/board");
    };

    return (
        <div className={styles.container}>
            Choose a number between 5 and 10:
            <input
                type="text"
                onChange={(e) => setUserNumber(Number(e.target.value))}
            />
            <button onClick={populateBoard}>start game</button>
        </div>
    );
};
