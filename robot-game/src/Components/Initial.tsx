import React, { useEffect } from "react";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/ReduxHooks";
import { useStyles } from "./Initial.style";
import { useNavigate } from "react-router-dom";
import { setNumberOfSquares } from "../Store/gameActions";
import { Button, TextField } from "@mui/material";

export const Initial = () => {
    const dispatch = useAppDispatch();
    const boardDimension = useAppSelector((state) => state.game.squareNr);
    let [userNumber, setUserNumber] = useState(boardDimension);
    let [error, setError] = useState(false);

    const navigate = useNavigate();
    const styles = useStyles();

    const populateBoard = () => {
        if (error) return;
        dispatch(setNumberOfSquares(userNumber));
        navigate("/board");
    };
    return (
        <div className={styles.container}>
            <h1 data-testid="main-title">Welcome to the robot game</h1>
            <h2>Please, type a number between 5 and 10 to start </h2>
            <TextField
                type="number"
                label="type a number here"
                variant="filled"
                error={error}
                InputProps={{
                    inputProps: { min: 5, max: 10, "data-testid": "entry-number-value" },
                }}
                onChange={(e) => {
                    if (Number(e.target.value) > 10 || Number(e.target.value) < 5) {
                        setError(true);
                    } else {
                        setError(false);
                        setUserNumber(Number(e.target.value));
                    }
                }}
            />
            <Button
                variant="contained"
                size="large"
                onClick={populateBoard}
                data-testid="populate-btn"
            >
                start game
            </Button>
        </div>
    );
};
