"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["605583"],{487181:function(n,e,l){l.r(e),l.d(e,{metadata:()=>s,contentTitle:()=>d,default:()=>o,assets:()=>t,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-query/SELECT","title":"SELECT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/data-query/SELECT.md","sourceDirName":"sql-manual/sql-statements/data-query","slug":"/sql-manual/sql-statements/data-query/SELECT","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-query/SELECT","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SELECT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"WIDTH_BUCKET","permalink":"/zh-CN/docs/sql-manual/sql-functions/width-bucket"},"next":{"title":"INSERT","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/DML/INSERT"}}'),i=l("785893"),c=l("250065");let r={title:"SELECT",language:"zh-CN"},d=void 0,t={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function h(n){let e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u4E3B\u8981\u4ECB\u7ECD Select \u8BED\u6CD5\u4F7F\u7528"}),"\n",(0,i.jsx)(e.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT\n    [hint_statement, ...]\n    [ALL | DISTINCT | DISTINCTROW | ALL EXCEPT ( col_name1 [, col_name2, col_name3, ...] )]\n    select_expr [, select_expr ...]\n    [FROM table_references\n      [PARTITION partition_list]\n      [TABLET tabletid_list]\n      [TABLESAMPLE sample_value [ROWS | PERCENT]\n        [REPEATABLE pos_seek]]\n    [WHERE where_condition]\n    [GROUP BY [GROUPING SETS | ROLLUP | CUBE] {col_name | expr | position}]\n    [HAVING where_condition]\n    [ORDER BY {col_name | expr | position}\n      [ASC | DESC], ...]\n    [LIMIT {[offset,] row_count | row_count OFFSET offset}]\n    [INTO OUTFILE 'file_name']\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8BED\u6CD5\u8BF4\u660E\uFF1A"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"select_expr, ...  \u68C0\u7D22\u5E76\u5728\u7ED3\u679C\u4E2D\u663E\u793A\u7684\u5217\uFF0C\u4F7F\u7528\u522B\u540D\u65F6\uFF0Cas \u4E3A\u81EA\u9009\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"select_expr, ...  \u68C0\u7D22\u7684\u76EE\u6807\u8868\uFF08\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u8868\uFF08\u5305\u62EC\u5B50\u67E5\u8BE2\u4EA7\u751F\u7684\u4E34\u65F6\u8868\uFF09"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"where_definition \u68C0\u7D22\u6761\u4EF6\uFF08\u8868\u8FBE\u5F0F\uFF09\uFF0C\u5982\u679C\u5B58\u5728 WHERE \u5B50\u53E5\uFF0C\u5176\u4E2D\u7684\u6761\u4EF6\u5BF9\u884C\u6570\u636E\u8FDB\u884C\u7B5B\u9009\u3002where_condition \u662F\u4E00\u4E2A\u8868\u8FBE\u5F0F\uFF0C\u5BF9\u4E8E\u8981\u9009\u62E9\u7684\u6BCF\u4E00\u884C\uFF0C\u5176\u8BA1\u7B97\u7ED3\u679C\u4E3A true\u3002\u5982\u679C\u6CA1\u6709 WHERE \u5B50\u53E5\uFF0C\u8BE5\u8BED\u53E5\u5C06\u9009\u62E9\u6240\u6709\u884C\u3002\u5728 WHERE \u8868\u8FBE\u5F0F\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u9664\u805A\u5408\u51FD\u6570\u4E4B\u5916\u7684\u4EFB\u4F55 MySQL \u652F\u6301\u7684\u51FD\u6570\u548C\u8FD0\u7B97\u7B26"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"ALL | DISTINCT "})," \uFF1A\u5BF9\u7ED3\u679C\u96C6\u8FDB\u884C\u5237\u9009\uFF0Call \u4E3A\u5168\u90E8\uFF0Cdistinct/distinctrow \u5C06\u5237\u9009\u51FA\u91CD\u590D\u5217\uFF0C\u9ED8\u8BA4\u4E3A all"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"ALL EXCEPT"}),"\uFF1A\u5BF9\u5168\u90E8\uFF08all\uFF09\u7ED3\u679C\u96C6\u8FDB\u884C\u7B5B\u9009\uFF0Cexcept \u6307\u5B9A\u8981\u4ECE\u5168\u90E8\u7ED3\u679C\u96C6\u4E2D\u6392\u9664\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u5217\u7684\u540D\u79F0\u3002\u8F93\u51FA\u4E2D\u5C06\u5FFD\u7565\u6240\u6709\u5339\u914D\u7684\u5217\u540D\u79F0\u3002\u8BE5\u529F\u80FD\u81EA Apache Doris  1.2 \u7248\u672C\u8D77\u652F\u6301"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"INTO OUTFILE 'file_name' "})," \uFF1A\u4FDD\u5B58\u7ED3\u679C\u81F3\u65B0\u6587\u4EF6\uFF08\u4E4B\u524D\u4E0D\u5B58\u5728\uFF09\u4E2D\uFF0C\u533A\u522B\u5728\u4E8E\u4FDD\u5B58\u7684\u683C\u5F0F\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Group by having"}),"\uFF1A\u5BF9\u7ED3\u679C\u96C6\u8FDB\u884C\u5206\u7EC4\uFF0Chaving \u51FA\u73B0\u5219\u5BF9 group by \u7684\u7ED3\u679C\u8FDB\u884C\u5237\u9009\u3002",(0,i.jsx)(e.code,{children:"Grouping Sets"}),"\u3001",(0,i.jsx)(e.code,{children:"Rollup"}),"\u3001",(0,i.jsx)(e.code,{children:"Cube"})," \u4E3A group by \u7684\u6269\u5C55\uFF0C\u8BE6\u7EC6\u53EF\u53C2\u8003",(0,i.jsx)(e.a,{href:"https://doris.apache.org/zh-CN/community/design/grouping_sets_design",children:"GROUPING SETS \u8BBE\u8BA1\u6587\u6863"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Order by "}),": \u5BF9\u6700\u540E\u7684\u7ED3\u679C\u8FDB\u884C\u6392\u5E8F\uFF0COrder by \u901A\u8FC7\u6BD4\u8F83\u4E00\u5217\u6216\u8005\u591A\u5217\u7684\u5927\u5C0F\u6765\u5BF9\u7ED3\u679C\u96C6\u8FDB\u884C\u6392\u5E8F\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"Order by \u662F\u6BD4\u8F83\u8017\u65F6\u8017\u8D44\u6E90\u7684\u64CD\u4F5C\uFF0C\u56E0\u4E3A\u6240\u6709\u6570\u636E\u90FD\u9700\u8981\u53D1\u9001\u5230 1 \u4E2A\u8282\u70B9\u540E\u624D\u80FD\u6392\u5E8F\uFF0C\u6392\u5E8F\u64CD\u4F5C\u76F8\u6BD4\u4E0D\u6392\u5E8F\u64CD\u4F5C\u9700\u8981\u66F4\u591A\u7684\u5185\u5B58\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679C\u9700\u8981\u8FD4\u56DE\u524D N \u4E2A\u6392\u5E8F\u7ED3\u679C\uFF0C\u9700\u8981\u4F7F\u7528 LIMIT \u4ECE\u53E5\uFF1B\u4E3A\u4E86\u9650\u5236\u5185\u5B58\u7684\u4F7F\u7528\uFF0C\u5982\u679C\u7528\u6237\u6CA1\u6709\u6307\u5B9A LIMIT \u4ECE\u53E5\uFF0C\u5219\u9ED8\u8BA4\u8FD4\u56DE\u524D 65535 \u4E2A\u6392\u5E8F\u7ED3\u679C\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Limit n"}),": \u9650\u5236\u8F93\u51FA\u7ED3\u679C\u4E2D\u7684\u884C\u6570\uFF0C",(0,i.jsx)(e.code,{children:"limit m,n"})," \u8868\u793A\u4ECE\u7B2C m \u884C\u5F00\u59CB\u8F93\u51FA n \u6761\u8BB0\u5F55\uFF0C",(0,i.jsx)(e.strong,{children:"\u4F7F\u7528 limit m,n \u7684\u65F6\u5019\u8981\u52A0\u4E0A order by \u624D\u6709\u610F\u4E49\uFF0C\u5426\u5219\u6BCF\u6B21\u6267\u884C\u7684\u6570\u636E\u53EF\u80FD\u4F1A\u4E0D\u4E00\u81F4"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Having"})," \u4ECE\u53E5\u4E0D\u662F\u8FC7\u6EE4\u8868\u4E2D\u7684\u884C\u6570\u636E\uFF0C\u800C\u662F\u8FC7\u6EE4\u805A\u5408\u51FD\u6570\u4EA7\u51FA\u7684\u7ED3\u679C\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u901A\u5E38\u6765\u8BF4 ",(0,i.jsx)(e.code,{children:"having"})," \u8981\u548C\u805A\u5408\u51FD\u6570\uFF08\u4F8B\u5982 :",(0,i.jsx)(e.code,{children:"COUNT(), SUM(), AVG(), MIN(), MAX()"}),"\uFF09\u4EE5\u53CA ",(0,i.jsx)(e.code,{children:"group by"})," \u4ECE\u53E5\u4E00\u8D77\u4F7F\u7528\u3002"]}),"\n",(0,i.jsxs)(e.ol,{start:"11",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["SELECT \u652F\u6301\u4F7F\u7528 PARTITION \u663E\u5F0F\u5206\u533A\u9009\u62E9\uFF0C\u5176\u4E2D\u5305\u542B ",(0,i.jsx)(e.code,{children:"table_reference"})," \u4E2D\u8868\u7684\u540D\u79F0\u540E\u9762\u7684\u5206\u533A\u6216\u5B50\u5206\u533A\uFF08\u6216\u4E24\u8005\uFF09\u5217\u8868\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"[TABLET tids] TABLESAMPLE n [ROWS | PERCENT] [REPEATABLE seek]"}),": \u5728 FROM \u5B50\u53E5\u4E2D\u9650\u5236\u8868\u7684\u8BFB\u53D6\u884C\u6570\uFF0C\u6839\u636E\u6307\u5B9A\u7684\u884C\u6570\u6216\u767E\u5206\u6BD4\u4ECE\u8868\u4E2D\u4F2A\u968F\u673A\u7684\u9009\u62E9\u6570\u4E2A Tablet\uFF0CREPEATABLE \u6307\u5B9A\u79CD\u5B50\u6570\u53EF\u4F7F\u9009\u62E9\u7684\u6837\u672C\u518D\u6B21\u8FD4\u56DE\uFF0C\u6B64\u5916\u4E5F\u53EF\u624B\u52A8\u6307\u5B9A TableID\uFF0C\u6CE8\u610F\u8FD9\u53EA\u80FD\u7528\u4E8E OLAP \u8868\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"hint_statement"}),": \u5728 selectlist \u524D\u9762\u4F7F\u7528 hint \u8868\u793A\u53EF\u4EE5\u901A\u8FC7 hint \u53BB\u5F71\u54CD\u4F18\u5316\u5668\u7684\u884C\u4E3A\u4EE5\u671F\u5F97\u5230\u60F3\u8981\u7684\u6267\u884C\u8BA1\u5212\uFF0C\u8BE6\u60C5\u53EF\u53C2\u8003",(0,i.jsx)(e.a,{href:"https://doris.apache.org/zh-CN/docs/2.0/query/join-optimization/join-hint",children:"joinHint \u4F7F\u7528\u6587\u6863"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8BED\u6CD5\u7EA6\u675F\uFF1A"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"SELECT \u4E5F\u53EF\u7528\u4E8E\u68C0\u7D22\u8BA1\u7B97\u7684\u884C\u800C\u4E0D\u5F15\u7528\u4EFB\u4F55\u8868\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u6240\u6709\u7684\u5B57\u53E5\u5FC5\u987B\u4E25\u683C\u5730\u6309\u7167\u4E0A\u9762\u683C\u5F0F\u6392\u5E8F\uFF0C\u4E00\u4E2A HAVING \u5B50\u53E5\u5FC5\u987B\u4F4D\u4E8E GROUP BY \u5B50\u53E5\u4E4B\u540E\uFF0C\u5E76\u4F4D\u4E8E ORDER BY \u5B50\u53E5\u4E4B\u524D\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u522B\u540D\u5173\u952E\u8BCD AS \u81EA\u9009\u3002\u522B\u540D\u53EF\u7528\u4E8E group by\uFF0Corder by \u548C having"}),"\n",(0,i.jsx)(e.li,{children:"Where \u5B50\u53E5\uFF1A\u6267\u884C WHERE \u8BED\u53E5\u4EE5\u786E\u5B9A\u54EA\u4E9B\u884C\u5E94\u88AB\u5305\u542B\u5728 GROUP BY \u90E8\u5206\u4E2D\uFF0C\u800C HAVING \u7528\u4E8E\u786E\u5B9A\u5E94\u4F7F\u7528\u7ED3\u679C\u96C6\u4E2D\u7684\u54EA\u4E9B\u884C\u3002"}),"\n",(0,i.jsx)(e.li,{children:"HAVING \u5B50\u53E5\u53EF\u4EE5\u5F15\u7528\u603B\u8BA1\u51FD\u6570\uFF0C\u800C WHERE \u5B50\u53E5\u4E0D\u80FD\u5F15\u7528\uFF0C\u5982 count,sum,max,min,avg\uFF0C\u540C\u65F6\uFF0Cwhere \u5B50\u53E5\u53EF\u4EE5\u5F15\u7528\u9664\u603B\u8BA1\u51FD\u6570\u5916\u7684\u5176\u4ED6\u51FD\u6570\u3002Where \u5B50\u53E5\u4E2D\u4E0D\u80FD\u4F7F\u7528\u5217\u522B\u540D\u6765\u5B9A\u4E49\u6761\u4EF6\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Group by \u540E\u8DDF with rollup \u53EF\u4EE5\u5BF9\u7ED3\u679C\u8FDB\u884C\u4E00\u6B21\u6216\u8005\u591A\u6B21\u7EDF\u8BA1\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8054\u63A5\u67E5\u8BE2\uFF1A"})}),"\n",(0,i.jsx)(e.p,{children:"Doris \u652F\u6301\u4EE5\u4E0B JOIN \u8BED\u6CD5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"JOIN\ntable_references:\n    table_reference [, table_reference] \u2026\ntable_reference:\n    table_factor\n  | join_table\ntable_factor:\n    tbl_name [[AS] alias]\n        [{USE|IGNORE|FORCE} INDEX (key_list)]\n  | ( table_references )\n  | { OJ table_reference LEFT OUTER JOIN table_reference\n        ON conditional_expr }\njoin_table:\n    table_reference [INNER | CROSS] JOIN table_factor [join_condition]\n  | table_reference LEFT [OUTER] JOIN table_reference join_condition\n  | table_reference NATURAL [LEFT [OUTER]] JOIN table_factor\n  | table_reference RIGHT [OUTER] JOIN table_reference join_condition\n  | table_reference NATURAL [RIGHT [OUTER]] JOIN table_factor\njoin_condition:\n    ON conditional_expr\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"UNION \u8BED\u6CD5\uFF1A"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT ...\nUNION [ALL| DISTINCT] SELECT ......\n[UNION [ALL| DISTINCT] SELECT ...]\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"UNION"})," \u7528\u4E8E\u5C06\u591A\u4E2A ",(0,i.jsx)(e.code,{children:"SELECT"})," \u8BED\u53E5 \u7684\u7ED3\u679C\u7EC4\u5408 \u5230\u5355\u4E2A\u7ED3\u679C\u96C6\u4E2D\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u7B2C\u4E00\u4E2A ",(0,i.jsx)(e.code,{children:"SELECT"})," \u8BED\u53E5\u4E2D\u7684\u5217\u540D\u79F0\u7528\u4F5C\u8FD4\u56DE\u7ED3\u679C\u7684\u5217\u540D\u79F0\u3002\u5728\u6BCF\u4E2A ",(0,i.jsx)(e.code,{children:"SELECT"}),"\u8BED\u53E5\u7684 \u76F8\u5E94\u4F4D\u7F6E\u5217\u51FA\u7684\u9009\u5B9A\u5217 \u5E94\u5177\u6709\u76F8\u540C\u7684\u6570\u636E\u7C7B\u578B\u3002 \uFF08\u4F8B\u5982\uFF0C\u7B2C\u4E00\u4E2A\u8BED\u53E5\u9009\u62E9\u7684\u7B2C\u4E00\u5217\u5E94\u8BE5\u4E0E\u5176\u4ED6\u8BED\u53E5\u9009\u62E9\u7684\u7B2C\u4E00\u5217\u5177\u6709\u76F8\u540C\u7684\u7C7B\u578B\u3002\uFF09"]}),"\n",(0,i.jsxs)(e.p,{children:["\u9ED8\u8BA4\u884C\u4E3A ",(0,i.jsx)(e.code,{children:"UNION"}),"\u662F\u4ECE\u7ED3\u679C\u4E2D\u5220\u9664\u91CD\u590D\u7684\u884C\u3002\u53EF\u9009 ",(0,i.jsx)(e.code,{children:"DISTINCT"})," \u5173\u952E\u5B57\u9664\u4E86\u9ED8\u8BA4\u503C\u4E4B\u5916\u6CA1\u6709\u4EFB\u4F55\u6548\u679C\uFF0C\u56E0\u4E3A\u5B83\u8FD8\u6307\u5B9A\u4E86\u91CD\u590D\u884C\u5220\u9664\u3002\u4F7F\u7528\u53EF\u9009 ",(0,i.jsx)(e.code,{children:"ALL"})," \u5173\u952E\u5B57\uFF0C\u4E0D\u4F1A\u53D1\u751F\u91CD\u590D\u884C\u5220\u9664\uFF0C\u7ED3\u679C\u5305\u62EC\u6240\u6709 ",(0,i.jsx)(e.code,{children:"SELECT"})," \u8BED\u53E5\u4E2D\u7684 \u6240\u6709\u5339\u914D\u884C"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"WITH \u8BED\u53E5"}),"\uFF1A"]}),"\n",(0,i.jsxs)(e.p,{children:["\u8981\u6307\u5B9A\u516C\u7528\u8868\u8868\u8FBE\u5F0F\uFF0C\u8BF7\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"WITH"})," \u5177\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u9017\u53F7\u5206\u9694\u5B50\u53E5\u7684\u5B50\u53E5\u3002\u6BCF\u4E2A\u5B50\u6761\u6B3E\u90FD\u63D0\u4F9B\u4E00\u4E2A\u5B50\u67E5\u8BE2\uFF0C\u7528\u4E8E\u751F\u6210\u7ED3\u679C\u96C6\uFF0C\u5E76\u5C06\u540D\u79F0\u4E0E\u5B50\u67E5\u8BE2\u76F8\u5173\u8054\u3002\u4E0B\u9762\u7684\u793A\u4F8B\u5B9A\u4E49\u540D\u4E3A\u7684 CTE ",(0,i.jsx)(e.code,{children:"cte1"})," \u548C ",(0,i.jsx)(e.code,{children:"cte2"})," \u4E2D ",(0,i.jsx)(e.code,{children:"WITH"})," \u5B50\u53E5\uFF0C\u5E76\u4E14\u662F\u6307\u5728\u5B83\u4EEC\u7684\u9876\u5C42 ",(0,i.jsx)(e.code,{children:"SELECT"})," \u4E0B\u9762\u7684 ",(0,i.jsx)(e.code,{children:"WITH"})," \u5B50\u53E5\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"WITH\n  cte1 AS (SELECT a\uFF0Cb FROM table1),\n  cte2 AS (SELECT c\uFF0Cd FROM table2)\nSELECT b\uFF0Cd FROM cte1 JOIN cte2\nWHERE cte1.a = cte2.c;\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u5305\u542B\u8BE5 ",(0,i.jsx)(e.code,{children:"WITH"}),"\u5B50\u53E5 \u7684\u8BED\u53E5\u4E2D\uFF0C\u53EF\u4EE5\u5F15\u7528\u6BCF\u4E2A CTE \u540D\u79F0\u4EE5\u8BBF\u95EE\u76F8\u5E94\u7684 CTE \u7ED3\u679C\u96C6\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"CTE \u540D\u79F0\u53EF\u4EE5\u5728\u5176\u4ED6 CTE \u4E2D\u5F15\u7528\uFF0C\u4ECE\u800C\u53EF\u4EE5\u57FA\u4E8E\u5176\u4ED6 CTE \u5B9A\u4E49 CTE\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u76EE\u524D\u4E0D\u652F\u6301\u9012\u5F52\u7684 CTE\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67E5\u8BE2\u5E74\u9F84\u5206\u522B\u662F 18,20,25 \u7684\u5B66\u751F\u59D3\u540D"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select Name from student where age in (18,20,25);\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"ALL EXCEPT \u793A\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"-- \u67E5\u8BE2\u9664\u4E86\u5B66\u751F\u5E74\u9F84\u7684\u6240\u6709\u4FE1\u606F\nselect * except(age) from student; \n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"GROUP BY \u793A\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"--\u67E5\u8BE2 tb_book \u8868\uFF0C\u6309\u7167 type \u5206\u7EC4\uFF0C\u6C42\u6BCF\u7C7B\u56FE\u4E66\u7684\u5E73\u5747\u4EF7\u683C\uFF0C\nselect type,avg(price) from tb_book group by type;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"DISTINCT \u4F7F\u7528"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"--\u67E5\u8BE2 tb_book \u8868\uFF0C\u9664\u53BB\u91CD\u590D\u7684 type \u6570\u636E\nselect distinct type from tb_book;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"ORDER BY \u793A\u4F8B"}),"\n",(0,i.jsx)(e.p,{children:"\u5BF9\u67E5\u8BE2\u7ED3\u679C\u8FDB\u884C\u5347\u5E8F\uFF08\u9ED8\u8BA4\uFF09\u6216\u964D\u5E8F\uFF08DESC\uFF09\u6392\u5217\u3002\u5347\u5E8F NULL \u5728\u6700\u524D\u9762\uFF0C\u964D\u5E8F NULL \u5728\u6700\u540E\u9762"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"--\u67E5\u8BE2 tb_book \u8868\u4E2D\u7684\u6240\u6709\u8BB0\u5F55\uFF0C\u6309\u7167 id \u964D\u5E8F\u6392\u5217\uFF0C\u663E\u793A\u4E09\u6761\u8BB0\u5F55\nselect * from tb_book order by id desc limit 3;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"LIKE \u6A21\u7CCA\u67E5\u8BE2"}),"\n",(0,i.jsxs)(e.p,{children:["\u53EF\u5B9E\u73B0\u6A21\u7CCA\u67E5\u8BE2\uFF0C\u5B83\u6709\u4E24\u79CD\u901A\u914D\u7B26\uFF1A",(0,i.jsx)(e.code,{children:"%"}),"\u548C",(0,i.jsx)(e.code,{children:"_"}),"\uFF0C",(0,i.jsx)(e.code,{children:"%"}),"\u53EF\u4EE5\u5339\u914D\u4E00\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\uFF0C",(0,i.jsx)(e.code,{children:"_"}),"\u53EF\u4EE5\u5339\u914D\u4E00\u4E2A\u5B57\u7B26"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"--\u67E5\u627E\u6240\u6709\u7B2C\u4E8C\u4E2A\u5B57\u7B26\u662F h \u7684\u56FE\u4E66\nselect * from tb_book where name like('_h%');\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"LIMIT \u9650\u5B9A\u7ED3\u679C\u884C\u6570"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"--1.\u964D\u5E8F\u663E\u793A 3 \u6761\u8BB0\u5F55\nselect * from tb_book order by price desc limit 3;\n\n--2.\u4ECE id=1 \u663E\u793A 4 \u6761\u8BB0\u5F55\nselect * from tb_book where id limit 1,4;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"CONCAT \u8054\u5408\u591A\u5217"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'--\u628A name \u548C price \u5408\u5E76\u6210\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32\u8F93\u51FA\nselect id,concat(name,":",price) as info,type from tb_book;\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4F7F\u7528\u51FD\u6570\u548C\u8868\u8FBE\u5F0F"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'--\u8BA1\u7B97 tb_book \u8868\u4E2D\u5404\u7C7B\u56FE\u4E66\u7684\u603B\u4EF7\u683C\nselect sum(price) as total,type from tb_book group by type;\n--price \u6253\u516B\u6298\nselect *,(price * 0.8) as "\u516B\u6298" from tb_book;\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"UNION \u793A\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT a FROM t1 WHERE a = 10 AND B = 1 ORDER by a LIMIT 10\nUNION\nSELECT a FROM t2 WHERE a = 11 AND B = 2 ORDER by a LIMIT 10;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"WITH \u5B50\u53E5\u793A\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"WITH cte AS\n(\n  SELECT 1 AS col1, 2 AS col2\n  UNION ALL\n  SELECT 3, 4\n)\nSELECT col1, col2 FROM cte;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"JOIN \u793A\u4F8B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM t1 LEFT JOIN (t2, t3, t4)\n                 ON (t2.a = t1.a AND t3.b = t1.b AND t4.c = t1.c)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7B49\u540C\u4E8E"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM t1 LEFT JOIN (t2 CROSS JOIN t3 CROSS JOIN t4)\n                 ON (t2.a = t1.a AND t3.b = t1.b AND t4.c = t1.c)\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"INNER JOIN"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT t1.name, t2.salary\n  FROM employee AS t1 INNER JOIN info AS t2 ON t1.name = t2.name;\n\nSELECT t1.name, t2.salary\n  FROM employee t1 INNER JOIN info t2 ON t1.name = t2.name;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"LEFT JOIN"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT left_tbl.*\n  FROM left_tbl LEFT JOIN right_tbl ON left_tbl.id = right_tbl.id\n  WHERE right_tbl.id IS NULL;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"RIGHT JOIN"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"mysql> SELECT * FROM t1 RIGHT JOIN t2 ON (t1.a = t2.a);\n+------+------+------+------+\n| a    | b    | a    | c    |\n+------+------+------+------+\n|    2 | y    |    2 | z    |\n| NULL | NULL |    3 | w    |\n+------+------+------+------+\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"TABLESAMPLE"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"--\u5728t1\u4E2D\u4F2A\u968F\u673A\u7684\u62BD\u68371000\u884C\u3002\u6CE8\u610F\u5B9E\u9645\u662F\u6839\u636E\u8868\u7684\u7EDF\u8BA1\u4FE1\u606F\u9009\u62E9\u82E5\u5E72Tablet\uFF0C\u88AB\u9009\u62E9\u7684Tablet\u603B\u884C\u6570\u53EF\u80FD\u5927\u4E8E1000\uFF0C\u6240\u4EE5\u82E5\u60F3\u660E\u786E\u8FD4\u56DE1000\u884C\u9700\u8981\u52A0\u4E0ALimit\u3002\nSELECT * FROM t1 TABLET(10001) TABLESAMPLE(1000 ROWS) REPEATABLE 2 limit 1000;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"SELECT\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5173\u4E8E SELECT \u5B50\u53E5\u7684\u4E00\u4E9B\u9644\u52A0\u77E5\u8BC6"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53EF\u4EE5\u4F7F\u7528 AS alias_name \u4E3A select_expr \u6307\u5B9A\u522B\u540D\u3002\u522B\u540D\u7528\u4F5C\u8868\u8FBE\u5F0F\u7684\u5217\u540D\uFF0C\u53EF\u7528\u4E8E GROUP BY\uFF0CORDER BY \u6216 HAVING \u5B50\u53E5\u3002AS \u5173\u952E\u5B57\u662F\u5728\u6307\u5B9A\u5217\u7684\u522B\u540D\u65F6\u517B\u6210\u4F7F\u7528 AS \u662F\u4E00\u79CD\u597D\u4E60\u60EF\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"FROM \u540E\u7684 table_references \u6307\u793A\u53C2\u4E0E\u67E5\u8BE2\u7684\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u8868\u3002\u5982\u679C\u5217\u51FA\u4E86\u591A\u4E2A\u8868\uFF0C\u5C31\u4F1A\u6267\u884C JOIN \u64CD\u4F5C\u3002\u800C\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u6307\u5B9A\u8868\uFF0C\u90FD\u53EF\u4EE5\u4E3A\u5176\u5B9A\u4E49\u522B\u540D"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"SELECT \u540E\u88AB\u9009\u62E9\u7684\u5217\uFF0C\u53EF\u4EE5\u5728 ORDER IN \u548C GROUP BY \u4E2D\uFF0C\u901A\u8FC7\u5217\u540D\u3001\u5217\u522B\u540D\u6216\u8005\u4EE3\u8868\u5217\u4F4D\u7F6E\u7684\u6574\u6570\uFF08\u4ECE 1 \u5F00\u59CB\uFF09\u6765\u5F15\u7528"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT college, region, seed FROM tournament\n  ORDER BY region, seed;\n\nSELECT college, region AS r, seed AS s FROM tournament\n  ORDER BY r, s;\n\nSELECT college, region, seed FROM tournament\n  ORDER BY 2, 3;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5982\u679C ORDER BY \u51FA\u73B0\u5728\u5B50\u67E5\u8BE2\u4E2D\uFF0C\u5E76\u4E14\u4E5F\u5E94\u7528\u4E8E\u5916\u90E8\u67E5\u8BE2\uFF0C\u5219\u6700\u5916\u5C42\u7684 ORDER BY \u4F18\u5148\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5982\u679C\u4F7F\u7528\u4E86 GROUP BY\uFF0C\u88AB\u5206\u7EC4\u7684\u5217\u4F1A\u81EA\u52A8\u6309\u5347\u5E8F\u6392\u5217\uFF08\u5C31\u597D\u50CF\u6709\u4E00\u4E2A ORDER BY \u8BED\u53E5\u540E\u9762\u8DDF\u4E86\u540C\u6837\u7684\u5217\uFF09\u3002\u5982\u679C\u8981\u907F\u514D GROUP BY \u56E0\u4E3A\u81EA\u52A8\u6392\u5E8F\u751F\u6210\u7684\u5F00\u9500\uFF0C\u6DFB\u52A0 ORDER BY NULL \u53EF\u4EE5\u89E3\u51B3\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT a, COUNT(b) FROM test_table GROUP BY a ORDER BY NULL;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5F53\u4F7F\u7528 ORDER BY \u6216 GROUP BY \u5BF9 SELECT \u4E2D\u7684\u5217\u8FDB\u884C\u6392\u5E8F\u65F6\uFF0C\u670D\u52A1\u5668\u4EC5\u4F7F\u7528 max_sort_length \u7CFB\u7EDF\u53D8\u91CF\u6307\u793A\u7684\u521D\u59CB\u5B57\u8282\u6570\u5BF9\u503C\u8FDB\u884C\u6392\u5E8F\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Having \u5B50\u53E5\u4E00\u822C\u5E94\u7528\u5728\u6700\u540E\uFF0C\u6070\u597D\u5728\u7ED3\u679C\u96C6\u88AB\u8FD4\u56DE\u7ED9 MySQL \u5BA2\u6237\u7AEF\u524D\uFF0C\u4E14\u6CA1\u6709\u8FDB\u884C\u4F18\u5316\u3002\uFF08\u800C LIMIT \u5E94\u7528\u5728 HAVING \u540E\uFF09"}),"\n",(0,i.jsx)(e.p,{children:"SQL \u6807\u51C6\u8981\u6C42\uFF1AHAVING \u5FC5\u987B\u5F15\u7528\u5728 GROUP BY \u5217\u8868\u4E2D\u6216\u8005\u805A\u5408\u51FD\u6570\u4F7F\u7528\u7684\u5217\u3002\u7136\u800C\uFF0CMySQL \u5BF9\u6B64\u8FDB\u884C\u4E86\u6269\u5C55\uFF0C\u5B83\u5141\u8BB8 HAVING \u5F15\u7528 Select \u5B50\u53E5\u5217\u8868\u4E2D\u7684\u5217\uFF0C\u8FD8\u6709\u5916\u90E8\u5B50\u67E5\u8BE2\u7684\u5217\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679C HAVING \u5F15\u7528\u7684\u5217\u5177\u6709\u6B67\u4E49\uFF0C\u4F1A\u6709\u8B66\u544A\u4EA7\u751F\u3002\u4E0B\u9762\u7684\u8BED\u53E5\u4E2D\uFF0Ccol2 \u5177\u6709\u6B67\u4E49\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT COUNT(col1) AS col2 FROM t GROUP BY col2 HAVING col2 = 2;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5207\u8BB0\u4E0D\u8981\u5728\u8BE5\u4F7F\u7528 WHERE \u7684\u5730\u65B9\u4F7F\u7528 HAVING\u3002HAVING \u662F\u548C GROUP BY \u642D\u914D\u7684\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"HAVING \u5B50\u53E5\u53EF\u4EE5\u5F15\u7528\u805A\u5408\u51FD\u6570\uFF0C\u800C WHERE \u4E0D\u80FD\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT user, MAX(salary) FROM users\n  GROUP BY user HAVING MAX(salary) > 10;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"LIMIT \u5B50\u53E5\u53EF\u7528\u4E8E\u7EA6\u675F SELECT \u8BED\u53E5\u8FD4\u56DE\u7684\u884C\u6570\u3002LIMIT \u53EF\u4EE5\u6709\u4E00\u4E2A\u6216\u8005\u4E24\u4E2A\u53C2\u6570\uFF0C\u90FD\u5FC5\u987B\u4E3A\u975E\u8D1F\u6574\u6570\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"/*\u53D6\u56DE\u7ED3\u679C\u96C6\u4E2D\u7684 6~15 \u884C*/\nSELECT * FROM tbl LIMIT 5,10;\n/*\u90A3\u5982\u679C\u8981\u53D6\u56DE\u4E00\u4E2A\u8BBE\u5B9A\u67D0\u4E2A\u504F\u79FB\u91CF\u4E4B\u540E\u7684\u6240\u6709\u884C\uFF0C\u53EF\u4EE5\u4E3A\u7B2C\u4E8C\u53C2\u6570\u8BBE\u5B9A\u4E00\u4E2A\u975E\u5E38\u5927\u7684\u5E38\u91CF\u3002\u4EE5\u4E0B\u67E5\u8BE2\u53D6\u56DE\u4ECE\u7B2C 96 \u884C\u8D77\u7684\u6240\u6709\u6570\u636E*/\nSELECT * FROM tbl LIMIT 95,18446744073709551615;\n/*\u82E5 LIMIT \u53EA\u6709\u4E00\u4E2A\u53C2\u6570\uFF0C\u5219\u53C2\u6570\u6307\u5B9A\u5E94\u8BE5\u53D6\u56DE\u7684\u884C\u6570\uFF0C\u504F\u79FB\u91CF\u9ED8\u8BA4\u4E3A 0\uFF0C\u5373\u4ECE\u7B2C\u4E00\u884C\u8D77*/\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"SELECT...INTO \u53EF\u4EE5\u8BA9\u67E5\u8BE2\u7ED3\u679C\u5199\u5165\u5230\u6587\u4EF6\u4E2D"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"SELECT \u5173\u952E\u5B57\u7684\u4FEE\u9970\u7B26"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53BB\u91CD"}),"\n",(0,i.jsx)(e.p,{children:"ALL \u548C DISTINCT \u4FEE\u9970\u7B26\u6307\u5B9A\u662F\u5426\u5BF9\u7ED3\u679C\u96C6\u4E2D\u7684\u884C\uFF08\u5E94\u8BE5\u4E0D\u662F\u67D0\u4E2A\u5217\uFF09\u53BB\u91CD\u3002"}),"\n",(0,i.jsx)(e.p,{children:"ALL \u662F\u9ED8\u8BA4\u4FEE\u9970\u7B26\uFF0C\u5373\u6EE1\u8DB3\u8981\u6C42\u7684\u6240\u6709\u884C\u90FD\u8981\u88AB\u53D6\u56DE\u6765\u3002"}),"\n",(0,i.jsx)(e.p,{children:"DISTINCT \u5220\u9664\u91CD\u590D\u7684\u884C\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5B50\u67E5\u8BE2\u7684\u4E3B\u8981\u4F18\u52BF"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5B50\u67E5\u8BE2\u5141\u8BB8\u7ED3\u6784\u5316\u7684\u67E5\u8BE2\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u628A\u4E00\u4E2A\u8BED\u53E5\u7684\u6BCF\u4E2A\u90E8\u5206\u9694\u79BB\u5F00\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u6709\u4E9B\u64CD\u4F5C\u9700\u8981\u590D\u6742\u7684\u8054\u5408\u548C\u5173\u8054\u3002\u5B50\u67E5\u8BE2\u63D0\u4F9B\u4E86\u5176\u5B83\u7684\u65B9\u6CD5\u6765\u6267\u884C\u8FD9\u4E9B\u64CD\u4F5C"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u52A0\u901F\u67E5\u8BE2"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5C3D\u53EF\u80FD\u5229\u7528 Doris \u7684\u5206\u533A\u5206\u6876\u4F5C\u4E3A\u6570\u636E\u8FC7\u6EE4\u6761\u4EF6\uFF0C\u51CF\u5C11\u6570\u636E\u626B\u63CF\u8303\u56F4"}),"\n",(0,i.jsx)(e.li,{children:"\u5145\u5206\u5229\u7528 Doris \u7684\u524D\u7F00\u7D22\u5F15\u5B57\u6BB5\u4F5C\u4E3A\u6570\u636E\u8FC7\u6EE4\u6761\u4EF6\u52A0\u901F\u67E5\u8BE2\u901F\u5EA6"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"UNION"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u53EA\u4F7F\u7528 union \u5173\u952E\u8BCD\u548C\u4F7F\u7528 union disitnct \u7684\u6548\u679C\u662F\u76F8\u540C\u7684\u3002\u7531\u4E8E\u53BB\u91CD\u5DE5\u4F5C\u662F\u6BD4\u8F83\u8017\u8D39\u5185\u5B58\u7684\uFF0C\u56E0\u6B64\u4F7F\u7528 union all \u64CD\u4F5C\u67E5\u8BE2\u901F\u5EA6\u4F1A\u5FEB\u4E9B\uFF0C\u8017\u8D39\u5185\u5B58\u4F1A\u5C11\u4E9B\u3002\u5982\u679C\u7528\u6237\u60F3\u5BF9\u8FD4\u56DE\u7ED3\u679C\u96C6\u8FDB\u884C order by \u548C limit \u64CD\u4F5C\uFF0C\u9700\u8981\u5C06 union \u64CD\u4F5C\u653E\u5728\u5B50\u67E5\u8BE2\u4E2D\uFF0C\u7136\u540E select from subquery\uFF0C\u6700\u540E\u628A subquery \u548C order by \u653E\u5728\u5B50\u67E5\u8BE2\u5916\u9762\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select * from (select age from student_01 union all select age from student_02) as t1 \norder by age limit 4;\n\n+-------------+\n|     age     |\n+-------------+\n|      18     |\n|      19     |\n|      20     |\n|      21     |\n+-------------+\n4 rows in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"JOIN"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5728 inner join \u6761\u4EF6\u91CC\u9664\u4E86\u652F\u6301\u7B49\u503C join\uFF0C\u8FD8\u652F\u6301\u4E0D\u7B49\u503C join\uFF0C\u4E3A\u4E86\u6027\u80FD\u8003\u8651\uFF0C\u63A8\u8350\u4F7F\u7528\u7B49\u503C join\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5176\u5B83 join \u53EA\u652F\u6301\u7B49\u503C join"}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return d},a:function(){return r}});var s=l(667294);let i={},c=s.createContext(i);function r(n){let e=s.useContext(c);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);