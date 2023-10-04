import styled from 'styled-components'

const DashboardMonitorStyled = styled.div`
	height: 100%;
	background-color: ${(props) => props.theme.backgroundSecondaryColor};
`

const DashboardMonitor = () => {
	return <DashboardMonitorStyled></DashboardMonitorStyled>
}

export default DashboardMonitor
