import styled from 'styled-components'

const WidgetAirMainStyled = styled.div`
	flex: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;

	> p {
		font-size: 14px;
		color: #023047;
	}
`
const WidgetAirValueStyled = styled.div`
	display: flex;
	column-gap: 10px;
	align-items: center;
	margin-bottom: 5px;

	h2 {
		font-size: 36px;
		font-weight: 500;
		color: #023047;
	}

	span {
		display: inline-block;
		background-color: #023047;
		color: #f2f2f2;
		padding: 6px 12px;
		border-radius: 5px;

		font-size: 12px;
	}
`

const WidgetAirValue = ({ value }) => {
	return (
		<WidgetAirMainStyled>
			<WidgetAirValueStyled>
				<h2>{Math.round(value.main)}</h2>
				<span>km/h</span>
			</WidgetAirValueStyled>
			<p>{value.text}</p>
		</WidgetAirMainStyled>
	)
}

export default WidgetAirValue
