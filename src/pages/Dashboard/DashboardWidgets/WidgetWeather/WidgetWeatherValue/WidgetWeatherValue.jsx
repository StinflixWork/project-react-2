import styled from 'styled-components'

const WidgetValueStyled = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 6px;
	position: relative;
	z-index: 10;
`
const WidgetValueTemp = styled.div`
	display: inline-flex;
	column-gap: 15px;
	align-items: center;

	h2 {
		font-size: 32px;
		color: ${(props) => props.colorText};
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
const WidgetValueSky = styled.div`
	p {
		font-size: 12px;
		color: ${(props) => props.colorText};
		text-transform: capitalize;
	}
`
const WidgetWeatherValue = ({ tempData, colorText }) => {
	return (
		<WidgetValueStyled>
			<WidgetValueTemp colorText={colorText}>
				<h2>{tempData.temp}&deg;C</h2>
				<span>{tempData.feelLike}&deg;C</span>
			</WidgetValueTemp>
			<WidgetValueSky colorText={colorText}>
				<p>{tempData.skyConditions}</p>
			</WidgetValueSky>
		</WidgetValueStyled>
	)
}

export default WidgetWeatherValue
