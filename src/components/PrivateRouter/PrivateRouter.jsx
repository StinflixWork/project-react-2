import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const PrivateRouter = () => {
	const { isAuthenticated } = useSelector(state => state.auth)
	const location = useLocation()
	return (
		isAuthenticated ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
	)
}

export default PrivateRouter