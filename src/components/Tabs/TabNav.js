import React from 'react';

export default class TabNav extends React.Component {

	render() {
		return (
			<div className="tab-container">
				{this.props.children}
				<div className="nav nav-tabs">
					{
						this.props.tabs.map(tab => {
							const active = (tab === this.props.selected ? 'active' : '');

							return (
								<div className="nav-tab" key={tab}>
									<a className={"nav-link" + active}
										onClick={() => this.props.setSelected(tab)}>
										{tab}
									</a>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}