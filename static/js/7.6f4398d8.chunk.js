(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{118:function(e,a,t){e.exports=t.p+"static/media/indazooContact.c093592f.jpeg"},119:function(e,a,t){e.exports=t.p+"static/media/iphoneKeyboard.e2fde931.PNG"},125:function(e,a,t){"use strict";t.r(a);var n=t(12),l=t(13),c=t(15),i=t(14),s=t(16),o=t(0),r=t.n(o),m=t(45),u=t(48),d=t.n(u),h=t(47),M=t.n(h),E=t(60),k=t.n(E),v=t(118),C=t.n(v),b=t(119),p=t.n(b),N=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(s)))).state={indazoo:{mail:"mailto:indazoo-2014@naver.com"}},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"subtitle"},"# Contact"),r.a.createElement("div",{id:"contactBox",className:"commonBox"},r.a.createElement("div",{className:"leftCommonBox"},r.a.createElement("div",{className:"leftCommonFirstBox"},r.a.createElement("div",{className:"logoImg"},r.a.createElement(d.a,{className:"instaShapeLogo",src:k.a,roundedCircle:!0})),r.a.createElement("div",{className:"logoName"},"Indazoo"),r.a.createElement("div",{className:"toggleIcon"},r.a.createElement(M.a,null,r.a.createElement(M.a.Toggle,{id:"dropdown-custom-components"},r.a.createElement("i",{className:"material-icons"},"more_horiz")),r.a.createElement(M.a.Menu,null,r.a.createElement(M.a.Item,{href:this.state.indazoo.mail},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-envelope-o artistEmoticon"}),"Email")))))),r.a.createElement("div",{className:"leftCommonSecondBox"},r.a.createElement("div",{className:"memberImg"},r.a.createElement(d.a,{src:C.a,rounded:!0})))),r.a.createElement("div",{className:"rightCommonBox"},r.a.createElement("div",null,r.a.createElement("div",{id:"rightContactFirstBox"},r.a.createElement("div",null,r.a.createElement(d.a,{className:"contactIndazooFaceLogo",src:"https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",roundedCircle:!0})),r.a.createElement("div",{className:"contactLogoName"},"Unknown")),r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"yours messages",style:{marginTop:"0px"}},r.a.createElement("div",{className:"message"},"Hey!"),r.a.createElement("div",{className:"message last"},"How Can I contact you guys?")),r.a.createElement("div",{className:"mine messages"},r.a.createElement("div",{className:"message last"},"Send Email to ",r.a.createElement("br",null),"indazoo-2014@naver.com",r.a.createElement("br",null),"plz!"))),r.a.createElement("div",{id:"contactRightLastBox"},r.a.createElement(d.a,{id:"iphoneKeyboard",src:p.a}))))))}}]),a}(o.Component),f=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"aboutBackground"},r.a.createElement(N,null))}}]),a}(o.Component),x=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null),r.a.createElement(f,null))}}]),a}(o.Component);a.default=x},45:function(e,a,t){"use strict";var n=t(12),l=t(13),c=t(15),i=t(14),s=t(16),o=t(0),r=t.n(o),m=t(8),u=t(47),d=t.n(u),h=t(46),M=t.n(h),E=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(s)))).state={mobileMenuClicked:!1,artistMenuClicked:!1},t._handleMobileMenuClick=function(){t.setState({mobileMenuClicked:!t.state.mobileMenuClicked,artistMenuClicked:!1})},t._handleArtistMenuClick=function(){t.setState({artistMenuClicked:!t.state.artistMenuClicked})},t.handleMouseClick=function(e){t.setState({aa:e.target.innerText}),console.log(t.state)},t.handleMouseEnter=function(e){e.target.style.color="#ffc414"},t.handleMouseLeave=function(e){e.target.style.color="black"},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"mainGroup"},r.a.createElement("div",{id:"logoBox"},r.a.createElement(m.c,{id:"logoLink",exact:!0,to:"/"},r.a.createElement("img",{alt:"indazooLogo",className:"aboutIndazooLogo",src:M.a}))),r.a.createElement("div",{id:"mainMenu"},r.a.createElement(m.c,{className:"mainMenu",exact:!0,to:"/"},r.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},"HOME")),r.a.createElement(m.c,{className:"mainMenu",exact:!0,to:"/about"},r.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"VIDEO"===this.state.clickedMenu?"clickedMenu":""},"ABOUT")),r.a.createElement("div",{id:"artistWebMenu"},r.a.createElement(d.a,null,r.a.createElement(d.a.Toggle,{id:"dropdown-custom-components"},"ARTIST"),r.a.createElement(d.a.Menu,null,r.a.createElement("div",{className:"customDropdowm-item"},r.a.createElement(m.c,{className:"mainMenu",exact:!0,to:"/artist/kxxzxx"},r.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"ARTIST"===this.state.clickedMenu?"clickedMenu":""},"kxxzxx"))),r.a.createElement("div",{className:"customDropdowm-item"},r.a.createElement(m.c,{className:"mainMenu",exact:!0,to:"/artist/DA"},r.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"ARTIST"===this.state.clickedMenu?"clickedMenu":""},"D.A"))),r.a.createElement("div",{className:"customDropdowm-item"},r.a.createElement(m.c,{className:"mainMenu",exact:!0,to:"/artist/Omondi"},r.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"ARTIST"===this.state.clickedMenu?"clickedMenu":""},"Omondi"))),r.a.createElement("div",{className:"customDropdowm-item"},r.a.createElement(m.c,{className:"mainMenu",exact:!0,to:"/artist/cin"},r.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"ARTIST"===this.state.clickedMenu?"clickedMenu":""},"c-in"))),r.a.createElement("div",{className:"customDropdowm-item"},r.a.createElement(m.c,{className:"mainMenu",exact:!0,to:"/artist/bkkoli"},r.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"ARTIST"===this.state.clickedMenu?"clickedMenu":""},"bkkoli")))))),r.a.createElement(m.c,{className:"mainMenu",exact:!0,to:"/shop"},r.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"SHOP"===this.state.clickedMenu?"clickedMenu":""},"SHOP")),r.a.createElement(m.c,{className:"mainMenu",exact:!0,to:"/contact"},r.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"CONTACT"===this.state.clickedMenu?"clickedMenu":""},"CONTACT"))),r.a.createElement("div",{id:"mobileToggleIcon",onClick:this._handleMobileMenuClick},r.a.createElement("i",{className:"material-icons mobileMenuIcon"},"menu")),this.state.mobileMenuClicked?r.a.createElement("div",{id:"clickedModbileMenu"},r.a.createElement("div",{id:"closeIcon"},r.a.createElement("i",{onClick:this._handleMobileMenuClick,className:"fa fa-close"})),r.a.createElement("div",{className:"mobileMenu"},r.a.createElement(m.c,{onClick:this._handleMobileMenuClick,exact:!0,to:"/"},"HOME")),r.a.createElement("div",{className:"mobileMenu"},r.a.createElement(m.c,{onClick:this._handleMobileMenuClick,exact:!0,to:"/about"},"ABOUT")),r.a.createElement("div",{className:"mobileMenu"},this.state.artistMenuClicked?r.a.createElement("i",{onClick:this._handleArtistMenuClick,className:"material-icons verticalMiddle"},"remove"):r.a.createElement("i",{onClick:this._handleArtistMenuClick,className:"material-icons verticalMiddle"},"add"),r.a.createElement("span",{className:"verticalMiddle"},"ARTIST"),this.state.artistMenuClicked?r.a.createElement("div",{id:"subMenuOfArtist"},r.a.createElement("div",null,r.a.createElement(m.c,{className:"artistName",onClick:this._handleMobileMenuClick,exact:!0,to:"/artist/kxxzxx"},"kxxzxx")),r.a.createElement("div",null,r.a.createElement(m.c,{className:"artistName",onClick:this._handleMobileMenuClick,exact:!0,to:"/artist/DA"},"D.A")),r.a.createElement("div",null,r.a.createElement(m.c,{className:"artistName",onClick:this._handleMobileMenuClick,exact:!0,to:"/artist/Omondi"},"Omondi")),r.a.createElement("div",null,r.a.createElement(m.c,{className:"artistName",onClick:this._handleMobileMenuClick,exact:!0,to:"/artist/cin"},"c-in")),r.a.createElement("div",null,r.a.createElement(m.c,{className:"artistName",onClick:this._handleMobileMenuClick,exact:!0,to:"/artist/bkkoli"},"bkkoli"))):""),r.a.createElement("div",{className:"mobileMenu"},r.a.createElement(m.c,{onClick:this._handleMobileMenuClick,exact:!0,to:"/shop"},"SHOP")),r.a.createElement("div",{className:"mobileMenu"},r.a.createElement(m.c,{onClick:this._handleMobileMenuClick,exact:!0,to:"/contact"},"CONTACT"))):"")}}]),a}(o.Component);a.a=E},46:function(e,a,t){e.exports=t.p+"static/media/indazooLogo.93729002.png"},48:function(e,a,t){"use strict";var n=t(35);a.__esModule=!0,a.default=void 0;var l=n(t(36)),c=n(t(37)),i=n(t(41)),s=n(t(39)),o=n(t(0)),r=t(40),m=function(e){function a(){return e.apply(this,arguments)||this}return(0,i.default)(a,e),a.prototype.render=function(){var e=this.props,a=e.bsPrefix,t=e.className,n=e.fluid,i=e.rounded,r=e.roundedCircle,m=e.thumbnail,u=(0,c.default)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]),d=(0,s.default)(n&&a+"-fluid",i&&"rounded",r&&"rounded-circle",m&&a+"-thumbnail");return o.default.createElement("img",(0,l.default)({},u,{className:(0,s.default)(t,d)}))},a}(o.default.Component);m.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var u=(0,r.createBootstrapComponent)(m,"img");a.default=u,e.exports=a.default},60:function(e,a,t){e.exports=t.p+"static/media/indazooFaceLogo.c634704b.jpg"}}]);
//# sourceMappingURL=7.6f4398d8.chunk.js.map