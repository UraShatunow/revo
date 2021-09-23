import React, { Component } from 'react';
import './features.css';
import FirstFeatureImage from './features-1.png';
import SecondFeatureImage from './features-2.png';
import ThirdFeatureImage from './features-3.png';
import FourthFeatureImage from './features-4.png';

export default class Features extends Component {

	render() {

		return (
			<div className="features">
				<div className="container features__container">
					<h3>Your Personalized Coffee</h3>
					<h2>COFFEE BUILD YOUR BASE</h2>
					<div className="features__inner">
						<div className="features__item">
							<img src={FirstFeatureImage} alt="First feature" />
							<h4 className="features__heading">Nguồn gốc</h4>
							<p>Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế.</p>
						</div>
						<div className="features__item">
							<img src={SecondFeatureImage} alt="First feature" />
							<h4 className="features__heading">Chất lượng</h4>
							<p>Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ nhân cà phê.</p>
						</div>
						<div className="features__item">
							<img src={ThirdFeatureImage} alt="First feature" />
							<h4 className="features__heading">Các loại hạt</h4>
							<p>70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green bean.</p>
						</div>
						<div className="features__item">
							<img src={FourthFeatureImage} alt="First feature" />
							<h4 className="features__heading">Pha chế</h4>
							<p>Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và nghiêm ngặt.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
};