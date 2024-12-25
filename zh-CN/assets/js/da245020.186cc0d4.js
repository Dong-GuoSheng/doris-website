"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["772917"],{813834:function(n,e,l){l.r(e),l.d(e,{metadata:()=>a,contentTitle:()=>c,default:()=>d,assets:()=>i,toc:()=>o,frontMatter:()=>t});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-slice","title":"ARRAY_SLICE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-slice.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-slice","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-slice","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_SLICE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_REMOVE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-remove"},"next":{"title":"ARRAY_SORT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-sort"}}'),r=l("785893"),s=l("250065");let t={title:"ARRAY_SLICE",language:"zh-CN"},c=void 0,i={},o=[{value:"array_slice",id:"array_slice",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"array_slice",children:"array_slice"}),"\n",(0,r.jsx)(e.p,{children:"array_slice"}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"ARRAY<T> array_slice(ARRAY<T> arr, BIGINT off, BIGINT len)"})}),"\n",(0,r.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u5B50\u6570\u7EC4\uFF0C\u5305\u542B\u6240\u6709\u4ECE\u6307\u5B9A\u4F4D\u7F6E\u5F00\u59CB\u7684\u6307\u5B9A\u957F\u5EA6\u7684\u5143\u7D20\uFF0C\u5982\u679C\u8F93\u5165\u53C2\u6570\u4E3ANULL\uFF0C\u5219\u8FD4\u56DENULL"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\u5982\u679Coff\u662F\u6B63\u6570\uFF0C\u5219\u8868\u793A\u4ECE\u5DE6\u4FA7\u5F00\u59CB\u7684\u504F\u79FB\u91CF\n\u5982\u679Coff\u662F\u8D1F\u6570\uFF0C\u5219\u8868\u793A\u4ECE\u53F3\u4FA7\u5F00\u59CB\u7684\u504F\u79FB\u91CF\n\u5F53\u6307\u5B9A\u7684off\u4E0D\u5728\u6570\u7EC4\u7684\u5B9E\u9645\u8303\u56F4\u5185\uFF0C\u8FD4\u56DE\u7A7A\u6570\u7EC4\n\u5982\u679Clen\u662F\u8D1F\u6570\uFF0C\u5219\u8868\u793A\u957F\u5EA6\u4E3A0\n"})}),"\n",(0,r.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mysql> select k2, k2[2:2] from array_type_table_nullable;\n+-----------------+-------------------------+\n| k2              | array_slice(`k2`, 2, 2) |\n+-----------------+-------------------------+\n| [1, 2, 3]       | [2, 3]                  |\n| [1, NULL, 3]    | [NULL, 3]               |\n| [2, 3]          | [3]                     |\n| NULL            | NULL                    |\n+-----------------+-------------------------+\n\nmysql> select k2, array_slice(k2, 2, 2) from array_type_table_nullable;\n+-----------------+-------------------------+\n| k2              | array_slice(`k2`, 2, 2) |\n+-----------------+-------------------------+\n| [1, 2, 3]       | [2, 3]                  |\n| [1, NULL, 3]    | [NULL, 3]               |\n| [2, 3]          | [3]                     |\n| NULL            | NULL                    |\n+-----------------+-------------------------+\n\nmysql> select k2, k2[2:2] from array_type_table_nullable_varchar;\n+----------------------------+-------------------------+\n| k2                         | array_slice(`k2`, 2, 2) |\n+----------------------------+-------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']        |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']        |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n+----------------------------+-------------------------+\n\nmysql> select k2, array_slice(k2, 2, 2) from array_type_table_nullable_varchar;\n+----------------------------+-------------------------+\n| k2                         | array_slice(`k2`, 2, 2) |\n+----------------------------+-------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']        |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']        |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n+----------------------------+-------------------------+\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5F53\u6307\u5B9Aoff\u4E3A\u8D1F\u6570:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mysql> select k2, k2[-2:1] from array_type_table_nullable;\n+-----------+--------------------------+\n| k2        | array_slice(`k2`, -2, 1) |\n+-----------+--------------------------+\n| [1, 2, 3] | [2]                      |\n| [1, 2, 3] | [2]                      |\n| [2, 3]    | [2]                      |\n| [2, 3]    | [2]                      |\n+-----------+--------------------------+\n\nmysql> select k2, array_slice(k2, -2, 1) from array_type_table_nullable;\n+-----------+--------------------------+\n| k2        | array_slice(`k2`, -2, 1) |\n+-----------+--------------------------+\n| [1, 2, 3] | [2]                      |\n| [1, 2, 3] | [2]                      |\n| [2, 3]    | [2]                      |\n| [2, 3]    | [2]                      |\n+-----------+--------------------------+\n\nmysql> select k2, k2[-2:2] from array_type_table_nullable_varchar;\n+----------------------------+--------------------------+\n| k2                         | array_slice(`k2`, -2, 2) |\n+----------------------------+--------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']         |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n+----------------------------+--------------------------+\n\nmysql> select k2, array_slice(k2, -2, 2) from array_type_table_nullable_varchar;\n+----------------------------+--------------------------+\n| k2                         | array_slice(`k2`, -2, 2) |\n+----------------------------+--------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']         |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n+----------------------------+--------------------------+\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mysql> select k2, array_slice(k2, 0) from array_type_table;\n+-----------+-------------------------+\n| k2        | array_slice(`k2`, 0) |\n+-----------+-------------------------+\n| [1, 2, 3] | []                      |\n+-----------+-------------------------+\n\nmysql> select k2, array_slice(k2, -5) from array_type_table;\n+-----------+----------------------+\n| k2        | array_slice(`k2`, -5) |\n+-----------+----------------------+\n| [1, 2, 3] | []                   |\n+-----------+----------------------+\n"})}),"\n",(0,r.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.p,{children:"ARRAY,SLICE,ARRAY_SLICE"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return c},a:function(){return t}});var a=l(667294);let r={},s=a.createContext(r);function t(n){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);