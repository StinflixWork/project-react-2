import styled, { ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from 'store/slices/themeSlice.js'
import Button from 'components/button/Button.jsx'

const themeLight = {
	mainBackgroundColor: '#fff',
	secondaryBackgroundColor: 'blue',
	mainColor: '#fff'
}

const themeDark = {
	mainBackgroundColor: '#000',
	secondaryBackgroundColor: 'orange',
	mainColor: '#000'
}

const WrapperApp = styled.div`
	height: 100%;
	background-color: ${(props) => props.theme.mainBackgroundColor};
	display: grid;
	place-items: center;
`

function App() {
	const { isDarkMode } = useSelector((state) => state.theme)
	const dispatch = useDispatch()

	const handleChangeTheme = () => dispatch(toggleDarkMode())

	return (
		<ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
			<WrapperApp>
				<Button handleChangeTheme={handleChangeTheme}>Dark Mode</Button>
			</WrapperApp>
		</ThemeProvider>
	)
}

export default App
