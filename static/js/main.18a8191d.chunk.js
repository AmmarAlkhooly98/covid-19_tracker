(this["webpackJsonpcovid-19_tracker"]=this["webpackJsonpcovid-19_tracker"]||[]).push([[0],{128:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},133:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},146:function(e,t,a){e.exports=a(300)},300:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),i=a(13),l=a.n(i),s=a(16),u=a(116),d=a(117),p=a(135),m=a(134),f=a(345),h=a(349),g=a(350),b=a(302),v=a(118),E=a.n(v),y=a(43),C=a.n(y),k=a(119),w=a(122),j=a.n(w),O=function(e){var t=e.data,a=e.data.confirmed;return r.a.createElement("div",{className:C.a.container},a?r.a.createElement(f.a,{container:!0,justify:"center",spacing:3},Object.entries(t).map((function(e,t){var a="confirmed"===e[0]?"Infected":null,n="confirmed"===e[0]?"Number of active cases of Covid-19":null,c="confirmed"===e[0]?e[1].value:null,o="recovered"===e[0]?"Recovered":null,i="recovered"===e[0]?"Number of recoveries from Covid-19":null,l="recovered"===e[0]?e[1].value:null,s="deaths"===e[0]?"Deaths":null,u="deaths"===e[0]?"Number of deaths caused by Covid-19":null,d="deaths"===e[0]?e[1].value:null,p="confirmed"===e[0]?C.a.confirmed:"deaths"===e[0]?C.a.deaths:"recovered"===e[0]?C.a.recovered:null;return r.a.createElement("div",{key:e[0]},"lastUpdate"!==e[0]?r.a.createElement(f.a,{item:!0,component:h.a,className:j()(C.a.card,p)},r.a.createElement(g.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},a||s||o),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:c||d||l,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},(new Date).toDateString()),r.a.createElement(b.a,{variant:"body2"},i||u||n))):null)}))):r.a.createElement(k.LoopCircleLoading,null))},x=a(19),S=a(51),_=a.n(S),P="https://covid19.mathdro.id/api",N=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r,c,o,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t?"".concat(P,"/countries/").concat(t):P,e.prev=1,e.next=4,_.a.get(a);case 4:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,i=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:i,lastUpdate:s});case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("".concat(P,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("".concat(P,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://covid-193.p.rapidapi.com/statistics",e.prev=1,e.next=4,_.a.get("https://covid-193.p.rapidapi.com/statistics",{headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"5ee541612dmsh274f4b3d3135a95p1fc632jsn2b12d7ee936b",useQueryString:!0}});case 4:return t=e.sent,a=t.data.response,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),R=a(82),L=a(83),A=a.n(L),U=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,i=e.country,u=Object(n.useState)([]),d=Object(x.a)(u,2),p=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]);var f=p.length?r.a.createElement(R.b,{className:A.a.container,data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"infected",backgroundColor:"rgba(0, 0, 100, 0.1)",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,h=a?r.a.createElement(R.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,test:"Current state in ".concat(i)}}}):null;return r.a.createElement("div",{className:A.a.container},i?h:f)},M=a(351),q=a(129),z=a(128),T=a.n(z),G=function(e){var t=e.handelCountryChange,a=Object(n.useState)([]),c=Object(x.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),o.length?r.a.createElement(M.a,{className:T.a.formControl},r.a.createElement(q.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))):null},H=a(67),J=a(3),Q=a(355),V=a(12),Z=a(359),F=a(360),W=a(354),K=a(358),X=a(352),Y=a(363),$=a(353),ee=a(366),te=a(356),ae=a(301),ne=a(365),re=a(304),ce=a(367),oe=a(361),ie=a(362),le=a(131),se=a.n(le),ue=a(132),de=a.n(ue);function pe(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var me=[{id:"country",numeric:!1,disablePadding:!0,label:"Country"},{id:"infected",numeric:!0,disablePadding:!1,label:"Infected"},{id:"recovered",numeric:!0,disablePadding:!1,label:"Recovered"},{id:"deaths",numeric:!0,disablePadding:!1,label:"Deaths"},{id:"new cases",numeric:!0,disablePadding:!1,label:"New Cases"},{id:"date updated",numeric:!0,disablePadding:!1,label:"Date Updated"},{id:"population",numeric:!0,disablePadding:!1,label:"Population"}];function fe(e){var t=e.classes,a=e.onSelectAllClick,n=e.order,c=e.orderBy,o=e.numSelected,i=e.rowCount,l=e.onRequestSort;return r.a.createElement(X.a,null,r.a.createElement($.a,null,r.a.createElement(W.a,{padding:"checkbox"},r.a.createElement(ne.a,{indeterminate:o>0&&o<i,checked:i>0&&o===i,onChange:a,inputProps:{"aria-label":"select all desserts"}})),me.map((function(e){return r.a.createElement(W.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:c===e.id&&n},r.a.createElement(ee.a,{active:c===e.id,direction:c===e.id?n:"asc",onClick:(a=e.id,function(e){l(e,a)})},e.label,c===e.id?r.a.createElement("span",{className:t.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var a}))))}var he=Object(Q.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(V.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"},search:Object(H.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(V.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(V.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(H.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),ge=function(e){var t=he(),a=e.numSelected;return r.a.createElement(te.a,{className:Object(J.a)(t.root,Object(H.a)({},t.highlight,a>0))},a>0?r.a.createElement(b.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div"},a," selected"):r.a.createElement(b.a,{className:t.title,variant:"h6",component:"div"},"Covid-19 Data"),a>0?r.a.createElement(ce.a,{title:"Copy"},r.a.createElement(re.a,{"aria-label":"Copy"},r.a.createElement(se.a,null))):r.a.createElement(ce.a,{title:"Filter list"},r.a.createElement(re.a,{"aria-label":"filter list"},r.a.createElement(de.a,null))))},be=Object(Q.a)((function(e){return{root:{width:"100%",marginTop:"50px",marginBottom:"50px"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}})),ve=function(){var e=be(),t=r.a.useState("desc"),a=Object(x.a)(t,2),c=a[0],o=a[1],i=r.a.useState("population"),u=Object(x.a)(i,2),d=u[0],p=u[1],m=r.a.useState([]),f=Object(x.a)(m,2),h=f[0],g=f[1],b=r.a.useState(0),v=Object(x.a)(b,2),E=v[0],y=v[1],C=r.a.useState(!1),k=Object(x.a)(C,2),w=k[0],j=k[1],O=r.a.useState(10),S=Object(x.a)(O,2),_=S[0],P=S[1],N=Object(n.useState)([]),D=Object(x.a)(N,2),I=D[0],R=D[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=R,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[R]);var L=_-Math.min(_,I.length-E*_);return r.a.createElement("div",{className:e.root},I.length?r.a.createElement(ae.a,{className:e.paper},r.a.createElement(ge,{numSelected:h.length,tableData:I}),r.a.createElement(K.a,null,r.a.createElement(Z.a,{className:e.table,"aria-labelledby":"tableTitle",size:w?"small":"medium","aria-label":"enhanced table"},r.a.createElement(fe,{classes:e,numSelected:h.length,order:c,orderBy:d,onSelectAllClick:function(e){if(e.target.checked){var t=I.map((function(e){return e.country}));g(t)}else g([])},onRequestSort:function(e,t){o(d===t&&"asc"===c?"desc":"asc"),p(t)},rowCount:I.length}),r.a.createElement(F.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(I,function(e,t){return"desc"===e?function(e,a){return pe(e,a,t)}:function(e,a){return-pe(e,a,t)}}(c,d)).slice(E*_,E*_+_).map((function(e,t){var a,n=(a=e.country,-1!==h.indexOf(a)),c="enhanced-table-checkbox-".concat(t);return r.a.createElement($.a,{hover:!0,onClick:function(t){return function(e,t){var a=h.indexOf(t),n=[];-1===a?n=n.concat(h,t):0===a?n=n.concat(h.slice(1)):a===h.length-1?n=n.concat(h.slice(0,-1)):a>0&&(n=n.concat(h.slice(0,a),h.slice(a+1))),g(n)}(0,e.country)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.country,selected:n},r.a.createElement(W.a,{padding:"checkbox"},r.a.createElement(ne.a,{checked:n,inputProps:{"aria-labelledby":c}})),r.a.createElement(W.a,{component:"th",id:c,scope:"row",padding:"none"},e.country),r.a.createElement(W.a,{align:"right"},e.cases.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),r.a.createElement(W.a,{align:"right"},e.cases.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),r.a.createElement(W.a,{align:"right"},e.deaths.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),null!==e.cases.new&&void 0!==e.cases.new?r.a.createElement(W.a,{align:"right"},e.cases.new.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")):r.a.createElement(W.a,{align:"right"},"0"),r.a.createElement(W.a,{align:"right"},(new Date).toDateString(e.day)),null!==e.population&&void 0!==e.population?r.a.createElement(W.a,{align:"right"},e.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")):r.a.createElement(W.a,{align:"right"},"-"))})),L>0&&r.a.createElement($.a,{style:{height:(w?33:53)*L}},r.a.createElement(W.a,{colSpan:6}))))),r.a.createElement(Y.a,{rowsPerPageOptions:[10,50,I.length],component:"div",count:I.length,rowsPerPage:_,page:E,onChangePage:function(e,t){y(t)},onChangeRowsPerPage:function(e){P(parseInt(e.target.value,10)),y(0)}})):null,I.length?r.a.createElement(oe.a,{control:r.a.createElement(ie.a,{checked:w,onChange:function(e){j(e.target.checked)}}),label:"Dense padding"}):null)},Ee=a(84),ye=a.n(Ee),Ce=a(133),ke=a.n(Ce),we=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{}},e.handelCountryChange=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:ye.a.container},r.a.createElement("img",{className:ye.a.image,src:ke.a,alt:"COVID-19"}),r.a.createElement(O,{data:t}),r.a.createElement(G,{handelCountryChange:this.handelCountryChange}),r.a.createElement(U,{data:t,country:a}),r.a.createElement(ve,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(we,null),document.getElementById("root"))},43:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",confirmed:"Cards_confirmed__iMMyf",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},83:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},84:function(e,t,a){e.exports={body:"App_body__ZTvxg",image:"App_image__3byI1"}}},[[146,1,2]]]);
//# sourceMappingURL=main.18a8191d.chunk.js.map