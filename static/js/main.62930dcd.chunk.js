(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),i=(a(81),a(11)),s=a(2),l=a(3),m=a(5),d=a(4),u=a(6),h=a(23),f=a(21),E=(a(82),a(8)),p=a.n(E),b=a(62),g=a.n(b),v=a(63),M=a.n(v),j=a(64),O=a.n(j),k=a(30),_=a.n(k),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).handleMouseEnter=function(e){e.target.style.color="white"},a.handleMouseLeave=function(e){e.target.style.color="#2d3436"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"iconGroup"},c.a.createElement("div",{id:"appMenu"},c.a.createElement("a",{className:"homeMenu",href:"https://www.youtube.com/channel/UCcC5mGUWbGbrbcc077AXVvw?view_as=subscriber"},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-youtube-play",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave}))),c.a.createElement("a",{className:"homeMenu",href:"https://soundcloud.com"},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-soundcloud",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave}))),c.a.createElement("a",{className:"homeMenu",href:"https://www.instagram.com/b_kkoli"},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-instagram",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave}))),c.a.createElement("a",{className:"homeMenu",href:"https://web.facebook.com/Ojerime/"},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-facebook-official",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave}))),c.a.createElement(i.b,{className:"homeMenu",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,exact:!0,to:"/about"},"ENTER"),c.a.createElement("a",{className:"homeMenu",href:"https://smartstore.naver.com/indazoo"},c.a.createElement("span",{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},"SHOP"))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={arrowClicked:!1,arrowMouseEnter:!1,closeMouseEnter:!1},a._handleArrowClick=function(){a.setState({arrowClicked:!a.state.arrowClicked,arrowMouseEnter:!1,closeMouseEnter:!1})},a._handleArrowMouseEnter=function(){a.setState({arrowMouseEnter:!0})},a._handleArrowMouseLeave=function(){a.setState({arrowMouseEnter:!1})},a._handleCloseMouseEnter=function(){a.setState({closeMouseEnter:!0})},a._handleCloseMouseLeave=function(){a.setState({closeMouseEnter:!1})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"closeBtn",onClick:this._handleArrowClick},this.state.arrowClicked?c.a.createElement("span",{onMouseEnter:this._handleCloseMouseEnter,onMouseLeave:this._handleCloseMouseLeave,className:this.state.closeMouseEnter?"mouseEnter":""},c.a.createElement("i",{class:"fa fa-close"})):""),c.a.createElement("div",{onClick:this._handleArrowClick},this.state.arrowClicked?c.a.createElement("div",{id:"youtube"},c.a.createElement("iframe",{className:"indazooTitle",title:"indazooTitle",width:"100%",height:"100%",src:"https://www.youtube.com/embed/GWOcIVZ0K1c",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"material-icons",id:"playBtn"},c.a.createElement("span",{onMouseEnter:this._handleArrowMouseEnter,onMouseLeave:this._handleArrowMouseLeave,className:this.state.arrowMouseEnter?"mouseEnter":""},"play_arrow")))))}}]),t}(n.Component),y=function(e){function t(e,a){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e,a))).handleSelect=n.handleSelect.bind(Object(f.a)(n)),n.state={index:0,direction:null},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleSelect",value:function(e,t){this.setState({index:e,direction:t.direction,fade:!0})}},{key:"render",value:function(){var e=this.state,t=e.index,a=e.direction,n=e.fade;return c.a.createElement(p.a,{activeIndex:t,direction:a,onSelect:this.handleSelect,fade:n},c.a.createElement(p.a.Item,null,c.a.createElement("img",{className:"d-block w-100 carouselImg",src:g.a,alt:"First slide"})),c.a.createElement(p.a.Item,null,c.a.createElement("img",{className:"d-block w-100 carouselImg",src:M.a,alt:"Second slide"})),c.a.createElement(p.a.Item,null,c.a.createElement("img",{className:"d-block w-100 carouselImg",src:O.a,alt:"Third slide"})))}}]),t}(n.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,{className:"AppArrow"}),c.a.createElement(y,null),c.a.createElement("img",{className:"indazooLogo",src:_.a}),c.a.createElement(N,null))}}]),t}(n.Component),I=(a(105),a(31)),w=a.n(I),L=function(e){function t(e,a){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e,a))).handleSelect=n.handleSelect.bind(Object(f.a)(n)),n.state={index:0,direction:null},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleSelect",value:function(e,t){this.setState({index:e,direction:t.direction,fade:!0})}},{key:"render",value:function(){var e=this.state,t=e.index,a=e.direction,n=e.fade;return c.a.createElement(p.a,{activeIndex:t,direction:a,onSelect:this.handleSelect,fade:n},c.a.createElement(p.a.Item,null,c.a.createElement("img",{className:"d-block w-100",src:w.a,alt:"First slide"})),c.a.createElement(p.a.Item,null,c.a.createElement("img",{className:"d-block w-100",src:w.a,alt:"Second slide"})),c.a.createElement(p.a.Item,null,c.a.createElement("img",{className:"d-block w-100",src:w.a,alt:"Third slide"})))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={},a.handleMouseClick=function(e){a.setState({aa:e.target.innerText}),console.log(a.state)},a.handleMouseEnter=function(e){e.target.style.color="#ffc414"},a.handleMouseLeave=function(e){e.target.style.color="black"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"mainGroup"},c.a.createElement("div",{id:"logoBox"},c.a.createElement("img",{className:"aboutIndazooLogo",src:_.a})),c.a.createElement("div",{id:"mainMenu"},c.a.createElement(i.b,{className:"mainMenu",exact:!0,to:"/"},c.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},"HOME")),c.a.createElement(i.b,{className:"mainMenu",exact:!0,to:"/about"},c.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"VIDEO"===this.state.clickedMenu?"clickedMenu":""},"ABOUT")),c.a.createElement(i.b,{className:"mainMenu",exact:!0,to:"/artist/kidzoo"},c.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"ARTIST"===this.state.clickedMenu?"clickedMenu":""},"ARTIST")),c.a.createElement(i.b,{className:"mainMenu",exact:!0,to:"/shop"},c.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"SHOP"===this.state.clickedMenu?"clickedMenu":""},"SHOP")),c.a.createElement(i.b,{className:"mainMenu",exact:!0,to:"/contact"},c.a.createElement("span",{onClick:this.handleMouseClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"CONTACT"===this.state.clickedMenu?"clickedMenu":""},"CONTACT"))))}}]),t}(n.Component),B=(n.Component,function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(L,null),c.a.createElement(A,null))}}]),t}(n.Component)),z=(a(106),a(67)),S=a.n(z),F=a(68),D=a.n(F),T=a(69),G=a.n(T),P=a(39),H=a.n(P),J=a(40),W=a.n(J),U=a(70),K=a.n(U),R=a(71),V=a.n(R),q=a(29),Q=a.n(q),X=a(37),Z=a.n(X),$=(a(54),a(13)),Y=a.n($),ee=a(24),te=a.n(ee),ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={kidzoo:{profileImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/74eeee6e3354b4c25d22e33dfd67e17d/5DC15FEF/t51.2885-19/s320x320/64669461_491974931345433_4627218247962329088_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net",artistImg:V.a},bkkoli:{profileImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/499af9c03c4c1c29df84ca39c8156fc2/5DA06B90/t51.2885-19/s320x320/26873048_732739253590947_1331259138126118912_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net",artistImg:K.a},cin:{profileImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/56f20eabc2ba79f24b8731225e3ccc6a/5DB24E4E/t51.2885-19/s320x320/59535953_288494515428274_1713225994397024256_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net",artistImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/0fa1eb825bbbd9ddcaaedef0e48d1a1f/5DB751D2/t51.2885-15/e35/58454157_2060936570874049_7434335734187873254_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net"},Omondi:{profileImg:W.a,artistImg:W.a},DA:{profileImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/756d4ef77eb4fbff1129a682d3a2762a/5DB56C8F/t51.2885-19/s320x320/29095494_1985552635030478_7614772815882878976_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net",artistImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/5e483064f11d9352953c7a09b0682d7b/5DAF339A/t51.2885-15/e35/s1080x1080/56486000_283366282579009_3357393345124132017_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net"}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"aboutBox"},c.a.createElement("div",{id:"leftAboutBox"},c.a.createElement("div",{id:"leftFirstBox"},c.a.createElement("div",{id:"logoImg"},c.a.createElement(Y.a,{id:"indazooFaceLogo",src:this.state[this.props.name].profileImg,roundedCircle:!0})),c.a.createElement("div",{id:"logoName"},this.props.name),c.a.createElement("div",{id:"artistToggleIcon"},c.a.createElement(te.a,null,c.a.createElement(te.a.Toggle,{id:"dropdown-custom-components"},c.a.createElement("i",{className:"material-icons"},"more_horiz")),c.a.createElement(te.a.Menu,null,c.a.createElement(te.a.Item,null,c.a.createElement("i",{className:"fa fa-instagram artistEmoticon",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave}),"Instagram"),c.a.createElement(te.a.Item,null,c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-soundcloud artistEmoticon",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave}),"Soundcloud")),c.a.createElement(te.a.Item,null,c.a.createElement("span",null,c.a.createElement("i",{class:"fa fa-envelope-o artistEmoticon"}),"Email")))))),c.a.createElement("div",{id:"leftSecondBox"},c.a.createElement("div",{id:"memberImg"},c.a.createElement(Y.a,{src:this.state[this.props.name].artistImg,rounded:!0})))),c.a.createElement("div",{id:"rightAboutBox"}))}}]),t}(n.Component),ne=(n.Component,function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"aboutBackground"},c.a.createElement("div",{id:"subtitle"},"# ",this.props.name),c.a.createElement(ae,{name:this.props.name}))}}]),t}(n.Component)),ce=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(A,null),c.a.createElement(ne,{name:this.props.match.params.name}))}}]),t}(n.Component),re=(a(131),a(74)),oe=a.n(re),ie=(a(60),a(42)),se=a.n(ie),le=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={kidzoo:{profileImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/74eeee6e3354b4c25d22e33dfd67e17d/5DC15FEF/t51.2885-19/s320x320/64669461_491974931345433_4627218247962329088_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net",artistImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/e5578d22833e051ee237649bd513d310/5DA5D15F/t51.2885-15/e35/22638820_1421354717981773_625882915208691712_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net"},bkkoli:{profileImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/499af9c03c4c1c29df84ca39c8156fc2/5DA06B90/t51.2885-19/s320x320/26873048_732739253590947_1331259138126118912_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net",artistImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/5322298ae0cc853086794a4f395d1ad3/5DC5B5A4/t51.2885-15/e35/23498170_153450188599595_6724445968235757568_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net"},cin:{profileImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/56f20eabc2ba79f24b8731225e3ccc6a/5DB24E4E/t51.2885-19/s320x320/59535953_288494515428274_1713225994397024256_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net",artistImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/0fa1eb825bbbd9ddcaaedef0e48d1a1f/5DB751D2/t51.2885-15/e35/58454157_2060936570874049_7434335734187873254_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net"},Omondi:{profileImg:se.a,artistImg:se.a},DA:{profileImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/756d4ef77eb4fbff1129a682d3a2762a/5DB56C8F/t51.2885-19/s320x320/29095494_1985552635030478_7614772815882878976_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net",artistImg:"https://instagram.ficn1-1.fna.fbcdn.net/vp/5e483064f11d9352953c7a09b0682d7b/5DAF339A/t51.2885-15/e35/s1080x1080/56486000_283366282579009_3357393345124132017_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net"}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"aboutBox"},c.a.createElement("div",{id:"leftAboutBox"},c.a.createElement("div",{id:"leftFirstBox"},c.a.createElement("div",{id:"logoImg"},c.a.createElement(Y.a,{id:"indazooFaceLogo",src:Q.a,roundedCircle:!0})),c.a.createElement("div",{id:"logoName"},"Indazoo")),c.a.createElement("div",{id:"leftSecondBox"},c.a.createElement("div",{id:"memberImg"},c.a.createElement(Y.a,{src:oe.a,rounded:!0})))),c.a.createElement("div",{id:"rightAboutBox"},c.a.createElement("div",{className:"indazooMember"},c.a.createElement("div",{className:"rightName",style:{paddingLeft:"17px"}},"Member")),c.a.createElement("div",{className:"indazooMember"},c.a.createElement("div",{className:"rightlogoImg"},c.a.createElement(Y.a,{className:"rightLogo",src:this.state.kidzoo.profileImg,roundedCircle:!0})),c.a.createElement("div",{className:"rightName"},c.a.createElement(i.b,{className:"homeMenu",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,exact:!0,to:"/artist/kidzoo"},"kidzoo"))),c.a.createElement("div",{className:"indazooMember"},c.a.createElement("div",{className:"rightlogoImg"},c.a.createElement(Y.a,{className:"rightLogo",src:this.state.DA.profileImg,roundedCircle:!0})),c.a.createElement("div",{className:"rightName"},c.a.createElement(i.b,{className:"homeMenu",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,exact:!0,to:"/artist/DA"},"D.A"))),c.a.createElement("div",{className:"indazooMember"},c.a.createElement("div",{className:"rightlogoImg"},c.a.createElement(Y.a,{className:"rightLogo",src:this.state.Omondi.profileImg,roundedCircle:!0})),c.a.createElement("div",{className:"rightName"},c.a.createElement(i.b,{className:"homeMenu",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,exact:!0,to:"/artist/Omondi"},"Omondi"))),c.a.createElement("div",{className:"indazooMember"},c.a.createElement("div",{className:"rightlogoImg"},c.a.createElement(Y.a,{className:"rightLogo",src:this.state.cin.profileImg,roundedCircle:!0})),c.a.createElement("div",{className:"rightName"},c.a.createElement(i.b,{className:"homeMenu",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,exact:!0,to:"/artist/cin"},"c-in"))),c.a.createElement("div",{className:"indazooMember"},c.a.createElement("div",{className:"rightlogoImg"},c.a.createElement(Y.a,{className:"rightLogo",src:this.state.bkkoli.profileImg,roundedCircle:!0})),c.a.createElement("div",{className:"rightName"},c.a.createElement(i.b,{className:"homeMenu",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,exact:!0,to:"/artist/bkkoli"},"bkkoli")))))}}]),t}(n.Component),me=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"aboutBackground"},c.a.createElement("div",{id:"subtitle"},"# What is the indazoo?"),c.a.createElement(le,null))}}]),t}(n.Component),de=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(A,null),c.a.createElement(me,null))}}]),t}(n.Component),ue=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"aboutBackground"},c.a.createElement("div",{id:"subtitle"},"# Shop"))}}]),t}(n.Component),he=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(A,null),c.a.createElement(ue,null))}}]),t}(n.Component),fe=a(75),Ee=a.n(fe),pe=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"aboutBox"},c.a.createElement("div",{id:"leftAboutBox"},c.a.createElement("div",{id:"leftFirstBox"},c.a.createElement("div",{id:"logoImg"},c.a.createElement(Y.a,{id:"indazooFaceLogo",src:Q.a,roundedCircle:!0})),c.a.createElement("div",{id:"logoName"},"Indazoo"),c.a.createElement("div",{id:"contactToggleIcon"},c.a.createElement("i",{class:"material-icons"},"more_horiz"))),c.a.createElement("div",{id:"leftSecondBox"},c.a.createElement("div",{id:"memberImg"},c.a.createElement(Y.a,{src:Z.a,rounded:!0})))),c.a.createElement("div",{id:"rightAboutBox"},c.a.createElement("div",null,c.a.createElement("div",{id:"rightFirstBox"},c.a.createElement("div",null,c.a.createElement(Y.a,{id:"indazooFaceLogo",src:"https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",roundedCircle:!0})),c.a.createElement("div",{id:"logoName"},"Unknown")),c.a.createElement("div",{class:"chat"},c.a.createElement("div",{class:"yours messages",style:{marginTop:"0px"}},c.a.createElement("div",{class:"message"},"Hey!"),c.a.createElement("div",{class:"message last"},"How Can I contact you guys?")),c.a.createElement("div",{class:"mine messages"},c.a.createElement("div",{class:"message last"},"Send Email to ",c.a.createElement("br",null),"indazoo-2014@naver.com",c.a.createElement("br",null),"plz!"))),c.a.createElement("div",{id:"rightLastBox"},c.a.createElement(Y.a,{id:"iphoneKeyboard",src:Ee.a})))))}}]),t}(n.Component),be=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"aboutBackground"},c.a.createElement("div",{id:"subtitle"},"# Contact"),c.a.createElement(pe,null))}}]),t}(n.Component),ge=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(be,null),c.a.createElement(A,null))}}]),t}(n.Component),ve=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h.a,{exact:!0,path:"/",component:C}),c.a.createElement(h.a,{path:"/index",component:B}),c.a.createElement(h.c,null,c.a.createElement(h.a,{path:"/artist/:name",component:ce}),c.a.createElement(h.a,{path:"/artist",component:ce})),c.a.createElement(h.a,{path:"/about",component:de}),c.a.createElement(h.a,{path:"/shop",component:he}),c.a.createElement(h.a,{path:"/contact",component:ge}))}}]),t}(n.Component),Me=function(){return c.a.createElement(i.a,null,c.a.createElement(ve,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t,a){e.exports=a.p+"static/media/indazooFaceLogo.c634704b.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/indazooLogo.93729002.png"},31:function(e,t,a){e.exports=a.p+"static/media/mainBackground.2497019f.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/indazooContact.1bceeeba.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/artist4.ec6347cf.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/Omondi2.e8ae09c1.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/Omondi.86ea1253.JPG"},54:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/bkkoliProfile.25db6b30.JPG"},62:function(e,t,a){e.exports=a.p+"static/media/indexFirst.b46950dd.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/indexSecond.d868d1ef.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/indexThird.db4aaf51.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/artist1.f808924d.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/artist2.f20a6be6.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/artist3.5de4fb2d.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/bkkoli.25db6b30.JPG"},71:function(e,t,a){e.exports=a.p+"static/media/kidzoo.e8789a24.JPG"},74:function(e,t,a){e.exports=a.p+"static/media/indazooAllMember.6df5a796.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/iphoneKeyboard.e2fde931.PNG"},76:function(e,t,a){e.exports=a(132)},81:function(e,t,a){},82:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.62930dcd.chunk.js.map