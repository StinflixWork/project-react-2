import styled from 'styled-components'

export const DashboardHeaderStyled = styled.header`
	flex: 0 0 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const DashboardHeaderUser = styled.div`
	display: flex;
	align-items: center;
	column-gap: 15px;
`
export const DashboardHeaderUserAvatar = styled.div`
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
export const DashboardHeaderUserName = styled.div`
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
export const DashboardHeaderNotification = styled.div`
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
