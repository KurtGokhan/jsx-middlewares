"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[626],{2317:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>k,frontMatter:()=>x,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"examples/with-click-count","title":"Button Click Counter","description":"This example shows you how to implement state with JSX middlewares.","source":"@site/docs/examples/with-click-count.mdx","sourceDirName":"examples","slug":"/examples/with-click-count","permalink":"/jsx-middlewares/examples/with-click-count","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"If Directive","permalink":"/jsx-middlewares/examples/if-directive"},"next":{"title":"Tooltip","permalink":"/jsx-middlewares/examples/tooltip"}}');var s=t(2540),i=t(3023),o=t(685),c=t(3696);const l=(0,t(7515).U)(),{jsx:d,jsxDEV:a,jsxs:u}=l;function p(e){let{render:n,props:t,type:r}=e;const[s,i]=(0,c.useState)(0),o=t.onClick;return t={...t,onClick:e=>{i(s+1),o?.(e)},children:[t.children,` - Clicked ${s} times`]},n(r,t)}function h(){return d("button",{$withClickCount:!0,children:"Click me"})}function w(){return d(o.A,{children:d(h,{})})}l.addMiddlewares((function(e,n,t,r){if(t.$withClickCount){const{$withClickCount:i,...o}=t;return(0,s.jsx)(p,{render:e,type:n,props:o},r)}return e(n,t,r)}));const x={sidebar_position:2},m="Button Click Counter",f={},b=[{value:"Typescript types",id:"typescript-types",level:2}];function C(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"button-click-counter",children:"Button Click Counter"})}),"\n",(0,s.jsxs)(n.p,{children:["This example shows you how to implement state with JSX middlewares.\nA ",(0,s.jsx)(n.code,{children:"$withClickCount"})," directive is implemented in this example, which shows how many times a button has been clicked."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function WithClickCount({ render, props, type }) {\n  const [count, setCount] = useState(0);\n\n  const baseOnClick = props.onClick;\n\n  props = {\n    ...props,\n    onClick: (e) => {\n      setCount(count + 1);\n      baseOnClick?.(e);\n    },\n    children: [props.children, ` - Clicked ${count} times`],\n  };\n\n  return render(type, props);\n}\n\nfunction withClickCountMiddleware(next, type, props, key) {\n  if (props.$withClickCount) {\n    const { $withClickCount, ...restProps } = props;\n    return <WithClickCount render={next} type={type} props={restProps} key={key} />;\n  }\n\n  return next(type, props, key);\n}\n\naddMiddlewares(withClickCountMiddleware);\n\nfunction App() {\n  return <button $withClickCount>Click me</button>;\n}\n"})}),"\n",(0,s.jsx)(w,{}),"\n",(0,s.jsx)(n.h2,{id:"typescript-types",children:"Typescript types"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare module 'react' {\n  interface Attributes {\n    $withClickCount?: boolean;\n  }\n}\n"})})]})}function k(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(C,{...e})}):C(e)}},685:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(1750);t(3696);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var i=t(2540);function o(e){let{children:n,minHeight:t,url:o="http://localhost:3000",style:c,bodyStyle:l}=e;return(0,i.jsxs)("div",{className:s.browserWindow,style:{...c,minHeight:t},children:[(0,i.jsxs)("div",{className:s.browserWindowHeader,children:[(0,i.jsxs)("div",{className:s.buttons,children:[(0,i.jsx)("span",{className:s.dot,style:{background:"#f25f58"}}),(0,i.jsx)("span",{className:s.dot,style:{background:"#fbbe3c"}}),(0,i.jsx)("span",{className:s.dot,style:{background:"#58cb42"}})]}),(0,i.jsx)("div",{className:(0,r.A)(s.browserWindowAddressBar,"text--truncate"),children:o}),(0,i.jsx)("div",{className:s.browserWindowMenuIcon,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:s.bar}),(0,i.jsx)("span",{className:s.bar}),(0,i.jsx)("span",{className:s.bar})]})})]}),(0,i.jsx)("div",{className:s.browserWindowBody,style:l,children:n})]})}},7515:(e,n,t)=>{function r(e,n,t,r){return s([],void 0,e,n,t,r)}function s(e=[],n,t,r,i,o){let c,l,d;r??=t,i??=t;const a=[],u=e=>a.push(e);function p(){c=h(t?.bind(null)),l=h(r?.bind(null)),d=function(e,n,t,r,s,o){return h((function(e,n,t){return i(e,n,t,r,s,o)}))(e,n,t)};for(const e of a)e()}function h(n){let t=n;t&&(t.context=w,t.original=n);for(let r=0;r<e.length;r++){const s=e[r];s&&(t=s.bind(null,t),t.context=w,t.original=n)}return t}n?.(p);const w={addMiddlewares:function(...n){return e.push(...n),p(),w},removeMiddlewares:function(...n){for(const t of n){const n=e.indexOf(t);n>-1&&e.splice(n,1)}return p(),w},clearMiddlewares:function(){return e.length=0,p(),w},jsxClassic:function(e,n,...t){let r;if(({key:r,...n}=n||{}),null!=t&&t.length>0){if(1===t.length)return n.children=t[0],c(e,n,r);n.children=t}return l(e,n,r)},jsx:function(e,n,t){return c(e,n,t)},jsxs:function(e,n,t){return l(e,n,t)},jsxDEV:function(e,n,t,r,s,i){return d(e,n,t,r,s,i)},clone:function(n,c,l,d){return s(e,u,n||t,c||r,l||i,d||o)},Fragment:o};return p(),w}t.d(n,{U:()=>o});var i=t(2540);function o(){return r(i.jsx,i.jsxs)}},3023:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(3696);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);