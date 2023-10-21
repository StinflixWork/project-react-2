import styled from 'styled-components'
import WidgetWeather from './WidgetWeather/WidgetWeather.jsx'
import WidgetAir from './WidgetAir/WidgetAir.jsx'
import WidgetTempToday from './WidgetTempToday/WidgetTempToday.jsx'
import WidgetTempTomorrow from './WidgetTempTomorrow/WidgetTempTomorrow.jsx'

const DashboardWidgetsStyled = styled.div`
	flex: auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 20px 15px;
`

const DashboardWidgets = ({ data }) => {
	return (
		<DashboardWidgetsStyled>
			<WidgetWeather weatherData={data.widgetMain} />
			<WidgetAir airData={data.widgetAir} />
			<WidgetTempToday tempTodayData={data.widgetTempToday} />
			<WidgetTempTomorrow tempTomorrowData={data.widgetTomorrow} />
		</DashboardWidgetsStyled>
	)
}

export default DashboardWidgets
