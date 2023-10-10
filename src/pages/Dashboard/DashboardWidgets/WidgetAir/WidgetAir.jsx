import styled from 'styled-components'
import Widget from 'components/Widget/Widget.jsx'
import WidgetAirValue from './WidgetAirValue/WidgetAirValue.jsx'
import WidgetAirStatistic from './WidgetAirStatistic/WidgetAirStatistic.jsx'

const WidgetAirStyled = styled.div`
	grid-area: 1 / 3 / 2 / 5;
`

const WidgetAir = ({ airData }) => {
	return (
		<WidgetAirStyled>
			<Widget widgetInfo={airData.optionsWidget}>
				<WidgetAirValue
					windData={airData.valueAir}
					colorText={airData.optionsWidget.color}
				/>
				<WidgetAirStatistic />
			</Widget>
		</WidgetAirStyled>
	)
}

export default WidgetAir
