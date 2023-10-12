import styled from 'styled-components'

const MonitorBodyItemStyled = styled.div`
	padding: 5px 10px;
	border-radius: 15px;
	background-color: ${({ theme }) => theme.widgetMonitor.background};
	height: 70px;

	display: flex;
	align-items: center;
	justify-content: space-between;
`

const MonitorBodyItemInfoStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`
const MonitorBodyItemIconBodyStyled = styled.div`
	width: 35px;
	height: 100%;
	display: grid;
	place-items: center;
`

const MonitorBodyItemInfoBodyStyled = styled.div`
	p {
		font-size: 14px;
		color: ${({ theme }) => theme.widgetMonitor.textColor};
	}

	h3 {
		margin-top: 4px;
		font-size: 16px;
		font-weight: 500;
		color: ${({ theme }) => theme.textColors.title.primary};
	}
`
const MonitorBodyItemValueStyled = styled.div`
	h2 {
		color: ${({ theme }) => theme.widgetMonitor.tempColor};
		font-weight: 500;
		font-size: 14px;
	}
`

const MonitorBodyItem = ({ data }) => {
	return (
		<MonitorBodyItemStyled>
			<MonitorBodyItemInfoStyled>
				<MonitorBodyItemIconBodyStyled>
					{data.icon}
				</MonitorBodyItemIconBodyStyled>
				<MonitorBodyItemInfoBodyStyled>
					<p>{data.day}</p>
					<h3>{data.weather}</h3>
				</MonitorBodyItemInfoBodyStyled>
			</MonitorBodyItemInfoStyled>
			<MonitorBodyItemValueStyled>
				<h2>
					{data.temp}&deg;C / {data.feelLike}&deg;C
				</h2>
			</MonitorBodyItemValueStyled>
		</MonitorBodyItemStyled>
	)
}

export default MonitorBodyItem
