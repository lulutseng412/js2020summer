(function(e){function n(n){for(var r,a,u=n[0],d=n[1],i=n[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);h&&h(n);while(f.length)f.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=d(d.s=t[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-22afd0a3":"6a78ddf1","chunk-2d0b2d16":"a9aded57","chunk-2d0bdcec":"0ef05ac2","chunk-2d0c431b":"cbe3862a","chunk-2d0c8ff5":"528576bf","chunk-2d0daa6d":"0af9b3d6","chunk-2d0e44ef":"0ae55b63","chunk-2d208c36":"790cec62","chunk-2d20e872":"fcb256a6","chunk-2d216ba9":"7d1e255c","chunk-2d2299ca":"9aa8afa3","chunk-3db1ae41":"0f0f1144","chunk-50e54a48":"75f51973"}[e]+".js"}function d(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-50e54a48":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-22afd0a3":"31d6cfe0","chunk-2d0b2d16":"31d6cfe0","chunk-2d0bdcec":"31d6cfe0","chunk-2d0c431b":"31d6cfe0","chunk-2d0c8ff5":"31d6cfe0","chunk-2d0daa6d":"31d6cfe0","chunk-2d0e44ef":"31d6cfe0","chunk-2d208c36":"31d6cfe0","chunk-2d20e872":"31d6cfe0","chunk-2d216ba9":"31d6cfe0","chunk-2d2299ca":"31d6cfe0","chunk-3db1ae41":"31d6cfe0","chunk-50e54a48":"a809bd0b"}[e]+".css",o=d.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],l=i.getAttribute("data-href");if(l===r||l===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],h.parentNode.removeChild(h),t(c)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=u(e);var f=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}o[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},d.m=e,d.c=r,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)d.d(t,r,function(n){return e[n]}.bind(null,r));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var h=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=t("bc3a"),o=t.n(a),c=t("a7fe"),u=t.n(c),d=t("9062"),i=t.n(d),l=(t("e40d"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),f=[],h=(t("5c0b"),t("2877")),p={},s=Object(h["a"])(p,l,f,!1,null,null,null),b=s.exports,m=(t("d3b7"),t("8c4f")),v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:""}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("首頁")]),e._v(" | "),t("router-link",{attrs:{to:"/products"}},[e._v("產品列表")]),e._v(" | "),t("router-link",{attrs:{to:"/cart"}},[e._v("購物車")]),e._v(" | "),t("router-link",{attrs:{to:"/pay"}},[e._v("結帳畫面")]),e._v(" | "),t("router-link",{attrs:{to:"/completepay"}},[e._v("完成結帳")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("關於")]),e._v(" | "),t("router-link",{attrs:{to:"/login"}},[e._v("登入")]),e._v(" | ")],1),t("router-view")],1)},k=[],g={},y=Object(h["a"])(g,v,k,!1,null,null,null),_=y.exports;r["a"].use(m["a"]);var w=[{path:"/",name:"Home",component:_,children:[{path:"about",name:"About",component:function(){return t.e("chunk-2d0c431b").then(t.bind(null,"3a90"))}},{path:"products",name:"Products",component:function(){return t.e("chunk-22afd0a3").then(t.bind(null,"1d11"))}},{path:"product/:id",name:"Product",component:function(){return t.e("chunk-3db1ae41").then(t.bind(null,"364f"))}},{path:"cart",name:"Cart",component:function(){return t.e("chunk-2d208c36").then(t.bind(null,"a5d0"))}},{path:"pay",name:"Pay",component:function(){return t.e("chunk-2d2299ca").then(t.bind(null,"ddd8"))}},{path:"completepay",name:"Completepay",component:function(){return t.e("chunk-2d0b2d16").then(t.bind(null,"2673"))}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-50e54a48").then(t.bind(null,"5d9f"))}},{path:"/dashboard",name:"Dashboard",component:function(){return t.e("chunk-2d0e44ef").then(t.bind(null,"9057"))},children:[{path:"products",name:"dashboardProducts",component:function(){return t.e("chunk-2d0daa6d").then(t.bind(null,"6d09"))}},{path:"product",name:"dashboardProduct",component:function(){return t.e("chunk-2d0c8ff5").then(t.bind(null,"56ec"))}},{path:"coupons",name:"dashboardCoupons",component:function(){return t.e("chunk-2d0bdcec").then(t.bind(null,"2e25"))}},{path:"orders",name:"dashboardOrders",component:function(){return t.e("chunk-2d20e872").then(t.bind(null,"b06d"))}},{path:"imagersview",name:"dashboardImagersview",component:function(){return t.e("chunk-2d216ba9").then(t.bind(null,"c468"))}}]}],O=new m["a"]({routes:w}),P=O;r["a"].config.productionTip=!1,r["a"].component("Loading",i.a),r["a"].use(u.a,o.a),new r["a"]({router:P,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),a=t.n(r);a.a},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.85b3aa21.js.map