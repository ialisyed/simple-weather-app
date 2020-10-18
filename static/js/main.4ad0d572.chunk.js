(this["webpackJsonpsimple-weather-app"]=this["webpackJsonpsimple-weather-app"]||[]).push([[0],{107:function(e,t,a){e.exports=a(247)},112:function(e,t,a){},119:function(e,t,a){},247:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),o=(a(112),a(26)),i=a(17),u=a(7),s=(a(117),a(118),a(119),a(21)),E=a.n(s),m=a(25);function p(e,t){return{type:e,payload:t}}function d(e,t){return{type:e,payload:t}}var h="FETCH_WEATHER_REQUEST",f="FETCH_WEATHER_SUCCESS",v="FETCH_WEATHER_FAILURE",b=a(39),A=a(11),T={APP_ID:"75f972b80e26f14fe6c920aa6a85ad57",CITY_AND_STATE:"Munich,de",ICON_URL:"http://openweathermap.org/img/wn/".concat("{{icon}}}","@2x.png"),UNITS:{CELSIUS:"metric",FAHRENHEIT:"imperial"},DATA_KEYS_MAP:{CELSIUS:"celsiusData",FAHRENHEIT:"fahrenheitData"},DATE_FORMATS:{hh_mm_ss_a:"hh:mm:ss a",LL:"LL"}},S=a(93),g=a.n(S),_="https://api.openweathermap.org/data/2.5/forecast",O={q:T.CITY_AND_STATE,APPID:T.APP_ID};function C(){return(C=Object(m.a)(E.a.mark((function e(){var t,a,n=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"metric",a=Object(A.a)(Object(A.a)({},O),{},{cnt:40,units:t}),e.prev=2,e.abrupt("return",g.a.get(_,{params:a}).then((function(e){return e.data})));case 6:return e.prev=6,e.t0=e.catch(2),e.abrupt("return",[]);case 9:case"end":return e.stop()}}),e,null,[[2,6]])})))).apply(this,arguments)}function y(){return(y=Object(m.a)(E.a.mark((function e(){var t,a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([j(T.UNITS.CELSIUS),j(T.UNITS.FAHRENHEIT)]);case 2:return t=e.sent,a=Object(b.a)(t,2),n=a[0],r=a[1],e.abrupt("return",{celsiusData:n,fahrenheitData:r});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return function(){return C.apply(this,arguments)}(e).then((function(e){return function(e){var t={};return e.list.forEach((function(e){var a=e.dt_txt.split(" ")[0];t[a]?t[a].values.push(e):t[a]={values:[e]}})),Object.keys(t).forEach((function(e){var a=t[e].values.reduce((function(e,t){return{main:{temp:e.main.temp+t.main.temp}}}),{main:{temp:0}}).main.temp/t[e].values.length;t[e]=Object(A.a)(Object(A.a)({},t[e]),{},{tempAvg:a})})),t}(e)}))}var w={getWeatherData:function(){return y.apply(this,arguments)}};function I(){return function(){var e=Object(m.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:h,payload:void 0}),e.prev=1,e.next=4,w.getWeatherData();case 4:a=e.sent,t(p(f,a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(d(v,e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}var L=a(94),k=a.n(L),R=a(272),x=a(34),D=a.n(x),N=a(277),U=a(268),P=a(269),H=a(270),F=a(248),M={TEMPERATURE_UNIT:"Temperature Unit",CELCIUS:"Celcius",FAHRENHEIT:"Fahrenheit",DEGREE_CELCIUS:"\u2103",DEGREE_FAHRENHEIT:"\u2109",TEMPERATURE:"Temperature",TIME:"Time",TEMP_LABEL:"Temp:",DATE_LABEL:"Date:"};function B(){return r.a.createElement(r.a.Fragment,null,"\u2103")}function W(){return r.a.createElement(r.a.Fragment,null,"\u2109")}var Y=function(e){var t=e.isSelected,a=e.onClick,n=e.icon,c=e.temprature,l=e.unit,o=e.date;return r.a.createElement(N.a,{className:"mt-30",style:{backgroundColor:t?"#e8f4f8":"unset"}},r.a.createElement(U.a,{onClick:a},r.a.createElement(P.a,{image:T.ICON_URL.replace("{{icon}}}",n),className:"media"}),r.a.createElement(H.a,null,r.a.createElement(F.a,{gutterBottom:!0,variant:"h5",component:"h2"},M.TEMP_LABEL),r.a.createElement(F.a,{variant:"h3",color:"textSecondary",component:"p"},c.toFixed(2)," ",l===T.DATA_KEYS_MAP.CELSIUS?r.a.createElement(B,null):r.a.createElement(W,null)),r.a.createElement(F.a,{gutterBottom:!0,variant:"h5",component:"h2"},M.DATE_LABEL),r.a.createElement(F.a,{variant:"h5",color:"textSecondary",component:"p"},o))))},K=a(275),G=a(278),V=a(276),J=a(271),X=a(274);var q=function(e){var t=e.value,a=e.defaultValue,n=e.onChange;return r.a.createElement(K.a,{className:"mt-3 mb-3",component:"fieldset"},r.a.createElement(G.a,{component:"legend"},M.TEMPERATURE_UNIT),r.a.createElement(V.a,{row:!0,"aria-label":"temprature-unit",name:"temprature-unit",defaultValue:a,value:t,onChange:n},r.a.createElement(J.a,{value:T.DATA_KEYS_MAP.CELSIUS,control:r.a.createElement(X.a,{color:"primary"}),label:M.CELCIUS,labelPlacement:"end"}),r.a.createElement(J.a,{value:T.DATA_KEYS_MAP.FAHRENHEIT,control:r.a.createElement(X.a,{color:"primary"}),label:M.FAHRENHEIT,labelPlacement:"end"})))},Q=a(98);function $(e){var t=e.data,a=e.xAxisLabel,n=e.yAxisLabel,c=e.yAxisTicksCallBack;return r.a.createElement("div",{className:"mt-4"},r.a.createElement(Q.Bar,{data:t,height:350,options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{callback:c},scaleLabel:{display:!0,labelString:n}}],xAxes:[{scaleLabel:{display:!0,labelString:a}}]}}}))}$.defaultProps={yAxisTicksCallBack:function(e,t,a){return e}};var z=$;var Z=function(e){var t=e.className,a=e.style,n=e.onClick;return r.a.createElement("div",{className:"".concat(t," customArrow"),style:Object(A.a)(Object(A.a)({},a),{},{color:"black"}),onClick:n})},ee={dots:!0,infinite:!1,speed:500,slidesToScroll:3,slidesToShow:3,nextArrow:r.a.createElement(Z,null),prevArrow:r.a.createElement(Z,null),responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!1,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={labels:[],datasets:[{label:"",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[]}]};return e.forEach((function(e){t.labels.push(D()(e.dt_txt).format(T.DATE_FORMATS.hh_mm_ss_a)),t.datasets[0].data.push(e.main.temp)})),t}var ae=Object(o.b)((function(e){return{data:e.weather.data}}))((function(e){var t=e.data,a=Object(n.useState)(T.DATA_KEYS_MAP.CELSIUS),c=Object(b.a)(a,2),l=c[0],o=c[1],i=t[l],u=Object(n.useState)(Object.keys(i)[0]),s=Object(b.a)(u,2),E=s[0],m=s[1];return r.a.createElement(R.a,{maxWidth:"md"},r.a.createElement(q,{value:l,defaultValue:l,onChange:function(e){return o(e.target.value)}}),r.a.createElement(k.a,ee,Object.keys(i).map((function(e,t){return r.a.createElement(Y,{key:i[e].values[0].dt,isSelected:e===E,onClick:function(){return m(e)},icon:i[e].values[0].weather[0].icon,temprature:i[e].tempAvg,date:D()(e).format(T.DATE_FORMATS.LL),unit:l})}))),r.a.createElement(z,{data:te(i[E].values),yAxisLabel:M.TEMPERATURE,xAxisLabel:M.TIME,yAxisTicksCallBack:function(e,t,a){return e+(l===T.DATA_KEYS_MAP.CELSIUS?M.DEGREE_CELCIUS:M.DEGREE_FAHRENHEIT)}}))})),ne=a(273);var re=function(){return r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column mt-xl-5"},r.a.createElement("div",null,r.a.createElement(ne.a,null)),r.a.createElement("div",null,r.a.createElement("h3",{className:"loader"},"Loading...")))};var ce=Object(o.b)((function(e){return{loading:e.weather.loading}}),(function(e){return Object(i.b)({getWeather:I},e)}))(Object(u.e)((function(e){var t=e.getWeather;Object(n.useEffect)((function(){t()}),[t]);var a=r.a.createElement(u.a,{exact:!0,path:"/",component:e.loading?re:ae});return r.a.createElement("div",{className:"App"},a)})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=a(61),oe=a(99),ie={data:null,loading:!0},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(A.a)(Object(A.a)({},e),{},{loading:!0});case f:return Object(A.a)(Object(A.a)({},e),{},{data:t.payload,loading:!1});case v:return Object(A.a)(Object(A.a)({},e),{},{loading:!0});default:return e}},se=Object(i.c)({weather:ue}),Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,me=Object(i.e)(se,Ee(Object(i.a)(oe.a))),pe=(a(246),a(100)),de=a(101),he=a(103),fe=a(102),ve=function(e){Object(he.a)(a,e);var t=Object(fe.a)(a);function a(e){var n;return Object(pe.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(de.a)(a,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(r.a.Component),be=r.a.createElement(o.a,{store:me},r.a.createElement(le.a,null,r.a.createElement(ve,null,r.a.createElement(ce,null))));l.a.render(r.a.createElement(r.a.StrictMode,null,be),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.4ad0d572.chunk.js.map