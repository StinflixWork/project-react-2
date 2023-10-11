import { WiDayCloudy } from 'react-icons/wi'
import { FiWind } from 'react-icons/fi'
import ClearWeatherBg from 'assets/dashboard/widget-weather/clear-weather.jpg'
import WindWeatherBg from 'assets/dashboard/widget-air/weather-wind.jpg'
import RainWeatherBg from 'assets/dashboard/widget-tomorrow/wallpaper-anime-rain-dozhd.jpg'
import { BsCloudRain } from 'react-icons/bs'

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
	},
	weatherTomorrow: {
		valueTomorrowTemp: {
			temp: 20,
			skyConditions: 'Rainny'
		},
		optionsWidget: {
			title: 'Tomorrow',
			subtitle: `It will be rainy and cold all day`,
			icon: <BsCloudRain size={26} color="#fb8500" />,
			background: RainWeatherBg,
			color: '#f2f2f2'
		}
	}
}
