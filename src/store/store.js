import { combineReducers, configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice.js'
import widgetsReducer from './slices/widgetsSlice.js'

export const store = configureStore({
	reducer: combineReducers({ theme: themeReducer, weather: widgetsReducer })
})
