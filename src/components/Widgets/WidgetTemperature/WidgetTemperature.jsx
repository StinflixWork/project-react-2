import {
	WidgetTemperatureLabel,
	WrapperWidgetTemperature
} from './WidgetTemperature.styled.js'
import TemperatureChart from './TemperatureChart/TemperatureChart.jsx'
import { WidgetTemperatureStyled } from 'components/Widgets/Widgets.styled.js'

const WidgetTemperature = () => {
	return (
		<WrapperWidgetTemperature>
			<WidgetTemperatureStyled colorBg="rgba(58, 134, 255, 0.9)">
				<WidgetTemperatureLabel>
					<h2>How is the temperature today?</h2>
				</WidgetTemperatureLabel>
				<TemperatureChart />
			</WidgetTemperatureStyled>
		</WrapperWidgetTemperature>
	)
}

export default WidgetTemperature
