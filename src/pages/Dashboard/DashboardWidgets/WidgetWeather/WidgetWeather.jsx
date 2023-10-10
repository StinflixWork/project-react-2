import WidgetWeatherDiagrams from './WidgetWeatherDiagrams/WidgetWeatherDiagrams.jsx'
import Widget from 'components/Widget/Widget.jsx'
import WidgetWeatherValue from './WidgetWeatherValue/WidgetWeatherValue.jsx'
import styled from 'styled-components'

const WrapperWidgetWeather = styled.div`
	grid-area: 1 / 1 / 2 / 3;
`

const WidgetWeather = ({ weatherData }) => {
	return (
		<WrapperWidgetWeather>
			<Widget widgetInfo={weatherData.optionsWidget}>
				<WidgetWeatherValue
					tempData={weatherData.valueTemp}
					colorText={weatherData.optionsWidget.color}
				/>
				<WidgetWeatherDiagrams diagramsData={weatherData.valueDiagrams} />
			</Widget>
		</WrapperWidgetWeather>
	)
}

export default WidgetWeather
