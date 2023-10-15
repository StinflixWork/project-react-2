import {
	WidgetFilter,
	WidgetMainStyled
} from 'components/Widgets/Widgets.styled.js'
import WidgetInfo from 'components/Widgets/WidgetLayouts/WidgetInfo/WidgetInfo.jsx'
import WidgetValue from 'components/Widgets/WidgetLayouts/WidgetValue/WidgetValue.jsx'

const WidgetWeather = ({ children, background, colorText, body }) => {
	return (
		<WidgetMainStyled urlBg={background}>
			<WidgetFilter />
			<WidgetInfo colorText={colorText} />
			<WidgetValue value={body.value} colorText={colorText} />
			{children}
		</WidgetMainStyled>
	)
}

export default WidgetWeather
