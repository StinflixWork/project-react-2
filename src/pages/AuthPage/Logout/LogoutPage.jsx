import Loading from '../../Loading/Loading.jsx'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from 'store/slices/authSlice.js'


const LogoutPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(logout())
		navigate('/login')
	}, [dispatch, navigate])

	return <Loading />
}

export default LogoutPage