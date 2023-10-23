import styled from 'styled-components'

const WeatherItemValue = styled.div`
  background-color: ${({ background }) => background};
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

const WeatherFooterItem = ({ title, value, colorText, bgColor }) => {
	return (
		<WeatherItemValue color={colorText} background={bgColor}>
			<p>{title}</p>
			<h3>{value}</h3>
		</WeatherItemValue>
	)
}

export default WeatherFooterItem
