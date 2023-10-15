import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const WEATHER_API_URL =
	"http://api.weatherapi.com/v1/current.json?key=b0b565e5afae4bf890782105231310&q=Aleksandriya, Kirovohrads'ka Oblast'&aqi=yes"

const initialState = {
	weatherData: {},
	status: 'idle', // idle | 'loading' | 'succeeded' | 'failed',
	error: null
}

export const fetchWeather = createAsyncThunk(
	'weather/fetchWeather',
	async () => {
		const response = await axios.get(WEATHER_API_URL)
		return response.data
	}
)

export const widgetsSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchWeather.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchWeather.fulfilled, (state, action) => {
				const { location, current } = action.payload
				state.status = 'succeeded'

				state.weatherData = {
					location: {
						country: location.country,
						city: location.name
					},
					body: {
						widgetMain: {
							body: {
								value: {
									main: Math.round(current.temp_c),
									optional: Math.round(current.feelslike_c),
									text: 'Sunny',
									isTemp: true
								}
							},
							diagramsData: {
								preesure: current.pressure_mb + ' mb',
								visibility: current.vis_km + ' km',
								humadity: current.humidity + '%'
							}
						},
						widgetAir: {
							body: {
								value: {
									main: Math.round(current.wind_kph) + ' km/h',
									optional: current.wind_degree,
									text: 'Wind direction ' + current.wind_dir,
									isTemp: false
								}
							}
						}
					}
				}
			})
			.addCase(fetchWeather.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	}
})

export default widgetsSlice.reducer
