(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c2ba11b"],{"1d11":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(n){t.isLoading=n}}}),e("div",[t._v("products")]),t._l(t.products,(function(n){return e("div",{key:n.id},[e("span",[t._v(t._s(n.title))]),e("span",[t._v(t._s(n.content))]),e("span",[t._v(t._s(n.origin_price))]),e("router-link",{attrs:{to:"/product/"+n.id}},[t._v("詳細內容")])],1)}))],2)},r=[],c=(e("99af"),{data:function(){return{isLoading:!1,products:[]}},created:function(){var t=this;this.isLoading=!0,this.$http.get("".concat("https://course-ec-api.hexschool.io","/").concat("2b3d8952-95e7-4cb1-a50e-78c76f622c8c","/ec/products")).then((function(n){t.isLoading=!1,t.products=n.data.data,console.log(n)}))}}),i=c,a=e("2877"),d=Object(a["a"])(i,o,r,!1,null,null,null);n["default"]=d.exports},"99af":function(t,n,e){"use strict";var o=e("23e7"),r=e("d039"),c=e("e8b5"),i=e("861d"),a=e("7b0b"),d=e("50c4"),s=e("8418"),u=e("65f0"),f=e("1dde"),p=e("b622"),l=e("2d00"),v=p("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",b=l>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),_=f("concat"),w=function(t){if(!i(t))return!1;var n=t[v];return void 0!==n?!!n:c(t)},k=!b||!_;o({target:"Array",proto:!0,forced:k},{concat:function(t){var n,e,o,r,c,i=a(this),f=u(i,0),p=0;for(n=-1,o=arguments.length;n<o;n++)if(c=-1===n?i:arguments[n],w(c)){if(r=d(c.length),p+r>h)throw TypeError(g);for(e=0;e<r;e++,p++)e in c&&s(f,p,c[e])}else{if(p>=h)throw TypeError(g);s(f,p++,c)}return f.length=p,f}})}}]);
//# sourceMappingURL=chunk-0c2ba11b.bf0141d0.js.map