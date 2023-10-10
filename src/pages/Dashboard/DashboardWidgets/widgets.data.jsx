import { WiDayCloudy } from 'react-icons/wi'
import { FiWind } from 'react-icons/fi'
import ClearWeatherBg from 'assets/dashboard/widget-weather/clear-weather.jpg'
import WindWeatherBg from 'assets/dashboard/widget-air/weather-wind.jpg'

export const weatherData = {
	weatherTemp: {
		valueTemp: {
			temp: 22,
			feelLike: 18,
			skyConditions: 'partly cloudy'
		},
		valueDiagrams: {
			preesure: '800mb',
			visibility: '4.3 km',
			humadity: '87%'
		},
		optionsWidget: {
			title: 'Weather',
			subtitle: `What's the weather.`,
			icon: <WiDayCloudy size={26} color="#14213d" />,
			background: ClearWeatherBg,
			color: '#f2f2f2'
		}
	},
	weatherAir: {
		valueAir: {
			windSpeed: 390,
			windFactor: 'AQI',
			windDirection: 'West Wind'
		},
		optionsWidget: {
			title: 'Air Quality',
			subtitle: `Main pollutan : PM 2.5`,
			icon: <FiWind size={26} color="#fb8500" />,
			background: WindWeatherBg,
			color: '#14213d'
		}
	}
}
