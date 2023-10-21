import styled from 'styled-components'

const WidgetAirFooterStyled = styled.div`
	flex: 0 0 80px;
`

const ProgressbarStyled = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f5f5f5;
	border-radius: 20px;

	display: flex;
	flex-direction: column;
	padding: 15px;
`

const ProgressbarLabelStyled = styled.div`
	flex: 0 0 50%;
	display: inline-flex;
	justify-content: space-between;

	p {
		font-size: 15px;
		font-weight: 500;
		text-transform: capitalize;
		color: #0077b6;
	}
`

const ProgressbarProgressStyled = styled.div`
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

const WidgetAirFooter = ({ windSpeed }) => {
	return (
		<WidgetAirFooterStyled>
			<ProgressbarStyled>
				<ProgressbarLabelStyled>
					<p>no wind</p>
					<p>very windy</p>
				</ProgressbarLabelStyled>
				<ProgressbarProgressStyled>
					<progress value={windSpeed} max={36} />
				</ProgressbarProgressStyled>
			</ProgressbarStyled>
		</WidgetAirFooterStyled>
	)
}

export default WidgetAirFooter
