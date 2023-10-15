import WidgetWeatherDiagrams from './WidgetWeatherDiagrams/WidgetWeatherDiagrams.jsx'
import styled from 'styled-components'
import WidgetWeather from 'components/Widgets/WidgetLayouts/WidgetWeather.jsx'
import ClearWeatherBg from 'assets/dashboard/widget-weather/clear-weather.jpg'

const WrapperWidgetMain = styled.div`
	grid-area: 1 / 1 / 2 / 3;
`

const WidgetMain = ({ weatherData }) => {
	console.log(weatherData)
	return (
		<WrapperWidgetMain>
			<WidgetWeather
				background={ClearWeatherBg}
				colorText="#f2f2f2"
				body={weatherData.body}
			>
				<WidgetWeatherDiagrams diagramsData={weatherData.diagramsData} />
			</WidgetWeather>
		</WrapperWidgetMain>
	)
}

export default WidgetMain
