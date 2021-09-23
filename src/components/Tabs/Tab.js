import React from 'react';

export default class Tab extends React.Component {

	render() {
		if (this.props.isSelected) {
			return (
				<div className="tabs-inner">
					{this.props.children}
				</div>
			)
		}

		return null;
	}
}
