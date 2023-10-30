import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: {},
	fullName: '',
	isAuthenticated: JSON.parse(localStorage.getItem('user-auth')),
	isRegister: false
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		verification: (state, { payload: user }) => {
			state.isAuthenticated = JSON.stringify(user) === JSON.stringify(state.user)
			localStorage.setItem('user-auth', JSON.stringify(state.isAuthenticated))
		},
		register: (state, { payload: user }) => {
			state.user = {
				login: user.login,
				password: user.password
			}
			state.fullName = user.fullName
			state.isRegister = !state.isRegister
		},
		logout: (state) => {
			state.isAuthenticated = !state.isAuthenticated
			localStorage.removeItem('user-auth')
		}
	}
})

export const { verification, register, logout } = authSlice.actions
export default authSlice.reducer