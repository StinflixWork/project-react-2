import styled from 'styled-components'

const DashboardWidgetsStyled = styled.div`
	flex: auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 20px 15px;
`

const DashboardWidgets = ({ data }) => {
	return <DashboardWidgetsStyled></DashboardWidgetsStyled>
}

export default DashboardWidgets
