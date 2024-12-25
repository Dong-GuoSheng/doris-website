"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["644894"],{515171:function(n,e,l){l.r(e),l.d(e,{metadata:()=>o,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>s});var o=JSON.parse('{"id":"query-acceleration/colocation-join","title":"Colocation Join","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/colocation-join.md","sourceDirName":"query-acceleration","slug":"/query-acceleration/colocation-join","permalink":"/zh-CN/docs/dev/query-acceleration/colocation-join","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Colocation Join","language":"zh-CN"},"sidebar":"docs","previous":{"title":"HLL \u8FD1\u4F3C\u53BB\u91CD","permalink":"/zh-CN/docs/dev/query-acceleration/distinct-counts/using-hll"},"next":{"title":"Hint \u6982\u8FF0","permalink":"/zh-CN/docs/dev/query-acceleration/hints/hints-overview"}}'),i=l("785893"),c=l("250065");let s={title:"Colocation Join",language:"zh-CN"},r=void 0,a={},d=[{value:"\u540D\u8BCD\u89E3\u91CA",id:"\u540D\u8BCD\u89E3\u91CA",level:2},{value:"\u539F\u7406",id:"\u539F\u7406",level:2},{value:"\u4F7F\u7528\u65B9\u5F0F",id:"\u4F7F\u7528\u65B9\u5F0F",level:2},{value:"\u5EFA\u8868",id:"\u5EFA\u8868",level:3},{value:"\u5220\u8868",id:"\u5220\u8868",level:3},{value:"\u67E5\u770B Group",id:"\u67E5\u770B-group",level:3},{value:"\u4FEE\u6539\u8868 Colocate Group \u5C5E\u6027",id:"\u4FEE\u6539\u8868-colocate-group-\u5C5E\u6027",level:3},{value:"\u5176\u4ED6\u76F8\u5173\u64CD\u4F5C",id:"\u5176\u4ED6\u76F8\u5173\u64CD\u4F5C",level:3},{value:"Colocation \u526F\u672C\u5747\u8861\u548C\u4FEE\u590D",id:"colocation-\u526F\u672C\u5747\u8861\u548C\u4FEE\u590D",level:2},{value:"\u526F\u672C\u4FEE\u590D",id:"\u526F\u672C\u4FEE\u590D",level:3},{value:"\u526F\u672C\u5747\u8861",id:"\u526F\u672C\u5747\u8861",level:3},{value:"\u67E5\u8BE2",id:"\u67E5\u8BE2",level:2},{value:"\u9AD8\u7EA7\u64CD\u4F5C",id:"\u9AD8\u7EA7\u64CD\u4F5C",level:2},{value:"FE \u914D\u7F6E\u9879",id:"fe-\u914D\u7F6E\u9879",level:3},{value:"HTTP Restful API",id:"http-restful-api",level:3}];function t(n){let e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Colocation Join \u65E8\u5728\u4E3A\u67D0\u4E9B Join \u67E5\u8BE2\u63D0\u4F9B\u672C\u5730\u6027\u4F18\u5316\uFF0C\u6765\u51CF\u5C11\u6570\u636E\u5728\u8282\u70B9\u95F4\u7684\u4F20\u8F93\u8017\u65F6\uFF0C\u52A0\u901F\u67E5\u8BE2\u3002\u672C\u6587\u6863\u4E3B\u8981\u4ECB\u7ECD Colocation Join \u7684\u539F\u7406\u3001\u5B9E\u73B0\u3001\u4F7F\u7528\u65B9\u5F0F\u548C\u6CE8\u610F\u4E8B\u9879\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u6CE8\u610F\uFF1A\u8FD9\u4E2A\u5C5E\u6027\u4E0D\u4F1A\u88AB CCR \u540C\u6B65\uFF0C\u5982\u679C\u8FD9\u4E2A\u8868\u662F\u88AB CCR \u590D\u5236\u800C\u6765\u7684\uFF0C\u5373 PROPERTIES \u4E2D\u5305\u542B",(0,i.jsx)(e.code,{children:"is_being_synced = true"}),"\u65F6\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u5C06\u4F1A\u5728\u8FD9\u4E2A\u8868\u4E2D\u88AB\u64E6\u9664\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u540D\u8BCD\u89E3\u91CA",children:"\u540D\u8BCD\u89E3\u91CA"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Colocation Group\uFF08CG\uFF09\uFF1A\u4E00\u4E2A CG \u4E2D\u4F1A\u5305\u542B\u4E00\u5F20\u53CA\u4EE5\u4E0A\u7684 Table\u3002\u5728\u540C\u4E00\u4E2A Group \u5185\u7684 Table \u6709\u7740\u76F8\u540C\u7684 Colocation Group Schema\uFF0C\u5E76\u4E14\u6709\u7740\u76F8\u540C\u7684\u6570\u636E\u5206\u7247\u5206\u5E03\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Colocation Group Schema\uFF08CGS\uFF09\uFF1A\u7528\u4E8E\u63CF\u8FF0\u4E00\u4E2A CG \u4E2D\u7684 Table\uFF0C\u548C Colocation \u76F8\u5173\u7684\u901A\u7528 Schema \u4FE1\u606F\u3002\u5305\u62EC\u5206\u6876\u5217\u7C7B\u578B\uFF0C\u5206\u6876\u6570\u4EE5\u53CA\u526F\u672C\u6570\u7B49\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u539F\u7406",children:"\u539F\u7406"}),"\n",(0,i.jsx)(e.p,{children:"Colocation Join \u529F\u80FD\uFF0C\u662F\u5C06\u4E00\u7EC4\u62E5\u6709\u76F8\u540C CGS \u7684 Table \u7EC4\u6210\u4E00\u4E2A CG\u3002\u5E76\u4FDD\u8BC1\u8FD9\u4E9B Table \u5BF9\u5E94\u7684\u6570\u636E\u5206\u7247\u4F1A\u843D\u5728\u540C\u4E00\u4E2A BE \u8282\u70B9\u4E0A\u3002\u4F7F\u5F97\u5F53 CG \u5185\u7684\u8868\u8FDB\u884C\u5206\u6876\u5217\u4E0A\u7684 Join \u64CD\u4F5C\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u8FDB\u884C\u672C\u5730\u6570\u636E Join\uFF0C\u51CF\u5C11\u6570\u636E\u5728\u8282\u70B9\u95F4\u7684\u4F20\u8F93\u8017\u65F6\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u4E00\u4E2A\u8868\u7684\u6570\u636E\uFF0C\u6700\u7EC8\u4F1A\u6839\u636E\u5206\u6876\u5217\u503C Hash\u3001\u5BF9\u6876\u6570\u53D6\u6A21\u7684\u540E\u843D\u5728\u67D0\u4E00\u4E2A\u5206\u6876\u5185\u3002\u5047\u8BBE\u4E00\u4E2A Table \u7684\u5206\u6876\u6570\u4E3A 8\uFF0C\u5219\u5171\u6709 ",(0,i.jsx)(e.code,{children:"[0, 1, 2, 3, 4, 5, 6, 7]"})," 8 \u4E2A\u5206\u6876\uFF08Bucket\uFF09\uFF0C\u6211\u4EEC\u79F0\u8FD9\u6837\u4E00\u4E2A\u5E8F\u5217\u4E3A\u4E00\u4E2A ",(0,i.jsx)(e.code,{children:"BucketsSequence"}),"\u3002\u6BCF\u4E2A Bucket \u5185\u4F1A\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u6570\u636E\u5206\u7247\uFF08Tablet\uFF09\u3002\u5F53\u8868\u4E3A\u5355\u5206\u533A\u8868\u65F6\uFF0C\u4E00\u4E2A Bucket \u5185\u4EC5\u6709\u4E00\u4E2A Tablet\u3002\u5982\u679C\u662F\u591A\u5206\u533A\u8868\uFF0C\u5219\u4F1A\u6709\u591A\u4E2A\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u4E3A\u4E86\u4F7F\u5F97 Table \u80FD\u591F\u6709\u76F8\u540C\u7684\u6570\u636E\u5206\u5E03\uFF0C\u540C\u4E00 CG \u5185\u7684 Table \u5FC5\u987B\u4FDD\u8BC1\u4EE5\u4E0B\u5C5E\u6027\u76F8\u540C\uFF1A"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5206\u6876\u5217\u548C\u5206\u6876\u6570"}),"\n",(0,i.jsxs)(e.p,{children:["\u5206\u6876\u5217\uFF0C\u5373\u5728\u5EFA\u8868\u8BED\u53E5\u4E2D ",(0,i.jsx)(e.code,{children:"DISTRIBUTED BY HASH(col1, col2, ...)"})," \u4E2D\u6307\u5B9A\u7684\u5217\u3002\u5206\u6876\u5217\u51B3\u5B9A\u4E86\u4E00\u5F20\u8868\u7684\u6570\u636E\u901A\u8FC7\u54EA\u4E9B\u5217\u7684\u503C\u8FDB\u884C Hash \u5212\u5206\u5230\u4E0D\u540C\u7684 Tablet \u4E2D\u3002\u540C\u4E00 CG \u5185\u7684 Table \u5FC5\u987B\u4FDD\u8BC1\u5206\u6876\u5217\u7684\u7C7B\u578B\u548C\u6570\u91CF\u5B8C\u5168\u4E00\u81F4\uFF0C\u5E76\u4E14\u6876\u6570\u4E00\u81F4\uFF0C\u624D\u80FD\u4FDD\u8BC1\u591A\u5F20\u8868\u7684\u6570\u636E\u5206\u7247\u80FD\u591F\u4E00\u4E00\u5BF9\u5E94\u7684\u8FDB\u884C\u5206\u5E03\u63A7\u5236\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u526F\u672C\u6570"}),"\n",(0,i.jsx)(e.p,{children:"\u540C\u4E00\u4E2A CG \u5185\u6240\u6709\u8868\u7684\u6240\u6709\u5206\u533A\uFF08Partition\uFF09\u7684\u526F\u672C\u6570\u5FC5\u987B\u4E00\u81F4\u3002\u5982\u679C\u4E0D\u4E00\u81F4\uFF0C\u53EF\u80FD\u51FA\u73B0\u67D0\u4E00\u4E2A Tablet \u7684\u67D0\u4E00\u4E2A\u526F\u672C\uFF0C\u5728\u540C\u4E00\u4E2A BE \u4E0A\u6CA1\u6709\u5176\u4ED6\u7684\u8868\u5206\u7247\u7684\u526F\u672C\u5BF9\u5E94\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u540C\u4E00\u4E2A CG \u5185\u7684\u8868\uFF0C\u5206\u533A\u7684\u4E2A\u6570\u3001\u8303\u56F4\u4EE5\u53CA\u5206\u533A\u5217\u7684\u7C7B\u578B\u4E0D\u8981\u6C42\u4E00\u81F4\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u56FA\u5B9A\u4E86\u5206\u6876\u5217\u548C\u5206\u6876\u6570\u540E\uFF0C\u540C\u4E00\u4E2A CG \u5185\u7684\u8868\u4F1A\u62E5\u6709\u76F8\u540C\u7684 BucketsSequence\u3002\u800C\u526F\u672C\u6570\u51B3\u5B9A\u4E86\u6BCF\u4E2A\u5206\u6876\u5185\u7684 Tablet \u7684\u591A\u4E2A\u526F\u672C\uFF0C\u5B58\u653E\u5728\u54EA\u4E9B BE \u4E0A\u3002\u5047\u8BBE BucketsSequence \u4E3A ",(0,i.jsx)(e.code,{children:"[0, 1, 2, 3, 4, 5, 6, 7]"}),"\uFF0CBE \u8282\u70B9\u6709 ",(0,i.jsx)(e.code,{children:"[A, B, C, D]"})," 4 \u4E2A\u3002\u5219\u4E00\u4E2A\u53EF\u80FD\u7684\u6570\u636E\u5206\u5E03\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n| 0 | | 1 | | 2 | | 3 | | 4 | | 5 | | 6 | | 7 |\n+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n| A | | B | | C | | D | | A | | B | | C | | D |\n|   | |   | |   | |   | |   | |   | |   | |   |\n| B | | C | | D | | A | | B | | C | | D | | A |\n|   | |   | |   | |   | |   | |   | |   | |   |\n| C | | D | | A | | B | | C | | D | | A | | B |\n+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n"})}),"\n",(0,i.jsx)(e.p,{children:"CG \u5185\u6240\u6709\u8868\u7684\u6570\u636E\u90FD\u4F1A\u6309\u7167\u4E0A\u9762\u7684\u89C4\u5219\u8FDB\u884C\u7EDF\u4E00\u5206\u5E03\uFF0C\u8FD9\u6837\u5C31\u4FDD\u8BC1\u4E86\uFF0C\u5206\u6876\u5217\u503C\u76F8\u540C\u7684\u6570\u636E\u90FD\u5728\u540C\u4E00\u4E2A BE \u8282\u70B9\u4E0A\uFF0C\u53EF\u4EE5\u8FDB\u884C\u672C\u5730\u6570\u636E Join\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4F7F\u7528\u65B9\u5F0F",children:"\u4F7F\u7528\u65B9\u5F0F"}),"\n",(0,i.jsx)(e.h3,{id:"\u5EFA\u8868",children:"\u5EFA\u8868"}),"\n",(0,i.jsxs)(e.p,{children:["\u5EFA\u8868\u65F6\uFF0C\u53EF\u4EE5\u5728 ",(0,i.jsx)(e.code,{children:"PROPERTIES"})," \u4E2D\u6307\u5B9A\u5C5E\u6027 ",(0,i.jsx)(e.code,{children:'"colocate_with" = "group_name"'}),"\uFF0C\u8868\u793A\u8FD9\u4E2A\u8868\u662F\u4E00\u4E2A Colocation Join \u8868\uFF0C\u5E76\u4E14\u5F52\u5C5E\u4E8E\u4E00\u4E2A\u6307\u5B9A\u7684 Colocation Group\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE tbl (k1 int, v1 int sum)\nDISTRIBUTED BY HASH(k1)\nBUCKETS 8\nPROPERTIES(\n    "colocate_with" = "group1"\n);\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679C\u6307\u5B9A\u7684 Group \u4E0D\u5B58\u5728\uFF0C\u5219 Doris \u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A\u53EA\u5305\u542B\u5F53\u524D\u8FD9\u5F20\u8868\u7684 Group\u3002\u5982\u679C Group \u5DF2\u5B58\u5728\uFF0C\u5219 Doris \u4F1A\u68C0\u67E5\u5F53\u524D\u8868\u662F\u5426\u6EE1\u8DB3 Colocation Group Schema\u3002\u5982\u679C\u6EE1\u8DB3\uFF0C\u5219\u4F1A\u521B\u5EFA\u8BE5\u8868\uFF0C\u5E76\u5C06\u8BE5\u8868\u52A0\u5165 Group\u3002\u540C\u65F6\uFF0C\u8868\u4F1A\u6839\u636E\u5DF2\u5B58\u5728\u7684 Group \u4E2D\u7684\u6570\u636E\u5206\u5E03\u89C4\u5219\u521B\u5EFA\u5206\u7247\u548C\u526F\u672C\u3002Group \u5F52\u5C5E\u4E8E\u4E00\u4E2A Database\uFF0CGroup \u7684\u540D\u5B57\u5728\u4E00\u4E2A Database \u5185\u552F\u4E00\u3002\u5728\u5185\u90E8\u5B58\u50A8\u662F Group \u7684\u5168\u540D\u4E3A ",(0,i.jsx)(e.code,{children:"dbId_groupName"}),"\uFF0C\u4F46\u7528\u6237\u53EA\u611F\u77E5 groupName\u3002"]}),"\n",(0,i.jsx)(e.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,i.jsx)(e.p,{children:"2.0 \u7248\u672C\u4E2D\uFF0CDoris \u652F\u6301\u4E86\u8DE8 Database \u7684 Group\u3002"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u5EFA\u8868\u65F6\uFF0C\u9700\u4F7F\u7528\u5173\u952E\u8BCD ",(0,i.jsx)(e.code,{children:"__global__"})," \u4F5C\u4E3A Group \u540D\u79F0\u7684\u524D\u7F00\u3002\u5982\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE tbl (k1 int, v1 int sum)\nDISTRIBUTED BY HASH(k1)\nBUCKETS 8\nPROPERTIES(\n    "colocate_with" = "__global__group1"\n);\n'})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"__global__"})," \u524D\u7F00\u7684 Group \u4E0D\u518D\u5F52\u5C5E\u4E8E\u4E00\u4E2A Database\uFF0C\u5176\u540D\u79F0\u4E5F\u662F\u5168\u5C40\u552F\u4E00\u7684\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u901A\u8FC7\u521B\u5EFA Global Group\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u8DE8 Database \u7684 Colocate Join\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u5220\u8868",children:"\u5220\u8868"}),"\n",(0,i.jsxs)(e.p,{children:["\u5F53 Group \u4E2D\u6700\u540E\u4E00\u5F20\u8868\u5F7B\u5E95\u5220\u9664\u540E\uFF08\u5F7B\u5E95\u5220\u9664\u662F\u6307\u4ECE\u56DE\u6536\u7AD9\u4E2D\u5220\u9664\u3002\u901A\u5E38\uFF0C\u4E00\u5F20\u8868\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"DROP TABLE"})," \u547D\u4EE4\u5220\u9664\u540E\uFF0C\u4F1A\u5728\u56DE\u6536\u7AD9\u9ED8\u8BA4\u505C\u7559\u4E00\u5929\u7684\u65F6\u95F4\u540E\uFF0C\u518D\u5220\u9664\uFF09\uFF0C\u8BE5 Group \u4E5F\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u67E5\u770B-group",children:"\u67E5\u770B Group"}),"\n",(0,i.jsx)(e.p,{children:"\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u96C6\u7FA4\u5185\u5DF2\u5B58\u5728\u7684 Group \u4FE1\u606F\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SHOW PROC '/colocation_group';\n\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| GroupId     | GroupName    | TableIds     | BucketsNum | ReplicationNum | DistCols | IsStable |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| 10005.10008 | 10005_group1 | 10007, 10040 | 10         | 3              | int(11)  | true     |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"GroupId\uFF1A\u4E00\u4E2A Group \u7684\u5168\u96C6\u7FA4\u552F\u4E00\u6807\u8BC6\uFF0C\u524D\u534A\u90E8\u5206\u4E3A db id\uFF0C\u540E\u534A\u90E8\u5206\u4E3A group id\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"GroupName\uFF1AGroup \u7684\u5168\u540D\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"TabletIds\uFF1A\u8BE5 Group \u5305\u542B\u7684 Table \u7684 id \u5217\u8868\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"BucketsNum\uFF1A\u5206\u6876\u6570\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"ReplicationNum\uFF1A\u526F\u672C\u6570\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"DistCols\uFF1ADistribution columns\uFF0C\u5373\u5206\u6876\u5217\u7C7B\u578B\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["IsStable\uFF1A\u8BE5 Group \u662F\u5426\u7A33\u5B9A\uFF08\u7A33\u5B9A\u7684\u5B9A\u4E49\uFF0C\u89C1 ",(0,i.jsx)(e.code,{children:"Colocation \u526F\u672C\u5747\u8861\u548C\u4FEE\u590D"})," \u4E00\u8282\uFF09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u8FDB\u4E00\u6B65\u67E5\u770B\u4E00\u4E2A Group \u7684\u6570\u636E\u5206\u5E03\u60C5\u51B5\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SHOW PROC '/colocation_group/10005.10008';\n\n+-------------+---------------------+\n| BucketIndex | BackendIds          |\n+-------------+---------------------+\n| 0           | 10004, 10002, 10001 |\n| 1           | 10003, 10002, 10004 |\n| 2           | 10002, 10004, 10001 |\n| 3           | 10003, 10002, 10004 |\n| 4           | 10002, 10004, 10003 |\n| 5           | 10003, 10002, 10001 |\n| 6           | 10003, 10004, 10001 |\n| 7           | 10003, 10004, 10002 |\n+-------------+---------------------+\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"BucketIndex\uFF1A\u5206\u6876\u5E8F\u5217\u7684\u4E0B\u6807\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"BackendIds\uFF1A\u5206\u6876\u4E2D\u6570\u636E\u5206\u7247\u6240\u5728\u7684 BE \u8282\u70B9 id \u5217\u8868\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,i.jsx)(e.p,{children:"\u4EE5\u4E0A\u547D\u4EE4\u9700\u8981 ADMIN \u6743\u9650\u3002\u6682\u4E0D\u652F\u6301\u666E\u901A\u7528\u6237\u67E5\u770B\u3002"})}),"\n",(0,i.jsx)(e.h3,{id:"\u4FEE\u6539\u8868-colocate-group-\u5C5E\u6027",children:"\u4FEE\u6539\u8868 Colocate Group \u5C5E\u6027"}),"\n",(0,i.jsx)(e.p,{children:"\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u5DF2\u7ECF\u521B\u5EFA\u7684\u8868\uFF0C\u4FEE\u6539\u5176 Colocation Group \u5C5E\u6027\u3002\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'ALTER TABLE tbl SET ("colocate_with" = "group2");\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5982\u679C\u8BE5\u8868\u4E4B\u524D\u6CA1\u6709\u6307\u5B9A\u8FC7 Group\uFF0C\u5219\u8BE5\u547D\u4EE4\u68C0\u67E5 Schema\uFF0C\u5E76\u5C06\u8BE5\u8868\u52A0\u5165\u5230\u8BE5 Group\uFF08Group \u4E0D\u5B58\u5728\u5219\u4F1A\u521B\u5EFA\uFF09\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5982\u679C\u8BE5\u8868\u4E4B\u524D\u6709\u6307\u5B9A\u5176\u4ED6 Group\uFF0C\u5219\u8BE5\u547D\u4EE4\u4F1A\u5148\u5C06\u8BE5\u8868\u4ECE\u539F\u6709 Group \u4E2D\u79FB\u9664\uFF0C\u5E76\u52A0\u5165\u65B0 Group\uFF08Group \u4E0D\u5B58\u5728\u5219\u4F1A\u521B\u5EFA\uFF09\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5220\u9664\u4E00\u4E2A\u8868\u7684 Colocation \u5C5E\u6027\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'ALTER TABLE tbl SET ("colocate_with" = "");\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u5176\u4ED6\u76F8\u5173\u64CD\u4F5C",children:"\u5176\u4ED6\u76F8\u5173\u64CD\u4F5C"}),"\n",(0,i.jsx)(e.p,{children:"\u5F53\u5BF9\u4E00\u4E2A\u5177\u6709 Colocation \u5C5E\u6027\u7684\u8868\u8FDB\u884C\u589E\u52A0\u5206\u533A\uFF08ADD PARTITION\uFF09\u3001\u4FEE\u6539\u526F\u672C\u6570\u65F6\uFF0CDoris \u4F1A\u68C0\u67E5\u4FEE\u6539\u662F\u5426\u4F1A\u8FDD\u53CD Colocation Group Schema\uFF0C\u5982\u679C\u8FDD\u53CD\u5219\u4F1A\u62D2\u7EDD\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"colocation-\u526F\u672C\u5747\u8861\u548C\u4FEE\u590D",children:"Colocation \u526F\u672C\u5747\u8861\u548C\u4FEE\u590D"}),"\n",(0,i.jsx)(e.p,{children:"Colocation \u8868\u7684\u526F\u672C\u5206\u5E03\u9700\u8981\u9075\u5FAA Group \u4E2D\u6307\u5B9A\u7684\u5206\u5E03\uFF0C\u6240\u4EE5\u5728\u526F\u672C\u4FEE\u590D\u548C\u5747\u8861\u65B9\u9762\u548C\u666E\u901A\u5206\u7247\u6709\u6240\u533A\u522B\u3002"}),"\n",(0,i.jsx)(e.p,{children:"Group \u81EA\u8EAB\u6709\u4E00\u4E2A Stable \u5C5E\u6027\uFF0C\u5F53 Stable \u4E3A true \u65F6\uFF0C\u8868\u793A\u5F53\u524D Group \u5185\u7684\u8868\u7684\u6240\u6709\u5206\u7247\u6CA1\u6709\u6B63\u5728\u8FDB\u884C\u53D8\u52A8\uFF0CColocation \u7279\u6027\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\u3002\u5F53 Stable \u4E3A false \u65F6\uFF08Unstable\uFF09\uFF0C\u8868\u793A\u5F53\u524D Group \u5185\u6709\u90E8\u5206\u8868\u7684\u5206\u7247\u6B63\u5728\u505A\u4FEE\u590D\u6216\u8FC1\u79FB\uFF0C\u6B64\u65F6\uFF0C\u76F8\u5173\u8868\u7684 Colocation Join \u5C06\u9000\u5316\u4E3A\u666E\u901A Join\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u526F\u672C\u4FEE\u590D",children:"\u526F\u672C\u4FEE\u590D"}),"\n",(0,i.jsx)(e.p,{children:"\u526F\u672C\u53EA\u80FD\u5B58\u50A8\u5728\u6307\u5B9A\u7684 BE \u8282\u70B9\u4E0A\u3002\u6240\u4EE5\u5F53\u67D0\u4E2A BE \u4E0D\u53EF\u7528\u65F6\uFF08\u5B95\u673A\u3001Decommission \u7B49\uFF09\uFF0C\u9700\u8981\u5BFB\u627E\u4E00\u4E2A\u65B0\u7684 BE \u8FDB\u884C\u66FF\u6362\u3002Doris \u4F1A\u4F18\u5148\u5BFB\u627E\u8D1F\u8F7D\u6700\u4F4E\u7684 BE \u8FDB\u884C\u66FF\u6362\u3002\u66FF\u6362\u540E\uFF0C\u8BE5 Bucket \u5185\u7684\u6240\u6709\u5728\u65E7 BE \u4E0A\u7684\u6570\u636E\u5206\u7247\u90FD\u8981\u505A\u4FEE\u590D\u3002\u8FC1\u79FB\u8FC7\u7A0B\u4E2D\uFF0CGroup \u88AB\u6807\u8BB0\u4E3A Unstable\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u526F\u672C\u5747\u8861",children:"\u526F\u672C\u5747\u8861"}),"\n",(0,i.jsxs)(e.p,{children:["Doris \u4F1A\u5C3D\u529B\u5C06 Colocation \u8868\u7684\u5206\u7247\u5747\u5300\u5206\u5E03\u5728\u6240\u6709 BE \u8282\u70B9\u4E0A\u3002\u5BF9\u4E8E\u666E\u901A\u8868\u7684\u526F\u672C\u5747\u8861\uFF0C\u662F\u4EE5\u5355\u526F\u672C\u4E3A\u7C92\u5EA6\u7684\uFF0C\u5373\u5355\u72EC\u4E3A\u6BCF\u4E00\u4E2A\u526F\u672C\u5BFB\u627E\u8D1F\u8F7D\u8F83\u4F4E\u7684 BE \u8282\u70B9\u5373\u53EF\u3002\u800C Colocation \u8868\u7684\u5747\u8861\u662F Bucket \u7EA7\u522B\u7684\uFF0C\u5373\u4E00\u4E2A Bucket \u5185\u7684\u6240\u6709\u526F\u672C\u90FD\u4F1A\u4E00\u8D77\u8FC1\u79FB\u3002\u6211\u4EEC\u91C7\u7528\u4E00\u4E2A\u7B80\u5355\u7684\u5747\u8861\u7B97\u6CD5\uFF0C\u5373\u5728\u4E0D\u8003\u8651\u526F\u672C\u5B9E\u9645\u5927\u5C0F\uFF0C\u800C\u53EA\u6839\u636E\u526F\u672C\u6570\u91CF\uFF0C\u5C06 BucketsSequence \u5747\u5300\u7684\u5206\u5E03\u5728\u6240\u6709 BE \u4E0A\u3002\u5177\u4F53\u7B97\u6CD5\u53EF\u4EE5\u53C2\u9605 ",(0,i.jsx)(e.code,{children:"ColocateTableBalancer.java"})," \u4E2D\u7684\u4EE3\u7801\u6CE8\u91CA\u3002"]}),"\n",(0,i.jsx)(e.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6CE8 1\uFF1A\u5F53\u524D\u7684 Colocation \u526F\u672C\u5747\u8861\u548C\u4FEE\u590D\u7B97\u6CD5\uFF0C\u5BF9\u4E8E\u5F02\u6784\u90E8\u7F72\u7684 Doris \u96C6\u7FA4\u6548\u679C\u53EF\u80FD\u4E0D\u4F73\u3002\u6240\u8C13\u5F02\u6784\u90E8\u7F72\uFF0C\u5373 BE \u8282\u70B9\u7684\u78C1\u76D8\u5BB9\u91CF\u3001\u6570\u91CF\u3001\u78C1\u76D8\u7C7B\u578B\uFF08SSD \u548C HDD\uFF09\u4E0D\u4E00\u81F4\u3002\u5728\u5F02\u6784\u90E8\u7F72\u60C5\u51B5\u4E0B\uFF0C\u53EF\u80FD\u51FA\u73B0\u5C0F\u5BB9\u91CF\u7684 BE \u8282\u70B9\u548C\u5927\u5BB9\u91CF\u7684 BE \u8282\u70B9\u5B58\u50A8\u4E86\u76F8\u540C\u7684\u526F\u672C\u6570\u91CF\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u6CE8 2\uFF1A\u5F53\u4E00\u4E2A Group \u5904\u4E8E Unstable \u72B6\u6001\u65F6\uFF0C\u5176\u4E2D\u7684\u8868\u7684 Join \u5C06\u9000\u5316\u4E3A\u666E\u901A Join\u3002\u6B64\u65F6\u53EF\u80FD\u4F1A\u6781\u5927\u964D\u4F4E\u96C6\u7FA4\u7684\u67E5\u8BE2\u6027\u80FD\u3002\u5982\u679C\u4E0D\u5E0C\u671B\u7CFB\u7EDF\u81EA\u52A8\u5747\u8861\uFF0C\u53EF\u4EE5\u8BBE\u7F6E FE \u7684\u914D\u7F6E\u9879 ",(0,i.jsx)(e.code,{children:"disable_colocate_balance"})," \u6765\u7981\u6B62\u81EA\u52A8\u5747\u8861\u3002\u7136\u540E\u5728\u5408\u9002\u7684\u65F6\u95F4\u6253\u5F00\u5373\u53EF\u3002\uFF08\u5177\u4F53\u53C2\u9605 ",(0,i.jsx)(e.code,{children:"\u9AD8\u7EA7\u64CD\u4F5C"})," \u4E00\u8282\uFF09"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(e.h2,{id:"\u67E5\u8BE2",children:"\u67E5\u8BE2"}),"\n",(0,i.jsx)(e.p,{children:"\u5BF9 Colocation \u8868\u7684\u67E5\u8BE2\u65B9\u5F0F\u548C\u666E\u901A\u8868\u4E00\u6837\uFF0C\u7528\u6237\u65E0\u9700\u611F\u77E5 Colocation \u5C5E\u6027\u3002\u5982\u679C Colocation \u8868\u6240\u5728\u7684 Group \u5904\u4E8E Unstable \u72B6\u6001\uFF0C\u5C06\u81EA\u52A8\u9000\u5316\u4E3A\u666E\u901A Join\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4E3E\u4F8B\u8BF4\u660E\uFF1A"}),"\n",(0,i.jsx)(e.p,{children:"\u8868 1\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE `tbl1` (\n    `k1` date NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` int(11) SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nPARTITION BY RANGE(`k1`)\n(\n    PARTITION p1 VALUES LESS THAN (\'2019-05-31\'),\n    PARTITION p2 VALUES LESS THAN (\'2019-06-30\')\n)\nDISTRIBUTED BY HASH(`k2`) BUCKETS 8\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u8868 2\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE `tbl2` (\n    `k1` datetime NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` double SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(`k2`) BUCKETS 8\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u67E5\u770B\u67E5\u8BE2\u8BA1\u5212\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"DESC SELECT * FROM tbl1 INNER JOIN tbl2 ON (tbl1.k2 = tbl2.k2);\n\n+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN                           |\n|   |  hash predicates:                              |\n|   |  colocate: true                                |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----1:OlapScanNode                              |\n|   |       TABLE: tbl2                              |\n|   |       PREAGGREGATION: OFF. Reason: null        |\n|   |       partitions=0/1                           |\n|   |       rollup: null                             |\n|   |       buckets=0/0                              |\n|   |       cardinality=-1                           |\n|   |       avgRowSize=0.0                           |\n|   |       numNodes=0                               |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n+----------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679C Colocation Join \u751F\u6548\uFF0C\u5219 Hash Join \u8282\u70B9\u4F1A\u663E\u793A ",(0,i.jsx)(e.code,{children:"colocate: true"}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679C\u6CA1\u6709\u751F\u6548\uFF0C\u5219\u67E5\u8BE2\u8BA1\u5212\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN (BROADCAST)               |\n|   |  hash predicates:                              |\n|   |  colocate: false, reason: group is not stable  |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----3:EXCHANGE                                  |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n|                                                    |\n| PLAN FRAGMENT 1                                    |\n|  OUTPUT EXPRS:                                     |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   STREAM DATA SINK                                 |\n|     EXCHANGE ID: 03                                |\n|     UNPARTITIONED                                  |\n|                                                    |\n|   1:OlapScanNode                                   |\n|      TABLE: tbl2                                   |\n|      PREAGGREGATION: OFF. Reason: null             |\n|      partitions=0/1                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 1                                  |\n+----------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(e.p,{children:["HASH JOIN \u8282\u70B9\u4F1A\u663E\u793A\u5BF9\u5E94\u539F\u56E0\uFF1A",(0,i.jsx)(e.code,{children:"colocate: false, reason: group is not stable"}),"\u3002\u540C\u65F6\u4F1A\u6709\u4E00\u4E2A EXCHANGE \u8282\u70B9\u751F\u6210\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9AD8\u7EA7\u64CD\u4F5C",children:"\u9AD8\u7EA7\u64CD\u4F5C"}),"\n",(0,i.jsx)(e.h3,{id:"fe-\u914D\u7F6E\u9879",children:"FE \u914D\u7F6E\u9879"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"disable_colocate_relocate"}),"\n",(0,i.jsx)(e.p,{children:"\u662F\u5426\u5173\u95ED Doris \u7684\u81EA\u52A8 Colocation \u526F\u672C\u4FEE\u590D\u3002\u9ED8\u8BA4\u4E3A false\uFF0C\u5373\u4E0D\u5173\u95ED\u3002\u8BE5\u53C2\u6570\u53EA\u5F71\u54CD Colocation \u8868\u7684\u526F\u672C\u4FEE\u590D\uFF0C\u4E0D\u5F71\u54CD\u666E\u901A\u8868\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"disable_colocate_balance"}),"\n",(0,i.jsx)(e.p,{children:"\u662F\u5426\u5173\u95ED Doris \u7684\u81EA\u52A8 Colocation \u526F\u672C\u5747\u8861\u3002\u9ED8\u8BA4\u4E3A false\uFF0C\u5373\u4E0D\u5173\u95ED\u3002\u8BE5\u53C2\u6570\u53EA\u5F71\u54CD Colocation \u8868\u7684\u526F\u672C\u5747\u8861\uFF0C\u4E0D\u5F71\u54CD\u666E\u901A\u8868\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4EE5\u4E0A\u53C2\u6570\u53EF\u4EE5\u52A8\u6001\u4FEE\u6539\uFF0C\u8BBE\u7F6E\u65B9\u5F0F\u8BF7\u53C2\u9605 ",(0,i.jsx)(e.code,{children:"HELP SHOW CONFIG;"})," \u548C ",(0,i.jsx)(e.code,{children:"HELP SET CONFIG;"}),"\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"disable_colocate_join"}),"\n",(0,i.jsx)(e.p,{children:"\u662F\u5426\u5173\u95ED Colocation Join \u529F\u80FD\u3002\u5728 0.10 \u53CA\u4E4B\u524D\u7684\u7248\u672C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u5373\u5173\u95ED\u3002\u5728\u4E4B\u540E\u7684\u67D0\u4E2A\u7248\u672C\u4E2D\u5C06\u9ED8\u8BA4\u4E3A false\uFF0C\u5373\u5F00\u542F\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"use_new_tablet_scheduler"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 0.10 \u53CA\u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u65B0\u7684\u526F\u672C\u8C03\u5EA6\u903B\u8F91\u4E0E Colocation Join \u529F\u80FD\u4E0D\u517C\u5BB9\uFF0C\u6240\u4EE5\u5728 0.10 \u53CA\u4E4B\u524D\u7248\u672C\uFF0C\u5982\u679C ",(0,i.jsx)(e.code,{children:"disable_colocate_join = false"}),"\uFF0C\u5219\u9700\u8BBE\u7F6E ",(0,i.jsx)(e.code,{children:"use_new_tablet_scheduler = false"}),"\uFF0C\u5373\u5173\u95ED\u65B0\u7684\u526F\u672C\u8C03\u5EA6\u5668\u3002\u4E4B\u540E\u7684\u7248\u672C\u4E2D\uFF0C",(0,i.jsx)(e.code,{children:"use_new_tablet_scheduler"})," \u5C06\u8861\u4E3A true\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"http-restful-api",children:"HTTP Restful API"}),"\n",(0,i.jsx)(e.p,{children:"Doris \u63D0\u4F9B\u4E86\u51E0\u4E2A\u548C Colocation Join \u6709\u5173\u7684 HTTP Restful API\uFF0C\u7528\u4E8E\u67E5\u770B\u548C\u4FEE\u6539 Colocation Group\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u8BE5 API \u5B9E\u73B0\u5728 FE \u7AEF\uFF0C\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"fe_host:fe_http_port"})," \u8FDB\u884C\u8BBF\u95EE\u3002\u9700\u8981 ADMIN \u6743\u9650\u3002"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67E5\u770B\u96C6\u7FA4\u7684\u5168\u90E8 Colocation \u4FE1\u606F"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:'GET /api/colocate\n\n\u8FD4\u56DE\u4EE5 Json \u683C\u5F0F\u8868\u793A\u5185\u90E8 Colocation \u4FE1\u606F\u3002\n\n{\n    "msg": "success",\n	"code": 0,\n	"data": {\n		"infos": [\n			["10003.12002", "10003_group1", "10037, 10043", "1", "1", "int(11)", "true"]\n		],\n		"unstableGroupIds": [],\n		"allGroupIds": [{\n			"dbId": 10003,\n			"grpId": 12002\n		}]\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5C06 Group \u6807\u8BB0\u4E3A Stable \u6216 Unstable"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6807\u8BB0\u4E3A Stable"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"DELETE /api/colocate/group_stable?db_id=10005&group_id=10008\n\n\u8FD4\u56DE\uFF1A200\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6807\u8BB0\u4E3A Unstable"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"POST /api/colocate/group_stable?db_id=10005&group_id=10008\n\n\u8FD4\u56DE\uFF1A200\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8BBE\u7F6E Group \u7684\u6570\u636E\u5206\u5E03"}),"\n",(0,i.jsx)(e.p,{children:"\u8BE5\u63A5\u53E3\u53EF\u4EE5\u5F3A\u5236\u8BBE\u7F6E\u67D0\u4E00 Group \u7684\u6570\u5206\u5E03\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"POST /api/colocate/bucketseq?db_id=10005&group_id=10008\n\nBody:\n[[10004,10002],[10003,10002],[10002,10004],[10003,10002],[10002,10004],[10003,10002],[10003,10004],[10003,10004],[10003,10004],[10002,10004]]\n\n\u8FD4\u56DE 200\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u4E2D Body \u662F\u4EE5\u5D4C\u5957\u6570\u7EC4\u8868\u793A\u7684 BucketsSequence \u4EE5\u53CA\u6BCF\u4E2A Bucket \u4E2D\u5206\u7247\u5206\u5E03\u6240\u5728 BE \u7684 id\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u6CE8\u610F\uFF0C\u4F7F\u7528\u8BE5\u547D\u4EE4\uFF0C\u53EF\u80FD\u9700\u8981\u5C06 FE \u7684\u914D\u7F6E ",(0,i.jsx)(e.code,{children:"disable_colocate_relocate"})," \u548C ",(0,i.jsx)(e.code,{children:"disable_colocate_balance"})," \u8BBE\u4E3A true\u3002\u5373\u5173\u95ED\u7CFB\u7EDF\u81EA\u52A8\u7684 Colocation \u526F\u672C\u4FEE\u590D\u548C\u5747\u8861\u3002\u5426\u5219\u53EF\u80FD\u5728\u4FEE\u6539\u540E\uFF0C\u4F1A\u88AB\u7CFB\u7EDF\u81EA\u52A8\u91CD\u7F6E\u3002"]}),"\n"]}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(t,{...n})}):t(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return r},a:function(){return s}});var o=l(667294);let i={},c=o.createContext(i);function s(n){let e=o.useContext(c);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);