import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { WrapperAuth, WrapperLogo } from '../Auth.styled.js'
import LoginBgImage from 'assets/auth-page/loginBackground.jpg'
import Logo from 'components/Logo/Logo.jsx'
import { toast, ToastContainer } from 'react-toast'
import LoginForm from './LoginForm/LoginForm.jsx'

const LoginPage = () => {
	const { isRegister } = useSelector(state => state.auth)
	const success = () => toast.success(
		'Account has been successfully created!', {
			backgroundColor: '#023e8a'
		}
	)

	useEffect(() => {
		if (isRegister) success()
	}, [isRegister])

	return (
		<WrapperAuth background={LoginBgImage}>
			<WrapperLogo>
				<Logo />
			</WrapperLogo>
			<LoginForm />
			<ToastContainer />
		</WrapperAuth>
	)
}

export default LoginPage