(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{199:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return O}));var c=new Map;function l(e){if("undefined"==typeof IntersectionObserver)return null;var n=JSON.stringify(e);if(c.has(n))return c.get(n);var t=new IntersectionObserver((function(e){e.forEach((function(e){(e.isIntersecting||e.intersectionRatio>0)&&e.target.hydrate&&e.target.hydrate()}))}),e);return c.set(n,t),t}function f(e,n){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(n){r(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({render:function(n){var t=this.$el?this.$el.tagName:"div";return this.$el||e._resolve(),n(t)}},n)}function d(component){var e,n=new Promise((function(n){e=n}));return n._resolve=function(){e("function"==typeof component?component():component)},n}var v="undefined"==typeof window;function m(component){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.ignoredProps;if(v)return component;var t=d(component),r=f(t,{props:n,mounted:function(){if("requestIdleCallback"in window&&"requestAnimationFrame"in window){var e=requestIdleCallback((function(){requestAnimationFrame(t._resolve)}),{timeout:this.idleTimeout});t.then((function(){return cancelIdleCallback(e)}))}else t._resolve()}});return function(){return{component:t,delay:0,loading:r}}}function O(component){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.ignoredProps,t=e.observerOptions;if(v)return component;var r=d(component),o=l(t),c=f(r,{props:n,mounted:function(){var e=this;if(o){this.$el.hydrate=r._resolve;r.then((function(){return o.unobserve(e.$el)})),o.observe(this.$el)}else r._resolve()}});return function(){return{component:r,delay:0,loading:c}}}Boolean,Boolean,Boolean,Boolean,Boolean},200:function(e,n,t){"use strict";t(31);var r=t(3),o={asyncData:e=>Object(r.a)((function*(){var{$getGeneratorRouteData:n}=e,data=Object.assign({},yield n());return"components"in data&&(data.components=data.components.map((component,e)=>(component.data.options=component.data.options||{},e<2&&(component.data.options=Object.assign(component.data.options,{visible:!0})),component))),data}))(),data:()=>({title:null,meta:null,components:[]}),head(){return{title:this.title,meta:this.meta||[]}}},c=t(4),component=Object(c.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",e._l(e.components,(function(n,r){return t(n.component,e._b({key:r,tag:"component"},"component",n.data,!1))})),1)}),[],!1,null,null,null);n.a=component.exports},222:function(e,n,t){"use strict";t.r(n);t(10);var r=t(199),o={scrollToTop:!0,extends:t(200).a,nuxtI18n:{locales:["en","de"],paths:{en:"/page-1",de:"/seite-1"}},components:{PrefixText:Object(r.a)(()=>t.e(0).then(t.bind(null,220)))}},c=t(4),component=Object(c.a)(o,void 0,void 0,!1,null,null,null);n.default=component.exports}}]);