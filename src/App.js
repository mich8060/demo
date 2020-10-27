import React, { useState } from 'react';
import './app.scss';

import Filter from './components/filter/'
import Header from './components/header/'
import Head from './components/head/'
import Content from './components/content/'
import Data from './data/bookmarks.json'

function App() {

	const [search, setSearch] = useState('')
	const [data, setData] = useState(Data)

	let query = data;
	if(search !== ''){ query = data.filter((data) => data.title.includes(search)) }

	let level = []
	query.map((item, index) => {
		if(level.indexOf(item.metadata1[1]) === -1){
			if(
				item.metadata1[1] === "Beginner" ||
				item.metadata1[1] === "Intermediate" ||
				item.metadata1[1] === "Advanced"
			){
				level.push(item.metadata1[1])
			}
		}
	})

	let content = []
	query.map((item, index) => {
		if(content.indexOf(item.type) === -1){
			content.push(item.type)
		}
	})


	return (
		<div className="app">
			<section className="app--header">
				<Header />
			</section>
			<section className="app--body">
				<Head setSearch={setSearch} />
				<Filter data={query} content={content} level={level} />
				<Content data={query} />
			</section>
		</div>
	);
}

export default App;
