import styled from 'styled-components'
import WeatherFooterItem from './WeatherFooterItem/WeatherFooterItem.jsx'

const WidgetWeatherFooterStyled = styled.div`
	flex: 0 0 80px;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
`

const WidgetWeatherFooter = ({ diagrams }) => {
	return (
		<WidgetWeatherFooterStyled>
			<WeatherFooterItem
				title="Preesure"
				value={diagrams.preesure}
				colorText="#f2f2f2"
			/>
			<WeatherFooterItem
				title="Visibility"
				value={diagrams.visibility}
				colorText="#f2f2f2"
			/>
			<WeatherFooterItem
				title="Humidity"
				value={diagrams.humidity}
				colorText="#f2f2f2"
			/>
		</WidgetWeatherFooterStyled>
	)
}

export default WidgetWeatherFooter
