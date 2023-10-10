import styled from 'styled-components'

const WidgetInfoStyled = styled.div`
	display: flex;
	column-gap: 15px;
	position: relative;
	z-index: 10;
`

const WidgetInfoIcon = styled.div`
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background-color: #fff;

	display: grid;
	place-items: center;
`
const WidgetInfoBody = styled.div`
	color: ${(props) => props.colorText};

	h3 {
		font-size: 18px;
		font-weight: 500;
		line-height: 120%;
	}

	p {
		line-height: 120%;
		font-size: 14px;
	}
`
const WidgetInfo = ({ widgetInfo }) => {
	return (
		<WidgetInfoStyled>
			<WidgetInfoIcon>{widgetInfo.icon}</WidgetInfoIcon>
			<WidgetInfoBody colorText={widgetInfo.color}>
				<h3>{widgetInfo.title}</h3>
				<p>{widgetInfo.subtitle}</p>
			</WidgetInfoBody>
		</WidgetInfoStyled>
	)
}

export default WidgetInfo
