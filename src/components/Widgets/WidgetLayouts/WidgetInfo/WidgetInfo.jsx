import {
	WidgetInfoBody,
	WidgetInfoIcon,
	WidgetInfoStyled
} from './WidgetInfo.styled.js'
import { WiDayCloudy } from 'react-icons/wi'

const WidgetInfo = ({ colorText }) => {
	return (
		<WidgetInfoStyled>
			<WidgetInfoIcon>
				<WiDayCloudy size={26} color="#14213d" />
			</WidgetInfoIcon>
			<WidgetInfoBody colorText={colorText}>
				<h3>Weather</h3>
				<p>What&apos;s the weather.</p>
			</WidgetInfoBody>
		</WidgetInfoStyled>
	)
}

export default WidgetInfo
