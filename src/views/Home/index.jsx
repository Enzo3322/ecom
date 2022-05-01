import React from 'react';
import { bannerImgArr, productArr } from '../../api/data.js';
import Banners from '../../components/Banners/index.jsx';
import Navbar from '../../components/Navbar/index.jsx';
import Shelve from '../../components/Shelves/index.jsx';
import './index.scss';

function Home() {
	return (
		<div>
			<Navbar />
			<Banners data={bannerImgArr} />

			<Shelve data={productArr} />
		</div>
	);
}

export default Home;
