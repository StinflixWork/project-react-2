import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar.jsx'
import { Suspense } from 'react'
import Loading from '../Loading/Loading.jsx'
import { Outlet } from 'react-router-dom'

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
					<Outlet />
				</Suspense>
			</main>
		</WrapperLayout>
	)
}

export default Layout
