import styled from 'styled-components'

const WeatherItemValue = styled.div`
	background-color: #023047;
	border-radius: 20px;
	padding: 15px 5px;
	display: grid;
	place-items: center;
	color: ${({ color }) => color};

	p {
		font-size: 14px;
	}

	h3 {
		font-weight: 500;
	}
`

const WeatherFooterItem = ({ title, value, colorText }) => {
	return (
		<WeatherItemValue color={colorText}>
			<p>{title}</p>
			<h3>{value}</h3>
		</WeatherItemValue>
	)
}

export default WeatherFooterItem
