import { WiDayCloudy } from 'react-icons/wi'

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
			icon: <WiDayCloudy size={26} color="#14213d" />
		}
	}
}
