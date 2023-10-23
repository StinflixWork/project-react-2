import Avatar from 'assets/dashboard/img/avatar.jpg'
import {
	DashboardHeaderUserAvatar,
	DashboardHeaderUserName,
	DashboardHeaderUserStyled
} from './DashboardHeaderUser.styled.js'
import { getGreetingByTime } from '../../../../services/getGreetingByTime.js'

const DashboardHeaderUser = ({ localTime }) => {
	const greeting = getGreetingByTime(localTime)

	return (
		<DashboardHeaderUserStyled>
			<DashboardHeaderUserAvatar>
				<img src={Avatar} alt='User Avatar' />
			</DashboardHeaderUserAvatar>
			<DashboardHeaderUserName>
				<p>{greeting},</p>
				<h1>Vlad Podparinov</h1>
			</DashboardHeaderUserName>
		</DashboardHeaderUserStyled>
	)
}

export default DashboardHeaderUser