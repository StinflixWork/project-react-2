import WidgetWeatherDiagrams from './WidgetWeatherDiagrams/WidgetWeatherDiagrams.jsx'
import Widget from 'components/Widget/Widget.jsx'
import WidgetWeatherValue from './WidgetWeatherValue/WidgetWeatherValue.jsx'

const WidgetWeather = ({ weatherData }) => {
	return (
		<Widget widgetInfo={weatherData.optionsWidget}>
			<WidgetWeatherValue
				tempData={weatherData.valueTemp}
				colorText={weatherData.optionsWidget.color}
			/>
			<WidgetWeatherDiagrams diagramsData={weatherData.valueDiagrams} />
		</Widget>
	)
}

export default WidgetWeather
