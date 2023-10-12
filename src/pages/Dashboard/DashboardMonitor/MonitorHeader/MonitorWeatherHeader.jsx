import styled from 'styled-components'

const MonitorHeaderStyled = styled.div`
	flex-basis: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const MonitorHeaderCountryStyled = styled.div`
	h3 {
		margin-bottom: 8px;
		font-size: 18px;
		font-weight: 500;
		color: #1f4172;
	}

	p {
		font-size: 16px;
		color: #4a5759;
	}
`
const MonitorHeaderTempStyled = styled.div`
	h2 {
		font-size: 28px;
		font-weight: 500;
		color: #fb8500;
	}
`

const MonitorWeatherHeader = () => {
	return (
		<MonitorHeaderStyled>
			<MonitorHeaderCountryStyled>
				<h3>Sun</h3>
				<p>Ukraine, Alexandria</p>
			</MonitorHeaderCountryStyled>
			<MonitorHeaderTempStyled>
				<h2>22&deg;C</h2>
			</MonitorHeaderTempStyled>
		</MonitorHeaderStyled>
	)
}

export default MonitorWeatherHeader
