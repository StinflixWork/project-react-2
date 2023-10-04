import styled from 'styled-components'
import DashboardWidgets from './DashboardWidgets/DashboardWidgets.jsx'
import DashboardMonitor from './DashboardMonitor/DashboardMonitor.jsx'
import DashboardHeader from './DashboardHeader/DashboardHeader.jsx'

const WrapperDashboard = styled.section`
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 350px;
`

const DashboardContent = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 50px;
	padding: 15px 35px;
`

const Dashboard = () => {
	return (
		<WrapperDashboard>
			<DashboardContent>
				<DashboardHeader />
				<DashboardWidgets />
			</DashboardContent>
			<DashboardMonitor />
		</WrapperDashboard>
	)
}

export default Dashboard
