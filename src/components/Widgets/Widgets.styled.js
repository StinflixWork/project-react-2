import styled from 'styled-components'

const WidgetStyled = styled.div`
	border-radius: 20px;
	padding: 25px;
	position: relative;
	background-image: url(${(props) => props.urlBg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 100%;
`

export const WidgetMainStyled = styled(WidgetStyled)`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(3, 1fr);
	gap: 10px 0;
`

export const WidgetTomorrowStyled = styled(WidgetStyled)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const WidgetTemperatureStyled = styled.div`
	height: 100%;
	background-color: ${(props) => props.colorBg};
	border-radius: 20px;
	padding: 25px;

	display: flex;
	flex-direction: column;
	row-gap: 30px;
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
