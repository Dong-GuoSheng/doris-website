"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["597502"],{130794:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>a,default:()=>d,assets:()=>l,toc:()=>u,frontMatter:()=>o});var r=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/group-bit-and","title":"GROUP_BIT_AND","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/group-bit-and.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/group-bit-and","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group-bit-and","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"GROUP_BIT_AND","language":"zh-CN"},"sidebar":"docs","previous":{"title":"GROUP_BITMAP_XOR","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group-bitmap-xor"},"next":{"title":"GROUP_BIT_OR","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group-bit-or"}}'),s=t("785893"),i=t("250065");let o={title:"GROUP_BIT_AND",language:"zh-CN"},a=void 0,l={},u=[{value:"group_bit_and",id:"group_bit_and",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"group_bit_and",children:"group_bit_and"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"expr GROUP_BIT_AND(expr)"})}),"\n",(0,s.jsx)(e.p,{children:"\u5BF9expr\u8FDB\u884C and \u8BA1\u7B97, \u8FD4\u56DE\u65B0\u7684expr\n\u652F\u6301\u6240\u6709INT\u7C7B\u578B"}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select * from group_bit;\n+-------+\n| value |\n+-------+\n|     3 |\n|     1 |\n|     2 |\n|     4 |\n+-------+\n4 rows in set (0.02 sec)\n\nmysql> select group_bit_and(value) from group_bit;\n+------------------------+\n| group_bit_and(`value`) |\n+------------------------+\n|                      0 |\n+------------------------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"GROUP_BIT_AND,BIT\n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);