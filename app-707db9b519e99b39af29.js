webpackJsonp([0xd2a57dc1d883],{134:function(n,e,t){"use strict";function o(n,e,t){var o=u.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function a(n,e,t){return u.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=a;var u=[{plugin:t(428),options:{plugins:[]}},{plugin:t(427),options:{plugins:[],trackingId:"UA-116899380-1",head:!1,anonymize:!0,respectDNT:!0}}]},268:function(n,e,t){"use strict";var o;e.components={"component---src-templates-blog-archive-js":t(404),"component---src-templates-blog-post-js":t(405),"component---src-templates-tags-js":t(406),"component---src-pages-404-js":t(398),"component---src-pages-about-js":t(399),"component---src-pages-index-js":t(400),"component---src-pages-page-2-js":t(401),"component---src-pages-projects-2-js":t(402),"component---src-pages-tags-js":t(403)},e.json=(o={"layout-index.json":t(10),"projects.json":t(416)},o["layout-index.json"]=t(10),o["blog.json"]=t(410),o["layout-index.json"]=t(10),o["blog-2018-3-1-laravel-react-example.json"]=t(413),o["layout-index.json"]=t(10),o["blog-2018-2-27-pandas-eating-treats.json"]=t(411),o["layout-index.json"]=t(10),o["blog-2018-2-28-pandas-and-bananas.json"]=t(412),o["layout-index.json"]=t(10),o["projects-test-project.json"]=t(418),o["layout-index.json"]=t(10),o["tags-design.json"]=t(420),o["layout-index.json"]=t(10),o["tags-development.json"]=t(421),o["layout-index.json"]=t(10),o["tags-react.json"]=t(424),o["layout-index.json"]=t(10),o["tags-github.json"]=t(423),o["layout-index.json"]=t(10),o["tags-gatsbyjs.json"]=t(422),o["layout-index.json"]=t(10),o["tags-ssg.json"]=t(425),o["layout-index.json"]=t(10),o["tags-static-site-generator.json"]=t(426),o["layout-index.json"]=t(10),o["404.json"]=t(407),o["layout-index.json"]=t(10),o["about.json"]=t(409),o["layout-index.json"]=t(10),o["index.json"]=t(414),o["layout-index.json"]=t(10),o["page-2.json"]=t(415),o["layout-index.json"]=t(10),o["projects-2.json"]=t(417),o["layout-index.json"]=t(10),o["tags.json"]=t(419),o["layout-index.json"]=t(10),o["404-html.json"]=t(408),o),e.layouts={"layout---index":t(397)}},269:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function r(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),c=o(i),l=t(6),p=o(l),f=t(199),d=o(f),m=t(97),g=o(m),h=t(134),y=t(557),j=o(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(t){a(this,e);var o=u(this,n.call(this)),r=t.location;return d.default.getPage(r.pathname)||(r=s({},r,{pathname:"/404.html"})),o.state={location:r,pageResources:d.default.getResourcesForPathname(r.pathname)},o}return r(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},97:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(457),u=o(a),r=(0,u.default)();n.exports=r},270:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(115),u=t(200),r=o(u),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),u=(0,r.default)(o,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),s[u])return s[u];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(u,{path:n.path})||(0,a.matchPath)(u,{path:n.matchPath}))return i=n,s[u]=n,!0}else{if((0,a.matchPath)(u,{path:n.path,exact:!0}))return i=n,s[u]=n,!0;if((0,a.matchPath)(u,{path:n.path+"index.html"}))return i=n,s[u]=n,!0}return!1}),i}}},271:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(168),u=o(a),r=t(134),s=(0,r.apiRunner)("replaceHistory"),i=s[0],c=i||(0,u.default)();n.exports=c},408:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(435)})})}},407:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(436)})})}},409:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(437)})})}},411:function(n,e,t){t(3),n.exports=function(n){return t.e(91202308160004,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(438)})})}},412:function(n,e,t){t(3),n.exports=function(n){return t.e(1676261814342,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(439)})})}},413:function(n,e,t){t(3),n.exports=function(n){return t.e(0x99ed4fc7178c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(440)})})}},410:function(n,e,t){t(3),n.exports=function(n){return t.e(49683490770531,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(441)})})}},414:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(442)})})}},10:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(172)})})}},415:function(n,e,t){t(3),n.exports=function(n){return t.e(0x7b71d9db271c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(443)})})}},417:function(n,e,t){t(3),n.exports=function(n){return t.e(21088068424507,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(444)})})}},418:function(n,e,t){t(3),n.exports=function(n){return t.e(62168203033015,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(445)})})}},416:function(n,e,t){t(3),n.exports=function(n){return t.e(97786326051841,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(446)})})}},420:function(n,e,t){t(3),n.exports=function(n){return t.e(65951750749414,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(447)})})}},421:function(n,e,t){t(3),n.exports=function(n){return t.e(54666243603918,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(448)})})}},422:function(n,e,t){t(3),n.exports=function(n){return t.e(0x658b977d7911,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(449)})})}},423:function(n,e,t){t(3),n.exports=function(n){return t.e(0xed28d567e2ba,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(450)})})}},424:function(n,e,t){t(3),n.exports=function(n){return t.e(84586273293571,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(451)})})}},425:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa35754665831,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(452)})})}},426:function(n,e,t){t(3),n.exports=function(n){return t.e(31476404220724,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(453)})})}},419:function(n,e,t){t(3),n.exports=function(n){return t.e(55702396619907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(454)})})}},397:function(n,e,t){t(3),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(272)})})}},199:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=t(1),u=(o(a),t(270)),r=o(u),s=t(97),i=o(s),c=t(200),l=o(c),p=void 0,f={},d={},m={},g={},h={},y=[],j=[],x={},v="",b=[],R={},C=function(n){return n&&n.default||n},N=void 0,w=!0,_=[],k={},P={},E=5;N=t(273)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){S(n,function(){b=b.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var O=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},L=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){t(null,g[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){g[e]=o,_.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),_=_.slice(-E),t(n,o)})}},A=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):P[e]?n.nextTick(function(){t(P[e])}):S(e,function(n,o){if(n)t(n);else{var a=C(o());h[e]=a,t(n,a)}})},D=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=_.find(function(n){return n.succeeded});return!!e},T=function(n,e){console.log(e),k[n]||(k[n]=e),D()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){j=[],x={},R={},b=[],y=[],v=""},addPagesArray:function(n){y=n,v="",p=(0,r.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var t=1/U;U+=1,x[e]?x[e]+=1:x[e]=1,M.has(e)||j.unshift(e),j.sort(L);var o=p(e);return o.jsonName&&(R[o.jsonName]?R[o.jsonName]+=1+t:R[o.jsonName]=1+t,b.indexOf(o.jsonName)!==-1||g[o.jsonName]||b.unshift(o.jsonName)),o.componentChunkName&&(R[o.componentChunkName]?R[o.componentChunkName]+=1+t:R[o.componentChunkName]=1+t,b.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||b.unshift(o.componentChunkName)),b.sort(O),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:R}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return p(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var a;if(t){if(o>=e.length)break;a=e[o++]}else{if(o=e.next(),o.done)break;a=o.value}var u=a;u.unregister()}window.location.reload()}})),w=!1;if(k[e])return T(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return T(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var a=void 0,u=void 0,r=void 0,s=function(){if(a&&u&&(!o.layoutComponentChunkName||r)){m[e]={component:a,json:u,layout:r,page:o};var n={component:a,json:u,layout:r,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return A(o.componentChunkName,function(n,e){n&&T(o.path,"Loading the component for "+o.path+" failed"),a=e,s()}),A(o.jsonName,function(n,e){n&&T(o.path,"Loading the JSON for "+o.path+" failed"),u=e,s()}),void(o.layoutComponentChunkName&&A(o.layout,function(n,e){n&&T(o.path,"Loading the Layout for "+o.path+" failed"),r=e,s()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,t(23))},455:function(n,e){n.exports=[{componentChunkName:"component---src-templates-blog-archive-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects.json",path:"/projects"},{componentChunkName:"component---src-templates-blog-archive-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog.json",path:"/blog"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-2018-3-1-laravel-react-example.json",path:"/blog/2018-3-1-laravel-react-example/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-2018-2-27-pandas-eating-treats.json",path:"/blog/2018-2-27-pandas-eating-treats/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-2018-2-28-pandas-and-bananas.json",path:"/blog/2018-2-28-pandas-and-bananas/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects-test-project.json",path:"/projects/test-project/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-design.json",path:"/tags/design/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-development.json",path:"/tags/development/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-react.json",path:"/tags/react/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-github.json",path:"/tags/github/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-gatsbyjs.json",path:"/tags/gatsbyjs/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-ssg.json",path:"/tags/ssg/"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-static-site-generator.json",path:"/tags/static-site-generator/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-page-2-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-projects-2-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects-2.json",path:"/projects2/"},{componentChunkName:"component---src-pages-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags.json",path:"/tags/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},273:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],a=[],u=function(){var n=e();n&&(a.push(n),t(n))},r=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&u()},0)};return{onResourcedFinished:function(n){r({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},u=t(134),r=t(1),s=o(r),i=t(237),c=o(i),l=t(115),p=t(432),f=t(382),d=o(f),m=t(170),g=t(271),h=o(g),y=t(97),j=o(y),x=t(455),v=o(x),b=t(456),R=o(b),C=t(269),N=o(C),w=t(268),_=o(w),k=t(199),P=o(k);t(304),window.___history=h.default,window.___emitter=j.default,P.default.addPagesArray(v.default),P.default.addProdRequires(_.default),window.asyncRequires=_.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=R.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};O(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var a=n.location.pathname;if(a===t)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&t(274);var o=function(n){function e(n){n.page.path===P.default.getPage(o).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(r),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,h.default.location),o=t.pathname,a=E[o];a&&(o=a.toPath);var u=window.location;if(u.pathname!==t.pathname||u.search!==t.search||u.hash!==t.hash){var r=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(r),window.___history.push(t)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,u.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=!1,f=(0,u.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,r.createElement)(f?f:g,null,(0,r.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,r.createElement)(y,{layout:!0,children:function(e){return(0,r.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,r.createElement)(N.default,a({page:!0},o)):(0,r.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,u.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},456:function(n,e){n.exports=[]},274:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(97),u=o(a),r="/";r="/","serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},200:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},382:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",u=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return u||t.addEventListener(a,n=function(){for(t.removeEventListener(a,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),a=t.e,u=t.s;t.e=function(o,r){var s=!1,i=!0,c=function(n){r&&(r(t,n),r=null)};return!u&&e&&e[o]?void c(!0):(a(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,u?u[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},427:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview"))}},428:function(n,e){"use strict";e.onRouteUpdate=function(n){n.location;"undefined"!=typeof twttr&&window.twttr.widgets&&"function"==typeof window.twttr.widgets.load&&window.twttr.widgets.load()}},457:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},557:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},398:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(288)})})}},399:function(n,e,t){t(3),n.exports=function(n){return t.e(0xefeaa6d1881d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(289)})})}},400:function(n,e,t){t(3),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(290)})})}},401:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc6c285f8fd10,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(291)})})}},402:function(n,e,t){t(3),n.exports=function(n){return t.e(44039203776130,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(292)})})}},403:function(n,e,t){t(3),n.exports=function(n){return t.e(0xb2200a1b9a48,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(293)})})}},404:function(n,e,t){t(3),n.exports=function(n){return t.e(0x63dec1ebaa6c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(294)})})}},405:function(n,e,t){t(3),n.exports=function(n){return t.e(0x620f737b6699,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(295)})})}},406:function(n,e,t){t(3),n.exports=function(n){return t.e(50739212244294,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(296)})})}}});
//# sourceMappingURL=app-707db9b519e99b39af29.js.map