(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(2),r=n.n(a),i=n(42),s=n.n(i),o=(n(58),n(43)),l=n(44),j=n(52),d=n(51),b=(n(59),n(9)),u=n(108),h=n(109),p=n(110),O=n(111),x=n(112),f=n(17),v=n(10),m=n(18);var g=function(){return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)(u.a,{dark:!0,expand:"md",children:Object(c.jsx)("span",{className:"navbar-text ml-auto",children:Object(c.jsxs)("ul",{className:"navbar-nav ml-auto mt-2",children:[Object(c.jsxs)(h.a,{className:"button",outline:!0,children:[Object(c.jsx)(f.a,{icon:m.d})," Login"]}),Object(c.jsxs)(h.a,{className:"button",outline:!0,children:[Object(c.jsx)(f.a,{icon:m.f})," Register"]})]})})}),Object(c.jsx)(p.a,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)(x.a,{children:Object(c.jsx)("h1",{className:"title",children:Object(c.jsxs)(v.b,{to:"/",style:{color:"black",textDecoration:"none"},children:["Movie App ",Object(c.jsx)(f.a,{icon:m.b})]})})})})})]})},y=n(11),_=n.n(y),w=n(14),k=n(7),S="cdd3c5ce5ede207e5ca373b35395541c",N={fetchTrendingMovies:"/trending/movie/week?api_key=".concat(S,"&language=en-US"),fetchTrendingShows:"/trending/tv/week?api_key=".concat(S,"&language=en-US"),fetchTrendingPeople:"\ntrending/person/week?api_key=".concat(S),fetchTopRatedMovies:"/movie/top_rated?api_key=".concat(S,"&language=en-US&page=1"),fetchTopRatedShows:"tv/top_rated?api_key=".concat(S,"&language=en-US&page=1")},T="https://image.tmdb.org/t/p/original",U=function(e){if(""===e)return null;return new Date(e).toLocaleDateString([],{year:"numeric",month:"long",day:"numeric"})},C=function(e){return new Date(e).getFullYear()},D=function(e){if(e>60){var t=Math.floor(e/60);return t+"h "+Math.ceil(60*(e/60-t))+"m"}if(60===e||Number.isInteger(e/60))return e/60+"h";for(var n in e)return e[n]+"m"},R=n(22),F=n(46),M=n(49),P=n.n(M);n(33);var E=function(e){var t,n,r=e.item,i=r.genres,s=void 0===i?[]:i,o=Object(a.useState)(""),l=Object(k.a)(o,2),j=l[0],d=l[1],b=Object(a.useState)(!1),u=Object(k.a)(b,2),h=u[0],p=u[1];return console.log(r),Object(c.jsx)("div",{className:"container-fluid d-flex justify-content-center",children:Object(c.jsx)(O.a,{children:Object(c.jsx)("div",{className:"banner img-fluid ",style:{backgroundImage:"url(\n\t\t    ".concat(T).concat(r.backdrop_path,"\n\t\t)"),backgroundSize:"cover",borderRadius:"25px"},children:Object(c.jsx)("div",{className:"banner_contents overlay",children:Object(c.jsxs)(O.a,{children:[Object(c.jsx)(x.a,{sm:"5",children:Object(c.jsx)("img",{className:"banner_img img-fluid",src:"https://image.tmdb.org/t/p/w342/".concat(r.poster_path),alt:r.title+"poster"})}),Object(c.jsxs)(x.a,{sm:"7",children:[Object(c.jsxs)("h1",{className:"banner_title",children:[(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name),"(",C((null===r||void 0===r?void 0:r.release_date)||r.first_air_date),")"]}),Object(c.jsxs)("p",{children:[(n=r.release_date||r.first_air_date,new Date(n).toLocaleDateString([],{year:"numeric",month:"numeric",day:"numeric"})),"(US) \u2022"," ",s.map((function(e,t){return(t?", ":"")+e.name}))," ","\u2022 ",D(r.runtime||r.episode_run_time),(t=r,(null===t||void 0===t?void 0:t.title)?Object(c.jsxs)("button",{className:"banner_button",onClick:function(){return function(e){j?(d(""),p(!1)):(P()((null===e||void 0===e?void 0:e.original_title)||"").then((function(e){console.log(e);var t=new URLSearchParams(new URL(e).search);d(t.get("v"))})).catch((function(e){return console.log(e)})),p(!0))}(r)},children:[h?Object(c.jsx)(f.a,{icon:m.e}):Object(c.jsx)(f.a,{icon:m.c})," ","Trailer"]}):null)]}),Object(c.jsx)("div",{style:{width:50,height:50,float:"left"},children:Object(c.jsx)(R.a,{className:"rating_circle",background:!0,backgroundPadding:6,styles:Object(R.b)({backgroundColor:"#3e98c7",textColor:"#fff",pathColor:"#fff",trailColor:"transparent",textSize:"25px"}),value:10*r.vote_average,text:"".concat(10*r.vote_average,"%"),strokeWidth:5})}),Object(c.jsx)("p",{children:"User Score"}),Object(c.jsx)("h2",{style:{clear:"both"},children:"Overview"}),Object(c.jsx)("h1",{className:"banner_description",children:null===r||void 0===r?void 0:r.overview}),Object(c.jsx)("div",{style:{padding:"40px"},children:j&&Object(c.jsx)(F.a,{videoId:j,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})})]})]})})})})})},I=(n(21),n.p+"static/media/nopicture.a9136072.png");var L=function(e){var t=e.item,n=e.title,r=e.id,i=Object(a.useState)([]),s=Object(k.a)(i,2),o=s[0],l=s[1],j=Object(a.useState)([]),d=Object(k.a)(j,2),b=d[0],u=d[1],h=Object(a.useState)(!1),p=Object(k.a)(h,2),x=p[0],f=p[1],m=function(e){e.length>0&&f((function(e){return!e}))};return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(_.a.mark((function e(){var n,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/".concat(t,"/").concat(r,"/credits?api_key=").concat(S,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,l(c.cast),u(c.crew),m(c.cast),e.abrupt("return",c);case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,r]),console.log(o),x&&Object(c.jsxs)(O.a,{style:{padding:"20px"},children:[Object(c.jsx)("h3",{children:n}),Object(c.jsxs)("div",{className:"row_line",children:[b.filter((function(e){return"Director"===e.job})).map((function(e){return Object(c.jsxs)("div",{className:"row_poster",children:[Object(c.jsx)("img",{className:"poster_img",src:e.profile_path?"".concat(T).concat(e.profile_path):"".concat(I),alt:e.name+"poster"}),Object(c.jsx)(v.b,{to:"/person/".concat(null===e||void 0===e?void 0:e.id),style:{color:"black",textDecoration:"none"},children:Object(c.jsx)("h3",{children:e.name})}),Object(c.jsx)("h1",{children:"Director"})]},e.id)})),o.slice(0,15).map((function(e){return Object(c.jsxs)("div",{className:"row_poster",children:[Object(c.jsx)("img",{className:"poster_img",src:e.profile_path?"".concat(T).concat(e.profile_path):"".concat(I),alt:e.name+"poster"}),Object(c.jsx)(v.b,{to:"/person/".concat(null===e||void 0===e?void 0:e.id),style:{color:"black",textDecoration:"none"},children:Object(c.jsx)("h3",{children:e.name})}),Object(c.jsx)("p",{children:e.character})]},e.id)}))]})]})},q=n(20),A=n.n(q);var B=function(e){var t=e.item,n=e.row,i=Object(a.useState)([]),s=Object(k.a)(i,2),o=s[0],l=s[1],j=Object(b.h)().id,d=Object(a.useState)(!0),u=Object(k.a)(d,2),h=u[0],p=u[1];return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(_.a.mark((function e(){var n,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/".concat(t,"/").concat(j,"?api_key=").concat(S,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,l(c),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}setTimeout((function(){return p(!1)}),1e3),function(){e.apply(this,arguments)}()}),[t,j]),Object(c.jsx)(r.a.Fragment,{children:!1===h?Object(c.jsxs)("div",{children:[Object(c.jsx)(E,{item:o},o.id),Object(c.jsx)(L,{item:t,id:j,title:n})]}):Object(c.jsx)(A.a,{type:"bars",color:"#fff",height:"100px"})})},z=n(113),J=n(114),K=n(115),Y=n(116);var V=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],r=t[1];return Object(c.jsx)(p.a,{children:Object(c.jsx)(z.a,{children:Object(c.jsxs)(J.a,{className:"form",children:[Object(c.jsx)(K.a,{htmlFor:"query",className:"label",children:"Movie/Show/Person Name"}),Object(c.jsx)(Y.a,{className:"input form-control form-group",type:"text",name:"query",placeholder:"Search",autoComplete:"off",value:n,onChange:function(e){e.preventDefault(),r(e.target.value)}}),Object(c.jsx)(v.b,{to:"/results/".concat(n),children:Object(c.jsx)(h.a,{className:"btn form-group",type:"submit",children:"Search"})})]})})})},W=function(e){var t=e.item,n=e.type,a=t.known_for,r=void 0===a?[]:a;return Object(c.jsxs)("div",{className:"row_poster",children:[Object(c.jsx)(O.a,{children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)("img",{className:"poster_img",src:t.profile_path||(null===t||void 0===t?void 0:t.poster_path)?"".concat(T).concat((null===t||void 0===t?void 0:t.poster_path)||(null===t||void 0===t?void 0:t.profile_path)):"".concat(I),alt:(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)+"poster"}),Object(c.jsx)(v.b,{to:{pathname:"/".concat(n,"/").concat(null===t||void 0===t?void 0:t.id)},style:{color:"black",textDecoration:"none"},children:Object(c.jsx)("h3",{children:(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)})})]})}),t.vote_average&&Object(c.jsxs)(O.a,{children:[Object(c.jsx)(x.a,{children:Object(c.jsx)("p",{children:U((null===t||void 0===t?void 0:t.release_date)||(null===t||void 0===t?void 0:t.first_air_date))})}),Object(c.jsx)(x.a,{children:Object(c.jsx)("div",{style:{width:50},children:Object(c.jsx)(R.a,{className:"rating_circle",background:!0,backgroundPadding:6,styles:Object(R.b)({backgroundColor:"#3e98c7",textColor:"#fff",pathColor:"#fff",trailColor:"transparent",textSize:"25px"}),value:10*(null===t||void 0===t?void 0:t.vote_average),text:"".concat(10*(null===t||void 0===t?void 0:t.vote_average),"%"),strokeWidth:5})})})]}),(null===t||void 0===t?void 0:t.known_for)&&Object(c.jsx)(O.a,{children:Object(c.jsxs)(x.a,{style:{wordBreak:"normal"},children:[null===t||void 0===t?void 0:t.known_for_department,"\u2022",r.map((function(e,t){return(t?",":"")+(null===e||void 0===e?void 0:e.title)}))]})})]})};var G=function(){var e=Object(a.useState)([]),t=Object(k.a)(e,2),n=t[0],r=t[1],i=Object(b.h)().query,s=Object(a.useState)(!0),o=Object(k.a)(s,2),l=o[0],j=o[1];Object(a.useEffect)((function(){setTimeout((function(){return j(!1)}),2e3)}),[]);var d,u="https://api.themoviedb.org/3/search/multi?api_key=".concat(S,"&language=en-US&query=").concat(i,"&page=1&include_adult=false");return console.log(n),Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(u);case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,r(n.results),e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[u]),Object(c.jsxs)("div",{children:[Object(c.jsx)(V,{}),!1===l?(d=n,0===d.length?Object(c.jsx)("h1",{children:"No Results found"}):Object(c.jsx)(O.a,{children:Object(c.jsx)("div",{className:"row_line",children:d.map((function(e){return Object(c.jsx)(W,{item:e,type:e.media_type},e.id)}))})})):Object(c.jsx)(A.a,{type:"bars",color:"#fff",height:"100px"})]})},H=n(50),Q=n.n(H).a.create({baseURL:"https://api.themoviedb.org/3"});n(103);var X=function(e){var t=e.title,n=e.fetchUrl,r=e.type,i=Object(a.useState)([]),s=Object(k.a)(i,2),o=s[0],l=s[1];return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.get(n);case 3:return t=e.sent,l(t.data.results),e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),console.log(o),Object(c.jsxs)(O.a,{style:{padding:"40px"},children:[Object(c.jsx)("h3",{children:t}),Object(c.jsx)("div",{className:"row_line",children:o.map((function(e){return Object(c.jsx)(W,{item:e,type:r},e.id)}))})]})};var Z=function(){var e=Object(a.useState)(!0),t=Object(k.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){setTimeout((function(){return r(!1)}),1e3)}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(V,{}),!1===n?Object(c.jsxs)("div",{children:[Object(c.jsx)(X,{type:"movie",title:"Trending Movies",fetchUrl:N.fetchTrendingMovies}),Object(c.jsx)(X,{type:"tv",title:"Trending Shows",fetchUrl:N.fetchTrendingShows}),Object(c.jsx)(X,{type:"person",title:"Trending People",fetchUrl:N.fetchTrendingPeople}),Object(c.jsx)(X,{type:"movie",title:"Top Rated Movies",fetchUrl:N.fetchTopRatedMovies}),Object(c.jsx)(X,{type:"tv",title:"Top Rated TV Shows",fetchUrl:N.fetchTopRatedShows})]}):Object(c.jsx)(A.a,{type:"bars",color:"#fff",height:"100px"})]})},$=n(117);var ee=function(e){var t,n=e.person_id,r=e.known,i=Object(a.useState)([]),s=Object(k.a)(i,2),o=s[0],l=s[1],j=Object(a.useState)([]),d=Object(k.a)(j,2),b=d[0],u=d[1];return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(_.a.mark((function e(){var t,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/person/".concat(n,"/combined_credits?api_key=").concat(S,"&language=en-US"));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,l(c.cast),u(c.crew),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Known For "}),Object(c.jsx)("div",{className:"row_line",children:(t=r,"Acting"===t?o:b).slice(0,8).map((function(e){return Object(c.jsx)(W,{item:e,type:e.media_type},e.id)}))}),Object(c.jsx)("p",{children:Object(c.jsxs)(v.b,{to:{pathname:"/credits/".concat(n),state:{crew_info:b,cast_info:o}},style:{color:"black",textDecoration:"none"},children:["more info",Object(c.jsx)(f.a,{icon:m.a})]})})]})};var te=function(e){var t=e.item,n=Object(a.useState)([]),r=Object(k.a)(n,2),i=r[0],s=r[1],o=Object(a.useState)([]),l=Object(k.a)(o,2),j=l[0],d=l[1],u=Object(a.useState)(!0),h=Object(k.a)(u,2),f=h[0],v=h[1],m=Object(b.h)().id;return Object(a.useEffect)((function(){function e(){return(e=Object(w.a)(_.a.mark((function e(){var n,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/".concat(t,"/").concat(m,"?api_key=").concat(S,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,console.log(c),s(c),d(c.also_known_as),e.abrupt("return",c);case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}setTimeout((function(){return v(!1)}),2e3),function(){e.apply(this,arguments)}()}),[t,m]),!1===f?Object(c.jsx)(p.a,{children:Object(c.jsx)($.a,{style:{borderRadius:"25px"},children:Object(c.jsx)(p.a,{children:Object(c.jsxs)(O.a,{style:{margin:"auto"},children:[Object(c.jsxs)(x.a,{sm:"4",style:{listStyleType:"none",fontSize:"12px"},children:[Object(c.jsx)("img",{className:"banner_img img-fluid",style:{borderRadius:"25px",marginTop:"10px"},src:(null===i||void 0===i?void 0:i.profile_path)?"https://image.tmdb.org/t/p/w342/".concat(null===i||void 0===i?void 0:i.profile_path):"".concat(I),alt:i.name+"poster"}),Object(c.jsx)("h3",{children:"Personal Info"}),Object(c.jsxs)("div",{children:["Known For: ",i.known_for_department,Object(c.jsx)("br",{}),"Gender:",2===i.gender?"Male":1===i.gender?"Female":"Uknown",Object(c.jsx)("br",{}),"Birthday:"," ",i.birthday?U(i.birthday):"Uknown",Object(c.jsx)("br",{}),Object(c.jsx)("div",{children:i.deathday?"Deathday:".concat(U(i.deathday)):null}),i.place_of_birth?"Place of birth:".concat(i.place_of_birth):null,Object(c.jsx)("br",{})]}),j.length>0&&Object(c.jsxs)("ul",{children:["Also Known As:",j.map((function(e,t){return Object(c.jsx)("li",{children:e},t)}))]})]}),Object(c.jsxs)(x.a,{sm:"8",children:[Object(c.jsx)("h1",{children:i.name}),Object(c.jsx)("h3",{children:"Biography"}),Object(c.jsx)("p",{className:"text-justify",children:i.biography}),Object(c.jsx)(O.a,{style:{margin:"auto"},children:Object(c.jsx)(ee,{person_id:i.id,known:i.known_for_department})})]})]})})})}):Object(c.jsx)(A.a,{type:"bars",color:"#fff",height:"100px"})},ne=n(118),ce=n(119),ae=n(120),re=n(121),ie=n(122),se=n(123),oe=function(e){var t=e.el;return Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:C((null===t||void 0===t?void 0:t.release_date)||(null===t||void 0===t?void 0:t.first_air_date))||"\u2501"}),Object(c.jsx)("td",{children:Object(c.jsx)(v.b,{to:{pathname:"/".concat(null===t||void 0===t?void 0:t.media_type,"/").concat(null===t||void 0===t?void 0:t.id)},style:{color:"black",textDecoration:"none"},children:(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.name)})}),Object(c.jsx)("td",{children:(null===t||void 0===t?void 0:t.character)||(null===t||void 0===t?void 0:t.job)})]})})},le=n(6),je=n.n(le),de=function(){var e=Object(b.g)().state,t=Object(a.useState)(e.cast_info),n=Object(k.a)(t,1)[0],r=Object(a.useState)(e.crew_info),i=Object(k.a)(r,1)[0],s=Object(a.useState)("1"),o=Object(k.a)(s,2),l=o[0],j=o[1],d=Object(a.useState)(!0),u=Object(k.a)(d,2),h=(u[0],u[1]);Object(a.useEffect)((function(){setTimeout((function(){return h(!1)}),2e3)}),[]);var O=function(e){l!==e&&j(e)};return Object(c.jsxs)(p.a,{style:{margin:"auto"},children:[Object(c.jsxs)(ne.a,{tabs:!0,children:[Object(c.jsx)(ce.a,{children:Object(c.jsx)(ae.a,{className:je()({active:"1"===l}),onClick:function(){O("1")},children:"Acting"})}),Object(c.jsx)(ce.a,{children:Object(c.jsx)(ae.a,{className:je()({active:"2"===l}),onClick:function(){O("2")},children:"Crew"})})]}),Object(c.jsxs)(re.a,{activeTab:l,children:[Object(c.jsx)(ie.a,{tabId:"1",children:n.length>0&&Object(c.jsx)($.a,{children:Object(c.jsxs)(se.a,{responsive:!0,striped:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Year"}),Object(c.jsx)("th",{children:"Title"}),Object(c.jsx)("th",{children:"Character"})]})}),n.map((function(e){return Object(c.jsx)(oe,{el:e})}))]})})}),Object(c.jsx)(ie.a,{tabId:"2",children:i.length>0&&Object(c.jsx)($.a,{children:Object(c.jsxs)(se.a,{responsive:!0,striped:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Year"}),Object(c.jsx)("th",{children:"Title"}),Object(c.jsx)("th",{children:"Job"})]})}),i.map((function(e){return Object(c.jsx)(oe,{el:e})}))]})})})]})]})};var be=function(){return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)(g,{}),Object(c.jsxs)(b.d,{children:[Object(c.jsx)(b.b,{exact:!0,path:"/",component:Z}),Object(c.jsx)(b.b,{path:"/movie/:id",children:Object(c.jsx)(B,{item:"movie",row:"Movie Cast"})}),Object(c.jsx)(b.b,{path:"/tv/:id",children:Object(c.jsx)(B,{item:"tv",row:"Show Cast"})}),Object(c.jsx)(b.b,{path:"/person/:id",children:Object(c.jsx)(te,{item:"person"})}),Object(c.jsx)(b.b,{path:"/credits/:id",children:Object(c.jsx)(de,{})}),Object(c.jsx)(b.b,{path:"/results/:query",component:G}),Object(c.jsx)(b.a,{to:"/"})]})]})},ue=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)(v.a,{children:Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsx)(be,{})})})}}]),n}(a.Component),he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(104),n(105),n(106);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(ue,{})}),document.getElementById("root")),he()},21:function(e,t,n){},33:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.3a41e1b3.chunk.js.map