import{u as I,j as t}from"./MantineProvider-e0f37d01.js";import{v as k}from"./House.es-a837ce33.js";import{L as C}from"./index-4c5bbf61.js";import{e as z,f as D,g as H}from"./index-49953746.js";import{r as L,R as o}from"./index-8db94870.js";import{c as T}from"./create-styles-ec211158.js";import{T as F}from"./Text-cbe185d4.js";import{B as M}from"./Box-2e9e8fb7.js";import{i as $}from"./is-element-668ce016.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./IconBase.es-c4cd5f5b.js";import"./_commonjsHelpers-042e6b4d.js";var A=T(r=>({root:{display:"flex",alignItems:"center"},breadcrumb:{lineHeight:1,whiteSpace:"nowrap",WebkitTapHighlightColor:"transparent"},separator:{marginLeft:r.spacing.xs,marginRight:r.spacing.xs,color:r.colorScheme==="dark"?r.colors.dark[2]:r.colors.gray[7],lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center"}}));const V=A;var W=Object.defineProperty,c=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,f=(r,e,a)=>e in r?W(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,q=(r,e)=>{for(var a in e||(e={}))b.call(e,a)&&f(r,a,e[a]);if(c)for(var a of c(e))x.call(e,a)&&f(r,a,e[a]);return r},G=(r,e)=>{var a={};for(var s in r)b.call(r,s)&&e.indexOf(s)<0&&(a[s]=r[s]);if(r!=null&&c)for(var s of c(r))e.indexOf(s)<0&&x.call(r,s)&&(a[s]=r[s]);return a};const J={separator:"/"},v=L.forwardRef((r,e)=>{const a=I("Breadcrumbs",J,r),{className:s,children:_,separator:j,classNames:N,styles:E,unstyled:O,variant:P}=a,w=G(a,["className","children","separator","classNames","styles","unstyled","variant"]),{classes:n,cx:d}=V(null,{classNames:N,styles:E,unstyled:O,name:"Breadcrumbs",variant:P}),R=o.Children.toArray(_).reduce((p,i,l,B)=>{var u;const S=$(i)?o.cloneElement(i,{className:d(n.breadcrumb,(u=i.props)==null?void 0:u.className),key:l}):o.createElement("div",{className:n.breadcrumb,key:l},i);return p.push(S),l!==B.length-1&&p.push(o.createElement(F,{size:"sm",className:n.separator,key:`separator-${l}`},j)),p},[]);return o.createElement(M,q({className:d(n.root,s),ref:e},w),R)});v.displayName="@mantine/core/Breadcrumbs";const K=()=>{const r=z();return t.jsx(v,{children:r.map(e=>{const a=()=>e.id==="0"?t.jsx("section",{className:"bg-base-500 p-2 rounded-full",children:t.jsx(k,{weight:"fill",size:20})}):t.jsx("p",{className:"capitalize",children:e.id});return t.jsx(C,{to:e.pathname,children:t.jsx(a,{})},e.pathname)})})},lr={title:"Components/Breadcrumb",parameters:{layout:"centered"}},Q=D([{path:"/",element:t.jsx(K,{}),children:[{id:"dashboard",path:"/dashboard",element:t.jsx(t.Fragment,{}),children:[{id:"user",path:"user",element:t.jsx(t.Fragment,{})}]}]}],{initialEntries:["/","/dashboard/user"],initialIndex:1}),m={render:()=>t.jsx(H,{router:Q})};var h,g,y;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <RouterProvider router={router} />
}`,...(y=(g=m.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const mr=["Default"];export{m as Default,mr as __namedExportsOrder,lr as default};
//# sourceMappingURL=Breadcrumb.stories-4691f6c4.js.map