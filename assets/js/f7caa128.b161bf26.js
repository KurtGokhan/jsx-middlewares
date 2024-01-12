"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[234],{3161:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>k,frontMatter:()=>w,metadata:()=>x,toc:()=>b});var r=t(5893),s=t(1151),i=t(1007),o=t(7294);const c=(0,t(9752).P)(),{jsx:l,jsxDEV:d,jsxs:a}=c;function u(e){let{render:n,props:t,type:r}=e;const[s,i]=(0,o.useState)(0),c=t.onClick;return t={...t,onClick:e=>{i(s+1),c?.(e)},children:[t.children,` - Clicked ${s} times`]},n(r,t)}function p(){return l("button",{$withClickCount:!0,children:"Click me"})}function h(){return l(i.Z,{children:l(p,{})})}c.addMiddlewares((function(e,n,t,s){if(t.$withClickCount){const{$withClickCount:i,...o}=t;return(0,r.jsx)(u,{render:e,type:n,props:o},s)}return e(n,t,s)}));const w={sidebar_position:2},m="Button Click Counter",x={id:"examples/with-click-count",title:"Button Click Counter",description:"This example shows you how to implement state with JSX middlewares.",source:"@site/docs/examples/with-click-count.mdx",sourceDirName:"examples",slug:"/examples/with-click-count",permalink:"/jsx-middlewares/examples/with-click-count",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"If Directive",permalink:"/jsx-middlewares/examples/if-directive"},next:{title:"Tooltip",permalink:"/jsx-middlewares/examples/tooltip"}},f={},b=[{value:"Typescript types",id:"typescript-types",level:2}];function C(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"button-click-counter",children:"Button Click Counter"}),"\n",(0,r.jsxs)(n.p,{children:["This example shows you how to implement state with JSX middlewares.\nA ",(0,r.jsx)(n.code,{children:"$withClickCount"})," directive is implemented in this example, which shows how many times a button has been clicked."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"function WithClickCount({ render, props, type }) {\n  const [count, setCount] = useState(0);\n\n  const baseOnClick = props.onClick;\n\n  props = {\n    ...props,\n    onClick: (e) => {\n      setCount(count + 1);\n      baseOnClick?.(e);\n    },\n    children: [props.children, ` - Clicked ${count} times`],\n  };\n\n  return render(type, props);\n}\n\nfunction withClickCountMiddleware(next, type, props, key) {\n  if (props.$withClickCount) {\n    const { $withClickCount, ...restProps } = props;\n    return <WithClickCount render={next} type={type} props={restProps} key={key} />;\n  }\n\n  return next(type, props, key);\n}\n\naddMiddlewares(withClickCountMiddleware);\n\nfunction App() {\n  return <button $withClickCount>Click me</button>;\n}\n"})}),"\n",(0,r.jsx)(h,{}),"\n",(0,r.jsx)(n.h2,{id:"typescript-types",children:"Typescript types"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"declare module 'react' {\n  interface Attributes {\n    $withClickCount?: boolean;\n  }\n}\n"})})]})}function k(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(C,{...e})}):C(e)}},1007:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(512);t(7294);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var i=t(5893);function o(e){let{children:n,minHeight:t,url:o="http://localhost:3000",style:c,bodyStyle:l}=e;return(0,i.jsxs)("div",{className:s.browserWindow,style:{...c,minHeight:t},children:[(0,i.jsxs)("div",{className:s.browserWindowHeader,children:[(0,i.jsxs)("div",{className:s.buttons,children:[(0,i.jsx)("span",{className:s.dot,style:{background:"#f25f58"}}),(0,i.jsx)("span",{className:s.dot,style:{background:"#fbbe3c"}}),(0,i.jsx)("span",{className:s.dot,style:{background:"#58cb42"}})]}),(0,i.jsx)("div",{className:(0,r.Z)(s.browserWindowAddressBar,"text--truncate"),children:o}),(0,i.jsx)("div",{className:s.browserWindowMenuIcon,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:s.bar}),(0,i.jsx)("span",{className:s.bar}),(0,i.jsx)("span",{className:s.bar})]})})]}),(0,i.jsx)("div",{className:s.browserWindowBody,style:l,children:n})]})}},9752:(e,n,t)=>{function r(e,n,t){return s([],void 0,e,n,t)}function s(e,n,t,r,i){let o,c,l,d;void 0===e&&(e=[]),r??=t,i??=t;const a=[],u=e=>a.push(e);function p(){c=h(t?.bind(null)),l=h(r?.bind(null)),d=function(e,n,t,r,s,o){return h((function(e,n,t){return i(e,n,t,r,s,o)}))(e,n,t)};for(const e of a)e()}function h(n){let t=n;t&&(t.context=o,t.original=n);for(let r=0;r<e.length;r++){const s=e[r];s&&(t=s.bind(null,t),t.context=o,t.original=n)}return t}return n?.(p),o={addMiddlewares:function(){return e.push(...arguments),p(),o},removeMiddlewares:function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];for(const s of t){const n=e.indexOf(s);n>-1&&e.splice(n,1)}return p(),o},clearMiddlewares:function(){return e.length=0,p(),o},jsxClassic:function(e,n){let t;({key:t,...n}=n||{});for(var r=arguments.length,s=new Array(r>2?r-2:0),i=2;i<r;i++)s[i-2]=arguments[i];if(null!=s&&s.length>0){if(1===s.length)return n.children=s[0],c(e,n,t);n.children=s}return l(e,n,t)},jsx:function(e,n,t){return c(e,n,t)},jsxs:function(e,n,t){return l(e,n,t)},jsxDEV:function(e,n,t,r,s,i){return d(e,n,t,r,s,i)},clone:function(n,o,c){return s(e,u,n||t,o||r,c||i)}},p(),o}t.d(n,{P:()=>o});var i=t(5893);function o(){return r(i.jsx,i.jsxs)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var r=t(7294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);