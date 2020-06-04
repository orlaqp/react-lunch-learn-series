import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from './root-reducer'
import logger from 'redux-logger'

const middleware = [...getDefaultMiddleware(), logger]

export const store = configureStore({
    reducer: rootReducer,
    middleware    
})