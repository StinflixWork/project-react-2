import WidgetWeatherValue from './WidgetWeatherValueSky/WidgetWeatherValueSky.jsx'
import WidgetWeatherDiagrams from './WidgetWeatherDiagrams/WidgetWeatherDiagrams.jsx'
import WidgetDashboard from 'components/WidgetWeather/WidgetDashboard.jsx'

const WidgetWeather = ({ weatherData }) => {
	return (
		<WidgetDashboard widgetInfo={weatherData.optionsWidget}>
			<WidgetWeatherValue tempData={weatherData.valueTemp} />
			<WidgetWeatherDiagrams diagramsData={weatherData.valueDiagrams} />
		</WidgetDashboard>
	)
}

export default WidgetWeather
