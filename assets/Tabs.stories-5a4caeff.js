import{r as u,u as I,j as L}from"./MantineProvider-e0f37d01.js";import{r as h,R as l}from"./index-8db94870.js";import{P as C}from"./IconBase.es-c4cd5f5b.js";import{c as h0,u as A0}from"./use-uncontrolled-665edddf.js";import{G as O0}from"./Group.styles-c4c68c15.js";import{c as N}from"./create-styles-ec211158.js";import{B as R}from"./Box-2e9e8fb7.js";import{U as w0}from"./UnstyledButton-73f6208e.js";import{c as $0,g as q}from"./get-safe-id-7817d5b8.js";import{u as T0}from"./use-id-a180eed7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./_commonjsHelpers-042e6b4d.js";function E0(e){return Array.isArray(e)?e:[e]}const V={context:"Tabs component was not found in the tree",value:"Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value"},[Z0,H]=h0(V.context);var S0=Object.defineProperty,D=Object.getOwnPropertySymbols,j0=Object.prototype.hasOwnProperty,x0=Object.prototype.propertyIsEnumerable,k=(e,a,r)=>a in e?S0(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,M0=(e,a)=>{for(var r in a||(a={}))j0.call(a,r)&&k(e,r,a[r]);if(D)for(var r of D(a))x0.call(a,r)&&k(e,r,a[r]);return e};function I0({orientation:e,inverted:a,placement:r},t,s){const i=e==="vertical";return s==="default"?{[i?r==="left"?"borderRight":"borderLeft":a?"borderTop":"borderBottom"]:`${u(2)} solid ${t.colorScheme==="dark"?t.colors.dark[4]:t.colors.gray[3]}`}:s==="outline"?{[i?r==="left"?"borderRight":"borderLeft":a?"borderTop":"borderBottom"]:`${u(1)} solid ${t.colorScheme==="dark"?t.colors.dark[4]:t.colors.gray[3]}`}:s==="pills"?{gap:`calc(${t.spacing.sm} / 2)`}:{}}var N0=N((e,a,{variant:r})=>{const t=a.orientation==="vertical";return{tabsList:M0({display:"flex",flexWrap:"wrap",flexDirection:t?"column":"row",justifyContent:O0[a.position],'& [role="tab"]':{flex:a.grow?1:void 0}},I0(a,e,r))}});const V0=N0;var C0=Object.defineProperty,R0=Object.defineProperties,H0=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,n0=Object.prototype.hasOwnProperty,o0=Object.prototype.propertyIsEnumerable,F=(e,a,r)=>a in e?C0(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,q0=(e,a)=>{for(var r in a||(a={}))n0.call(a,r)&&F(e,r,a[r]);if(S)for(var r of S(a))o0.call(a,r)&&F(e,r,a[r]);return e},D0=(e,a)=>R0(e,H0(a)),k0=(e,a)=>{var r={};for(var t in e)n0.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&S)for(var t of S(e))a.indexOf(t)<0&&o0.call(e,t)&&(r[t]=e[t]);return r};const F0={grow:!1,position:"left"},s0=h.forwardRef((e,a)=>{const r=I("TabsList",F0,e),{children:t,className:s,grow:i,position:p}=r,d=k0(r,["children","className","grow","position"]),{orientation:n,variant:c,color:f,radius:m,inverted:o,placement:y,classNames:b,styles:P,unstyled:_}=H(),{classes:A,cx:v}=V0({orientation:n,grow:i,color:f,position:p,radius:m,inverted:o,placement:y},{name:"Tabs",unstyled:_,classNames:b,styles:P,variant:c});return l.createElement(R,D0(q0({},d),{className:v(A.tabsList,s),ref:a,role:"tablist","aria-orientation":n}),t)});s0.displayName="@mantine/core/TabsList";var B0=N((e,{orientation:a})=>({panel:{flex:a==="vertical"?1:void 0}}));const G0=B0;var K0=Object.defineProperty,z0=Object.defineProperties,Q0=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,i0=Object.prototype.hasOwnProperty,c0=Object.prototype.propertyIsEnumerable,B=(e,a,r)=>a in e?K0(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,W0=(e,a)=>{for(var r in a||(a={}))i0.call(a,r)&&B(e,r,a[r]);if(j)for(var r of j(a))c0.call(a,r)&&B(e,r,a[r]);return e},U0=(e,a)=>z0(e,Q0(a)),J0=(e,a)=>{var r={};for(var t in e)i0.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&j)for(var t of j(e))a.indexOf(t)<0&&c0.call(e,t)&&(r[t]=e[t]);return r};const X0={},d0=h.forwardRef((e,a)=>{const r=I("TabsPanel",X0,e),{value:t,children:s,sx:i,className:p}=r,d=J0(r,["value","children","sx","className"]),n=H(),{classes:c,cx:f}=G0({orientation:n.orientation,color:n.color,radius:n.radius,inverted:n.inverted,placement:n.placement},{name:"Tabs",unstyled:n.unstyled,classNames:n.classNames,styles:n.styles,variant:n.variant}),m=n.getPanelId(t),o=n.value===t,y=n.keepMounted||o?s:null;return h.useEffect(()=>(n.setMountedPanelIds(b=>[...b,m]),n.setMountedPanelIds(b=>b.filter(P=>P!==m))),[m]),l.createElement(R,U0(W0({},d),{ref:a,sx:[{display:o?void 0:"none"},...E0(i)],className:f(c.panel,p),role:"tabpanel",id:m,"aria-labelledby":n.getTabId(t)}),y)});d0.displayName="@mantine/core/TabsPanel";var Y0=Object.defineProperty,e1=Object.defineProperties,a1=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,r1=Object.prototype.hasOwnProperty,t1=Object.prototype.propertyIsEnumerable,K=(e,a,r)=>a in e?Y0(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,$=(e,a)=>{for(var r in a||(a={}))r1.call(a,r)&&K(e,r,a[r]);if(G)for(var r of G(a))t1.call(a,r)&&K(e,r,a[r]);return e},z=(e,a)=>e1(e,a1(a));function l1(e,{orientation:a,color:r,radius:t,inverted:s,placement:i},p){const d=a==="vertical",n=e.fn.variant({color:r,variant:"filled"}),c=u(e.fn.radius(t)),f=a==="vertical"?i==="left"?`${c} 0 0 ${c}`:` 0 ${c} ${c} 0`:s?`0 0 ${c} ${c}`:`${c} ${c} 0 0`;return p==="default"?z($({[d?i==="left"?"borderRight":"borderLeft":s?"borderTop":"borderBottom"]:`${u(2)} solid transparent`,[d?i==="left"?"marginRight":"marginLeft":s?"marginTop":"marginBottom"]:u(-2),borderRadius:f},e.fn.hover({backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[0],borderColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3]})),{"&[data-active]":$({borderColor:n.background,color:e.colorScheme==="dark"?e.white:e.black},e.fn.hover({borderColor:n.background}))}):p==="outline"?{borderRadius:f,border:`${u(1)} solid transparent`,[d?i==="left"?"borderRight":"borderLeft":s?"borderTop":"borderBottom"]:"none","&[data-active]":{borderColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3],"&::before":{content:'""',backgroundColor:e.colorScheme==="dark"?e.colors.dark[7]:e.white,position:"absolute",bottom:d?0:s?"unset":u(-1),top:d?0:s?u(-1):"unset",[d?"width":"height"]:u(1),right:d?i==="left"?u(-1):"unset":0,left:d?i==="left"?"unset":u(-1):0}}}:p==="pills"?z($({borderRadius:e.fn.radius(t)},e.fn.hover({backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[0]})),{"&[data-active]":$({backgroundColor:n.background,color:e.white},e.fn.hover({backgroundColor:n.background}))}):{}}var n1=N((e,a,{variant:r})=>({tabLabel:{},tab:$({position:"relative",padding:`${e.spacing.xs} ${e.spacing.md}`,paddingLeft:a.withIcon?e.spacing.xs:void 0,paddingRight:a.withRightSection?e.spacing.xs:void 0,fontSize:e.fontSizes.sm,whiteSpace:"nowrap",zIndex:0,display:"flex",alignItems:"center",justifyContent:a.orientation==="horizontal"?"center":void 0,lineHeight:1,"&:disabled":$({opacity:.5,cursor:"not-allowed"},e.fn.hover({backgroundColor:"transparent"})),"&:focus":{zIndex:1}},l1(e,a,r)),tabRightSection:{display:"flex",justifyContent:"center",alignItems:"center","&:not(:only-child)":{marginLeft:u(7)}},tabIcon:{display:"flex",justifyContent:"center",alignItems:"center","&:not(:only-child)":{marginRight:u(7)}}}));const o1=n1;var s1=Object.defineProperty,i1=Object.defineProperties,c1=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,p0=Object.prototype.hasOwnProperty,f0=Object.prototype.propertyIsEnumerable,Q=(e,a,r)=>a in e?s1(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,d1=(e,a)=>{for(var r in a||(a={}))p0.call(a,r)&&Q(e,r,a[r]);if(x)for(var r of x(a))f0.call(a,r)&&Q(e,r,a[r]);return e},p1=(e,a)=>i1(e,c1(a)),f1=(e,a)=>{var r={};for(var t in e)p0.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&x)for(var t of x(e))a.indexOf(t)<0&&f0.call(e,t)&&(r[t]=e[t]);return r};const u1={},u0=h.forwardRef((e,a)=>{const r=I("TabsTab",u1,e),{value:t,children:s,onKeyDown:i,onClick:p,className:d,icon:n,rightSection:c,color:f}=r,m=f1(r,["value","children","onKeyDown","onClick","className","icon","rightSection","color"]),o=H(),y=!!n,b=!!c,{theme:P,classes:_,cx:A}=o1({withIcon:y||b&&!s,withRightSection:b||y&&!s,orientation:o.orientation,color:f||o.color,radius:o.radius,inverted:o.inverted,placement:o.placement},{name:"Tabs",unstyled:o.unstyled,classNames:o.classNames,styles:o.styles,variant:o.variant}),v=t===o.value,O=o.getPanelId(t),T=o.mountedPanelIds.includes(t)?O:void 0,w=E=>{o.onTabChange(o.allowTabDeactivation&&t===o.value?null:t),p==null||p(E)};return l.createElement(w0,p1(d1({},m),{unstyled:o.unstyled,className:A(_.tab,d),"data-active":v||void 0,ref:a,type:"button",role:"tab",id:o.getTabId(t),"aria-selected":v,tabIndex:v||o.value===null?0:-1,"aria-controls":T,onClick:w,onKeyDown:$0({siblingSelector:'[role="tab"]',parentSelector:'[role="tablist"]',activateOnFocus:o.activateTabWithKeyboard,loop:o.loop,dir:P.dir,orientation:o.orientation,onKeyDown:i})}),n&&l.createElement("span",{className:_.tabIcon},n),s&&l.createElement("span",{className:_.tabLabel},s),c&&l.createElement("span",{className:_.tabRightSection},c))});u0.displayName="@mantine/core/Tab";function m0({defaultValue:e,value:a,onTabChange:r,orientation:t,children:s,loop:i,id:p,activateTabWithKeyboard:d,allowTabDeactivation:n,variant:c,color:f,radius:m,inverted:o,placement:y,keepMounted:b=!0,classNames:P,styles:_,unstyled:A}){const v=T0(p),[O,T]=h.useState([]),[w,E]=A0({value:a,defaultValue:e,finalValue:null,onChange:r});return l.createElement(Z0,{value:{placement:y,value:w,orientation:t,id:v,loop:i,activateTabWithKeyboard:d,getTabId:q(`${v}-tab`,V.value),getPanelId:q(`${v}-panel`,V.value),onTabChange:E,setMountedPanelIds:T,mountedPanelIds:O,allowTabDeactivation:n,variant:c,color:f,radius:m,inverted:o,keepMounted:b,classNames:P,styles:_,unstyled:A}},s)}m0.displayName="@mantine/core/TabsProvider";var m1=N((e,{orientation:a,placement:r})=>({root:{display:a==="vertical"?"flex":void 0,flexDirection:r==="right"?"row-reverse":"row"}}));const b1=m1;var v1=Object.defineProperty,g1=Object.defineProperties,y1=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,b0=Object.prototype.hasOwnProperty,v0=Object.prototype.propertyIsEnumerable,W=(e,a,r)=>a in e?v1(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,_1=(e,a)=>{for(var r in a||(a={}))b0.call(a,r)&&W(e,r,a[r]);if(M)for(var r of M(a))v0.call(a,r)&&W(e,r,a[r]);return e},L1=(e,a)=>g1(e,y1(a)),P1=(e,a)=>{var r={};for(var t in e)b0.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&M)for(var t of M(e))a.indexOf(t)<0&&v0.call(e,t)&&(r[t]=e[t]);return r};const h1={orientation:"horizontal",loop:!0,activateTabWithKeyboard:!0,allowTabDeactivation:!1,unstyled:!1,inverted:!1,variant:"default",placement:"left"},g=h.forwardRef((e,a)=>{const r=I("Tabs",h1,e),{defaultValue:t,value:s,orientation:i,loop:p,activateTabWithKeyboard:d,allowTabDeactivation:n,children:c,id:f,onTabChange:m,variant:o,color:y,className:b,unstyled:P,classNames:_,styles:A,radius:v,inverted:O,keepMounted:T,placement:w}=r,E=P1(r,["defaultValue","value","orientation","loop","activateTabWithKeyboard","allowTabDeactivation","children","id","onTabChange","variant","color","className","unstyled","classNames","styles","radius","inverted","keepMounted","placement"]),{classes:L0,cx:P0}=b1({orientation:i,color:y,radius:v,inverted:O,placement:w},{unstyled:P,name:"Tabs",classNames:_,styles:A,variant:o});return l.createElement(m0,{activateTabWithKeyboard:d,defaultValue:t,orientation:i,onTabChange:m,value:s,id:f,loop:p,allowTabDeactivation:n,color:y,variant:o,radius:v,inverted:O,keepMounted:T,placement:w,classNames:_,styles:A,unstyled:P},l.createElement(R,L1(_1({},E),{className:P0(L0.root,b),id:f,ref:a}),c))});g.List=s0;g.Tab=u0;g.Panel=d0;g.displayName="@mantine/core/Tabs";var A1=Object.defineProperty,O1=Object.defineProperties,w1=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,$1=Object.prototype.hasOwnProperty,T1=Object.prototype.propertyIsEnumerable,J=(e,a,r)=>a in e?A1(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,E1=(e,a)=>{for(var r in a||(a={}))$1.call(a,r)&&J(e,r,a[r]);if(U)for(var r of U(a))T1.call(a,r)&&J(e,r,a[r]);return e},Z1=(e,a)=>O1(e,w1(a));const S1=new Map([["bold",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,20A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81A108,108,0,1,0,128,20Zm0,192a84,84,0,0,1-42.06-11.27,12,12,0,0,0-6-1.62,12.1,12.1,0,0,0-3.8.62l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.81A84,84,0,1,1,128,212Z"}))],["duotone",l.createElement(l.Fragment,null,l.createElement("path",{d:"M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",opacity:"0.2"}),l.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["fill",l.createElement(l.Fragment,null,l.createElement("path",{d:"M232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z"}))],["light",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z"}))],["regular",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["thin",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z"}))]]),g0=h.forwardRef((e,a)=>l.createElement(C,Z1(E1({ref:a},e),{weights:S1})));g0.displayName="ChatCircle";var j1=Object.defineProperty,x1=Object.defineProperties,M1=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,I1=Object.prototype.hasOwnProperty,N1=Object.prototype.propertyIsEnumerable,Y=(e,a,r)=>a in e?j1(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,V1=(e,a)=>{for(var r in a||(a={}))I1.call(a,r)&&Y(e,r,a[r]);if(X)for(var r of X(a))N1.call(a,r)&&Y(e,r,a[r]);return e},C1=(e,a)=>x1(e,M1(a));const R1=new Map([["bold",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm92-27.21v-1.58l14-17.51a12,12,0,0,0,2.23-10.59A111.75,111.75,0,0,0,225,71.89,12,12,0,0,0,215.89,66L193.61,63.5l-1.11-1.11L190,40.1A12,12,0,0,0,184.11,31a111.67,111.67,0,0,0-27.23-11.27A12,12,0,0,0,146.3,22L128.79,36h-1.58L109.7,22a12,12,0,0,0-10.59-2.23A111.75,111.75,0,0,0,71.89,31.05,12,12,0,0,0,66,40.11L63.5,62.39,62.39,63.5,40.1,66A12,12,0,0,0,31,71.89,111.67,111.67,0,0,0,19.77,99.12,12,12,0,0,0,22,109.7l14,17.51v1.58L22,146.3a12,12,0,0,0-2.23,10.59,111.75,111.75,0,0,0,11.29,27.22A12,12,0,0,0,40.11,190l22.28,2.48,1.11,1.11L66,215.9A12,12,0,0,0,71.89,225a111.67,111.67,0,0,0,27.23,11.27A12,12,0,0,0,109.7,234l17.51-14h1.58l17.51,14a12,12,0,0,0,10.59,2.23A111.75,111.75,0,0,0,184.11,225a12,12,0,0,0,5.91-9.06l2.48-22.28,1.11-1.11L215.9,190a12,12,0,0,0,9.06-5.91,111.67,111.67,0,0,0,11.27-27.23A12,12,0,0,0,234,146.3Zm-24.12-4.89a70.1,70.1,0,0,1,0,8.2,12,12,0,0,0,2.61,8.22l12.84,16.05A86.47,86.47,0,0,1,207,166.86l-20.43,2.27a12,12,0,0,0-7.65,4,69,69,0,0,1-5.8,5.8,12,12,0,0,0-4,7.65L166.86,207a86.47,86.47,0,0,1-10.49,4.35l-16.05-12.85a12,12,0,0,0-7.5-2.62c-.24,0-.48,0-.72,0a70.1,70.1,0,0,1-8.2,0,12.06,12.06,0,0,0-8.22,2.6L99.63,211.33A86.47,86.47,0,0,1,89.14,207l-2.27-20.43a12,12,0,0,0-4-7.65,69,69,0,0,1-5.8-5.8,12,12,0,0,0-7.65-4L49,166.86a86.47,86.47,0,0,1-4.35-10.49l12.84-16.05a12,12,0,0,0,2.61-8.22,70.1,70.1,0,0,1,0-8.2,12,12,0,0,0-2.61-8.22L44.67,99.63A86.47,86.47,0,0,1,49,89.14l20.43-2.27a12,12,0,0,0,7.65-4,69,69,0,0,1,5.8-5.8,12,12,0,0,0,4-7.65L89.14,49a86.47,86.47,0,0,1,10.49-4.35l16.05,12.85a12.06,12.06,0,0,0,8.22,2.6,70.1,70.1,0,0,1,8.2,0,12,12,0,0,0,8.22-2.6l16.05-12.85A86.47,86.47,0,0,1,166.86,49l2.27,20.43a12,12,0,0,0,4,7.65,69,69,0,0,1,5.8,5.8,12,12,0,0,0,7.65,4L207,89.14a86.47,86.47,0,0,1,4.35,10.49l-12.84,16.05A12,12,0,0,0,195.88,123.9Z"}))],["duotone",l.createElement(l.Fragment,null,l.createElement("path",{d:"M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),l.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8.06,8.06,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8.06,8.06,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"}))],["fill",l.createElement(l.Fragment,null,l.createElement("path",{d:"M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM214,130.84c.06-1.89.06-3.79,0-5.68L229.33,106a6,6,0,0,0,1.11-5.29A105.34,105.34,0,0,0,219.76,74.9a6,6,0,0,0-4.53-3l-24.45-2.71q-1.93-2.07-4-4l-2.72-24.46a6,6,0,0,0-3-4.53,105.65,105.65,0,0,0-25.77-10.66A6,6,0,0,0,150,26.68l-19.2,15.37c-1.89-.06-3.79-.06-5.68,0L106,26.67a6,6,0,0,0-5.29-1.11A105.34,105.34,0,0,0,74.9,36.24a6,6,0,0,0-3,4.53L69.23,65.22q-2.07,1.94-4,4L40.76,72a6,6,0,0,0-4.53,3,105.65,105.65,0,0,0-10.66,25.77A6,6,0,0,0,26.68,106l15.37,19.2c-.06,1.89-.06,3.79,0,5.68L26.67,150.05a6,6,0,0,0-1.11,5.29A105.34,105.34,0,0,0,36.24,181.1a6,6,0,0,0,4.53,3l24.45,2.71q1.94,2.07,4,4L72,215.24a6,6,0,0,0,3,4.53,105.65,105.65,0,0,0,25.77,10.66,6,6,0,0,0,5.29-1.11L125.16,214c1.89.06,3.79.06,5.68,0l19.21,15.38a6,6,0,0,0,3.75,1.31,6.2,6.2,0,0,0,1.54-.2,105.34,105.34,0,0,0,25.76-10.68,6,6,0,0,0,3-4.53l2.71-24.45q2.07-1.93,4-4l24.46-2.72a6,6,0,0,0,4.53-3,105.49,105.49,0,0,0,10.66-25.77,6,6,0,0,0-1.11-5.29Zm-3.1,41.63-23.64,2.63a6,6,0,0,0-3.82,2,75.14,75.14,0,0,1-6.31,6.31,6,6,0,0,0-2,3.82l-2.63,23.63A94.28,94.28,0,0,1,155.14,218l-18.57-14.86a6,6,0,0,0-3.75-1.31h-.36a78.07,78.07,0,0,1-8.92,0,6,6,0,0,0-4.11,1.3L100.87,218a94.13,94.13,0,0,1-17.34-7.17L80.9,187.21a6,6,0,0,0-2-3.82,75.14,75.14,0,0,1-6.31-6.31,6,6,0,0,0-3.82-2l-23.63-2.63A94.28,94.28,0,0,1,38,155.14l14.86-18.57a6,6,0,0,0,1.3-4.11,78.07,78.07,0,0,1,0-8.92,6,6,0,0,0-1.3-4.11L38,100.87a94.13,94.13,0,0,1,7.17-17.34L68.79,80.9a6,6,0,0,0,3.82-2,75.14,75.14,0,0,1,6.31-6.31,6,6,0,0,0,2-3.82l2.63-23.63A94.28,94.28,0,0,1,100.86,38l18.57,14.86a6,6,0,0,0,4.11,1.3,78.07,78.07,0,0,1,8.92,0,6,6,0,0,0,4.11-1.3L155.13,38a94.13,94.13,0,0,1,17.34,7.17l2.63,23.64a6,6,0,0,0,2,3.82,75.14,75.14,0,0,1,6.31,6.31,6,6,0,0,0,3.82,2l23.63,2.63A94.28,94.28,0,0,1,218,100.86l-14.86,18.57a6,6,0,0,0-1.3,4.11,78.07,78.07,0,0,1,0,8.92,6,6,0,0,0,1.3,4.11L218,155.13A94.13,94.13,0,0,1,210.85,172.47Z"}))],["regular",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"}))],["thin",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm83.93-32.49q.13-3.51,0-7l15.83-19.79a4,4,0,0,0,.75-3.53A103.64,103.64,0,0,0,218,75.9a4,4,0,0,0-3-2l-25.19-2.8c-1.58-1.71-3.24-3.37-4.95-4.95L182.07,41a4,4,0,0,0-2-3A104,104,0,0,0,154.82,27.5a4,4,0,0,0-3.53.74L131.51,44.07q-3.51-.14-7,0L104.7,28.24a4,4,0,0,0-3.53-.75A103.64,103.64,0,0,0,75.9,38a4,4,0,0,0-2,3l-2.8,25.19c-1.71,1.58-3.37,3.24-4.95,4.95L41,73.93a4,4,0,0,0-3,2A104,104,0,0,0,27.5,101.18a4,4,0,0,0,.74,3.53l15.83,19.78q-.14,3.51,0,7L28.24,151.3a4,4,0,0,0-.75,3.53A103.64,103.64,0,0,0,38,180.1a4,4,0,0,0,3,2l25.19,2.8c1.58,1.71,3.24,3.37,4.95,4.95l2.8,25.2a4,4,0,0,0,2,3,104,104,0,0,0,25.28,10.46,4,4,0,0,0,3.53-.74l19.78-15.83q3.51.13,7,0l19.79,15.83a4,4,0,0,0,2.5.88,4,4,0,0,0,1-.13A103.64,103.64,0,0,0,180.1,218a4,4,0,0,0,2-3l2.8-25.19c1.71-1.58,3.37-3.24,4.95-4.95l25.2-2.8a4,4,0,0,0,3-2,104,104,0,0,0,10.46-25.28,4,4,0,0,0-.74-3.53Zm.17,42.83-24.67,2.74a4,4,0,0,0-2.55,1.32,76.2,76.2,0,0,1-6.48,6.48,4,4,0,0,0-1.32,2.55l-2.74,24.66a95.45,95.45,0,0,1-19.64,8.15l-19.38-15.51a4,4,0,0,0-2.5-.87h-.24a73.67,73.67,0,0,1-9.16,0,4,4,0,0,0-2.74.87l-19.37,15.5a95.33,95.33,0,0,1-19.65-8.13l-2.74-24.67a4,4,0,0,0-1.32-2.55,76.2,76.2,0,0,1-6.48-6.48,4,4,0,0,0-2.55-1.32l-24.66-2.74a95.45,95.45,0,0,1-8.15-19.64l15.51-19.38a4,4,0,0,0,.87-2.74,77.76,77.76,0,0,1,0-9.16,4,4,0,0,0-.87-2.74l-15.5-19.37A95.33,95.33,0,0,1,43.9,81.66l24.67-2.74a4,4,0,0,0,2.55-1.32,76.2,76.2,0,0,1,6.48-6.48,4,4,0,0,0,1.32-2.55l2.74-24.66a95.45,95.45,0,0,1,19.64-8.15l19.38,15.51a4,4,0,0,0,2.74.87,73.67,73.67,0,0,1,9.16,0,4,4,0,0,0,2.74-.87l19.37-15.5a95.33,95.33,0,0,1,19.65,8.13l2.74,24.67a4,4,0,0,0,1.32,2.55,76.2,76.2,0,0,1,6.48,6.48,4,4,0,0,0,2.55,1.32l24.66,2.74a95.45,95.45,0,0,1,8.15,19.64l-15.51,19.38a4,4,0,0,0-.87,2.74,77.76,77.76,0,0,1,0,9.16,4,4,0,0,0,.87,2.74l15.5,19.37A95.33,95.33,0,0,1,212.1,174.34Z"}))]]),y0=h.forwardRef((e,a)=>l.createElement(C,C1(V1({ref:a},e),{weights:R1})));y0.displayName="Gear";var H1=Object.defineProperty,q1=Object.defineProperties,D1=Object.getOwnPropertyDescriptors,e0=Object.getOwnPropertySymbols,k1=Object.prototype.hasOwnProperty,F1=Object.prototype.propertyIsEnumerable,a0=(e,a,r)=>a in e?H1(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,B1=(e,a)=>{for(var r in a||(a={}))k1.call(a,r)&&a0(e,r,a[r]);if(e0)for(var r of e0(a))F1.call(a,r)&&a0(e,r,a[r]);return e},G1=(e,a)=>q1(e,D1(a));const K1=new Map([["bold",l.createElement(l.Fragment,null,l.createElement("path",{d:"M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,24v63.72L186.14,97.86a20,20,0,0,0-28.28,0L52,203.72V52ZM85.66,204,172,117.66l32,32V204ZM76,96a20,20,0,1,1,20,20A20,20,0,0,1,76,96Z"}))],["duotone",l.createElement(l.Fragment,null,l.createElement("path",{d:"M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h8.69L166.34,106.34a8,8,0,0,1,11.32,0L216,144.69V48A8,8,0,0,0,208,40ZM96,112a16,16,0,1,1,16-16A16,16,0,0,1,96,112Z",opacity:"0.2"}),l.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM208,208H76l96-96,36,36v60ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,96,88Z"}))],["fill",l.createElement(l.Fragment,null,l.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM80,96a16,16,0,1,1,16,16A16,16,0,0,1,80,96Z"}))],["light",l.createElement(l.Fragment,null,l.createElement("path",{d:"M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM46,208V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2v82.2l-28.1-28.1a14,14,0,0,0-19.8,0L54.2,210H48A2,2,0,0,1,46,208Zm162,2H71.17l99.41-99.41a2,2,0,0,1,2.83,0L210,147.17V208A2,2,0,0,1,208,210ZM96,118A22,22,0,1,0,74,96,22,22,0,0,0,96,118Zm0-32A10,10,0,1,1,86,96,10,10,0,0,1,96,86Z"}))],["regular",l.createElement(l.Fragment,null,l.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM208,208H76l96-96,36,36v60ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,96,88Z"}))],["thin",l.createElement(l.Fragment,null,l.createElement("path",{d:"M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM44,208V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4v87l-31.51-31.52a12,12,0,0,0-17,0L55,212H48A4,4,0,0,1,44,208Zm164,4H66.34L169.17,109.17a4,4,0,0,1,5.66,0L212,146.34V208A4,4,0,0,1,208,212ZM96,116A20,20,0,1,0,76,96,20,20,0,0,0,96,116Zm0-32A12,12,0,1,1,84,96,12,12,0,0,1,96,84Z"}))]]),_0=h.forwardRef((e,a)=>l.createElement(C,G1(B1({ref:a},e),{weights:K1})));_0.displayName="ImageSquare";const ne={title:"Components/Tabs",parameters:{layout:"centered"}},Z={render:()=>L.jsxs(g,{defaultValue:"gallery",children:[L.jsxs(g.List,{children:[L.jsx(g.Tab,{value:"gallery",icon:L.jsx(_0,{weight:"fill"}),children:"Gallery"}),L.jsx(g.Tab,{value:"messages",icon:L.jsx(g0,{weight:"fill"}),children:"Messages"}),L.jsx(g.Tab,{value:"settings",icon:L.jsx(y0,{weight:"fill"}),children:"Settings"})]}),L.jsx(g.Panel,{value:"gallery",pt:"xs",children:"Gallery tab content"}),L.jsx(g.Panel,{value:"messages",pt:"xs",children:"Messages tab content"}),L.jsx(g.Panel,{value:"settings",pt:"xs",children:"Settings tab content"})]})};var r0,t0,l0;Z.parameters={...Z.parameters,docs:{...(r0=Z.parameters)==null?void 0:r0.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" icon={<ImageSquare weight="fill" />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" icon={<ChatCircle weight="fill" />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" icon={<Gear weight="fill" />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
}`,...(l0=(t0=Z.parameters)==null?void 0:t0.docs)==null?void 0:l0.source}}};const oe=["Default"];export{Z as Default,oe as __namedExportsOrder,ne as default};
//# sourceMappingURL=Tabs.stories-5a4caeff.js.map