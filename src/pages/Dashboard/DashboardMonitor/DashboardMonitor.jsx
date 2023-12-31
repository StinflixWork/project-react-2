import styled from 'styled-components'
import MonitorWeatherHeader from './MonitorHeader/MonitorWeatherHeader.jsx'
import MonitorBodyItem from './MonitorBodyItem/MonitorBodyItem.jsx'

const DashboardMonitorStyled = styled.div`
	height: 100%;
	background-color: ${({ theme }) => theme.backgroundColors.secondary};
	padding: 0 25px;

	display: flex;
	flex-direction: column;
	gap: 35px;
`

const MonitorBodyStyled = styled.div`
	flex: auto;

	> h3 {
		font-size: 26px;
		color: ${({ theme }) => theme.textColors.title.secondary};
		margin-bottom: 30px;
	}
`

const MonitorBodyListStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`

const DashboardMonitor = ({ data, predictionWeatherData }) => {
	const cards = predictionWeatherData.map((d) => (
		<MonitorBodyItem key={d.id} data={d} />
	))
	return (
		<DashboardMonitorStyled>
			<MonitorWeatherHeader data={data} />
			<MonitorBodyStyled>
				<h3>Weather Prediction</h3>
				<MonitorBodyListStyled>
					{cards.length ? cards : <p>There are no forecasts</p>}
				</MonitorBodyListStyled>
			</MonitorBodyStyled>
		</DashboardMonitorStyled>
	)
}

export default DashboardMonitor
