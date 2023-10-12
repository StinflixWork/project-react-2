import styled from 'styled-components'

export const WidgetValueStyled = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 6px;
	position: relative;
	z-index: 10;
`
export const WidgetValueInfo = styled.div`
	display: inline-flex;
	column-gap: 15px;
	align-items: center;

	h2 {
		font-size: 32px;
		color: ${(props) => props.colorText};
	}

	span {
		display: inline-block;
		background-color: #ffb703;
		padding: 6px 10px;
		border-radius: 5px;
		font-size: 10px;
		font-weight: 500;
	}
`
export const WidgetValueText = styled.div`
	p {
		font-size: 12px;
		color: ${(props) => props.colorText};
		text-transform: capitalize;
	}
`
