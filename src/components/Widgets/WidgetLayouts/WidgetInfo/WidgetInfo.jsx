import {
	WidgetInfoBody,
	WidgetInfoIcon,
	WidgetInfoStyled
} from './WidgetInfo.styled.js'

const WidgetInfo = ({ colorText, icon }) => {
	return (
		<WidgetInfoStyled>
			<WidgetInfoIcon>{icon}</WidgetInfoIcon>
			<WidgetInfoBody colorText={colorText}>
				<h3>Weather</h3>
				<p>What&apos;s the weather.</p>
			</WidgetInfoBody>
		</WidgetInfoStyled>
	)
}

export default WidgetInfo
