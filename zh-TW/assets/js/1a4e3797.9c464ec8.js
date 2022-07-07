"use strict";(self.webpackChunkblog_notes=self.webpackChunkblog_notes||[]).push([[7920],{8824:function(e,t,n){n.d(t,{c:function(){return o}});var r=n(7294),a=n(2263),l=["zero","one","two","few","many","other"];function u(e){return l.filter((function(t){return e.includes(t)}))}var c={locale:"en",pluralForms:u(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,a.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:u(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),c}var t,n}),[e])}function o(){var e=s();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms+"), but the message contains "+r.length+": "+e);var a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}}},1473:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(5861),a=n(7757),l=n.n(a),u=n(7294),c=n(2263),s=n(4397),o=n(5742),i=n(9960),m=n(5999),h=n(373),f=n(8824),p=n(2239),d=n(6775),g=n(412);var v=function(){var e=(0,d.k6)(),t=(0,d.TH)(),n=(0,c.Z)().siteConfig.baseUrl;return{searchValue:g.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},E=n(22),y=n(8202),S=n(2539),w=n(726),b=n(1073),I=n(311),F="searchQueryInput_CFBF",P="searchResultItem_U687",R="searchResultItemPath_uIbk",k="searchResultItemSummary_oZHr",_=n(3926);function C(){var e=(0,c.Z)().siteConfig.baseUrl,t=(0,p.gA)(),n=e,a=(0,h.J)(null==t?void 0:t.pluginId).preferredVersion;a&&!a.isLast&&(n=a.path+"/");var s=(0,f.c)().selectMessage,i=v(),d=i.searchValue,g=i.updateSearchPath,S=(0,u.useState)(d),w=S[0],b=S[1],P=(0,u.useState)(),R=P[0],k=P[1],_=(0,u.useState)(),C=_[0],Z=_[1],q=(0,u.useMemo)((function(){return w?(0,m.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:w}):(0,m.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[w]);(0,u.useEffect)((function(){g(w),R&&(w?R(w,(function(e){Z(e)})):Z(void 0))}),[w,R]);var T=(0,u.useCallback)((function(e){b(e.target.value)}),[]);return(0,u.useEffect)((function(){d&&d!==w&&b(d)}),[d]),(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(l().mark((function e(){var t,r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,E.w)(n);case 2:t=e.sent,r=t.wrappedIndexes,a=t.zhDictionary,k((function(){return(0,y.v)(r,a,100)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),u.createElement(u.Fragment,null,u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"}),u.createElement("title",null,q)),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,q),u.createElement("input",{type:"search",name:"q",className:F,"aria-label":"Search",onChange:T,value:w,autoComplete:"off",autoFocus:!0}),!R&&w&&u.createElement("div",null,u.createElement(I.Z,null)),C&&(C.length>0?u.createElement("p",null,s(C.length,(0,m.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:C.length}))):u.createElement("p",null,(0,m.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),u.createElement("section",null,C&&C.map((function(e){return u.createElement(x,{key:e.document.i,searchResult:e})})))))}function x(e){var t=e.searchResult,n=t.document,r=t.type,a=t.page,l=t.tokens,c=t.metadata,s=0===r,o=2===r,m=(s?n.b:a.b).slice(),h=o?n.s:n.t;return s||m.push(a.t),u.createElement("article",{className:P},u.createElement("h2",null,u.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:o?(0,S.C)(h,l):(0,w.o)(h,(0,b.m)(c,"t"),l,100)}})),m.length>0&&u.createElement("p",{className:R},(0,_.e)(m)),o&&u.createElement("p",{className:k,dangerouslySetInnerHTML:{__html:(0,w.o)(n.t,(0,b.m)(c,"t"),l,100)}}))}var Z=function(){return u.createElement(s.Z,null,u.createElement(C,null))}}}]);