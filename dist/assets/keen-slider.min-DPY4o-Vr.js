import{r as vt}from"./index-CMUwsETM.js";const Mt="/assets/1-BlImOXN_.bmp";var ct={};Object.defineProperty(ct,"__esModule",{value:!0});var K=vt;function et(t){return Array.prototype.slice.call(t)}function at(t,r){var i=Math.floor(t);return i===r||i+1===r?t:r}function ot(){return Date.now()}function $(t,r,i){if(r="data-keen-slider-"+r,i===null)return t.removeAttribute(r);t.setAttribute(r,i||"")}function Z(t,r){return r=r||document,typeof t=="function"&&(t=t(r)),Array.isArray(t)?t:typeof t=="string"?et(r.querySelectorAll(t)):t instanceof HTMLElement?[t]:t instanceof NodeList?et(t):[]}function G(t){t.raw&&(t=t.raw),t.cancelable&&!t.defaultPrevented&&t.preventDefault()}function J(t){t.raw&&(t=t.raw),t.stopPropagation&&t.stopPropagation()}function st(){var t=[];return{add:function(r,i,o,u){r.addListener?r.addListener(o):r.addEventListener(i,o,u),t.push([r,i,o,u])},input:function(r,i,o,u){this.add(r,i,function(a){return function(e){e.nativeEvent&&(e=e.nativeEvent);var k=e.changedTouches||[],x=e.targetTouches||[],l=e.detail&&e.detail.x?e.detail:null;return a({id:l?l.identifier?l.identifier:"i":x[0]?x[0]?x[0].identifier:"e":"d",idChanged:l?l.identifier?l.identifier:"i":k[0]?k[0]?k[0].identifier:"e":"d",raw:e,x:l&&l.x?l.x:x[0]?x[0].screenX:l?l.x:e.pageX,y:l&&l.y?l.y:x[0]?x[0].screenY:l?l.y:e.pageY})}}(o),u)},purge:function(){t.forEach(function(r){r[0].removeListener?r[0].removeListener(r[2]):r[0].removeEventListener(r[1],r[2],r[3])}),t=[]}}}function tt(t,r,i){return Math.min(Math.max(t,r),i)}function q(t){return(t>0?1:0)-(t<0?1:0)||+t}function ut(t){var r=t.getBoundingClientRect();return{height:at(r.height,t.offsetHeight),width:at(r.width,t.offsetWidth)}}function H(t,r,i,o){var u=t&&t[r];return u==null?i:o&&typeof u=="function"?u():u}function X(t){return Math.round(1e6*t)/1e6}function dt(t,r){if(t===r)return!0;var i=typeof t;if(i!==typeof r)return!1;if(i!=="object"||t===null||r===null)return i==="function"&&t.toString()===r.toString();if(t.length!==r.length||Object.getOwnPropertyNames(t).length!==Object.getOwnPropertyNames(r).length)return!1;for(var o in t)if(!dt(t[o],r[o]))return!1;return!0}var Y=function(){return Y=Object.assign||function(t){for(var r,i=1,o=arguments.length;i<o;i++)for(var u in r=arguments[i])Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u]);return t},Y.apply(this,arguments)};function lt(t,r,i){for(var o,u=0,a=r.length;u<a;u++)!o&&u in r||(o||(o=Array.prototype.slice.call(r,0,u)),o[u]=r[u]);return t.concat(o||Array.prototype.slice.call(r))}function mt(t){var r,i,o,u,a,e;function k(M){e||(e=M),x(!0);var E=M-e;E>o&&(E=o);var v=u[i];if(v[3]<E)return i++,k(M);var T=v[2],z=v[4],m=v[0],h=v[1]*(0,v[5])(z===0?1:(E-T)/z);if(h&&t.track.to(m+h),E<o)return C();e=null,x(!1),l(null),t.emit("animationEnded")}function x(M){r.active=M}function l(M){r.targetIdx=M}function C(){var M;M=k,a=window.requestAnimationFrame(M)}function D(){var M;M=a,window.cancelAnimationFrame(M),x(!1),l(null),e&&t.emit("animationStopped"),e=null}return r={active:!1,start:function(M){if(D(),t.track.details){var E=0,v=t.track.details.position;i=0,o=0,u=M.map(function(T){var z,m=Number(v),h=(z=T.earlyExit)!==null&&z!==void 0?z:T.duration,p=T.easing,P=T.distance*p(h/T.duration)||0;v+=P;var I=o;return o+=h,E+=P,[m,T.distance,I,o,T.duration,p]}),l(t.track.distToIdx(E)),C(),t.emit("animationStarted")}},stop:D,targetIdx:null}}function ht(t){var r,i,o,u,a,e,k,x,l,C,D,M,E,v,T=1/0,z=[],m=null,h=0;function p(f){R(h+f)}function P(f){var s=I(h+f).abs;return w(s)?s:null}function I(f){var s=Math.floor(Math.abs(X(f/i))),n=X((f%i+i)%i);n===i&&(n=0);var b=q(f),d=k.indexOf(lt([],k).reduce(function(A,O){return Math.abs(O-n)<Math.abs(A-n)?O:A})),y=d;return b<0&&s++,d===e&&(y=0,s+=b>0?1:-1),{abs:y+s*e*b,origin:d,rel:y}}function S(f,s,n){var b;if(s||!W())return c(f,n);if(!w(f))return null;var d=I(n??h),y=d.abs,A=f-d.rel,O=y+A;b=c(O);var _=c(O-e*q(A));return(_!==null&&Math.abs(_)<Math.abs(b)||b===null)&&(b=_),X(b)}function c(f,s){if(s==null&&(s=X(h)),!w(f)||f===null)return null;f=Math.round(f);var n=I(s),b=n.abs,d=n.rel,y=n.origin,A=N(f),O=(s%i+i)%i,_=k[y],F=Math.floor((f-(b-d))/e)*i;return X(_-O-_+k[A]+F+(y===e?i:0))}function w(f){return L(f)===f}function L(f){return tt(f,l,C)}function W(){return u.loop}function N(f){return(f%e+e)%e}function R(f){var s;s=f-h,z.push({distance:s,timestamp:ot()}),z.length>6&&(z=z.slice(-6)),h=X(f);var n=g().abs;if(n!==m){var b=m!==null;m=n,b&&t.emit("slideChanged")}}function g(f){var s=f?null:function(){if(e){var n=W(),b=n?(h%i+i)%i:h,d=(n?h%i:h)-a[0][2],y=0-(d<0&&n?i-Math.abs(d):d),A=0,O=I(h),_=O.abs,F=O.rel,Q=a[F][2],U=a.map(function(V,ft){var j=y+A;(j<0-V[0]||j>1)&&(j+=(Math.abs(j)>i-1&&n?i:0)*q(-j));var it=ft-F,rt=q(it),B=it+_;n&&(rt===-1&&j>Q&&(B+=e),rt===1&&j<Q&&(B-=e),D!==null&&B<D&&(j+=i),M!==null&&B>M&&(j-=i));var nt=j+V[0]+V[1],pt=Math.max(j>=0&&nt<=1?1:nt<0||j>1?0:j<0?Math.min(1,(V[0]+j)/V[0]):(1-j)/V[0],0);return A+=V[0]+V[1],{abs:B,distance:u.rtl?-1*j+1-V[0]:j,portion:pt,size:V[0]}});return _=L(_),F=N(_),{abs:L(_),length:o,max:v,maxIdx:C,min:E,minIdx:l,position:h,progress:n?b/i:h/o,rel:F,slides:U,slidesLength:i}}}();return r.details=s,t.emit("detailsChanged"),s}return r={absToRel:N,add:p,details:null,distToIdx:P,idxToDist:S,init:function(f){if(function(){if(u=t.options,a=(u.trackConfig||[]).map(function(d){return[H(d,"size",1),H(d,"spacing",0),H(d,"origin",0)]}),e=a.length){i=X(a.reduce(function(d,y){return d+y[0]+y[1]},0));var n,b=e-1;o=X(i+a[0][2]-a[b][0]-a[b][2]-a[b][1]),k=a.reduce(function(d,y){if(!d)return[0];var A=a[d.length-1],O=d[d.length-1]+(A[0]+A[2])+A[1];return O-=y[2],d[d.length-1]>O&&(O=d[d.length-1]),O=X(O),d.push(O),(!n||n<O)&&(x=d.length-1),n=O,d},null),o===0&&(x=0),k.push(X(i))}}(),!e)return g(!0);var s;(function(){var n=t.options.range,b=t.options.loop;D=l=b?H(b,"min",-1/0):0,M=C=b?H(b,"max",T):x;var d=H(n,"min",null),y=H(n,"max",null);d!==null&&(l=d),y!==null&&(C=y),E=l===-1/0?l:t.track.idxToDist(l||0,!0,0),v=C===T?C:S(C,!0,0),y===null&&(M=C),H(n,"align",!1)&&C!==T&&a[N(C)][2]===0&&(v-=1-a[N(C)][0],C=P(v-h)),E=X(E),v=X(v)})(),s=f,Number(s)===s?p(c(L(f))):g()},to:R,velocity:function(){var f=ot(),s=z.reduce(function(n,b){var d=b.distance,y=b.timestamp;return f-y>200||(q(d)!==q(n.distance)&&n.distance&&(n={distance:0,lastTimestamp:0,time:0}),n.time&&(n.distance+=d),n.lastTimestamp&&(n.time+=y-n.lastTimestamp),n.lastTimestamp=y),n},{distance:0,lastTimestamp:0,time:0});return s.distance/s.time||0}}}function gt(t){var r,i,o,u,a,e,k,x;function l(m){return 2*m}function C(m){return tt(m,k,x)}function D(m){return 1-Math.pow(1-m,3)}function M(){return o?t.track.velocity():0}function E(){z();var m=t.options.mode==="free-snap",h=t.track,p=M();u=q(p);var P=t.track.details,I=[];if(p||!m){var S=v(p),c=S.dist,w=S.dur;if(w=l(w),c*=u,m){var L=h.idxToDist(h.distToIdx(c),!0);L&&(c=L)}I.push({distance:c,duration:w,easing:D});var W=P.position,N=W+c;if(N<a||N>e){var R=N<a?a-W:e-W,g=0,f=p;if(q(R)===u){var s=Math.min(Math.abs(R)/Math.abs(c),1),n=function(y){return 1-Math.pow(1-y,1/3)}(s)*w;I[0].earlyExit=n,f=p*(1-s)}else I[0].earlyExit=0,g+=R;var b=v(f,100),d=b.dist*u;t.options.rubberband&&(I.push({distance:d,duration:l(b.dur),easing:D}),I.push({distance:-d+g,duration:500,easing:D}))}t.animator.start(I)}else t.moveToIdx(C(P.abs),!0,{duration:500,easing:function(y){return 1+--y*y*y*y*y}})}function v(m,h){h===void 0&&(h=1e3);var p=147e-9+(m=Math.abs(m))/h;return{dist:Math.pow(m,2)/p,dur:m/p}}function T(){var m=t.track.details;m&&(a=m.min,e=m.max,k=m.minIdx,x=m.maxIdx)}function z(){t.animator.stop()}t.on("updated",T),t.on("optionsChanged",T),t.on("created",T),t.on("dragStarted",function(){o=!1,z(),r=i=t.track.details.abs}),t.on("dragChecked",function(){o=!0}),t.on("dragEnded",function(){var m=t.options.mode;m==="snap"&&function(){var h=t.track,p=t.track.details,P=p.position,I=q(M());(P>e||P<a)&&(I=0);var S=r+I;p.slides[h.absToRel(S)].portion===0&&(S-=I),r!==i&&(S=i),q(h.idxToDist(S,!0))!==I&&(S+=I),S=C(S);var c=h.idxToDist(S,!0);t.animator.start([{distance:c,duration:500,easing:function(w){return 1+--w*w*w*w*w}}])}(),m!=="free"&&m!=="free-snap"||E()}),t.on("dragged",function(){i=t.track.details.abs})}function bt(t){var r,i,o,u,a,e,k,x,l,C,D,M,E,v,T,z,m,h,p=st();function P(g){if(e&&x===g.id){var f=w(g);if(l){if(!c(g))return S(g);C=f,l=!1,t.emit("dragChecked")}if(z)return C=f;G(g);var s=function(b){if(m===-1/0&&h===1/0)return b;var d=t.track.details,y=d.length,A=d.position,O=tt(b,m-A,h-A);if(y===0)return 0;if(!t.options.rubberband)return O;if(A<=h&&A>=m||A<m&&i>0||A>h&&i<0)return b;var _=(A<m?A-m:A-h)/y,F=u*y,Q=Math.abs(_*F),U=Math.max(0,1-Q/a*2);return U*U*b}(k(C-f)/u*o);i=q(s);var n=t.track.details.position;(n>m&&n<h||n===m&&i>0||n===h&&i<0)&&J(g),D+=s,!M&&Math.abs(D*u)>5&&(M=!0),t.track.add(s),C=f,t.emit("dragged")}}function I(g){!e&&t.track.details&&t.track.details.length&&(D=0,e=!0,M=!1,l=!0,x=g.id,c(g),C=w(g),t.emit("dragStarted"))}function S(g){e&&x===g.idChanged&&(e=!1,t.emit("dragEnded"))}function c(g){var f=L(),s=f?g.y:g.x,n=f?g.x:g.y,b=E!==void 0&&v!==void 0&&Math.abs(v-n)<=Math.abs(E-s);return E=s,v=n,b}function w(g){return L()?g.y:g.x}function L(){return t.options.vertical}function W(){u=t.size,a=L()?window.innerHeight:window.innerWidth;var g=t.track.details;g&&(m=g.min,h=g.max)}function N(g){M&&(J(g),G(g))}function R(){if(p.purge(),t.options.drag&&!t.options.disabled){var g;g=t.options.dragSpeed||1,k=typeof g=="function"?g:function(s){return s*g},o=t.options.rtl?-1:1,W(),r=t.container,function(){var s="data-keen-slider-clickable";Z("[".concat(s,"]:not([").concat(s,"=false])"),r).map(function(n){p.add(n,"dragstart",J),p.add(n,"mousedown",J),p.add(n,"touchstart",J)})}(),p.add(r,"dragstart",function(s){G(s)}),p.add(r,"click",N,{capture:!0}),p.input(r,"ksDragStart",I),p.input(r,"ksDrag",P),p.input(r,"ksDragEnd",S),p.input(r,"mousedown",I),p.input(r,"mousemove",P),p.input(r,"mouseleave",S),p.input(r,"mouseup",S),p.input(r,"touchstart",I,{passive:!0}),p.input(r,"touchmove",P,{passive:!1}),p.input(r,"touchend",S),p.input(r,"touchcancel",S),p.add(window,"wheel",function(s){e&&G(s)});var f="data-keen-slider-scrollable";Z("[".concat(f,"]:not([").concat(f,"=false])"),t.container).map(function(s){return function(n){var b;p.input(n,"touchstart",function(d){b=w(d),z=!0,T=!0},{passive:!0}),p.input(n,"touchmove",function(d){var y=L(),A=y?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,O=b-w(d),_=y?n.scrollTop:n.scrollLeft,F=y&&n.style.overflowY==="scroll"||!y&&n.style.overflowX==="scroll";if(b=w(d),(O<0&&_>0||O>0&&_<A)&&T&&F)return z=!0;T=!1,G(d),z=!1}),p.input(n,"touchend",function(){z=!1})}(s)})}}t.on("updated",W),t.on("optionsChanged",R),t.on("created",R),t.on("destroyed",p.purge)}function xt(t){var r,i,o=null;function u(E,v,T){t.animator.active?e(E,v,T):requestAnimationFrame(function(){return e(E,v,T)})}function a(){u(!1,!1,i)}function e(E,v,T){var z=0,m=t.size,h=t.track.details;if(h&&r){var p=h.slides;r.forEach(function(P,I){if(E)!o&&v&&x(P,null,T),l(P,null,T);else{if(!p[I])return;var S=p[I].size*m;!o&&v&&x(P,S,T),l(P,p[I].distance*m-z,T),z+=S}})}}function k(E){return t.options.renderMode==="performance"?Math.round(E):E}function x(E,v,T){var z=T?"height":"width";v!==null&&(v=k(v)+"px"),E.style["min-"+z]=v,E.style["max-"+z]=v}function l(E,v,T){if(v!==null){v=k(v);var z=T?v:0;v="translate3d(".concat(T?0:v,"px, ").concat(z,"px, 0)")}E.style.transform=v,E.style["-webkit-transform"]=v}function C(){r&&(e(!0,!0,i),r=null),t.on("detailsChanged",a,!0)}function D(){u(!1,!0,i)}function M(){C(),i=t.options.vertical,t.options.disabled||t.options.renderMode==="custom"||(o=H(t.options.slides,"perView",null)==="auto",t.on("detailsChanged",a),(r=t.slides).length&&D())}t.on("created",M),t.on("optionsChanged",M),t.on("beforeOptionsChanged",function(){C()}),t.on("updated",D),t.on("destroyed",C)}function yt(t,r){return function(i){var o,u,a,e,k,x=st();function l(c){var w;$(i.container,"reverse",(w=i.container,window.getComputedStyle(w,null).getPropertyValue("direction")!=="rtl"||c?null:"")),$(i.container,"v",i.options.vertical&&!c?"":null),$(i.container,"disabled",i.options.disabled&&!c?"":null)}function C(){D()&&z()}function D(){var c=null;if(e.forEach(function(L){L.matches&&(c=L.__media)}),c===o)return!1;o||i.emit("beforeOptionsChanged"),o=c;var w=c?a.breakpoints[c]:a;return i.options=Y(Y({},a),w),l(),I(),S(),h(),!0}function M(c){var w=ut(c);return(i.options.vertical?w.height:w.width)/i.size||1}function E(){return i.options.trackConfig.length}function v(c){for(var w in o=!1,a=Y(Y({},r),c),x.purge(),u=i.size,e=[],a.breakpoints||[]){var L=window.matchMedia(w);L.__media=w,e.push(L),x.add(L,"change",C)}x.add(window,"orientationchange",P),x.add(window,"resize",p),D()}function T(c){i.animator.stop();var w=i.track.details;i.track.init(c??(w?w.abs:0))}function z(c){T(c),i.emit("optionsChanged")}function m(c,w){if(c)return v(c),void z(w);I(),S();var L=E();h(),E()!==L?z(w):T(w),i.emit("updated")}function h(){var c=i.options.slides;if(typeof c=="function")return i.options.trackConfig=c(i.size,i.slides);for(var w=i.slides,L=w.length,W=typeof c=="number"?c:H(c,"number",L,!0),N=[],R=H(c,"perView",1,!0),g=H(c,"spacing",0,!0)/i.size||0,f=R==="auto"?g:g/R,s=H(c,"origin","auto"),n=0,b=0;b<W;b++){var d=R==="auto"?M(w[b]):1/R-g+f,y=s==="center"?.5-d/2:s==="auto"?0:s;N.push({origin:y,size:d,spacing:g}),n+=d}if(n+=g*(W-1),s==="auto"&&!i.options.loop&&R!==1){var A=0;N.map(function(O){var _=n-A;return A+=O.size+g,_>=1||(O.origin=1-_-(n>1?0:1-n)),O})}i.options.trackConfig=N}function p(){I();var c=i.size;i.options.disabled||c===u||(u=c,m())}function P(){p(),setTimeout(p,500),setTimeout(p,2e3)}function I(){var c=ut(i.container);i.size=(i.options.vertical?c.height:c.width)||1}function S(){i.slides=Z(i.options.selector,i.container)}i.container=(k=Z(t,document)).length?k[0]:null,i.destroy=function(){x.purge(),i.emit("destroyed"),l(!0)},i.prev=function(){i.moveToIdx(i.track.details.abs-1,!0)},i.next=function(){i.moveToIdx(i.track.details.abs+1,!0)},i.update=m,v(i.options)}}var kt=function(t,r,i){try{return function(o,u){var a,e={};return a={emit:function(k){e[k]&&e[k].forEach(function(l){l(a)});var x=a.options&&a.options[k];x&&x(a)},moveToIdx:function(k,x,l){var C=a.track.idxToDist(k,x);if(C){var D=a.options.defaultAnimation;a.animator.start([{distance:C,duration:H(l||D,"duration",500),easing:H(l||D,"easing",function(M){return 1+--M*M*M*M*M})}])}},on:function(k,x,l){l===void 0&&(l=!1),e[k]||(e[k]=[]);var C=e[k].indexOf(x);C>-1?l&&delete e[k][C]:l||e[k].push(x)},options:o},function(){if(a.track=ht(a),a.animator=mt(a),u)for(var k=0,x=u;k<x.length;k++)(0,x[k])(a);a.track.init(a.options.initial||0),a.emit("created")}(),a}(r,lt([yt(t,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),xt,bt,gt],i||[],!0))}catch(o){console.error(o)}},Tt=ct.useKeenSlider=function(t,r){var i=K.useRef(null),o=K.useRef(!1),u=K.useRef(t),a=K.useCallback(function(e){e?(u.current=t,i.current=new kt(e,t,r),o.current=!1):(i.current&&i.current.destroy&&i.current.destroy(),i.current=null)},[]);return K.useEffect(function(){dt(u.current,t)||(u.current=t,i.current&&i.current.update(u.current))},[t]),[a,i]};export{Mt as i,Tt as u};
