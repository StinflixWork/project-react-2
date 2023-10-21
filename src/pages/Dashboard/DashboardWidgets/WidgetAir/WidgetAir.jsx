import styled from 'styled-components'
import {
	WidgetBlurBg,
	WidgetContent,
	WidgetStyled
} from 'styles/DashboardWidgets.styled.js'
import WidgetBgImage from 'assets/dashboard/widget-air/weather-wind.jpg'
import WidgetHeader from 'components/WidgetLayout/WidgetHeader/WidgetHeader.jsx'
import { FiWind } from 'react-icons/fi'
import WidgetAirValue from './WidgetAirValue/WidgetAirValue.jsx'
import WidgetAirFooter from './WidgetAirFooter/WidgetAirFooter.jsx'

const WrapperWidgetAir = styled.div`
	grid-area: 1 / 3 / 2 / 5;
`

const WidgetAir = ({ airData }) => {
	return (
		<WrapperWidgetAir>
			<WidgetStyled $background={WidgetBgImage}>
				<WidgetBlurBg />
				<WidgetContent>
					<WidgetHeader
						icon={<FiWind size={24} color="#fb8500" />}
						title="Air Quality"
						subtitle="What's the speed wind"
						colorText="#072541"
					/>
					<WidgetAirValue value={airData.value} />
					<WidgetAirFooter windSpeed={airData.value.main} />
				</WidgetContent>
			</WidgetStyled>
		</WrapperWidgetAir>
	)
}

export default WidgetAir
