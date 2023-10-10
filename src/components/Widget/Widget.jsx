import { WidgetFilter, WidgetStyled } from './Widget.styled.js'
import WidgetInfo from 'components/Widget/WidgetInfo/WidgetInfo.jsx'

const Widget = ({ children, widgetInfo }) => {
	return (
		<WidgetStyled urlBg={widgetInfo.background}>
			<WidgetFilter />
			<WidgetInfo widgetInfo={widgetInfo} />
			{children}
		</WidgetStyled>
	)
}

export default Widget
