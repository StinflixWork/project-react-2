import styled from 'styled-components'
import WidgetWeather from './WidgetWeather/WidgetWeather.jsx'
import WidgetAir from './WidgetAir/WidgetAir.jsx'
import WidgetTemperature from './WidgetTemperature/WidgetTemperature.jsx'
import WidgetWeatherTomorrow from './WidgetWeatherTomorrow/WidgetWeatherTomorrow.jsx'

const DashboardWidgetsStyled = styled.div`
	flex: auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 10px;

	div {
		flex-basis: 50%;
		height: 250px;
		border-radius: 20px;
	}
`

const DashboardWidgets = () => {
	return (
		<DashboardWidgetsStyled>
			<WidgetWeather />
			<WidgetAir />
			<WidgetTemperature />
			<WidgetWeatherTomorrow />
		</DashboardWidgetsStyled>
	)
}

export default DashboardWidgets
