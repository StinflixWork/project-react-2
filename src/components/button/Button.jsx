import styled from 'styled-components'

const ButtonStyled = styled.button`
	font-family: Arial, sans-serif;
	padding: 10px 20px;
	background-color: ${(props) => props.theme.secondaryBackgroundColor};
	border-radius: 5px;
	color: ${(props) => props.theme.mainColor};
`

const Button = (props) => {
	return (
		<ButtonStyled onClick={props.handleChangeTheme}>
			{props.children}
		</ButtonStyled>
	)
}

export default Button
