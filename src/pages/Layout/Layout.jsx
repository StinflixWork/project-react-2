import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar.jsx'
import Navigation from '../Navigation/Navigation.jsx'
import { Suspense } from 'react'

const WrapperLayout = styled.div`
	min-height: 100%;
	overflow: clip;
	background-color: ${(props) => props.theme.backgroundPrimaryColor};
	display: grid;
	grid-template-columns: 100px 1fr;
`

const Layout = () => {
	return (
		<WrapperLayout>
			<Sidebar />
			<main>
				<Suspense fallback={<p>Loading...</p>}>
					<Navigation />
				</Suspense>
			</main>
		</WrapperLayout>
	)
}

export default Layout
