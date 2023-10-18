import {
	WidgetFilter,
	WidgetTomorrowStyled
} from 'components/Widgets/Widgets.styled.js'
import {
	WidgetTomorrowLabelStyled,
	WidgetTomorrowValueStyled,
	WrapperWidgetTomorrow
} from './WidgetTomorrow.styled.js'
import RainWeatherBg from 'assets/dashboard/widget-tomorrow/wallpaper-anime-rain-dozhd.jpg'

const WidgetTomorrow = ({ weatherTomorrowData }) => {
	return (
		<WrapperWidgetTomorrow>
			<WidgetTomorrowStyled urlBg={RainWeatherBg}>
				<WidgetFilter />
				<WidgetTomorrowLabelStyled>
					<h2>Tomorrow</h2>
				</WidgetTomorrowLabelStyled>
				<WidgetTomorrowValueStyled>
					<h3>{weatherTomorrowData.value}&deg;C</h3>
					<p>{weatherTomorrowData.text}</p>
				</WidgetTomorrowValueStyled>
			</WidgetTomorrowStyled>
		</WrapperWidgetTomorrow>
	)
}

export default WidgetTomorrow
