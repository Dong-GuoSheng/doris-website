"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["229138"],{578300:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>d,assets:()=>c,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/group-array-intersect","title":"GROUP_ARRAY_INTERSECT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/group-array-intersect.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/group-array-intersect","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group-array-intersect","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"GROUP_ARRAY_INTERSECT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"HISTOGRAM","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/histogram"},"next":{"title":"GROUP_BITMAP_XOR","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group-bitmap-xor"}}'),s=r("785893"),a=r("250065");let i={title:"GROUP_ARRAY_INTERSECT",language:"zh-CN"},o=void 0,c={},l=[{value:"group_array_intersect",id:"group_array_intersect",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"group_array_intersect",children:"group_array_intersect"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"expr GROUP_ARRAY_INTERSECT(expr)"})}),"\n",(0,s.jsx)(n.p,{children:"\u6C42\u51FA\u6240\u6709\u884C\u4E2D\u8F93\u5165\u6570\u7EC4\u4E2D\u7684\u4EA4\u96C6\u5143\u7D20\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4"}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'mysql> select c_array_string from group_array_intersect_test where id in (18, 20);\n+--------------------------------+\n| c_array_string                 |\n+--------------------------------+\n| ["a", "b", "c", "d", "e", "f"] |\n| ["a", null]                    |\n+--------------------------------+\n2 rows in set (0.02 sec)\n\nmysql> select group_array_intersect(c_array_string) from group_array_intersect_test where id in (18, 20);\n+---------------------------------------+\n| group_array_intersect(c_array_string) |\n+---------------------------------------+\n| ["a"]                                 |\n+---------------------------------------+\n1 row in set (0.03 sec)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"GROUP_ARRAY_INTERSECT, ARRAY"})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var t=r(667294);let s={},a=t.createContext(s);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);