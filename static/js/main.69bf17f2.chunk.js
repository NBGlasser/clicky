(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);for(var l=a(0),n=a.n(l),c=a(3),i=a.n(c),s=(a(15),a(4)),r=a(5),m=a(7),h=a(6),o=a(1),u=a(8),d=[],k=1;k<13;k++)d.push("/assets/images/".concat(k,".jpg"));var E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={images:d,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,score:0},a.handleBtnClick=function(e){var t=e.currentTarget.parent.img.src-"/assets/images/"-".jpg",l=Object.values(a.state);a.check=a.check.bind(Object(o.a)(a)),!1===l[t]?(a.setState({id:!0}),a.setState({score:a.state.score+1})):a.setState({score:0})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.shuffle()}},{key:"shuffle",value:function(){for(var e=[],t=1;t<13;t++)e.push("/assets/images/".concat(t,".jpg"));var a=function(e){for(var t,a,l=e.length;0!==l;)a=Math.floor(Math.random()*l),t=e[l-=1],e[l]=e[a],e[a]=t;return e};e=a(e),this.shuffle=this.shuffle.bind(this),this.setState({images:e})}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{id:"1",className:"col-4"},n.a.createElement("img",{src:this.state.images[1],alt:"img"}),n.a.createElement("br",null),n.a.createElement("button",{handleBtnClick:this.handleBtnClick,onClick:this.shuffle},"click")),n.a.createElement("div",{id:"2",className:"col-4"},n.a.createElement("img",{src:this.state.images[2],alt:"img"}),n.a.createElement("br",null),n.a.createElement("button",{handleBtnClick:this.handleBtnClick,onClick:this.shuffle},"click")),n.a.createElement("div",{id:"3",className:"col-4"},n.a.createElement("img",{src:this.state.images[3],alt:"img"}),n.a.createElement("br",null),n.a.createElement("button",{handleBtnClick:this.handleBtnClick,onClick:this.shuffle},"click"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{id:"4",className:"col-4"},n.a.createElement("img",{src:this.state.images[4],alt:"img"}),n.a.createElement("br",null),n.a.createElement("button",{handleBtnClick:this.handleBtnClick,onClick:this.shuffle},"click")),n.a.createElement("div",{id:"5",className:"col-4"},n.a.createElement("img",{src:this.state.images[5],alt:"img"}),n.a.createElement("br",null),n.a.createElement("button",{handleBtnClick:this.handleBtnClick,onClick:this.shuffle},"click")),n.a.createElement("div",{id:"6",className:"col-4"},n.a.createElement("img",{src:this.state.images[6],alt:"img"}),n.a.createElement("br",null),n.a.createElement("button",{handleBtnClick:this.handleBtnClick,onClick:this.shuffle},"click"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{id:"7",className:"col-4"},n.a.createElement("img",{src:this.state.images[7],alt:"img"}),n.a.createElement("br",null),n.a.createElement("button",{handleBtnClick:this.handleBtnClick,onClick:this.shuffle},"click")),n.a.createElement("div",{id:"8",className:"col-4"},n.a.createElement("img",{src:this.state.images[8],alt:"img"}),n.a.createElement("br",null),n.a.createElement("button",{handleBtnClick:this.handleBtnClick,onClick:this.shuffle},"click")),n.a.createElement("div",{id:"9",className:"col-4"},n.a.createElement("img",{src:this.state.images[9],alt:"img"}),n.a.createElement("br",null),n.a.createElement("button",{handleBtnClick:this.handleBtnClick,onClick:this.shuffle},"click"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{id:"10",className:"col-4"},n.a.createElement("img",{src:this.state.images[10],alt:"img"}),n.a.createElement("br",null),n.a.createElement("button",{handleBtnClick:this.handleBtnClick,onClick:this.shuffle},"click")),n.a.createElement("div",{id:"11",className:"col-4"},n.a.createElement("img",{src:this.state.images[11],alt:"img"}),n.a.createElement("br",null),n.a.createElement("button",{handleBtnClick:this.handleBtnClick,onClick:this.shuffle},"click")),n.a.createElement("div",{id:"12",className:"col-4"},n.a.createElement("img",{src:this.state.images[0],alt:"img"}),n.a.createElement("br",null),n.a.createElement("button",{handleBtnClick:this.handleBtnClick,onClick:this.shuffle},"click"))),n.a.createElement("h3",null,"Score: ",this.state.score))}}]),t}(l.Component);var g=function(){return n.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.69bf17f2.chunk.js.map