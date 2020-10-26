import React from 'react';
import './app.scss';

import Header from './components/header/'
import Head from './components/head/'
import Content from './components/content/'

function App() {
	return (
		<div className="app">
			<section className="app--header">
				<Header />
			</section>
			<section className="app--body">
				<Head />
				<Content />
			</section>
		</div>
	);
}

export default App;
