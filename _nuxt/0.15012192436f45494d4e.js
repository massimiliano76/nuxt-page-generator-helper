(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{215:function(e,t,n){var content=n(219);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("44c48928",content,!0,{sourceMap:!1})},216:function(e,t,n){var content=n(221);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("32e74472",content,!0,{sourceMap:!1})},217:function(e,t,n){var content=n(223);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("5664ce0e",content,!0,{sourceMap:!1})},218:function(e,t,n){"use strict";var l=n(215);n.n(l).a},219:function(e,t,n){(t=n(22)(!1)).push([e.i,".atom-headline[data-v-03282540]{font-family:sans-serif;font-style:normal;font-weight:400;line-height:1.5}.atom-headline>*[data-v-03282540]{display:block}.atom-headline.headline--h2 .overline[data-v-03282540],.atom-headline.headline--h2 .subline[data-v-03282540]{font-size:3.2vw;font-weight:400}@media (min-width:576px){.atom-headline.headline--h2 .overline[data-v-03282540],.atom-headline.headline--h2 .subline[data-v-03282540]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-03282540]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-03282540]{font-size:9.6vw;font-weight:700}@media (min-width:576px){.atom-headline.headline--h2 .headline[data-v-03282540]{font-size:36px}}",""]),e.exports=t},220:function(e,t,n){"use strict";var l=n(216);n.n(l).a},221:function(e,t,n){(t=n(22)(!1)).push([e.i,".atom-rich-text b[data-v-4cccb18a],.atom-rich-text em[data-v-4cccb18a],.atom-rich-text i[data-v-4cccb18a],.atom-rich-text strong[data-v-4cccb18a]{font-style:normal;font-weight:400}.atom-rich-text[data-v-4cccb18a]{font-family:sans-serif;font-size:4.26667vw;font-weight:400}@media (min-width:576px){.atom-rich-text[data-v-4cccb18a]{font-size:16px}}.font_raleway .js--visible .atom-rich-text[data-v-4cccb18a]{font-family:Raleway,sans-serif}",""]),e.exports=t},222:function(e,t,n){"use strict";var l=n(217);n.n(l).a},223:function(e,t,n){(t=n(22)(!1)).push([e.i,"",""]),e.exports=t},224:function(e,t,n){var content=n(229);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("3be3511a",content,!0,{sourceMap:!1})},227:function(e,t,n){"use strict";var l=n(13),o={props:{tag:{type:String,required:!1,default:function(){return"h1"}},overline:{type:String,required:!1,default:function(){return"Lorem Overline"}},headline:{type:String,required:!1,default:function(){return"Lorem Headline"}},subline:{type:String,required:!1,default:function(){return"Lorem Subline"}}},computed:{styleClasses:function(){return Object(l.a)({},"headline--".concat(this.tag),!0)}}},r=(n(218),n(5)),c=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?n("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"03282540",null).exports,h={props:{content:{type:String,required:!1,default:"<p>Example Text</p>"}}},d=(n(220),{components:{AtomHeadline:c,AtomRichText:Object(r.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"atom-rich-text"},[this.$slots.default?this._e():t("div",{domProps:{innerHTML:this._s(this.content)}}),this._v(" "),this._t("default")],2)}),[],!1,null,"4cccb18a",null).exports},props:{headline:{type:Object,default:function(){return{overline:"Article Overline",headline:"Article Headline",subline:"Article Subline"}}},content:{type:String,default:function(){return"<p>Example Text</p>"}}}}),f=(n(222),Object(r.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("article",{staticClass:"molecule-article"},[this.headline?t("header",[t("atom-headline",this._b({attrs:{tag:"h2"}},"atom-headline",this.headline,!1))],1):this._e(),this._v(" "),this._t("default",[t("atom-rich-text",{attrs:{content:this.content}})])],2)}),[],!1,null,null,null));t.a=f.exports},228:function(e,t,n){"use strict";var l=n(224);n.n(l).a},229:function(e,t,n){(t=n(22)(!1)).push([e.i,"",""]),e.exports=t},236:function(e,t,n){"use strict";n.r(t);var l=n(131),o=n(227),r={components:{LayoutDefaultContainer:l.a,MoleculeContentArticle:o.a},props:{options:{type:Object,default:function(){return null}},article:{type:Object,default:function(){return{headline:{overline:"Text Overline",headline:"Text Headline",subline:"Text Subline"},content:"<p>Example Text</p>"}}}}},c=(n(228),n(5)),component=Object(c.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("layout-default-container",this._b({staticClass:"organism-text"},"layout-default-container",this.options,!1),[t("molecule-content-article",this._b({},"molecule-content-article",this.article,!1))],1)}),[],!1,null,null,null);t.default=component.exports}}]);