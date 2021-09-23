import React, { Component } from 'react';
import './coffee.css';
import Coffee1 from './coffee-img-1.png';
import Coffee2 from './coffee-img-2.png';
import Coffee3 from './coffee-img-3.png';
import Coffee4 from './coffee-img-4.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
	Navigation
} from 'swiper';

SwiperCore.use([Navigation]);



export default class Coffee extends Component {

	render() {

		return (
			<div className="coffee">
				<div className="container coffee__container">
					<h3>Choose Your Favorite</h3>
					<h2>CHUẨN GU ĐÚNG VỊ</h2>
					<div className="coffee__inner">
						<Swiper
							modules={[Navigation]}
							spaceBetween={50}
							slidesPerView={2.2}
							navigation
							loop={true}
							className="coffee__slider"
						>

							<SwiperSlide className="coffee__slide">
								<img src={Coffee1} alt="Coffee" />
								<div className="coffee__card-inner">
									<span>99.000</span>
									<h4>REVO Morning</h4>
									<p>đắng, hậu ngọt, hương hoa </p>
									<div className="coffee__buttons">
										<button className="coffee__buy">MUA NGAY</button>
										<button className="coffee__more">CHI TIẾT</button>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide className="coffee__slide">
								<img src={Coffee2} alt="Coffee" />
								<div className="coffee__card-inner">
									<span>139.000</span>
									<h4>REVO Origin</h4>
									<p>hậu ngọt, ít đắng, vị chua dâu</p>
									<div className="coffee__buttons">
										<button className="coffee__buy">MUA NGAY</button>
										<button className="coffee__more">CHI TIẾT</button>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide className="coffee__slide">
								<img src={Coffee3} alt="Coffee" />
								<div className="coffee__card-inner">
									<span>85.000</span>
									<h4>REVO Morning</h4>
									<p>cân bằng, hậu đắng, vị chocolate </p>
									<div className="coffee__buttons">
										<button className="coffee__buy">MUA NGAY</button>
										<button className="coffee__more">CHI TIẾT</button>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide className="coffee__slide">
								<img src={Coffee4} alt="Coffee" />
								<div className="coffee__card-inner">
									<span>75.000</span>
									<h4>REVO Đậm Đà</h4>
									<p>đậm đà, đắng, truyền thống</p>
									<div className="coffee__buttons">
										<button className="coffee__buy">MUA NGAY</button>
										<button className="coffee__more">CHI TIẾT</button>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide className="coffee__slide">
								<img src={Coffee1} alt="Coffee" />
								<div className="coffee__card-inner">
									<span>99.000</span>
									<h4>REVO Morning</h4>
									<p>đắng, hậu ngọt, hương hoa </p>
									<div className="coffee__buttons">
										<button className="coffee__buy">MUA NGAY</button>
										<button className="coffee__more">CHI TIẾT</button>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide className="coffee__slide">
								<img src={Coffee2} alt="Coffee" />
								<div className="coffee__card-inner">
									<span>99.000</span>
									<h4>REVO Morning</h4>
									<p>đắng, hậu ngọt, hương hoa </p>
									<div className="coffee__buttons">
										<button className="coffee__buy">MUA NGAY</button>
										<button className="coffee__more">CHI TIẾT</button>
									</div>
								</div>
							</SwiperSlide>

						</Swiper>
					</div>
				</div>
			</div>
		);
	}
};