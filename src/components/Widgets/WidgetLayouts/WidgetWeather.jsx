import {
	WidgetFilter,
	WidgetMainStyled
} from 'components/Widgets/Widgets.styled.js'
import WidgetInfo from 'components/Widgets/WidgetLayouts/WidgetInfo/WidgetInfo.jsx'
import WidgetValue from 'components/Widgets/WidgetLayouts/WidgetValue/WidgetValue.jsx'

const WidgetWeather = ({ children, background, colorText, body, icon }) => {
	return (
		<WidgetMainStyled urlBg={background}>
			<WidgetFilter />
			<WidgetInfo colorText={colorText} icon={icon} />
			<WidgetValue value={body} colorText={colorText} />
			{children}
		</WidgetMainStyled>
	)
}

export default WidgetWeather
