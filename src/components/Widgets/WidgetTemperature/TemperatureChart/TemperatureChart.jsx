import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts'
import { temperatureData } from './temperatureData.data.js'
import styled from 'styled-components'

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

const TemperatureChart = () => {
	return (
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
	)
}

export default TemperatureChart
