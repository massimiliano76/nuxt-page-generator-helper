(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{271:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var c=new Map;function l(e){if("undefined"==typeof IntersectionObserver)return null;var t=JSON.stringify(e);if(c.has(t))return c.get(t);var n=new IntersectionObserver((function(e){e.forEach((function(e){(e.isIntersecting||e.intersectionRatio>0)&&e.target.hydrate&&e.target.hydrate()}))}),e);return c.set(t,n),n}function f(e,t){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({render:function(t){var n=this.$el?this.$el.tagName:"div";return this.$el||e._resolve(),t(n)}},t)}function d(component){var e,t=new Promise((function(t){e=t}));return t._resolve=function(){e("function"==typeof component?component():component)},t}var v="undefined"==typeof window;function m(component){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.ignoredProps;if(v)return component;var n=d(component),r=f(n,{props:t,mounted:function(){if("requestIdleCallback"in window&&"requestAnimationFrame"in window){var e=requestIdleCallback((function(){requestAnimationFrame(n._resolve)}),{timeout:this.idleTimeout});n.then((function(){return cancelIdleCallback(e)}))}else n._resolve()}});return function(){return{component:n,delay:0,loading:r}}}function h(component){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.ignoredProps,n=e.observerOptions;if(v)return component;var r=d(component),o=l(n),c=f(r,{props:t,mounted:function(){var e=this;if(o){this.$el.hydrate=r._resolve;r.then((function(){return o.unobserve(e.$el)})),o.observe(this.$el)}else r._resolve()}});return function(){return{component:r,delay:0,loading:c}}}Boolean,Boolean,Boolean,Boolean,Boolean},272:function(e,t,n){"use strict";n(36),n(25);var r=n(4),o={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$getGeneratorRouteData,t.t0=Object,t.t1={},t.next=5,n();case 5:return t.t2=t.sent,"components"in(data=t.t0.assign.call(t.t0,t.t1,t.t2))&&(data.components=data.components.map((function(component,e){return component.data.options=component.data.options||{},e<2&&(component.data.options=Object.assign(component.data.options,{visible:!0})),component}))),t.abrupt("return",data);case 9:case"end":return t.stop()}}),t)})))()},data:function(){return{title:null,meta:null,components:[]}},head:function(){return{title:this.title,meta:this.meta||[]}}},c=n(8),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.components,(function(t,r){return n(t.component,e._b({key:r,tag:"component"},"component",t.data,!1))})),1)}),[],!1,null,null,null);t.a=component.exports},294:function(e,t,n){"use strict";n.r(t);n(16);var r=n(271),o={scrollToTop:!0,extends:n(272).a,nuxtI18n:{locales:["en","de"],paths:{en:"/page-2",de:"/seite-2"}},components:{PrefixText:Object(r.a)((function(){return n.e(0).then(n.bind(null,291))}))}},c=n(8),component=Object(c.a)(o,void 0,void 0,!1,null,null,null);t.default=component.exports}}]);