import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.js'
import App from './App.jsx'
import { GlobalStyled } from 'styles/Global.styled.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<GlobalStyled />
			<App />
		</BrowserRouter>
	</Provider>
)
