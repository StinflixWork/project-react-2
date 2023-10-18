import styled from 'styled-components'

const WidgetAirStatisticStyled = styled.div`
	padding: 15px;
	border-radius: 10px;
	background-color: #fff;
	position: relative;
	z-index: 10;
`

const WidgetAirStatisticLabel = styled.div`
	width: 100%;
	display: inline-flex;
	justify-content: space-between;

	p {
		font-size: 14px;
		font-weight: 500;
		color: #14213d;
	}
`

const WidgetAirStatisticProgress = styled.div`
	progress {
		width: 100%;
		height: 5px;
		border-radius: 10px;
		color: #fb8500;

		&::-moz-progress-bar {
			background: #fb8500;
		}
	}
`

const WidgetAirStatistic = ({ windKm }) => {
	return (
		<WidgetAirStatisticStyled>
			<WidgetAirStatisticLabel>
				<p>No wind</p>
				<p>Very airy</p>
			</WidgetAirStatisticLabel>
			<WidgetAirStatisticProgress>
				<progress max={35} value={windKm} />
			</WidgetAirStatisticProgress>
		</WidgetAirStatisticStyled>
	)
}

export default WidgetAirStatistic
