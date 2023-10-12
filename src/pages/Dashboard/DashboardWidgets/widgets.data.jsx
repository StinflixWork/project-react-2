import { WiDayCloudy } from 'react-icons/wi'
import { FiWind } from 'react-icons/fi'
import WindWeatherBg from 'assets/dashboard/widget-air/weather-wind.jpg'
import RainWeatherBg from 'assets/dashboard/widget-tomorrow/wallpaper-anime-rain-dozhd.jpg'
import { BsCloudRain } from 'react-icons/bs'

export const weatherData = {
	widgetMain: {
		body: {
			info: {
				icon: <WiDayCloudy size={26} color="#14213d" />,
				title: 'Weather',
				subtitle: `What's the weather.`
			},
			value: {
				main: 22,
				optional: 18,
				text: 'partly cloudy',
				isTemp: true
			}
		},
		diagramsData: {
			preesure: '800mb',
			visibility: '4.3 km',
			humadity: '87%'
		}
	},
	widgetAir: {
		body: {
			info: {
				icon: <FiWind size={26} color="#fb8500" />,
				title: 'Air Quality',
				subtitle: `Main pollutan : PM 2.5`
			},
			value: {
				main: 390,
				optional: 'AQI',
				text: 'partly cloudy',
				isTemp: false
			}
		}
	},
	widgetTomorrow: {
		body: {
			info: {
				icon: <BsCloudRain size={26} color="#fb8500" />,
				title: 'Tomorrow',
				subtitle: `It will be rainy and cold all day`
			},
			value: {
				main: 20,
				skyConditions: 'Rainny'
			}
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
