import styled from 'styled-components'
import {
	WidgetHeaderBody,
	WidgetHeaderIcon
} from 'styles/DashboardWidgets.styled.js'

const WidgetWeatherHeaderStyled = styled.div`
	flex: 0 0 50px;
	display: flex;
	align-items: center;
	column-gap: 15px;
`

const WidgetHeader = ({ icon, title, subtitle, colorText }) => {
	return (
		<WidgetWeatherHeaderStyled>
			<WidgetHeaderIcon>{icon}</WidgetHeaderIcon>
			<WidgetHeaderBody color={colorText}>
				<h3>{title}</h3>
				<p>{subtitle}</p>
			</WidgetHeaderBody>
		</WidgetWeatherHeaderStyled>
	)
}

export default WidgetHeader
