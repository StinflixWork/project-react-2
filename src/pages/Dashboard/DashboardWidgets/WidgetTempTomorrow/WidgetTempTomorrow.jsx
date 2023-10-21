import styled from 'styled-components'
import { WidgetBlurBg, WidgetStyled } from 'styles/DashboardWidgets.styled.js'
import WidgetBgImage from 'assets/dashboard/widget-tomorrow/weather-rain.jpg'

const WrapperWidgetTempTomorrow = styled.div`
	grid-area: 2 / 4 / 3 / 5;
`

const WidgetTempTomorrowBody = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	color: #f5f5f5;
`

const WidgetTempTomorrowTitle = styled.div`
	p {
		font-size: 20px;
		font-weight: 500;
	}
`
const WidgetTempTomorrowTemp = styled.div`
	text-align: end;

	h2 {
		font-size: 36px;
		line-height: 120%;
	}

	p {
		font-size: 16px;
	}
`

const WidgetTempTomorrow = ({ tempTomorrowData }) => {
	return (
		<WrapperWidgetTempTomorrow>
			<WidgetStyled $background={WidgetBgImage}>
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
