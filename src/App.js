import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Main, Footer } from './components/index';
import { headerObj } from './components/header/data';
import { mainObj } from './components/main/data';
import { footerObj, socialLinks } from './components/footer/data';
import './App.css';

function App() {
	return (
		<React.Fragment>
			<Router>
				<Header {...headerObj} {...mainObj} />
				<Main {...mainObj} />
				<Footer {...footerObj} {...socialLinks} />
			</Router>
		</React.Fragment>
	);
}

export default App;
