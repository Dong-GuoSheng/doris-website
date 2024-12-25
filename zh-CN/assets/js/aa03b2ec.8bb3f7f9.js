"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["786421"],{212593:function(n,e,r){r.r(e),r.d(e,{metadata:()=>a,contentTitle:()=>l,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-min","title":"ARRAY_MIN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-min.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-min","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-min","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_MIN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_MAX","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-max"},"next":{"title":"ARRAY_MAP","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-map"}}'),t=r("785893"),s=r("250065");let i={title:"ARRAY_MIN",language:"zh-CN"},l=void 0,c={},o=[{value:"array_min",id:"array_min",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"array_min",children:"array_min"}),"\n",(0,t.jsx)(e.p,{children:"array_min"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"T array_min(ARRAY<T> array1)"})}),"\n",(0,t.jsxs)(e.p,{children:["\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6700\u5C0F\u7684\u5143\u7D20\uFF0C\u6570\u7EC4\u4E2D\u7684",(0,t.jsx)(e.code,{children:"NULL"}),"\u503C\u4F1A\u88AB\u8DF3\u8FC7\u3002\u7A7A\u6570\u7EC4\u4EE5\u53CA\u5143\u7D20\u5168\u4E3A",(0,t.jsx)(e.code,{children:"NULL"}),"\u503C\u7684\u6570\u7EC4\uFF0C\u7ED3\u679C\u8FD4\u56DE",(0,t.jsx)(e.code,{children:"NULL"}),"\u503C\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> select k2, array_min(k2) from array_type_table;\n+--------------+-----------------+\n| k2           | array_min(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               1 |\n| [1, NULL, 3] |               1 |\n+--------------+-----------------+\n4 rows in set (0.02 sec)\n\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.p,{children:"ARRAY,MIN,ARRAY_MIN"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return i}});var a=r(667294);let t={},s=a.createContext(t);function i(n){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);