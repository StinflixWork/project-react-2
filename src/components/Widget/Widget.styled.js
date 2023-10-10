import styled from 'styled-components'

export const WidgetStyled = styled.div`
	background-image: url(${(props) => props.urlBg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	grid-area: 1 / 1 / 2 / 3;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(3, 1fr);
	gap: 10px 0;
	border-radius: 20px;
	padding: 25px;
	position: relative;
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
