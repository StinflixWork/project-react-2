import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import Layout from '../Layout/Layout.jsx'
import LoginPage from '../AuthPage/Login/LoginPage.jsx'
import PrivateRouter from 'components/PrivateRouter/PrivateRouter.jsx'
import LogoutPage from '../AuthPage/Logout/LogoutPage.jsx'
import RegisterPage from '../AuthPage/Register/RegisterPage.jsx'


const Dashboard = lazy(() => import('../Dashboard/Dashboard.jsx'))
const GraphWeather = lazy(() => import('../GraphWeather/GraphWeather.jsx'))

const Navigation = () => {
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/logout' element={<LogoutPage />} />
			<Route element={<PrivateRouter />}>
				<Route element={<Layout />}>
					<Route path='/' element={<Dashboard />} />
					<Route path='/graph' element={<GraphWeather />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default Navigation
