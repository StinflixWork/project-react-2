import {
	WidgetFilter,
	WidgetWeatherInfoBody,
	WidgetWeatherInfoIcon,
	WidgetWeatherInfoStyled,
	WidgetWeatherStyled
} from 'components/WidgetWeather/WidgetDashboardStyled.js'
import ClearWeatherBg from 'assets/dashboard/widget-weather/clear-weather.jpg'

const WidgetDashboard = ({ children, widgetInfo }) => {
	return (
		<WidgetWeatherStyled urlBg={ClearWeatherBg}>
			<WidgetFilter />
			<WidgetWeatherInfoStyled>
				<WidgetWeatherInfoIcon>{widgetInfo.icon}</WidgetWeatherInfoIcon>
				<WidgetWeatherInfoBody>
					<h3>{widgetInfo.title}</h3>
					<p>{widgetInfo.subtitle}</p>
				</WidgetWeatherInfoBody>
			</WidgetWeatherInfoStyled>
			{children}
		</WidgetWeatherStyled>
	)
}

export default WidgetDashboard
