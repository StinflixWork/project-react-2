import styled from 'styled-components'
import MonitorWeatherHeader from './MonitorHeader/MonitorWeatherHeader.jsx'
import MonitorBodyItem from './MonitorBodyItem/MonitorBodyItem.jsx'
import { BsFillBrightnessHighFill, BsFillCloudRainFill } from 'react-icons/bs'
import { IoMdCloudy } from 'react-icons/io'

const DashboardMonitorStyled = styled.div`
	height: 100%;
	background-color: ${(props) => props.theme.backgroundSecondaryColor};
	padding: 0 25px;

	display: flex;
	flex-direction: column;
	gap: 35px;
`

const MonitorBodyStyled = styled.div`
	flex: auto;

	> h3 {
		font-size: 26px;
		color: #14213d;
		margin-bottom: 30px;
	}
`

const MonitorBodyListStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`

const DashboardMonitor = () => {
	const predictionWeatherData = [
		{
			day: 'October 12',
			weather: 'Bright',
			temp: 22,
			feelLike: 18,
			icon: <BsFillBrightnessHighFill size={32} color="#fb8500" />
		},
		{
			day: 'October 13',
			weather: 'Cloudy',
			temp: 21,
			feelLike: 20,
			icon: <IoMdCloudy size={32} color="#d6ccc2" />
		},
		{
			day: 'October 14',
			weather: 'Cloudy',
			temp: 17,
			feelLike: 14,
			icon: <IoMdCloudy size={32} color="#d6ccc2" />
		},
		{
			day: 'October 15',
			weather: 'Rainny',
			temp: 17,
			feelLike: 12,
			icon: <BsFillCloudRainFill size={26} color="#1d3557" />
		},
		{
			day: 'October 16',
			weather: 'Bright',
			temp: 24,
			feelLike: 10,
			icon: <BsFillBrightnessHighFill size={32} color="#fb8500" />
		}
	]

	return (
		<DashboardMonitorStyled>
			<MonitorWeatherHeader />
			<MonitorBodyStyled>
				<h3>Weather Prediction</h3>
				<MonitorBodyListStyled>
					{predictionWeatherData.map((d) => (
						<MonitorBodyItem key={d.day} data={d} />
					))}
				</MonitorBodyListStyled>
			</MonitorBodyStyled>
		</DashboardMonitorStyled>
	)
}

export default DashboardMonitor
