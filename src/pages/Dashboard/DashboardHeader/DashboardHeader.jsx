import styled from 'styled-components'
import Avatar from 'assets/dashboard/img/avatar.jpg'
import { IoNotificationsOutline } from 'react-icons/io5'

const DashboardHeaderStyled = styled.header`
	flex: 0 0 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const DashboardHeaderUser = styled.div`
	display: flex;
	align-items: center;
	column-gap: 15px;
`
const DashboardHeaderUserAvatar = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.backgroundSecondaryColor};
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
	}
`
const DashboardHeaderUserName = styled.div`
	font-size: 24px;
	line-height: 120%;

	p {
		color: ${(props) => props.theme.textPrimaryColor};
	}

	h1 {
		font-weight: 500;
		color: #1f4172;
	}
`
const DashboardHeaderNotification = styled.div`
	width: 32px;
	height: 32px;
	display: grid;
	place-items: center;
	border: 1px solid rgba(74, 87, 89, 0.4);
	border-radius: 50%;

	svg {
		color: ${(props) => props.theme.textPrimaryColor};
	}
`
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
