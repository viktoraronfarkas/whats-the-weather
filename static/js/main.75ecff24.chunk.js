(this["webpackJsonpwhats-the-weather"]=this["webpackJsonpwhats-the-weather"]||[]).push([[0],[,,,,,function(e,t,i){e.exports={container:"City_container__315wi",title:"City_title__3Jdc0",closeIcon:"City_closeIcon__1KZRR"}},,,,,function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),l=i(4),c=i.n(l),s=(i(10),i(11),i(3)),o=i.n(s),d=i(5),r=i.n(d),u=i(0),h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?window.localStorage.getItem("cities")?window.localStorage.getItem("cities").split(","):[]:e?void 0:window.localStorage.getItem("cities")?window.localStorage.getItem("cities"):""},j=function(){var e=h(),t=o()("#cityInput").val();if(t&&!e.includes(t)){var i="";i=""===e?e+t:e+","+t,window.localStorage.setItem("cities",i),window.location.reload()}},v=function(e){var t=e.target.getAttribute("data-js-name"),i=h();-1!==i.indexOf(t+",")?window.localStorage.setItem("cities",i.replace(t+",","")):-1!==i.indexOf(t)&&window.localStorage.setItem("cities",i.replace(t,"")),window.location.reload()},p=function(e){var t,i,a,n,l,c,s,o,d,h,j,p,w,x,m,b,O=e.data.list?null===e||void 0===e||null===(t=e.data)||void 0===t||null===(i=t.list[0])||void 0===i?void 0:i.name:"",f=e.data.list[0]?null===e||void 0===e||null===(a=e.data)||void 0===a||null===(n=a.list[0])||void 0===n||null===(l=n.main)||void 0===l?void 0:l.temp:"",g=e.data.list[0]?null===e||void 0===e||null===(c=e.data)||void 0===c||null===(s=c.list[0])||void 0===s||null===(o=s.main)||void 0===o?void 0:o.feels_like:"",y=e.data.list[0]?null===e||void 0===e||null===(d=e.data)||void 0===d||null===(h=d.list[0])||void 0===h||null===(j=h.clouds)||void 0===j?void 0:j.all:"",C=e.data.list[0]?null===e||void 0===e||null===(p=e.data)||void 0===p||null===(w=p.list[0])||void 0===w||null===(x=w.main)||void 0===x?void 0:x.pressure:"",I=e.data.list[0]?null===e||void 0===e||null===(m=e.data)||void 0===m||null===(b=m.list[0])||void 0===b?void 0:b.weather[0].description:"",_=r.a;return Object(u.jsxs)("div",{className:_.container,children:[Object(u.jsx)("h3",{className:_.title,children:O}),Object(u.jsx)("svg",{className:_.closeIcon,onClick:v,"data-js-name":O,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512",children:Object(u.jsx)("path",{fill:"currentColor","data-js-name":O,d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"})}),Object(u.jsxs)("h4",{children:["Current temperature: ",Object(u.jsxs)("span",{children:[f," \xb0C"]})]}),Object(u.jsxs)("h4",{children:["Feels like: ",Object(u.jsxs)("span",{children:[g," \xb0C"]})]}),Object(u.jsxs)("h4",{children:["Cloudiness: ",Object(u.jsxs)("span",{children:[y,"%"]})]}),Object(u.jsxs)("h4",{children:["Atmospheric pressure: ",Object(u.jsxs)("span",{children:[C," hPa"]})]}),Object(u.jsxs)("h4",{children:["Current weather: ",Object(u.jsx)("span",{children:I})]})]})},w=function(){var e=h(!0),t=[];return e.forEach((function(e){t.push(function(e){var t={};return o.a.ajax({type:"GET",url:"http://api.openweathermap.org/data/2.5/find?q=".concat(e,"&units=metric&appid=").concat("db7a5de4d8ac400c592113fcc1a3e863"),dataType:"json",async:!1,success:function(e){t=e}}),t}(e))})),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("h1",{children:"What's the weather like?"}),Object(u.jsx)("h3",{children:"Add your cities and see what the weather is like at those locations."}),Object(u.jsx)("input",{type:"text",id:"cityInput",placeholder:"Enter a city.."}),Object(u.jsx)("button",{onClick:j,children:"Add city"}),Object(u.jsx)("div",{className:"CitiesContainer",children:t.map((function(e){return Object(u.jsx)(p,{data:e})}))})]})})};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.75ecff24.chunk.js.map