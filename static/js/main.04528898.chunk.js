(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports=t(19)},15:function(e,n,t){},17:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(2),s=t.n(i),r=(t(15),t(3)),l=t(4),c=t(6),u=t(5),d=t(7),h=t(9),g=t.n(h),p=(t(17),t(1)),m=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).node=document.createElement("div"),t.node.className="portal",document.body.appendChild(t.node),t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"renderPortal",value:function(){s.a.render(o.a.createElement("div",this.props),this.node)}},{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(){this.renderPortal()}},{key:"render",value:function(){return null}},{key:"componentWillUnmout",value:function(){document.body.removeChild(this.node)}}]),n}(o.a.Component),v=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).state={vxpay:new p.VXPay(new p.VXPayConfig(window)),isLoggedIn:!1,username:"",lngValue:p.VXPayLanguage.DE},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentWillMount",value:function(){var e=this;this.openVxPay=this.openVxPayHandler.bind(this),this.showProgress=this.showProgressHandler.bind(this),this.onLogin=this.onLoginHandler.bind(this),this.changeLanguageVxPayHandler=this.changeLanguageVxPayHandler.bind(this),this.state.vxpay.hooks.then(function(n){n.onLogin(e.showProgress),n.onSuccess(e.onLogin)})}},{key:"changeLanguageVxPayHandler",value:function(e){this.setState({lngValue:e.target.value}),this.state.vxpay.changeLanguage(e.target.value)}},{key:"openVxPayHandler",value:function(){this.state.vxpay.openLogin()}},{key:"showProgressHandler",value:function(){this.setState({isLoggedIn:this.state.vxpay.isLoggedIn()})}},{key:"onLoginHandler",value:function(e){this.setState({username:e.user.nickname})}},{key:"render",value:function(){var e=this.state.isLoggedIn?o.a.createElement("span",null,"Hello, ",this.state.username):o.a.createElement("button",{className:"App-link",onClick:this.openVxPay,style:{cursor:"pointer"}},"Login");return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Very simple ",o.a.createElement("code",null,"vxpay-js")," React demo."),e,o.a.createElement(m,null,o.a.createElement("select",{value:this.state.lngValue,onChange:this.changeLanguageVxPayHandler},o.a.createElement("option",{value:p.VXPayLanguage.EN},"EN"),o.a.createElement("option",{value:p.VXPayLanguage.DE},"DE"),o.a.createElement("option",{value:p.VXPayLanguage.NL},"NL")))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"}},[[10,2,1]]]);
//# sourceMappingURL=main.04528898.chunk.js.map