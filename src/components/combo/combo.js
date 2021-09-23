import React, { Component } from 'react';
import './combo.css';
import ComboImg1 from './combo-1.png';
import ComboImg2 from './combo-2.png';
import ComboImg3 from './combo-3.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
	Navigation
} from 'swiper';

SwiperCore.use([Navigation]);



export default class Combo extends Component {

	render() {

		return (
			<div className="combo">
				<div className="container combo__container">
					<h3>Your Personalized Coffee</h3>
					<h2>COMBO PHIN PHÊ</h2>
					<div className="combo__inner">
						<div className="combo__inner">
							<Swiper
								modules={[Navigation]}
								spaceBetween={30}
								slidesPerView={3.5}
								loop={true}
								navigation
								className="combo__slider"
							>

								<SwiperSlide className="combo__slide">
									<img src={ComboImg1} alt="Combo 1"></img>
									<div className="combo__card-inner">
										<div className="combo__slide-cost">
											<span className="combo__slide-main-cost">99.000</span>
											<span className="combo__slide-reduced-cost">155.000</span>
										</div>
										<h4>Combo Revo Đậm Đà</h4>
										<p>Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh
											táo làm việc Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để
											làm bạn tỉnh táo làm việc</p>
										<div className="combo__buttons">
											<button className="combo__buy">MUA NGAY</button>
											<button className="combo__more">CHI TIẾT</button>
										</div>
									</div>
								</SwiperSlide>

								<SwiperSlide className="combo__slide">
									<img src={ComboImg2} alt="Combo 1"></img>
									<div className="combo__card-inner">
										<div className="combo__slide-cost">
											<span className="combo__slide-main-cost">99.000</span>
											<span className="combo__slide-reduced-cost">155.000</span>
										</div>
										<h4>Combo Revo Đậm Đà</h4>
										<p>Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh
											táo làm việc Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để
											làm bạn tỉnh táo làm việc</p>
										<div className="combo__buttons">
											<button className="combo__buy">MUA NGAY</button>
											<button className="combo__more">CHI TIẾT</button>
										</div>
									</div>
								</SwiperSlide>

								<SwiperSlide className="combo__slide">
									<img src={ComboImg3} alt="Combo 1"></img>
									<div className="combo__card-inner">
										<div className="combo__slide-cost">
											<span className="combo__slide-main-cost">99.000</span>
											<span className="combo__slide-reduced-cost">155.000</span>
										</div>
										<h4>Combo Revo Đậm Đà</h4>
										<p>Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh
											táo làm việc Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để
											làm bạn tỉnh táo làm việc</p>
										<div className="combo__buttons">
											<button className="combo__buy">MUA NGAY</button>
											<button className="combo__more">CHI TIẾT</button>
										</div>
									</div>
								</SwiperSlide>

								<SwiperSlide className="combo__slide">
									<img src={ComboImg1} alt="Combo 1"></img>
									<div className="combo__card-inner">
										<div className="combo__slide-cost">
											<span className="combo__slide-main-cost">99.000</span>
											<span className="combo__slide-reduced-cost">155.000</span>
										</div>
										<h4>Combo Revo Đậm Đà</h4>
										<p>Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh
											táo làm việc Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để
											làm bạn tỉnh táo làm việc</p>
										<div className="combo__buttons">
											<button className="combo__buy">MUA NGAY</button>
											<button className="combo__more">CHI TIẾT</button>
										</div>
									</div>
								</SwiperSlide>

								<SwiperSlide className="combo__slide">
									<img src={ComboImg2} alt="Combo 1"></img>
									<div className="combo__card-inner">
										<div className="combo__slide-cost">
											<span className="combo__slide-main-cost">99.000</span>
											<span className="combo__slide-reduced-cost">155.000</span>
										</div>
										<h4>Combo Revo Đậm Đà</h4>
										<p>Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh
											táo làm việc Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để
											làm bạn tỉnh táo làm việc</p>
										<div className="combo__buttons">
											<button className="combo__buy">MUA NGAY</button>
											<button className="combo__more">CHI TIẾT</button>
										</div>
									</div>
								</SwiperSlide>

								<SwiperSlide className="combo__slide">
									<img src={ComboImg3} alt="Combo 1"></img>
									<div className="combo__card-inner">
										<div className="combo__slide-cost">
											<span className="combo__slide-main-cost">99.000</span>
											<span className="combo__slide-reduced-cost">155.000</span>
										</div>
										<h4>Combo Revo Đậm Đà</h4>
										<p>Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh
											táo làm việc Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để
											làm bạn tỉnh táo làm việc</p>
										<div className="combo__buttons">
											<button className="combo__buy">MUA NGAY</button>
											<button className="combo__more">CHI TIẾT</button>
										</div>
									</div>
								</SwiperSlide>


							</Swiper>
						</div>
					</div>
				</div>
			</div>
		);
	}
};