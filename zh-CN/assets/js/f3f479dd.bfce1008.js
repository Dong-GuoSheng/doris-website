"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["602289"],{46217:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>t,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/materialized-view/CREATE-MATERIALIZED-VIEW","title":"CREATE MATERIALIZED VIEW","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/table-and-view/materialized-view/CREATE-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/materialized-view","slug":"/sql-manual/sql-statements/table-and-view/materialized-view/CREATE-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/materialized-view/CREATE-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CREATE MATERIALIZED VIEW","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/view/SHOW-VIEW"},"next":{"title":"ALTER ASYNC MATERIALIZED VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/materialized-view/ALTER-ASYNC-MATERIALIZED-VIEW"}}'),a=l("785893"),r=l("250065");let i={title:"CREATE MATERIALIZED VIEW",language:"zh-CN"},c=void 0,d={},t=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function u(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u521B\u5EFA\u7269\u5316\u89C6\u56FE\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u8BE5\u64CD\u4F5C\u4E3A\u5F02\u6B65\u64CD\u4F5C\uFF0C\u63D0\u4EA4\u6210\u529F\u540E\uFF0C\u9700\u901A\u8FC7 ",(0,a.jsx)(n.a,{href:"../table/SHOW-ALTER-TABLE-MATERIALIZED-VIEW",children:"SHOW ALTER TABLE MATERIALIZED VIEW"})," \u67E5\u770B\u4F5C\u4E1A\u8FDB\u5EA6\u3002\u5728\u663E\u793A FINISHED \u540E\u65E2\u53EF\u901A\u8FC7 ",(0,a.jsx)(n.code,{children:"desc [table_name] all"})," \u547D\u4EE4\u6765\u67E5\u770B\u7269\u5316\u89C6\u56FE\u7684 schema \u4E86\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE MATERIALIZED VIEW < MV name > as < query >\n[PROPERTIES ("key" = "value")]\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"MV name"}),"\uFF1A\u7269\u5316\u89C6\u56FE\u7684\u540D\u79F0\uFF0C\u5FC5\u586B\u9879\u3002\u76F8\u540C\u8868\u7684\u7269\u5316\u89C6\u56FE\u540D\u79F0\u4E0D\u53EF\u91CD\u590D\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"query"}),"\uFF1A\u7528\u4E8E\u6784\u5EFA\u7269\u5316\u89C6\u56FE\u7684\u67E5\u8BE2\u8BED\u53E5\uFF0C\u67E5\u8BE2\u8BED\u53E5\u7684\u7ED3\u679C\u65E2\u7269\u5316\u89C6\u56FE\u7684\u6570\u636E\u3002\u76EE\u524D\u652F\u6301\u7684 query \u683C\u5F0F\u4E3A\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT select_expr[, select_expr ...]\nFROM [Base view name]\nGROUP BY column_name[, column_name ...]\nORDER BY column_name[, column_name ...]\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8BED\u6CD5\u548C\u67E5\u8BE2\u8BED\u53E5\u8BED\u6CD5\u4E00\u81F4\u3002"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"select_expr"}),"\uFF1A\u7269\u5316\u89C6\u56FE\u7684 schema \u4E2D\u6240\u6709\u7684\u5217\u3002\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u81F3\u5C11\u5305\u542B\u4E00\u4E2A\u5355\u5217\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"base view name"}),"\uFF1A\u7269\u5316\u89C6\u56FE\u7684\u539F\u59CB\u8868\u540D\uFF0C\u5FC5\u586B\u9879\u3002\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5FC5\u987B\u662F\u5355\u8868\uFF0C\u4E14\u975E\u5B50\u67E5\u8BE2"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"group by"}),"\uFF1A\u7269\u5316\u89C6\u56FE\u7684\u5206\u7EC4\u5217\uFF0C\u9009\u586B\u9879\u3002\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u4E0D\u586B\u5219\u6570\u636E\u4E0D\u8FDB\u884C\u5206\u7EC4\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"order by"}),"\uFF1A\u7269\u5316\u89C6\u56FE\u7684\u6392\u5E8F\u5217\uFF0C\u9009\u586B\u9879\u3002\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u6392\u5E8F\u5217\u7684\u58F0\u660E\u987A\u5E8F\u5FC5\u987B\u548C select_expr \u4E2D\u5217\u58F0\u660E\u987A\u5E8F\u4E00\u81F4\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u5982\u679C\u4E0D\u58F0\u660E order by\uFF0C\u5219\u6839\u636E\u89C4\u5219\u81EA\u52A8\u8865\u5145\u6392\u5E8F\u5217\u3002\u5982\u679C\u7269\u5316\u89C6\u56FE\u662F\u805A\u5408\u7C7B\u578B\uFF0C\u5219\u6240\u6709\u7684\u5206\u7EC4\u5217\u81EA\u52A8\u8865\u5145\u4E3A\u6392\u5E8F\u5217\u3002\u5982\u679C\u7269\u5316\u89C6\u56FE\u662F\u975E\u805A\u5408\u7C7B\u578B\uFF0C\u5219\u524D 36 \u4E2A\u5B57\u8282\u81EA\u52A8\u8865\u5145\u4E3A\u6392\u5E8F\u5217\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u5982\u679C\u81EA\u52A8\u8865\u5145\u7684\u6392\u5E8F\u4E2A\u6570\u5C0F\u4E8E 3 \u4E2A\uFF0C\u5219\u524D\u4E09\u4E2A\u4F5C\u4E3A\u6392\u5E8F\u5217\u3002\u5982\u679C query \u4E2D\u5305\u542B\u5206\u7EC4\u5217\u7684\u8BDD\uFF0C\u5219\u6392\u5E8F\u5217\u5FC5\u987B\u548C\u5206\u7EC4\u5217\u4E00\u81F4\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"properties"}),"\n",(0,a.jsx)(n.p,{children:"\u58F0\u660E\u7269\u5316\u89C6\u56FE\u7684\u4E00\u4E9B\u914D\u7F6E\uFF0C\u9009\u586B\u9879\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'PROPERTIES ("key" = "value", "key" = "value" ...)\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u4EE5\u4E0B\u51E0\u4E2A\u914D\u7F6E\uFF0C\u5747\u53EF\u58F0\u660E\u5728\u6B64\u5904\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:" short_key: \u6392\u5E8F\u5217\u7684\u4E2A\u6570\u3002\n timeout: \u7269\u5316\u89C6\u56FE\u6784\u5EFA\u7684\u8D85\u65F6\u65F6\u95F4\u3002\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsx)(n.p,{children:"Base \u8868\u7ED3\u6784\u4E3A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql> desc duplicate_table;\n+-------+--------+------+------+---------+-------+\n| Field | Type   | Null | Key  | Default | Extra |\n+-------+--------+------+------+---------+-------+\n| k1    | INT    | Yes  | true | N/A     |       |\n| k2    | INT    | Yes  | true | N/A     |       |\n| k3    | BIGINT | Yes  | true | N/A     |       |\n| k4    | BIGINT | Yes  | true | N/A     |       |\n+-------+--------+------+------+---------+-------+\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'create table duplicate_table(\n	k1 int null,\n	k2 int null,\n	k3 bigint null,\n	k4 bigint null\n)\nduplicate key (k1,k2,k3,k4)\ndistributed BY hash(k4) buckets 3\nproperties("replication_num" = "1");\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A\u5982\u679C\u7269\u5316\u89C6\u56FE\u5305\u542B\u4E86 base \u8868\u7684\u5206\u533A\u5217\u548C\u5206\u6876\u5217\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u5217\u5FC5\u987B\u4F5C\u4E3A\u7269\u5316\u89C6\u56FE\u4E2D\u7684 key \u5217"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u4EC5\u5305\u542B\u539F\u59CB\u8868\uFF08k1, k2\uFF09\u5217\u7684\u7269\u5316\u89C6\u56FE"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create materialized view k1_k2 as\nselect k2, k1 from duplicate_table;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7269\u5316\u89C6\u56FE\u7684 schema \u5982\u4E0B\u56FE\uFF0C\u7269\u5316\u89C6\u56FE\u4EC5\u5305\u542B\u4E24\u5217 k1, k2 \u4E14\u4E0D\u5E26\u4EFB\u4F55\u805A\u5408"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+-----------------+-------+--------+------+------+---------+-------+\n| IndexName       | Field | Type   | Null | Key  | Default | Extra |\n+-----------------+-------+--------+------+------+---------+-------+\n| k2_k1           | k2    | INT    | Yes  | true | N/A     |       |\n|                 | k1    | INT    | Yes  | true | N/A     |       |\n+-----------------+-------+--------+------+------+---------+-------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u4EE5 k2 \u4E3A\u6392\u5E8F\u5217\u7684\u7269\u5316\u89C6\u56FE"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create materialized view k2_order as\nselect k2, k1 from duplicate_table order by k2;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7269\u5316\u89C6\u56FE\u7684 schema \u5982\u4E0B\u56FE\uFF0C\u7269\u5316\u89C6\u56FE\u4EC5\u5305\u542B\u4E24\u5217 k2, k1\uFF0C\u5176\u4E2D k2 \u5217\u4E3A\u6392\u5E8F\u5217\uFF0C\u4E0D\u5E26\u4EFB\u4F55\u805A\u5408\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| k2_order        | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k1    | INT    | Yes  | false | N/A     | NONE  |\n+-----------------+-------+--------+------+-------+---------+-------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u4EE5 k1, k2 \u5206\u7EC4\uFF0Ck3 \u5217\u4E3A SUM \u805A\u5408\u7684\u7269\u5316\u89C6\u56FE"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create materialized view k1_k2_sumk3 as\nselect k1, k2, sum(k3) from duplicate_table group by k1, k2;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7269\u5316\u89C6\u56FE\u7684 schema \u5982\u4E0B\u56FE\uFF0C\u7269\u5316\u89C6\u56FE\u5305\u542B\u4E24\u5217 k1, k2\uFF0Csum(k3) \u5176\u4E2D k1, k2 \u4E3A\u5206\u7EC4\u5217\uFF0Csum(k3) \u4E3A\u6839\u636E k1, k2 \u5206\u7EC4\u540E\u7684 k3 \u5217\u7684\u6C42\u548C\u503C\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u7531\u4E8E\u7269\u5316\u89C6\u56FE\u6CA1\u6709\u58F0\u660E\u6392\u5E8F\u5217\uFF0C\u4E14\u7269\u5316\u89C6\u56FE\u5E26\u805A\u5408\u6570\u636E\uFF0C\u7CFB\u7EDF\u9ED8\u8BA4\u8865\u5145\u5206\u7EC4\u5217 k1, k2 \u4E3A\u6392\u5E8F\u5217\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| k1_k2_sumk3     | k1    | INT    | Yes  | true  | N/A     |       |\n|                 | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k3    | BIGINT | Yes  | false | N/A     | SUM   |\n+-----------------+-------+--------+------+-------+---------+-------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u53BB\u9664\u91CD\u590D\u884C\u7684\u7269\u5316\u89C6\u56FE"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create materialized view deduplicate as\nselect k1, k2, k3, k4 from duplicate_table group by k1, k2, k3, k4;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7269\u5316\u89C6\u56FE schema \u5982\u4E0B\u56FE\uFF0C\u7269\u5316\u89C6\u56FE\u5305\u542B k1, k2, k3, k4 \u5217\uFF0C\u4E14\u4E0D\u5B58\u5728\u91CD\u590D\u884C\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+-----------------+-------+--------+------+-------+---------+-------+\n| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n+-----------------+-------+--------+------+-------+---------+-------+\n| deduplicate     | k1    | INT    | Yes  | true  | N/A     |       |\n|                 | k2    | INT    | Yes  | true  | N/A     |       |\n|                 | k3    | BIGINT | Yes  | true  | N/A     |       |\n|                 | k4    | BIGINT | Yes  | true  | N/A     |       |\n+-----------------+-------+--------+------+-------+---------+-------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u4E0D\u58F0\u660E\u6392\u5E8F\u5217\u7684\u975E\u805A\u5408\u578B\u7269\u5316\u89C6\u56FE"}),"\n",(0,a.jsx)(n.p,{children:"all_type_table \u7684 schema \u5982\u4E0B"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+-------+--------------+------+-------+---------+-------+\n| Field | Type         | Null | Key   | Default | Extra |\n+-------+--------------+------+-------+---------+-------+\n| k1    | TINYINT      | Yes  | true  | N/A     |       |\n| k2    | SMALLINT     | Yes  | true  | N/A     |       |\n| k3    | INT          | Yes  | true  | N/A     |       |\n| k4    | BIGINT       | Yes  | true  | N/A     |       |\n| k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n| k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n| k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n+-------+--------------+------+-------+---------+-------+\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7269\u5316\u89C6\u56FE\u5305\u542B k3, k4, k5, k6, k7 \u5217\uFF0C\u4E14\u4E0D\u58F0\u660E\u6392\u5E8F\u5217\uFF0C\u5219\u521B\u5EFA\u8BED\u53E5\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create materialized view mv_1 as\nselect k3, k4, k5, k6, k7 from all_type_table;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7CFB\u7EDF\u9ED8\u8BA4\u8865\u5145\u7684\u6392\u5E8F\u5217\u4E3A k3, k4, k5 \u4E09\u5217\u3002\u8FD9\u4E09\u5217\u7C7B\u578B\u7684\u5B57\u8282\u6570\u4E4B\u548C\u4E3A 4(INT) + 8(BIGINT) + 16(DECIMAL) = 28 < 36\u3002\u6240\u4EE5\u8865\u5145\u7684\u662F\u8FD9\u4E09\u5217\u4F5C\u4E3A\u6392\u5E8F\u5217\u3002\u7269\u5316\u89C6\u56FE\u7684 schema \u5982\u4E0B\uFF0C\u53EF\u4EE5\u770B\u5230\u5176\u4E2D k3, k4, k5 \u5217\u7684 key \u5B57\u6BB5\u4E3A true\uFF0C\u4E5F\u5C31\u662F\u6392\u5E8F\u5217\u3002k6, k7 \u5217\u7684 key \u5B57\u6BB5\u4E3A false\uFF0C\u4E5F\u5C31\u662F\u975E\u6392\u5E8F\u5217\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"+----------------+-------+--------------+------+-------+---------+-------+\n| IndexName      | Field | Type         | Null | Key   | Default | Extra |\n+----------------+-------+--------------+------+-------+---------+-------+\n| mv_1           | k3    | INT          | Yes  | true  | N/A     |       |\n|                | k4    | BIGINT       | Yes  | true  | N/A     |       |\n|                | k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n|                | k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n|                | k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n+----------------+-------+--------------+------+-------+---------+-------+\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"CREATE, MATERIALIZED, VIEW\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return i}});var s=l(667294);let a={},r=s.createContext(a);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);