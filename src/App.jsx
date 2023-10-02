import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { themeDark, themeLight } from './theme.data.js'
import Layout from './pages/Layout/Layout.jsx'

function App() {
	const { isDarkMode } = useSelector((state) => state.theme)

	return (
		<ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
			<Layout />
		</ThemeProvider>
	)
}

export default App
