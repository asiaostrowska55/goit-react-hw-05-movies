"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[881],{639:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(402),a="Loader_loader__+lRPl",i=r(184),o=function(){return(0,i.jsx)(n.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",className:a})}},817:function(e,t,r){r.d(t,{$:function(){return n},v:function(){return a}});var n="e6237ab11d37482483effc956909f434",a=function(e){return fetch(e).then((function(e){return e.json()})).catch((function(e){return console.log("fetchmovie error:",e)}))}},881:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(433),a=r(861),i=r(439),o=r(757),s=r.n(o),c="Movies_link__MzAfU",u="Movies_date__y3KJx",l="Movies_listEl__aP4U3",f="Movies_movieList__FD6N4",h=r(791),d=r(817),v=r(639),m=r(87),p=r(686),_=r(184),x=function(){var e=(0,h.useState)(""),t=(0,i.Z)(e,2),r=t[0],o=t[1],x=(0,h.useState)(!1),b=(0,i.Z)(x,2),g=b[0],k=b[1],j=(0,h.useState)([]),y=(0,i.Z)(j,1)[0],w=function(){var e=(0,a.Z)(s().mark((function e(t){var a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(!0),t.preventDefault(),t.currentTarget.reset(),""!==r.trim()){e.next=6;break}return k(!1),e.abrupt("return",p.Notify.info("Please provide a query"));case 6:return e.next=8,(0,d.v)("https://api.themoviedb.org/3/search/movie?api_key=".concat(d.$,"&query=").concat(r));case 8:if(0!==(a=e.sent).results.length){e.next=13;break}return k(!1),y.length=0,e.abrupt("return",p.Notify.info("We could not find the movie you are looking for. Please try another title."));case 13:if(!a){e.next=21;break}k(!1),(i=(0,n.Z)(a.results)).map((function(e){return{title:e.title,id:e.id,release_date:e.release_date}})),y.length=0,i.forEach((function(e){var t=new Date(e.release_date).toLocaleDateString("en-US",{year:"numeric"});y.push({movieId:e.id,movieTitle:e.title,releaseDate:t})})),e.next=22;break;case 21:throw new Error("Error in Movies page");case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,_.jsxs)("form",{onSubmit:w,children:[(0,_.jsx)("label",{htmlFor:"searchInput"}),"",(0,_.jsx)("input",{id:"searchInput",type:"text",placeholder:"Search for movie",onChange:function(e){o(e.target.value)}}),(0,_.jsx)("button",{type:"submit",children:"Search"}),(0,_.jsx)("ul",{className:f,children:g?(0,_.jsx)(v.Z,{}):0!==y.length&&y.map((function(e){return(0,_.jsx)("li",{className:l,children:(0,_.jsxs)(m.rU,{className:c,to:"/movies/".concat(e.movieId),children:[(0,_.jsx)("p",{children:e.movieTitle}),(0,_.jsxs)("p",{className:u,children:[e.releaseDate," "]})]})},e.movieId)}))})]})}}}]);
//# sourceMappingURL=881.64022df3.chunk.js.map