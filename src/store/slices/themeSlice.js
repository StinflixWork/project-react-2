import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		isDarkMode: JSON.parse(localStorage.getItem('dark-mode'))
	},
	reducers: {
		toggleDarkMode: (state) => {
			state.isDarkMode = !state.isDarkMode
			localStorage.setItem('dark-mode', JSON.stringify(state.isDarkMode))
		}
	}
})

export const { toggleDarkMode } = themeSlice.actions

export default themeSlice.reducer
