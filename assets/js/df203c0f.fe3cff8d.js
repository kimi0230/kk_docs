"use strict";(self.webpackChunkblog_notes=self.webpackChunkblog_notes||[]).push([[9924],{9853:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=a(7294),r=a(990),n=a(9960),o=a(8824),c=a(1944),s=a(5281),u=a(5999),i=a(4739),g=a(6010);function m(e){var t=e.doc;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(n.Z,{to:t.permalink},l.createElement("h2",null,t.title)),t.description&&l.createElement("p",null,t.description))}function d(e){var t,a=e.tag,d=(t=(0,o.c)().selectMessage,function(e){return t(e,(0,u.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),f=(0,u.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:d(a.count),tagName:a.label});return l.createElement(c.FG,{className:(0,g.Z)(s.k.wrapper.docsPages,s.k.page.docsTagDocListPage)},l.createElement(c.d,{title:f}),l.createElement(i.Z,{tag:"doc_tag_doc_list"}),l.createElement(r.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,f),l.createElement(n.Z,{href:a.allTagsPath},l.createElement(u.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},a.items.map((function(e){return l.createElement(m,{key:e.id,doc:e})}))))))))}},8824:function(e,t,a){a.d(t,{c:function(){return u}});var l=a(7294),r=a(2263),n=["zero","one","two","few","many","other"];function o(e){return n.filter((function(t){return e.includes(t)}))}var c={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,r.Z)().i18n.currentLocale;return(0,l.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:o(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(l){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+l.message+"\n"),c}var t,a}),[e])}function u(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+l.length+": "+e);var r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}}]);