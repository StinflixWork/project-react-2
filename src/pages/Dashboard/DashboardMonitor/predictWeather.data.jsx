import { BsFillBrightnessHighFill, BsFillCloudRainFill } from 'react-icons/bs'
import { IoMdCloudy } from 'react-icons/io'

export const predictionWeatherData = [
	{
		day: 'October 12',
		weather: 'Bright',
		temp: 22,
		feelLike: 18,
		icon: <BsFillBrightnessHighFill size={32} color="#fb8500" />
	},
	{
		day: 'October 13',
		weather: 'Cloudy',
		temp: 21,
		feelLike: 20,
		icon: <IoMdCloudy size={32} color="#d6ccc2" />
	},
	{
		day: 'October 14',
		weather: 'Cloudy',
		temp: 17,
		feelLike: 14,
		icon: <IoMdCloudy size={32} color="#d6ccc2" />
	},
	{
		day: 'October 15',
		weather: 'Rainny',
		temp: 17,
		feelLike: 12,
		icon: <BsFillCloudRainFill size={26} color="#1d3557" />
	},
	{
		day: 'October 16',
		weather: 'Bright',
		temp: 24,
		feelLike: 10,
		icon: <BsFillBrightnessHighFill size={32} color="#fb8500" />
	}
]
