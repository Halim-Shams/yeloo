import {useState} from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import Footer from './components/Footer';

function App() {
	const [searchPage, setSearchPage] = useState(false);

	const pageHandler = () => {
		setSearchPage(!searchPage);
	};

	return (
		<div className='h-screen bg-yellow-50'>
			{searchPage ? <SearchPage /> : <Home />}
			<button
				onClick={pageHandler}
				className='absolute right-0 top-0 active:bg-gray-500 hover:bg-gray-400 rounded-full bg-gray-300 py-1 px-2'>
				Show SearchPage
			</button>
			<Footer />
		</div>
	);
}

export default App;
