import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.scss';
import { Pagination, Navigation } from 'swiper';

function Shelve({ data }) {
	const [isDesktop, setDesktop] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 600) {
			setDesktop(true);
		}
	}, []);

	const handleClick = (product) => {
		console.log('Clicou no produto: ', product.productName);
	};
	return (
		<div>
			<h3 className="shelve-title">Promoções da semana</h3>
			<Swiper
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				loop={true}
				navigation={true}
				slidesPerView={isDesktop ? 3 : 1.5}
				modules={[Pagination, Navigation]}
				className=""
			>
				{data.map((product, index) => (
					<SwiperSlide key={index}>
						<div className="product-container">
							<div className="product-img">
								<img src={product.productImg} alt={product.productName} />
							</div>
							<div className="product-name">
								<p>{product.productName}</p>
							</div>
							<div className="product-price">
								<span className="list-price">{product.listPrice}</span>
								<span className="best-price">{product.bestPrice}</span>
							</div>
							<button
								className="buy-button"
								onClick={() => {
									handleClick(product);
								}}
							>
								Comprar
							</button>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Shelve;
