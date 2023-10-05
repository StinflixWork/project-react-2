import styled from 'styled-components'
import WidgetWeatherDiagramsItem from './WidgetWeatherDiagramsItem/WidgetWeatherDiagramsItem.jsx'

const WidgetWeatherDiagramsStyled = styled.div`
	display: flex;
	gap: 36px;
`

const WidgetWeatherDiagrams = () => {
	return (
		<WidgetWeatherDiagramsStyled>
			<WidgetWeatherDiagramsItem
				title="Preesure"
				value="800mb"
				stylesDiagram={{ bgColor: '#14213d', colorText: '#fff' }}
			/>
			<WidgetWeatherDiagramsItem
				title="Visibility"
				value="4.3 km"
				stylesDiagram={{ bgColor: '#fca311', colorText: '#000814' }}
			/>
			<WidgetWeatherDiagramsItem
				title="Humadity"
				value="87%"
				stylesDiagram={{ bgColor: '#fff', colorText: '#000814' }}
			/>
		</WidgetWeatherDiagramsStyled>
	)
}

export default WidgetWeatherDiagrams
