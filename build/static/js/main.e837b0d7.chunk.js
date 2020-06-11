(this["webpackJsonpresto-app"]=this["webpackJsonpresto-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),m=(a(25),a(3)),i=a(4),s=a(6),o=a(5),u=a(12),d=[{name:"Home",attr:"/"},{name:"User Api",attr:"/user"},{name:"About",attr:"/about"},{name:"Contact",attr:"/contact"}],p=function(e){var t=e.name,a=e.attr;return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{className:"nav-link",to:a},t)))},E=function(e){var t=e.item;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){return l.a.createElement(p,{key:t,name:e.name,attr:e.attr})})))};var b=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container mb-2"},l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"LOGO"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement(E,{item:d})),l.a.createElement("span",{className:"navbar-text"},l.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm"},"Order Now"))))))},g=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={data:[],loading:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({data:t,loading:!1})}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"text-center my-1 bg-primary p-2 text-white rounded"},"Users Details | Fake Online REST API for Testing and Prototyping"),l.a.createElement("div",{className:"row pt-2 pb-5"},this.state.loading?l.a.createElement("div",{className:"col-md-3 mb-4"},l.a.createElement("p",null,"Loading...")):l.a.createElement(l.a.Fragment,null,this.state.data.map((function(e){return l.a.createElement("div",{key:e.id,className:"col-md-3 mb-4"},l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item active"},e.name),l.a.createElement("li",{className:"list-group-item"},e.username),l.a.createElement("li",{className:"list-group-item"},e.email)))}))))))}}]),a}(n.Component);g.defaultProps={product:[{name:"Brian",username:"brian",email:"brian@gmail.com"}]};var h=g,v=[{title:"Heading",desc:"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what\u2019s most interesting in this post\u2019s contents.",attr:"#",btnLabel:"Continue reading"}],f=function(e){var t=e.t;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){return l.a.createElement("div",{key:t,className:"col-md-12 px-0"},l.a.createElement("h1",{className:"display-4 font-italic"},e.title),l.a.createElement("p",{className:"lead mb-0"},e.desc),l.a.createElement("a",{href:e.attr,className:"text-white font-weight-bold"},e.btnLabel,"..."))})))},N=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron p-4 p-md-5 text-white rounded bg-dark"},l.a.createElement(f,{t:v}))))}}]),a}(n.Component),y=[{svg:"http://www.w3.org/2000/svg",title:"Heading",desc:"Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.",attr:"#",btnLabel:"Read more"},{svg:"http://www.w3.org/2000/svg",title:"Heading",desc:"Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.",attr:"#",btnLabel:"Read more"},{svg:"http://www.w3.org/2000/svg",title:"Heading",desc:"Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.",attr:"#",btnLabel:"Read more"}],w=function(e){var t=e.mar;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){return l.a.createElement("div",{key:t,className:"col-md-4"},l.a.createElement("svg",{className:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:e.svg,preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 140x140"},l.a.createElement("title",null,"Placeholder"),l.a.createElement("rect",{width:"100%",height:"100%",fill:"#777"}),l.a.createElement("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")),l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.desc),l.a.createElement("p",null,l.a.createElement("a",{className:"btn btn-primary btn-sm",href:e.attr,role:"button"},e.btnLabel," \xbb")))})))},x=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row py-5 text-center"},l.a.createElement(w,{mar:y})),l.a.createElement("hr",null)))}}]),a}(n.Component),O=[{title:"First featurette heading.",titleMuted:"It\u2019ll blow your mind.",desc:"Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",attr:"#",btnLabel:"Read more",img:"http://www.w3.org/2000/svg"}],j=function(e){var t=e.t;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){return l.a.createElement("div",{key:t,className:"row py-5 align-items-center"},l.a.createElement("div",{className:"col-md-7 text-right"},l.a.createElement("h2",{className:"featurette-heading"},e.title,l.a.createElement("span",{className:"text-muted"},e.titleMuted)),l.a.createElement("p",{className:"lead"},e.desc),l.a.createElement("p",null,l.a.createElement("a",{className:"btn btn-primary",href:e.attr,role:"button"},e.btnLabel," \xbb"))),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("svg",{className:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:e.img,preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 500x500"},l.a.createElement("title",null,"Placeholder"),l.a.createElement("rect",{width:"100%",height:"100%",fill:"#eee"}),l.a.createElement("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500"))))})))},k=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(j,{t:O}),l.a.createElement("hr",null)))}}]),a}(n.Component),F=[{title:"Oh yeah, it\u2019s that good.",titleMuted:"See for yourself.",desc:"Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",attr:"#",btnLabel:"Read more",img:"http://www.w3.org/2000/svg"}],L=function(e){var t=e.t;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){return l.a.createElement("div",{key:t,className:"row align-items-center py-5"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement("svg",{className:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:e.img,preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 500x500"},l.a.createElement("title",null,"Placeholder"),l.a.createElement("rect",{width:"100%",height:"100%",fill:"#eee"}),l.a.createElement("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500"))),l.a.createElement("div",{className:"col-md-7"},l.a.createElement("h2",{className:"featurette-heading"},e.title,l.a.createElement("span",{className:"text-muted"},e.titleMuted)),l.a.createElement("p",{className:"lead"},e.desc),l.a.createElement("p",null,l.a.createElement("a",{className:"btn btn-primary",href:e.attr,role:"button"},e.btnLabel," \xbb"))))})))},M=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(L,{t:F}),l.a.createElement("hr",null)))}}]),a}(n.Component),C=[{title:"Bottom Navbar example",desc:"This example is a quick exercise to illustrate how the bottom navbar works.",attr:"#",btnLabel:"View navbar docs"}],P=function(e){var t=e.t;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){return l.a.createElement("div",{key:t,className:"jumbotron mt-5"},l.a.createElement("h1",null,e.title),l.a.createElement("p",{className:"lead"},e.desc),l.a.createElement("a",{className:"btn btn-lg btn-primary",href:e.attr,role:"button"},e.btnLabel," \xbb"))})))},R=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(P,{t:C})))}}]),a}(n.Component),A=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"footer mt-auto py-3"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("hr",null),l.a.createElement("small",null,l.a.createElement("span",{className:"text-muted"},"All Rights Reserved | ","Brian Bantigue")))))}}]),a}(n.Component),D=a(1);function T(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement(x,null),l.a.createElement(k,null),l.a.createElement(M,null),l.a.createElement(R,null),l.a.createElement(A,null))}function B(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 pt-5"},l.a.createElement("h1",null,"About"),l.a.createElement("p",null,"Welcome to about page.")))))}function H(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 pt-5"},l.a.createElement("h1",null,"Contact"),l.a.createElement("p",null,"Welcome to contact page.")))))}function S(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 pt-5"},l.a.createElement("h1",null,"404"),l.a.createElement("p",{className:"text-danger"},"Oops!!! page not found.")))))}var q=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement(D.c,null,l.a.createElement(D.a,{path:"/",exact:!0,component:T}),l.a.createElement(D.a,{path:"/user",exact:!0,component:h}),l.a.createElement(D.a,{path:"/about",exact:!0,component:B}),l.a.createElement(D.a,{path:"/contact",exact:!0,component:H}),l.a.createElement(D.a,{component:S}))))}}]),a}(n.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e837b0d7.chunk.js.map