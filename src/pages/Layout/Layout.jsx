import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar.jsx'
import Navigation from '../Navigation/Navigation.jsx'
import { Suspense } from 'react'
import Loading from '../Loading/Loading.jsx'

const WrapperLayout = styled.div`
	min-height: 100%;
	overflow: clip;
	background-color: ${({ theme }) => theme.backgroundColors.primary};
	display: grid;
	grid-template-columns: 100px 1fr;
`

const Layout = () => {
	return (
		<WrapperLayout>
			<Sidebar />
			<main>
				<Suspense fallback={<Loading />}>
					<Navigation />
				</Suspense>
			</main>
		</WrapperLayout>
	)
}

export default Layout
