(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.c852fc4a.svg"},21:function(e,t,a){e.exports=a(60)},27:function(e,t,a){},29:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),i=(a(27),a(5)),l=a(6),s=a(8),p=a(7),u=a(9),m=a(18),d=a.n(m),h=(a(29),a(62)),g=a(61),v=a(64),b=a(63),f=a(10),y=a.n(f),w=a(11),E=a(12),k=a.n(E),j=a(13),O=a.n(j),_={display:"grid",padding:"1rem",gridTemplateColumns:"repeat(6, 1fr)",gridRowGap:"1rem",gridColumnGap:"0.3rem"},x={height:"220px",boxShadow:"0 0 35px black"},T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(w.a)(y.a.mark(function e(){var t,a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/discover/movie?api_key=763a001f24857cb0f7e32293197e505a&language=zh-TW&region=TW&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",e.next=3,fetch("https://api.themoviedb.org/3/discover/movie?api_key=763a001f24857cb0f7e32293197e505a&language=zh-TW&region=TW&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({movies:a.results}),console.log(a.results);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies,t=r.a.createElement(k.a,{type:"Oval",color:"#eb4d4b",height:80,width:80}),a=e.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(g.a,{to:"/".concat(e.id)},r.a.createElement(O.a,{id:e.id},r.a.createElement("img",{style:x,src:"".concat("http://image.tmdb.org/t/p/w154").concat(e.poster_path),alt:e.title}))))});return r.a.createElement("div",{style:_},e.length?a:t)}}]),t}(n.Component),W={marginTop:"32px"},C={color:"cornsilk"},A={color:"cornsilk",padding:"8px 8px",margin:"0 auto",width:"70vw",backgroundColor:"rgba(236, 240, 248,0.2)"},z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={movie:{}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(w.a)(y.a.mark(function e(){var t,a,n,r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,a="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=763a001f24857cb0f7e32293197e505a&language=zh-TW&region=TW&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,this.setState({movie:r});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movie,t=r.a.createElement("div",{style:{backgroundImage:"url(".concat("http://image.tmdb.org/t/p/w1280").concat(e.backdrop_path,")"),backgroundRepeat:"no-repeat"}},r.a.createElement(O.a,{id:e.id},r.a.createElement("img",{style:W,src:"".concat("http://image.tmdb.org/t/p/w154").concat(e.poster_path),alt:e.title})),r.a.createElement("h1",{style:C},e.title),r.a.createElement("h3",null,e.release_date),r.a.createElement("p",{style:A},e.overview)),a=r.a.createElement(k.a,{type:"Oval",color:"#eb4d4b",height:80,width:80});return r.a.createElement(r.a.Fragment,null,e?t:a)}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:"/mvdb_test"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(g.a,{to:"/"},r.a.createElement("img",{src:d.a,alt:"logo"}))),r.a.createElement(v.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:T}),r.a.createElement(b.a,{path:"/:id",component:z}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.908afda9.chunk.js.map