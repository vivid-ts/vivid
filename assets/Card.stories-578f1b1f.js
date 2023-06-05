import{u as ue,r as m,j as l}from"./MantineProvider-e0f37d01.js";import{R as t,r as d}from"./index-8db94870.js";import{P as x}from"./IconBase.es-c4cd5f5b.js";import{C as c,a as W}from"./index-5ab1dd18.js";import{c as ge}from"./create-styles-ec211158.js";import{B as be}from"./Box-2e9e8fb7.js";import{T as n}from"./Text-cbe185d4.js";import{u as xe}from"./use-did-update-a71ce98f.js";import{B as Ae}from"./Button-3f16f0eb.js";import{A as U}from"./ActionIcon-75e5608a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-58d3fd43.js";import"./themeColors-666091d8.js";import"./ColorSchemeProvider-0d345655.js";import"./Loader-056beee8.js";import"./UnstyledButton-73f6208e.js";var we=Object.defineProperty,M=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,E=(a,e,r)=>e in a?we(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,Ze=(a,e)=>{for(var r in e||(e={}))ve.call(e,r)&&E(a,r,e[r]);if(M)for(var r of M(e))ye.call(e,r)&&E(a,r,e[r]);return a};function Me(a){return t.createElement("svg",Ze({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),t.createElement("path",{d:"M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var Ee=Object.defineProperty,Oe=Object.defineProperties,je=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,j=(a,e,r)=>e in a?Ee(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,H=(a,e)=>{for(var r in e||(e={}))He.call(e,r)&&j(a,r,e[r]);if(O)for(var r of O(e))Pe.call(e,r)&&j(a,r,e[r]);return a},P=(a,e)=>Oe(a,je(e)),_e=ge((a,{radius:e})=>({root:{},imageWrapper:{position:"relative"},figure:{margin:0},image:P(H({},a.fn.fontStyles()),{display:"block",width:"100%",height:"100%",border:0,borderRadius:a.fn.radius(e)}),caption:{color:a.colorScheme==="dark"?a.colors.dark[2]:a.colors.gray[7],marginTop:a.spacing.xs},placeholder:P(H({},a.fn.cover()),{display:"flex",alignItems:"center",justifyContent:"center",color:a.colorScheme==="dark"?a.colors.dark[2]:a.colors.gray[6],backgroundColor:a.colorScheme==="dark"?a.colors.dark[8]:a.colors.gray[0],borderRadius:a.fn.radius(e)})}));const Ve=_e;var Ne=Object.defineProperty,Ce=Object.defineProperties,Se=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,_=(a,e,r)=>e in a?Ne(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,f=(a,e)=>{for(var r in e||(e={}))q.call(e,r)&&_(a,r,e[r]);if(b)for(var r of b(e))Y.call(e,r)&&_(a,r,e[r]);return a},$e=(a,e)=>Ce(a,Se(e)),ze=(a,e)=>{var r={};for(var s in a)q.call(a,s)&&e.indexOf(s)<0&&(r[s]=a[s]);if(a!=null&&b)for(var s of b(a))e.indexOf(s)<0&&Y.call(a,s)&&(r[s]=a[s]);return r};const Le={fit:"cover",width:"100%",height:"auto",radius:0},J=d.forwardRef((a,e)=>{const r=ue("Image",Le,a),{className:s,alt:A,src:p,fit:ee,width:w,height:ae,radius:re,imageProps:o,withPlaceholder:te,placeholder:le,imageRef:se,classNames:oe,styles:ne,caption:v,unstyled:ie,style:ce,variant:me}=r,de=ze(r,["className","alt","src","fit","width","height","radius","imageProps","withPlaceholder","placeholder","imageRef","classNames","styles","caption","unstyled","style","variant"]),{classes:i,cx:y}=Ve({radius:re},{classNames:oe,styles:ne,unstyled:ie,name:"Image",variant:me}),[pe,Z]=d.useState(!p),fe=te&&pe;return xe(()=>{Z(!p)},[p]),t.createElement(be,f({className:y(i.root,s),style:f({width:m(w)},ce),ref:e},de),t.createElement("figure",{className:i.figure},t.createElement("div",{className:i.imageWrapper},t.createElement("img",$e(f({src:p,alt:A,ref:se},o),{className:y(i.image,o==null?void 0:o.className),onError:he=>{Z(!0),typeof(o==null?void 0:o.onError)=="function"&&o.onError(he)},style:f({objectFit:ee,width:m(w),height:m(ae)},o==null?void 0:o.style)})),fe&&t.createElement("div",{className:i.placeholder,title:A},le||t.createElement("div",null,t.createElement(Me,{width:m(40),height:m(40)})))),!!v&&t.createElement(n,{component:"figcaption",size:"sm",align:"center",className:i.caption},v)))});J.displayName="@mantine/core/Image";var Te=Object.defineProperty,Ie=Object.defineProperties,Fe=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,N=(a,e,r)=>e in a?Te(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,Re=(a,e)=>{for(var r in e||(e={}))De.call(e,r)&&N(a,r,e[r]);if(V)for(var r of V(e))ke.call(e,r)&&N(a,r,e[r]);return a},Be=(a,e)=>Ie(a,Fe(e));const Ge=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M200,112H56l72-72Z",opacity:"0.2"}),t.createElement("path",{d:"M205.66,106.34l-72-72a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,120h64v96a8,8,0,0,0,16,0V120h64a8,8,0,0,0,5.66-13.66ZM75.31,104,128,51.31,180.69,104Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M207.39,115.06A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,115.06Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M204.24,116.24a6,6,0,0,1-8.48,0L134,54.49V216a6,6,0,0,1-12,0V54.49L60.24,116.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0l72,72A6,6,0,0,1,204.24,116.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M202.83,114.83a4,4,0,0,1-5.66,0L132,49.66V216a4,4,0,0,1-8,0V49.66L58.83,114.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0l72,72A4,4,0,0,1,202.83,114.83Z"}))]]),K=d.forwardRef((a,e)=>t.createElement(x,Be(Re({ref:e},a),{weights:Ge})));K.displayName="ArrowUp";var We=Object.defineProperty,Ue=Object.defineProperties,qe=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,S=(a,e,r)=>e in a?We(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,Ke=(a,e)=>{for(var r in e||(e={}))Ye.call(e,r)&&S(a,r,e[r]);if(C)for(var r of C(e))Je.call(e,r)&&S(a,r,e[r]);return a},Qe=(a,e)=>Ue(a,qe(e));const Xe=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M240,52H16A12,12,0,0,0,4,64V192a12,12,0,0,0,12,12H240a12,12,0,0,0,12-12V64A12,12,0,0,0,240,52ZM181.21,180H74.79A60.18,60.18,0,0,0,28,133.21V122.79A60.18,60.18,0,0,0,74.79,76H181.21A60.18,60.18,0,0,0,228,122.79v10.42A60.18,60.18,0,0,0,181.21,180ZM228,97.94A36.23,36.23,0,0,1,206.06,76H228ZM49.94,76A36.23,36.23,0,0,1,28,97.94V76ZM28,158.06A36.23,36.23,0,0,1,49.94,180H28ZM206.06,180A36.23,36.23,0,0,1,228,158.06V180ZM128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,56a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M160,128a32,32,0,1,1-32-32A32,32,0,0,1,160,128Zm40-64a48.85,48.85,0,0,0,40,40V64Zm0,128h40V152A48.85,48.85,0,0,0,200,192ZM16,152v40H56A48.85,48.85,0,0,0,16,152Zm0-48A48.85,48.85,0,0,0,56,64H16Z",opacity:"0.2"}),t.createElement("path",{d:"M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM24,72H45.37A40.81,40.81,0,0,1,24,93.37Zm0,112V162.63A40.81,40.81,0,0,1,45.37,184Zm208,0H210.63A40.81,40.81,0,0,1,232,162.63Zm0-38.35A56.78,56.78,0,0,0,193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35Zm0-52.28A40.81,40.81,0,0,1,210.63,72H232Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M168,128a40,40,0,1,1-40-40A40,40,0,0,1,168,128Zm80-64V192a8,8,0,0,1-8,8H16a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H240A8,8,0,0,1,248,64Zm-16,46.35A56.78,56.78,0,0,1,193.65,72H62.35A56.78,56.78,0,0,1,24,110.35v35.3A56.78,56.78,0,0,1,62.35,184h131.3A56.78,56.78,0,0,1,232,145.65Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,166a38,38,0,1,0-38-38A38,38,0,0,0,128,166Zm0-64a26,26,0,1,1-26,26A26,26,0,0,1,128,102ZM240,58H16a6,6,0,0,0-6,6V192a6,6,0,0,0,6,6H240a6,6,0,0,0,6-6V64A6,6,0,0,0,240,58ZM22,108.82A54.73,54.73,0,0,0,60.82,70H195.18A54.73,54.73,0,0,0,234,108.82v38.36A54.73,54.73,0,0,0,195.18,186H60.82A54.73,54.73,0,0,0,22,147.18ZM234,96.29A42.8,42.8,0,0,1,207.71,70H234ZM48.29,70A42.8,42.8,0,0,1,22,96.29V70ZM22,159.71A42.8,42.8,0,0,1,48.29,186H22ZM207.71,186A42.8,42.8,0,0,1,234,159.71V186Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,164a36,36,0,1,0-36-36A36,36,0,0,0,128,164Zm0-64a28,28,0,1,1-28,28A28,28,0,0,1,128,100ZM240,60H16a4,4,0,0,0-4,4V192a4,4,0,0,0,4,4H240a4,4,0,0,0,4-4V64A4,4,0,0,0,240,60ZM20,107.26A52.75,52.75,0,0,0,59.26,68H196.74A52.75,52.75,0,0,0,236,107.26v41.48A52.75,52.75,0,0,0,196.74,188H59.26A52.75,52.75,0,0,0,20,148.74ZM236,99a44.8,44.8,0,0,1-31-31h31ZM51,68A44.8,44.8,0,0,1,20,99V68ZM20,157a44.8,44.8,0,0,1,31,31H20Zm185,31a44.8,44.8,0,0,1,31-31v31Z"}))]]),Q=d.forwardRef((a,e)=>t.createElement(x,Qe(Ke({ref:e},a),{weights:Xe})));Q.displayName="Money";var e0=Object.defineProperty,a0=Object.defineProperties,r0=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,t0=Object.prototype.hasOwnProperty,l0=Object.prototype.propertyIsEnumerable,z=(a,e,r)=>e in a?e0(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,s0=(a,e)=>{for(var r in e||(e={}))t0.call(e,r)&&z(a,r,e[r]);if($)for(var r of $(e))l0.call(e,r)&&z(a,r,e[r]);return a},o0=(a,e)=>a0(a,r0(e));const n0=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M246.15,133.18,146.83,33.86A19.85,19.85,0,0,0,132.69,28H40A12,12,0,0,0,28,40v92.69a19.85,19.85,0,0,0,5.86,14.14l99.32,99.32a20,20,0,0,0,28.28,0l84.69-84.69A20,20,0,0,0,246.15,133.18Zm-98.83,93.17L52,131V52h79l95.32,95.32ZM100,84A16,16,0,1,1,84,68,16,16,0,0,1,100,84Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M237.66,153,153,237.66a8,8,0,0,1-11.31,0L42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32A8,8,0,0,1,237.66,153Z",opacity:"0.2"}),t.createElement("path",{d:"M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63ZM84,96A12,12,0,1,1,96,84,12,12,0,0,1,84,96Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M241.91,137.42,142.59,38.1a13.94,13.94,0,0,0-9.9-4.1H40a6,6,0,0,0-6,6v92.69a13.94,13.94,0,0,0,4.1,9.9l99.32,99.32a14,14,0,0,0,19.8,0l84.69-84.69A14,14,0,0,0,241.91,137.42Zm-8.49,11.31-84.69,84.69a2,2,0,0,1-2.83,0L46.59,134.1a2,2,0,0,1-.59-1.41V46h86.69a2,2,0,0,1,1.41.59l99.32,99.31A2,2,0,0,1,233.42,148.73ZM94,84A10,10,0,1,1,84,74,10,10,0,0,1,94,84Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M240.49,138.83,141.17,39.51A11.93,11.93,0,0,0,132.69,36H40a4,4,0,0,0-4,4v92.69a11.93,11.93,0,0,0,3.51,8.48l99.32,99.32a12,12,0,0,0,17,0l84.69-84.69a12,12,0,0,0,0-17Zm-5.66,11.31-84.69,84.69a4,4,0,0,1-5.65,0L45.17,135.51A4,4,0,0,1,44,132.69V44h88.69a4,4,0,0,1,2.82,1.17l99.32,99.32A4,4,0,0,1,234.83,150.14ZM92,84a8,8,0,1,1-8-8A8,8,0,0,1,92,84Z"}))]]),X=d.forwardRef((a,e)=>t.createElement(x,o0(s0({ref:e},a),{weights:n0})));X.displayName="Tag";const E0={title:"Components/Card",parameters:{layout:"centered"}},h={render:()=>l.jsxs(c,{children:[l.jsx(c.Section,{className:"mb-4",children:l.jsx(J,{src:"https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",height:160,alt:"Norway"})}),l.jsx(n,{size:"lg",className:"font-semibold",children:"Hello World!"}),l.jsx(n,{size:"sm",className:"mb-4",children:"This is very cool example (I think...)"}),l.jsx(Ae,{children:"Thing"})]})},u={render:()=>l.jsxs(c,{children:[l.jsxs("section",{children:[l.jsx(U,{color:"green",radius:"xl",className:"mb-2",children:l.jsx(Q,{size:20,weight:"fill"})}),l.jsx(n,{size:"xl",className:"font-bold dark:text-zinc-200",children:"$ 12k"}),l.jsx(n,{size:"sm",className:"mb-4",children:"Revenue generated"})]}),l.jsx(c.Section,{children:l.jsx(W,{className:"-mt-20",width:"100%",height:"100%",series:[{name:"Sales",data:[30,20,50,40]}],chart:{animations:{enabled:!1},zoom:{enabled:!1}},type:"area",fullSize:!0,grid:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},tooltip:{enabled:!1},labels:{show:!1}},yaxis:{tooltip:{enabled:!1},labels:{show:!1}},tooltip:{enabled:!1}})})]})},g={render:()=>l.jsxs(c,{children:[l.jsxs("section",{className:"flex gap-4 items-center mb-2",children:[l.jsx(U,{color:"orange",radius:"xl",children:l.jsx(X,{size:20,weight:"fill"})}),l.jsxs("section",{children:[l.jsx(n,{size:"xl",className:"font-bold dark:text-zinc-200",children:"Daily sales"}),l.jsxs("section",{className:"text-green-500 dark:text-green-400 flex items-center gap-1",children:[l.jsx(K,{weight:"fill"}),l.jsx(n,{size:"sm",className:"font-medium",children:"+50%"})]})]})]}),l.jsx(c.Section,{children:l.jsx(W,{className:"-mt-16",width:"100%",height:"100%",series:[{name:"Sales",data:[30,20,50,40]}],chart:{animations:{enabled:!1},zoom:{enabled:!1}},type:"area",fullSize:!0,grid:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},tooltip:{enabled:!1},labels:{show:!1}},yaxis:{tooltip:{enabled:!1},labels:{show:!1}},tooltip:{enabled:!1}})})]})};var L,T,I;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Section className="mb-4">
        <Image src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80" height={160} alt="Norway" />
      </Card.Section>

      <Text size="lg" className="font-semibold">
        Hello World!
      </Text>

      <Text size="sm" className="mb-4">
        This is very cool example (I think...)
      </Text>

      <Button>Thing</Button>
    </Card>
}`,...(I=(T=h.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var F,D,k;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Card>
      <section>
        <ActionIcon color="green" radius="xl" className="mb-2">
          <Money size={20} weight="fill" />
        </ActionIcon>

        <Text size="xl" className="font-bold dark:text-zinc-200">
          $ 12k
        </Text>

        <Text size="sm" className="mb-4">
          Revenue generated
        </Text>
      </section>

      <Card.Section>
        <Chart className="-mt-20" width="100%" height="100%" series={[{
        name: 'Sales',
        data: [30, 20, 50, 40]
      }]} chart={{
        animations: {
          enabled: false
        },
        zoom: {
          enabled: false
        }
      }} type="area" fullSize grid={{
        show: false
      }} xaxis={{
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: false
        },
        labels: {
          show: false
        }
      }} yaxis={{
        tooltip: {
          enabled: false
        },
        labels: {
          show: false
        }
      }} tooltip={{
        enabled: false
      }} />
      </Card.Section>
    </Card>
}`,...(k=(D=u.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var R,B,G;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Card>
      <section className="flex gap-4 items-center mb-2">
        <ActionIcon color="orange" radius="xl">
          <Tag size={20} weight="fill" />
        </ActionIcon>

        <section>
          <Text size="xl" className="font-bold dark:text-zinc-200">
            Daily sales
          </Text>

          <section className="text-green-500 dark:text-green-400 flex items-center gap-1">
            <ArrowUp weight="fill" />
            <Text size="sm" className="font-medium">
              +50%
            </Text>
          </section>
        </section>
      </section>

      <Card.Section>
        <Chart className="-mt-16" width="100%" height="100%" series={[{
        name: 'Sales',
        data: [30, 20, 50, 40]
      }]} chart={{
        animations: {
          enabled: false
        },
        zoom: {
          enabled: false
        }
      }} type="area" fullSize grid={{
        show: false
      }} xaxis={{
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: false
        },
        labels: {
          show: false
        }
      }} yaxis={{
        tooltip: {
          enabled: false
        },
        labels: {
          show: false
        }
      }} tooltip={{
        enabled: false
      }} />
      </Card.Section>
    </Card>
}`,...(G=(B=g.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const O0=["Default","Graph","Stats"];export{h as Default,u as Graph,g as Stats,O0 as __namedExportsOrder,E0 as default};
//# sourceMappingURL=Card.stories-578f1b1f.js.map
