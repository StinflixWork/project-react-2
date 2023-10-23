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
				title='Preesure'
				value={diagrams.preesure}
				colorText='#f2f2f2'
				bgColor='#023e8a'
			/>
			<WeatherFooterItem
				title='Visibility'
				value={diagrams.visibility}
				colorText='#f2f2f2'
				bgColor='#0077b6'
			/>
			<WeatherFooterItem
				title='Humidity'
				value={diagrams.humidity}
				colorText='#f2f2f2'
				bgColor='#0096c7'
			/>
		</WidgetWeatherFooterStyled>
	)
}

export default WidgetWeatherFooter
