import styled from 'styled-components'
import WidgetWeatherDiagramsItem from './WidgetWeatherDiagramsItem/WidgetWeatherDiagramsItem.jsx'

const WidgetWeatherDiagramsStyled = styled.div`
	display: flex;
	gap: 36px;
	max-height: 100px;
	position: relative;
	z-index: 10;
`

const WidgetWeatherDiagrams = ({ diagramsData }) => {
	return (
		<WidgetWeatherDiagramsStyled>
			<WidgetWeatherDiagramsItem
				title="Preesure"
				value={diagramsData.preesure}
				stylesDiagram={{ bgColor: '#14213d', colorText: '#fff' }}
			/>
			<WidgetWeatherDiagramsItem
				title="Visibility"
				value={diagramsData.visibility}
				stylesDiagram={{ bgColor: '#fca311', colorText: '#000814' }}
			/>
			<WidgetWeatherDiagramsItem
				title="Humadity"
				value={diagramsData.humadity}
				stylesDiagram={{ bgColor: '#fff', colorText: '#000814' }}
			/>
		</WidgetWeatherDiagramsStyled>
	)
}

export default WidgetWeatherDiagrams
