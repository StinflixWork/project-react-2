import styled from 'styled-components'
import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts'
import { temperatureData } from './temperatureData.data.js'

const WidgetTemperatureStyled = styled.div`
	background-color: rgba(58, 134, 255, 0.9);
	grid-area: 2 / 1 / 3 / 4;
	border-radius: 20px;
	padding: 25px;

	display: flex;
	flex-direction: column;
	row-gap: 30px;
`

const WidgetTemperatureLabel = styled.div`
	h2 {
		color: #f2f2f2;
		font-weight: 500;
		font-size: 24px;
	}
`

const WidgetTemperatureChart = styled.div`
	flex: auto;
	display: flex;
	align-items: flex-end;
`

const CustomizedLabel = (props) => {
	const { x, y, value } = props
	return (
		<text x={x} y={y} dy={-10} fill="#f2f2f2" fontSize={16} textAnchor="middle">
			{value}&deg;C
		</text>
	)
}

const WidgetTemperature = () => {
	return (
		<WidgetTemperatureStyled>
			<WidgetTemperatureLabel>
				<h2>How is the temperature today?</h2>
			</WidgetTemperatureLabel>
			<WidgetTemperatureChart>
				<ResponsiveContainer width="100%" height="80%">
					<LineChart
						data={temperatureData}
						margin={{
							top: 20,
							right: 20,
							left: -15,
							bottom: 0
						}}
					>
						<XAxis type="category" dataKey="timeOfDay" stroke="#f2f2f2" />
						<Line
							type="monotone"
							dataKey="temp"
							stroke="#ffb703"
							strokeWidth={2}
							label={<CustomizedLabel />}
						/>
					</LineChart>
				</ResponsiveContainer>
			</WidgetTemperatureChart>
		</WidgetTemperatureStyled>
	)
}

export default WidgetTemperature
