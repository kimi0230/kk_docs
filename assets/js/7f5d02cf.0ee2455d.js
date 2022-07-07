"use strict";(self.webpackChunkblog_notes=self.webpackChunkblog_notes||[]).push([[4385],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return f}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},u=Object.keys(e);for(a=0;a<u.length;a++)t=u[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)t=u[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),l=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},i=function(e){var r=l(e.components);return a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,u=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=n,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||u;return t?a.createElement(g,o(o({ref:r},i),{},{components:t})):a.createElement(g,o({ref:r},i))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var u=t.length,o=new Array(u);o[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<u;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9641:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var a=t(7462),n=t(3366),u=(t(7294),t(3905)),o=["components"],c={id:"docusaurus",title:"docusaurus",slug:"docusaurus",tags:["docusaurus"]},s="Docusaurus",l={permalink:"/kk_docs/blog/docusaurus",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-07-06-docusaurus/index.md",source:"@site/blog/2022-07-06-docusaurus/index.md",title:"docusaurus",description:"Upgrade",date:"2022-07-06T00:00:00.000Z",formattedDate:"July 6, 2022",tags:[{label:"docusaurus",permalink:"/kk_docs/blog/tags/docusaurus"}],readingTime:.2,truncated:!1,authors:[],frontMatter:{id:"docusaurus",title:"docusaurus",slug:"docusaurus",tags:["docusaurus"]},nextItem:{title:"Welcome",permalink:"/kk_docs/blog/welcome"}},i={authorsImageUrls:[]},p=[{value:"Upgrade",id:"upgrade",level:2},{value:"Search",id:"search",level:2},{value:"1. Using Algolia DocSearch",id:"1-using-algolia-docsearch",level:3},{value:"@easyops-cn/docusaurus-search-local",id:"easyops-cndocusaurus-search-local",level:3}],d={toc:p};function f(e){var r=e.components,t=(0,n.Z)(e,o);return(0,u.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"upgrade"},"Upgrade"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"yarn upgrade docusaurus --latest\n")),(0,u.kt)("h2",{id:"search"},"Search"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/search"},"https://docusaurus.io/docs/search")),(0,u.kt)("h3",{id:"1-using-algolia-docsearch"},"1. Using Algolia DocSearch"),(0,u.kt)("h3",{id:"easyops-cndocusaurus-search-local"},"@easyops-cn/docusaurus-search-local"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/easyops-cn/docusaurus-search-local"},"https://github.com/easyops-cn/docusaurus-search-local")),(0,u.kt)("li",{parentName:"ul"},"Offline/local search for Docusaurus v2 (language of zh supported)"),(0,u.kt)("li",{parentName:"ul"},'Expected Node.js version ">=16.14"')),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @easyops-cn/docusaurus-search-local\n")))}f.isMDXComponent=!0}}]);