"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["829234"],{329944:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"query/query-data/lateral-view","title":"\u5217\u8F6C\u884C (Lateral View)","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/query/query-data/lateral-view.md","sourceDirName":"query/query-data","slug":"/query/query-data/lateral-view","permalink":"/zh-CN/docs/2.0/query/query-data/lateral-view","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"\u5217\u8F6C\u884C (Lateral View)","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u516C\u7528\u8868\u8868\u8FBE\u5F0F\uFF08CTE\uFF09","permalink":"/zh-CN/docs/2.0/query/query-data/cte"},"next":{"title":"\u5206\u6790 (\u7A97\u53E3) \u51FD\u6570","permalink":"/zh-CN/docs/2.0/query/query-data/window-function"}}'),i=t("785893"),a=t("250065");let l={title:"\u5217\u8F6C\u884C (Lateral View)",language:"zh-CN"},s=void 0,o={},c=[{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u4E0E\u751F\u6210\u5668\u51FD\u6570\uFF08\u4F8B\u5982 ",(0,i.jsx)(n.code,{children:"EXPLODE"}),"\uFF09\u7ED3\u5408\u4F7F\u7528\uFF0C\u5C06\u751F\u6210\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A\u884C\u7684\u865A\u62DF\u8868\u3002 ",(0,i.jsx)(n.code,{children:"LATERAL VIEW"})," \u5C06\u884C\u5E94\u7528\u4E8E\u6BCF\u4E2A\u539F\u59CB\u8F93\u51FA\u884C\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"LATERAL VIEW generator_function ( expression [, ...] ) table_identifier AS column_identifier [, ...]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"generator_function"}),"\n",(0,i.jsx)(n.p,{children:"\u751F\u6210\u5668\u51FD\u6570\uFF08EXPLODE\u3001EXPLODE_SPLIT \u7B49\uFF09\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"table_identifier"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"generator_function"})," \u7684\u522B\u540D\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"column_identifier"}),"\n",(0,i.jsxs)(n.p,{children:["\u5217\u51FA\u5217\u522B\u540D ",(0,i.jsx)(n.code,{children:"generator_function"}),"\uFF0C\u5B83\u53EF\u7528\u4E8E\u8F93\u51FA\u884C\u3002\u5217\u6807\u8BC6\u7B26\u7684\u6570\u76EE\u5FC5\u987B\u4E0E generator \u51FD\u6570\u8FD4\u56DE\u7684\u5217\u6570\u5339\u914D\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `person` (\n  `id` int(11) NULL,\n  `name` text NULL,\n  `age` int(11) NULL,\n  `class` int(11) NULL,\n  `address` text NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nCOMMENT 'OLAP'\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 1\",\n\"in_memory\" = \"false\",\n\"storage_format\" = \"V2\",\n\"disable_auto_compaction\" = \"false\"\n);\n\nINSERT INTO person VALUES\n    (100, 'John', 30, 1, 'Street 1'),\n    (200, 'Mary', NULL, 1, 'Street 2'),\n    (300, 'Mike', 80, 3, 'Street 3'),\n    (400, 'Dan', 50, 4, 'Street 4');\n\nmysql> SELECT * FROM person\n    ->     LATERAL VIEW EXPLODE(ARRAY(30, 60)) tableName AS c_age;\n+------+------+------+-------+----------+-------+\n| id   | name | age  | class | address  | c_age |\n+------+------+------+-------+----------+-------+\n|  100 | John |   30 |     1 | Street 1 |    30 |\n|  100 | John |   30 |     1 | Street 1 |    60 |\n|  200 | Mary | NULL |     1 | Street 2 |    30 |\n|  200 | Mary | NULL |     1 | Street 2 |    60 |\n|  300 | Mike |   80 |     3 | Street 3 |    30 |\n|  300 | Mike |   80 |     3 | Street 3 |    60 |\n|  400 | Dan  |   50 |     4 | Street 4 |    30 |\n|  400 | Dan  |   50 |     4 | Street 4 |    60 |\n+------+------+------+-------+----------+-------+\n8 rows in set (0.12 sec)\n\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var r=t(667294);let i={},a=r.createContext(i);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);