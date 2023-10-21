import styled from 'styled-components'

const WidgetWeatherMainStyled = styled.div`
	flex: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;

	> p {
		font-size: 14px;
		color: #f5f5f5;
	}
`
const WidgetWeatherValueStyled = styled.div`
	display: flex;
	column-gap: 20px;
	align-items: center;
	margin-bottom: 5px;

	h2 {
		font-size: 36px;
		font-weight: 500;
		color: #f5f5f5;
	}

	span {
		display: inline-block;
		background-color: #fdf0d5;
		color: #003049;
		padding: 6px 12px;
		border-radius: 5px;

		font-size: 14px;
	}
`

const WidgetWeatherValue = ({ value }) => {
	return (
		<WidgetWeatherMainStyled>
			<WidgetWeatherValueStyled>
				<h2>{Math.round(value.main)}°C</h2>
				<span>{Math.round(value.optional)}°C</span>
			</WidgetWeatherValueStyled>
			<p>{value.text}</p>
		</WidgetWeatherMainStyled>
	)
}

export default WidgetWeatherValue
