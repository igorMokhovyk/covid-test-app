(this["webpackJsonpcovid-test-dev"]=this["webpackJsonpcovid-test-dev"]||[]).push([[0],{223:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(8),a=n.n(c),o=n(19),l=n(88),i=n(14),u=n(6);var b=Object(i.b)((function(e){return{global:e.global,country:e.country}}),(function(e){return{}}))((function(e){var t=Object(r.useState)(),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(),b=Object(o.a)(i,2),j=b[0],s=b[1],d=Object(r.useState)(),O=Object(o.a)(d,2),h=O[0],g=O[1],f=+e.country.map((function(e){return e.TotalConfirmed})).join(),x=+e.country.map((function(e){return e.TotalDeaths})).join(),y=+e.country.map((function(e){return e.TotalRecovered})).join();return Object(r.useEffect)((function(){if(!e.global)return null;a(e.global.Global.TotalConfirmed),s(e.global.Global.TotalDeaths),g(e.global.Global.TotalRecovered)}),[e.global]),Object(r.useEffect)((function(){a(f),s(x),g(y)}),[e.country]),Object(u.jsx)("div",{children:Object(u.jsx)(l.Doughnut,{data:{labels:["Infected ".concat(c),"Recovered ".concat(h),"Death ".concat(j)],datasets:[{label:"# of Votes",data:[c,h,j],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"],borderWidth:1}]},width:1e3,height:300,options:{maintainAspectRatio:!1}})})})),j=n(268),s=n(269);var d=Object(i.b)((function(e){return{global:e.global}}),(function(e){return{getOneCountry:function(t){return e({type:"GET_ONE_COUNTRY",payload:t})}}}))((function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),c=n[0],a=n[1],l=Object(r.useState)(""),i=Object(o.a)(l,2),b=i[0],d=i[1];return Object(r.useEffect)((function(){if(!e.global)return null;var t=e.global.Countries.map((function(e){return e.Country})).sort();a(t)}),[e.global]),Object(u.jsx)("form",{children:Object(u.jsx)("div",{children:Object(u.jsx)(j.a,{id:"standard-select-country",select:!0,label:"Select",value:b,onChange:function(t){d(t.target.value),e.getOneCountry(t.target.value)},helperText:"Please select your Country",children:c.map((function(e,t){return Object(u.jsx)(s.a,{value:e,children:e},t)}))})})})})),O=n(94),h=n.n(O),g=n(263),f=n(267),x=n(266),y=n(262),v=n(264),p=n(265),m=n(261);var T=Object(i.b)((function(e){return{country:e.country,global:e.global}}),(function(e){return{}}))((function(e){var t=Object(r.useState)(),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){if(!e.country)return null;a(e.country)}),[e.country]),Object(u.jsx)(y.a,{component:m.a,children:Object(u.jsxs)(g.a,{"aria-label":"simple table",children:[Object(u.jsx)(v.a,{children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(x.a,{children:"Country"}),Object(u.jsx)(x.a,{align:"right",children:"Total Confirmed"}),Object(u.jsx)(x.a,{align:"right",children:"Total Recovered"}),Object(u.jsx)(x.a,{align:"right",children:"Total Deaths"}),Object(u.jsx)(x.a,{align:"right",children:"New Confirmed"}),Object(u.jsx)(x.a,{align:"right",children:"New Recovered"}),Object(u.jsx)(x.a,{align:"right",children:"New Deaths"})]})}),c?Object(u.jsx)(f.a,{children:c.map((function(e){return Object(u.jsxs)(p.a,{children:[Object(u.jsx)(x.a,{component:"th",scope:"row",children:e.Country}),Object(u.jsx)(x.a,{align:"right",children:e.TotalConfirmed}),Object(u.jsx)(x.a,{align:"right",children:e.TotalRecovered}),Object(u.jsx)(x.a,{align:"right",children:e.TotalDeaths}),Object(u.jsx)(x.a,{align:"right",children:e.NewConfirmed}),Object(u.jsx)(x.a,{align:"right",children:e.NewRecovered}),Object(u.jsx)(x.a,{align:"right",children:e.NewDeaths})]},e.ID)}))}):null]})})}));var C=Object(i.b)((function(e){return{global:e.global,country:e.country}}),(function(e){return{getGlobal:function(){return e((function(e){h.a.get("https://api.covid19api.com/summary",{headers:{Authorization:"5cf9dfd5-3449-485e-b5ae-70a60e997864"}}).then((function(t){e({type:"GET_GLOBAL_STATS",payload:t.data})})).catch((function(e){return console.log(e,"Error")}))}))}}}))((function(e){return Object(r.useEffect)((function(){e.getGlobal()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(b,{}),Object(u.jsx)(T,{})]})})),E=n(27),w=n(38),S={global:null,country:[]},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_GLOBAL_STATS":return Object(w.a)(Object(w.a)({},e),{},{global:t.payload});case"GET_ONE_COUNTRY":var n=e.global.Countries.filter((function(e){return e.Country===t.payload}));return Object(w.a)(Object(w.a)({},e),{},{country:n});default:return e}},D=n(95),N=n(96),R=Object(E.createStore)(G,Object(N.composeWithDevTools)(Object(E.applyMiddleware)(D.a)));a.a.render(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(i.a,{store:R,children:Object(u.jsx)(C,{})})}),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.8bd749ff.chunk.js.map