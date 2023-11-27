import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RobotControls } from '../Components/RobotControls';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('RobotControls component', () => {
    let store: any;

    beforeEach(() => {
        store = mockStore({
            game: {
                robot: {
                    column: 1,
                    row: 1,
                    direction: 'NORTH',
                },
                board: [
                ],
                squareNr: 5,
            },
        });
    });

    it('I. renders RobotControls component', () => {
        const { getByText, getByPlaceholderText, getByTestId } = render(
            <Provider store={store}>
                <RobotControls />
            </Provider>
        );

        expect(getByText('PLACE ROBOT')).toBeInTheDocument();
        expect(getByPlaceholderText('ROW')).toBeInTheDocument();
        expect(getByPlaceholderText('COLUMN')).toBeInTheDocument();
        expect(getByText('Choose your robot\'s direction:')).toBeInTheDocument();
        expect(getByTestId('move-btn')).toBeInTheDocument();
        expect(getByTestId('turn-left-btn')).toBeInTheDocument();
    });

    it('II. dispatches placeRobotCoords action when user introduces values and clicks on one variant of facing direction', () => {
        const { getByText, getByPlaceholderText, getByLabelText } = render(
            <Provider store={store}>
                <RobotControls />
            </Provider>
        );

        fireEvent.change(getByPlaceholderText('ROW'), { target: { value: '5' } });
        fireEvent.change(getByPlaceholderText('COLUMN'), { target: { value: '3' } });
        fireEvent.click(getByLabelText('west'));
        fireEvent.click(getByText('place robot'));

        const actions = store.getActions();
        expect(actions).toEqual([{
            "payload": {
                "column": 3,
                "direction": "WEST",
                "row": 5,
            },
            "type": "game/setRobotCoords",
        }],);

    });

    it('III. turns the robot 90 degrees to its current left or right', () => {
        store = mockStore({
            game: {
                robot: {
                    column: 1,
                    row: 1,
                    direction: 'SOUTH',
                },
                board: [
                ],
                squareNr: 5,
            },
        });
        const { getByTestId } = render(
            <Provider store={store}>
                <RobotControls />
            </Provider>
        );

        fireEvent.click(getByTestId('turn-left-btn'));
        const actions = store.getActions();
        expect(actions).toEqual([{
            "payload": {
                "direction": "EAST",
            },
            "type": "game/setNewDirection",
        }]);

    });

    it('IV. moves the robot 1 space forward in the direction it is currently facing', () => {
        store = mockStore({
            game: {
                robot: {
                    column: 4,
                    row: 4,
                    //mock direction
                    direction: 'SOUTH',
                },
                board: [
                ],
                squareNr: 5,
            },
        });
        const { getByTestId } = render(
            <Provider store={store}>
                <RobotControls />
            </Provider>
        );

        fireEvent.click(getByTestId('move-btn'));
        const actions = store.getActions();
        //should return same direction, one row less
        expect(actions).toEqual([{
            "payload": {
                column: 4,
                row: 3,
                "direction": "SOUTH",
            },
            "type": "game/setRobotCoords",
        }]);

    });
    afterEach(() => {
        store.clearActions()
    });

});