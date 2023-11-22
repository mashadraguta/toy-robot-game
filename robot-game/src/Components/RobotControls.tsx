import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/ReduxHooks";
import { moveRobotEast, moveRobotNorth, moveRobotSouth, moveRobotWest, placeRobotCoords } from "../Store/gameActions";




export const RobotControls = () => {
    const stateRobot = useAppSelector((state) => state.game.robot);
    let boardState = useAppSelector(state => state.game.board)
    const boardDimension = useAppSelector((state) => state.game.squareNr);
    const dispatch = useAppDispatch();
    let [row, setRow] = useState(0);
    let [column, setColumn] = useState(0);
    let [directionU, setDirection] = useState("");
    const setRobotXY = () => {
        dispatch(placeRobotCoords(row, column, directionU))
    }
    const moveRobot = () => {

        if (stateRobot.column > boardDimension || stateRobot.row > boardDimension) return
        switch (stateRobot.direction) {
            case 'NORTH':
                return dispatch(moveRobotNorth(row, column, directionU))
            case 'SOUTH':
                return dispatch(moveRobotSouth(row, column, directionU))
            case 'EAST':
                return dispatch(moveRobotEast(row, column, directionU))
            case 'WEST':
                return dispatch(moveRobotWest(row, column, directionU))
            default:
                return
        }
    }
    // north <> south
    // west <> east

    //  console.log(`board state===>`, boardState.map(item => console.log(item.filled)))
    const turnRobot = () => {
        //  console.log(stateRobot.direction)
    }

    return (<div >
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
        <div >
            <button onClick={setRobotXY}>place robot</button>
            <button onClick={moveRobot}>move robot</button>
            <button onClick={turnRobot}>turn robot</button>
        </div>
    </div>)
}
