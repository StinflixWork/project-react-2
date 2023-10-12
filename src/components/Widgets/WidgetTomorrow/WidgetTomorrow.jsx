import {
	WidgetFilter,
	WidgetTomorrowStyled
} from 'components/Widgets/Widgets.styled.js'
import {
	WidgetTomorrowLabelStyled,
	WidgetTomorrowValueStyled,
	WrapperWidgetTomorrow
} from './WidgetTomorrow.styled.js'

const WidgetTomorrow = ({ weatherTomorrowData }) => {
	return (
		<WrapperWidgetTomorrow>
			<WidgetTomorrowStyled
				urlBg={weatherTomorrowData.optionsWidget.background}
			>
				<WidgetFilter />
				<WidgetTomorrowLabelStyled>
					<h2>Tomorrow</h2>
				</WidgetTomorrowLabelStyled>
				<WidgetTomorrowValueStyled>
					<h3>{weatherTomorrowData.valueTomorrowTemp.temp}&deg;C</h3>
					<p>{weatherTomorrowData.valueTomorrowTemp.skyConditions}</p>
				</WidgetTomorrowValueStyled>
			</WidgetTomorrowStyled>
		</WrapperWidgetTomorrow>
	)
}

export default WidgetTomorrow
