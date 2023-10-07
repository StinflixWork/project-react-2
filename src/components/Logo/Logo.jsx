import { TiWeatherStormy } from 'react-icons/ti'
import styled from 'styled-components'

const LogoStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	font-family: Arial, sans-serif;
	font-size: 16px;
	font-weight: 600;
	color: #fb8500;

	svg {
		fill: #219ebc;
	}
`

const Logo = () => {
	return (
		<LogoStyled>
			<TiWeatherStormy size={32} />
			WeatherSV
		</LogoStyled>
	)
}

export default Logo
