import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts'
import styled from 'styled-components'

const TempTodayChartStyled = styled.div`
	flex: auto;
	display: flex;
	align-items: flex-end;
`

const CustomizedLabel = (props) => {
	const { x, y, value } = props
	return (
		<text x={x} y={y} dy={-10} fill="#0077b6" fontSize={16} textAnchor="middle">
			{value}&deg;C
		</text>
	)
}

const TempTodayChart = ({ tempData }) => {
	const timesDay = ['', 'Morning', 'Afternoon', 'Evening', 'Night']
	const temperatureData = tempData.map((d, index) => ({
		uv: index,
		temp: Math.round(d.tempHour),
		timeOfDay: timesDay[index]
	}))

	return (
		<TempTodayChartStyled>
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
					<XAxis type="category" dataKey="timeOfDay" stroke="#0077b6" />
					<Line
						type="monotone"
						dataKey="temp"
						stroke="#ffb703"
						strokeWidth={2}
						label={<CustomizedLabel />}
					/>
				</LineChart>
			</ResponsiveContainer>
		</TempTodayChartStyled>
	)
}

export default TempTodayChart
