import { DashboardPage, GraphWeatherPage } from 'pages/pages.js'

export const routes = [
	{
		id: 1,
		path: '/',
		element: <DashboardPage />
	},
	{
		id: 2,
		path: '/graph',
		element: <GraphWeatherPage />
	}
]
