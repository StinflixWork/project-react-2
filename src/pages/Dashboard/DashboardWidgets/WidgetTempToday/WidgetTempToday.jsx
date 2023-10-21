import styled from 'styled-components'
import { WidgetStyled } from 'styles/DashboardWidgets.styled.js'
import TempTodayChart from './TempTodayChart/TempTodayChart.jsx'

const WrapperWidgetTempToday = styled.div`
	grid-area: 2 / 1 / 3 / 4;
`

const WidgetTempTodayContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`

const WidgetTempContentTodayTitle = styled.div`
	h2 {
		font-size: 24px;
		color: #023047;
	}
`

const WidgetTempToday = ({ tempTodayData }) => {
	return (
		<WrapperWidgetTempToday>
			<WidgetStyled>
				<WidgetTempTodayContent>
					<WidgetTempContentTodayTitle>
						<h2>
							How&apos;s the <br /> temperature today?
						</h2>
					</WidgetTempContentTodayTitle>
					<TempTodayChart tempData={tempTodayData} />
				</WidgetTempTodayContent>
			</WidgetStyled>
		</WrapperWidgetTempToday>
	)
}

export default WidgetTempToday
