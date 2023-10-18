import styled from 'styled-components'
import DashboardMonitor from './DashboardMonitor/DashboardMonitor.jsx'
import DashboardHeader from './DashboardHeader/DashboardHeader.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from 'store/slices/widgetsSlice.js'
import { useEffect } from 'react'
import DashboardWidgets from './DashboardWidgets/DashboardWidgets.jsx'
import Loading from '../Loading/Loading.jsx'

const WrapperDashboard = styled.section`
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 350px;
`

const DashboardContent = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 40px;
	padding: 15px 25px 30px;
`

const Dashboard = () => {
	const dispatch = useDispatch()

	const weatherData = useSelector((state) => state.weather.weatherData)
	const weatherStatus = useSelector((state) => state.weather.status)
	const weatherError = useSelector((state) => state.weather.error)

	useEffect(() => {
		if (weatherStatus === 'idle') {
			dispatch(fetchWeather())
		}
	}, [weatherStatus, dispatch])

	let widgetsContent
	if (weatherStatus === 'loading') {
		widgetsContent = <Loading />
	} else if (weatherStatus === 'succeeded') {
		widgetsContent = (
			<>
				<DashboardContent>
					<DashboardHeader />
					<DashboardWidgets data={weatherData.widgetsSection} />
				</DashboardContent>
				<DashboardMonitor
					data={weatherData.monitorSection}
					predictionWeatherData={weatherData.monitorSection.prediction}
				/>
			</>
		)
	} else if (weatherStatus === 'failed') {
		widgetsContent = <div>{weatherError}</div>
	}

	return <WrapperDashboard>{widgetsContent}</WrapperDashboard>
}

export default Dashboard
