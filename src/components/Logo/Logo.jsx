import styled from 'styled-components'
import LogoSvg from 'assets/Logo.svg'

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
`

const Logo = () => {
	return (
		<LogoStyled>
			<img src={LogoSvg} alt='Logo' />
		</LogoStyled>
	)
}

export default Logo
