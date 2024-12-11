/*! For license information please see vendors.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_dev_kit=self.webpackChunkweb_dev_kit||[]).push([[96],{208:function(e,t,n){n.d(t,{fY:function(){return b},mh:function(){return p}});var o=!1;if("undefined"!=typeof window){var r={get passive(){o=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),a=[],u=!1,c=-1,l=void 0,s=void 0,d=void 0,f=function(e){return a.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},v=function(e){var t=e||window.event;return!!f(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},p=function(e,t){if(e){if(!a.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};a=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(a),[n]),i?window.requestAnimationFrame((function(){if(void 0===s){s={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,o=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=o-window.innerHeight;e&&t>=o&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===d){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);d=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===l&&(l=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-c;!f(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?v(e):e.stopPropagation())}(t,e)},u||(document.addEventListener("touchmove",v,o?{passive:!1}:void 0),u=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},b=function(e){e?(a=a.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,u&&0===a.length&&(document.removeEventListener("touchmove",v,o?{passive:!1}:void 0),u=!1)),i?function(){if(void 0!==s){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=s.position,document.body.style.top=s.top,document.body.style.left=s.left,window.scrollTo(t,e),s=void 0}}():(void 0!==d&&(document.body.style.paddingRight=d,d=void 0),void 0!==l&&(document.body.style.overflow=l,l=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},78:function(e,t,n){n.d(t,{K:function(){return C}});var o=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],r=o.join(","),i="undefined"==typeof Element,a=i?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=!i&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},c=function e(t,n){var o;void 0===n&&(n=!0);var r=null==t||null===(o=t.getAttribute)||void 0===o?void 0:o.call(t,"inert");return""===r||"true"===r||n&&t&&e(t.parentNode)},l=function(e,t,n){if(c(e))return[];var o=Array.prototype.slice.apply(e.querySelectorAll(r));return t&&a.call(e,r)&&o.unshift(e),o.filter(n)},s=function e(t,n,o){for(var i=[],u=Array.from(t);u.length;){var l=u.shift();if(!c(l,!1))if("SLOT"===l.tagName){var s=l.assignedElements(),d=e(s.length?s:l.children,!0,o);o.flatten?i.push.apply(i,d):i.push({scopeParent:l,candidates:d})}else{a.call(l,r)&&o.filter(l)&&(n||!t.includes(l))&&i.push(l);var f=l.shadowRoot||"function"==typeof o.getShadowRoot&&o.getShadowRoot(l),v=!c(f,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(l));if(f&&v){var p=e(!0===f?l.children:f.children,!0,o);o.flatten?i.push.apply(i,p):i.push({scopeParent:l,candidates:p})}else u.unshift.apply(u,l.children)}}return i},d=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},f=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!d(e)?0:e.tabIndex},v=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},p=function(e){return"INPUT"===e.tagName},b=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},m=function(e,t){return!(t.disabled||c(t)||function(e){return p(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var r=a.call(e,"details>summary:first-of-type")?e.parentElement:e;if(a.call(r,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return b(e)}else{if("function"==typeof o){for(var i=e;e;){var c=e.parentElement,l=u(e);if(c&&!c.shadowRoot&&!0===o(c))return b(e);e=e.assignedSlot?e.assignedSlot:c||l===e.ownerDocument?c:l.host}e=i}if(function(e){var t,n,o,r,i=e&&u(e),a=null===(t=i)||void 0===t?void 0:t.host,c=!1;if(i&&i!==e)for(c=!!(null!==(n=a)&&void 0!==n&&null!==(o=n.ownerDocument)&&void 0!==o&&o.contains(a)||null!=e&&null!==(r=e.ownerDocument)&&void 0!==r&&r.contains(e));!c&&a;){var l,s,d;c=!(null===(s=a=null===(l=i=u(a))||void 0===l?void 0:l.host)||void 0===s||null===(d=s.ownerDocument)||void 0===d||!d.contains(a))}return c}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!a.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},h=function(e,t){return!(function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||u(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)}(t)||f(t)<0||!m(e,t))},y=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},w=function e(t){var n=[],o=[];return t.forEach((function(t,r){var i=!!t.scopeParent,a=i?t.scopeParent:t,u=function(e,t){var n=f(e);return n<0&&t&&!d(e)?0:n}(a,i),c=i?e(t.candidates):a;0===u?i?n.push.apply(n,c):n.push(a):o.push({documentOrder:r,tabIndex:u,item:t,isScope:i,content:c})})),o.sort(v).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},g=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,r)&&h(t,e)},E=o.concat("iframe").join(","),N=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==a.call(e,E)&&m(t,e)};function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function T(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){return"Tab"===(null==e?void 0:e.key)||9===(null==e?void 0:e.keyCode)},R=function(e){return k(e)&&!e.shiftKey},D=function(e){return k(e)&&e.shiftKey},I=function(e){return setTimeout(e,0)},P=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e?e.apply(void 0,n):e},A=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},x=[],C=function(e,t){var n,o=(null==t?void 0:t.document)||document,r=(null==t?void 0:t.trapStack)||x,i=F({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:R,isKeyBackward:D},t),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},u=function(e,t,n){return e&&void 0!==e[t]?e[t]:i[n||t]},c=function(e,t){var n="function"==typeof(null==t?void 0:t.composedPath)?t.composedPath():void 0;return a.containerGroups.findIndex((function(t){var o=t.container,r=t.tabbableNodes;return o.contains(e)||(null==n?void 0:n.includes(o))||r.find((function(t){return t===e}))}))},d=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.hasFallback,a=void 0!==r&&r,u=n.params,c=void 0===u?[]:u,l=i[e];if("function"==typeof l&&(l=l.apply(void 0,function(e){if(Array.isArray(e))return S(e)}(t=c)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),!0===l&&(l=void 0),!l){if(void 0===l||!1===l)return l;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=l;if("string"==typeof l){try{s=o.querySelector(l)}catch(t){throw new Error("`".concat(e,'` appears to be an invalid selector; error="').concat(t.message,'"'))}if(!s&&!a)throw new Error("`".concat(e,"` as selector refers to no known node"))}return s},v=function(){var e=d("initialFocus",{hasFallback:!0});if(!1===e)return!1;if(void 0===e||e&&!N(e,i.tabbableOptions))if(c(o.activeElement)>=0)e=o.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||d("fallbackFocus")}else null===e&&(e=d("fallbackFocus"));if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},p=function(){if(a.containerGroups=a.containers.map((function(e){var t=function(e,t){var n;return n=(t=t||{}).getShadowRoot?s([e],t.includeContainer,{filter:h.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:y}):l(e,t.includeContainer,h.bind(null,t)),w(n)}(e,i.tabbableOptions),n=function(e,t){return(t=t||{}).getShadowRoot?s([e],t.includeContainer,{filter:m.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):l(e,t.includeContainer,m.bind(null,t))}(e,i.tabbableOptions),o=t.length>0?t[0]:void 0,r=t.length>0?t[t.length-1]:void 0,a=n.find((function(e){return g(e)})),u=n.slice().reverse().find((function(e){return g(e)})),c=!!t.find((function(e){return f(e)>0}));return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:c,firstTabbableNode:o,lastTabbableNode:r,firstDomTabbableNode:a,lastDomTabbableNode:u,nextTabbableNode:function(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=t.indexOf(e);return r<0?o?n.slice(n.indexOf(e)+1).find((function(e){return g(e)})):n.slice(0,n.indexOf(e)).reverse().find((function(e){return g(e)})):t[r+(o?1:-1)]}}})),a.tabbableGroups=a.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),a.tabbableGroups.length<=0&&!d("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(a.containerGroups.find((function(e){return e.posTabIndexesFound}))&&a.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},b=function(e){var t=e.activeElement;if(t)return t.shadowRoot&&null!==t.shadowRoot.activeElement?b(t.shadowRoot):t},E=function(e){!1!==e&&e!==b(document)&&(e&&e.focus?(e.focus({preventScroll:!!i.preventScroll}),a.mostRecentlyFocusedNode=e,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(e)&&e.select()):E(v()))},T=function(e){var t=d("setReturnFocus",{params:[e]});return t||!1!==t&&e},O=function(e){var t=e.target,n=e.event,o=e.isBackward,r=void 0!==o&&o;t=t||A(n),p();var u=null;if(a.tabbableGroups.length>0){var l=c(t,n),s=l>=0?a.containerGroups[l]:void 0;if(l<0)u=r?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(r){var v=a.tabbableGroups.findIndex((function(e){var n=e.firstTabbableNode;return t===n}));if(v<0&&(s.container===t||N(t,i.tabbableOptions)&&!g(t,i.tabbableOptions)&&!s.nextTabbableNode(t,!1))&&(v=l),v>=0){var b=0===v?a.tabbableGroups.length-1:v-1,m=a.tabbableGroups[b];u=f(t)>=0?m.lastTabbableNode:m.lastDomTabbableNode}else k(n)||(u=s.nextTabbableNode(t,!1))}else{var h=a.tabbableGroups.findIndex((function(e){var n=e.lastTabbableNode;return t===n}));if(h<0&&(s.container===t||N(t,i.tabbableOptions)&&!g(t,i.tabbableOptions)&&!s.nextTabbableNode(t))&&(h=l),h>=0){var y=h===a.tabbableGroups.length-1?0:h+1,w=a.tabbableGroups[y];u=f(t)>=0?w.firstTabbableNode:w.firstDomTabbableNode}else k(n)||(u=s.nextTabbableNode(t))}}else u=d("fallbackFocus");return u},C=function(e){var t=A(e);c(t,e)>=0||(P(i.clickOutsideDeactivates,e)?n.deactivate({returnFocus:i.returnFocusOnDeactivate}):P(i.allowOutsideClick,e)||e.preventDefault())},G=function(e){var t=A(e),n=c(t,e)>=0;if(n||t instanceof Document)n&&(a.mostRecentlyFocusedNode=t);else{var o;e.stopImmediatePropagation();var r=!0;if(a.mostRecentlyFocusedNode)if(f(a.mostRecentlyFocusedNode)>0){var u=c(a.mostRecentlyFocusedNode),l=a.containerGroups[u].tabbableNodes;if(l.length>0){var s=l.findIndex((function(e){return e===a.mostRecentlyFocusedNode}));s>=0&&(i.isKeyForward(a.recentNavEvent)?s+1<l.length&&(o=l[s+1],r=!1):s-1>=0&&(o=l[s-1],r=!1))}}else a.containerGroups.some((function(e){return e.tabbableNodes.some((function(e){return f(e)>0}))}))||(r=!1);else r=!1;r&&(o=O({target:a.mostRecentlyFocusedNode,isBackward:i.isKeyBackward(a.recentNavEvent)})),E(o||a.mostRecentlyFocusedNode||v())}a.recentNavEvent=void 0},L=function(e){(i.isKeyForward(e)||i.isKeyBackward(e))&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a.recentNavEvent=e;var n=O({event:e,isBackward:t});n&&(k(e)&&e.preventDefault(),E(n))}(e,i.isKeyBackward(e))},B=function(e){var t;"Escape"!==(null==(t=e)?void 0:t.key)&&"Esc"!==(null==t?void 0:t.key)&&27!==(null==t?void 0:t.keyCode)||!1===P(i.escapeDeactivates,e)||(e.preventDefault(),n.deactivate())},j=function(e){var t=A(e);c(t,e)>=0||P(i.clickOutsideDeactivates,e)||P(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},K=function(){if(a.active)return function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var o=e.indexOf(t);-1===o||e.splice(o,1),e.push(t)}(r,n),a.delayInitialFocusTimer=i.delayInitialFocus?I((function(){E(v())})):E(v()),o.addEventListener("focusin",G,!0),o.addEventListener("mousedown",C,{capture:!0,passive:!1}),o.addEventListener("touchstart",C,{capture:!0,passive:!1}),o.addEventListener("click",j,{capture:!0,passive:!1}),o.addEventListener("keydown",L,{capture:!0,passive:!1}),o.addEventListener("keydown",B),n},M=function(){if(a.active)return o.removeEventListener("focusin",G,!0),o.removeEventListener("mousedown",C,!0),o.removeEventListener("touchstart",C,!0),o.removeEventListener("click",j,!0),o.removeEventListener("keydown",L,!0),o.removeEventListener("keydown",B),n},U="undefined"!=typeof window&&"MutationObserver"in window?new MutationObserver((function(e){e.some((function(e){return Array.from(e.removedNodes).some((function(e){return e===a.mostRecentlyFocusedNode}))}))&&E(v())})):void 0,Y=function(){U&&(U.disconnect(),a.active&&!a.paused&&a.containers.map((function(e){U.observe(e,{subtree:!0,childList:!0})})))};return(n={get active(){return a.active},get paused(){return a.paused},activate:function(e){if(a.active)return this;var t=u(e,"onActivate"),n=u(e,"onPostActivate"),r=u(e,"checkCanFocusTrap");r||p(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=o.activeElement,null==t||t();var i=function(){r&&p(),K(),Y(),null==n||n()};return r?(r(a.containers.concat()).then(i,i),this):(i(),this)},deactivate:function(e){if(!a.active)return this;var t=F({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,M(),a.active=!1,a.paused=!1,Y(),function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}(r,n);var o=u(t,"onDeactivate"),c=u(t,"onPostDeactivate"),l=u(t,"checkCanReturnFocus"),s=u(t,"returnFocus","returnFocusOnDeactivate");null==o||o();var d=function(){I((function(){s&&E(T(a.nodeFocusedBeforeActivation)),null==c||c()}))};return s&&l?(l(T(a.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){if(a.paused||!a.active)return this;var t=u(e,"onPause"),n=u(e,"onPostPause");return a.paused=!0,null==t||t(),M(),Y(),null==n||n(),this},unpause:function(e){if(!a.paused||!a.active)return this;var t=u(e,"onUnpause"),n=u(e,"onPostUnpause");return a.paused=!1,null==t||t(),p(),K(),Y(),null==n||n(),this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return a.containers=t.map((function(e){return"string"==typeof e?o.querySelector(e):e})),a.active&&p(),Y(),this}}).updateContainerElements(e),n}}}]);