import styled from 'styled-components'

const WidgetWeatherValueStyled = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 6px;
`
const WidgetWeatherValueTemp = styled.div`
	display: inline-flex;
	column-gap: 15px;
	align-items: center;

	h2 {
		font-size: 32px;
		color: #102f5d;
	}

	span {
		display: inline-block;
		background-color: #fff;
		padding: 6px 10px;
		border-radius: 5px;
		font-size: 10px;
		font-weight: 500;
	}
`
const WidgetWeatherValueSky = styled.div`
	p {
		font-size: 12px;
		color: #102f5d;
	}
`

const WidgetWeatherValue = () => {
	return (
		<WidgetWeatherValueStyled>
			<WidgetWeatherValueTemp>
				<h2>22&deg;C</h2>
				<span>18&deg;C</span>
			</WidgetWeatherValueTemp>
			<WidgetWeatherValueSky>
				<p>Partly cloudy</p>
			</WidgetWeatherValueSky>
		</WidgetWeatherValueStyled>
	)
}

export default WidgetWeatherValue
