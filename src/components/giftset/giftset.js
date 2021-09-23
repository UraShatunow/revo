import React, { Component } from 'react';
import Tab from '../Tabs/Tab';
import TabNav from '../Tabs/TabNav';
import './giftset.css';
import TabImg from './tabs-img.png';
import CoffeeImg from './coffee.png';
import MountainImg from './mountain.png';


export default class Giftset extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: "1"
		}
	}

	setSelected = (tab) => {
		this.setState({ selected: tab });
	}

	render() {

		return (
			<div className="giftset">
				<div className="container giftset__container">
					<h3>Best Gift For Best Friend</h3>
					<h2>GIFTSET</h2>
					<div className="giftset__inner">
						<TabNav tabs={['1', '2', '3']}
							selected={this.state.selected}
							setSelected={this.setSelected} >
							<Tab isSelected={this.state.selected === '1'}>
								<div className="giftset__tabs-inner">
									<img src={TabImg} alt="Product"></img>
									<div className="giftset__tabs-content">
										<span className="giftset__cost">285.000</span>
										<h4>Giftset "Cà phê phin Việt Nam"</h4>
										<p>Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo
											cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng,
											cùng với tình yêu, sự đam mê của
											người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.</p>
										<div className="giftset__features">
											<div className="giftset__feature">
												<img src={CoffeeImg} alt="feature"></img>
												<div className="giftset__features-text">
													<p>Loại hạt</p>
													<span><b>Fine Robusta Blend</b></span>
												</div>
											</div>
											<div className="giftset__feature">
												<img src={MountainImg} alt="feature"></img>
												<div className="giftset__features-text">
													<p>Độ cao</p>
													<span><b>700 - 800m</b></span>
												</div>
											</div>
										</div>
										<div className="giftset__buttons">
											<button className="giftset__buy">MUA NGAY</button>
											<button className="giftset__more">CHI TIẾT</button>
										</div>
									</div>
								</div>
							</Tab>
							<Tab isSelected={this.state.selected === '2'}>
								<div className="giftset__tabs-inner">
									<img src={TabImg} alt="Product"></img>
									<div className="giftset__tabs-content">
										<span className="giftset__cost">285.000.000</span>
										<h4>Giftset "Cà phê phin Việt Nam"</h4>
										<p>Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo
											cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng,
											cùng với tình yêu, sự đam mê của
											người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.</p>
										<div className="giftset__features">
											<div className="giftset__feature">
												<img src={CoffeeImg} alt="feature"></img>
												<div className="giftset__features-text">
													<p>Loại hạt</p>
													<span><b>Fine Robusta Blend</b></span>
												</div>
											</div>
											<div className="giftset__feature">
												<img src={MountainImg} alt="feature"></img>
												<div className="giftset__features-text">
													<p>Độ cao</p>
													<span><b>700 - 800m</b></span>
												</div>
											</div>
										</div>
										<div className="giftset__buttons">
											<button className="giftset__buy">MUA NGAY</button>
											<button className="giftset__more">CHI TIẾT</button>
										</div>
									</div>
								</div>
							</Tab>
							<Tab isSelected={this.state.selected === '3'}>
								<div className="giftset__tabs-inner">
									<img src={TabImg} alt="Product"></img>
									<div className="giftset__tabs-content">
										<span className="giftset__cost">285.000.000.000</span>
										<h4>Giftset "Cà phê phin Việt Nam"</h4>
										<p>Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo
											cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng,
											cùng với tình yêu, sự đam mê của
											người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.</p>
										<div className="giftset__features">
											<div className="giftset__feature">
												<img src={CoffeeImg} alt="feature"></img>
												<div className="giftset__features-text">
													<p>Loại hạt</p>
													<span><b>Fine Robusta Blend</b></span>
												</div>
											</div>
											<div className="giftset__feature">
												<img src={MountainImg} alt="feature"></img>
												<div className="giftset__features-text">
													<p>Độ cao</p>
													<span><b>700 - 800m</b></span>
												</div>
											</div>
										</div>
										<div className="giftset__buttons">
											<button className="giftset__buy">MUA NGAY</button>
											<button className="giftset__more">CHI TIẾT</button>
										</div>
									</div>
								</div>
							</Tab>
						</TabNav>
					</div>
				</div>
			</div>
		);
	}
};