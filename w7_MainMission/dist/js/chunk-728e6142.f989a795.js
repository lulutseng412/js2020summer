(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-728e6142"],{"1dde":function(t,a,e){var n=e("d039"),i=e("b622"),r=e("2d00"),s=i("species");t.exports=function(t){return r>=51||!n((function(){var a=[],e=a.constructor={};return e[s]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},"65f0":function(t,a,e){var n=e("861d"),i=e("e8b5"),r=e("b622"),s=r("species");t.exports=function(t,a){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?n(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===a?0:a)}},"6d09":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("h1",[t._v("後台產品列表")]),e("div",{staticClass:"container mt-3",attrs:{id:"app"}},[e("div",[e("div",{staticClass:"text-right mt-4"},[e("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.openModal("new")}}},[t._v("新增產品")])]),e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.products,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.category))]),e("td",[t._v(t._s(a.title))]),e("td",[t._v(t._s(a.origin_price))]),e("td",[t._v(t._s(a.price))]),e("td",[a.enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",[t._v("未啟用")])]),e("td",[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{disabled:t.loadingBtn===a.id},on:{click:function(e){return t.openModal("edit",a)}}},[t._v("編輯")]),e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{disabled:t.loadingBtn===a.id},on:{click:function(e){return t.openModal("delete",a)}}},[t._v("刪除")]),t.loadingBtn===a.id?e("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e()])])])})),0)]),e("pagination",{attrs:{pages:t.pagination},on:{updatepagenum:t.getProducts}})],1)])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"200"}},[t._v("分類")]),e("th",[t._v("標題")]),e("th",{attrs:{width:"100"}},[t._v("原價")]),e("th",{attrs:{width:"100"}},[t._v("售價")]),e("th",{attrs:{width:"100"}},[t._v("是否啟用")]),e("th",{attrs:{width:"150"}},[t._v("編輯")])])])}],r=(e("99af"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,n){return e("li",{key:n,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])}),s=[],o={name:"Pagination",props:{pages:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{emitPages:function(t){this.$emit("updatepagenum",t)}}},c=o,u=e("2877"),d=Object(u["a"])(c,r,s,!1,null,null,null),l=d.exports,p={components:{Pagination:l},data:function(){return{products:[],tempProduct:{imageUrl:[]},pagination:{},api:{uuid:"2b3d8952-95e7-4cb1-a50e-78c76f622c8c",path:"https://course-ec-api.hexschool.io"},token:"",isNew:"",isLoading:!1,loadingBtn:""}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat(this.api.path,"/api/").concat(this.api.uuid,"/admin/ec/products?page=").concat(a);this.$http.get(e).then((function(a){t.products=a.data.data,t.pagination=a.data.meta.pagination,t.isLoading=!1}))}}},g=p,f=Object(u["a"])(g,n,i,!1,null,null,null);a["default"]=f.exports},8418:function(t,a,e){"use strict";var n=e("c04e"),i=e("9bf2"),r=e("5c6c");t.exports=function(t,a,e){var s=n(a);s in t?i.f(t,s,r(0,e)):t[s]=e}},"99af":function(t,a,e){"use strict";var n=e("23e7"),i=e("d039"),r=e("e8b5"),s=e("861d"),o=e("7b0b"),c=e("50c4"),u=e("8418"),d=e("65f0"),l=e("1dde"),p=e("b622"),g=e("2d00"),f=p("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",b=g>=51||!i((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),_=l("concat"),m=function(t){if(!s(t))return!1;var a=t[f];return void 0!==a?!!a:r(t)},w=!b||!_;n({target:"Array",proto:!0,forced:w},{concat:function(t){var a,e,n,i,r,s=o(this),l=d(s,0),p=0;for(a=-1,n=arguments.length;a<n;a++)if(r=-1===a?s:arguments[a],m(r)){if(i=c(r.length),p+i>v)throw TypeError(h);for(e=0;e<i;e++,p++)e in r&&u(l,p,r[e])}else{if(p>=v)throw TypeError(h);u(l,p++,r)}return l.length=p,l}})},e8b5:function(t,a,e){var n=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-728e6142.f989a795.js.map