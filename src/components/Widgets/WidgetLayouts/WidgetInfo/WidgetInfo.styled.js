import styled from 'styled-components'

export const WidgetInfoStyled = styled.div`
	display: flex;
	column-gap: 15px;
	position: relative;
	z-index: 10;
`

export const WidgetInfoIcon = styled.div`
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background-color: #fff;

	display: grid;
	place-items: center;
`
export const WidgetInfoBody = styled.div`
	color: ${(props) => props.colorText};

	h3 {
		font-size: 18px;
		font-weight: 500;
		line-height: 120%;
	}

	p {
		line-height: 120%;
		font-size: 14px;
	}
`
