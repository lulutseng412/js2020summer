(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22afd0a3"],{"1d11":function(t,n,r){"use strict";r.r(n);var o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(n){t.isLoading=n}}}),r("div",[t._v("products")]),t._l(t.products,(function(n){return r("div",{key:n.id},[r("span",[t._v(t._s(n.title))]),r("span",[t._v(t._s(n.content))]),r("span",[t._v(t._s(n.origin_price))]),r("router-link",{attrs:{to:"/product/"+n.id}},[t._v("詳細內容")])],1)}))],2)},e=[],c=(r("99af"),{data:function(){return{isLoading:!1,products:[]}},created:function(){var t=this;this.isLoading=!0,this.$http.get("".concat("https://course-ec-api.hexschool.io","/").concat("2b3d8952-95e7-4cb1-a50e-78c76f622c8c","/ec/products")).then((function(n){t.isLoading=!1,t.products=n.data.data,console.log(n)}))}}),i=c,a=r("2877"),u=Object(a["a"])(i,o,e,!1,null,null,null);n["default"]=u.exports},"1dde":function(t,n,r){var o=r("d039"),e=r("b622"),c=r("2d00"),i=e("species");t.exports=function(t){return c>=51||!o((function(){var n=[],r=n.constructor={};return r[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"65f0":function(t,n,r){var o=r("861d"),e=r("e8b5"),c=r("b622"),i=c("species");t.exports=function(t,n){var r;return e(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!e(r.prototype)?o(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},8418:function(t,n,r){"use strict";var o=r("c04e"),e=r("9bf2"),c=r("5c6c");t.exports=function(t,n,r){var i=o(n);i in t?e.f(t,i,c(0,r)):t[i]=r}},"99af":function(t,n,r){"use strict";var o=r("23e7"),e=r("d039"),c=r("e8b5"),i=r("861d"),a=r("7b0b"),u=r("50c4"),s=r("8418"),d=r("65f0"),f=r("1dde"),p=r("b622"),v=r("2d00"),l=p("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",g=v>=51||!e((function(){var t=[];return t[l]=!1,t.concat()[0]!==t})),_=f("concat"),y=function(t){if(!i(t))return!1;var n=t[l];return void 0!==n?!!n:c(t)},w=!g||!_;o({target:"Array",proto:!0,forced:w},{concat:function(t){var n,r,o,e,c,i=a(this),f=d(i,0),p=0;for(n=-1,o=arguments.length;n<o;n++)if(c=-1===n?i:arguments[n],y(c)){if(e=u(c.length),p+e>h)throw TypeError(b);for(r=0;r<e;r++,p++)r in c&&s(f,p,c[r])}else{if(p>=h)throw TypeError(b);s(f,p++,c)}return f.length=p,f}})},e8b5:function(t,n,r){var o=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-22afd0a3.468172ff.js.map