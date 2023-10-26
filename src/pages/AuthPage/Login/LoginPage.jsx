import { useDispatch } from 'react-redux'
import { verification } from 'store/slices/authSlice.js'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
	AuthFormButton,
	AuthFormFooter,
	AuthFormInput,
	AuthFormInputs,
	AuthFormLink,
	AuthFormStyled,
	AuthFormTitle,
	WrapperAuth,
	WrapperLogo
} from '../Auth.styled.js'
import LoginBgImage from 'assets/auth-page/loginBackground.jpg'
import { PiSignInFill } from 'react-icons/pi'
import Logo from 'components/Logo/Logo.jsx'

const LoginPage = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()

	const from = location.state?.from?.pathname || '/'

	const [formValue, setFormValue] = useState({ login: '', password: '' })

	function handleLogin(e) {
		e.preventDefault()
		dispatch(verification(formValue))
		navigate(from, { replace: true })
	}

	return (
		<WrapperAuth background={LoginBgImage}>
			<WrapperLogo>
				<Logo />
			</WrapperLogo>
			<AuthFormStyled onSubmit={handleLogin}>
				<AuthFormTitle>Welcome!</AuthFormTitle>
				<AuthFormInputs>
					<AuthFormInput
						type='text'
						placeholder='Login'
						value={formValue.login}
						onChange={(e) => setFormValue({ ...formValue, login: e.target.value })}
					/>
					<AuthFormInput
						type='password'
						placeholder='Password'
						value={formValue.password}
						onChange={(e) => setFormValue({ ...formValue, password: e.target.value })}
					/>
				</AuthFormInputs>
				<AuthFormFooter>
					<AuthFormButton type='submit'>
						Login
						<PiSignInFill size={24} />
					</AuthFormButton>
					<AuthFormLink>
						Don&apos;t have an account?
						<NavLink to='/register'>Create new account</NavLink>
					</AuthFormLink>
				</AuthFormFooter>
			</AuthFormStyled>
		</WrapperAuth>
	)
}

export default LoginPage