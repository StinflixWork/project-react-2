import { IoNotificationsOutline } from 'react-icons/io5'
import { DashboardHeaderNotification, DashboardHeaderPanel, DashboardHeaderStyled } from './DashboardHeader.styled.js'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from 'store/slices/themeSlice.js'
import { useState } from 'react'
import ButtonDarkMode from 'components/ButtonDarkMode/ButtonDarkMode.jsx'
import DashboardHeaderUser from './DashboardHeaderUser/DashboardHeaderUser.jsx'

const DashboardHeader = () => {
	const dispatch = useDispatch()
	const localTime = useSelector(state => state.weather.weatherData.header.time)
	const isDark = useSelector((state) => state.isDarkMode)
	const { fullName } = useSelector(state => state.auth)
	const [darkIcon, setDarkIcon] = useState(isDark)

	const handleChangeDarkMode = () => {
		dispatch(toggleDarkMode())
		setDarkIcon(!darkIcon)
	}


	return (
		<DashboardHeaderStyled>
			<DashboardHeaderUser localTime={localTime} username={fullName} />
			<DashboardHeaderPanel>
				<ButtonDarkMode handleChangeDarkMode={handleChangeDarkMode} darkIcon={darkIcon} />
				<DashboardHeaderNotification>
					<IoNotificationsOutline size={20} />
				</DashboardHeaderNotification>
			</DashboardHeaderPanel>
		</DashboardHeaderStyled>
	)
}

export default DashboardHeader
