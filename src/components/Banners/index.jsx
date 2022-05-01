import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss';
import { Pagination, Navigation } from 'swiper';

function Banners({ data }) {
	return (
		<div className="banner-container">
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				{data.map((img, index) => (
					<SwiperSlide key={index}>
						<img src={img.url} alt={img.description} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Banners;
