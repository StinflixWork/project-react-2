import WidgetWeatherDiagrams from './WidgetWeatherDiagrams/WidgetWeatherDiagrams.jsx'
import styled from 'styled-components'
import WidgetWeather from 'components/Widgets/WidgetLayouts/WidgetWeather.jsx'
import ClearWeatherBg from 'assets/dashboard/widget-weather/clear-weather.jpg'
import { WiDayCloudy } from 'react-icons/wi'

const WrapperWidgetMain = styled.div`
	grid-area: 1 / 1 / 2 / 3;
`

const WidgetMain = ({ weatherData }) => {
	return (
		<WrapperWidgetMain>
			<WidgetWeather
				background={ClearWeatherBg}
				colorText="#f2f2f2"
				body={weatherData.value}
				icon={<WiDayCloudy size={26} color="#14213d" />}
			>
				<WidgetWeatherDiagrams diagramsData={weatherData.diagramsData} />
			</WidgetWeather>
		</WrapperWidgetMain>
	)
}

export default WidgetMain
