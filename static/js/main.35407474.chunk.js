(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(26),function(){return r.a.createElement("header",{className:"uk-margin"},r.a.createElement("h1",{className:"uk-text-center"},"Events Searcher in React with EventBrite API"))}),u=a(20),s=a(2),i=a(3),m=a(5),v=a(4),d=a(6),h=a(7),g=a.n(h),p=a(8),k=a(9),E=a.n(k),f=r.a.createContext(),b=f.Consumer,y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).token="H3XNKDXWLEAP3RPVC4X6",a.state={categories:[]},a.getCategories=Object(p.a)(g.a.mark(function e(){var t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.eventbriteapi.com/v3/categories/?token=".concat(a.token),e.next=3,E.a.get(t);case 3:n=e.sent,a.setState({categories:n.data.categories});case 5:case"end":return e.stop()}},e)})),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getCategories()}},{key:"render",value:function(){return r.a.createElement(f.Provider,{value:{categories:this.state.categories}},this.props.children," ")}}]),t}(n.Component),w=r.a.createContext(),N=w.Consumer,j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).token="H3XNKDXWLEAP3RPVC4X6",a.sortBy="date",a.state={events:[]},a.getEvents=function(){var e=Object(p.a)(g.a.mark(function e(t){var n,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://www.eventbriteapi.com/v3/events/search/?q=".concat(t.name,"&categories=").concat(t.category,"&sort_by=").concat(a.sortBy,"&token=").concat(a.token),e.next=3,E()(n);case 3:r=e.sent,a.setState({events:r.data.events});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(w.Provider,{value:{events:this.state.events,getEvents:this.getEvents}},this.props.children)}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",category:""},a.handleDataEvents=function(e){a.setState(Object(u.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(N,null,function(t){return r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),t.getEvents(e.state)}},r.a.createElement("fieldset",{className:"uk-fieldset"},r.a.createElement("legend",{className:"uk-legend uk-text-center"}," ","Search your event by name or category"),r.a.createElement("div",{className:"uk-column-1-3@m uk-margin"}," ",r.a.createElement("div",{className:"uk-margin","uk-margin":"true"},r.a.createElement("input",{name:"name",className:"uk-input",type:"text",placeholder:"Event name or city",onChange:e.handleDataEvents})),r.a.createElement("div",{className:"uk-margin","uk-margin":"true"},r.a.createElement("select",{name:"category",className:"uk-select",type:"text",onChange:e.handleDataEvents},r.a.createElement("option",{value:""},"-- Select category --"),r.a.createElement(b,null,function(e){return e.categories.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name_localized)})}))),r.a.createElement("div",null,r.a.createElement("input",{className:"uk-button uk-button-danger",type:"submit",value:"Search events"})))))})}}]),t}(n.Component),x=function(e){var t=e.event,a=t.description.text;return a&&(a=a.length>250?a.substring(0,230).concat("..."):null),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-card-small uk-card-default"},r.a.createElement("div",{className:"uk-card-media-top"},t.logo?r.a.createElement("img",{src:t.logo.url,alt:t.name}):null),r.a.createElement("div",{className:"uk-card-body uk-flex uk-flex-column uk-flex-middle"},r.a.createElement("h3",{className:"uk-card-title"},t.name.text),r.a.createElement("p",null,a)),r.a.createElement("div",{className:"uk-card-footer"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.url,className:"uk-button uk-button-secondary"},"More information"))))},C=function(){return r.a.createElement("div",{className:"uk-child-width-1-3@m","uk-grid":"true","uk-height-match":"target: .uk-card-body"}," ",r.a.createElement(N,null,function(e){return console.log(e),e.events.map(function(e){return r.a.createElement(x,{key:e.id,event:e})})}))};var S=function(){return r.a.createElement(j,null," ",r.a.createElement(y,null," ",r.a.createElement(l,null),r.a.createElement("div",{className:"uk-container"},r.a.createElement(O,null),r.a.createElement(C,null)))," ")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.35407474.chunk.js.map