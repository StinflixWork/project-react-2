import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

const Dashboard = lazy(() => import('../Dashboard/Dashboard.jsx'))
const GraphWeather = lazy(() => import('../GraphWeather/GraphWeather.jsx'))

const Navigation = () => {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/graph" element={<GraphWeather />} />
		</Routes>
	)
}

export default Navigation
