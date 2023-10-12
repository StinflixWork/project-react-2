import styled from 'styled-components'

const WidgetWeatherDiagramsItemStyled = styled.div`
	flex: 1 1 33.333%;
	padding: 5px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	row-gap: 10px;
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.colorText};
	border-radius: 10px;
	text-align: center;

	h3 {
		font-size: 18px;
		font-weight: 500;
	}

	p {
		font-size: 14px;
		font-weight: 300;
	}
`

const WidgetWeatherDiagramsItem = ({ title, value, stylesDiagram }) => {
	return (
		<WidgetWeatherDiagramsItemStyled
			bgColor={stylesDiagram.bgColor}
			colorText={stylesDiagram.colorText}
		>
			<p>{title}</p>
			<h3>{value}</h3>
		</WidgetWeatherDiagramsItemStyled>
	)
}

export default WidgetWeatherDiagramsItem
