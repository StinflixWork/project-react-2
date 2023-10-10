import { WidgetFilter, WidgetStyled } from './Widget.styled.js'
import ClearWeatherBg from 'assets/dashboard/widget-weather/clear-weather.jpg'
import WidgetInfo from 'components/Widget/WidgetInfo/WidgetInfo.jsx'

const Widget = ({ children, widgetInfo }) => {
	return (
		<WidgetStyled urlBg={ClearWeatherBg}>
			<WidgetFilter />
			<WidgetInfo widgetInfo={widgetInfo} />
			{children}
		</WidgetStyled>
	)
}

export default Widget
