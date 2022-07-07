"use strict";(self.webpackChunkblog_notes=self.webpackChunkblog_notes||[]).push([[8752],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return f}});var a=t(7294);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,u=function(e,r){if(null==e)return{};var t,a,u={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(u[t]=e[t]);return u}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},i=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,u=e.mdxType,n=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=u,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||n;return t?a.createElement(g,o(o({ref:r},i),{},{components:t})):a.createElement(g,o({ref:r},i))}));function f(e,r){var t=arguments,u=r&&r.mdxType;if("string"==typeof e||u){var n=t.length,o=new Array(n);o[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:u,o[1]=s;for(var l=2;l<n;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7652:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=t(7462),u=t(3366),n=(t(7294),t(3905)),o=["components"],s={id:"docusaurus",title:"docusaurus",slug:"docusaurus",tags:["docusaurus"]},c="Docusaurus",l={permalink:"/kk_docs/zh-TW/blog/docusaurus",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-07-06-docusaurus/index.md",source:"@site/blog/2022-07-06-docusaurus/index.md",title:"docusaurus",description:"Upgrade",date:"2022-07-06T00:00:00.000Z",formattedDate:"2022\u5e747\u67086\u65e5",tags:[{label:"docusaurus",permalink:"/kk_docs/zh-TW/blog/tags/docusaurus"}],readingTime:.23,truncated:!1,authors:[],frontMatter:{id:"docusaurus",title:"docusaurus",slug:"docusaurus",tags:["docusaurus"]},nextItem:{title:"Welcome",permalink:"/kk_docs/zh-TW/blog/welcome"}},i={authorsImageUrls:[]},p=[{value:"Upgrade",id:"upgrade",level:2},{value:"Search",id:"search",level:2},{value:"1. Using Algolia DocSearch",id:"1-using-algolia-docsearch",level:3},{value:"@easyops-cn/docusaurus-search-local",id:"easyops-cndocusaurus-search-local",level:3},{value:"PWA",id:"pwa",level:2}],d={toc:p};function f(e){var r=e.components,t=(0,u.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"upgrade"},"Upgrade"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"yarn upgrade docusaurus --latest\n")),(0,n.kt)("h2",{id:"search"},"Search"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/search"},"https://docusaurus.io/docs/search")),(0,n.kt)("h3",{id:"1-using-algolia-docsearch"},"1. Using Algolia DocSearch"),(0,n.kt)("h3",{id:"easyops-cndocusaurus-search-local"},"@easyops-cn/docusaurus-search-local"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/easyops-cn/docusaurus-search-local"},"https://github.com/easyops-cn/docusaurus-search-local")),(0,n.kt)("li",{parentName:"ul"},"Offline/local search for Docusaurus v2 (language of zh supported)"),(0,n.kt)("li",{parentName:"ul"},'Expected Node.js version ">=16.14"')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @easyops-cn/docusaurus-search-local\n")),(0,n.kt)("h2",{id:"pwa"},"PWA"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-pwa"},"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-pwa")),(0,n.kt)("p",null,"yarn add @docusaurus/plugin-pwa"))}f.isMDXComponent=!0}}]);