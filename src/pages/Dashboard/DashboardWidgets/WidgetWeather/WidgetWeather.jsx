import styled from 'styled-components'
import ClearWeatherBg from 'assets/dashboard/widget-weather/clear-weather.jpg'
import WidgetWeatherInfo from './WidgetWeatherInfo/WidgetWeatherInfo.jsx'
import WidgetWeatherValue from './WidgetWeatherValueSky/WidgetWeatherValueSky.jsx'
import WidgetWeatherDiagrams from './WidgetWeatherDiagrams/WidgetWeatherDiagrams.jsx'

const WidgetWeatherStyled = styled.div`
	background-image: url(${(props) => props.urlBg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	grid-area: 1 / 1 / 2 / 3;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(3, 1fr);
	gap: 10px 0;
	border-radius: 20px;
	padding: 25px;
`

const WidgetWeather = () => {
	return (
		<WidgetWeatherStyled urlBg={ClearWeatherBg}>
			<WidgetWeatherInfo />
			<WidgetWeatherValue />
			<WidgetWeatherDiagrams />
		</WidgetWeatherStyled>
	)
}

export default WidgetWeather
