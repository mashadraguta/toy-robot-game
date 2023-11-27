import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { Initial } from "../Components/Initial";
import "@testing-library/jest-dom";
import { Board } from "../Components/Board";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../utils/renderWithRedux";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
describe("INITIAL COMPONENT ", () => {
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
    it("I. should render INITIAL component", () => {
        const { getByText, getByTestId } = render(renderWithRedux(Initial, {}));

        expect(getByText('start game')).toBeInTheDocument();
        expect(getByTestId("main-title")).toBeInTheDocument();

    });
    it("II. should navigate user to main board after clicking start game btn", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Initial />
                    <Board />
                </Provider>
            </MemoryRouter>
        );

        fireEvent.click(getByTestId("populate-btn"));
        expect(getByTestId("main-board")).toBeInTheDocument();

    });

    it('III. set initial board dimension when introducing number', () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Initial />
                </Provider>
            </MemoryRouter>
        );

        fireEvent.change(getByTestId('entry-number-value'), { target: { value: 7 } });
        fireEvent.click(getByTestId("populate-btn"));

        const actions = store.getActions();
        expect(actions).toEqual([{
            "payload": 7,
            "type": "game/setBoard",
        }],);

    });

    it('IV. should invalidate a user value less than 5 ', () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Initial />
                </Provider>
            </MemoryRouter>
        );

        fireEvent.change(getByTestId('entry-number-value'), { target: { value: 0 } });
        fireEvent.click(getByTestId("populate-btn"));
        expect(getByTestId('entry-number-value')).toBeInvalid()
    });
    it('V. should invalidate a user value more than 10', () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Initial />
                </Provider>
            </MemoryRouter>
        );

        fireEvent.change(getByTestId('entry-number-value'), { target: { value: 234 } });
        fireEvent.click(getByTestId("populate-btn"));
        expect(getByTestId('entry-number-value')).toBeInvalid()
    });
});
