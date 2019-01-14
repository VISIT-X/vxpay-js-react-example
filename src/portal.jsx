import React from 'react';
import ReactDOM from 'react-dom';






export default class RelativePortal extends React.Component {

	constructor(props) {
		super(props);
		this.node = document.createElement('div');
		this.node.className = 'portal';
		document.body.appendChild(this.node);
	}

	renderPortal() {
		ReactDOM.render(
			<div {...this.props} />,
			this.node
		);
	}

	componentDidMount() {
		this.renderPortal();
	}

	componentDidUpdate() {
		this.renderPortal();
	}

	render() {
		return null;
	}

	componentWillUnmout() {
		document.body.removeChild(this.node);
	}

}