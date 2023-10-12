import {
	WidgetInfoBody,
	WidgetInfoIcon,
	WidgetInfoStyled
} from './WidgetInfo.styled.js'

const WidgetInfo = ({ widgetInfo, colorText }) => {
	return (
		<WidgetInfoStyled>
			<WidgetInfoIcon>{widgetInfo.icon}</WidgetInfoIcon>
			<WidgetInfoBody colorText={colorText}>
				<h3>{widgetInfo.title}</h3>
				<p>{widgetInfo.subtitle}</p>
			</WidgetInfoBody>
		</WidgetInfoStyled>
	)
}

export default WidgetInfo
