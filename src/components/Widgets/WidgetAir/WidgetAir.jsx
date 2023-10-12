import styled from 'styled-components'
import WidgetAirStatistic from './WidgetAirStatistic/WidgetAirStatistic.jsx'
import WidgetWeather from 'components/Widgets/WidgetLayouts/WidgetWeather.jsx'
import WindWeatherBg from 'assets/dashboard/widget-air/weather-wind.jpg'

const WrapperWidgetAir = styled.div`
	grid-area: 1 / 3 / 2 / 5;
`

const WidgetAir = ({ airData }) => {
	return (
		<WrapperWidgetAir>
			<WidgetWeather
				background={WindWeatherBg}
				colorText="#14213d"
				body={airData.body}
			>
				<WidgetAirStatistic />
			</WidgetWeather>
		</WrapperWidgetAir>
	)
}

export default WidgetAir
