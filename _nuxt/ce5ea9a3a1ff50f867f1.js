(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{295:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return f})),e.d(n,"c",(function(){return d}));var r=e(296),c=e(0),o=Object(c.h)("v-card__actions"),l=Object(c.h)("v-card__subtitle"),f=Object(c.h)("v-card__text"),d=Object(c.h)("v-card__title");r.a},311:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));e(52),e(5),e(4),e(9);var r=e(1);function c(t){return r.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,e){var r=e.props,data=e.data,c=e.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var o=data.attrs;if(o){data.attrs={};var l=Object.keys(o).filter((function(t){if("slot"===t)return!1;var n=o[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),n(r.tag,data,c)}})}},312:function(t,n,e){"use strict";e(174);var r=e(311);n.a=Object(r.a)("flex")},313:function(t,n,e){"use strict";e(174);var r=e(311);n.a=Object(r.a)("layout")},314:function(t,n,e){"use strict";e(10),e(8);var r=e(2),c=(e(65),e(176),e(37),e(5),e(4),e(9),e(33),e(34),e(175),e(1)),o=e(64),l=e(0);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var d=["sm","md","lg","xl"],v=["start","end","center"];function j(t,n){return d.reduce((function(e,r){return e[t+Object(l.r)(r)]=n(),e}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},m=j("align",(function(){return{type:String,default:null,validator:y}})),O=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},h=j("justify",(function(){return{type:String,default:null,validator:O}})),w=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},C=j("alignContent",(function(){return{type:String,default:null,validator:w}})),_={align:Object.keys(m),justify:Object.keys(h),alignContent:Object.keys(C)},x={align:"align",justify:"justify",alignContent:"align-content"};function S(t,n,e){var r=x[t];if(null!=e){if(n){var c=n.replace(t,"");r+="-".concat(c)}return(r+="-".concat(e)).toLowerCase()}}var P=new Map;n.a=c.a.extend({name:"v-row",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},m,{justify:{type:String,default:null,validator:O}},h,{alignContent:{type:String,default:null,validator:w}},C),render:function(t,n){var e=n.props,data=n.data,c=n.children,l="";for(var f in e)l+=String(e[f]);var d=P.get(l);return d||function(){var t,n;for(n in d=[],_)_[n].forEach((function(t){var r=e[t],c=S(n,t,r);c&&d.push(c)}));d.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),P.set(l,d)}(),t(e.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},325:function(t,n,e){var content=e(354);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("43309912",content,!0,{sourceMap:!1})},352:function(t,n,e){t.exports=e.p+"img/6485c69.jpg"},353:function(t,n,e){"use strict";var r=e(325);e.n(r).a},354:function(t,n,e){(n=e(11)(!1)).push([t.i,".aboutme{text-align:left}",""]),t.exports=n},361:function(t,n,e){"use strict";e.r(n);e(353);var r=e(38),c={components:{Aboutme:Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticStyle:{"text-align":"left"}},[this._v("\n   はじめまして。平成7年生まれ、神戸大学工学部機械工学科卒、滋賀県在住の中村と申します。\n  友人とアプリ開発を行った事をきっかけにWeb開発に興味を持ち、\n  もっと色々なものを作ってみたい！と強く思い、現在フロントエンド、サーバーサイド共に独学で勉強中です。\n  "),n("br"),this._v(" "),n("br")])}],!1,null,null,null).exports},data:function(){return{}}},o=e(53),l=e.n(o),f=e(127),d=e(296),v=e(295),j=e(305),y=e(312),m=e(124),O=e(313),h=e(77),w=e(47),C=e(314),_=Object(r.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-layout",{staticClass:"bg"},[n("v-flex",{staticClass:"text-center mt-5"},[n("v-row",{attrs:{wrap:"",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-card",{attrs:{flat:"",height:"400px"}},[n("v-list-item",[n("v-list-item-content",[n("v-avatar",{staticClass:"mt-5",attrs:{size:"150"}},[n("img",{attrs:{src:e(352),alt:"me"}})]),this._v(" "),n("v-list-item-title",{staticClass:"headline mt-5"},[n("div",{staticClass:"m-custom mr-5"},[n("v-icon",{staticClass:"mb-1",attrs:{left:"",color:"c2"}},[this._v("mdi-account")]),this._v("ABOUT ME\n                ")],1)])],1)],1),this._v(" "),n("v-card-text",[n("aboutme")],1)],1)],1)],1)],1)],1)}),[],!1,null,"f42f8f60",null);n.default=_.exports;l()(_,{VAvatar:f.a,VCard:d.a,VCardText:v.b,VCol:j.a,VFlex:y.a,VIcon:m.a,VLayout:O.a,VListItem:h.a,VListItemContent:w.a,VListItemTitle:w.b,VRow:C.a})}}]);