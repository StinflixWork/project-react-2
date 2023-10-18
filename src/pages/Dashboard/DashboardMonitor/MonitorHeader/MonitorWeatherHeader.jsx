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
		color: ${({ theme }) => theme.textColors.title.primary};
	}

	p {
		font-size: 16px;
		color: ${({ theme }) => theme.textColors.text.primary};
	}
`
const MonitorHeaderTempStyled = styled.div`
	h2 {
		font-size: 28px;
		font-weight: 500;
		color: #fb8500;
	}
`

const MonitorWeatherHeader = ({ data }) => {
	return (
		<MonitorHeaderStyled>
			<MonitorHeaderCountryStyled>
				<h3>{data.temp.text}</h3>
				<p>
					{data.location.country}, {data.location.city}
				</p>
			</MonitorHeaderCountryStyled>
			<MonitorHeaderTempStyled>
				<h2>{Math.round(data.temp.value)}&deg;C</h2>
			</MonitorHeaderTempStyled>
		</MonitorHeaderStyled>
	)
}

export default MonitorWeatherHeader
