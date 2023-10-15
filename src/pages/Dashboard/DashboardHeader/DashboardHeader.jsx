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
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from 'store/slices/themeSlice.js'
import { BsFillBrightnessHighFill } from 'react-icons/bs'
import { useState } from 'react'

const DashboardHeader = () => {
	const dispatch = useDispatch()
	const isDark = useSelector((state) => state.isDarkMode)
	const [darkIcon, setDarkIcon] = useState(isDark)

	const handleChangeDarkMode = () => {
		dispatch(toggleDarkMode())
		setDarkIcon(!darkIcon)
	}

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
				<button onClick={handleChangeDarkMode}>
					{!darkIcon ? (
						<>
							Dark Mode
							<MdNightsStay size={20} color="#fb8500" />
						</>
					) : (
						<>
							Light Mode
							<BsFillBrightnessHighFill size={20} color="#fb8500" />
						</>
					)}
				</button>
				<DashboardHeaderNotification>
					<IoNotificationsOutline size={20} />
				</DashboardHeaderNotification>
			</DashboardHeaderPanel>
		</DashboardHeaderStyled>
	)
}

export default DashboardHeader
