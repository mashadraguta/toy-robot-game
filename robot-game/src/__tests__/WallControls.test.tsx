import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { WallControls } from "../Components/WallControls";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("WallControls component", () => {
    let store: any;

    beforeEach(() => {
        store = mockStore({
            game: {
                square: {
                    x: 1,
                    y: 1,
                    filled: false,
                    element: null,
                },
                robot: {
                    column: 1,
                    row: 1,
                    direction: "NORTH",
                },
                board: [],
                squareNr: 5,
            },
        });
    });

    it("I. renders WallControls component", () => {
        const { getByText, getByPlaceholderText, getByTestId, queryByTestId } =
            render(
                <Provider store={store}>
                    <WallControls />
                </Provider>
            );

        expect(getByText("PLACE WALL")).toBeInTheDocument();
        expect(getByPlaceholderText("ROW")).toBeInTheDocument();
        expect(getByPlaceholderText("COLUMN")).toBeInTheDocument();
        expect(getByText("Which row?:")).toBeInTheDocument();
        expect(getByTestId("print-btn")).toBeInTheDocument();
        expect(queryByTestId("print-info")).toBeNull();

    });

    it('II. fill square when user introduces coords for wall', () => {
        const { getByText, getByPlaceholderText } = render(
            <Provider store={store}>
                <WallControls />
            </Provider>
        );
        fireEvent.change(getByPlaceholderText('COLUMN'), { target: { value: '3' } });
        fireEvent.change(getByPlaceholderText('ROW'), { target: { value: '1' } });
        fireEvent.click(getByText('place wall'));

        const actions = store.getActions();
        expect(actions).toEqual([{
            "payload": {
                "filled": true,
                "x": 3,
                "y": 1,
            },
            "type": "game/setFilled",
        }],);

    });
    it('III. shows actual position of robot when clicking on show button', () => {
        const { queryByTestId, getByTestId } = render(
            <Provider store={store}>
                <WallControls />
            </Provider>
        );

        expect(queryByTestId("print-info")).toBeNull();
        fireEvent.click(getByTestId('print-btn'));
        expect(queryByTestId("print-info")).toBeInTheDocument();
    });

    afterEach(() => {
        store.clearActions();
    });
});
