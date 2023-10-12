import Avatar from 'assets/dashboard/img/avatar.jpg'
import { IoNotificationsOutline } from 'react-icons/io5'
import {
	DashboardHeaderNotification,
	DashboardHeaderPanel,
	DashboardHeaderStyled,
	DashboardHeaderUser,
	DashboardHeaderUserAvatar,
	DashboardHeaderUserName
} from './DashboardHeader.styled.js'
import { MdNightsStay } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { toggleDarkMode } from 'store/slices/themeSlice.js'

const DashboardHeader = () => {
	const dispatch = useDispatch()
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
			<DashboardHeaderPanel>
				<button onClick={() => dispatch(toggleDarkMode())}>
					Dark Mode
					<MdNightsStay size={20} color="#fb8500" />
				</button>
				<DashboardHeaderNotification>
					<IoNotificationsOutline size={20} />
				</DashboardHeaderNotification>
			</DashboardHeaderPanel>
		</DashboardHeaderStyled>
	)
}

export default DashboardHeader
