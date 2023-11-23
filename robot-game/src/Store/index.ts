import {configureStore} from '@reduxjs/toolkit';
import gameSlice from './gameSlice';

const store=configureStore(
   
    {
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false
        }),
        reducer:{game:gameSlice.reducer}
    }
)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
