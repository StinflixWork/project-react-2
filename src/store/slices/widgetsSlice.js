import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const WEATHER_API_URL =
	"http://api.weatherapi.com/v1/forecast.json?key=b0b565e5afae4bf890782105231310&q=Aleksandriya, Kirovohrads'ka Oblast'&days=5&aqi=no"

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
				const { location, current, forecast } = action.payload
				state.status = 'succeeded'

				const predictionWeatherApiData = forecast.forecastday.map((f) => ({
					id: f.date_epoch,
					date: f.date_epoch,
					temp: f.day.maxtemp_c,
					avgTemp: f.day.avgtemp_c,
					condition: f.day.condition.text,
					icon: f.day.condition.icon
				}))

				state.weatherData = {
					widgetsSection: {
						widgetMain: {
							value: {
								main: current.temp_c,
								optional: current.feelslike_c,
								text: current.condition.text,
								isTemp: true
							},
							diagramsData: {
								preesure: current.pressure_mb + ' mb',
								visibility: current.vis_km + ' km',
								humadity: current.humidity + '%'
							}
						},
						widgetAir: {
							value: {
								main: current.wind_kph,
								optional: current.wind_degree,
								text: 'Wind direction ' + current.wind_dir,
								isTemp: false
							}
						},
						widgetTomorrow: {
							value: forecast.forecastday[0].day.maxtemp_c,
							text: forecast.forecastday[0].day.condition.text
						},
						widgetTempToday: [
							{
								hour: 0,
								tempHour: 0
							},
							{
								hour: forecast.forecastday[0].hour[9].time_epoch,
								tempHour: forecast.forecastday[0].hour[9].temp_c
							},
							{
								hour: forecast.forecastday[0].hour[12].time_epoch,
								tempHour: forecast.forecastday[0].hour[12].temp_c
							},
							{
								hour: forecast.forecastday[0].hour[18].time_epoch,
								tempHour: forecast.forecastday[0].hour[18].temp_c
							},
							{
								hour: forecast.forecastday[0].hour[23].time_epoch,
								tempHour: forecast.forecastday[0].hour[23].temp_c
							}
						]
					},
					monitorSection: {
						location: {
							country: location.country,
							city: location.name
						},
						temp: {
							value: current.temp_c,
							text: current.condition.text
						},
						prediction: [...predictionWeatherApiData]
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
