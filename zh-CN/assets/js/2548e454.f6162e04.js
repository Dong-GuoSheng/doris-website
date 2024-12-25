"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["101982"],{207338:function(n,e,i){i.r(e),i.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>p,assets:()=>c,toc:()=>d,frontMatter:()=>s});var l=JSON.parse('{"id":"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE","title":"DELETE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE.md","sourceDirName":"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation","slug":"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"DELETE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SELECT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT"},"next":{"title":"UPDATE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE"}}'),t=i("785893"),a=i("250065");let s={title:"DELETE",language:"zh-CN"},r=void 0,c={},d=[{value:"DELETE",id:"delete",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Required Parameters",id:"required-parameters",level:4},{value:"Optional Parameters",id:"optional-parameters",level:4},{value:"Note",id:"note",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(n){let e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"delete",children:"DELETE"}),"\n",(0,t.jsx)(e.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(e.p,{children:"DELETE"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u6309\u6761\u4EF6\u5220\u9664\u6307\u5B9A table\uFF08base index\uFF09partition \u4E2D\u7684\u6570\u636E\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u8BE5\u64CD\u4F5C\u4F1A\u540C\u65F6\u5220\u9664\u548C\u6B64 base index \u76F8\u5173\u7684 rollup index \u7684\u6570\u636E\u3002"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.p,{children:"\u8BED\u6CD5\u4E00\uFF1A\u8BE5\u8BED\u6CD5\u53EA\u80FD\u6307\u5B9A\u8FC7\u6EE4\u8C13\u8BCD"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:"DELETE FROM table_name [table_alias] [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\nWHERE\ncolumn_name op { value | value_list } [ AND column_name op { value | value_list } ...];\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8BED\u6CD5\u4E8C\uFF1A\u8BE5\u8BED\u6CD5\u53EA\u80FD\u5728 UNIQUE KEY \u6A21\u578B\u8868\u4E0A\u4F7F\u7528"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"DELETE FROM table_name [table_alias]\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    [USING additional_tables]\n    WHERE condition\n"})}),"\n",(0,t.jsx)(e.h4,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"table_name: \u6307\u5B9A\u9700\u8981\u5220\u9664\u6570\u636E\u7684\u8868"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"column_name: \u5C5E\u4E8E table_name \u7684\u5217"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"op: \u903B\u8F91\u6BD4\u8F83\u64CD\u4F5C\u7B26\uFF0C\u53EF\u9009\u7C7B\u578B\u5305\u62EC\uFF1A=, >, <, >=, <=, !=, in, not in"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"value | value_list: \u505A\u903B\u8F91\u6BD4\u8F83\u7684\u503C\u6216\u503C\u5217\u8868"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"WHERE condition: \u6307\u5B9A\u4E00\u4E2A\u7528\u4E8E\u9009\u62E9\u5220\u9664\u884C\u7684\u6761\u4EF6"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"PARTITION partition_name | PARTITIONS (partition_name [, partition_name]): \u6307\u5B9A\u6267\u884C\u5220\u9664\u6570\u636E\u7684\u5206\u533A\u540D\uFF0C\u5982\u679C\u8868\u4E0D\u5B58\u5728\u6B64\u5206\u533A\uFF0C\u5219\u62A5\u9519"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"table_alias: \u8868\u7684\u522B\u540D"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"USING additional_tables: \u5982\u679C\u9700\u8981\u5728 WHERE \u8BED\u53E5\u4E2D\u4F7F\u7528\u5176\u4ED6\u7684\u8868\u6765\u5E2E\u52A9\u8BC6\u522B\u9700\u8981\u5220\u9664\u7684\u884C\uFF0C\u5219\u53EF\u4EE5\u5728 USING \u4E2D\u6307\u5B9A\u8FD9\u4E9B\u8868\u6216\u8005\u67E5\u8BE2\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"note",children:"Note"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u4F7F\u7528\u805A\u5408\u7C7B\u7684\u8868\u6A21\u578B\uFF08AGGREGATE\u3001UNIQUE\uFF09\u53EA\u80FD\u6307\u5B9A key \u5217\u4E0A\u7684\u6761\u4EF6\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5F53\u9009\u5B9A\u7684 key \u5217\u4E0D\u5B58\u5728\u4E8E\u67D0\u4E2A rollup \u4E2D\u65F6\uFF0C\u65E0\u6CD5\u8FDB\u884C delete\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u8BED\u6CD5\u4E00\u4E2D\uFF0C\u6761\u4EF6\u4E4B\u95F4\u53EA\u80FD\u662F\u201C\u4E0E\u201D\u7684\u5173\u7CFB\u3002\u82E5\u5E0C\u671B\u8FBE\u6210\u201C\u6216\u201D\u7684\u5173\u7CFB\uFF0C\u9700\u8981\u5C06\u6761\u4EF6\u5206\u5199\u5728\u4E24\u4E2A DELETE \u8BED\u53E5\u4E2D\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u8BED\u6CD5\u4E00\u4E2D\uFF0C\u5982\u679C\u4E3A\u5206\u533A\u8868\uFF0C\u9700\u8981\u6307\u5B9A\u5206\u533A\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\uFF0Cdoris \u4F1A\u4ECE\u6761\u4EF6\u4E2D\u63A8\u65AD\u51FA\u5206\u533A\u3002\u4E24\u79CD\u60C5\u51B5\u4E0B\uFF0Cdoris \u65E0\u6CD5\u4ECE\u6761\u4EF6\u4E2D\u63A8\u65AD\u51FA\u5206\u533A\uFF1A1) \u6761\u4EF6\u4E2D\u4E0D\u5305\u542B\u5206\u533A\u5217\uFF1B2) \u5206\u533A\u5217\u7684 op \u4E3A not in\u3002\u5F53\u5206\u533A\u8868\u672A\u6307\u5B9A\u5206\u533A\uFF0C\u6216\u8005\u65E0\u6CD5\u4ECE\u6761\u4EF6\u4E2D\u63A8\u65AD\u5206\u533A\u7684\u65F6\u5019\uFF0C\u9700\u8981\u8BBE\u7F6E\u4F1A\u8BDD\u53D8\u91CF delete_without_partition \u4E3A true\uFF0C\u6B64\u65F6 delete \u4F1A\u5E94\u7528\u5230\u6240\u6709\u5206\u533A\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,t.jsx)(e.p,{children:"\u8BE5\u529F\u80FD\u81EA Apache Doris  1.2 \u7248\u672C\u8D77\u652F\u6301"})}),"\n",(0,t.jsxs)(e.ol,{start:"5",children:["\n",(0,t.jsx)(e.li,{children:"\u8BE5\u8BED\u53E5\u53EF\u80FD\u4F1A\u964D\u4F4E\u6267\u884C\u540E\u4E00\u6BB5\u65F6\u95F4\u5185\u7684\u67E5\u8BE2\u6548\u7387\u3002\u5F71\u54CD\u7A0B\u5EA6\u53D6\u51B3\u4E8E\u8BED\u53E5\u4E2D\u6307\u5B9A\u7684\u5220\u9664\u6761\u4EF6\u7684\u6570\u91CF\u3002\u6307\u5B9A\u7684\u6761\u4EF6\u8D8A\u591A\uFF0C\u5F71\u54CD\u8D8A\u5927\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5220\u9664 my_table partition p1 \u4E2D k1 \u5217\u503C\u4E3A 3 \u7684\u6570\u636E\u884C"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"DELETE FROM my_table PARTITION p1\n    WHERE k1 = 3;\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:'\u5220\u9664 my_table partition p1 \u4E2D k1 \u5217\u503C\u5927\u4E8E\u7B49\u4E8E 3 \u4E14 k2 \u5217\u503C\u4E3A "abc" \u7684\u6570\u636E\u884C'}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'DELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND k2 = "abc";\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:'\u5220\u9664 my_table partition p1, p2 \u4E2D k1 \u5217\u503C\u5927\u4E8E\u7B49\u4E8E 3 \u4E14 k2 \u5217\u503C\u4E3A "abc" \u7684\u6570\u636E\u884C'}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'DELETE FROM my_table PARTITIONS (p1, p2)\nWHERE k1 >= 3 AND k2 = "abc";\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u4F7F\u7528",(0,t.jsx)(e.code,{children:"t2"}),"\u548C",(0,t.jsx)(e.code,{children:"t3"}),"\u8868\u8FDE\u63A5\u7684\u7ED3\u679C\uFF0C\u5220\u9664",(0,t.jsx)(e.code,{children:"t1"}),"\u4E2D\u7684\u6570\u636E\uFF0C\u5220\u9664\u7684\u8868\u53EA\u652F\u6301 unique \u6A21\u578B"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"-- \u521B\u5EFA t1, t2, t3 \u4E09\u5F20\u8868\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- \u63D2\u5165\u6570\u636E\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- \u5220\u9664 t1 \u4E2D\u7684\u6570\u636E\nDELETE FROM t1\n  USING t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u9884\u671F\u7ED3\u679C\u4E3A\uFF0C\u5220\u9664\u4E86",(0,t.jsx)(e.code,{children:"t1"}),"\u8868",(0,t.jsx)(e.code,{children:"id"}),"\u4E3A",(0,t.jsx)(e.code,{children:"1"}),"\u7684\u5217"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"DELETE\n"})}),"\n",(0,t.jsx)(e.h3,{id:"best-practice",children:"Best Practice"})]})}function p(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return s}});var l=i(667294);let t={},a=l.createContext(t);function s(n){let e=l.useContext(a);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),l.createElement(a.Provider,{value:e},n.children)}}}]);