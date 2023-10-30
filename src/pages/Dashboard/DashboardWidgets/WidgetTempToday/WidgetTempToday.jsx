import styled from 'styled-components'
import { WidgetShadowStyled } from 'styles/DashboardWidgets.styled.js'
import TempTodayChart from './TempTodayChart/TempTodayChart.jsx'

const WrapperWidgetTempToday = styled.div`
  grid-area: 2 / 1 / 3 / 4;
`

const WidgetTempTodayContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

const WidgetTempContentTodayTitle = styled.div`
  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.textColors.title.secondary};
  }
`

const WidgetTempToday = ({ tempTodayData }) => {
	return (
		<WrapperWidgetTempToday>
			<WidgetShadowStyled>
				<WidgetTempTodayContent>
					<WidgetTempContentTodayTitle>
						<h2>
							How&apos;s the <br /> temperature today?
						</h2>
					</WidgetTempContentTodayTitle>
					<TempTodayChart tempData={tempTodayData} />
				</WidgetTempTodayContent>
			</WidgetShadowStyled>
		</WrapperWidgetTempToday>
	)
}

export default WidgetTempToday
