import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from 'store/slices/authSlice.js'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import RegisterBgImage from 'assets/auth-page/registerBackground.jpg'
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
import Logo from 'components/Logo/Logo.jsx'

const RegisterPage = () => {
	const [formValue, setFormValue] = useState({ fullName: '', login: '', password: '' })
	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()

	function handleRegister() {
		dispatch(register(formValue))
		navigate('/login', { state: { from: location } })
	}

	return (
		<WrapperAuth background={RegisterBgImage}>
			<WrapperLogo>
				<Logo />
			</WrapperLogo>
			<AuthFormStyled onSubmit={handleRegister}>
				<AuthFormTitle>Welcome!</AuthFormTitle>
				<AuthFormInputs>
					<AuthFormInput
						type='text'
						placeholder='Fullname'
						value={formValue.fullName}
						onChange={(e) => setFormValue({ ...formValue, fullName: e.target.value })}
					/>
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
						Sign Up
					</AuthFormButton>
					<AuthFormLink>
						Already have an account?
						<NavLink to='/login'>Sign in to your account</NavLink>
					</AuthFormLink>
				</AuthFormFooter>
			</AuthFormStyled>
		</WrapperAuth>
	)
}

export default RegisterPage