import './App.css';
import {Terms} from './Terms';

function App() {
	return (
		<div className="App">
			<header
				style={{
					backgroundColor: '#fff',
					padding: 5,
					marginTop: 70,
					marginBottom: 70
				}}
				className="App-header"
			>
				<Terms />
			</header>
		</div>
	);
}

export default App;
