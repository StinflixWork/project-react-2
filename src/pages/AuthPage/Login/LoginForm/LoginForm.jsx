import {
	AuthFormButton,
	AuthFormFooter,
	AuthFormInput,
	AuthFormInputs,
	AuthFormLink,
	AuthFormStyled,
	AuthFormTitle
} from '../../Auth.styled.js'
import { PiSignInFill } from 'react-icons/pi'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { verification } from 'store/slices/authSlice.js'
import { useDispatch } from 'react-redux'


const LoginForm = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [formValue, setFormValue] = useState({ login: '', password: '' })

	function handleLogin(e) {
		e.preventDefault()
		dispatch(verification(formValue))
		navigate('/', { replace: true })
	}

	return (
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
	)
}

export default LoginForm