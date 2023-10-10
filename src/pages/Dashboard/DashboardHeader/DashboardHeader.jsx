import Avatar from 'assets/dashboard/img/avatar.jpg'
import { IoNotificationsOutline } from 'react-icons/io5'
import {
	DashboardHeaderNotification,
	DashboardHeaderStyled,
	DashboardHeaderUser,
	DashboardHeaderUserAvatar,
	DashboardHeaderUserName
} from './DashboardHeader.styled.js'

const DashboardHeader = () => {
	return (
		<DashboardHeaderStyled>
			<DashboardHeaderUser>
				<DashboardHeaderUserAvatar>
					<img src={Avatar} alt="User Avatar" />
				</DashboardHeaderUserAvatar>
				<DashboardHeaderUserName>
					<p>Hello,</p>
					<h1>Vlad Podparinov</h1>
				</DashboardHeaderUserName>
			</DashboardHeaderUser>
			<DashboardHeaderNotification>
				<IoNotificationsOutline size={20} />
			</DashboardHeaderNotification>
		</DashboardHeaderStyled>
	)
}

export default DashboardHeader
