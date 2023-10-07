import styled from 'styled-components'
import SidebarLink from './sidebar-link/SidebarLink.jsx'
import Logo from 'components/Logo/Logo.jsx'
import { sidebarLinks } from './links.data.jsx'
import { BiLogOut } from 'react-icons/bi'

const WrapperSidebar = styled.aside`
	padding-top: 10px;
	padding-bottom: 30px;

	nav {
		height: 100%;
		display: flex;
		flex-direction: column;
		row-gap: 50px;

		ul {
			flex: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 30px;
		}

		button {
			color: ${(props) => props.theme.textPrimaryColor};
			transition: color 0.3s ease-out;

			&:hover {
				color: #333d3f;
			}
		}
	}
`

const Sidebar = () => {
	return (
		<WrapperSidebar>
			<nav>
				<Logo />
				<ul>
					{sidebarLinks.map((link) => (
						<SidebarLink key={link.id} linkData={link} />
					))}
				</ul>
				<button>
					<BiLogOut size={24} />
				</button>
			</nav>
		</WrapperSidebar>
	)
}

export default Sidebar
