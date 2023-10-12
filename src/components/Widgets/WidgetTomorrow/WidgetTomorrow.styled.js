import styled from 'styled-components'

export const WrapperWidgetTomorrow = styled.div`
	grid-area: 2 / 4 / 3 / 5;
`

export const WidgetTomorrowLabelStyled = styled.div`
	position: relative;
	z-index: 10;

	h2 {
		color: #f2f2f2;
		font-weight: 500;
		font-size: 20px;
	}
`

export const WidgetTomorrowValueStyled = styled.div`
	position: relative;
	z-index: 10;
	color: #f2f2f2;
	display: flex;
	flex-direction: column;
	row-gap: 10px;
	text-align: end;

	h3 {
		font-size: 36px;
	}

	p {
		font-size: 14px;
	}
`
