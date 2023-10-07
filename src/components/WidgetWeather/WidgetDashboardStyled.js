import styled from 'styled-components'

export const WidgetWeatherStyled = styled.div`
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
export const WidgetWeatherInfoStyled = styled.div`
	display: flex;
	column-gap: 15px;
	position: relative;
	z-index: 10;
`

export const WidgetWeatherInfoIcon = styled.div`
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background-color: #fff;

	display: grid;
	place-items: center;
`
export const WidgetWeatherInfoBody = styled.div`
	h3 {
		font-size: 18px;
		font-weight: 500;
		color: #ffffff;
		line-height: 120%;
	}

	p {
		color: #fdfdfd;
		line-height: 120%;
		font-size: 14px;
	}
`
