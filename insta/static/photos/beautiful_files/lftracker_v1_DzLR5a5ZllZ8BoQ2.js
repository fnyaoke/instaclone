!function(){"use strict";function a(e){var n=r();return n[e]=n[e]||function(e){return{id:e,plugins:{},getPlugins:function(){var e=[];for(var n in this.plugins)e.push(this.plugins[n]);return e}}}(e),n[e]}function o(e,n){var t=a(e);return t.plugins[n]=t.plugins[n]||{},t.plugins[n]}function r(){var e=l();return e.r=e.r||{},e.r}e()&&(window.ldfdr.registerTracker=function(e,n,t,r,i){var o=a(e);return o.track=n,o.identify=t,o.pageview=r,o.getClientId=i,o},window.ldfdr.setTrackerOption=function(e,n,t){a(e)[n]=t},window.ldfdr.registerPlugin=function(e,n,t){var r=a(e),i=o(e,n);i.init=t,r.pluginsInitialized&&i.init()},window.ldfdr.registerPluginConfig=function(e,n,t){o(e,n).config=t});var f="DzLR5a5ZllZ8BoQ2";function c(e,n){return(n=e.GoogleAnalyticsObject||"ga")&&e[n]?e[n]:null}function l(){return window.ldfdr}function e(){return"undefined"!=typeof window&&void 0!==window.ldfdr}function t(n){var e=Object.values(r());return O(n)?e.map(function(e){return n(e)}):e}function d(){return l().getTracker(f)}function i(){for(var e={clientIds:[],trackingIds:[]},n=function(e){return e?"function"!=typeof e.getAll?[]:e.getAll():[]}(c(window)),t=0;t<n.length;t++){var r=n[t].get("clientId"),i=n[t].get("trackingId");-1===e.clientIds.indexOf(r)&&e.clientIds.push(r),-1===e.trackingIds.indexOf(i)&&e.trackingIds.push(i)}if(!e.clientIds.length){var o=function(){var e=R("_ga");if(e){var n=e.split(".");if(!(n.length<2))return n[n.length-2]+"."+n[n.length-1]}}();o&&e.clientIds.push(o)}return e}function u(){var e=d().foreignCookieSettings,n=[];if(!e)return n;for(var t=function(){for(var e=document.cookie.split(";"),n={},t=0;t<e.length;t++){var r=e[t].split("=");n[(r[0]+"").trim()]=unescape(r.slice(1).join("="))}return n}(),r=Object.keys(t),i=Object.keys(e),o=0;o<i.length;o++)for(var a=i[o],c=e[a],u=0;u<r.length;u++){var f=r[u];if(f.match(c)){var l=t[f];n.push({type:a,value:l})}}return n}function g(){return!0===d().lfaCookieEnabled&&"1"===y.cookie}function s(){var e;return g()?((e=function(e){return function(e,n){var t=x(n);return t?void 0===t[e]?0:t[e]:0}(e,C)||function(e,n){var t=localStorage.getItem(N(e,n));if(null!=t){var r=localStorage.getItem(A(n));null!=r&&(new Date).toISOString()>r&&(t=0)}else t=0;return t}(e,C)}(f))&&function(e,n){return e.substring(0,n.length)===n}(e,S)?_(f,e):e=_(f),e):e=function(e){var n=j((navigator.userAgent||"")+(navigator.platform||"")+JSON.stringify(y)+e).slice(0,16);return S+"."+n+".NC"}(f)}function p(e){var n=d();void 0===n.gaInitRetries&&(n.gaInitRetries=0);var t=1<=n.gaInitRetries;return function(e){return"function"==typeof c(e)&&"function"==typeof c(e).getAll}(window)?e():t?e():(setTimeout(function(){return p(e)},100*Math.pow(2,n.gaInitRetries)),void(n.gaInitRetries+=1))}function v(n,t){p(function(){n=n||{};var e=function(e,n){var t=i(),r=new Date;return n=n||{},{gaTrackingIds:t.trackingIds,gaClientIds:t.clientIds,context:{library:{name:"lftracker",version:"2.0.0"},pageUrl:n.pageUrl||window.location.href,pageTitle:n.pageTitle||document.title,referrer:document.referrer},event:n.eventName||"tracking-event",clientTimestamp:r.toISOString(),clientTimezone:r.getTimezoneOffset(),scriptId:f,cookiesEnabled:g(),anonymizeIp:!1,lfClientId:e,foreignCookies:u(),properties:n.properties||{}}}(s(),n);!0===d().useSendBeaconApi&&navigator&&navigator.sendBeacon?function(e,n){var t="https://tr.lfeeder.com?sid="+encodeURIComponent(e.scriptId),r=D(JSON.stringify(e)),i=navigator.sendBeacon(t,r);O(n)&&n()}(e,t):function(e,n){var t="https://tr.lfeeder.com?sid="+encodeURIComponent(e.scriptId),r=D(JSON.stringify(e)),i=document.createElement("img");i.width=1,i.height=1,i.src=t+"&data="+r,i.onload=function(){O(n)&&n()}}(e,t)})}function n(e,n){var t=(e=e||{}).email;if(t){var r=e.firstName,i=e.lastName,o={email:t};r&&(o.firstName=r),i&&(o.lastName=i),v({eventName:"identify",properties:o},n)}}function m(e,n){var t={eventName:"tracking-event"};(e=e||{}).pageUrl&&(t.pageUrl=e.pageUrl),e.pageTitle&&(t.pageTitle=e.pageTitle),v(t,n)}function w(){return s()}"undefined"!=typeof window&&void 0!==window.ldfdr&&(window.ldfdr=window.ldfdr||{},window.ldfdr.cfg=window.ldfdr.cfg||{},window.ldfdr.setTrackerOption(f,"lfaCookieEnabled",!0),window.ldfdr.setTrackerOption(f,"useSendBeaconApi",!1),window.ldfdr.setTrackerOption(f,"foreignCookieSettings",{'intercom':'^intercom-id-.*','hubspot':'^hubspotutk$'}),window.ldfdr.registerPluginConfig(f,"file-downloads",{filesEnabled:!0,filesToMatch:/(\.pdf|\.doc|\.docx|\.xls|\.xlsx|\.ppt|\.pptx|\.key|\.txt|\.dmg|\.exe)$/}),window.ldfdr.registerPluginConfig(f,"auto-identify",{autoIdentifyEnabled:!1})),e()&&l().registerPlugin(f,"auto-identify",function(){var a=500,c=l().getTracker(f);if(c.plugins["auto-identify"].config.autoIdentifyEnabled)for(var e=document.getElementsByTagName("form"),n=0;n<e.length;n++){t(e[n])}function t(r){var i={capture:!0};function o(e){r.removeEventListener("submit",o,i);var n=function(e){for(var n=e.querySelectorAll("input"),t=0;t<n.length;t++){var r=n[t],i=r.type,o=r.value;if(("text"==i||"email"==i)&&o.match(/^[^@\s]+@([^@\s]+\.)+[^@\W]+$/))return{email:o}}return null}(r);if(null!==n){e.preventDefault();var t=setTimeout(function(){r.submit()},a);c.identify(n,function(){clearTimeout(t),r.submit()})}}r.addEventListener("submit",o,i)}}),e()&&l().registerPlugin(f,"file-downloads",function(){var c=500,u=l().getTracker(f),e=u.plugins["file-downloads"].config;if(e.filesEnabled)for(var n=document.getElementsByTagName("a"),t=0;t<n.length;t++){var r=n[t];(r.getAttribute("href")+"").match(e.filesToMatch)&&i(r)}function i(i){var o={capture:!0};function a(e){i.removeEventListener("click",a,o);var n=e.ctrlKey||e.metaKey,t=function(e){var n=function(e){var n=e.replace(/https?\:\/\//,"").split("/"),t=n[n.length-1].replace(/[\?&].*/,"");return 1!=n.length&&t?t:null}(e.href);return{eventName:"file-download",properties:{url:e.href,filename:n},pageUrl:e.href,pageTitle:n}}(i);if(n)u.track(t);else{e.preventDefault();var r=setTimeout(function(){i.click()},c);u.track(t,function(){clearTimeout(r),i.click()})}}i.addEventListener("click",a,o)}}),window.ldfdr.getTracker=function(e,n){var t=r()[e]||null;return O(n)?n(t):t},window.ldfdr.getAll=t,window.ldfdr.track=function(n){t(function(e){e.track(n)})},window.ldfdr.identify=function(n){t(function(e){e.identify(n)})},window.ldfdr.pageview=function(n){t(function(e){e.pageview(n)})};var h,I,k,T,y={},E=63072e6,C="_lfa",S="LF1.1";function b(e){return void 0!==e}function O(e){return"function"==typeof e}function A(e){return e+"_expiry"}function N(e,n){return n+"_"+e}function x(e){var n=R(e);if(!n)return 0;var t=function(e){try{return decodeURIComponent(window.atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch(e){return 0}}(n);return t?JSON.parse(t):0}function R(e){var n=new RegExp("(^|;)[ ]*"+e+"=([^;]*)").exec(document.cookie);return n?window.decodeURIComponent(n[2]):0}function _(e,n){n=n||function(e){return S+"."+e+"."+(new Date).getTime()}(j((navigator.userAgent||"")+(navigator.platform||"")+JSON.stringify(y)+(new Date).getTime()+Math.random()).slice(0,16));return function(e,n,t,r,i,o,a){var c=x(n)||{};c[e]=t,U(n,t=D(JSON.stringify(c)),r,i,o,a)}(e,C,n,E,"/",function(){var e=window.ldfdr.cfg.cookieDomain;if(e)return e;return 0==(e=""+document.domain).indexOf("www.")?e.substring(4):e}()),function(e,n,t){localStorage.setItem(N(e,n),t);var r=new Date;r.setTime(r.getTime()+E),localStorage.setItem(A(n),r.toISOString())}(e,C,n),n}function U(e,n,t,r,i,o){var a;t&&(a=new Date).setTime(a.getTime()+t),document.cookie=e+"="+window.encodeURIComponent(n)+(t?";expires="+a.toGMTString():"")+";path="+(r||"/")+(i?";domain="+i:"")+(o?";secure":"")+";SameSite=Lax"}function j(e){function n(e,n){return e<<n|e>>>32-n}function t(e){var n,t="";for(n=7;0<=n;n--)t+=(e>>>4*n&15).toString(16);return t}var r,i,o,a,c,u,f,l,d,g,s=[],p=1732584193,v=4023233417,m=2562383102,w=271733878,h=3285377520,I=[];for(g=(e=function(e){return unescape(window.encodeURIComponent(e))}(e)).length,i=0;i<g-3;i+=4)o=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3),I.push(o);switch(3&g){case 0:i=2147483648;break;case 1:i=e.charCodeAt(g-1)<<24|8388608;break;case 2:i=e.charCodeAt(g-2)<<24|e.charCodeAt(g-1)<<16|32768;break;case 3:i=e.charCodeAt(g-3)<<24|e.charCodeAt(g-2)<<16|e.charCodeAt(g-1)<<8|128}for(I.push(i);14!=(15&I.length);)I.push(0);for(I.push(g>>>29),I.push(g<<3&4294967295),r=0;r<I.length;r+=16){for(i=0;i<16;i++)s[i]=I[r+i];for(i=16;i<=79;i++)s[i]=n(s[i-3]^s[i-8]^s[i-14]^s[i-16],1);for(a=p,c=v,u=m,f=w,l=h,i=0;i<=19;i++)d=n(a,5)+(c&u|~c&f)+l+s[i]+1518500249&4294967295,l=f,f=u,u=n(c,30),c=a,a=d;for(i=20;i<=39;i++)d=n(a,5)+(c^u^f)+l+s[i]+1859775393&4294967295,l=f,f=u,u=n(c,30),c=a,a=d;for(i=40;i<=59;i++)d=n(a,5)+(c&u|c&f|u&f)+l+s[i]+2400959708&4294967295,l=f,f=u,u=n(c,30),c=a,a=d;for(i=60;i<=79;i++)d=n(a,5)+(c^u^f)+l+s[i]+3395469782&4294967295,l=f,f=u,u=n(c,30),c=a,a=d;p=p+a&4294967295,v=v+c&4294967295,m=m+u&4294967295,w=w+f&4294967295,h=h+l&4294967295}return(d=t(p)+t(v)+t(m)+t(w)+t(h)).toLowerCase()}function D(e){return window.btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,n){return String.fromCharCode("0x"+n)}))}e()&&(!1!==(h="trackingAllowed",l().cfg[h])?function(){!function(){var e,n,t={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};if(!new RegExp("MSIE").test(navigator.userAgent)){if(navigator.mimeTypes&&navigator.mimeTypes.length)for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n=navigator.mimeTypes[t[e]],y[e]=n&&n.enabledPlugin?"1":"0");!new RegExp("Edge[ /](\\d+[\\.\\d]+)").test(navigator.userAgent)&&"unknown"!=typeof navigator.javaEnabled&&b(navigator.javaEnabled)&&navigator.javaEnabled()&&(y.java="1"),O(window.GearsFactory)&&(y.gears="1"),y.cookie=function(){if(b(navigator.cookieEnabled))return navigator.cookieEnabled?"1":"0";var e="testcookie";return U(e,"1"),"1"===R(e)?"1":"0"}()}var r=parseInt(screen.width,10),i=parseInt(screen.height,10);y.res=parseInt(r,10)+"x"+parseInt(i,10)}();var e=l().registerTracker(f,v,n,m,w);return function(e){for(var n=e.getPlugins(),t=0;t<n.length;t++){var r=n[t];r.initialized||r.init(),r.initialized=!0}e.pluginsInitialized=!0}(e),function(e){var n=document.createEvent("Event");n.tracker=e,n.initEvent("ldfdr.trackerReady"),document.dispatchEvent(n)}(e),e}().pageview():(T=x(k=C)||{},Object.keys(T).forEach(function(e){localStorage.removeItem(N(e,k))}),localStorage.removeItem(A(k)),I=C,document.cookie=I+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"))}();