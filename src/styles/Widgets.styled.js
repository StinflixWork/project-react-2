import styled from 'styled-components'

export const WidgetStyled = styled.div`
	border-radius: 20px;
	padding: 25px;
	position: relative;
	background-image: url(${(props) => props.urlBg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 100%;
`

export const WidgetFilter = styled.div`
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	backdrop-filter: blur(1.8px);
	border-radius: 50px;
`

export const WrapperWidgetTomorrow = styled.div`
	grid-area: 2 / 4 / 3 / 5;
`

export const WrapperWidgetTemperature = styled.div`
	grid-area: 2 / 1 / 3 / 4;
`

export const WrapperWidgetMain = styled.div`
	grid-area: 1 / 1 / 2 / 3;
`

export const WrapperWidgetAir = styled.div`
	grid-area: 1 / 3 / 2 / 5;
`
