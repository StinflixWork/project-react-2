import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './theme.data.js'
import Layout from './pages/Layout/Layout.jsx'
import { useSelector } from 'react-redux'

function App() {
	const { isDarkMode } = useSelector((state) => state.theme)

	return (
		<ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
			<Layout />
		</ThemeProvider>
	)
}

export default App
