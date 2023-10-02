import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SidebarLinkStyled = styled(NavLink)`
	width: 36px;
	height: 36px;
	border-radius: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.textPrimaryColor};
	transition: all 0.5s ease;

	svg {
		transition: color 0.5s ease;
	}

	&:hover,
	&.active {
		background-color: #fb8500;
		box-shadow: 2px 6px 10px -3px rgba(0, 0, 0, 0.2);

		svg {
			color: #fff;
		}
	}
`

const SidebarLink = ({ linkData }) => {
	return (
		<li>
			<SidebarLinkStyled
				className={({ isActive }) => (isActive ? 'active' : '')}
				to={linkData.path}
			>
				{linkData.icon}
			</SidebarLinkStyled>
		</li>
	)
}

export default SidebarLink
