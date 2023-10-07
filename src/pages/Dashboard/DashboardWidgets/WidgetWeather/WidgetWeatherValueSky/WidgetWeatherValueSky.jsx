import styled from 'styled-components'

const WidgetWeatherValueStyled = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 6px;
	position: relative;
	z-index: 10;
`
const WidgetWeatherValueTemp = styled.div`
	display: inline-flex;
	column-gap: 15px;
	align-items: center;

	h2 {
		font-size: 32px;
		color: #003049;
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
		color: #003049;
		text-transform: capitalize;
	}
`

const WidgetWeatherValue = ({ tempData }) => {
	return (
		<WidgetWeatherValueStyled>
			<WidgetWeatherValueTemp>
				<h2>{tempData.temp}&deg;C</h2>
				<span>{tempData.feelLike}&deg;C</span>
			</WidgetWeatherValueTemp>
			<WidgetWeatherValueSky>
				<p>{tempData.skyConditions}</p>
			</WidgetWeatherValueSky>
		</WidgetWeatherValueStyled>
	)
}

export default WidgetWeatherValue
