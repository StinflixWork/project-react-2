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

	img {
		width: 100%;
	}
`

const MonitorBodyItemInfoBodyStyled = styled.div`
	p {
		font-size: 14px;
		color: ${({ theme }) => theme.widgetMonitor.textColor};
	}

	h3 {
		margin-top: 4px;
		font-size: 15px;
		text-transform: capitalize;
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
	const date = new Date(data.date * 1000)
	const dateFormatter = new Intl.DateTimeFormat('en-EN', {
		month: 'long',
		day: 'numeric'
	})

	return (
		<MonitorBodyItemStyled>
			<MonitorBodyItemInfoStyled>
				<MonitorBodyItemIconBodyStyled>
					<img src={data.icon} alt="" />
				</MonitorBodyItemIconBodyStyled>
				<MonitorBodyItemInfoBodyStyled>
					<p>{dateFormatter.format(date)}</p>
					<h3>{data.condition}</h3>
				</MonitorBodyItemInfoBodyStyled>
			</MonitorBodyItemInfoStyled>
			<MonitorBodyItemValueStyled>
				<h2>
					{Math.round(data.temp)}&deg;C / {Math.round(data.avgTemp)}&deg;C
				</h2>
			</MonitorBodyItemValueStyled>
		</MonitorBodyItemStyled>
	)
}

export default MonitorBodyItem
