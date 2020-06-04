import { combineReducers } from '@reduxjs/toolkit';
import { navigationSlice } from '@p360/navigation/data-access';

export const rootReducer = combineReducers({
    navigation: navigationSlice.reducer
});

export type P360State = ReturnType<typeof rootReducer>;