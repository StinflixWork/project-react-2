import {
	WidgetBlurBg,
	WidgetContent,
	WidgetStyled
} from 'styles/DashboardWidgets.styled.js'
import WidgetBgImage from 'assets/dashboard/widget-weather/clear-weather.jpg'
import styled from 'styled-components'
import { WiDayCloudy } from 'react-icons/wi'
import WidgetHeader from 'components/WidgetLayout/WidgetHeader/WidgetHeader.jsx'
import WidgetWeatherValue from './WidgetWeatherValue/WidgetWeatherValue.jsx'
import WidgetWeatherFooter from './WidgetWeatherFooter/WidgetWeatherFooter.jsx'

const WrapperWidgetWeather = styled.div`
	grid-area: 1 / 1 / 2 / 3;
`

const WidgetWeather = ({ weatherData }) => {
	return (
		<WrapperWidgetWeather>
			<WidgetStyled $background={WidgetBgImage}>
				<WidgetBlurBg />
				<WidgetContent>
					<WidgetHeader
						icon={<WiDayCloudy size={28} color="#192655" />}
						title="Weather"
						subtitle="What's the weather"
						colorText={'#f5f5f5'}
					/>
					<WidgetWeatherValue value={weatherData.value} />
					<WidgetWeatherFooter diagrams={weatherData.diagramsData} />
				</WidgetContent>
			</WidgetStyled>
		</WrapperWidgetWeather>
	)
}

export default WidgetWeather
