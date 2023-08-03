import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	return (
		<div className='wrapper'>
			<div className='headers_container'>
				<Header />
			</div>

			<main className='main'>
				<Content />
			</main>
			<footer className='footer'>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
