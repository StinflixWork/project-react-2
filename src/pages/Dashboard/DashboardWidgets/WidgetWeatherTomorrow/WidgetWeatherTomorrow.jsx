import styled from 'styled-components'

const WidgetWeatherTomorrowStyled = styled.div`
	grid-area: 2 / 4 / 3 / 5;
	border-radius: 25px;
	padding: 25px;

	background-image: url(${(props) => props.urlBg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const WidgetWeatherTomorrowLabelStyled = styled.div`
	h2 {
		color: #f2f2f2;
		font-weight: 500;
		font-size: 20px;
	}
`

const WidgetWeatherTomorrowValueStyled = styled.div`
	color: #f2f2f2;
	display: flex;
	flex-direction: column;
	row-gap: 10px;
	text-align: end;

	h3 {
		font-size: 36px;
	}

	p {
		font-size: 14px;
	}
`

const WidgetWeatherTomorrow = ({ weatherTomorrowData }) => {
	return (
		<WidgetWeatherTomorrowStyled
			urlBg={weatherTomorrowData.optionsWidget.background}
		>
			<WidgetWeatherTomorrowLabelStyled>
				<h2>Tomorrow</h2>
			</WidgetWeatherTomorrowLabelStyled>
			<WidgetWeatherTomorrowValueStyled>
				<h3>{weatherTomorrowData.valueTomorrowTemp.temp}&deg;C</h3>
				<p>{weatherTomorrowData.valueTomorrowTemp.skyConditions}</p>
			</WidgetWeatherTomorrowValueStyled>
		</WidgetWeatherTomorrowStyled>
	)
}

export default WidgetWeatherTomorrow
