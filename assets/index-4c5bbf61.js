import{r as p}from"./index-8db94870.js";import{N as S,s as x,u as E,a as O,b as P,c as j,d as R}from"./index-49953746.js";/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},m.apply(this,arguments)}function K(e,t){if(e==null)return{};var a={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(a[o]=e[o]);return a}function F(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _(e,t){return e.button===0&&(!t||t==="_self")&&!F(e)}const B=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],N=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",W=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I=p.forwardRef(function(t,a){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:u,target:c,to:n,preventScrollReset:f}=t,h=K(t,B),{basename:L}=p.useContext(S),g,v=!1;if(typeof n=="string"&&W.test(n)&&(g=n,N))try{let l=new URL(window.location.href),d=n.startsWith("//")?new URL(l.protocol+n):new URL(n),w=x(d.pathname,L);d.origin===l.origin&&w!=null?n=w+d.search+d.hash:v=!0}catch{}let U=E(n,{relative:o}),k=z(n,{replace:s,state:u,target:c,preventScrollReset:f,relative:o});function C(l){r&&r(l),l.defaultPrevented||k(l)}return p.createElement("a",m({},h,{href:g||U,onClick:v||i?r:C,ref:a,target:c}))});var b;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(b||(b={}));var y;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(y||(y={}));function z(e,t){let{target:a,replace:r,state:o,preventScrollReset:i,relative:s}=t===void 0?{}:t,u=O(),c=P(),n=j(e,{relative:s});return p.useCallback(f=>{if(_(f,a)){f.preventDefault();let h=r!==void 0?r:R(c)===R(n);u(e,{replace:h,state:o,preventScrollReset:i,relative:s})}},[c,u,n,r,o,a,e,i,s])}export{I as L};
//# sourceMappingURL=index-4c5bbf61.js.map