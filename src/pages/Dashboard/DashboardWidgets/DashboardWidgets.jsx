import styled from 'styled-components'
import WidgetAir from 'components/Widgets/WidgetAir/WidgetAir.jsx'
import WidgetTemperature from 'components/Widgets/WidgetTemperature/WidgetTemperature.jsx'
import WidgetTomorrow from 'components/Widgets/WidgetTomorrow/WidgetTomorrow.jsx'
import { weatherData } from './widgets.data.jsx'
import WidgetMain from 'components/Widgets/WidgetMain/WidgetMain.jsx'

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
			<WidgetMain weatherData={data.widgetMain} />
			<WidgetAir airData={data.widgetAir} />
			<WidgetTemperature />
			<WidgetTomorrow weatherTomorrowData={weatherData.weatherTomorrow} />
		</DashboardWidgetsStyled>
	)
}

export default DashboardWidgets
