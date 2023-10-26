import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './theme.data.js'
import { useSelector } from 'react-redux'
import Navigation from './pages/Navigation/Navigation.jsx'

function App() {
	const { isDarkMode } = useSelector((state) => state.theme)

	return (
		<ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
			<Navigation />
		</ThemeProvider>
	)
}

export default App
