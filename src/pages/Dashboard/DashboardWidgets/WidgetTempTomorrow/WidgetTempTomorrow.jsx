import styled from 'styled-components'
import { WidgetBlurBg, WidgetStyled } from 'styles/DashboardWidgets.styled.js'
import { WidgetTempTomorrowBody, WidgetTempTomorrowTemp, WidgetTempTomorrowTitle } from './WidgetTempTomorrow.styled.js'
import SunnyBgImage from 'assets/dashboard/widget-tomorrow/weather-sunny.jpg'
import RainBgImage from 'assets/dashboard/widget-tomorrow/weather-rain.jpg'
import CloudyBgImage from 'assets/dashboard/widget-tomorrow/weather-cloudy.jpg'

const WrapperWidgetTempTomorrow = styled.div`
  grid-area: 2 / 4 / 3 / 5;
`


const WidgetTempTomorrow = ({ tempTomorrowData }) => {
	let backgroundWidget
	if (tempTomorrowData.text === 'Sunny') {
		backgroundWidget = SunnyBgImage
	} else if (tempTomorrowData === 'Patchy rain possible' || tempTomorrowData === 'Moderate rain') {
		backgroundWidget = RainBgImage
	} else {
		backgroundWidget = CloudyBgImage
	}

	return (
		<WrapperWidgetTempTomorrow>
			<WidgetStyled $background={backgroundWidget}>
				<WidgetBlurBg />
				<WidgetTempTomorrowBody>
					<WidgetTempTomorrowTitle>
						<p>Tomorrow</p>
					</WidgetTempTomorrowTitle>
					<WidgetTempTomorrowTemp>
						<h2>{Math.round(tempTomorrowData.value)}°C</h2>
						<p>{tempTomorrowData.text}</p>
					</WidgetTempTomorrowTemp>
				</WidgetTempTomorrowBody>
			</WidgetStyled>
		</WrapperWidgetTempTomorrow>
	)
}

export default WidgetTempTomorrow
