"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2327],{1:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(7294),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),o=(e,t)=>{let r=(0,a.forwardRef)((r,o)=>{let{color:n="currentColor",size:l=24,strokeWidth:d=2,absoluteStrokeWidth:c,className:p="",children:m,...x}=r;return(0,a.createElement)("svg",{ref:o,...s,width:l,height:l,stroke:n,strokeWidth:c?24*Number(d)/Number(l):d,className:["lucide","lucide-".concat(i(e)),p].join(" "),...x},[...t.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(m)?m:[m]])});return r.displayName="".concat(e),r}},1427:function(e,t,r){r.d(t,{Z:function(){return a}});let a=(0,r(1).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},7782:function(e,t,r){r.d(t,{Z:function(){return a}});let a=(0,r(1).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},9078:function(e,t,r){r.d(t,{Z:function(){return a}});let a=(0,r(1).Z)("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]])},1373:function(e,t,r){r.d(t,{Z:function(){return a}});let a=(0,r(1).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},3487:function(e,t,r){r.d(t,{Z:function(){return a}});let a=(0,r(1).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},929:function(e,t,r){r.d(t,{Z:function(){return a}});let a=(0,r(1).Z)("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]])},2327:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var a=r(5893),s=r(7294),i=r(929),o=r(3487),n=r(9078),l=r(1373),d=r(1427),c=r(7782),p=r(6501),m=e=>{let{limit:t=10}=e,[r,i]=(0,s.useState)([]),[m,x]=(0,s.useState)(!0),[g,u]=(0,s.useState)(""),[h,y]=(0,s.useState)(1),[f,b]=(0,s.useState)(1),[k,v]=(0,s.useState)(""),[w,j]=(0,s.useState)("all"),[N,C]=(0,s.useState)("joinDate"),[S,A]=(0,s.useState)("desc"),Z=async()=>{x(!0),u("");try{let e=new URLSearchParams({page:h.toString(),limit:t.toString(),sortField:N,sortDirection:S,...k&&{search:k},..."all"!==w&&{status:w}}),r=await fetch("/api/operators?".concat(e.toString())),a=await r.json();if(!r.ok)throw Error(a.error||"Failed to fetch operators");i(a.operators),b(Math.ceil(a.total/t))}catch(e){u(e.message||"An error occurred while fetching operators"),p.Am.error(e.message||"Failed to fetch operators")}finally{x(!1)}};(0,s.useEffect)(()=>{Z()},[h,t,k,w,N,S]);let E=e=>{N===e?A("asc"===S?"desc":"asc"):(C(e),A("asc"))},$=e=>{switch(e){case"active":return"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";case"inactive":return"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";case"pending":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";default:return"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"}},L=e=>e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"N/A";return(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden",children:[(0,a.jsxs)("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0",children:[(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),y(1)},className:"relative w-full md:w-64",children:[(0,a.jsx)("input",{type:"text",placeholder:"Search operators...",value:k,onChange:e=>v(e.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"}),(0,a.jsx)(o.Z,{className:"absolute left-3 top-2.5 h-4 w-4 text-gray-400"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(n.Z,{className:"h-4 w-4 text-gray-500 dark:text-gray-400"}),(0,a.jsxs)("select",{value:w,onChange:e=>{j(e.target.value),y(1)},className:"border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white",children:[(0,a.jsx)("option",{value:"all",children:"All Status"}),(0,a.jsx)("option",{value:"active",children:"Active"}),(0,a.jsx)("option",{value:"inactive",children:"Inactive"}),(0,a.jsx)("option",{value:"pending",children:"Pending"})]})]}),(0,a.jsx)("button",{onClick:()=>Z(),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200",children:"Refresh"})]})]}),(0,a.jsx)("div",{className:"overflow-x-auto",children:m?(0,a.jsxs)("div",{className:"flex justify-center items-center py-20",children:[(0,a.jsx)(l.Z,{className:"h-8 w-8 animate-spin text-blue-600"}),(0,a.jsx)("span",{className:"ml-2 text-gray-600 dark:text-gray-300",children:"Loading operators..."})]}):g?(0,a.jsxs)("div",{className:"p-6 text-center text-red-600 dark:text-red-400",children:[(0,a.jsx)("p",{children:g}),(0,a.jsx)("button",{onClick:()=>Z(),className:"mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200",children:"Try Again"})]}):0===r.length?(0,a.jsx)("div",{className:"p-6 text-center text-gray-600 dark:text-gray-400",children:(0,a.jsx)("p",{children:"No operators found"})}):(0,a.jsxs)("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[(0,a.jsx)("thead",{className:"bg-gray-50 dark:bg-gray-700",children:(0,a.jsxs)("tr",{children:[(0,a.jsxs)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer",onClick:()=>E("operatorId"),children:["Operator ID","operatorId"===N&&(0,a.jsx)("span",{className:"ml-1",children:"asc"===S?"↑":"↓"})]}),(0,a.jsxs)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer",onClick:()=>E("name"),children:["Name","name"===N&&(0,a.jsx)("span",{className:"ml-1",children:"asc"===S?"↑":"↓"})]}),(0,a.jsxs)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer",onClick:()=>E("email"),children:["Email","email"===N&&(0,a.jsx)("span",{className:"ml-1",children:"asc"===S?"↑":"↓"})]}),(0,a.jsxs)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer",onClick:()=>E("location"),children:["Location","location"===N&&(0,a.jsx)("span",{className:"ml-1",children:"asc"===S?"↑":"↓"})]}),(0,a.jsxs)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer",onClick:()=>E("status"),children:["Status","status"===N&&(0,a.jsx)("span",{className:"ml-1",children:"asc"===S?"↑":"↓"})]}),(0,a.jsxs)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer",onClick:()=>E("joinDate"),children:["Join Date","joinDate"===N&&(0,a.jsx)("span",{className:"ml-1",children:"asc"===S?"↑":"↓"})]}),(0,a.jsxs)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer",onClick:()=>E("lastLogin"),children:["Last Login","lastLogin"===N&&(0,a.jsx)("span",{className:"ml-1",children:"asc"===S?"↑":"↓"})]})]})}),(0,a.jsx)("tbody",{className:"bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700",children:r.map(e=>(0,a.jsxs)("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150",children:[(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white",children:e.operatorId}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300",children:e.name}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300",children:e.email}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300",children:e.location||"N/A"}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,a.jsx)("span",{className:"px-2 py-1 text-xs font-semibold rounded-full ".concat($(e.status)),children:e.status.charAt(0).toUpperCase()+e.status.slice(1)})}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300",children:L(e.joinDate)}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300",children:e.lastLogin?L(e.lastLogin):"Never"})]},e._id))})]})}),!m&&!g&&r.length>0&&(0,a.jsxs)("div",{className:"px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 sm:px-6",children:[(0,a.jsxs)("div",{className:"flex-1 flex justify-between sm:hidden",children:[(0,a.jsx)("button",{onClick:()=>y(Math.max(1,h-1)),disabled:1===h,className:"relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",children:"Previous"}),(0,a.jsx)("button",{onClick:()=>y(Math.min(f,h+1)),disabled:h===f,className:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",children:"Next"})]}),(0,a.jsxs)("div",{className:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Showing ",(0,a.jsx)("span",{className:"font-medium",children:r.length>0?(h-1)*t+1:0})," to"," ",(0,a.jsx)("span",{className:"font-medium",children:Math.min(h*t,(f-1)*t+r.length)})," ","of ",(0,a.jsx)("span",{className:"font-medium",children:f*t})," results"]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination",children:[(0,a.jsxs)("button",{onClick:()=>y(Math.max(1,h-1)),disabled:1===h,className:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",children:[(0,a.jsx)("span",{className:"sr-only",children:"Previous"}),(0,a.jsx)(d.Z,{className:"h-5 w-5","aria-hidden":"true"})]}),Array.from({length:Math.min(5,f)},(e,t)=>{let r;return r=f<=5?t+1:h<=3?t+1:h>=f-2?f-4+t:h-2+t,(0,a.jsx)("button",{onClick:()=>y(r),className:"relative inline-flex items-center px-4 py-2 border ".concat(h===r?"z-10 bg-blue-50 dark:bg-blue-900 border-blue-500 dark:border-blue-500 text-blue-600 dark:text-blue-200":"bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"," text-sm font-medium"),children:r},r)}),(0,a.jsxs)("button",{onClick:()=>y(Math.min(f,h+1)),disabled:h===f,className:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",children:[(0,a.jsx)("span",{className:"sr-only",children:"Next"}),(0,a.jsx)(c.Z,{className:"h-5 w-5","aria-hidden":"true"})]})]})})]})]})]})},x=()=>(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsx)("div",{className:"flex items-center justify-between",children:(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,a.jsx)("div",{className:"p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg",children:(0,a.jsx)(i.Z,{className:"h-6 w-6 text-indigo-600 dark:text-indigo-400"})}),(0,a.jsx)("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Operator Management"})]})}),(0,a.jsx)("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden",children:(0,a.jsx)(m,{limit:10})})]})},6501:function(e,t,r){let a,s;r.d(t,{ZP:function(){return es},Am:function(){return P}});var i,o=r(7294);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,m=(e,t)=>{let r="",a="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":a+="f"==i[1]?m(o,i):i+"{"+m(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=m(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=m.p?m.p(i,o):i+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+a},x={},g=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+g(e[r]);return t}return e},u=(e,t,r,a,s)=>{var i;let o=g(e),n=x[o]||(x[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!x[n]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(p," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(p," ").trim();return a[0]})(e);x[n]=m(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&x.g?x.g:null;return r&&(x.g=x[n]),i=x[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},h=(e,t,r)=>e.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return u(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let f,b,k,v=y.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;r.p=Object.assign({theme:b&&b()},n),r.o=/ *go\d+/.test(l),n.className=y.apply(r,a)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),k&&d[0]&&k(n),f(d,n)}return t?t(s):s}}var j=e=>"function"==typeof e,N=(e,t)=>j(e)?e(t):e,C=(a=0,()=>(++a).toString()),S=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},A="default",Z=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return Z(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},E=[],$={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},L={},D=(e,t=A)=>{L[t]=Z(L[t]||$,e),E.forEach(([e,r])=>{e===t&&r(L[t])})},z=e=>Object.keys(L).forEach(t=>D(e,t)),M=e=>Object.keys(L).find(t=>L[t].toasts.some(t=>t.id===e)),I=(e=A)=>t=>{D(t,e)},O=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),F=e=>(t,r)=>{let a=O(t,e,r);return I(a.toasterId||M(a.id))({type:2,toast:a}),a.id},P=(e,t)=>F("blank")(e,t);P.error=F("error"),P.success=F("success"),P.loading=F("loading"),P.custom=F("custom"),P.dismiss=(e,t)=>{let r={type:3,toastId:e};t?I(t)(r):z(r)},P.dismissAll=e=>P.dismiss(void 0,e),P.remove=(e,t)=>{let r={type:4,toastId:e};t?I(t)(r):z(r)},P.removeAll=e=>P.remove(void 0,e),P.promise=(e,t,r)=>{let a=P.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?N(t.success,e):void 0;return s?P.success(s,{id:a,...r,...null==r?void 0:r.success}):P.dismiss(a),e}).catch(e=>{let s=t.error?N(t.error,e):void 0;s?P.error(s,{id:a,...r,...null==r?void 0:r.error}):P.dismiss(a)}),e};var _=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,U=w("div")`
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
    animation: ${q} 0.15s ease-out forwards;
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
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,T=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,H=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${T} 1s linear infinite;
`,W=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=v`
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
}`,J=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
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
`,G=w("div")`
  position: absolute;
`,K=w("div")`
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
}`,V=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,X=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(V,null,t):t:"blank"===r?null:o.createElement(K,null,o.createElement(H,{...a}),"loading"!==r&&o.createElement(G,null,"error"===r?o.createElement(U,{...a}):o.createElement(J,{...a})))},Y=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ee=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,et=w("div")`
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
`,er=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ea=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=S()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(r),ee(r)];return{animation:t?`${v(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};o.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?ea(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(X,{toast:e}),n=o.createElement(er,{...e.ariaProps},N(e.message,e));return o.createElement(et,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))}),i=o.createElement,m.p=void 0,f=i,b=void 0,k=void 0,y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var es=P}}]);