import { Provider } from "react-redux";
import { createReduxStore } from "../Store";
import { GameModel } from '../Models/reduxModels'
import { MemoryRouter } from "react-router-dom";
import React, { FC } from 'react';
export const renderWithRedux = (Component: FC, initialState = {}) => {
  const store = createReduxStore(initialState);
  return (
    <MemoryRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </MemoryRouter>
  )
};