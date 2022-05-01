import React from 'react';
import {
	bannerImgArr,
	category,
	shelveOne,
	shelveTwo,
} from '../../api/data.js';
import Banners from '../../components/Banners/index.jsx';
import DinamicCategory from '../../components/DinamicCategory/index.jsx';
import Navbar from '../../components/Navbar/index.jsx';
import Shelve from '../../components/Shelves/index.jsx';
import './index.scss';

function Home() {
	return (
		<div>
			<Navbar />
			<Banners data={bannerImgArr} />

			<Shelve data={shelveOne} />

			<DinamicCategory data={category} />

			<Shelve data={shelveTwo} />
		</div>
	);
}

export default Home;
