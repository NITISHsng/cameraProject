"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{1:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(7294),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),i=(e,t)=>{let r=(0,a.forwardRef)((r,i)=>{let{color:n="currentColor",size:l=24,strokeWidth:d=2,absoluteStrokeWidth:c,className:m="",children:p,...u}=r;return(0,a.createElement)("svg",{ref:i,...s,width:l,height:l,stroke:n,strokeWidth:c?24*Number(d)/Number(l):d,className:["lucide","lucide-".concat(o(e)),m].join(" "),...u},[...t.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(p)?p:[p]])});return r.displayName="".concat(e),r}},1373:function(e,t,r){r.d(t,{Z:function(){return a}});let a=(0,r(1).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},2763:function(e,t,r){r.d(t,{Z:function(){return a}});let a=(0,r(1).Z)("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]])},608:function(e,t,r){r.r(t);var a=r(5893),s=r(7294),o=r(6501),i=r(2763),n=r(1373);t.default=()=>{let[e,t]=(0,s.useState)({name:"",email:"",operatorId:"",password:"",confirmPassword:"",role:"operator",location:"",skills:"",status:"active"}),[r,l]=(0,s.useState)(!1),[d,c]=(0,s.useState)(""),m=e=>{let{name:r,value:a}=e.target;t(e=>({...e,[r]:a}))},p=()=>e.name&&e.email&&e.operatorId&&e.password?e.password!==e.confirmPassword?(c("Passwords do not match"),!1):!!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(c("Please enter a valid email address"),!1):(c("Please fill all required fields"),!1),u=async r=>{if(r.preventDefault(),c(""),p()){l(!0);try{let r=await fetch("/api/operators",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,operatorId:e.operatorId,password:e.password,role:e.role,location:e.location,skills:e.skills.split(",").map(e=>e.trim()),status:e.status})}),a=await r.json();if(!r.ok)throw Error(a.error||"Failed to create operator");o.Am.success("Operator created successfully"),t({name:"",email:"",operatorId:"",password:"",confirmPassword:"",role:"operator",location:"",skills:"",status:"active"})}catch(e){c(e.message||"An error occurred"),o.Am.error(e.message||"Failed to create operator")}finally{l(!1)}}};return(0,a.jsxs)("div",{className:"p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-3 mb-6",children:[(0,a.jsx)("div",{className:"p-2 bg-teal-100 dark:bg-teal-900 rounded-lg",children:(0,a.jsx)(i.Z,{className:"h-6 w-6 text-teal-600 dark:text-teal-400"})}),(0,a.jsx)("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Create New Operator"})]}),d&&(0,a.jsx)("div",{className:"mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded",children:d}),(0,a.jsxs)("form",{onSubmit:u,className:"space-y-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Full Name *"}),(0,a.jsx)("input",{type:"text",name:"name",value:e.name,onChange:m,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email Address *"}),(0,a.jsx)("input",{type:"email",name:"email",value:e.email,onChange:m,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Operator ID *"}),(0,a.jsx)("input",{type:"text",name:"operatorId",value:e.operatorId,onChange:m,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Location"}),(0,a.jsx)("input",{type:"text",name:"location",value:e.location,onChange:m,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Password *"}),(0,a.jsx)("input",{type:"password",name:"password",value:e.password,onChange:m,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Confirm Password *"}),(0,a.jsx)("input",{type:"password",name:"confirmPassword",value:e.confirmPassword,onChange:m,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Skills (comma separated)"}),(0,a.jsx)("input",{type:"text",name:"skills",value:e.skills,onChange:m,placeholder:"Photography, Editing, Drone, etc.",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Status"}),(0,a.jsxs)("select",{name:"status",value:e.status,onChange:m,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white",children:[(0,a.jsx)("option",{value:"active",children:"Active"}),(0,a.jsx)("option",{value:"inactive",children:"Inactive"}),(0,a.jsx)("option",{value:"pending",children:"Pending"})]})]})]}),(0,a.jsx)("div",{className:"pt-4",children:(0,a.jsx)("button",{type:"submit",disabled:r,className:"w-full md:w-auto px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70",children:r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{className:"h-5 w-5 animate-spin"}),(0,a.jsx)("span",{children:"Creating..."})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{className:"h-5 w-5"}),(0,a.jsx)("span",{children:"Create Operator"})]})})})]})]})}},6501:function(e,t,r){let a,s;r.d(t,{ZP:function(){return es},Am:function(){return D}});var o,i=r(7294);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":a+="f"==o[1]?p(i,o):o+"{"+p(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=p(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(o,i):o+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+a},u={},g=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+g(e[r]);return t}return e},f=(e,t,r,a,s)=>{var o;let i=g(e),n=u[i]||(u[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!u[n]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(m," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(m," ").trim();return a[0]})(e);u[n]=p(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&u.g?u.g:null;return r&&(u.g=u[n]),o=u[n],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),n},x=(e,t,r)=>e.reduce((e,a,s)=>{let o=t[s];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return f(r.unshift?r.raw?x(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,h,w,v=y.bind({k:1});function k(e,t){let r=this||{};return function(){let a=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;r.p=Object.assign({theme:h&&h()},n),r.o=/ *go\d+/.test(l),n.className=y.apply(r,a)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),w&&d[0]&&w(n),b(d,n)}return t?t(s):s}}var j=e=>"function"==typeof e,N=(e,t)=>j(e)?e(t):e,C=(a=0,()=>(++a).toString()),E=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},$="default",A=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return A(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},P=[],I={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},O={},S=(e,t=$)=>{O[t]=A(O[t]||I,e),P.forEach(([e,r])=>{e===t&&r(O[t])})},Z=e=>Object.keys(O).forEach(t=>S(e,t)),z=e=>Object.keys(O).find(t=>O[t].toasts.some(t=>t.id===e)),F=(e=$)=>t=>{S(t,e)},L=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),q=e=>(t,r)=>{let a=L(t,e,r);return F(a.toasterId||z(a.id))({type:2,toast:a}),a.id},D=(e,t)=>q("blank")(e,t);D.error=q("error"),D.success=q("success"),D.loading=q("loading"),D.custom=q("custom"),D.dismiss=(e,t)=>{let r={type:3,toastId:e};t?F(t)(r):Z(r)},D.dismissAll=e=>D.dismiss(void 0,e),D.remove=(e,t)=>{let r={type:4,toastId:e};t?F(t)(r):Z(r)},D.removeAll=e=>D.remove(void 0,e),D.promise=(e,t,r)=>{let a=D.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?N(t.success,e):void 0;return s?D.success(s,{id:a,...r,...null==r?void 0:r.success}):D.dismiss(a),e}).catch(e=>{let s=t.error?N(t.error,e):void 0;s?D.error(s,{id:a,...r,...null==r?void 0:r.error}):D.dismiss(a)}),e};var _=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,M=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,H=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,B=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${W} 1s linear infinite;
`,J=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,R=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,U=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${R} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,G=k("div")`
  position: absolute;
`,K=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,X=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(V,null,t):t:"blank"===r?null:i.createElement(K,null,i.createElement(B,{...a}),"loading"!==r&&i.createElement(G,null,"error"===r?i.createElement(H,{...a}):i.createElement(U,{...a})))},Y=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ee=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,et=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,er=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ea=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(r),ee(r)];return{animation:t?`${v(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};i.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?ea(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(X,{toast:e}),n=i.createElement(er,{...e.ariaProps},N(e.message,e));return i.createElement(et,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))}),o=i.createElement,p.p=void 0,b=o,h=void 0,w=void 0,y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var es=D}}]);