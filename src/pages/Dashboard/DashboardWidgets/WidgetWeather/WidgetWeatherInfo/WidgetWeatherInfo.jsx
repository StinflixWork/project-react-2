import styled from 'styled-components'
import { WiDayCloudy } from 'react-icons/wi'

const WidgetWeatherInfoStyled = styled.div`
	display: flex;
	column-gap: 15px;
`

const WidgetWeatherInfoIcon = styled.div`
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background-color: #fff;

	display: grid;
	place-items: center;
`
const WidgetWeatherInfoBody = styled.div`
	h3 {
		font-size: 18px;
		font-weight: 500;
		color: #ffffff;
		line-height: 120%;
	}

	p {
		color: #fdfdfd;
		line-height: 120%;
		font-size: 14px;
	}
`

const WidgetWeatherInfo = () => {
	return (
		<WidgetWeatherInfoStyled>
			<WidgetWeatherInfoIcon>
				<WiDayCloudy size={26} color="#14213d" />
			</WidgetWeatherInfoIcon>
			<WidgetWeatherInfoBody>
				<h3>Weather</h3>
				<p>What&apos;s the weather.</p>
			</WidgetWeatherInfoBody>
		</WidgetWeatherInfoStyled>
	)
}

export default WidgetWeatherInfo
