import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper';

function DinamicCategory({ data }) {
	const [isDesktop, setDesktop] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 600) {
			setDesktop(true);
		}
	}, []);
	return (
		<div>
			<h3 className="shelve-title">{data.categoryTitle}</h3>
			<div>
				<Swiper
					slidesPerView={isDesktop ? 5 : 2}
					navigation={true}
					loop={true}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Navigation]}
					className="category-container"
				>
					{data.category.map((category, index) => (
						<div className="category-item" key={index}>
							<SwiperSlide>
								<div className="category-content">
									<img className="category-img" src={category.categoryIcon} />
									<span className="category-name">{category.categoryName}</span>
								</div>
							</SwiperSlide>
							;
						</div>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default DinamicCategory;
