import React, {Component} from 'react';
import logo               from './logo.svg';
import './App.css';
import { VXPay, VXPayConfig, VXPayLanguage } from 'vxpay-js';
import RelativePortal from './portal';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			vxpay:      new VXPay(new VXPayConfig(window)),
			isLoggedIn: false,
			username: '',
			lngValue: VXPayLanguage.DE
		};
	}


	componentWillMount() {
		this.openVxPay = this.openVxPayHandler.bind(this);
		this.showProgress = this.showProgressHandler.bind(this);
		this.onLogin = this.onLoginHandler.bind(this);
		this.changeLanguageVxPayHandler = this.changeLanguageVxPayHandler.bind(this);

		// add hooks
		this.state.vxpay.hooks.then(hooksConfig => {
			hooksConfig.onLogin(this.showProgress);
			hooksConfig.onSuccess(this.onLogin);
		})
	}

	changeLanguageVxPayHandler(event) {
		this.setState({lngValue: event.target.value});
		this.state.vxpay.changeLanguage(event.target.value);
	}

	openVxPayHandler() {
		this.state.vxpay.openLogin();
	}

	/**
	 * [@param {VXPayLoggedInMessage} msg]
	 */
	showProgressHandler() {
		this.setState({ isLoggedIn: this.state.vxpay.isLoggedIn() });
	}

	/**
	 * @param {VXPaySuccessMessage} message
	 */
	onLoginHandler(message) {
		this.setState({ username: message.user.nickname });
	}

	render() {
		const userPanel = this.state.isLoggedIn
			? <span>Hello, {this.state.username}</span>
			: <button className="App-link" onClick={this.openVxPay} style={{ cursor: "pointer" }}>Login</button>;

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Very simple <code>vxpay-js</code> React demo.</p>
					{userPanel}
					<RelativePortal>
						<select value={this.state.lngValue} onChange={this.changeLanguageVxPayHandler}>
							<option value={VXPayLanguage.EN}>EN</option>
							<option value={VXPayLanguage.DE}>DE</option>
							<option value={VXPayLanguage.NL}>NL</option>
						</select>
					</RelativePortal>
				</header>
			</div>
		);
	}
}

export default App;
