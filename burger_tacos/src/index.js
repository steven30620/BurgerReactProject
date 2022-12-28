import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Body from './components/Body/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header />
		<Body />
		<Footer />
	</React.StrictMode>
);
