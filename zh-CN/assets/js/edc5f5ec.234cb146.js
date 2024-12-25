"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["336723"],{686318:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/esquery","title":"esquery","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/esquery.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/esquery","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/esquery","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"esquery","language":"zh-CN"},"sidebar":"docs","previous":{"title":"space","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/space"},"next":{"title":"mask","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/mask/"}}'),r=s("785893"),i=s("250065");let o={title:"esquery",language:"zh-CN"},l=void 0,a={},c=[{value:"esquery",id:"esquery",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"esquery",children:"esquery"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean esquery(varchar field, varchar QueryDSL)"})}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7esquery(field, QueryDSL)\u51FD\u6570\u5C06\u4E00\u4E9B\u65E0\u6CD5\u7528sql\u8868\u8FF0\u7684query\u5982match_phrase\u3001geoshape\u7B49\u4E0B\u63A8\u7ED9Elasticsearch\u8FDB\u884C\u8FC7\u6EE4\u5904\u7406.\nesquery\u7684\u7B2C\u4E00\u4E2A\u5217\u540D\u53C2\u6570\u7528\u4E8E\u5173\u8054index\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662FES\u7684\u57FA\u672CQuery DSL\u7684json\u8868\u8FF0\uFF0C\u4F7F\u7528\u82B1\u62EC\u53F7{}\u5305\u542B\uFF0Cjson\u7684root key\u6709\u4E14\u53EA\u80FD\u6709\u4E00\u4E2A\uFF0C\n\u5982match_phrase\u3001geo_shape\u3001bool\u7B49"}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'match_phrase\u67E5\u8BE2\uFF1A\n\nselect * from es_table where esquery(k4, \'{\n        "match_phrase": {\n           "k4": "doris on es"\n        }\n    }\');\n\n\ngeo\u76F8\u5173\u67E5\u8BE2\uFF1A\n\nselect * from es_table where esquery(k4, \'{\n      "geo_shape": {\n         "location": {\n            "shape": {\n               "type": "envelope",\n               "coordinates": [\n                  [\n                     13,\n                     53\n                  ],\n                  [\n                     14,\n                     52\n                  ]\n               ]\n            },\n            "relation": "within"\n         }\n      }\n   }\');\n'})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"esquery\n"})})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var t=s(667294);let r={},i=t.createContext(r);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);