module.exports=[33405,(e,t,i)=>{t.exports=e.x("child_process",()=>require("child_process"))},4446,(e,t,i)=>{t.exports=e.x("net",()=>require("net"))},37702,(e,t,i)=>{t.exports=e.x("worker_threads",()=>require("worker_threads"))},27699,(e,t,i)=>{t.exports=e.x("events",()=>require("events"))},31846,(e,t,i)=>{"use strict";function r(e){return null!==e&&"object"==typeof e&&"then"in e&&"function"==typeof e.then}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"isThenable",{enumerable:!0,get:function(){return r}})},34270,(e,t,i)=>{t.exports=e.x("next/dist/server/app-render/module-loading/track-module-loading.external.js",()=>require("next/dist/server/app-render/module-loading/track-module-loading.external.js"))},83972,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"trackDynamicImport",{enumerable:!0,get:function(){return s}});let r=e.r(76414),a=e.r(31846),n=e.r(34270);function s(e){if(!(0,a.isThenable)(e))throw Object.defineProperty(new r.InvariantError("`trackDynamicImport` should always receive a promise. Something went wrong in the dynamic imports transform."),"__NEXT_ERROR_CODE",{value:"E677",enumerable:!1,configurable:!0});return(0,n.trackPendingImport)(e),e}},32507,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"trackDynamicImport",{enumerable:!0,get:function(){return r.trackDynamicImport}});let r=e.r(83972)},50245,(e,t,i)=>{let{EventEmitter:r}=e.r(27699);class AbortSignal{constructor(){this.eventEmitter=new r,this.onabort=null,this.aborted=!1,this.reason=void 0}toString(){return"[object AbortSignal]"}get[Symbol.toStringTag](){return"AbortSignal"}removeEventListener(e,t){this.eventEmitter.removeListener(e,t)}addEventListener(e,t){this.eventEmitter.on(e,t)}dispatchEvent(e){let t={type:e,target:this},i=`on${e}`;"function"==typeof this[i]&&this[i](t),this.eventEmitter.emit(e,t)}throwIfAborted(){if(this.aborted)throw this.reason}static abort(e){let t=new a;return t.abort(),t.signal}static timeout(e){let t=new a;return setTimeout(()=>t.abort(Error("TimeoutError")),e),t.signal}}class a{constructor(){this.signal=new AbortSignal}abort(e){this.signal.aborted||(this.signal.aborted=!0,e?this.signal.reason=e:this.signal.reason=Error("AbortError"),this.signal.dispatchEvent("abort"))}toString(){return"[object AbortController]"}get[Symbol.toStringTag](){return"AbortController"}}t.exports={AbortController:a,AbortSignal}},22734,(e,t,i)=>{t.exports=e.x("fs",()=>require("fs"))},92509,(e,t,i)=>{t.exports=e.x("url",()=>require("url"))},64397,(e,t,i)=>{var r,a=/^(?:0|[1-9]\d*)$/;function n(e,t,i){switch(i.length){case 0:return e.call(t);case 1:return e.call(t,i[0]);case 2:return e.call(t,i[0],i[1]);case 3:return e.call(t,i[0],i[1],i[2])}return e.apply(t,i)}var s=Object.prototype,o=s.hasOwnProperty,l=s.toString,d=s.propertyIsEnumerable,c=Math.max;function u(e,t,i,r){return void 0===e||m(e,s[i])&&!o.call(r,i)?t:e}function p(e,t){return t=c(void 0===t?e.length-1:t,0),function(){for(var i=arguments,r=-1,a=c(i.length-t,0),s=Array(a);++r<a;)s[r]=i[t+r];r=-1;for(var o=Array(t+1);++r<t;)o[r]=i[r];return o[t]=s,n(e,this,o)}}function h(e,t){return!!(t=null==t?0x1fffffffffffff:t)&&("number"==typeof e||a.test(e))&&e>-1&&e%1==0&&e<t}function m(e,t){return e===t||e!=e&&t!=t}var f=Array.isArray;function y(e){var t,i,r;return null!=e&&"number"==typeof(t=e.length)&&t>-1&&t%1==0&&t<=0x1fffffffffffff&&"[object Function]"!=(r=b(i=e)?l.call(i):"")&&"[object GeneratorFunction]"!=r}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var g=(r=function(e,t,i,r){var a;!function(e,t,i,r){i||(i={});for(var a=-1,n=t.length;++a<n;){var s=t[a],l=r?r(i[s],e[s],s,i,e):void 0;!function(e,t,i){var r=e[t];o.call(e,t)&&m(r,i)&&(void 0!==i||t in e)||(e[t]=i)}(i,s,void 0===l?e[s]:l)}}(t,y(a=t)?function(e,t){var i,r,a,n=f(e)||(a=r=i=e)&&"object"==typeof a&&y(r)&&o.call(i,"callee")&&(!d.call(i,"callee")||"[object Arguments]"==l.call(i))?function(e,t){for(var i=-1,r=Array(e);++i<e;)r[i]=t(i);return r}(e.length,String):[],s=n.length,c=!!s;for(var u in e)(t||o.call(e,u))&&!(c&&("length"==u||h(u,s)))&&n.push(u);return n}(a,!0):function(e){if(!b(e)){var t,i,r=e,a=[];if(null!=r)for(var n in Object(r))a.push(n);return a}var l=(i=(t=e)&&t.constructor,t===("function"==typeof i&&i.prototype||s)),d=[];for(var c in e)"constructor"==c&&(l||!o.call(e,c))||d.push(c);return d}(a),e,r)},p(function(e,t){var i=-1,a=t.length,n=a>1?t[a-1]:void 0,s=a>2?t[2]:void 0;for(n=r.length>3&&"function"==typeof n?(a--,n):void 0,s&&function(e,t,i){if(!b(i))return!1;var r=typeof t;return("number"==r?!!(y(i)&&h(t,i.length)):"string"==r&&t in i)&&m(i[t],e)}(t[0],t[1],s)&&(n=a<3?void 0:n,a=1),e=Object(e);++i<a;){var o=t[i];o&&r(e,o,i,n)}return e}));t.exports=p(function(e){return e.push(void 0,u),n(g,void 0,e)})},4136,(e,t,i)=>{var r=Object.prototype,a=r.hasOwnProperty,n=r.toString,s=r.propertyIsEnumerable;t.exports=function(e){var t,i,r,o,l,d,c,u;return!!(r=t=e)&&"object"==typeof r&&null!=(i=t)&&"number"==typeof(o=i.length)&&o>-1&&o%1==0&&o<=0x1fffffffffffff&&"[object Function]"!=(c=typeof(d=l=i),u=d&&("object"==c||"function"==c)?n.call(l):"")&&"[object GeneratorFunction]"!=u&&a.call(e,"callee")&&(!s.call(e,"callee")||"[object Arguments]"==n.call(e))}},57517,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.isArguments=i.defaults=i.noop=void 0,i.defaults=e.r(64397),i.isArguments=e.r(4136),i.noop=function(){}},41528,(e,t,i)=>{function r(e,t,i,r){return Math.round(e/i)+" "+r+(t>=1.5*i?"s":"")}t.exports=function(e,t){t=t||{};var i,a,n,s,o=typeof e;if("string"===o&&e.length>0){var l=e;if(!((l=String(l)).length>100)){var d=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(l);if(d){var c=parseFloat(d[1]);switch((d[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*c;case"weeks":case"week":case"w":return 6048e5*c;case"days":case"day":case"d":return 864e5*c;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*c;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*c;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*c;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:break}}}return}if("number"===o&&isFinite(e)){return t.long?(a=Math.abs(i=e))>=864e5?r(i,a,864e5,"day"):a>=36e5?r(i,a,36e5,"hour"):a>=6e4?r(i,a,6e4,"minute"):a>=1e3?r(i,a,1e3,"second"):i+" ms":(s=Math.abs(n=e))>=864e5?Math.round(n/864e5)+"d":s>=36e5?Math.round(n/36e5)+"h":s>=6e4?Math.round(n/6e4)+"m":s>=1e3?Math.round(n/1e3)+"s":n+"ms"}throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},16525,(e,t,i)=>{t.exports=function(t){function i(e){let t,a,n,s=null;function o(...e){if(!o.enabled)return;let r=Number(new Date);o.diff=r-(t||r),o.prev=t,o.curr=r,t=r,e[0]=i.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(t,r)=>{if("%%"===t)return"%";a++;let n=i.formatters[r];if("function"==typeof n){let i=e[a];t=n.call(o,i),e.splice(a,1),a--}return t}),i.formatArgs.call(o,e),(o.log||i.log).apply(o,e)}return o.namespace=e,o.useColors=i.useColors(),o.color=i.selectColor(e),o.extend=r,o.destroy=i.destroy,Object.defineProperty(o,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(a!==i.namespaces&&(a=i.namespaces,n=i.enabled(e)),n),set:e=>{s=e}}),"function"==typeof i.init&&i.init(o),o}function r(e,t){let r=i(this.namespace+(void 0===t?":":t)+e);return r.log=this.log,r}function a(e,t){let i=0,r=0,a=-1,n=0;for(;i<e.length;)if(r<t.length&&(t[r]===e[i]||"*"===t[r]))"*"===t[r]?(a=r,n=i):i++,r++;else{if(-1===a)return!1;r=a+1,i=++n}for(;r<t.length&&"*"===t[r];)r++;return r===t.length}return i.debug=i,i.default=i,i.coerce=function(e){return e instanceof Error?e.stack||e.message:e},i.disable=function(){let e=[...i.names,...i.skips.map(e=>"-"+e)].join(",");return i.enable(""),e},i.enable=function(e){for(let t of(i.save(e),i.namespaces=e,i.names=[],i.skips=[],("string"==typeof e?e:"").trim().replace(/\s+/g,",").split(",").filter(Boolean)))"-"===t[0]?i.skips.push(t.slice(1)):i.names.push(t)},i.enabled=function(e){for(let t of i.skips)if(a(e,t))return!1;for(let t of i.names)if(a(e,t))return!0;return!1},i.humanize=e.r(41528),i.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(t).forEach(e=>{i[e]=t[e]}),i.names=[],i.skips=[],i.formatters={},i.selectColor=function(e){let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i)|0;return i.colors[Math.abs(t)%i.colors.length]},i.enable(i.load()),i}},70722,(e,t,i)=>{t.exports=e.x("tty",()=>require("tty"))},23440,(e,t,i)=>{let r=e.r(70722),a=e.r(24361);i.init=function(e){e.inspectOpts={};let t=Object.keys(i.inspectOpts);for(let r=0;r<t.length;r++)e.inspectOpts[t[r]]=i.inspectOpts[t[r]]},i.log=function(...e){return process.stderr.write(a.formatWithOptions(i.inspectOpts,...e)+"\n")},i.formatArgs=function(e){let{namespace:r,useColors:a}=this;if(a){let i=this.color,a="\x1b[3"+(i<8?i:"8;5;"+i),n=`  ${a};1m${r} \u001B[0m`;e[0]=n+e[0].split("\n").join("\n"+n),e.push(a+"m+"+t.exports.humanize(this.diff)+"\x1b[0m")}else e[0]=(i.inspectOpts.hideDate?"":new Date().toISOString()+" ")+r+" "+e[0]},i.save=function(e){e?process.env.DEBUG=e:delete process.env.DEBUG},i.load=function(){return process.env.DEBUG},i.useColors=function(){return"colors"in i.inspectOpts?!!i.inspectOpts.colors:r.isatty(process.stderr.fd)},i.destroy=a.deprecate(()=>{},"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."),i.colors=[6,2,3,4,5,1];try{let e=(()=>{let e=Error("Cannot find module 'supports-color'");throw e.code="MODULE_NOT_FOUND",e})();e&&(e.stderr||e).level>=2&&(i.colors=[20,21,26,27,32,33,38,39,40,41,42,43,44,45,56,57,62,63,68,69,74,75,76,77,78,79,80,81,92,93,98,99,112,113,128,129,134,135,148,149,160,161,162,163,164,165,166,167,168,169,170,171,172,173,178,179,184,185,196,197,198,199,200,201,202,203,204,205,206,207,208,209,214,215,220,221])}catch(e){}i.inspectOpts=Object.keys(process.env).filter(e=>/^debug_/i.test(e)).reduce((e,t)=>{let i=t.substring(6).toLowerCase().replace(/_([a-z])/g,(e,t)=>t.toUpperCase()),r=process.env[t];return r=!!/^(yes|on|true|enabled)$/i.test(r)||!/^(no|off|false|disabled)$/i.test(r)&&("null"===r?null:Number(r)),e[i]=r,e},{}),t.exports=e.r(16525)(i);let{formatters:n}=t.exports;n.o=function(e){return this.inspectOpts.colors=this.useColors,a.inspect(e,this.inspectOpts).split("\n").map(e=>e.trim()).join(" ")},n.O=function(e){return this.inspectOpts.colors=this.useColors,a.inspect(e,this.inspectOpts)}},28452,(e,t,i)=>{let r;i.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;let i="color: "+this.color;e.splice(1,0,i,"color: inherit");let r=0,a=0;e[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(r++,"%c"===e&&(a=r))}),e.splice(a,0,i)},i.save=function(e){try{e?i.storage.setItem("debug",e):i.storage.removeItem("debug")}catch(e){}},i.load=function(){let e;try{e=i.storage.getItem("debug")||i.storage.getItem("DEBUG")}catch(e){}return!e&&"u">typeof process&&"env"in process&&(e=process.env.DEBUG),e},i.useColors=function(){let e;return!("u">typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("u">typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"u">typeof navigator&&navigator.userAgent&&(e=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(e[1],10)>=31||"u">typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},i.storage=function(){try{return localStorage}catch(e){}}(),r=!1,i.destroy=()=>{r||(r=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))},i.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],i.log=console.debug||console.log||(()=>{}),t.exports=e.r(16525)(i);let{formatters:a}=t.exports;a.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},17293,(e,t,i)=>{"u"<typeof process||"renderer"===process.type||process.__nwjs?t.exports=e.r(28452):t.exports=e.r(23440)},28181,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.genRedactedString=i.getStringValue=i.MAX_ARGUMENT_LENGTH=void 0;let r=e.r(17293);function a(e){if(null!==e)switch(typeof e){case"boolean":case"number":return;case"object":if(Buffer.isBuffer(e))return e.toString("hex");if(Array.isArray(e))return e.join(",");try{return JSON.stringify(e)}catch(e){return}case"string":return e}}function n(e,t){let{length:i}=e;return i<=t?e:e.slice(0,t)+' ... <REDACTED full-length="'+i+'">'}i.MAX_ARGUMENT_LENGTH=200,i.getStringValue=a,i.genRedactedString=n,i.default=function(e){let t=(0,r.default)(`ioredis:${e}`);function i(...e){if(t.enabled){for(let t=1;t<e.length;t++){let i=a(e[t]);"string"==typeof i&&i.length>200&&(e[t]=n(i,200))}return t.apply(null,e)}}return Object.defineProperties(i,{namespace:{get:()=>t.namespace},enabled:{get:()=>t.enabled},destroy:{get:()=>t.destroy},log:{get:()=>t.log,set(e){t.log=e}}}),i}},86961,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=`-----BEGIN CERTIFICATE-----
MIIDTzCCAjegAwIBAgIJAKSVpiDswLcwMA0GCSqGSIb3DQEBBQUAMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTAeFw0xMzEwMDExMjE0NTVaFw0yMzA5MjkxMjE0NTVaMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALZqkh/DczWP
JnxnHLQ7QL0T4B4CDKWBKCcisriGbA6ZePWVNo4hfKQC6JrzfR+081NeD6VcWUiz
rmd+jtPhIY4c+WVQYm5PKaN6DT1imYdxQw7aqO5j2KUCEh/cznpLxeSHoTxlR34E
QwF28Wl3eg2vc5ct8LjU3eozWVk3gb7alx9mSA2SgmuX5lEQawl++rSjsBStemY2
BDwOpAMXIrdEyP/cVn8mkvi/BDs5M5G+09j0gfhyCzRWMQ7Hn71u1eolRxwVxgi3
TMn+/vTaFSqxKjgck6zuAYjBRPaHe7qLxHNr1So/Mc9nPy+3wHebFwbIcnUojwbp
4nctkWbjb2cCAwEAAaNQME4wHQYDVR0OBBYEFP1whtcrydmW3ZJeuSoKZIKjze3w
MB8GA1UdIwQYMBaAFP1whtcrydmW3ZJeuSoKZIKjze3wMAwGA1UdEwQFMAMBAf8w
DQYJKoZIhvcNAQEFBQADggEBAG2erXhwRAa7+ZOBs0B6X57Hwyd1R4kfmXcs0rta
lbPpvgULSiB+TCbf3EbhJnHGyvdCY1tvlffLjdA7HJ0PCOn+YYLBA0pTU/dyvrN6
Su8NuS5yubnt9mb13nDGYo1rnt0YRfxN+8DM3fXIVr038A30UlPX2Ou1ExFJT0MZ
uFKY6ZvLdI6/1cbgmguMlAhM+DhKyV6Sr5699LM3zqeI816pZmlREETYkGr91q7k
BpXJu/dtHaGxg1ZGu6w/PCsYGUcECWENYD4VQPd8N32JjOfu6vEgoEAwfPP+3oGp
Z4m3ewACcWOAenqflb+cQYC4PsF7qbXDmRaWrbKntOlZ3n0=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIGMTCCBBmgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwajELMAkGA1UEBhMCVVMx
CzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJzMS0w
KwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwHhcN
MTgwMjI1MTUzNzM3WhcNMjgwMjIzMTUzNzM3WjBfMQswCQYDVQQGEwJVUzELMAkG
A1UECAwCQ0ExEjAQBgNVBAoMCVJlZGlzTGFiczEvMC0GA1UEAwwmUkNQIEludGVy
bWVkaWF0ZSBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwggIiMA0GCSqGSIb3DQEBAQUA
A4ICDwAwggIKAoICAQDf9dqbxc8Bq7Ctq9rWcxrGNKKHivqLAFpPq02yLPx6fsOv
Tq7GsDChAYBBc4v7Y2Ap9RD5Vs3dIhEANcnolf27QwrG9RMnnvzk8pCvp1o6zSU4
VuOE1W66/O1/7e2rVxyrnTcP7UgK43zNIXu7+tiAqWsO92uSnuMoGPGpeaUm1jym
hjWKtkAwDFSqvHY+XL5qDVBEjeUe+WHkYUg40cAXjusAqgm2hZt29c2wnVrxW25W
P0meNlzHGFdA2AC5z54iRiqj57dTfBTkHoBczQxcyw6hhzxZQ4e5I5zOKjXXEhZN
r0tA3YC14CTabKRus/JmZieyZzRgEy2oti64tmLYTqSlAD78pRL40VNoaSYetXLw
hhNsXCHgWaY6d5bLOc/aIQMAV5oLvZQKvuXAF1IDmhPA+bZbpWipp0zagf1P1H3s
UzsMdn2KM0ejzgotbtNlj5TcrVwpmvE3ktvUAuA+hi3FkVx1US+2Gsp5x4YOzJ7u
P1WPk6ShF0JgnJH2ILdj6kttTWwFzH17keSFICWDfH/+kM+k7Y1v3EXMQXE7y0T9
MjvJskz6d/nv+sQhY04xt64xFMGTnZjlJMzfQNi7zWFLTZnDD0lPowq7l3YiPoTT
t5Xky83lu0KZsZBo0WlWaDG00gLVdtRgVbcuSWxpi5BdLb1kRab66JptWjxwXQID
AQABo4HrMIHoMDoGA1UdHwQzMDEwL6AtoCuGKWh0dHBzOi8vcmwtY2Etc2VydmVy
LnJlZGlzbGFicy5jb20vdjEvY3JsMEYGCCsGAQUFBwEBBDowODA2BggrBgEFBQcw
AYYqaHR0cHM6Ly9ybC1jYS1zZXJ2ZXIucmVkaXNsYWJzLmNvbS92MS9vY3NwMB0G
A1UdDgQWBBQHar5OKvQUpP2qWt6mckzToeCOHDAfBgNVHSMEGDAWgBQi42wH6hM4
L2sujEvLM0/u8lRXTzASBgNVHRMBAf8ECDAGAQH/AgEAMA4GA1UdDwEB/wQEAwIB
hjANBgkqhkiG9w0BAQsFAAOCAgEAirEn/iTsAKyhd+pu2W3Z5NjCko4NPU0EYUbr
AP7+POK2rzjIrJO3nFYQ/LLuC7KCXG+2qwan2SAOGmqWst13Y+WHp44Kae0kaChW
vcYLXXSoGQGC8QuFSNUdaeg3RbMDYFT04dOkqufeWVccoHVxyTSg9eD8LZuHn5jw
7QDLiEECBmIJHk5Eeo2TAZrx4Yx6ufSUX5HeVjlAzqwtAqdt99uCJ/EL8bgpWbe+
XoSpvUv0SEC1I1dCAhCKAvRlIOA6VBcmzg5Am12KzkqTul12/VEFIgzqu0Zy2Jbc
AUPrYVu/+tOGXQaijy7YgwH8P8n3s7ZeUa1VABJHcxrxYduDDJBLZi+MjheUDaZ1
jQRHYevI2tlqeSBqdPKG4zBY5lS0GiAlmuze5oENt0P3XboHoZPHiqcK3VECgTVh
/BkJcuudETSJcZDmQ8YfoKfBzRQNg2sv/hwvUv73Ss51Sco8GEt2lD8uEdib1Q6z
zDT5lXJowSzOD5ZA9OGDjnSRL+2riNtKWKEqvtEG3VBJoBzu9GoxbAc7wIZLxmli
iF5a/Zf5X+UXD3s4TMmy6C4QZJpAA2egsSQCnraWO2ULhh7iXMysSkF/nzVfZn43
iqpaB8++9a37hWq14ZmOv0TJIDz//b2+KC4VFXWQ5W5QC6whsjT+OlG4p5ZYG0jo
616pxqo=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIFujCCA6KgAwIBAgIJAJ1aTT1lu2ScMA0GCSqGSIb3DQEBCwUAMGoxCzAJBgNV
BAYTAlVTMQswCQYDVQQIDAJDQTELMAkGA1UEBwwCQ0ExEjAQBgNVBAoMCVJlZGlz
TGFiczEtMCsGA1UEAwwkUmVkaXNMYWJzIFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9y
aXR5MB4XDTE4MDIyNTE1MjA0MloXDTM4MDIyMDE1MjA0MlowajELMAkGA1UEBhMC
VVMxCzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJz
MS0wKwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkw
ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDLEjXy7YrbN5Waau5cd6g1
G5C2tMmeTpZ0duFAPxNU4oE3RHS5gGiok346fUXuUxbZ6QkuzeN2/2Z+RmRcJhQY
Dm0ZgdG4x59An1TJfnzKKoWj8ISmoHS/TGNBdFzXV7FYNLBuqZouqePI6ReC6Qhl
pp45huV32Q3a6IDrrvx7Wo5ZczEQeFNbCeCOQYNDdTmCyEkHqc2AGo8eoIlSTutT
ULOC7R5gzJVTS0e1hesQ7jmqHjbO+VQS1NAL4/5K6cuTEqUl+XhVhPdLWBXJQ5ag
54qhX4v+ojLzeU1R/Vc6NjMvVtptWY6JihpgplprN0Yh2556ewcXMeturcKgXfGJ
xeYzsjzXerEjrVocX5V8BNrg64NlifzTMKNOOv4fVZszq1SIHR8F9ROrqiOdh8iC
JpUbLpXH9hWCSEO6VRMB2xJoKu3cgl63kF30s77x7wLFMEHiwsQRKxooE1UhgS9K
2sO4TlQ1eWUvFvHSTVDQDlGQ6zu4qjbOpb3Q8bQwoK+ai2alkXVR4Ltxe9QlgYK3
StsnPhruzZGA0wbXdpw0bnM+YdlEm5ffSTpNIfgHeaa7Dtb801FtA71ZlH7A6TaI
SIQuUST9EKmv7xrJyx0W1pGoPOLw5T029aTjnICSLdtV9bLwysrLhIYG5bnPq78B
cS+jZHFGzD7PUVGQD01nOQIDAQABo2MwYTAdBgNVHQ4EFgQUIuNsB+oTOC9rLoxL
yzNP7vJUV08wHwYDVR0jBBgwFoAUIuNsB+oTOC9rLoxLyzNP7vJUV08wDwYDVR0T
AQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQADggIBAHfg
z5pMNUAKdMzK1aS1EDdK9yKz4qicILz5czSLj1mC7HKDRy8cVADUxEICis++CsCu
rYOvyCVergHQLREcxPq4rc5Nq1uj6J6649NEeh4WazOOjL4ZfQ1jVznMbGy+fJm3
3Hoelv6jWRG9iqeJZja7/1s6YC6bWymI/OY1e4wUKeNHAo+Vger7MlHV+RuabaX+
hSJ8bJAM59NCM7AgMTQpJCncrcdLeceYniGy5Q/qt2b5mJkQVkIdy4TPGGB+AXDJ
D0q3I/JDRkDUFNFdeW0js7fHdsvCR7O3tJy5zIgEV/o/BCkmJVtuwPYOrw/yOlKj
TY/U7ATAx9VFF6/vYEOMYSmrZlFX+98L6nJtwDqfLB5VTltqZ4H/KBxGE3IRSt9l
FXy40U+LnXzhhW+7VBAvyYX8GEXhHkKU8Gqk1xitrqfBXY74xKgyUSTolFSfFVgj
mcM/X4K45bka+qpkj7Kfv/8D4j6aZekwhN2ly6hhC1SmQ8qjMjpG/mrWOSSHZFmf
ybu9iD2AYHeIOkshIl6xYIa++Q/00/vs46IzAbQyriOi0XxlSMMVtPx0Q3isp+ji
n8Mq9eOuxYOEQ4of8twUkUDd528iwGtEdwf0Q01UyT84S62N8AySl1ZBKXJz6W4F
UhWfa/HQYOAPDdEjNgnVwLI23b8t0TozyCWw7q8h
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIEjzCCA3egAwIBAgIQe55B/ALCKJDZtdNT8kD6hTANBgkqhkiG9w0BAQsFADBM
MSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEGA1UEChMKR2xv
YmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0yMjAxMjYxMjAwMDBaFw0y
NTAxMjYwMDAwMDBaMFgxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWdu
IG52LXNhMS4wLAYDVQQDEyVHbG9iYWxTaWduIEF0bGFzIFIzIE9WIFRMUyBDQSAy
MDIyIFEyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmGmg1LW9b7Lf
8zDD83yBDTEkt+FOxKJZqF4veWc5KZsQj9HfnUS2e5nj/E+JImlGPsQuoiosLuXD
BVBNAMcUFa11buFMGMeEMwiTmCXoXRrXQmH0qjpOfKgYc5gHG3BsRGaRrf7VR4eg
ofNMG9wUBw4/g/TT7+bQJdA4NfE7Y4d5gEryZiBGB/swaX6Jp/8MF4TgUmOWmalK
dZCKyb4sPGQFRTtElk67F7vU+wdGcrcOx1tDcIB0ncjLPMnaFicagl+daWGsKqTh
counQb6QJtYHa91KvCfKWocMxQ7OIbB5UARLPmC4CJ1/f8YFm35ebfzAeULYdGXu
jE9CLor0OwIDAQABo4IBXzCCAVswDgYDVR0PAQH/BAQDAgGGMB0GA1UdJQQWMBQG
CCsGAQUFBwMBBggrBgEFBQcDAjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQW
BBSH5Zq7a7B/t95GfJWkDBpA8HHqdjAfBgNVHSMEGDAWgBSP8Et/qC5FJK5NUPpj
move4t0bvDB7BggrBgEFBQcBAQRvMG0wLgYIKwYBBQUHMAGGImh0dHA6Ly9vY3Nw
Mi5nbG9iYWxzaWduLmNvbS9yb290cjMwOwYIKwYBBQUHMAKGL2h0dHA6Ly9zZWN1
cmUuZ2xvYmFsc2lnbi5jb20vY2FjZXJ0L3Jvb3QtcjMuY3J0MDYGA1UdHwQvMC0w
K6ApoCeGJWh0dHA6Ly9jcmwuZ2xvYmFsc2lnbi5jb20vcm9vdC1yMy5jcmwwIQYD
VR0gBBowGDAIBgZngQwBAgIwDAYKKwYBBAGgMgoBAjANBgkqhkiG9w0BAQsFAAOC
AQEAKRic9/f+nmhQU/wz04APZLjgG5OgsuUOyUEZjKVhNGDwxGTvKhyXGGAMW2B/
3bRi+aElpXwoxu3pL6fkElbX3B0BeS5LoDtxkyiVEBMZ8m+sXbocwlPyxrPbX6mY
0rVIvnuUeBH8X0L5IwfpNVvKnBIilTbcebfHyXkPezGwz7E1yhUULjJFm2bt0SdX
y+4X/WeiiYIv+fTVgZZgl+/2MKIsu/qdBJc3f3TvJ8nz+Eax1zgZmww+RSQWeOj3
15Iw6Z5FX+NwzY/Ab+9PosR5UosSeq+9HhtaxZttXG1nVh+avYPGYddWmiMT90J5
ZgKnO/Fx2hBgTxhOTMYaD312kg==
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4G
A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNp
Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDkwMzE4MTAwMDAwWhcNMjkwMzE4
MTAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEG
A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAMwldpB5BngiFvXAg7aEyiie/QV2EcWtiHL8
RgJDx7KKnQRfJMsuS+FggkbhUqsMgUdwbN1k0ev1LKMPgj0MK66X17YUhhB5uzsT
gHeMCOFJ0mpiLx9e+pZo34knlTifBtc+ycsmWQ1z3rDI6SYOgxXG71uL0gRgykmm
KPZpO/bLyCiR5Z2KYVc3rHQU3HTgOu5yLy6c+9C7v/U9AOEGM+iCK65TpjoWc4zd
QQ4gOsC0p6Hpsk+QLjJg6VfLuQSSaGjlOCZgdbKfd/+RFO+uIEn8rUAVSNECMWEZ
XriX7613t2Saer9fwRPvm2L7DWzgVGkWqQPabumDk3F2xmmFghcCAwEAAaNCMEAw
DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFI/wS3+o
LkUkrk1Q+mOai97i3Ru8MA0GCSqGSIb3DQEBCwUAA4IBAQBLQNvAUKr+yAzv95ZU
RUm7lgAJQayzE4aGKAczymvmdLm6AC2upArT9fHxD4q/c2dKg8dEe3jgr25sbwMp
jjM5RcOO5LlXbKr8EpbsU8Yt5CRsuZRj+9xTaGdWPoO4zzUhw8lo/s7awlOqzJCK
6fBdRoyV3XpYKBovHd7NADdBj+1EbddTKJd+82cEHhXXipa0095MJ6RMG3NzdvQX
mcIfeg7jLQitChws/zyrVQ4PkX4268NXSb7hLi18YIvDQVETI53O9zJrlAGomecs
Mx86OyXShkDOOyyGeMlhLxS67ttVb9+E7gUJTb0o2HLO02JQZR7rkpeDMdmztcpH
WD9f
-----END CERTIFICATE-----`;i.default={RedisCloudFixed:{ca:r},RedisCloudFlexible:{ca:r}}},26898,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.noop=i.defaults=i.Debug=i.getPackageMeta=i.zipMap=i.CONNECTION_CLOSED_ERROR_MSG=i.shuffle=i.sample=i.resolveTLSProfile=i.parseURL=i.optimizeErrorStack=i.toArg=i.convertMapToArray=i.convertObjectToArray=i.timeout=i.packObject=i.isInt=i.wrapMultiResult=i.convertBufferToString=void 0;let r=e.r(22734),a=e.r(14747),n=e.r(92509),s=e.r(57517);Object.defineProperty(i,"defaults",{enumerable:!0,get:function(){return s.defaults}}),Object.defineProperty(i,"noop",{enumerable:!0,get:function(){return s.noop}}),i.Debug=e.r(28181).default;let o=e.r(86961);function l(e){let t=parseFloat(e);return!isNaN(e)&&(0|t)===t}i.convertBufferToString=function e(t,i){if(t instanceof Buffer)return t.toString(i);if(Array.isArray(t)){let r=t.length,a=Array(r);for(let n=0;n<r;++n)a[n]=t[n]instanceof Buffer&&"utf8"===i?t[n].toString():e(t[n],i);return a}return t},i.wrapMultiResult=function(e){if(!e)return null;let t=[],i=e.length;for(let r=0;r<i;++r){let i=e[r];i instanceof Error?t.push([i]):t.push([null,i])}return t},i.isInt=l,i.packObject=function(e){let t={},i=e.length;for(let r=1;r<i;r+=2)t[e[r-1]]=e[r];return t},i.timeout=function(e,t){let i=null,r=function(){i&&(clearTimeout(i),i=null,e.apply(this,arguments))};return i=setTimeout(r,t,Error("timeout")),r},i.convertObjectToArray=function(e){let t=[],i=Object.keys(e);for(let r=0,a=i.length;r<a;r++)t.push(i[r],e[i[r]]);return t},i.convertMapToArray=function(e){let t=[],i=0;return e.forEach(function(e,r){t[i]=r,t[i+1]=e,i+=2}),t},i.toArg=function(e){return null==e?"":String(e)},i.optimizeErrorStack=function(e,t,i){let r,a=t.split("\n"),n="";for(r=1;r<a.length&&-1!==a[r].indexOf(i);++r);for(let e=r;e<a.length;++e)n+="\n"+a[e];if(e.stack){let t=e.stack.indexOf("\n");e.stack=e.stack.slice(0,t)+n}return e},i.parseURL=function(e){if(l(e))return{port:e};let t=(0,n.parse)(e,!0,!0);t.slashes||"/"===e[0]||(e="//"+e,t=(0,n.parse)(e,!0,!0));let i=t.query||{},r={};if(t.auth){let e=t.auth.indexOf(":");r.username=-1===e?t.auth:t.auth.slice(0,e),r.password=-1===e?"":t.auth.slice(e+1)}if(t.pathname&&("redis:"===t.protocol||"rediss:"===t.protocol?t.pathname.length>1&&(r.db=t.pathname.slice(1)):r.path=t.pathname),t.host&&(r.host=t.hostname),t.port&&(r.port=t.port),"string"==typeof i.family){let e=Number.parseInt(i.family,10);Number.isNaN(e)||(r.family=e)}return(0,s.defaults)(r,i),r},i.resolveTLSProfile=function(e){let t=null==e?void 0:e.tls;"string"==typeof t&&(t={profile:t});let i=o.default[null==t?void 0:t.profile];return i&&(t=Object.assign({},i,t),delete t.profile,e=Object.assign({},e,{tls:t})),e},i.sample=function(e,t=0){let i=e.length;return t>=i?null:e[t+Math.floor(Math.random()*(i-t))]},i.shuffle=function(e){let t=e.length;for(;t>0;){let i=Math.floor(Math.random()*t);t--,[e[t],e[i]]=[e[i],e[t]]}return e},i.CONNECTION_CLOSED_ERROR_MSG="Connection is closed.",i.zipMap=function(e,t){let i=new Map;return e.forEach((e,r)=>{i.set(e,t[r])}),i};let d=null;i.getPackageMeta=async function(){if(d)return d;try{let e=(0,a.resolve)("/ROOT/node_modules/ioredis/built/utils","..","..","package.json"),t=await r.promises.readFile(e,"utf8");return d={version:JSON.parse(t).version}}catch(e){return d={version:"error-fetching-version"}}}},30842,(e,t,i)=>{"use strict";t.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||0x1fffffffffffff,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},63852,(e,t,i)=>{"use strict";t.exports="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{}},79683,(e,t,i)=>{"use strict";let{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:a,MAX_LENGTH:n}=e.r(30842),s=e.r(63852),o=(i=t.exports={}).re=[],l=i.safeRe=[],d=i.src=[],c=i.safeSrc=[],u=i.t={},p=0,h="[a-zA-Z0-9-]",m=[["\\s",1],["\\d",n],[h,a]],f=(e,t,i)=>{let r=(e=>{for(let[t,i]of m)e=e.split(`${t}*`).join(`${t}{0,${i}}`).split(`${t}+`).join(`${t}{1,${i}}`);return e})(t),a=p++;s(e,a,t),u[e]=a,d[a]=t,c[a]=r,o[a]=new RegExp(t,i?"g":void 0),l[a]=new RegExp(r,i?"g":void 0)};f("NUMERICIDENTIFIER","0|[1-9]\\d*"),f("NUMERICIDENTIFIERLOOSE","\\d+"),f("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${h}*`),f("MAINVERSION",`(${d[u.NUMERICIDENTIFIER]})\\.(${d[u.NUMERICIDENTIFIER]})\\.(${d[u.NUMERICIDENTIFIER]})`),f("MAINVERSIONLOOSE",`(${d[u.NUMERICIDENTIFIERLOOSE]})\\.(${d[u.NUMERICIDENTIFIERLOOSE]})\\.(${d[u.NUMERICIDENTIFIERLOOSE]})`),f("PRERELEASEIDENTIFIER",`(?:${d[u.NONNUMERICIDENTIFIER]}|${d[u.NUMERICIDENTIFIER]})`),f("PRERELEASEIDENTIFIERLOOSE",`(?:${d[u.NONNUMERICIDENTIFIER]}|${d[u.NUMERICIDENTIFIERLOOSE]})`),f("PRERELEASE",`(?:-(${d[u.PRERELEASEIDENTIFIER]}(?:\\.${d[u.PRERELEASEIDENTIFIER]})*))`),f("PRERELEASELOOSE",`(?:-?(${d[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[u.PRERELEASEIDENTIFIERLOOSE]})*))`),f("BUILDIDENTIFIER",`${h}+`),f("BUILD",`(?:\\+(${d[u.BUILDIDENTIFIER]}(?:\\.${d[u.BUILDIDENTIFIER]})*))`),f("FULLPLAIN",`v?${d[u.MAINVERSION]}${d[u.PRERELEASE]}?${d[u.BUILD]}?`),f("FULL",`^${d[u.FULLPLAIN]}$`),f("LOOSEPLAIN",`[v=\\s]*${d[u.MAINVERSIONLOOSE]}${d[u.PRERELEASELOOSE]}?${d[u.BUILD]}?`),f("LOOSE",`^${d[u.LOOSEPLAIN]}$`),f("GTLT","((?:<|>)?=?)"),f("XRANGEIDENTIFIERLOOSE",`${d[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),f("XRANGEIDENTIFIER",`${d[u.NUMERICIDENTIFIER]}|x|X|\\*`),f("XRANGEPLAIN",`[v=\\s]*(${d[u.XRANGEIDENTIFIER]})(?:\\.(${d[u.XRANGEIDENTIFIER]})(?:\\.(${d[u.XRANGEIDENTIFIER]})(?:${d[u.PRERELEASE]})?${d[u.BUILD]}?)?)?`),f("XRANGEPLAINLOOSE",`[v=\\s]*(${d[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[u.XRANGEIDENTIFIERLOOSE]})(?:${d[u.PRERELEASELOOSE]})?${d[u.BUILD]}?)?)?`),f("XRANGE",`^${d[u.GTLT]}\\s*${d[u.XRANGEPLAIN]}$`),f("XRANGELOOSE",`^${d[u.GTLT]}\\s*${d[u.XRANGEPLAINLOOSE]}$`),f("COERCEPLAIN",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),f("COERCE",`${d[u.COERCEPLAIN]}(?:$|[^\\d])`),f("COERCEFULL",d[u.COERCEPLAIN]+`(?:${d[u.PRERELEASE]})?`+`(?:${d[u.BUILD]})?`+"(?:$|[^\\d])"),f("COERCERTL",d[u.COERCE],!0),f("COERCERTLFULL",d[u.COERCEFULL],!0),f("LONETILDE","(?:~>?)"),f("TILDETRIM",`(\\s*)${d[u.LONETILDE]}\\s+`,!0),i.tildeTrimReplace="$1~",f("TILDE",`^${d[u.LONETILDE]}${d[u.XRANGEPLAIN]}$`),f("TILDELOOSE",`^${d[u.LONETILDE]}${d[u.XRANGEPLAINLOOSE]}$`),f("LONECARET","(?:\\^)"),f("CARETTRIM",`(\\s*)${d[u.LONECARET]}\\s+`,!0),i.caretTrimReplace="$1^",f("CARET",`^${d[u.LONECARET]}${d[u.XRANGEPLAIN]}$`),f("CARETLOOSE",`^${d[u.LONECARET]}${d[u.XRANGEPLAINLOOSE]}$`),f("COMPARATORLOOSE",`^${d[u.GTLT]}\\s*(${d[u.LOOSEPLAIN]})$|^$`),f("COMPARATOR",`^${d[u.GTLT]}\\s*(${d[u.FULLPLAIN]})$|^$`),f("COMPARATORTRIM",`(\\s*)${d[u.GTLT]}\\s*(${d[u.LOOSEPLAIN]}|${d[u.XRANGEPLAIN]})`,!0),i.comparatorTrimReplace="$1$2$3",f("HYPHENRANGE",`^\\s*(${d[u.XRANGEPLAIN]})\\s+-\\s+(${d[u.XRANGEPLAIN]})\\s*$`),f("HYPHENRANGELOOSE",`^\\s*(${d[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[u.XRANGEPLAINLOOSE]})\\s*$`),f("STAR","(<|>)?=?\\s*\\*"),f("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),f("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},58124,(e,t,i)=>{"use strict";let r=Object.freeze({loose:!0}),a=Object.freeze({});t.exports=e=>e?"object"!=typeof e?r:e:a},14842,(e,t,i)=>{"use strict";let r=/^[0-9]+$/,a=(e,t)=>{if("number"==typeof e&&"number"==typeof t)return e===t?0:e<t?-1:1;let i=r.test(e),a=r.test(t);return i&&a&&(e*=1,t*=1),e===t?0:i&&!a?-1:a&&!i?1:e<t?-1:1};t.exports={compareIdentifiers:a,rcompareIdentifiers:(e,t)=>a(t,e)}},3421,(e,t,i)=>{"use strict";let r=e.r(63852),{MAX_LENGTH:a,MAX_SAFE_INTEGER:n}=e.r(30842),{safeRe:s,t:o}=e.r(79683),l=e.r(58124),{compareIdentifiers:d}=e.r(14842);class c{constructor(e,t){if(t=l(t),e instanceof c)if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;else e=e.version;else if("string"!=typeof e)throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>a)throw TypeError(`version is longer than ${a} characters`);r("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const i=e.trim().match(t.loose?s[o.LOOSE]:s[o.FULL]);if(!i)throw TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+i[1],this.minor=+i[2],this.patch=+i[3],this.major>n||this.major<0)throw TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw TypeError("Invalid patch version");i[4]?this.prerelease=i[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){let t=+e;if(t>=0&&t<n)return t}return e}):this.prerelease=[],this.build=i[5]?i[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(r("SemVer.compare",this.version,this.options,e),!(e instanceof c)){if("string"==typeof e&&e===this.version)return 0;e=new c(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return(e instanceof c||(e=new c(e,this.options)),this.major<e.major)?-1:this.major>e.major?1:this.minor<e.minor?-1:this.minor>e.minor?1:this.patch<e.patch?-1:+(this.patch>e.patch)}comparePre(e){if(e instanceof c||(e=new c(e,this.options)),this.prerelease.length&&!e.prerelease.length)return -1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{let i=this.prerelease[t],a=e.prerelease[t];if(r("prerelease compare",t,i,a),void 0===i&&void 0===a)return 0;if(void 0===a)return 1;if(void 0===i)return -1;else if(i===a)continue;else return d(i,a)}while(++t)}compareBuild(e){e instanceof c||(e=new c(e,this.options));let t=0;do{let i=this.build[t],a=e.build[t];if(r("build compare",t,i,a),void 0===i&&void 0===a)return 0;if(void 0===a)return 1;if(void 0===i)return -1;else if(i===a)continue;else return d(i,a)}while(++t)}inc(e,t,i){if(e.startsWith("pre")){if(!t&&!1===i)throw Error("invalid increment argument: identifier is empty");if(t){let e=`-${t}`.match(this.options.loose?s[o.PRERELEASELOOSE]:s[o.PRERELEASE]);if(!e||e[1]!==t)throw Error(`invalid identifier: ${t}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,i);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,i);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,i),this.inc("pre",t,i);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,i),this.inc("pre",t,i);break;case"release":if(0===this.prerelease.length)throw Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(0!==this.minor||0!==this.patch||0===this.prerelease.length)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(0!==this.patch||0===this.prerelease.length)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{let e=+!!Number(i);if(0===this.prerelease.length)this.prerelease=[e];else{let r=this.prerelease.length;for(;--r>=0;)"number"==typeof this.prerelease[r]&&(this.prerelease[r]++,r=-2);if(-1===r){if(t===this.prerelease.join(".")&&!1===i)throw Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let r=[t,e];!1===i&&(r=[t]),0===d(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=r):this.prerelease=r}break}default:throw Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}t.exports=c},70749,(e,t,i)=>{"use strict";let r=e.r(3421);t.exports=(e,t,i=!1)=>{if(e instanceof r)return e;try{return new r(e,t)}catch(e){if(!i)return null;throw e}}},87912,(e,t,i)=>{"use strict";let r=e.r(70749);t.exports=(e,t)=>{let i=r(e,t);return i?i.version:null}},26670,(e,t,i)=>{"use strict";let r=e.r(70749);t.exports=(e,t)=>{let i=r(e.trim().replace(/^[=v]+/,""),t);return i?i.version:null}},51116,(e,t,i)=>{"use strict";let r=e.r(3421);t.exports=(e,t,i,a,n)=>{"string"==typeof i&&(n=a,a=i,i=void 0);try{return new r(e instanceof r?e.version:e,i).inc(t,a,n).version}catch(e){return null}}},81286,(e,t,i)=>{"use strict";let r=e.r(70749);t.exports=(e,t)=>{let i=r(e,null,!0),a=r(t,null,!0),n=i.compare(a);if(0===n)return null;let s=n>0,o=s?i:a,l=s?a:i,d=!!o.prerelease.length;if(l.prerelease.length&&!d){if(!l.patch&&!l.minor)return"major";if(0===l.compareMain(o))return l.minor&&!l.patch?"minor":"patch"}let c=d?"pre":"";return i.major!==a.major?c+"major":i.minor!==a.minor?c+"minor":i.patch!==a.patch?c+"patch":"prerelease"}},32499,(e,t,i)=>{"use strict";let r=e.r(3421);t.exports=(e,t)=>new r(e,t).major},28465,(e,t,i)=>{"use strict";let r=e.r(3421);t.exports=(e,t)=>new r(e,t).minor},83108,(e,t,i)=>{"use strict";let r=e.r(3421);t.exports=(e,t)=>new r(e,t).patch},96875,(e,t,i)=>{"use strict";let r=e.r(70749);t.exports=(e,t)=>{let i=r(e,t);return i&&i.prerelease.length?i.prerelease:null}},71810,(e,t,i)=>{"use strict";let r=e.r(3421);t.exports=(e,t,i)=>new r(e,i).compare(new r(t,i))},37024,(e,t,i)=>{"use strict";let r=e.r(71810);t.exports=(e,t,i)=>r(t,e,i)},16254,(e,t,i)=>{"use strict";let r=e.r(71810);t.exports=(e,t)=>r(e,t,!0)},73902,(e,t,i)=>{"use strict";let r=e.r(3421);t.exports=(e,t,i)=>{let a=new r(e,i),n=new r(t,i);return a.compare(n)||a.compareBuild(n)}},65789,(e,t,i)=>{"use strict";let r=e.r(73902);t.exports=(e,t)=>e.sort((e,i)=>r(e,i,t))},57862,(e,t,i)=>{"use strict";let r=e.r(73902);t.exports=(e,t)=>e.sort((e,i)=>r(i,e,t))},30888,(e,t,i)=>{"use strict";let r=e.r(71810);t.exports=(e,t,i)=>r(e,t,i)>0},65769,(e,t,i)=>{"use strict";let r=e.r(71810);t.exports=(e,t,i)=>0>r(e,t,i)},72747,(e,t,i)=>{"use strict";let r=e.r(71810);t.exports=(e,t,i)=>0===r(e,t,i)},63330,(e,t,i)=>{"use strict";let r=e.r(71810);t.exports=(e,t,i)=>0!==r(e,t,i)},24589,(e,t,i)=>{"use strict";let r=e.r(71810);t.exports=(e,t,i)=>r(e,t,i)>=0},20017,(e,t,i)=>{"use strict";let r=e.r(71810);t.exports=(e,t,i)=>0>=r(e,t,i)},15236,(e,t,i)=>{"use strict";let r=e.r(72747),a=e.r(63330),n=e.r(30888),s=e.r(24589),o=e.r(65769),l=e.r(20017);t.exports=(e,t,i,d)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof i&&(i=i.version),e===i;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof i&&(i=i.version),e!==i;case"":case"=":case"==":return r(e,i,d);case"!=":return a(e,i,d);case">":return n(e,i,d);case">=":return s(e,i,d);case"<":return o(e,i,d);case"<=":return l(e,i,d);default:throw TypeError(`Invalid operator: ${t}`)}}},30641,(e,t,i)=>{"use strict";let r=e.r(3421),a=e.r(70749),{safeRe:n,t:s}=e.r(79683);t.exports=(e,t)=>{if(e instanceof r)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let i=null;if((t=t||{}).rtl){let r,a=t.includePrerelease?n[s.COERCERTLFULL]:n[s.COERCERTL];for(;(r=a.exec(e))&&(!i||i.index+i[0].length!==e.length);)i&&r.index+r[0].length===i.index+i[0].length||(i=r),a.lastIndex=r.index+r[1].length+r[2].length;a.lastIndex=-1}else i=e.match(t.includePrerelease?n[s.COERCEFULL]:n[s.COERCE]);if(null===i)return null;let o=i[2],l=i[3]||"0",d=i[4]||"0",c=t.includePrerelease&&i[5]?`-${i[5]}`:"",u=t.includePrerelease&&i[6]?`+${i[6]}`:"";return a(`${o}.${l}.${d}${c}${u}`,t)}},85370,(e,t,i)=>{"use strict";let r=e.r(70749),a=e.r(30842),n=e.r(3421),s=e=>e.startsWith("pre");t.exports=(e,t,i)=>{let o,l;if(!a.RELEASE_TYPES.includes(t))return null;let d=(o=e,l=i,r(o instanceof n?o.version:o,l));return d&&((e,t)=>{if(s(t))return e.version;switch(e.prerelease=[],t){case"major":e.minor=0,e.patch=0;break;case"minor":e.patch=0}return e.format()})(d,t)}},25178,(e,t,i)=>{"use strict";t.exports=class{constructor(){this.max=1e3,this.map=new Map}get(e){let t=this.map.get(e);if(void 0!==t)return this.map.delete(e),this.map.set(e,t),t}delete(e){return this.map.delete(e)}set(e,t){if(!this.delete(e)&&void 0!==t){if(this.map.size>=this.max){let e=this.map.keys().next().value;this.delete(e)}this.map.set(e,t)}return this}}},5912,(e,t,i)=>{"use strict";let r=/\s+/g;class a{constructor(e,t){if(t=s(t),e instanceof a)if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;else return new a(e.raw,t);if(e instanceof o)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e.trim().replace(r," "),this.set=this.raw.split("||").map(e=>this.parseRange(e.trim())).filter(e=>e.length),!this.set.length)throw TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const e=this.set[0];if(this.set=this.set.filter(e=>!b(e[0])),0===this.set.length)this.set=[e];else if(this.set.length>1){for(const e of this.set)if(1===e.length&&g(e[0])){this.set=[e];break}}}this.formatted=void 0}get range(){if(void 0===this.formatted){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let t=this.set[e];for(let e=0;e<t.length;e++)e>0&&(this.formatted+=" "),this.formatted+=t[e].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){let t=((this.options.includePrerelease&&f)|(this.options.loose&&y))+":"+e,i=n.get(t);if(i)return i;let r=this.options.loose,a=r?c[u.HYPHENRANGELOOSE]:c[u.HYPHENRANGE];l("hyphen replace",e=e.replace(a,C(this.options.includePrerelease))),l("comparator trim",e=e.replace(c[u.COMPARATORTRIM],p)),l("tilde trim",e=e.replace(c[u.TILDETRIM],h)),l("caret trim",e=e.replace(c[u.CARETTRIM],m));let s=e.split(" ").map(e=>x(e,this.options)).join(" ").split(/\s+/).map(e=>T(e,this.options));r&&(s=s.filter(e=>(l("loose invalid filter",e,this.options),!!e.match(c[u.COMPARATORLOOSE])))),l("range list",s);let d=new Map;for(let e of s.map(e=>new o(e,this.options))){if(b(e))return[e];d.set(e.value,e)}d.size>1&&d.has("")&&d.delete("");let g=[...d.values()];return n.set(t,g),g}intersects(e,t){if(!(e instanceof a))throw TypeError("a Range is required");return this.set.some(i=>v(i,t)&&e.set.some(e=>v(e,t)&&i.every(i=>e.every(e=>i.intersects(e,t)))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new d(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(D(this.set[t],e,this.options))return!0;return!1}}t.exports=a;let n=new(e.r(25178)),s=e.r(58124),o=e.r(60254),l=e.r(63852),d=e.r(3421),{safeRe:c,t:u,comparatorTrimReplace:p,tildeTrimReplace:h,caretTrimReplace:m}=e.r(79683),{FLAG_INCLUDE_PRERELEASE:f,FLAG_LOOSE:y}=e.r(30842),b=e=>"<0.0.0-0"===e.value,g=e=>""===e.value,v=(e,t)=>{let i=!0,r=e.slice(),a=r.pop();for(;i&&r.length;)i=r.every(e=>a.intersects(e,t)),a=r.pop();return i},x=(e,t)=>(l("comp",e=e.replace(c[u.BUILD],""),t),l("caret",e=E(e,t)),l("tildes",e=k(e,t)),l("xrange",e=w(e,t)),l("stars",e=A(e,t)),e),K=e=>!e||"x"===e.toLowerCase()||"*"===e,k=(e,t)=>e.trim().split(/\s+/).map(e=>S(e,t)).join(" "),S=(e,t)=>{let i=t.loose?c[u.TILDELOOSE]:c[u.TILDE];return e.replace(i,(t,i,r,a,n)=>{let s;return l("tilde",e,t,i,r,a,n),K(i)?s="":K(r)?s=`>=${i}.0.0 <${+i+1}.0.0-0`:K(a)?s=`>=${i}.${r}.0 <${i}.${+r+1}.0-0`:n?(l("replaceTilde pr",n),s=`>=${i}.${r}.${a}-${n} <${i}.${+r+1}.0-0`):s=`>=${i}.${r}.${a} <${i}.${+r+1}.0-0`,l("tilde return",s),s})},E=(e,t)=>e.trim().split(/\s+/).map(e=>I(e,t)).join(" "),I=(e,t)=>{l("caret",e,t);let i=t.loose?c[u.CARETLOOSE]:c[u.CARET],r=t.includePrerelease?"-0":"";return e.replace(i,(t,i,a,n,s)=>{let o;return l("caret",e,t,i,a,n,s),K(i)?o="":K(a)?o=`>=${i}.0.0${r} <${+i+1}.0.0-0`:K(n)?o="0"===i?`>=${i}.${a}.0${r} <${i}.${+a+1}.0-0`:`>=${i}.${a}.0${r} <${+i+1}.0.0-0`:s?(l("replaceCaret pr",s),o="0"===i?"0"===a?`>=${i}.${a}.${n}-${s} <${i}.${a}.${+n+1}-0`:`>=${i}.${a}.${n}-${s} <${i}.${+a+1}.0-0`:`>=${i}.${a}.${n}-${s} <${+i+1}.0.0-0`):(l("no pr"),o="0"===i?"0"===a?`>=${i}.${a}.${n}${r} <${i}.${a}.${+n+1}-0`:`>=${i}.${a}.${n}${r} <${i}.${+a+1}.0-0`:`>=${i}.${a}.${n} <${+i+1}.0.0-0`),l("caret return",o),o})},w=(e,t)=>(l("replaceXRanges",e,t),e.split(/\s+/).map(e=>j(e,t)).join(" ")),j=(e,t)=>{e=e.trim();let i=t.loose?c[u.XRANGELOOSE]:c[u.XRANGE];return e.replace(i,(i,r,a,n,s,o)=>{l("xRange",e,i,r,a,n,s,o);let d=K(a),c=d||K(n),u=c||K(s);return"="===r&&u&&(r=""),o=t.includePrerelease?"-0":"",d?i=">"===r||"<"===r?"<0.0.0-0":"*":r&&u?(c&&(n=0),s=0,">"===r?(r=">=",c?(a=+a+1,n=0):n=+n+1,s=0):"<="===r&&(r="<",c?a=+a+1:n=+n+1),"<"===r&&(o="-0"),i=`${r+a}.${n}.${s}${o}`):c?i=`>=${a}.0.0${o} <${+a+1}.0.0-0`:u&&(i=`>=${a}.${n}.0${o} <${a}.${+n+1}.0-0`),l("xRange return",i),i})},A=(e,t)=>(l("replaceStars",e,t),e.trim().replace(c[u.STAR],"")),T=(e,t)=>(l("replaceGTE0",e,t),e.trim().replace(c[t.includePrerelease?u.GTE0PRE:u.GTE0],"")),C=e=>(t,i,r,a,n,s,o,l,d,c,u,p)=>(i=K(r)?"":K(a)?`>=${r}.0.0${e?"-0":""}`:K(n)?`>=${r}.${a}.0${e?"-0":""}`:s?`>=${i}`:`>=${i}${e?"-0":""}`,l=K(d)?"":K(c)?`<${+d+1}.0.0-0`:K(u)?`<${d}.${+c+1}.0-0`:p?`<=${d}.${c}.${u}-${p}`:e?`<${d}.${c}.${+u+1}-0`:`<=${l}`,`${i} ${l}`.trim()),D=(e,t,i)=>{for(let i=0;i<e.length;i++)if(!e[i].test(t))return!1;if(t.prerelease.length&&!i.includePrerelease){for(let i=0;i<e.length;i++)if(l(e[i].semver),e[i].semver!==o.ANY&&e[i].semver.prerelease.length>0){let r=e[i].semver;if(r.major===t.major&&r.minor===t.minor&&r.patch===t.patch)return!0}return!1}return!0}},60254,(e,t,i)=>{"use strict";let r=Symbol("SemVer ANY");class a{static get ANY(){return r}constructor(e,t){if(t=n(t),e instanceof a)if(!!t.loose===e.loose)return e;else e=e.value;d("comparator",e=e.trim().split(/\s+/).join(" "),t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===r?this.value="":this.value=this.operator+this.semver.version,d("comp",this)}parse(e){let t=this.options.loose?s[o.COMPARATORLOOSE]:s[o.COMPARATOR],i=e.match(t);if(!i)throw TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==i[1]?i[1]:"","="===this.operator&&(this.operator=""),i[2]?this.semver=new c(i[2],this.options.loose):this.semver=r}toString(){return this.value}test(e){if(d("Comparator.test",e,this.options.loose),this.semver===r||e===r)return!0;if("string"==typeof e)try{e=new c(e,this.options)}catch(e){return!1}return l(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof a))throw TypeError("a Comparator is required");return""===this.operator?""===this.value||new u(e.value,t).test(this.value):""===e.operator?""===e.value||new u(this.value,t).test(e.semver):!((t=n(t)).includePrerelease&&("<0.0.0-0"===this.value||"<0.0.0-0"===e.value)||!t.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0")))&&!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||l(this.semver,"<",e.semver,t)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||l(this.semver,">",e.semver,t)&&this.operator.startsWith("<")&&e.operator.startsWith(">"))}}t.exports=a;let n=e.r(58124),{safeRe:s,t:o}=e.r(79683),l=e.r(15236),d=e.r(63852),c=e.r(3421),u=e.r(5912)},18247,(e,t,i)=>{"use strict";let r=e.r(5912);t.exports=(e,t,i)=>{try{t=new r(t,i)}catch(e){return!1}return t.test(e)}},35935,(e,t,i)=>{"use strict";let r=e.r(5912);t.exports=(e,t)=>new r(e,t).set.map(e=>e.map(e=>e.value).join(" ").trim().split(" "))},77956,(e,t,i)=>{"use strict";let r=e.r(3421),a=e.r(5912);t.exports=(e,t,i)=>{let n=null,s=null,o=null;try{o=new a(t,i)}catch(e){return null}return e.forEach(e=>{o.test(e)&&(!n||-1===s.compare(e))&&(s=new r(n=e,i))}),n}},787,(e,t,i)=>{"use strict";let r=e.r(3421),a=e.r(5912);t.exports=(e,t,i)=>{let n=null,s=null,o=null;try{o=new a(t,i)}catch(e){return null}return e.forEach(e=>{o.test(e)&&(!n||1===s.compare(e))&&(s=new r(n=e,i))}),n}},56142,(e,t,i)=>{"use strict";let r=e.r(3421),a=e.r(5912),n=e.r(30888);t.exports=(e,t)=>{e=new a(e,t);let i=new r("0.0.0");if(e.test(i)||(i=new r("0.0.0-0"),e.test(i)))return i;i=null;for(let t=0;t<e.set.length;++t){let a=e.set[t],s=null;a.forEach(e=>{let t=new r(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":(!s||n(t,s))&&(s=t);break;case"<":case"<=":break;default:throw Error(`Unexpected operation: ${e.operator}`)}}),s&&(!i||n(i,s))&&(i=s)}return i&&e.test(i)?i:null}},35992,(e,t,i)=>{"use strict";let r=e.r(5912);t.exports=(e,t)=>{try{return new r(e,t).range||"*"}catch(e){return null}}},73301,(e,t,i)=>{"use strict";let r=e.r(3421),a=e.r(60254),{ANY:n}=a,s=e.r(5912),o=e.r(18247),l=e.r(30888),d=e.r(65769),c=e.r(20017),u=e.r(24589);t.exports=(e,t,i,p)=>{let h,m,f,y,b;switch(e=new r(e,p),t=new s(t,p),i){case">":h=l,m=c,f=d,y=">",b=">=";break;case"<":h=d,m=u,f=l,y="<",b="<=";break;default:throw TypeError('Must provide a hilo val of "<" or ">"')}if(o(e,t,p))return!1;for(let i=0;i<t.set.length;++i){let r=t.set[i],s=null,o=null;if(r.forEach(e=>{e.semver===n&&(e=new a(">=0.0.0")),s=s||e,o=o||e,h(e.semver,s.semver,p)?s=e:f(e.semver,o.semver,p)&&(o=e)}),s.operator===y||s.operator===b||(!o.operator||o.operator===y)&&m(e,o.semver)||o.operator===b&&f(e,o.semver))return!1}return!0}},51479,(e,t,i)=>{"use strict";let r=e.r(73301);t.exports=(e,t,i)=>r(e,t,">",i)},79715,(e,t,i)=>{"use strict";let r=e.r(73301);t.exports=(e,t,i)=>r(e,t,"<",i)},77283,(e,t,i)=>{"use strict";let r=e.r(5912);t.exports=(e,t,i)=>(e=new r(e,i),t=new r(t,i),e.intersects(t,i))},20848,(e,t,i)=>{"use strict";let r=e.r(18247),a=e.r(71810);t.exports=(e,t,i)=>{let n=[],s=null,o=null,l=e.sort((e,t)=>a(e,t,i));for(let e of l)r(e,t,i)?(o=e,s||(s=e)):(o&&n.push([s,o]),o=null,s=null);s&&n.push([s,null]);let d=[];for(let[e,t]of n)e===t?d.push(e):t||e!==l[0]?t?e===l[0]?d.push(`<=${t}`):d.push(`${e} - ${t}`):d.push(`>=${e}`):d.push("*");let c=d.join(" || "),u="string"==typeof t.raw?t.raw:String(t);return c.length<u.length?c:t}},5659,(e,t,i)=>{"use strict";let r=e.r(5912),a=e.r(60254),{ANY:n}=a,s=e.r(18247),o=e.r(71810),l=[new a(">=0.0.0-0")],d=[new a(">=0.0.0")],c=(e,t,i)=>{let r,a,c,h,m,f,y;if(e===t)return!0;if(1===e.length&&e[0].semver===n)if(1===t.length&&t[0].semver===n)return!0;else e=i.includePrerelease?l:d;if(1===t.length&&t[0].semver===n)if(i.includePrerelease)return!0;else t=d;let b=new Set;for(let t of e)">"===t.operator||">="===t.operator?r=u(r,t,i):"<"===t.operator||"<="===t.operator?a=p(a,t,i):b.add(t.semver);if(b.size>1)return null;if(r&&a&&((c=o(r.semver,a.semver,i))>0||0===c&&(">="!==r.operator||"<="!==a.operator)))return null;for(let e of b){if(r&&!s(e,String(r),i)||a&&!s(e,String(a),i))return null;for(let r of t)if(!s(e,String(r),i))return!1;return!0}let g=!!a&&!i.includePrerelease&&!!a.semver.prerelease.length&&a.semver,v=!!r&&!i.includePrerelease&&!!r.semver.prerelease.length&&r.semver;for(let e of(g&&1===g.prerelease.length&&"<"===a.operator&&0===g.prerelease[0]&&(g=!1),t)){if(y=y||">"===e.operator||">="===e.operator,f=f||"<"===e.operator||"<="===e.operator,r){if(v&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===v.major&&e.semver.minor===v.minor&&e.semver.patch===v.patch&&(v=!1),">"===e.operator||">="===e.operator){if((h=u(r,e,i))===e&&h!==r)return!1}else if(">="===r.operator&&!s(r.semver,String(e),i))return!1}if(a){if(g&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===g.major&&e.semver.minor===g.minor&&e.semver.patch===g.patch&&(g=!1),"<"===e.operator||"<="===e.operator){if((m=p(a,e,i))===e&&m!==a)return!1}else if("<="===a.operator&&!s(a.semver,String(e),i))return!1}if(!e.operator&&(a||r)&&0!==c)return!1}return(!r||!f||!!a||0===c)&&(!a||!y||!!r||0===c)&&!v&&!g&&!0},u=(e,t,i)=>{if(!e)return t;let r=o(e.semver,t.semver,i);return r>0?e:r<0||">"===t.operator&&">="===e.operator?t:e},p=(e,t,i)=>{if(!e)return t;let r=o(e.semver,t.semver,i);return r<0?e:r>0||"<"===t.operator&&"<="===e.operator?t:e};t.exports=(e,t,i={})=>{if(e===t)return!0;e=new r(e,i),t=new r(t,i);let a=!1;e:for(let r of e.set){for(let e of t.set){let t=c(r,e,i);if(a=a||null!==t,t)continue e}if(a)return!1}return!0}},50015,(e,t,i)=>{"use strict";let r=e.r(79683),a=e.r(30842),n=e.r(3421),s=e.r(14842),o=e.r(70749),l=e.r(87912),d=e.r(26670),c=e.r(51116),u=e.r(81286),p=e.r(32499),h=e.r(28465),m=e.r(83108),f=e.r(96875),y=e.r(71810),b=e.r(37024),g=e.r(16254),v=e.r(73902),x=e.r(65789),K=e.r(57862),k=e.r(30888),S=e.r(65769),E=e.r(72747),I=e.r(63330),w=e.r(24589),j=e.r(20017),A=e.r(15236),T=e.r(30641),C=e.r(85370),D=e.r(60254),O=e.r(5912),R=e.r(18247),M=e.r(35935),_=e.r(77956),P=e.r(787),N=e.r(56142),L=e.r(35992),J=e.r(73301),q=e.r(51479),F=e.r(79715),G=e.r(77283);t.exports={parse:o,valid:l,clean:d,inc:c,diff:u,major:p,minor:h,patch:m,prerelease:f,compare:y,rcompare:b,compareLoose:g,compareBuild:v,sort:x,rsort:K,gt:k,lt:S,eq:E,neq:I,gte:w,lte:j,cmp:A,coerce:T,truncate:C,Comparator:D,Range:O,satisfies:R,toComparators:M,maxSatisfying:_,minSatisfying:P,minVersion:N,validRange:L,outside:J,gtr:q,ltr:F,intersects:G,simplifyRange:e.r(20848),subset:e.r(5659),SemVer:n,re:r.re,src:r.src,tokens:r.t,SEMVER_SPEC_VERSION:a.SEMVER_SPEC_VERSION,RELEASE_TYPES:a.RELEASE_TYPES,compareIdentifiers:s.compareIdentifiers,rcompareIdentifiers:s.rcompareIdentifiers}},62562,(e,t,i)=>{t.exports=e.x("module",()=>require("module"))},46786,(e,t,i)=>{t.exports=e.x("os",()=>require("os"))},49772,(e,t,i)=>{"use strict";let r=()=>"linux"===process.platform,a=null;t.exports={isLinux:r,getReport:()=>(!a&&(r()&&process.report||(a={})),a)}},48150,(e,t,i)=>{"use strict";let r=e.r(22734);t.exports={LDD_PATH:"/usr/bin/ldd",SELF_PATH:"/proc/self/exe",readFileSync:e=>{let t=r.openSync(e,"r"),i=Buffer.alloc(2048),a=r.readSync(t,i,0,2048,0);return r.close(t,()=>{}),i.subarray(0,a)},readFile:e=>new Promise((t,i)=>{r.open(e,"r",(e,a)=>{if(e)i(e);else{let e=Buffer.alloc(2048);r.read(a,e,0,2048,0,(i,n)=>{t(e.subarray(0,n)),r.close(a,()=>{})})}})})}},14496,(e,t,i)=>{"use strict";t.exports={interpreterPath:e=>{if(e.length<64||0x7f454c46!==e.readUInt32BE(0)||2!==e.readUInt8(4)||1!==e.readUInt8(5))return null;let t=e.readUInt32LE(32),i=e.readUInt16LE(54),r=e.readUInt16LE(56);for(let a=0;a<r;a++){let r=t+a*i;if(3===e.readUInt32LE(r)){let t=e.readUInt32LE(r+8),i=e.readUInt32LE(r+32);return e.subarray(t,t+i).toString().replace(/\0.*$/g,"")}}return null}}},55146,(e,t,i)=>{"use strict";let r,a,n,s=e.r(33405),{isLinux:o,getReport:l}=e.r(49772),{LDD_PATH:d,SELF_PATH:c,readFile:u,readFileSync:p}=e.r(48150),{interpreterPath:h}=e.r(14496),m="getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true",f="",y=()=>f||new Promise(e=>{s.exec(m,(t,i)=>{e(f=t?" ":i)})}),b=()=>{if(!f)try{f=s.execSync(m,{encoding:"utf8"})}catch(e){f=" "}return f},g="glibc",v=/LIBC[a-z0-9 \-).]*?(\d+\.\d+)/i,x="musl",K=e=>e.includes("libc.musl-")||e.includes("ld-musl-"),k=()=>{let e=l();return e.header&&e.header.glibcVersionRuntime?g:Array.isArray(e.sharedObjects)&&e.sharedObjects.some(K)?x:null},S=e=>{let[t,i]=e.split(/[\r\n]+/);return t&&t.includes(g)?g:i&&i.includes(x)?x:null},E=e=>{if(e){if(e.includes("/ld-musl-"))return x;else if(e.includes("/ld-linux-"))return g}return null},I=e=>(e=e.toString()).includes("musl")?x:e.includes("GNU C Library")?g:null,w=async()=>{if(void 0!==a)return a;a=null;try{let e=await u(d);a=I(e)}catch(e){}return a},j=async()=>{if(void 0!==r)return r;r=null;try{let e=await u(c),t=h(e);r=E(t)}catch(e){}return r},A=async()=>{let e=null;return o()&&((e=await j())||((e=await w())||(e=k()),e||(e=S(await y())))),e},T=()=>{let e=null;return o()&&((e=(()=>{if(void 0!==r)return r;r=null;try{let e=p(c),t=h(e);r=E(t)}catch(e){}return r})())||((e=(()=>{if(void 0!==a)return a;a=null;try{let e=p(d);a=I(e)}catch(e){}return a})())||(e=k()),e||(e=S(b())))),e},C=async()=>o()&&await A()!==g,D=async()=>{if(void 0!==n)return n;n=null;try{let e=(await u(d)).match(v);e&&(n=e[1])}catch(e){}return n},O=()=>{let e=l();return e.header&&e.header.glibcVersionRuntime?e.header.glibcVersionRuntime:null},R=e=>e.trim().split(/\s+/)[1],M=e=>{let[t,i,r]=e.split(/[\r\n]+/);return t&&t.includes(g)?R(t):i&&r&&i.includes(x)?R(r):null};t.exports={GLIBC:g,MUSL:x,family:A,familySync:T,isNonGlibcLinux:C,isNonGlibcLinuxSync:()=>o()&&T()!==g,version:async()=>{let e=null;return o()&&((e=await D())||(e=O()),e||(e=M(await y()))),e},versionSync:()=>{let e=null;return o()&&((e=(()=>{if(void 0!==n)return n;n=null;try{let e=p(d).match(v);e&&(n=e[1])}catch(e){}return n})())||(e=O()),e||(e=M(b()))),e}}},56943,(e,t,i)=>{var r=e.r(22734),a=e.r(14747),n=e.r(92509),s=e.r(46786),o="function"==typeof __webpack_require__?__non_webpack_require__:e.t,l=process.config&&process.config.variables||{},d=!!process.env.PREBUILDS_ONLY,c=process.versions,u=c.modules;(c.deno||process.isBun)&&(u="unsupported");var p=process.versions&&process.versions.electron||process.env.ELECTRON_RUN_AS_NODE?"electron":process.versions&&process.versions.nw?"node-webkit":"node",h=process.env.npm_config_arch||s.arch(),m=process.env.npm_config_platform||s.platform(),f=process.env.LIBC||(!function(t){if("linux"!==t)return!1;let{familySync:i,MUSL:r}=e.r(55146);return i()===r}(m)?"glibc":"musl"),y=process.env.ARM_VERSION||("arm64"===h?"8":l.arm_version)||"",b=(c.uv||"").split(".")[0];function g(e){return o(g.resolve(e))}function v(e){try{return r.readdirSync(e)}catch(e){return[]}}function x(e,t){var i=v(e).filter(t);return i[0]&&a.join(e,i[0])}function K(e){return/\.node$/.test(e)}function k(e){var t=e.split("-");if(2===t.length){var i=t[0],r=t[1].split("+");if(i&&r.length&&r.every(Boolean))return{name:e,platform:i,architectures:r}}}function S(e,t){return function(i){return null!=i&&i.platform===e&&i.architectures.includes(t)}}function E(e,t){return e.architectures.length-t.architectures.length}function I(e){var t=e.split("."),i=t.pop(),r={file:e,specificity:0};if("node"===i){for(var a=0;a<t.length;a++){var n=t[a];if("node"===n||"electron"===n||"node-webkit"===n)r.runtime=n;else if("napi"===n)r.napi=!0;else if("abi"===n.slice(0,3))r.abi=n.slice(3);else if("uv"===n.slice(0,2))r.uv=n.slice(2);else if("armv"===n.slice(0,4))r.armv=n.slice(4);else{if("glibc"!==n&&"musl"!==n)continue;r.libc=n}r.specificity++}return r}}function w(e,t){return function(i){var r;return null!=i&&(i.runtime===e||!!("node"===(r=i).runtime&&r.napi))&&(i.abi===t||!!i.napi)&&(!i.uv||i.uv===b)&&(!i.armv||i.armv===y)&&(!i.libc||i.libc===f)&&!0}}function j(e){return function(t,i){return t.runtime!==i.runtime?t.runtime===e?-1:1:t.abi!==i.abi?t.abi?-1:1:t.specificity!==i.specificity?t.specificity>i.specificity?-1:1:0}}t.exports=g,g.resolve=g.path=function(t){t=a.resolve(t||".");var i,r,s="";try{var l=(s=o(a.join(t,"package.json")).name).toUpperCase().replace(/-/g,"_");process.env[l+"_PREBUILD"]&&(t=process.env[l+"_PREBUILD"])}catch(e){i=e}if(!d){var c=x(a.join(t,"build/Release"),K);if(c)return c;var g=x(a.join(t,"build/Debug"),K);if(g)return g}var A=R(t);if(A)return A;var T=R(a.dirname(process.execPath));if(T)return T;var C=("@"==s[0]?"":"@"+s+"/")+s+"-"+m+"-"+h;try{var D=a.dirname(e.r(62562).createRequire(n.pathToFileURL(a.join(t,"package.json"))).resolve(C));return M(D)}catch(e){r=e}let O="No native build was found for "+["platform="+m,"arch="+h,"runtime="+p,"abi="+u,"uv="+b,y?"armv="+y:"","libc="+f,"node="+process.versions.node,process.versions.electron?"electron="+process.versions.electron:"","function"==typeof __webpack_require__?"webpack=true":""].filter(Boolean).join(" ")+"\n    attempted loading from: "+t+" and package: "+C+"\n";throw i&&(O+="Error finding package.json: "+i.message+"\n"),r&&(O+="Error resolving package: "+r.message+"\n"),Error(O);function R(e){var t=v(a.join(e,"prebuilds")).map(k).filter(S(m,h)).sort(E)[0];if(t)return M(a.join(e,"prebuilds",t.name))}function M(e){var t=v(e).map(I).filter(w(p,u)).sort(j(p))[0];if(t)return a.join(e,t.file)}},g.parseTags=I,g.matchTags=w,g.compareTags=j,g.parseTuple=k,g.matchTuple=S,g.compareTuples=E},80583,(e,t,i)=>{let r="function"==typeof __webpack_require__?__non_webpack_require__:e.t;"function"==typeof r.addon?t.exports=r.addon.bind(r):t.exports=e.r(56943)},70156,(e,t,i)=>{t.exports=e.r(80583)("/ROOT/node_modules/msgpackr-extract")},66990,(e,t,i)=>{t.exports=JSON.parse('{"acl":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"append":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"asking":{"arity":1,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"auth":{"arity":-2,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"bgrewriteaof":{"arity":1,"flags":["admin","noscript","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"bgsave":{"arity":-1,"flags":["admin","noscript","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"bitcount":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"bitfield":{"arity":-2,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"bitfield_ro":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"bitop":{"arity":-4,"flags":["write","denyoom"],"keyStart":2,"keyStop":-1,"step":1},"bitpos":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"blmove":{"arity":6,"flags":["write","denyoom","noscript","blocking"],"keyStart":1,"keyStop":2,"step":1},"blmpop":{"arity":-5,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"blpop":{"arity":-3,"flags":["write","noscript","blocking"],"keyStart":1,"keyStop":-2,"step":1},"brpop":{"arity":-3,"flags":["write","noscript","blocking"],"keyStart":1,"keyStop":-2,"step":1},"brpoplpush":{"arity":4,"flags":["write","denyoom","noscript","blocking"],"keyStart":1,"keyStop":2,"step":1},"bzmpop":{"arity":-5,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"bzpopmax":{"arity":-3,"flags":["write","noscript","blocking","fast"],"keyStart":1,"keyStop":-2,"step":1},"bzpopmin":{"arity":-3,"flags":["write","noscript","blocking","fast"],"keyStart":1,"keyStop":-2,"step":1},"client":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"cluster":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"command":{"arity":-1,"flags":["loading","stale"],"keyStart":0,"keyStop":0,"step":0},"config":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"copy":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"dbsize":{"arity":1,"flags":["readonly","fast"],"keyStart":0,"keyStop":0,"step":0},"debug":{"arity":-2,"flags":["admin","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"decr":{"arity":2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"decrby":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"del":{"arity":-2,"flags":["write"],"keyStart":1,"keyStop":-1,"step":1},"discard":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"dump":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"echo":{"arity":2,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"eval":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"eval_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"evalsha":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"evalsha_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"exec":{"arity":1,"flags":["noscript","loading","stale","skip_slowlog"],"keyStart":0,"keyStop":0,"step":0},"exists":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"expire":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"expireat":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"expiretime":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"failover":{"arity":-1,"flags":["admin","noscript","stale"],"keyStart":0,"keyStop":0,"step":0},"fcall":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"fcall_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"flushall":{"arity":-1,"flags":["write"],"keyStart":0,"keyStop":0,"step":0},"flushdb":{"arity":-1,"flags":["write"],"keyStart":0,"keyStop":0,"step":0},"function":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"geoadd":{"arity":-5,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"geodist":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geohash":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geopos":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"georadius":{"arity":-6,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"georadius_ro":{"arity":-6,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"georadiusbymember":{"arity":-5,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"georadiusbymember_ro":{"arity":-5,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geosearch":{"arity":-7,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geosearchstore":{"arity":-8,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"get":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"getbit":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"getdel":{"arity":2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"getex":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"getrange":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"getset":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hdel":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hello":{"arity":-1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"hexists":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hexpire":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hexpireat":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hexpiretime":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hget":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hgetall":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hgetdel":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hgetex":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hincrby":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hincrbyfloat":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hkeys":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hmget":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hmset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hpersist":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hpexpire":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hpexpireat":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hpexpiretime":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hpttl":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hrandfield":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hsetex":{"arity":-6,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hsetnx":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hstrlen":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"httl":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hvals":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"incr":{"arity":2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"incrby":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"incrbyfloat":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"info":{"arity":-1,"flags":["loading","stale"],"keyStart":0,"keyStop":0,"step":0},"keys":{"arity":2,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"lastsave":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"latency":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"lcs":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":2,"step":1},"lindex":{"arity":3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"linsert":{"arity":5,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"llen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"lmove":{"arity":5,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"lmpop":{"arity":-4,"flags":["write","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"lolwut":{"arity":-1,"flags":["readonly","fast"],"keyStart":0,"keyStop":0,"step":0},"lpop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"lpos":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"lpush":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"lpushx":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"lrange":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"lrem":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"lset":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"ltrim":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"memory":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"mget":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"migrate":{"arity":-6,"flags":["write","movablekeys"],"keyStart":3,"keyStop":3,"step":1},"module":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"monitor":{"arity":1,"flags":["admin","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"move":{"arity":3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"mset":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":2},"msetnx":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":2},"multi":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"object":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"persist":{"arity":2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpire":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpireat":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpiretime":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"pfadd":{"arity":-2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"pfcount":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"pfdebug":{"arity":3,"flags":["write","denyoom","admin"],"keyStart":2,"keyStop":2,"step":1},"pfmerge":{"arity":-2,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"pfselftest":{"arity":1,"flags":["admin"],"keyStart":0,"keyStop":0,"step":0},"ping":{"arity":-1,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"psetex":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"psubscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"psync":{"arity":-3,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"pttl":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"publish":{"arity":3,"flags":["pubsub","loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"pubsub":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"punsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"quit":{"arity":-1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"randomkey":{"arity":1,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"readonly":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"readwrite":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"rename":{"arity":3,"flags":["write"],"keyStart":1,"keyStop":2,"step":1},"renamenx":{"arity":3,"flags":["write","fast"],"keyStart":1,"keyStop":2,"step":1},"replconf":{"arity":-1,"flags":["admin","noscript","loading","stale","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"replicaof":{"arity":3,"flags":["admin","noscript","stale","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"reset":{"arity":1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"restore":{"arity":-4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"restore-asking":{"arity":-4,"flags":["write","denyoom","asking"],"keyStart":1,"keyStop":1,"step":1},"role":{"arity":1,"flags":["noscript","loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"rpop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"rpoplpush":{"arity":3,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"rpush":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"rpushx":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"sadd":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"save":{"arity":1,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"scan":{"arity":-2,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"scard":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"script":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"sdiff":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sdiffstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"select":{"arity":2,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"set":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setbit":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setex":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setnx":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"setrange":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"shutdown":{"arity":-1,"flags":["admin","noscript","loading","stale","no_multi","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"sinter":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sintercard":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"sinterstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"sismember":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"slaveof":{"arity":3,"flags":["admin","noscript","stale","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"slowlog":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"smembers":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"smismember":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"smove":{"arity":4,"flags":["write","fast"],"keyStart":1,"keyStop":2,"step":1},"sort":{"arity":-2,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"sort_ro":{"arity":-2,"flags":["readonly","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"spop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"spublish":{"arity":3,"flags":["pubsub","loading","stale","fast"],"keyStart":1,"keyStop":1,"step":1},"srandmember":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"srem":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"sscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"ssubscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":1,"keyStop":-1,"step":1},"strlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"subscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"substr":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"sunion":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sunionstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"sunsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":1,"keyStop":-1,"step":1},"swapdb":{"arity":3,"flags":["write","fast"],"keyStart":0,"keyStop":0,"step":0},"sync":{"arity":1,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"time":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"touch":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"ttl":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"type":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"unlink":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":-1,"step":1},"unsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"unwatch":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"wait":{"arity":3,"flags":["noscript"],"keyStart":0,"keyStop":0,"step":0},"watch":{"arity":-2,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":1,"keyStop":-1,"step":1},"xack":{"arity":-4,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xadd":{"arity":-5,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"xautoclaim":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xclaim":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xdel":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xdelex":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xgroup":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"xinfo":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"xlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"xpending":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xread":{"arity":-4,"flags":["readonly","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"xreadgroup":{"arity":-7,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"xrevrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xsetid":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"xtrim":{"arity":-4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zadd":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"zcard":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zcount":{"arity":4,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zdiff":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zdiffstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"zincrby":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"zinter":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zintercard":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zinterstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"zlexcount":{"arity":4,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zmpop":{"arity":-4,"flags":["write","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zmscore":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zpopmax":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zpopmin":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zrandmember":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangebylex":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangebyscore":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangestore":{"arity":-5,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"zrank":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zrem":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zremrangebylex":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zremrangebyrank":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zremrangebyscore":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zrevrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrangebylex":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrangebyscore":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrank":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zscore":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zunion":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zunionstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1}}')},12522,(e,t,i)=>{"use strict";var r=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i,"__esModule",{value:!0}),i.getKeyIndexes=i.hasFlag=i.exists=i.list=void 0;let a=r(e.r(66990));i.list=Object.keys(a.default);let n={};function s(e){"string"!=typeof e&&(e=String(e));let t=e.indexOf("->");return -1===t?e.length:t}i.list.forEach(e=>{n[e]=a.default[e].flags.reduce(function(e,t){return e[t]=!0,e},{})}),i.exists=function(e,t){return e=(null==t?void 0:t.caseInsensitive)?String(e).toLowerCase():e,!!a.default[e]},i.hasFlag=function(e,t,i){if(!n[e=(null==i?void 0:i.nameCaseInsensitive)?String(e).toLowerCase():e])throw Error("Unknown command "+e);return!!n[e][t]},i.getKeyIndexes=function(e,t,i){e=(null==i?void 0:i.nameCaseInsensitive)?String(e).toLowerCase():e;let r=a.default[e];if(!r)throw Error("Unknown command "+e);if(!Array.isArray(t))throw Error("Expect args to be an array");let n=[],o=!!(i&&i.parseExternalKey),l=(e,t)=>{let i=[],r=Number(e[t]);for(let e=0;e<r;e++)i.push(e+t+1);return i},d=(e,t,i)=>{for(let r=t;r<e.length-1;r+=1)if(String(e[r]).toLowerCase()===i.toLowerCase())return r+1;return null};switch(e){case"zunionstore":case"zinterstore":case"zdiffstore":n.push(0,...l(t,1));break;case"eval":case"evalsha":case"eval_ro":case"evalsha_ro":case"fcall":case"fcall_ro":case"blmpop":case"bzmpop":n.push(...l(t,1));break;case"sintercard":case"lmpop":case"zunion":case"zinter":case"zmpop":case"zintercard":case"zdiff":n.push(...l(t,0));break;case"georadius":{n.push(0);let e=d(t,5,"STORE");e&&n.push(e);let i=d(t,5,"STOREDIST");i&&n.push(i);break}case"georadiusbymember":{n.push(0);let e=d(t,4,"STORE");e&&n.push(e);let i=d(t,4,"STOREDIST");i&&n.push(i);break}case"sort":case"sort_ro":n.push(0);for(let e=1;e<t.length-1;e++){let i=t[e];if("string"!=typeof i)continue;let r=i.toUpperCase();"GET"===r?(e+=1,"#"!==(i=t[e])&&(o?n.push([e,s(i)]):n.push(e))):"BY"===r?(e+=1,o?n.push([e,s(t[e])]):n.push(e)):"STORE"===r&&(e+=1,n.push(e))}break;case"migrate":if(""===t[2])for(let e=5;e<t.length-1;e++){let i=t[e];if("string"==typeof i&&"KEYS"===i.toUpperCase()){for(let i=e+1;i<t.length;i++)n.push(i);break}}else n.push(2);break;case"xreadgroup":case"xread":for(let i=3*("xread"!==e);i<t.length-1;i++)if("STREAMS"===String(t[i]).toUpperCase()){for(let e=i+1;e<=i+(t.length-1-i)/2;e++)n.push(e);break}break;default:if(r.step>0){let e=r.keyStart-1,i=r.keyStop>0?r.keyStop:t.length+r.keyStop+1;for(let t=e;t<i;t+=r.step)n.push(t)}}return n}},48575,(e,t,i)=>{"use strict";let r;function a(e,t){try{let e=r;return r=null,e.apply(this,arguments)}catch(e){return i.errorObj.e=e,i.errorObj}}Object.defineProperty(i,"__esModule",{value:!0}),i.tryCatch=i.errorObj=void 0,i.errorObj={e:{}},i.tryCatch=function(e){return r=e,a}},19335,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(48575);function a(e){setTimeout(function(){throw e},0)}i.default=function(e,t,i){return"function"==typeof t&&e.then(e=>{let n;(n=void 0!==i&&Object(i).spread&&Array.isArray(e)?r.tryCatch(t).apply(void 0,[null].concat(e)):void 0===e?r.tryCatch(t)(null):r.tryCatch(t)(null,e))===r.errorObj&&a(n.e)},e=>{if(!e){let t=Error(e+"");Object.assign(t,{cause:e}),e=t}let i=r.tryCatch(t)(e);i===r.errorObj&&a(i.e)}),e}},49719,(e,t,i)=>{t.exports=e.x("assert",()=>require("assert"))},8339,(e,t,i)=>{"use strict";let r=e.r(49719);class a extends Error{get name(){return this.constructor.name}}class n extends a{get name(){return this.constructor.name}}t.exports={RedisError:a,ParserError:class extends a{constructor(e,t,i){r(t),r.strictEqual(typeof i,"number");const a=Error.stackTraceLimit;Error.stackTraceLimit=2,super(e),Error.stackTraceLimit=a,this.offset=i,this.buffer=t}get name(){return this.constructor.name}},ReplyError:class extends a{constructor(e){const t=Error.stackTraceLimit;Error.stackTraceLimit=2,super(e),Error.stackTraceLimit=t}get name(){return this.constructor.name}},AbortError:n,InterruptError:class extends n{get name(){return this.constructor.name}}}},47281,(e,t,i)=>{"use strict";let r=e.r(49719),a=e.r(24361);function n(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}function s(e,t,i){r(t),r.strictEqual(typeof i,"number"),Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0});let a=Error.stackTraceLimit;Error.stackTraceLimit=2,Error.captureStackTrace(this,this.constructor),Error.stackTraceLimit=a,this.offset=i,this.buffer=t}function o(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0});let t=Error.stackTraceLimit;Error.stackTraceLimit=2,Error.captureStackTrace(this,this.constructor),Error.stackTraceLimit=t}function l(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}function d(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}a.inherits(n,Error),Object.defineProperty(n.prototype,"name",{value:"RedisError",configurable:!0,writable:!0}),a.inherits(s,n),Object.defineProperty(s.prototype,"name",{value:"ParserError",configurable:!0,writable:!0}),a.inherits(o,n),Object.defineProperty(o.prototype,"name",{value:"ReplyError",configurable:!0,writable:!0}),a.inherits(l,n),Object.defineProperty(l.prototype,"name",{value:"AbortError",configurable:!0,writable:!0}),a.inherits(d,l),Object.defineProperty(d.prototype,"name",{value:"InterruptError",configurable:!0,writable:!0}),t.exports={RedisError:n,ParserError:s,ReplyError:o,AbortError:l,InterruptError:d}},63227,(e,t,i)=>{"use strict";t.exports=55>process.version.charCodeAt(1)&&46===process.version.charCodeAt(2)?e.r(47281):e.r(8339)},9068,(e,t,i)=>{var r=[0,4129,8258,12387,16516,20645,24774,28903,33032,37161,41290,45419,49548,53677,57806,61935,4657,528,12915,8786,21173,17044,29431,25302,37689,33560,45947,41818,54205,50076,62463,58334,9314,13379,1056,5121,25830,29895,17572,21637,42346,46411,34088,38153,58862,62927,50604,54669,13907,9842,5649,1584,30423,26358,22165,18100,46939,42874,38681,34616,63455,59390,55197,51132,18628,22757,26758,30887,2112,6241,10242,14371,51660,55789,59790,63919,35144,39273,43274,47403,23285,19156,31415,27286,6769,2640,14899,10770,56317,52188,64447,60318,39801,35672,47931,43802,27814,31879,19684,23749,11298,15363,3168,7233,60846,64911,52716,56781,44330,48395,36200,40265,32407,28342,24277,20212,15891,11826,7761,3696,65439,61374,57309,53244,48923,44858,40793,36728,37256,33193,45514,41451,53516,49453,61774,57711,4224,161,12482,8419,20484,16421,28742,24679,33721,37784,41979,46042,49981,54044,58239,62302,689,4752,8947,13010,16949,21012,25207,29270,46570,42443,38312,34185,62830,58703,54572,50445,13538,9411,5280,1153,29798,25671,21540,17413,42971,47098,34713,38840,59231,63358,50973,55100,9939,14066,1681,5808,26199,30326,17941,22068,55628,51565,63758,59695,39368,35305,47498,43435,22596,18533,30726,26663,6336,2273,14466,10403,52093,56156,60223,64286,35833,39896,43963,48026,19061,23124,27191,31254,2801,6864,10931,14994,64814,60687,56684,52557,48554,44427,40424,36297,31782,27655,23652,19525,15522,11395,7392,3265,61215,65342,53085,57212,44955,49082,36825,40952,28183,32310,20053,24180,11923,16050,3793,7920],a=function(e){for(var t,i=0,r=0,a=[],n=e.length;i<n;i++)(t=e.charCodeAt(i))<128?a[r++]=t:(t<2048?a[r++]=t>>6|192:((64512&t)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(t=65536+((1023&t)<<10)+(1023&e.charCodeAt(++i)),a[r++]=t>>18|240,a[r++]=t>>12&63|128):a[r++]=t>>12|224,a[r++]=t>>6&63|128),a[r++]=63&t|128);return a},n=t.exports=function(e){for(var t,i=0,n=-1,s=0,o=0,l="string"==typeof e?a(e):e,d=l.length;i<d;){if(t=l[i++],-1===n)123===t&&(n=i);else if(125!==t)o=r[(t^o>>8)&255]^o<<8;else if(i-1!==n)return 16383&o;s=r[(t^s>>8)&255]^s<<8}return 16383&s};t.exports.generateMulti=function(e){for(var t=1,i=e.length,r=n(e[0]);t<i;)if(n(e[t++])!==r)return -1;return r}},96686,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.parseBlockOption=i.parseSecondsArgument=void 0;let r=e=>{if("number"==typeof e)return e;if(Buffer.isBuffer(e))return r(e.toString());if("string"==typeof e){let t=Number(e);return Number.isFinite(t)?t:void 0}},a=e=>"string"==typeof e?e:Buffer.isBuffer(e)?e.toString():void 0;i.parseSecondsArgument=e=>{let t=r(e);if(void 0!==t)return t<=0?0:1e3*t},i.parseBlockOption=e=>{for(let t=0;t<e.length;t++){let i=a(e[t]);if(i&&"block"===i.toLowerCase()){let i=r(e[t+1]);if(void 0===i)return;if(i<=0)return 0;return i}}return null}},30846,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(12522),a=e.r(9068),n=e.r(19335),s=e.r(26898),o=e.r(96686);class l{constructor(e,t=[],i={},r){if(this.name=e,this.inTransaction=!1,this.isResolved=!1,this.transformed=!1,this.replyEncoding=i.replyEncoding,this.errorStack=i.errorStack,this.args=t.flat(),this.callback=r,this.initPromise(),i.keyPrefix){const e=i.keyPrefix instanceof Buffer;let t=e?i.keyPrefix:null;this._iterateKeys(r=>r instanceof Buffer?(null===t&&(t=Buffer.from(i.keyPrefix)),Buffer.concat([t,r])):e?Buffer.concat([i.keyPrefix,Buffer.from(String(r))]):i.keyPrefix+r)}i.readOnly&&(this.isReadOnly=!0)}static checkFlag(e,t){return t=t.toLowerCase(),!!this.getFlagMap()[e][t]}static setArgumentTransformer(e,t){this._transformer.argument[e]=t}static setReplyTransformer(e,t){this._transformer.reply[e]=t}static getFlagMap(){return this.flagMap||(this.flagMap=Object.keys(l.FLAGS).reduce((e,t)=>(e[t]={},l.FLAGS[t].forEach(i=>{e[t][i]=!0}),e),{})),this.flagMap}getSlot(){if(void 0===this.slot){let e=this.getKeys()[0];this.slot=null==e?null:a(e)}return this.slot}getKeys(){return this._iterateKeys()}toWritable(e){let t,i="*"+(this.args.length+1)+"\r\n$"+Buffer.byteLength(this.name)+"\r\n"+this.name+"\r\n";if(this.bufferMode){let e=new u;e.push(i);for(let t=0;t<this.args.length;++t){let i=this.args[t];i instanceof Buffer?0===i.length?e.push("$0\r\n\r\n"):(e.push("$"+i.length+"\r\n"),e.push(i),e.push("\r\n")):e.push("$"+Buffer.byteLength(i)+"\r\n"+i+"\r\n")}t=e.toBuffer()}else{t=i;for(let e=0;e<this.args.length;++e){let i=this.args[e];t+="$"+Buffer.byteLength(i)+"\r\n"+i+"\r\n"}}return t}stringifyArguments(){for(let e=0;e<this.args.length;++e){let t=this.args[e];"string"==typeof t||(t instanceof Buffer?this.bufferMode=!0:this.args[e]=(0,s.toArg)(t))}}transformReply(e){this.replyEncoding&&(e=(0,s.convertBufferToString)(e,this.replyEncoding));let t=l._transformer.reply[this.name];return t&&(e=t(e)),e}setTimeout(e){this._commandTimeoutTimer||(this._commandTimeoutTimer=setTimeout(()=>{this.isResolved||this.reject(Error("Command timed out"))},e))}setBlockingTimeout(e){if(e<=0)return;this._blockingTimeoutTimer&&(clearTimeout(this._blockingTimeoutTimer),this._blockingTimeoutTimer=void 0);let t=Date.now();void 0===this._blockingDeadline&&(this._blockingDeadline=t+e);let i=this._blockingDeadline-t;i<=0?this.resolve(null):this._blockingTimeoutTimer=setTimeout(()=>{if(this.isResolved){this._blockingTimeoutTimer=void 0;return}this._blockingTimeoutTimer=void 0,this.resolve(null)},i)}extractBlockingTimeout(){let e=this.args;if(!e||0===e.length)return;let t=this.name.toLowerCase();return l.checkFlag("LAST_ARG_TIMEOUT_COMMANDS",t)?(0,o.parseSecondsArgument)(e[e.length-1]):l.checkFlag("FIRST_ARG_TIMEOUT_COMMANDS",t)?(0,o.parseSecondsArgument)(e[0]):l.checkFlag("BLOCK_OPTION_COMMANDS",t)?(0,o.parseBlockOption)(e):void 0}_clearTimers(){let e=this._commandTimeoutTimer;e&&(clearTimeout(e),delete this._commandTimeoutTimer);let t=this._blockingTimeoutTimer;t&&(clearTimeout(t),delete this._blockingTimeoutTimer)}initPromise(){let e=new Promise((e,t)=>{if(!this.transformed){this.transformed=!0;let e=l._transformer.argument[this.name];e&&(this.args=e(this.args)),this.stringifyArguments()}this.resolve=this._convertValue(e),this.reject=e=>{this._clearTimers(),this.errorStack?t((0,s.optimizeErrorStack)(e,this.errorStack.stack,"/ROOT/node_modules/ioredis/built")):t(e)}});this.promise=(0,n.default)(e,this.callback)}_iterateKeys(e=e=>e){if(void 0===this.keys&&(this.keys=[],(0,r.exists)(this.name,{caseInsensitive:!0})))for(let t of(0,r.getKeyIndexes)(this.name,this.args,{nameCaseInsensitive:!0}))this.args[t]=e(this.args[t]),this.keys.push(this.args[t]);return this.keys}_convertValue(e){return t=>{try{this._clearTimers(),e(this.transformReply(t)),this.isResolved=!0}catch(e){this.reject(e)}return this.promise}}}i.default=l,l.FLAGS={VALID_IN_SUBSCRIBER_MODE:["subscribe","psubscribe","unsubscribe","punsubscribe","ssubscribe","sunsubscribe","ping","quit"],VALID_IN_MONITOR_MODE:["monitor","auth"],ENTER_SUBSCRIBER_MODE:["subscribe","psubscribe","ssubscribe"],EXIT_SUBSCRIBER_MODE:["unsubscribe","punsubscribe","sunsubscribe"],WILL_DISCONNECT:["quit"],HANDSHAKE_COMMANDS:["auth","select","client","readonly","info"],IGNORE_RECONNECT_ON_ERROR:["client"],BLOCKING_COMMANDS:["blpop","brpop","brpoplpush","blmove","bzpopmin","bzpopmax","bzmpop","blmpop","xread","xreadgroup"],LAST_ARG_TIMEOUT_COMMANDS:["blpop","brpop","brpoplpush","blmove","bzpopmin","bzpopmax"],FIRST_ARG_TIMEOUT_COMMANDS:["bzmpop","blmpop"],BLOCK_OPTION_COMMANDS:["xread","xreadgroup"]},l._transformer={argument:{},reply:{}};let d=function(e){if(1===e.length){if(e[0]instanceof Map)return(0,s.convertMapToArray)(e[0]);if("object"==typeof e[0]&&null!==e[0])return(0,s.convertObjectToArray)(e[0])}return e},c=function(e){if(2===e.length){if(e[1]instanceof Map)return[e[0]].concat((0,s.convertMapToArray)(e[1]));if("object"==typeof e[1]&&null!==e[1])return[e[0]].concat((0,s.convertObjectToArray)(e[1]))}return e};l.setArgumentTransformer("mset",d),l.setArgumentTransformer("msetnx",d),l.setArgumentTransformer("hset",c),l.setArgumentTransformer("hmset",c),l.setReplyTransformer("hgetall",function(e){if(Array.isArray(e)){let t={};for(let i=0;i<e.length;i+=2){let r=e[i],a=e[i+1];r in t?Object.defineProperty(t,r,{value:a,configurable:!0,enumerable:!0,writable:!0}):t[r]=a}return t}return e});class u{constructor(){this.length=0,this.items=[]}push(e){this.length+=Buffer.byteLength(e),this.items.push(e)}toBuffer(){let e=Buffer.allocUnsafe(this.length),t=0;for(let i of this.items){let r=Buffer.byteLength(i);Buffer.isBuffer(i)?i.copy(e,t):e.write(i,t,r),t+=r}return e}}},17798,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(63227);class a extends r.RedisError{constructor(e,t){super(e),this.lastNodeError=t,Error.captureStackTrace(this,this.constructor)}get name(){return this.constructor.name}}i.default=a,a.defaultMessage="Failed to refresh slots cache."},12749,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(88947);class a extends r.Readable{constructor(e){super(e),this.opt=e,this._redisCursor="0",this._redisDrained=!1}_read(){if(this._redisDrained)return void this.push(null);let e=[this._redisCursor];this.opt.key&&e.unshift(this.opt.key),this.opt.match&&e.push("MATCH",this.opt.match),this.opt.type&&e.push("TYPE",this.opt.type),this.opt.count&&e.push("COUNT",String(this.opt.count)),this.opt.noValues&&e.push("NOVALUES"),this.opt.redis[this.opt.command](e,(e,t)=>{e?this.emit("error",e):(this._redisCursor=t[0]instanceof Buffer?t[0].toString():t[0],"0"===this._redisCursor&&(this._redisDrained=!0),this.push(t[1]))})}close(){this._redisDrained=!0}}i.default=a},33700,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.executeWithAutoPipelining=i.getFirstValueInFlattenedArray=i.shouldUseAutoPipelining=i.notAllowedAutoPipelineCommands=i.kCallbacks=i.kExec=void 0;let r=e.r(57517),a=e.r(9068),n=e.r(19335),s=e.r(12522);function o(e){for(let t=0;t<e.length;t++){let i=e[t];if("string"==typeof i)return i;if(Array.isArray(i)||(0,r.isArguments)(i)){if(0===i.length)continue;return i[0]}let a=[i].flat();if(a.length>0)return a[0]}}i.kExec=Symbol("exec"),i.kCallbacks=Symbol("callbacks"),i.notAllowedAutoPipelineCommands=["auth","info","script","quit","cluster","pipeline","multi","subscribe","psubscribe","unsubscribe","unpsubscribe","select","client"],i.shouldUseAutoPipelining=function(e,t,r){return t&&e.options.enableAutoPipelining&&!e.isPipeline&&!i.notAllowedAutoPipelineCommands.includes(r)&&!e.options.autoPipeliningIgnoredCommands.includes(r)},i.getFirstValueInFlattenedArray=o,i.executeWithAutoPipelining=function e(t,l,d,c,u){if(t.isCluster&&!t.slots.length)return"wait"===t.status&&t.connect().catch(r.noop),(0,n.default)(new Promise(function(i,r){t.delayUntilReady(a=>{a?r(a):e(t,l,d,c,null).then(i,r)})}),u);let p=t.options.keyPrefix||"",h=t.isCluster?t.slots[a(`${p}${o(c)}`)].join(","):"main";if(t.isCluster&&"master"!==t.options.scaleReads&&(h+=(0,s.exists)(d)&&(0,s.hasFlag)(d,"readonly")?":read":":write"),!t._autoPipelines.has(h)){let e=t.pipeline();e[i.kExec]=!1,e[i.kCallbacks]=[],t._autoPipelines.set(h,e)}let m=t._autoPipelines.get(h);m[i.kExec]||(m[i.kExec]=!0,setImmediate(function e(t,r){if(t._runningAutoPipelines.has(r)||!t._autoPipelines.has(r))return;t._runningAutoPipelines.add(r);let a=t._autoPipelines.get(r);t._autoPipelines.delete(r);let n=a[i.kCallbacks];a[i.kCallbacks]=null,a.exec(function(i,a){if(t._runningAutoPipelines.delete(r),i)for(let e=0;e<n.length;e++)process.nextTick(n[e],i);else for(let e=0;e<n.length;e++)process.nextTick(n[e],...a[e]);t._autoPipelines.has(r)&&e(t,r)})},t,h));let f=new Promise(function(e,t){m[i.kCallbacks].push(function(i,r){i?t(i):e(r)}),"call"===l&&c.unshift(d),m[l](...c)});return(0,n.default)(f,u)}},40162,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(54799),a=e.r(30846),n=e.r(19335);i.default=class{constructor(e,t=null,i="",n=!1){this.lua=e,this.numberOfKeys=t,this.keyPrefix=i,this.readOnly=n,this.sha=(0,r.createHash)("sha1").update(e).digest("hex");const s=this.sha,o=new WeakSet;this.Command=class extends a.default{toWritable(t){let i=this.reject;return this.reject=e=>{-1!==e.message.indexOf("NOSCRIPT")&&o.delete(t),i.call(this,e)},o.has(t)?"eval"===this.name&&(this.name="evalsha",this.args[0]=s):(o.add(t),this.name="eval",this.args[0]=e),super.toWritable(t)}}}execute(e,t,i,r){"number"==typeof this.numberOfKeys&&t.unshift(this.numberOfKeys),this.keyPrefix&&(i.keyPrefix=this.keyPrefix),this.readOnly&&(i.readOnly=!0);let a=new this.Command("evalsha",[this.sha,...t],i);return a.promise=a.promise.catch(r=>{if(-1===r.message.indexOf("NOSCRIPT"))throw r;let a=new this.Command("evalsha",[this.sha,...t],i);return(e.isPipeline?e.redis:e).sendCommand(a)}),(0,n.default)(a.promise,r),e.sendCommand(a)}}},67061,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(12522),a=e.r(33700),n=e.r(30846),s=e.r(40162);class o{constructor(){this.options={},this.scriptsSet={},this.addedBuiltinSet=new Set}getBuiltinCommands(){return l.slice(0)}createBuiltinCommand(e){return{string:d(null,e,"utf8"),buffer:d(null,e,null)}}addBuiltinCommand(e){this.addedBuiltinSet.add(e),this[e]=d(e,e,"utf8"),this[e+"Buffer"]=d(e+"Buffer",e,null)}defineCommand(e,t){let i=new s.default(t.lua,t.numberOfKeys,this.options.keyPrefix,t.readOnly);this.scriptsSet[e]=i,this[e]=c(e,e,i,"utf8"),this[e+"Buffer"]=c(e+"Buffer",e,i,null)}sendCommand(e,t,i){throw Error('"sendCommand" is not implemented')}}let l=r.list.filter(e=>"monitor"!==e);function d(e,t,i){return void 0===i&&(i=t,t=null),function(...r){let s=t||r.shift(),o=r[r.length-1];"function"==typeof o?r.pop():o=void 0;let l={errorStack:this.options.showFriendlyErrorStack?Error():void 0,keyPrefix:this.options.keyPrefix,replyEncoding:i};return(0,a.shouldUseAutoPipelining)(this,e,s)?(0,a.executeWithAutoPipelining)(this,e,s,r,o):this.sendCommand(new n.default(s,r,l,o))}}function c(e,t,i,r){return function(...n){let s="function"==typeof n[n.length-1]?n.pop():void 0,o={replyEncoding:r};return(this.options.showFriendlyErrorStack&&(o.errorStack=Error()),(0,a.shouldUseAutoPipelining)(this,e,t))?(0,a.executeWithAutoPipelining)(this,e,t,n,s):i.execute(this,n,o,s)}}l.push("sentinel"),l.forEach(function(e){o.prototype[e]=d(e,e,"utf8"),o.prototype[e+"Buffer"]=d(e+"Buffer",e,null)}),o.prototype.call=d("call","utf8"),o.prototype.callBuffer=d("callBuffer",null),o.prototype.send_command=o.prototype.call,i.default=o},6135,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(9068),a=e.r(12522),n=e.r(19335),s=e.r(24361),o=e.r(30846),l=e.r(26898),d=e.r(67061);class c extends d.default{constructor(e){super(),this.redis=e,this.isPipeline=!0,this.replyPending=0,this._queue=[],this._result=[],this._transactions=0,this._shaToScript={},this.isCluster="Cluster"===this.redis.constructor.name||this.redis.isCluster,this.options=e.options,Object.keys(e.scriptsSet).forEach(t=>{let i=e.scriptsSet[t];this._shaToScript[i.sha]=i,this[t]=e[t],this[t+"Buffer"]=e[t+"Buffer"]}),e.addedBuiltinSet.forEach(t=>{this[t]=e[t],this[t+"Buffer"]=e[t+"Buffer"]}),this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t});const t=this;Object.defineProperty(this,"length",{get:function(){return t._queue.length}})}fillResult(e,t){if("exec"===this._queue[t].name&&Array.isArray(e[1])){let i=e[1].length;for(let r=0;r<i;r++){if(e[1][r]instanceof Error)continue;let a=this._queue[t-(i-r)];try{e[1][r]=a.transformReply(e[1][r])}catch(t){e[1][r]=t}}}if(this._result[t]=e,--this.replyPending)return;if(this.isCluster){let e,t=!0;for(let i=0;i<this._result.length;++i){let r=this._result[i][0],n=this._queue[i];if(r){if("exec"===n.name&&"EXECABORT Transaction discarded because of previous errors."===r.message)continue;if(e){if(e.name!==r.name||e.message!==r.message){t=!1;break}}else e={name:r.name,message:r.message}}else if(!n.inTransaction&&!((0,a.exists)(n.name,{caseInsensitive:!0})&&(0,a.hasFlag)(n.name,"readonly",{nameCaseInsensitive:!0}))){t=!1;break}}if(e&&t){let t=this,i=e.message.split(" "),r=this._queue,a=!1;this._queue=[];for(let e=0;e<r.length;++e){if("ASK"===i[0]&&!a&&"asking"!==r[e].name&&(!r[e-1]||"asking"!==r[e-1].name)){let e=new o.default("asking");e.ignore=!0,this.sendCommand(e)}r[e].initPromise(),this.sendCommand(r[e]),a=r[e].inTransaction}let n=!0;void 0===this.leftRedirections&&(this.leftRedirections={});let s=function(){t.exec()},l=this.redis;if(l.handleError(e,this.leftRedirections,{moved:function(e,r){t.preferKey=r,l.slots[i[1]]?l.slots[i[1]][0]!==r&&(l.slots[i[1]]=[r]):l.slots[i[1]]=[r],l._groupsBySlot[i[1]]=l._groupsIds[l.slots[i[1]].join(";")],l.refreshSlotsCache(),t.exec()},ask:function(e,i){t.preferKey=i,t.exec()},tryagain:s,clusterDown:s,connectionClosed:s,maxRedirections:()=>{n=!1},defaults:()=>{n=!1}}),n)return}}let i=0;for(let e=0;e<this._queue.length-i;++e)this._queue[e+i].ignore&&(i+=1),this._result[e]=this._result[e+i];this.resolve(this._result.slice(0,this._result.length-i))}sendCommand(e){this._transactions>0&&(e.inTransaction=!0);let t=this._queue.length;return e.pipelineIndex=t,e.promise.then(e=>{this.fillResult([null,e],t)}).catch(e=>{this.fillResult([e],t)}),this._queue.push(e),this}addBatch(e){let t,i,r;for(let a=0;a<e.length;++a)i=(t=e[a])[0],r=t.slice(1),this[i].apply(this,r);return this}}i.default=c;let u=c.prototype.multi;c.prototype.multi=function(){return this._transactions+=1,u.apply(this,arguments)};let p=c.prototype.execBuffer;c.prototype.execBuffer=(0,s.deprecate)(function(){return this._transactions>0&&(this._transactions-=1),p.apply(this,arguments)},"Pipeline#execBuffer: Use Pipeline#exec instead"),c.prototype.exec=function(e){let t;if(this.isCluster&&!this.redis.slots.length)return"wait"===this.redis.status&&this.redis.connect().catch(l.noop),e&&!this.nodeifiedPromise&&(this.nodeifiedPromise=!0,(0,n.default)(this.promise,e)),this.redis.delayUntilReady(t=>{t?this.reject(t):this.exec(e)}),this.promise;if(this._transactions>0)return this._transactions-=1,p.apply(this,arguments);if(this.nodeifiedPromise||(this.nodeifiedPromise=!0,(0,n.default)(this.promise,e)),this._queue.length||this.resolve([]),this.isCluster){let e=[];for(let t=0;t<this._queue.length;t++){let i=this._queue[t].getKeys();if(i.length&&e.push(i[0]),i.length&&0>r.generateMulti(i))return this.reject(Error("All the keys in a pipeline command should belong to the same slot")),this.promise}if(e.length){if((t=function(e,t){let i=r(t[0]),a=e._groupsBySlot[i];for(let i=1;i<t.length;i++)if(e._groupsBySlot[r(t[i])]!==a)return -1;return i}(this.redis,e))<0)return this.reject(Error("All keys in the pipeline should belong to the same slots allocation group")),this.promise}else t=16384*Math.random()|0}let i=this;return function(){let e,r,a=i.replyPending=i._queue.length;i.isCluster&&(e={slot:t,redis:i.redis.connectionPool.nodes.all[i.preferKey]});let n="",s={isPipeline:!0,destination:i.isCluster?e:{redis:i.redis},write(e){"string"!=typeof e?(r||(r=[]),n&&(r.push(Buffer.from(n,"utf8")),n=""),r.push(e)):n+=e,--a||(r?(n&&r.push(Buffer.from(n,"utf8")),s.destination.redis.stream.write(Buffer.concat(r))):s.destination.redis.stream.write(n),a=i._queue.length,n="",r=void 0)}};for(let t=0;t<i._queue.length;++t)i.redis.sendCommand(i._queue[t],s,e);i.promise}(),this.promise}},3422,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.addTransactionSupport=void 0;let r=e.r(26898),a=e.r(19335),n=e.r(6135);i.addTransactionSupport=function(e){e.pipeline=function(e){let t=new n.default(this);return Array.isArray(e)&&t.addBatch(e),t};let{multi:t}=e;e.multi=function(e,i){if(void 0!==i||Array.isArray(e)||(i=e,e=null),i&&!1===i.pipeline)return t.call(this);let s=new n.default(this);s.multi(),Array.isArray(e)&&s.addBatch(e);let o=s.exec;s.exec=function(e){if(this.isCluster&&!this.redis.slots.length)return"wait"===this.redis.status&&this.redis.connect().catch(r.noop),(0,a.default)(new Promise((e,t)=>{this.redis.delayUntilReady(i=>{i?t(i):this.exec(s).then(e,t)})}),e);if(this._transactions>0&&o.call(s),this.nodeifiedPromise)return o.call(s);let t=o.call(s);return(0,a.default)(t.then(function(e){let t=e[e.length-1];if(void 0===t)throw Error("Pipeline cannot be used to send any commands when the `exec()` has been called on it.");if(t[0]){t[0].previousErrors=[];for(let i=0;i<e.length-1;++i)e[i][0]&&t[0].previousErrors.push(e[i][0]);throw t[0]}return(0,r.wrapMultiResult)(t[1])}),e)};let{execBuffer:l}=s;return s.execBuffer=function(e){return this._transactions>0&&l.call(s),s.exec(e)},s};let{exec:i}=e;e.exec=function(e){return(0,a.default)(i.call(this).then(function(e){return Array.isArray(e)&&(e=(0,r.wrapMultiResult)(e)),e}),e)}}},57674,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){Object.getOwnPropertyNames(t.prototype).forEach(i=>{Object.defineProperty(e.prototype,i,Object.getOwnPropertyDescriptor(t.prototype,i))})}},79594,(e,t,i)=>{t.exports=e.x("dns",()=>require("dns"))},23086,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.DEFAULT_CLUSTER_OPTIONS=void 0;let r=e.r(79594);i.DEFAULT_CLUSTER_OPTIONS={clusterRetryStrategy:e=>Math.min(100+2*e,2e3),enableOfflineQueue:!0,enableReadyCheck:!0,scaleReads:"master",maxRedirections:16,retryDelayOnMoved:0,retryDelayOnFailover:100,retryDelayOnClusterDown:100,retryDelayOnTryAgain:100,slotsRefreshTimeout:1e3,useSRVRecords:!1,resolveSrv:r.resolveSrv,dnsLookup:r.lookup,enableAutoPipelining:!1,autoPipeliningIgnoredCommands:[],shardedSubscribers:!1}},78695,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.getConnectionName=i.weightSrvRecords=i.groupSrvRecords=i.getUniqueHostnamesFromOptions=i.normalizeNodeOptions=i.nodeKeyToRedisOptions=i.getNodeKey=void 0;let r=e.r(26898),a=e.r(4446);i.getNodeKey=function(e){return e.port=e.port||6379,e.host=e.host||"127.0.0.1",e.host+":"+e.port},i.nodeKeyToRedisOptions=function(e){let t=e.lastIndexOf(":");if(-1===t)throw Error(`Invalid node key ${e}`);return{host:e.slice(0,t),port:Number(e.slice(t+1))}},i.normalizeNodeOptions=function(e){return e.map(e=>{let t={};if("object"==typeof e)Object.assign(t,e);else if("string"==typeof e)Object.assign(t,(0,r.parseURL)(e));else if("number"==typeof e)t.port=e;else throw Error("Invalid argument "+e);return"string"==typeof t.port&&(t.port=parseInt(t.port,10)),delete t.db,t.port||(t.port=6379),t.host||(t.host="127.0.0.1"),(0,r.resolveTLSProfile)(t)})},i.getUniqueHostnamesFromOptions=function(e){let t={};return e.forEach(e=>{t[e.host]=!0}),Object.keys(t).filter(e=>!(0,a.isIP)(e))},i.groupSrvRecords=function(e){let t={};for(let i of e)t.hasOwnProperty(i.priority)?(t[i.priority].totalWeight+=i.weight,t[i.priority].records.push(i)):t[i.priority]={totalWeight:i.weight,records:[i]};return t},i.weightSrvRecords=function(e){if(1===e.records.length)return e.totalWeight=0,e.records.shift();let t=Math.floor(Math.random()*(e.totalWeight+e.records.length)),i=0;for(let[r,a]of e.records.entries())if((i+=1+a.weight)>t)return e.totalWeight-=a.weight,e.records.splice(r,1),a},i.getConnectionName=function(e,t){let i=`ioredis-cluster(${e})`;return t?`${i}:${t}`:i}},55925,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(78695),a=e.r(26898),n=e.r(66735),s=(0,a.Debug)("cluster:subscriber");i.default=class{constructor(e,t,i=!1){this.connectionPool=e,this.emitter=t,this.isSharded=i,this.started=!1,this.subscriber=null,this.slotRange=[],this.onSubscriberEnd=()=>{this.started?(s("subscriber has disconnected, selecting a new one..."),this.selectSubscriber()):s("subscriber has disconnected, but ClusterSubscriber is not started, so not reconnecting.")},this.connectionPool.on("-node",(e,t)=>{this.started&&this.subscriber&&(0,r.getNodeKey)(this.subscriber.options)===t&&(s("subscriber has left, selecting a new one..."),this.selectSubscriber())}),this.connectionPool.on("+node",()=>{this.started&&!this.subscriber&&(s("a new node is discovered and there is no subscriber, selecting a new one..."),this.selectSubscriber())})}getInstance(){return this.subscriber}associateSlotRange(e){return this.isSharded&&(this.slotRange=e),this.slotRange}start(){this.started=!0,this.selectSubscriber(),s("started")}stop(){this.started=!1,this.subscriber&&(this.subscriber.disconnect(),this.subscriber=null)}isStarted(){return this.started}selectSubscriber(){let e=this.lastActiveSubscriber;e&&(e.off("end",this.onSubscriberEnd),e.disconnect()),this.subscriber&&(this.subscriber.off("end",this.onSubscriberEnd),this.subscriber.disconnect());let t=(0,a.sample)(this.connectionPool.getNodes());if(!t){s("selecting subscriber failed since there is no node discovered in the cluster yet"),this.subscriber=null;return}let{options:i}=t;s("selected a subscriber %s:%s",i.host,i.port);let o="subscriber";this.isSharded&&(o="ssubscriber"),this.subscriber=new n.default({port:i.port,host:i.host,username:i.username,password:i.password,enableReadyCheck:!0,connectionName:(0,r.getConnectionName)(o,i.connectionName),lazyConnect:!0,tls:i.tls,retryStrategy:null}),this.subscriber.on("error",a.noop),this.subscriber.on("moved",()=>{this.emitter.emit("forceRefresh")}),this.subscriber.once("end",this.onSubscriberEnd);let l={subscribe:[],psubscribe:[],ssubscribe:[]};if(e){let t=e.condition||e.prevCondition;t&&t.subscriber&&(l.subscribe=t.subscriber.channels("subscribe"),l.psubscribe=t.subscriber.channels("psubscribe"),l.ssubscribe=t.subscriber.channels("ssubscribe"))}if(l.subscribe.length||l.psubscribe.length||l.ssubscribe.length){let e=0;for(let t of["subscribe","psubscribe","ssubscribe"]){let i=l[t];if(0!=i.length)if(s("%s %d channels",t,i.length),"ssubscribe"===t)for(let r of i)e+=1,this.subscriber[t](r).then(()=>{--e||(this.lastActiveSubscriber=this.subscriber)}).catch(()=>{s("failed to ssubscribe to channel: %s",r)});else e+=1,this.subscriber[t](i).then(()=>{--e||(this.lastActiveSubscriber=this.subscriber)}).catch(()=>{s("failed to %s %d channels",t,i.length)})}}else this.lastActiveSubscriber=this.subscriber;for(let e of["message","messageBuffer"])this.subscriber.on(e,(t,i)=>{this.emitter.emit(e,t,i)});for(let e of["pmessage","pmessageBuffer"])this.subscriber.on(e,(t,i,r)=>{this.emitter.emit(e,t,i,r)});if(!0==this.isSharded)for(let e of["smessage","smessageBuffer"])this.subscriber.on(e,(t,i)=>{this.emitter.emit(e,t,i)})}}},77825,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(27699),a=e.r(26898),n=e.r(78695),s=e.r(66735),o=(0,a.Debug)("cluster:connectionPool");class l extends r.EventEmitter{constructor(e){super(),this.redisOptions=e,this.nodes={all:{},master:{},slave:{}},this.specifiedOptions={}}getNodes(e="all"){let t=this.nodes[e];return Object.keys(t).map(e=>t[e])}getInstanceByKey(e){return this.nodes.all[e]}getSampleInstance(e){let t=Object.keys(this.nodes[e]),i=(0,a.sample)(t);return this.nodes[e][i]}addMasterNode(e){let t=(0,n.getNodeKey)(e.options),i=this.createRedisFromOptions(e,e.options.readOnly);return!e.options.readOnly&&(this.nodes.all[t]=i,this.nodes.master[t]=i,!0)}createRedisFromOptions(e,t){return new s.default((0,a.defaults)({retryStrategy:null,enableOfflineQueue:!0,readOnly:t},e,this.redisOptions,{lazyConnect:!0}))}findOrCreate(e,t=!1){let i,r=(0,n.getNodeKey)(e);return t=!!t,this.specifiedOptions[r]?Object.assign(e,this.specifiedOptions[r]):this.specifiedOptions[r]=e,this.nodes.all[r]?(i=this.nodes.all[r]).options.readOnly!==t&&(i.options.readOnly=t,o("Change role of %s to %s",r,t?"slave":"master"),i[t?"readonly":"readwrite"]().catch(a.noop),t?(delete this.nodes.master[r],this.nodes.slave[r]=i):(delete this.nodes.slave[r],this.nodes.master[r]=i)):(o("Connecting to %s as %s",r,t?"slave":"master"),i=this.createRedisFromOptions(e,t),this.nodes.all[r]=i,this.nodes[t?"slave":"master"][r]=i,i.once("end",()=>{this.removeNode(r),this.emit("-node",i,r),Object.keys(this.nodes.all).length||this.emit("drain")}),this.emit("+node",i,r),i.on("error",function(e){this.emit("nodeError",e,r)})),i}reset(e){o("Reset with %O",e);let t={};e.forEach(e=>{let i=(0,n.getNodeKey)(e);e.readOnly&&t[i]||(t[i]=e)}),Object.keys(this.nodes.all).forEach(e=>{t[e]||(o("Disconnect %s because the node does not hold any slot",e),this.nodes.all[e].disconnect(),this.removeNode(e))}),Object.keys(t).forEach(e=>{let i=t[e];this.findOrCreate(i,i.readOnly)})}removeNode(e){let{nodes:t}=this;t.all[e]&&(o("Remove %s from the pool",e),delete t.all[e]),delete t.master[e],delete t.slave[e]}}i.default=l},89977,(e,t,i)=>{"use strict";function r(e,t){var t=t||{};this._capacity=t.capacity,this._head=0,this._tail=0,Array.isArray(e)?this._fromArray(e):(this._capacityMask=3,this._list=[,,,,])}r.prototype.peekAt=function(e){var t=e;if(t===(0|t)){var i=this.size();if(!(t>=i)&&!(t<-i))return t<0&&(t+=i),t=this._head+t&this._capacityMask,this._list[t]}},r.prototype.get=function(e){return this.peekAt(e)},r.prototype.peek=function(){if(this._head!==this._tail)return this._list[this._head]},r.prototype.peekFront=function(){return this.peek()},r.prototype.peekBack=function(){return this.peekAt(-1)},Object.defineProperty(r.prototype,"length",{get:function(){return this.size()}}),r.prototype.size=function(){return this._head===this._tail?0:this._head<this._tail?this._tail-this._head:this._capacityMask+1-(this._head-this._tail)},r.prototype.unshift=function(e){if(0==arguments.length)return this.size();var t=this._list.length;return(this._head=this._head-1+t&this._capacityMask,this._list[this._head]=e,this._tail===this._head&&this._growArray(),this._capacity&&this.size()>this._capacity&&this.pop(),this._head<this._tail)?this._tail-this._head:this._capacityMask+1-(this._head-this._tail)},r.prototype.shift=function(){var e=this._head;if(e!==this._tail){var t=this._list[e];return this._list[e]=void 0,this._head=e+1&this._capacityMask,e<2&&this._tail>1e4&&this._tail<=this._list.length>>>2&&this._shrinkArray(),t}},r.prototype.push=function(e){if(0==arguments.length)return this.size();var t=this._tail;return(this._list[t]=e,this._tail=t+1&this._capacityMask,this._tail===this._head&&this._growArray(),this._capacity&&this.size()>this._capacity&&this.shift(),this._head<this._tail)?this._tail-this._head:this._capacityMask+1-(this._head-this._tail)},r.prototype.pop=function(){var e=this._tail;if(e!==this._head){var t=this._list.length;this._tail=e-1+t&this._capacityMask;var i=this._list[this._tail];return this._list[this._tail]=void 0,this._head<2&&e>1e4&&e<=t>>>2&&this._shrinkArray(),i}},r.prototype.removeOne=function(e){var t,i=e;if(i===(0|i)&&this._head!==this._tail){var r=this.size(),a=this._list.length;if(!(i>=r)&&!(i<-r)){i<0&&(i+=r),i=this._head+i&this._capacityMask;var n=this._list[i];if(e<r/2){for(t=e;t>0;t--)this._list[i]=this._list[i=i-1+a&this._capacityMask];this._list[i]=void 0,this._head=this._head+1+a&this._capacityMask}else{for(t=r-1-e;t>0;t--)this._list[i]=this._list[i=i+1+a&this._capacityMask];this._list[i]=void 0,this._tail=this._tail-1+a&this._capacityMask}return n}}},r.prototype.remove=function(e,t){var i,r,a=e,n=t;if(a===(0|a)&&this._head!==this._tail){var s=this.size(),o=this._list.length;if(!(a>=s)&&!(a<-s)&&!(t<1)){if(a<0&&(a+=s),1===t||!t)return(i=[,])[0]=this.removeOne(a),i;if(0===a&&a+t>=s)return i=this.toArray(),this.clear(),i;for(a+t>s&&(t=s-a),i=Array(t),r=0;r<t;r++)i[r]=this._list[this._head+a+r&this._capacityMask];if(a=this._head+a&this._capacityMask,e+t===s){for(this._tail=this._tail-t+o&this._capacityMask,r=t;r>0;r--)this._list[a=a+1+o&this._capacityMask]=void 0;return i}if(0===e){for(this._head=this._head+t+o&this._capacityMask,r=t-1;r>0;r--)this._list[a=a+1+o&this._capacityMask]=void 0;return i}if(a<s/2){for(this._head=this._head+e+t+o&this._capacityMask,r=e;r>0;r--)this.unshift(this._list[a=a-1+o&this._capacityMask]);for(a=this._head-1+o&this._capacityMask;n>0;)this._list[a=a-1+o&this._capacityMask]=void 0,n--;e<0&&(this._tail=a)}else{for(this._tail=a,a=a+t+o&this._capacityMask,r=s-(t+e);r>0;r--)this.push(this._list[a++]);for(a=this._tail;n>0;)this._list[a=a+1+o&this._capacityMask]=void 0,n--}return this._head<2&&this._tail>1e4&&this._tail<=o>>>2&&this._shrinkArray(),i}}},r.prototype.splice=function(e,t){var i=e;if(i===(0|i)){var r=this.size();if(i<0&&(i+=r),!(i>r))if(!(arguments.length>2))return this.remove(i,t);else{var a,n,s,o=arguments.length,l=this._list.length,d=2;if(!r||i<r/2){for(a=0,n=Array(i);a<i;a++)n[a]=this._list[this._head+a&this._capacityMask];for(0===t?(s=[],i>0&&(this._head=this._head+i+l&this._capacityMask)):(s=this.remove(i,t),this._head=this._head+i+l&this._capacityMask);o>d;)this.unshift(arguments[--o]);for(a=i;a>0;a--)this.unshift(n[a-1])}else{var c=(n=Array(r-(i+t))).length;for(a=0;a<c;a++)n[a]=this._list[this._head+i+t+a&this._capacityMask];for(0===t?(s=[],i!=r&&(this._tail=this._head+i+l&this._capacityMask)):(s=this.remove(i,t),this._tail=this._tail-c+l&this._capacityMask);d<o;)this.push(arguments[d++]);for(a=0;a<c;a++)this.push(n[a])}return s}}},r.prototype.clear=function(){this._list=Array(this._list.length),this._head=0,this._tail=0},r.prototype.isEmpty=function(){return this._head===this._tail},r.prototype.toArray=function(){return this._copyArray(!1)},r.prototype._fromArray=function(e){var t=e.length,i=this._nextPowerOf2(t);this._list=Array(i),this._capacityMask=i-1,this._tail=t;for(var r=0;r<t;r++)this._list[r]=e[r]},r.prototype._copyArray=function(e,t){var i,r=this._list,a=r.length,n=this.length;if((t|=n)==n&&this._head<this._tail)return this._list.slice(this._head,this._tail);var s=Array(t),o=0;if(e||this._head>this._tail){for(i=this._head;i<a;i++)s[o++]=r[i];for(i=0;i<this._tail;i++)s[o++]=r[i]}else for(i=this._head;i<this._tail;i++)s[o++]=r[i];return s},r.prototype._growArray=function(){if(0!=this._head){var e=this._copyArray(!0,this._list.length<<1);this._tail=this._list.length,this._head=0,this._list=e}else this._tail=this._list.length,this._list.length<<=1;this._capacityMask=this._capacityMask<<1|1},r.prototype._shrinkArray=function(){this._list.length>>>=1,this._capacityMask>>>=1},r.prototype._nextPowerOf2=function(e){return Math.max(1<<Math.log(e)/Math.log(2)+1,4)},t.exports=r},66392,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(26898),a=e.r(89977),n=(0,r.Debug)("delayqueue");i.default=class{constructor(){this.queues={},this.timeouts={}}push(e,t,i){let r=i.callback||process.nextTick;this.queues[e]||(this.queues[e]=new a),this.queues[e].push(t),this.timeouts[e]||(this.timeouts[e]=setTimeout(()=>{r(()=>{this.timeouts[e]=null,this.execute(e)})},i.timeout))}execute(e){let t=this.queues[e];if(!t)return;let{length:i}=t;if(i)for(n("send %d commands in %s queue",i,e),this.queues[e]=null;t.length>0;)t.shift()()}}},93148,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(78695),a=e.r(26898),n=e.r(66735),s=(0,a.Debug)("cluster:subscriberGroup:shardedSubscriber"),o="idle",l="starting",d="connected",c="stopping",u="ended",p={[o]:[l,c,u],[l]:[d,c,u],[d]:[c,u],[c]:[u],[u]:[]};i.default=class{constructor(e,t,i){var s;for(const l of(this.emitter=e,this.status=o,this.instance=null,this.connectPromise=null,this.messageListeners=new Map,this.onEnd=()=>{this.updateStatus(u),this.emitter.emit("-node",this.instance,this.nodeKey)},this.onError=e=>{this.emitter.emit("nodeError",e,this.nodeKey)},this.onMoved=()=>{this.emitter.emit("moved")},this.instance=new n.default((0,a.defaults)({enableReadyCheck:!1,enableOfflineQueue:!0,connectionName:(0,r.getConnectionName)("ssubscriber",t.connectionName),retryStrategy:null,lazyConnect:!0},t,i)),this.lazyConnect=null==(s=null==i?void 0:i.lazyConnect)||s,this.nodeKey=(0,r.getNodeKey)(t),this.instance.on("end",this.onEnd),this.instance.on("error",this.onError),this.instance.on("moved",this.onMoved),["smessage","smessageBuffer"])){const e=(...e)=>{this.emitter.emit(l,...e)};this.messageListeners.set(l,e),this.instance.on(l,e)}}async start(){if(this.connectPromise)return this.connectPromise;if(this.status!==l&&this.status!==d){if(this.status===u||!this.instance)throw Error(`Sharded subscriber ${this.nodeKey} cannot be restarted once ended.`);this.updateStatus(l),this.connectPromise=this.instance.connect();try{await this.connectPromise,this.updateStatus(d)}catch(e){throw this.updateStatus(u),e}finally{this.connectPromise=null}}}stop(){this.updateStatus(c),this.instance&&(this.instance.disconnect(),this.instance.removeAllListeners(),this.messageListeners.clear(),this.instance=null),this.updateStatus(u),s("stopped %s",this.nodeKey)}isStarted(){return[d,l].includes(this.status)}get subscriberStatus(){return this.status}isHealthy(){return(this.status===o||this.status===d||this.status===l)&&null!==this.instance}getInstance(){return this.instance}getNodeKey(){return this.nodeKey}isLazyConnect(){return this.lazyConnect}updateStatus(e){if(this.status!==e){if(!p[this.status].includes(e))return void s("Invalid status transition for %s: %s -> %s",this.nodeKey,this.status,e);this.status=e}}}},58432,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(26898),a=e.r(78695),n=e.r(9068),s=e.r(93148),o=(0,r.Debug)("cluster:subscriberGroup");class l{constructor(e,t){this.subscriberGroupEmitter=e,this.options=t,this.shardedSubscribers=new Map,this.clusterSlots=[],this.subscriberToSlotsIndex=new Map,this.channels=new Map,this.failedAttemptsByNode=new Map,this.isResetting=!1,this.pendingReset=null,this.handleSubscriberConnectFailed=(e,t)=>{let i=(this.failedAttemptsByNode.get(t)||0)+1;this.failedAttemptsByNode.set(t,i);let r=Math.min(i,l.MAX_RETRY_ATTEMPTS),a=Math.min(l.BASE_BACKOFF_MS*2**r,l.MAX_BACKOFF_MS),n=Math.floor(.5*a*(Math.random()-.5)),s=Math.max(0,a+n);o("Failed to connect subscriber for %s. Refreshing slots in %dms",t,s),this.subscriberGroupEmitter.emit("subscriberConnectFailed",{delay:s,error:e})},this.handleSubscriberConnectSucceeded=e=>{this.failedAttemptsByNode.delete(e)}}getResponsibleSubscriber(e){let t=this.clusterSlots[e][0],i=this.shardedSubscribers.get(t);return i&&"idle"===i.subscriberStatus&&i.start().then(()=>{this.handleSubscriberConnectSucceeded(i.getNodeKey())}).catch(e=>{this.handleSubscriberConnectFailed(e,i.getNodeKey())}),i}addChannels(e){let t=n(e[0]);for(let i of e)if(n(i)!==t)return -1;let i=this.channels.get(t);return i?this.channels.set(t,i.concat(e)):this.channels.set(t,e),Array.from(this.channels.values()).reduce((e,t)=>e+t.length,0)}removeChannels(e){let t=n(e[0]);for(let i of e)if(n(i)!==t)return -1;let i=this.channels.get(t);if(i){let r=i.filter(t=>!e.includes(t));this.channels.set(t,r)}return Array.from(this.channels.values()).reduce((e,t)=>e+t.length,0)}stop(){for(let e of this.shardedSubscribers.values())e.stop();this.pendingReset=null,this.shardedSubscribers.clear(),this.subscriberToSlotsIndex.clear()}start(){let e=[];for(let t of this.shardedSubscribers.values())this.shouldStartSubscriber(t)&&(e.push(t.start().then(()=>{this.handleSubscriberConnectSucceeded(t.getNodeKey())}).catch(e=>{this.handleSubscriberConnectFailed(e,t.getNodeKey())})),this.subscriberGroupEmitter.emit("+subscriber"));return Promise.all(e)}async reset(e,t){if(this.isResetting){this.pendingReset={slots:e,nodes:t};return}this.isResetting=!0;try{let i=this._refreshSlots(e),r=this.hasUnhealthySubscribers();if(!i&&!r)return void o("No topology change detected or failed subscribers. Skipping reset.");for(let[e,t]of this.shardedSubscribers){if(this.subscriberToSlotsIndex.has(e)&&t.isHealthy()){o("Skipping deleting subscriber for %s",e);continue}o("Removing subscriber for %s",e),t.stop(),this.shardedSubscribers.delete(e),this.subscriberGroupEmitter.emit("-subscriber")}let n=[];for(let[e,i]of this.subscriberToSlotsIndex){let i=this.shardedSubscribers.get(e);if(i&&i.isHealthy()){o("Skipping creating new subscriber for %s",e),!i.isStarted()&&this.shouldStartSubscriber(i)&&n.push(i.start().then(()=>{this.handleSubscriberConnectSucceeded(e)}).catch(t=>{this.handleSubscriberConnectFailed(t,e)}));continue}i&&!i.isHealthy()&&(o("Replacing subscriber for %s",e),i.stop(),this.shardedSubscribers.delete(e),this.subscriberGroupEmitter.emit("-subscriber")),o("Creating new subscriber for %s",e);let r=t.find(t=>(0,a.getNodeKey)(t.options)===e);if(!r){o("Failed to find node for key %s",e);continue}let l=new s.default(this.subscriberGroupEmitter,r.options,this.options.redisOptions);this.shardedSubscribers.set(e,l),this.shouldStartSubscriber(l)&&n.push(l.start().then(()=>{this.handleSubscriberConnectSucceeded(e)}).catch(t=>{this.handleSubscriberConnectFailed(t,e)})),this.subscriberGroupEmitter.emit("+subscriber")}await Promise.all(n),this._resubscribe(),this.subscriberGroupEmitter.emit("subscribersReady")}finally{if(this.isResetting=!1,this.pendingReset){let{slots:e,nodes:t}=this.pendingReset;this.pendingReset=null,await this.reset(e,t)}}}_refreshSlots(e){if(this._slotsAreEqual(e)&&this.subscriberToSlotsIndex.size>0)return o("Nothing to refresh because the new cluster map is equal to the previous one."),!1;o("Refreshing the slots of the subscriber group."),this.subscriberToSlotsIndex=new Map;for(let t=0;t<e.length;t++){let i=e[t][0];this.subscriberToSlotsIndex.has(i)||this.subscriberToSlotsIndex.set(i,[]),this.subscriberToSlotsIndex.get(i).push(Number(t))}return this.clusterSlots=JSON.parse(JSON.stringify(e)),!0}_resubscribe(){this.shardedSubscribers&&this.shardedSubscribers.forEach((e,t)=>{let i=this.subscriberToSlotsIndex.get(t);i&&i.forEach(i=>{let r=e.getInstance(),a=this.channels.get(i);if(a&&a.length>0){if(!r||"end"===r.status)return;"ready"===r.status?r.ssubscribe(...a).catch(e=>{o("Failed to ssubscribe on node %s: %s",t,e)}):r.once("ready",()=>{r.ssubscribe(...a).catch(e=>{o("Failed to ssubscribe on node %s: %s",t,e)})})}})})}_slotsAreEqual(e){return void 0!==this.clusterSlots&&JSON.stringify(this.clusterSlots)===JSON.stringify(e)}hasUnhealthySubscribers(){let e=Array.from(this.shardedSubscribers.values()).some(e=>!e.isHealthy()),t=Array.from(this.subscriberToSlotsIndex.keys()).some(e=>!this.shardedSubscribers.has(e));return e||t}shouldStartSubscriber(e){if(e.isStarted())return!1;if(!e.isLazyConnect())return!0;let t=this.subscriberToSlotsIndex.get(e.getNodeKey());return!!t&&t.some(e=>{let t=this.channels.get(e);return!!(t&&t.length>0)})}}i.default=l,l.MAX_RETRY_ATTEMPTS=10,l.MAX_BACKOFF_MS=2e3,l.BASE_BACKOFF_MS=100},83252,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(12522),a=e.r(27699),n=e.r(63227),s=e.r(19335),o=e.r(30846),l=e.r(17798),d=e.r(66735),c=e.r(12749),u=e.r(3422),p=e.r(26898),h=e.r(57674),m=e.r(67061),f=e.r(23086),y=e.r(55925),b=e.r(77825),g=e.r(66392),v=e.r(78695),x=e.r(89977),K=e.r(58432),k=(0,p.Debug)("cluster"),S=new WeakSet;class E extends m.default{constructor(e,t={}){if(super(),this.slots=[],this._groupsIds={},this._groupsBySlot=Array(16384),this.isCluster=!0,this.retryAttempts=0,this.delayQueue=new g.default,this.offlineQueue=new x,this.isRefreshing=!1,this._refreshSlotsCacheCallbacks=[],this._autoPipelines=new Map,this._runningAutoPipelines=new Set,this._readyDelayedCallbacks=[],this.connectionEpoch=0,a.EventEmitter.call(this),this.startupNodes=e,this.options=(0,p.defaults)({},t,f.DEFAULT_CLUSTER_OPTIONS,this.options),this.options.shardedSubscribers&&this.createShardedSubscriberGroup(),this.options.redisOptions&&this.options.redisOptions.keyPrefix&&!this.options.keyPrefix&&(this.options.keyPrefix=this.options.redisOptions.keyPrefix),"function"!=typeof this.options.scaleReads&&-1===["all","master","slave"].indexOf(this.options.scaleReads))throw Error('Invalid option scaleReads "'+this.options.scaleReads+'". Expected "all", "master", "slave" or a custom function');this.connectionPool=new b.default(this.options.redisOptions),this.connectionPool.on("-node",(e,t)=>{this.emit("-node",e)}),this.connectionPool.on("+node",e=>{this.emit("+node",e)}),this.connectionPool.on("drain",()=>{this.setStatus("close")}),this.connectionPool.on("nodeError",(e,t)=>{this.emit("node error",e,t)}),this.subscriber=new y.default(this.connectionPool,this),this.options.scripts&&Object.entries(this.options.scripts).forEach(([e,t])=>{this.defineCommand(e,t)}),this.options.lazyConnect?this.setStatus("wait"):this.connect().catch(e=>{k("connecting failed: %s",e)})}connect(){return new Promise((e,t)=>{if("connecting"===this.status||"connect"===this.status||"ready"===this.status)return void t(Error("Redis is already connecting/connected"));let i=++this.connectionEpoch;this.setStatus("connecting"),this.resolveStartupNodeHostnames().then(r=>{let a;if(this.connectionEpoch!==i){k("discard connecting after resolving startup nodes because epoch not match: %d != %d",i,this.connectionEpoch),t(new n.RedisError("Connection is discarded because a new connection is made"));return}if("connecting"!==this.status){k("discard connecting after resolving startup nodes because the status changed to %s",this.status),t(new n.RedisError("Connection is aborted"));return}this.connectionPool.reset(r),this.options.shardedSubscribers&&this.shardedSubscribers.reset(this.slots,this.connectionPool.getNodes("all")).catch(e=>{k("Error while starting subscribers: %s",e)});let s=()=>{this.setStatus("ready"),this.retryAttempts=0,this.executeOfflineCommands(),this.resetNodesRefreshInterval(),e()},o=()=>{this.invokeReadyDelayedCallbacks(void 0),this.removeListener("close",a),this.manuallyClosing=!1,this.setStatus("connect"),this.options.enableReadyCheck?this.readyCheck((e,t)=>{e||t?(k("Ready check failed (%s). Reconnecting...",e||t),"connect"===this.status&&this.disconnect(!0)):s()}):s()};a=()=>{let e=Error("None of startup nodes is available");this.removeListener("refresh",o),this.invokeReadyDelayedCallbacks(e),t(e)},this.once("refresh",o),this.once("close",a),this.once("close",this.handleCloseEvent.bind(this)),this.refreshSlotsCache(e=>{e&&e.message===l.default.defaultMessage&&(d.default.prototype.silentEmit.call(this,"error",e),this.connectionPool.reset([]))}),this.subscriber.start(),this.options.shardedSubscribers&&this.shardedSubscribers.start().catch(e=>{k("Error while starting subscribers: %s",e)})}).catch(e=>{this.setStatus("close"),this.handleCloseEvent(e),this.invokeReadyDelayedCallbacks(e),t(e)})})}disconnect(e=!1){let t=this.status;this.setStatus("disconnecting"),e||(this.manuallyClosing=!0),this.reconnectTimeout&&!e&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null,k("Canceled reconnecting attempts")),this.clearNodesRefreshInterval(),this.subscriber.stop(),this.options.shardedSubscribers&&this.shardedSubscribers.stop(),"wait"===t?(this.setStatus("close"),this.handleCloseEvent()):this.connectionPool.reset([])}quit(e){let t=this.status;if(this.setStatus("disconnecting"),this.manuallyClosing=!0,this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.clearNodesRefreshInterval(),this.subscriber.stop(),this.options.shardedSubscribers&&this.shardedSubscribers.stop(),"wait"===t){let t=(0,s.default)(Promise.resolve("OK"),e);return setImmediate((function(){this.setStatus("close"),this.handleCloseEvent()}).bind(this)),t}return(0,s.default)(Promise.all(this.nodes().map(e=>e.quit().catch(e=>{if(e.message===p.CONNECTION_CLOSED_ERROR_MSG)return"OK";throw e}))).then(()=>"OK"),e)}duplicate(e=[],t={}){return new E(e.length>0?e:this.startupNodes.slice(0),Object.assign({},this.options,t))}nodes(e="all"){if("all"!==e&&"master"!==e&&"slave"!==e)throw Error('Invalid role "'+e+'". Expected "all", "master" or "slave"');return this.connectionPool.getNodes(e)}delayUntilReady(e){this._readyDelayedCallbacks.push(e)}get autoPipelineQueueSize(){let e=0;for(let t of this._autoPipelines.values())e+=t.length;return e}refreshSlotsCache(e){if(e&&this._refreshSlotsCacheCallbacks.push(e),this.isRefreshing)return;this.isRefreshing=!0;let t=this,i=e=>{for(let t of(this.isRefreshing=!1,this._refreshSlotsCacheCallbacks))t(e);this._refreshSlotsCacheCallbacks=[]},r=(0,p.shuffle)(this.connectionPool.getNodes()),a=null;!function e(n){if(n===r.length)return i(new l.default(l.default.defaultMessage,a));let s=r[n],o=`${s.options.host}:${s.options.port}`;k("getting slot cache from %s",o),t.getInfoFromNode(s,function(r){switch(t.status){case"close":case"end":return i(Error("Cluster is disconnected."));case"disconnecting":return i(Error("Cluster is disconnecting."))}r?(t.emit("node error",r,o),a=r,e(n+1)):(t.emit("refresh"),i())})}(0)}sendCommand(e,t,i){if("wait"===this.status&&this.connect().catch(p.noop),"end"===this.status)return e.reject(Error(p.CONNECTION_CLOSED_ERROR_MSG)),e.promise;let a=this.options.scaleReads;"master"!==a&&(e.isReadOnly||(0,r.exists)(e.name)&&(0,r.hasFlag)(e.name,"readonly")||(a="master"));let s=i?i.slot:e.getSlot(),l={},d=this;if(!i&&!S.has(e)){S.add(e);let t=e.reject;e.reject=function(i){let r=c.bind(null,!0);d.handleError(i,l,{moved:function(t,i){k("command %s is moved to %s",e.name,i),s=Number(t),d.slots[t]?d.slots[t][0]=i:d.slots[t]=[i],d._groupsBySlot[t]=d._groupsIds[d.slots[t].join(";")],d.connectionPool.findOrCreate(d.natMapper(i)),c(),k("refreshing slot caches... (triggered by MOVED error)"),d.refreshSlotsCache()},ask:function(t,i){k("command %s is required to ask %s:%s",e.name,i);let r=d.natMapper(i);d.connectionPool.findOrCreate(r),c(!1,`${r.host}:${r.port}`)},tryagain:r,clusterDown:r,connectionClosed:r,maxRedirections:function(i){t.call(e,i)},defaults:function(){t.call(e,i)}})}}function c(r,l){let c;if("end"===d.status)return void e.reject(new n.AbortError("Cluster is ended."));if("ready"===d.status||"cluster"===e.name){if(i&&i.redis)c=i.redis;else if(o.default.checkFlag("ENTER_SUBSCRIBER_MODE",e.name)||o.default.checkFlag("EXIT_SUBSCRIBER_MODE",e.name)){if(d.options.shardedSubscribers&&("ssubscribe"==e.name||"sunsubscribe"==e.name)){let t=d.shardedSubscribers.getResponsibleSubscriber(s);if(!t)return void e.reject(new n.AbortError(`No sharded subscriber for slot: ${s}`));let i=-1;"ssubscribe"==e.name&&(i=d.shardedSubscribers.addChannels(e.getKeys())),"sunsubscribe"==e.name&&(i=d.shardedSubscribers.removeChannels(e.getKeys())),-1!==i?c=t.getInstance():e.reject(new n.AbortError("Possible CROSSSLOT error: All channels must hash to the same slot"))}else c=d.subscriber.getInstance();if(!c)return void e.reject(new n.AbortError("No subscriber for the cluster"))}else{if(!r){if("number"==typeof s&&d.slots[s]){let t=d.slots[s];if("function"==typeof a){let i=t.map(function(e){return d.connectionPool.getInstanceByKey(e)});Array.isArray(c=a(i,e))&&(c=(0,p.sample)(c)),c||(c=i[0])}else{let e;e="all"===a?(0,p.sample)(t):"slave"===a&&t.length>1?(0,p.sample)(t,1):t[0],c=d.connectionPool.getInstanceByKey(e)}}l&&(c=d.connectionPool.getInstanceByKey(l)).asking()}c||(c=("function"==typeof a?null:d.connectionPool.getSampleInstance(a))||d.connectionPool.getSampleInstance("all"))}i&&!i.redis&&(i.redis=c)}c?c.sendCommand(e,t):d.options.enableOfflineQueue?d.offlineQueue.push({command:e,stream:t,node:i}):e.reject(Error("Cluster isn't ready and enableOfflineQueue options is false"))}return c(),e.promise}sscanStream(e,t){return this.createScanStream("sscan",{key:e,options:t})}sscanBufferStream(e,t){return this.createScanStream("sscanBuffer",{key:e,options:t})}hscanStream(e,t){return this.createScanStream("hscan",{key:e,options:t})}hscanBufferStream(e,t){return this.createScanStream("hscanBuffer",{key:e,options:t})}zscanStream(e,t){return this.createScanStream("zscan",{key:e,options:t})}zscanBufferStream(e,t){return this.createScanStream("zscanBuffer",{key:e,options:t})}handleError(e,t,i){if(void 0===t.value?t.value=this.options.maxRedirections:t.value-=1,t.value<=0)return void i.maxRedirections(Error("Too many Cluster redirections. Last error: "+e));let r=e.message.split(" ");if("MOVED"===r[0]){let e=this.options.retryDelayOnMoved;e&&"number"==typeof e?this.delayQueue.push("moved",i.moved.bind(null,r[1],r[2]),{timeout:e}):i.moved(r[1],r[2])}else"ASK"===r[0]?i.ask(r[1],r[2]):"TRYAGAIN"===r[0]?this.delayQueue.push("tryagain",i.tryagain,{timeout:this.options.retryDelayOnTryAgain}):"CLUSTERDOWN"===r[0]&&this.options.retryDelayOnClusterDown>0?this.delayQueue.push("clusterdown",i.connectionClosed,{timeout:this.options.retryDelayOnClusterDown,callback:this.refreshSlotsCache.bind(this)}):e.message===p.CONNECTION_CLOSED_ERROR_MSG&&this.options.retryDelayOnFailover>0&&"ready"===this.status?this.delayQueue.push("failover",i.connectionClosed,{timeout:this.options.retryDelayOnFailover,callback:this.refreshSlotsCache.bind(this)}):i.defaults()}resetOfflineQueue(){this.offlineQueue=new x}clearNodesRefreshInterval(){this.slotsTimer&&(clearTimeout(this.slotsTimer),this.slotsTimer=null)}resetNodesRefreshInterval(){if(this.slotsTimer||!this.options.slotsRefreshInterval)return;let e=()=>{this.slotsTimer=setTimeout(()=>{k('refreshing slot caches... (triggered by "slotsRefreshInterval" option)'),this.refreshSlotsCache(()=>{e()})},this.options.slotsRefreshInterval)};e()}setStatus(e){k("status: %s -> %s",this.status||"[empty]",e),this.status=e,process.nextTick(()=>{this.emit(e)})}handleCloseEvent(e){var t;let i;e&&k("closed because %s",e),this.manuallyClosing||"function"!=typeof this.options.clusterRetryStrategy||(i=this.options.clusterRetryStrategy.call(this,++this.retryAttempts,e)),"number"==typeof i?(this.setStatus("reconnecting"),this.reconnectTimeout=setTimeout(()=>{this.reconnectTimeout=null,k("Cluster is disconnected. Retrying after %dms",i),this.connect().catch(function(e){k("Got error %s when reconnecting. Ignoring...",e)})},i)):(this.options.shardedSubscribers&&(null==(t=this.subscriberGroupEmitter)||t.removeAllListeners()),this.setStatus("end"),this.flushQueue(Error("None of startup nodes is available")))}flushQueue(e){let t;for(;t=this.offlineQueue.shift();)t.command.reject(e)}executeOfflineCommands(){if(this.offlineQueue.length){let e;k("send %d commands in offline queue",this.offlineQueue.length);let t=this.offlineQueue;for(this.resetOfflineQueue();e=t.shift();)this.sendCommand(e.command,e.stream,e.node)}}natMapper(e){let t="string"==typeof e?e:`${e.host}:${e.port}`,i=null;return(this.options.natMap&&"function"==typeof this.options.natMap?i=this.options.natMap(t):this.options.natMap&&"object"==typeof this.options.natMap&&(i=this.options.natMap[t]),i)?(k("NAT mapping %s -> %O",t,i),Object.assign({},i)):"string"==typeof e?(0,v.nodeKeyToRedisOptions)(e):e}getInfoFromNode(e,t){if(!e)return t(Error("Node is disconnected"));let i=e.duplicate({enableOfflineQueue:!0,enableReadyCheck:!1,retryStrategy:null,connectionName:(0,v.getConnectionName)("refresher",this.options.redisOptions&&this.options.redisOptions.connectionName)});i.on("error",p.noop),i.cluster("SLOTS",(0,p.timeout)((e,r)=>{if(i.disconnect(),e)return k("error encountered running CLUSTER.SLOTS: %s",e),t(e);if("disconnecting"===this.status||"close"===this.status||"end"===this.status){k("ignore CLUSTER.SLOTS results (count: %d) since cluster status is %s",r.length,this.status),t();return}let a=[];k("cluster slots result count: %d",r.length);for(let e=0;e<r.length;++e){let t=r[e],i=t[0],n=t[1],s=[];for(let e=2;e<t.length;e++){if(!t[e][0])continue;let i=this.natMapper({host:t[e][0],port:t[e][1]});i.readOnly=2!==e,a.push(i),s.push(i.host+":"+i.port)}k("cluster slots result [%d]: slots %d~%d served by %s",e,i,n,s);for(let e=i;e<=n;e++)this.slots[e]=s}this._groupsIds=Object.create(null);let n=0;for(let e=0;e<16384;e++){let t=(this.slots[e]||[]).join(";");if(!t.length){this._groupsBySlot[e]=void 0;continue}this._groupsIds[t]||(this._groupsIds[t]=++n),this._groupsBySlot[e]=this._groupsIds[t]}this.connectionPool.reset(a),this.options.shardedSubscribers&&this.shardedSubscribers.reset(this.slots,this.connectionPool.getNodes("all")).catch(e=>{k("Error while starting subscribers: %s",e)}),t()},this.options.slotsRefreshTimeout))}invokeReadyDelayedCallbacks(e){for(let t of this._readyDelayedCallbacks)process.nextTick(t,e);this._readyDelayedCallbacks=[]}readyCheck(e){this.cluster("INFO",(t,i)=>{let r;if(t)return e(t);if("string"!=typeof i)return e();let a=i.split("\r\n");for(let e=0;e<a.length;++e){let t=a[e].split(":");if("cluster_state"===t[0]){r=t[1];break}}"fail"===r?(k("cluster state not ok (%s)",r),e(null,r)):e()})}resolveSrv(e){return new Promise((t,i)=>{this.options.resolveSrv(e,(e,r)=>{if(e)return i(e);let a=this,n=(0,v.groupSrvRecords)(r),s=Object.keys(n).sort((e,t)=>parseInt(e)-parseInt(t));!function e(r){if(!s.length)return i(r);let o=n[s[0]],l=(0,v.weightSrvRecords)(o);o.records.length||s.shift(),a.dnsLookup(l.name).then(e=>t({host:e,port:l.port}),e)}()})})}dnsLookup(e){return new Promise((t,i)=>{this.options.dnsLookup(e,(r,a)=>{r?(k("failed to resolve hostname %s to IP: %s",e,r.message),i(r)):(k("resolved hostname %s to IP %s",e,a),t(a))})})}async resolveStartupNodeHostnames(){if(!Array.isArray(this.startupNodes)||0===this.startupNodes.length)throw Error("`startupNodes` should contain at least one node.");let e=(0,v.normalizeNodeOptions)(this.startupNodes),t=(0,v.getUniqueHostnamesFromOptions)(e);if(0===t.length)return e;let i=await Promise.all(t.map((this.options.useSRVRecords?this.resolveSrv:this.dnsLookup).bind(this))),r=(0,p.zipMap)(t,i);return e.map(e=>{let t=r.get(e.host);return t?this.options.useSRVRecords?Object.assign({},e,t):Object.assign({},e,{host:t}):e})}createScanStream(e,{key:t,options:i={}}){return new c.default({objectMode:!0,key:t,redis:this,command:e,...i})}createShardedSubscriberGroup(){this.subscriberGroupEmitter=new a.EventEmitter,this.shardedSubscribers=new K.default(this.subscriberGroupEmitter,this.options);let e=e=>{e instanceof l.default&&this.disconnect(!0)};for(let t of(this.subscriberGroupEmitter.on("-node",(t,i)=>{this.emit("-node",t,i),this.refreshSlotsCache(e)}),this.subscriberGroupEmitter.on("subscriberConnectFailed",({delay:t,error:i})=>{this.emit("error",i),setTimeout(()=>{this.refreshSlotsCache(e)},t)}),this.subscriberGroupEmitter.on("moved",()=>{this.refreshSlotsCache(e)}),this.subscriberGroupEmitter.on("-subscriber",()=>{this.emit("-subscriber")}),this.subscriberGroupEmitter.on("+subscriber",()=>{this.emit("+subscriber")}),this.subscriberGroupEmitter.on("nodeError",(e,t)=>{this.emit("nodeError",e,t)}),this.subscriberGroupEmitter.on("subscribersReady",()=>{this.emit("subscribersReady")}),["smessage","smessageBuffer"]))this.subscriberGroupEmitter.on(t,(e,i,r)=>{this.emit(t,e,i,r)})}}(0,h.default)(E,a.EventEmitter),(0,u.addTransactionSupport)(E.prototype),i.default=E},55004,(e,t,i)=>{t.exports=e.x("tls",()=>require("tls"))},58451,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=(0,e.r(26898).Debug)("AbstractConnector");i.default=class{constructor(e){this.connecting=!1,this.disconnectTimeout=e}check(e){return!0}disconnect(){if(this.connecting=!1,this.stream){let e=this.stream,t=setTimeout(()=>{r("stream %s:%s still open, destroying it",e.remoteAddress,e.remotePort),e.destroy()},this.disconnectTimeout);e.on("close",()=>clearTimeout(t)),e.end()}}}},90851,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(4446),a=e.r(55004),n=e.r(26898),s=e.r(58451);class o extends s.default{constructor(e){super(e.disconnectTimeout),this.options=e}connect(e){let t,{options:i}=this;return this.connecting=!0,"path"in i&&i.path?t={path:i.path}:(t={},"port"in i&&null!=i.port&&(t.port=i.port),"host"in i&&null!=i.host&&(t.host=i.host),"family"in i&&null!=i.family&&(t.family=i.family)),i.tls&&Object.assign(t,i.tls),new Promise((e,s)=>{process.nextTick(()=>{if(!this.connecting)return void s(Error(n.CONNECTION_CLOSED_ERROR_MSG));try{i.tls?this.stream=(0,a.connect)(t):this.stream=(0,r.createConnection)(t)}catch(e){s(e);return}this.stream.once("error",e=>{this.firstError=e}),e(this.stream)})})}}i.default=o},85649,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=class{constructor(e){this.cursor=0,this.sentinels=e.slice(0)}next(){let e=this.cursor>=this.sentinels.length;return{done:e,value:e?void 0:this.sentinels[this.cursor++]}}reset(e){e&&this.sentinels.length>1&&1!==this.cursor&&this.sentinels.unshift(...this.sentinels.splice(this.cursor-1)),this.cursor=0}add(e){for(let i=0;i<this.sentinels.length;i++){var t;if(t=this.sentinels[i],(e.host||"127.0.0.1")===(t.host||"127.0.0.1")&&(e.port||26379)===(t.port||26379))return!1}return this.sentinels.push(e),!0}toString(){return`${JSON.stringify(this.sentinels)} @${this.cursor}`}}},87575,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.FailoverDetector=void 0;let r=(0,e.r(26898).Debug)("FailoverDetector"),a="+switch-master";i.FailoverDetector=class{constructor(e,t){this.isDisconnected=!1,this.connector=e,this.sentinels=t}cleanup(){for(let e of(this.isDisconnected=!0,this.sentinels))e.client.disconnect()}async subscribe(){r("Starting FailoverDetector");let e=[];for(let t of this.sentinels){let i=t.client.subscribe(a).catch(e=>{r("Failed to subscribe to failover messages on sentinel %s:%s (%s)",t.address.host||"127.0.0.1",t.address.port||26739,e.message)});e.push(i),t.client.on("message",e=>{this.isDisconnected||e!==a||this.disconnect()})}await Promise.all(e)}disconnect(){this.isDisconnected=!0,r("Failover detected, disconnecting"),this.connector.disconnect()}}},77420,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.SentinelIterator=void 0;let r=e.r(4446),a=e.r(26898),n=e.r(55004),s=e.r(85649);i.SentinelIterator=s.default;let o=e.r(58451),l=e.r(66735),d=e.r(87575),c=(0,a.Debug)("SentinelConnector");class u extends o.default{constructor(e){if(super(e.disconnectTimeout),this.options=e,this.emitter=null,this.failoverDetector=null,!this.options.sentinels.length)throw Error("Requires at least one sentinel to connect to.");if(!this.options.name)throw Error("Requires the name of master.");this.sentinelIterator=new s.default(this.options.sentinels)}check(e){let t=!e.role||this.options.role===e.role;return t||(c("role invalid, expected %s, but got %s",this.options.role,e.role),this.sentinelIterator.next(),this.sentinelIterator.next(),this.sentinelIterator.reset(!0)),t}disconnect(){super.disconnect(),this.failoverDetector&&this.failoverDetector.cleanup()}connect(e){let t;this.connecting=!0,this.retryAttempts=0;let i=async()=>{let s=this.sentinelIterator.next();if(s.done){this.sentinelIterator.reset(!1);let r="function"==typeof this.options.sentinelRetryStrategy?this.options.sentinelRetryStrategy(++this.retryAttempts):null,a="number"!=typeof r?"All sentinels are unreachable and retry is disabled.":`All sentinels are unreachable. Retrying from scratch after ${r}ms.`;t&&(a+=` Last error: ${t.message}`),c(a);let n=Error(a);if("number"==typeof r)return e("error",n),await new Promise(e=>setTimeout(e,r)),i();throw n}let o=null,l=null;try{o=await this.resolve(s.value)}catch(e){l=e}if(!this.connecting)throw Error(a.CONNECTION_CLOSED_ERROR_MSG);let d=s.value.host+":"+s.value.port;if(o)return c("resolved: %s:%s from sentinel %s",o.host,o.port,d),this.options.enableTLSForSentinelMode&&this.options.tls?(Object.assign(o,this.options.tls),this.stream=(0,n.connect)(o),this.stream.once("secureConnect",this.initFailoverDetector.bind(this))):(this.stream=(0,r.createConnection)(o),this.stream.once("connect",this.initFailoverDetector.bind(this))),this.stream.once("error",e=>{this.firstError=e}),this.stream;{let r=l?"failed to connect to sentinel "+d+" because "+l.message:"connected to sentinel "+d+" successfully, but got an invalid reply: "+o;return c(r),e("sentinelError",Error(r)),l&&(t=l),i()}};return i()}async updateSentinels(e){if(!this.options.updateSentinels)return;let t=await e.sentinel("sentinels",this.options.name);Array.isArray(t)&&(t.map(a.packObject).forEach(e=>{if(-1===(e.flags?e.flags.split(","):[]).indexOf("disconnected")&&e.ip&&e.port){let t=this.sentinelNatResolve(p(e));this.sentinelIterator.add(t)&&c("adding sentinel %s:%s",t.host,t.port)}}),c("Updated internal sentinels: %s",this.sentinelIterator))}async resolveMaster(e){let t=await e.sentinel("get-master-addr-by-name",this.options.name);return await this.updateSentinels(e),this.sentinelNatResolve(Array.isArray(t)?{host:t[0],port:Number(t[1])}:null)}async resolveSlave(e){let t=await e.sentinel("slaves",this.options.name);if(!Array.isArray(t))return null;let i=t.map(a.packObject).filter(e=>e.flags&&!e.flags.match(/(disconnected|s_down|o_down)/));return this.sentinelNatResolve(function(e,t){let i;if(0===e.length)return null;if("function"==typeof t)i=t(e);else if(null!==t&&"object"==typeof t){let r=Array.isArray(t)?t:[t];r.sort((e,t)=>(e.prio||(e.prio=1),t.prio||(t.prio=1),e.prio<t.prio)?-1:+(e.prio>t.prio));for(let t=0;t<r.length;t++){for(let a=0;a<e.length;a++){let n=e[a];if(n.ip===r[t].ip&&n.port===r[t].port){i=n;break}}if(i)break}}return i||(i=(0,a.sample)(e)),p(i)}(i,this.options.preferredSlaves))}sentinelNatResolve(e){if(!e||!this.options.natMap)return e;let t=`${e.host}:${e.port}`,i=e;return"function"==typeof this.options.natMap?i=this.options.natMap(t)||e:"object"==typeof this.options.natMap&&(i=this.options.natMap[t]||e),i}connectToSentinel(e,t){return new l.default({port:e.port||26379,host:e.host,username:this.options.sentinelUsername||null,password:this.options.sentinelPassword||null,family:e.family||("path"in this.options&&this.options.path?void 0:this.options.family),tls:this.options.sentinelTLS,retryStrategy:null,enableReadyCheck:!1,connectTimeout:this.options.connectTimeout,commandTimeout:this.options.sentinelCommandTimeout,...t})}async resolve(e){let t=this.connectToSentinel(e);t.on("error",h);try{if("slave"===this.options.role)return await this.resolveSlave(t);return await this.resolveMaster(t)}finally{t.disconnect()}}async initFailoverDetector(){var e;if(!this.options.failoverDetector)return;this.sentinelIterator.reset(!0);let t=[];for(;t.length<this.options.sentinelMaxConnections;){let{done:e,value:i}=this.sentinelIterator.next();if(e)break;let r=this.connectToSentinel(i,{lazyConnect:!0,retryStrategy:this.options.sentinelReconnectStrategy});r.on("reconnecting",()=>{var e;null==(e=this.emitter)||e.emit("sentinelReconnecting")}),t.push({address:i,client:r})}this.sentinelIterator.reset(!1),this.failoverDetector&&this.failoverDetector.cleanup(),this.failoverDetector=new d.FailoverDetector(this,t),await this.failoverDetector.subscribe(),null==(e=this.emitter)||e.emit("failoverSubscribed")}}function p(e){return{host:e.ip,port:Number(e.port)}}function h(){}i.default=u},18652,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.SentinelConnector=i.StandaloneConnector=void 0,i.StandaloneConnector=e.r(90851).default,i.SentinelConnector=e.r(77420).default},53757,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(63227);class a extends r.AbortError{constructor(e){super(`Reached the max retries per request limit (which is ${e}). Refer to "maxRetriesPerRequest" option for details.`),Error.captureStackTrace(this,this.constructor)}get name(){return this.constructor.name}}i.default=a},88060,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.MaxRetriesPerRequestError=void 0,i.MaxRetriesPerRequestError=e.r(53757).default},99348,(e,t,i)=>{t.exports=e.x("string_decoder",()=>require("string_decoder"))},29082,(e,t,i)=>{"use strict";let r=e.r(874).Buffer,a=new(e.r(99348)).StringDecoder,n=e.r(63227),s=n.ReplyError,o=n.ParserError;var l=r.allocUnsafe(32768),d=0,c=null,u=0,p=0;function h(e){let t=e.offset,i=e.buffer,r=i.length-1;for(var a=t;a<r;)if(13===i[a++]){if(e.offset=a+1,!0===e.optionReturnBuffers)return e.buffer.slice(t,a-1);return e.buffer.toString("utf8",t,a-1)}}function m(e){let t=e.buffer.length-1;for(var i=e.offset,r=0;i<t;){let t=e.buffer[i++];if(13===t)return e.offset=i+1,r;r=10*r+(t-48)}}function f(e,t,i){e.arrayCache.push(t),e.arrayPos.push(i)}function y(e){let t=e.arrayCache.pop();var i=e.arrayPos.pop();if(e.arrayCache.length){let r=y(e);if(void 0===r)return void f(e,t,i);t[i++]=r}return b(e,t,i)}function b(e,t,i){let r=e.buffer.length;for(;i<t.length;){let a=e.offset;if(e.offset>=r)return void f(e,t,i);let n=g(e,e.buffer[e.offset++]);if(void 0===n){e.arrayCache.length||e.bufferCache.length||(e.offset=a),f(e,t,i);return}t[i]=n,i++}return t}function g(e,t){switch(t){case 36:let i=m(e);if(void 0===i)return;if(i<0)return null;let r=e.offset+i;if(r+2>e.buffer.length){e.bigStrSize=r+2,e.totalChunkSize=e.buffer.length,e.bufferCache.push(e.buffer);return}let a=e.offset;return(e.offset=r+2,!0===e.optionReturnBuffers)?e.buffer.slice(a,r):e.buffer.toString("utf8",a,r);case 43:return h(e);case 42:let n;return void 0===(n=m(e))?void 0:n<0?null:b(e,Array(n),0);case 58:return!0===e.optionStringNumbers?function(e){let t=e.buffer.length-1;var i=e.offset,r=0,a="";for(45===e.buffer[i]&&(a+="-",i++);i<t;){var n=e.buffer[i++];if(13===n)return e.offset=i+1,0!==r&&(a+=r),a;r>0x19999998?(a+=10*r+(n-48),r=0):48===n&&0===r?a+=0:r=10*r+(n-48)}}(e):function(e){let t=e.buffer.length-1;var i=e.offset,r=0,a=1;for(45===e.buffer[i]&&(a=-1,i++);i<t;){let t=e.buffer[i++];if(13===t)return e.offset=i+1,a*r;r=10*r+(t-48)}}(e);case 45:var l=h(e);if(void 0!==l)return!0===e.optionReturnBuffers&&(l=l.toString()),new s(l);return;default:let d;return d=new o("Protocol error, got "+JSON.stringify(String.fromCharCode(t))+" as reply type byte",JSON.stringify(e.buffer),e.offset),void(e.buffer=null,e.returnFatalError(d))}}function v(){if(l.length>51200)if(1===u||p>2*u){let e=Math.floor(l.length/10),t=e<d?d:e;d=0,l=l.slice(t,l.length)}else p++,u--;else clearInterval(c),u=0,p=0,c=null}t.exports=class{constructor(e){if(!e)throw TypeError("Options are mandatory.");if("function"!=typeof e.returnError||"function"!=typeof e.returnReply)throw TypeError("The returnReply and returnError options have to be functions.");this.setReturnBuffers(!!e.returnBuffers),this.setStringNumbers(!!e.stringNumbers),this.returnError=e.returnError,this.returnFatalError=e.returnFatalError||e.returnError,this.returnReply=e.returnReply,this.reset()}reset(){this.offset=0,this.buffer=null,this.bigStrSize=0,this.totalChunkSize=0,this.bufferCache=[],this.arrayCache=[],this.arrayPos=[]}setReturnBuffers(e){if("boolean"!=typeof e)throw TypeError("The returnBuffers argument has to be a boolean");this.optionReturnBuffers=e}setStringNumbers(e){if("boolean"!=typeof e)throw TypeError("The stringNumbers argument has to be a boolean");this.optionStringNumbers=e}execute(e){if(null===this.buffer)this.buffer=e,this.offset=0;else if(0===this.bigStrSize){let t=this.buffer.length,i=t-this.offset,a=r.allocUnsafe(i+e.length);if(this.buffer.copy(a,0,this.offset,t),e.copy(a,i,0,e.length),this.buffer=a,this.offset=0,this.arrayCache.length){let e=y(this);if(void 0===e)return;this.returnReply(e)}}else if(this.totalChunkSize+e.length>=this.bigStrSize){this.bufferCache.push(e);var t=this.optionReturnBuffers?function(e){let t=e.bufferCache,i=e.offset,a=e.bigStrSize-i-2;var n=t.length,s=e.bigStrSize-e.totalChunkSize;if(e.offset=s,s<=2){if(2===n)return t[0].slice(i,t[0].length+s-2);n--,s=t[t.length-2].length+s}l.length<a+d&&(d>0x6f00000&&(d=0x3200000),l=r.allocUnsafe(a*(a>0x4b00000?2:3)+d),d=0,u++,null===c&&(c=setInterval(v,50)));let o=d;t[0].copy(l,o,i,t[0].length),d+=t[0].length-i;for(var p=1;p<n-1;p++)t[p].copy(l,d),d+=t[p].length;return t[p].copy(l,d,0,s-2),d+=s-2,l.slice(o,d)}(this):function(e){let t=e.bufferCache,i=e.offset;var r=t.length,n=e.bigStrSize-e.totalChunkSize;if(e.offset=n,n<=2){if(2===r)return t[0].toString("utf8",i,t[0].length+n-2);r--,n=t[t.length-2].length+n}for(var s=a.write(t[0].slice(i)),o=1;o<r-1;o++)s+=a.write(t[o]);return s+a.end(t[o].slice(0,n-2))}(this);if(this.bigStrSize=0,this.bufferCache=[],this.buffer=e,this.arrayCache.length&&(this.arrayCache[0][this.arrayPos[0]++]=t,void 0===(t=y(this))))return;this.returnReply(t)}else{this.bufferCache.push(e),this.totalChunkSize+=e.length;return}for(;this.offset<this.buffer.length;){let e=this.offset,t=this.buffer[this.offset++],i=g(this,t);if(void 0===i){this.arrayCache.length||this.bufferCache.length||(this.offset=e);return}45===t?this.returnError(i):this.returnReply(i)}this.buffer=null}}},43906,(e,t,i)=>{"use strict";t.exports=e.r(29082)},89611,(e,t,i)=>{"use strict";function r(e){return"unsubscribe"===e?"subscribe":"punsubscribe"===e?"psubscribe":"sunsubscribe"===e?"ssubscribe":e}Object.defineProperty(i,"__esModule",{value:!0}),i.default=class{constructor(){this.set={subscribe:{},psubscribe:{},ssubscribe:{}}}add(e,t){this.set[r(e)][t]=!0}del(e,t){delete this.set[r(e)][t]}channels(e){return Object.keys(this.set[r(e)])}isEmpty(){return 0===this.channels("subscribe").length&&0===this.channels("psubscribe").length&&0===this.channels("ssubscribe").length}}},73052,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(30846),a=e.r(26898),n=e.r(43906),s=e.r(89611),o=(0,a.Debug)("dataHandler");i.default=class{constructor(e,t){this.redis=e;const i=new n({stringNumbers:t.stringNumbers,returnBuffers:!0,returnError:e=>{this.returnError(e)},returnFatalError:e=>{this.returnFatalError(e)},returnReply:e=>{this.returnReply(e)}});e.stream.prependListener("data",e=>{i.execute(e)}),e.stream.resume()}returnFatalError(e){e.message+=". Please report this.",this.redis.recoverFromFatalError(e,e,{offlineQueue:!1})}returnError(e){let t=this.shiftCommand(e);if(t){if(e.command={name:t.command.name,args:t.command.args},"ssubscribe"==t.command.name&&e.message.includes("MOVED"))return void this.redis.emit("moved");this.redis.handleReconnection(e,t)}}returnReply(e){if(this.handleMonitorReply(e)||this.handleSubscriberReply(e))return;let t=this.shiftCommand(e);t&&(r.default.checkFlag("ENTER_SUBSCRIBER_MODE",t.command.name)?(this.redis.condition.subscriber=new s.default,this.redis.condition.subscriber.add(t.command.name,e[1].toString()),d(t.command,e[2])||this.redis.commandQueue.unshift(t)):r.default.checkFlag("EXIT_SUBSCRIBER_MODE",t.command.name)?c(t.command,e[2])||this.redis.commandQueue.unshift(t):t.command.resolve(e))}handleSubscriberReply(e){if(!this.redis.condition.subscriber)return!1;let t=Array.isArray(e)?e[0].toString():null;switch(o('receive reply "%s" in subscriber mode',t),t){case"message":this.redis.listeners("message").length>0&&this.redis.emit("message",e[1].toString(),e[2]?e[2].toString():""),this.redis.emit("messageBuffer",e[1],e[2]);break;case"pmessage":{let t=e[1].toString();this.redis.listeners("pmessage").length>0&&this.redis.emit("pmessage",t,e[2].toString(),e[3].toString()),this.redis.emit("pmessageBuffer",t,e[2],e[3]);break}case"smessage":this.redis.listeners("smessage").length>0&&this.redis.emit("smessage",e[1].toString(),e[2]?e[2].toString():""),this.redis.emit("smessageBuffer",e[1],e[2]);break;case"ssubscribe":case"subscribe":case"psubscribe":{let i=e[1].toString();this.redis.condition.subscriber.add(t,i);let r=this.shiftCommand(e);if(!r)return;d(r.command,e[2])||this.redis.commandQueue.unshift(r);break}case"sunsubscribe":case"unsubscribe":case"punsubscribe":{let i=e[1]?e[1].toString():null;i&&this.redis.condition.subscriber.del(t,i);let r=e[2];0===Number(r)&&(this.redis.condition.subscriber=!1);let a=this.shiftCommand(e);if(!a)return;c(a.command,r)||this.redis.commandQueue.unshift(a);break}default:{let t=this.shiftCommand(e);if(!t)return;t.command.resolve(e)}}return!0}handleMonitorReply(e){if("monitoring"!==this.redis.status)return!1;let t=e.toString();if("OK"===t)return!1;let i=t.indexOf(" "),r=t.slice(0,i),a=t.indexOf('"'),n=t.slice(a+1,-1).split('" "').map(e=>e.replace(/\\"/g,'"')),s=t.slice(i+2,a-2).split(" ");return this.redis.emit("monitor",r,n,s[1],s[0]),!0}shiftCommand(e){let t=this.redis.commandQueue.shift();if(!t){let t=Error("Command queue state error. If you can reproduce this, please report it."+(e instanceof Error?` Last error: ${e.message}`:` Last reply: ${e.toString()}`));return this.redis.emit("error",t),null}return t}};let l=new WeakMap;function d(e,t){let i=l.has(e)?l.get(e):e.args.length;return(i-=1)<=0?(e.resolve(t),l.delete(e),!0):(l.set(e,i),!1)}function c(e,t){let i=l.has(e)?l.get(e):e.args.length;return 0===i?0===Number(t)&&(l.delete(e),e.resolve(t),!0):(i-=1)<=0?(e.resolve(t),!0):(l.set(e,i),!1)}},45247,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.readyHandler=i.errorHandler=i.closeHandler=i.connectHandler=void 0;let r=e.r(63227),a=e.r(30846),n=e.r(88060),s=e.r(26898),o=e.r(73052),l=(0,s.Debug)("connection");function d(e){let t=new r.AbortError("Command aborted due to connection close");return t.command={name:e.name,args:e.args},t}i.connectHandler=function(e){return function(){var t;e.setStatus("connect"),e.resetCommandQueue();let r=!1,{connectionEpoch:a}=e;e.condition.auth&&e.auth(e.condition.auth,function(t){a===e.connectionEpoch&&t&&(-1!==t.message.indexOf("no password is set")?console.warn("[WARN] Redis server does not require a password, but a password was supplied."):-1!==t.message.indexOf("without any password configured for the default user")?console.warn("[WARN] This Redis server's `default` user does not require a password, but a password was supplied"):-1!==t.message.indexOf("wrong number of arguments for 'auth' command")?console.warn("[ERROR] The server returned \"wrong number of arguments for 'auth' command\". You are probably passing both username and password to Redis version 5 or below. You should only pass the 'password' option for Redis version 5 and under."):(r=!0,e.recoverFromFatalError(t,t)))}),e.condition.select&&e.select(e.condition.select).catch(t=>{e.silentEmit("error",t)}),new o.default(e,{stringNumbers:e.options.stringNumbers});let n=[];e.options.connectionName&&(l("set the connection name [%s]",e.options.connectionName),n.push(e.client("setname",e.options.connectionName).catch(s.noop))),e.options.disableClientInfo||(l("set the client info"),n.push((0,s.getPackageMeta)().then(t=>e.client("SETINFO","LIB-VER",t.version).catch(s.noop)).catch(s.noop)),n.push(e.client("SETINFO","LIB-NAME",(null==(t=e.options)?void 0:t.clientInfoTag)?`ioredis(${e.options.clientInfoTag})`:"ioredis").catch(s.noop))),Promise.all(n).catch(s.noop).finally(()=>{e.options.enableReadyCheck||i.readyHandler(e)(),e.options.enableReadyCheck&&e._readyCheck(function(t,n){a===e.connectionEpoch&&(t?r||e.recoverFromFatalError(Error("Ready check failed: "+t.message),t):e.connector.check(n)?i.readyHandler(e)():e.disconnect(!0))})})}},i.closeHandler=function(e){return function(){let i=e.status;if(e.setStatus("close"),e.commandQueue.length&&function(e){var t;let i=0;for(let r=0;r<e.length;){let a=null==(t=e.peekAt(r))?void 0:t.command,n=a.pipelineIndex;if((void 0===n||0===n)&&(i=0),void 0!==n&&n!==i++){e.remove(r,1),a.reject(d(a));continue}r++}}(e.commandQueue),e.offlineQueue.length&&function(e){var t;for(let i=0;i<e.length;){let r=null==(t=e.peekAt(i))?void 0:t.command;if("multi"===r.name)break;if("exec"===r.name){e.remove(i,1),r.reject(d(r));break}r.inTransaction?(e.remove(i,1),r.reject(d(r))):i++}}(e.offlineQueue),"ready"===i&&(e.prevCondition||(e.prevCondition=e.condition),e.commandQueue.length&&(e.prevCommandQueue=e.commandQueue)),e.manuallyClosing)return e.manuallyClosing=!1,l("skip reconnecting since the connection is manually closed."),t();if("function"!=typeof e.options.retryStrategy)return l("skip reconnecting because `retryStrategy` is not a function"),t();let r=e.options.retryStrategy(++e.retryAttempts);if("number"!=typeof r)return l("skip reconnecting because `retryStrategy` doesn't return a number"),t();l("reconnect in %sms",r),e.setStatus("reconnecting",r),e.reconnectTimeout=setTimeout(function(){e.reconnectTimeout=null,e.connect().catch(s.noop)},r);let{maxRetriesPerRequest:a}=e.options;"number"==typeof a&&(a<0?l("maxRetriesPerRequest is negative, ignoring..."):0==e.retryAttempts%(a+1)&&(l("reach maxRetriesPerRequest limitation, flushing command queue..."),e.flushQueue(new n.MaxRetriesPerRequestError(a))))};function t(){e.setStatus("end"),e.flushQueue(Error(s.CONNECTION_CLOSED_ERROR_MSG))}},i.errorHandler=function(e){return function(t){l("error: %s",t),e.silentEmit("error",t)}},i.readyHandler=function(e){return function(){if(e.setStatus("ready"),e.retryAttempts=0,e.options.monitor){e.call("monitor").then(()=>e.setStatus("monitoring"),t=>e.emit("error",t));let{sendCommand:t}=e;e.sendCommand=function(i){return a.default.checkFlag("VALID_IN_MONITOR_MODE",i.name)?t.call(e,i):(i.reject(Error("Connection is in monitoring mode, can't process commands.")),i.promise)},e.once("close",function(){delete e.sendCommand});return}let t=e.prevCondition?e.prevCondition.select:e.condition.select;if(e.options.readOnly&&(l("set the connection to readonly mode"),e.readonly().catch(s.noop)),e.prevCondition){let i=e.prevCondition;if(e.prevCondition=null,i.subscriber&&e.options.autoResubscribe){e.condition.select!==t&&(l("connect to db [%d]",t),e.select(t));let r=i.subscriber.channels("subscribe");r.length&&(l("subscribe %d channels",r.length),e.subscribe(r));let a=i.subscriber.channels("psubscribe");a.length&&(l("psubscribe %d channels",a.length),e.psubscribe(a));let n=i.subscriber.channels("ssubscribe");if(n.length)for(let t of(l("ssubscribe %s",n.length),n))e.ssubscribe(t)}}if(e.prevCommandQueue)if(e.options.autoResendUnfulfilledCommands)for(l("resend %d unfulfilled commands",e.prevCommandQueue.length);e.prevCommandQueue.length>0;){let t=e.prevCommandQueue.shift();t.select!==e.condition.select&&"select"!==t.command.name&&e.select(t.select),e.sendCommand(t.command,t.stream)}else e.prevCommandQueue=null;if(e.offlineQueue.length){l("send %d commands in offline queue",e.offlineQueue.length);let t=e.offlineQueue;for(e.resetOfflineQueue();t.length>0;){let i=t.shift();i.select!==e.condition.select&&"select"!==i.command.name&&e.select(i.select),e.sendCommand(i.command,i.stream)}}e.condition.select!==t&&(l("connect to db [%d]",t),e.select(t))}}},77143,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.DEFAULT_REDIS_OPTIONS=void 0,i.DEFAULT_REDIS_OPTIONS={port:6379,host:"localhost",family:0,connectTimeout:1e4,disconnectTimeout:2e3,retryStrategy:function(e){return Math.min(50*e,2e3)},keepAlive:0,noDelay:!0,connectionName:null,disableClientInfo:!1,clientInfoTag:void 0,sentinels:null,name:null,role:"master",sentinelRetryStrategy:function(e){return Math.min(10*e,1e3)},sentinelReconnectStrategy:function(){return 6e4},natMap:null,enableTLSForSentinelMode:!1,updateSentinels:!0,failoverDetector:!1,username:null,password:null,db:0,enableOfflineQueue:!0,enableReadyCheck:!0,autoResubscribe:!0,autoResendUnfulfilledCommands:!0,lazyConnect:!1,keyPrefix:"",reconnectOnError:null,readOnly:!1,stringNumbers:!1,maxRetriesPerRequest:20,maxLoadingRetryTime:1e4,enableAutoPipelining:!1,autoPipeliningIgnoredCommands:[],sentinelMaxConnections:10,blockingTimeoutGrace:100}},66735,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});let r=e.r(12522),a=e.r(27699),n=e.r(19335),s=e.r(83252),o=e.r(30846),l=e.r(18652),d=e.r(77420),c=e.r(45247),u=e.r(77143),p=e.r(12749),h=e.r(3422),m=e.r(26898),f=e.r(57674),y=e.r(67061),b=e.r(57517),g=e.r(89977),v=(0,m.Debug)("redis");class x extends y.default{constructor(e,t,i){if(super(),this.status="wait",this.isCluster=!1,this.reconnectTimeout=null,this.connectionEpoch=0,this.retryAttempts=0,this.manuallyClosing=!1,this._autoPipelines=new Map,this._runningAutoPipelines=new Set,this.parseOptions(e,t,i),a.EventEmitter.call(this),this.resetCommandQueue(),this.resetOfflineQueue(),this.options.Connector)this.connector=new this.options.Connector(this.options);else if(this.options.sentinels){const e=new d.default(this.options);e.emitter=this,this.connector=e}else this.connector=new l.StandaloneConnector(this.options);this.options.scripts&&Object.entries(this.options.scripts).forEach(([e,t])=>{this.defineCommand(e,t)}),this.options.lazyConnect?this.setStatus("wait"):this.connect().catch(b.noop)}static createClient(...e){return new x(...e)}get autoPipelineQueueSize(){let e=0;for(let t of this._autoPipelines.values())e+=t.length;return e}connect(e){let t=new Promise((e,t)=>{if("connecting"===this.status||"connect"===this.status||"ready"===this.status)return void t(Error("Redis is already connecting/connected"));this.connectionEpoch+=1,this.setStatus("connecting");let{options:i}=this;this.condition={select:i.db,auth:i.username?[i.username,i.password]:i.password,subscriber:!1};let r=this;(0,n.default)(this.connector.connect(function(e,t){r.silentEmit(e,t)}),function(a,n){if(a){r.flushQueue(a),r.silentEmit("error",a),t(a),r.setStatus("end");return}let s=i.tls?"secureConnect":"connect";if("sentinels"in i&&i.sentinels&&!i.enableTLSForSentinelMode&&(s="connect"),r.stream=n,i.noDelay&&n.setNoDelay(!0),"number"==typeof i.keepAlive&&(n.connecting?n.once(s,()=>{n.setKeepAlive(!0,i.keepAlive)}):n.setKeepAlive(!0,i.keepAlive)),n.connecting){if(n.once(s,c.connectHandler(r)),i.connectTimeout){let e=!1;n.setTimeout(i.connectTimeout,function(){if(e)return;n.setTimeout(0),n.destroy();let t=Error("connect ETIMEDOUT");t.errorno="ETIMEDOUT",t.code="ETIMEDOUT",t.syscall="connect",c.errorHandler(r)(t)}),n.once(s,function(){e=!0,n.setTimeout(0)})}}else if(n.destroyed){let e=r.connector.firstError;e&&process.nextTick(()=>{c.errorHandler(r)(e)}),process.nextTick(c.closeHandler(r))}else process.nextTick(c.connectHandler(r));n.destroyed||(n.once("error",c.errorHandler(r)),n.once("close",c.closeHandler(r)));let o=function(){r.removeListener("close",l),e()};var l=function(){r.removeListener("ready",o),t(Error(m.CONNECTION_CLOSED_ERROR_MSG))};r.once("ready",o),r.once("close",l)})});return(0,n.default)(t,e)}disconnect(e=!1){e||(this.manuallyClosing=!0),this.reconnectTimeout&&!e&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),"wait"===this.status?c.closeHandler(this)():this.connector.disconnect()}end(){this.disconnect()}duplicate(e){return new x({...this.options,...e})}get mode(){var e;return this.options.monitor?"monitor":(null==(e=this.condition)?void 0:e.subscriber)?"subscriber":"normal"}monitor(e){let t=this.duplicate({monitor:!0,lazyConnect:!1});return(0,n.default)(new Promise(function(e,i){t.once("error",i),t.once("monitoring",function(){e(t)})}),e)}sendCommand(e,t){var i,a;if("wait"===this.status&&this.connect().catch(b.noop),"end"===this.status)return e.reject(Error(m.CONNECTION_CLOSED_ERROR_MSG)),e.promise;if((null==(i=this.condition)?void 0:i.subscriber)&&!o.default.checkFlag("VALID_IN_SUBSCRIBER_MODE",e.name))return e.reject(Error("Connection in subscriber mode, only subscriber commands may be used")),e.promise;"number"==typeof this.options.commandTimeout&&e.setTimeout(this.options.commandTimeout);let n=this.getBlockingTimeoutInMs(e),s="ready"===this.status||!t&&"connect"===this.status&&(0,r.exists)(e.name,{caseInsensitive:!0})&&((0,r.hasFlag)(e.name,"loading",{nameCaseInsensitive:!0})||o.default.checkFlag("HANDSHAKE_COMMANDS",e.name));if(this.stream&&this.stream.writable?this.stream._writableState&&this.stream._writableState.ended&&(s=!1):s=!1,s)v.enabled&&v("write command[%s]: %d -> %s(%o)",this._getDescription(),null==(a=this.condition)?void 0:a.select,e.name,e.args),t?"isPipeline"in t&&t.isPipeline?t.write(e.toWritable(t.destination.redis.stream)):t.write(e.toWritable(t)):this.stream.write(e.toWritable(this.stream)),this.commandQueue.push({command:e,stream:t,select:this.condition.select}),void 0!==n&&e.setBlockingTimeout(n),o.default.checkFlag("WILL_DISCONNECT",e.name)&&(this.manuallyClosing=!0),void 0!==this.options.socketTimeout&&void 0===this.socketTimeoutTimer&&this.setSocketTimeout();else{if(!this.options.enableOfflineQueue)return e.reject(Error("Stream isn't writeable and enableOfflineQueue options is false")),e.promise;if("quit"===e.name&&0===this.offlineQueue.length)return this.disconnect(),e.resolve(Buffer.from("OK")),e.promise;if(v.enabled&&v("queue command[%s]: %d -> %s(%o)",this._getDescription(),this.condition.select,e.name,e.args),this.offlineQueue.push({command:e,stream:t,select:this.condition.select}),o.default.checkFlag("BLOCKING_COMMANDS",e.name)){let t=this.getConfiguredBlockingTimeout();void 0!==t&&e.setBlockingTimeout(t)}}if("select"===e.name&&(0,m.isInt)(e.args[0])){let t=parseInt(e.args[0],10);this.condition.select!==t&&(this.condition.select=t,this.emit("select",t),v("switch to db [%d]",this.condition.select))}return e.promise}getBlockingTimeoutInMs(e){var t;if(!o.default.checkFlag("BLOCKING_COMMANDS",e.name))return;let i=this.getConfiguredBlockingTimeout();if(void 0===i)return;let r=e.extractBlockingTimeout();return"number"==typeof r?r>0?r+(null!=(t=this.options.blockingTimeoutGrace)?t:u.DEFAULT_REDIS_OPTIONS.blockingTimeoutGrace):i:null===r?i:void 0}getConfiguredBlockingTimeout(){if("number"==typeof this.options.blockingTimeout&&this.options.blockingTimeout>0)return this.options.blockingTimeout}setSocketTimeout(){this.socketTimeoutTimer=setTimeout(()=>{this.stream.destroy(Error(`Socket timeout. Expecting data, but didn't receive any in ${this.options.socketTimeout}ms.`)),this.socketTimeoutTimer=void 0},this.options.socketTimeout),this.stream.once("data",()=>{clearTimeout(this.socketTimeoutTimer),this.socketTimeoutTimer=void 0,0!==this.commandQueue.length&&this.setSocketTimeout()})}scanStream(e){return this.createScanStream("scan",{options:e})}scanBufferStream(e){return this.createScanStream("scanBuffer",{options:e})}sscanStream(e,t){return this.createScanStream("sscan",{key:e,options:t})}sscanBufferStream(e,t){return this.createScanStream("sscanBuffer",{key:e,options:t})}hscanStream(e,t){return this.createScanStream("hscan",{key:e,options:t})}hscanBufferStream(e,t){return this.createScanStream("hscanBuffer",{key:e,options:t})}zscanStream(e,t){return this.createScanStream("zscan",{key:e,options:t})}zscanBufferStream(e,t){return this.createScanStream("zscanBuffer",{key:e,options:t})}silentEmit(e,t){let i;if("error"!==e||(i=t,"end"!==this.status&&(!this.manuallyClosing||!(i instanceof Error)||i.message!==m.CONNECTION_CLOSED_ERROR_MSG&&"connect"!==i.syscall&&"read"!==i.syscall)))return this.listeners(e).length>0?this.emit.apply(this,arguments):(i&&i instanceof Error&&console.error("[ioredis] Unhandled error event:",i.stack),!1)}recoverFromFatalError(e,t,i){this.flushQueue(t,i),this.silentEmit("error",t),this.disconnect(!0)}handleReconnection(e,t){var i;let r=!1;switch(this.options.reconnectOnError&&!o.default.checkFlag("IGNORE_RECONNECT_ON_ERROR",t.command.name)&&(r=this.options.reconnectOnError(e)),r){case 1:case!0:"reconnecting"!==this.status&&this.disconnect(!0),t.command.reject(e);break;case 2:"reconnecting"!==this.status&&this.disconnect(!0),(null==(i=this.condition)?void 0:i.select)!==t.select&&"select"!==t.command.name&&this.select(t.select),this.sendCommand(t.command);break;default:t.command.reject(e)}}_getDescription(){let e;return e="path"in this.options&&this.options.path?this.options.path:this.stream&&this.stream.remoteAddress&&this.stream.remotePort?this.stream.remoteAddress+":"+this.stream.remotePort:"host"in this.options&&this.options.host?this.options.host+":"+this.options.port:"",this.options.connectionName&&(e+=` (${this.options.connectionName})`),e}resetCommandQueue(){this.commandQueue=new g}resetOfflineQueue(){this.offlineQueue=new g}parseOptions(...e){let t={},i=!1;for(let r=0;r<e.length;++r){let a=e[r];if(null!=a)if("object"==typeof a)(0,b.defaults)(t,a);else if("string"==typeof a)(0,b.defaults)(t,(0,m.parseURL)(a)),a.startsWith("rediss://")&&(i=!0);else if("number"==typeof a)t.port=a;else throw Error("Invalid argument "+a)}i&&(0,b.defaults)(t,{tls:!0}),(0,b.defaults)(t,x.defaultOptions),"string"==typeof t.port&&(t.port=parseInt(t.port,10)),"string"==typeof t.db&&(t.db=parseInt(t.db,10)),this.options=(0,m.resolveTLSProfile)(t)}setStatus(e,t){v.enabled&&v("status[%s]: %s -> %s",this._getDescription(),this.status||"[empty]",e),this.status=e,process.nextTick(this.emit.bind(this,e,t))}createScanStream(e,{key:t,options:i={}}){return new p.default({objectMode:!0,key:t,redis:this,command:e,...i})}flushQueue(e,t){let i;if((t=(0,b.defaults)({},t,{offlineQueue:!0,commandQueue:!0})).offlineQueue)for(;i=this.offlineQueue.shift();)i.command.reject(e);if(t.commandQueue&&this.commandQueue.length>0)for(this.stream&&this.stream.removeAllListeners("data");i=this.commandQueue.shift();)i.command.reject(e)}_readyCheck(e){let t=this;this.info(function(i,r){if(i)return i.message&&i.message.includes("NOPERM")?(console.warn(`Skipping the ready check because INFO command fails: "${i.message}". You can disable ready check with "enableReadyCheck". More: https://github.com/luin/ioredis/wiki/Disable-ready-check.`),e(null,{})):e(i);if("string"!=typeof r)return e(null,r);let a={},n=r.split("\r\n");for(let e=0;e<n.length;++e){let[t,...i]=n[e].split(":"),r=i.join(":");r&&(a[t]=r)}if(a.loading&&"0"!==a.loading){let i=1e3*(a.loading_eta_seconds||1),r=t.options.maxLoadingRetryTime&&t.options.maxLoadingRetryTime<i?t.options.maxLoadingRetryTime:i;v("Redis server still loading, trying again in "+r+"ms"),setTimeout(function(){t._readyCheck(e)},r)}else e(null,a)}).catch(b.noop)}}x.Cluster=s.default,x.Command=o.default,x.defaultOptions=u.DEFAULT_REDIS_OPTIONS,(0,f.default)(x,a.EventEmitter),(0,h.addTransactionSupport)(x.prototype),i.default=x},42512,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.print=i.ReplyError=i.SentinelIterator=i.SentinelConnector=i.AbstractConnector=i.Pipeline=i.ScanStream=i.Command=i.Cluster=i.Redis=i.default=void 0,i=t.exports=e.r(66735).default;var r=e.r(66735);Object.defineProperty(i,"default",{enumerable:!0,get:function(){return r.default}});var a=e.r(66735);Object.defineProperty(i,"Redis",{enumerable:!0,get:function(){return a.default}});var n=e.r(83252);Object.defineProperty(i,"Cluster",{enumerable:!0,get:function(){return n.default}});var s=e.r(30846);Object.defineProperty(i,"Command",{enumerable:!0,get:function(){return s.default}});var o=e.r(12749);Object.defineProperty(i,"ScanStream",{enumerable:!0,get:function(){return o.default}});var l=e.r(6135);Object.defineProperty(i,"Pipeline",{enumerable:!0,get:function(){return l.default}});var d=e.r(58451);Object.defineProperty(i,"AbstractConnector",{enumerable:!0,get:function(){return d.default}});var c=e.r(77420);Object.defineProperty(i,"SentinelConnector",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(i,"SentinelIterator",{enumerable:!0,get:function(){return c.SentinelIterator}}),i.ReplyError=e.r(63227).ReplyError,Object.defineProperty(i,"Promise",{get:()=>(console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used."),Promise),set(e){console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used.")}}),i.print=function(e,t){e?console.log("Error: "+e):console.log("Reply: "+t)}},95057,(e,t,i)=>{"use strict";let r;Object.defineProperty(i,"__esModule",{value:!0});class a extends Error{}class n extends a{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class s extends a{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class o extends a{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class l extends a{}class d extends a{constructor(e){super(`Invalid unit ${e}`)}}class c extends a{}class u extends a{constructor(){super("Zone is an abstract class")}}let p="numeric",h="short",m="long",f={year:p,month:p,day:p},y={year:p,month:h,day:p},b={year:p,month:h,day:p,weekday:h},g={year:p,month:m,day:p},v={year:p,month:m,day:p,weekday:m},x={hour:p,minute:p},K={hour:p,minute:p,second:p},k={hour:p,minute:p,second:p,timeZoneName:h},S={hour:p,minute:p,second:p,timeZoneName:m},E={hour:p,minute:p,hourCycle:"h23"},I={hour:p,minute:p,second:p,hourCycle:"h23"},w={hour:p,minute:p,second:p,hourCycle:"h23",timeZoneName:h},j={hour:p,minute:p,second:p,hourCycle:"h23",timeZoneName:m},A={year:p,month:p,day:p,hour:p,minute:p},T={year:p,month:p,day:p,hour:p,minute:p,second:p},C={year:p,month:h,day:p,hour:p,minute:p},D={year:p,month:h,day:p,hour:p,minute:p,second:p},O={year:p,month:h,day:p,weekday:h,hour:p,minute:p},R={year:p,month:m,day:p,hour:p,minute:p,timeZoneName:h},M={year:p,month:m,day:p,hour:p,minute:p,second:p,timeZoneName:h},_={year:p,month:m,day:p,weekday:m,hour:p,minute:p,timeZoneName:m},P={year:p,month:m,day:p,weekday:m,hour:p,minute:p,second:p,timeZoneName:m};class N{get type(){throw new u}get name(){throw new u}get ianaName(){return this.name}get isUniversal(){throw new u}offsetName(e,t){throw new u}formatOffset(e,t){throw new u}offset(e){throw new u}equals(e){throw new u}get isValid(){throw new u}}let L=null;class J extends N{static get instance(){return null===L&&(L=new J),L}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:i}){return e4(e,t,i)}formatOffset(e,t){return e7(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return"system"===e.type}get isValid(){return!0}}let q=new Map,F={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6},G=new Map;class V extends N{static create(e){let t=G.get(e);return void 0===t&&G.set(e,t=new V(e)),t}static resetCache(){G.clear(),q.clear()}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}}constructor(e){super(),this.zoneName=e,this.valid=V.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:i}){return e4(e,t,i,this.name)}formatOffset(e,t){return e7(this.offset(e),t)}offset(e){var t;let i;if(!this.valid)return NaN;let r=new Date(e);if(isNaN(r))return NaN;let a=(t=this.name,void 0===(i=q.get(t))&&(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),q.set(t,i)),i),[n,s,o,l,d,c,u]=a.formatToParts?function(e,t){let i=e.formatToParts(t),r=[];for(let e=0;e<i.length;e++){let{type:t,value:a}=i[e],n=F[t];"era"===t?r[n]=a:eN(n)||(r[n]=parseInt(a,10))}return r}(a,r):function(e,t){let i=e.format(t).replace(/\u200E/g,""),[,r,a,n,s,o,l,d]=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(i);return[n,r,a,s,o,l,d]}(a,r);"BC"===l&&(n=-Math.abs(n)+1);let p=e0({year:n,month:s,day:o,hour:24===d?0:d,minute:c,second:u,millisecond:0}),h=+r,m=h%1e3;return(p-(h-=m>=0?m:1e3+m))/6e4}equals(e){return"iana"===e.type&&e.name===this.name}get isValid(){return this.valid}}let z={},B=new Map;function H(e,t={}){let i=JSON.stringify([e,t]),r=B.get(i);return void 0===r&&(r=new Intl.DateTimeFormat(e,t),B.set(i,r)),r}let U=new Map,Y=new Map,W=null,$=new Map;function Q(e){let t=$.get(e);return void 0===t&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),$.set(e,t)),t}let X=new Map;function Z(e,t,i,r){let a=e.listingMode();return"error"===a?null:"en"===a?i(t):r(t)}class ee{constructor(e,t,i){this.padTo=i.padTo||0,this.floor=i.floor||!1;const{padTo:r,floor:a,...n}=i;if(!t||Object.keys(n).length>0){const t={useGrouping:!1,...i};i.padTo>0&&(t.minimumIntegerDigits=i.padTo),this.inf=function(e,t={}){let i=JSON.stringify([e,t]),r=U.get(i);return void 0===r&&(r=new Intl.NumberFormat(e,t),U.set(i,r)),r}(e,t)}}format(e){if(!this.inf)return eH(this.floor?Math.floor(e):e$(e,3),this.padTo);{let t=this.floor?Math.floor(e):e;return this.inf.format(t)}}}class et{constructor(e,t,i){let r;if(this.opts=i,this.originalZone=void 0,this.opts.timeZone)this.dt=e;else if("fixed"===e.zone.type){const t=-1*(e.offset/60),i=t>=0?`Etc/GMT+${t}`:`Etc/GMT${t}`;0!==e.offset&&V.create(i).valid?(r=i,this.dt=e):(r="UTC",this.dt=0===e.offset?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else"system"===e.zone.type?this.dt=e:"iana"===e.zone.type?(this.dt=e,r=e.zone.name):(r="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const a={...this.opts};a.timeZone=a.timeZone||r,this.dtf=H(t,a)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(e=>{if("timeZoneName"!==e.type)return e;{let t=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:t}}}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class ei{constructor(e,t,i){this.opts={style:"long",...i},!t&&eq()&&(this.rtf=function(e,t={}){let{base:i,...r}=t,a=JSON.stringify([e,r]),n=Y.get(a);return void 0===n&&(n=new Intl.RelativeTimeFormat(e,t),Y.set(a,n)),n}(e,i))}format(e,t){return this.rtf?this.rtf.format(e,t):function(e,t,i="always",r=!1){let a={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},n=-1===["hours","minutes","seconds"].indexOf(e);if("auto"===i&&n){let i="days"===e;switch(t){case 1:return i?"tomorrow":`next ${a[e][0]}`;case -1:return i?"yesterday":`last ${a[e][0]}`;case 0:return i?"today":`this ${a[e][0]}`}}let s=Object.is(t,-0)||t<0,o=Math.abs(t),l=1===o,d=a[e],c=r?l?d[1]:d[2]||d[1]:l?a[e][0]:e;return s?`${o} ${c} ago`:`in ${o} ${c}`}(t,e,this.opts.numeric,"long"!==this.opts.style)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}}let er={firstDay:1,minimalDays:4,weekend:[6,7]};class ea{static fromOpts(e){return ea.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,t,i,r,a=!1){let n=e||ek.defaultLocale;return new ea(n||(a?"en-US":W||(W=new Intl.DateTimeFormat().resolvedOptions().locale)),t||ek.defaultNumberingSystem,i||ek.defaultOutputCalendar,ez(r)||ek.defaultWeekSettings,n)}static resetCache(){W=null,B.clear(),U.clear(),Y.clear(),$.clear(),X.clear()}static fromObject({locale:e,numberingSystem:t,outputCalendar:i,weekSettings:r}={}){return ea.create(e,t,i,r)}constructor(e,t,i,r,a){const[n,s,o]=function(e){let t=e.indexOf("-x-");-1!==t&&(e=e.substring(0,t));let i=e.indexOf("-u-");if(-1===i)return[e];{let t,r;try{t=H(e).resolvedOptions(),r=e}catch(n){let a=e.substring(0,i);t=H(a).resolvedOptions(),r=a}let{numberingSystem:a,calendar:n}=t;return[r,a,n]}}(e);this.locale=n,this.numberingSystem=t||s||null,this.outputCalendar=i||o||null,this.weekSettings=r,this.intl=function(e,t,i){return(i||t)&&(e.includes("-u-")||(e+="-u"),i&&(e+=`-ca-${i}`),t&&(e+=`-nu-${t}`)),e}(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}get fastNumbers(){return null==this.fastNumbersCached&&(this.fastNumbersCached=(!this.numberingSystem||"latn"===this.numberingSystem)&&("latn"===this.numberingSystem||!this.locale||this.locale.startsWith("en")||"latn"===Q(this.locale).numberingSystem)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),t=(null===this.numberingSystem||"latn"===this.numberingSystem)&&(null===this.outputCalendar||"gregory"===this.outputCalendar);return e&&t?"en":"intl"}clone(e){return e&&0!==Object.getOwnPropertyNames(e).length?ea.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,ez(e.weekSettings)||this.weekSettings,e.defaultToEN||!1):this}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,t=!1){return Z(this,e,tr,()=>{let i="ja"===this.intl||this.intl.startsWith("ja-"),r=(t&=!i)?{month:e,day:"numeric"}:{month:e},a=t?"format":"standalone";if(!this.monthsCache[a][e]){let t=i?e=>this.dtFormatter(e,r).format():e=>this.extract(e,r,"month");this.monthsCache[a][e]=function(e){let t=[];for(let i=1;i<=12;i++){let r=i$.utc(2009,i,1);t.push(e(r))}return t}(t)}return this.monthsCache[a][e]})}weekdays(e,t=!1){return Z(this,e,to,()=>{let i=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},r=t?"format":"standalone";return this.weekdaysCache[r][e]||(this.weekdaysCache[r][e]=function(e){let t=[];for(let i=1;i<=7;i++){let r=i$.utc(2016,11,13+i);t.push(e(r))}return t}(e=>this.extract(e,i,"weekday"))),this.weekdaysCache[r][e]})}meridiems(){return Z(this,void 0,()=>tl,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[i$.utc(2016,11,13,9),i$.utc(2016,11,13,19)].map(t=>this.extract(t,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Z(this,e,tp,()=>{let t={era:e};return this.eraCache[e]||(this.eraCache[e]=[i$.utc(-40,1,1),i$.utc(2017,1,1)].map(e=>this.extract(e,t,"era"))),this.eraCache[e]})}extract(e,t,i){let r=this.dtFormatter(e,t).formatToParts().find(e=>e.type.toLowerCase()===i);return r?r.value:null}numberFormatter(e={}){return new ee(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new et(e,this.intl,t)}relFormatter(e={}){return new ei(this.intl,this.isEnglish(),e)}listFormatter(e={}){return function(e,t={}){let i=JSON.stringify([e,t]),r=z[i];return r||(r=new Intl.ListFormat(e,t),z[i]=r),r}(this.intl,e)}isEnglish(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||Q(this.intl).locale.startsWith("en-us")}getWeekSettings(){if(this.weekSettings)return this.weekSettings;if(!eF())return er;var e=this.locale;let t=X.get(e);if(!t){let i=new Intl.Locale(e);"minimalDays"in(t="getWeekInfo"in i?i.getWeekInfo():i.weekInfo)||(t={...er,...t}),X.set(e,t)}return t}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let en=null;class es extends N{static get utcInstance(){return null===en&&(en=new es(0)),en}static instance(e){return 0===e?es.utcInstance:new es(e)}static parseSpecifier(e){if(e){let t=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new es(e6(t[1],t[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return 0===this.fixed?"UTC":`UTC${e7(this.fixed,"narrow")}`}get ianaName(){return 0===this.fixed?"Etc/UTC":`Etc/GMT${e7(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,t){return e7(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return"fixed"===e.type&&e.fixed===this.fixed}get isValid(){return!0}}class eo extends N{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function el(e,t){if(eN(e)||null===e)return t;if(e instanceof N)return e;if("string"==typeof e){let i=e.toLowerCase();return"default"===i?t:"local"===i||"system"===i?J.instance:"utc"===i||"gmt"===i?es.utcInstance:es.parseSpecifier(i)||V.create(e)}if(eL(e))return es.instance(e);if("object"==typeof e&&"offset"in e&&"function"==typeof e.offset)return e;else return new eo(e)}let ed={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ec={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},eu=ed.hanidec.replace(/[\[|\]]/g,"").split(""),ep=new Map;function eh({numberingSystem:e},t=""){let i=e||"latn",r=ep.get(i);void 0===r&&(r=new Map,ep.set(i,r));let a=r.get(t);return void 0===a&&(a=RegExp(`${ed[i]}${t}`),r.set(t,a)),a}let em=()=>Date.now(),ef="system",ey=null,eb=null,eg=null,ev=60,ex,eK=null;class ek{static get now(){return em}static set now(e){em=e}static set defaultZone(e){ef=e}static get defaultZone(){return el(ef,J.instance)}static get defaultLocale(){return ey}static set defaultLocale(e){ey=e}static get defaultNumberingSystem(){return eb}static set defaultNumberingSystem(e){eb=e}static get defaultOutputCalendar(){return eg}static set defaultOutputCalendar(e){eg=e}static get defaultWeekSettings(){return eK}static set defaultWeekSettings(e){eK=ez(e)}static get twoDigitCutoffYear(){return ev}static set twoDigitCutoffYear(e){ev=e%100}static get throwOnInvalid(){return ex}static set throwOnInvalid(e){ex=e}static resetCaches(){ea.resetCache(),V.resetCache(),i$.resetCache(),ep.clear()}}class eS{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}let eE=[0,31,59,90,120,151,181,212,243,273,304,334],eI=[0,31,60,91,121,152,182,213,244,274,305,335];function ew(e,t){return new eS("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function ej(e,t,i){let r=new Date(Date.UTC(e,t-1,i));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);let a=r.getUTCDay();return 0===a?7:a}function eA(e,t){let i=eQ(e)?eI:eE,r=i.findIndex(e=>e<t),a=t-i[r];return{month:r+1,day:a}}function eT(e,t){return(e-t+7)%7+1}function eC(e,t=4,i=1){let{year:r,month:a,day:n}=e,s=n+(eQ(r)?eI:eE)[a-1],o=eT(ej(r,a,n),i),l=Math.floor((s-o+14-t)/7),d;return l<1?l=e2(d=r-1,t,i):l>e2(r,t,i)?(d=r+1,l=1):d=r,{weekYear:d,weekNumber:l,weekday:o,...e9(e)}}function eD(e,t=4,i=1){let{weekYear:r,weekNumber:a,weekday:n}=e,s=eT(ej(r,1,t),i),o=eX(r),l=7*a+n-s-7+t,d;l<1?l+=eX(d=r-1):l>o?(d=r+1,l-=eX(r)):d=r;let{month:c,day:u}=eA(d,l);return{year:d,month:c,day:u,...e9(e)}}function eO(e){let{year:t,month:i,day:r}=e,a=r+(eQ(t)?eI:eE)[i-1];return{year:t,ordinal:a,...e9(e)}}function eR(e){let{year:t,ordinal:i}=e,{month:r,day:a}=eA(t,i);return{year:t,month:r,day:a,...e9(e)}}function eM(e,t){if(!(!eN(e.localWeekday)||!eN(e.localWeekNumber)||!eN(e.localWeekYear)))return{minDaysInFirstWeek:4,startOfWeek:1};if(!eN(e.weekday)||!eN(e.weekNumber)||!eN(e.weekYear))throw new l("Cannot mix locale-based week fields with ISO-based week fields");return eN(e.localWeekday)||(e.weekday=e.localWeekday),eN(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),eN(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}function e_(e){let t=eJ(e.year),i=eB(e.month,1,12),r=eB(e.day,1,eZ(e.year,e.month));return t?i?!r&&ew("day",e.day):ew("month",e.month):ew("year",e.year)}function eP(e){let{hour:t,minute:i,second:r,millisecond:a}=e,n=eB(t,0,23)||24===t&&0===i&&0===r&&0===a,s=eB(i,0,59),o=eB(r,0,59),l=eB(a,0,999);return n?s?o?!l&&ew("millisecond",a):ew("second",r):ew("minute",i):ew("hour",t)}function eN(e){return void 0===e}function eL(e){return"number"==typeof e}function eJ(e){return"number"==typeof e&&e%1==0}function eq(){try{return"u">typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function eF(){try{return"u">typeof Intl&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch(e){return!1}}function eG(e,t,i){if(0!==e.length)return e.reduce((e,r)=>{let a=[t(r),r];return e&&i(e[0],a[0])===e[0]?e:a},null)[1]}function eV(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ez(e){if(null==e)return null;if("object"!=typeof e)throw new c("Week settings must be an object");if(!eB(e.firstDay,1,7)||!eB(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(e=>!eB(e,1,7)))throw new c("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function eB(e,t,i){return eJ(e)&&e>=t&&e<=i}function eH(e,t=2){return e<0?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0")}function eU(e){if(!eN(e)&&null!==e&&""!==e)return parseInt(e,10)}function eY(e){if(!eN(e)&&null!==e&&""!==e)return parseFloat(e)}function eW(e){if(!eN(e)&&null!==e&&""!==e)return Math.floor(1e3*parseFloat("0."+e))}function e$(e,t,i="round"){let r=10**t;switch(i){case"expand":return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case"trunc":return Math.trunc(e*r)/r;case"round":return Math.round(e*r)/r;case"floor":return Math.floor(e*r)/r;case"ceil":return Math.ceil(e*r)/r;default:throw RangeError(`Value rounding ${i} is out of range`)}}function eQ(e){return e%4==0&&(e%100!=0||e%400==0)}function eX(e){return eQ(e)?366:365}function eZ(e,t){var i;let r=(i=t-1)-12*Math.floor(i/12)+1;return 2===r?eQ(e+(t-r)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function e0(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t)).setUTCFullYear(e.year,e.month-1,e.day),+t}function e1(e,t,i){return-eT(ej(e,1,t),i)+t-1}function e2(e,t=4,i=1){let r=e1(e,t,i),a=e1(e+1,t,i);return(eX(e)-r+a)/7}function e3(e){return e>99?e:e>ek.twoDigitCutoffYear?1900+e:2e3+e}function e4(e,t,i,r=null){let a=new Date(e),n={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(n.timeZone=r);let s={timeZoneName:t,...n},o=new Intl.DateTimeFormat(i,s).formatToParts(a).find(e=>"timezonename"===e.type.toLowerCase());return o?o.value:null}function e6(e,t){let i=parseInt(e,10);Number.isNaN(i)&&(i=0);let r=parseInt(t,10)||0,a=i<0||Object.is(i,-0)?-r:r;return 60*i+a}function e5(e){let t=Number(e);if("boolean"==typeof e||""===e||!Number.isFinite(t))throw new c(`Invalid unit value ${e}`);return t}function e8(e,t){let i={};for(let r in e)if(eV(e,r)){let a=e[r];if(null==a)continue;i[t(r)]=e5(a)}return i}function e7(e,t){let i=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),a=e>=0?"+":"-";switch(t){case"short":return`${a}${eH(i,2)}:${eH(r,2)}`;case"narrow":return`${a}${i}${r>0?`:${r}`:""}`;case"techie":return`${a}${eH(i,2)}${eH(r,2)}`;default:throw RangeError(`Value format ${t} is out of range for property format`)}}function e9(e){return["hour","minute","second","millisecond"].reduce((t,i)=>(t[i]=e[i],t),{})}let te=["January","February","March","April","May","June","July","August","September","October","November","December"],tt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ti=["J","F","M","A","M","J","J","A","S","O","N","D"];function tr(e){switch(e){case"narrow":return[...ti];case"short":return[...tt];case"long":return[...te];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}let ta=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],tn=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ts=["M","T","W","T","F","S","S"];function to(e){switch(e){case"narrow":return[...ts];case"short":return[...tn];case"long":return[...ta];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}let tl=["AM","PM"],td=["Before Christ","Anno Domini"],tc=["BC","AD"],tu=["B","A"];function tp(e){switch(e){case"narrow":return[...tu];case"short":return[...tc];case"long":return[...td];default:return null}}function th(e,t){let i="";for(let r of e)r.literal?i+=r.val:i+=t(r.val);return i}let tm={D:f,DD:y,DDD:g,DDDD:v,t:x,tt:K,ttt:k,tttt:S,T:E,TT:I,TTT:w,TTTT:j,f:A,ff:C,fff:R,ffff:_,F:T,FF:D,FFF:M,FFFF:P};class tf{static create(e,t={}){return new tf(e,t)}static parseFormat(e){let t=null,i="",r=!1,a=[];for(let n=0;n<e.length;n++){let s=e.charAt(n);"'"===s?((i.length>0||r)&&a.push({literal:r||/^\s+$/.test(i),val:""===i?"'":i}),t=null,i="",r=!r):r||s===t?i+=s:(i.length>0&&a.push({literal:/^\s+$/.test(i),val:i}),i=s,t=s)}return i.length>0&&a.push({literal:r||/^\s+$/.test(i),val:i}),a}static macroTokenToFormatOpts(e){return tm[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...t}).format()}dtFormatter(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t})}formatDateTime(e,t){return this.dtFormatter(e,t).format()}formatDateTimeParts(e,t){return this.dtFormatter(e,t).formatToParts()}formatInterval(e,t){return this.dtFormatter(e.start,t).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t){return this.dtFormatter(e,t).resolvedOptions()}num(e,t=0,i){if(this.opts.forceSimple)return eH(e,t);let r={...this.opts};return t>0&&(r.padTo=t),i&&(r.signDisplay=i),this.loc.numberFormatter(r).format(e)}formatDateTimeFromString(e,t){let i="en"===this.loc.listingMode(),r=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,a=(t,i)=>this.loc.extract(e,t,i),n=t=>e.isOffsetFixed&&0===e.offset&&t.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,t.format):"",s=(t,r)=>i?tr(t)[e.month-1]:a(r?{month:t}:{month:t,day:"numeric"},"month"),o=(t,r)=>i?to(t)[e.weekday-1]:a(r?{weekday:t}:{weekday:t,month:"long",day:"numeric"},"weekday"),l=t=>{let i=tf.macroTokenToFormatOpts(t);return i?this.formatWithSystemDefault(e,i):t},d=t=>i?tp(t)[e.year<0?0:1]:a({era:t},"era"),c=t=>{switch(t){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12==0?12:e.hour%12);case"hh":return this.num(e.hour%12==0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return n({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return n({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return n({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return i?tl[e.hour<12?0:1]:a({hour:"numeric",hourCycle:"h12"},"dayperiod");case"d":return r?a({day:"numeric"},"day"):this.num(e.day);case"dd":return r?a({day:"2-digit"},"day"):this.num(e.day,2);case"c":case"E":return this.num(e.weekday);case"ccc":return o("short",!0);case"cccc":return o("long",!0);case"ccccc":return o("narrow",!0);case"EEE":return o("short",!1);case"EEEE":return o("long",!1);case"EEEEE":return o("narrow",!1);case"L":return r?a({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return r?a({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return s("short",!0);case"LLLL":return s("long",!0);case"LLLLL":return s("narrow",!0);case"M":return r?a({month:"numeric"},"month"):this.num(e.month);case"MM":return r?a({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return s("short",!1);case"MMMM":return s("long",!1);case"MMMMM":return s("narrow",!1);case"y":return r?a({year:"numeric"},"year"):this.num(e.year);case"yy":return r?a({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return r?a({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return r?a({year:"numeric"},"year"):this.num(e.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return l(t)}};return th(tf.parseFormat(t),c)}formatDurationFromString(e,t){let i="negativeLargestOnly"===this.opts.signMode?-1:1,r=e=>{switch(e[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},a=(e,t)=>a=>{let n=r(a);if(!n)return a;{let r,s=t.isNegativeDuration&&n!==t.largestUnit?i:1;return r="negativeLargestOnly"===this.opts.signMode&&n!==t.largestUnit?"never":"all"===this.opts.signMode?"always":"auto",this.num(e.get(n)*s,a.length,r)}},n=tf.parseFormat(t),s=n.reduce((e,{literal:t,val:i})=>t?e:e.concat(i),[]),o=e.shiftTo(...s.map(r).filter(e=>e)),l={isNegativeDuration:o<0,largestUnit:Object.keys(o.values)[0]};return th(n,a(o,l))}}let ty=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function tb(...e){let t=e.reduce((e,t)=>e+t.source,"");return RegExp(`^${t}$`)}function tg(...e){return t=>e.reduce(([e,i,r],a)=>{let[n,s,o]=a(t,r);return[{...e,...n},s||i,o]},[{},null,1]).slice(0,2)}function tv(e,...t){if(null==e)return[null,null];for(let[i,r]of t){let t=i.exec(e);if(t)return r(t)}return[null,null]}function tx(...e){return(t,i)=>{let r,a={};for(r=0;r<e.length;r++)a[e[r]]=eU(t[i+r]);return[a,null,i+r]}}let tK=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,tk=`(?:${tK.source}?(?:\\[(${ty.source})\\])?)?`,tS=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,tE=RegExp(`${tS.source}${tk}`),tI=RegExp(`(?:[Tt]${tE.source})?`),tw=tx("weekYear","weekNumber","weekDay"),tj=tx("year","ordinal"),tA=RegExp(`${tS.source} ?(?:${tK.source}|(${ty.source}))?`),tT=RegExp(`(?: ${tA.source})?`);function tC(e,t,i){let r=e[t];return eN(r)?i:eU(r)}function tD(e,t){return[{hours:tC(e,t,0),minutes:tC(e,t+1,0),seconds:tC(e,t+2,0),milliseconds:eW(e[t+3])},null,t+4]}function tO(e,t){let i=!e[t]&&!e[t+1],r=e6(e[t+1],e[t+2]);return[{},i?null:es.instance(r),t+3]}function tR(e,t){return[{},e[t]?V.create(e[t]):null,t+1]}let tM=RegExp(`^T?${tS.source}$`),t_=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function tP(e){let[t,i,r,a,n,s,o,l,d]=e,c="-"===t[0],u=l&&"-"===l[0],p=(e,t=!1)=>void 0!==e&&(t||e&&c)?-e:e;return[{years:p(eY(i)),months:p(eY(r)),weeks:p(eY(a)),days:p(eY(n)),hours:p(eY(s)),minutes:p(eY(o)),seconds:p(eY(l),"-0"===l),milliseconds:p(eW(d),u)}]}let tN={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function tL(e,t,i,r,a,n,s){let o={year:2===t.length?e3(eU(t)):eU(t),month:tt.indexOf(i)+1,day:eU(r),hour:eU(a),minute:eU(n)};return s&&(o.second=eU(s)),e&&(o.weekday=e.length>3?ta.indexOf(e)+1:tn.indexOf(e)+1),o}let tJ=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function tq(e){let[,t,i,r,a,n,s,o,l,d,c,u]=e;return[tL(t,a,r,i,n,s,o),new es(l?tN[l]:d?0:e6(c,u))]}let tF=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,tG=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,tV=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function tz(e){let[,t,i,r,a,n,s,o]=e;return[tL(t,a,r,i,n,s,o),es.utcInstance]}function tB(e){let[,t,i,r,a,n,s,o]=e;return[tL(t,o,i,r,a,n,s),es.utcInstance]}let tH=tb(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,tI),tU=tb(/(\d{4})-?W(\d\d)(?:-?(\d))?/,tI),tY=tb(/(\d{4})-?(\d{3})/,tI),tW=tb(tE),t$=tg(function(e,t){return[{year:tC(e,t),month:tC(e,t+1,1),day:tC(e,t+2,1)},null,t+3]},tD,tO,tR),tQ=tg(tw,tD,tO,tR),tX=tg(tj,tD,tO,tR),tZ=tg(tD,tO,tR),t0=tg(tD),t1=tb(/(\d{4})-(\d\d)-(\d\d)/,tT),t2=tb(tA),t3=tg(tD,tO,tR),t4="Invalid Duration",t6={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},t5={years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6},...t6},t8={years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:0x1e18558,milliseconds:31556952e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:7889238,milliseconds:7889238e3},months:{weeks:30.436875/7,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3},...t6},t7=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],t9=t7.slice(0).reverse();function ie(e,t,i=!1){return new ia({values:i?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix})}function it(e,t){var i;let r=null!=(i=t.milliseconds)?i:0;for(let i of t9.slice(1))t[i]&&(r+=t[i]*e[i].milliseconds);return r}function ii(e,t){let i=0>it(e,t)?-1:1;t7.reduceRight((r,a)=>{if(eN(t[a]))return r;if(r){let n=t[r]*i,s=e[a][r],o=Math.floor(n/s);t[a]+=o*i,t[r]-=o*s*i}return a},null),t7.reduce((i,r)=>{if(eN(t[r]))return i;if(i){let a=t[i]%1;t[i]-=a,t[r]+=a*e[i][r]}return r},null)}function ir(e){let t={};for(let[i,r]of Object.entries(e))0!==r&&(t[i]=r);return t}class ia{constructor(e){const t="longterm"===e.conversionAccuracy;let i=t?t8:t5;e.matrix&&(i=e.matrix),this.values=e.values,this.loc=e.loc||ea.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=i,this.isLuxonDuration=!0}static fromMillis(e,t){return ia.fromObject({milliseconds:e},t)}static fromObject(e,t={}){if(null==e||"object"!=typeof e)throw new c(`Duration.fromObject: argument expected to be an object, got ${null===e?"null":typeof e}`);return new ia({values:e8(e,ia.normalizeUnit),loc:ea.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(e){if(eL(e))return ia.fromMillis(e);if(ia.isDuration(e))return e;if("object"==typeof e)return ia.fromObject(e);throw new c(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,t){let[i]=tv(e,[t_,tP]);return i?ia.fromObject(i,t):ia.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,t){let[i]=tv(e,[tM,t0]);return i?ia.fromObject(i,t):ia.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,t=null){if(!e)throw new c("need to specify a reason the Duration is invalid");let i=e instanceof eS?e:new eS(e,t);if(!ek.throwOnInvalid)return new ia({invalid:i});throw new o(i)}static normalizeUnit(e){let t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e];if(!t)throw new d(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){let i={...t,floor:!1!==t.round&&!1!==t.floor};return this.isValid?tf.create(this.loc,i).formatDurationFromString(this,e):t4}toHuman(e={}){if(!this.isValid)return t4;let t=!1!==e.showZeros,i=t7.map(i=>{let r=this.values[i];return eN(r)||0===r&&!t?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:i.slice(0,-1)}).format(r)}).filter(e=>e);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(i)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return 0!==this.years&&(e+=this.years+"Y"),(0!==this.months||0!==this.quarters)&&(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),(0!==this.hours||0!==this.minutes||0!==this.seconds||0!==this.milliseconds)&&(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),(0!==this.seconds||0!==this.milliseconds)&&(e+=e$(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let t=this.toMillis();return t<0||t>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},i$.fromMillis(t,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?it(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let t=ia.fromDurationLike(e),i={};for(let e of t7)(eV(t.values,e)||eV(this.values,e))&&(i[e]=t.get(e)+this.get(e));return ie(this,{values:i},!0)}minus(e){if(!this.isValid)return this;let t=ia.fromDurationLike(e);return this.plus(t.negate())}mapUnits(e){if(!this.isValid)return this;let t={};for(let i of Object.keys(this.values))t[i]=e5(e(this.values[i],i));return ie(this,{values:t},!0)}get(e){return this[ia.normalizeUnit(e)]}set(e){return this.isValid?ie(this,{values:{...this.values,...e8(e,ia.normalizeUnit)}}):this}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:i,matrix:r}={}){return ie(this,{loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:r,conversionAccuracy:i})}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return ii(this.matrix,e),ie(this,{values:e},!0)}rescale(){return this.isValid?ie(this,{values:ir(this.normalize().shiftToAll().toObject())},!0):this}shiftTo(...e){let t;if(!this.isValid||0===e.length)return this;e=e.map(e=>ia.normalizeUnit(e));let i={},r={},a=this.toObject();for(let n of t7)if(e.indexOf(n)>=0){t=n;let e=0;for(let t in r)e+=this.matrix[t][n]*r[t],r[t]=0;eL(a[n])&&(e+=a[n]);let s=Math.trunc(e);i[n]=s,r[n]=(1e3*e-1e3*s)/1e3}else eL(a[n])&&(r[n]=a[n]);for(let e in r)0!==r[e]&&(i[t]+=e===t?r[e]:r[e]/this.matrix[t][e]);return ii(this.matrix,i),ie(this,{values:i},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let t of Object.keys(this.values))e[t]=0===this.values[t]?0:-this.values[t];return ie(this,{values:e},!0)}removeZeros(){return this.isValid?ie(this,{values:ir(this.values)},!0):this}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;for(let r of t7){var t,i;if(t=this.values[r],i=e.values[r],void 0===t||0===t?void 0!==i&&0!==i:t!==i)return!1}return!0}}let is="Invalid Interval";class io{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,t=null){if(!e)throw new c("need to specify a reason the Interval is invalid");let i=e instanceof eS?e:new eS(e,t);if(!ek.throwOnInvalid)return new io({invalid:i});throw new s(i)}static fromDateTimes(e,t){var i,r;let a=iQ(e),n=iQ(t),s=(i=a,r=n,i&&i.isValid?r&&r.isValid?r<i?io.invalid("end before start",`The end of an interval must be after its start, but you had start=${i.toISO()} and end=${r.toISO()}`):null:io.invalid("missing or invalid end"):io.invalid("missing or invalid start"));return null==s?new io({start:a,end:n}):s}static after(e,t){let i=ia.fromDurationLike(t),r=iQ(e);return io.fromDateTimes(r,r.plus(i))}static before(e,t){let i=ia.fromDurationLike(t),r=iQ(e);return io.fromDateTimes(r.minus(i),r)}static fromISO(e,t){let[i,r]=(e||"").split("/",2);if(i&&r){let e,a,n,s;try{a=(e=i$.fromISO(i,t)).isValid}catch(e){a=!1}try{s=(n=i$.fromISO(r,t)).isValid}catch(e){s=!1}if(a&&s)return io.fromDateTimes(e,n);if(a){let i=ia.fromISO(r,t);if(i.isValid)return io.after(e,i)}else if(s){let e=ia.fromISO(i,t);if(e.isValid)return io.before(n,e)}}return io.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return null===this.invalidReason}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",t){let i;if(!this.isValid)return NaN;let r=this.start.startOf(e,t);return Math.floor((i=(i=null!=t&&t.useLocaleWeeks?this.end.reconfigure({locale:r.locale}):this.end).startOf(e,t)).diff(r,e).get(e))+(i.valueOf()!==this.end.valueOf())}hasSame(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return!!this.isValid&&this.s>e}isBefore(e){return!!this.isValid&&this.e<=e}contains(e){return!!this.isValid&&this.s<=e&&this.e>e}set({start:e,end:t}={}){return this.isValid?io.fromDateTimes(e||this.s,t||this.e):this}splitAt(...e){if(!this.isValid)return[];let t=e.map(iQ).filter(e=>this.contains(e)).sort((e,t)=>e.toMillis()-t.toMillis()),i=[],{s:r}=this,a=0;for(;r<this.e;){let e=t[a]||this.e,n=+e>+this.e?this.e:e;i.push(io.fromDateTimes(r,n)),r=n,a+=1}return i}splitBy(e){let t=ia.fromDurationLike(e);if(!this.isValid||!t.isValid||0===t.as("milliseconds"))return[];let{s:i}=this,r=1,a,n=[];for(;i<this.e;){let e=this.start.plus(t.mapUnits(e=>e*r));a=+e>+this.e?this.e:e,n.push(io.fromDateTimes(i,a)),i=a,r+=1}return n}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return!!this.isValid&&+this.e==+e.s}abutsEnd(e){return!!this.isValid&&+e.e==+this.s}engulfs(e){return!!this.isValid&&this.s<=e.s&&this.e>=e.e}equals(e){return!!this.isValid&&!!e.isValid&&this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let t=this.s>e.s?this.s:e.s,i=this.e<e.e?this.e:e.e;return t>=i?null:io.fromDateTimes(t,i)}union(e){if(!this.isValid)return this;let t=this.s<e.s?this.s:e.s,i=this.e>e.e?this.e:e.e;return io.fromDateTimes(t,i)}static merge(e){let[t,i]=e.sort((e,t)=>e.s-t.s).reduce(([e,t],i)=>t?t.overlaps(i)||t.abutsStart(i)?[e,t.union(i)]:[e.concat([t]),i]:[e,i],[[],null]);return i&&t.push(i),t}static xor(e){let t=null,i=0,r=[],a=e.map(e=>[{time:e.s,type:"s"},{time:e.e,type:"e"}]);for(let e of Array.prototype.concat(...a).sort((e,t)=>e.time-t.time))1===(i+="s"===e.type?1:-1)?t=e.time:(t&&+t!=+e.time&&r.push(io.fromDateTimes(t,e.time)),t=null);return io.merge(r)}difference(...e){return io.xor([this].concat(e)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:is}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=f,t={}){return this.isValid?tf.create(this.s.loc.clone(t),e).formatInterval(this):is}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:is}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:is}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:is}toFormat(e,{separator:t=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:is}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):ia.invalid(this.invalidReason)}mapEndpoints(e){return io.fromDateTimes(e(this.s),e(this.e))}}class il{static hasDST(e=ek.defaultZone){let t=i$.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return V.isValidZone(e)}static normalizeZone(e){return el(e,ek.defaultZone)}static getStartOfWeek({locale:e=null,locObj:t=null}={}){return(t||ea.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:t=null}={}){return(t||ea.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:t=null}={}){return(t||ea.create(e)).getWeekendDays().slice()}static months(e="long",{locale:t=null,numberingSystem:i=null,locObj:r=null,outputCalendar:a="gregory"}={}){return(r||ea.create(t,i,a)).months(e)}static monthsFormat(e="long",{locale:t=null,numberingSystem:i=null,locObj:r=null,outputCalendar:a="gregory"}={}){return(r||ea.create(t,i,a)).months(e,!0)}static weekdays(e="long",{locale:t=null,numberingSystem:i=null,locObj:r=null}={}){return(r||ea.create(t,i,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:t=null,numberingSystem:i=null,locObj:r=null}={}){return(r||ea.create(t,i,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return ea.create(e).meridiems()}static eras(e="short",{locale:t=null}={}){return ea.create(t,null,"gregory").eras(e)}static features(){return{relative:eq(),localeWeek:eF()}}}function id(e,t){let i=e=>e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=i(t)-i(e);return Math.floor(ia.fromMillis(r).as("days"))}function ic(e,t=e=>e){return{regex:e,deser:([e])=>t(function(e){let t=parseInt(e,10);if(!isNaN(t))return t;t="";for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(-1!==e[i].search(ed.hanidec))t+=eu.indexOf(e[i]);else for(let e in ec){let[i,a]=ec[e];r>=i&&r<=a&&(t+=r-i)}}return parseInt(t,10)}(e))}}let iu=String.fromCharCode(160),ip=`[ ${iu}]`,ih=RegExp(ip,"g");function im(e){return e.replace(/\./g,"\\.?").replace(ih,ip)}function iy(e){return e.replace(/\./g,"").replace(ih," ").toLowerCase()}function ib(e,t){return null===e?null:{regex:RegExp(e.map(im).join("|")),deser:([i])=>e.findIndex(e=>iy(i)===iy(e))+t}}function ig(e,t){return{regex:e,deser:([,e,t])=>e6(e,t),groups:t}}function iv(e){return{regex:e,deser:([e])=>e}}let ix={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}},iK=null;function ik(e,t){return Array.prototype.concat(...e.map(e=>(function(e,t){if(e.literal)return e;let i=iI(tf.macroTokenToFormatOpts(e.val),t);return null==i||i.includes(void 0)?e:i})(e,t)))}class iS{constructor(e,t){if(this.locale=e,this.format=t,this.tokens=ik(tf.parseFormat(t),e),this.units=this.tokens.map(t=>{let i,r,a,n,s,o,l,d,c,u,p,h,m;return i=eh(e),r=eh(e,"{2}"),a=eh(e,"{3}"),n=eh(e,"{4}"),s=eh(e,"{6}"),o=eh(e,"{1,2}"),l=eh(e,"{1,3}"),d=eh(e,"{1,6}"),c=eh(e,"{1,9}"),u=eh(e,"{2,4}"),p=eh(e,"{4,6}"),h=e=>({regex:RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")),deser:([e])=>e,literal:!0}),(m=(m=>{if(t.literal)return h(m);switch(m.val){case"G":return ib(e.eras("short"),0);case"GG":return ib(e.eras("long"),0);case"y":return ic(d);case"yy":case"kk":return ic(u,e3);case"yyyy":case"kkkk":return ic(n);case"yyyyy":return ic(p);case"yyyyyy":return ic(s);case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return ic(o);case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return ic(r);case"MMM":return ib(e.months("short",!0),1);case"MMMM":return ib(e.months("long",!0),1);case"LLL":return ib(e.months("short",!1),1);case"LLLL":return ib(e.months("long",!1),1);case"o":case"S":return ic(l);case"ooo":case"SSS":return ic(a);case"u":return iv(c);case"uu":return iv(o);case"uuu":case"E":case"c":return ic(i);case"a":return ib(e.meridiems(),0);case"EEE":return ib(e.weekdays("short",!1),1);case"EEEE":return ib(e.weekdays("long",!1),1);case"ccc":return ib(e.weekdays("short",!0),1);case"cccc":return ib(e.weekdays("long",!0),1);case"Z":case"ZZ":return ig(RegExp(`([+-]${o.source})(?::(${r.source}))?`),2);case"ZZZ":return ig(RegExp(`([+-]${o.source})(${r.source})?`),2);case"z":return iv(/[a-z_+-/]{1,256}?/i);case" ":return iv(/[^\S\n\r]/);default:return h(m)}})(t)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"}).token=t,m}),this.disqualifyingUnit=this.units.find(e=>e.invalidReason),!this.disqualifyingUnit){const[e,t]=function(e){let t=e.map(e=>e.regex).reduce((e,t)=>`${e}(${t.source})`,"");return[`^${t}$`,e]}(this.units);this.regex=RegExp(e,"i"),this.handlers=t}}explainFromTokens(e){if(!this.isValid)return{input:e,tokens:this.tokens,invalidReason:this.invalidReason};{let t,i,[r,a]=function(e,t,i){let r=e.match(t);if(!r)return[r,{}];{let e={},t=1;for(let a in i)if(eV(i,a)){let n=i[a],s=n.groups?n.groups+1:1;!n.literal&&n.token&&(e[n.token.val[0]]=n.deser(r.slice(t,t+s))),t+=s}return[r,e]}}(e,this.regex,this.handlers),[n,s,o]=a?(i=null,eN(a.z)||(i=V.create(a.z)),eN(a.Z)||(i||(i=new es(a.Z)),t=a.Z),eN(a.q)||(a.M=(a.q-1)*3+1),eN(a.h)||(a.h<12&&1===a.a?a.h+=12:12===a.h&&0===a.a&&(a.h=0)),0===a.G&&a.y&&(a.y=-a.y),eN(a.u)||(a.S=eW(a.u)),[Object.keys(a).reduce((e,t)=>{let i=(e=>{switch(e){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}})(t);return i&&(e[i]=a[t]),e},{}),i,t]):[null,null,void 0];if(eV(a,"a")&&eV(a,"H"))throw new l("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:a,result:n,zone:s,specificOffset:o}}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function iE(e,t,i){return new iS(e,i).explainFromTokens(t)}function iI(e,t){if(!e)return null;let i=tf.create(t,e).dtFormatter((iK||(iK=i$.fromMillis(0x16a2e5618e3)),iK)),r=i.formatToParts(),a=i.resolvedOptions();return r.map(t=>(function(e,t,i){let{type:r,value:a}=e;if("literal"===r){let e=/^\s+$/.test(a);return{literal:!e,val:e?" ":a}}let n=t[r],s=r;"hour"===r&&(s=null!=t.hour12?t.hour12?"hour12":"hour24":null!=t.hourCycle?"h11"===t.hourCycle||"h12"===t.hourCycle?"hour12":"hour24":i.hour12?"hour12":"hour24");let o=ix[s];if("object"==typeof o&&(o=o[n]),o)return{literal:!1,val:o}})(t,e,a))}let iw="Invalid DateTime";function ij(e){return new eS("unsupported zone",`the zone "${e.name}" is not supported`)}function iA(e){return null===e.weekData&&(e.weekData=eC(e.c)),e.weekData}function iT(e){return null===e.localWeekData&&(e.localWeekData=eC(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function iC(e,t){let i={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new i$({...i,...t,old:i})}function iD(e,t,i){let r=e-60*t*1e3,a=i.offset(r);if(t===a)return[r,t];r-=(a-t)*6e4;let n=i.offset(r);return a===n?[r,a]:[e-60*Math.min(a,n)*1e3,Math.max(a,n)]}function iO(e,t){let i=new Date(e+=60*t*1e3);return{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate(),hour:i.getUTCHours(),minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds()}}function iR(e,t){let i=e.o,r=e.c.year+Math.trunc(t.years),a=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),n={...e.c,year:r,month:a,day:Math.min(e.c.day,eZ(r,a))+Math.trunc(t.days)+7*Math.trunc(t.weeks)},s=ia.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),[o,l]=iD(e0(n),i,e.zone);return 0!==s&&(o+=s,l=e.zone.offset(o)),{ts:o,o:l}}function iM(e,t,i,r,a,n){let{setZone:s,zone:o}=i;if((!e||0===Object.keys(e).length)&&!t)return i$.invalid(new eS("unparsable",`the input "${a}" can't be parsed as ${r}`));{let r=i$.fromObject(e,{...i,zone:t||o,specificOffset:n});return s?r:r.setZone(o)}}function i_(e,t,i=!0){return e.isValid?tf.create(ea.create("en-US"),{allowZ:i,forceSimple:!0}).formatDateTimeFromString(e,t):null}function iP(e,t,i){let r=e.c.year>9999||e.c.year<0,a="";if(r&&e.c.year>=0&&(a+="+"),a+=eH(e.c.year,r?6:4),"year"===i)return a;if(t){if(a+="-",a+=eH(e.c.month),"month"===i)return a;a+="-"}else if(a+=eH(e.c.month),"month"===i)return a;return a+eH(e.c.day)}function iN(e,t,i,r,a,n,s){let o=!i||0!==e.c.millisecond||0!==e.c.second,l="";switch(s){case"day":case"month":case"year":break;default:if(l+=eH(e.c.hour),"hour"===s)break;if(t){if(l+=":",l+=eH(e.c.minute),"minute"===s)break;o&&(l+=":",l+=eH(e.c.second))}else{if(l+=eH(e.c.minute),"minute"===s)break;o&&(l+=eH(e.c.second))}if("second"===s)break;o&&(!r||0!==e.c.millisecond)&&(l+=".",l+=eH(e.c.millisecond,3))}return a&&(e.isOffsetFixed&&0===e.offset&&!n?l+="Z":e.o<0?(l+="-",l+=eH(Math.trunc(-e.o/60)),l+=":",l+=eH(Math.trunc(-e.o%60))):(l+="+",l+=eH(Math.trunc(e.o/60)),l+=":",l+=eH(Math.trunc(e.o%60)))),n&&(l+="["+e.zone.ianaName+"]"),l}let iL={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},iJ={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},iq={ordinal:1,hour:0,minute:0,second:0,millisecond:0},iF=["year","month","day","hour","minute","second","millisecond"],iG=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],iV=["year","ordinal","hour","minute","second","millisecond"];function iz(e){let t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new d(e);return t}function iB(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return iz(e)}}function iH(e,t){let i,a,n=el(t.zone,ek.defaultZone);if(!n.isValid)return i$.invalid(ij(n));let s=ea.fromObject(t);if(eN(e.year))i=ek.now();else{for(let t of iF)eN(e[t])&&(e[t]=iL[t]);let t=e_(e)||eP(e);if(t)return i$.invalid(t);let s=function(e){if(void 0===r&&(r=ek.now()),"iana"!==e.type)return e.offset(r);let t=e.name,i=iW.get(t);return void 0===i&&(i=e.offset(r),iW.set(t,i)),i}(n);[i,a]=iD(e0(e),s,n)}return new i$({ts:i,zone:n,loc:s,o:a})}function iU(e,t,i){let r=!!eN(i.round)||i.round,a=eN(i.rounding)?"trunc":i.rounding,n=(e,n)=>(e=e$(e,r||i.calendary?0:2,i.calendary?"round":a),t.loc.clone(i).relFormatter(i).format(e,n)),s=r=>i.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r);if(i.unit)return n(s(i.unit),i.unit);for(let e of i.units){let t=s(e);if(Math.abs(t)>=1)return n(t,e)}return n(e>t?-0:0,i.units[i.units.length-1])}function iY(e){let t={},i;return e.length>0&&"object"==typeof e[e.length-1]?(t=e[e.length-1],i=Array.from(e).slice(0,e.length-1)):i=Array.from(e),[t,i]}let iW=new Map;class i${constructor(e){const t=e.zone||ek.defaultZone;let i=e.invalid||(Number.isNaN(e.ts)?new eS("invalid input"):null)||(t.isValid?null:ij(t));this.ts=eN(e.ts)?ek.now():e.ts;let r=null,a=null;if(!i)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[r,a]=[e.old.c,e.old.o];else{const n=eL(e.o)&&!e.old?e.o:t.offset(this.ts);r=(i=Number.isNaN((r=iO(this.ts,n)).year)?new eS("invalid input"):null)?null:r,a=i?null:n}this._zone=t,this.loc=e.loc||ea.create(),this.invalid=i,this.weekData=null,this.localWeekData=null,this.c=r,this.o=a,this.isLuxonDateTime=!0}static now(){return new i$({})}static local(){let[e,t]=iY(arguments),[i,r,a,n,s,o,l]=t;return iH({year:i,month:r,day:a,hour:n,minute:s,second:o,millisecond:l},e)}static utc(){let[e,t]=iY(arguments),[i,r,a,n,s,o,l]=t;return e.zone=es.utcInstance,iH({year:i,month:r,day:a,hour:n,minute:s,second:o,millisecond:l},e)}static fromJSDate(e,t={}){let i="[object Date]"===Object.prototype.toString.call(e)?e.valueOf():NaN;if(Number.isNaN(i))return i$.invalid("invalid input");let r=el(t.zone,ek.defaultZone);return r.isValid?new i$({ts:i,zone:r,loc:ea.fromObject(t)}):i$.invalid(ij(r))}static fromMillis(e,t={}){if(eL(e))if(e<-864e13||e>864e13)return i$.invalid("Timestamp out of range");else return new i$({ts:e,zone:el(t.zone,ek.defaultZone),loc:ea.fromObject(t)});throw new c(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,t={}){if(eL(e))return new i$({ts:1e3*e,zone:el(t.zone,ek.defaultZone),loc:ea.fromObject(t)});throw new c("fromSeconds requires a numerical input")}static fromObject(e,t={}){var i;let r,a;e=e||{};let n=el(t.zone,ek.defaultZone);if(!n.isValid)return i$.invalid(ij(n));let s=ea.fromObject(t),o=e8(e,iB),{minDaysInFirstWeek:d,startOfWeek:c}=eM(o,s),u=ek.now(),p=eN(t.specificOffset)?n.offset(u):t.specificOffset,h=!eN(o.ordinal),m=!eN(o.year),f=!eN(o.month)||!eN(o.day),y=m||f,b=o.weekYear||o.weekNumber;if((y||h)&&b)throw new l("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&h)throw new l("Can't mix ordinal dates with month/day");let g=b||o.weekday&&!y,v,x,K=iO(u,p);g?(v=iG,x=iJ,K=eC(K,d,c)):h?(v=iV,x=iq,K=eO(K)):(v=iF,x=iL);let k=!1;for(let e of v)eN(o[e])?k?o[e]=x[e]:o[e]=K[e]:k=!0;let S=(g?function(e,t=4,i=1){let r=eJ(e.weekYear),a=eB(e.weekNumber,1,e2(e.weekYear,t,i)),n=eB(e.weekday,1,7);return r?a?!n&&ew("weekday",e.weekday):ew("week",e.weekNumber):ew("weekYear",e.weekYear)}(o,d,c):h?(r=eJ(o.year),a=eB(o.ordinal,1,eX(o.year)),r?!a&&ew("ordinal",o.ordinal):ew("year",o.year)):e_(o))||eP(o);if(S)return i$.invalid(S);let[E,I]=(i=g?eD(o,d,c):h?eR(o):o,iD(e0(i),p,n)),w=new i$({ts:E,zone:n,o:I,loc:s});return o.weekday&&y&&e.weekday!==w.weekday?i$.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${w.toISO()}`):w.isValid?w:i$.invalid(w.invalid)}static fromISO(e,t={}){let[i,r]=tv(e,[tH,t$],[tU,tQ],[tY,tX],[tW,tZ]);return iM(i,r,t,"ISO 8601",e)}static fromRFC2822(e,t={}){let[i,r]=tv(e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim(),[tJ,tq]);return iM(i,r,t,"RFC 2822",e)}static fromHTTP(e,t={}){let[i,r]=tv(e,[tF,tz],[tG,tz],[tV,tB]);return iM(i,r,t,"HTTP",t)}static fromFormat(e,t,i={}){if(eN(e)||eN(t))throw new c("fromFormat requires an input string and a format");let{locale:r=null,numberingSystem:a=null}=i,[n,s,o,l]=function(e,t,i){let{result:r,zone:a,specificOffset:n,invalidReason:s}=iE(e,t,i);return[r,a,n,s]}(ea.fromOpts({locale:r,numberingSystem:a,defaultToEN:!0}),e,t);return l?i$.invalid(l):iM(n,s,i,`format ${t}`,e,o)}static fromString(e,t,i={}){return i$.fromFormat(e,t,i)}static fromSQL(e,t={}){let[i,r]=tv(e,[t1,t$],[t2,t3]);return iM(i,r,t,"SQL",e)}static invalid(e,t=null){if(!e)throw new c("need to specify a reason the DateTime is invalid");let i=e instanceof eS?e:new eS(e,t);if(!ek.throwOnInvalid)return new i$({invalid:i});throw new n(i)}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){let i=iI(e,ea.fromObject(t));return i?i.map(e=>e?e.val:null).join(""):null}static expandFormat(e,t={}){return ik(tf.parseFormat(e),ea.fromObject(t)).map(e=>e.val).join("")}static resetCache(){r=void 0,iW.clear()}get(e){return this[e]}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?iA(this).weekYear:NaN}get weekNumber(){return this.isValid?iA(this).weekNumber:NaN}get weekday(){return this.isValid?iA(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?iT(this).weekday:NaN}get localWeekNumber(){return this.isValid?iT(this).weekNumber:NaN}get localWeekYear(){return this.isValid?iT(this).weekYear:NaN}get ordinal(){return this.isValid?eO(this.c).ordinal:NaN}get monthShort(){return this.isValid?il.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?il.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?il.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?il.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=e0(this.c),t=this.zone.offset(e-864e5),i=this.zone.offset(e+864e5),r=this.zone.offset(e-6e4*t),a=this.zone.offset(e-6e4*i);if(r===a)return[this];let n=e-6e4*r,s=e-6e4*a,o=iO(n,r),l=iO(s,a);return o.hour===l.hour&&o.minute===l.minute&&o.second===l.second&&o.millisecond===l.millisecond?[iC(this,{ts:n}),iC(this,{ts:s})]:[this]}get isInLeapYear(){return eQ(this.year)}get daysInMonth(){return eZ(this.year,this.month)}get daysInYear(){return this.isValid?eX(this.year):NaN}get weeksInWeekYear(){return this.isValid?e2(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?e2(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){let{locale:t,numberingSystem:i,calendar:r}=tf.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:i,outputCalendar:r}}toUTC(e=0,t={}){return this.setZone(es.instance(e),t)}toLocal(){return this.setZone(ek.defaultZone)}setZone(e,{keepLocalTime:t=!1,keepCalendarTime:i=!1}={}){if((e=el(e,ek.defaultZone)).equals(this.zone))return this;{if(!e.isValid)return i$.invalid(ij(e));let a=this.ts;if(t||i){var r;let t=e.offset(this.ts),i=this.toObject();[a]=(r=e,iD(e0(i),t,r))}return iC(this,{ts:a,zone:e})}}reconfigure({locale:e,numberingSystem:t,outputCalendar:i}={}){return iC(this,{loc:this.loc.clone({locale:e,numberingSystem:t,outputCalendar:i})})}setLocale(e){return this.reconfigure({locale:e})}set(e){var t,i,r;let a;if(!this.isValid)return this;let n=e8(e,iB),{minDaysInFirstWeek:s,startOfWeek:o}=eM(n,this.loc),d=!eN(n.weekYear)||!eN(n.weekNumber)||!eN(n.weekday),c=!eN(n.ordinal),u=!eN(n.year),p=!eN(n.month)||!eN(n.day),h=n.weekYear||n.weekNumber;if((u||p||c)&&h)throw new l("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(p&&c)throw new l("Can't mix ordinal dates with month/day");d?a=eD({...eC(this.c,s,o),...n},s,o):eN(n.ordinal)?(a={...this.toObject(),...n},eN(n.day)&&(a.day=Math.min(eZ(a.year,a.month),a.day))):a=eR({...eO(this.c),...n});let[m,f]=(t=a,i=this.o,r=this.zone,iD(e0(t),i,r));return iC(this,{ts:m,o:f})}plus(e){return this.isValid?iC(this,iR(this,ia.fromDurationLike(e))):this}minus(e){return this.isValid?iC(this,iR(this,ia.fromDurationLike(e).negate())):this}startOf(e,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;let i={},r=ia.normalizeUnit(e);switch(r){case"years":i.month=1;case"quarters":case"months":i.day=1;case"weeks":case"days":i.hour=0;case"hours":i.minute=0;case"minutes":i.second=0;case"seconds":i.millisecond=0}if("weeks"===r)if(t){let e=this.loc.getStartOfWeek(),{weekday:t}=this;t<e&&(i.weekNumber=this.weekNumber-1),i.weekday=e}else i.weekday=1;return"quarters"===r&&(i.month=(Math.ceil(this.month/3)-1)*3+1),this.set(i)}endOf(e,t){return this.isValid?this.plus({[e]:1}).startOf(e,t).minus(1):this}toFormat(e,t={}){return this.isValid?tf.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):iw}toLocaleString(e=f,t={}){return this.isValid?tf.create(this.loc.clone(t),e).formatDateTime(this):iw}toLocaleParts(e={}){return this.isValid?tf.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:t=!1,suppressMilliseconds:i=!1,includeOffset:r=!0,extendedZone:a=!1,precision:n="milliseconds"}={}){if(!this.isValid)return null;n=iz(n);let s="extended"===e,o=iP(this,s,n);return iF.indexOf(n)>=3&&(o+="T"),o+=iN(this,s,t,i,r,a,n)}toISODate({format:e="extended",precision:t="day"}={}){return this.isValid?iP(this,"extended"===e,iz(t)):null}toISOWeekDate(){return i_(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:i=!0,includePrefix:r=!1,extendedZone:a=!1,format:n="extended",precision:s="milliseconds"}={}){return this.isValid?(s=iz(s),(r&&iF.indexOf(s)>=3?"T":"")+iN(this,"extended"===n,t,e,i,a,s)):null}toRFC2822(){return i_(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return i_(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?iP(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:i=!0}={}){let r="HH:mm:ss.SSS";return(t||e)&&(i&&(r+=" "),t?r+="z":e&&(r+="ZZ")),i_(this,r,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():iw}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let t={...this.c};return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t="milliseconds",i={}){if(!this.isValid||!e.isValid)return ia.invalid("created by diffing an invalid DateTime");let r={locale:this.locale,numberingSystem:this.numberingSystem,...i},a=(Array.isArray(t)?t:[t]).map(ia.normalizeUnit),n=e.valueOf()>this.valueOf(),s=function(e,t,i,r){let[a,n,s,o]=function(e,t,i){let r,a,n={},s=e;for(let[o,l]of[["years",(e,t)=>t.year-e.year],["quarters",(e,t)=>t.quarter-e.quarter+(t.year-e.year)*4],["months",(e,t)=>t.month-e.month+(t.year-e.year)*12],["weeks",(e,t)=>{let i=id(e,t);return(i-i%7)/7}],["days",id]])i.indexOf(o)>=0&&(r=o,n[o]=l(e,t),(a=s.plus(n))>t?(n[o]--,(e=s.plus(n))>t&&(a=e,n[o]--,e=s.plus(n))):e=a);return[e,n,a,r]}(e,t,i),l=t-a,d=i.filter(e=>["hours","minutes","seconds","milliseconds"].indexOf(e)>=0);0===d.length&&(s<t&&(s=a.plus({[o]:1})),s!==a&&(n[o]=(n[o]||0)+l/(s-a)));let c=ia.fromObject(n,r);return d.length>0?ia.fromMillis(l,r).shiftTo(...d).plus(c):c}(n?this:e,n?e:this,a,r);return n?s.negate():s}diffNow(e="milliseconds",t={}){return this.diff(i$.now(),e,t)}until(e){return this.isValid?io.fromDateTimes(this,e):this}hasSame(e,t,i){if(!this.isValid)return!1;let r=e.valueOf(),a=this.setZone(e.zone,{keepLocalTime:!0});return a.startOf(t,i)<=r&&r<=a.endOf(t,i)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let t=e.base||i$.fromObject({},{zone:this.zone}),i=e.padding?this<t?-e.padding:e.padding:0,r=["years","months","days","hours","minutes","seconds"],a=e.unit;return Array.isArray(e.unit)&&(r=e.unit,a=void 0),iU(t,this.plus(i),{...e,numeric:"always",units:r,unit:a})}toRelativeCalendar(e={}){return this.isValid?iU(e.base||i$.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(i$.isDateTime))throw new c("min requires all arguments be DateTimes");return eG(e,e=>e.valueOf(),Math.min)}static max(...e){if(!e.every(i$.isDateTime))throw new c("max requires all arguments be DateTimes");return eG(e,e=>e.valueOf(),Math.max)}static fromFormatExplain(e,t,i={}){let{locale:r=null,numberingSystem:a=null}=i;return iE(ea.fromOpts({locale:r,numberingSystem:a,defaultToEN:!0}),e,t)}static fromStringExplain(e,t,i={}){return i$.fromFormatExplain(e,t,i)}static buildFormatParser(e,t={}){let{locale:i=null,numberingSystem:r=null}=t;return new iS(ea.fromOpts({locale:i,numberingSystem:r,defaultToEN:!0}),e)}static fromFormatParser(e,t,i={}){if(eN(e)||eN(t))throw new c("fromFormatParser requires an input string and a format parser");let{locale:r=null,numberingSystem:a=null}=i,n=ea.fromOpts({locale:r,numberingSystem:a,defaultToEN:!0});if(!n.equals(t.locale))throw new c(`fromFormatParser called with a locale of ${n}, but the format parser was created for ${t.locale}`);let{result:s,zone:o,specificOffset:l,invalidReason:d}=t.explainFromTokens(e);return d?i$.invalid(d):iM(s,o,i,`format ${t.format}`,e,l)}static get DATE_SHORT(){return f}static get DATE_MED(){return y}static get DATE_MED_WITH_WEEKDAY(){return b}static get DATE_FULL(){return g}static get DATE_HUGE(){return v}static get TIME_SIMPLE(){return x}static get TIME_WITH_SECONDS(){return K}static get TIME_WITH_SHORT_OFFSET(){return k}static get TIME_WITH_LONG_OFFSET(){return S}static get TIME_24_SIMPLE(){return E}static get TIME_24_WITH_SECONDS(){return I}static get TIME_24_WITH_SHORT_OFFSET(){return w}static get TIME_24_WITH_LONG_OFFSET(){return j}static get DATETIME_SHORT(){return A}static get DATETIME_SHORT_WITH_SECONDS(){return T}static get DATETIME_MED(){return C}static get DATETIME_MED_WITH_SECONDS(){return D}static get DATETIME_MED_WITH_WEEKDAY(){return O}static get DATETIME_FULL(){return R}static get DATETIME_FULL_WITH_SECONDS(){return M}static get DATETIME_HUGE(){return _}static get DATETIME_HUGE_WITH_SECONDS(){return P}}function iQ(e){if(i$.isDateTime(e))return e;if(e&&e.valueOf&&eL(e.valueOf()))return i$.fromJSDate(e);if(e&&"object"==typeof e)return i$.fromObject(e);throw new c(`Unknown datetime argument: ${e}, of type ${typeof e}`)}i.DateTime=i$,i.Duration=ia,i.FixedOffsetZone=es,i.IANAZone=V,i.Info=il,i.Interval=io,i.InvalidZone=eo,i.Settings=ek,i.SystemZone=J,i.VERSION="3.7.2",i.Zone=N},54418,(e,t,i)=>{"use strict";var r=e.r(95057);function a(e,t){var i={zone:t};if(e?e instanceof a?this._date=e._date:e instanceof Date?this._date=r.DateTime.fromJSDate(e,i):"number"==typeof e?this._date=r.DateTime.fromMillis(e,i):"string"==typeof e&&(this._date=r.DateTime.fromISO(e,i),this._date.isValid||(this._date=r.DateTime.fromRFC2822(e,i)),this._date.isValid||(this._date=r.DateTime.fromSQL(e,i)),this._date.isValid||(this._date=r.DateTime.fromFormat(e,"EEE, d MMM yyyy HH:mm:ss",i))):this._date=r.DateTime.local(),!this._date||!this._date.isValid)throw Error("CronDate: unhandled timestamp: "+JSON.stringify(e));t&&t!==this._date.zoneName&&(this._date=this._date.setZone(t))}a.prototype.addYear=function(){this._date=this._date.plus({years:1})},a.prototype.addMonth=function(){this._date=this._date.plus({months:1}).startOf("month")},a.prototype.addDay=function(){this._date=this._date.plus({days:1}).startOf("day")},a.prototype.addHour=function(){var e=this._date;this._date=this._date.plus({hours:1}).startOf("hour"),this._date<=e&&(this._date=this._date.plus({hours:1}))},a.prototype.addMinute=function(){var e=this._date;this._date=this._date.plus({minutes:1}).startOf("minute"),this._date<e&&(this._date=this._date.plus({hours:1}))},a.prototype.addSecond=function(){var e=this._date;this._date=this._date.plus({seconds:1}).startOf("second"),this._date<e&&(this._date=this._date.plus({hours:1}))},a.prototype.subtractYear=function(){this._date=this._date.minus({years:1})},a.prototype.subtractMonth=function(){this._date=this._date.minus({months:1}).endOf("month").startOf("second")},a.prototype.subtractDay=function(){this._date=this._date.minus({days:1}).endOf("day").startOf("second")},a.prototype.subtractHour=function(){var e=this._date;this._date=this._date.minus({hours:1}).endOf("hour").startOf("second"),this._date>=e&&(this._date=this._date.minus({hours:1}))},a.prototype.subtractMinute=function(){var e=this._date;this._date=this._date.minus({minutes:1}).endOf("minute").startOf("second"),this._date>e&&(this._date=this._date.minus({hours:1}))},a.prototype.subtractSecond=function(){var e=this._date;this._date=this._date.minus({seconds:1}).startOf("second"),this._date>e&&(this._date=this._date.minus({hours:1}))},a.prototype.getDate=function(){return this._date.day},a.prototype.getFullYear=function(){return this._date.year},a.prototype.getDay=function(){var e=this._date.weekday;return 7==e?0:e},a.prototype.getMonth=function(){return this._date.month-1},a.prototype.getHours=function(){return this._date.hour},a.prototype.getMinutes=function(){return this._date.minute},a.prototype.getSeconds=function(){return this._date.second},a.prototype.getMilliseconds=function(){return this._date.millisecond},a.prototype.getTime=function(){return this._date.valueOf()},a.prototype.getUTCDate=function(){return this._getUTC().day},a.prototype.getUTCFullYear=function(){return this._getUTC().year},a.prototype.getUTCDay=function(){var e=this._getUTC().weekday;return 7==e?0:e},a.prototype.getUTCMonth=function(){return this._getUTC().month-1},a.prototype.getUTCHours=function(){return this._getUTC().hour},a.prototype.getUTCMinutes=function(){return this._getUTC().minute},a.prototype.getUTCSeconds=function(){return this._getUTC().second},a.prototype.toISOString=function(){return this._date.toUTC().toISO()},a.prototype.toJSON=function(){return this._date.toJSON()},a.prototype.setDate=function(e){this._date=this._date.set({day:e})},a.prototype.setFullYear=function(e){this._date=this._date.set({year:e})},a.prototype.setDay=function(e){this._date=this._date.set({weekday:e})},a.prototype.setMonth=function(e){this._date=this._date.set({month:e+1})},a.prototype.setHours=function(e){this._date=this._date.set({hour:e})},a.prototype.setMinutes=function(e){this._date=this._date.set({minute:e})},a.prototype.setSeconds=function(e){this._date=this._date.set({second:e})},a.prototype.setMilliseconds=function(e){this._date=this._date.set({millisecond:e})},a.prototype._getUTC=function(){return this._date.toUTC()},a.prototype.toString=function(){return this.toDate().toString()},a.prototype.toDate=function(){return this._date.toJSDate()},a.prototype.isLastDayOfMonth=function(){var e=this._date.plus({days:1}).startOf("day");return this._date.month!==e.month},a.prototype.isLastWeekdayOfMonth=function(){var e=this._date.plus({days:7}).startOf("day");return this._date.month!==e.month},t.exports=a},10764,(e,t,i)=>{"use strict";function r(e){return{start:e,count:1}}function a(e,t){e.end=t,e.step=t-e.start,e.count=2}function n(e,t,i){t&&(2===t.count?(e.push(r(t.start)),e.push(r(t.end))):e.push(t)),i&&e.push(i)}t.exports=function(e){for(var t=[],i=void 0,s=0;s<e.length;s++){var o=e[s];"number"!=typeof o?(n(t,i,r(o)),i=void 0):i?1===i.count?a(i,o):i.step===o-i.end?(i.count++,i.end=o):2===i.count?(t.push(r(i.start)),a(i=r(i.end),o)):(n(t,i),i=r(o)):i=r(o)}return n(t,i),t}},23925,(e,t,i)=>{"use strict";var r=e.r(10764);t.exports=function(e,t,i){var a=r(e);if(1===a.length){var n=a[0],s=n.step;if(1===s&&n.start===t&&n.end===i)return"*";if(1!==s&&n.start===t&&n.end===i-s+1)return"*/"+s}for(var o=[],l=0,d=a.length;l<d;++l){var c=a[l];if(1===c.count){o.push(c.start);continue}var s=c.step;if(1===c.step){o.push(c.start+"-"+c.end);continue}var u=0==c.start?c.count-1:c.count;c.step*u>c.end?o=o.concat(Array.from({length:c.end-c.start+1}).map(function(e,t){var i=c.start+t;return(i-c.start)%c.step==0?i:null}).filter(function(e){return null!=e})):c.end===i-c.step+1?o.push(c.start+"/"+c.step):o.push(c.start+"-"+c.end+"/"+c.step)}return o.join(",")}},80435,(e,t,i)=>{"use strict";var r=e.r(54418),a=e.r(23925);function n(e,t){this._options=t,this._utc=t.utc||!1,this._tz=this._utc?"UTC":t.tz,this._currentDate=new r(t.currentDate,this._tz),this._startDate=t.startDate?new r(t.startDate,this._tz):null,this._endDate=t.endDate?new r(t.endDate,this._tz):null,this._isIterator=t.iterator||!1,this._hasIterated=!1,this._nthDayOfWeek=t.nthDayOfWeek||0,this.fields=n._freezeFields(e)}n.map=["second","minute","hour","dayOfMonth","month","dayOfWeek"],n.predefined={"@yearly":"0 0 1 1 *","@monthly":"0 0 1 * *","@weekly":"0 0 * * 0","@daily":"0 0 * * *","@hourly":"0 * * * *"},n.constraints=[{min:0,max:59,chars:[]},{min:0,max:59,chars:[]},{min:0,max:23,chars:[]},{min:1,max:31,chars:["L"]},{min:1,max:12,chars:[]},{min:0,max:7,chars:["L"]}],n.daysInMonth=[31,29,31,30,31,30,31,31,30,31,30,31],n.aliases={month:{jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},dayOfWeek:{sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}},n.parseDefaults=["0","*","*","*","*","*"],n.standardValidCharacters=/^[,*\d/-]+$/,n.dayOfWeekValidCharacters=/^[?,*\dL#/-]+$/,n.dayOfMonthValidCharacters=/^[?,*\dL/-]+$/,n.validCharacters={second:n.standardValidCharacters,minute:n.standardValidCharacters,hour:n.standardValidCharacters,dayOfMonth:n.dayOfMonthValidCharacters,month:n.standardValidCharacters,dayOfWeek:n.dayOfWeekValidCharacters},n._isValidConstraintChar=function(e,t){return"string"==typeof t&&e.chars.some(function(e){return t.indexOf(e)>-1})},n._parseField=function(e,t,i){switch(e){case"month":case"dayOfWeek":var r=n.aliases[e];t=t.replace(/[a-z]{3}/gi,function(e){if(void 0!==r[e=e.toLowerCase()])return r[e];throw Error('Validation error, cannot resolve alias "'+e+'"')})}if(!n.validCharacters[e].test(t))throw Error("Invalid characters, got value: "+t);function a(e){var t=e.split("/");if(t.length>2)throw Error("Invalid repeat: "+e);return t.length>1?(t[0]==+t[0]&&(t=[t[0]+"-"+i.max,t[1]]),s(t[0],t[t.length-1])):s(e,1)}function s(t,r){var a=[],n=t.split("-");if(n.length>1){if(n.length<2)return+t;if(!n[0].length){if(!n[1].length)throw Error("Invalid range: "+t);return+t}var s=+n[0],o=+n[1];if(Number.isNaN(s)||Number.isNaN(o)||s<i.min||o>i.max)throw Error("Constraint error, got range "+s+"-"+o+" expected range "+i.min+"-"+i.max);if(s>o)throw Error("Invalid range: "+t);var l=+r;if(Number.isNaN(l)||l<=0)throw Error("Constraint error, cannot repeat at every "+l+" time.");"dayOfWeek"===e&&o%7==0&&a.push(0);for(var d=s;d<=o;d++)-1===a.indexOf(d)&&l>0&&l%r==0?(l=1,a.push(d)):l++;return a}return Number.isNaN(+t)?t:+t}return -1!==t.indexOf("*")?t=t.replace(/\*/g,i.min+"-"+i.max):-1!==t.indexOf("?")&&(t=t.replace(/\?/g,i.min+"-"+i.max)),function(t){var r=[];function s(t){if(t instanceof Array)for(var a=0,s=t.length;a<s;a++){var o=t[a];if(n._isValidConstraintChar(i,o)){r.push(o);continue}if("number"!=typeof o||Number.isNaN(o)||o<i.min||o>i.max)throw Error("Constraint error, got value "+o+" expected range "+i.min+"-"+i.max);r.push(o)}else{if(n._isValidConstraintChar(i,t))return void r.push(t);var l=+t;if(Number.isNaN(l)||l<i.min||l>i.max)throw Error("Constraint error, got value "+t+" expected range "+i.min+"-"+i.max);"dayOfWeek"===e&&(l%=7),r.push(l)}}var o=t.split(",");if(!o.every(function(e){return e.length>0}))throw Error("Invalid list value format");if(o.length>1)for(var l=0,d=o.length;l<d;l++)s(a(o[l]));else s(a(t));return r.sort(n._sortCompareFn),r}(t)},n._sortCompareFn=function(e,t){var i="number"==typeof e,r="number"==typeof t;return i&&r?e-t:!i&&r?1:i&&!r?-1:e.localeCompare(t)},n._handleMaxDaysInMonth=function(e){if(1===e.month.length){var t=n.daysInMonth[e.month[0]-1];if(e.dayOfMonth[0]>t)throw Error("Invalid explicit day of month definition");return e.dayOfMonth.filter(function(e){return"L"===e||e<=t}).sort(n._sortCompareFn)}},n._freezeFields=function(e){for(var t=0,i=n.map.length;t<i;++t){var r=n.map[t],a=e[r];e[r]=Object.freeze(a)}return Object.freeze(e)},n.prototype._applyTimezoneShift=function(e,t,i){if("Month"===i||"Day"===i){var r=e.getTime();e[t+i](),r===e.getTime()&&(0===e.getMinutes()&&0===e.getSeconds()?e.addHour():59===e.getMinutes()&&59===e.getSeconds()&&e.subtractHour())}else{var a=e.getHours();e[t+i]();var n=e.getHours(),s=n-a;2===s?24!==this.fields.hour.length&&(this._dstStart=n):0===s&&0===e.getMinutes()&&0===e.getSeconds()&&24!==this.fields.hour.length&&(this._dstEnd=n)}},n.prototype._findSchedule=function(e){function t(e,t){for(var i=0,r=t.length;i<r;i++)if(t[i]>=e)return t[i]===e;return t[0]===e}function i(e){return e.length>0&&e.some(function(e){return"string"==typeof e&&e.indexOf("L")>=0})}for(var a=(e=e||!1)?"subtract":"add",s=new r(this._currentDate,this._tz),o=this._startDate,l=this._endDate,d=s.getTime(),c=0;c<1e4;){if(c++,e){if(o&&s.getTime()-o.getTime()<0)throw Error("Out of the timespan range")}else if(l&&l.getTime()-s.getTime()<0)throw Error("Out of the timespan range");var u=t(s.getDate(),this.fields.dayOfMonth);i(this.fields.dayOfMonth)&&(u=u||s.isLastDayOfMonth());var p=t(s.getDay(),this.fields.dayOfWeek);i(this.fields.dayOfWeek)&&(p=p||this.fields.dayOfWeek.some(function(e){if(!i([e]))return!1;var t=Number.parseInt(e[0])%7;if(Number.isNaN(t))throw Error("Invalid last weekday of the month expression: "+e);return s.getDay()===t&&s.isLastWeekdayOfMonth()}));var h=this.fields.dayOfMonth.length>=n.daysInMonth[s.getMonth()],m=this.fields.dayOfWeek.length===n.constraints[5].max-n.constraints[5].min+1,f=s.getHours();if(!u&&(!p||m)||!h&&m&&!u||h&&!m&&!p||this._nthDayOfWeek>0&&!function(e,t){if(t<6){if(8>e.getDate()&&1===t)return!0;var i=e.getDate()%7?1:0;return Math.floor((e.getDate()-e.getDate()%7)/7)+i===t}return!1}(s,this._nthDayOfWeek)){this._applyTimezoneShift(s,a,"Day");continue}if(!t(s.getMonth()+1,this.fields.month)){this._applyTimezoneShift(s,a,"Month");continue}if(t(f,this.fields.hour)){if(this._dstEnd===f&&!e){this._dstEnd=null,this._applyTimezoneShift(s,"add","Hour");continue}}else if(this._dstStart!==f){this._dstStart=null,this._applyTimezoneShift(s,a,"Hour");continue}else if(!t(f-1,this.fields.hour)){s[a+"Hour"]();continue}if(!t(s.getMinutes(),this.fields.minute)){this._applyTimezoneShift(s,a,"Minute");continue}if(!t(s.getSeconds(),this.fields.second)){this._applyTimezoneShift(s,a,"Second");continue}if(d===s.getTime()){"add"===a||0===s.getMilliseconds()?this._applyTimezoneShift(s,a,"Second"):s.setMilliseconds(0);continue}break}if(c>=1e4)throw Error("Invalid expression, loop limit exceeded");return this._currentDate=new r(s,this._tz),this._hasIterated=!0,s},n.prototype.next=function(){var e=this._findSchedule();return this._isIterator?{value:e,done:!this.hasNext()}:e},n.prototype.prev=function(){var e=this._findSchedule(!0);return this._isIterator?{value:e,done:!this.hasPrev()}:e},n.prototype.hasNext=function(){var e=this._currentDate,t=this._hasIterated;try{return this._findSchedule(),!0}catch(e){return!1}finally{this._currentDate=e,this._hasIterated=t}},n.prototype.hasPrev=function(){var e=this._currentDate,t=this._hasIterated;try{return this._findSchedule(!0),!0}catch(e){return!1}finally{this._currentDate=e,this._hasIterated=t}},n.prototype.iterate=function(e,t){var i=[];if(e>=0)for(var r=0,a=e;r<a;r++)try{var n=this.next();i.push(n),t&&t(n,r)}catch(e){break}else for(var r=0,a=e;r>a;r--)try{var n=this.prev();i.push(n),t&&t(n,r)}catch(e){break}return i},n.prototype.reset=function(e){this._currentDate=new r(e||this._options.currentDate)},n.prototype.stringify=function(e){for(var t=[],i=+!e,r=n.map.length;i<r;++i){var s=n.map[i],o=this.fields[s],l=n.constraints[i];"dayOfMonth"===s&&1===this.fields.month.length?l={min:1,max:n.daysInMonth[this.fields.month[0]-1]}:"dayOfWeek"===s&&(l={min:0,max:6},o=7===o[o.length-1]?o.slice(0,-1):o),t.push(a(o,l.min,l.max))}return t.join(" ")},n.parse=function(e,t){var i=this;return"function"==typeof t&&(t={}),function(e,t){t||(t={}),void 0===t.currentDate&&(t.currentDate=new r(void 0,i._tz)),n.predefined[e]&&(e=n.predefined[e]);var a=[],s=(e+"").trim().split(/\s+/);if(s.length>6)throw Error("Invalid cron expression");for(var o=n.map.length-s.length,l=0,d=n.map.length;l<d;++l){var c=n.map[l],u=s[s.length>d?l:l-o];if(l<o||!u)a.push(n._parseField(c,n.parseDefaults[l],n.constraints[l]));else{var p="dayOfWeek"===c?function(e){var i=e.split("#");if(i.length>1){var r=+i[i.length-1];if(/,/.test(e))throw Error("Constraint error, invalid dayOfWeek `#` and `,` special characters are incompatible");if(/\//.test(e))throw Error("Constraint error, invalid dayOfWeek `#` and `/` special characters are incompatible");if(/-/.test(e))throw Error("Constraint error, invalid dayOfWeek `#` and `-` special characters are incompatible");if(i.length>2||Number.isNaN(r)||r<1||r>5)throw Error("Constraint error, invalid dayOfWeek occurrence number (#)");return t.nthDayOfWeek=r,i[0]}return e}(u):u;a.push(n._parseField(c,p,n.constraints[l]))}}for(var h={},l=0,d=n.map.length;l<d;l++)h[n.map[l]]=a[l];var m=n._handleMaxDaysInMonth(h);return h.dayOfMonth=m||h.dayOfMonth,new n(h,t)}(e,t)},n.fieldsToExpression=function(e,t){for(var i={},r=0,a=n.map.length;r<a;++r){var s=n.map[r],o=e[s];!function(e,t,i){if(!t)throw Error("Validation error, Field "+e+" is missing");if(0===t.length)throw Error("Validation error, Field "+e+" contains no values");for(var r=0,a=t.length;r<a;r++){var s=t[r];if(!n._isValidConstraintChar(i,s)&&("number"!=typeof s||Number.isNaN(s)||s<i.min||s>i.max))throw Error("Constraint error, got value "+s+" expected range "+i.min+"-"+i.max)}}(s,o,n.constraints[r]);for(var l=[],d=-1;++d<o.length;)l[d]=o[d];if((o=l.sort(n._sortCompareFn).filter(function(e,t,i){return!t||e!==i[t-1]})).length!==l.length)throw Error("Validation error, Field "+s+" contains duplicate values");i[s]=o}var c=n._handleMaxDaysInMonth(i);return i.dayOfMonth=c||i.dayOfMonth,new n(i,t||{})},t.exports=n},26938,(e,t,i)=>{"use strict";var r=e.r(80435);function a(){}a._parseEntry=function(e){var t=e.split(" ");if(6===t.length)return{interval:r.parse(e)};if(t.length>6)return{interval:r.parse(t.slice(0,6).join(" ")),command:t.slice(6,t.length)};throw Error("Invalid entry: "+e)},a.parseExpression=function(e,t){return r.parse(e,t)},a.fieldsToExpression=function(e,t){return r.fieldsToExpression(e,t)},a.parseString=function(e){for(var t=e.split("\n"),i={variables:{},expressions:[],errors:{}},r=0,n=t.length;r<n;r++){var s=t[r],o=null,l=s.trim();if(l.length>0)if(l.match(/^#/))continue;else if(o=l.match(/^(.*)=(.*)$/))i.variables[o[1]]=o[2];else{var d=null;try{d=a._parseEntry("0 "+l),i.expressions.push(d.interval)}catch(e){i.errors[l]=e}}}return i},a.parseFile=function(t,i){e.r(22734).readFile(t,function(e,t){return e?void i(e):i(null,a.parseString(t.toString()))})},t.exports=a},21517,(e,t,i)=>{t.exports=e.x("http",()=>require("http"))},24836,(e,t,i)=>{t.exports=e.x("https",()=>require("https"))},6461,(e,t,i)=>{t.exports=e.x("zlib",()=>require("zlib"))},74510,(e,t,i)=>{"use strict";let r=e.r(92509);t.exports=class{constructor(e){this.options=e||{},this.cookies=[]}set(e,t){let i,a=r.parse(t||""),n=this.parse(e);return n.domain?(i=n.domain.replace(/^\./,""),(a.hostname.length<i.length||("."+a.hostname).substr(-i.length+1)!=="."+i)&&(n.domain=a.hostname)):n.domain=a.hostname,n.path||(n.path=this.getPath(a.pathname)),n.expires||(n.expires=new Date(Date.now()+1e3*(Number(this.options.sessionTimeout||1800)||1800))),this.add(n)}get(e){return this.list(e).map(e=>e.name+"="+e.value).join("; ")}list(e){let t,i,r=[];for(t=this.cookies.length-1;t>=0;t--){if(i=this.cookies[t],this.isExpired(i)){this.cookies.splice(t,t);continue}this.match(i,e)&&r.unshift(i)}return r}parse(e){let t={};return(e||"").toString().split(";").forEach(e=>{let i,r=e.split("="),a=r.shift().trim().toLowerCase(),n=r.join("=").trim();if(a)switch(a){case"expires":"Invalid Date"!==(n=new Date(n)).toString()&&(t.expires=n);break;case"path":t.path=n;break;case"domain":(i=n.toLowerCase()).length&&"."!==i.charAt(0)&&(i="."+i),t.domain=i;break;case"max-age":t.expires=new Date(Date.now()+1e3*(Number(n)||0));break;case"secure":t.secure=!0;break;case"httponly":t.httponly=!0;break;default:t.name||(t.name=a,t.value=n)}}),t}match(e,t){let i=r.parse(t||"");return(i.hostname===e.domain||"."===e.domain.charAt(0)&&("."+i.hostname).substr(-e.domain.length)===e.domain)&&this.getPath(i.pathname).substr(0,e.path.length)===e.path&&(!e.secure||"https:"===i.protocol)}add(e){let t,i;if(!e||!e.name)return!1;for(t=0,i=this.cookies.length;t<i;t++)if(this.compare(this.cookies[t],e)){if(this.isExpired(e))return this.cookies.splice(t,1),!1;return this.cookies[t]=e,!0}return this.isExpired(e)||this.cookies.push(e),!0}compare(e,t){return e.name===t.name&&e.path===t.path&&e.domain===t.domain&&e.secure===t.secure&&e.httponly==e.httponly}isExpired(e){return e.expires&&e.expires<new Date||!e.value}getPath(e){let t=(e||"/").split("/");return t.pop(),"/"!==(t=t.join("/").trim()).charAt(0)&&(t="/"+t),"/"!==t.substr(-1)&&(t+="/"),t}}},87361,(e,t,i)=>{t.exports={name:"nodemailer",version:"6.10.1",description:"Easy as cake e-mail sending from your Node.js applications",main:"lib/nodemailer.js",scripts:{test:"node --test --test-concurrency=1 test/**/*.test.js test/**/*-test.js","test:coverage":"c8 node --test --test-concurrency=1 test/**/*.test.js test/**/*-test.js",lint:"eslint .",update:"rm -rf node_modules/ package-lock.json && ncu -u && npm install"},repository:{type:"git",url:"https://github.com/nodemailer/nodemailer.git"},keywords:["Nodemailer"],author:"Andris Reinman",license:"MIT-0",bugs:{url:"https://github.com/nodemailer/nodemailer/issues"},homepage:"https://nodemailer.com/",devDependencies:{"@aws-sdk/client-ses":"3.731.1",bunyan:"1.8.15",c8:"10.1.3",eslint:"8.57.0","eslint-config-nodemailer":"1.2.0","eslint-config-prettier":"9.1.0",libbase64:"1.3.0",libmime:"5.3.6",libqp:"2.1.1","nodemailer-ntlm-auth":"1.0.4",proxy:"1.0.2","proxy-test-server":"1.0.0","smtp-server":"3.13.6"},engines:{node:">=6.0.0"}}},13970,(e,t,i)=>{"use strict";let r=e.r(21517),a=e.r(24836),n=e.r(92509),s=e.r(6461),o=e.r(88947).PassThrough,l=e.r(74510),d=e.r(87361),c=e.r(4446);t.exports=function(e,t){return function e(t,i){let u,p,h;(i=i||{}).fetchRes=i.fetchRes||new o,i.cookies=i.cookies||new l,i.redirects=i.redirects||0,i.maxRedirects=isNaN(i.maxRedirects)?5:i.maxRedirects,i.cookie&&([].concat(i.cookie||[]).forEach(e=>{i.cookies.set(e,t)}),i.cookie=!1);let m=i.fetchRes,f=n.parse(t),y=(i.method||"").toString().trim().toUpperCase()||"GET",b=!1,g="https:"===f.protocol?a:r,v={"accept-encoding":"gzip,deflate","user-agent":"nodemailer/"+d.version};if(Object.keys(i.headers||{}).forEach(e=>{v[e.toLowerCase().trim()]=i.headers[e]}),i.userAgent&&(v["user-agent"]=i.userAgent),f.auth&&(v.Authorization="Basic "+Buffer.from(f.auth).toString("base64")),(u=i.cookies.get(t))&&(v.cookie=u),i.body){if(!1!==i.contentType&&(v["Content-Type"]=i.contentType||"application/x-www-form-urlencoded"),"function"==typeof i.body.pipe)v["Transfer-Encoding"]="chunked",(p=i.body).on("error",e=>{b||(b=!0,e.type="FETCH",e.sourceUrl=t,m.emit("error",e))});else{if(i.body instanceof Buffer)p=i.body;else if("object"==typeof i.body)try{p=Buffer.from(Object.keys(i.body).map(e=>{let t=i.body[e].toString().trim();return encodeURIComponent(e)+"="+encodeURIComponent(t)}).join("&"))}catch(e){if(b)return;b=!0,e.type="FETCH",e.sourceUrl=t,m.emit("error",e);return}else p=Buffer.from(i.body.toString().trim());v["Content-Type"]=i.contentType||"application/x-www-form-urlencoded",v["Content-Length"]=p.length}y=(i.method||"").toString().trim().toUpperCase()||"POST"}let x={method:y,host:f.hostname,path:f.path,port:f.port?f.port:"https:"===f.protocol?443:80,headers:v,rejectUnauthorized:!1,agent:!1};i.tls&&Object.keys(i.tls).forEach(e=>{x[e]=i.tls[e]}),"https:"!==f.protocol||!f.hostname||f.hostname===x.host||c.isIP(f.hostname)||x.servername||(x.servername=f.hostname);try{h=g.request(x)}catch(e){return b=!0,setImmediate(()=>{e.type="FETCH",e.sourceUrl=t,m.emit("error",e)}),m}return i.timeout&&h.setTimeout(i.timeout,()=>{if(b)return;b=!0,h.abort();let e=Error("Request Timeout");e.type="FETCH",e.sourceUrl=t,m.emit("error",e)}),h.on("error",e=>{b||(b=!0,e.type="FETCH",e.sourceUrl=t,m.emit("error",e))}),h.on("response",r=>{let a;if(!b){switch(r.headers["content-encoding"]){case"gzip":case"deflate":a=s.createUnzip()}if(r.headers["set-cookie"]&&[].concat(r.headers["set-cookie"]||[]).forEach(e=>{i.cookies.set(e,t)}),[301,302,303,307,308].includes(r.statusCode)&&r.headers.location){if(i.redirects++,i.redirects>i.maxRedirects){b=!0;let e=Error("Maximum redirect count exceeded");e.type="FETCH",e.sourceUrl=t,m.emit("error",e),h.abort();return}return i.method="GET",i.body=!1,e(n.resolve(t,r.headers.location),i)}if(m.statusCode=r.statusCode,m.headers=r.headers,r.statusCode>=300&&!i.allowErrorResponse){b=!0;let e=Error("Invalid status code "+r.statusCode);e.type="FETCH",e.sourceUrl=t,m.emit("error",e),h.abort();return}r.on("error",e=>{b||(b=!0,e.type="FETCH",e.sourceUrl=t,m.emit("error",e),h.abort())}),a?(r.pipe(a).pipe(m),a.on("error",e=>{b||(b=!0,e.type="FETCH",e.sourceUrl=t,m.emit("error",e),h.abort())})):r.pipe(m)}}),setImmediate(()=>{if(p)try{if("function"==typeof p.pipe)return p.pipe(h);h.write(p)}catch(e){b=!0,e.type="FETCH",e.sourceUrl=t,m.emit("error",e);return}h.end()}),m}(e,t)},t.exports.Cookies=l},14173,(e,t,i)=>{"use strict";let r,a=e.r(92509),n=e.r(24361),s=e.r(22734),o=e.r(13970),l=e.r(79594),d=e.r(4446),c=e.r(46786);try{r=c.networkInterfaces()}catch(e){}t.exports.networkInterfaces=r;let u=(e,i)=>{let r=t.exports.networkInterfaces;return!r||Object.keys(r).map(e=>r[e]).reduce((e,t)=>e.concat(t),[]).filter(e=>!e.internal||i).filter(t=>t.family==="IPv"+e||t.family===e).length>0},p=(e,t,i,r)=>{if(!u(e,(i=i||{}).allowInternalNetworkInterfaces))return r(null,[]);(l.Resolver?new l.Resolver(i):l)["resolve"+e](t,(e,t)=>{if(e){switch(e.code){case l.NODATA:case l.NOTFOUND:case l.NOTIMP:case l.SERVFAIL:case l.CONNREFUSED:case l.REFUSED:case"EAI_AGAIN":return r(null,[])}return r(e)}return r(null,Array.isArray(t)?t:[].concat(t||[]))})},h=t.exports.dnsCache=new Map,m=(e,t)=>e?Object.assign({servername:e.servername,host:e.addresses&&e.addresses.length?1===e.addresses.length?e.addresses[0]:e.addresses[Math.floor(Math.random()*e.addresses.length)]:null},t||{}):Object.assign({},t||{});function f(e,t){let i=!1,r=[],a=0;e.on("error",e=>{i||(i=!0,t(e))}),e.on("readable",()=>{let t;for(;null!==(t=e.read());)r.push(t),a+=t.length}),e.on("end",()=>{let e;if(!i){i=!0;try{e=Buffer.concat(r,a)}catch(e){return t(e)}t(null,e)}})}t.exports.resolveHostname=(e,t)=>{let i;return(!(e=e||{}).host&&e.servername&&(e.host=e.servername),!e.host||d.isIP(e.host))?t(null,m({addresses:[e.host],servername:e.servername||!1},{cached:!1})):h.has(e.host)&&(!(i=h.get(e.host)).expires||i.expires>=Date.now())?t(null,m(i.value,{cached:!0})):void p(4,e.host,e,(r,a)=>{if(r)return i?t(null,m(i.value,{cached:!0,error:r})):t(r);if(a&&a.length){let i={addresses:a,servername:e.servername||e.host};return h.set(e.host,{value:i,expires:Date.now()+(e.dnsTtl||3e5)}),t(null,m(i,{cached:!1}))}p(6,e.host,e,(r,a)=>{if(r)return i?t(null,m(i.value,{cached:!0,error:r})):t(r);if(a&&a.length){let i={addresses:a,servername:e.servername||e.host};return h.set(e.host,{value:i,expires:Date.now()+(e.dnsTtl||3e5)}),t(null,m(i,{cached:!1}))}try{l.lookup(e.host,{all:!0},(r,a)=>{if(r)return i?t(null,m(i.value,{cached:!0,error:r})):t(r);let n=!!a&&a.filter(e=>u(e.family)).map(e=>e.address).shift();if(a&&a.length&&!n&&console.warn(`Failed to resolve IPv${a[0].family} addresses with current network`),!n&&i)return t(null,m(i.value,{cached:!0}));let s={addresses:n?[n]:[e.host],servername:e.servername||e.host};return h.set(e.host,{value:s,expires:Date.now()+(e.dnsTtl||3e5)}),t(null,m(s,{cached:!1}))})}catch(e){if(i)return t(null,m(i.value,{cached:!0,error:e}));return t(e)}})})},t.exports.parseConnectionUrl=e=>{e=e||"";let t={};return[a.parse(e,!0)].forEach(e=>{let i;switch(e.protocol){case"smtp:":t.secure=!1;break;case"smtps:":t.secure=!0;break;case"direct:":t.direct=!0}!isNaN(e.port)&&Number(e.port)&&(t.port=Number(e.port)),e.hostname&&(t.host=e.hostname),e.auth&&(i=e.auth.split(":"),t.auth||(t.auth={}),t.auth.user=i.shift(),t.auth.pass=i.join(":")),Object.keys(e.query||{}).forEach(i=>{let r=t,a=i,n=e.query[i];switch(!isNaN(n)&&(n=Number(n)),n){case"true":n=!0;break;case"false":n=!1}if(0===i.indexOf("tls."))a=i.substr(4),t.tls||(t.tls={}),r=t.tls;else if(i.indexOf(".")>=0)return;a in r||(r[a]=n)})}),t},t.exports._logFunc=(e,t,i,r,a,...n)=>{let s={};Object.keys(i||{}).forEach(e=>{"level"!==e&&(s[e]=i[e])}),Object.keys(r||{}).forEach(e=>{"level"!==e&&(s[e]=r[e])}),e[t](s,a,...n)},t.exports.getLogger=(e,i)=>{var r;let a,s,o,l,d={},c=["trace","debug","info","warn","error","fatal"];if(!(e=e||{}).logger)return c.forEach(e=>{d[e]=()=>!1}),d;let u=e.logger;return!0===e.logger&&(r=c,a=0,s=new Map,r.forEach(e=>{e.length>a&&(a=e.length)}),r.forEach(e=>{let t=e.toUpperCase();t.length<a&&(t+=" ".repeat(a-t.length)),s.set(e,t)}),o=(e,t,i,...r)=>{let a="";t&&("server"===t.tnx?a="S: ":"client"===t.tnx&&(a="C: "),t.sid&&(a="["+t.sid+"] "+a),t.cid&&(a="[#"+t.cid+"] "+a)),(i=n.format(i,...r)).split(/\r?\n/).forEach(t=>{console.log("[%s] %s %s",new Date().toISOString().substr(0,19).replace(/T/," "),s.get(e),a+t)})},l={},r.forEach(e=>{l[e]=o.bind(null,e)}),u=l),c.forEach(e=>{d[e]=(r,a,...n)=>{t.exports._logFunc(u,e,i,r,a,...n)}}),d},t.exports.callbackPromise=(e,t)=>function(){let i=Array.from(arguments),r=i.shift();r?t(r):e(...i)},t.exports.parseDataURI=e=>{let t,i=e.indexOf(",");if(!i)return e;let r=e.substring(i+1),a=e.substring(5,i).split(";"),n=a.length>1&&a[a.length-1];n&&0>n.indexOf("=")&&(t=n.toLowerCase(),a.pop());let s=a.shift()||"application/octet-stream",o={};for(let e of a){let t=e.indexOf("=");if(t>=0){let i=e.substring(0,t),r=e.substring(t+1);o[i]=r}}switch(t){case"base64":r=Buffer.from(r,"base64");break;case"utf8":r=Buffer.from(r);break;default:try{r=Buffer.from(decodeURIComponent(r))}catch(e){r=Buffer.from(r)}r=Buffer.from(r)}return{data:r,encoding:t,contentType:s,params:o}},t.exports.resolveContent=(e,i,r)=>{let a;r||(a=new Promise((e,i)=>{r=t.exports.callbackPromise(e,i)}));let n=e&&e[i]&&e[i].content||e[i],l=("object"==typeof e[i]&&e[i].encoding||"utf8").toString().toLowerCase().replace(/[-_\s]/g,"");if(!n)return r(null,n);if("object"==typeof n){if("function"==typeof n.pipe)return f(n,(t,a)=>{if(t)return r(t);e[i].content?e[i].content=a:e[i]=a,r(null,a)});else if(/^https?:\/\//i.test(n.path||n.href))return f(o(n.path||n.href),r);else if(/^data:/i.test(n.path||n.href)){let e=t.exports.parseDataURI(n.path||n.href);return e&&e.data?r(null,e.data):r(null,Buffer.from(0))}else if(n.path)return f(s.createReadStream(n.path),r)}return"string"!=typeof e[i].content||["utf8","usascii","ascii"].includes(l)||(n=Buffer.from(e[i].content,l)),setImmediate(()=>r(null,n)),a},t.exports.assign=function(){let e=Array.from(arguments),t=e.shift()||{};return e.forEach(e=>{Object.keys(e||{}).forEach(i=>{["tls","auth"].includes(i)&&e[i]&&"object"==typeof e[i]?(t[i]||(t[i]={}),Object.keys(e[i]).forEach(r=>{t[i][r]=e[i][r]})):t[i]=e[i]})}),t},t.exports.encodeXText=e=>{if(!/[^\x21-\x2A\x2C-\x3C\x3E-\x7E]/.test(e))return e;let t=Buffer.from(e),i="";for(let e=0,r=t.length;e<r;e++){let r=t[e];r<33||r>126||43===r||61===r?i+="+"+(r<16?"0":"")+r.toString(16).toUpperCase():i+=String.fromCharCode(r)}return i}},20140,(e,t,i)=>{"use strict";let r=e.r(14747),a="application/octet-stream",n=new Map([["application/acad","dwg"],["application/applixware","aw"],["application/arj","arj"],["application/atom+xml","xml"],["application/atomcat+xml","atomcat"],["application/atomsvc+xml","atomsvc"],["application/base64",["mm","mme"]],["application/binhex","hqx"],["application/binhex4","hqx"],["application/book",["book","boo"]],["application/ccxml+xml,","ccxml"],["application/cdf","cdf"],["application/cdmi-capability","cdmia"],["application/cdmi-container","cdmic"],["application/cdmi-domain","cdmid"],["application/cdmi-object","cdmio"],["application/cdmi-queue","cdmiq"],["application/clariscad","ccad"],["application/commonground","dp"],["application/cu-seeme","cu"],["application/davmount+xml","davmount"],["application/drafting","drw"],["application/dsptype","tsp"],["application/dssc+der","dssc"],["application/dssc+xml","xdssc"],["application/dxf","dxf"],["application/ecmascript",["js","es"]],["application/emma+xml","emma"],["application/envoy","evy"],["application/epub+zip","epub"],["application/excel",["xls","xl","xla","xlb","xlc","xld","xlk","xll","xlm","xlt","xlv","xlw"]],["application/exi","exi"],["application/font-tdpfr","pfr"],["application/fractals","fif"],["application/freeloader","frl"],["application/futuresplash","spl"],["application/geo+json","geojson"],["application/gnutar","tgz"],["application/groupwise","vew"],["application/hlp","hlp"],["application/hta","hta"],["application/hyperstudio","stk"],["application/i-deas","unv"],["application/iges",["iges","igs"]],["application/inf","inf"],["application/internet-property-stream","acx"],["application/ipfix","ipfix"],["application/java","class"],["application/java-archive","jar"],["application/java-byte-code","class"],["application/java-serialized-object","ser"],["application/java-vm","class"],["application/javascript","js"],["application/json","json"],["application/lha","lha"],["application/lzx","lzx"],["application/mac-binary","bin"],["application/mac-binhex","hqx"],["application/mac-binhex40","hqx"],["application/mac-compactpro","cpt"],["application/macbinary","bin"],["application/mads+xml","mads"],["application/marc","mrc"],["application/marcxml+xml","mrcx"],["application/mathematica","ma"],["application/mathml+xml","mathml"],["application/mbedlet","mbd"],["application/mbox","mbox"],["application/mcad","mcd"],["application/mediaservercontrol+xml","mscml"],["application/metalink4+xml","meta4"],["application/mets+xml","mets"],["application/mime","aps"],["application/mods+xml","mods"],["application/mp21","m21"],["application/mp4","mp4"],["application/mspowerpoint",["ppt","pot","pps","ppz"]],["application/msword",["doc","dot","w6w","wiz","word"]],["application/mswrite","wri"],["application/mxf","mxf"],["application/netmc","mcp"],["application/octet-stream",["*"]],["application/oda","oda"],["application/oebps-package+xml","opf"],["application/ogg","ogx"],["application/olescript","axs"],["application/onenote","onetoc"],["application/patch-ops-error+xml","xer"],["application/pdf","pdf"],["application/pgp-encrypted","asc"],["application/pgp-signature","pgp"],["application/pics-rules","prf"],["application/pkcs-12","p12"],["application/pkcs-crl","crl"],["application/pkcs10","p10"],["application/pkcs7-mime",["p7c","p7m"]],["application/pkcs7-signature","p7s"],["application/pkcs8","p8"],["application/pkix-attr-cert","ac"],["application/pkix-cert",["cer","crt"]],["application/pkix-crl","crl"],["application/pkix-pkipath","pkipath"],["application/pkixcmp","pki"],["application/plain","text"],["application/pls+xml","pls"],["application/postscript",["ps","ai","eps"]],["application/powerpoint","ppt"],["application/pro_eng",["part","prt"]],["application/prs.cww","cww"],["application/pskc+xml","pskcxml"],["application/rdf+xml","rdf"],["application/reginfo+xml","rif"],["application/relax-ng-compact-syntax","rnc"],["application/resource-lists+xml","rl"],["application/resource-lists-diff+xml","rld"],["application/ringing-tones","rng"],["application/rls-services+xml","rs"],["application/rsd+xml","rsd"],["application/rss+xml","xml"],["application/rtf",["rtf","rtx"]],["application/sbml+xml","sbml"],["application/scvp-cv-request","scq"],["application/scvp-cv-response","scs"],["application/scvp-vp-request","spq"],["application/scvp-vp-response","spp"],["application/sdp","sdp"],["application/sea","sea"],["application/set","set"],["application/set-payment-initiation","setpay"],["application/set-registration-initiation","setreg"],["application/shf+xml","shf"],["application/sla","stl"],["application/smil",["smi","smil"]],["application/smil+xml","smi"],["application/solids","sol"],["application/sounder","sdr"],["application/sparql-query","rq"],["application/sparql-results+xml","srx"],["application/srgs","gram"],["application/srgs+xml","grxml"],["application/sru+xml","sru"],["application/ssml+xml","ssml"],["application/step",["step","stp"]],["application/streamingmedia","ssm"],["application/tei+xml","tei"],["application/thraud+xml","tfi"],["application/timestamped-data","tsd"],["application/toolbook","tbk"],["application/vda","vda"],["application/vnd.3gpp.pic-bw-large","plb"],["application/vnd.3gpp.pic-bw-small","psb"],["application/vnd.3gpp.pic-bw-var","pvb"],["application/vnd.3gpp2.tcap","tcap"],["application/vnd.3m.post-it-notes","pwn"],["application/vnd.accpac.simply.aso","aso"],["application/vnd.accpac.simply.imp","imp"],["application/vnd.acucobol","acu"],["application/vnd.acucorp","atc"],["application/vnd.adobe.air-application-installer-package+zip","air"],["application/vnd.adobe.fxp","fxp"],["application/vnd.adobe.xdp+xml","xdp"],["application/vnd.adobe.xfdf","xfdf"],["application/vnd.ahead.space","ahead"],["application/vnd.airzip.filesecure.azf","azf"],["application/vnd.airzip.filesecure.azs","azs"],["application/vnd.amazon.ebook","azw"],["application/vnd.americandynamics.acc","acc"],["application/vnd.amiga.ami","ami"],["application/vnd.android.package-archive","apk"],["application/vnd.anser-web-certificate-issue-initiation","cii"],["application/vnd.anser-web-funds-transfer-initiation","fti"],["application/vnd.antix.game-component","atx"],["application/vnd.apple.installer+xml","mpkg"],["application/vnd.apple.mpegurl","m3u8"],["application/vnd.aristanetworks.swi","swi"],["application/vnd.audiograph","aep"],["application/vnd.blueice.multipass","mpm"],["application/vnd.bmi","bmi"],["application/vnd.businessobjects","rep"],["application/vnd.chemdraw+xml","cdxml"],["application/vnd.chipnuts.karaoke-mmd","mmd"],["application/vnd.cinderella","cdy"],["application/vnd.claymore","cla"],["application/vnd.cloanto.rp9","rp9"],["application/vnd.clonk.c4group","c4g"],["application/vnd.cluetrust.cartomobile-config","c11amc"],["application/vnd.cluetrust.cartomobile-config-pkg","c11amz"],["application/vnd.commonspace","csp"],["application/vnd.contact.cmsg","cdbcmsg"],["application/vnd.cosmocaller","cmc"],["application/vnd.crick.clicker","clkx"],["application/vnd.crick.clicker.keyboard","clkk"],["application/vnd.crick.clicker.palette","clkp"],["application/vnd.crick.clicker.template","clkt"],["application/vnd.crick.clicker.wordbank","clkw"],["application/vnd.criticaltools.wbs+xml","wbs"],["application/vnd.ctc-posml","pml"],["application/vnd.cups-ppd","ppd"],["application/vnd.curl.car","car"],["application/vnd.curl.pcurl","pcurl"],["application/vnd.data-vision.rdz","rdz"],["application/vnd.denovo.fcselayout-link","fe_launch"],["application/vnd.dna","dna"],["application/vnd.dolby.mlp","mlp"],["application/vnd.dpgraph","dpg"],["application/vnd.dreamfactory","dfac"],["application/vnd.dvb.ait","ait"],["application/vnd.dvb.service","svc"],["application/vnd.dynageo","geo"],["application/vnd.ecowin.chart","mag"],["application/vnd.enliven","nml"],["application/vnd.epson.esf","esf"],["application/vnd.epson.msf","msf"],["application/vnd.epson.quickanime","qam"],["application/vnd.epson.salt","slt"],["application/vnd.epson.ssf","ssf"],["application/vnd.eszigno3+xml","es3"],["application/vnd.ezpix-album","ez2"],["application/vnd.ezpix-package","ez3"],["application/vnd.fdf","fdf"],["application/vnd.fdsn.seed","seed"],["application/vnd.flographit","gph"],["application/vnd.fluxtime.clip","ftc"],["application/vnd.framemaker","fm"],["application/vnd.frogans.fnc","fnc"],["application/vnd.frogans.ltf","ltf"],["application/vnd.fsc.weblaunch","fsc"],["application/vnd.fujitsu.oasys","oas"],["application/vnd.fujitsu.oasys2","oa2"],["application/vnd.fujitsu.oasys3","oa3"],["application/vnd.fujitsu.oasysgp","fg5"],["application/vnd.fujitsu.oasysprs","bh2"],["application/vnd.fujixerox.ddd","ddd"],["application/vnd.fujixerox.docuworks","xdw"],["application/vnd.fujixerox.docuworks.binder","xbd"],["application/vnd.fuzzysheet","fzs"],["application/vnd.genomatix.tuxedo","txd"],["application/vnd.geogebra.file","ggb"],["application/vnd.geogebra.tool","ggt"],["application/vnd.geometry-explorer","gex"],["application/vnd.geonext","gxt"],["application/vnd.geoplan","g2w"],["application/vnd.geospace","g3w"],["application/vnd.gmx","gmx"],["application/vnd.google-earth.kml+xml","kml"],["application/vnd.google-earth.kmz","kmz"],["application/vnd.grafeq","gqf"],["application/vnd.groove-account","gac"],["application/vnd.groove-help","ghf"],["application/vnd.groove-identity-message","gim"],["application/vnd.groove-injector","grv"],["application/vnd.groove-tool-message","gtm"],["application/vnd.groove-tool-template","tpl"],["application/vnd.groove-vcard","vcg"],["application/vnd.hal+xml","hal"],["application/vnd.handheld-entertainment+xml","zmm"],["application/vnd.hbci","hbci"],["application/vnd.hhe.lesson-player","les"],["application/vnd.hp-hpgl",["hgl","hpg","hpgl"]],["application/vnd.hp-hpid","hpid"],["application/vnd.hp-hps","hps"],["application/vnd.hp-jlyt","jlt"],["application/vnd.hp-pcl","pcl"],["application/vnd.hp-pclxl","pclxl"],["application/vnd.hydrostatix.sof-data","sfd-hdstx"],["application/vnd.hzn-3d-crossword","x3d"],["application/vnd.ibm.minipay","mpy"],["application/vnd.ibm.modcap","afp"],["application/vnd.ibm.rights-management","irm"],["application/vnd.ibm.secure-container","sc"],["application/vnd.iccprofile","icc"],["application/vnd.igloader","igl"],["application/vnd.immervision-ivp","ivp"],["application/vnd.immervision-ivu","ivu"],["application/vnd.insors.igm","igm"],["application/vnd.intercon.formnet","xpw"],["application/vnd.intergeo","i2g"],["application/vnd.intu.qbo","qbo"],["application/vnd.intu.qfx","qfx"],["application/vnd.ipunplugged.rcprofile","rcprofile"],["application/vnd.irepository.package+xml","irp"],["application/vnd.is-xpr","xpr"],["application/vnd.isac.fcs","fcs"],["application/vnd.jam","jam"],["application/vnd.jcp.javame.midlet-rms","rms"],["application/vnd.jisp","jisp"],["application/vnd.joost.joda-archive","joda"],["application/vnd.kahootz","ktz"],["application/vnd.kde.karbon","karbon"],["application/vnd.kde.kchart","chrt"],["application/vnd.kde.kformula","kfo"],["application/vnd.kde.kivio","flw"],["application/vnd.kde.kontour","kon"],["application/vnd.kde.kpresenter","kpr"],["application/vnd.kde.kspread","ksp"],["application/vnd.kde.kword","kwd"],["application/vnd.kenameaapp","htke"],["application/vnd.kidspiration","kia"],["application/vnd.kinar","kne"],["application/vnd.koan","skp"],["application/vnd.kodak-descriptor","sse"],["application/vnd.las.las+xml","lasxml"],["application/vnd.llamagraphics.life-balance.desktop","lbd"],["application/vnd.llamagraphics.life-balance.exchange+xml","lbe"],["application/vnd.lotus-1-2-3","123"],["application/vnd.lotus-approach","apr"],["application/vnd.lotus-freelance","pre"],["application/vnd.lotus-notes","nsf"],["application/vnd.lotus-organizer","org"],["application/vnd.lotus-screencam","scm"],["application/vnd.lotus-wordpro","lwp"],["application/vnd.macports.portpkg","portpkg"],["application/vnd.mcd","mcd"],["application/vnd.medcalcdata","mc1"],["application/vnd.mediastation.cdkey","cdkey"],["application/vnd.mfer","mwf"],["application/vnd.mfmp","mfm"],["application/vnd.micrografx.flo","flo"],["application/vnd.micrografx.igx","igx"],["application/vnd.mif","mif"],["application/vnd.mobius.daf","daf"],["application/vnd.mobius.dis","dis"],["application/vnd.mobius.mbk","mbk"],["application/vnd.mobius.mqy","mqy"],["application/vnd.mobius.msl","msl"],["application/vnd.mobius.plc","plc"],["application/vnd.mobius.txf","txf"],["application/vnd.mophun.application","mpn"],["application/vnd.mophun.certificate","mpc"],["application/vnd.mozilla.xul+xml","xul"],["application/vnd.ms-artgalry","cil"],["application/vnd.ms-cab-compressed","cab"],["application/vnd.ms-excel",["xls","xla","xlc","xlm","xlt","xlw","xlb","xll"]],["application/vnd.ms-excel.addin.macroenabled.12","xlam"],["application/vnd.ms-excel.sheet.binary.macroenabled.12","xlsb"],["application/vnd.ms-excel.sheet.macroenabled.12","xlsm"],["application/vnd.ms-excel.template.macroenabled.12","xltm"],["application/vnd.ms-fontobject","eot"],["application/vnd.ms-htmlhelp","chm"],["application/vnd.ms-ims","ims"],["application/vnd.ms-lrm","lrm"],["application/vnd.ms-officetheme","thmx"],["application/vnd.ms-outlook","msg"],["application/vnd.ms-pki.certstore","sst"],["application/vnd.ms-pki.pko","pko"],["application/vnd.ms-pki.seccat","cat"],["application/vnd.ms-pki.stl","stl"],["application/vnd.ms-pkicertstore","sst"],["application/vnd.ms-pkiseccat","cat"],["application/vnd.ms-pkistl","stl"],["application/vnd.ms-powerpoint",["ppt","pot","pps","ppa","pwz"]],["application/vnd.ms-powerpoint.addin.macroenabled.12","ppam"],["application/vnd.ms-powerpoint.presentation.macroenabled.12","pptm"],["application/vnd.ms-powerpoint.slide.macroenabled.12","sldm"],["application/vnd.ms-powerpoint.slideshow.macroenabled.12","ppsm"],["application/vnd.ms-powerpoint.template.macroenabled.12","potm"],["application/vnd.ms-project","mpp"],["application/vnd.ms-word.document.macroenabled.12","docm"],["application/vnd.ms-word.template.macroenabled.12","dotm"],["application/vnd.ms-works",["wks","wcm","wdb","wps"]],["application/vnd.ms-wpl","wpl"],["application/vnd.ms-xpsdocument","xps"],["application/vnd.mseq","mseq"],["application/vnd.musician","mus"],["application/vnd.muvee.style","msty"],["application/vnd.neurolanguage.nlu","nlu"],["application/vnd.noblenet-directory","nnd"],["application/vnd.noblenet-sealer","nns"],["application/vnd.noblenet-web","nnw"],["application/vnd.nokia.configuration-message","ncm"],["application/vnd.nokia.n-gage.data","ngdat"],["application/vnd.nokia.n-gage.symbian.install","n-gage"],["application/vnd.nokia.radio-preset","rpst"],["application/vnd.nokia.radio-presets","rpss"],["application/vnd.nokia.ringing-tone","rng"],["application/vnd.novadigm.edm","edm"],["application/vnd.novadigm.edx","edx"],["application/vnd.novadigm.ext","ext"],["application/vnd.oasis.opendocument.chart","odc"],["application/vnd.oasis.opendocument.chart-template","otc"],["application/vnd.oasis.opendocument.database","odb"],["application/vnd.oasis.opendocument.formula","odf"],["application/vnd.oasis.opendocument.formula-template","odft"],["application/vnd.oasis.opendocument.graphics","odg"],["application/vnd.oasis.opendocument.graphics-template","otg"],["application/vnd.oasis.opendocument.image","odi"],["application/vnd.oasis.opendocument.image-template","oti"],["application/vnd.oasis.opendocument.presentation","odp"],["application/vnd.oasis.opendocument.presentation-template","otp"],["application/vnd.oasis.opendocument.spreadsheet","ods"],["application/vnd.oasis.opendocument.spreadsheet-template","ots"],["application/vnd.oasis.opendocument.text","odt"],["application/vnd.oasis.opendocument.text-master","odm"],["application/vnd.oasis.opendocument.text-template","ott"],["application/vnd.oasis.opendocument.text-web","oth"],["application/vnd.olpc-sugar","xo"],["application/vnd.oma.dd2+xml","dd2"],["application/vnd.openofficeorg.extension","oxt"],["application/vnd.openxmlformats-officedocument.presentationml.presentation","pptx"],["application/vnd.openxmlformats-officedocument.presentationml.slide","sldx"],["application/vnd.openxmlformats-officedocument.presentationml.slideshow","ppsx"],["application/vnd.openxmlformats-officedocument.presentationml.template","potx"],["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","xlsx"],["application/vnd.openxmlformats-officedocument.spreadsheetml.template","xltx"],["application/vnd.openxmlformats-officedocument.wordprocessingml.document","docx"],["application/vnd.openxmlformats-officedocument.wordprocessingml.template","dotx"],["application/vnd.osgeo.mapguide.package","mgp"],["application/vnd.osgi.dp","dp"],["application/vnd.palm","pdb"],["application/vnd.pawaafile","paw"],["application/vnd.pg.format","str"],["application/vnd.pg.osasli","ei6"],["application/vnd.picsel","efif"],["application/vnd.pmi.widget","wg"],["application/vnd.pocketlearn","plf"],["application/vnd.powerbuilder6","pbd"],["application/vnd.previewsystems.box","box"],["application/vnd.proteus.magazine","mgz"],["application/vnd.publishare-delta-tree","qps"],["application/vnd.pvi.ptid1","ptid"],["application/vnd.quark.quarkxpress","qxd"],["application/vnd.realvnc.bed","bed"],["application/vnd.recordare.musicxml","mxl"],["application/vnd.recordare.musicxml+xml","musicxml"],["application/vnd.rig.cryptonote","cryptonote"],["application/vnd.rim.cod","cod"],["application/vnd.rn-realmedia","rm"],["application/vnd.rn-realplayer","rnx"],["application/vnd.route66.link66+xml","link66"],["application/vnd.sailingtracker.track","st"],["application/vnd.seemail","see"],["application/vnd.sema","sema"],["application/vnd.semd","semd"],["application/vnd.semf","semf"],["application/vnd.shana.informed.formdata","ifm"],["application/vnd.shana.informed.formtemplate","itp"],["application/vnd.shana.informed.interchange","iif"],["application/vnd.shana.informed.package","ipk"],["application/vnd.simtech-mindmapper","twd"],["application/vnd.smaf","mmf"],["application/vnd.smart.teacher","teacher"],["application/vnd.solent.sdkm+xml","sdkm"],["application/vnd.spotfire.dxp","dxp"],["application/vnd.spotfire.sfs","sfs"],["application/vnd.stardivision.calc","sdc"],["application/vnd.stardivision.draw","sda"],["application/vnd.stardivision.impress","sdd"],["application/vnd.stardivision.math","smf"],["application/vnd.stardivision.writer","sdw"],["application/vnd.stardivision.writer-global","sgl"],["application/vnd.stepmania.stepchart","sm"],["application/vnd.sun.xml.calc","sxc"],["application/vnd.sun.xml.calc.template","stc"],["application/vnd.sun.xml.draw","sxd"],["application/vnd.sun.xml.draw.template","std"],["application/vnd.sun.xml.impress","sxi"],["application/vnd.sun.xml.impress.template","sti"],["application/vnd.sun.xml.math","sxm"],["application/vnd.sun.xml.writer","sxw"],["application/vnd.sun.xml.writer.global","sxg"],["application/vnd.sun.xml.writer.template","stw"],["application/vnd.sus-calendar","sus"],["application/vnd.svd","svd"],["application/vnd.symbian.install","sis"],["application/vnd.syncml+xml","xsm"],["application/vnd.syncml.dm+wbxml","bdm"],["application/vnd.syncml.dm+xml","xdm"],["application/vnd.tao.intent-module-archive","tao"],["application/vnd.tmobile-livetv","tmo"],["application/vnd.trid.tpt","tpt"],["application/vnd.triscape.mxs","mxs"],["application/vnd.trueapp","tra"],["application/vnd.ufdl","ufd"],["application/vnd.uiq.theme","utz"],["application/vnd.umajin","umj"],["application/vnd.unity","unityweb"],["application/vnd.uoml+xml","uoml"],["application/vnd.vcx","vcx"],["application/vnd.visio","vsd"],["application/vnd.visionary","vis"],["application/vnd.vsf","vsf"],["application/vnd.wap.wbxml","wbxml"],["application/vnd.wap.wmlc","wmlc"],["application/vnd.wap.wmlscriptc","wmlsc"],["application/vnd.webturbo","wtb"],["application/vnd.wolfram.player","nbp"],["application/vnd.wordperfect","wpd"],["application/vnd.wqd","wqd"],["application/vnd.wt.stf","stf"],["application/vnd.xara",["web","xar"]],["application/vnd.xfdl","xfdl"],["application/vnd.yamaha.hv-dic","hvd"],["application/vnd.yamaha.hv-script","hvs"],["application/vnd.yamaha.hv-voice","hvp"],["application/vnd.yamaha.openscoreformat","osf"],["application/vnd.yamaha.openscoreformat.osfpvg+xml","osfpvg"],["application/vnd.yamaha.smaf-audio","saf"],["application/vnd.yamaha.smaf-phrase","spf"],["application/vnd.yellowriver-custom-menu","cmp"],["application/vnd.zul","zir"],["application/vnd.zzazz.deck+xml","zaz"],["application/vocaltec-media-desc","vmd"],["application/vocaltec-media-file","vmf"],["application/voicexml+xml","vxml"],["application/widget","wgt"],["application/winhlp","hlp"],["application/wordperfect",["wp","wp5","wp6","wpd"]],["application/wordperfect6.0",["w60","wp5"]],["application/wordperfect6.1","w61"],["application/wsdl+xml","wsdl"],["application/wspolicy+xml","wspolicy"],["application/x-123","wk1"],["application/x-7z-compressed","7z"],["application/x-abiword","abw"],["application/x-ace-compressed","ace"],["application/x-aim","aim"],["application/x-authorware-bin","aab"],["application/x-authorware-map","aam"],["application/x-authorware-seg","aas"],["application/x-bcpio","bcpio"],["application/x-binary","bin"],["application/x-binhex40","hqx"],["application/x-bittorrent","torrent"],["application/x-bsh",["bsh","sh","shar"]],["application/x-bytecode.elisp","elc"],["application/x-bytecode.python","pyc"],["application/x-bzip","bz"],["application/x-bzip2",["boz","bz2"]],["application/x-cdf","cdf"],["application/x-cdlink","vcd"],["application/x-chat",["cha","chat"]],["application/x-chess-pgn","pgn"],["application/x-cmu-raster","ras"],["application/x-cocoa","cco"],["application/x-compactpro","cpt"],["application/x-compress","z"],["application/x-compressed",["tgz","gz","z","zip"]],["application/x-conference","nsc"],["application/x-cpio","cpio"],["application/x-cpt","cpt"],["application/x-csh","csh"],["application/x-debian-package","deb"],["application/x-deepv","deepv"],["application/x-director",["dir","dcr","dxr"]],["application/x-doom","wad"],["application/x-dtbncx+xml","ncx"],["application/x-dtbook+xml","dtb"],["application/x-dtbresource+xml","res"],["application/x-dvi","dvi"],["application/x-elc","elc"],["application/x-envoy",["env","evy"]],["application/x-esrehber","es"],["application/x-excel",["xls","xla","xlb","xlc","xld","xlk","xll","xlm","xlt","xlv","xlw"]],["application/x-font-bdf","bdf"],["application/x-font-ghostscript","gsf"],["application/x-font-linux-psf","psf"],["application/x-font-otf","otf"],["application/x-font-pcf","pcf"],["application/x-font-snf","snf"],["application/x-font-ttf","ttf"],["application/x-font-type1","pfa"],["application/x-font-woff","woff"],["application/x-frame","mif"],["application/x-freelance","pre"],["application/x-futuresplash","spl"],["application/x-gnumeric","gnumeric"],["application/x-gsp","gsp"],["application/x-gss","gss"],["application/x-gtar","gtar"],["application/x-gzip",["gz","gzip"]],["application/x-hdf","hdf"],["application/x-helpfile",["help","hlp"]],["application/x-httpd-imap","imap"],["application/x-ima","ima"],["application/x-internet-signup",["ins","isp"]],["application/x-internett-signup","ins"],["application/x-inventor","iv"],["application/x-ip2","ip"],["application/x-iphone","iii"],["application/x-java-class","class"],["application/x-java-commerce","jcm"],["application/x-java-jnlp-file","jnlp"],["application/x-javascript","js"],["application/x-koan",["skd","skm","skp","skt"]],["application/x-ksh","ksh"],["application/x-latex",["latex","ltx"]],["application/x-lha","lha"],["application/x-lisp","lsp"],["application/x-livescreen","ivy"],["application/x-lotus","wq1"],["application/x-lotusscreencam","scm"],["application/x-lzh","lzh"],["application/x-lzx","lzx"],["application/x-mac-binhex40","hqx"],["application/x-macbinary","bin"],["application/x-magic-cap-package-1.0","mc$"],["application/x-mathcad","mcd"],["application/x-meme","mm"],["application/x-midi",["mid","midi"]],["application/x-mif","mif"],["application/x-mix-transfer","nix"],["application/x-mobipocket-ebook","prc"],["application/x-mplayer2","asx"],["application/x-ms-application","application"],["application/x-ms-wmd","wmd"],["application/x-ms-wmz","wmz"],["application/x-ms-xbap","xbap"],["application/x-msaccess","mdb"],["application/x-msbinder","obd"],["application/x-mscardfile","crd"],["application/x-msclip","clp"],["application/x-msdownload",["exe","dll"]],["application/x-msexcel",["xls","xla","xlw"]],["application/x-msmediaview",["mvb","m13","m14"]],["application/x-msmetafile","wmf"],["application/x-msmoney","mny"],["application/x-mspowerpoint","ppt"],["application/x-mspublisher","pub"],["application/x-msschedule","scd"],["application/x-msterminal","trm"],["application/x-mswrite","wri"],["application/x-navi-animation","ani"],["application/x-navidoc","nvd"],["application/x-navimap","map"],["application/x-navistyle","stl"],["application/x-netcdf",["cdf","nc"]],["application/x-newton-compatible-pkg","pkg"],["application/x-nokia-9000-communicator-add-on-software","aos"],["application/x-omc","omc"],["application/x-omcdatamaker","omcd"],["application/x-omcregerator","omcr"],["application/x-pagemaker",["pm4","pm5"]],["application/x-pcl","pcl"],["application/x-perfmon",["pma","pmc","pml","pmr","pmw"]],["application/x-pixclscript","plx"],["application/x-pkcs10","p10"],["application/x-pkcs12",["p12","pfx"]],["application/x-pkcs7-certificates",["p7b","spc"]],["application/x-pkcs7-certreqresp","p7r"],["application/x-pkcs7-mime",["p7m","p7c"]],["application/x-pkcs7-signature",["p7s","p7a"]],["application/x-pointplus","css"],["application/x-portable-anymap","pnm"],["application/x-project",["mpc","mpt","mpv","mpx"]],["application/x-qpro","wb1"],["application/x-rar-compressed","rar"],["application/x-rtf","rtf"],["application/x-sdp","sdp"],["application/x-sea","sea"],["application/x-seelogo","sl"],["application/x-sh","sh"],["application/x-shar",["shar","sh"]],["application/x-shockwave-flash","swf"],["application/x-silverlight-app","xap"],["application/x-sit","sit"],["application/x-sprite",["spr","sprite"]],["application/x-stuffit","sit"],["application/x-stuffitx","sitx"],["application/x-sv4cpio","sv4cpio"],["application/x-sv4crc","sv4crc"],["application/x-tar","tar"],["application/x-tbook",["sbk","tbk"]],["application/x-tcl","tcl"],["application/x-tex","tex"],["application/x-tex-tfm","tfm"],["application/x-texinfo",["texi","texinfo"]],["application/x-troff",["roff","t","tr"]],["application/x-troff-man","man"],["application/x-troff-me","me"],["application/x-troff-ms","ms"],["application/x-troff-msvideo","avi"],["application/x-ustar","ustar"],["application/x-visio",["vsd","vst","vsw"]],["application/x-vnd.audioexplosion.mzz","mzz"],["application/x-vnd.ls-xpix","xpix"],["application/x-vrml","vrml"],["application/x-wais-source",["src","wsrc"]],["application/x-winhelp","hlp"],["application/x-wintalk","wtk"],["application/x-world",["wrl","svr"]],["application/x-wpwin","wpd"],["application/x-wri","wri"],["application/x-x509-ca-cert",["cer","crt","der"]],["application/x-x509-user-cert","crt"],["application/x-xfig","fig"],["application/x-xpinstall","xpi"],["application/x-zip-compressed","zip"],["application/xcap-diff+xml","xdf"],["application/xenc+xml","xenc"],["application/xhtml+xml","xhtml"],["application/xml","xml"],["application/xml-dtd","dtd"],["application/xop+xml","xop"],["application/xslt+xml","xslt"],["application/xspf+xml","xspf"],["application/xv+xml","mxml"],["application/yang","yang"],["application/yin+xml","yin"],["application/ynd.ms-pkipko","pko"],["application/zip","zip"],["audio/adpcm","adp"],["audio/aiff",["aiff","aif","aifc"]],["audio/basic",["snd","au"]],["audio/it","it"],["audio/make",["funk","my","pfunk"]],["audio/make.my.funk","pfunk"],["audio/mid",["mid","rmi"]],["audio/midi",["midi","kar","mid"]],["audio/mod","mod"],["audio/mp4","mp4a"],["audio/mpeg",["mpga","mp3","m2a","mp2","mpa","mpg"]],["audio/mpeg3","mp3"],["audio/nspaudio",["la","lma"]],["audio/ogg","oga"],["audio/s3m","s3m"],["audio/tsp-audio","tsi"],["audio/tsplayer","tsp"],["audio/vnd.dece.audio","uva"],["audio/vnd.digital-winds","eol"],["audio/vnd.dra","dra"],["audio/vnd.dts","dts"],["audio/vnd.dts.hd","dtshd"],["audio/vnd.lucent.voice","lvp"],["audio/vnd.ms-playready.media.pya","pya"],["audio/vnd.nuera.ecelp4800","ecelp4800"],["audio/vnd.nuera.ecelp7470","ecelp7470"],["audio/vnd.nuera.ecelp9600","ecelp9600"],["audio/vnd.qcelp","qcp"],["audio/vnd.rip","rip"],["audio/voc","voc"],["audio/voxware","vox"],["audio/wav","wav"],["audio/webm","weba"],["audio/x-aac","aac"],["audio/x-adpcm","snd"],["audio/x-aiff",["aiff","aif","aifc"]],["audio/x-au","au"],["audio/x-gsm",["gsd","gsm"]],["audio/x-jam","jam"],["audio/x-liveaudio","lam"],["audio/x-mid",["mid","midi"]],["audio/x-midi",["midi","mid"]],["audio/x-mod","mod"],["audio/x-mpeg","mp2"],["audio/x-mpeg-3","mp3"],["audio/x-mpegurl","m3u"],["audio/x-mpequrl","m3u"],["audio/x-ms-wax","wax"],["audio/x-ms-wma","wma"],["audio/x-nspaudio",["la","lma"]],["audio/x-pn-realaudio",["ra","ram","rm","rmm","rmp"]],["audio/x-pn-realaudio-plugin",["ra","rmp","rpm"]],["audio/x-psid","sid"],["audio/x-realaudio","ra"],["audio/x-twinvq","vqf"],["audio/x-twinvq-plugin",["vqe","vql"]],["audio/x-vnd.audioexplosion.mjuicemediafile","mjf"],["audio/x-voc","voc"],["audio/x-wav","wav"],["audio/xm","xm"],["chemical/x-cdx","cdx"],["chemical/x-cif","cif"],["chemical/x-cmdf","cmdf"],["chemical/x-cml","cml"],["chemical/x-csml","csml"],["chemical/x-pdb",["pdb","xyz"]],["chemical/x-xyz","xyz"],["drawing/x-dwf","dwf"],["i-world/i-vrml","ivr"],["image/bmp",["bmp","bm"]],["image/cgm","cgm"],["image/cis-cod","cod"],["image/cmu-raster",["ras","rast"]],["image/fif","fif"],["image/florian",["flo","turbot"]],["image/g3fax","g3"],["image/gif","gif"],["image/ief",["ief","iefs"]],["image/jpeg",["jpeg","jpe","jpg","jfif","jfif-tbnl"]],["image/jutvision","jut"],["image/ktx","ktx"],["image/naplps",["nap","naplps"]],["image/pict",["pic","pict"]],["image/pipeg","jfif"],["image/pjpeg",["jfif","jpe","jpeg","jpg"]],["image/png",["png","x-png"]],["image/prs.btif","btif"],["image/svg+xml","svg"],["image/tiff",["tif","tiff"]],["image/vasa","mcf"],["image/vnd.adobe.photoshop","psd"],["image/vnd.dece.graphic","uvi"],["image/vnd.djvu","djvu"],["image/vnd.dvb.subtitle","sub"],["image/vnd.dwg",["dwg","dxf","svf"]],["image/vnd.dxf","dxf"],["image/vnd.fastbidsheet","fbs"],["image/vnd.fpx","fpx"],["image/vnd.fst","fst"],["image/vnd.fujixerox.edmics-mmr","mmr"],["image/vnd.fujixerox.edmics-rlc","rlc"],["image/vnd.ms-modi","mdi"],["image/vnd.net-fpx",["fpx","npx"]],["image/vnd.rn-realflash","rf"],["image/vnd.rn-realpix","rp"],["image/vnd.wap.wbmp","wbmp"],["image/vnd.xiff","xif"],["image/webp","webp"],["image/x-cmu-raster","ras"],["image/x-cmx","cmx"],["image/x-dwg",["dwg","dxf","svf"]],["image/x-freehand","fh"],["image/x-icon","ico"],["image/x-jg","art"],["image/x-jps","jps"],["image/x-niff",["niff","nif"]],["image/x-pcx","pcx"],["image/x-pict",["pct","pic"]],["image/x-portable-anymap","pnm"],["image/x-portable-bitmap","pbm"],["image/x-portable-graymap","pgm"],["image/x-portable-greymap","pgm"],["image/x-portable-pixmap","ppm"],["image/x-quicktime",["qif","qti","qtif"]],["image/x-rgb","rgb"],["image/x-tiff",["tif","tiff"]],["image/x-windows-bmp","bmp"],["image/x-xbitmap","xbm"],["image/x-xbm","xbm"],["image/x-xpixmap",["xpm","pm"]],["image/x-xwd","xwd"],["image/x-xwindowdump","xwd"],["image/xbm","xbm"],["image/xpm","xpm"],["message/rfc822",["eml","mht","mhtml","nws","mime"]],["model/iges",["iges","igs"]],["model/mesh","msh"],["model/vnd.collada+xml","dae"],["model/vnd.dwf","dwf"],["model/vnd.gdl","gdl"],["model/vnd.gtw","gtw"],["model/vnd.mts","mts"],["model/vnd.vtu","vtu"],["model/vrml",["vrml","wrl","wrz"]],["model/x-pov","pov"],["multipart/x-gzip","gzip"],["multipart/x-ustar","ustar"],["multipart/x-zip","zip"],["music/crescendo",["mid","midi"]],["music/x-karaoke","kar"],["paleovu/x-pv","pvu"],["text/asp","asp"],["text/calendar","ics"],["text/css","css"],["text/csv","csv"],["text/ecmascript","js"],["text/h323","323"],["text/html",["html","htm","stm","acgi","htmls","htx","shtml"]],["text/iuls","uls"],["text/javascript","js"],["text/mcf","mcf"],["text/n3","n3"],["text/pascal","pas"],["text/plain",["txt","bas","c","h","c++","cc","com","conf","cxx","def","f","f90","for","g","hh","idc","jav","java","list","log","lst","m","mar","pl","sdml","text"]],["text/plain-bas","par"],["text/prs.lines.tag","dsc"],["text/richtext",["rtx","rt","rtf"]],["text/scriplet","wsc"],["text/scriptlet","sct"],["text/sgml",["sgm","sgml"]],["text/tab-separated-values","tsv"],["text/troff","t"],["text/turtle","ttl"],["text/uri-list",["uni","unis","uri","uris"]],["text/vnd.abc","abc"],["text/vnd.curl","curl"],["text/vnd.curl.dcurl","dcurl"],["text/vnd.curl.mcurl","mcurl"],["text/vnd.curl.scurl","scurl"],["text/vnd.fly","fly"],["text/vnd.fmi.flexstor","flx"],["text/vnd.graphviz","gv"],["text/vnd.in3d.3dml","3dml"],["text/vnd.in3d.spot","spot"],["text/vnd.rn-realtext","rt"],["text/vnd.sun.j2me.app-descriptor","jad"],["text/vnd.wap.wml","wml"],["text/vnd.wap.wmlscript","wmls"],["text/webviewhtml","htt"],["text/x-asm",["asm","s"]],["text/x-audiosoft-intra","aip"],["text/x-c",["c","cc","cpp"]],["text/x-component","htc"],["text/x-fortran",["for","f","f77","f90"]],["text/x-h",["h","hh"]],["text/x-java-source",["java","jav"]],["text/x-java-source,java","java"],["text/x-la-asf","lsx"],["text/x-m","m"],["text/x-pascal","p"],["text/x-script","hlb"],["text/x-script.csh","csh"],["text/x-script.elisp","el"],["text/x-script.guile","scm"],["text/x-script.ksh","ksh"],["text/x-script.lisp","lsp"],["text/x-script.perl","pl"],["text/x-script.perl-module","pm"],["text/x-script.phyton","py"],["text/x-script.rexx","rexx"],["text/x-script.scheme","scm"],["text/x-script.sh","sh"],["text/x-script.tcl","tcl"],["text/x-script.tcsh","tcsh"],["text/x-script.zsh","zsh"],["text/x-server-parsed-html",["shtml","ssi"]],["text/x-setext","etx"],["text/x-sgml",["sgm","sgml"]],["text/x-speech",["spc","talk"]],["text/x-uil","uil"],["text/x-uuencode",["uu","uue"]],["text/x-vcalendar","vcs"],["text/x-vcard","vcf"],["text/xml","xml"],["video/3gpp","3gp"],["video/3gpp2","3g2"],["video/animaflex","afl"],["video/avi","avi"],["video/avs-video","avs"],["video/dl","dl"],["video/fli","fli"],["video/gl","gl"],["video/h261","h261"],["video/h263","h263"],["video/h264","h264"],["video/jpeg","jpgv"],["video/jpm","jpm"],["video/mj2","mj2"],["video/mp4","mp4"],["video/mpeg",["mpeg","mp2","mpa","mpe","mpg","mpv2","m1v","m2v","mp3"]],["video/msvideo","avi"],["video/ogg","ogv"],["video/quicktime",["mov","qt","moov"]],["video/vdo","vdo"],["video/vivo",["viv","vivo"]],["video/vnd.dece.hd","uvh"],["video/vnd.dece.mobile","uvm"],["video/vnd.dece.pd","uvp"],["video/vnd.dece.sd","uvs"],["video/vnd.dece.video","uvv"],["video/vnd.fvt","fvt"],["video/vnd.mpegurl","mxu"],["video/vnd.ms-playready.media.pyv","pyv"],["video/vnd.rn-realvideo","rv"],["video/vnd.uvvu.mp4","uvu"],["video/vnd.vivo",["viv","vivo"]],["video/vosaic","vos"],["video/webm","webm"],["video/x-amt-demorun","xdr"],["video/x-amt-showrun","xsr"],["video/x-atomic3d-feature","fmf"],["video/x-dl","dl"],["video/x-dv",["dif","dv"]],["video/x-f4v","f4v"],["video/x-fli","fli"],["video/x-flv","flv"],["video/x-gl","gl"],["video/x-isvideo","isu"],["video/x-la-asf",["lsf","lsx"]],["video/x-m4v","m4v"],["video/x-motion-jpeg","mjpg"],["video/x-mpeg",["mp3","mp2"]],["video/x-mpeq2a","mp2"],["video/x-ms-asf",["asf","asr","asx"]],["video/x-ms-asf-plugin","asx"],["video/x-ms-wm","wm"],["video/x-ms-wmv","wmv"],["video/x-ms-wmx","wmx"],["video/x-ms-wvx","wvx"],["video/x-msvideo","avi"],["video/x-qtc","qtc"],["video/x-scm","scm"],["video/x-sgi-movie",["movie","mv"]],["windows/metafile","wmf"],["www/mime","mime"],["x-conference/x-cooltalk","ice"],["x-music/x-midi",["mid","midi"]],["x-world/x-3dmf",["3dm","3dmf","qd3","qd3d"]],["x-world/x-svr","svr"],["x-world/x-vrml",["flr","vrml","wrl","wrz","xaf","xof"]],["x-world/x-vrt","vrt"],["xgl/drawing","xgz"],["xgl/movie","xmz"]]),s=new Map([["123","application/vnd.lotus-1-2-3"],["323","text/h323"],["*","application/octet-stream"],["3dm","x-world/x-3dmf"],["3dmf","x-world/x-3dmf"],["3dml","text/vnd.in3d.3dml"],["3g2","video/3gpp2"],["3gp","video/3gpp"],["7z","application/x-7z-compressed"],["a","application/octet-stream"],["aab","application/x-authorware-bin"],["aac","audio/x-aac"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abc","text/vnd.abc"],["abw","application/x-abiword"],["ac","application/pkix-attr-cert"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acgi","text/html"],["acu","application/vnd.acucobol"],["acx","application/internet-property-stream"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afl","video/animaflex"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/postscript"],["aif",["audio/aiff","audio/x-aiff"]],["aifc",["audio/aiff","audio/x-aiff"]],["aiff",["audio/aiff","audio/x-aiff"]],["aim","application/x-aim"],["aip","text/x-audiosoft-intra"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["ani","application/x-navi-animation"],["aos","application/x-nokia-9000-communicator-add-on-software"],["apk","application/vnd.android.package-archive"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["aps","application/mime"],["arc","application/octet-stream"],["arj",["application/arj","application/octet-stream"]],["art","image/x-jg"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asp","text/asp"],["asr","video/x-ms-asf"],["asx",["video/x-ms-asf","application/x-mplayer2","video/x-ms-asf-plugin"]],["atc","application/vnd.acucorp"],["atomcat","application/atomcat+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au",["audio/basic","audio/x-au"]],["avi",["video/avi","video/msvideo","application/x-troff-msvideo","video/x-msvideo"]],["avs","video/avs-video"],["aw","application/applixware"],["axs","application/olescript"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azw","application/vnd.amazon.ebook"],["bas","text/plain"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin",["application/octet-stream","application/mac-binary","application/macbinary","application/x-macbinary","application/x-binary"]],["bm","image/bmp"],["bmi","application/vnd.bmi"],["bmp",["image/bmp","image/x-windows-bmp"]],["boo","application/book"],["book","application/book"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bsh","application/x-bsh"],["btif","image/prs.btif"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c",["text/plain","text/x-c"]],["c++","text/plain"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["c4g","application/vnd.clonk.c4group"],["cab","application/vnd.ms-cab-compressed"],["car","application/vnd.curl.car"],["cat",["application/vnd.ms-pkiseccat","application/vnd.ms-pki.seccat"]],["cc",["text/plain","text/x-c"]],["ccad","application/clariscad"],["cco","application/x-cocoa"],["ccxml","application/ccxml+xml,"],["cdbcmsg","application/vnd.contact.cmsg"],["cdf",["application/cdf","application/x-cdf","application/x-netcdf"]],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer",["application/pkix-cert","application/x-x509-ca-cert"]],["cgm","image/cgm"],["cha","application/x-chat"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cla","application/vnd.claymore"],["class",["application/octet-stream","application/java","application/java-byte-code","application/java-vm","application/x-java-class"]],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod",["image/cis-cod","application/vnd.rim.cod"]],["com",["application/octet-stream","text/plain"]],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt",["application/mac-compactpro","application/x-compactpro","application/x-cpt"]],["crd","application/x-mscardfile"],["crl",["application/pkix-crl","application/pkcs-crl"]],["crt",["application/pkix-cert","application/x-x509-user-cert","application/x-x509-ca-cert"]],["cryptonote","application/vnd.rig.cryptonote"],["csh",["text/x-script.csh","application/x-csh"]],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["css",["text/css","application/x-pointplus"]],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxx","text/plain"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["davmount","application/davmount+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["deb","application/x-debian-package"],["deepv","application/x-deepv"],["def","text/plain"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dif","video/x-dv"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["djvu","image/vnd.djvu"],["dl",["video/dl","video/x-dl"]],["dll","application/x-msdownload"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.document.macroenabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroenabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp",["application/commonground","application/vnd.osgi.dp"]],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drw","application/drafting"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dv","video/x-dv"],["dvi","application/x-dvi"],["dwf",["model/vnd.dwf","drawing/x-dwf"]],["dwg",["application/acad","image/vnd.dwg","image/x-dwg"]],["dxf",["application/dxf","image/vnd.dwg","image/vnd.dxf","image/x-dwg"]],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["el","text/x-script.elisp"],["elc",["application/x-elc","application/x-bytecode.elisp"]],["eml","message/rfc822"],["emma","application/emma+xml"],["env","application/x-envoy"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es",["application/ecmascript","application/x-esrehber"]],["es3","application/vnd.eszigno3+xml"],["esf","application/vnd.epson.esf"],["etx","text/x-setext"],["evy",["application/envoy","application/x-envoy"]],["exe",["application/octet-stream","application/x-msdownload"]],["exi","application/exi"],["ext","application/vnd.novadigm.ext"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f",["text/plain","text/x-fortran"]],["f4v","video/x-f4v"],["f77","text/x-fortran"],["f90",["text/plain","text/x-fortran"]],["fbs","image/vnd.fastbidsheet"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fh","image/x-freehand"],["fif",["application/fractals","image/fif"]],["fig","application/x-xfig"],["fli",["video/fli","video/x-fli"]],["flo",["image/florian","application/vnd.micrografx.flo"]],["flr","x-world/x-vrml"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fmf","video/x-atomic3d-feature"],["fnc","application/vnd.frogans.fnc"],["for",["text/plain","text/x-fortran"]],["fpx",["image/vnd.fpx","image/vnd.net-fpx"]],["frl","application/freeloader"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["funk","audio/make"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g","text/plain"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gdl","model/vnd.gdl"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["gl",["video/gl","video/x-gl"]],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gph","application/vnd.flographit"],["gqf","application/vnd.grafeq"],["gram","application/srgs"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsd","audio/x-gsm"],["gsf","application/x-font-ghostscript"],["gsm","audio/x-gsm"],["gsp","application/x-gsp"],["gss","application/x-gss"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxt","application/vnd.geonext"],["gz",["application/x-gzip","application/x-compressed"]],["gzip",["multipart/x-gzip","application/x-gzip"]],["h",["text/plain","text/x-h"]],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hdf","application/x-hdf"],["help","application/x-helpfile"],["hgl","application/vnd.hp-hpgl"],["hh",["text/plain","text/x-h"]],["hlb","text/x-script"],["hlp",["application/winhlp","application/hlp","application/x-helpfile","application/x-winhelp"]],["hpg","application/vnd.hp-hpgl"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx",["application/mac-binhex40","application/binhex","application/binhex4","application/mac-binhex","application/x-binhex40","application/x-mac-binhex40"]],["hta","application/hta"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["htmls","text/html"],["htt","text/webviewhtml"],["htx","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["ico","image/x-icon"],["ics","text/calendar"],["idc","text/plain"],["ief","image/ief"],["iefs","image/ief"],["ifm","application/vnd.shana.informed.formdata"],["iges",["application/iges","model/iges"]],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs",["application/iges","model/iges"]],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["iii","application/x-iphone"],["ima","application/x-ima"],["imap","application/x-httpd-imap"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["inf","application/inf"],["ins",["application/x-internet-signup","application/x-internett-signup"]],["ip","application/x-ip2"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["isp","application/x-internet-signup"],["isu","video/x-isvideo"],["it","audio/it"],["itp","application/vnd.shana.informed.formtemplate"],["iv","application/x-inventor"],["ivp","application/vnd.immervision-ivp"],["ivr","i-world/i-vrml"],["ivu","application/vnd.immervision-ivu"],["ivy","application/x-livescreen"],["jad","text/vnd.sun.j2me.app-descriptor"],["jam",["application/vnd.jam","audio/x-jam"]],["jar","application/java-archive"],["jav",["text/plain","text/x-java-source"]],["java",["text/plain","text/x-java-source,java","text/x-java-source"]],["jcm","application/x-java-commerce"],["jfif",["image/pipeg","image/jpeg","image/pjpeg"]],["jfif-tbnl","image/jpeg"],["jisp","application/vnd.jisp"],["jlt","application/vnd.hp-jlyt"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jpe",["image/jpeg","image/pjpeg"]],["jpeg",["image/jpeg","image/pjpeg"]],["jpg",["image/jpeg","image/pjpeg"]],["jpgv","video/jpeg"],["jpm","video/jpm"],["jps","image/x-jps"],["js",["application/javascript","application/ecmascript","text/javascript","text/ecmascript","application/x-javascript"]],["json","application/json"],["jut","image/jutvision"],["kar",["audio/midi","music/x-karaoke"]],["karbon","application/vnd.kde.karbon"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["ksh",["application/x-ksh","text/x-script.ksh"]],["ksp","application/vnd.kde.kspread"],["ktx","image/ktx"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["la",["audio/nspaudio","audio/x-nspaudio"]],["lam","audio/x-liveaudio"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["lha",["application/octet-stream","application/lha","application/x-lha"]],["lhx","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["lma",["audio/nspaudio","audio/x-nspaudio"]],["log","text/plain"],["lrm","application/vnd.ms-lrm"],["lsf","video/x-la-asf"],["lsp",["application/x-lisp","text/x-script.lisp"]],["lst","text/plain"],["lsx",["video/x-la-asf","text/x-la-asf"]],["ltf","application/vnd.frogans.ltf"],["ltx","application/x-latex"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh",["application/octet-stream","application/x-lzh"]],["lzx",["application/lzx","application/octet-stream","application/x-lzx"]],["m",["text/plain","text/x-m"]],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m1v","video/mpeg"],["m21","application/mp21"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3u",["audio/x-mpegurl","audio/x-mpequrl"]],["m3u8","application/vnd.apple.mpegurl"],["m4v","video/x-m4v"],["ma","application/mathematica"],["mads","application/mads+xml"],["mag","application/vnd.ecowin.chart"],["man","application/x-troff-man"],["map","application/x-navimap"],["mar","text/plain"],["mathml","application/mathml+xml"],["mbd","application/mbedlet"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc$","application/x-magic-cap-package-1.0"],["mc1","application/vnd.medcalcdata"],["mcd",["application/mcad","application/vnd.mcd","application/x-mathcad"]],["mcf",["image/vasa","text/mcf"]],["mcp","application/netmc"],["mcurl","text/vnd.curl.mcurl"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["me","application/x-troff-me"],["meta4","application/metalink4+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mht","message/rfc822"],["mhtml","message/rfc822"],["mid",["audio/mid","audio/midi","music/crescendo","x-music/x-midi","audio/x-midi","application/x-midi","audio/x-mid"]],["midi",["audio/midi","music/crescendo","x-music/x-midi","audio/x-midi","application/x-midi","audio/x-mid"]],["mif",["application/vnd.mif","application/x-mif","application/x-frame"]],["mime",["message/rfc822","www/mime"]],["mj2","video/mj2"],["mjf","audio/x-vnd.audioexplosion.mjuicemediafile"],["mjpg","video/x-motion-jpeg"],["mlp","application/vnd.dolby.mlp"],["mm",["application/base64","application/x-meme"]],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mme","application/base64"],["mmf","application/vnd.smaf"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mny","application/x-msmoney"],["mod",["audio/mod","audio/x-mod"]],["mods","application/mods+xml"],["moov","video/quicktime"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2",["video/mpeg","audio/mpeg","video/x-mpeg","audio/x-mpeg","video/x-mpeq2a"]],["mp3",["audio/mpeg","audio/mpeg3","video/mpeg","audio/x-mpeg-3","video/x-mpeg"]],["mp4",["video/mp4","application/mp4"]],["mp4a","audio/mp4"],["mpa",["video/mpeg","audio/mpeg"]],["mpc",["application/vnd.mophun.certificate","application/x-project"]],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg",["video/mpeg","audio/mpeg"]],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/x-project"],["mpv","application/x-project"],["mpv2","video/mpeg"],["mpx","application/x-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","application/x-troff-ms"],["mscml","application/mediaservercontrol+xml"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msl","application/vnd.mobius.msl"],["msty","application/vnd.muvee.style"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musicxml","application/vnd.recordare.musicxml+xml"],["mv","video/x-sgi-movie"],["mvb","application/x-msmediaview"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["my","audio/make"],["mzz","application/x-vnd.audioexplosion.mzz"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nap","image/naplps"],["naplps","image/naplps"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncm","application/vnd.nokia.configuration-message"],["ncx","application/x-dtbncx+xml"],["ngdat","application/vnd.nokia.n-gage.data"],["nif","image/x-niff"],["niff","image/x-niff"],["nix","application/x-mix-transfer"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nvd","application/x-navidoc"],["nws","message/rfc822"],["o","application/octet-stream"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omc","application/x-omc"],["omcd","application/x-omcdatamaker"],["omcr","application/x-omcregerator"],["onetoc","application/onenote"],["opf","application/oebps-package+xml"],["org","application/vnd.lotus-organizer"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","application/x-font-otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p10",["application/pkcs10","application/x-pkcs10"]],["p12",["application/pkcs-12","application/x-pkcs12"]],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c",["application/pkcs7-mime","application/x-pkcs7-mime"]],["p7m",["application/pkcs7-mime","application/x-pkcs7-mime"]],["p7r","application/x-pkcs7-certreqresp"],["p7s",["application/pkcs7-signature","application/x-pkcs7-signature"]],["p8","application/pkcs8"],["par","text/plain-bas"],["part","application/pro_eng"],["pas","text/pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcf","application/x-font-pcf"],["pcl",["application/vnd.hp-pcl","application/x-pcl"]],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb",["application/vnd.palm","chemical/x-pdb"]],["pdf","application/pdf"],["pfa","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfunk",["audio/make","audio/make.my.funk"]],["pfx","application/x-pkcs12"],["pgm",["image/x-portable-graymap","image/x-portable-greymap"]],["pgn","application/x-chess-pgn"],["pgp","application/pgp-signature"],["pic",["image/pict","image/x-pict"]],["pict","image/pict"],["pkg","application/x-newton-compatible-pkg"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pko",["application/ynd.ms-pkipko","application/vnd.ms-pki.pko"]],["pl",["text/plain","text/x-script.perl"]],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["plx","application/x-pixclscript"],["pm",["text/x-script.perl-module","image/x-xpixmap"]],["pm4","application/x-pagemaker"],["pm5","application/x-pagemaker"],["pma","application/x-perfmon"],["pmc","application/x-perfmon"],["pml",["application/vnd.ctc-posml","application/x-perfmon"]],["pmr","application/x-perfmon"],["pmw","application/x-perfmon"],["png","image/png"],["pnm",["application/x-portable-anymap","image/x-portable-anymap"]],["portpkg","application/vnd.macports.portpkg"],["pot",["application/vnd.ms-powerpoint","application/mspowerpoint"]],["potm","application/vnd.ms-powerpoint.template.macroenabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["pov","model/x-pov"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroenabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps",["application/vnd.ms-powerpoint","application/mspowerpoint"]],["ppsm","application/vnd.ms-powerpoint.slideshow.macroenabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt",["application/vnd.ms-powerpoint","application/mspowerpoint","application/powerpoint","application/x-mspowerpoint"]],["pptm","application/vnd.ms-powerpoint.presentation.macroenabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["ppz","application/mspowerpoint"],["prc","application/x-mobipocket-ebook"],["pre",["application/vnd.lotus-freelance","application/x-freelance"]],["prf","application/pics-rules"],["prt","application/pro_eng"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd",["application/octet-stream","image/vnd.adobe.photoshop"]],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pvu","paleovu/x-pv"],["pwn","application/vnd.3m.post-it-notes"],["pwz","application/vnd.ms-powerpoint"],["py","text/x-script.phyton"],["pya","audio/vnd.ms-playready.media.pya"],["pyc","application/x-bytecode.python"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qcp","audio/vnd.qcelp"],["qd3","x-world/x-3dmf"],["qd3d","x-world/x-3dmf"],["qfx","application/vnd.intu.qfx"],["qif","image/x-quicktime"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qtc","video/x-qtc"],["qti","image/x-quicktime"],["qtif","image/x-quicktime"],["qxd","application/vnd.quark.quarkxpress"],["ra",["audio/x-realaudio","audio/x-pn-realaudio","audio/x-pn-realaudio-plugin"]],["ram","audio/x-pn-realaudio"],["rar","application/x-rar-compressed"],["ras",["image/cmu-raster","application/x-cmu-raster","image/x-cmu-raster"]],["rast","image/cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rexx","text/x-script.rexx"],["rf","image/vnd.rn-realflash"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm",["application/vnd.rn-realmedia","audio/x-pn-realaudio"]],["rmi","audio/mid"],["rmm","audio/x-pn-realaudio"],["rmp",["audio/x-pn-realaudio-plugin","audio/x-pn-realaudio"]],["rms","application/vnd.jcp.javame.midlet-rms"],["rnc","application/relax-ng-compact-syntax"],["rng",["application/ringing-tones","application/vnd.nokia.ringing-tone"]],["rnx","application/vnd.rn-realplayer"],["roff","application/x-troff"],["rp","image/vnd.rn-realpix"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsd","application/rsd+xml"],["rt",["text/richtext","text/vnd.rn-realtext"]],["rtf",["application/rtf","text/richtext","application/x-rtf"]],["rtx",["text/richtext","application/rtf"]],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["saveme","application/octet-stream"],["sbk","application/x-tbook"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm",["application/vnd.lotus-screencam","video/x-scm","text/x-script.guile","application/x-lotusscreencam","text/x-script.scheme"]],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["sct","text/scriptlet"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkm","application/vnd.solent.sdkm+xml"],["sdml","text/plain"],["sdp",["application/sdp","application/x-sdp"]],["sdr","application/sounder"],["sdw","application/vnd.stardivision.writer"],["sea",["application/sea","application/x-sea"]],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["ser","application/java-serialized-object"],["set","application/set"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sgl","application/vnd.stardivision.writer-global"],["sgm",["text/sgml","text/x-sgml"]],["sgml",["text/sgml","text/x-sgml"]],["sh",["application/x-shar","application/x-bsh","application/x-sh","text/x-script.sh"]],["shar",["application/x-bsh","application/x-shar"]],["shf","application/shf+xml"],["shtml",["text/html","text/x-server-parsed-html"]],["sid","audio/x-psid"],["sis","application/vnd.symbian.install"],["sit",["application/x-stuffit","application/x-sit"]],["sitx","application/x-stuffitx"],["skd","application/x-koan"],["skm","application/x-koan"],["skp",["application/vnd.koan","application/x-koan"]],["skt","application/x-koan"],["sl","application/x-seelogo"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi",["application/smil","application/smil+xml"]],["smil","application/smil"],["snd",["audio/basic","audio/x-adpcm"]],["snf","application/x-font-snf"],["sol","application/solids"],["spc",["text/x-speech","application/x-pkcs7-certificates"]],["spf","application/vnd.yamaha.smaf-phrase"],["spl",["application/futuresplash","application/x-futuresplash"]],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spr","application/x-sprite"],["sprite","application/x-sprite"],["src","application/x-wais-source"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssi","text/x-server-parsed-html"],["ssm","application/streamingmedia"],["ssml","application/ssml+xml"],["sst",["application/vnd.ms-pkicertstore","application/vnd.ms-pki.certstore"]],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["step","application/step"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl",["application/vnd.ms-pkistl","application/sla","application/vnd.ms-pki.stl","application/x-navistyle"]],["stm","text/html"],["stp","application/step"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["sub","image/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svf",["image/vnd.dwg","image/x-dwg"]],["svg","image/svg+xml"],["svr",["x-world/x-svr","application/x-world"]],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t",["text/troff","application/x-troff"]],["talk","text/x-speech"],["tao","application/vnd.tao.intent-module-archive"],["tar","application/x-tar"],["tbk",["application/toolbook","application/x-tbook"]],["tcap","application/vnd.3gpp2.tcap"],["tcl",["text/x-script.tcl","application/x-tcl"]],["tcsh","text/x-script.tcsh"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text",["application/plain","text/plain"]],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tgz",["application/gnutar","application/x-compressed"]],["thmx","application/vnd.ms-officetheme"],["tif",["image/tiff","image/x-tiff"]],["tiff",["image/tiff","image/x-tiff"]],["tmo","application/vnd.tmobile-livetv"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","application/x-troff"],["tra","application/vnd.trueapp"],["trm","application/x-msterminal"],["tsd","application/timestamped-data"],["tsi","audio/tsp-audio"],["tsp",["application/dsptype","audio/tsplayer"]],["tsv","text/tab-separated-values"],["ttf","application/x-font-ttf"],["ttl","text/turtle"],["turbot","image/florian"],["twd","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["ufd","application/vnd.ufdl"],["uil","text/x-uil"],["uls","text/iuls"],["umj","application/vnd.umajin"],["uni","text/uri-list"],["unis","text/uri-list"],["unityweb","application/vnd.unity"],["unv","application/i-deas"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["ustar",["application/x-ustar","multipart/x-ustar"]],["utz","application/vnd.uiq.theme"],["uu",["application/octet-stream","text/x-uuencode"]],["uue","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vda","application/vda"],["vdo","video/vdo"],["vew","application/groupwise"],["vis","application/vnd.visionary"],["viv",["video/vivo","video/vnd.vivo"]],["vivo",["video/vivo","video/vnd.vivo"]],["vmd","application/vocaltec-media-desc"],["vmf","application/vocaltec-media-file"],["voc",["audio/voc","audio/x-voc"]],["vos","video/vosaic"],["vox","audio/voxware"],["vqe","audio/x-twinvq-plugin"],["vqf","audio/x-twinvq"],["vql","audio/x-twinvq-plugin"],["vrml",["model/vrml","x-world/x-vrml","application/x-vrml"]],["vrt","x-world/x-vrt"],["vsd",["application/vnd.visio","application/x-visio"]],["vsf","application/vnd.vsf"],["vst","application/x-visio"],["vsw","application/x-visio"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w60","application/wordperfect6.0"],["w61","application/wordperfect6.1"],["w6w","application/msword"],["wad","application/x-doom"],["wav",["audio/wav","audio/x-wav"]],["wax","audio/x-ms-wax"],["wb1","application/x-qpro"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/vnd.wap.wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["web","application/vnd.xara"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wiz","application/msword"],["wk1","application/x-123"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf",["windows/metafile","application/x-msmetafile"]],["wml","text/vnd.wap.wml"],["wmlc","application/vnd.wap.wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-ms-wmz"],["woff","application/x-font-woff"],["word","application/msword"],["wp","application/wordperfect"],["wp5",["application/wordperfect","application/wordperfect6.0"]],["wp6","application/wordperfect"],["wpd",["application/wordperfect","application/vnd.wordperfect","application/x-wpwin"]],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wq1","application/x-lotus"],["wqd","application/vnd.wqd"],["wri",["application/mswrite","application/x-wri","application/x-mswrite"]],["wrl",["model/vrml","x-world/x-vrml","application/x-world"]],["wrz",["model/vrml","x-world/x-vrml"]],["wsc","text/scriplet"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wsrc","application/x-wais-source"],["wtb","application/vnd.webturbo"],["wtk","application/x-wintalk"],["wvx","video/x-ms-wvx"],["x-png","image/png"],["x3d","application/vnd.hzn-3d-crossword"],["xaf","x-world/x-vrml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm",["image/xbm","image/x-xbm","image/x-xbitmap"]],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdr","video/x-amt-demorun"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xgz","xgl/drawing"],["xhtml","application/xhtml+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla",["application/vnd.ms-excel","application/excel","application/x-msexcel","application/x-excel"]],["xlam","application/vnd.ms-excel.addin.macroenabled.12"],["xlb",["application/excel","application/vnd.ms-excel","application/x-excel"]],["xlc",["application/vnd.ms-excel","application/excel","application/x-excel"]],["xld",["application/excel","application/x-excel"]],["xlk",["application/excel","application/x-excel"]],["xll",["application/excel","application/vnd.ms-excel","application/x-excel"]],["xlm",["application/vnd.ms-excel","application/excel","application/x-excel"]],["xls",["application/vnd.ms-excel","application/excel","application/x-msexcel","application/x-excel"]],["xlsb","application/vnd.ms-excel.sheet.binary.macroenabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroenabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt",["application/vnd.ms-excel","application/excel","application/x-excel"]],["xltm","application/vnd.ms-excel.template.macroenabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlv",["application/excel","application/x-excel"]],["xlw",["application/vnd.ms-excel","application/excel","application/x-msexcel","application/x-excel"]],["xm","audio/xm"],["xml",["application/xml","text/xml","application/atom+xml","application/rss+xml"]],["xmz","xgl/movie"],["xo","application/vnd.olpc-sugar"],["xof","x-world/x-vrml"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpix","application/x-vnd.ls-xpix"],["xpm",["image/xpm","image/x-xpixmap"]],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xsr","video/x-amt-showrun"],["xul","application/vnd.mozilla.xul+xml"],["xwd",["image/x-xwd","image/x-xwindowdump"]],["xyz",["chemical/x-xyz","chemical/x-pdb"]],["yang","application/yang"],["yin","application/yin+xml"],["z",["application/x-compressed","application/x-compress"]],["zaz","application/vnd.zzazz.deck+xml"],["zip",["application/zip","multipart/x-zip","application/x-zip-compressed","application/x-compressed"]],["zir","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zoo","application/octet-stream"],["zsh","text/x-script.zsh"]]);t.exports={detectMimeType(e){if(!e)return a;let t=r.parse(e),i=(t.ext.substr(1)||t.name||"").split("?").shift().trim().toLowerCase(),n=a;return(s.has(i)&&(n=s.get(i)),Array.isArray(n))?n[0]:n},detectExtension(e){if(!e)return"bin";let t=(e||"").toLowerCase().trim().split("/"),i=t.shift().trim(),r=t.join("/").trim();if(n.has(i+"/"+r)){let e=n.get(i+"/"+r);return Array.isArray(e)?e[0]:e}return"text"===i?"txt":"bin"}}},84140,(e,t,i)=>{"use strict";let r=/^xn--/,a=/[^\0-\x7F]/,n=/[\x2E\u3002\uFF0E\uFF61]/g,s={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},o=Math.floor,l=String.fromCharCode;function d(e){throw RangeError(s[e])}function c(e,t){let i=e.split("@"),r="";return i.length>1&&(r=i[0]+"@",e=i[1]),r+(function(e,t){let i=[],r=e.length;for(;r--;)i[r]=t(e[r]);return i})((e=e.replace(n,".")).split("."),t).join(".")}function u(e){let t=[],i=0,r=e.length;for(;i<r;){let a=e.charCodeAt(i++);if(a>=55296&&a<=56319&&i<r){let r=e.charCodeAt(i++);(64512&r)==56320?t.push(((1023&a)<<10)+(1023&r)+65536):(t.push(a),i--)}else t.push(a)}return t}let p=function(e,t){return e+22+75*(e<26)-((0!=t)<<5)},h=function(e,t,i){let r=0;for(e=i?o(e/700):e>>1,e+=o(e/t);e>455;r+=36)e=o(e/35);return o(r+36*e/(e+38))},m=function(e){let t=[],i=e.length,r=0,a=128,n=72,s=e.lastIndexOf("-");s<0&&(s=0);for(let i=0;i<s;++i)e.charCodeAt(i)>=128&&d("not-basic"),t.push(e.charCodeAt(i));for(let c=s>0?s+1:0;c<i;){let s=r;for(let t=1,a=36;;a+=36){var l;c>=i&&d("invalid-input");let s=(l=e.charCodeAt(c++))>=48&&l<58?26+(l-48):l>=65&&l<91?l-65:l>=97&&l<123?l-97:36;s>=36&&d("invalid-input"),s>o((0x7fffffff-r)/t)&&d("overflow"),r+=s*t;let u=a<=n?1:a>=n+26?26:a-n;if(s<u)break;let p=36-u;t>o(0x7fffffff/p)&&d("overflow"),t*=p}let u=t.length+1;n=h(r-s,u,0==s),o(r/u)>0x7fffffff-a&&d("overflow"),a+=o(r/u),r%=u,t.splice(r++,0,a)}return String.fromCodePoint(...t)},f=function(e){let t=[],i=(e=u(e)).length,r=128,a=0,n=72;for(let i of e)i<128&&t.push(l(i));let s=t.length,c=s;for(s&&t.push("-");c<i;){let i=0x7fffffff;for(let t of e)t>=r&&t<i&&(i=t);let u=c+1;for(let m of(i-r>o((0x7fffffff-a)/u)&&d("overflow"),a+=(i-r)*u,r=i,e))if(m<r&&++a>0x7fffffff&&d("overflow"),m===r){let e=a;for(let i=36;;i+=36){let r=i<=n?1:i>=n+26?26:i-n;if(e<r)break;let a=e-r,s=36-r;t.push(l(p(r+a%s,0))),e=o(a/s)}t.push(l(p(e,0))),n=h(a,u,c===s),a=0,++c}++a,++r}return t.join("")};t.exports={version:"2.3.1",ucs2:{decode:u,encode:e=>String.fromCodePoint(...e)},decode:m,encode:f,toASCII:function(e){return c(e,function(e){return a.test(e)?"xn--"+f(e):e})},toUnicode:function(e){return c(e,function(e){return r.test(e)?m(e.slice(4).toLowerCase()):e})}}},20511,(e,t,i)=>{"use strict";let r=e.r(88947).Transform;function a(e){return"string"==typeof e&&(e=Buffer.from(e,"utf-8")),e.toString("base64")}function n(e,t){if(e=(e||"").toString(),t=t||76,e.length<=t)return e;let i=[],r=0,a=1024*t;for(;r<e.length;){let n=e.substr(r,a).replace(RegExp(".{"+t+"}","g"),"$&\r\n").trim();i.push(n),r+=a}return i.join("\r\n").trim()}t.exports={encode:a,wrap:n,Encoder:class extends r{constructor(e){super(),this.options=e||{},!1!==this.options.lineLength&&(this.options.lineLength=this.options.lineLength||76),this._curLine="",this._remainingBytes=!1,this.inputBytes=0,this.outputBytes=0}_transform(e,t,i){if("buffer"!==t&&(e=Buffer.from(e,t)),!e||!e.length)return setImmediate(i);this.inputBytes+=e.length,this._remainingBytes&&this._remainingBytes.length&&(e=Buffer.concat([this._remainingBytes,e],this._remainingBytes.length+e.length),this._remainingBytes=!1),e.length%3?(this._remainingBytes=e.slice(e.length-e.length%3),e=e.slice(0,e.length-e.length%3)):this._remainingBytes=!1;let r=this._curLine+a(e);if(this.options.lineLength){let e=(r=n(r,this.options.lineLength)).lastIndexOf("\n");e<0?(this._curLine=r,r=""):e===r.length-1?this._curLine="":(this._curLine=r.substr(e+1),r=r.substr(0,e+1))}r&&(this.outputBytes+=r.length,this.push(Buffer.from(r,"ascii"))),setImmediate(i)}_flush(e){this._remainingBytes&&this._remainingBytes.length&&(this._curLine+=a(this._remainingBytes)),this._curLine&&(this._curLine=n(this._curLine,this.options.lineLength),this.outputBytes+=this._curLine.length,this.push(this._curLine,"ascii"),this._curLine=""),e()}}}},63275,(e,t,i)=>{"use strict";let r=e.r(88947).Transform;function a(e){let t;"string"==typeof e&&(e=Buffer.from(e,"utf-8"));let i=[[9],[10],[13],[32,60],[62,126]],r="";for(let a=0,n=e.length;a<n;a++){if(function(e,t){for(let i=t.length-1;i>=0;i--)if(t[i].length&&(1===t[i].length&&e===t[i][0]||2===t[i].length&&e>=t[i][0]&&e<=t[i][1]))return!0;return!1}(t=e[a],i)&&(32!==t&&9!==t||a!==n-1&&10!==e[a+1]&&13!==e[a+1])){r+=String.fromCharCode(t);continue}r+="="+(t<16?"0":"")+t.toString(16).toUpperCase()}return r}function n(e,t){let i,r,a;if(e=(e||"").toString(),t=t||76,e.length<=t)return e;let n=0,s=e.length,o=Math.floor(t/3),l="";for(;n<s;){if(i=(a=e.substr(n,t)).match(/\r\n/)){l+=a=a.substr(0,i.index+i[0].length),n+=a.length;continue}if("\n"===a.substr(-1)){l+=a,n+=a.length;continue}if(i=a.substr(-o).match(/\n.*?$/)){l+=a=a.substr(0,a.length-(i[0].length-1)),n+=a.length;continue}if(a.length>t-o&&(i=a.substr(-o).match(/[ \t.,!?][^ \t.,!?]*$/)))a=a.substr(0,a.length-(i[0].length-1));else if(a.match(/[=][\da-f]{0,2}$/i))for((i=a.match(/[=][\da-f]{0,1}$/i))&&(a=a.substr(0,a.length-i[0].length));a.length>3&&a.length<s-n&&!a.match(/^(?:=[\da-f]{2}){1,4}$/i)&&(i=a.match(/[=][\da-f]{2}$/gi))&&!((r=parseInt(i[0].substr(1,2),16))<128)&&(a=a.substr(0,a.length-3),!(r>=192)););n+a.length<s&&"\n"!==a.substr(-1)?(a.length===t&&a.match(/[=][\da-f]{2}$/i)?a=a.substr(0,a.length-3):a.length===t&&(a=a.substr(0,a.length-1)),n+=a.length,a+="=\r\n"):n+=a.length,l+=a}return l}t.exports={encode:a,wrap:n,Encoder:class extends r{constructor(e){super(),this.options=e||{},!1!==this.options.lineLength&&(this.options.lineLength=this.options.lineLength||76),this._curLine="",this.inputBytes=0,this.outputBytes=0}_transform(e,t,i){let r;if("buffer"!==t&&(e=Buffer.from(e,t)),!e||!e.length)return i();this.inputBytes+=e.length,this.options.lineLength?(r=(r=n(r=this._curLine+a(e),this.options.lineLength)).replace(/(^|\n)([^\n]*)$/,(e,t,i)=>(this._curLine=i,t)))&&(this.outputBytes+=r.length,this.push(r)):(r=a(e),this.outputBytes+=r.length,this.push(r,"ascii")),i()}_flush(e){this._curLine&&(this.outputBytes+=this._curLine.length,this.push(this._curLine,"ascii")),e()}}}},1204,(e,t,i)=>{"use strict";let r=e.r(20511),a=e.r(63275),n=e.r(20140);t.exports={isPlainText:(e,t)=>!("string"!=typeof e||(t?/[\x00-\x08\x0b\x0c\x0e-\x1f"\u0080-\uFFFF]/:/[\x00-\x08\x0b\x0c\x0e-\x1f\u0080-\uFFFF]/).test(e)),hasLongerLines:(e,t)=>e.length>131072||RegExp("^.{"+(t+1)+",}","m").test(e),encodeWord(e,t,i){let n;t=(t||"Q").toString().toUpperCase().trim().charAt(0);let s="UTF-8";if((i=i||0)&&i>7+s.length&&(i-=7+s.length),"Q"===t?n=a.encode(e).replace(/[^a-z0-9!*+\-/=]/gi,e=>{let t=e.charCodeAt(0).toString(16).toUpperCase();return" "===e?"_":"="+(1===t.length?"0"+t:t)}):"B"===t&&(n="string"==typeof e?e:r.encode(e),i=i?Math.max(3,(i-i%4)/4*3):0),i&&("B"!==t?n:r.encode(e)).length>i)if("Q"===t)n=this.splitMimeEncodedString(n,i).join("?= =?"+s+"?"+t+"?");else{let e=[],a="";for(let t=0,s=n.length;t<s;t++){let o=n.charAt(t);/[\ud83c\ud83d\ud83e]/.test(o)&&t<s-1&&(o+=n.charAt(++t)),Buffer.byteLength(a+o)<=i||0===t?a+=o:(e.push(r.encode(a)),a=o)}a&&e.push(r.encode(a)),n=e.length>1?e.join("?= =?"+s+"?"+t+"?"):e.join("")}else"B"===t&&(n=r.encode(e));return"=?"+s+"?"+t+"?"+n+("?="===n.substr(-2)?"":"?=")},encodeWords(e,t,i,r){i=i||0;let a=e.match(/(?:^|\s)([^\s]*["\u0080-\uFFFF])/);if(!a)return e;if(r)return this.encodeWord(e,t,i);let n=e.match(/(["\u0080-\uFFFF][^\s]*)[^"\u0080-\uFFFF]*$/);if(!n)return e;let s=a.index+(a[0].match(/[^\s]/)||{index:0}).index,o=n.index+(n[1]||"").length;return(s?e.substr(0,s):"")+this.encodeWord(e.substring(s,o),t||"Q",i)+(o<e.length?e.substr(o):"")},buildHeaderValue(e){let t=[];return Object.keys(e.params||{}).forEach(i=>{let r=e.params[i];!this.isPlainText(r,!0)||r.length>=75?this.buildHeaderParam(i,r,50).forEach(e=>{/[\s"\\;:/=(),<>@[\]?]|^[-']|'$/.test(e.value)&&"*"!==e.key.substr(-1)?t.push(e.key+"="+JSON.stringify(e.value)):t.push(e.key+"="+e.value)}):/[\s'"\\;:/=(),<>@[\]?]|^-/.test(r)?t.push(i+"="+JSON.stringify(r)):t.push(i+"="+r)}),e.value+(t.length?"; "+t.join("; "):"")},buildHeaderParam(e,t,i){let r,a,n,s,o,l,d=[],c="string"==typeof t?t:(t||"").toString(),u=0;if(i=i||50,this.isPlainText(t,!0)){if(c.length<=i)return[{key:e,value:c}];(c=c.replace(RegExp(".{"+i+"}","g"),e=>(d.push({line:e}),"")))&&d.push({line:c})}else{if(/[\uD800-\uDBFF]/.test(c)){for(o=0,r=[],l=c.length;o<l;o++)(n=(a=c.charAt(o)).charCodeAt(0))>=55296&&n<=56319&&o<l-1?(a+=c.charAt(o+1),r.push(a),o++):r.push(a);c=r}s="utf-8''";let e=!0;for(o=0,u=0,l=c.length;o<l;o++){if(a=c[o],e)a=this.safeEncodeURIComponent(a);else if((a=" "===a?a:this.safeEncodeURIComponent(a))!==c[o])if((this.safeEncodeURIComponent(s)+a).length>=i)d.push({line:s,encoded:e}),s="",u=o-1;else{e=!0,o=u,s="";continue}(s+a).length>=i?(d.push({line:s,encoded:e}),s=a=" "===c[o]?" ":this.safeEncodeURIComponent(c[o]),a===c[o]?(e=!1,u=o-1):e=!0):s+=a}s&&d.push({line:s,encoded:e})}return d.map((t,i)=>({key:e+"*"+i+(t.encoded?"*":""),value:t.line}))},parseHeaderValue(e){let t,i={value:!1,params:{}},r=!1,a="",n="value",s=!1,o=!1;for(let l=0,d=e.length;l<d;l++)if(t=e.charAt(l),"key"===n){if("="===t){r=a.trim().toLowerCase(),n="value",a="";continue}a+=t}else{if(o)a+=t;else if("\\"===t){o=!0;continue}else s&&t===s?s=!1:s||'"'!==t?s||";"!==t?a+=t:(!1===r?i.value=a.trim():i.params[r]=a.trim(),n="key",a=""):s=t;o=!1}return"value"===n?!1===r?i.value=a.trim():i.params[r]=a.trim():a.trim()&&(i.params[a.trim().toLowerCase()]=""),Object.keys(i.params).forEach(e=>{let t,r,a,n;(a=e.match(/(\*(\d+)|\*(\d+)\*|\*)$/))&&(t=e.substr(0,a.index),r=Number(a[2]||a[3])||0,i.params[t]&&"object"==typeof i.params[t]||(i.params[t]={charset:!1,values:[]}),n=i.params[e],0===r&&"*"===a[0].substr(-1)&&(a=n.match(/^([^']*)'[^']*'(.*)$/))&&(i.params[t].charset=a[1]||"iso-8859-1",n=a[2]),i.params[t].values[r]=n,delete i.params[e])}),Object.keys(i.params).forEach(e=>{let t;i.params[e]&&Array.isArray(i.params[e].values)&&(t=i.params[e].values.map(e=>e||"").join(""),i.params[e].charset?i.params[e]="=?"+i.params[e].charset+"?Q?"+t.replace(/[=?_\s]/g,e=>{let t=e.charCodeAt(0).toString(16);return" "===e?"_":"%"+(t.length<2?"0":"")+t}).replace(/%/g,"=")+"?=":i.params[e]=t)}),i},detectExtension:e=>n.detectExtension(e),detectMimeType:e=>n.detectMimeType(e),foldLines(e,t,i){e=(e||"").toString(),t=t||76;let r=0,a=e.length,n="",s,o;for(;r<a;){if((s=e.substr(r,t)).length<t){n+=s;break}if(o=s.match(/^[^\n\r]*(\r?\n|\r)/)){n+=s=o[0],r+=s.length;continue}(o=s.match(/(\s+)[^\s]*$/))&&o[0].length-(i?(o[1]||"").length:0)<s.length?s=s.substr(0,s.length-(o[0].length-(i?(o[1]||"").length:0))):(o=e.substr(r+s.length).match(/^[^\s]+(\s*)/))&&(s+=o[0].substr(0,o[0].length-(i?0:(o[1]||"").length))),n+=s,(r+=s.length)<a&&(n+="\r\n")}return n},splitMimeEncodedString:(e,t)=>{let i,r,a,n,s=[];for(t=Math.max(t||0,12);e.length;){for((r=(i=e.substr(0,t)).match(/[=][0-9A-F]?$/i))&&(i=i.substr(0,r.index)),n=!1;!n;)n=!0,(r=e.substr(i.length).match(/^[=]([0-9A-F]{2})/i))&&(a=parseInt(r[1],16))<194&&a>127&&(i=i.substr(0,i.length-3),n=!1);i.length&&s.push(i),e=e.substr(i.length)}return s},encodeURICharComponent:e=>{let t="",i=e.charCodeAt(0).toString(16).toUpperCase();if(i.length%2&&(i="0"+i),i.length>2)for(let e=0,r=i.length/2;e<r;e++)t+="%"+i.substr(e,2);else t+="%"+i;return t},safeEncodeURIComponent(e){e=(e||"").toString();try{e=encodeURIComponent(e)}catch(t){return e.replace(/[^\x00-\x1F *'()<>@,;:\\"[\]?=\u007F-\uFFFF]+/g,"")}return e.replace(/[\x00-\x1F *'()<>@,;:\\"[\]?=\u007F-\uFFFF]/g,e=>this.encodeURICharComponent(e))}}},69985,(e,t,i)=>{"use strict";class r{constructor(e){this.str=(e||"").toString(),this.operatorCurrent="",this.operatorExpecting="",this.node=null,this.escaped=!1,this.list=[],this.operators={'"':'"',"(":")","<":">",",":"",":":";",";":""}}tokenize(){let e=[];for(let e=0,t=this.str.length;e<t;e++){let i=this.str.charAt(e),r=e<t-1?this.str.charAt(e+1):null;this.checkChar(i,r)}return this.list.forEach(t=>{t.value=(t.value||"").toString().trim(),t.value&&e.push(t)}),e}checkChar(e,t){if(this.escaped);else if(e===this.operatorExpecting){this.node={type:"operator",value:e},t&&![" ","	","\r","\n",",",";"].includes(t)&&(this.node.noBreak=!0),this.list.push(this.node),this.node=null,this.operatorExpecting="",this.escaped=!1;return}else if(!this.operatorExpecting&&e in this.operators){this.node={type:"operator",value:e},this.list.push(this.node),this.node=null,this.operatorExpecting=this.operators[e],this.escaped=!1;return}else if(['"',"'"].includes(this.operatorExpecting)&&"\\"===e){this.escaped=!0;return}this.node||(this.node={type:"text",value:""},this.list.push(this.node)),"\n"===e&&(e=" "),(e.charCodeAt(0)>=33||[" ","	"].includes(e))&&(this.node.value+=e),this.escaped=!1}}t.exports=function e(t,i){i=i||{};let a=new r(t).tokenize(),n=[],s=[],o=[];if(a.forEach(e=>{"operator"===e.type&&(","===e.value||";"===e.value)?(s.length&&n.push(s),s=[]):s.push(e)}),s.length&&n.push(s),n.forEach(t=>{(t=function(t){let i,r,a,n=!1,s="text",o=[],l={address:[],comment:[],group:[],text:[]};for(r=0,a=t.length;r<a;r++){let e=t[r],i=r?t[r-1]:null;if("operator"===e.type)switch(e.value){case"<":s="address";break;case"(":s="comment";break;case":":s="group",n=!0;break;default:s="text"}else e.value&&("address"===s&&(e.value=e.value.replace(/^[^<]*<\s*/,"")),i&&i.noBreak&&l[s].length?l[s][l[s].length-1]+=e.value:l[s].push(e.value))}if(!l.text.length&&l.comment.length&&(l.text=l.comment,l.comment=[]),n)l.text=l.text.join(" "),o.push({name:l.text||i&&i.name,group:l.group.length?e(l.group.join(",")):[]});else{if(!l.address.length&&l.text.length){for(r=l.text.length-1;r>=0;r--)if(l.text[r].match(/^[^@\s]+@[^@\s]+$/)){l.address=l.text.splice(r,1);break}let e=function(e){return l.address.length?e:(l.address=[e.trim()]," ")};if(!l.address.length)for(r=l.text.length-1;r>=0&&(l.text[r]=l.text[r].replace(/\s*\b[^@\s]+@[^\s]+\b\s*/,e).trim(),!l.address.length);r--);}if(!l.text.length&&l.comment.length&&(l.text=l.comment,l.comment=[]),l.address.length>1&&(l.text=l.text.concat(l.address.splice(1))),l.text=l.text.join(" "),l.address=l.address.join(" "),!l.address&&n)return[];(i={address:l.address||l.text||"",name:l.text||l.address||""}).address===i.name&&((i.address||"").match(/@/)?i.name="":i.address=""),o.push(i)}return o}(t)).length&&(o=o.concat(t))}),i.flatten){let e=[],t=i=>{i.forEach(i=>{if(i.group)return t(i.group);e.push(i)})};return t(o),e}return o}},42181,(e,t,i)=>{"use strict";let r=e.r(88947).Transform;t.exports=class extends r{constructor(){super(),this.lastByte=!1}_transform(e,t,i){e.length&&(this.lastByte=e[e.length-1]),this.push(e),i()}_flush(e){return 10===this.lastByte||(13===this.lastByte?this.push(Buffer.from("\n")):this.push(Buffer.from("\r\n"))),e()}}},74133,(e,t,i)=>{"use strict";let r=e.r(88947).Transform;t.exports=class extends r{constructor(e){super(e),this.options=e||{},this.lastByte=!1}_transform(e,t,i){let r,a=0;for(let t=0,i=e.length;t<i;t++)10===e[t]&&(t&&13!==e[t-1]||!t&&13!==this.lastByte)&&(t>a&&(r=e.slice(a,t),this.push(r)),this.push(Buffer.from("\r\n")),a=t+1);a&&a<e.length?(r=e.slice(a),this.push(r)):a||this.push(e),this.lastByte=e[e.length-1],i()}}},86065,(e,t,i)=>{"use strict";let r=e.r(88947).Transform;t.exports=class extends r{constructor(e){super(e),this.options=e||{}}_transform(e,t,i){let r,a=0;for(let t=0,i=e.length;t<i;t++)13===e[t]&&(r=e.slice(a,t),a=t+1,this.push(r));a&&a<e.length?(r=e.slice(a),this.push(r)):a||this.push(e),i()}}},97676,(e,t,i)=>{"use strict";let r=e.r(54799),a=e.r(22734),n=e.r(84140),s=e.r(88947).PassThrough,o=e.r(14173),l=e.r(1204),d=e.r(63275),c=e.r(20511),u=e.r(69985),p=e.r(13970),h=e.r(42181),m=e.r(74133),f=e.r(86065);class y{constructor(e,t){this.nodeCounter=0,t=t||{},this.baseBoundary=t.baseBoundary||r.randomBytes(8).toString("hex"),this.boundaryPrefix=t.boundaryPrefix||"--_NmP",this.disableFileAccess=!!t.disableFileAccess,this.disableUrlAccess=!!t.disableUrlAccess,this.normalizeHeaderKey=t.normalizeHeaderKey,this.date=new Date,this.rootNode=t.rootNode||this,this.keepBcc=!!t.keepBcc,t.filename&&(this.filename=t.filename,e||(e=l.detectMimeType(this.filename.split(".").pop()))),this.textEncoding=(t.textEncoding||"").toString().trim().charAt(0).toUpperCase(),this.parentNode=t.parentNode,this.hostname=t.hostname,this.newline=t.newline,this.childNodes=[],this._nodeId=++this.rootNode.nodeCounter,this._headers=[],this._isPlainText=!1,this._hasLongLines=!1,this._envelope=!1,this._raw=!1,this._transforms=[],this._processFuncs=[],e&&this.setHeader("Content-Type",e)}createChild(e,t){t||"object"!=typeof e||(t=e,e=void 0);let i=new y(e,t);return this.appendChild(i),i}appendChild(e){return e.rootNode!==this.rootNode&&(e.rootNode=this.rootNode,e._nodeId=++this.rootNode.nodeCounter),e.parentNode=this,this.childNodes.push(e),e}replace(e){return e===this?this:(this.parentNode.childNodes.forEach((t,i)=>{t===this&&(e.rootNode=this.rootNode,e.parentNode=this.parentNode,e._nodeId=this._nodeId,this.rootNode=this,this.parentNode=void 0,e.parentNode.childNodes[i]=e)}),e)}remove(){if(!this.parentNode)return this;for(let e=this.parentNode.childNodes.length-1;e>=0;e--)if(this.parentNode.childNodes[e]===this)return this.parentNode.childNodes.splice(e,1),this.parentNode=void 0,this.rootNode=this,this}setHeader(e,t){let i=!1,r;if(!t&&e&&"object"==typeof e)return e.key&&"value"in e?this.setHeader(e.key,e.value):Array.isArray(e)?e.forEach(e=>{this.setHeader(e.key,e.value)}):Object.keys(e).forEach(t=>{this.setHeader(t,e[t])}),this;r={key:e=this._normalizeHeaderKey(e),value:t};for(let t=0,a=this._headers.length;t<a;t++)this._headers[t].key===e&&(i?(this._headers.splice(t,1),t--,a--):(this._headers[t]=r,i=!0));return i||this._headers.push(r),this}addHeader(e,t){return!t&&e&&"object"==typeof e?e.key&&e.value?this.addHeader(e.key,e.value):Array.isArray(e)?e.forEach(e=>{this.addHeader(e.key,e.value)}):Object.keys(e).forEach(t=>{this.addHeader(t,e[t])}):Array.isArray(t)?t.forEach(t=>{this.addHeader(e,t)}):this._headers.push({key:this._normalizeHeaderKey(e),value:t}),this}getHeader(e){e=this._normalizeHeaderKey(e);for(let t=0,i=this._headers.length;t<i;t++)if(this._headers[t].key===e)return this._headers[t].value}setContent(e){return this.content=e,"function"==typeof this.content.pipe?(this._contentErrorHandler=e=>{this.content.removeListener("error",this._contentErrorHandler),this.content=e},this.content.once("error",this._contentErrorHandler)):"string"==typeof this.content&&(this._isPlainText=l.isPlainText(this.content),this._isPlainText&&l.hasLongerLines(this.content,76)&&(this._hasLongLines=!0)),this}build(e){let t;e||(t=new Promise((t,i)=>{e=o.callbackPromise(t,i)}));let i=this.createReadStream(),r=[],a=0,n=!1;return i.on("readable",()=>{let e;for(;null!==(e=i.read());)r.push(e),a+=e.length}),i.once("error",t=>{if(!n)return n=!0,e(t)}),i.once("end",t=>{if(!n)return n=!0,t&&t.length&&(r.push(t),a+=t.length),e(null,Buffer.concat(r,a))}),t}getTransferEncoding(){let e=!1,t=(this.getHeader("Content-Type")||"").toString().toLowerCase().trim();return this.content&&((e=(this.getHeader("Content-Transfer-Encoding")||"").toString().toLowerCase().trim())&&["base64","quoted-printable"].includes(e)||(/^text\//i.test(t)?e=this._isPlainText&&!this._hasLongLines?"7bit":"string"==typeof this.content||this.content instanceof Buffer?"Q"===this._getTextEncoding(this.content)?"quoted-printable":"base64":"B"===this.textEncoding?"base64":"quoted-printable":/^(multipart|message)\//i.test(t)||(e=e||"base64"))),e}buildHeaders(){let e=this.getTransferEncoding(),t=[];if(e&&this.setHeader("Content-Transfer-Encoding",e),this.filename&&!this.getHeader("Content-Disposition")&&this.setHeader("Content-Disposition","attachment"),this.rootNode===this){this.getHeader("Date")||this.setHeader("Date",this.date.toUTCString().replace(/GMT/,"+0000")),this.messageId(),this.getHeader("MIME-Version")||this.setHeader("MIME-Version","1.0");for(let e=this._headers.length-2;e>=0;e--){let t=this._headers[e];"Content-Type"===t.key&&(this._headers.splice(e,1),this._headers.push(t))}}return this._headers.forEach(e=>{let i,r,a=e.key,n=e.value,s={};if(!n||"object"!=typeof n||["From","Sender","To","Cc","Bcc","Reply-To","Date","References"].includes(a)||(Object.keys(n).forEach(e=>{"value"!==e&&(s[e]=n[e])}),(n=(n.value||"").toString()).trim())){if(s.prepared)return void(s.foldLines?t.push(l.foldLines(a+": "+n)):t.push(a+": "+n));switch(e.key){case"Content-Disposition":i=l.parseHeaderValue(n),this.filename&&(i.params.filename=this.filename),n=l.buildHeaderValue(i);break;case"Content-Type":i=l.parseHeaderValue(n),this._handleContentType(i),i.value.match(/^text\/plain\b/)&&"string"==typeof this.content&&/[\u0080-\uFFFF]/.test(this.content)&&(i.params.charset="utf-8"),n=l.buildHeaderValue(i),this.filename&&(((r=this._encodeWords(this.filename))!==this.filename||/[\s'"\\;:/=(),<>@[\]?]|^-/.test(r))&&(r='"'+r+'"'),n+="; name="+r);break;case"Bcc":if(!this.keepBcc)return}if(((n=this._encodeHeaderValue(a,n))||"").toString().trim()){if("function"==typeof this.normalizeHeaderKey){let e=this.normalizeHeaderKey(a,n);e&&"string"==typeof e&&e.length&&(a=e)}t.push(l.foldLines(a+": "+n,76))}}}),t.join("\r\n")}createReadStream(e){let t,i=new s(e=e||{}),r=i;this.stream(i,e,e=>{e?r.emit("error",e):i.end()});for(let e=0,i=this._transforms.length;e<i;e++)t="function"==typeof this._transforms[e]?this._transforms[e]():this._transforms[e],r.once("error",e=>{t.emit("error",e)}),r=r.pipe(t);t=new h,r.once("error",e=>{t.emit("error",e)}),r=r.pipe(t);for(let e=0,i=this._processFuncs.length;e<i;e++)r=(t=this._processFuncs[e])(r);if(this.newline){let e=["win","windows","dos","\r\n"].includes(this.newline.toString().toLowerCase())?new m:new f,t=r.pipe(e);return r.on("error",e=>t.emit("error",e)),t}return r}transform(e){this._transforms.push(e)}processFunc(e){this._processFuncs.push(e)}stream(e,t,i){let r,a,n=this.getTransferEncoding(),s=!1,o=e=>{s||(s=!0,i(e))},l=()=>{let i=0,r=()=>{if(i>=this.childNodes.length)return e.write("\r\n--"+this.boundary+"--\r\n"),o();let a=this.childNodes[i++];e.write((i>1?"\r\n":"")+"--"+this.boundary+"\r\n"),a.stream(e,t,e=>{if(e)return o(e);setImmediate(r)})};if(!this.multipart)return o();setImmediate(r)},u=()=>{if(!this.content)return setImmediate(l);{if("[object Error]"===Object.prototype.toString.call(this.content))return o(this.content);"function"==typeof this.content.pipe&&(this.content.removeListener("error",this._contentErrorHandler),this._contentErrorHandler=e=>o(e),this.content.once("error",this._contentErrorHandler));let i=()=>{["quoted-printable","base64"].includes(n)?((r=new("base64"===n?c:d).Encoder(t)).pipe(e,{end:!1}),r.once("end",l),r.once("error",e=>o(e)),(a=this._getStream(this.content)).pipe(r)):((a=this._getStream(this.content)).pipe(e,{end:!1}),a.once("end",l)),a.once("error",e=>o(e))};if(this.content._resolve){let e=[],t=0,r=!1,a=this._getStream(this.content);a.on("error",e=>{r||(r=!0,o(e))}),a.on("readable",()=>{let i;for(;null!==(i=a.read());)e.push(i),t+=i.length}),a.on("end",()=>{r||(r=!0,this.content._resolve=!1,this.content._resolvedValue=Buffer.concat(e,t),setImmediate(i))})}else setImmediate(i);return}};this._raw?setImmediate(()=>{if("[object Error]"===Object.prototype.toString.call(this._raw))return o(this._raw);"function"==typeof this._raw.pipe&&this._raw.removeListener("error",this._contentErrorHandler);let t=this._getStream(this._raw);t.pipe(e,{end:!1}),t.on("error",t=>e.emit("error",t)),t.on("end",l)}):(e.write(this.buildHeaders()+"\r\n\r\n"),setImmediate(u))}setEnvelope(e){let t;this._envelope={from:!1,to:[]},e.from&&(t=[],this._convertAddresses(this._parseAddresses(e.from),t),(t=t.filter(e=>e&&e.address)).length&&t[0]&&(this._envelope.from=t[0].address)),["to","cc","bcc"].forEach(t=>{e[t]&&this._convertAddresses(this._parseAddresses(e[t]),this._envelope.to)}),this._envelope.to=this._envelope.to.map(e=>e.address).filter(e=>e);let i=["to","cc","bcc","from"];return Object.keys(e).forEach(t=>{i.includes(t)||(this._envelope[t]=e[t])}),this}getAddresses(){let e={};return this._headers.forEach(t=>{let i=t.key.toLowerCase();["from","sender","reply-to","to","cc","bcc"].includes(i)&&(Array.isArray(e[i])||(e[i]=[]),this._convertAddresses(this._parseAddresses(t.value),e[i]))}),e}getEnvelope(){if(this._envelope)return this._envelope;let e={from:!1,to:[]};return this._headers.forEach(t=>{let i=[];"From"===t.key||!e.from&&["Reply-To","Sender"].includes(t.key)?(this._convertAddresses(this._parseAddresses(t.value),i),i.length&&i[0]&&(e.from=i[0].address)):["To","Cc","Bcc"].includes(t.key)&&this._convertAddresses(this._parseAddresses(t.value),e.to)}),e.to=e.to.map(e=>e.address),e}messageId(){let e=this.getHeader("Message-ID");return e||(e=this._generateMessageId(),this.setHeader("Message-ID",e)),e}setRaw(e){return this._raw=e,this._raw&&"function"==typeof this._raw.pipe&&(this._contentErrorHandler=e=>{this._raw.removeListener("error",this._contentErrorHandler),this._raw=e},this._raw.once("error",this._contentErrorHandler)),this}_getStream(e){let t;return e._resolvedValue?(t=new s,setImmediate(()=>{try{t.end(e._resolvedValue)}catch(e){t.emit("error",e)}}),t):"function"==typeof e.pipe?e:e&&"string"==typeof e.path&&!e.href?this.disableFileAccess?(t=new s,setImmediate(()=>t.emit("error",Error("File access rejected for "+e.path))),t):a.createReadStream(e.path):e&&"string"==typeof e.href?this.disableUrlAccess?(t=new s,setImmediate(()=>t.emit("error",Error("Url access rejected for "+e.href))),t):p(e.href,{headers:e.httpHeaders}):(t=new s,setImmediate(()=>{try{t.end(e||"")}catch(e){t.emit("error",e)}}),t)}_parseAddresses(e){return[].concat.apply([],[].concat(e).map(e=>e&&e.address?(e.address=this._normalizeAddress(e.address),e.name=e.name||"",[e]):u(e)))}_normalizeHeaderKey(e){return e=(e||"").toString().replace(/\r?\n|\r/g," ").trim().toLowerCase().replace(/^X-SMTPAPI$|^(MIME|DKIM|ARC|BIMI)\b|^[a-z]|-(SPF|FBL|ID|MD5)$|-[a-z]/gi,e=>e.toUpperCase()).replace(/^Content-Features$/i,"Content-features")}_handleContentType(e){this.contentType=e.value.trim().toLowerCase(),this.multipart=!!/^multipart\//i.test(this.contentType)&&this.contentType.substr(this.contentType.indexOf("/")+1),this.multipart?this.boundary=e.params.boundary=e.params.boundary||this.boundary||this._generateBoundary():this.boundary=!1}_generateBoundary(){return this.rootNode.boundaryPrefix+"-"+this.rootNode.baseBoundary+"-Part_"+this._nodeId}_encodeHeaderValue(e,t){switch(e=this._normalizeHeaderKey(e)){case"From":case"Sender":case"To":case"Cc":case"Bcc":case"Reply-To":return this._convertAddresses(this._parseAddresses(t));case"Message-ID":case"In-Reply-To":case"Content-Id":return"<"!==(t=(t||"").toString().replace(/\r?\n|\r/g," ")).charAt(0)&&(t="<"+t),">"!==t.charAt(t.length-1)&&(t+=">"),t;case"References":return(t=[].concat.apply([],[].concat(t||"").map(e=>(e=(e||"").toString().replace(/\r?\n|\r/g," ").trim()).replace(/<[^>]*>/g,e=>e.replace(/\s/g,"")).split(/\s+/))).map(e=>("<"!==e.charAt(0)&&(e="<"+e),">"!==e.charAt(e.length-1)&&(e+=">"),e))).join(" ").trim();case"Date":if("[object Date]"===Object.prototype.toString.call(t))return t.toUTCString().replace(/GMT/,"+0000");return t=(t||"").toString().replace(/\r?\n|\r/g," "),this._encodeWords(t);case"Content-Type":case"Content-Disposition":return(t||"").toString().replace(/\r?\n|\r/g," ");default:return t=(t||"").toString().replace(/\r?\n|\r/g," "),this._encodeWords(t)}}_convertAddresses(e,t){let i=[];return t=t||[],[].concat(e||[]).forEach(e=>{if(e.address)e.address=this._normalizeAddress(e.address),e.name?e.name&&i.push(`${this._encodeAddressName(e.name)} <${e.address}>`):i.push(e.address.indexOf(" ")>=0?`<${e.address}>`:`${e.address}`),e.address&&!t.filter(t=>t.address===e.address).length&&t.push(e);else if(e.group){let r=(e.group.length?this._convertAddresses(e.group,t):"").trim();i.push(`${this._encodeAddressName(e.name)}:${r};`)}}),i.join(", ")}_normalizeAddress(e){let t,i=(e=(e||"").toString().replace(/[\x00-\x1F<>]+/g," ").trim()).lastIndexOf("@");if(i<0)return e;let r=e.substr(0,i),a=e.substr(i+1);try{t=n.toASCII(a.toLowerCase())}catch(e){}return r.indexOf(" ")>=0&&('"'!==r.charAt(0)&&(r='"'+r),'"'!==r.substr(-1)&&(r+='"')),`${r}@${t}`}_encodeAddressName(e){if(!/^[\w ]*$/.test(e))if(/^[\x20-\x7e]*$/.test(e))return'"'+e.replace(/([\\"])/g,"\\$1")+'"';else return l.encodeWord(e,this._getTextEncoding(e),52);return e}_encodeWords(e){return l.encodeWords(e,this._getTextEncoding(e),52,!0)}_getTextEncoding(e){e=(e||"").toString();let t=this.textEncoding;return t||(t=(e.match(/[\x00-\x08\x0B\x0C\x0E-\x1F\u0080-\uFFFF]/g)||[]).length<(e.match(/[a-z]/gi)||[]).length?"Q":"B"),t}_generateMessageId(){return"<"+[2,2,2,6].reduce((e,t)=>e+"-"+r.randomBytes(t).toString("hex"),r.randomBytes(4).toString("hex"))+"@"+(this.getEnvelope().from||this.hostname||"localhost").split("@").pop()+">"}}t.exports=y},65903,(e,t,i)=>{"use strict";let r=e.r(97676),a=e.r(1204),n=e.r(14173).parseDataURI;t.exports=class{constructor(e){this.mail=e||{},this.message=!1}compile(){return this._alternatives=this.getAlternatives(),this._htmlNode=this._alternatives.filter(e=>/^text\/html\b/i.test(e.contentType)).pop(),this._attachments=this.getAttachments(!!this._htmlNode),this._useRelated=!!(this._htmlNode&&this._attachments.related.length),this._useAlternative=this._alternatives.length>1,this._useMixed=this._attachments.attached.length>1||this._alternatives.length&&1===this._attachments.attached.length,this.mail.raw?this.message=new r("message/rfc822",{newline:this.mail.newline}).setRaw(this.mail.raw):this._useMixed?this.message=this._createMixed():this._useAlternative?this.message=this._createAlternative():this._useRelated?this.message=this._createRelated():this.message=this._createContentNode(!1,[].concat(this._alternatives||[]).concat(this._attachments.attached||[]).shift()||{contentType:"text/plain",content:""}),this.mail.headers&&this.message.addHeader(this.mail.headers),["from","sender","to","cc","bcc","reply-to","in-reply-to","references","subject","message-id","date"].forEach(e=>{let t=e.replace(/-(\w)/g,(e,t)=>t.toUpperCase());this.mail[t]&&this.message.setHeader(e,this.mail[t])}),this.mail.envelope&&this.message.setEnvelope(this.mail.envelope),this.message.messageId(),this.message}getAttachments(e){let t,i,r=[].concat(this.mail.attachments||[]).map((e,t)=>{let i,r=/^message\//i.test(e.contentType);/^data:/i.test(e.path||e.href)&&(e=this._processDataUrl(e));let n=e.contentType||a.detectMimeType(e.filename||e.path||e.href||"bin"),s=/^image\//i.test(n);return i={contentType:n,contentDisposition:e.contentDisposition||(r||s&&e.cid?"inline":"attachment"),contentTransferEncoding:"contentTransferEncoding"in e?e.contentTransferEncoding:"base64"},e.filename?i.filename=e.filename:!r&&!1!==e.filename&&(i.filename=(e.path||e.href||"").split("/").pop().split("?").shift()||"attachment-"+(t+1),0>i.filename.indexOf(".")&&(i.filename+="."+a.detectExtension(i.contentType))),/^https?:\/\//i.test(e.path)&&(e.href=e.path,e.path=void 0),e.cid&&(i.cid=e.cid),e.raw?i.raw=e.raw:e.path?i.content={path:e.path}:e.href?i.content={href:e.href,httpHeaders:e.httpHeaders}:i.content=e.content||"",e.encoding&&(i.encoding=e.encoding),e.headers&&(i.headers=e.headers),i});return(this.mail.icalEvent&&(t="object"==typeof this.mail.icalEvent&&(this.mail.icalEvent.content||this.mail.icalEvent.path||this.mail.icalEvent.href||this.mail.icalEvent.raw)?this.mail.icalEvent:{content:this.mail.icalEvent},i={},Object.keys(t).forEach(e=>{i[e]=t[e]}),i.contentType="application/ics",i.headers||(i.headers={}),i.filename=i.filename||"invite.ics",i.headers["Content-Disposition"]="attachment",i.headers["Content-Transfer-Encoding"]="base64"),e)?{attached:r.filter(e=>!e.cid).concat(i||[]),related:r.filter(e=>!!e.cid)}:{attached:r.concat(i||[]),related:[]}}getAlternatives(){let e=[],t,i,r,n,s,o;return this.mail.text&&((t="object"==typeof this.mail.text&&(this.mail.text.content||this.mail.text.path||this.mail.text.href||this.mail.text.raw)?this.mail.text:{content:this.mail.text}).contentType="text/plain; charset=utf-8"),this.mail.watchHtml&&((r="object"==typeof this.mail.watchHtml&&(this.mail.watchHtml.content||this.mail.watchHtml.path||this.mail.watchHtml.href||this.mail.watchHtml.raw)?this.mail.watchHtml:{content:this.mail.watchHtml}).contentType="text/watch-html; charset=utf-8"),this.mail.amp&&((n="object"==typeof this.mail.amp&&(this.mail.amp.content||this.mail.amp.path||this.mail.amp.href||this.mail.amp.raw)?this.mail.amp:{content:this.mail.amp}).contentType="text/x-amp-html; charset=utf-8"),this.mail.icalEvent&&(s="object"==typeof this.mail.icalEvent&&(this.mail.icalEvent.content||this.mail.icalEvent.path||this.mail.icalEvent.href||this.mail.icalEvent.raw)?this.mail.icalEvent:{content:this.mail.icalEvent},o={},Object.keys(s).forEach(e=>{o[e]=s[e]}),o.content&&"object"==typeof o.content&&(o.content._resolve=!0),o.filename=!1,o.contentType="text/calendar; charset=utf-8; method="+(o.method||"PUBLISH").toString().trim().toUpperCase(),o.headers||(o.headers={})),this.mail.html&&((i="object"==typeof this.mail.html&&(this.mail.html.content||this.mail.html.path||this.mail.html.href||this.mail.html.raw)?this.mail.html:{content:this.mail.html}).contentType="text/html; charset=utf-8"),[].concat(t||[]).concat(r||[]).concat(n||[]).concat(i||[]).concat(o||[]).concat(this.mail.alternatives||[]).forEach(t=>{let i;/^data:/i.test(t.path||t.href)&&(t=this._processDataUrl(t)),i={contentType:t.contentType||a.detectMimeType(t.filename||t.path||t.href||"txt"),contentTransferEncoding:t.contentTransferEncoding},t.filename&&(i.filename=t.filename),/^https?:\/\//i.test(t.path)&&(t.href=t.path,t.path=void 0),t.raw?i.raw=t.raw:t.path?i.content={path:t.path}:t.href?i.content={href:t.href}:i.content=t.content||"",t.encoding&&(i.encoding=t.encoding),t.headers&&(i.headers=t.headers),e.push(i)}),e}_createMixed(e){let t;return t=e?e.createChild("multipart/mixed",{disableUrlAccess:this.mail.disableUrlAccess,disableFileAccess:this.mail.disableFileAccess,normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}):new r("multipart/mixed",{baseBoundary:this.mail.baseBoundary,textEncoding:this.mail.textEncoding,boundaryPrefix:this.mail.boundaryPrefix,disableUrlAccess:this.mail.disableUrlAccess,disableFileAccess:this.mail.disableFileAccess,normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}),this._useAlternative?this._createAlternative(t):this._useRelated&&this._createRelated(t),[].concat(!this._useAlternative&&this._alternatives||[]).concat(this._attachments.attached||[]).forEach(e=>{this._useRelated&&e===this._htmlNode||this._createContentNode(t,e)}),t}_createAlternative(e){let t;return t=e?e.createChild("multipart/alternative",{disableUrlAccess:this.mail.disableUrlAccess,disableFileAccess:this.mail.disableFileAccess,normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}):new r("multipart/alternative",{baseBoundary:this.mail.baseBoundary,textEncoding:this.mail.textEncoding,boundaryPrefix:this.mail.boundaryPrefix,disableUrlAccess:this.mail.disableUrlAccess,disableFileAccess:this.mail.disableFileAccess,normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}),this._alternatives.forEach(e=>{this._useRelated&&this._htmlNode===e?this._createRelated(t):this._createContentNode(t,e)}),t}_createRelated(e){let t;return t=e?e.createChild('multipart/related; type="text/html"',{disableUrlAccess:this.mail.disableUrlAccess,disableFileAccess:this.mail.disableFileAccess,normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}):new r('multipart/related; type="text/html"',{baseBoundary:this.mail.baseBoundary,textEncoding:this.mail.textEncoding,boundaryPrefix:this.mail.boundaryPrefix,disableUrlAccess:this.mail.disableUrlAccess,disableFileAccess:this.mail.disableFileAccess,normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}),this._createContentNode(t,this._htmlNode),this._attachments.related.forEach(e=>this._createContentNode(t,e)),t}_createContentNode(e,t){let i;(t=t||{}).content=t.content||"";let a=(t.encoding||"utf8").toString().toLowerCase().replace(/[-_\s]/g,"");return i=e?e.createChild(t.contentType,{filename:t.filename,textEncoding:this.mail.textEncoding,disableUrlAccess:this.mail.disableUrlAccess,disableFileAccess:this.mail.disableFileAccess,normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}):new r(t.contentType,{filename:t.filename,baseBoundary:this.mail.baseBoundary,textEncoding:this.mail.textEncoding,boundaryPrefix:this.mail.boundaryPrefix,disableUrlAccess:this.mail.disableUrlAccess,disableFileAccess:this.mail.disableFileAccess,normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}),t.headers&&i.addHeader(t.headers),t.cid&&i.setHeader("Content-Id","<"+t.cid.replace(/[<>]/g,"")+">"),t.contentTransferEncoding?i.setHeader("Content-Transfer-Encoding",t.contentTransferEncoding):this.mail.encoding&&/^text\//i.test(t.contentType)&&i.setHeader("Content-Transfer-Encoding",this.mail.encoding),(!/^text\//i.test(t.contentType)||t.contentDisposition)&&i.setHeader("Content-Disposition",t.contentDisposition||(t.cid&&/^image\//i.test(t.contentType)?"inline":"attachment")),"string"!=typeof t.content||["utf8","usascii","ascii"].includes(a)||(t.content=Buffer.from(t.content,a)),t.raw?i.setRaw(t.raw):i.setContent(t.content),i}_processDataUrl(e){let t;return(e.path||e.href).match(/^data:/)&&(t=n(e.path||e.href)),t&&(e.content=t.data,e.contentType=e.contentType||t.contentType,"path"in e&&(e.path=!1),"href"in e&&(e.href=!1)),e}}},60021,(e,t,i)=>{"use strict";let r=e.r(88947).Transform;t.exports=class extends r{constructor(e){super(e),this.lastBytes=Buffer.alloc(4),this.headersParsed=!1,this.headerBytes=0,this.headerChunks=[],this.rawHeaders=!1,this.bodySize=0}updateLastBytes(e){let t=this.lastBytes.length,i=Math.min(e.length,t);for(let e=0,r=t-i;e<r;e++)this.lastBytes[e]=this.lastBytes[e+i];for(let r=1;r<=i;r++)this.lastBytes[t-r]=e[e.length-r]}checkHeaders(e){if(this.headersParsed)return!0;let t=this.lastBytes.length,i=0;this.curLinePos=0;for(let r=0,a=this.lastBytes.length+e.length;r<a;r++)if(10===(r<t?this.lastBytes[r]:e[r-t])&&r){let a=r-1<t?this.lastBytes[r-1]:e[r-1-t],n=r>1&&(r-2<t?this.lastBytes[r-2]:e[r-2-t]);if(10===a||13===a&&10===n){this.headersParsed=!0,i=r-t+1,this.headerBytes+=i;break}}if(this.headersParsed){if(this.headerChunks.push(e.slice(0,i)),this.rawHeaders=Buffer.concat(this.headerChunks,this.headerBytes),this.headerChunks=null,this.emit("headers",this.parseHeaders()),e.length-1>i){let t=e.slice(i);this.bodySize+=t.length,setImmediate(()=>this.push(t))}return!1}return this.headerBytes+=e.length,this.headerChunks.push(e),this.updateLastBytes(e),!1}_transform(e,t,i){let r;if(!e||!e.length)return i();"string"==typeof e&&(e=Buffer.from(e,t));try{r=this.checkHeaders(e)}catch(e){return i(e)}r&&(this.bodySize+=e.length,this.push(e)),setImmediate(i)}_flush(e){if(this.headerChunks){let e=Buffer.concat(this.headerChunks,this.headerBytes);this.bodySize+=e.length,this.push(e),this.headerChunks=null}e()}parseHeaders(){let e=(this.rawHeaders||"").toString().split(/\r?\n/);for(let t=e.length-1;t>0;t--)/^\s/.test(e[t])&&(e[t-1]+="\n"+e[t],e.splice(t,1));return e.filter(e=>e.trim()).map(e=>({key:e.substr(0,e.indexOf(":")).trim().toLowerCase(),line:e}))}}},44366,(e,t,i)=>{"use strict";let r=e.r(88947).Transform,a=e.r(54799);t.exports=class extends r{constructor(e){super(),e=e||{},this.chunkBuffer=[],this.chunkBufferLen=0,this.bodyHash=a.createHash(e.hashAlgo||"sha1"),this.remainder="",this.byteLength=0,this.debug=e.debug,this._debugBody=!!e.debug&&[]}updateHash(e){let t,i="",r="file";for(let t=e.length-1;t>=0;t--){let a=e[t];if("file"===r&&(10===a||13===a));else if("file"===r&&(9===a||32===a))r="line";else if("line"===r&&(9===a||32===a));else if(("file"===r||"line"===r)&&(r="body",t===e.length-1))break;if(0===t){if("file"===r&&(!this.remainder||/[\r\n]$/.test(this.remainder))||"line"===r&&(!this.remainder||/[ \t]$/.test(this.remainder))){this.remainder+=e.toString("binary");return}else if("line"===r||"file"===r){i=e.toString("binary"),e=!1;break}}if("body"===r){i=e.slice(t+1).toString("binary"),e=e.slice(0,t+1);break}}let a=!!this.remainder;if(e&&!a){for(let t=0,i=e.length;t<i;t++)if(t&&10===e[t]&&13!==e[t-1]){a=!0;break}else if(t&&13===e[t]&&32===e[t-1]){a=!0;break}else if(t&&32===e[t]&&32===e[t-1]){a=!0;break}else if(9===e[t]){a=!0;break}}a?(t=this.remainder+(e?e.toString("binary"):""),this.remainder=i,t=t.replace(/\r?\n/g,"\n").replace(/[ \t]*$/gm,"").replace(/[ \t]+/gm," ").replace(/\n/g,"\r\n"),e=Buffer.from(t,"binary")):i&&(this.remainder=i),this.debug&&this._debugBody.push(e),this.bodyHash.update(e)}_transform(e,t,i){if(!e||!e.length)return i();"string"==typeof e&&(e=Buffer.from(e,t)),this.updateHash(e),this.byteLength+=e.length,this.push(e),i()}_flush(e){/[\r\n]$/.test(this.remainder)&&this.byteLength>2&&this.bodyHash.update(Buffer.from("\r\n")),this.byteLength||this.push(Buffer.from("\r\n")),this.emit("hash",this.bodyHash.digest("base64"),!!this.debug&&Buffer.concat(this._debugBody)),e()}}},55885,(e,t,i)=>{"use strict";let r=e.r(84140),a=e.r(1204),n=e.r(54799);function s(e,t,i){let r=new Set,a=new Set,n=new Map;(i||"").toLowerCase().split(":").forEach(e=>{a.add(e.trim())}),(t||"").toLowerCase().split(":").filter(e=>!a.has(e.trim())).forEach(e=>{r.add(e.trim())});for(let t=e.length-1;t>=0;t--){let i=e[t];r.has(i.key)&&!n.has(i.key)&&n.set(i.key,o(i.line))}let s=[],l=[];return r.forEach(e=>{n.has(e)&&(l.push(e),s.push(e+":"+n.get(e)))}),{headers:s.join("\r\n")+"\r\n",fieldNames:l.join(":")}}function o(e){return e.substr(e.indexOf(":")+1).replace(/\r?\n/g,"").replace(/\s+/g," ").trim()}t.exports=(e,t,i,l)=>{var d,c,u,p,h;let m,f,y,b=s(e,(l=l||{}).headerFieldNames||"From:Sender:Reply-To:Subject:Date:Message-ID:To:Cc:MIME-Version:Content-Type:Content-Transfer-Encoding:Content-ID:Content-Description:Resent-Date:Resent-From:Resent-Sender:Resent-To:Resent-Cc:Resent-Message-ID:In-Reply-To:References:List-Id:List-Help:List-Unsubscribe:List-Subscribe:List-Post:List-Owner:List-Archive",l.skipFields),g=(d=l.domainName,c=l.keySelector,u=b.fieldNames,p=t,h=i,y=["v=1","a=rsa-"+p,"c=relaxed/relaxed","d="+r.toASCII(d),"q=dns/txt","s="+c,"bh="+h,"h="+u].join("; "),a.foldLines("DKIM-Signature: "+y,76)+";\r\n b=");b.headers+="dkim-signature:"+o(g),(m=n.createSign(("rsa-"+t).toUpperCase())).update(b.headers);try{f=m.sign(l.privateKey,"base64")}catch(e){return!1}return g+f.replace(/(^.{73}|.{75}(?!\r?\n|\r))/g,"$&\r\n ").trim()},t.exports.relaxedHeaders=s},23092,(e,t,i)=>{"use strict";let r=e.r(60021),a=e.r(44366),n=e.r(55885),s=e.r(88947).PassThrough,o=e.r(22734),l=e.r(14747),d=e.r(54799);class c{constructor(e,t,i,r){this.options=e||{},this.keys=t,this.cacheTreshold=Number(this.options.cacheTreshold)||131072,this.hashAlgo=this.options.hashAlgo||"sha256",this.cacheDir=this.options.cacheDir||!1,this.chunks=[],this.chunklen=0,this.readPos=0,this.cachePath=!!this.cacheDir&&l.join(this.cacheDir,"message."+Date.now()+"-"+d.randomBytes(14).toString("hex")),this.cache=!1,this.headers=!1,this.bodyHash=!1,this.parser=!1,this.relaxedBody=!1,this.input=i,this.output=r,this.output.usingCache=!1,this.hasErrored=!1,this.input.on("error",e=>{this.hasErrored=!0,this.cleanup(),r.emit("error",e)})}cleanup(){this.cache&&this.cachePath&&o.unlink(this.cachePath,()=>!1)}createReadCache(){this.cache=o.createReadStream(this.cachePath),this.cache.once("error",e=>{this.cleanup(),this.output.emit("error",e)}),this.cache.once("close",()=>{this.cleanup()}),this.cache.pipe(this.output)}sendNextChunk(){if(this.hasErrored)return;if(this.readPos>=this.chunks.length)return this.cache?this.createReadCache():this.output.end();let e=this.chunks[this.readPos++];if(!1===this.output.write(e))return this.output.once("drain",()=>{this.sendNextChunk()});setImmediate(()=>this.sendNextChunk())}sendSignedOutput(){let e=0,t=()=>{if(e>=this.keys.length)return this.output.write(this.parser.rawHeaders),setImmediate(()=>this.sendNextChunk());let i=this.keys[e++],r=n(this.headers,this.hashAlgo,this.bodyHash,{domainName:i.domainName,keySelector:i.keySelector,privateKey:i.privateKey,headerFieldNames:this.options.headerFieldNames,skipFields:this.options.skipFields});return r&&this.output.write(Buffer.from(r+"\r\n")),setImmediate(t)};if(this.bodyHash&&this.headers)return t();this.output.write(this.parser.rawHeaders),this.sendNextChunk()}createWriteCache(){this.output.usingCache=!0,this.cache=o.createWriteStream(this.cachePath),this.cache.once("error",e=>{this.cleanup(),this.relaxedBody.unpipe(this.cache),this.relaxedBody.on("readable",()=>{for(;null!==this.relaxedBody.read(););}),this.hasErrored=!0,this.output.emit("error",e)}),this.cache.once("close",()=>{this.sendSignedOutput()}),this.relaxedBody.removeAllListeners("readable"),this.relaxedBody.pipe(this.cache)}signStream(){this.parser=new r,this.relaxedBody=new a({hashAlgo:this.hashAlgo}),this.parser.on("headers",e=>{this.headers=e}),this.relaxedBody.on("hash",e=>{this.bodyHash=e}),this.relaxedBody.on("readable",()=>{let e;if(!this.cache){for(;null!==(e=this.relaxedBody.read());)if(this.chunks.push(e),this.chunklen+=e.length,this.chunklen>=this.cacheTreshold&&this.cachePath)return this.createWriteCache()}}),this.relaxedBody.on("end",()=>{this.cache||this.sendSignedOutput()}),this.parser.pipe(this.relaxedBody),setImmediate(()=>this.input.pipe(this.parser))}}t.exports=class{constructor(e){this.options=e||{},this.keys=[].concat(this.options.keys||{domainName:e.domainName,keySelector:e.keySelector,privateKey:e.privateKey})}sign(e,t){let i=new s,r=e,a=!1;Buffer.isBuffer(e)?(a=e,r=new s):"string"==typeof e&&(a=Buffer.from(e),r=new s);let n=this.options;t&&Object.keys(t).length&&(n={},Object.keys(this.options||{}).forEach(e=>{n[e]=this.options[e]}),Object.keys(t||{}).forEach(e=>{e in n||(n[e]=t[e])}));let o=new c(n,this.keys,r,i);return setImmediate(()=>{o.signStream(),a&&setImmediate(()=>{r.end(a)})}),i}}},20158,(e,t,i)=>{"use strict";let r=e.r(4446),a=e.r(55004),n=e.r(92509);t.exports=function e(t,i,s,o){let l,d,c,u=n.parse(t);l={host:u.hostname,port:Number(u.port)?Number(u.port):"https:"===u.protocol?443:80},"https:"===u.protocol?(l.rejectUnauthorized=!1,d=a.connect.bind(a)):d=r.connect.bind(r);let p=!1,h=e=>{if(!p){p=!0;try{c.destroy()}catch(e){}o(e)}},m=()=>{let e=Error("Proxy socket timed out");e.code="ETIMEDOUT",h(e)};(c=d(l,()=>{if(p)return;let e={Host:s+":"+i,Connection:"close"};u.auth&&(e["Proxy-Authorization"]="Basic "+Buffer.from(u.auth).toString("base64")),c.write("CONNECT "+s+":"+i+" HTTP/1.1\r\n"+Object.keys(e).map(t=>t+": "+e[t]).join("\r\n")+"\r\n\r\n");let t="",r=e=>{let i,a;if(!p&&(t+=e.toString("binary"),i=t.match(/\r\n\r\n/))){if(c.removeListener("data",r),a=t.substr(i.index+i[0].length),t=t.substr(0,i.index),a&&c.unshift(Buffer.from(a,"binary")),p=!0,!(i=t.match(/^HTTP\/\d+\.\d+ (\d+)/i))||"2"!==(i[1]||"").charAt(0)){try{c.destroy()}catch(e){}return o(Error("Invalid response from proxy"+(i&&": "+i[1]||"")))}return c.removeListener("error",h),c.removeListener("timeout",m),c.setTimeout(0),o(null,c)}};c.on("data",r)})).setTimeout(e.timeout||3e4),c.on("timeout",m),c.once("error",h)}},10919,(e,t,i)=>{"use strict";let r=e.r(14173),a=e.r(97676),n=e.r(1204);t.exports=class{constructor(e,t){this.mailer=e,this.data={},this.message=null,t=t||{};let i=e.options||{},r=e._defaults||{};Object.keys(t).forEach(e=>{this.data[e]=t[e]}),this.data.headers=this.data.headers||{},Object.keys(r).forEach(e=>{e in this.data?"headers"===e&&Object.keys(r.headers).forEach(e=>{e in this.data.headers||(this.data.headers[e]=r.headers[e])}):this.data[e]=r[e]}),["disableFileAccess","disableUrlAccess","normalizeHeaderKey"].forEach(e=>{e in i&&(this.data[e]=i[e])})}resolveContent(...e){return r.resolveContent(...e)}resolveAll(e){let t=[[this.data,"html"],[this.data,"text"],[this.data,"watchHtml"],[this.data,"amp"],[this.data,"icalEvent"]];this.data.alternatives&&this.data.alternatives.length&&this.data.alternatives.forEach((e,i)=>{t.push([this.data.alternatives,i])}),this.data.attachments&&this.data.attachments.length&&this.data.attachments.forEach((e,i)=>{!e.filename&&(e.filename=(e.path||e.href||"").split("/").pop().split("?").shift()||"attachment-"+(i+1),0>e.filename.indexOf(".")&&(e.filename+="."+n.detectExtension(e.contentType))),e.contentType||(e.contentType=n.detectMimeType(e.filename||e.path||e.href||"bin")),t.push([this.data.attachments,i])});let i=new a;["from","to","cc","bcc","sender","replyTo"].forEach(e=>{let t;this.message?t=[].concat(i._parseAddresses(this.message.getHeader("replyTo"===e?"reply-to":e))||[]):this.data[e]&&(t=[].concat(i._parseAddresses(this.data[e])||[])),t&&t.length?this.data[e]=t:e in this.data&&(this.data[e]=null)}),["from","sender"].forEach(e=>{this.data[e]&&(this.data[e]=this.data[e].shift())});let s=0,o=()=>{if(s>=t.length)return e(null,this.data);let i=t[s++];if(!i[0]||!i[0][i[1]])return o();r.resolveContent(...i,(t,r)=>{if(t)return e(t);let a={content:r};i[0][i[1]]&&"object"==typeof i[0][i[1]]&&!Buffer.isBuffer(i[0][i[1]])&&Object.keys(i[0][i[1]]).forEach(e=>{e in a||["content","path","href","raw"].includes(e)||(a[e]=i[0][i[1]][e])}),i[0][i[1]]=a,o()})};setImmediate(()=>o())}normalize(e){let t=this.data.envelope||this.message.getEnvelope(),i=this.message.messageId();this.resolveAll((r,a)=>r?e(r):(a.envelope=t,a.messageId=i,["html","text","watchHtml","amp"].forEach(e=>{a[e]&&a[e].content&&("string"==typeof a[e].content?a[e]=a[e].content:Buffer.isBuffer(a[e].content)&&(a[e]=a[e].content.toString()))}),a.icalEvent&&Buffer.isBuffer(a.icalEvent.content)&&(a.icalEvent.content=a.icalEvent.content.toString("base64"),a.icalEvent.encoding="base64"),a.alternatives&&a.alternatives.length&&a.alternatives.forEach(e=>{e&&e.content&&Buffer.isBuffer(e.content)&&(e.content=e.content.toString("base64"),e.encoding="base64")}),a.attachments&&a.attachments.length&&a.attachments.forEach(e=>{e&&e.content&&Buffer.isBuffer(e.content)&&(e.content=e.content.toString("base64"),e.encoding="base64")}),a.normalizedHeaders={},Object.keys(a.headers||{}).forEach(e=>{let t=[].concat(a.headers[e]||[]).shift();(t=t&&t.value||t)&&(["references","in-reply-to","message-id","content-id"].includes(e)&&(t=this.message._encodeHeaderValue(e,t)),a.normalizedHeaders[e]=t)}),a.list&&"object"==typeof a.list&&this._getListHeaders(a.list).forEach(e=>{a.normalizedHeaders[e.key]=e.value.map(e=>e&&e.value||e).join(", ")}),a.references&&(a.normalizedHeaders.references=this.message._encodeHeaderValue("references",a.references)),a.inReplyTo&&(a.normalizedHeaders["in-reply-to"]=this.message._encodeHeaderValue("in-reply-to",a.inReplyTo)),e(null,a)))}setMailerHeader(){this.message&&this.data.xMailer&&this.message.setHeader("X-Mailer",this.data.xMailer)}setPriorityHeaders(){if(this.message&&this.data.priority)switch((this.data.priority||"").toString().toLowerCase()){case"high":this.message.setHeader("X-Priority","1 (Highest)"),this.message.setHeader("X-MSMail-Priority","High"),this.message.setHeader("Importance","High");break;case"low":this.message.setHeader("X-Priority","5 (Lowest)"),this.message.setHeader("X-MSMail-Priority","Low"),this.message.setHeader("Importance","Low")}}setListHeaders(){this.message&&this.data.list&&"object"==typeof this.data.list&&this.data.list&&"object"==typeof this.data.list&&this._getListHeaders(this.data.list).forEach(e=>{e.value.forEach(t=>{this.message.addHeader(e.key,t)})})}_getListHeaders(e){return Object.keys(e).map(t=>({key:"list-"+t.toLowerCase().trim(),value:[].concat(e[t]||[]).map(e=>({prepared:!0,foldLines:!0,value:[].concat(e||[]).map(e=>{if("string"==typeof e&&(e={url:e}),e&&e.url){if("id"===t.toLowerCase().trim()){let t=e.comment||"";return t=n.isPlainText(t)?'"'+t+'"':n.encodeWord(t),(e.comment?t+" ":"")+this._formatListUrl(e.url).replace(/^<[^:]+\/{,2}/,"")}let i=e.comment||"";return n.isPlainText(i)||(i=n.encodeWord(i)),this._formatListUrl(e.url)+(e.comment?" ("+i+")":"")}return""}).filter(e=>e).join(", ")}))}))}_formatListUrl(e){return(e=e.replace(/[\s<]+|[\s>]+/g,""),/^(https?|mailto|ftp):/.test(e))?"<"+e+">":/^[^@]+@[^@]+$/.test(e)?"<mailto:"+e+">":"<http://"+e+">"}}},98267,(e,t,i)=>{"use strict";let r=e.r(27699),a=e.r(14173),n=e.r(20140),s=e.r(65903),o=e.r(23092),l=e.r(20158),d=e.r(24361),c=e.r(92509),u=e.r(87361),p=e.r(10919),h=e.r(4446),m=e.r(79594),f=e.r(54799);t.exports=class extends r{constructor(e,t,i){super(),this.options=t||{},this._defaults=i||{},this._defaultPlugins={compile:[(...e)=>this._convertDataImages(...e)],stream:[]},this._userPlugins={compile:[],stream:[]},this.meta=new Map,this.dkim=!!this.options.dkim&&new o(this.options.dkim),this.transporter=e,this.transporter.mailer=this,this.logger=a.getLogger(this.options,{component:this.options.component||"mail"}),this.logger.debug({tnx:"create"},"Creating transport: %s",this.getVersionString()),"function"==typeof this.transporter.on&&(this.transporter.on("log",e=>{this.logger.debug({tnx:"transport"},"%s: %s",e.type,e.message)}),this.transporter.on("error",e=>{this.logger.error({err:e,tnx:"transport"},"Transport Error: %s",e.message),this.emit("error",e)}),this.transporter.on("idle",(...e)=>{this.emit("idle",...e)})),["close","isIdle","verify"].forEach(e=>{this[e]=(...t)=>"function"==typeof this.transporter[e]?("verify"===e&&"function"==typeof this.getSocket&&(this.transporter.getSocket=this.getSocket,this.getSocket=!1),this.transporter[e](...t)):(this.logger.warn({tnx:"transport",methodName:e},"Non existing method %s called for transport",e),!1)}),this.options.proxy&&"string"==typeof this.options.proxy&&this.setupProxy(this.options.proxy)}use(e,t){return e=(e||"").toString(),this._userPlugins.hasOwnProperty(e)?this._userPlugins[e].push(t):this._userPlugins[e]=[t],this}sendMail(e,t=null){let i;t||(i=new Promise((e,i)=>{t=a.callbackPromise(e,i)})),"function"==typeof this.getSocket&&(this.transporter.getSocket=this.getSocket,this.getSocket=!1);let r=new p(this,e);return this.logger.debug({tnx:"transport",name:this.transporter.name,version:this.transporter.version,action:"send"},"Sending mail using %s/%s",this.transporter.name,this.transporter.version),this._processPlugins("compile",r,e=>{if(e)return this.logger.error({err:e,tnx:"plugin",action:"compile"},"PluginCompile Error: %s",e.message),t(e);r.message=new s(r.data).compile(),r.setMailerHeader(),r.setPriorityHeaders(),r.setListHeaders(),this._processPlugins("stream",r,e=>{if(e)return this.logger.error({err:e,tnx:"plugin",action:"stream"},"PluginStream Error: %s",e.message),t(e);(r.data.dkim||this.dkim)&&r.message.processFunc(e=>{let t=r.data.dkim?new o(r.data.dkim):this.dkim;return this.logger.debug({tnx:"DKIM",messageId:r.message.messageId(),dkimDomains:t.keys.map(e=>e.keySelector+"."+e.domainName).join(", ")},"Signing outgoing message with %s keys",t.keys.length),t.sign(e,r.data._dkim)}),this.transporter.send(r,(...e)=>{e[0]&&this.logger.error({err:e[0],tnx:"transport",action:"send"},"Send Error: %s",e[0].message),t(...e)})})}),i}getVersionString(){return d.format("%s (%s; +%s; %s/%s)",u.name,u.version,u.homepage,this.transporter.name,this.transporter.version)}_processPlugins(e,t,i){if(e=(e||"").toString(),!this._userPlugins.hasOwnProperty(e))return i();let r=this._userPlugins[e]||[],a=this._defaultPlugins[e]||[];if(r.length&&this.logger.debug({tnx:"transaction",pluginCount:r.length,step:e},"Using %s plugins for %s",r.length,e),r.length+a.length===0)return i();let n=0,s="default",o=()=>{let e="default"===s?a:r;if(n>=e.length)if("default"!==s||!r.length)return i();else s="user",n=0,e=r;(0,e[n++])(t,e=>{if(e)return i(e);o()})};o()}setupProxy(e){let t=c.parse(e);this.getSocket=(e,i)=>{let r=t.protocol.replace(/:$/,"").toLowerCase();if(this.meta.has("proxy_handler_"+r))return this.meta.get("proxy_handler_"+r)(t,e,i);switch(r){case"http":case"https":l(t.href,e.port,e.host,(e,t)=>e?i(e):i(null,{connection:t}));return;case"socks":case"socks5":case"socks4":case"socks4a":{if(!this.meta.has("proxy_socks_module"))return i(Error("Socks module not loaded"));let r=r=>{let a=!!this.meta.get("proxy_socks_module").SocksClient,n=a?this.meta.get("proxy_socks_module").SocksClient:this.meta.get("proxy_socks_module"),s=Number(t.protocol.replace(/\D/g,""))||5,o={proxy:{ipaddress:r,port:Number(t.port),type:s},[a?"destination":"target"]:{host:e.host,port:e.port},command:"connect"};if(t.auth){let e=decodeURIComponent(t.auth.split(":").shift()),i=decodeURIComponent(t.auth.split(":").pop());a?(o.proxy.userId=e,o.proxy.password=i):4===s?o.userid=e:o.authentication={username:e,password:i}}n.createConnection(o,(e,t)=>e?i(e):i(null,{connection:t.socket||t}))};if(h.isIP(t.hostname))return r(t.hostname);return m.resolve(t.hostname,(e,t)=>{if(e)return i(e);r(Array.isArray(t)?t[0]:t)})}}i(Error("Unknown proxy configuration"))}}_convertDataImages(e,t){if(!this.options.attachDataUrls&&!e.data.attachDataUrls||!e.data.html)return t();e.resolveContent(e.data,"html",(i,r)=>{if(i)return t(i);let a=0;r=(r||"").toString().replace(/(<img\b[^<>]{0,1024} src\s{0,20}=[\s"']{0,20})(data:([^;]+);[^"'>\s]+)/gi,(t,i,r,s)=>{let o=f.randomBytes(10).toString("hex")+"@localhost";return e.data.attachments||(e.data.attachments=[]),Array.isArray(e.data.attachments)||(e.data.attachments=[].concat(e.data.attachments||[])),e.data.attachments.push({path:r,cid:o,filename:"image-"+ ++a+"."+n.detectExtension(s)}),i+"cid:"+o}),e.data.html=r,t()})}set(e,t){return this.meta.set(e,t)}get(e){return this.meta.get(e)}}},89400,(e,t,i)=>{"use strict";let r=e.r(88947).Transform;t.exports=class extends r{constructor(e){super(e),this.options=e||{},this._curLine="",this.inByteCount=0,this.outByteCount=0,this.lastByte=!1}_transform(e,t,i){let r,a=[],n=0,s,o,l=0;if(!e||!e.length)return i();for("string"==typeof e&&(e=Buffer.from(e)),this.inByteCount+=e.length,s=0,o=e.length;s<o;s++)46===e[s]?(!s||10!==e[s-1])&&(s||this.lastByte&&10!==this.lastByte)||(r=e.slice(l,s+1),a.push(r),a.push(Buffer.from(".")),n+=r.length+1,l=s+1):10===e[s]&&(s&&13!==e[s-1]||!s&&13!==this.lastByte)&&(s>l?(r=e.slice(l,s),a.push(r),n+=r.length+2):n+=2,a.push(Buffer.from("\r\n")),l=s+1);n?(l<e.length&&(r=e.slice(l),a.push(r),n+=r.length),this.outByteCount+=n,this.push(Buffer.concat(a,n))):(this.outByteCount+=e.length,this.push(e)),this.lastByte=e[e.length-1],i()}_flush(e){let t;t=10===this.lastByte?Buffer.from(".\r\n"):13===this.lastByte?Buffer.from("\n.\r\n"):Buffer.from("\r\n.\r\n"),this.outByteCount+=t.length,this.push(t),e()}}},25106,(e,t,i)=>{"use strict";let r=e.r(87361),a=e.r(27699).EventEmitter,n=e.r(4446),s=e.r(55004),o=e.r(46786),l=e.r(54799),d=e.r(89400),c=e.r(88947).PassThrough,u=e.r(14173);t.exports=class extends a{constructor(e){super(e),this.id=l.randomBytes(8).toString("base64").replace(/\W/g,""),this.stage="init",this.options=e||{},this.secureConnection=!!this.options.secure,this.alreadySecured=!!this.options.secured,this.port=Number(this.options.port)||(this.secureConnection?465:587),this.host=this.options.host||"localhost",this.servername=this.options.servername?this.options.servername:!n.isIP(this.host)&&this.host,this.allowInternalNetworkInterfaces=this.options.allowInternalNetworkInterfaces||!1,void 0===this.options.secure&&465===this.port&&(this.secureConnection=!0),this.name=this.options.name||this._getHostname(),this.logger=u.getLogger(this.options,{component:this.options.component||"smtp-connection",sid:this.id}),this.customAuth=new Map,Object.keys(this.options.customAuth||{}).forEach(e=>{let t=(e||"").toString().trim().toUpperCase();t&&this.customAuth.set(t,this.options.customAuth[e])}),this.version=r.version,this.authenticated=!1,this.destroyed=!1,this.secure=!!this.secureConnection,this._remainder="",this._responseQueue=[],this.lastServerResponse=!1,this._socket=!1,this._supportedAuth=[],this.allowsAuth=!1,this._envelope=!1,this._supportedExtensions=[],this._maxAllowedSize=0,this._responseActions=[],this._recipientQueue=[],this._greetingTimeout=!1,this._connectionTimeout=!1,this._destroyed=!1,this._closing=!1,this._onSocketData=e=>this._onData(e),this._onSocketError=e=>this._onError(e,"ESOCKET",!1,"CONN"),this._onSocketClose=()=>this._onClose(),this._onSocketEnd=()=>this._onEnd(),this._onSocketTimeout=()=>this._onTimeout()}connect(e){if("function"==typeof e){this.once("connect",()=>{this.logger.debug({tnx:"smtp"},"SMTP handshake finished"),e()});let t=this._isDestroyedMessage("connect");if(t)return e(this._formatError(t,"ECONNECTION",!1,"CONN"))}let t={port:this.port,host:this.host,allowInternalNetworkInterfaces:this.allowInternalNetworkInterfaces,timeout:this.options.dnsTimeout||3e4};this.options.localAddress&&(t.localAddress=this.options.localAddress);let i=()=>{this._connectionTimeout=setTimeout(()=>{this._onError("Connection timeout","ETIMEDOUT",!1,"CONN")},this.options.connectionTimeout||12e4),this._socket.on("error",this._onSocketError)};if(this.options.connection){this._socket=this.options.connection,i(),this.secureConnection&&!this.alreadySecured?setImmediate(()=>this._upgradeConnection(e=>{e?this._onError(Error("Error initiating TLS - "+(e.message||e)),"ETLS",!1,"CONN"):this._onConnect()})):setImmediate(()=>this._onConnect());return}return this.options.socket?(this._socket=this.options.socket,u.resolveHostname(t,(e,r)=>{if(e)return setImmediate(()=>this._onError(e,"EDNS",!1,"CONN"));this.logger.debug({tnx:"dns",source:t.host,resolved:r.host,cached:!!r.cached},"Resolved %s as %s [cache %s]",t.host,r.host,r.cached?"hit":"miss"),Object.keys(r).forEach(e=>{"_"!==e.charAt(0)&&r[e]&&(t[e]=r[e])});try{this._socket.connect(this.port,this.host,()=>{this._socket.setKeepAlive(!0),this._onConnect()}),i()}catch(e){return setImmediate(()=>this._onError(e,"ECONNECTION",!1,"CONN"))}})):this.secureConnection?(this.options.tls&&Object.keys(this.options.tls).forEach(e=>{t[e]=this.options.tls[e]}),this.servername&&!t.servername&&(t.servername=this.servername),u.resolveHostname(t,(e,r)=>{if(e)return setImmediate(()=>this._onError(e,"EDNS",!1,"CONN"));this.logger.debug({tnx:"dns",source:t.host,resolved:r.host,cached:!!r.cached},"Resolved %s as %s [cache %s]",t.host,r.host,r.cached?"hit":"miss"),Object.keys(r).forEach(e=>{"_"!==e.charAt(0)&&r[e]&&(t[e]=r[e])});try{this._socket=s.connect(t,()=>{this._socket.setKeepAlive(!0),this._onConnect()}),i()}catch(e){return setImmediate(()=>this._onError(e,"ECONNECTION",!1,"CONN"))}})):u.resolveHostname(t,(e,r)=>{if(e)return setImmediate(()=>this._onError(e,"EDNS",!1,"CONN"));this.logger.debug({tnx:"dns",source:t.host,resolved:r.host,cached:!!r.cached},"Resolved %s as %s [cache %s]",t.host,r.host,r.cached?"hit":"miss"),Object.keys(r).forEach(e=>{"_"!==e.charAt(0)&&r[e]&&(t[e]=r[e])});try{this._socket=n.connect(t,()=>{this._socket.setKeepAlive(!0),this._onConnect()}),i()}catch(e){return setImmediate(()=>this._onError(e,"ECONNECTION",!1,"CONN"))}})}quit(){this._sendCommand("QUIT"),this._responseActions.push(this.close)}close(){if(clearTimeout(this._connectionTimeout),clearTimeout(this._greetingTimeout),this._responseActions=[],this._closing)return;this._closing=!0;let e="end";"init"===this.stage&&(e="destroy"),this.logger.debug({tnx:"smtp"},'Closing connection to the server using "%s"',e);let t=this._socket&&this._socket.socket||this._socket;if(t&&!t.destroyed)try{t[e]()}catch(e){}this._destroy()}login(e,t){let i=this._isDestroyedMessage("login");if(i)return t(this._formatError(i,"ECONNECTION",!1,"API"));if(this._auth=e||{},this._authMethod=(this._auth.method||"").toString().trim().toUpperCase()||!1,this._authMethod||!this._auth.oauth2||this._auth.credentials?this._authMethod&&("XOAUTH2"!==this._authMethod||this._auth.oauth2)||(this._authMethod=(this._supportedAuth[0]||"PLAIN").toUpperCase().trim()):this._authMethod="XOAUTH2","XOAUTH2"!==this._authMethod&&(!this._auth.credentials||!this._auth.credentials.user||!this._auth.credentials.pass))if(!(this._auth.user&&this._auth.pass||this.customAuth.has(this._authMethod)))return t(this._formatError('Missing credentials for "'+this._authMethod+'"',"EAUTH",!1,"API"));else this._auth.credentials={user:this._auth.user,pass:this._auth.pass,options:this._auth.options};if(this.customAuth.has(this._authMethod)){let e,i=this.customAuth.get(this._authMethod),r=!1,a=()=>{r||(r=!0,this.logger.info({tnx:"smtp",username:this._auth.user,action:"authenticated",method:this._authMethod},"User %s authenticated",JSON.stringify(this._auth.user)),this.authenticated=!0,t(null,!0))},n=i=>{r||(r=!0,t(this._formatError(i,"EAUTH",e,"AUTH "+this._authMethod)))},s=i({auth:this._auth,method:this._authMethod,extensions:[].concat(this._supportedExtensions),authMethods:[].concat(this._supportedAuth),maxAllowedSize:this._maxAllowedSize||!1,sendCommand:(t,i)=>{let r;return i||(r=new Promise((e,t)=>{i=u.callbackPromise(e,t)})),this._responseActions.push(r=>{e=r;let a=r.match(/^(\d+)(?:\s(\d+\.\d+\.\d+))?\s/),n={command:t,response:r};a?(n.status=Number(a[1])||0,a[2]&&(n.code=a[2]),n.text=r.substr(a[0].length)):(n.text=r,n.status=0),i(null,n)}),setImmediate(()=>this._sendCommand(t)),r},resolve:a,reject:n});s&&"function"==typeof s.catch&&s.then(a).catch(n);return}switch(this._authMethod){case"XOAUTH2":this._handleXOauth2Token(!1,t);return;case"LOGIN":this._responseActions.push(e=>{this._actionAUTH_LOGIN_USER(e,t)}),this._sendCommand("AUTH LOGIN");return;case"PLAIN":this._responseActions.push(e=>{this._actionAUTHComplete(e,t)}),this._sendCommand("AUTH PLAIN "+Buffer.from("\0"+this._auth.credentials.user+"\0"+this._auth.credentials.pass,"utf-8").toString("base64"),"AUTH PLAIN "+Buffer.from("\0"+this._auth.credentials.user+"\0/* secret */","utf-8").toString("base64"));return;case"CRAM-MD5":this._responseActions.push(e=>{this._actionAUTH_CRAM_MD5(e,t)}),this._sendCommand("AUTH CRAM-MD5");return}return t(this._formatError('Unknown authentication method "'+this._authMethod+'"',"EAUTH",!1,"API"))}send(e,t,i){if(!t)return i(this._formatError("Empty message","EMESSAGE",!1,"API"));let r=this._isDestroyedMessage("send message");if(r)return i(this._formatError(r,"ECONNECTION",!1,"API"));if(this._maxAllowedSize&&e.size>this._maxAllowedSize)return setImmediate(()=>{i(this._formatError("Message size larger than allowed "+this._maxAllowedSize,"EMESSAGE",!1,"MAIL FROM"))});let a=!1,n=function(){a||(a=!0,i(...arguments))};"function"==typeof t.on&&t.on("error",e=>n(this._formatError(e,"ESTREAM",!1,"API")));let s=Date.now();this._setEnvelope(e,(e,i)=>{if(e){let i=new c;return"function"==typeof t.pipe?t.pipe(i):(i.write(t),i.end()),n(e)}let r=Date.now(),a=this._createSendStream((e,t)=>e?n(e):(i.envelopeTime=r-s,i.messageTime=Date.now()-r,i.messageSize=a.outByteCount,i.response=t,n(null,i)));"function"==typeof t.pipe?t.pipe(a):(a.write(t),a.end())})}reset(e){this._sendCommand("RSET"),this._responseActions.push(t=>"2"!==t.charAt(0)?e(this._formatError("Could not reset session state. response="+t,"EPROTOCOL",t,"RSET")):(this._envelope=!1,e(null,!0)))}_onConnect(){(clearTimeout(this._connectionTimeout),this.logger.info({tnx:"network",localAddress:this._socket.localAddress,localPort:this._socket.localPort,remoteAddress:this._socket.remoteAddress,remotePort:this._socket.remotePort},"%s established to %s:%s",this.secure?"Secure connection":"Connection",this._socket.remoteAddress,this._socket.remotePort),this._destroyed)?this.close():(this.stage="connected",this._socket.removeListener("data",this._onSocketData),this._socket.removeListener("timeout",this._onSocketTimeout),this._socket.removeListener("close",this._onSocketClose),this._socket.removeListener("end",this._onSocketEnd),this._socket.on("data",this._onSocketData),this._socket.once("close",this._onSocketClose),this._socket.once("end",this._onSocketEnd),this._socket.setTimeout(this.options.socketTimeout||6e5),this._socket.on("timeout",this._onSocketTimeout),this._greetingTimeout=setTimeout(()=>{this._socket&&!this._destroyed&&this._responseActions[0]===this._actionGreeting&&this._onError("Greeting never received","ETIMEDOUT",!1,"CONN")},this.options.greetingTimeout||3e4),this._responseActions.push(this._actionGreeting),this._socket.resume())}_onData(e){let t;if(this._destroyed||!e||!e.length)return;let i=(e||"").toString("binary"),r=(this._remainder+i).split(/\r?\n/);this._remainder=r.pop();for(let e=0,i=r.length;e<i;e++){if(this._responseQueue.length&&(t=this._responseQueue[this._responseQueue.length-1],/^\d+-/.test(t.split("\n").pop()))){this._responseQueue[this._responseQueue.length-1]+="\n"+r[e];continue}this._responseQueue.push(r[e])}this._responseQueue.length&&(t=this._responseQueue[this._responseQueue.length-1],/^\d+-/.test(t.split("\n").pop()))||this._processResponse()}_onError(e,t,i,r){clearTimeout(this._connectionTimeout),clearTimeout(this._greetingTimeout),this._destroyed||(e=this._formatError(e,t,i,r),this.logger.error(i,e.message),this.emit("error",e),this.close())}_formatError(e,t,i,r){let a;a=/Error\]$/i.test(Object.prototype.toString.call(e))?e:Error(e),t&&"Error"!==t&&(a.code=t),i&&(a.response=i,a.message+=": "+i);let n="string"==typeof i&&Number((i.match(/^\d+/)||[])[0])||!1;return n&&(a.responseCode=n),r&&(a.command=r),a}_onClose(){let e=!1;return(this._remainder&&this._remainder.trim()&&((this.options.debug||this.options.transactionLog)&&this.logger.debug({tnx:"server"},this._remainder.replace(/\r?\n$/,"")),this.lastServerResponse=e=this._remainder.trim()),this.logger.info({tnx:"network"},"Connection closed"),this.upgrading&&!this._destroyed)?this._onError(Error("Connection closed unexpectedly"),"ETLS",e,"CONN"):![this._actionGreeting,this.close].includes(this._responseActions[0])&&!this._destroyed||/^[45]\d{2}\b/.test(e)?this._onError(Error("Connection closed unexpectedly"),"ECONNECTION",e,"CONN"):void this._destroy()}_onEnd(){this._socket&&!this._socket.destroyed&&this._socket.destroy()}_onTimeout(){return this._onError(Error("Timeout"),"ETIMEDOUT",!1,"CONN")}_destroy(){this._destroyed||(this._destroyed=!0,this.emit("end"))}_upgradeConnection(e){this._socket.removeListener("data",this._onSocketData),this._socket.removeListener("timeout",this._onSocketTimeout);let t=this._socket,i={socket:this._socket,host:this.host};Object.keys(this.options.tls||{}).forEach(e=>{i[e]=this.options.tls[e]}),this.servername&&!i.servername&&(i.servername=this.servername),this.upgrading=!0;try{this._socket=s.connect(i,()=>(this.secure=!0,this.upgrading=!1,this._socket.on("data",this._onSocketData),t.removeListener("close",this._onSocketClose),t.removeListener("end",this._onSocketEnd),e(null,!0)))}catch(t){return e(t)}this._socket.on("error",this._onSocketError),this._socket.once("close",this._onSocketClose),this._socket.once("end",this._onSocketEnd),this._socket.setTimeout(this.options.socketTimeout||6e5),this._socket.on("timeout",this._onSocketTimeout),t.resume()}_processResponse(){if(!this._responseQueue.length)return!1;let e=this.lastServerResponse=(this._responseQueue.shift()||"").toString();if(/^\d+-/.test(e.split("\n").pop()))return;(this.options.debug||this.options.transactionLog)&&this.logger.debug({tnx:"server"},e.replace(/\r?\n$/,"")),e.trim()||setImmediate(()=>this._processResponse());let t=this._responseActions.shift();if("function"!=typeof t)return this._onError(Error("Unexpected Response"),"EPROTOCOL",e,"CONN");t.call(this,e),setImmediate(()=>this._processResponse())}_sendCommand(e,t){if(!this._destroyed){if(this._socket.destroyed)return this.close();(this.options.debug||this.options.transactionLog)&&this.logger.debug({tnx:"client"},(t||e||"").toString().replace(/\r?\n$/,"")),this._socket.write(Buffer.from(e+"\r\n","utf-8"))}}_setEnvelope(e,t){let i=[],r=!1;if(this._envelope=e||{},this._envelope.from=(this._envelope.from&&this._envelope.from.address||this._envelope.from||"").toString().trim(),this._envelope.to=[].concat(this._envelope.to||[]).map(e=>(e&&e.address||e||"").toString().trim()),!this._envelope.to.length)return t(this._formatError("No recipients defined","EENVELOPE",!1,"API"));if(this._envelope.from&&/[\r\n<>]/.test(this._envelope.from))return t(this._formatError("Invalid sender "+JSON.stringify(this._envelope.from),"EENVELOPE",!1,"API"));/[\x80-\uFFFF]/.test(this._envelope.from)&&(r=!0);for(let e=0,i=this._envelope.to.length;e<i;e++){if(!this._envelope.to[e]||/[\r\n<>]/.test(this._envelope.to[e]))return t(this._formatError("Invalid recipient "+JSON.stringify(this._envelope.to[e]),"EENVELOPE",!1,"API"));/[\x80-\uFFFF]/.test(this._envelope.to[e])&&(r=!0)}if(this._envelope.rcptQueue=JSON.parse(JSON.stringify(this._envelope.to||[])),this._envelope.rejected=[],this._envelope.rejectedErrors=[],this._envelope.accepted=[],this._envelope.dsn)try{this._envelope.dsn=this._setDsnEnvelope(this._envelope.dsn)}catch(e){return t(this._formatError("Invalid DSN "+e.message,"EENVELOPE",!1,"API"))}this._responseActions.push(e=>{this._actionMAIL(e,t)}),r&&this._supportedExtensions.includes("SMTPUTF8")&&(i.push("SMTPUTF8"),this._usingSmtpUtf8=!0),this._envelope.use8BitMime&&this._supportedExtensions.includes("8BITMIME")&&(i.push("BODY=8BITMIME"),this._using8BitMime=!0),this._envelope.size&&this._supportedExtensions.includes("SIZE")&&i.push("SIZE="+this._envelope.size),this._envelope.dsn&&this._supportedExtensions.includes("DSN")&&(this._envelope.dsn.ret&&i.push("RET="+u.encodeXText(this._envelope.dsn.ret)),this._envelope.dsn.envid&&i.push("ENVID="+u.encodeXText(this._envelope.dsn.envid))),this._sendCommand("MAIL FROM:<"+this._envelope.from+">"+(i.length?" "+i.join(" "):""))}_setDsnEnvelope(e){let t=(e.ret||e.return||"").toString().toUpperCase()||null;if(t)switch(t){case"HDRS":case"HEADERS":t="HDRS";break;case"FULL":case"BODY":t="FULL"}if(t&&!["FULL","HDRS"].includes(t))throw Error("ret: "+JSON.stringify(t));let i=(e.envid||e.id||"").toString()||null,r=e.notify||null;if(r){"string"==typeof r&&(r=r.split(","));let e=["NEVER","SUCCESS","FAILURE","DELAY"];if((r=r.map(e=>e.trim().toUpperCase())).filter(t=>!e.includes(t)).length||r.length>1&&r.includes("NEVER"))throw Error("notify: "+JSON.stringify(r.join(",")));r=r.join(",")}let a=(e.recipient||e.orcpt||"").toString()||null;return a&&0>a.indexOf(";")&&(a="rfc822;"+a),{ret:t,envid:i,notify:r,orcpt:a}}_getDsnRcptToArgs(){let e=[];return this._envelope.dsn&&this._supportedExtensions.includes("DSN")&&(this._envelope.dsn.notify&&e.push("NOTIFY="+u.encodeXText(this._envelope.dsn.notify)),this._envelope.dsn.orcpt&&e.push("ORCPT="+u.encodeXText(this._envelope.dsn.orcpt))),e.length?" "+e.join(" "):""}_createSendStream(e){let t,i=new d;return this.options.lmtp?this._envelope.accepted.forEach((t,i)=>{let r=i===this._envelope.accepted.length-1;this._responseActions.push(i=>{this._actionLMTPStream(t,r,i,e)})}):this._responseActions.push(t=>{this._actionSMTPStream(t,e)}),i.pipe(this._socket,{end:!1}),this.options.debug&&((t=new c).on("readable",()=>{let e;for(;e=t.read();)this.logger.debug({tnx:"message"},e.toString("binary").replace(/\r?\n$/,""))}),i.pipe(t)),i.once("end",()=>{this.logger.info({tnx:"message",inByteCount:i.inByteCount,outByteCount:i.outByteCount},"<%s bytes encoded mime message (source size %s bytes)>",i.outByteCount,i.inByteCount)}),i}_actionGreeting(e){(clearTimeout(this._greetingTimeout),"220"!==e.substr(0,3))?this._onError(Error("Invalid greeting. response="+e),"EPROTOCOL",e,"CONN"):this.options.lmtp?(this._responseActions.push(this._actionLHLO),this._sendCommand("LHLO "+this.name)):(this._responseActions.push(this._actionEHLO),this._sendCommand("EHLO "+this.name))}_actionLHLO(e){"2"!==e.charAt(0)?this._onError(Error("Invalid LHLO. response="+e),"EPROTOCOL",e,"LHLO"):this._actionEHLO(e)}_actionEHLO(e){let t;if("421"===e.substr(0,3))return void this._onError(Error("Server terminates connection. response="+e),"ECONNECTION",e,"EHLO");if("2"!==e.charAt(0))return this.options.requireTLS?void this._onError(Error("EHLO failed but HELO does not support required STARTTLS. response="+e),"ECONNECTION",e,"EHLO"):(this._responseActions.push(this._actionHELO),void this._sendCommand("HELO "+this.name));if(this._ehloLines=e.split(/\r?\n/).map(e=>e.replace(/^\d+[ -]/,"").trim()).filter(e=>e).slice(1),!this.secure&&!this.options.ignoreTLS&&(/[ -]STARTTLS\b/im.test(e)||this.options.requireTLS)){this._sendCommand("STARTTLS"),this._responseActions.push(this._actionSTARTTLS);return}/[ -]SMTPUTF8\b/im.test(e)&&this._supportedExtensions.push("SMTPUTF8"),/[ -]DSN\b/im.test(e)&&this._supportedExtensions.push("DSN"),/[ -]8BITMIME\b/im.test(e)&&this._supportedExtensions.push("8BITMIME"),/[ -]PIPELINING\b/im.test(e)&&this._supportedExtensions.push("PIPELINING"),/[ -]AUTH\b/i.test(e)&&(this.allowsAuth=!0),/[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)PLAIN/i.test(e)&&this._supportedAuth.push("PLAIN"),/[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)LOGIN/i.test(e)&&this._supportedAuth.push("LOGIN"),/[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)CRAM-MD5/i.test(e)&&this._supportedAuth.push("CRAM-MD5"),/[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)XOAUTH2/i.test(e)&&this._supportedAuth.push("XOAUTH2"),(t=e.match(/[ -]SIZE(?:[ \t]+(\d+))?/im))&&(this._supportedExtensions.push("SIZE"),this._maxAllowedSize=Number(t[1])||0),this.emit("connect")}_actionHELO(e){"2"!==e.charAt(0)?this._onError(Error("Invalid HELO. response="+e),"EPROTOCOL",e,"HELO"):(this.allowsAuth=!0,this.emit("connect"))}_actionSTARTTLS(e){if("2"!==e.charAt(0))return this.options.opportunisticTLS?(this.logger.info({tnx:"smtp"},"Failed STARTTLS upgrade, continuing unencrypted"),this.emit("connect")):void this._onError(Error("Error upgrading connection with STARTTLS"),"ETLS",e,"STARTTLS");this._upgradeConnection((e,t)=>{e?this._onError(Error("Error initiating TLS - "+(e.message||e)),"ETLS",!1,"STARTTLS"):(this.logger.info({tnx:"smtp"},"Connection upgraded with STARTTLS"),t?this.options.lmtp?(this._responseActions.push(this._actionLHLO),this._sendCommand("LHLO "+this.name)):(this._responseActions.push(this._actionEHLO),this._sendCommand("EHLO "+this.name)):this.emit("connect"))})}_actionAUTH_LOGIN_USER(e,t){/^334[ -]/.test(e)?(this._responseActions.push(e=>{this._actionAUTH_LOGIN_PASS(e,t)}),this._sendCommand(Buffer.from(this._auth.credentials.user+"","utf-8").toString("base64"))):t(this._formatError('Invalid login sequence while waiting for "334 VXNlcm5hbWU6"',"EAUTH",e,"AUTH LOGIN"))}_actionAUTH_CRAM_MD5(e,t){let i=e.match(/^334\s+(.+)$/),r="";if(!i)return t(this._formatError("Invalid login sequence while waiting for server challenge string","EAUTH",e,"AUTH CRAM-MD5"));r=i[1];let a=Buffer.from(r,"base64").toString("ascii"),n=l.createHmac("md5",this._auth.credentials.pass);n.update(a);let s=this._auth.credentials.user+" "+n.digest("hex");this._responseActions.push(e=>{this._actionAUTH_CRAM_MD5_PASS(e,t)}),this._sendCommand(Buffer.from(s).toString("base64"),Buffer.from(this._auth.credentials.user+" /* secret */").toString("base64"))}_actionAUTH_CRAM_MD5_PASS(e,t){if(!e.match(/^235\s+/))return t(this._formatError('Invalid login sequence while waiting for "235"',"EAUTH",e,"AUTH CRAM-MD5"));this.logger.info({tnx:"smtp",username:this._auth.user,action:"authenticated",method:this._authMethod},"User %s authenticated",JSON.stringify(this._auth.user)),this.authenticated=!0,t(null,!0)}_actionAUTH_LOGIN_PASS(e,t){if(!/^334[ -]/.test(e))return t(this._formatError('Invalid login sequence while waiting for "334 UGFzc3dvcmQ6"',"EAUTH",e,"AUTH LOGIN"));this._responseActions.push(e=>{this._actionAUTHComplete(e,t)}),this._sendCommand(Buffer.from((this._auth.credentials.pass||"").toString(),"utf-8").toString("base64"),Buffer.from("/* secret */","utf-8").toString("base64"))}_actionAUTHComplete(e,t,i){if(i||"function"!=typeof t||(i=t,t=!1),"334"===e.substr(0,3)){this._responseActions.push(e=>{t||"XOAUTH2"!==this._authMethod?this._actionAUTHComplete(e,!0,i):setImmediate(()=>this._handleXOauth2Token(!0,i))}),this._sendCommand("");return}if("2"!==e.charAt(0))return this.logger.info({tnx:"smtp",username:this._auth.user,action:"authfail",method:this._authMethod},"User %s failed to authenticate",JSON.stringify(this._auth.user)),i(this._formatError("Invalid login","EAUTH",e,"AUTH "+this._authMethod));this.logger.info({tnx:"smtp",username:this._auth.user,action:"authenticated",method:this._authMethod},"User %s authenticated",JSON.stringify(this._auth.user)),this.authenticated=!0,i(null,!0)}_actionMAIL(e,t){let i,r;if(2!==Number(e.charAt(0)))return i=this._usingSmtpUtf8&&/^550 /.test(e)&&/[\x80-\uFFFF]/.test(this._envelope.from)?"Internationalized mailbox name not allowed":"Mail command failed",t(this._formatError(i,"EENVELOPE",e,"MAIL FROM"));if(!this._envelope.rcptQueue.length)return t(this._formatError("Can't send mail - no recipients defined","EENVELOPE",!1,"API"));if(this._recipientQueue=[],this._supportedExtensions.includes("PIPELINING"))for(;this._envelope.rcptQueue.length;)r=this._envelope.rcptQueue.shift(),this._recipientQueue.push(r),this._responseActions.push(e=>{this._actionRCPT(e,t)}),this._sendCommand("RCPT TO:<"+r+">"+this._getDsnRcptToArgs());else r=this._envelope.rcptQueue.shift(),this._recipientQueue.push(r),this._responseActions.push(e=>{this._actionRCPT(e,t)}),this._sendCommand("RCPT TO:<"+r+">"+this._getDsnRcptToArgs())}_actionRCPT(e,t){let i,r,a=this._recipientQueue.shift();if(2!==Number(e.charAt(0))?(i=this._usingSmtpUtf8&&/^553 /.test(e)&&/[\x80-\uFFFF]/.test(a)?"Internationalized mailbox name not allowed":"Recipient command failed",this._envelope.rejected.push(a),(r=this._formatError(i,"EENVELOPE",e,"RCPT TO")).recipient=a,this._envelope.rejectedErrors.push(r)):this._envelope.accepted.push(a),this._envelope.rcptQueue.length||this._recipientQueue.length)this._envelope.rcptQueue.length&&(a=this._envelope.rcptQueue.shift(),this._recipientQueue.push(a),this._responseActions.push(e=>{this._actionRCPT(e,t)}),this._sendCommand("RCPT TO:<"+a+">"+this._getDsnRcptToArgs()));else{if(!(this._envelope.rejected.length<this._envelope.to.length))return(r=this._formatError("Can't send mail - all recipients were rejected","EENVELOPE",e,"RCPT TO")).rejected=this._envelope.rejected,r.rejectedErrors=this._envelope.rejectedErrors,t(r);this._responseActions.push(e=>{this._actionDATA(e,t)}),this._sendCommand("DATA")}}_actionDATA(e,t){if(!/^[23]/.test(e))return t(this._formatError("Data command failed","EENVELOPE",e,"DATA"));let i={accepted:this._envelope.accepted,rejected:this._envelope.rejected};this._ehloLines&&this._ehloLines.length&&(i.ehlo=this._ehloLines),this._envelope.rejectedErrors.length&&(i.rejectedErrors=this._envelope.rejectedErrors),t(null,i)}_actionSMTPStream(e,t){return 2!==Number(e.charAt(0))?t(this._formatError("Message failed","EMESSAGE",e,"DATA")):t(null,e)}_actionLMTPStream(e,t,i,r){let a;if(2!==Number(i.charAt(0))){(a=this._formatError("Message failed for recipient "+e,"EMESSAGE",i,"DATA")).recipient=e,this._envelope.rejected.push(e),this._envelope.rejectedErrors.push(a);for(let t=0,i=this._envelope.accepted.length;t<i;t++)this._envelope.accepted[t]===e&&this._envelope.accepted.splice(t,1)}if(t)return r(null,i)}_handleXOauth2Token(e,t){this._auth.oauth2.getToken(e,(i,r)=>{if(i)return this.logger.info({tnx:"smtp",username:this._auth.user,action:"authfail",method:this._authMethod},"User %s failed to authenticate",JSON.stringify(this._auth.user)),t(this._formatError(i,"EAUTH",!1,"AUTH XOAUTH2"));this._responseActions.push(i=>{this._actionAUTHComplete(i,e,t)}),this._sendCommand("AUTH XOAUTH2 "+this._auth.oauth2.buildXOAuth2Token(r),"AUTH XOAUTH2 "+this._auth.oauth2.buildXOAuth2Token("/* secret */"))})}_isDestroyedMessage(e){if(this._destroyed)return"Cannot "+e+" - smtp connection is already destroyed.";if(this._socket){if(this._socket.destroyed)return"Cannot "+e+" - smtp connection socket is already destroyed.";if(!this._socket.writable)return"Cannot "+e+" - smtp connection socket is already half-closed."}}_getHostname(){let e;try{e=o.hostname()||""}catch(t){e="localhost"}return(!e||0>e.indexOf("."))&&(e="[127.0.0.1]"),e.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)&&(e="["+e+"]"),e}}},29856,(e,t,i)=>{"use strict";let r=e.r(88947).Stream,a=e.r(13970),n=e.r(54799),s=e.r(14173);t.exports=class extends r{constructor(e,t){if(super(),this.options=e||{},e&&e.serviceClient){if(!e.privateKey||!e.user)return void setImmediate(()=>this.emit("error",Error('Options "privateKey" and "user" are required for service account!')));let t=Math.min(Math.max(Number(this.options.serviceRequestTimeout)||0,0),3600);this.options.serviceRequestTimeout=t||300}if(this.logger=s.getLogger({logger:t},{component:this.options.component||"OAuth2"}),this.provisionCallback="function"==typeof this.options.provisionCallback&&this.options.provisionCallback,this.options.accessUrl=this.options.accessUrl||"https://accounts.google.com/o/oauth2/token",this.options.customHeaders=this.options.customHeaders||{},this.options.customParams=this.options.customParams||{},this.accessToken=this.options.accessToken||!1,this.options.expires&&Number(this.options.expires))this.expires=this.options.expires;else{let e=Math.max(Number(this.options.timeout)||0,0);this.expires=e&&Date.now()+1e3*e||0}}getToken(e,t){if(!e&&this.accessToken&&(!this.expires||this.expires>Date.now()))return t(null,this.accessToken);let i=(...e)=>{e[0]?this.logger.error({err:e[0],tnx:"OAUTH2",user:this.options.user,action:"renew"},"Failed generating new Access Token for %s",this.options.user):this.logger.info({tnx:"OAUTH2",user:this.options.user,action:"renew"},"Generated new Access Token for %s",this.options.user),t(...e)};this.provisionCallback?this.provisionCallback(this.options.user,!!e,(e,t,r)=>{!e&&t&&(this.accessToken=t,this.expires=r||0),i(e,t)}):this.generateToken(i)}updateToken(e,t){this.accessToken=e,t=Math.max(Number(t)||0,0),this.expires=t&&Date.now()+1e3*t||0,this.emit("token",{user:this.options.user,accessToken:e||"",expires:this.expires})}generateToken(e){let t,i;if(this.options.serviceClient){let r,a=Math.floor(Date.now()/1e3),n={iss:this.options.serviceClient,scope:this.options.scope||"https://mail.google.com/",sub:this.options.user,aud:this.options.accessUrl,iat:a,exp:a+this.options.serviceRequestTimeout};try{r=this.jwtSignRS256(n)}catch(t){return e(Error("Can't generate token. Check your auth options"))}t={grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",assertion:r},i={grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",assertion:n}}else{if(!this.options.refreshToken)return e(Error("Can't create new access token for user"));t={client_id:this.options.clientId||"",client_secret:this.options.clientSecret||"",refresh_token:this.options.refreshToken,grant_type:"refresh_token"},i={client_id:this.options.clientId||"",client_secret:(this.options.clientSecret||"").substr(0,6)+"...",refresh_token:(this.options.refreshToken||"").substr(0,6)+"...",grant_type:"refresh_token"}}Object.keys(this.options.customParams).forEach(e=>{t[e]=this.options.customParams[e],i[e]=this.options.customParams[e]}),this.logger.debug({tnx:"OAUTH2",user:this.options.user,action:"generate"},"Requesting token using: %s",JSON.stringify(i)),this.postRequest(this.options.accessUrl,t,this.options,(t,i)=>{let r;if(t)return e(t);try{r=JSON.parse(i.toString())}catch(t){return e(t)}if(!r||"object"!=typeof r)return this.logger.debug({tnx:"OAUTH2",user:this.options.user,action:"post"},"Response: %s",(i||"").toString()),e(Error("Invalid authentication response"));let a={};if(Object.keys(r).forEach(e=>{"access_token"!==e?a[e]=r[e]:a[e]=(r[e]||"").toString().substr(0,6)+"..."}),this.logger.debug({tnx:"OAUTH2",user:this.options.user,action:"post"},"Response: %s",JSON.stringify(a)),r.error){let t=r.error;return r.error_description&&(t+=": "+r.error_description),r.error_uri&&(t+=" ("+r.error_uri+")"),e(Error(t))}return r.access_token?(this.updateToken(r.access_token,r.expires_in),e(null,this.accessToken)):e(Error("No access token"))})}buildXOAuth2Token(e){let t=["user="+(this.options.user||""),"auth=Bearer "+(e||this.accessToken),"",""];return Buffer.from(t.join("\x01"),"utf-8").toString("base64")}postRequest(e,t,i,r){let n=!1,s=[],o=0,l=a(e,{method:"post",headers:i.customHeaders,body:t,allowErrorResponse:!0});l.on("readable",()=>{let e;for(;null!==(e=l.read());)s.push(e),o+=e.length}),l.once("error",e=>{if(!n)return n=!0,r(e)}),l.once("end",()=>{if(!n)return n=!0,r(null,Buffer.concat(s,o))})}toBase64URL(e){return"string"==typeof e&&(e=Buffer.from(e)),e.toString("base64").replace(/[=]+/g,"").replace(/\+/g,"-").replace(/\//g,"_")}jwtSignRS256(e){e=['{"alg":"RS256","typ":"JWT"}',JSON.stringify(e)].map(e=>this.toBase64URL(e)).join(".");let t=n.createSign("RSA-SHA256").update(e).sign(this.options.privateKey);return e+"."+this.toBase64URL(t)}}},90817,(e,t,i)=>{"use strict";let r=e.r(25106),a=e.r(14173).assign,n=e.r(29856),s=e.r(27699);t.exports=class extends s{constructor(e){if(super(),this.pool=e,this.options=e.options,this.logger=this.pool.logger,this.options.auth)switch((this.options.auth.type||"").toString().toUpperCase()){case"OAUTH2":{let e=new n(this.options.auth,this.logger);e.provisionCallback=this.pool.mailer&&this.pool.mailer.get("oauth2_provision_cb")||e.provisionCallback,this.auth={type:"OAUTH2",user:this.options.auth.user,oauth2:e,method:"XOAUTH2"},e.on("token",e=>this.pool.mailer.emit("token",e)),e.on("error",e=>this.emit("error",e));break}default:if(!this.options.auth.user&&!this.options.auth.pass)break;this.auth={type:(this.options.auth.type||"").toString().toUpperCase()||"LOGIN",user:this.options.auth.user,credentials:{user:this.options.auth.user||"",pass:this.options.auth.pass,options:this.options.auth.options},method:(this.options.auth.method||"").trim().toUpperCase()||this.options.authMethod||!1}}this._connection=!1,this._connected=!1,this.messages=0,this.available=!0}connect(e){this.pool.getSocket(this.options,(t,i)=>{if(t)return e(t);let n=!1,s=this.options;i&&i.connection&&(this.logger.info({tnx:"proxy",remoteAddress:i.connection.remoteAddress,remotePort:i.connection.remotePort,destHost:s.host||"",destPort:s.port||"",action:"connected"},"Using proxied socket from %s:%s to %s:%s",i.connection.remoteAddress,i.connection.remotePort,s.host||"",s.port||""),s=a(!1,s),Object.keys(i).forEach(e=>{s[e]=i[e]})),this.connection=new r(s),this.connection.once("error",t=>{if(this.emit("error",t),!n)return n=!0,e(t)}),this.connection.once("end",()=>{if(this.close(),n)return;n=!0;let t=setTimeout(()=>{if(n)return;let t=Error("Unexpected socket close");this.connection&&this.connection._socket&&this.connection._socket.upgrading&&(t.code="ETLS"),e(t)},1e3);try{t.unref()}catch(e){}}),this.connection.connect(()=>{if(!n)if(!this.auth||!this.connection.allowsAuth&&!s.forceAuth)return n=!0,this._connected=!0,e(null,!0);else this.connection.login(this.auth,t=>{if(!n){if(n=!0,t)return this.connection.close(),this.emit("error",t),e(t);this._connected=!0,e(null,!0)}})})})}send(e,t){if(!this._connected)return this.connect(i=>i?t(i):this.send(e,t));let i=e.message.getEnvelope(),r=e.message.messageId(),a=[].concat(i.to||[]);a.length>3&&a.push("...and "+a.splice(2).length+" more"),this.logger.info({tnx:"send",messageId:r,cid:this.id},"Sending message %s using #%s to <%s>",r,this.id,a.join(", ")),e.data.dsn&&(i.dsn=e.data.dsn),this.connection.send(i,e.message.createReadStream(),(e,a)=>{if(this.messages++,e)return this.connection.close(),this.emit("error",e),t(e);a.envelope={from:i.from,to:i.to},a.messageId=r,setImmediate(()=>{let e;this.messages>=this.options.maxMessages?((e=Error("Resource exhausted")).code="EMAXLIMIT",this.connection.close(),this.emit("error",e)):this.pool._checkRateLimit(()=>{this.available=!0,this.emit("available")})}),t(null,a)})}close(){this._connected=!1,this.auth&&this.auth.oauth2&&this.auth.oauth2.removeAllListeners(),this.connection&&this.connection.close(),this.emit("close")}}},75477,(e,t,i)=>{t.exports={"1und1":{host:"smtp.1und1.de",port:465,secure:!0,authMethod:"LOGIN"},Aliyun:{domains:["aliyun.com"],host:"smtp.aliyun.com",port:465,secure:!0},AOL:{domains:["aol.com"],host:"smtp.aol.com",port:587},Bluewin:{host:"smtpauths.bluewin.ch",domains:["bluewin.ch"],port:465},DebugMail:{host:"debugmail.io",port:25},DynectEmail:{aliases:["Dynect"],host:"smtp.dynect.net",port:25},Ethereal:{aliases:["ethereal.email"],host:"smtp.ethereal.email",port:587},FastMail:{domains:["fastmail.fm"],host:"smtp.fastmail.com",port:465,secure:!0},"Forward Email":{aliases:["FE","ForwardEmail"],domains:["forwardemail.net"],host:"smtp.forwardemail.net",port:465,secure:!0},"Feishu Mail":{aliases:["Feishu","FeishuMail"],domains:["www.feishu.cn"],host:"smtp.feishu.cn",port:465,secure:!0},GandiMail:{aliases:["Gandi","Gandi Mail"],host:"mail.gandi.net",port:587},Gmail:{aliases:["Google Mail"],domains:["gmail.com","googlemail.com"],host:"smtp.gmail.com",port:465,secure:!0},Godaddy:{host:"smtpout.secureserver.net",port:25},GodaddyAsia:{host:"smtp.asia.secureserver.net",port:25},GodaddyEurope:{host:"smtp.europe.secureserver.net",port:25},"hot.ee":{host:"mail.hot.ee"},Hotmail:{aliases:["Outlook","Outlook.com","Hotmail.com"],domains:["hotmail.com","outlook.com"],host:"smtp-mail.outlook.com",port:587},iCloud:{aliases:["Me","Mac"],domains:["me.com","mac.com"],host:"smtp.mail.me.com",port:587},Infomaniak:{host:"mail.infomaniak.com",domains:["ik.me","ikmail.com","etik.com"],port:587},Loopia:{host:"mailcluster.loopia.se",port:465},"mail.ee":{host:"smtp.mail.ee"},"Mail.ru":{host:"smtp.mail.ru",port:465,secure:!0},"Mailcatch.app":{host:"sandbox-smtp.mailcatch.app",port:2525},Maildev:{port:1025,ignoreTLS:!0},Mailgun:{host:"smtp.mailgun.org",port:465,secure:!0},Mailjet:{host:"in.mailjet.com",port:587},Mailosaur:{host:"mailosaur.io",port:25},Mailtrap:{host:"live.smtp.mailtrap.io",port:587},Mandrill:{host:"smtp.mandrillapp.com",port:587},Naver:{host:"smtp.naver.com",port:587},One:{host:"send.one.com",port:465,secure:!0},OpenMailBox:{aliases:["OMB","openmailbox.org"],host:"smtp.openmailbox.org",port:465,secure:!0},Outlook365:{host:"smtp.office365.com",port:587,secure:!1},OhMySMTP:{host:"smtp.ohmysmtp.com",port:587,secure:!1},Postmark:{aliases:["PostmarkApp"],host:"smtp.postmarkapp.com",port:2525},Proton:{aliases:["ProtonMail","Proton.me","Protonmail.com","Protonmail.ch"],domains:["proton.me","protonmail.com","pm.me","protonmail.ch"],host:"smtp.protonmail.ch",port:587,requireTLS:!0},"qiye.aliyun":{host:"smtp.mxhichina.com",port:"465",secure:!0},QQ:{domains:["qq.com"],host:"smtp.qq.com",port:465,secure:!0},QQex:{aliases:["QQ Enterprise"],domains:["exmail.qq.com"],host:"smtp.exmail.qq.com",port:465,secure:!0},SendCloud:{host:"smtp.sendcloud.net",port:2525},SendGrid:{host:"smtp.sendgrid.net",port:587},SendinBlue:{aliases:["Brevo"],host:"smtp-relay.brevo.com",port:587},SendPulse:{host:"smtp-pulse.com",port:465,secure:!0},SES:{host:"email-smtp.us-east-1.amazonaws.com",port:465,secure:!0},"SES-US-EAST-1":{host:"email-smtp.us-east-1.amazonaws.com",port:465,secure:!0},"SES-US-WEST-2":{host:"email-smtp.us-west-2.amazonaws.com",port:465,secure:!0},"SES-EU-WEST-1":{host:"email-smtp.eu-west-1.amazonaws.com",port:465,secure:!0},"SES-AP-SOUTH-1":{host:"email-smtp.ap-south-1.amazonaws.com",port:465,secure:!0},"SES-AP-NORTHEAST-1":{host:"email-smtp.ap-northeast-1.amazonaws.com",port:465,secure:!0},"SES-AP-NORTHEAST-2":{host:"email-smtp.ap-northeast-2.amazonaws.com",port:465,secure:!0},"SES-AP-NORTHEAST-3":{host:"email-smtp.ap-northeast-3.amazonaws.com",port:465,secure:!0},"SES-AP-SOUTHEAST-1":{host:"email-smtp.ap-southeast-1.amazonaws.com",port:465,secure:!0},"SES-AP-SOUTHEAST-2":{host:"email-smtp.ap-southeast-2.amazonaws.com",port:465,secure:!0},Seznam:{aliases:["Seznam Email"],domains:["seznam.cz","email.cz","post.cz","spoluzaci.cz"],host:"smtp.seznam.cz",port:465,secure:!0},Sparkpost:{aliases:["SparkPost","SparkPost Mail"],domains:["sparkpost.com"],host:"smtp.sparkpostmail.com",port:587,secure:!1},Tipimail:{host:"smtp.tipimail.com",port:587},Yahoo:{domains:["yahoo.com"],host:"smtp.mail.yahoo.com",port:465,secure:!0},Yandex:{domains:["yandex.ru"],host:"smtp.yandex.ru",port:465,secure:!0},Zoho:{host:"smtp.zoho.com",port:465,secure:!0,authMethod:"LOGIN"},126:{host:"smtp.126.com",port:465,secure:!0},163:{host:"smtp.163.com",port:465,secure:!0}}},81140,(e,t,i)=>{"use strict";let r=e.r(75477),a={};function n(e){return e.replace(/[^a-zA-Z0-9.-]/g,"").toLowerCase()}function s(e){let t=["domains","aliases"],i={};return Object.keys(e).forEach(r=>{0>t.indexOf(r)&&(i[r]=e[r])}),i}Object.keys(r).forEach(e=>{let t=r[e];a[n(e)]=s(t),[].concat(t.aliases||[]).forEach(e=>{a[n(e)]=s(t)}),[].concat(t.domains||[]).forEach(e=>{a[n(e)]=s(t)})}),t.exports=function(e){return a[e=n(e.split("@").pop())]||!1}},70027,(e,t,i)=>{"use strict";let r=e.r(27699),a=e.r(90817),n=e.r(25106),s=e.r(81140),o=e.r(14173),l=e.r(87361);t.exports=class extends r{constructor(e){let t;super(),"string"==typeof(e=e||{})&&(e={url:e});let i=e.service;"function"==typeof e.getSocket&&(this.getSocket=e.getSocket),e.url&&(t=o.parseConnectionUrl(e.url),i=i||t.service),this.options=o.assign(!1,e,t,i&&s(i)),this.options.maxConnections=this.options.maxConnections||5,this.options.maxMessages=this.options.maxMessages||100,this.logger=o.getLogger(this.options,{component:this.options.component||"smtp-pool"});let r=new n(this.options);this.name="SMTP (pool)",this.version=l.version+"[client:"+r.version+"]",this._rateLimit={counter:0,timeout:null,waiting:[],checkpoint:!1,delta:Number(this.options.rateDelta)||1e3,limit:Number(this.options.rateLimit)||0},this._closed=!1,this._queue=[],this._connections=[],this._connectionCounter=0,this.idling=!0,setImmediate(()=>{this.idling&&this.emit("idle")})}getSocket(e,t){return setImmediate(()=>t(null,!1))}send(e,t){return!this._closed&&(this._queue.push({mail:e,requeueAttempts:0,callback:t}),this.idling&&this._queue.length>=this.options.maxConnections&&(this.idling=!1),setImmediate(()=>this._processMessages()),!0)}close(){let e,t=this._connections.length;if(this._closed=!0,clearTimeout(this._rateLimit.timeout),!t&&!this._queue.length)return;for(let i=t-1;i>=0;i--)this._connections[i]&&this._connections[i].available&&((e=this._connections[i]).close(),this.logger.info({tnx:"connection",cid:e.id,action:"removed"},"Connection #%s removed",e.id));if(t&&!this._connections.length&&this.logger.debug({tnx:"connection"},"All connections removed"),!this._queue.length)return;let i=()=>{if(!this._queue.length)return void this.logger.debug({tnx:"connection"},"Pending queue entries cleared");let t=this._queue.shift();if(t&&"function"==typeof t.callback)try{t.callback(Error("Connection pool was closed"))}catch(t){this.logger.error({err:t,tnx:"callback",cid:e.id},"Callback error for #%s: %s",e.id,t.message)}setImmediate(i)};setImmediate(i)}_processMessages(){let e,t,i;if(this._closed)return;if(!this._queue.length){this.idling||(this.idling=!0,this.emit("idle"));return}for(t=0,i=this._connections.length;t<i;t++)if(this._connections[t].available){e=this._connections[t];break}if(!e&&this._connections.length<this.options.maxConnections&&(e=this._createConnection()),!e){this.idling=!1;return}!this.idling&&this._queue.length<this.options.maxConnections&&(this.idling=!0,this.emit("idle"));let r=e.queueEntry=this._queue.shift();r.messageId=(e.queueEntry.mail.message.getHeader("message-id")||"").replace(/[<>\s]/g,""),e.available=!1,this.logger.debug({tnx:"pool",cid:e.id,messageId:r.messageId,action:"assign"},"Assigned message <%s> to #%s (%s)",r.messageId,e.id,e.messages+1),this._rateLimit.limit&&(this._rateLimit.counter++,this._rateLimit.checkpoint||(this._rateLimit.checkpoint=Date.now())),e.send(r.mail,(t,i)=>{if(r===e.queueEntry){try{r.callback(t,i)}catch(t){this.logger.error({err:t,tnx:"callback",cid:e.id},"Callback error for #%s: %s",e.id,t.message)}e.queueEntry=!1}})}_createConnection(){let e=new a(this);return e.id=++this._connectionCounter,this.logger.info({tnx:"pool",cid:e.id,action:"conection"},"Created new pool resource #%s",e.id),e.on("available",()=>{this.logger.debug({tnx:"connection",cid:e.id,action:"available"},"Connection #%s became available",e.id),this._closed?this.close():this._processMessages()}),e.once("error",t=>{if("EMAXLIMIT"!==t.code?this.logger.error({err:t,tnx:"pool",cid:e.id},"Pool Error for #%s: %s",e.id,t.message):this.logger.debug({tnx:"pool",cid:e.id,action:"maxlimit"},"Max messages limit exchausted for #%s",e.id),e.queueEntry){try{e.queueEntry.callback(t)}catch(t){this.logger.error({err:t,tnx:"callback",cid:e.id},"Callback error for #%s: %s",e.id,t.message)}e.queueEntry=!1}this._removeConnection(e),this._continueProcessing()}),e.once("close",()=>{this.logger.info({tnx:"connection",cid:e.id,action:"closed"},"Connection #%s was closed",e.id),this._removeConnection(e),e.queueEntry?setTimeout(()=>{e.queueEntry&&(this._shouldRequeuOnConnectionClose(e.queueEntry)?this._requeueEntryOnConnectionClose(e):this._failDeliveryOnConnectionClose(e)),this._continueProcessing()},50):this._continueProcessing()}),this._connections.push(e),e}_shouldRequeuOnConnectionClose(e){return void 0===this.options.maxRequeues||this.options.maxRequeues<0||e.requeueAttempts<this.options.maxRequeues}_failDeliveryOnConnectionClose(e){if(e.queueEntry&&e.queueEntry.callback){try{e.queueEntry.callback(Error("Reached maximum number of retries after connection was closed"))}catch(t){this.logger.error({err:t,tnx:"callback",messageId:e.queueEntry.messageId,cid:e.id},"Callback error for #%s: %s",e.id,t.message)}e.queueEntry=!1}}_requeueEntryOnConnectionClose(e){e.queueEntry.requeueAttempts=e.queueEntry.requeueAttempts+1,this.logger.debug({tnx:"pool",cid:e.id,messageId:e.queueEntry.messageId,action:"requeue"},"Re-queued message <%s> for #%s. Attempt: #%s",e.queueEntry.messageId,e.id,e.queueEntry.requeueAttempts),this._queue.unshift(e.queueEntry),e.queueEntry=!1}_continueProcessing(){this._closed?this.close():setTimeout(()=>this._processMessages(),100)}_removeConnection(e){let t=this._connections.indexOf(e);-1!==t&&this._connections.splice(t,1)}_checkRateLimit(e){if(!this._rateLimit.limit)return e();let t=Date.now();return this._rateLimit.counter<this._rateLimit.limit?e():(this._rateLimit.waiting.push(e),this._rateLimit.checkpoint<=t-this._rateLimit.delta)?this._clearRateLimit():void(!this._rateLimit.timeout&&(this._rateLimit.timeout=setTimeout(()=>this._clearRateLimit(),this._rateLimit.delta-(t-this._rateLimit.checkpoint)),this._rateLimit.checkpoint=t))}_clearRateLimit(){for(clearTimeout(this._rateLimit.timeout),this._rateLimit.timeout=null,this._rateLimit.counter=0,this._rateLimit.checkpoint=!1;this._rateLimit.waiting.length;)setImmediate(this._rateLimit.waiting.shift())}isIdle(){return this.idling}verify(e){let t;e||(t=new Promise((t,i)=>{e=o.callbackPromise(t,i)}));let i=new a(this).auth;return this.getSocket(this.options,(t,r)=>{if(t)return e(t);let a=this.options;r&&r.connection&&(this.logger.info({tnx:"proxy",remoteAddress:r.connection.remoteAddress,remotePort:r.connection.remotePort,destHost:a.host||"",destPort:a.port||"",action:"connected"},"Using proxied socket from %s:%s to %s:%s",r.connection.remoteAddress,r.connection.remotePort,a.host||"",a.port||""),a=o.assign(!1,a),Object.keys(r).forEach(e=>{a[e]=r[e]}));let s=new n(a),l=!1;s.once("error",t=>{if(!l)return l=!0,s.close(),e(t)}),s.once("end",()=>{if(!l)return l=!0,e(Error("Connection closed"))});let d=()=>{if(!l)return l=!0,s.quit(),e(null,!0)};s.connect(()=>{if(!l)if(i&&(s.allowsAuth||a.forceAuth))s.login(i,t=>{if(!l){if(t)return l=!0,s.close(),e(t);d()}});else if(!i&&s.allowsAuth&&a.forceAuth){let t=Error("Authentication info was not provided");return t.code="NoAuth",l=!0,s.close(),e(t)}else d()})}),t}}},88312,(e,t,i)=>{"use strict";let r=e.r(27699),a=e.r(25106),n=e.r(81140),s=e.r(14173),o=e.r(29856),l=e.r(87361);t.exports=class extends r{constructor(e){let t;super(),"string"==typeof(e=e||{})&&(e={url:e});let i=e.service;"function"==typeof e.getSocket&&(this.getSocket=e.getSocket),e.url&&(t=s.parseConnectionUrl(e.url),i=i||t.service),this.options=s.assign(!1,e,t,i&&n(i)),this.logger=s.getLogger(this.options,{component:this.options.component||"smtp-transport"});let r=new a(this.options);this.name="SMTP",this.version=l.version+"[client:"+r.version+"]",this.options.auth&&(this.auth=this.getAuth({}))}getSocket(e,t){return setImmediate(()=>t(null,!1))}getAuth(e){if(!e)return this.auth;let t=!1,i={};if(this.options.auth&&"object"==typeof this.options.auth&&Object.keys(this.options.auth).forEach(e=>{t=!0,i[e]=this.options.auth[e]}),e&&"object"==typeof e&&Object.keys(e).forEach(r=>{t=!0,i[r]=e[r]}),!t)return!1;if("OAUTH2"!==(i.type||"").toString().toUpperCase())return{type:(i.type||"").toString().toUpperCase()||"LOGIN",user:i.user,credentials:{user:i.user||"",pass:i.pass,options:i.options},method:(i.method||"").trim().toUpperCase()||this.options.authMethod||!1};{if(!i.service&&!i.user)return!1;let e=new o(i,this.logger);return e.provisionCallback=this.mailer&&this.mailer.get("oauth2_provision_cb")||e.provisionCallback,e.on("token",e=>this.mailer.emit("token",e)),e.on("error",e=>this.emit("error",e)),{type:"OAUTH2",user:i.user,oauth2:e,method:"XOAUTH2"}}}send(e,t){this.getSocket(this.options,(i,r)=>{if(i)return t(i);let n=!1,o=this.options;r&&r.connection&&(this.logger.info({tnx:"proxy",remoteAddress:r.connection.remoteAddress,remotePort:r.connection.remotePort,destHost:o.host||"",destPort:o.port||"",action:"connected"},"Using proxied socket from %s:%s to %s:%s",r.connection.remoteAddress,r.connection.remotePort,o.host||"",o.port||""),o=s.assign(!1,o),Object.keys(r).forEach(e=>{o[e]=r[e]}));let l=new a(o);l.once("error",e=>{if(!n)return n=!0,l.close(),t(e)}),l.once("end",()=>{if(n)return;let e=setTimeout(()=>{if(n)return;n=!0;let e=Error("Unexpected socket close");l&&l._socket&&l._socket.upgrading&&(e.code="ETLS"),t(e)},1e3);try{e.unref()}catch(e){}});let d=()=>{let i=e.message.getEnvelope(),r=e.message.messageId(),a=[].concat(i.to||[]);a.length>3&&a.push("...and "+a.splice(2).length+" more"),e.data.dsn&&(i.dsn=e.data.dsn),this.logger.info({tnx:"send",messageId:r},"Sending message %s to <%s>",r,a.join(", ")),l.send(i,e.message.createReadStream(),(e,a)=>{if(n=!0,l.close(),e)return this.logger.error({err:e,tnx:"send"},"Send error for %s: %s",r,e.message),t(e);a.envelope={from:i.from,to:i.to},a.messageId=r;try{return t(null,a)}catch(e){this.logger.error({err:e,tnx:"callback"},"Callback error for %s: %s",r,e.message)}})};l.connect(()=>{if(n)return;let i=this.getAuth(e.data.auth);i&&(l.allowsAuth||o.forceAuth)?l.login(i,e=>{if(i&&i!==this.auth&&i.oauth2&&i.oauth2.removeAllListeners(),!n){if(e)return n=!0,l.close(),t(e);d()}}):d()})})}verify(e){let t;return e||(t=new Promise((t,i)=>{e=s.callbackPromise(t,i)})),this.getSocket(this.options,(t,i)=>{if(t)return e(t);let r=this.options;i&&i.connection&&(this.logger.info({tnx:"proxy",remoteAddress:i.connection.remoteAddress,remotePort:i.connection.remotePort,destHost:r.host||"",destPort:r.port||"",action:"connected"},"Using proxied socket from %s:%s to %s:%s",i.connection.remoteAddress,i.connection.remotePort,r.host||"",r.port||""),r=s.assign(!1,r),Object.keys(i).forEach(e=>{r[e]=i[e]}));let n=new a(r),o=!1;n.once("error",t=>{if(!o)return o=!0,n.close(),e(t)}),n.once("end",()=>{if(!o)return o=!0,e(Error("Connection closed"))});let l=()=>{if(!o)return o=!0,n.quit(),e(null,!0)};n.connect(()=>{if(o)return;let t=this.getAuth({});if(t&&(n.allowsAuth||r.forceAuth))n.login(t,t=>{if(!o){if(t)return o=!0,n.close(),e(t);l()}});else if(!t&&n.allowsAuth&&r.forceAuth){let t=Error("Authentication info was not provided");return t.code="NoAuth",o=!0,n.close(),e(t)}else l()})}),t}close(){this.auth&&this.auth.oauth2&&this.auth.oauth2.removeAllListeners(),this.emit("close")}}},36047,(e,t,i)=>{"use strict";let r=e.r(33405).spawn,a=e.r(87361),n=e.r(14173);t.exports=class{constructor(e){e=e||{},this._spawn=r,this.options=e||{},this.name="Sendmail",this.version=a.version,this.path="sendmail",this.args=!1,this.winbreak=!1,this.logger=n.getLogger(this.options,{component:this.options.component||"sendmail"}),e&&("string"==typeof e?this.path=e:"object"==typeof e&&(e.path&&(this.path=e.path),Array.isArray(e.args)&&(this.args=e.args),this.winbreak=["win","windows","dos","\r\n"].includes((e.newline||"").toString().toLowerCase())))}send(e,t){let i,r,a;e.message.keepBcc=!0;let n=e.data.envelope||e.message.getEnvelope(),s=e.message.messageId();if([].concat(n.from||[]).concat(n.to||[]).some(e=>/^-/.test(e)))return t(Error("Can not send mail. Invalid envelope addresses."));i=this.args?["-i"].concat(this.args).concat(n.to):["-i"].concat(n.from?["-f",n.from]:[]).concat(n.to);let o=i=>{if(!a&&(a=!0,"function"==typeof t))if(i)return t(i);else return t(null,{envelope:e.data.envelope||e.message.getEnvelope(),messageId:s,response:"Messages queued for delivery"})};try{r=this._spawn(this.path,i)}catch(e){return this.logger.error({err:e,tnx:"spawn",messageId:s},"Error occurred while spawning sendmail. %s",e.message),o(e)}if(!r)return o(Error("sendmail was not found"));{r.on("error",e=>{this.logger.error({err:e,tnx:"spawn",messageId:s},"Error occurred when sending message %s. %s",s,e.message),o(e)}),r.once("exit",e=>{let t;if(!e)return o();t=127===e?Error("Sendmail command not found, process exited with code "+e):Error("Sendmail exited with code "+e),this.logger.error({err:t,tnx:"stdin",messageId:s},"Error sending message %s to sendmail. %s",s,t.message),o(t)}),r.once("close",o),r.stdin.on("error",e=>{this.logger.error({err:e,tnx:"stdin",messageId:s},"Error occurred when piping message %s to sendmail. %s",s,e.message),o(e)});let t=[].concat(n.to||[]);t.length>3&&t.push("...and "+t.splice(2).length+" more"),this.logger.info({tnx:"send",messageId:s},"Sending message %s to <%s>",s,t.join(", "));let i=e.message.createReadStream();i.once("error",e=>{this.logger.error({err:e,tnx:"stdin",messageId:s},"Error occurred when generating message %s. %s",s,e.message),r.kill("SIGINT"),o(e)}),i.pipe(r.stdin)}}}},11152,(e,t,i)=>{"use strict";let r=e.r(87361),a=e.r(14173);t.exports=class{constructor(e){e=e||{},this.options=e||{},this.name="StreamTransport",this.version=r.version,this.logger=a.getLogger(this.options,{component:this.options.component||"stream-transport"}),this.winbreak=["win","windows","dos","\r\n"].includes((e.newline||"").toString().toLowerCase())}send(e,t){e.message.keepBcc=!0;let i=e.data.envelope||e.message.getEnvelope(),r=e.message.messageId(),a=[].concat(i.to||[]);a.length>3&&a.push("...and "+a.splice(2).length+" more"),this.logger.info({tnx:"send",messageId:r},"Sending message %s to <%s> using %s line breaks",r,a.join(", "),this.winbreak?"<CR><LF>":"<LF>"),setImmediate(()=>{let i;try{i=e.message.createReadStream()}catch(e){return this.logger.error({err:e,tnx:"send",messageId:r},"Creating send stream failed for %s. %s",r,e.message),t(e)}if(!this.options.buffer)return i.once("error",e=>{this.logger.error({err:e,tnx:"send",messageId:r},"Failed creating message for %s. %s",r,e.message)}),t(null,{envelope:e.data.envelope||e.message.getEnvelope(),messageId:r,message:i});let a=[],n=0;i.on("readable",()=>{let e;for(;null!==(e=i.read());)a.push(e),n+=e.length}),i.once("error",e=>(this.logger.error({err:e,tnx:"send",messageId:r},"Failed creating message for %s. %s",r,e.message),t(e))),i.on("end",()=>t(null,{envelope:e.data.envelope||e.message.getEnvelope(),messageId:r,message:Buffer.concat(a,n)}))})}}},18766,(e,t,i)=>{"use strict";let r=e.r(87361),a=e.r(14173);t.exports=class{constructor(e){e=e||{},this.options=e||{},this.name="JSONTransport",this.version=r.version,this.logger=a.getLogger(this.options,{component:this.options.component||"json-transport"})}send(e,t){e.message.keepBcc=!0;let i=e.data.envelope||e.message.getEnvelope(),r=e.message.messageId(),a=[].concat(i.to||[]);a.length>3&&a.push("...and "+a.splice(2).length+" more"),this.logger.info({tnx:"send",messageId:r},"Composing JSON structure of %s to <%s>",r,a.join(", ")),setImmediate(()=>{e.normalize((e,a)=>e?(this.logger.error({err:e,tnx:"send",messageId:r},"Failed building JSON structure for %s. %s",r,e.message),t(e)):(delete a.envelope,delete a.normalizedHeaders,t(null,{envelope:i,messageId:r,message:this.options.skipEncoding?a:JSON.stringify(a)})))})}}},97611,(e,t,i)=>{"use strict";let r=e.r(27699),a=e.r(87361),n=e.r(14173),s=e.r(74133);t.exports=class extends r{constructor(e){super(),e=e||{},this.options=e||{},this.ses=this.options.SES,this.name="SESTransport",this.version=a.version,this.logger=n.getLogger(this.options,{component:this.options.component||"ses-transport"}),this.maxConnections=Number(this.options.maxConnections)||1/0,this.connections=0,this.sendingRate=Number(this.options.sendingRate)||1/0,this.sendingRateTTL=null,this.rateInterval=1e3,this.rateMessages=[],this.pending=[],this.idling=!0,setImmediate(()=>{this.idling&&this.emit("idle")})}send(e,t){if(this.connections>=this.maxConnections||!this._checkSendingRate())return this.idling=!1,this.pending.push({mail:e,callback:t});this._send(e,(...e)=>{setImmediate(()=>t(...e)),this._sent()})}_checkRatedQueue(){if(this.connections>=this.maxConnections||!this._checkSendingRate())return;if(!this.pending.length){this.idling||(this.idling=!0,this.emit("idle"));return}let e=this.pending.shift();this._send(e.mail,(...t)=>{setImmediate(()=>e.callback(...t)),this._sent()})}_checkSendingRate(){clearTimeout(this.sendingRateTTL);let e=Date.now(),t=!1;for(let i=this.rateMessages.length-1;i>=0;i--)this.rateMessages[i].ts>=e-this.rateInterval&&(!t||this.rateMessages[i].ts<t)&&(t=this.rateMessages[i].ts),this.rateMessages[i].ts<e-this.rateInterval&&!this.rateMessages[i].pending&&this.rateMessages.splice(i,1);if(this.rateMessages.length<this.sendingRate)return!0;let i=Math.max(t+1001,e+20);this.sendingRateTTL=setTimeout(()=>this._checkRatedQueue(),e-i);try{this.sendingRateTTL.unref()}catch(e){}return!1}_sent(){this.connections--,this._checkRatedQueue()}isIdle(){return this.idling}_send(e,t){let i={ts:Date.now(),pending:!0};this.connections++,this.rateMessages.push(i);let r=e.data.envelope||e.message.getEnvelope(),a=e.message.messageId(),n=[].concat(r.to||[]);n.length>3&&n.push("...and "+n.splice(2).length+" more"),this.logger.info({tnx:"send",messageId:a},"Sending message %s to <%s>",a,n.join(", ")),setImmediate(()=>{var n;let o,l,d,c;return n=(n,s)=>{var o;if(n)return this.logger.error({err:n,tnx:"send",messageId:a},"Failed creating message for %s. %s",a,n.message),i.pending=!1,t(n);let l={RawMessage:{Data:s},Source:r.from,Destinations:r.to};Object.keys(e.data.ses||{}).forEach(t=>{l[t]=e.data.ses[t]});let d=(this.ses.aws?this.ses.ses:this.ses)||{},c=this.ses.aws||{};o=(e,n)=>{(e||!n)&&(n="us-east-1"),("function"==typeof d.send&&c.SendRawEmailCommand?d.send(new c.SendRawEmailCommand(l)):d.sendRawEmail(l).promise()).then(e=>{"us-east-1"===n&&(n="email"),i.pending=!1,t(null,{envelope:{from:r.from,to:r.to},messageId:"<"+e.MessageId+(/@/.test(e.MessageId)?"":"@"+n+".amazonses.com")+">",response:e.MessageId,raw:s})}).catch(e=>{this.logger.error({err:e,tnx:"send"},"Send error for %s: %s",a,e.message),i.pending=!1,t(e)})},d.config&&"function"==typeof d.config.region?d.config.region().then(e=>o(null,e)).catch(e=>o(e)):o(null,d.config&&d.config.region||"us-east-1")},e.data._dkim||(e.data._dkim={}),e.data._dkim.skipFields&&"string"==typeof e.data._dkim.skipFields?e.data._dkim.skipFields+=":date:message-id":e.data._dkim.skipFields="date:message-id",l=(o=e.message.createReadStream()).pipe(new s),d=[],c=0,void(l.on("readable",()=>{let e;for(;null!==(e=l.read());)d.push(e),c+=e.length}),o.once("error",e=>l.emit("error",e)),l.once("error",e=>{n(e)}),l.once("end",()=>n(null,Buffer.concat(d,c))))})}verify(e){let t,i=(this.ses.aws?this.ses.ses:this.ses)||{},r=this.ses.aws||{},a={RawMessage:{Data:"From: invalid@invalid\r\nTo: invalid@invalid\r\n Subject: Invalid\r\n\r\nInvalid"},Source:"invalid@invalid",Destinations:["invalid@invalid"]};e||(t=new Promise((t,i)=>{e=n.callbackPromise(t,i)}));let s=t=>t&&"InvalidParameterValue"!==(t.code||t.Code)?e(t):e(null,!0);return"function"==typeof i.send&&r.SendRawEmailCommand?(a.RawMessage.Data=Buffer.from(a.RawMessage.Data),i.send(new r.SendRawEmailCommand(a),s)):i.sendRawEmail(a,s),t}}},29508,(e,t,i)=>{"use strict";let r=e.r(98267),a=e.r(14173),n=e.r(70027),s=e.r(88312),o=e.r(36047),l=e.r(11152),d=e.r(18766),c=e.r(97611),u=e.r(13970),p=e.r(87361),h=(process.env.ETHEREAL_API||"https://api.nodemailer.com").replace(/\/+$/,""),m=(process.env.ETHEREAL_WEB||"https://ethereal.email").replace(/\/+$/,""),f=(process.env.ETHEREAL_API_KEY||"").replace(/\s*/g,"")||null,y=["true","yes","y","1"].includes((process.env.ETHEREAL_CACHE||"yes").toString().trim().toLowerCase()),b=!1;t.exports.createTransport=function(e,t){let i,u;return("object"==typeof e&&"function"!=typeof e.send||"string"==typeof e&&/^(smtps?|direct):/i.test(e))&&(e=(u=(i="string"==typeof e?e:e.url)?a.parseConnectionUrl(i):e).pool?new n(u):u.sendmail?new o(u):u.streamTransport?new l(u):u.jsonTransport?new d(u):u.SES?new c(u):new s(u)),new r(e,u,t)},t.exports.createTestAccount=function(e,t){let i;if(t||"function"!=typeof e||(t=e,e=!1),t||(i=new Promise((e,i)=>{t=a.callbackPromise(e,i)})),y&&b)return setImmediate(()=>t(null,b)),i;e=e||h;let r=[],n=0,s={},o={requestor:p.name,version:p.version};f&&(s.Authorization="Bearer "+f);let l=u(e+"/user",{contentType:"application/json",method:"POST",headers:s,body:Buffer.from(JSON.stringify(o))});return l.on("readable",()=>{let e;for(;null!==(e=l.read());)r.push(e),n+=e.length}),l.once("error",e=>t(e)),l.once("end",()=>{let e,i,a=Buffer.concat(r,n);try{e=JSON.parse(a.toString())}catch(e){i=e}return i?t(i):"success"!==e.status||e.error?t(Error(e.error||"Request failed")):void(delete e.status,t(null,b=e))}),i},t.exports.getTestMessageUrl=function(e){if(!e||!e.response)return!1;let t=new Map;return e.response.replace(/\[([^\]]+)\]$/,(e,i)=>{i.replace(/\b([A-Z0-9]+)=([^\s]+)/g,(e,i,r)=>{t.set(i,r)})}),!!(t.has("STATUS")&&t.has("MSGID"))&&(b.web||m)+"/message/"+t.get("MSGID")}},51157,e=>{"use strict";let t,i,r,a,n,s,o,l;class d{static normalize(e){return Number.isFinite(e)?{type:"fixed",delay:e}:e||void 0}static calculate(e,t,i,r,a){if(e)return(function(e,t){if(e.type in d.builtinStrategies)return d.builtinStrategies[e.type](e.delay,e.jitter);if(t)return t;throw Error(`Unknown backoff strategy ${e.type}.
      If a custom backoff strategy is used, specify it when the queue is created.`)})(e,a)(t,e.type,i,r)}}d.builtinStrategies={fixed:function(e,t=0){return function(){return t>0?Math.floor(Math.random()*e*t+e*(1-t)):e}},exponential:function(e,t=0){return function(i){if(!(t>0))return Math.round(Math.pow(2,i-1)*e);{let r=Math.round(Math.pow(2,i-1)*e);return Math.floor(Math.random()*r*t+r*(1-t))}}}},e.i(33405);var c,u,p,h,m,f,y,b,g,v,x,K,k,S,E,I,w,j,A,T,C,D,O,R,M,_,P=e.i(4446);e.i(37702),(c=v||(v={}))[c.Init=0]="Init",c[c.Start=1]="Start",c[c.Stop=2]="Stop",c[c.GetChildrenValuesResponse=3]="GetChildrenValuesResponse",c[c.GetIgnoredChildrenFailuresResponse=4]="GetIgnoredChildrenFailuresResponse",c[c.GetDependenciesCountResponse=5]="GetDependenciesCountResponse",c[c.MoveToWaitingChildrenResponse=6]="MoveToWaitingChildrenResponse",c[c.Cancel=7]="Cancel",c[c.GetDependenciesResponse=8]="GetDependenciesResponse",(u=x||(x={}))[u.JobNotExist=-1]="JobNotExist",u[u.JobLockNotExist=-2]="JobLockNotExist",u[u.JobNotInState=-3]="JobNotInState",u[u.JobPendingChildren=-4]="JobPendingChildren",u[u.ParentJobNotExist=-5]="ParentJobNotExist",u[u.JobLockMismatch=-6]="JobLockMismatch",u[u.ParentJobCannotBeReplaced=-7]="ParentJobCannotBeReplaced",u[u.JobBelongsToJobScheduler=-8]="JobBelongsToJobScheduler",u[u.JobHasFailedChildren=-9]="JobHasFailedChildren",u[u.SchedulerJobIdCollision=-10]="SchedulerJobIdCollision",u[u.SchedulerJobSlotsBusy=-11]="SchedulerJobSlotsBusy",(p=K||(K={}))[p.Completed=0]="Completed",p[p.Error=1]="Error",p[p.Failed=2]="Failed",p[p.InitFailed=3]="InitFailed",p[p.InitCompleted=4]="InitCompleted",p[p.Log=5]="Log",p[p.MoveToDelayed=6]="MoveToDelayed",p[p.MoveToWait=7]="MoveToWait",p[p.Progress=8]="Progress",p[p.Update=9]="Update",p[p.GetChildrenValues=10]="GetChildrenValues",p[p.GetIgnoredChildrenFailures=11]="GetIgnoredChildrenFailures",p[p.GetDependenciesCount=12]="GetDependenciesCount",p[p.MoveToWaitingChildren=13]="MoveToWaitingChildren",p[p.GetDependencies=14]="GetDependencies",(h=k||(k={}))[h.ONE_MINUTE=1]="ONE_MINUTE",h[h.FIVE_MINUTES=5]="FIVE_MINUTES",h[h.FIFTEEN_MINUTES=15]="FIFTEEN_MINUTES",h[h.THIRTY_MINUTES=30]="THIRTY_MINUTES",h[h.ONE_HOUR=60]="ONE_HOUR",h[h.ONE_WEEK=10080]="ONE_WEEK",h[h.TWO_WEEKS=20160]="TWO_WEEKS",h[h.ONE_MONTH=80640]="ONE_MONTH",(m=S||(S={})).QueueName="bullmq.queue.name",m.QueueOperation="bullmq.queue.operation",m.BulkCount="bullmq.job.bulk.count",m.BulkNames="bullmq.job.bulk.names",m.JobName="bullmq.job.name",m.JobId="bullmq.job.id",m.JobKey="bullmq.job.key",m.JobIds="bullmq.job.ids",m.JobAttemptsMade="bullmq.job.attempts.made",m.DeduplicationKey="bullmq.job.deduplication.key",m.JobOptions="bullmq.job.options",m.JobProgress="bullmq.job.progress",m.QueueDrainDelay="bullmq.queue.drain.delay",m.QueueGrace="bullmq.queue.grace",m.QueueCleanLimit="bullmq.queue.clean.limit",m.QueueRateLimit="bullmq.queue.rate.limit",m.JobType="bullmq.job.type",m.QueueOptions="bullmq.queue.options",m.QueueEventMaxLength="bullmq.queue.event.max.length",m.QueueJobsState="bullmq.queue.jobs.state",m.WorkerOptions="bullmq.worker.options",m.WorkerName="bullmq.worker.name",m.WorkerId="bullmq.worker.id",m.WorkerRateLimit="bullmq.worker.rate.limit",m.WorkerDoNotWaitActive="bullmq.worker.do.not.wait.active",m.WorkerForceClose="bullmq.worker.force.close",m.WorkerStalledJobs="bullmq.worker.stalled.jobs",m.WorkerFailedJobs="bullmq.worker.failed.jobs",m.WorkerJobsToExtendLocks="bullmq.worker.jobs.to.extend.locks",m.JobFinishedTimestamp="bullmq.job.finished.timestamp",m.JobAttemptFinishedTimestamp="bullmq.job.attempt_finished_timestamp",m.JobProcessedTimestamp="bullmq.job.processed.timestamp",m.JobResult="bullmq.job.result",m.JobFailedReason="bullmq.job.failed.reason",m.FlowName="bullmq.flow.name",m.JobSchedulerId="bullmq.job.scheduler.id",m.JobStatus="bullmq.job.status",(f=E||(E={})).QueueJobsCount="bullmq.queue.jobs",f.JobsCompleted="bullmq.jobs.completed",f.JobsFailed="bullmq.jobs.failed",f.JobsDelayed="bullmq.jobs.delayed",f.JobsRetried="bullmq.jobs.retried",f.JobsWaiting="bullmq.jobs.waiting",f.JobsWaitingChildren="bullmq.jobs.waiting_children",f.JobDuration="bullmq.job.duration",(y=I||(I={}))[y.INTERNAL=0]="INTERNAL",y[y.SERVER=1]="SERVER",y[y.CLIENT=2]="CLIENT",y[y.PRODUCER=3]="PRODUCER",y[y.CONSUMER=4]="CONSUMER";var N=e.i(27699);N.EventEmitter;e.i(14747),e.i(32507);var L=e.i(50245);globalThis.AbortController||L.AbortController;var J=e.i(54799),q=e.i(26898);class F extends Error{constructor(e,t){super(null!=e?e:"Connection is closed"),this.cause=t,this.name="ConnectionClosedError",Object.setPrototypeOf(this,new.target.prototype)}}var G=e.i(50015);let V={value:null};function z(e,t,i){try{return e.apply(t,i)}catch(e){return V.value=e,V}}function B(e){let t={};for(let i=0;i<e.length;i+=2)t[e[i]]=e[i+1];return t}function H(e){let t=[];for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&void 0!==e[i]&&(t[t.length]=i,t[t.length]=e[i]);return t}function U(e,t){let i=e.getMaxListeners();e.setMaxListeners(i+t)}let Y={de:"deduplication",fpof:"failParentOnFailure",cpof:"continueParentOnFailure",idof:"ignoreDependencyOnFailure",kl:"keepLogs",rdof:"removeDependencyOnFailure"},W=Object.assign(Object.assign({},Object.entries(Y).reduce((e,[t,i])=>(e[i]=t,e),{})),{debounce:"de"});function $(e){return!!e&&["connect","disconnect","duplicate"].every(t=>"function"==typeof e[t])}function Q(e){return $(e)&&!!e.isCluster}function X(e){if(e)return`${e.queue}:${e.id}`}let Z=/ERR unknown command ['`]\s*client\s*['`]/;function ee(e){if(e instanceof F)return!1;let{code:t,message:i}=e;return i!==q.CONNECTION_CLOSED_ERROR_MSG&&!i.includes("ECONNREFUSED")&&"ECONNREFUSED"!==t}let et=(e,t,i,r="redis")=>{if(i===r){let i=G.valid(G.coerce(e));return G.lt(i,t)}return!1},ei=e=>{let t={};for(let i of Object.entries(e))t[i[0]]=JSON.parse(i[1]);return t};async function er(e,t,i,r,a,n,s){if(!e)return n();{let o,{tracer:l,contextManager:d}=e,c=d.active();s&&(o=d.fromMetadata(c,s));let u=a?`${r} ${a}`:r,p=l.startSpan(u,{kind:t},o);try{let e,a;return p.setAttributes({[S.QueueName]:i,[S.QueueOperation]:r}),e=t===I.CONSUMER&&o?p.setSpanOnContext(o):p.setSpanOnContext(c),2==n.length&&(a=d.getMetadata(e)),await d.with(e,()=>n(p,a))}catch(e){throw p.recordException(e),e}finally{p.end()}}}(b=w||(w={}))[b.Idle=0]="Idle",b[b.Started=1]="Started",b[b.Terminating=2]="Terminating",b[b.Errored=3]="Errored";function ea(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(i[r[a]]=e[r[a]]);return i}var en=("function"==typeof SuppressedError&&SuppressedError,e.i(24361));try{j=new TextDecoder}catch(e){}var es=0;let eo=[];var el=eo,ed=0,ec={},eu=0,ep=0,eh=[],em={useRecords:!1,mapsAsObjects:!0};class ef{}let ey=new ef;ey.name="MessagePack 0xC1";var eb=!1,eg=2;class ev{constructor(e){e&&(!1===e.useRecords&&void 0===e.mapsAsObjects&&(e.mapsAsObjects=!0),e.sequential&&!1!==e.trusted&&(e.trusted=!0,!e.structures&&!1!=e.useRecords&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(A)return eY(()=>(eW(),this?this.unpack(e,t):ev.prototype.unpack.call(em,e,t)));e.buffer||e.constructor!==ArrayBuffer||(e="u">typeof Buffer?Buffer.from(e):new Uint8Array(e)),"object"==typeof t?(T=t.end||e.length,es=t.start||0):(es=0,T=t>-1?t:e.length),ed=0,ep=0,D=null,el=eo,O=null,A=e;try{M=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(t){if(A=null,e instanceof Uint8Array)throw t;throw Error("Source must be a Uint8Array or Buffer but was a "+(e&&"object"==typeof e?e.constructor.name:typeof e))}return this instanceof ev?(ec=this,this.structures?C=this.structures:(!C||C.length>0)&&(C=[])):(ec=em,(!C||C.length>0)&&(C=[])),ex(t)}unpackMultiple(e,t){let i,r=0;try{eb=!0;let a=e.length,n=this?this.unpack(e,a):eQ.unpack(e,a);if(t){if(!1===t(n,r,es))return;for(;es<a;)if(r=es,!1===t(ex(),r,es))return}else{for(i=[n];es<a;)r=es,i.push(ex());return i}}catch(e){throw e.lastPosition=r,e.values=i,e}finally{eb=!1,eW()}}_mergeStructures(e,t){this._onLoadedStructures&&(e=this._onLoadedStructures(e)),Object.isFrozen(e=e||[])&&(e=e.map(e=>e.slice(0)));for(let t=0,i=e.length;t<i;t++){let i=e[t];i&&(i.isShared=!0,t>=32&&(i.highByte=t-32>>5))}for(let i in e.sharedLength=e.length,t||[])if(i>=0){let r=e[i],a=t[i];a&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[i]=r),e[i]=a)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function ex(e){try{let t;if(!ec.trusted&&!eb){let e=C.sharedLength||0;e<C.length&&(C.length=e)}if(ec._readStruct&&A[es]<64&&A[es]>=32?(t=ec._readStruct(A,es,T),A=null,!(e&&e.lazy)&&t&&(t=t.toJSON()),es=T):t=ek(),O&&(es=O.postBundlePosition,O=null),eb&&(C.restoreStructures=null),es==T)C&&C.restoreStructures&&eK(),C=null,A=null,R&&(R=null);else if(es>T)throw Error("Unexpected end of MessagePack data");else if(!eb){let e;try{e=JSON.stringify(t,(e,t)=>"bigint"==typeof t?`${t}n`:t).slice(0,100)}catch(t){e="(JSON view not available "+t+")"}throw Error("Data read, but end of buffer not reached "+e)}return t}catch(e){throw C&&C.restoreStructures&&eK(),eW(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||es>T)&&(e.incomplete=!0),e}}function eK(){for(let e in C.restoreStructures)C[e]=C.restoreStructures[e];C.restoreStructures=null}function ek(){let e=A[es++];if(e<160)if(e<128)if(e<64)return e;else{let t=C[63&e]||ec.getStructures&&ew()[63&e];return t?(t.read||(t.read=eE(t,63&e)),t.read()):e}else if(e<144){if(e-=128,ec.mapsAsObjects){let t={};for(let i=0;i<e;i++){let e=eF();"__proto__"===e&&(e="__proto_"),t[e]=ek()}return t}{let t=new Map;for(let i=0;i<e;i++)t.set(ek(),ek());return t}}else{let t=Array(e-=144);for(let i=0;i<e;i++)t[i]=ek();return ec.freezeData?Object.freeze(t):t}if(e<192){let t=e-160;if(ep>=es)return D.slice(es-eu,(es+=t)-eu);if(0==ep&&T<140){let e=t<16?eP(t):e_(t);if(null!=e)return e}return ej(t)}{let t;switch(e){case 192:return null;case 193:if(O){if((t=ek())>0)return O[1].slice(O.position1,O.position1+=t);return O[0].slice(O.position0,O.position0-=t)}return ey;case 194:return!1;case 195:return!0;case 196:if(void 0===(t=A[es++]))throw Error("Unexpected end of buffer");return eL(t);case 197:return t=M.getUint16(es),es+=2,eL(t);case 198:return t=M.getUint32(es),es+=4,eL(t);case 199:return eJ(A[es++]);case 200:return t=M.getUint16(es),es+=2,eJ(t);case 201:return t=M.getUint32(es),es+=4,eJ(t);case 202:if(t=M.getFloat32(es),ec.useFloat32>2){let e=e$[(127&A[es])<<1|A[es+1]>>7];return es+=4,(e*t+(t>0?.5:-.5)|0)/e}return es+=4,t;case 203:return t=M.getFloat64(es),es+=8,t;case 204:return A[es++];case 205:return t=M.getUint16(es),es+=2,t;case 206:return t=M.getUint32(es),es+=4,t;case 207:return"number"===ec.int64AsType?t=0x100000000*M.getUint32(es)+M.getUint32(es+4):"string"===ec.int64AsType?t=M.getBigUint64(es).toString():"auto"===ec.int64AsType?(t=M.getBigUint64(es))<=BigInt(2)<<BigInt(52)&&(t=Number(t)):t=M.getBigUint64(es),es+=8,t;case 208:return M.getInt8(es++);case 209:return t=M.getInt16(es),es+=2,t;case 210:return t=M.getInt32(es),es+=4,t;case 211:return"number"===ec.int64AsType?t=0x100000000*M.getInt32(es)+M.getUint32(es+4):"string"===ec.int64AsType?t=M.getBigInt64(es).toString():"auto"===ec.int64AsType?(t=M.getBigInt64(es))>=BigInt(-2)<<BigInt(52)&&t<=BigInt(2)<<BigInt(52)&&(t=Number(t)):t=M.getBigInt64(es),es+=8,t;case 212:if(114==(t=A[es++]))return eV(63&A[es++]);{let e=eh[t];if(e)if(e.read)return es++,e.read(ek());else if(e.noBuffer)return es++,e();else return e(A.subarray(es,++es));throw Error("Unknown extension "+t)}case 213:if(114==(t=A[es]))return es++,eV(63&A[es++],A[es++]);return eJ(2);case 214:return eJ(4);case 215:return eJ(8);case 216:return eJ(16);case 217:if(t=A[es++],ep>=es)return D.slice(es-eu,(es+=t)-eu);return eA(t);case 218:if(t=M.getUint16(es),es+=2,ep>=es)return D.slice(es-eu,(es+=t)-eu);return eT(t);case 219:if(t=M.getUint32(es),es+=4,ep>=es)return D.slice(es-eu,(es+=t)-eu);return eC(t);case 220:return t=M.getUint16(es),es+=2,eO(t);case 221:return t=M.getUint32(es),es+=4,eO(t);case 222:return t=M.getUint16(es),es+=2,eR(t);case 223:return t=M.getUint32(es),es+=4,eR(t);default:if(e>=224)return e-256;if(void 0===e){let e=Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}throw Error("Unknown MessagePack token "+e)}}}let eS=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function eE(e,t){function i(){if(i.count++>eg){let r;try{r=e.read=Function("r","return function(){return "+(ec.freezeData?"Object.freeze":"")+"({"+e.map(e=>"__proto__"===e?"__proto_:r()":eS.test(e)?e+":r()":"["+JSON.stringify(e)+"]:r()").join(",")+"})}")(ek)}catch(e){return eg=1/0,i()}return 0===e.highByte&&(e.read=eI(t,e.read)),r()}let r={};for(let t=0,i=e.length;t<i;t++){let i=e[t];"__proto__"===i&&(i="__proto_"),r[i]=ek()}return ec.freezeData?Object.freeze(r):r}return(i.count=0,0===e.highByte)?eI(t,i):i}let eI=(e,t)=>function(){let i=A[es++];if(0===i)return t();let r=e<32?-(e+(i<<5)):e+(i<<5),a=C[r]||ew()[r];if(!a)throw Error("Record id is not defined for "+r);return a.read||(a.read=eE(a,e)),a.read()};function ew(){let e=eY(()=>(A=null,ec.getStructures()));return C=ec._mergeStructures(e,C)}var ej=eD,eA=eD,eT=eD,eC=eD;function eD(e){let t;if(e<16&&(t=eP(e)))return t;if(e>64&&j)return j.decode(A.subarray(es,es+=e));let i=es+e,r=[];for(t="";es<i;){let e=A[es++];if((128&e)==0)r.push(e);else if((224&e)==192){let t=(31&e)<<6|63&A[es++];t<128?r.push(65533):r.push(t)}else if((240&e)==224){let t=(31&e)<<12|(63&A[es++])<<6|63&A[es++];t<2048||t>=55296&&t<=57343?r.push(65533):r.push(t)}else if((248&e)==240){let t=(7&e)<<18|(63&A[es++])<<12|(63&A[es++])<<6|63&A[es++];t<65536||t>1114111?r.push(65533):(t>65535&&(t-=65536,r.push(t>>>10&1023|55296),t=56320|1023&t),r.push(t))}else r.push(65533);r.length>=4096&&(t+=eM.apply(String,r),r.length=0)}return r.length>0&&(t+=eM.apply(String,r)),t}function eO(e){let t=Array(e);for(let i=0;i<e;i++)t[i]=ek();return ec.freezeData?Object.freeze(t):t}function eR(e){if(ec.mapsAsObjects){let t={};for(let i=0;i<e;i++){let e=eF();"__proto__"===e&&(e="__proto_"),t[e]=ek()}return t}{let t=new Map;for(let i=0;i<e;i++)t.set(ek(),ek());return t}}var eM=String.fromCharCode;function e_(e){let t=es,i=Array(e);for(let r=0;r<e;r++){let e=A[es++];if((128&e)>0){es=t;return}i[r]=e}return eM.apply(String,i)}function eP(e){if(e<4)if(e<2)if(0===e)return"";else{let e=A[es++];if((128&e)>1){es-=1;return}return eM(e)}else{let t=A[es++],i=A[es++];if((128&t)>0||(128&i)>0){es-=2;return}if(e<3)return eM(t,i);let r=A[es++];if((128&r)>0){es-=3;return}return eM(t,i,r)}{let t=A[es++],i=A[es++],r=A[es++],a=A[es++];if((128&t)>0||(128&i)>0||(128&r)>0||(128&a)>0){es-=4;return}if(e<6)if(4===e)return eM(t,i,r,a);else{let e=A[es++];if((128&e)>0){es-=5;return}return eM(t,i,r,a,e)}if(e<8){let n=A[es++],s=A[es++];if((128&n)>0||(128&s)>0){es-=6;return}if(e<7)return eM(t,i,r,a,n,s);let o=A[es++];if((128&o)>0){es-=7;return}return eM(t,i,r,a,n,s,o)}{let n=A[es++],s=A[es++],o=A[es++],l=A[es++];if((128&n)>0||(128&s)>0||(128&o)>0||(128&l)>0){es-=8;return}if(e<10)if(8===e)return eM(t,i,r,a,n,s,o,l);else{let e=A[es++];if((128&e)>0){es-=9;return}return eM(t,i,r,a,n,s,o,l,e)}if(e<12){let d=A[es++],c=A[es++];if((128&d)>0||(128&c)>0){es-=10;return}if(e<11)return eM(t,i,r,a,n,s,o,l,d,c);let u=A[es++];if((128&u)>0){es-=11;return}return eM(t,i,r,a,n,s,o,l,d,c,u)}{let d=A[es++],c=A[es++],u=A[es++],p=A[es++];if((128&d)>0||(128&c)>0||(128&u)>0||(128&p)>0){es-=12;return}if(e<14)if(12===e)return eM(t,i,r,a,n,s,o,l,d,c,u,p);else{let e=A[es++];if((128&e)>0){es-=13;return}return eM(t,i,r,a,n,s,o,l,d,c,u,p,e)}{let h=A[es++],m=A[es++];if((128&h)>0||(128&m)>0){es-=14;return}if(e<15)return eM(t,i,r,a,n,s,o,l,d,c,u,p,h,m);let f=A[es++];if((128&f)>0){es-=15;return}return eM(t,i,r,a,n,s,o,l,d,c,u,p,h,m,f)}}}}}function eN(){let e,t=A[es++];if(t<192)e=t-160;else switch(t){case 217:e=A[es++];break;case 218:e=M.getUint16(es),es+=2;break;case 219:e=M.getUint32(es),es+=4;break;default:throw Error("Expected string")}return eD(e)}function eL(e){return ec.copyBuffers?Uint8Array.prototype.slice.call(A,es,es+=e):A.subarray(es,es+=e)}function eJ(e){let t=A[es++];if(eh[t]){let i;return eh[t](A.subarray(es,i=es+=e),e=>{es=e;try{return ek()}finally{es=i}})}throw Error("Unknown extension type "+t)}var eq=Array(4096);function eF(){let e,t=A[es++];if(!(t>=160)||!(t<192))return es--,eG(ek());if(t-=160,ep>=es)return D.slice(es-eu,(es+=t)-eu);if(!(0==ep&&T<180))return ej(t);let i=(t<<5^(t>1?M.getUint16(es):t>0?A[es]:0))&4095,r=eq[i],a=es,n=es+t-3,s=0;if(r&&r.bytes==t){for(;a<n;){if((e=M.getUint32(a))!=r[s++]){a=0x70000000;break}a+=4}for(n+=3;a<n;)if((e=A[a++])!=r[s++]){a=0x70000000;break}if(a===n)return es=a,r.string;n-=3,a=es}for(r=[],eq[i]=r,r.bytes=t;a<n;)e=M.getUint32(a),r.push(e),a+=4;for(n+=3;a<n;)e=A[a++],r.push(e);let o=t<16?eP(t):e_(t);return null!=o?r.string=o:r.string=ej(t)}function eG(e){if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e||"bigint"==typeof e)return e.toString();if(null==e)return e+"";if(ec.allowArraysInMapKeys&&Array.isArray(e)&&e.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return e.flat().toString();throw Error(`Invalid property type for record: ${typeof e}`)}let eV=(e,t)=>{let i=ek().map(eG),r=e;void 0!==t&&(e=e<32?-((t<<5)+e):(t<<5)+e,i.highByte=t);let a=C[e];return a&&(a.isShared||eb)&&((C.restoreStructures||(C.restoreStructures=[]))[e]=a),C[e]=i,i.read=eE(i,r),i.read()};eh[0]=()=>{},eh[0].noBuffer=!0,eh[66]=e=>{let t=e.byteLength%8||8,i=BigInt(128&e[0]?e[0]-256:e[0]);for(let r=1;r<t;r++)i<<=BigInt(8),i+=BigInt(e[r]);if(e.byteLength!==t){let r=new DataView(e.buffer,e.byteOffset,e.byteLength),a=(e,t)=>{let i=t-e;if(i<=40){let i=r.getBigUint64(e);for(let a=e+8;a<t;a+=8)i<<=BigInt(64),i|=r.getBigUint64(a);return i}let n=e+(i>>4<<3),s=a(e,n),o=a(n,t);return s<<BigInt((t-n)*8)|o};i=i<<BigInt((r.byteLength-t)*8)|a(t,r.byteLength)}return i};let ez={Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,AggregateError:"function"==typeof AggregateError?AggregateError:null};eh[101]=()=>{let e=ek();if(!ez[e[0]]){let t=Error(e[1],{cause:e[2]});return t.name=e[0],t}return ez[e[0]](e[1],{cause:e[2]})},eh[105]=e=>{let t;if(!1===ec.structuredClone)throw Error("Structured clone extension is disabled");let i=M.getUint32(es-4);R||(R=new Map);let r=A[es],a={target:t=r>=144&&r<160||220==r||221==r?[]:r>=128&&r<144||222==r||223==r?new Map:(r>=199&&r<=201||r>=212&&r<=216)&&115===A[es+1]?new Set:{}};R.set(i,a);let n=ek();if(!a.used)return a.target=n;if(Object.assign(t,n),t instanceof Map)for(let[e,i]of n.entries())t.set(e,i);if(t instanceof Set)for(let e of Array.from(n))t.add(e);return t},eh[112]=e=>{if(!1===ec.structuredClone)throw Error("Structured clone extension is disabled");let t=M.getUint32(es-4),i=R.get(t);return i.used=!0,i.target},eh[115]=()=>new Set(ek());let eB=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(e=>e+"Array"),eH="object"==typeof globalThis?globalThis:window;eh[116]=e=>{let t=e[0],i=Uint8Array.prototype.slice.call(e,1).buffer,r=eB[t];if(!r){if(16===t)return i;if(17===t)return new DataView(i);throw Error("Could not find typed array for code "+t)}return new eH[r](i)},eh[120]=()=>{let e=ek();return new RegExp(e[0],e[1])};let eU=[];function eY(e){ec&&ec._onSaveState&&ec._onSaveState();let t=T,i=es,r=ed,a=eu,n=ep,s=D,o=el,l=R,d=O,c=new Uint8Array(A.slice(0,T)),u=C,p=C.slice(0,C.length),h=ec,m=eb,f=e();return T=t,es=i,ed=r,eu=a,ep=n,D=s,el=o,R=l,O=d,A=c,eb=m,(C=u).splice(0,C.length,...p),ec=h,M=new DataView(A.buffer,A.byteOffset,A.byteLength),f}function eW(){A=null,R=null,C=null}eh[98]=e=>{let t=(e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3],i=es;return es+=t-e.length,O=eU,(O=[eN(),eN()]).position0=0,O.position1=0,O.postBundlePosition=es,es=i,ek()},eh[255]=e=>4==e.length?new Date((0x1000000*e[0]+(e[1]<<16)+(e[2]<<8)+e[3])*1e3):8==e.length?new Date(((e[0]<<22)+(e[1]<<14)+(e[2]<<6)+(e[3]>>2))/1e6+((3&e[3])*0x100000000+0x1000000*e[4]+(e[5]<<16)+(e[6]<<8)+e[7])*1e3):12==e.length?new Date(((e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3])/1e6+((128&e[4]?-0x1000000000000:0)+0x10000000000*e[6]+0x100000000*e[7]+0x1000000*e[8]+(e[9]<<16)+(e[10]<<8)+e[11])*1e3):new Date("invalid");let e$=Array(147);for(let e=0;e<256;e++)e$[e]=+("1e"+Math.floor(45.15-.30103*e));var eQ=new ev({useRecords:!1});eQ.unpack,eQ.unpackMultiple,eQ.unpack,new Uint8Array(new Float32Array(1).buffer,0,4),ev.SUPPORTS_STRUCT_HOOKS=!0;try{t=new TextEncoder}catch(e){}let eX="u">typeof Buffer,eZ=eX?function(e){return Buffer.allocUnsafeSlow(e)}:Uint8Array,e0=eX?Buffer:Uint8Array,e1=eX?0x100000000:0x7fd00000,e2=0,e3=null,e4=/[\u0080-\uFFFF]/,e6=Symbol("record-id");class e5 extends ev{constructor(e){let l,d,c,u;super(e),this.offset=0;let p=e0.prototype.utf8Write?function(e,t){return a.utf8Write(e,t,a.byteLength-t)}:!!t&&!!t.encodeInto&&function(e,i){return t.encodeInto(e,a.subarray(i)).written},h=this;e||(e={});let m=e&&e.sequential,f=e.structures||e.saveStructures,y=e.maxSharedStructures;if(null==y&&(y=32*!!f),y>8160)throw Error("Maximum maxSharedStructure is 8160");e.structuredClone&&void 0==e.moreTypes&&(this.moreTypes=!0);let b=e.maxOwnStructures;null==b&&(b=f?32:64),this.structures||!1==e.useRecords||(this.structures=[]);let g=y>32||b+y>64,v=y+64,x=y+b+64;if(x>8256)throw Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let K=[],k=0,S=0;this.pack=this.encode=function(e,t){let i;if(a||(s=(a=new eZ(8192)).dataView||(a.dataView=new DataView(a.buffer,0,8192)),e2=0),(o=a.length-10)-e2<2048?(s=(a=new eZ(a.length)).dataView||(a.dataView=new DataView(a.buffer,0,a.length)),o=a.length-10,e2=0):e2=e2+7&0x7ffffff8,l=e2,t&tl&&(e2+=255&t),u=h.structuredClone?new Map:null,h.bundleStrings&&"string"!=typeof e?(e3=[]).size=1/0:e3=null,c=h.structures){c.uninitialized&&(c=h._mergeStructures(h.getStructures()));let e=c.sharedLength||0;if(e>y)throw Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+c.sharedLength);if(!c.transitions){c.transitions=Object.create(null);for(let t=0;t<e;t++){let e=c[t];if(!e)continue;let i,r=c.transitions;for(let t=0,a=e.length;t<a;t++){let a=e[t];(i=r[a])||(i=r[a]=Object.create(null)),r=i}r[e6]=t+64}this.lastNamedStructuresLength=e}m||(c.nextId=e+64)}d&&(d=!1);try{h._writeStruct&&e&&"object"==typeof e?e.constructor===Object?D(e):e.constructor===Map||Array.isArray(e)||r.some(t=>e instanceof t)?w(e):D(e.toJSON?e.toJSON():e):w(e);let i=e3;if(e3&&te(l,w,0),u&&u.idsToInsert){let e=u.idsToInsert.sort((e,t)=>e.offset>t.offset?1:-1),t=e.length,r=-1;for(;i&&t>0;){let a=e[--t].offset+l;a<i.stringsPosition+l&&-1===r&&(r=0),a>i.position+l?r>=0&&(r+=6):(r>=0&&(s.setUint32(i.position+l,s.getUint32(i.position+l)+r),r=-1),i=i.previous,t++)}r>=0&&i&&s.setUint32(i.position+l,s.getUint32(i.position+l)+r),(e2+=6*e.length)>o&&O(e2),h.offset=e2;let n=function(e,t){let i,r=6*t.length,a=e.length-r;for(;i=t.pop();){let t=i.offset,n=i.id;e.copyWithin(t+r,t,a);let s=t+(r-=6);e[s++]=214,e[s++]=105,e[s++]=n>>24,e[s++]=n>>16&255,e[s++]=n>>8&255,e[s++]=255&n,a=t}return e}(a.subarray(l,e2),e);return u=null,n}if(h.offset=e2,t&ts)return a.start=l,a.end=e2,a;return a.subarray(l,e2)}catch(e){throw i=e,e}finally{if(c&&(E(),d&&h.saveStructures)){let r=c.sharedLength||0,n=a.subarray(l,e2),s=(h._prepareStructures||function(e,t){return e.isCompatible=e=>{let i=!e||(t.lastNamedStructuresLength||0)===e.length;return i||t._mergeStructures(e),i},e})(c,h);if(!i){if(!1===h.saveStructures(s,s.isCompatible))return h.pack(e,t);return h.lastNamedStructuresLength=r,a.length>0x40000000&&(a=null),n}}a.length>0x40000000&&(a=null),t&to&&(e2=l)}};const E=()=>{S<10&&S++;let e=c.sharedLength||0;if(c.length>e&&!m&&(c.length=e),k>1e4)c.transitions=null,S=0,k=0,K.length>0&&(K=[]);else if(K.length>0&&!m){for(let e=0,t=K.length;e<t;e++)K[e][e6]=0;K=[]}},I=e=>{var t=e.length;t<16?a[e2++]=144|t:t<65536?(a[e2++]=220,a[e2++]=t>>8,a[e2++]=255&t):(a[e2++]=221,s.setUint32(e2,t),e2+=4);for(let i=0;i<t;i++)w(e[i])},w=e=>{e2>o&&(a=O(e2));var t,n=typeof e;if("string"===n){let i,r=e.length;if(e3&&r>=4&&r<4096){if((e3.size+=r)>21760){let e,t,i=(e3[0]?3*e3[0].length+e3[1].length:0)+10;e2+i>o&&(a=O(e2+i)),e3.position?(t=e3,a[e2]=200,e2+=3,a[e2++]=98,e=e2-l,e2+=4,te(l,w,0),s.setUint16(e+l-3,e2-l-e)):(a[e2++]=214,a[e2++]=98,e=e2-l,e2+=4),(e3=["",""]).previous=t,e3.size=0,e3.position=e}let t=e4.test(e);e3[+!t]+=e,a[e2++]=193,w(t?-r:r);return}i=r<32?1:r<256?2:r<65536?3:5;let n=3*r;if(e2+n>o&&(a=O(e2+n)),r<64||!p){let n,s,o,l=e2+i;for(n=0;n<r;n++)(s=e.charCodeAt(n))<128?a[l++]=s:(s<2048?a[l++]=s>>6|192:((64512&s)==55296&&(64512&(o=e.charCodeAt(n+1)))==56320?(s=65536+((1023&s)<<10)+(1023&o),n++,a[l++]=s>>18|240,a[l++]=s>>12&63|128):a[l++]=s>>12|224,a[l++]=s>>6&63|128),a[l++]=63&s|128);t=l-e2-i}else t=p(e,e2+i);t<32?a[e2++]=160|t:t<256?(i<2&&a.copyWithin(e2+2,e2+1,e2+1+t),a[e2++]=217,a[e2++]=t):t<65536?(i<3&&a.copyWithin(e2+3,e2+2,e2+2+t),a[e2++]=218,a[e2++]=t>>8,a[e2++]=255&t):(i<5&&a.copyWithin(e2+5,e2+3,e2+3+t),a[e2++]=219,s.setUint32(e2,t),e2+=4),e2+=t}else if("number"===n)if(e>>>0===e)e<32||e<128&&!1===this.useRecords||e<64&&!this._writeStruct?a[e2++]=e:e<256?(a[e2++]=204,a[e2++]=e):e<65536?(a[e2++]=205,a[e2++]=e>>8,a[e2++]=255&e):(a[e2++]=206,s.setUint32(e2,e),e2+=4);else if((0|e)===e)e>=-32?a[e2++]=256+e:e>=-128?(a[e2++]=208,a[e2++]=e+256):e>=-32768?(a[e2++]=209,s.setInt16(e2,e),e2+=2):(a[e2++]=210,s.setInt32(e2,e),e2+=4);else{let t;if((t=this.useFloat32)>0&&e<0x100000000&&e>=-0x80000000){let i;if(a[e2++]=202,s.setFloat32(e2,e),t<4||(0|(i=e*e$[(127&a[e2])<<1|a[e2+1]>>7]))===i){e2+=4;return}e2--}a[e2++]=203,s.setFloat64(e2,e),e2+=8}else if("object"===n||"function"===n)if(e){if(u){let t=u.get(e);if(t){t.id||(t.id=(u.idsToInsert||(u.idsToInsert=[])).push(t)),a[e2++]=214,a[e2++]=112,s.setUint32(e2,t.id),e2+=4;return}u.set(e,{offset:e2-l})}let d=e.constructor;if(d===Object)C(e);else if(d===Array)I(e);else if(d===Map)if(this.mapAsEmptyObject)a[e2++]=128;else for(let[i,r]of((t=e.size)<16?a[e2++]=128|t:t<65536?(a[e2++]=222,a[e2++]=t>>8,a[e2++]=255&t):(a[e2++]=223,s.setUint32(e2,t),e2+=4),e))w(i),w(r);else{for(let t=0,n=i.length;t<n;t++)if(e instanceof r[t]){let r,n=i[t];if(n.write){n.type&&(a[e2++]=212,a[e2++]=n.type,a[e2++]=0);let t=n.write.call(this,e);t===e?Array.isArray(e)?I(e):C(e):w(t);return}let l=a,d=s,c=e2;a=null;try{r=n.pack.call(this,e,e=>(a=l,l=null,(e2+=e)>o&&O(e2),{target:a,targetView:s,position:e2-e}),w)}finally{l&&(a=l,s=d,e2=c,o=a.length-10)}r&&(r.length+e2>o&&O(r.length+e2),e2=e9(r,a,e2,n.type));return}if(Array.isArray(e))I(e);else{if(e.toJSON){let t=e.toJSON();if(t!==e)return w(t)}if("function"===n)return w(this.writeFunction&&this.writeFunction(e));C(e)}}}else a[e2++]=192;else if("boolean"===n)a[e2++]=e?195:194;else if("bigint"===n){if(e<0x8000000000000000&&e>=-0x8000000000000000)a[e2++]=211,s.setBigInt64(e2,e);else if(e<0xffffffffffffffff&&e>0)a[e2++]=207,s.setBigUint64(e2,e);else if(this.largeBigIntToFloat)a[e2++]=203,s.setFloat64(e2,Number(e));else if(this.largeBigIntToString)return w(e.toString());else if(this.useBigIntExtension||this.moreTypes){let t,i=e<0?BigInt(-1):BigInt(0);if(e>>BigInt(65536)===i){let r=BigInt(0xffffffffffffffff)-BigInt(1),a=[];for(;a.push(e&r),e>>BigInt(63)!==i;)e>>=BigInt(64);(t=new Uint8Array(new BigUint64Array(a).buffer)).reverse()}else{let i=e<0,r=(i?~e:e).toString(16);if(r.length%2?r="0"+r:parseInt(r.charAt(0),16)>=8&&(r="00"+r),eX)t=Buffer.from(r,"hex");else{t=new Uint8Array(r.length/2);for(let e=0;e<t.length;e++)t[e]=parseInt(r.slice(2*e,2*e+2),16)}if(i)for(let e=0;e<t.length;e++)t[e]=~t[e]}t.length+e2>o&&O(t.length+e2),e2=e9(t,a,e2,66);return}else throw RangeError(e+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string");e2+=8}else if("undefined"===n)this.encodeUndefinedAsNil?a[e2++]=192:(a[e2++]=212,a[e2++]=0,a[e2++]=0);else throw Error("Unknown type: "+n)},j=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?e=>{let t,i;if(this.skipValues)for(let i in t=[],e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(i))&&!this.skipValues.includes(e[i])&&t.push(i);else t=Object.keys(e);let r=t.length;if(r<16?a[e2++]=128|r:r<65536?(a[e2++]=222,a[e2++]=r>>8,a[e2++]=255&r):(a[e2++]=223,s.setUint32(e2,r),e2+=4),this.coercibleKeyAsNumber)for(let a=0;a<r;a++){let r=Number(i=t[a]);w(isNaN(r)?i:r),w(e[i])}else for(let a=0;a<r;a++)w(i=t[a]),w(e[i])}:e=>{a[e2++]=222;let t=e2-l;e2+=2;let i=0;for(let t in e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(t))&&(w(t),w(e[t]),i++);if(i>65535)throw Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');a[t+++l]=i>>8,a[t+l]=255&i},A=!1===this.useRecords?j:e.progressiveRecords&&!g?e=>{let t,i,r=c.transitions||(c.transitions=Object.create(null)),n=e2++-l;for(let a in e)if("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(a)){if(i=r[a])r=i;else{let s=Object.keys(e),o=r;r=c.transitions;let d=0;for(let e=0,t=s.length;e<t;e++){let t=s[e];!(i=r[t])&&(i=r[t]=Object.create(null),d++),r=i}n+l+1==e2?(e2--,R(r,s,d)):M(r,s,n,d),t=!0,r=o[a]}w(e[a])}if(!t){let t=r[e6];t?a[n+l]=t:M(r,Object.keys(e),n,0)}}:e=>{let t,i=c.transitions||(c.transitions=Object.create(null)),r=0;for(let a in e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(a))&&(!(t=i[a])&&(t=i[a]=Object.create(null),r++),i=t);let n=i[e6];for(let t in n?n>=96&&g?(a[e2++]=(31&(n-=96))+96,a[e2++]=n>>5):a[e2++]=n:R(i,i.__keys__||Object.keys(e),r),e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(t))&&w(e[t])},T="function"==typeof this.useRecords&&this.useRecords,C=T?e=>{T(e)?A(e):j(e)}:A,D=e=>{let t=h._writeStruct(e,a,l,e2,c,O,(e,t,i)=>{if(i)return d=!0;e2=t;let r=a;return(w(e),E(),r!==a)?{position:e2,targetView:s,target:a}:e2});if(0===t)return C(e);e2=t},O=e=>{let t;if(e>0x1000000){if(e-l>e1)throw Error("Packed buffer would be larger than maximum buffer size");t=Math.min(e1,4096*Math.round(Math.max((e-l)*(e>0x4000000?1.25:2),4194304)/4096))}else t=(Math.max(e-l<<2,a.length-1)>>12)+1<<12;let i=new eZ(t);return s=i.dataView||(i.dataView=new DataView(i.buffer,0,t)),e=Math.min(e,a.length),a.copy?a.copy(i,0,l,e):i.set(a.slice(l,e)),e2-=l,l=0,o=i.length-10,a=i},R=(e,t,i)=>{let r=c.nextId;r||(r=64),r<v&&this.shouldShareStructure&&!this.shouldShareStructure(t)?((r=c.nextOwnId)<x||(r=v),c.nextOwnId=r+1):(r>=x&&(r=v),c.nextId=r+1);let n=t.highByte=r>=96&&g?r-96>>5:-1;e[e6]=r,e.__keys__=t,c[r-64]=t,r<v?(t.isShared=!0,c.sharedLength=r-63,d=!0,n>=0?(a[e2++]=(31&r)+96,a[e2++]=n):a[e2++]=r):(n>=0?(a[e2++]=213,a[e2++]=114,a[e2++]=(31&r)+96,a[e2++]=n):(a[e2++]=212,a[e2++]=114,a[e2++]=r),i&&(k+=S*i),K.length>=b&&(K.shift()[e6]=0),K.push(e),w(t))},M=(e,t,i,r)=>{let s=a,d=e2,c=o,u=l;e2=0,l=0,(a=n)||(n=a=new eZ(8192)),o=a.length-10,R(e,t,r),n=a;let p=e2;if(a=s,e2=d,o=c,l=u,p>1){let e=e2+p-1;e>o&&O(e);let t=i+l;a.copyWithin(t+p,t+1,e2),a.set(n.slice(0,p),t),e2=e}else a[i+l]=n[0]}}useBuffer(e){(a=e).dataView||(a.dataView=new DataView(a.buffer,a.byteOffset,a.byteLength)),s=a.dataView,e2=0}set position(e){e2=e}get position(){return e2}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}function e8(e,t,i,r){let a=e.byteLength;if(a+1<256){var{target:n,position:s}=i(4+a);n[s++]=199,n[s++]=a+1}else if(a+1<65536){var{target:n,position:s}=i(5+a);n[s++]=200,n[s++]=a+1>>8,n[s++]=a+1&255}else{var{target:n,position:s,targetView:o}=i(7+a);n[s++]=201,o.setUint32(s,a+1),s+=4}n[s++]=116,n[s++]=t,e.buffer||(e=new Uint8Array(e)),n.set(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),s)}function e7(e,t){let i=e.byteLength;if(i<256){var r,a,{target:r,position:a}=t(i+2);r[a++]=196,r[a++]=i}else if(i<65536){var{target:r,position:a}=t(i+3);r[a++]=197,r[a++]=i>>8,r[a++]=255&i}else{var{target:r,position:a,targetView:n}=t(i+5);r[a++]=198,n.setUint32(a,i),a+=4}r.set(e,a)}function e9(e,t,i,r){let a=e.length;switch(a){case 1:t[i++]=212;break;case 2:t[i++]=213;break;case 4:t[i++]=214;break;case 8:t[i++]=215;break;case 16:t[i++]=216;break;default:a<256?(t[i++]=199,t[i++]=a):(a<65536?(t[i++]=200,t[i++]=a>>8):(t[i++]=201,t[i++]=a>>24,t[i++]=a>>16&255,t[i++]=a>>8&255),t[i++]=255&a)}return t[i++]=r,t.set(e,i),i+=a}function te(e,t,i){if(e3.length>0){s.setUint32(e3.position+e,e2+i-e3.position-e),e3.stringsPosition=e2-e;let r=e3;e3=null,t(r[0]),t(r[1])}}r=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,DataView,ef],i=[{pack(e,t,i){let r=e.getTime()/1e3;if((this.useTimestamp32||0===e.getMilliseconds())&&r>=0&&r<0x100000000){let{target:e,targetView:i,position:a}=t(6);e[a++]=214,e[a++]=255,i.setUint32(a,r)}else if(r>0&&r<0x100000000){let{target:i,targetView:a,position:n}=t(10);i[n++]=215,i[n++]=255,a.setUint32(n,4e6*e.getMilliseconds()+(r/1e3/0x100000000|0)),a.setUint32(n+4,r)}else if(isNaN(r)){if(this.onInvalidDate)return t(0),i(this.onInvalidDate());let{target:e,targetView:r,position:a}=t(3);e[a++]=212,e[a++]=255,e[a++]=255}else{let{target:i,targetView:a,position:n}=t(15);i[n++]=199,i[n++]=12,i[n++]=255,a.setUint32(n,1e6*e.getMilliseconds()),a.setBigInt64(n+4,BigInt(Math.floor(r)))}}},{pack(e,t,i){if(this.setAsEmptyObject)return t(0),i({});let r=Array.from(e),{target:a,position:n}=t(3*!!this.moreTypes);this.moreTypes&&(a[n++]=212,a[n++]=115,a[n++]=0),i(r)}},{pack(e,t,i){let{target:r,position:a}=t(3*!!this.moreTypes);this.moreTypes&&(r[a++]=212,r[a++]=101,r[a++]=0),i([e.name,e.message,e.cause])}},{pack(e,t,i){let{target:r,position:a}=t(3*!!this.moreTypes);this.moreTypes&&(r[a++]=212,r[a++]=120,r[a++]=0),i([e.source,e.flags])}},{pack(e,t){this.moreTypes?e8(e,16,t):e7(eX?Buffer.from(e):new Uint8Array(e),t)}},{pack(e,t){let i=e.constructor;i!==e0&&this.moreTypes?e8(e,eB.indexOf(i.name),t):e7(e,t)}},{pack(e,t){this.moreTypes?e8(e,17,t):e7(eX?Buffer.from(e):new Uint8Array(e),t)}},{pack(e,t){let{target:i,position:r}=t(1);i[r]=193}}],e5.SUPPORTS_STRUCT_HOOKS=!0;let tt=new e5({useRecords:!1});tt.pack,tt.pack;let{NEVER:ti,ALWAYS:tr,DECIMAL_ROUND:ta,DECIMAL_FIT:tn}={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4},ts=512,to=1024,tl=2048;var td=e.i(88947);if(td.Transform,td.Transform,e.i(62562),void 0===process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED||"true"!==process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED.toLowerCase()){let t;try{(t=e.r(70156))&&function(e){function t(t){return function(i){let r=el[ed++];if(null==r){if(O)return eD(i);let a=A.byteOffset,n=e(es-t+a,T+a,A.buffer);if("string"==typeof n)r=n,el=eo;else if(ed=1,ep=1,void 0===(r=(el=n)[0]))throw Error("Unexpected end of buffer")}let a=r.length;return a<=i?(es+=i,r):(D=r,eu=es,ep=es+a,es+=i,r.slice(0,i))}}ej=t(1),eA=t(2),eT=t(3),eC=t(5)}(t.extractStrings)}catch(e){}}let tc="5.78.0";class tu extends Error{constructor(e="bullmq:unrecoverable"){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}let tp=new e5({useRecords:!1,encodeUndefinedAsNil:!0}).pack;class th{constructor(e){this.queue=e,this.version=tc;const t=this.queue.keys;this.moveToFinishedKeys=[t.wait,t.active,t.prioritized,t.events,t.stalled,t.limiter,t.delayed,t.paused,t.meta,t.pc,void 0,void 0,void 0,void 0]}execCommand(e,t,i){let r=`${t}:${this.version}`;return e.runCommand(r,i)}async isJobInList(e,t){let i=await this.queue.client;return Number.isInteger(et(this.queue.redisVersion,"6.0.6",this.queue.databaseType)?await this.execCommand(i,"isJobInList",[e,t]):await i.lpos(e,t))}addDelayedJobArgs(e,t,i){let r=this.queue.keys,a=[r.marker,r.meta,r.id,r.delayed,r.completed,r.events];return a.push(tp(i),e.data,t),a}addDelayedJob(e,t,i,r){let a=this.addDelayedJobArgs(t,i,r);return this.execCommand(e,"addDelayedJob",a)}addPrioritizedJobArgs(e,t,i){let r=this.queue.keys,a=[r.marker,r.meta,r.id,r.prioritized,r.delayed,r.completed,r.active,r.events,r.pc];return a.push(tp(i),e.data,t),a}addPrioritizedJob(e,t,i,r){let a=this.addPrioritizedJobArgs(t,i,r);return this.execCommand(e,"addPrioritizedJob",a)}addParentJobArgs(e,t,i){let r=this.queue.keys,a=[r.meta,r.id,r.delayed,r["waiting-children"],r.completed,r.events];return a.push(tp(i),e.data,t),a}addParentJob(e,t,i,r){let a=this.addParentJobArgs(t,i,r);return this.execCommand(e,"addParentJob",a)}addStandardJobArgs(e,t,i){let r=this.queue.keys,a=[r.wait,r.paused,r.meta,r.id,r.completed,r.delayed,r.active,r.events,r.marker];return a.push(tp(i),e.data,t),a}addStandardJob(e,t,i,r){let a=this.addStandardJobArgs(t,i,r);return this.execCommand(e,"addStandardJob",a)}async addJob(e,t,i,r,a={}){let n,s,o=this.queue.keys,l=t.parent,d=[o[""],void 0!==r?r:"",t.name,t.timestamp,t.parentKey||null,a.parentDependenciesKey||null,l,t.repeatJobKey,t.deduplicationId?`${o.de}:${t.deduplicationId}`:null];if(i.repeat){let e=Object.assign({},i.repeat);e.startDate&&(e.startDate=+new Date(e.startDate)),e.endDate&&(e.endDate=+new Date(e.endDate)),n=tp(Object.assign(Object.assign({},i),{repeat:e}))}else n=tp(i);if((s=a.addToWaitingChildren?await this.addParentJob(e,t,n,d):"number"==typeof i.delay&&i.delay>0?await this.addDelayedJob(e,t,n,d):i.priority?await this.addPrioritizedJob(e,t,n,d):await this.addStandardJob(e,t,n,d))<0)throw this.finishedErrors({code:s,parentKey:a.parentKey,command:"addJob"});return s}pauseArgs(e){let t="wait",i="paused";e||(t="paused",i="wait");let r=[t,i,"meta","prioritized"].map(e=>this.queue.toKey(e));return r.push(this.queue.keys.events,this.queue.keys.delayed,this.queue.keys.marker),r.concat([e?"paused":"resumed"])}async pause(e){let t=await this.queue.client,i=this.pauseArgs(e);return this.execCommand(t,"pause",i)}addRepeatableJobArgs(e,t,i,r){let a=this.queue.keys;return[a.repeat,a.delayed].concat([t,tp(i),r,e,a[""]])}async addRepeatableJob(e,t,i,r){let a=await this.queue.client,n=this.addRepeatableJobArgs(e,t,i,r);return this.execCommand(a,"addRepeatableJob",n)}async removeDeduplicationKey(e,t){let i=await this.queue.client,r=this.queue.keys,a=[`${r.de}:${e}`];return this.execCommand(i,"removeDeduplicationKey",a.concat([t]))}async addJobScheduler(e,t,i,r,a,n,s){let o=await this.queue.client,l=this.queue.keys,d=[l.repeat,l.delayed,l.wait,l.paused,l.meta,l.prioritized,l.marker,l.id,l.events,l.pc,l.active],c=[t,tp(a),e,i,tp(r),tp(n),Date.now(),l[""],s?this.queue.toKey(s):""],u=await this.execCommand(o,"addJobScheduler",d.concat(c));if("number"==typeof u&&u<0)throw this.finishedErrors({code:u,command:"addJobScheduler"});return u}async updateRepeatableJobMillis(e,t,i,r){let a=[this.queue.keys.repeat,i,t,r];return this.execCommand(e,"updateRepeatableJobMillis",a)}async updateJobSchedulerNextMillis(e,t,i,r,a){let n=await this.queue.client,s=this.queue.keys,o=[s.repeat,s.delayed,s.wait,s.paused,s.meta,s.prioritized,s.marker,s.id,s.events,s.pc,a?this.queue.toKey(a):"",s.active],l=[t,e,i,tp(r),Date.now(),s[""],a];return this.execCommand(n,"updateJobScheduler",o.concat(l))}removeRepeatableArgs(e,t,i){let r=this.queue.keys;return[r.repeat,r.delayed,r.events].concat([e,this.getRepeatConcatOptions(t,i),i,r[""]])}getRepeatConcatOptions(e,t){return t&&t.split(":").length>2?t:e}async removeRepeatable(e,t,i){let r=await this.queue.client,a=this.removeRepeatableArgs(e,t,i);return this.execCommand(r,"removeRepeatable",a)}async removeJobScheduler(e){let t=await this.queue.client,i=this.queue.keys,r=[i.repeat,i.delayed,i.events],a=[e,i[""]];return this.execCommand(t,"removeJobScheduler",r.concat(a))}removeArgs(e,t){let i=[e,"repeat"].map(e=>this.queue.toKey(e)),r=[e,+!!t,this.queue.toKey("")];return i.concat(r)}async remove(e,t){let i=await this.queue.client,r=this.removeArgs(e,t),a=await this.execCommand(i,"removeJob",r);if(a<0)throw this.finishedErrors({code:a,jobId:e,command:"removeJob"});return a}async removeUnprocessedChildren(e){let t=await this.queue.client,i=[this.queue.toKey(e),this.queue.keys.meta,this.queue.toKey(""),e];await this.execCommand(t,"removeUnprocessedChildren",i)}async extendLock(e,t,i,r){r=r||await this.queue.client;let a=[this.queue.toKey(e)+":lock",this.queue.keys.stalled,t,i,e];return this.execCommand(r,"extendLock",a)}async extendLocks(e,t,i){let r=await this.queue.client,a=[this.queue.keys.stalled,this.queue.toKey(""),tp(t),tp(e),i];return this.execCommand(r,"extendLocks",a)}async updateData(e,t){let i=await this.queue.client,r=[this.queue.toKey(e.id)],a=JSON.stringify(t),n=await this.execCommand(i,"updateData",r.concat([a]));if(n<0)throw this.finishedErrors({code:n,jobId:e.id,command:"updateData"})}async updateProgress(e,t){let i=await this.queue.client,r=[this.queue.toKey(e),this.queue.keys.events,this.queue.keys.meta],a=JSON.stringify(t),n=await this.execCommand(i,"updateProgress",r.concat([e,a]));if(n<0)throw this.finishedErrors({code:n,jobId:e,command:"updateProgress"})}async addLog(e,t,i){let r=await this.queue.client,a=[this.queue.toKey(e),this.queue.toKey(e)+":logs"],n=await this.execCommand(r,"addLog",a.concat([e,t,i||""]));if(n<0)throw this.finishedErrors({code:n,jobId:e,command:"addLog"});return n}moveToFinishedArgs(e,t,i,r,a,n,s,o=!0,l){var d,c,u,p,h,m,f;let y=this.queue.keys,b=this.queue.opts,g="completed"===a?b.removeOnComplete:b.removeOnFail,v=this.queue.toKey(`metrics:${a}`),x=this.moveToFinishedKeys;x[10]=y[a],x[11]=this.queue.toKey(null!=(d=e.id)?d:""),x[12]=v,x[13]=this.queue.keys.marker;let K=this.getKeepJobs(r,g),k=[e.id,s,i,void 0===t?"null":t,a,!o||this.queue.closing?0:1,y[""],tp({token:n,name:b.name,keepJobs:K,limiter:b.limiter,lockDuration:b.lockDuration,attempts:e.opts.attempts,maxMetricsSize:(null==(c=b.metrics)?void 0:c.maxDataPoints)?null==(u=b.metrics)?void 0:u.maxDataPoints:"",fpof:!!(null==(p=e.opts)?void 0:p.failParentOnFailure),cpof:!!(null==(h=e.opts)?void 0:h.continueParentOnFailure),idof:!!(null==(m=e.opts)?void 0:m.ignoreDependencyOnFailure),rdof:!!(null==(f=e.opts)?void 0:f.removeDependencyOnFailure)}),l?tp(H(l)):void 0];return x.concat(k)}getKeepJobs(e,t){return void 0===e?t||{count:e?0:-1}:"object"==typeof e?e:"number"==typeof e?{count:e}:{count:e?0:-1}}async moveToFinished(e,t){let i=await this.queue.client,r=await this.execCommand(i,"moveToFinished",t);if(r<0)throw this.finishedErrors({code:r,jobId:e,command:"moveToFinished",state:"active"});if(void 0!==r)return tm(r)}drainArgs(e){let t=this.queue.keys;return[t.wait,t.paused,t.delayed,t.prioritized,t.repeat].concat([t[""],e?"1":"0"])}async drain(e){let t=await this.queue.client,i=this.drainArgs(e);return this.execCommand(t,"drain",i)}removeChildDependencyArgs(e,t){return[this.queue.keys[""]].concat([this.queue.toKey(e),t])}async removeChildDependency(e,t){let i=await this.queue.client,r=this.removeChildDependencyArgs(e,t),a=await this.execCommand(i,"removeChildDependency",r);switch(a){case 0:return!0;case 1:return!1;default:throw this.finishedErrors({code:a,jobId:e,parentKey:t,command:"removeChildDependency"})}}getRangesArgs(e,t,i,r){let a=this.queue.keys,n=e.map(e=>"waiting"===e?"wait":e);return[a[""]].concat([t,i,r?"1":"0",...n])}async getRanges(e,t=0,i=1,r=!1){let a=await this.queue.client,n=this.getRangesArgs(e,t,i,r);return await this.execCommand(a,"getRanges",n)}getCountsArgs(e){let t=this.queue.keys,i=e.map(e=>"waiting"===e?"wait":e);return[t[""]].concat([...i])}async getCounts(e){let t=await this.queue.client,i=this.getCountsArgs(e);return await this.execCommand(t,"getCounts",i)}getCountsPerPriorityArgs(e){return[this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized].concat(e)}async getCountsPerPriority(e){let t=await this.queue.client,i=this.getCountsPerPriorityArgs(e);return await this.execCommand(t,"getCountsPerPriority",i)}getDependencyCountsArgs(e,t){return[`${e}:processed`,`${e}:dependencies`,`${e}:failed`,`${e}:unsuccessful`].map(e=>this.queue.toKey(e)).concat(t)}async getDependencyCounts(e,t){let i=await this.queue.client,r=this.getDependencyCountsArgs(e,t);return await this.execCommand(i,"getDependencyCounts",r)}moveToCompletedArgs(e,t,i,r,a=!1){let n=Date.now();return this.moveToFinishedArgs(e,t,"returnvalue",i,"completed",r,n,a)}moveToFailedArgs(e,t,i,r,a=!1,n){let s=Date.now();return this.moveToFinishedArgs(e,t,"failedReason",i,"failed",r,s,a,n)}async isFinished(e,t=!1){let i=await this.queue.client,r=["completed","failed",e].map(e=>this.queue.toKey(e));return this.execCommand(i,"isFinished",r.concat([e,t?"1":""]))}async getState(e){let t=await this.queue.client,i=["completed","failed","delayed","active","wait","paused","waiting-children","prioritized"].map(e=>this.queue.toKey(e));return et(this.queue.redisVersion,"6.0.6",this.queue.databaseType)?this.execCommand(t,"getState",i.concat([e])):this.execCommand(t,"getStateV2",i.concat([e]))}async changeDelay(e,t){let i=await this.queue.client,r=this.changeDelayArgs(e,t),a=await this.execCommand(i,"changeDelay",r);if(a<0)throw this.finishedErrors({code:a,jobId:e,command:"changeDelay",state:"delayed"})}changeDelayArgs(e,t){let i=Date.now();return[this.queue.keys.delayed,this.queue.keys.meta,this.queue.keys.marker,this.queue.keys.events].concat([t,JSON.stringify(i),e,this.queue.toKey(e)])}async changePriority(e,t=0,i=!1){let r=await this.queue.client,a=this.changePriorityArgs(e,t,i),n=await this.execCommand(r,"changePriority",a);if(n<0)throw this.finishedErrors({code:n,jobId:e,command:"changePriority"})}changePriorityArgs(e,t=0,i=!1){return[this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized,this.queue.keys.active,this.queue.keys.pc,this.queue.keys.marker].concat([t,this.queue.toKey(""),e,+!!i])}moveToDelayedArgs(e,t,i,r,a={}){let n=this.queue.keys,s=this.queue.opts,o=[n.marker,n.active,n.prioritized,n.delayed,this.queue.toKey(e),n.events,n.meta,n.stalled,n.wait,n.limiter,n.paused,n.pc],l=a.fetchNext&&!this.queue.closing?1:0;return o.concat([this.queue.keys[""],t,e,i,r,a.skipAttempt?"1":"0",a.fieldsToUpdate?tp(H(a.fieldsToUpdate)):void 0,l,l?tp({token:i,lockDuration:s.lockDuration,limiter:s.limiter,name:s.name}):void 0])}moveToWaitingChildrenArgs(e,t,i){let r=Date.now(),a=X(i.child);return["active","waiting-children",e,`${e}:dependencies`,`${e}:unsuccessful`,"stalled","events"].map(e=>this.queue.toKey(e)).concat([t,null!=a?a:"",JSON.stringify(r),e,this.queue.toKey("")])}isMaxedArgs(){let e=this.queue.keys;return[e.meta,e.active]}async isMaxed(){let e=await this.queue.client,t=this.isMaxedArgs();return!!await this.execCommand(e,"isMaxed",t)}async moveToDelayed(e,t,i,r="0",a={}){let n=await this.queue.client,s=this.moveToDelayedArgs(e,t,r,i,a),o=await this.execCommand(n,"moveToDelayed",s);if(o<0)throw this.finishedErrors({code:o,jobId:e,command:"moveToDelayed",state:"active"});if(void 0!==o)return tm(o)}async moveToWaitingChildren(e,t,i={}){let r=await this.queue.client,a=this.moveToWaitingChildrenArgs(e,t,i),n=await this.execCommand(r,"moveToWaitingChildren",a);switch(n){case 0:return!0;case 1:return!1;default:throw this.finishedErrors({code:n,jobId:e,command:"moveToWaitingChildren",state:"active"})}}getRateLimitTtlArgs(e){return[this.queue.keys.limiter,this.queue.keys.meta].concat([null!=e?e:"0"])}async getRateLimitTtl(e){let t=await this.queue.client,i=this.getRateLimitTtlArgs(e);return this.execCommand(t,"getRateLimitTtl",i)}async cleanJobsInSet(e,t,i=0){let r=await this.queue.client;return this.execCommand(r,"cleanJobsInSet",[this.queue.toKey(e),this.queue.toKey("events"),this.queue.toKey("repeat"),this.queue.toKey(""),t,i,e])}getJobSchedulerArgs(e){return[this.queue.keys.repeat].concat([e])}async getJobScheduler(e){let t=await this.queue.client,i=this.getJobSchedulerArgs(e);return this.execCommand(t,"getJobScheduler",i)}retryJobArgs(e,t,i,r={}){return[this.queue.keys.active,this.queue.keys.wait,this.queue.keys.paused,this.queue.toKey(e),this.queue.keys.meta,this.queue.keys.events,this.queue.keys.delayed,this.queue.keys.prioritized,this.queue.keys.pc,this.queue.keys.marker,this.queue.keys.stalled].concat([this.queue.toKey(""),Date.now(),(t?"R":"L")+"PUSH",e,i,r.fieldsToUpdate?tp(H(r.fieldsToUpdate)):void 0])}async retryJob(e,t,i="0",r={}){let a=await this.queue.client,n=this.retryJobArgs(e,t,i,r),s=await this.execCommand(a,"retryJob",n);if(s<0)throw this.finishedErrors({code:s,jobId:e,command:"retryJob",state:"active"})}moveJobsToWaitArgs(e,t,i){return[this.queue.toKey(""),this.queue.keys.events,this.queue.toKey(e),this.queue.toKey("wait"),this.queue.toKey("paused"),this.queue.keys.meta,this.queue.keys.active,this.queue.keys.marker].concat([t,i,e])}async retryJobs(e="failed",t=1e3,i=new Date().getTime()){let r=await this.queue.client,a=this.moveJobsToWaitArgs(e,t,i);return this.execCommand(r,"moveJobsToWait",a)}async promoteJobs(e=1e3){let t=await this.queue.client,i=this.moveJobsToWaitArgs("delayed",e,Number.MAX_VALUE);return this.execCommand(t,"moveJobsToWait",i)}async reprocessJob(e,t,i={}){let r=await this.queue.client,a=[this.queue.toKey(e.id),this.queue.keys.events,this.queue.toKey(t),this.queue.keys.wait,this.queue.keys.meta,this.queue.keys.paused,this.queue.keys.active,this.queue.keys.marker],n=[e.id,(e.opts.lifo?"R":"L")+"PUSH","failed"===t?"failedReason":"returnvalue",t,i.resetAttemptsMade?"1":"0",i.resetAttemptsStarted?"1":"0"],s=await this.execCommand(r,"reprocessJob",a.concat(n));if(1!==s)throw this.finishedErrors({code:s,jobId:e.id,command:"reprocessJob",state:t})}async getMetrics(e,t=0,i=-1){let r=await this.queue.client,a=[this.queue.toKey(`metrics:${e}`),this.queue.toKey(`metrics:${e}:data`)];return await this.execCommand(r,"getMetrics",a.concat([t,i]))}async moveToActive(e,t,i){let r=this.queue.opts,a=this.queue.keys,n=[a.wait,a.active,a.prioritized,a.events,a.stalled,a.limiter,a.delayed,a.paused,a.meta,a.pc,a.marker],s=[a[""],Date.now(),tp({token:t,lockDuration:r.lockDuration,limiter:r.limiter,name:i})];return tm(await this.execCommand(e,"moveToActive",n.concat(s)))}async promote(e){let t=await this.queue.client,i=[this.queue.keys.delayed,this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized,this.queue.keys.active,this.queue.keys.pc,this.queue.keys.events,this.queue.keys.marker],r=[this.queue.toKey(""),e],a=await this.execCommand(t,"promote",i.concat(r));if(a<0)throw this.finishedErrors({code:a,jobId:e,command:"promote",state:"delayed"})}moveStalledJobsToWaitArgs(){let e=this.queue.opts;return[this.queue.keys.stalled,this.queue.keys.wait,this.queue.keys.active,this.queue.keys["stalled-check"],this.queue.keys.meta,this.queue.keys.paused,this.queue.keys.marker,this.queue.keys.events].concat([e.maxStalledCount,this.queue.toKey(""),Date.now(),e.stalledInterval])}async moveStalledJobsToWait(){let e=await this.queue.client,t=this.moveStalledJobsToWaitArgs();return this.execCommand(e,"moveStalledJobsToWait",t)}async moveJobFromActiveToWait(e,t="0"){let i=await this.queue.client,r=[this.queue.keys.active,this.queue.keys.wait,this.queue.keys.stalled,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.limiter,this.queue.keys.prioritized,this.queue.keys.marker,this.queue.keys.events],a=[e,t,this.queue.toKey(e)],n=await this.execCommand(i,"moveJobFromActiveToWait",r.concat(a));if(n<0)throw this.finishedErrors({code:n,jobId:e,command:"moveJobFromActiveToWait",state:"active"});return n}async obliterate(e){let t=await this.queue.client,i=[this.queue.keys.meta,this.queue.toKey("")],r=[e.count,e.force?"force":null],a=await this.execCommand(t,"obliterate",i.concat(r));if(a<0)switch(a){case -1:throw Error("Cannot obliterate non-paused queue");case -2:throw Error("Cannot obliterate queue with active jobs")}return a}async paginate(e,t){let i=await this.queue.client,r=[e],a=t.end>=0?t.end-t.start+1:1/0,n="0",s=0,o,l,d,c=[],u=[];do{let e=[t.start+c.length,t.end,n,s,5];t.fetchJobs&&e.push(1),[n,s,o,l,d]=await this.execCommand(i,"paginate",r.concat(e)),c=c.concat(o),d&&d.length&&(u=u.concat(d.map(B)))}while("0"!=n&&c.length<a)if(!(c.length&&Array.isArray(c[0])))return{cursor:n,items:c.map(e=>({id:e})),total:l,jobs:u};{let e=[];for(let t=0;t<c.length;t++){let[i,r]=c[t];try{e.push({id:i,v:JSON.parse(r)})}catch(t){e.push({id:i,err:t.message})}}return{cursor:n,items:e,total:l,jobs:u}}}finishedErrors({code:e,jobId:t,parentKey:i,command:r,state:a}){let n;switch(e){case x.JobNotExist:n=Error(`Missing key for job ${t}. ${r}`);break;case x.JobLockNotExist:n=Error(`Missing lock for job ${t}. ${r}`);break;case x.JobNotInState:n=Error(`Job ${t} is not in the ${a} state. ${r}`);break;case x.JobPendingChildren:n=Error(`Job ${t} has pending dependencies. ${r}`);break;case x.ParentJobNotExist:n=Error(`Missing key for parent job ${i}. ${r}`);break;case x.JobLockMismatch:n=Error(`Lock mismatch for job ${t}. Cmd ${r} from ${a}`);break;case x.ParentJobCannotBeReplaced:n=Error(`The parent job ${i} cannot be replaced. ${r}`);break;case x.JobBelongsToJobScheduler:n=Error(`Job ${t} belongs to a job scheduler and cannot be removed directly. ${r}`);break;case x.JobHasFailedChildren:n=new tu(`Cannot complete job ${t} because it has at least one failed child. ${r}`);break;case x.SchedulerJobIdCollision:n=Error(`Cannot create job scheduler iteration - job ID already exists. ${r}`);break;case x.SchedulerJobSlotsBusy:n=Error(`Cannot create job scheduler iteration - current and next time slots already have jobs. ${r}`);break;default:n=Error(`Unknown code ${e} error for ${t}. ${r}`)}return n.code=e,n}async removeOrphanedJobs(e,t,i){let r=await this.queue.client,a=[this.queue.toKey(""),t.length,...t,i.length,...i,...e];return this.execCommand(r,"removeOrphanedJobs",a)}}function tm(e){if(e){let t=[null,e[1],e[2],e[3]];return e[0]&&(t[0]=B(e[0])),t}return[]}let tf=e=>new th({keys:e.keys,client:e.client,get redisVersion(){return e.redisVersion},toKey:e.toKey,opts:e.opts,closing:e.closing,databaseType:e.databaseType}),ty=(0,en.debuglog)("bull");class tb{constructor(e,t,i,r={},a){this.queue=e,this.name=t,this.data=i,this.opts=r,this.id=a,this.progress=0,this.returnvalue=null,this.stacktrace=null,this.delay=0,this.priority=0,this.attemptsStarted=0,this.attemptsMade=0,this.stalledCounter=0;const n=this.opts,{repeatJobKey:s}=n,o=ea(n,["repeatJobKey"]);this.opts=Object.assign({attempts:0},o),this.delay=this.opts.delay,this.priority=this.opts.priority||0,this.repeatJobKey=s,this.timestamp=r.timestamp?r.timestamp:Date.now(),this.opts.backoff=d.normalize(r.backoff),this.parentKey=X(r.parent),r.parent&&(this.parent={id:r.parent.id,queueKey:r.parent.queue},r.failParentOnFailure&&(this.parent.fpof=!0),r.removeDependencyOnFailure&&(this.parent.rdof=!0),r.ignoreDependencyOnFailure&&(this.parent.idof=!0),r.continueParentOnFailure&&(this.parent.cpof=!0)),this.debounceId=r.debounce?r.debounce.id:void 0,this.deduplicationId=r.deduplication?r.deduplication.id:this.debounceId,this.toKey=e.toKey.bind(e),this.createScripts(),this.queueQualifiedName=e.qualifiedName}static async create(e,t,i,r){let a=await e.client,n=new this(e,t,i,r,r&&r.jobId);return n.id=await n.addJob(a,{parentKey:n.parentKey,parentDependenciesKey:n.parentKey?`${n.parentKey}:dependencies`:""}),n}static async createBulk(e,t){let i=await e.client,r=t.map(t=>{var i;return new this(e,t.name,t.data,t.opts,null==(i=t.opts)?void 0:i.jobId)}),a=i.pipeline();for(let e of r)e.addJob(a,{parentKey:e.parentKey,parentDependenciesKey:e.parentKey?`${e.parentKey}:dependencies`:""});let n=await a.exec();for(let e=0;e<n.length;++e){let[t,i]=n[e];if(t)throw t;r[e].id=i}return r}static fromJSON(e,t,i){let r=JSON.parse(t.data||"{}"),a=tb.optsFromJSON(t.opts),n=new this(e,t.name,r,a,t.id||i);return n.progress=JSON.parse(t.progress||"0"),n.delay=parseInt(t.delay),n.priority=parseInt(t.priority),n.timestamp=parseInt(t.timestamp),t.finishedOn&&(n.finishedOn=parseInt(t.finishedOn)),t.processedOn&&(n.processedOn=parseInt(t.processedOn)),t.rjk&&(n.repeatJobKey=t.rjk),t.deid&&(n.debounceId=t.deid,n.deduplicationId=t.deid),t.failedReason&&(n.failedReason=t.failedReason),n.attemptsStarted=parseInt(t.ats||"0"),n.attemptsMade=parseInt(t.attemptsMade||t.atm||"0"),n.stalledCounter=parseInt(t.stc||"0"),t.defa&&(n.deferredFailure=t.defa),n.stacktrace=function(e){if(!e)return[];let t=z(JSON.parse,JSON,[e]);return t!==V&&t instanceof Array?t:[]}(t.stacktrace),"string"==typeof t.returnvalue&&(n.returnvalue=tg(t.returnvalue)),t.parentKey?n.parentKey=t.parentKey:n.parentKey=void 0,t.parent?n.parent=JSON.parse(t.parent):n.parent=void 0,t.pb&&(n.processedBy=t.pb),t.nrjid&&(n.nextRepeatableJobId=t.nrjid),n}createScripts(){this.scripts=tf(this.queue)}static optsFromJSON(e,t=Y){let i=Object.entries(JSON.parse(e||"{}")),r={};for(let e of i){let[i,a]=e;t[i]?r[t[i]]=a:"tm"===i?r.telemetry=Object.assign(Object.assign({},r.telemetry),{metadata:a}):"omc"===i?r.telemetry=Object.assign(Object.assign({},r.telemetry),{omitContext:a}):r[i]=a}return r}static async fromId(e,t){if(t){let i=await e.client,r=await i.hgetall(e.toKey(t));return!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(r)?this.fromJSON(e,r,t):void 0}}static addJobLog(e,t,i,r){return e.scripts.addLog(t,i,r)}toJSON(){let{queue:e,scripts:t}=this;return ea(this,["queue","scripts"])}asJSON(){var e={id:this.id,name:this.name,data:JSON.stringify(void 0===this.data?{}:this.data),opts:tb.optsAsJSON(this.opts),parent:this.parent?Object.assign({},this.parent):void 0,parentKey:this.parentKey,progress:this.progress,attemptsMade:this.attemptsMade,attemptsStarted:this.attemptsStarted,stalledCounter:this.stalledCounter,finishedOn:this.finishedOn,processedOn:this.processedOn,timestamp:this.timestamp,failedReason:JSON.stringify(this.failedReason),stacktrace:JSON.stringify(this.stacktrace),debounceId:this.debounceId,deduplicationId:this.deduplicationId,repeatJobKey:this.repeatJobKey,returnvalue:JSON.stringify(this.returnvalue),nrjid:this.nextRepeatableJobId};let t={};for(let i in e)void 0!==e[i]&&(t[i]=e[i]);return t}static optsAsJSON(e={},t=W){let i=Object.entries(e),r={};for(let[e,a]of i)void 0!==a&&(e in t?r[t[e]]=a:"telemetry"===e?(void 0!==a.metadata&&(r.tm=a.metadata),void 0!==a.omitContext&&(r.omc=a.omitContext)):r[e]=a);return r}asJSONSandbox(){return Object.assign(Object.assign({},this.asJSON()),{queueName:this.queueName,queueQualifiedName:this.queueQualifiedName,prefix:this.prefix})}updateData(e){return this.data=e,this.scripts.updateData(this,e)}async updateProgress(e){this.progress=e,await this.scripts.updateProgress(this.id,e),this.queue.emit("progress",this,e)}async log(e){return tb.addJobLog(this.queue,this.id,e,this.opts.keepLogs)}async removeChildDependency(){return!!await this.scripts.removeChildDependency(this.id,this.parentKey)&&(this.parent=void 0,this.parentKey=void 0,!0)}async clearLogs(e){let t=await this.queue.client,i=this.toKey(this.id)+":logs";e?await t.ltrim(i,-e,-1):await t.del(i)}async remove({removeChildren:e=!0}={}){await this.queue.waitUntilReady();let t=this.queue;if(await this.scripts.remove(this.id,e))t.emit("removed",this);else throw Error(`Job ${this.id} could not be removed because it is locked by another worker`)}async removeUnprocessedChildren(){let e=this.id;await this.scripts.removeUnprocessedChildren(e)}extendLock(e,t){return this.scripts.extendLock(this.id,e,t)}async moveToCompleted(e,t,i=!0){return this.queue.trace(I.INTERNAL,"complete",this.queue.name,async r=>{this.setSpanJobAttributes(r),await this.queue.waitUntilReady(),this.returnvalue=e||void 0;let a=z(JSON.stringify,JSON,[e]);if(a===V)throw V.value;let n=this.scripts.moveToCompletedArgs(this,a,this.opts.removeOnComplete,t,i),s=await this.scripts.moveToFinished(this.id,n);return this.finishedOn=n[this.scripts.moveToFinishedKeys.length+1],this.attemptsMade+=1,this.recordJobMetrics("completed"),s})}async moveToWait(e){let t=await this.scripts.moveJobFromActiveToWait(this.id,e);return this.recordJobMetrics("waiting"),t}async shouldRetryJob(e){if(!(this.attemptsMade+1<this.opts.attempts)||this.discarded||e instanceof tu||"UnrecoverableError"==e.name)return[!1,0];{let t=this.queue.opts,i=await d.calculate(this.opts.backoff,this.attemptsMade+1,e,this,t.settings&&t.settings.backoffStrategy);return[-1!=i,-1==i?0:i]}}async moveToFailed(e,t,i=!1){this.failedReason=null==e?void 0:e.message;let[r,a]=await this.shouldRetryJob(e);return this.queue.trace(I.INTERNAL,this.getSpanOperation(r,a),this.queue.name,async(n,s)=>{var o,l;let d,c,u;this.setSpanJobAttributes(n),(null==(l=null==(o=this.opts)?void 0:o.telemetry)?void 0:l.omitContext)||!s||(d=s),this.updateStacktrace(e);let p={failedReason:this.failedReason,stacktrace:JSON.stringify(this.stacktrace),tm:d};if(r)a?(c=await this.scripts.moveToDelayed(this.id,Date.now(),a,t,{fieldsToUpdate:p,fetchNext:i}),this.recordJobMetrics("delayed")):(c=await this.scripts.retryJob(this.id,this.opts.lifo,t,{fieldsToUpdate:p}),this.recordJobMetrics("retried"));else{let e=this.scripts.moveToFailedArgs(this,this.failedReason,this.opts.removeOnFail,t,i,p);c=await this.scripts.moveToFinished(this.id,e),u=e[this.scripts.moveToFinishedKeys.length+1],this.recordJobMetrics("failed")}return u&&"number"==typeof u&&(this.finishedOn=u),a&&"number"==typeof a&&(this.delay=a),this.attemptsMade+=1,c})}getSpanOperation(e,t){return e?t?"delay":"retry":"fail"}recordJobMetrics(e){var t,i;let r=null==(i=null==(t=this.queue.opts)?void 0:t.telemetry)?void 0:i.meter;if(!r)return;let a={[S.QueueName]:this.queue.name,[S.JobName]:this.name,[S.JobStatus]:e},n={completed:E.JobsCompleted,failed:E.JobsFailed,delayed:E.JobsDelayed,retried:E.JobsRetried,waiting:E.JobsWaiting,"waiting-children":E.JobsWaitingChildren}[e];if(r.createCounter(n,{description:`Number of jobs ${e}`,unit:"1"}).add(1,a),this.processedOn){let e=Date.now()-this.processedOn;r.createHistogram(E.JobDuration,{description:"Job processing duration",unit:"ms"}).record(e,a)}}isCompleted(){return this.isInZSet("completed")}isFailed(){return this.isInZSet("failed")}isDelayed(){return this.isInZSet("delayed")}isWaitingChildren(){return this.isInZSet("waiting-children")}isActive(){return this.isInList("active")}async isWaiting(){return await this.isInList("wait")||await this.isInList("paused")}get queueName(){return this.queue.name}get prefix(){return this.queue.opts.prefix}getState(){return this.scripts.getState(this.id)}async changeDelay(e){await this.scripts.changeDelay(this.id,e),this.delay=e}async changePriority(e){await this.scripts.changePriority(this.id,e.priority,e.lifo),this.priority=e.priority||0}async getChildrenValues(){let e=await this.queue.client,t=await e.hgetall(this.toKey(`${this.id}:processed`));if(t)return ei(t)}async getIgnoredChildrenFailures(){return(await this.queue.client).hgetall(this.toKey(`${this.id}:failed`))}async getFailedChildrenValues(){return(await this.queue.client).hgetall(this.toKey(`${this.id}:failed`))}async getDependencies(e={}){let t=(await this.queue.client).pipeline();if(e.processed||e.unprocessed||e.ignored||e.failed){let i,r,a,n,s,o,l,d,c={cursor:0,count:20},u=[];if(e.processed){u.push("processed");let i=Object.assign(Object.assign({},c),e.processed);t.hscan(this.toKey(`${this.id}:processed`),i.cursor,{COUNT:i.count})}if(e.unprocessed){u.push("unprocessed");let i=Object.assign(Object.assign({},c),e.unprocessed);t.sscan(this.toKey(`${this.id}:dependencies`),i.cursor,{COUNT:i.count})}if(e.ignored){u.push("ignored");let i=Object.assign(Object.assign({},c),e.ignored);t.hscan(this.toKey(`${this.id}:failed`),i.cursor,{COUNT:i.count})}if(e.failed){u.push("failed");let r=Object.assign(Object.assign({},c),e.failed);i=r.cursor+r.count,t.zrange(this.toKey(`${this.id}:unsuccessful`),r.cursor,r.count-1)}let p=await t.exec();return u.forEach((e,t)=>{switch(e){case"processed":{r=p[t][1][0];let e=p[t][1][1],i={};for(let t=0;t<e.length;++t)t%2&&(i[e[t-1]]=JSON.parse(e[t]));a=i;break}case"failed":o=p[t][1];break;case"ignored":{l=p[t][1][0];let e=p[t][1][1],i={};for(let t=0;t<e.length;++t)t%2&&(i[e[t-1]]=e[t]);d=i;break}case"unprocessed":n=p[t][1][0],s=p[t][1][1]}}),Object.assign(Object.assign(Object.assign(Object.assign({},r?{processed:a,nextProcessedCursor:Number(r)}:{}),l?{ignored:d,nextIgnoredCursor:Number(l)}:{}),i?{failed:o,nextFailedCursor:i}:{}),n?{unprocessed:s,nextUnprocessedCursor:Number(n)}:{})}{t.hgetall(this.toKey(`${this.id}:processed`)),t.smembers(this.toKey(`${this.id}:dependencies`)),t.hgetall(this.toKey(`${this.id}:failed`)),t.zrange(this.toKey(`${this.id}:unsuccessful`),0,-1);let[[e,i],[r,a],[n,s],[o,l]]=await t.exec();return{processed:ei(i),unprocessed:a,failed:l,ignored:s}}}async getDependenciesCount(e={}){let t=[];Object.entries(e).forEach(([e,i])=>{i&&t.push(e)});let i=t.length?t:["processed","unprocessed","ignored","failed"],r=await this.scripts.getDependencyCounts(this.id,i),a={};return r.forEach((e,t)=>{a[`${i[t]}`]=e||0}),a}async waitUntilFinished(e,t){await this.queue.waitUntilReady();let i=this.id;return new Promise(async(r,a)=>{let n;function s(e){c(),r(e.returnvalue)}function o(e){c(),a(Error(e.failedReason||e))}t&&(n=setTimeout(()=>o(`Job wait ${this.name} timed out before finishing, no finish notification arrived after ${t}ms (id=${i})`),t));let l=`completed:${i}`,d=`failed:${i}`;e.on(l,s),e.on(d,o),this.queue.on("closing",o);let c=()=>{clearInterval(n),e.removeListener(l,s),e.removeListener(d,o),this.queue.removeListener("closing",o)};await e.waitUntilReady();let[u,p]=await this.scripts.isFinished(i,!0);0!=u&&(-1==u||2==u?o({failedReason:p}):s({returnvalue:tg(p)}))})}async moveToDelayed(e,t){let i=Date.now(),r=e-i,a=r>0?r:0;await this.scripts.moveToDelayed(this.id,i,a,t,{skipAttempt:!0}),this.delay=a,this.recordJobMetrics("delayed")}async moveToWaitingChildren(e,t={}){let i=await this.scripts.moveToWaitingChildren(this.id,e,t);return i&&this.recordJobMetrics("waiting-children"),i}async promote(){let e=this.id;await this.scripts.promote(e),this.delay=0}async retry(e="failed",t={}){await this.scripts.reprocessJob(this,e,t),this.failedReason=null,this.finishedOn=null,this.processedOn=null,this.returnvalue=null,t.resetAttemptsMade&&(this.attemptsMade=0),t.resetAttemptsStarted&&(this.attemptsStarted=0)}discard(){this.discarded=!0}async isInZSet(e){let t=await this.queue.client;return null!==await t.zscore(this.queue.toKey(e),this.id)}async isInList(e){return this.scripts.isJobInList(this.queue.toKey(e),this.id)}addJob(e,t){let i=this.asJSON();return this.validateOptions(i),this.scripts.addJob(e,i,i.opts,this.id,t)}async removeDeduplicationKey(){return!!this.deduplicationId&&await this.scripts.removeDeduplicationKey(this.deduplicationId,this.id)>0}validateOptions(e){var t,i,r,a,n,s,o,l,d;if(this.opts.sizeLimit&&(d=e.data,Buffer.byteLength(d,"utf8")>this.opts.sizeLimit))throw Error(`The size of job ${this.name} exceeds the limit ${this.opts.sizeLimit} bytes`);if(this.opts.delay&&this.opts.repeat&&!(null==(t=this.opts.repeat)?void 0:t.count))throw Error("Delay and repeat options cannot be used together");let c=["removeDependencyOnFailure","failParentOnFailure","continueParentOnFailure","ignoreDependencyOnFailure"].filter(e=>this.opts[e]);if(c.length>1){let e=c.join(", ");throw Error(`The following options cannot be used together: ${e}`)}if(null==(i=this.opts)?void 0:i.jobId){if(`${parseInt(this.opts.jobId,10)}`===(null==(r=this.opts)?void 0:r.jobId))throw Error("Custom Id cannot be integers");if((null==(a=this.opts)?void 0:a.jobId.includes(":"))&&(null==(s=null==(n=this.opts)?void 0:n.jobId)?void 0:s.split(":").length)!==3)throw Error("Custom Id cannot contain :")}if(this.opts.priority){if(Math.trunc(this.opts.priority)!==this.opts.priority)throw Error("Priority should not be float");if(this.opts.priority>2097152)throw Error("Priority should be between 0 and 2097152")}if(this.opts.deduplication){if(!(null==(o=this.opts.deduplication)?void 0:o.id))throw Error("Deduplication id must be provided");if(this.parentKey)throw Error("Deduplication and parent options cannot be used together")}if(this.opts.debounce){if(!(null==(l=this.opts.debounce)?void 0:l.id))throw Error("Debounce id must be provided");if(this.parentKey)throw Error("Debounce and parent options cannot be used together")}if("object"==typeof this.opts.backoff&&"number"==typeof this.opts.backoff.jitter&&(this.opts.backoff.jitter<0||this.opts.backoff.jitter>1))throw Error("Jitter should be between 0 and 1")}updateStacktrace(e){this.stacktrace=this.stacktrace||[],(null==e?void 0:e.stack)&&(this.stacktrace.push(e.stack),0===this.opts.stackTraceLimit?this.stacktrace=[]:this.opts.stackTraceLimit&&(this.stacktrace=this.stacktrace.slice(-this.opts.stackTraceLimit)))}setSpanJobAttributes(e){null==e||e.setAttributes({[S.JobName]:this.name,[S.JobId]:this.id})}}function tg(e){let t=z(JSON.parse,JSON,[e]);if(t!==V)return t;ty("corrupted returnvalue: "+e,t)}class tv{constructor(e="bull"){this.prefix=e}getKeys(e){let t={};return["","active","wait","waiting-children","paused","id","delayed","prioritized","stalled-check","completed","failed","stalled","repeat","limiter","meta","events","pc","marker","de"].forEach(i=>{t[i]=this.toKey(e,i)}),t}toKey(e,t){return`${this.getQueueQualifiedName(e)}:${t}`}getQueueQualifiedName(e){return`${this.prefix}:${e}`}}var tx=N,tK=e.i(42512);e.s([],61408),e.i(61408);let tk={name:"addDelayedJob",content:`--[[
  Adds a delayed job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - computes timestamp.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
    Input:
      KEYS[1] 'marker',
      KEYS[2] 'meta'
      KEYS[3] 'id'
      KEYS[4] 'delayed'
      KEYS[5] 'completed'
      KEYS[6] events stream key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (use custom instead of one generated automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  parent dependencies key.
            [7]  parent? {id, queueKey}
            [8]  repeat job key
            [9] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local metaKey = KEYS[2]
local idKey = KEYS[3]
local delayedKey = KEYS[4]
local completedKey = KEYS[5]
local eventsKey = KEYS[6]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local parentKey = args[5]
local parent = args[7]
local repeatJobKey = args[8]
local deduplicationKey = args[9]
local parentData
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to debounce a job.
]]
-- Includes
--[[
  Function to deduplicate a job.
]]
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Function to store a deduplicated next job if the existing job is active
  and keepLastIfActive is set. When the active job finishes, the stored
  proto-job is used to create a real job in the queue.
  Returns true if the proto-job was stored, false otherwise.
]]
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local function storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationOpts['keepLastIfActive'] and currentDebounceJobId then
        local activeKey = prefix .. "active"
        local activeItems = rcall('LRANGE', activeKey, 0, -1)
        if checkItemInList(activeItems, currentDebounceJobId) then
            local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
            local fields = {'name', jobName, 'data', jobData, 'opts', cjson.encode(fullOpts),
                'jid', jobId}
            if parentKey then
                fields[#fields+1] = 'pk'
                fields[#fields+1] = parentKey
            end
            if parentData then
                fields[#fields+1] = 'pd'
                fields[#fields+1] = parentData
            end
            if parentDependenciesKey then
                fields[#fields+1] = 'pdk'
                fields[#fields+1] = parentDependenciesKey
            end
            if repeatJobKey then
                fields[#fields+1] = 'rjk'
                fields[#fields+1] = repeatJobKey
            end
            rcall('DEL', deduplicationNextKey)
            rcall('HSET', deduplicationNextKey, unpack(fields))
            -- Ensure the dedup key does not expire while the job is active,
            -- so subsequent adds always hit the dedup path and never bypass
            -- the active-check because of a TTL expiry.
            local deduplicationKey = prefix .. "de:" .. deduplicationId
            rcall('PERSIST', deduplicationKey)
            -- TODO remove debounced event in next breaking change
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                currentDebounceJobId, "debounceId", deduplicationId)
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
            return true
        end
    end
    return false
end
local function deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts, jobId, deduplicationKey,
    eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl and ttl > 0 then
        if deduplicationOpts['extend'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                    parentKey, parentData, parentDependenciesKey, repeatJobKey) then
                    return currentDebounceJobId
                end
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, currentDebounceJobId)
                else
                    setDeduplicationKey(deduplicationKey, currentDebounceJobId, deduplicationOpts)
                end
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                    "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            if deduplicationOpts['keepLastIfActive'] then
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
            end
        end
    else
        deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
        local currentDebounceJobId = rcall('GET', deduplicationKey)
        if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
            deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
            parentKey, parentData, parentDependenciesKey, repeatJobKey) then
            return currentDebounceJobId
        end
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            currentDebounceJobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
        return currentDebounceJobId
    end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents, currentDeduplicatedJobId,
    jobId, deduplicationId, prefix)
    if rcall("ZREM", delayedKey, currentDeduplicatedJobId) > 0 then
        removeJobKeys(prefix .. currentDeduplicatedJobId)
        rcall("XADD", eventsKey, "*", "event", "removed", "jobId", currentDeduplicatedJobId,
            "prev", "delayed")
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            jobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            jobId, "deduplicationId", deduplicationId, "deduplicatedJobId", currentDeduplicatedJobId)
        return true
    end
    return false
end
local function deduplicateJob(deduplicationOpts, jobId, delayedKey, deduplicationKey, eventsKey, maxEvents,
    prefix, jobName, jobData, fullOpts, parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local deduplicationId = deduplicationOpts and deduplicationOpts['id']
    if deduplicationId then
        if deduplicationOpts['replace'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                local isRemoved = removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents,
                    currentDebounceJobId, jobId, deduplicationId, prefix)
                if isRemoved then
                    if deduplicationOpts['keepLastIfActive'] then
                        rcall('SET', deduplicationKey, jobId)
                    else
                        local ttl = deduplicationOpts['ttl']
                        if not deduplicationOpts['extend'] and ttl and ttl > 0 then
                            rcall('SET', deduplicationKey, jobId, 'KEEPTTL')
                        else
                            setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                        end
                    end
                    return
                else
                    storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                        deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                        parentKey, parentData, parentDependenciesKey, repeatJobKey)
                    return currentDebounceJobId
                end
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            return deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts,
                jobId, deduplicationKey, eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
                parentKey, parentData, parentDependenciesKey, repeatJobKey)
        end
    end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local opts = cmsgpack.unpack(ARGV[3])
local parentDependenciesKey = args[6]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(opts['de'], jobId, delayedKey, deduplicationKey,
  eventsKey, maxEvents, args[1], args[3], ARGV[2], opts,
  parentKey, parentData, parentDependenciesKey, repeatJobKey)
if deduplicationJobId then
  return deduplicationJobId
end
local delay, priority = storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2],
    opts, timestamp, parentKey, parentData, repeatJobKey)
addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, KEYS[1], delay)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:6};e.s(["addDelayedJob",0,tk],93852),e.i(93852);let tS={name:"addJobScheduler",content:`--[[
  Adds a job scheduler, i.e. a job factory that creates jobs based on a given schedule (repeat options).
    Input:
      KEYS[1]  'repeat' key
      KEYS[2]  'delayed' key
      KEYS[3]  'wait' key
      KEYS[4]  'paused' key
      KEYS[5]  'meta' key
      KEYS[6]  'prioritized' key
      KEYS[7]  'marker' key
      KEYS[8]  'id' key
      KEYS[9]  'events' key
      KEYS[10] 'pc' priority counter
      KEYS[11] 'active' key
      ARGV[1] next milliseconds
      ARGV[2] msgpacked options
            [1]  name
            [2]  tz?
            [3]  pattern?
            [4]  endDate?
            [5]  every?
      ARGV[3] jobs scheduler id
      ARGV[4] Json stringified template data
      ARGV[5] mspacked template opts
      ARGV[6] msgpacked delayed opts
      ARGV[7] timestamp
      ARGV[8] prefix key
      ARGV[9] producer key
      Output:
        repeatableKey  - OK
]] local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local waitKey = KEYS[3]
local pausedKey = KEYS[4]
local metaKey = KEYS[5]
local prioritizedKey = KEYS[6]
local eventsKey = KEYS[9]
local nextMillis = ARGV[1]
local jobSchedulerId = ARGV[3]
local templateOpts = cmsgpack.unpack(ARGV[5])
local now = tonumber(ARGV[7])
local prefixKey = ARGV[8]
local jobOpts = cmsgpack.unpack(ARGV[6])
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Shared helper to store a job and enqueue it into the appropriate list/set.
  Handles delayed, prioritized, and standard (LIFO/FIFO) jobs.
  Emits the appropriate event after enqueuing ("delayed" or "waiting").
  Returns delay, priority from storeJob.
]]
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
local function storeAndEnqueueJob(eventsKey, jobIdKey, jobId, name, data, opts,
    timestamp, parentKey, parentData, repeatJobKey, maxEvents,
    waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
    priorityCounterKey, delayedKey, markerKey)
  local delay, priority = storeJob(eventsKey, jobIdKey, jobId, name, data,
      opts, timestamp, parentKey, parentData, repeatJobKey)
  if delay ~= 0 and delayedKey then
    addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, markerKey, delay)
  else
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    if priority > 0 then
      addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
          priorityCounterKey, isPausedOrMaxed)
    else
      local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
      addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
    end
    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
        "jobId", jobId)
  end
  return delay, priority
end
local function addJobFromScheduler(jobKey, jobId, opts, waitKey, pausedKey, activeKey, metaKey, 
  prioritizedKey, priorityCounter, delayedKey, markerKey, eventsKey, name, maxEvents, timestamp,
  data, jobSchedulerId, repeatDelay)
  opts['delay'] = repeatDelay
  opts['jobId'] = jobId
  storeAndEnqueueJob(eventsKey, jobKey, jobId, name, data, opts,
      timestamp, nil, nil, jobSchedulerId, maxEvents,
      waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
      priorityCounter, delayedKey, markerKey)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePaused(queueMetaKey)
  return rcall("HEXISTS", queueMetaKey, "paused") == 1
end
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
--[[
  Function to store a job scheduler
]]
local function storeJobScheduler(schedulerId, schedulerKey, repeatKey, nextMillis, opts,
  templateData, templateOpts)
  rcall("ZADD", repeatKey, nextMillis, schedulerId)
  local optionalValues = {}
  if opts['tz'] then
    table.insert(optionalValues, "tz")
    table.insert(optionalValues, opts['tz'])
  end
  if opts['limit'] then
    table.insert(optionalValues, "limit")
    table.insert(optionalValues, opts['limit'])
  end
  if opts['pattern'] then
    table.insert(optionalValues, "pattern")
    table.insert(optionalValues, opts['pattern'])
  end
  if opts['startDate'] then
    table.insert(optionalValues, "startDate")
    table.insert(optionalValues, opts['startDate'])
  end
  if opts['endDate'] then
    table.insert(optionalValues, "endDate")
    table.insert(optionalValues, opts['endDate'])
  end
  if opts['every'] then
    table.insert(optionalValues, "every")
    table.insert(optionalValues, opts['every'])
  end
  if opts['offset'] then
    table.insert(optionalValues, "offset")
    table.insert(optionalValues, opts['offset'])
  else
    local offset = rcall("HGET", schedulerKey, "offset")
    if offset then
      table.insert(optionalValues, "offset")
      table.insert(optionalValues, tonumber(offset))
    end
  end
  local jsonTemplateOpts = cjson.encode(templateOpts)
  if jsonTemplateOpts and jsonTemplateOpts ~= '{}' then
    table.insert(optionalValues, "opts")
    table.insert(optionalValues, jsonTemplateOpts)
  end
  if templateData and templateData ~= '{}' then
    table.insert(optionalValues, "data")
    table.insert(optionalValues, templateData)
  end
  table.insert(optionalValues, "ic")
  table.insert(optionalValues, rcall("HGET", schedulerKey, "ic") or 1)
  rcall("DEL", schedulerKey) -- remove all attributes and then re-insert new ones
  rcall("HMSET", schedulerKey, "name", opts['name'], unpack(optionalValues))
end
local function getJobSchedulerEveryNextMillis(prevMillis, every, now, offset, startDate)
    local nextMillis
    if not prevMillis then
        if startDate then
            -- Assuming startDate is passed as milliseconds from JavaScript
            nextMillis = tonumber(startDate)
            nextMillis = nextMillis > now and nextMillis or now
        else
            nextMillis = now
            -- For the first iteration with no startDate and an explicit
            -- offset, align nextMillis to the next offset slot strictly
            -- after now. Without this the user-supplied offset is
            -- recorded but ignored, and the first job fires at now
            -- instead of the next aligned timestamp (issue #3705).
            if offset and offset > 0 then
                local aligned = math.floor(nextMillis / every) * every + offset
                if aligned <= nextMillis then
                    aligned = aligned + every
                end
                nextMillis = aligned
            end
        end
    else
        nextMillis = prevMillis + every
        -- check if we may have missed some iterations
        if nextMillis < now then
            nextMillis = math.floor(now / every) * every + every + (offset or 0)
        end
    end
    if not offset or offset == 0 then
        local timeSlot = math.floor(nextMillis / every) * every;
        offset = nextMillis - timeSlot;
    end
    -- Return a tuple nextMillis, offset
    return math.floor(nextMillis), math.floor(offset)
end
-- If we are overriding a repeatable job we must delete the delayed job for
-- the next iteration.
local schedulerKey = repeatKey .. ":" .. jobSchedulerId
local maxEvents = getOrSetMaxEvents(metaKey)
local templateData = ARGV[4]
local prevMillis = rcall("ZSCORE", repeatKey, jobSchedulerId)
if prevMillis then
    prevMillis = tonumber(prevMillis)
end
local schedulerOpts = cmsgpack.unpack(ARGV[2])
local every = schedulerOpts['every']
-- For backwards compatibility we also check the offset from the job itself.
-- could be removed in future major versions.
local jobOffset = jobOpts['repeat'] and jobOpts['repeat']['offset'] or 0
local offset = schedulerOpts['offset'] or jobOffset or 0
local newOffset = offset
local updatedEvery = false
if every then
    -- if we changed the 'every' value we need to reset millis to nil
    local millis = prevMillis
    if prevMillis then
        local prevEvery = tonumber(rcall("HGET", schedulerKey, "every"))
        if prevEvery ~= every then
            millis = nil
            updatedEvery = true
        end
    end
    local startDate = schedulerOpts['startDate']
    nextMillis, newOffset = getJobSchedulerEveryNextMillis(millis, every, now, offset, startDate)
end
local function removeJobFromScheduler(prefixKey, delayedKey, prioritizedKey, waitKey, pausedKey, jobId, metaKey,
    eventsKey)
    if rcall("ZSCORE", delayedKey, jobId) then
        removeJob(jobId, true, prefixKey, true --[[remove debounce key]] )
        rcall("ZREM", delayedKey, jobId)
        return true
    elseif rcall("ZSCORE", prioritizedKey, jobId) then
        removeJob(jobId, true, prefixKey, true --[[remove debounce key]] )
        rcall("ZREM", prioritizedKey, jobId)
        return true
    else
        local pausedOrWaitKey = waitKey
        if isQueuePaused(metaKey) then
            pausedOrWaitKey = pausedKey
        end
        if rcall("LREM", pausedOrWaitKey, 1, jobId) > 0 then
            removeJob(jobId, true, prefixKey, true --[[remove debounce key]] )
            return true
        end
    end
    return false
end
local removedPrevJob = false
if prevMillis then
    local currentJobId = "repeat:" .. jobSchedulerId .. ":" .. prevMillis
    local currentJobKey = schedulerKey .. ":" .. prevMillis
    -- In theory it should always exist the currentJobKey if there is a prevMillis unless something has
    -- gone really wrong.
    if rcall("EXISTS", currentJobKey) == 1 then
        removedPrevJob = removeJobFromScheduler(prefixKey, delayedKey, prioritizedKey, waitKey, pausedKey, currentJobId,
            metaKey, eventsKey)
    end
end
if removedPrevJob then
    -- The jobs has been removed and we want to replace it, so lets use the same millis.
    if every and not updatedEvery then
        nextMillis = prevMillis
    end
else
    -- Special case where no job was removed, and we need to add the next iteration.
    schedulerOpts['offset'] = newOffset
end
-- Check for job ID collision with existing jobs (in any state)
local jobId = "repeat:" .. jobSchedulerId .. ":" .. nextMillis
local jobKey = prefixKey .. jobId
-- If there's already a job with this ID, in a state 
-- that is not updatable (active, completed, failed) we must 
-- handle the collision
local hasCollision = false
if rcall("EXISTS", jobKey) == 1 then
    if every then
        -- For 'every' case: try next time slot to avoid collision
        local nextSlotMillis = nextMillis + every
        local nextSlotJobId = "repeat:" .. jobSchedulerId .. ":" .. nextSlotMillis
        local nextSlotJobKey = prefixKey .. nextSlotJobId
        if rcall("EXISTS", nextSlotJobKey) == 0 then
            -- Next slot is free, use it
            nextMillis = nextSlotMillis
            jobId = nextSlotJobId
        else
            -- Next slot also has a job, return error code
            return -11 -- SchedulerJobSlotsBusy
        end
    else
        hasCollision = true
    end
end
local delay = nextMillis - now
-- Fast Clamp delay to minimum of 0
if delay < 0 then
    delay = 0
end
local nextJobKey = schedulerKey .. ":" .. nextMillis
if not hasCollision or removedPrevJob then
    -- jobId already calculated above during collision check
    storeJobScheduler(jobSchedulerId, schedulerKey, repeatKey, nextMillis, schedulerOpts, templateData, templateOpts)
    rcall("INCR", KEYS[8])
    addJobFromScheduler(nextJobKey, jobId, jobOpts, waitKey, pausedKey, KEYS[11], metaKey, prioritizedKey, KEYS[10],
        delayedKey, KEYS[7], eventsKey, schedulerOpts['name'], maxEvents, now, templateData, jobSchedulerId, delay)
elseif hasCollision then
    -- For 'pattern' case: return error code
    return -10 -- SchedulerJobIdCollision
end
if ARGV[9] ~= "" then
    rcall("HSET", ARGV[9], "nrjid", jobId)
end
return {jobId .. "", delay}
`,keys:11};e.s(["addJobScheduler",0,tS],27599),e.i(27599);let tE={name:"addLog",content:`--[[
  Add job log
  Input:
    KEYS[1] job id key
    KEYS[2] job logs key
    ARGV[1] id
    ARGV[2] log
    ARGV[3] keepLogs
  Output:
    -1 - Missing job.
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[1]) == 1 then -- // Make sure job exists
  local logCount = rcall("RPUSH", KEYS[2], ARGV[2])
  if ARGV[3] ~= '' then
    local keepLogs = tonumber(ARGV[3])
    rcall("LTRIM", KEYS[2], -keepLogs, -1)
    return math.min(keepLogs, logCount)
  end
  return logCount
else
  return -1
end
`,keys:2};e.s(["addLog",0,tE],92879),e.i(92879);let tI={name:"addParentJob",content:`--[[
  Adds a parent job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - adds the job to the waiting-children zset
    Input:
      KEYS[1] 'meta'
      KEYS[2] 'id'
      KEYS[3] 'delayed'
      KEYS[4] 'waiting-children'
      KEYS[5] 'completed'
      KEYS[6] events stream key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  parent dependencies key.
            [7]  parent? {id, queueKey}
            [8]  repeat job key
            [9] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local metaKey = KEYS[1]
local idKey = KEYS[2]
local delayedKey = KEYS[3]
local completedKey = KEYS[5]
local eventsKey = KEYS[6]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[7]
local repeatJobKey = args[8]
local deduplicationKey = args[9]
local parentData
-- Includes
--[[
  Function to deduplicate a job.
]]
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Function to store a deduplicated next job if the existing job is active
  and keepLastIfActive is set. When the active job finishes, the stored
  proto-job is used to create a real job in the queue.
  Returns true if the proto-job was stored, false otherwise.
]]
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local function storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationOpts['keepLastIfActive'] and currentDebounceJobId then
        local activeKey = prefix .. "active"
        local activeItems = rcall('LRANGE', activeKey, 0, -1)
        if checkItemInList(activeItems, currentDebounceJobId) then
            local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
            local fields = {'name', jobName, 'data', jobData, 'opts', cjson.encode(fullOpts),
                'jid', jobId}
            if parentKey then
                fields[#fields+1] = 'pk'
                fields[#fields+1] = parentKey
            end
            if parentData then
                fields[#fields+1] = 'pd'
                fields[#fields+1] = parentData
            end
            if parentDependenciesKey then
                fields[#fields+1] = 'pdk'
                fields[#fields+1] = parentDependenciesKey
            end
            if repeatJobKey then
                fields[#fields+1] = 'rjk'
                fields[#fields+1] = repeatJobKey
            end
            rcall('DEL', deduplicationNextKey)
            rcall('HSET', deduplicationNextKey, unpack(fields))
            -- Ensure the dedup key does not expire while the job is active,
            -- so subsequent adds always hit the dedup path and never bypass
            -- the active-check because of a TTL expiry.
            local deduplicationKey = prefix .. "de:" .. deduplicationId
            rcall('PERSIST', deduplicationKey)
            -- TODO remove debounced event in next breaking change
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                currentDebounceJobId, "debounceId", deduplicationId)
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
            return true
        end
    end
    return false
end
local function deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts, jobId, deduplicationKey,
    eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl and ttl > 0 then
        if deduplicationOpts['extend'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                    parentKey, parentData, parentDependenciesKey, repeatJobKey) then
                    return currentDebounceJobId
                end
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, currentDebounceJobId)
                else
                    setDeduplicationKey(deduplicationKey, currentDebounceJobId, deduplicationOpts)
                end
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                    "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            if deduplicationOpts['keepLastIfActive'] then
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
            end
        end
    else
        deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
        local currentDebounceJobId = rcall('GET', deduplicationKey)
        if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
            deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
            parentKey, parentData, parentDependenciesKey, repeatJobKey) then
            return currentDebounceJobId
        end
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            currentDebounceJobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
        return currentDebounceJobId
    end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[6]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationId = opts['de'] and opts['de']['id']
if deduplicationId then
    local deduplicationJobId = deduplicateJobWithoutReplace(deduplicationId, opts['de'],
        jobId, deduplicationKey, eventsKey, maxEvents, args[1], args[3], ARGV[2], opts,
        parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationJobId then
        return deduplicationJobId
    end
end
-- Store the job.
storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2], opts, timestamp,
         parentKey, parentData, repeatJobKey)
local waitChildrenKey = KEYS[4]
rcall("ZADD", waitChildrenKey, timestamp, jobId)
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
      "waiting-children", "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:6};e.s(["addParentJob",0,tI],19348),e.i(19348);let tw={name:"addPrioritizedJob",content:`--[[
  Adds a prioritized job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - Adds the job to the "added" list so that workers gets notified.
    Input:
      KEYS[1] 'marker',
      KEYS[2] 'meta'
      KEYS[3] 'id'
      KEYS[4] 'prioritized'
      KEYS[5] 'delayed'
      KEYS[6] 'completed'
      KEYS[7] 'active'
      KEYS[8] events stream key
      KEYS[9] 'pc' priority counter
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  parent dependencies key.
            [7]  parent? {id, queueKey}
            [8]  repeat job key
            [9] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]] 
local metaKey = KEYS[2]
local idKey = KEYS[3]
local priorityKey = KEYS[4]
local completedKey = KEYS[6]
local activeKey = KEYS[7]
local eventsKey = KEYS[8]
local priorityCounterKey = KEYS[9]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[7]
local repeatJobKey = args[8]
local deduplicationKey = args[9]
local parentData
-- Includes
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to debounce a job.
]]
-- Includes
--[[
  Function to deduplicate a job.
]]
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Function to store a deduplicated next job if the existing job is active
  and keepLastIfActive is set. When the active job finishes, the stored
  proto-job is used to create a real job in the queue.
  Returns true if the proto-job was stored, false otherwise.
]]
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local function storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationOpts['keepLastIfActive'] and currentDebounceJobId then
        local activeKey = prefix .. "active"
        local activeItems = rcall('LRANGE', activeKey, 0, -1)
        if checkItemInList(activeItems, currentDebounceJobId) then
            local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
            local fields = {'name', jobName, 'data', jobData, 'opts', cjson.encode(fullOpts),
                'jid', jobId}
            if parentKey then
                fields[#fields+1] = 'pk'
                fields[#fields+1] = parentKey
            end
            if parentData then
                fields[#fields+1] = 'pd'
                fields[#fields+1] = parentData
            end
            if parentDependenciesKey then
                fields[#fields+1] = 'pdk'
                fields[#fields+1] = parentDependenciesKey
            end
            if repeatJobKey then
                fields[#fields+1] = 'rjk'
                fields[#fields+1] = repeatJobKey
            end
            rcall('DEL', deduplicationNextKey)
            rcall('HSET', deduplicationNextKey, unpack(fields))
            -- Ensure the dedup key does not expire while the job is active,
            -- so subsequent adds always hit the dedup path and never bypass
            -- the active-check because of a TTL expiry.
            local deduplicationKey = prefix .. "de:" .. deduplicationId
            rcall('PERSIST', deduplicationKey)
            -- TODO remove debounced event in next breaking change
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                currentDebounceJobId, "debounceId", deduplicationId)
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
            return true
        end
    end
    return false
end
local function deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts, jobId, deduplicationKey,
    eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl and ttl > 0 then
        if deduplicationOpts['extend'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                    parentKey, parentData, parentDependenciesKey, repeatJobKey) then
                    return currentDebounceJobId
                end
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, currentDebounceJobId)
                else
                    setDeduplicationKey(deduplicationKey, currentDebounceJobId, deduplicationOpts)
                end
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                    "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            if deduplicationOpts['keepLastIfActive'] then
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
            end
        end
    else
        deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
        local currentDebounceJobId = rcall('GET', deduplicationKey)
        if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
            deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
            parentKey, parentData, parentDependenciesKey, repeatJobKey) then
            return currentDebounceJobId
        end
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            currentDebounceJobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
        return currentDebounceJobId
    end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents, currentDeduplicatedJobId,
    jobId, deduplicationId, prefix)
    if rcall("ZREM", delayedKey, currentDeduplicatedJobId) > 0 then
        removeJobKeys(prefix .. currentDeduplicatedJobId)
        rcall("XADD", eventsKey, "*", "event", "removed", "jobId", currentDeduplicatedJobId,
            "prev", "delayed")
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            jobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            jobId, "deduplicationId", deduplicationId, "deduplicatedJobId", currentDeduplicatedJobId)
        return true
    end
    return false
end
local function deduplicateJob(deduplicationOpts, jobId, delayedKey, deduplicationKey, eventsKey, maxEvents,
    prefix, jobName, jobData, fullOpts, parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local deduplicationId = deduplicationOpts and deduplicationOpts['id']
    if deduplicationId then
        if deduplicationOpts['replace'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                local isRemoved = removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents,
                    currentDebounceJobId, jobId, deduplicationId, prefix)
                if isRemoved then
                    if deduplicationOpts['keepLastIfActive'] then
                        rcall('SET', deduplicationKey, jobId)
                    else
                        local ttl = deduplicationOpts['ttl']
                        if not deduplicationOpts['extend'] and ttl and ttl > 0 then
                            rcall('SET', deduplicationKey, jobId, 'KEEPTTL')
                        else
                            setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                        end
                    end
                    return
                else
                    storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                        deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                        parentKey, parentData, parentDependenciesKey, repeatJobKey)
                    return currentDebounceJobId
                end
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            return deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts,
                jobId, deduplicationKey, eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
                parentKey, parentData, parentDependenciesKey, repeatJobKey)
        end
    end
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[6]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(opts['de'], jobId, KEYS[5],
  deduplicationKey, eventsKey, maxEvents, args[1], args[3], ARGV[2], opts,
  parentKey, parentData, parentDependenciesKey, repeatJobKey)
if deduplicationJobId then
  return deduplicationJobId
end
-- Store the job.
local delay, priority = storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2],
                                 opts, timestamp, parentKey, parentData,
                                 repeatJobKey)
-- Add the job to the prioritized set
local isPausedOrMaxed = isQueuePausedOrMaxed(metaKey, activeKey)
addJobWithPriority( KEYS[1], priorityKey, priority, jobId, priorityCounterKey, isPausedOrMaxed)
-- Emit waiting event
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:9};e.s(["addPrioritizedJob",0,tw],55494),e.i(55494);let tj={name:"addRepeatableJob",content:`--[[
  Adds a repeatable job
    Input:
      KEYS[1] 'repeat' key
      KEYS[2] 'delayed' key
      ARGV[1] next milliseconds
      ARGV[2] msgpacked options
            [1]  name
            [2]  tz?
            [3]  pattern?
            [4]  endDate?
            [5]  every?
      ARGV[3] legacy custom key TODO: remove this logic in next breaking change
      ARGV[4] custom key
      ARGV[5] prefix key
      Output:
        repeatableKey  - OK
]]
local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local nextMillis = ARGV[1]
local legacyCustomKey = ARGV[3]
local customKey = ARGV[4]
local prefixKey = ARGV[5]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function storeRepeatableJob(repeatKey, customKey, nextMillis, rawOpts)
  rcall("ZADD", repeatKey, nextMillis, customKey)
  local opts = cmsgpack.unpack(rawOpts)
  local optionalValues = {}
  if opts['tz'] then
    table.insert(optionalValues, "tz")
    table.insert(optionalValues, opts['tz'])
  end
  if opts['pattern'] then
    table.insert(optionalValues, "pattern")
    table.insert(optionalValues, opts['pattern'])
  end
  if opts['endDate'] then
    table.insert(optionalValues, "endDate")
    table.insert(optionalValues, opts['endDate'])
  end
  if opts['every'] then
    table.insert(optionalValues, "every")
    table.insert(optionalValues, opts['every'])
  end
  rcall("HMSET", repeatKey .. ":" .. customKey, "name", opts['name'],
    unpack(optionalValues))
  return customKey
end
-- If we are overriding a repeatable job we must delete the delayed job for
-- the next iteration.
local prevMillis = rcall("ZSCORE", repeatKey, customKey)
if prevMillis then
  local delayedJobId =  "repeat:" .. customKey .. ":" .. prevMillis
  local nextDelayedJobId =  repeatKey .. ":" .. customKey .. ":" .. nextMillis
  if rcall("ZSCORE", delayedKey, delayedJobId)
   and rcall("EXISTS", nextDelayedJobId) ~= 1 then
    removeJob(delayedJobId, true, prefixKey, true --[[remove debounce key]])
    rcall("ZREM", delayedKey, delayedJobId)
  end
end
-- Keep backwards compatibility with old repeatable jobs (<= 3.0.0)
if rcall("ZSCORE", repeatKey, legacyCustomKey) ~= false then
  return storeRepeatableJob(repeatKey, legacyCustomKey, nextMillis, ARGV[2])
end
return storeRepeatableJob(repeatKey, customKey, nextMillis, ARGV[2])
`,keys:2};e.s(["addRepeatableJob",0,tj],30960),e.i(30960);let tA={name:"addStandardJob",content:`--[[
  Adds a job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - if delayed:
      - computes timestamp.
      - adds to delayed zset.
      - Emits a global event 'delayed' if the job is delayed.
    - if not delayed
      - Adds the jobId to the wait/paused list in one of three ways:
         - LIFO
         - FIFO
         - prioritized.
      - Adds the job to the "added" list so that workers gets notified.
    Input:
      KEYS[1] 'wait',
      KEYS[2] 'paused'
      KEYS[3] 'meta'
      KEYS[4] 'id'
      KEYS[5] 'completed'
      KEYS[6] 'delayed'
      KEYS[7] 'active'
      KEYS[8] events stream key
      KEYS[9] marker key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  parent dependencies key.
            [7]  parent? {id, queueKey}
            [8]  repeat job key
            [9] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local eventsKey = KEYS[8]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[7]
local repeatJobKey = args[8]
local deduplicationKey = args[9]
local parentData
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to debounce a job.
]]
-- Includes
--[[
  Function to deduplicate a job.
]]
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Function to store a deduplicated next job if the existing job is active
  and keepLastIfActive is set. When the active job finishes, the stored
  proto-job is used to create a real job in the queue.
  Returns true if the proto-job was stored, false otherwise.
]]
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local function storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationOpts['keepLastIfActive'] and currentDebounceJobId then
        local activeKey = prefix .. "active"
        local activeItems = rcall('LRANGE', activeKey, 0, -1)
        if checkItemInList(activeItems, currentDebounceJobId) then
            local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
            local fields = {'name', jobName, 'data', jobData, 'opts', cjson.encode(fullOpts),
                'jid', jobId}
            if parentKey then
                fields[#fields+1] = 'pk'
                fields[#fields+1] = parentKey
            end
            if parentData then
                fields[#fields+1] = 'pd'
                fields[#fields+1] = parentData
            end
            if parentDependenciesKey then
                fields[#fields+1] = 'pdk'
                fields[#fields+1] = parentDependenciesKey
            end
            if repeatJobKey then
                fields[#fields+1] = 'rjk'
                fields[#fields+1] = repeatJobKey
            end
            rcall('DEL', deduplicationNextKey)
            rcall('HSET', deduplicationNextKey, unpack(fields))
            -- Ensure the dedup key does not expire while the job is active,
            -- so subsequent adds always hit the dedup path and never bypass
            -- the active-check because of a TTL expiry.
            local deduplicationKey = prefix .. "de:" .. deduplicationId
            rcall('PERSIST', deduplicationKey)
            -- TODO remove debounced event in next breaking change
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                currentDebounceJobId, "debounceId", deduplicationId)
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
            return true
        end
    end
    return false
end
local function deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts, jobId, deduplicationKey,
    eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl and ttl > 0 then
        if deduplicationOpts['extend'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                    parentKey, parentData, parentDependenciesKey, repeatJobKey) then
                    return currentDebounceJobId
                end
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, currentDebounceJobId)
                else
                    setDeduplicationKey(deduplicationKey, currentDebounceJobId, deduplicationOpts)
                end
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                    "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            if deduplicationOpts['keepLastIfActive'] then
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
            end
        end
    else
        deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
        local currentDebounceJobId = rcall('GET', deduplicationKey)
        if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
            deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
            parentKey, parentData, parentDependenciesKey, repeatJobKey) then
            return currentDebounceJobId
        end
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            currentDebounceJobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
        return currentDebounceJobId
    end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents, currentDeduplicatedJobId,
    jobId, deduplicationId, prefix)
    if rcall("ZREM", delayedKey, currentDeduplicatedJobId) > 0 then
        removeJobKeys(prefix .. currentDeduplicatedJobId)
        rcall("XADD", eventsKey, "*", "event", "removed", "jobId", currentDeduplicatedJobId,
            "prev", "delayed")
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            jobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            jobId, "deduplicationId", deduplicationId, "deduplicatedJobId", currentDeduplicatedJobId)
        return true
    end
    return false
end
local function deduplicateJob(deduplicationOpts, jobId, delayedKey, deduplicationKey, eventsKey, maxEvents,
    prefix, jobName, jobData, fullOpts, parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local deduplicationId = deduplicationOpts and deduplicationOpts['id']
    if deduplicationId then
        if deduplicationOpts['replace'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                local isRemoved = removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents,
                    currentDebounceJobId, jobId, deduplicationId, prefix)
                if isRemoved then
                    if deduplicationOpts['keepLastIfActive'] then
                        rcall('SET', deduplicationKey, jobId)
                    else
                        local ttl = deduplicationOpts['ttl']
                        if not deduplicationOpts['extend'] and ttl and ttl > 0 then
                            rcall('SET', deduplicationKey, jobId, 'KEEPTTL')
                        else
                            setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                        end
                    end
                    return
                else
                    storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                        deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                        parentKey, parentData, parentDependenciesKey, repeatJobKey)
                    return currentDebounceJobId
                end
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            return deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts,
                jobId, deduplicationKey, eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
                parentKey, parentData, parentDependenciesKey, repeatJobKey)
        end
    end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", KEYS[4])
local metaKey = KEYS[3]
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[6]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, KEYS[5], eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(opts['de'], jobId, KEYS[6],
  deduplicationKey, eventsKey, maxEvents, args[1], args[3], ARGV[2], opts,
  parentKey, parentData, parentDependenciesKey, repeatJobKey)
if deduplicationJobId then
  return deduplicationJobId
end
-- Store the job.
storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2], opts, timestamp,
         parentKey, parentData, repeatJobKey)
local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[7], KEYS[1], KEYS[2])
-- LIFO or FIFO
local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
addJobInTargetList(target, KEYS[9], pushCmd, isPausedOrMaxed, jobId)
-- Emit waiting event
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:9};e.s(["addStandardJob",0,tA],1939),e.i(1939);let tT={name:"changeDelay",content:`--[[
  Change job delay when it is in delayed set.
  Input:
    KEYS[1] delayed key
    KEYS[2] meta key
    KEYS[3] marker key
    KEYS[4] events stream
    ARGV[1] delay
    ARGV[2] timestamp
    ARGV[3] the id of the job
    ARGV[4] job key
  Output:
    0 - OK
   -1 - Missing job.
   -3 - Job not in delayed set.
  Events:
    - delayed key.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
if rcall("EXISTS", ARGV[4]) == 1 then
  local jobId = ARGV[3]
  local delay = tonumber(ARGV[1])
  local score, delayedTimestamp = getDelayedScore(KEYS[1], ARGV[2], delay)
  local numRemovedElements = rcall("ZREM", KEYS[1], jobId)
  if numRemovedElements < 1 then
    return -3
  end
  rcall("HSET", ARGV[4], "delay", delay)
  rcall("ZADD", KEYS[1], score, jobId)
  local maxEvents = getOrSetMaxEvents(KEYS[2])
  rcall("XADD", KEYS[4], "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(KEYS[3], KEYS[1])
  return 0
else
  return -1
end`,keys:4};e.s(["changeDelay",0,tT],24195),e.i(24195);let tC={name:"changePriority",content:`--[[
  Change job priority
  Input:
    KEYS[1] 'wait',
    KEYS[2] 'paused'
    KEYS[3] 'meta'
    KEYS[4] 'prioritized'
    KEYS[5] 'active'
    KEYS[6] 'pc' priority counter
    KEYS[7] 'marker'
    ARGV[1] priority value
    ARGV[2] prefix key
    ARGV[3] job id
    ARGV[4] lifo
    Output:
       0  - OK
      -1  - Missing job
]]
local jobId = ARGV[3]
local jobKey = ARGV[2] .. jobId
local priority = tonumber(ARGV[1])
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to push back job considering priority in front of same prioritized jobs.
]]
local function pushBackJobWithPriority(prioritizedKey, priority, jobId)
  -- in order to put it at front of same prioritized jobs
  -- we consider prioritized counter as 0
  local score = priority * 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
end
local function reAddJobWithNewPriority( prioritizedKey, markerKey, targetKey,
    priorityCounter, lifo, priority, jobId, isPausedOrMaxed)
    if priority == 0 then
        local pushCmd = lifo and 'RPUSH' or 'LPUSH'
        addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
    else
        if lifo then
            pushBackJobWithPriority(prioritizedKey, priority, jobId)
        else
            addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
                priorityCounter, isPausedOrMaxed)
        end
    end
end
if rcall("EXISTS", jobKey) == 1 then
    local metaKey = KEYS[3]
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[5], KEYS[1], KEYS[2])
    local prioritizedKey = KEYS[4]
    local priorityCounterKey = KEYS[6]
    local markerKey = KEYS[7]
    -- Re-add with the new priority
    if rcall("ZREM", prioritizedKey, jobId) > 0 then
        reAddJobWithNewPriority( prioritizedKey, markerKey, target,
            priorityCounterKey, ARGV[4] == '1', priority, jobId, isPausedOrMaxed)
    elseif rcall("LREM", target, -1, jobId) > 0 then
        reAddJobWithNewPriority( prioritizedKey, markerKey, target,
            priorityCounterKey, ARGV[4] == '1', priority, jobId, isPausedOrMaxed)
    end
    rcall("HSET", jobKey, "priority", priority)
    return 0
else
    return -1
end
`,keys:7};e.s(["changePriority",0,tC],21057),e.i(21057);let tD={name:"cleanJobsInSet",content:`--[[
  Remove jobs from the specific set.
  Input:
    KEYS[1]  set key,
    KEYS[2]  events stream key
    KEYS[3]  repeat key
    ARGV[1]  jobKey prefix
    ARGV[2]  timestamp
    ARGV[3]  limit the number of jobs to be removed. 0 is unlimited
    ARGV[4]  set name, can be any of 'wait', 'active', 'paused', 'delayed', 'completed', or 'failed'
]]
local rcall = redis.call
local repeatKey = KEYS[3]
local rangeStart = 0
local rangeEnd = -1
local limit = tonumber(ARGV[3])
-- If we're only deleting _n_ items, avoid retrieving all items
-- for faster performance
--
-- Start from the tail of the list, since that's where oldest elements
-- are generally added for FIFO lists
if limit > 0 then
  rangeStart = -1 - limit + 1
  rangeEnd = -1
end
-- Includes
--[[
  Function to clean job list.
  Returns jobIds and deleted count number.
]]
-- Includes
--[[
  Function to get the latest saved timestamp.
]]
local function getTimestamp(jobKey, attributes)
  if #attributes == 1 then
    return rcall("HGET", jobKey, attributes[1])
  end
  local jobTs
  for _, ts in ipairs(rcall("HMGET", jobKey, unpack(attributes))) do
    if (ts) then
      jobTs = ts
      break
    end
  end
  return jobTs
end
--[[
  Function to check if the job belongs to a job scheduler and
  current delayed job matches with jobId
]]
local function isJobSchedulerJob(jobId, jobKey, jobSchedulersKey)
  local repeatJobKey = rcall("HGET", jobKey, "rjk")
  if repeatJobKey  then
    local prevMillis = rcall("ZSCORE", jobSchedulersKey, repeatJobKey)
    if prevMillis then
      local currentDelayedJobId = "repeat:" .. repeatJobKey .. ":" .. prevMillis
      return jobId == currentDelayedJobId
    end
  end
  return false
end
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function cleanList(listKey, jobKeyPrefix, rangeStart, rangeEnd,
  timestamp, isWaiting, jobSchedulersKey)
  local jobs = rcall("LRANGE", listKey, rangeStart, rangeEnd)
  local deleted = {}
  local deletedCount = 0
  local jobTS
  local deletionMarker = ''
  local jobIdsLen = #jobs
  for i, job in ipairs(jobs) do
    if limit > 0 and deletedCount >= limit then
      break
    end
    local jobKey = jobKeyPrefix .. job
    if (isWaiting or rcall("EXISTS", jobKey .. ":lock") == 0) and
      not isJobSchedulerJob(job, jobKey, jobSchedulersKey) then
      -- Find the right timestamp of the job to compare to maxTimestamp:
      -- * finishedOn says when the job was completed, but it isn't set unless the job has actually completed
      -- * processedOn represents when the job was last attempted, but it doesn't get populated until
      --   the job is first tried
      -- * timestamp is the original job submission time
      -- Fetch all three of these (in that order) and use the first one that is set so that we'll leave jobs
      -- that have been active within the grace period:
      jobTS = getTimestamp(jobKey, {"finishedOn", "processedOn", "timestamp"})
      if (not jobTS or jobTS <= timestamp) then
        -- replace the entry with a deletion marker; the actual deletion will
        -- occur at the end of the script
        rcall("LSET", listKey, rangeEnd - jobIdsLen + i, deletionMarker)
        removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]])
        deletedCount = deletedCount + 1
        table.insert(deleted, job)
      end
    end
  end
  rcall("LREM", listKey, 0, deletionMarker)
  return {deleted, deletedCount}
end
--[[
  Function to clean job set.
  Returns jobIds and deleted count number.
]] 
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  We use ZRANGEBYSCORE to make the case where we're deleting a limited number
  of items in a sorted set only run a single iteration. If we simply used
  ZRANGE, we may take a long time traversing through jobs that are within the
  grace period.
]]
local function getJobsInZset(zsetKey, rangeEnd, limit)
  if limit > 0 then
    return rcall("ZRANGEBYSCORE", zsetKey, 0, rangeEnd, "LIMIT", 0, limit)
  else
    return rcall("ZRANGEBYSCORE", zsetKey, 0, rangeEnd)
  end
end
local function cleanSet(
    setKey,
    jobKeyPrefix,
    rangeEnd,
    timestamp,
    limit,
    attributes,
    isFinished,
    jobSchedulersKey)
    local jobs = getJobsInZset(setKey, rangeEnd, limit)
    local deleted = {}
    local deletedCount = 0
    local jobTS
    for i, job in ipairs(jobs) do
        if limit > 0 and deletedCount >= limit then
            break
        end
        local jobKey = jobKeyPrefix .. job
        -- Extract a Job Scheduler Id from jobId ("repeat:job-scheduler-id:millis") 
        -- and check if it is in the scheduled jobs
        if not (jobSchedulersKey and isJobSchedulerJob(job, jobKey, jobSchedulersKey)) then
            if isFinished then
                removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]] )
                deletedCount = deletedCount + 1
                table.insert(deleted, job)
            else
                -- * finishedOn says when the job was completed, but it isn't set unless the job has actually completed
                jobTS = getTimestamp(jobKey, attributes)
                if (not jobTS or jobTS <= timestamp) then
                    removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]] )
                    deletedCount = deletedCount + 1
                    table.insert(deleted, job)
                end
            end
        end
    end
    if (#deleted > 0) then
        for from, to in batches(#deleted, 7000) do
            rcall("ZREM", setKey, unpack(deleted, from, to))
        end
    end
    return {deleted, deletedCount}
end
local result
if ARGV[4] == "active" then
  result = cleanList(KEYS[1], ARGV[1], rangeStart, rangeEnd, ARGV[2], false --[[ hasFinished ]],
                      repeatKey)
elseif ARGV[4] == "delayed" then
  rangeEnd = "+inf"
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"processedOn", "timestamp"}, false  --[[ hasFinished ]], repeatKey)
elseif ARGV[4] == "prioritized" then
  rangeEnd = "+inf"
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"timestamp"}, false  --[[ hasFinished ]], repeatKey)
elseif ARGV[4] == "wait" or ARGV[4] == "paused" then
  result = cleanList(KEYS[1], ARGV[1], rangeStart, rangeEnd, ARGV[2], true --[[ hasFinished ]],
                      repeatKey)
else
  rangeEnd = ARGV[2]
  -- No need to pass repeat key as in that moment job won't be related to a job scheduler
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"finishedOn"}, true  --[[ hasFinished ]])
end
rcall("XADD", KEYS[2], "*", "event", "cleaned", "count", result[2])
return result[1]
`,keys:3};e.s(["cleanJobsInSet",0,tD],41381),e.i(41381);let tO={name:"drain",content:`--[[
  Drains the queue, removes all jobs that are waiting
  or delayed, but not active, completed or failed
  Input:
    KEYS[1] 'wait',
    KEYS[2] 'paused'
    KEYS[3] 'delayed'
    KEYS[4] 'prioritized'
    KEYS[5] 'jobschedulers' (repeat)
    ARGV[1]  queue key prefix
    ARGV[2]  should clean delayed jobs
]]
local rcall = redis.call
local queueBaseKey = ARGV[1]
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to filter out jobs to ignore from a table.
]]
local function filterOutJobsToIgnore(jobs, jobsToIgnore)
  local filteredJobs = {}
  for i = 1, #jobs do
    if not jobsToIgnore[jobs[i]] then
      table.insert(filteredJobs, jobs[i])
    end
  end
  return filteredJobs
end
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function removeJobs(keys, hard, baseKey, max)
  for i, key in ipairs(keys) do
    removeJob(key, hard, baseKey, true --[[remove debounce key]])
  end
  return max - #keys
end
local function getListItems(keyName, max)
  return rcall('LRANGE', keyName, 0, max - 1)
end
local function removeListJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getListItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  rcall("LTRIM", keyName, #jobs, -1)
  return count
end
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get ZSet items.
]]
local function getZSetItems(keyName, max)
  return rcall('ZRANGE', keyName, 0, max - 1)
end
local function removeZSetJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getZSetItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  if(#jobs > 0) then
    for from, to in batches(#jobs, 7000) do
      rcall("ZREM", keyName, unpack(jobs, from, to))
    end
  end
  return count
end
-- We must not remove delayed jobs if they are associated to a job scheduler.
local scheduledJobs = {}
local jobSchedulers = rcall("ZRANGE", KEYS[5], 0, -1, "WITHSCORES")
-- For every job scheduler, get the current delayed job id.
for i = 1, #jobSchedulers, 2 do
    local jobSchedulerId = jobSchedulers[i]
    local jobSchedulerMillis = jobSchedulers[i + 1]
    local delayedJobId = "repeat:" .. jobSchedulerId .. ":" .. jobSchedulerMillis
    scheduledJobs[delayedJobId] = true
end
removeListJobs(KEYS[1], true, queueBaseKey, 0, scheduledJobs) -- wait
removeListJobs(KEYS[2], true, queueBaseKey, 0, scheduledJobs) -- paused
if ARGV[2] == "1" then
  removeZSetJobs(KEYS[3], true, queueBaseKey, 0, scheduledJobs) -- delayed
end
removeZSetJobs(KEYS[4], true, queueBaseKey, 0, scheduledJobs) -- prioritized
`,keys:5};e.s(["drain",0,tO],46888),e.i(46888);let tR={name:"extendLock",content:`--[[
  Extend lock and removes the job from the stalled set.
  Input:
    KEYS[1] 'lock',
    KEYS[2] 'stalled'
    ARGV[1]  token
    ARGV[2]  lock duration in milliseconds
    ARGV[3]  jobid
  Output:
    "1" if lock extended successfully.
]]
local rcall = redis.call
if rcall("GET", KEYS[1]) == ARGV[1] then
  --   if rcall("SET", KEYS[1], ARGV[1], "PX", ARGV[2], "XX") then
  if rcall("SET", KEYS[1], ARGV[1], "PX", ARGV[2]) then
    rcall("SREM", KEYS[2], ARGV[3])
    return 1
  end
end
return 0
`,keys:2};e.s(["extendLock",0,tR],56111),e.i(56111);let tM={name:"extendLocks",content:`--[[
  Extend locks for multiple jobs and remove them from the stalled set if successful.
  Return the list of job IDs for which the operation failed.
  KEYS[1] = stalled key
  ARGV[1] = baseKey
  ARGV[2] = tokens
  ARGV[3] = jobIds
  ARGV[4] = lockDuration (ms)
  Output:
    An array of failed job IDs. If empty, all succeeded.
]]
local rcall = redis.call
local stalledKey = KEYS[1]
local baseKey = ARGV[1]
local tokens = cmsgpack.unpack(ARGV[2])
local jobIds = cmsgpack.unpack(ARGV[3])
local lockDuration = ARGV[4]
local jobCount = #jobIds
local failedJobs = {}
for i = 1, jobCount, 1 do
    local lockKey = baseKey .. jobIds[i] .. ':lock'
    local jobId = jobIds[i]
    local token = tokens[i]
    local currentToken = rcall("GET", lockKey)
    if currentToken then
        if currentToken == token then
            local setResult = rcall("SET", lockKey, token, "PX", lockDuration)
            if setResult then
                rcall("SREM", stalledKey, jobId)
            else
                table.insert(failedJobs, jobId)
            end
        else
            table.insert(failedJobs, jobId)
        end
    else
        table.insert(failedJobs, jobId)
    end
end
return failedJobs
`,keys:1};e.s(["extendLocks",0,tM],46003),e.i(46003);let t_={name:"getCounts",content:`--[[
  Get counts per provided states
    Input:
      KEYS[1]    'prefix'
      ARGV[1...] types
]]
local rcall = redis.call;
local prefix = KEYS[1]
local results = {}
for i = 1, #ARGV do
  local stateKey = prefix .. ARGV[i]
  if ARGV[i] == "wait" or ARGV[i] == "paused" then
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local marker = rcall("LINDEX", stateKey, -1)
    if marker and string.sub(marker, 1, 2) == "0:" then
      local count = rcall("LLEN", stateKey)
      if count > 1 then
        rcall("RPOP", stateKey)
        results[#results+1] = count-1
      else
        results[#results+1] = 0
      end
    else
      results[#results+1] = rcall("LLEN", stateKey)
    end
  elseif ARGV[i] == "active" then
    results[#results+1] = rcall("LLEN", stateKey)
  else
    results[#results+1] = rcall("ZCARD", stateKey)
  end
end
return results
`,keys:1};e.s(["getCounts",0,t_],19884),e.i(19884);let tP={name:"getCountsPerPriority",content:`--[[
  Get counts per provided states
    Input:
      KEYS[1] wait key
      KEYS[2] paused key
      KEYS[3] meta key
      KEYS[4] prioritized key
      ARGV[1...] priorities
]]
local rcall = redis.call
local results = {}
local waitKey = KEYS[1]
local pausedKey = KEYS[2]
local prioritizedKey = KEYS[4]
-- Includes
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePaused(queueMetaKey)
  return rcall("HEXISTS", queueMetaKey, "paused") == 1
end
for i = 1, #ARGV do
  local priority = tonumber(ARGV[i])
  if priority == 0 then
    if isQueuePaused(KEYS[3]) then
      results[#results+1] = rcall("LLEN", pausedKey)
    else
      results[#results+1] = rcall("LLEN", waitKey)
    end
  else
    results[#results+1] = rcall("ZCOUNT", prioritizedKey,
      priority * 0x100000000, (priority + 1)  * 0x100000000 - 1)
  end
end
return results
`,keys:4};e.s(["getCountsPerPriority",0,tP],65535),e.i(65535);let tN={name:"getDependencyCounts",content:`--[[
  Get counts per child states
    Input:
      KEYS[1]    processed key
      KEYS[2]    unprocessed key
      KEYS[3]    ignored key
      KEYS[4]    failed key
      ARGV[1...] types
]]
local rcall = redis.call;
local processedKey = KEYS[1]
local unprocessedKey = KEYS[2]
local ignoredKey = KEYS[3]
local failedKey = KEYS[4]
local results = {}
for i = 1, #ARGV do
  if ARGV[i] == "processed" then
    results[#results+1] = rcall("HLEN", processedKey)
  elseif ARGV[i] == "unprocessed" then
    results[#results+1] = rcall("SCARD", unprocessedKey)
  elseif ARGV[i] == "ignored" then
    results[#results+1] = rcall("HLEN", ignoredKey)
  else
    results[#results+1] = rcall("ZCARD", failedKey)
  end
end
return results
`,keys:4};e.s(["getDependencyCounts",0,tN],64623),e.i(64623);let tL={name:"getJobScheduler",content:`--[[
  Get job scheduler record.
  Input:
    KEYS[1] 'repeat' key
    ARGV[1] id
]]
local rcall = redis.call
local jobSchedulerKey = KEYS[1] .. ":" .. ARGV[1]
local score = rcall("ZSCORE", KEYS[1], ARGV[1])
if score then
  return {rcall("HGETALL", jobSchedulerKey), score} -- get job data
end
return {nil, nil}
`,keys:1};e.s(["getJobScheduler",0,tL],33429),e.i(33429);let tJ={name:"getMetrics",content:`--[[
  Get metrics
  Input:
    KEYS[1] 'metrics' key
    KEYS[2] 'metrics data' key
    ARGV[1] start index
    ARGV[2] end index
]]
local rcall = redis.call;
local metricsKey = KEYS[1]
local dataKey = KEYS[2]
local metrics = rcall("HMGET", metricsKey, "count", "prevTS", "prevCount")
local data = rcall("LRANGE", dataKey, tonumber(ARGV[1]), tonumber(ARGV[2]))
local numPoints = rcall("LLEN", dataKey)
return {metrics, data, numPoints}
`,keys:2};e.s(["getMetrics",0,tJ],36069),e.i(36069);let tq={name:"getRanges",content:`--[[
  Get job ids per provided states
    Input:
      KEYS[1]    'prefix'
      ARGV[1]    start
      ARGV[2]    end
      ARGV[3]    asc
      ARGV[4...] types
]]
local rcall = redis.call
local prefix = KEYS[1]
local rangeStart = tonumber(ARGV[1])
local rangeEnd = tonumber(ARGV[2])
local asc = ARGV[3]
local results = {}
local function getRangeInList(listKey, asc, rangeStart, rangeEnd, results)
  if asc == "1" then
    local modifiedRangeStart
    local modifiedRangeEnd
    if rangeStart == -1 then
      modifiedRangeStart = 0
    else
      modifiedRangeStart = -(rangeStart + 1)
    end
    if rangeEnd == -1 then
      modifiedRangeEnd = 0
    else
      modifiedRangeEnd = -(rangeEnd + 1)
    end
    results[#results+1] = rcall("LRANGE", listKey,
      modifiedRangeEnd,
      modifiedRangeStart)
  else
    results[#results+1] = rcall("LRANGE", listKey, rangeStart, rangeEnd)
  end
end
for i = 4, #ARGV do
  local stateKey = prefix .. ARGV[i]
  if ARGV[i] == "wait" or ARGV[i] == "paused" then
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local marker = rcall("LINDEX", stateKey, -1)
    if marker and string.sub(marker, 1, 2) == "0:" then
      local count = rcall("LLEN", stateKey)
      if count > 1 then
        rcall("RPOP", stateKey)
        getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
      else
        results[#results+1] = {}
      end
    else
      getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
    end
  elseif ARGV[i] == "active" then
    getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
  else
    if asc == "1" then
      results[#results+1] = rcall("ZRANGE", stateKey, rangeStart, rangeEnd)
    else
      results[#results+1] = rcall("ZREVRANGE", stateKey, rangeStart, rangeEnd)
    end
  end
end
return results
`,keys:1};e.s(["getRanges",0,tq],40615),e.i(40615);let tF={name:"getRateLimitTtl",content:`--[[
  Get rate limit ttl
    Input:
      KEYS[1] 'limiter'
      KEYS[2] 'meta'
      ARGV[1] maxJobs
]]
local rcall = redis.call
-- Includes
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
local rateLimiterKey = KEYS[1]
if ARGV[1] ~= "0" then
  return getRateLimitTTL(tonumber(ARGV[1]), rateLimiterKey)
else
  local rateLimitMax = rcall("HGET", KEYS[2], "max")
  if rateLimitMax then
    return getRateLimitTTL(tonumber(rateLimitMax), rateLimiterKey)
  end
  return rcall("PTTL", rateLimiterKey)
end
`,keys:2};e.s(["getRateLimitTtl",0,tF],95884),e.i(95884);let tG={name:"getState",content:`--[[
  Get a job state
  Input: 
    KEYS[1] 'completed' key,
    KEYS[2] 'failed' key
    KEYS[3] 'delayed' key
    KEYS[4] 'active' key
    KEYS[5] 'wait' key
    KEYS[6] 'paused' key
    KEYS[7] 'waiting-children' key
    KEYS[8] 'prioritized' key
    ARGV[1] job id
  Output:
    'completed'
    'failed'
    'delayed'
    'active'
    'prioritized'
    'waiting'
    'waiting-children'
    'unknown'
]]
local rcall = redis.call
if rcall("ZSCORE", KEYS[1], ARGV[1]) then
  return "completed"
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) then
  return "failed"
end
if rcall("ZSCORE", KEYS[3], ARGV[1]) then
  return "delayed"
end
if rcall("ZSCORE", KEYS[8], ARGV[1]) then
  return "prioritized"
end
-- Includes
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local active_items = rcall("LRANGE", KEYS[4] , 0, -1)
if checkItemInList(active_items, ARGV[1]) ~= nil then
  return "active"
end
local wait_items = rcall("LRANGE", KEYS[5] , 0, -1)
if checkItemInList(wait_items, ARGV[1]) ~= nil then
  return "waiting"
end
local paused_items = rcall("LRANGE", KEYS[6] , 0, -1)
if checkItemInList(paused_items, ARGV[1]) ~= nil then
  return "waiting"
end
if rcall("ZSCORE", KEYS[7], ARGV[1]) then
  return "waiting-children"
end
return "unknown"
`,keys:8};e.s(["getState",0,tG],61570),e.i(61570);let tV={name:"getStateV2",content:`--[[
  Get a job state
  Input: 
    KEYS[1] 'completed' key,
    KEYS[2] 'failed' key
    KEYS[3] 'delayed' key
    KEYS[4] 'active' key
    KEYS[5] 'wait' key
    KEYS[6] 'paused' key
    KEYS[7] 'waiting-children' key
    KEYS[8] 'prioritized' key
    ARGV[1] job id
  Output:
    'completed'
    'failed'
    'delayed'
    'active'
    'waiting'
    'waiting-children'
    'unknown'
]]
local rcall = redis.call
if rcall("ZSCORE", KEYS[1], ARGV[1]) then
  return "completed"
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) then
  return "failed"
end
if rcall("ZSCORE", KEYS[3], ARGV[1]) then
  return "delayed"
end
if rcall("ZSCORE", KEYS[8], ARGV[1]) then
  return "prioritized"
end
if rcall("LPOS", KEYS[4] , ARGV[1]) then
  return "active"
end
if rcall("LPOS", KEYS[5] , ARGV[1]) then
  return "waiting"
end
if rcall("LPOS", KEYS[6] , ARGV[1]) then
  return "waiting"
end
if rcall("ZSCORE", KEYS[7] , ARGV[1]) then
  return "waiting-children"
end
return "unknown"
`,keys:8};e.s(["getStateV2",0,tV],6789),e.i(6789);let tz={name:"isFinished",content:`--[[
  Checks if a job is finished (.i.e. is in the completed or failed set)
  Input: 
    KEYS[1] completed key
    KEYS[2] failed key
    KEYS[3] job key
    ARGV[1] job id
    ARGV[2] return value?
  Output:
    0 - Not finished.
    1 - Completed.
    2 - Failed.
   -1 - Missing job. 
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[3]) ~= 1 then
  if ARGV[2] == "1" then
    return {-1,"Missing key for job " .. KEYS[3] .. ". isFinished"}
  end  
  return -1
end
if rcall("ZSCORE", KEYS[1], ARGV[1]) then
  if ARGV[2] == "1" then
    local returnValue = rcall("HGET", KEYS[3], "returnvalue")
    return {1,returnValue}
  end
  return 1
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) then
  if ARGV[2] == "1" then
    local failedReason = rcall("HGET", KEYS[3], "failedReason")
    return {2,failedReason}
  end
  return 2
end
if ARGV[2] == "1" then
  return {0}
end
return 0
`,keys:3};e.s(["isFinished",0,tz],71707),e.i(71707);let tB={name:"isJobInList",content:`--[[
  Checks if job is in a given list.
  Input:
    KEYS[1]
    ARGV[1]
  Output:
    1 if element found in the list.
]]
-- Includes
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local items = redis.call("LRANGE", KEYS[1] , 0, -1)
return checkItemInList(items, ARGV[1])
`,keys:1};e.s(["isJobInList",0,tB],68134),e.i(68134);let tH={name:"isMaxed",content:`--[[
  Checks if queue is maxed.
  Input:
    KEYS[1] meta key
    KEYS[2] active key
  Output:
    1 if element found in the list.
]]
local rcall = redis.call
-- Includes
--[[
  Function to check if queue is maxed or not.
]]
local function isQueueMaxed(queueMetaKey, activeKey)
  local maxConcurrency = rcall("HGET", queueMetaKey, "concurrency")
  if maxConcurrency then
    local activeCount = rcall("LLEN", activeKey)
    if activeCount >= tonumber(maxConcurrency) then
      return true
    end
  end
  return false
end
return isQueueMaxed(KEYS[1], KEYS[2])
`,keys:2};e.s(["isMaxed",0,tH],79499),e.i(79499);let tU={name:"moveJobFromActiveToWait",content:`--[[
  Function to move job from active state to wait.
  Input:
    KEYS[1]  active key
    KEYS[2]  wait key
    KEYS[3]  stalled key
    KEYS[4]  paused key
    KEYS[5]  meta key
    KEYS[6]  limiter key
    KEYS[7]  prioritized key
    KEYS[8]  marker key
    KEYS[9]  event key
    ARGV[1] job id
    ARGV[2] lock token
    ARGV[3] job id key
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to push back job considering priority in front of same prioritized jobs.
]]
local function pushBackJobWithPriority(prioritizedKey, priority, jobId)
  -- in order to put it at front of same prioritized jobs
  -- we consider prioritized counter as 0
  local score = priority * 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
local jobId = ARGV[1]
local token = ARGV[2]
local jobKey = ARGV[3]
if rcall("EXISTS", jobKey) == 0 then
  return -1
end
local errorCode = removeLock(jobKey, KEYS[3], token, jobId)
if errorCode < 0 then
  return errorCode
end
local metaKey = KEYS[5]
local removed = rcall("LREM", KEYS[1], 1, jobId)
if removed > 0 then
  local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[1], KEYS[2], KEYS[4])
  local priority = tonumber(rcall("HGET", ARGV[3], "priority")) or 0
  if priority > 0 then
    pushBackJobWithPriority(KEYS[7], priority, jobId)
  else
    addJobInTargetList(target, KEYS[8], "RPUSH", isPausedOrMaxed, jobId)
  end
  local maxEvents = getOrSetMaxEvents(metaKey)
  -- Emit waiting event
  rcall("XADD", KEYS[9], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
    "jobId", jobId, "prev", "active")
end
local pttl = rcall("PTTL", KEYS[6])
if pttl > 0 then
  return pttl
else
  return 0
end
`,keys:9};e.s(["moveJobFromActiveToWait",0,tU],91017),e.i(91017);let tY={name:"moveJobsToWait",content:`--[[
  Move completed, failed or delayed jobs to wait.
  Note: Does not support jobs with priorities.
  Input:
    KEYS[1] base key
    KEYS[2] events stream
    KEYS[3] state key (failed, completed, delayed)
    KEYS[4] 'wait'
    KEYS[5] 'paused'
    KEYS[6] 'meta'
    KEYS[7] 'active'
    KEYS[8] 'marker'
    ARGV[1] count
    ARGV[2] timestamp
    ARGV[3] prev state
  Output:
    1  means the operation is not completed
    0  means the operation is completed
]]
local maxCount = tonumber(ARGV[1])
local timestamp = tonumber(ARGV[2])
local rcall = redis.call;
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local metaKey = KEYS[6]
local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[7], KEYS[4], KEYS[5])
local jobs = rcall('ZRANGEBYSCORE', KEYS[3], 0, timestamp, 'LIMIT', 0, maxCount)
if (#jobs > 0) then
    if ARGV[3] == "failed" then
        for i, key in ipairs(jobs) do
            local jobKey = KEYS[1] .. key
            rcall("HDEL", jobKey, "finishedOn", "processedOn", "failedReason")
        end
    elseif ARGV[3] == "completed" then
        for i, key in ipairs(jobs) do
            local jobKey = KEYS[1] .. key
            rcall("HDEL", jobKey, "finishedOn", "processedOn", "returnvalue")
        end
    end
    local maxEvents = getOrSetMaxEvents(metaKey)
    for i, key in ipairs(jobs) do
        -- Emit waiting event
        rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event",
              "waiting", "jobId", key, "prev", ARGV[3]);
    end
    for from, to in batches(#jobs, 7000) do
        rcall("ZREM", KEYS[3], unpack(jobs, from, to))
        rcall("LPUSH", target, unpack(jobs, from, to))
    end
    addBaseMarkerIfNeeded(KEYS[8], isPausedOrMaxed)
end
maxCount = maxCount - #jobs
if (maxCount <= 0) then return 1 end
return 0
`,keys:8};e.s(["moveJobsToWait",0,tY],73652),e.i(73652);let tW={name:"moveStalledJobsToWait",content:`--[[
  Move stalled jobs to wait.
    Input:
      KEYS[1] 'stalled' (SET)
      KEYS[2] 'wait',   (LIST)
      KEYS[3] 'active', (LIST)
      KEYS[4] 'stalled-check', (KEY)
      KEYS[5] 'meta', (KEY)
      KEYS[6] 'paused', (LIST)
      KEYS[7] 'marker'
      KEYS[8] 'event stream' (STREAM)
      ARGV[1]  Max stalled job count
      ARGV[2]  queue.toKey('')
      ARGV[3]  timestamp
      ARGV[4]  max check time
    Events:
      'stalled' with stalled job id.
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to move job to wait to be picked up by a waiting worker.
]]
-- Includes
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function moveJobToWait(metaKey, activeKey, waitKey, pausedKey, markerKey, eventStreamKey,
  jobId, pushCmd)
  local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
  addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId", jobId, 'prev', 'active')
end
--[[
  Function to trim events, default 10000.
]]
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
local function trimEvents(metaKey, eventStreamKey)
  local maxEvents = getOrSetMaxEvents(metaKey)
  if maxEvents then
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", maxEvents)
  else
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", 10000)
  end
end
local stalledKey = KEYS[1]
local waitKey = KEYS[2]
local activeKey = KEYS[3]
local stalledCheckKey = KEYS[4]
local metaKey = KEYS[5]
local pausedKey = KEYS[6]
local markerKey = KEYS[7]
local eventStreamKey = KEYS[8]
local maxStalledJobCount = tonumber(ARGV[1])
local queueKeyPrefix = ARGV[2]
local timestamp = ARGV[3]
local maxCheckTime = ARGV[4]
if rcall("EXISTS", stalledCheckKey) == 1 then
    return {}
end
rcall("SET", stalledCheckKey, timestamp, "PX", maxCheckTime)
-- Trim events before emitting them to avoid trimming events emitted in this script
trimEvents(metaKey, eventStreamKey)
-- Move all stalled jobs to wait
local stalling = rcall('SMEMBERS', stalledKey)
local stalled = {}
if (#stalling > 0) then
    rcall('DEL', stalledKey)
    -- Remove from active list
    for i, jobId in ipairs(stalling) do
        -- Markers in waitlist DEPRECATED in v5: Remove in v6.
        if string.sub(jobId, 1, 2) == "0:" then
            -- If the jobId is a delay marker ID we just remove it.
            rcall("LREM", activeKey, 1, jobId)
        else
            local jobKey = queueKeyPrefix .. jobId
            -- Check that the lock is also missing, then we can handle this job as really stalled.
            if (rcall("EXISTS", jobKey .. ":lock") == 0) then
                --  Remove from the active queue.
                local removed = rcall("LREM", activeKey, 1, jobId)
                if (removed > 0) then
                    -- If this job has been stalled too many times, such as if it crashes the worker, then fail it.
                    local stalledCount = rcall("HINCRBY", jobKey, "stc", 1)
                    -- Check if this is a repeatable job by looking at job options
                    local jobOpts = rcall("HGET", jobKey, "opts")
                    local isRepeatableJob = false
                    if jobOpts then
                        local opts = cjson.decode(jobOpts)
                        if opts and opts["repeat"] then
                            isRepeatableJob = true
                        end
                    end
                    -- Only fail job if it exceeds stall limit AND is not a repeatable job
                    if stalledCount > maxStalledJobCount and not isRepeatableJob then
                        local failedReason = "job stalled more than allowable limit"
                        rcall("HSET", jobKey, "defa", failedReason)
                    end
                    moveJobToWait(metaKey, activeKey, waitKey, pausedKey, markerKey, eventStreamKey, jobId,
                        "RPUSH")
                    -- Emit the stalled event
                    rcall("XADD", eventStreamKey, "*", "event", "stalled", "jobId", jobId)
                    table.insert(stalled, jobId)
                end
            end
        end
    end
end
-- Mark potentially stalled jobs
local active = rcall('LRANGE', activeKey, 0, -1)
if (#active > 0) then
    for from, to in batches(#active, 7000) do
        rcall('SADD', stalledKey, unpack(active, from, to))
    end
end
return stalled
`,keys:8};e.s(["moveStalledJobsToWait",0,tW],26867),e.i(26867);let t$={name:"moveToActive",content:`--[[
  Move next job to be processed to active, lock it and fetch its data. The job
  may be delayed, in that case we need to move it to the delayed set instead.
  This operation guarantees that the worker owns the job during the lock
  expiration time. The worker is responsible of keeping the lock fresh
  so that no other worker picks this job again.
  Input:
    KEYS[1] wait key
    KEYS[2] active key
    KEYS[3] prioritized key
    KEYS[4] stream events key
    KEYS[5] stalled key
    -- Rate limiting
    KEYS[6] rate limiter key
    KEYS[7] delayed key
    -- Delayed jobs
    KEYS[8] paused key
    KEYS[9] meta key
    KEYS[10] pc priority counter
    -- Marker
    KEYS[11] marker key
    -- Arguments
    ARGV[1] key prefix
    ARGV[2] timestamp
    ARGV[3] opts
    opts - token - lock token
    opts - lockDuration
    opts - limiter
    opts - name - worker name
]]
local rcall = redis.call
local waitKey = KEYS[1]
local activeKey = KEYS[2]
local eventStreamKey = KEYS[4]
local rateLimiterKey = KEYS[6]
local delayedKey = KEYS[7]
local opts = cmsgpack.unpack(ARGV[3])
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to move job from prioritized state to active.
]]
local function moveJobFromPrioritizedToActive(priorityKey, activeKey, priorityCounterKey)
  local prioritizedJob = rcall("ZPOPMIN", priorityKey)
  if #prioritizedJob > 0 then
    rcall("LPUSH", activeKey, prioritizedJob[1])
    return prioritizedJob[1]
  else
    rcall("DEL", priorityCounterKey)
  end
end
--[[
  Function to move job from wait state to active.
  Input:
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function prepareJobForProcessing(keyPrefix, rateLimiterKey, eventStreamKey,
    jobId, processedOn, maxJobs, limiterDuration, markerKey, opts)
  local jobKey = keyPrefix .. jobId
  -- Check if we need to perform rate limiting.
  if maxJobs then
    local jobCounter = tonumber(rcall("INCR", rateLimiterKey))
    if jobCounter == 1 then
      local integerDuration = math.floor(math.abs(limiterDuration))
      rcall("PEXPIRE", rateLimiterKey, integerDuration)
    end
  end
  -- get a lock
  if opts['token'] ~= "0" then
    local lockKey = jobKey .. ':lock'
    rcall("SET", lockKey, opts['token'], "PX", opts['lockDuration'])
  end
  local optionalValues = {}
  if opts['name'] then
    -- Set "processedBy" field to the worker name
    table.insert(optionalValues, "pb")
    table.insert(optionalValues, opts['name'])
  end
  rcall("XADD", eventStreamKey, "*", "event", "active", "jobId", jobId, "prev", "waiting")
  rcall("HMSET", jobKey, "processedOn", processedOn, unpack(optionalValues))
  rcall("HINCRBY", jobKey, "ats", 1)
  addBaseMarkerIfNeeded(markerKey, false)
  -- rate limit delay must be 0 in this case to prevent adding more delay
  -- when job that is moved to active needs to be processed
  return {rcall("HGETALL", jobKey), jobId, 0, 0} -- get job data
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local target, isPausedOrMaxed, rateLimitMax, rateLimitDuration = getTargetQueueList(KEYS[9],
    activeKey, waitKey, KEYS[8])
-- Check if there are delayed jobs that we can move to wait.
local markerKey = KEYS[11]
promoteDelayedJobs(delayedKey, markerKey, target, KEYS[3], eventStreamKey, ARGV[1],
                   ARGV[2], KEYS[10], isPausedOrMaxed)
local maxJobs = tonumber(rateLimitMax or (opts['limiter'] and opts['limiter']['max']))
local expireTime = getRateLimitTTL(maxJobs, rateLimiterKey)
-- Check if we are rate limited first.
if expireTime > 0 then return {0, 0, expireTime, 0} end
-- paused or maxed queue
if isPausedOrMaxed then return {0, 0, 0, 0} end
local limiterDuration = (opts['limiter'] and opts['limiter']['duration']) or rateLimitDuration
-- no job ID, try non-blocking move from wait to active
local jobId = rcall("RPOPLPUSH", waitKey, activeKey)
-- Markers in waitlist DEPRECATED in v5: Will be completely removed in v6.
if jobId and string.sub(jobId, 1, 2) == "0:" then
    rcall("LREM", activeKey, 1, jobId)
    jobId = rcall("RPOPLPUSH", waitKey, activeKey)
end
if jobId then
    return prepareJobForProcessing(ARGV[1], rateLimiterKey, eventStreamKey, jobId, ARGV[2],
                                   maxJobs, limiterDuration, markerKey, opts)
else
    jobId = moveJobFromPrioritizedToActive(KEYS[3], activeKey, KEYS[10])
    if jobId then
        return prepareJobForProcessing(ARGV[1], rateLimiterKey, eventStreamKey, jobId, ARGV[2],
                                       maxJobs, limiterDuration, markerKey, opts)
    end
end
-- Return the timestamp for the next delayed job if any.
local nextTimestamp = getNextDelayedTimestamp(delayedKey)
if nextTimestamp ~= nil then return {0, 0, 0, nextTimestamp} end
return {0, 0, 0, 0}
`,keys:11};e.s(["moveToActive",0,t$],10393),e.i(10393);let tQ={name:"moveToDelayed",content:`--[[
  Moves job from active to delayed set.
  Input:
    KEYS[1] marker key
    KEYS[2] active key
    KEYS[3] prioritized key
    KEYS[4] delayed key
    KEYS[5] job key
    KEYS[6] events stream
    KEYS[7] meta key
    KEYS[8] stalled key
    KEYS[9] wait key
    KEYS[10] rate limiter key
    KEYS[11] paused key
    KEYS[12] pc priority counter
    ARGV[1] key prefix
    ARGV[2] timestamp
    ARGV[3] the id of the job
    ARGV[4] queue token
    ARGV[5] delay value
    ARGV[6] skip attempt
    ARGV[7] optional job fields to update
    ARGV[8] fetch next?
    ARGV[9] opts
  Output:
    0 - OK
   -1 - Missing job.
   -3 - Job not in active set.
  Events:
    - delayed key.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to fetch the next job to process.
  Tries to get the next job to avoid an extra roundtrip if the queue is
  not closing and not rate limited.
  Input:
    waitKey - wait list key
    activeKey - active list key
    prioritizedKey - prioritized sorted set key
    eventStreamKey - event stream key
    rateLimiterKey - rate limiter key
    delayedKey - delayed sorted set key
    pausedKey - paused list key
    metaKey - meta hash key
    pcKey - priority counter key
    markerKey - marker key
    prefix - keys prefix
    timestamp - current timestamp
    opts - options table:
      token (required) - lock token used when locking jobs
      lockDuration (required) - lock duration for acquired jobs
      limiter (optional) - rate limiter options table (e.g. { max = number })
]]
-- Includes
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to move job from prioritized state to active.
]]
local function moveJobFromPrioritizedToActive(priorityKey, activeKey, priorityCounterKey)
  local prioritizedJob = rcall("ZPOPMIN", priorityKey)
  if #prioritizedJob > 0 then
    rcall("LPUSH", activeKey, prioritizedJob[1])
    return prioritizedJob[1]
  else
    rcall("DEL", priorityCounterKey)
  end
end
--[[
  Function to move job from wait state to active.
  Input:
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function prepareJobForProcessing(keyPrefix, rateLimiterKey, eventStreamKey,
    jobId, processedOn, maxJobs, limiterDuration, markerKey, opts)
  local jobKey = keyPrefix .. jobId
  -- Check if we need to perform rate limiting.
  if maxJobs then
    local jobCounter = tonumber(rcall("INCR", rateLimiterKey))
    if jobCounter == 1 then
      local integerDuration = math.floor(math.abs(limiterDuration))
      rcall("PEXPIRE", rateLimiterKey, integerDuration)
    end
  end
  -- get a lock
  if opts['token'] ~= "0" then
    local lockKey = jobKey .. ':lock'
    rcall("SET", lockKey, opts['token'], "PX", opts['lockDuration'])
  end
  local optionalValues = {}
  if opts['name'] then
    -- Set "processedBy" field to the worker name
    table.insert(optionalValues, "pb")
    table.insert(optionalValues, opts['name'])
  end
  rcall("XADD", eventStreamKey, "*", "event", "active", "jobId", jobId, "prev", "waiting")
  rcall("HMSET", jobKey, "processedOn", processedOn, unpack(optionalValues))
  rcall("HINCRBY", jobKey, "ats", 1)
  addBaseMarkerIfNeeded(markerKey, false)
  -- rate limit delay must be 0 in this case to prevent adding more delay
  -- when job that is moved to active needs to be processed
  return {rcall("HGETALL", jobKey), jobId, 0, 0} -- get job data
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local function fetchNextJob(waitKey, activeKey, prioritizedKey, eventStreamKey,
    rateLimiterKey, delayedKey, pausedKey, metaKey, pcKey, markerKey, prefix,
    timestamp, opts)
    local target, isPausedOrMaxed, rateLimitMax, rateLimitDuration =
        getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    -- Check if there are delayed jobs that can be promoted
    promoteDelayedJobs(delayedKey, markerKey, target, prioritizedKey,
        eventStreamKey, prefix, timestamp, pcKey, isPausedOrMaxed)
    local maxJobs = tonumber(rateLimitMax or (opts['limiter'] and opts['limiter']['max']))
    -- Check if we are rate limited first.
    local expireTime = getRateLimitTTL(maxJobs, rateLimiterKey)
    if expireTime > 0 then
        return {0, 0, expireTime, 0}
    end
    -- paused or maxed queue
    if isPausedOrMaxed then
        return {0, 0, 0, 0}
    end
    local limiterDuration = (opts['limiter'] and opts['limiter']['duration']) or rateLimitDuration
    local jobId = rcall("RPOPLPUSH", waitKey, activeKey)
    if jobId then
        -- Markers in waitlist DEPRECATED in v5: Remove in v6.
        if string.sub(jobId, 1, 2) == "0:" then
            rcall("LREM", activeKey, 1, jobId)
            -- If jobId is special ID 0:delay (delay greater than 0), then there is no job to process
            -- but if ID is 0:0, then there is at least 1 prioritized job to process
            if jobId == "0:0" then
                jobId = moveJobFromPrioritizedToActive(prioritizedKey, activeKey, pcKey)
                return prepareJobForProcessing(prefix, rateLimiterKey,
                    eventStreamKey, jobId, timestamp, maxJobs,
                    limiterDuration, markerKey, opts)
            end
        else
            return prepareJobForProcessing(prefix, rateLimiterKey,
                eventStreamKey, jobId, timestamp, maxJobs,
                limiterDuration, markerKey, opts)
        end
    else
        jobId = moveJobFromPrioritizedToActive(prioritizedKey, activeKey, pcKey)
        if jobId then
            return prepareJobForProcessing(prefix, rateLimiterKey,
                eventStreamKey, jobId, timestamp, maxJobs,
                limiterDuration, markerKey, opts)
        end
    end
    -- Return the timestamp for the next delayed job if any.
    local nextTimestamp = getNextDelayedTimestamp(delayedKey)
    if nextTimestamp ~= nil then
        -- The result is guaranteed to be positive, since the
        -- ZRANGEBYSCORE command would have return a job otherwise.
        return {0, 0, 0, nextTimestamp}
    end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to update a bunch of fields in a job.
]]
local function updateJobFields(jobKey, msgpackedFields)
  if msgpackedFields and #msgpackedFields > 0 then
    local fieldsToUpdate = cmsgpack.unpack(msgpackedFields)
    if fieldsToUpdate then
      rcall("HMSET", jobKey, unpack(fieldsToUpdate))
    end
  end
end
local jobKey = KEYS[5]
local markerKey = KEYS[1]
local metaKey = KEYS[7]
local token = ARGV[4] 
if rcall("EXISTS", jobKey) == 1 then
    local errorCode = removeLock(jobKey, KEYS[8], token, ARGV[3])
    if errorCode < 0 then
        return errorCode
    end
    updateJobFields(jobKey, ARGV[7])
    local delayedKey = KEYS[4]
    local jobId = ARGV[3]
    local delay = tonumber(ARGV[5])
    local numRemovedElements = rcall("LREM", KEYS[2], -1, jobId)
    if numRemovedElements < 1 then return -3 end
    local score, delayedTimestamp = getDelayedScore(delayedKey, ARGV[2], delay)
    if ARGV[6] == "0" then
        rcall("HINCRBY", jobKey, "atm", 1)
    end
    rcall("HSET", jobKey, "delay", ARGV[5])
    local maxEvents = getOrSetMaxEvents(metaKey)
    rcall("ZADD", delayedKey, score, jobId)
    rcall("XADD", KEYS[6], "MAXLEN", "~", maxEvents, "*", "event", "delayed",
          "jobId", jobId, "delay", delayedTimestamp)
    -- Try to get next job to avoid an extra roundtrip if the queue is not closing,
    -- and not rate limited.
    if (ARGV[8] == "1") then
        local opts = cmsgpack.unpack(ARGV[9])
        local result = fetchNextJob(KEYS[9], KEYS[2], KEYS[3], KEYS[6],
            KEYS[10], KEYS[4], KEYS[11], metaKey, KEYS[12], markerKey,
            ARGV[1], ARGV[2], opts)
        if result and type(result[1]) == "table" then
            return result
        end
    end
    -- Check if we need to push a marker job to wake up sleeping workers.
    addDelayMarkerIfNeeded(markerKey, delayedKey)
    return 0
else
    return -1
end
`,keys:12};e.s(["moveToDelayed",0,tQ],78399),e.i(78399);let tX={name:"moveToFinished",content:`--[[
  Move job from active to a finished status (completed or failed)
  A job can only be moved to completed if it was active.
  The job must be locked before it can be moved to a finished status,
  and the lock must be released in this script.
    Input:
      KEYS[1] wait key
      KEYS[2] active key
      KEYS[3] prioritized key
      KEYS[4] event stream key
      KEYS[5] stalled key
      -- Rate limiting
      KEYS[6] rate limiter key
      KEYS[7] delayed key
      KEYS[8] paused key
      KEYS[9] meta key
      KEYS[10] pc priority counter
      KEYS[11] completed/failed key
      KEYS[12] jobId key
      KEYS[13] metrics key
      KEYS[14] marker key
      ARGV[1]  jobId
      ARGV[2]  timestamp
      ARGV[3]  msg property returnvalue / failedReason
      ARGV[4]  return value / failed reason
      ARGV[5]  target (completed/failed)
      ARGV[6]  fetch next?
      ARGV[7]  keys prefix
      ARGV[8]  opts
      ARGV[9]  job fields to update
      opts - token - lock token
      opts - keepJobs
      opts - lockDuration - lock duration in milliseconds
      opts - attempts max attempts
      opts - maxMetricsSize
      opts - fpof - fail parent on fail
      opts - cpof - continue parent on fail
      opts - idof - ignore dependency on fail
      opts - rdof - remove dependency on fail
      opts - name - worker name
    Output:
      0 OK
      -1 Missing key.
      -2 Missing lock.
      -3 Job not in active set
      -4 Job has pending children
      -6 Lock is not owned by this client
      -9 Job has failed children
    Events:
      'completed/failed'
]]
local rcall = redis.call
--- Includes
--[[
  Functions to collect metrics based on a current and previous count of jobs.
  Granularity is fixed at 1 minute.
]]
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
local function collectMetrics(metaKey, dataPointsList, maxDataPoints,
                                 timestamp)
    -- Increment current count
    local count = rcall("HINCRBY", metaKey, "count", 1) - 1
    -- Compute how many data points we need to add to the list, N.
    local prevTS = rcall("HGET", metaKey, "prevTS")
    if not prevTS then
        -- If prevTS is nil, set it to the current timestamp
        rcall("HSET", metaKey, "prevTS", timestamp, "prevCount", 0)
        return
    end
    local N = math.min(math.floor(timestamp / 60000) - math.floor(prevTS / 60000), tonumber(maxDataPoints))
    if N > 0 then
        local delta = count - rcall("HGET", metaKey, "prevCount")
        -- If N > 1, add N-1 zeros to the list
        if N > 1 then
            local points = {}
            points[1] = delta
            for i = 2, N do
                points[i] = 0
            end
            for from, to in batches(#points, 7000) do
                rcall("LPUSH", dataPointsList, unpack(points, from, to))
            end
        else
            -- LPUSH delta to the list
            rcall("LPUSH", dataPointsList, delta)
        end
        -- LTRIM to keep list to its max size
        rcall("LTRIM", dataPointsList, 0, maxDataPoints - 1)
        -- update prev count with current count
        rcall("HSET", metaKey, "prevCount", count, "prevTS", timestamp)
    end
end
--[[
  Function to fetch the next job to process.
  Tries to get the next job to avoid an extra roundtrip if the queue is
  not closing and not rate limited.
  Input:
    waitKey - wait list key
    activeKey - active list key
    prioritizedKey - prioritized sorted set key
    eventStreamKey - event stream key
    rateLimiterKey - rate limiter key
    delayedKey - delayed sorted set key
    pausedKey - paused list key
    metaKey - meta hash key
    pcKey - priority counter key
    markerKey - marker key
    prefix - keys prefix
    timestamp - current timestamp
    opts - options table:
      token (required) - lock token used when locking jobs
      lockDuration (required) - lock duration for acquired jobs
      limiter (optional) - rate limiter options table (e.g. { max = number })
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to move job from prioritized state to active.
]]
local function moveJobFromPrioritizedToActive(priorityKey, activeKey, priorityCounterKey)
  local prioritizedJob = rcall("ZPOPMIN", priorityKey)
  if #prioritizedJob > 0 then
    rcall("LPUSH", activeKey, prioritizedJob[1])
    return prioritizedJob[1]
  else
    rcall("DEL", priorityCounterKey)
  end
end
--[[
  Function to move job from wait state to active.
  Input:
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function prepareJobForProcessing(keyPrefix, rateLimiterKey, eventStreamKey,
    jobId, processedOn, maxJobs, limiterDuration, markerKey, opts)
  local jobKey = keyPrefix .. jobId
  -- Check if we need to perform rate limiting.
  if maxJobs then
    local jobCounter = tonumber(rcall("INCR", rateLimiterKey))
    if jobCounter == 1 then
      local integerDuration = math.floor(math.abs(limiterDuration))
      rcall("PEXPIRE", rateLimiterKey, integerDuration)
    end
  end
  -- get a lock
  if opts['token'] ~= "0" then
    local lockKey = jobKey .. ':lock'
    rcall("SET", lockKey, opts['token'], "PX", opts['lockDuration'])
  end
  local optionalValues = {}
  if opts['name'] then
    -- Set "processedBy" field to the worker name
    table.insert(optionalValues, "pb")
    table.insert(optionalValues, opts['name'])
  end
  rcall("XADD", eventStreamKey, "*", "event", "active", "jobId", jobId, "prev", "waiting")
  rcall("HMSET", jobKey, "processedOn", processedOn, unpack(optionalValues))
  rcall("HINCRBY", jobKey, "ats", 1)
  addBaseMarkerIfNeeded(markerKey, false)
  -- rate limit delay must be 0 in this case to prevent adding more delay
  -- when job that is moved to active needs to be processed
  return {rcall("HGETALL", jobKey), jobId, 0, 0} -- get job data
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local function fetchNextJob(waitKey, activeKey, prioritizedKey, eventStreamKey,
    rateLimiterKey, delayedKey, pausedKey, metaKey, pcKey, markerKey, prefix,
    timestamp, opts)
    local target, isPausedOrMaxed, rateLimitMax, rateLimitDuration =
        getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    -- Check if there are delayed jobs that can be promoted
    promoteDelayedJobs(delayedKey, markerKey, target, prioritizedKey,
        eventStreamKey, prefix, timestamp, pcKey, isPausedOrMaxed)
    local maxJobs = tonumber(rateLimitMax or (opts['limiter'] and opts['limiter']['max']))
    -- Check if we are rate limited first.
    local expireTime = getRateLimitTTL(maxJobs, rateLimiterKey)
    if expireTime > 0 then
        return {0, 0, expireTime, 0}
    end
    -- paused or maxed queue
    if isPausedOrMaxed then
        return {0, 0, 0, 0}
    end
    local limiterDuration = (opts['limiter'] and opts['limiter']['duration']) or rateLimitDuration
    local jobId = rcall("RPOPLPUSH", waitKey, activeKey)
    if jobId then
        -- Markers in waitlist DEPRECATED in v5: Remove in v6.
        if string.sub(jobId, 1, 2) == "0:" then
            rcall("LREM", activeKey, 1, jobId)
            -- If jobId is special ID 0:delay (delay greater than 0), then there is no job to process
            -- but if ID is 0:0, then there is at least 1 prioritized job to process
            if jobId == "0:0" then
                jobId = moveJobFromPrioritizedToActive(prioritizedKey, activeKey, pcKey)
                return prepareJobForProcessing(prefix, rateLimiterKey,
                    eventStreamKey, jobId, timestamp, maxJobs,
                    limiterDuration, markerKey, opts)
            end
        else
            return prepareJobForProcessing(prefix, rateLimiterKey,
                eventStreamKey, jobId, timestamp, maxJobs,
                limiterDuration, markerKey, opts)
        end
    else
        jobId = moveJobFromPrioritizedToActive(prioritizedKey, activeKey, pcKey)
        if jobId then
            return prepareJobForProcessing(prefix, rateLimiterKey,
                eventStreamKey, jobId, timestamp, maxJobs,
                limiterDuration, markerKey, opts)
        end
    end
    -- Return the timestamp for the next delayed job if any.
    local nextTimestamp = getNextDelayedTimestamp(delayedKey)
    if nextTimestamp ~= nil then
        -- The result is guaranteed to be positive, since the
        -- ZRANGEBYSCORE command would have return a job otherwise.
        return {0, 0, 0, nextTimestamp}
    end
end
--[[
  Function to recursively move from waitingChildren to failed.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local handleChildFailureAndMoveParentToWait = function (parentQueueKey, parentKey, parentId, jobIdKey, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    local parentDelayedKey = parentQueueKey .. ":delayed"
    local parentWaitingChildrenOrDelayedKey
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then
      parentWaitingChildrenOrDelayedKey = parentWaitingChildrenKey
    elseif rcall("ZSCORE", parentDelayedKey, parentId) then
      parentWaitingChildrenOrDelayedKey = parentDelayedKey
      rcall("HSET", parentKey, "delay", 0)
    end
    if parentWaitingChildrenOrDelayedKey then
      rcall("ZREM", parentWaitingChildrenOrDelayedKey, parentId)
      local deferredFailure = "child " .. jobIdKey .. " failed"
      rcall("HSET", parentKey, "defa", deferredFailure)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    else
      if not rcall("ZSCORE", parentQueueKey .. ":failed", parentId) then
        local deferredFailure = "child " .. jobIdKey .. " failed"
        rcall("HSET", parentKey, "defa", deferredFailure)
      end
    end
  end
end
local moveChildFromDependenciesIfNeeded = function (rawParentData, childKey, failedReason, timestamp)
  if rawParentData then
    local parentData = cjson.decode(rawParentData)
    local parentKey = parentData['queueKey'] .. ':' .. parentData['id']
    local parentDependenciesChildrenKey = parentKey .. ":dependencies"
    if parentData['fpof'] then
      if rcall("SREM", parentDependenciesChildrenKey, childKey) == 1 then
        local parentUnsuccessfulChildrenKey = parentKey .. ":unsuccessful"
        rcall("ZADD", parentUnsuccessfulChildrenKey, timestamp, childKey)
        handleChildFailureAndMoveParentToWait(
          parentData['queueKey'],
          parentKey,
          parentData['id'],
          childKey,
          timestamp
        )
      end
    elseif parentData['cpof'] then
      if rcall("SREM", parentDependenciesChildrenKey, childKey) == 1 then
        local parentFailedChildrenKey = parentKey .. ":failed"
        rcall("HSET", parentFailedChildrenKey, childKey, failedReason)
        moveParentToWaitIfNeeded(parentData['queueKey'], parentKey, parentData['id'], timestamp)
      end
    elseif parentData['idof'] or parentData['rdof'] then
      if rcall("SREM", parentDependenciesChildrenKey, childKey) == 1 then
        moveParentToWaitIfNoPendingDependencies(parentData['queueKey'], parentDependenciesChildrenKey,
          parentKey, parentData['id'], timestamp)
        if parentData['idof'] then
          local parentFailedChildrenKey = parentKey .. ":failed"
          rcall("HSET", parentFailedChildrenKey, childKey, failedReason)
        end
      end
    end
  end
end
--[[
  Function to remove deduplication key if needed
  when a job is moved to completed or failed states.
]]
local function removeDeduplicationKeyIfNeededOnFinalization(prefixKey,
  deduplicationId, jobId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local pttl = rcall("PTTL", deduplicationKey)
    if pttl == 0 then
      return rcall("DEL", deduplicationKey)
    end
    if pttl == -1 then
      local currentJobId = rcall('GET', deduplicationKey)
      if currentJobId and currentJobId == jobId then
        return rcall("DEL", deduplicationKey)
      end
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Functions to remove jobs by max age.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function removeJobsByMaxAge(timestamp, maxAge, targetSet, prefix, maxLimit)
  local start = timestamp - maxAge * 1000
  local jobIds = rcall("ZREVRANGEBYSCORE", targetSet, start, "-inf", "LIMIT", 0, maxLimit)
  for i, jobId in ipairs(jobIds) do
    removeJob(jobId, false, prefix, false --[[remove debounce key]])
  end
  if #jobIds > 0 then
    if #jobIds < maxLimit then
      rcall("ZREMRANGEBYSCORE", targetSet, "-inf", start)
    else
      for from, to in batches(#jobIds, 7000) do
        rcall("ZREM", targetSet, unpack(jobIds, from, to))
      end
    end
  end
end
--[[
  Functions to remove jobs by max count.
]]
-- Includes
local function removeJobsByMaxCount(maxCount, targetSet, prefix)
  local start = maxCount
  local jobIds = rcall("ZREVRANGE", targetSet, start, -1)
  for i, jobId in ipairs(jobIds) do
    removeJob(jobId, false, prefix, false --[[remove debounce key]])
  end
  rcall("ZREMRANGEBYRANK", targetSet, 0, -(maxCount + 1))
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to create a new job from stored dedup-next data
  when a deduplicated job with keepLastIfActive finishes.
  At most one next job is created per deduplication ID.
  Multiple triggers while active overwrite the dedup-next data,
  so only the latest data is used.
]]
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Shared helper to store a job and enqueue it into the appropriate list/set.
  Handles delayed, prioritized, and standard (LIFO/FIFO) jobs.
  Emits the appropriate event after enqueuing ("delayed" or "waiting").
  Returns delay, priority from storeJob.
]]
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
local function storeAndEnqueueJob(eventsKey, jobIdKey, jobId, name, data, opts,
    timestamp, parentKey, parentData, repeatJobKey, maxEvents,
    waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
    priorityCounterKey, delayedKey, markerKey)
  local delay, priority = storeJob(eventsKey, jobIdKey, jobId, name, data,
      opts, timestamp, parentKey, parentData, repeatJobKey)
  if delay ~= 0 and delayedKey then
    addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, markerKey, delay)
  else
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    if priority > 0 then
      addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
          priorityCounterKey, isPausedOrMaxed)
    else
      local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
      addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
    end
    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
        "jobId", jobId)
  end
  return delay, priority
end
local function requeueDeduplicatedJob(prefix, deduplicationId, eventStreamKey,
    metaKey, activeKey, waitKey, pausedKey, markerKey, prioritizedKey,
    priorityCounterKey, delayedKey, timestamp)
  local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
  if rcall("EXISTS", deduplicationNextKey) == 1 then
    local nextData = rcall("HMGET", deduplicationNextKey,
        "name", "data", "opts", "pk", "pd", "pdk", "rjk", "jid")
    -- Always increment the counter to keep it monotonic
    local nextId = rcall("INCR", prefix .. "id") .. ""
    local storedJobId = nextData[8] -- index 8 = "jid" (8th field in the HMGET call above)
    local newJobId
    if storedJobId then
      newJobId = storedJobId
    else
      newJobId = nextId
    end
    local newJobIdKey = prefix .. newJobId
    local newOpts = cjson.decode(nextData[3])
    local deduplicationKey = prefix .. "de:" .. deduplicationId
    local parentKey = nextData[4] or nil
    local parentData = nextData[5] or nil
    local parentDependenciesKey = nextData[6] or nil
    local repeatJobKey = nextData[7] or nil
    -- Set dedup key for the new job (without TTL when keepLastIfActive,
    -- so the key outlives the job's active duration)
    local deOpts = newOpts['de']
    if deOpts and deOpts['keepLastIfActive'] then
      rcall('SET', deduplicationKey, newJobId)
    else
      setDeduplicationKey(deduplicationKey, newJobId, deOpts)
    end
    -- Store and enqueue using the shared helper (handles priority/lifo/delayed)
    local maxEvents = getOrSetMaxEvents(metaKey)
    storeAndEnqueueJob(eventStreamKey, newJobIdKey, newJobId, nextData[1], nextData[2],
        newOpts, timestamp, parentKey, parentData, repeatJobKey, maxEvents,
        waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
        priorityCounterKey, delayedKey, markerKey)
    -- Register as child dependency if the job has a parent
    if parentDependenciesKey then
      rcall("SADD", parentDependenciesKey, newJobIdKey)
    end
    -- Only delete the dedup-next hash after the job is fully created,
    -- so that if any step above errors, the data is not permanently lost.
    rcall("DEL", deduplicationNextKey)
  end
end
--[[
  Function to trim events, default 10000.
]]
-- Includes
local function trimEvents(metaKey, eventStreamKey)
  local maxEvents = getOrSetMaxEvents(metaKey)
  if maxEvents then
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", maxEvents)
  else
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", 10000)
  end
end
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
--[[
  Function to update a bunch of fields in a job.
]]
local function updateJobFields(jobKey, msgpackedFields)
  if msgpackedFields and #msgpackedFields > 0 then
    local fieldsToUpdate = cmsgpack.unpack(msgpackedFields)
    if fieldsToUpdate then
      rcall("HMSET", jobKey, unpack(fieldsToUpdate))
    end
  end
end
local jobIdKey = KEYS[12]
if rcall("EXISTS", jobIdKey) == 1 then -- Make sure job exists
    -- Make sure it does not have pending dependencies
    -- It must happen before removing lock
    if ARGV[5] == "completed" then
        if rcall("SCARD", jobIdKey .. ":dependencies") ~= 0 then
            return -4
        end
        if rcall("ZCARD", jobIdKey .. ":unsuccessful") ~= 0 then
            return -9
        end
    end
    local opts = cmsgpack.unpack(ARGV[8])
    local token = opts['token']
    local errorCode = removeLock(jobIdKey, KEYS[5], token, ARGV[1])
    if errorCode < 0 then
        return errorCode
    end
    updateJobFields(jobIdKey, ARGV[9]);
    local attempts = opts['attempts']
    local maxMetricsSize = opts['maxMetricsSize']
    local maxCount = opts['keepJobs']['count']
    local maxAge = opts['keepJobs']['age']
    local maxLimit = opts['keepJobs']['limit'] or 1000
    local jobAttributes = rcall("HMGET", jobIdKey, "parentKey", "parent", "deid")
    local parentKey = jobAttributes[1] or ""
    local parentId = ""
    local parentQueueKey = ""
    if jobAttributes[2] then -- TODO: need to revisit this logic if it's still needed
        local jsonDecodedParent = cjson.decode(jobAttributes[2])
        parentId = jsonDecodedParent['id']
        parentQueueKey = jsonDecodedParent['queueKey']
    end
    local jobId = ARGV[1]
    local timestamp = ARGV[2]
    -- Remove from active list (if not active we shall return error)
    local numRemovedElements = rcall("LREM", KEYS[2], -1, jobId)
    if (numRemovedElements < 1) then
        return -3
    end
    local eventStreamKey = KEYS[4]
    local metaKey = KEYS[9]
    -- Trim events before emitting them to avoid trimming events emitted in this script
    trimEvents(metaKey, eventStreamKey)
    local prefix = ARGV[7]
    removeDeduplicationKeyIfNeededOnFinalization(prefix, jobAttributes[3], jobId)
    -- Check if there is requeue data for this dedup ID (keepLastIfActive mode)
    if jobAttributes[3] then
      requeueDeduplicatedJob(prefix, jobAttributes[3], eventStreamKey,
          metaKey, KEYS[2], KEYS[1], KEYS[8], KEYS[14], KEYS[3], KEYS[10],
          KEYS[7], timestamp)
    end
    -- If job has a parent we need to
    -- 1) remove this job id from parents dependencies
    -- 2) move the job Id to parent "processed" set
    -- 3) push the results into parent "results" list
    -- 4) if parent's dependencies is empty, then move parent to "wait/paused". Note it may be a different queue!.
    if parentId == "" and parentKey ~= "" then
        parentId = getJobIdFromKey(parentKey)
        parentQueueKey = getJobKeyPrefix(parentKey, ":" .. parentId)
    end
    if parentId ~= "" then
        if ARGV[5] == "completed" then
            local dependenciesSet = parentKey .. ":dependencies"
            if rcall("SREM", dependenciesSet, jobIdKey) == 1 then
                updateParentDepsIfNeeded(parentKey, parentQueueKey, dependenciesSet, parentId, jobIdKey, ARGV[4],
                    timestamp)
            end
        else
            moveChildFromDependenciesIfNeeded(jobAttributes[2], jobIdKey, ARGV[4], timestamp)
        end
    end
    local attemptsMade = rcall("HINCRBY", jobIdKey, "atm", 1)
    -- Remove job?
    if maxCount ~= 0 then
        local targetSet = KEYS[11]
        -- Add to complete/failed set
        rcall("ZADD", targetSet, timestamp, jobId)
        rcall("HSET", jobIdKey, ARGV[3], ARGV[4], "finishedOn", timestamp)
        -- "returnvalue" / "failedReason" and "finishedOn"
        if ARGV[5] == "failed" then
            rcall("HDEL", jobIdKey, "defa")
        end
        -- Remove old jobs?
        if maxAge ~= nil then
            removeJobsByMaxAge(timestamp, maxAge, targetSet, prefix, maxLimit)
        end
        if maxCount ~= nil and maxCount > 0 then
            removeJobsByMaxCount(maxCount, targetSet, prefix)
        end
    else
        removeJobKeys(jobIdKey)
        if parentKey ~= "" then
            -- TODO: when a child is removed when finished, result or failure in parent
            -- must not be deleted, those value references should be deleted when the parent
            -- is deleted
            removeParentDependencyKey(jobIdKey, false, parentKey, jobAttributes[3])
        end
    end
    rcall("XADD", eventStreamKey, "*", "event", ARGV[5], "jobId", jobId, ARGV[3], ARGV[4], "prev", "active")
    if ARGV[5] == "failed" then
        if tonumber(attemptsMade) >= tonumber(attempts) then
            rcall("XADD", eventStreamKey, "*", "event", "retries-exhausted", "jobId", jobId, "attemptsMade",
                attemptsMade)
        end
    end
    -- Collect metrics
    if maxMetricsSize ~= "" then
        collectMetrics(KEYS[13], KEYS[13] .. ':data', maxMetricsSize, timestamp)
    end
    -- Try to get next job to avoid an extra roundtrip if the queue is not closing,
    -- and not rate limited.
    if (ARGV[6] == "1") then
        local result = fetchNextJob(KEYS[1], KEYS[2], KEYS[3], eventStreamKey,
            KEYS[6], KEYS[7], KEYS[8], metaKey, KEYS[10], KEYS[14], prefix,
            timestamp, opts)
        if result then
            return result
        end
    end
    local waitLen = rcall("LLEN", KEYS[1])
    if waitLen == 0 then
        local activeLen = rcall("LLEN", KEYS[2])
        if activeLen == 0 then
            local prioritizedLen = rcall("ZCARD", KEYS[3])
            if prioritizedLen == 0 then
                rcall("XADD", eventStreamKey, "*", "event", "drained")
            end
        end
    end
    return 0
else
    return -1
end
`,keys:14};e.s(["moveToFinished",0,tX],28646),e.i(28646);let tZ={name:"moveToWaitingChildren",content:`--[[
  Moves job from active to waiting children set.
  Input:
    KEYS[1] active key
    KEYS[2] wait-children key
    KEYS[3] job key
    KEYS[4] job dependencies key
    KEYS[5] job unsuccessful key
    KEYS[6] stalled key
    KEYS[7] events key
    ARGV[1] token
    ARGV[2] child key
    ARGV[3] timestamp
    ARGV[4] jobId
    ARGV[5] prefix
  Output:
    0 - OK
    1 - There are not pending dependencies.
   -1 - Missing job.
   -2 - Missing lock
   -3 - Job not in active set
   -9 - Job has failed children
]]
local rcall = redis.call
local activeKey = KEYS[1]
local waitingChildrenKey = KEYS[2]
local jobKey = KEYS[3]
local jobDependenciesKey = KEYS[4]
local jobUnsuccessfulKey = KEYS[5]
local stalledKey = KEYS[6]
local eventStreamKey = KEYS[7]
local token = ARGV[1]
local timestamp = ARGV[3]
local jobId = ARGV[4]
--- Includes
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
local function removeJobFromActive(activeKey, stalledKey, jobKey, jobId,
    token)
  local errorCode = removeLock(jobKey, stalledKey, token, jobId)
  if errorCode < 0 then
    return errorCode
  end
  local numRemovedElements = rcall("LREM", activeKey, -1, jobId)
  if numRemovedElements < 1 then
    return -3
  end
  return 0
end
local function moveToWaitingChildren(activeKey, waitingChildrenKey, stalledKey, eventStreamKey,
    jobKey, jobId, timestamp, token)
  local errorCode = removeJobFromActive(activeKey, stalledKey, jobKey, jobId, token)
  if errorCode < 0 then
    return errorCode
  end
  local score = tonumber(timestamp)
  rcall("ZADD", waitingChildrenKey, score, jobId)
  rcall("XADD", eventStreamKey, "*", "event", "waiting-children", "jobId", jobId, 'prev', 'active')
  return 0
end
if rcall("EXISTS", jobKey) == 1 then
  if rcall("ZCARD", jobUnsuccessfulKey) ~= 0 then
    return -9
  else
    if ARGV[2] ~= "" then
      if rcall("SISMEMBER", jobDependenciesKey, ARGV[2]) ~= 0 then
        return moveToWaitingChildren(activeKey, waitingChildrenKey, stalledKey, eventStreamKey,
          jobKey, jobId, timestamp, token)
      end
      return 1
    else
      if rcall("SCARD", jobDependenciesKey) ~= 0 then 
        return moveToWaitingChildren(activeKey, waitingChildrenKey, stalledKey, eventStreamKey,
          jobKey, jobId, timestamp, token)
      end
      return 1
    end    
  end
end
return -1
`,keys:7};e.s(["moveToWaitingChildren",0,tZ],82792),e.i(82792);let t0={name:"obliterate",content:`--[[
  Completely obliterates a queue and all of its contents
  This command completely destroys a queue including all of its jobs, current or past 
  leaving no trace of its existence. Since this script needs to iterate to find all the job
  keys, consider that this call may be slow for very large queues.
  The queue needs to be "paused" or it will return an error
  If the queue has currently active jobs then the script by default will return error,
  however this behaviour can be overridden using the 'force' option.
  Input:
    KEYS[1] meta
    KEYS[2] base
    ARGV[1] count
    ARGV[2] force
]]
local maxCount = tonumber(ARGV[1])
local baseKey = KEYS[2]
local rcall = redis.call
-- Includes
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function removeJobs(keys, hard, baseKey, max)
  for i, key in ipairs(keys) do
    removeJob(key, hard, baseKey, true --[[remove debounce key]])
  end
  return max - #keys
end
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to filter out jobs to ignore from a table.
]]
local function filterOutJobsToIgnore(jobs, jobsToIgnore)
  local filteredJobs = {}
  for i = 1, #jobs do
    if not jobsToIgnore[jobs[i]] then
      table.insert(filteredJobs, jobs[i])
    end
  end
  return filteredJobs
end
local function getListItems(keyName, max)
  return rcall('LRANGE', keyName, 0, max - 1)
end
local function removeListJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getListItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  rcall("LTRIM", keyName, #jobs, -1)
  return count
end
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get ZSet items.
]]
local function getZSetItems(keyName, max)
  return rcall('ZRANGE', keyName, 0, max - 1)
end
local function removeZSetJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getZSetItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  if(#jobs > 0) then
    for from, to in batches(#jobs, 7000) do
      rcall("ZREM", keyName, unpack(jobs, from, to))
    end
  end
  return count
end
local function removeLockKeys(keys)
  for i, key in ipairs(keys) do
    rcall("DEL", baseKey .. key .. ':lock')
  end
end
-- 1) Check if paused, if not return with error.
if rcall("HEXISTS", KEYS[1], "paused") ~= 1 then
  return -1 -- Error, NotPaused
end
-- 2) Check if there are active jobs, if there are and not "force" return error.
local activeKey = baseKey .. 'active'
local activeJobs = getListItems(activeKey, maxCount)
if (#activeJobs > 0) then
  if(ARGV[2] == "") then 
    return -2 -- Error, ExistActiveJobs
  end
end
removeLockKeys(activeJobs)
maxCount = removeJobs(activeJobs, true, baseKey, maxCount)
rcall("LTRIM", activeKey, #activeJobs, -1)
if(maxCount <= 0) then
  return 1
end
local delayedKey = baseKey .. 'delayed'
maxCount = removeZSetJobs(delayedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local repeatKey = baseKey .. 'repeat'
local repeatJobsIds = getZSetItems(repeatKey, maxCount)
for i, key in ipairs(repeatJobsIds) do
  local jobKey = repeatKey .. ":" .. key
  rcall("DEL", jobKey)
end
if(#repeatJobsIds > 0) then
  for from, to in batches(#repeatJobsIds, 7000) do
    rcall("ZREM", repeatKey, unpack(repeatJobsIds, from, to))
  end
end
maxCount = maxCount - #repeatJobsIds
if(maxCount <= 0) then
  return 1
end
local completedKey = baseKey .. 'completed'
maxCount = removeZSetJobs(completedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local pausedKey = baseKey .. 'paused'
maxCount = removeListJobs(pausedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local prioritizedKey = baseKey .. 'prioritized'
maxCount = removeZSetJobs(prioritizedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local failedKey = baseKey .. 'failed'
maxCount = removeZSetJobs(failedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
if(maxCount > 0) then
  rcall("DEL",
    baseKey .. 'events',
    baseKey .. 'delay',
    baseKey .. 'stalled-check',
    baseKey .. 'stalled',
    baseKey .. 'id',
    baseKey .. 'pc',
    baseKey .. 'marker',
    baseKey .. 'meta',
    baseKey .. 'metrics:completed',
    baseKey .. 'metrics:completed:data',
    baseKey .. 'metrics:failed',
    baseKey .. 'metrics:failed:data')
  return 0
else
  return 1
end
`,keys:2};e.s(["obliterate",0,t0],35933),e.i(35933);let t1={name:"paginate",content:`--[[
    Paginate a set or hash
    Input:
      KEYS[1] key pointing to the set or hash to be paginated.
      ARGV[1]  page start offset
      ARGV[2]  page end offset (-1 for all the elements)
      ARGV[3]  cursor
      ARGV[4]  offset
      ARGV[5]  max iterations
      ARGV[6]  fetch jobs?
    Output:
      [cursor, offset, items, numItems]
]]
local rcall = redis.call
-- Includes
--[[
  Function to achieve pagination for a set or hash.
  This function simulates pagination in the most efficient way possible
  for a set using sscan or hscan.
  The main limitation is that sets are not order preserving, so the
  pagination is not stable. This means that if the set is modified
  between pages, the same element may appear in different pages.
]] -- Maximum number of elements to be returned by sscan per iteration.
local maxCount = 100
-- Finds the cursor, and returns the first elements available for the requested page.
local function findPage(key, command, pageStart, pageSize, cursor, offset,
                        maxIterations, fetchJobs)
    local items = {}
    local jobs = {}
    local iterations = 0
    repeat
        -- Iterate over the set using sscan/hscan.
        local result = rcall(command, key, cursor, "COUNT", maxCount)
        cursor = result[1]
        local members = result[2]
        local step = 1
        if command == "HSCAN" then
            step = 2
        end
        if #members == 0 then
            -- If the result is empty, we can return the result.
            return cursor, offset, items, jobs
        end
        local chunkStart = offset
        local chunkEnd = offset + #members / step
        local pageEnd = pageStart + pageSize
        if chunkEnd < pageStart then
            -- If the chunk is before the page, we can skip it.
            offset = chunkEnd
        elseif chunkStart > pageEnd then
            -- If the chunk is after the page, we can return the result.
            return cursor, offset, items, jobs
        else
            -- If the chunk is overlapping the page, we need to add the elements to the result.
            for i = 1, #members, step do
                if offset >= pageEnd then
                    return cursor, offset, items, jobs
                end
                if offset >= pageStart then
                    local index = #items + 1
                    if fetchJobs ~= nil then
                        jobs[#jobs+1] = rcall("HGETALL", members[i])
                    end
                    if step == 2 then
                        items[index] = {members[i], members[i + 1]}
                    else
                        items[index] = members[i]
                    end
                end
                offset = offset + 1
            end
        end
        iterations = iterations + 1
    until cursor == "0" or iterations >= maxIterations
    return cursor, offset, items, jobs
end
local key = KEYS[1]
local scanCommand = "SSCAN"
local countCommand = "SCARD"
local type = rcall("TYPE", key)["ok"]
if type == "none" then
    return {0, 0, {}, 0}
elseif type == "hash" then
    scanCommand = "HSCAN"
    countCommand = "HLEN"
elseif type ~= "set" then
    return
        redis.error_reply("Pagination is only supported for sets and hashes.")
end
local numItems = rcall(countCommand, key)
local startOffset = tonumber(ARGV[1])
local endOffset = tonumber(ARGV[2])
if endOffset == -1 then 
  endOffset = numItems
end
local pageSize = (endOffset - startOffset) + 1
local cursor, offset, items, jobs = findPage(key, scanCommand, startOffset,
                                       pageSize, ARGV[3], tonumber(ARGV[4]),
                                       tonumber(ARGV[5]), ARGV[6])
return {cursor, offset, items, numItems, jobs}
`,keys:1};e.s(["paginate",0,t1],50518),e.i(50518);let t2={name:"pause",content:`--[[
  Pauses or resumes a queue globally.
  Input:
    KEYS[1] 'wait' or 'paused'
    KEYS[2] 'paused' or 'wait'
    KEYS[3] 'meta'
    KEYS[4] 'prioritized'
    KEYS[5] events stream key
    KEYS[6] 'delayed'
    KEYS[7] 'marker'
    ARGV[1] 'paused' or 'resumed'
  Event:
    publish paused or resumed event.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
local markerKey = KEYS[7]
local hasJobs = rcall("EXISTS", KEYS[1]) == 1
--TODO: check this logic to be reused when changing a delay
if hasJobs then rcall("RENAME", KEYS[1], KEYS[2]) end
if ARGV[1] == "paused" then
    rcall("HSET", KEYS[3], "paused", 1)
    rcall("DEL", markerKey)
else
    rcall("HDEL", KEYS[3], "paused")
    if hasJobs or rcall("ZCARD", KEYS[4]) > 0 then
        -- Add marker if there are waiting or priority jobs
        rcall("ZADD", markerKey, 0, "0")
    else
        addDelayMarkerIfNeeded(markerKey, KEYS[6])
    end
end
rcall("XADD", KEYS[5], "*", "event", ARGV[1]);
`,keys:7};e.s(["pause",0,t2],77380),e.i(77380);let t3={name:"promote",content:`--[[
  Promotes a job that is currently "delayed" to the "waiting" state
    Input:
      KEYS[1] 'delayed'
      KEYS[2] 'wait'
      KEYS[3] 'paused'
      KEYS[4] 'meta'
      KEYS[5] 'prioritized'
      KEYS[6] 'active'
      KEYS[7] 'pc' priority counter
      KEYS[8] 'event stream'
      KEYS[9] 'marker'
      ARGV[1]  queue.toKey('')
      ARGV[2]  jobId
    Output:
       0 - OK
      -3 - Job not in delayed zset.
    Events:
      'waiting'
]]
local rcall = redis.call
local jobId = ARGV[2]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
if rcall("ZREM", KEYS[1], jobId) == 1 then
    local jobKey = ARGV[1] .. jobId
    local priority = tonumber(rcall("HGET", jobKey, "priority")) or 0
    local metaKey = KEYS[4]
    local markerKey = KEYS[9]
    -- Remove delayed "marker" from the wait list if there is any.
    -- Since we are adding a job we do not need the marker anymore.
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[6], KEYS[2], KEYS[3])
    local marker = rcall("LINDEX", target, 0)
    if marker and string.sub(marker, 1, 2) == "0:" then rcall("LPOP", target) end
    if priority == 0 then
        -- LIFO or FIFO
        addJobInTargetList(target, markerKey, "LPUSH", isPausedOrMaxed, jobId)
    else
        addJobWithPriority(markerKey, KEYS[5], priority, jobId, KEYS[7], isPausedOrMaxed)
    end
    rcall("XADD", KEYS[8], "*", "event", "waiting", "jobId", jobId, "prev",
          "delayed");
    rcall("HSET", jobKey, "delay", 0)
    return 0
else
    return -3
end
`,keys:9};e.s(["promote",0,t3],30498),e.i(30498);let t4={name:"releaseLock",content:`--[[
  Release lock
    Input:
      KEYS[1] 'lock',
      ARGV[1]  token
      ARGV[2]  lock duration in milliseconds
    Output:
      "OK" if lock extended successfully.
]]
local rcall = redis.call
if rcall("GET", KEYS[1]) == ARGV[1] then
  return rcall("DEL", KEYS[1])
else
  return 0
end
`,keys:1};e.s(["releaseLock",0,t4],47776),e.i(47776);let t6={name:"removeChildDependency",content:`--[[
  Break parent-child dependency by removing
  child reference from parent
  Input:
    KEYS[1] 'key' prefix,
    ARGV[1] job key
    ARGV[2] parent key
    Output:
       0  - OK
       1  - There is not relationship.
      -1  - Missing job key
      -5  - Missing parent key
]]
local rcall = redis.call
local jobKey = ARGV[1]
local parentKey = ARGV[2]
-- Includes
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
if rcall("EXISTS", jobKey) ~= 1 then return -1 end
if rcall("EXISTS", parentKey) ~= 1 then return -5 end
if removeParentDependencyKey(jobKey, false, parentKey, KEYS[1], nil) then
  rcall("HDEL", jobKey, "parentKey", "parent")
  return 0
else
  return 1
end`,keys:1};e.s(["removeChildDependency",0,t6],90342),e.i(90342);let t5={name:"removeDeduplicationKey",content:`--[[
  Remove deduplication key if it matches the job id.
  Input:
    KEYS[1] deduplication key
    ARGV[1] job id
  Output:
    0 - false
    1 - true
]]
local rcall = redis.call
local deduplicationKey = KEYS[1]
local jobId = ARGV[1]
local currentJobId = rcall('GET', deduplicationKey)
if currentJobId and currentJobId == jobId then
  return rcall("DEL", deduplicationKey)
end
return 0
`,keys:1};e.s(["removeDeduplicationKey",0,t5],91933),e.i(91933);let t8={name:"removeJob",content:`--[[
    Remove a job from all the statuses it may be in as well as all its data.
    In order to be able to remove a job, it cannot be active.
    Input:
      KEYS[1] jobKey
      KEYS[2] repeat key
      ARGV[1] jobId
      ARGV[2] remove children
      ARGV[3] queue prefix
    Events:
      'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Function to check if the job belongs to a job scheduler and
  current delayed job matches with jobId
]]
local function isJobSchedulerJob(jobId, jobKey, jobSchedulersKey)
  local repeatJobKey = rcall("HGET", jobKey, "rjk")
  if repeatJobKey  then
    local prevMillis = rcall("ZSCORE", jobSchedulersKey, repeatJobKey)
    if prevMillis then
      local currentDelayedJobId = "repeat:" .. repeatJobKey .. ":" .. prevMillis
      return jobId == currentDelayedJobId
    end
  end
  return false
end
--[[
  Function to recursively check if there are no locks
  on the jobs to be removed.
  returns:
    boolean
]]
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function isLocked( prefix, jobId, removeChildren)
  local jobKey = prefix .. jobId;
  -- Check if this job is locked
  local lockKey = jobKey .. ':lock'
  local lock = rcall("GET", lockKey)
  if not lock then
    if removeChildren == "1" then
      local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
      if (#dependencies > 0) then
        for i, childJobKey in ipairs(dependencies) do
          -- We need to get the jobId for this job.
          local childJobId = getJobIdFromKey(childJobKey)
          local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
          local result = isLocked( childJobPrefix, childJobId, removeChildren )
          if result then
            return true
          end
        end
      end
    end
    return false
  end
  return true
end
--[[
    Remove a job from all the statuses it may be in as well as all its data,
    including its children. Active children can be ignored.
    Events:
      'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove from any state.
  returns:
    prev state
]]
local function removeJobFromAnyState( prefix, jobId)
  -- We start with the ZSCORE checks, since they have O(1) complexity
  if rcall("ZSCORE", prefix .. "completed", jobId) then
    rcall("ZREM", prefix .. "completed", jobId)
    return "completed"
  elseif rcall("ZSCORE", prefix .. "waiting-children", jobId) then
    rcall("ZREM", prefix .. "waiting-children", jobId)
    return "waiting-children"
  elseif rcall("ZSCORE", prefix .. "delayed", jobId) then
    rcall("ZREM", prefix .. "delayed", jobId)
    return "delayed"
  elseif rcall("ZSCORE", prefix .. "failed", jobId) then
    rcall("ZREM", prefix .. "failed", jobId)
    return "failed"
  elseif rcall("ZSCORE", prefix .. "prioritized", jobId) then
    rcall("ZREM", prefix .. "prioritized", jobId)
    return "prioritized"
  -- We remove only 1 element from the list, since we assume they are not added multiple times
  elseif rcall("LREM", prefix .. "wait", 1, jobId) == 1 then
    return "wait"
  elseif rcall("LREM", prefix .. "paused", 1, jobId) == 1 then
    return "paused"
  elseif rcall("LREM", prefix .. "active", 1, jobId) == 1 then
    return "active"
  end
  return "unknown"
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local removeJobChildren
local removeJobWithChildren
removeJobChildren = function(prefix, jobKey, options)
    -- Check if this job has children
    -- If so, we are going to try to remove the children recursively in a depth-first way
    -- because if some job is locked, we must exit with an error.
    if not options.ignoreProcessed then
        local processed = rcall("HGETALL", jobKey .. ":processed")
        if #processed > 0 then
            for i = 1, #processed, 2 do
                local childJobId = getJobIdFromKey(processed[i])
                local childJobPrefix = getJobKeyPrefix(processed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local failed = rcall("HGETALL", jobKey .. ":failed")
        if #failed > 0 then
            for i = 1, #failed, 2 do
                local childJobId = getJobIdFromKey(failed[i])
                local childJobPrefix = getJobKeyPrefix(failed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local unsuccessful = rcall("ZRANGE", jobKey .. ":unsuccessful", 0, -1)
        if #unsuccessful > 0 then
            for i = 1, #unsuccessful, 1 do
                local childJobId = getJobIdFromKey(unsuccessful[i])
                local childJobPrefix = getJobKeyPrefix(unsuccessful[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
    end
    local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
    if #dependencies > 0 then
        for i, childJobKey in ipairs(dependencies) do
            local childJobId = getJobIdFromKey(childJobKey)
            local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
            removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
        end
    end
end
removeJobWithChildren = function(prefix, jobId, parentKey, options)
    local jobKey = prefix .. jobId
    if options.ignoreLocked then
        if isLocked(prefix, jobId) then
            return
        end
    end
    -- Check if job is in the failed zset
    local failedSet = prefix .. "failed"
    if not (options.ignoreProcessed and rcall("ZSCORE", failedSet, jobId)) then
        removeParentDependencyKey(jobKey, false, parentKey, nil)
        if options.removeChildren then
            removeJobChildren(prefix, jobKey, options)
        end
        local prev = removeJobFromAnyState(prefix, jobId)
        local deduplicationId = rcall("HGET", jobKey, "deid")
        removeDeduplicationKeyIfNeededOnRemoval(prefix, jobId, deduplicationId)
        if removeJobKeys(jobKey) > 0 then
            local metaKey = prefix .. "meta"
            local maxEvents = getOrSetMaxEvents(metaKey)
            rcall("XADD", prefix .. "events", "MAXLEN", "~", maxEvents, "*", "event", "removed",
                "jobId", jobId, "prev", prev)
        end
    end
end
local jobId = ARGV[1]
local shouldRemoveChildren = ARGV[2]
local prefix = ARGV[3]
local jobKey = KEYS[1]
local repeatKey = KEYS[2]
if isJobSchedulerJob(jobId, jobKey, repeatKey) then
    return -8
end
if not isLocked(prefix, jobId, shouldRemoveChildren) then
    local options = {
        removeChildren = shouldRemoveChildren == "1",
        ignoreProcessed = false,
        ignoreLocked = false
    }
    removeJobWithChildren(prefix, jobId, nil, options)
    return 1
end
return 0
`,keys:2};e.s(["removeJob",0,t8],25665),e.i(25665);let t7={name:"removeJobScheduler",content:`--[[
  Removes a job scheduler and its next scheduled job.
  Input:
    KEYS[1] job schedulers key
    KEYS[2] delayed jobs key
    KEYS[3] events key
    ARGV[1] job scheduler id
    ARGV[2] prefix key
  Output:
    0 - OK
    1 - Missing repeat job
  Events:
    'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local jobSchedulerId = ARGV[1]
local prefix = ARGV[2]
local millis = rcall("ZSCORE", KEYS[1], jobSchedulerId)
if millis then
  -- Delete next programmed job.
  local delayedJobId = "repeat:" .. jobSchedulerId .. ":" .. millis
  if(rcall("ZREM", KEYS[2], delayedJobId) == 1) then
    removeJobKeys(prefix .. delayedJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", delayedJobId, "prev", "delayed")
  end
end
if(rcall("ZREM", KEYS[1], jobSchedulerId) == 1) then
  rcall("DEL", KEYS[1] .. ":" .. jobSchedulerId)
  return 0
end
return 1
`,keys:3};e.s(["removeJobScheduler",0,t7],73024),e.i(73024);let t9={name:"removeOrphanedJobs",content:`--[[
  Removes orphaned job keys that exist in Redis but are not referenced
  in any queue state set. Checks each candidate atomically.
  Input:
    KEYS[1]  base prefix key including trailing colon (e.g. bull:queueName:)
    ARGV[1]  number of state key suffixes
    ARGV[2 .. 1+N]  state key suffixes (e.g. active, wait, completed, ...)
    ARGV[2+N]  number of job sub-key suffixes
    ARGV[3+N .. 2+N+M]  job sub-key suffixes (e.g. logs, dependencies, ...)
    ARGV[3+N+M .. end]  candidate job IDs to check
  Output:
    number of removed jobs
]]
local rcall = redis.call
local basePrefix = KEYS[1]
-- Parse state key suffixes and cache their full key names + types.
local stateKeyCount = tonumber(ARGV[1])
local stateKeys = {}
local stateKeyTypes = {}
for i = 1, stateKeyCount do
  local fullKey = basePrefix .. ARGV[1 + i]
  stateKeys[i] = fullKey
  stateKeyTypes[i] = rcall('TYPE', fullKey)['ok']
end
-- Parse job sub-key suffixes.
local subKeyCountIdx = 2 + stateKeyCount
local subKeyCount = tonumber(ARGV[subKeyCountIdx])
local subKeySuffixes = {}
for i = 1, subKeyCount do
  subKeySuffixes[i] = ARGV[subKeyCountIdx + i]
end
-- Process candidate job IDs.
local candidateStart = subKeyCountIdx + subKeyCount + 1
local removedCount = 0
for c = candidateStart, #ARGV do
  local jobId = ARGV[c]
  local found = false
  for i = 1, stateKeyCount do
    local kt = stateKeyTypes[i]
    if kt == 'list' then
      if rcall('LPOS', stateKeys[i], jobId) then
        found = true
        break
      end
    elseif kt == 'zset' then
      if rcall('ZSCORE', stateKeys[i], jobId) then
        found = true
        break
      end
    elseif kt == 'set' then
      if rcall('SISMEMBER', stateKeys[i], jobId) == 1 then
        found = true
        break
      end
    end
  end
  if not found then
    local jobKey = basePrefix .. jobId
    local keysToDelete = { jobKey }
    for _, suffix in ipairs(subKeySuffixes) do
      keysToDelete[#keysToDelete + 1] = jobKey .. ':' .. suffix
    end
    rcall('DEL', unpack(keysToDelete))
    removedCount = removedCount + 1
  end
end
return removedCount
`,keys:1};e.s(["removeOrphanedJobs",0,t9],33962),e.i(33962);let ie={name:"removeRepeatable",content:`--[[
  Removes a repeatable job
  Input:
    KEYS[1] repeat jobs key
    KEYS[2] delayed jobs key
    KEYS[3] events key
    ARGV[1] old repeat job id
    ARGV[2] options concat
    ARGV[3] repeat job key
    ARGV[4] prefix key
  Output:
    0 - OK
    1 - Missing repeat job
  Events:
    'removed'
]]
local rcall = redis.call
local millis = rcall("ZSCORE", KEYS[1], ARGV[2])
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
-- legacy removal TODO: remove in next breaking change
if millis then
  -- Delete next programmed job.
  local repeatJobId = ARGV[1] .. millis
  if(rcall("ZREM", KEYS[2], repeatJobId) == 1) then
    removeJobKeys(ARGV[4] .. repeatJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", repeatJobId, "prev", "delayed");
  end
end
if(rcall("ZREM", KEYS[1], ARGV[2]) == 1) then
  return 0
end
-- new removal
millis = rcall("ZSCORE", KEYS[1], ARGV[3])
if millis then
  -- Delete next programmed job.
  local repeatJobId = "repeat:" .. ARGV[3] .. ":" .. millis
  if(rcall("ZREM", KEYS[2], repeatJobId) == 1) then
    removeJobKeys(ARGV[4] .. repeatJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", repeatJobId, "prev", "delayed")
  end
end
if(rcall("ZREM", KEYS[1], ARGV[3]) == 1) then
  rcall("DEL", KEYS[1] .. ":" .. ARGV[3])
  return 0
end
return 1
`,keys:3};e.s(["removeRepeatable",0,ie],66357),e.i(66357);let it={name:"removeUnprocessedChildren",content:`--[[
    Remove a job from all the statuses it may be in as well as all its data.
    In order to be able to remove a job, it cannot be active.
    Input:
      KEYS[1] jobKey
      KEYS[2] meta key
      ARGV[1] prefix
      ARGV[2] jobId
    Events:
      'removed' for every children removed
]]
-- Includes
--[[
    Remove a job from all the statuses it may be in as well as all its data,
    including its children. Active children can be ignored.
    Events:
      'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check if the job belongs to a job scheduler and
  current delayed job matches with jobId
]]
local function isJobSchedulerJob(jobId, jobKey, jobSchedulersKey)
  local repeatJobKey = rcall("HGET", jobKey, "rjk")
  if repeatJobKey  then
    local prevMillis = rcall("ZSCORE", jobSchedulersKey, repeatJobKey)
    if prevMillis then
      local currentDelayedJobId = "repeat:" .. repeatJobKey .. ":" .. prevMillis
      return jobId == currentDelayedJobId
    end
  end
  return false
end
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove from any state.
  returns:
    prev state
]]
local function removeJobFromAnyState( prefix, jobId)
  -- We start with the ZSCORE checks, since they have O(1) complexity
  if rcall("ZSCORE", prefix .. "completed", jobId) then
    rcall("ZREM", prefix .. "completed", jobId)
    return "completed"
  elseif rcall("ZSCORE", prefix .. "waiting-children", jobId) then
    rcall("ZREM", prefix .. "waiting-children", jobId)
    return "waiting-children"
  elseif rcall("ZSCORE", prefix .. "delayed", jobId) then
    rcall("ZREM", prefix .. "delayed", jobId)
    return "delayed"
  elseif rcall("ZSCORE", prefix .. "failed", jobId) then
    rcall("ZREM", prefix .. "failed", jobId)
    return "failed"
  elseif rcall("ZSCORE", prefix .. "prioritized", jobId) then
    rcall("ZREM", prefix .. "prioritized", jobId)
    return "prioritized"
  -- We remove only 1 element from the list, since we assume they are not added multiple times
  elseif rcall("LREM", prefix .. "wait", 1, jobId) == 1 then
    return "wait"
  elseif rcall("LREM", prefix .. "paused", 1, jobId) == 1 then
    return "paused"
  elseif rcall("LREM", prefix .. "active", 1, jobId) == 1 then
    return "active"
  end
  return "unknown"
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
--[[
  Function to recursively check if there are no locks
  on the jobs to be removed.
  returns:
    boolean
]]
local function isLocked( prefix, jobId, removeChildren)
  local jobKey = prefix .. jobId;
  -- Check if this job is locked
  local lockKey = jobKey .. ':lock'
  local lock = rcall("GET", lockKey)
  if not lock then
    if removeChildren == "1" then
      local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
      if (#dependencies > 0) then
        for i, childJobKey in ipairs(dependencies) do
          -- We need to get the jobId for this job.
          local childJobId = getJobIdFromKey(childJobKey)
          local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
          local result = isLocked( childJobPrefix, childJobId, removeChildren )
          if result then
            return true
          end
        end
      end
    end
    return false
  end
  return true
end
local removeJobChildren
local removeJobWithChildren
removeJobChildren = function(prefix, jobKey, options)
    -- Check if this job has children
    -- If so, we are going to try to remove the children recursively in a depth-first way
    -- because if some job is locked, we must exit with an error.
    if not options.ignoreProcessed then
        local processed = rcall("HGETALL", jobKey .. ":processed")
        if #processed > 0 then
            for i = 1, #processed, 2 do
                local childJobId = getJobIdFromKey(processed[i])
                local childJobPrefix = getJobKeyPrefix(processed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local failed = rcall("HGETALL", jobKey .. ":failed")
        if #failed > 0 then
            for i = 1, #failed, 2 do
                local childJobId = getJobIdFromKey(failed[i])
                local childJobPrefix = getJobKeyPrefix(failed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local unsuccessful = rcall("ZRANGE", jobKey .. ":unsuccessful", 0, -1)
        if #unsuccessful > 0 then
            for i = 1, #unsuccessful, 1 do
                local childJobId = getJobIdFromKey(unsuccessful[i])
                local childJobPrefix = getJobKeyPrefix(unsuccessful[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
    end
    local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
    if #dependencies > 0 then
        for i, childJobKey in ipairs(dependencies) do
            local childJobId = getJobIdFromKey(childJobKey)
            local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
            removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
        end
    end
end
removeJobWithChildren = function(prefix, jobId, parentKey, options)
    local jobKey = prefix .. jobId
    if options.ignoreLocked then
        if isLocked(prefix, jobId) then
            return
        end
    end
    -- Check if job is in the failed zset
    local failedSet = prefix .. "failed"
    if not (options.ignoreProcessed and rcall("ZSCORE", failedSet, jobId)) then
        removeParentDependencyKey(jobKey, false, parentKey, nil)
        if options.removeChildren then
            removeJobChildren(prefix, jobKey, options)
        end
        local prev = removeJobFromAnyState(prefix, jobId)
        local deduplicationId = rcall("HGET", jobKey, "deid")
        removeDeduplicationKeyIfNeededOnRemoval(prefix, jobId, deduplicationId)
        if removeJobKeys(jobKey) > 0 then
            local metaKey = prefix .. "meta"
            local maxEvents = getOrSetMaxEvents(metaKey)
            rcall("XADD", prefix .. "events", "MAXLEN", "~", maxEvents, "*", "event", "removed",
                "jobId", jobId, "prev", prev)
        end
    end
end
local prefix = ARGV[1]
local jobId = ARGV[2]
local jobKey = KEYS[1]
local metaKey = KEYS[2]
local options = {
  removeChildren = "1",
  ignoreProcessed = true,
  ignoreLocked = true
}
removeJobChildren(prefix, jobKey, options) 
`,keys:2};e.s(["removeUnprocessedChildren",0,it],72997),e.i(72997);let ii={name:"reprocessJob",content:`--[[
  Attempts to reprocess a job
  Input:
    KEYS[1] job key
    KEYS[2] events stream
    KEYS[3] job state
    KEYS[4] wait key
    KEYS[5] meta
    KEYS[6] paused key
    KEYS[7] active key
    KEYS[8] marker key
    ARGV[1] job.id
    ARGV[2] (job.opts.lifo ? 'R' : 'L') + 'PUSH'
    ARGV[3] propVal - failedReason/returnvalue
    ARGV[4] prev state - failed/completed
    ARGV[5] reset attemptsMade - "1" or "0"
    ARGV[6] reset attemptsStarted - "1" or "0"
  Output:
     1 means the operation was a success
    -1 means the job does not exist
    -3 means the job was not found in the expected set.
]]
local rcall = redis.call;
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local jobKey = KEYS[1]
if rcall("EXISTS", jobKey) == 1 then
  local jobId = ARGV[1]
  if (rcall("ZREM", KEYS[3], jobId) == 1) then
    local attributesToRemove = {}
    if ARGV[5] == "1" then
      table.insert(attributesToRemove, "atm")
    end
    if ARGV[6] == "1" then
      table.insert(attributesToRemove, "ats")
    end
    rcall("HDEL", jobKey, "finishedOn", "processedOn", ARGV[3], unpack(attributesToRemove))
    local target, isPausedOrMaxed = getTargetQueueList(KEYS[5], KEYS[7], KEYS[4], KEYS[6])
    addJobInTargetList(target, KEYS[8], ARGV[2], isPausedOrMaxed, jobId)
    local parentKey = rcall("HGET", jobKey, "parentKey")
    if parentKey and rcall("EXISTS", parentKey) == 1 then
      if ARGV[4] == "failed" then
        if rcall("ZREM", parentKey .. ":unsuccessful", jobKey) == 1 or
          rcall("ZREM", parentKey .. ":failed", jobKey) == 1 then
          rcall("SADD", parentKey .. ":dependencies", jobKey)
        end
      else
        if rcall("HDEL", parentKey .. ":processed", jobKey) == 1 then
          rcall("SADD", parentKey .. ":dependencies", jobKey)
        end
      end
    end
    local maxEvents = getOrSetMaxEvents(KEYS[5])
    -- Emit waiting event
    rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId, "prev", ARGV[4]);
    return 1
  else
    return -3
  end
else
  return -1
end
`,keys:8};e.s(["reprocessJob",0,ii],87721),e.i(87721);let ir={name:"retryJob",content:`--[[
  Retries a failed job by moving it back to the wait queue.
    Input:
      KEYS[1]  'active',
      KEYS[2]  'wait'
      KEYS[3]  'paused'
      KEYS[4]  job key
      KEYS[5]  'meta'
      KEYS[6]  events stream
      KEYS[7]  delayed key
      KEYS[8]  prioritized key
      KEYS[9]  'pc' priority counter
      KEYS[10] 'marker'
      KEYS[11] 'stalled'
      ARGV[1]  key prefix
      ARGV[2]  timestamp
      ARGV[3]  pushCmd
      ARGV[4]  jobId
      ARGV[5]  token
      ARGV[6]  optional job fields to update
    Events:
      'waiting'
    Output:
     0  - OK
     -1 - Missing key
     -2 - Missing lock
     -3 - Job not in active set
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to update a bunch of fields in a job.
]]
local function updateJobFields(jobKey, msgpackedFields)
  if msgpackedFields and #msgpackedFields > 0 then
    local fieldsToUpdate = cmsgpack.unpack(msgpackedFields)
    if fieldsToUpdate then
      rcall("HMSET", jobKey, unpack(fieldsToUpdate))
    end
  end
end
local target, isPausedOrMaxed = getTargetQueueList(KEYS[5], KEYS[1], KEYS[2], KEYS[3])
local markerKey = KEYS[10]
-- Check if there are delayed jobs that we can move to wait.
-- test example: when there are delayed jobs between retries
promoteDelayedJobs(KEYS[7], markerKey, target, KEYS[8], KEYS[6], ARGV[1], ARGV[2], KEYS[9], isPausedOrMaxed)
local jobKey = KEYS[4]
if rcall("EXISTS", jobKey) == 1 then
  local errorCode = removeLock(jobKey, KEYS[11], ARGV[5], ARGV[4]) 
  if errorCode < 0 then
    return errorCode
  end
  updateJobFields(jobKey, ARGV[6])
  local numRemovedElements = rcall("LREM", KEYS[1], -1, ARGV[4])
  if (numRemovedElements < 1) then return -3 end
  local priority = tonumber(rcall("HGET", jobKey, "priority")) or 0
  --need to re-evaluate after removing job from active
  isPausedOrMaxed = isQueuePausedOrMaxed(KEYS[5], KEYS[1])
  -- Standard or priority add
  if priority == 0 then
    addJobInTargetList(target, markerKey, ARGV[3], isPausedOrMaxed, ARGV[4])
  else
    addJobWithPriority(markerKey, KEYS[8], priority, ARGV[4], KEYS[9], isPausedOrMaxed)
  end
  rcall("HINCRBY", jobKey, "atm", 1)
  local maxEvents = getOrSetMaxEvents(KEYS[5])
  -- Emit waiting event
  rcall("XADD", KEYS[6], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
    "jobId", ARGV[4], "prev", "active")
  return 0
else
  return -1
end
`,keys:11};e.s(["retryJob",0,ir],32559),e.i(32559);let ia={name:"saveStacktrace",content:`--[[
  Save stacktrace and failedReason.
  Input:
    KEYS[1] job key
    ARGV[1]  stacktrace
    ARGV[2]  failedReason
  Output:
     0 - OK
    -1 - Missing key
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[1]) == 1 then
  rcall("HMSET", KEYS[1], "stacktrace", ARGV[1], "failedReason", ARGV[2])
  return 0
else
  return -1
end
`,keys:1};e.s(["saveStacktrace",0,ia],20332),e.i(20332);let is={name:"updateData",content:`--[[
  Update job data
  Input:
    KEYS[1] Job id key
    ARGV[1] data
  Output:
    0 - OK
   -1 - Missing job.
]]
local rcall = redis.call
if rcall("EXISTS",KEYS[1]) == 1 then -- // Make sure job exists
  rcall("HSET", KEYS[1], "data", ARGV[1])
  return 0
else
  return -1
end
`,keys:1};e.s(["updateData",0,is],47479),e.i(47479);let io={name:"updateJobScheduler",content:`--[[
  Updates a job scheduler and adds next delayed job
  Input:
    KEYS[1]  'repeat' key
    KEYS[2]  'delayed'
    KEYS[3]  'wait' key
    KEYS[4]  'paused' key
    KEYS[5]  'meta'
    KEYS[6]  'prioritized' key
    KEYS[7]  'marker',
    KEYS[8]  'id'
    KEYS[9]  events stream key
    KEYS[10] 'pc' priority counter
    KEYS[11] producer key
    KEYS[12] 'active' key
    ARGV[1] next milliseconds
    ARGV[2] jobs scheduler id
    ARGV[3] Json stringified delayed data
    ARGV[4] msgpacked delayed opts
    ARGV[5] timestamp
    ARGV[6] prefix key
    ARGV[7] producer id
    Output:
      next delayed job id  - OK
]] local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local waitKey = KEYS[3]
local pausedKey = KEYS[4]
local metaKey = KEYS[5]
local prioritizedKey = KEYS[6]
local nextMillis = tonumber(ARGV[1])
local jobSchedulerId = ARGV[2]
local timestamp = tonumber(ARGV[5])
local prefixKey = ARGV[6]
local producerId = ARGV[7]
local jobOpts = cmsgpack.unpack(ARGV[4])
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Shared helper to store a job and enqueue it into the appropriate list/set.
  Handles delayed, prioritized, and standard (LIFO/FIFO) jobs.
  Emits the appropriate event after enqueuing ("delayed" or "waiting").
  Returns delay, priority from storeJob.
]]
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
local function storeAndEnqueueJob(eventsKey, jobIdKey, jobId, name, data, opts,
    timestamp, parentKey, parentData, repeatJobKey, maxEvents,
    waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
    priorityCounterKey, delayedKey, markerKey)
  local delay, priority = storeJob(eventsKey, jobIdKey, jobId, name, data,
      opts, timestamp, parentKey, parentData, repeatJobKey)
  if delay ~= 0 and delayedKey then
    addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, markerKey, delay)
  else
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    if priority > 0 then
      addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
          priorityCounterKey, isPausedOrMaxed)
    else
      local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
      addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
    end
    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
        "jobId", jobId)
  end
  return delay, priority
end
local function addJobFromScheduler(jobKey, jobId, opts, waitKey, pausedKey, activeKey, metaKey, 
  prioritizedKey, priorityCounter, delayedKey, markerKey, eventsKey, name, maxEvents, timestamp,
  data, jobSchedulerId, repeatDelay)
  opts['delay'] = repeatDelay
  opts['jobId'] = jobId
  storeAndEnqueueJob(eventsKey, jobKey, jobId, name, data, opts,
      timestamp, nil, nil, jobSchedulerId, maxEvents,
      waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
      priorityCounter, delayedKey, markerKey)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
local function getJobSchedulerEveryNextMillis(prevMillis, every, now, offset, startDate)
    local nextMillis
    if not prevMillis then
        if startDate then
            -- Assuming startDate is passed as milliseconds from JavaScript
            nextMillis = tonumber(startDate)
            nextMillis = nextMillis > now and nextMillis or now
        else
            nextMillis = now
            -- For the first iteration with no startDate and an explicit
            -- offset, align nextMillis to the next offset slot strictly
            -- after now. Without this the user-supplied offset is
            -- recorded but ignored, and the first job fires at now
            -- instead of the next aligned timestamp (issue #3705).
            if offset and offset > 0 then
                local aligned = math.floor(nextMillis / every) * every + offset
                if aligned <= nextMillis then
                    aligned = aligned + every
                end
                nextMillis = aligned
            end
        end
    else
        nextMillis = prevMillis + every
        -- check if we may have missed some iterations
        if nextMillis < now then
            nextMillis = math.floor(now / every) * every + every + (offset or 0)
        end
    end
    if not offset or offset == 0 then
        local timeSlot = math.floor(nextMillis / every) * every;
        offset = nextMillis - timeSlot;
    end
    -- Return a tuple nextMillis, offset
    return math.floor(nextMillis), math.floor(offset)
end
local prevMillis = rcall("ZSCORE", repeatKey, jobSchedulerId)
-- Validate that scheduler exists.
-- If it does not exist we should not iterate anymore.
if prevMillis then
    prevMillis = tonumber(prevMillis)
    local schedulerKey = repeatKey .. ":" .. jobSchedulerId
    local schedulerAttributes = rcall("HMGET", schedulerKey, "name", "data", "every", "startDate", "offset")
    local every = tonumber(schedulerAttributes[3])
    local now = tonumber(timestamp)
    -- If every is not found in scheduler attributes, try to get it from job options
    if not every and jobOpts['repeat'] and jobOpts['repeat']['every'] then
        every = tonumber(jobOpts['repeat']['every'])
    end
    if every then
        local startDate = schedulerAttributes[4]
        local jobOptsOffset = jobOpts['repeat'] and jobOpts['repeat']['offset'] or 0
        local offset = schedulerAttributes[5] or jobOptsOffset or 0
        local newOffset
        nextMillis, newOffset = getJobSchedulerEveryNextMillis(prevMillis, every, now, offset, startDate)
        if not offset then
            rcall("HSET", schedulerKey, "offset", newOffset)
            jobOpts['repeat']['offset'] = newOffset
        end
    end
    local nextDelayedJobId = "repeat:" .. jobSchedulerId .. ":" .. nextMillis
    local nextDelayedJobKey = schedulerKey .. ":" .. nextMillis
    local currentDelayedJobId = "repeat:" .. jobSchedulerId .. ":" .. prevMillis
    if producerId == currentDelayedJobId then
        local eventsKey = KEYS[9]
        local maxEvents = getOrSetMaxEvents(metaKey)
        if rcall("EXISTS", nextDelayedJobKey) ~= 1 then
            rcall("ZADD", repeatKey, nextMillis, jobSchedulerId)
            rcall("HINCRBY", schedulerKey, "ic", 1)
            rcall("INCR", KEYS[8])
            -- TODO: remove this workaround in next breaking change,
            -- all job-schedulers must save job data
            local templateData = schedulerAttributes[2] or ARGV[3]
            if templateData and templateData ~= '{}' then
                rcall("HSET", schedulerKey, "data", templateData)
            end
            local delay = nextMillis - now
            -- Fast Clamp delay to minimum of 0
            if delay < 0 then
                delay = 0
            end
            jobOpts["delay"] = delay
            addJobFromScheduler(nextDelayedJobKey, nextDelayedJobId, jobOpts, waitKey, pausedKey, KEYS[12], metaKey,
                prioritizedKey, KEYS[10], delayedKey, KEYS[7], eventsKey, schedulerAttributes[1], maxEvents, ARGV[5],
                templateData or '{}', jobSchedulerId, delay)
            -- TODO: remove this workaround in next breaking change
            if KEYS[11] ~= "" then
                rcall("HSET", KEYS[11], "nrjid", nextDelayedJobId)
            end
            return nextDelayedJobId .. "" -- convert to string
        else
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "duplicated", "jobId", nextDelayedJobId)
        end
    end
end
`,keys:12};e.s(["updateJobScheduler",0,io],74677),e.i(74677);let il={name:"updateProgress",content:`--[[
  Update job progress
  Input:
    KEYS[1] Job id key
    KEYS[2] event stream key
    KEYS[3] meta key
    ARGV[1] id
    ARGV[2] progress
  Output:
     0 - OK
    -1 - Missing job.
  Event:
    progress(jobId, progress)
]]
local rcall = redis.call
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
if rcall("EXISTS", KEYS[1]) == 1 then -- // Make sure job exists
    local maxEvents = getOrSetMaxEvents(KEYS[3])
    rcall("HSET", KEYS[1], "progress", ARGV[2])
    rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event", "progress",
          "jobId", ARGV[1], "data", ARGV[2]);
    return 0
else
    return -1
end
`,keys:3};e.s(["updateProgress",0,il],70855),e.i(70855);let id={name:"updateRepeatableJobMillis",content:`--[[
  Adds a repeatable job
    Input:
      KEYS[1] 'repeat' key
      ARGV[1] next milliseconds
      ARGV[2] custom key
      ARGV[3] legacy custom key TODO: remove this logic in next breaking change
      Output:
        repeatableKey  - OK
]]
local rcall = redis.call
local repeatKey = KEYS[1]
local nextMillis = ARGV[1]
local customKey = ARGV[2]
local legacyCustomKey = ARGV[3]
if rcall("ZSCORE", repeatKey, customKey) then
    rcall("ZADD", repeatKey, nextMillis, customKey)
    return customKey
elseif rcall("ZSCORE", repeatKey, legacyCustomKey) ~= false then
    rcall("ZADD", repeatKey, nextMillis, legacyCustomKey)
    return legacyCustomKey
end
return ''
`,keys:1};e.s(["updateRepeatableJobMillis",0,id],48349),e.i(48349),e.s(["addDelayedJob",0,tk,"addJobScheduler",0,tS,"addLog",0,tE,"addParentJob",0,tI,"addPrioritizedJob",0,tw,"addRepeatableJob",0,tj,"addStandardJob",0,tA,"changeDelay",0,tT,"changePriority",0,tC,"cleanJobsInSet",0,tD,"drain",0,tO,"extendLock",0,tR,"extendLocks",0,tM,"getCounts",0,t_,"getCountsPerPriority",0,tP,"getDependencyCounts",0,tN,"getJobScheduler",0,tL,"getMetrics",0,tJ,"getRanges",0,tq,"getRateLimitTtl",0,tF,"getState",0,tG,"getStateV2",0,tV,"isFinished",0,tz,"isJobInList",0,tB,"isMaxed",0,tH,"moveJobFromActiveToWait",0,tU,"moveJobsToWait",0,tY,"moveStalledJobsToWait",0,tW,"moveToActive",0,t$,"moveToDelayed",0,tQ,"moveToFinished",0,tX,"moveToWaitingChildren",0,tZ,"obliterate",0,t0,"paginate",0,t1,"pause",0,t2,"promote",0,t3,"releaseLock",0,t4,"removeChildDependency",0,t6,"removeDeduplicationKey",0,t5,"removeJob",0,t8,"removeJobScheduler",0,t7,"removeOrphanedJobs",0,t9,"removeRepeatable",0,ie,"removeUnprocessedChildren",0,it,"reprocessJob",0,ii,"retryJob",0,ir,"saveStacktrace",0,ia,"updateData",0,is,"updateJobScheduler",0,io,"updateProgress",0,il,"updateRepeatableJobMillis",0,id],28729);var ic=e.i(28729);let iu=new WeakMap;function ip(e){if(!0===e.__bullmq_iredis)return e;let t=iu.get(e);if(t)return t;let i=!0===e.isCluster,r=new Map,a=Object.create(null);a.__bullmq_iredis=!0,a.isCluster=i,a.runCommand=(t,i)=>e[t](i),a.pipeline=(...t)=>ih(e.pipeline(...t)),a.multi=(...t)=>ih(e.multi(...t)),"function"==typeof e.duplicate&&(a.duplicate=t=>{var r;if(i){let i=(null==(r=e.options)?void 0:r.redisOptions)||{},a=t?Object.assign(Object.assign({},i),t):i;return ip(e.duplicate(void 0,{redisOptions:a}))}return ip(e.duplicate(t))}),a.hset=(t,i,...r)=>{if("string"==typeof i)return e.hset(t,i,...r);let a=[t];for(let[e,t]of Object.entries(i))a.push(e,t);return e.hset(...a)},a.set=(t,i,r,...a)=>{if("string"==typeof r||null==r)return e.set(t,i,...null!=r?[r,...a]:[]);let n=[t,i];return null!=r.PX?n.push("PX",r.PX):null!=r.EX&&n.push("EX",r.EX),e.set(...n)},a.zrange=(t,i,r,a,...n)=>"string"==typeof a?e.zrange(t,i,r,a,...n):(null==a?void 0:a.WITHSCORES)?e.zrange(t,i,r,"WITHSCORES"):e.zrange(t,i,r),a.zrevrange=(t,i,r,a,...n)=>"string"==typeof a?e.zrevrange(t,i,r,a,...n):(null==a?void 0:a.WITHSCORES)?e.zrevrange(t,i,r,"WITHSCORES"):e.zrevrange(t,i,r),a.xadd=(t,i,r,...a)=>{if("string"==typeof r)return e.xadd(t,i,r,...a);let n=a[0],s=[t];for(let[e,t]of((null==n?void 0:n.MAXLEN)!=null&&(s.push("MAXLEN"),!1!==n.approximate&&s.push("~"),s.push(n.MAXLEN)),s.push(i),Object.entries(r)))s.push(e,t);return e.xadd(...s)},a.xread=(t,...i)=>{if("string"==typeof t)return e.xread(t,...i);let r=i[0],a=[];for(let e of((null==r?void 0:r.BLOCK)!=null&&a.push("BLOCK",r.BLOCK),(null==r?void 0:r.COUNT)!=null&&a.push("COUNT",r.COUNT),a.push("STREAMS"),t))a.push(e.key);for(let e of t)a.push(e.id);return e.xread(...a)},a.xtrim=(t,i,r,...a)=>{if("string"==typeof r||0===a.length)return e.xtrim(t,i,r,...a);let n=a[0],s=[t,i];return(null==n?void 0:n.approximate)!==!1&&s.push("~"),s.push(r),e.xtrim(...s)},a.clientSetName=t=>e.client("SETNAME",t),a.clientList=()=>e.client("LIST"),a.scan=(t,...i)=>{if(0===i.length||"string"==typeof i[0]||"function"==typeof i[0])return e.scan(t,...i);let r=i[0],a=[t];return(null==r?void 0:r.MATCH)!=null&&a.push("MATCH",r.MATCH),(null==r?void 0:r.COUNT)!=null&&a.push("COUNT",r.COUNT),e.scan(...a)};let n=new Proxy(e,{get(e,t){if(t in a)return a[t];let i=Reflect.get(e,t,e);if("function"!=typeof i)return i;if(Object.prototype.hasOwnProperty.call(e,t))return i.bind(e);let n=r.get(t);if(void 0!==n)return n;let s=i.bind(e);return r.set(t,s),s},set:(e,t,i)=>t in a?(a[t]=i,!0):(r.delete(t),Reflect.set(e,t,i)),deleteProperty:(e,t)=>!(t in a)&&(r.delete(t),Reflect.deleteProperty(e,t)),has:(e,t)=>t in a||Reflect.has(e,t)});return iu.set(e,n),n}function ih(e){e.runCommand=function(t,i){return e[t](i),e};let t=e.hset.bind(e);e.hset=function(i,r){let a=[i];for(let[e,t]of Object.entries(r))a.push(e,t);return t(...a),e};let i=e.hscan.bind(e);e.hscan=function(t,r,a){return(null==a?void 0:a.COUNT)!=null?i(t,r,"COUNT",a.COUNT):i(t,r),e};let r=e.sscan.bind(e);return e.sscan=function(t,i,a){return(null==a?void 0:a.COUNT)!=null?r(t,i,"COUNT",a.COUNT):r(t,i),e},e}let im=Symbol("bullmqClusterReconnectPromise"),iy=Symbol("bullmqClusterPatchedForBlocking"),ib=Symbol("bullmqClusterOriginalBzpopmin"),ig=Symbol("bullmqClusterWrappedBzpopmin"),iv=Symbol("bullmqClusterPatchRefCount"),ix=Symbol("bullmqClusterClosingRefCount");class iK extends tx.EventEmitter{constructor(e,t){if(super(),this.extraOptions=t,this.capabilities={canDoubleTimeout:!1,canBlockFor1Ms:!0},this.status="initializing",this.dbType="redis",this.packageVersion=tc,this.disabledBlockingClusterReconnect=!1,this.extraOptions=Object.assign({shared:!1,blocking:!0,skipVersionCheck:!1,skipWaitingForReady:!1,clusterReconnectTimeoutMs:3e4},t),$(e)){if(this._client=!function(e){return!!e&&"object"==typeof e&&(!0===e.__bullmq_iredis||"function"==typeof e.runCommand&&"function"==typeof e.defineCommand&&"function"==typeof e.pipeline&&"function"==typeof e.multi&&"function"==typeof e.duplicate&&"function"==typeof e.scanStream&&"function"==typeof e.connect&&"function"==typeof e.disconnect&&"function"==typeof e.on&&"string"==typeof e.status&&"boolean"==typeof e.isCluster)}(e)?ip(e):e,this._client.options.keyPrefix)throw Error("BullMQ: ioredis does not support ioredis prefixes, use the prefix option instead.");this._client.isCluster?this.opts=this._client.options.redisOptions:this.opts=this._client.options,this.checkBlockingOptions("BullMQ: Your redis options maxRetriesPerRequest must be null.",this.opts,!0)}else this.checkBlockingOptions("BullMQ: WARNING! Your redis options maxRetriesPerRequest must be null and will be overridden by BullMQ.",e),this.opts=Object.assign({port:6379,host:"127.0.0.1",retryStrategy:function(e){return Math.max(Math.min(Math.exp(e),2e4),1e3)}},e),this.extraOptions.blocking&&(this.opts.maxRetriesPerRequest=null);this.skipVersionCheck=(null==t?void 0:t.skipVersionCheck)||!!(this.opts&&this.opts.skipVersionCheck),this.handleClientError=e=>{this.emit("error",e)},this.handleClientClose=()=>{this.emit("close")},this.handleClientReady=()=>{this.emit("ready")},this.initializing=this.init(),this.initializing.catch(e=>this.emit("error",e))}checkBlockingOptions(e,t,i=!1){if(this.extraOptions.blocking&&t&&t.maxRetriesPerRequest)if(i)throw Error(e);else console.error(e)}static async waitUntilReady(e){let t,i,r;if("ready"!==e.status&&!("connect"===e.status&&Q(e))){if("wait"===e.status)return e.connect();if("end"===e.status)throw new F(q.CONNECTION_CLOSED_ERROR_MSG);try{await new Promise((a,n)=>{let s;r=e=>{s=e},t=()=>{a()},i=()=>{"end"!==e.status?n(s||new F(q.CONNECTION_CLOSED_ERROR_MSG)):s?n(s):a()},U(e,3),e.once("ready",t),e.on("end",i),e.once("error",r)})}finally{e.removeListener("end",i),e.removeListener("error",r),e.removeListener("ready",t),U(e,-3)}}}get client(){return this.initializing}loadCommands(e,t){let i=t||ic;for(let t in i){let r=`${i[t].name}:${e}`;this._client[r]||this._client.defineCommand(r,{numberOfKeys:i[t].keys,lua:i[t].content})}}async init(){if(!this._client)if(iK.clientFactory)this._client=iK.clientFactory(this.opts);else{let e=this.opts,{url:t}=e,i=ea(e,["url"]),r=t?new tK.default(t,i):new tK.default(i);this._client=ip(r)}if(U(this._client,3),this._client.on("error",this.handleClientError),this._client.on("close",this.handleClientClose),this._client.on("ready",this.handleClientReady),this.patchBlockingClusterClient(),this.extraOptions.skipWaitingForReady||await iK.waitUntilReady(this._client),this.loadCommands(this.packageVersion),"end"!==this._client.status){let e=await this.getRedisVersionAndType();if(this.version=e.version,this.dbType=e.databaseType,!0!==this.skipVersionCheck&&!this.closing){if(et(this.version,iK.minimumVersion,this.dbType))throw Error(`Redis version needs to be greater or equal than ${iK.minimumVersion} Current: ${this.version}`);et(this.version,iK.recommendedMinimumVersion,this.dbType)&&console.warn(`It is highly recommended to use a minimum Redis version of ${iK.recommendedMinimumVersion}
             Current: ${this.version}`)}this.capabilities={canDoubleTimeout:!et(this.version,"6.0.0",this.dbType),canBlockFor1Ms:!et(this.version,"7.0.8",this.dbType)},this.status="ready"}return this._client}patchBlockingClusterClient(){var e;let t=this._client;if(!this.extraOptions.blocking||!Q(t)||"function"!=typeof t.bzpopmin)return;let i=null!=(e=this.extraOptions.clusterReconnectTimeoutMs)?e:3e4;if(t[iv]=(t[iv]||0)+1,this.patchedBlockingClusterClient=t,t[iy])return;let r=t.bzpopmin,a=async(...e)=>{await iK.reconnectClusterIfNeeded(t,i);try{return await r.apply(t,e)}catch(e){if(iK.shouldReconnectClusterAfterError(t,e))try{await iK.reconnectCluster(t,i)}catch(e){}throw e}};t[ib]=r,t[ig]=a,t[iy]=!0,t.bzpopmin=a}disableBlockingClusterReconnect(){let e=this.patchedBlockingClusterClient;e&&!this.disabledBlockingClusterReconnect&&(e[ix]=(e[ix]||0)+1,this.disabledBlockingClusterReconnect=!0)}releaseBlockingClusterClientPatch(){let e=this.patchedBlockingClusterClient;if(!e)return;if(this.disabledBlockingClusterReconnect){let t=(e[ix]||1)-1;t>0?e[ix]=t:delete e[ix],this.disabledBlockingClusterReconnect=!1}let t=(e[iv]||1)-1;if(t>0){e[iv]=t,this.patchedBlockingClusterClient=void 0;return}e[ib]&&e.bzpopmin===e[ig]&&(e.bzpopmin=e[ib]),delete e[iv],delete e[ix],delete e[ib],delete e[ig],delete e[iy],this.patchedBlockingClusterClient=void 0}static isClusterWithEmptyNodes(e){return"function"==typeof e.nodes&&0===e.nodes().length}static isReconnectingDisabled(e){let t=e[iv]||0,i=e[ix]||0;return 0===t||i>=t||"end"===e.status||"closing"===e.status}static async reconnectClusterIfNeeded(e,t){!iK.isReconnectingDisabled(e)&&iK.isClusterWithEmptyNodes(e)&&await iK.reconnectCluster(e,t)}static shouldReconnectClusterAfterError(e,t){var i,r;if(iK.isReconnectingDisabled(e))return!1;let a=[t.message,null==(i=t.cause)?void 0:i.message,null==(r=t.lastNodeError)?void 0:r.message].join(" ");return iK.isClusterWithEmptyNodes(e)||/Command timed out|Failed to refresh slots cache/i.test(a)}static async reconnectCluster(e,t){iK.isReconnectingDisabled(e)||(e[im]||(e[im]=iK.connectClusterWithTimeout(e,t).finally(()=>{e[im]=null})),await e[im])}static async connectClusterWithTimeout(e,t){let i;e.disconnect(!1);try{await Promise.race([e.connect(),new Promise((e,r)=>{var a;null==(a=(i=setTimeout(()=>{r(new F(`BullMQ: cluster reconnect timed out after ${t}ms`))},t)).unref)||a.call(i)})])}finally{i&&clearTimeout(i)}}async disconnect(e=!0){let t=await this.client;if("end"!==t.status){let i,r;if(!e)return t.disconnect();let a=new Promise((e,a)=>{U(t,2),t.once("end",e),t.once("error",a),i=e,r=a});t.disconnect();try{await a}finally{U(t,-2),t.removeListener("end",i),t.removeListener("error",r)}}}async reconnect(){return(await this.client).connect()}async close(e=!1){var t;if(!this.closing){let i=this.status;this.status="closing",this.closing=!0,this.disableBlockingClusterReconnect();try{"ready"===i&&await this.initializing,this.extraOptions.shared||("initializing"==i||e?(this._client.disconnect(),null==(t=this.initializing)||t.catch(()=>{})):await this._client.quit(),this._client.status="end")}catch(e){if(ee(e))throw e}finally{this.releaseBlockingClusterClientPatch(),this._client.off("error",this.handleClientError),this._client.off("close",this.handleClientClose),this._client.off("ready",this.handleClientReady),U(this._client,-3),this.removeAllListeners(),this.status="closed"}}}async getRedisVersionAndType(){let e;if(this.skipVersionCheck)return{version:iK.minimumVersion,databaseType:"redis"};let t=await this._client.info(),i="redis_version:",r="maxmemory_policy:",a=t.split(/\r?\n/),n="redis";for(let t=0;t<a.length;t++){let s=a[t];if(s.includes("dragonfly_version:")||s.includes("server:Dragonfly")?(n="dragonfly",0===s.indexOf("dragonfly_version:")&&(e=s.substr(18))):s.includes("valkey_version:")||s.includes("server:Valkey")?(n="valkey",0===s.indexOf("valkey_version:")&&(e=s.substr(15))):0===s.indexOf(i)&&(e=s.substr(i.length),"redis"===n&&(n="redis")),0===s.indexOf(r)){let e=s.substr(r.length);"noeviction"!==e&&console.warn(`IMPORTANT! Eviction policy is ${e}. It should be "noeviction"`)}}if(!e){for(let t of a)if(t.includes("version:")){let i=t.split(":");if(i.length>=2){e=i[1];break}}}return{version:e||iK.minimumVersion,databaseType:n}}get redisVersion(){return this.version}get databaseType(){return this.dbType}}iK.minimumVersion="5.0.0",iK.recommendedMinimumVersion="6.2.0",N.EventEmitter;var ik=N;function iS(e){return 1===e.length&&Array.isArray(e[0])?e[0]:e}function iE(e){return(null==e?void 0:e.message)==="Disconnects client"||(null==e?void 0:e.message)==="The client is closed"||(null==e?void 0:e.message)==="Connection is closed."}class iI extends ik.EventEmitter{get status(){return this.statusOverride?this.statusOverride:this.raw.isReady?"ready":this.raw.isOpen?"connect":this.hasConnected?"end":"wait"}set status(e){if("end"===e&&(this.destroying=!0,this.raw.isOpen))try{this.raw.quit().catch(()=>{})}catch(e){}this.statusOverride=e}get options(){var e;return null!=(e=this.raw.options)?e:{}}set options(e){}constructor(e){super(),this.raw=e,this.scripts=new Map,this.hasConnected=!1,this.destroying=!1,this.isCluster=!1,e.on("ready",()=>{this.hasConnected=!0,this.connectionName?this.raw.clientSetName(this.connectionName).then(()=>this.emit("ready"),()=>this.emit("ready")):this.emit("ready")}),e.on("error",e=>{this.destroying&&iE(e)||this.emit("error",e)}),e.on("end",()=>this.emit("close")),e.on("reconnecting",()=>this.emit("reconnecting")),e.isOpen||(this.connectPromise=e.connect().then(()=>{this.connectPromise=void 0},e=>{this.connectPromise=void 0}))}async connect(){return this.connectPromise?this.connectPromise:this.raw.isOpen?void(!this.raw.isReady&&await new Promise((e,t)=>{let i=()=>{n(),e()},r=e=>{n(),t(e)},a=()=>{n(),t(Error("Connection ended before ready event"))},n=()=>{this.off("ready",i),this.off("error",r),this.off("end",a)};this.once("ready",i),this.once("error",r),this.once("end",a)})):(this.connectPromise=this.raw.connect().then(()=>{this.connectPromise=void 0},e=>{throw this.connectPromise=void 0,e}),this.connectPromise)}disconnect(e=!1){this.destroying=!0,e||(this.statusOverride="end");try{this.raw.isOpen&&this.raw.destroy()}catch(e){}this.emit("close"),e?(this.statusOverride=void 0,this.emit("reconnecting"),this.connect().catch(e=>{iE(e)||this.emit("error",e)}).finally(()=>{this.destroying=!1})):this.emit("end")}async quit(){if(this.destroying||"end"===this.statusOverride)return setImmediate(()=>{this.emit("end"),this.emit("close")}),"OK";this.destroying=!0;try{if(this.raw.isOpen)try{await this.raw.quit()}catch(e){}}catch(e){}return this.statusOverride="end",setImmediate(()=>{this.emit("end"),this.emit("close")}),"OK"}duplicate(...e){let t=new iI(this.raw.duplicate());for(let[e,i]of this.scripts)t.scripts.set(e,i),t[e]=(...i)=>t.runCommand(e,i);let i=e[0];return i&&"object"==typeof i&&i.connectionName&&(t.connectionName=i.connectionName),t}defineCommand(e,t){let i=(0,J.createHash)("sha1").update(t.lua).digest("hex");this.scripts.set(e,{sha:i,lua:t.lua,numberOfKeys:t.numberOfKeys}),this[e]=(...t)=>this.runCommand(e,t),this.raw.scriptLoad(t.lua).catch(()=>{})}async runCommand(e,t){var i,r;let a=this.scripts.get(e);if(!a)throw Error(`BullMQ: unknown command "${e}"`);let n=iS(t),{sha:s,lua:o,numberOfKeys:l}=a,d=n.slice(0,l).map(String),c=n.slice(l).map(e=>Buffer.isBuffer(e)?e:null==e?"":String(e));try{return await this.raw.evalSha(s,{keys:d,arguments:c})}catch(e){if(this.destroying&&iE(e))return null;if(iE(e))throw new F(e.message,e);if(null==(r=null==(i=null==e?void 0:e.message)?void 0:i.includes)?void 0:r.call(i,"NOSCRIPT"))try{return await this.raw.eval(o,{keys:d,arguments:c})}catch(e){if(this.destroying&&iE(e))return null;if(iE(e))throw new F(e.message,e);throw e}throw e}}multi(){return new iw(this.raw.multi(),this.scripts)}pipeline(){return this.multi()}async hgetall(e){let t=await this.raw.hGetAll(e);return null!=t?t:{}}async hget(e,t){var i;return null!=(i=await this.raw.hGet(e,t))?i:null}async hmget(e,...t){return(await this.raw.hmGet(e,t)).map(e=>null!=e?e:null)}async hset(e,t,...i){if("object"==typeof t)return await this.raw.hSet(e,t);let r={};r[t]=String(i[0]);for(let e=1;e<i.length;e+=2)r[String(i[e])]=String(i[e+1]);return await this.raw.hSet(e,r)}async hdel(e,...t){return await this.raw.hDel(e,t)}async hexists(e,t){return+!!await this.raw.hExists(e,t)}async get(e){var t;return null!=(t=await this.raw.get(e))?t:null}async set(e,t,i){let r={};return(null==i?void 0:i.PX)!=null?r.PX=i.PX:(null==i?void 0:i.EX)!=null&&(r.EX=i.EX),await this.raw.set(e,String(t),r)}async del(...e){return 0===e.length?0:await this.raw.del(e)}async zrange(e,t,i,r){if(null==r?void 0:r.WITHSCORES){let r=await this.raw.zRangeWithScores(e,t,i),a=[];for(let e of r)a.push(e.value,String(e.score));return a}return await this.raw.zRange(e,t,i)}async zrevrange(e,t,i,r){if(null==r?void 0:r.WITHSCORES){let r=await this.raw.zRangeWithScores(e,t,i,{REV:!0}),a=[];for(let e of r)a.push(e.value,String(e.score));return a}return await this.raw.zRange(e,t,i,{REV:!0})}async zcard(e){return await this.raw.zCard(e)}async zscore(e,t){let i=await this.raw.zScore(e,t);return null!=i?String(i):null}async lrange(e,t,i){return await this.raw.lRange(e,t,i)}async llen(e){return await this.raw.lLen(e)}async ltrim(e,t,i){return await this.raw.lTrim(e,t,i),"OK"}async lpos(e,t){var i;return null!=(i=await this.raw.lPos(e,t))?i:null}async smembers(e){return await this.raw.sMembers(e)}async xadd(e,t,i,r){let a={};(null==r?void 0:r.MAXLEN)!=null&&(a.TRIM={strategy:"MAXLEN",threshold:r.MAXLEN,strategyModifier:!1===r.approximate?void 0:"~"});let n={};for(let[e,t]of Object.entries(i))n[e]=String(t);return await this.raw.xAdd(e,t,n,a)}async xread(e,t){let i,r={};(null==t?void 0:t.BLOCK)!=null&&(r.BLOCK=t.BLOCK),(null==t?void 0:t.COUNT)!=null&&(r.COUNT=t.COUNT);let a=e.map(e=>({key:e.key,id:e.id}));try{i=await this.raw.xRead(a,r)}catch(e){if(this.destroying&&iE(e))return null;if(iE(e))throw new F(e.message,e);throw e}return i?i.map(e=>[e.name,e.messages.map(e=>[e.id,Object.entries(e.message).flat()])]):null}async xtrim(e,t,i,r){let a=(null==r?void 0:r.approximate)===!1?void 0:"~";return await this.raw.xTrim(e,t,i,{strategyModifier:a})}async bzpopmin(e,t){let i;try{i=await this.raw.bzPopMin(e,t)}catch(e){if(this.destroying&&iE(e))return null;if(iE(e))throw new F(e.message,e);throw e}return i?[i.key,i.value,String(i.score)]:null}async info(){return await this.raw.info()}async clientSetName(e){return await this.raw.clientSetName(e)}async clientList(){return await this.raw.sendCommand(["CLIENT","LIST"])}async scan(e,t){let i={};(null==t?void 0:t.MATCH)&&(i.MATCH=t.MATCH),(null==t?void 0:t.COUNT)&&(i.COUNT=t.COUNT);let r=await this.raw.scan(String(e),i);return[String(r.cursor),r.keys]}scanStream(e){let t=this.raw,i=this.connectPromise,r={};e.match&&(r.MATCH=e.match),e.count&&(r.COUNT=e.count);let a=new td.Readable({objectMode:!0,async read(){var e,n,s,o;try{i&&await i;try{for(var l,d=!0,c=function(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,i=e[Symbol.asyncIterator];return i?i.call(e):(e=function(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],r=0;if(i)return i.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(i){t[i]=e[i]&&function(t){return new Promise(function(r,a){var n,s,o,l;n=r,s=a,o=(t=e[i](t)).done,l=t.value,Promise.resolve(l).then(function(e){n({value:e,done:o})},s)})}}}(t.scanIterator(r));!(e=(l=await c.next()).done);d=!0)if(o=l.value,d=!1,!a.push(Array.isArray(o)?o:[o]))return}catch(e){n={error:e}}finally{try{!d&&!e&&(s=c.return)&&await s.call(c)}finally{if(n)throw n.error}}a.push(null)}catch(e){a.destroy(e)}}});return a}async keys(e){return await this.raw.keys(e)}async exists(...e){return 0===e.length?0:await this.raw.exists(e)}async zadd(e,...t){let i=[];for(let e=0;e<t.length;e+=2)i.push({score:Number(t[e]),value:String(t[e+1])});return await this.raw.zAdd(e,i)}async zrem(e,...t){return await this.raw.zRem(e,t)}async xlen(e){return await this.raw.xLen(e)}async xrevrange(e,t,i,...r){let a={};return"COUNT"===r[0]&&(a.COUNT=Number(r[1])),(await this.raw.xRevRange(e,t,i,a)).map(e=>[e.id,Object.entries(e.message).flat()])}async sadd(e,...t){return await this.raw.sAdd(e,t.map(String))}async scard(e){return await this.raw.sCard(e)}async lpush(e,...t){return await this.raw.lPush(e,t)}async rpop(e){return await this.raw.rPop(e)}async incr(e){return await this.raw.incr(e)}async incrby(e,t){return await this.raw.incrBy(e,t)}async flushall(){return await this.raw.flushAll()}}class iw{constructor(e,t){this.raw=e,this.scripts=t,this.transformers=[]}addIdentityTransformer(){this.transformers.push(e=>e)}hgetall(e){return this.raw.hGetAll(e),this.addIdentityTransformer(),this}hset(e,t){return this.raw.hSet(e,t),this.addIdentityTransformer(),this}hscan(e,t,i){let r={};return(null==i?void 0:i.COUNT)!=null&&(r.COUNT=i.COUNT),this.raw.hScan(e,String(t),r),this.transformers.push(e=>{if(!e)return["0",[]];let t=[];for(let i of e.entries||[])t.push(i.field,i.value);return[String(e.cursor),t]}),this}smembers(e){return this.raw.sMembers(e),this.addIdentityTransformer(),this}sscan(e,t,i){let r={};return(null==i?void 0:i.COUNT)!=null&&(r.COUNT=i.COUNT),this.raw.sScan(e,String(t),r),this.transformers.push(e=>e?[String(e.cursor),e.members||[]]:["0",[]]),this}zrange(e,t,i){return this.raw.zRange(e,t,i),this.addIdentityTransformer(),this}lrange(e,t,i){return this.raw.lRange(e,t,i),this.addIdentityTransformer(),this}llen(e){return this.raw.lLen(e),this.addIdentityTransformer(),this}del(...e){return e.length>0&&(this.raw.del(e),this.addIdentityTransformer()),this}runCommand(e,t){let i=this.scripts.get(e);if(!i)throw Error(`BullMQ: unknown command "${e}" in transaction`);let r=iS(t),{sha:a,lua:n,numberOfKeys:s}=i,o=r.slice(0,s).map(String),l=r.slice(s).map(e=>Buffer.isBuffer(e)?e:null==e?"":String(e));return this.raw.evalSha(a,{keys:o,arguments:l}),this.addIdentityTransformer(),this}async exec(){let e=await this.raw.exec();return e?e.map((e,t)=>{if(e instanceof Error)return[e,null];let i=this.transformers[t];return[null,i?i(e):e]}):null}}var ij=N;function iA(e){return 1===e.length&&Array.isArray(e[0])?e[0]:e}function iT(e){return null==e?[]:Array.isArray(e)?e.map(String):e instanceof Set?Array.from(e,e=>String(e)):[]}class iC extends ij.EventEmitter{get status(){return this.statusOverride?this.statusOverride:this.closed?"end":this.raw.connected?"ready":this.hasConnected?"end":"wait"}set status(e){"end"===e&&(this.closing=!0,this.closed=!0),this.statusOverride=e}get options(){return{}}set options(e){}constructor(e,t){super(),this.raw=e,this.scripts=new Map,this.loadedScriptShas=new Set,this.hasConnected=!1,this.closed=!1,this.closing=!1,this.reconnecting=!1,this.reconnectTimer=null,this.reconnectAttempts=0,this.maxReconnectDelay=2e4,this.isCluster=!1,this._setupCallbacks(),(null==t?void 0:t.lazyConnect)||this.connect().catch(()=>{})}_setupCallbacks(){this.raw.onconnect=()=>{this.hasConnected=!0,this.closed=!1,this.closing=!1,this.reconnecting=!1,this.reconnectAttempts=0,this.statusOverride=void 0,this.loadedScriptShas.clear(),this.connectionName?this.clientSetName(this.connectionName).then(()=>this.emit("ready"),()=>this.emit("ready")):this.emit("ready")},this.raw.onclose=e=>{if(this.closing){this.closed=!0,this.emit("close"),this.emit("end");return}this.closed=!0,this.emit("close"),e&&this.emit("error",e),this._scheduleReconnect()}}_scheduleReconnect(){if(this.closing||this.reconnecting)return;this.reconnecting=!0,this.reconnectAttempts++;let e=Math.max(Math.min(100*Math.exp(this.reconnectAttempts),this.maxReconnectDelay),1e3);this.reconnectTimer=setTimeout(async()=>{if(this.reconnectTimer=null,this.closing){this.reconnecting=!1;return}try{let e=new this.raw.constructor(this.raw.url);this.raw=e,this.closed=!1,this.connecting=void 0,this._setupCallbacks(),await e.connect()}catch(e){this.reconnecting=!1,this.closing||this._scheduleReconnect()}},e)}async connect(){if(this.raw.connected){this.hasConnected=!0,this.closed=!1,this.closing=!1,this.statusOverride=void 0;return}if(!this.connecting){if(this.closed=!1,this.closing=!1,this.statusOverride=void 0,this.hasConnected&&!this.raw.connected){let e=this.raw.constructor;this.raw=new e(this.raw.url),this._setupCallbacks()}this.connecting=this.raw.connect().then(()=>{this.hasConnected=!0,this.closed=!1,this.closing=!1,this.statusOverride=void 0}).finally(()=>{this.connecting=void 0})}await this.connecting}_closeRaw(){this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.reconnecting=!1;let e=this.raw;e.onconnect=()=>{},e.onclose=()=>{},e.onerror=()=>{},e.connected&&setImmediate(()=>{try{e.connected&&e.close()}catch(e){}})}disconnect(e){if(!this.closed||e)if(e){this.closed=!0,this.statusOverride=void 0;let e=this.raw;e.onclose=()=>{},e.connected&&setImmediate(()=>{try{e.connected&&e.close()}catch(e){}}),this.emit("close"),this._scheduleReconnect()}else this.closing=!0,this.closed=!0,this.statusOverride="end",this._closeRaw(),this.emit("close"),this.emit("end")}async quit(){return this.closed?setImmediate(()=>{this.emit("end"),this.emit("close")}):(this.closing=!0,this.closed=!0,this.statusOverride="end",this._closeRaw(),setImmediate(()=>{this.emit("end"),this.emit("close")})),"OK"}duplicate(...e){let t=new iC(new this.raw.constructor(this.raw.url));for(let[e,i]of this.scripts)t.scripts.set(e,i),t[e]=(...i)=>t.runCommand(e,i);let i=e[0];return i&&"object"==typeof i&&i.connectionName&&(t.connectionName=i.connectionName),t}defineCommand(e,t){let i=(0,J.createHash)("sha1").update(t.lua).digest("hex");this.scripts.set(e,{sha:i,lua:t.lua,numberOfKeys:t.numberOfKeys}),this[e]=(...t)=>this.runCommand(e,t)}async runCommand(e,t){let i=this.scripts.get(e);if(!i)throw Error(`BullMQ: unknown command "${e}"`);let r=iA(t),{sha:a,lua:n,numberOfKeys:s}=i,o=r.slice(0,s).map(String),l=r.slice(s).map(e=>Buffer.isBuffer(e)?e:null==e?"":String(e)),d=[a,String(o.length),...o,...l];return(async()=>{var e,t;try{let e=await this.sendCommand("EVALSHA",d);return this.loadedScriptShas.add(a),e}catch(i){if(null==(t=null==(e=null==i?void 0:i.message)?void 0:e.includes)?void 0:t.call(e,"NOSCRIPT")){let e=[n,String(o.length),...o,...l],t=await this.sendCommand("EVAL",e);return this.loadedScriptShas.add(a),t}throw i}})()}async ensureScriptsLoaded(e){let t=[],i=new Set;for(let r of e)this.loadedScriptShas.has(r.sha)||i.has(r.sha)||(i.add(r.sha),t.push(r));0!==t.length&&await Promise.all(t.map(async e=>{await this.sendCommand("SCRIPT",["LOAD",e.lua]),this.loadedScriptShas.add(e.sha)}))}sendCommand(e,t){return this.closing||this.closed?Promise.reject(new F("Connection is closed")):this.raw.send(e,t).catch(e=>{var t;let i;if("Socket closed unexpectedly"===(i=null!=(t=null==e?void 0:e.message)?t:"")||i.startsWith("Connection closed")||"Connection is closed."===i||"Connection has failed"===i)return Promise.reject(new F(this.closing||this.closed?"Connection is closed":e.message,e));throw e})}multi(){return new iD(this.raw,this.scripts,!0,this)}pipeline(){return new iD(this.raw,this.scripts,!1,this)}async hgetall(e){let t=await this.sendCommand("HGETALL",[e]);if(!t||Array.isArray(t)&&0===t.length)return{};if(Array.isArray(t)){let e={};for(let i=0;i<t.length;i+=2)e[String(t[i])]=String(t[i+1]);return e}return t}async hget(e,t){let i=await this.sendCommand("HGET",[e,t]);return null!=i?i:null}async hmget(e,...t){return(await this.sendCommand("HMGET",[e,...t])||[]).map(e=>null!=e?e:null)}async hset(e,t,...i){let r;if("object"==typeof t)for(let[i,a]of(r=[e],Object.entries(t)))r.push(i,String(a));else{r=[e,t,String(i[0])];for(let e=1;e<i.length;e+=2)r.push(String(i[e]),String(i[e+1]))}return await this.sendCommand("HSET",r)}async hdel(e,...t){return await this.sendCommand("HDEL",[e,...t])}async hexists(e,t){let i=await this.sendCommand("HEXISTS",[e,t]);return+(!0===i||1===i)}async get(e){let t=await this.sendCommand("GET",[e]);return null!=t?t:null}async set(e,t,i){let r=[e,String(t)];return(null==i?void 0:i.PX)!=null?r.push("PX",String(i.PX)):(null==i?void 0:i.EX)!=null&&r.push("EX",String(i.EX)),await this.sendCommand("SET",r)}async del(...e){return 0===e.length?0:await this.sendCommand("DEL",e)}async zrange(e,t,i,r){let a=[e,String(t),String(i)];(null==r?void 0:r.WITHSCORES)&&a.push("WITHSCORES");let n=await this.sendCommand("ZRANGE",a);return n?(null==r?void 0:r.WITHSCORES)&&n.length>0&&Array.isArray(n[0])?n.flatMap(e=>[String(e[0]),String(e[1])]):n.map(String):[]}async zrevrange(e,t,i,r){let a=[e,String(t),String(i)];(null==r?void 0:r.WITHSCORES)&&a.push("WITHSCORES"),a.push("REV");let n=await this.sendCommand("ZRANGE",a);return n?(null==r?void 0:r.WITHSCORES)&&n.length>0&&Array.isArray(n[0])?n.flatMap(e=>[String(e[0]),String(e[1])]):n.map(String):[]}async zcard(e){return await this.sendCommand("ZCARD",[e])}async zscore(e,t){let i=await this.sendCommand("ZSCORE",[e,t]);return null!=i?String(i):null}async lrange(e,t,i){return(await this.sendCommand("LRANGE",[e,String(t),String(i)])||[]).map(String)}async llen(e){return await this.sendCommand("LLEN",[e])}async ltrim(e,t,i){return await this.sendCommand("LTRIM",[e,String(t),String(i)]),"OK"}async lpos(e,t){let i=await this.sendCommand("LPOS",[e,t]);return null!=i?i:null}async smembers(e){return iT(await this.sendCommand("SMEMBERS",[e]))}async xadd(e,t,i,r){let a=[e];for(let[e,n]of((null==r?void 0:r.MAXLEN)!=null&&(a.push("MAXLEN"),!1!==r.approximate&&a.push("~"),a.push(String(r.MAXLEN))),a.push(t),Object.entries(i)))a.push(e,String(n));return await this.raw.send("XADD",a)}async xread(e,t){let i,r=[];for(let i of((null==t?void 0:t.COUNT)!=null&&r.push("COUNT",String(t.COUNT)),(null==t?void 0:t.BLOCK)!=null&&r.push("BLOCK",String(t.BLOCK)),r.push("STREAMS"),e))r.push(i.key);for(let t of e)r.push(t.id);try{i=await this.sendCommand("XREAD",r)}catch(e){if(this.closing)return null;throw e}return i?Array.isArray(i)?i.map(e=>[String(e[0]),(e[1]||[]).map(e=>[String(e[0]),(e[1]||[]).map(String)])]):Object.entries(i).map(([e,t])=>[e,(t||[]).map(e=>[String(e[0]),(e[1]||[]).map(String)])]):null}async xtrim(e,t,i,r){let a=[e,t];return(null==r?void 0:r.approximate)!==!1&&a.push("~"),a.push(String(i)),await this.sendCommand("XTRIM",a)}async bzpopmin(e,t){let i;try{i=await this.sendCommand("BZPOPMIN",[e,String(t)])}catch(e){if(this.closing)return null;throw e}return i&&0!==i.length?[String(i[0]),String(i[1]),String(i[2])]:null}async info(){return await this.sendCommand("INFO",[])}async clientSetName(e){return await this.sendCommand("CLIENT",["SETNAME",e])}async clientList(){return await this.sendCommand("CLIENT",["LIST"])}async scan(e,t){let i=[String(e)];(null==t?void 0:t.MATCH)&&i.push("MATCH",t.MATCH),(null==t?void 0:t.COUNT)&&i.push("COUNT",String(t.COUNT));let r=await this.sendCommand("SCAN",i),a=r[1];return[String(r[0]),Array.isArray(a)?a.map(String):[]]}scanStream(e){let t=this,i="0",r=!1,a=new td.Readable({objectMode:!0,async read(){if(r&&"0"===i)return void a.push(null);r=!0;try{for(;;){let[r,n]=await t.scan(i,{MATCH:e.match,COUNT:e.count});if(i=r,n.length>0){a.push(n),"0"===i&&a.push(null);return}if("0"===i)return void a.push(null)}}catch(e){a.destroy(e)}}});return a}async keys(e){return(await this.sendCommand("KEYS",[e])||[]).map(String)}async exists(...e){if(0===e.length)return 0;let t=await this.sendCommand("EXISTS",e);return"boolean"==typeof t?+!!t:t}async zadd(e,...t){let i=[e];for(let e=0;e<t.length;e+=2)i.push(String(t[e]),String(t[e+1]));return await this.sendCommand("ZADD",i)}async zrem(e,...t){return await this.sendCommand("ZREM",[e,...t])}async xlen(e){return await this.sendCommand("XLEN",[e])}async xrevrange(e,t,i,...r){let a=[e,t,i];"COUNT"===r[0]&&a.push("COUNT",String(r[1]));let n=await this.sendCommand("XREVRANGE",a);return n?n.map(e=>[String(e[0]),(e[1]||[]).map(String)]):[]}async sadd(e,...t){return await this.sendCommand("SADD",[e,...t.map(String)])}async scard(e){return await this.sendCommand("SCARD",[e])}async lpush(e,...t){return await this.sendCommand("LPUSH",[e,...t])}async rpop(e){let t=await this.sendCommand("RPOP",[e]);return null!=t?t:null}async incr(e){return await this.sendCommand("INCR",[e])}async incrby(e,t){return await this.sendCommand("INCRBY",[e,String(t)])}async flushall(){return await this.sendCommand("FLUSHALL",[])}}class iD{constructor(e,t,i,r){this.raw=e,this.scripts=t,this.transactional=i,this.adapter=r,this.commands=[],this.transformers=[],this.scriptsToLoad=[]}addCommand(e,t,i){this.commands.push({cmd:e,args:t}),this.transformers.push(i||(e=>e))}hgetall(e){return this.addCommand("HGETALL",[e],e=>{if(!e||Array.isArray(e)&&0===e.length)return{};if(Array.isArray(e)){let t={};for(let i=0;i<e.length;i+=2)t[String(e[i])]=String(e[i+1]);return t}return e}),this}hset(e,t){let i=[e];for(let[e,r]of Object.entries(t))i.push(e,String(r));return this.addCommand("HSET",i),this}hscan(e,t,i){let r=[e,String(t)];return(null==i?void 0:i.COUNT)!=null&&r.push("COUNT",String(i.COUNT)),this.addCommand("HSCAN",r,e=>e&&Array.isArray(e)?[String(e[0]),iT(e[1])]:["0",[]]),this}smembers(e){return this.addCommand("SMEMBERS",[e],e=>iT(e)),this}sscan(e,t,i){let r=[e,String(t)];return(null==i?void 0:i.COUNT)!=null&&r.push("COUNT",String(i.COUNT)),this.addCommand("SSCAN",r,e=>e&&Array.isArray(e)?[String(e[0]),iT(e[1])]:["0",[]]),this}zrange(e,t,i){return this.addCommand("ZRANGE",[e,String(t),String(i)],e=>Array.isArray(e)?e.map(String):[]),this}lrange(e,t,i){return this.addCommand("LRANGE",[e,String(t),String(i)],e=>Array.isArray(e)?e.map(String):[]),this}llen(e){return this.addCommand("LLEN",[e]),this}del(...e){return e.length>0&&this.addCommand("DEL",e),this}runCommand(e,t){let i=this.scripts.get(e);if(!i)throw Error(`BullMQ: unknown command "${e}" in transaction`);let r=iA(t),{sha:a,numberOfKeys:n}=i,s=r.slice(0,n).map(String),o=r.slice(n).map(e=>Buffer.isBuffer(e)?e:null==e?"":String(e));return this.scriptsToLoad.push(i),this.addCommand("EVALSHA",[a,String(s.length),...s,...o]),this}async exec(){if(0===this.commands.length)return[];if(this.scriptsToLoad.length>0&&await this.adapter.ensureScriptsLoaded(this.scriptsToLoad),!this.transactional)return(await Promise.allSettled(this.commands.map(({cmd:e,args:t})=>this.adapter.sendCommand(e,t)))).map((e,t)=>{if("rejected"===e.status)return[e.reason,null];let i=this.transformers[t];return[null,i?i(e.value):e.value]});let e=e=>{};try{for(let{cmd:t,args:i}of(this.raw.send("MULTI",[]).catch(e),this.commands))this.raw.send(t,i).catch(e);let t=await this.raw.send("EXEC",[]);if(!t)return null;return t.map((e,t)=>{if(e instanceof Error)return[e,null];let i=this.transformers[t],r=i?i(e):e;return[null,r]})}catch(e){try{await this.raw.send("DISCARD",[])}catch(e){}throw e}}}var iO=e.i(26938),iR=N;class iM extends iR.EventEmitter{constructor(e,t={connection:{}},i=iK,r=!1){if(super(),this.name=e,this.opts=t,this.closed=!1,this.hasBlockingConnection=!1,this.hasBlockingConnection=r,this.opts=Object.assign({prefix:"bull"},t),!e)throw Error("Queue name must be provided");if(e.includes(":"))throw Error("Queue name cannot contain :");this.connection=new i(t.connection,{shared:$(t.connection),blocking:r,skipVersionCheck:t.skipVersionCheck,skipWaitingForReady:t.skipWaitingForReady}),this.connection.on("error",e=>this.emit("error",e)),this.connection.on("close",()=>{this.closing||this.emit("ioredis:close")});const a=new tv(t.prefix);this.qualifiedName=a.getQueueQualifiedName(e),this.keys=a.getKeys(e),this.toKey=t=>a.toKey(e,t),this.createScripts()}get client(){return this.connection.client}createScripts(){this.scripts=tf(this)}get redisVersion(){return this.connection.redisVersion}get databaseType(){return this.connection.databaseType}get Job(){return tb}emit(e,...t){try{return super.emit(e,...t)}catch(e){try{return super.emit("error",e)}catch(e){return console.error(e),!1}}}waitUntilReady(){return this.client}base64Name(){return Buffer.from(this.name).toString("base64")}clientName(e=""){let t=this.base64Name();return`${this.opts.prefix}:${t}${e}`}async close(){this.closing||(this.closing=this.connection.close()),await this.closing,this.closed=!0}disconnect(){return this.connection.disconnect()}async checkConnectionError(e,t=5e3){try{return await e()}catch(e){if(ee(e)&&this.emit("error",e),this.closing||!t)return;await new Promise(e=>{let i;i=setTimeout(()=>{clearTimeout(i),e()},t)})}}trace(e,t,i,r,a){return er(this.opts.telemetry,e,this.name,t,i,r,a)}}class i_ extends iM{constructor(e,t,i){super(e,t,i),this.repeatStrategy=t.settings&&t.settings.repeatStrategy||iP}async upsertJobScheduler(e,t,i,r,a,{override:n,producerId:s}){let o,{every:l,limit:d,pattern:c,offset:u}=t;if(c&&l)throw Error("Both .pattern and .every options are defined for this repeatable job");if(!c&&!l)throw Error("Either .pattern or .every options must be defined for this repeatable job");if(t.immediately&&t.startDate)throw Error("Both .immediately and .startDate options are defined for this repeatable job");t.immediately&&t.every&&console.warn("Using option immediately with every does not affect the job's schedule. Job will run immediately anyway.");let p=t.count?t.count+1:1;if(void 0!==t.limit&&p>t.limit)return;let h=Date.now(),{endDate:m}=t;if(m&&h>new Date(m).getTime())return;let f=a.prevMillis||0;h=f<h?h:f;let{immediately:y}=t,b=ea(t,["immediately"]),g=l&&u?u:null;if(c&&(o=await this.repeatStrategy(h,t,i))<h&&(o=h),o||l)return this.trace(I.PRODUCER,"add",`${this.name}.${i}`,async(u,f)=>{var y,v;let x=a.telemetry;if(f){let e=null==(y=a.telemetry)?void 0:y.omitContext,t=(null==(v=a.telemetry)?void 0:v.metadata)||!e&&f;(t||e)&&(x={metadata:t,omitContext:e})}let K=this.getNextJobOpts(o,e,Object.assign(Object.assign({},a),{repeat:b,telemetry:x}),p,g);if(n){o<h&&(o=h);let[n,p]=await this.scripts.addJobScheduler(e,o,JSON.stringify(void 0===r?{}:r),tb.optsAsJSON(a),{name:i,startDate:t.startDate?new Date(t.startDate).getTime():void 0,endDate:m?new Date(m).getTime():void 0,tz:t.tz,pattern:c,every:l,limit:d,offset:g},tb.optsAsJSON(K),s),f="string"==typeof p?parseInt(p,10):p,y=new this.Job(this,i,r,Object.assign(Object.assign({},K),{delay:f}),n);return y.id=n,null==u||u.setAttributes({[S.JobSchedulerId]:e,[S.JobId]:y.id}),y}{let t=await this.scripts.updateJobSchedulerNextMillis(e,o,JSON.stringify(void 0===r?{}:r),tb.optsAsJSON(K),s);if(t){let a=new this.Job(this,i,r,K,t);return a.id=t,null==u||u.setAttributes({[S.JobSchedulerId]:e,[S.JobId]:a.id}),a}}})}getNextJobOpts(e,t,i,r,a){var n,s;let o=this.getSchedulerNextJobId({jobSchedulerId:t,nextMillis:e}),l=Date.now(),d=e+a-l,c=Object.assign(Object.assign({},i),{jobId:o,delay:d<0?0:d,timestamp:l,prevMillis:e,repeatJobKey:t});return c.repeat=Object.assign(Object.assign({},i.repeat),{offset:a,count:r,startDate:(null==(n=i.repeat)?void 0:n.startDate)?new Date(i.repeat.startDate).getTime():void 0,endDate:(null==(s=i.repeat)?void 0:s.endDate)?new Date(i.repeat.endDate).getTime():void 0}),c}async removeJobScheduler(e){return this.scripts.removeJobScheduler(e)}async getSchedulerData(e,t,i){let r=await e.hgetall(this.toKey("repeat:"+t));return this.transformSchedulerData(t,r,i)}transformSchedulerData(e,t,i){if(t&&Object.keys(t).length>0){let r={key:e,name:t.name,next:i};return t.ic&&(r.iterationCount=parseInt(t.ic)),t.limit&&(r.limit=parseInt(t.limit)),t.startDate&&(r.startDate=parseInt(t.startDate)),t.endDate&&(r.endDate=parseInt(t.endDate)),t.tz&&(r.tz=t.tz),t.pattern&&(r.pattern=t.pattern),t.every&&(r.every=parseInt(t.every)),t.offset&&(r.offset=parseInt(t.offset)),(t.data||t.opts)&&(r.template=this.getTemplateFromJSON(t.data,t.opts)),r}if(e.includes(":"))return this.keyToData(e,i)}keyToData(e,t){let i=e.split(":"),r=i.slice(4).join(":")||null;return{key:e,name:i[0],id:i[1]||null,endDate:parseInt(i[2])||null,tz:i[3]||null,pattern:r,next:t}}async isJobScheduler(e){let t=await this.client;return 1===await t.hexists(`${this.keys.repeat}:${e}`,"ic")}async getScheduler(e){let[t,i]=await this.scripts.getJobScheduler(e);return this.transformSchedulerData(e,t?B(t):null,i?parseInt(i):null)}getTemplateFromJSON(e,t){let i={};return e&&(i.data=JSON.parse(e)),t&&(i.opts=tb.optsFromJSON(t)),i}async getJobSchedulers(e=0,t=-1,i=!1){let r=await this.client,a=this.keys.repeat,n=i?await r.zrange(a,e,t,{WITHSCORES:!0}):await r.zrevrange(a,e,t,{WITHSCORES:!0}),s=[];for(let e=0;e<n.length;e+=2)s.push(this.getSchedulerData(r,n[e],parseInt(n[e+1])));return Promise.all(s)}async getSchedulersCount(){let e=this.keys.repeat;return(await this.client).zcard(e)}getSchedulerNextJobId({nextMillis:e,jobSchedulerId:t}){return`repeat:${t}:${e}`}}let iP=(e,t)=>{let{pattern:i}=t,r=new Date(e),a=t.startDate&&new Date(t.startDate),n=(0,iO.parseExpression)(i,Object.assign(Object.assign({},t),{currentDate:a>r?a:r}));try{if(t.immediately)return new Date().getTime();return n.next().getTime()}catch(e){}};function iN(e){return String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n")}class iL extends iM{getJob(e){return this.Job.fromId(this,e)}commandByType(e,t,i){return e.map(e=>{e="waiting"===e?"wait":e;let r=this.toKey(e);switch(e){case"completed":case"failed":case"delayed":case"prioritized":case"repeat":case"waiting-children":return i(r,t?"zcard":"zrange");case"active":case"wait":case"paused":return i(r,t?"llen":"lrange")}})}sanitizeJobTypes(e){let t="string"==typeof e?[e]:e;if(Array.isArray(t)&&t.length>0){let e=[...t];return -1!==e.indexOf("waiting")&&e.push("paused"),[...new Set(e)]}return["active","completed","delayed","failed","paused","prioritized","waiting","waiting-children"]}async count(){return await this.getJobCountByTypes("waiting","paused","delayed","prioritized","waiting-children")}async getRateLimitTtl(e){return this.scripts.getRateLimitTtl(e)}async getDebounceJobId(e){return(await this.client).get(`${this.keys.de}:${e}`)}async getDeduplicationJobId(e){return(await this.client).get(`${this.keys.de}:${e}`)}async getGlobalConcurrency(){let e=await this.client,t=await e.hget(this.keys.meta,"concurrency");return t?Number(t):null}async getGlobalRateLimit(){let e=await this.client,[t,i]=await e.hmget(this.keys.meta,"max","duration");return t&&i?{max:Number(t),duration:Number(i)}:null}async getJobCountByTypes(...e){return Object.values(await this.getJobCounts(...e)).reduce((e,t)=>e+t,0)}async getJobCounts(...e){let t=this.sanitizeJobTypes(e),i=await this.scripts.getCounts(t),r={};return i.forEach((e,i)=>{r[t[i]]=e||0}),r}async recordJobCountsMetric(...e){var t;let i=await this.getJobCounts(...e),r=null==(t=this.opts.telemetry)?void 0:t.meter;if(r&&"function"==typeof r.createGauge){let e=r.createGauge(E.QueueJobsCount,{description:"Number of jobs in the queue by state",unit:"{jobs}"});for(let[t,r]of Object.entries(i))e.record(r,{[S.QueueName]:this.name,[S.QueueJobsState]:t})}return i}getJobState(e){return this.scripts.getState(e)}async getMeta(){let e=await this.client,t=await e.hgetall(this.keys.meta),{concurrency:i,max:r,duration:a,paused:n,"opts.maxLenEvents":s}=t,o=ea(t,["concurrency","max","duration","paused","opts.maxLenEvents"]);return i&&(o.concurrency=Number(i)),s&&(o.maxLenEvents=Number(s)),r&&(o.max=Number(r)),a&&(o.duration=Number(a)),o.paused="1"===n,o}getCompletedCount(){return this.getJobCountByTypes("completed")}getFailedCount(){return this.getJobCountByTypes("failed")}getDelayedCount(){return this.getJobCountByTypes("delayed")}getActiveCount(){return this.getJobCountByTypes("active")}getPrioritizedCount(){return this.getJobCountByTypes("prioritized")}async getCountsPerPriority(e){let t=[...new Set(e)],i=await this.scripts.getCountsPerPriority(t),r={};return i.forEach((e,i)=>{r[`${t[i]}`]=e||0}),r}getWaitingCount(){return this.getJobCountByTypes("waiting")}getWaitingChildrenCount(){return this.getJobCountByTypes("waiting-children")}getWaiting(e=0,t=-1){return this.getJobs(["waiting"],e,t,!0)}getWaitingChildren(e=0,t=-1){return this.getJobs(["waiting-children"],e,t,!0)}getActive(e=0,t=-1){return this.getJobs(["active"],e,t,!0)}getDelayed(e=0,t=-1){return this.getJobs(["delayed"],e,t,!0)}getPrioritized(e=0,t=-1){return this.getJobs(["prioritized"],e,t,!0)}getCompleted(e=0,t=-1){return this.getJobs(["completed"],e,t,!1)}getFailed(e=0,t=-1){return this.getJobs(["failed"],e,t,!1)}async getDependencies(e,t,i,r){let a=this.toKey("processed"==t?`${e}:processed`:`${e}:dependencies`),{items:n,total:s,jobs:o}=await this.scripts.paginate(a,{start:i,end:r,fetchJobs:!0});return{items:n,jobs:o,total:s}}async getRanges(e,t=0,i=1,r=!1){let a=[];this.commandByType(e,!1,(e,t)=>{switch(t){case"lrange":a.push("lrange");break;case"zrange":a.push("zrange")}});let n=await this.scripts.getRanges(e,t,i,r),s=[];return n.forEach((e,t)=>{let i=e||[];s=r&&"lrange"===a[t]?s.concat(i.reverse()):s.concat(i)}),[...new Set(s)]}async getJobs(e,t=0,i=-1,r=!1){let a=this.sanitizeJobTypes(e);return Promise.all((await this.getRanges(a,t,i,r)).map(e=>this.Job.fromId(this,e)))}async getJobLogs(e,t=0,i=-1,r=!0){let a=(await this.client).multi(),n=this.toKey(e+":logs");r?a.lrange(n,t,i):a.lrange(n,-(i+1),-(t+1)),a.llen(n);let s=await a.exec();return r||s[0][1].reverse(),{logs:s[0][1],count:s[1][1]}}async baseGetClients(e){let t=await this.client;try{if(t.isCluster&&"function"==typeof t.nodes){let i=t.nodes(),r=[];for(let t=0;t<i.length;t++){let a=i[t],n="function"==typeof a.clientList?await a.clientList():await a.client("LIST"),s=this.parseClientList(n,e);r.push(s)}return r.reduce((e,t)=>e.length>t.length?e:t,[])}{let i=await t.clientList();return this.parseClientList(i,e)}}catch(e){if(!Z.test(e.message))throw e;return[{name:"GCP does not support client list"}]}}getWorkers(){let e=`${this.clientName()}`,t=`${this.clientName()}:w:`;return this.baseGetClients(i=>i&&(i===e||i.startsWith(t)))}async getWorkersCount(){return(await this.getWorkers()).length}async getQueueEvents(){let e=`${this.clientName()}:qe`;return this.baseGetClients(t=>t===e)}async getMetrics(e,t=0,i=-1){let[r,a,n]=await this.scripts.getMetrics(e,t,i);return{meta:{count:parseInt(r[0]||"0",10),prevTS:parseInt(r[1]||"0",10),prevCount:parseInt(r[2]||"0",10)},data:a.map(e=>+e||0),count:n}}parseClientList(e,t){let i=e.split(/\r?\n/),r=[];return i.forEach(e=>{let i={};e.split(" ").forEach(function(e){let t=e.indexOf("="),r=e.substring(0,t),a=e.substring(t+1);i[r]=a});let a=i.name;t(a)&&(i.name=this.name,i.rawname=a,r.push(i))}),r}async exportPrometheusMetrics(e){let t=await this.getJobCounts(),i=[];i.push("# HELP bullmq_job_count Number of jobs in the queue by state"),i.push("# TYPE bullmq_job_count gauge");let r=iN(this.name),a=e?Object.keys(e).reduce((t,i)=>`${t}, ${i}="${iN(e[i])}"`,""):"";for(let[e,n]of Object.entries(t))i.push(`bullmq_job_count{queue="${r}", state="${e}"${a}} ${n}`);let[n,s]=await Promise.all([this.getMetrics("completed"),this.getMetrics("failed")]);return i.push("# HELP bullmq_job_completed_total Total number of completed jobs"),i.push("# TYPE bullmq_job_completed_total counter"),i.push(`bullmq_job_completed_total{queue="${r}"${a}} ${n.meta.count}`),i.push("# HELP bullmq_job_failed_total Total number of failed jobs"),i.push("# TYPE bullmq_job_failed_total counter"),i.push(`bullmq_job_failed_total{queue="${r}"${a}} ${s.meta.count}`),i.join("\n")}}class iJ extends iM{constructor(e,t,i){super(e,t,i),this.repeatStrategy=t.settings&&t.settings.repeatStrategy||iF,this.repeatKeyHashAlgorithm=t.settings&&t.settings.repeatKeyHashAlgorithm||"md5"}async updateRepeatableJob(e,t,i,{override:r}){var a;let n=Object.assign({},i.repeat);null!=n.pattern||(n.pattern=n.cron),delete n.cron;let s=n.count?n.count+1:1;if(void 0!==n.limit&&s>n.limit)return;let o=Date.now(),{endDate:l}=n;if(l&&o>new Date(l).getTime())return;let d=i.prevMillis||0;o=d<o?o:d;let c=await this.repeatStrategy(o,n,e),{every:u,pattern:p}=n,h=!!((u||p)&&n.immediately),m=h&&u?o-c:void 0;if(c){let o;!d&&i.jobId&&(n.jobId=i.jobId);let f=iq(e,n),y=null!=(a=i.repeat.key)?a:this.hash(f);if(r)o=await this.scripts.addRepeatableJob(y,c,{name:e,endDate:l?new Date(l).getTime():void 0,tz:n.tz,pattern:p,every:u},f);else{let e=await this.client;o=await this.scripts.updateRepeatableJobMillis(e,y,c,f)}let{immediately:b}=n,g=ea(n,["immediately"]);return this.createNextJob(e,c,o,Object.assign(Object.assign({},i),{repeat:Object.assign({offset:m},g)}),t,s,h)}}async createNextJob(e,t,i,r,a,n,s){let o=this.getRepeatJobKey(e,t,i,a),l=Date.now(),d=t+(r.repeat.offset?r.repeat.offset:0)-l,c=Object.assign(Object.assign({},r),{jobId:o,delay:d<0||s?0:d,timestamp:l,prevMillis:t,repeatJobKey:i});return c.repeat=Object.assign(Object.assign({},r.repeat),{count:n}),this.Job.create(this,e,a,c)}getRepeatJobKey(e,t,i,r){return i.split(":").length>2?this.getRepeatJobId({name:e,nextMillis:t,namespace:this.hash(i),jobId:null==r?void 0:r.id}):this.getRepeatDelayedJobId({customKey:i,nextMillis:t})}async removeRepeatable(e,t,i){var r;let a=iq(e,Object.assign(Object.assign({},t),{jobId:i})),n=null!=(r=t.key)?r:this.hash(a),s=this.getRepeatJobId({name:e,nextMillis:"",namespace:this.hash(a),jobId:null!=i?i:t.jobId,key:t.key});return this.scripts.removeRepeatable(s,a,n)}async removeRepeatableByKey(e){let t=this.keyToData(e),i=this.getRepeatJobId({name:t.name,nextMillis:"",namespace:this.hash(e),jobId:t.id});return this.scripts.removeRepeatable(i,"",e)}async getRepeatableData(e,t,i){let r=await e.hgetall(this.toKey("repeat:"+t));return r?{key:t,name:r.name,endDate:parseInt(r.endDate)||null,tz:r.tz||null,pattern:r.pattern||null,every:r.every||null,next:i}:this.keyToData(t,i)}keyToData(e,t){let i=e.split(":"),r=i.slice(4).join(":")||null;return{key:e,name:i[0],id:i[1]||null,endDate:parseInt(i[2])||null,tz:i[3]||null,pattern:r,next:t}}async getRepeatableJobs(e=0,t=-1,i=!1){let r=await this.client,a=this.keys.repeat,n=i?await r.zrange(a,e,t,{WITHSCORES:!0}):await r.zrevrange(a,e,t,{WITHSCORES:!0}),s=[];for(let e=0;e<n.length;e+=2)s.push(this.getRepeatableData(r,n[e],parseInt(n[e+1])));return Promise.all(s)}async getRepeatableCount(){return(await this.client).zcard(this.toKey("repeat"))}hash(e){return(0,J.createHash)(this.repeatKeyHashAlgorithm).update(e).digest("hex")}getRepeatDelayedJobId({nextMillis:e,customKey:t}){return`repeat:${t}:${e}`}getRepeatJobId({name:e,nextMillis:t,namespace:i,jobId:r,key:a}){let n=null!=a?a:this.hash(`${e}${r||""}${i}`);return`repeat:${n}:${t}`}}function iq(e,t){let i=t.endDate?new Date(t.endDate).getTime():"",r=t.tz||"",a=t.pattern||String(t.every)||"",n=t.jobId?t.jobId:"";return`${e}:${n}:${i}:${r}:${a}`}let iF=(e,t)=>{let i=t.pattern;if(i&&t.every)throw Error("Both .pattern and .every options are defined for this repeatable job");if(t.every)return Math.floor(e/t.every)*t.every+(t.immediately?0:t.every);let r=new Date(t.startDate&&new Date(t.startDate)>new Date(e)?t.startDate:e),a=(0,iO.parseExpression)(i,Object.assign(Object.assign({},t),{currentDate:r}));try{if(t.immediately)return new Date().getTime();return a.next().getTime()}catch(e){}};class iG extends iL{constructor(e,t,i){var r;super(e,Object.assign({},t),i),this.token=function(){if("function"==typeof J.randomUUID)return(0,J.randomUUID)();let e=(0,J.randomBytes)(16);return e[6]=15&e[6]|64,e[8]=63&e[8]|128,[e.toString("hex",0,4),e.toString("hex",4,6),e.toString("hex",6,8),e.toString("hex",8,10),e.toString("hex",10,16)].join("-")}(),this.libName="bullmq",this.jobsOpts=null!=(r=null==t?void 0:t.defaultJobOptions)?r:{},this.waitUntilReady().then(e=>{if(!this.closing&&!(null==t?void 0:t.skipMetasUpdate))return e.hset(this.keys.meta,this.metaValues)}).catch(e=>{})}emit(e,...t){return super.emit(e,...t)}off(e,t){return super.off(e,t),this}on(e,t){return super.on(e,t),this}once(e,t){return super.once(e,t),this}get defaultJobOptions(){return Object.assign({},this.jobsOpts)}get metaValues(){var e,t,i,r;return{"opts.maxLenEvents":null!=(r=null==(i=null==(t=null==(e=this.opts)?void 0:e.streams)?void 0:t.events)?void 0:i.maxLen)?r:1e4,version:`${this.libName}:${tc}`}}async getVersion(){let e=await this.client;return await e.hget(this.keys.meta,"version")}get repeat(){return new Promise(async e=>{this._repeat||(this._repeat=new iJ(this.name,Object.assign(Object.assign({},this.opts),{connection:await this.client})),this._repeat.on("error",this.emit.bind(this,"error"))),e(this._repeat)})}get jobScheduler(){return new Promise(async e=>{this._jobScheduler||(this._jobScheduler=new i_(this.name,Object.assign(Object.assign({},this.opts),{connection:await this.client})),this._jobScheduler.on("error",this.emit.bind(this,"error"))),e(this._jobScheduler)})}async setGlobalConcurrency(e){return(await this.client).hset(this.keys.meta,{concurrency:e})}async setGlobalRateLimit(e,t){return(await this.client).hset(this.keys.meta,{max:e,duration:t})}async removeGlobalConcurrency(){return(await this.client).hdel(this.keys.meta,"concurrency")}async removeGlobalRateLimit(){return(await this.client).hdel(this.keys.meta,"max","duration")}async add(e,t,i){return this.trace(I.PRODUCER,"add",`${this.name}.${e}`,async(r,a)=>{var n;!a||(null==(n=null==i?void 0:i.telemetry)?void 0:n.omitContext)||(i=Object.assign(Object.assign({},i),{telemetry:{metadata:a}}));let s=await this.addJob(e,t,i);return null==r||r.setAttributes({[S.JobName]:e,[S.JobId]:s.id}),s})}async addJob(e,t,i){if(i&&i.repeat){if(i.repeat.endDate&&+new Date(i.repeat.endDate)<Date.now())throw Error("End date must be greater than current timestamp");return(await this.repeat).updateRepeatableJob(e,t,Object.assign(Object.assign({},this.jobsOpts),i),{override:!0})}{let r=null==i?void 0:i.jobId;if("0"==r||(null==r?void 0:r.startsWith("0:")))throw Error("JobId cannot be '0' or start with 0:");let a=Object.assign(Object.assign(Object.assign({},this.jobsOpts),i),{jobId:r}),n=await this.Job.create(this,e,t,a);return this.emit("waiting",n),n}}async addBulk(e){return this.trace(I.PRODUCER,"addBulk",this.name,async(t,i)=>(t&&t.setAttributes({[S.BulkNames]:e.map(e=>e.name),[S.BulkCount]:e.length}),await this.Job.createBulk(this,e.map(e=>{var t,r,a,n,s,o;let l=null==(t=e.opts)?void 0:t.telemetry;if(i){let t=null==(a=null==(r=e.opts)?void 0:r.telemetry)?void 0:a.omitContext,o=(null==(s=null==(n=e.opts)?void 0:n.telemetry)?void 0:s.metadata)||!t&&i;(o||t)&&(l={metadata:o,omitContext:t})}let d=Object.assign(Object.assign(Object.assign({},this.jobsOpts),e.opts),{jobId:null==(o=e.opts)?void 0:o.jobId,telemetry:l});return{name:e.name,data:e.data,opts:d}}))))}async upsertJobScheduler(e,t,i){var r,a;if(t.endDate&&+new Date(t.endDate)<Date.now())throw Error("End date must be greater than current timestamp");return(await this.jobScheduler).upsertJobScheduler(e,t,null!=(r=null==i?void 0:i.name)?r:e,null!=(a=null==i?void 0:i.data)?a:{},Object.assign(Object.assign({},this.jobsOpts),null==i?void 0:i.opts),{override:!0})}async pause(){await this.trace(I.INTERNAL,"pause",this.name,async()=>{await this.scripts.pause(!0),this.emit("paused")})}async close(){await this.trace(I.INTERNAL,"close",this.name,async()=>{!this.closing&&this._repeat&&await this._repeat.close(),await super.close()})}async rateLimit(e){await this.trace(I.INTERNAL,"rateLimit",this.name,async t=>{null==t||t.setAttributes({[S.QueueRateLimit]:e}),await this.client.then(t=>t.set(this.keys.limiter,Number.MAX_SAFE_INTEGER,{PX:e}))})}async resume(){await this.trace(I.INTERNAL,"resume",this.name,async()=>{await this.scripts.pause(!1),this.emit("resumed")})}async isPaused(){let e=await this.client;return 1===await e.hexists(this.keys.meta,"paused")}isMaxed(){return this.scripts.isMaxed()}async getRepeatableJobs(e,t,i){return(await this.repeat).getRepeatableJobs(e,t,i)}async getJobScheduler(e){return(await this.jobScheduler).getScheduler(e)}async getJobSchedulers(e,t,i){return(await this.jobScheduler).getJobSchedulers(e,t,i)}async getJobSchedulersCount(){return(await this.jobScheduler).getSchedulersCount()}async removeRepeatable(e,t,i){return this.trace(I.INTERNAL,"removeRepeatable",`${this.name}.${e}`,async r=>{null==r||r.setAttributes({[S.JobName]:e,[S.JobId]:i});let a=await this.repeat;return!await a.removeRepeatable(e,t,i)})}async removeJobScheduler(e){let t=await this.jobScheduler;return!await t.removeJobScheduler(e)}async removeDebounceKey(e){return this.trace(I.INTERNAL,"removeDebounceKey",`${this.name}`,async t=>{null==t||t.setAttributes({[S.JobKey]:e});let i=await this.client;return await i.del(`${this.keys.de}:${e}`)})}async removeDeduplicationKey(e){return this.trace(I.INTERNAL,"removeDeduplicationKey",`${this.name}`,async t=>(null==t||t.setAttributes({[S.DeduplicationKey]:e}),(await this.client).del(`${this.keys.de}:${e}`)))}async removeRateLimitKey(){return(await this.client).del(this.keys.limiter)}async removeRepeatableByKey(e){return this.trace(I.INTERNAL,"removeRepeatableByKey",`${this.name}`,async t=>{null==t||t.setAttributes({[S.JobKey]:e});let i=await this.repeat;return!await i.removeRepeatableByKey(e)})}async remove(e,{removeChildren:t=!0}={}){return this.trace(I.INTERNAL,"remove",this.name,async i=>{null==i||i.setAttributes({[S.JobId]:e,[S.JobOptions]:JSON.stringify({removeChildren:t})});let r=await this.scripts.remove(e,t);return 1===r&&this.emit("removed",e),r})}async updateJobProgress(e,t){await this.trace(I.INTERNAL,"updateJobProgress",this.name,async i=>{null==i||i.setAttributes({[S.JobId]:e,[S.JobProgress]:JSON.stringify(t)}),await this.scripts.updateProgress(e,t),this.emit("progress",e,t)})}async addJobLog(e,t,i){return tb.addJobLog(this,e,t,i)}async drain(e=!1){await this.trace(I.INTERNAL,"drain",this.name,async t=>{null==t||t.setAttributes({[S.QueueDrainDelay]:e}),await this.scripts.drain(e)})}async clean(e,t,i="completed"){return this.trace(I.INTERNAL,"clean",this.name,async r=>{let a=t||1/0,n=Math.min(1e4,a),s=Date.now()-e,o=0,l=[],d="waiting"===i?"wait":i;for(;o<a;){let e=await this.scripts.cleanJobsInSet(d,s,n);if(this.emit("cleaned",e,d),o+=e.length,l.push(...e),e.length<n)break}return null==r||r.setAttributes({[S.QueueGrace]:e,[S.JobType]:i,[S.QueueCleanLimit]:a,[S.JobIds]:l}),l})}async obliterate(e){await this.trace(I.INTERNAL,"obliterate",this.name,async()=>{await this.pause();let t=0;do t=await this.scripts.obliterate(Object.assign({force:!1,count:1e3},e));while(t)})}async retryJobs(e={}){await this.trace(I.PRODUCER,"retryJobs",this.name,async t=>{null==t||t.setAttributes({[S.QueueOptions]:JSON.stringify(e)});let i=0;do i=await this.scripts.retryJobs(e.state,e.count,e.timestamp);while(i)})}async promoteJobs(e={}){await this.trace(I.INTERNAL,"promoteJobs",this.name,async t=>{null==t||t.setAttributes({[S.QueueOptions]:JSON.stringify(e)});let i=0;do i=await this.scripts.promoteJobs(e.count);while(i)})}async trimEvents(e){return this.trace(I.INTERNAL,"trimEvents",this.name,async t=>{null==t||t.setAttributes({[S.QueueEventMaxLength]:e});let i=await this.client;return await i.xtrim(this.keys.events,"MAXLEN",e,{approximate:!0})})}async removeDeprecatedPriorityKey(){return(await this.client).del(this.toKey("priority"))}async removeOrphanedJobs(e=1e3,t=0){let i=await this.client,r=new Set(Object.keys(this.keys)),a=Object.keys(this.keys).filter(e=>""!==e),n=["logs","dependencies","processed","failed","unsuccessful","lock"],s=this.qualifiedName+":",o=s+"*",l=0,d="0";do{let[c,u]=await i.scan(d,{MATCH:o,COUNT:e});d=c;let p=new Set;for(let e of u){let t=e.slice(s.length);if(r.has(t))continue;let i=t.indexOf(":");if(-1!==i){let e=t.slice(0,i);if(r.has(e))continue}let a=-1===i?t:t.slice(0,i);if(-1!==i){let e=t.slice(i+1);if(!n.includes(e))continue}p.add(a)}if(0===p.size)continue;if(l+=await this.scripts.removeOrphanedJobs([...p],a,n)||0,t>0&&l>=t)break}while("0"!==d)return l}}e.i(22734),e.i(92509),(g=_||(_={})).blocking="blocking",g.normal="normal",e.i(61532);var iV=e.i(29508);let iz=process.env.REDIS_URL||"redis://127.0.0.1:6379";function iB(){return l||(l=new iG("email-queue",{connection:{url:iz}})),l}async function iH(e,t){await iB().add("send_reminder",{bookingId:e},{delay:t})}async function iU(e){await iB().add("send_confirmation",{bookingId:e})}iV.default.createTransport({host:process.env.SMTP_HOST||"mailhog",port:parseInt(process.env.SMTP_PORT||"1025"),secure:!1,auth:process.env.SMTP_USER?{user:process.env.SMTP_USER,pass:process.env.SMTP_PASSWORD}:void 0}),e.s(["getEmailQueueInstance",0,function(){return iB()},"scheduleEmailConfirmation",0,iU,"scheduleEmailReminder",0,iH],51157)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0pj444p._.js.map