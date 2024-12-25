"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["779698"],{509638:function(n,e,i){i.r(e),i.d(e,{metadata:()=>l,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>t});var l=JSON.parse('{"id":"query-acceleration/distinct-counts/orthogonal-bitmap-manual","title":"BITMAP \u7CBE\u51C6\u53BB\u91CD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-acceleration/distinct-counts/orthogonal-bitmap-manual.md","sourceDirName":"query-acceleration/distinct-counts","slug":"/query-acceleration/distinct-counts/orthogonal-bitmap-manual","permalink":"/zh-CN/docs/query-acceleration/distinct-counts/orthogonal-bitmap-manual","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP \u7CBE\u51C6\u53BB\u91CD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u9AD8\u5E76\u53D1\u70B9\u67E5","permalink":"/zh-CN/docs/query-acceleration/high-concurrent-point-query"},"next":{"title":"HLL \u8FD1\u4F3C\u53BB\u91CD","permalink":"/zh-CN/docs/query-acceleration/distinct-counts/using-hll"}}'),s=i("785893"),r=i("250065");let t={title:"BITMAP \u7CBE\u51C6\u53BB\u91CD",language:"zh-CN"},c=void 0,a={},d=[{value:"\u80CC\u666F",id:"\u80CC\u666F",level:2},{value:"\u4F7F\u7528\u6307\u5357",id:"\u4F7F\u7528\u6307\u5357",level:2},{value:"Create Table",id:"create-table",level:3},{value:"Data Load",id:"data-load",level:3},{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:3}];function o(n){let e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u80CC\u666F",children:"\u80CC\u666F"}),"\n",(0,s.jsx)(e.p,{children:"Doris \u539F\u6709\u7684 BITMAP \u805A\u5408\u51FD\u6570\u8BBE\u8BA1\u6BD4\u8F83\u901A\u7528\uFF0C\u4F46\u5BF9\u4EBF\u7EA7\u522B\u4EE5\u4E0A BITMAP \u5927\u57FA\u6570\u7684\u4EA4\u5E76\u96C6\u8BA1\u7B97\u6027\u80FD\u8F83\u5DEE\u3002\u6392\u67E5\u540E\u7AEF BE \u7684 BITMAP \u805A\u5408\u51FD\u6570\u903B\u8F91\uFF0C\u53D1\u73B0\u4E3B\u8981\u6709\u4E24\u4E2A\u539F\u56E0\u3002\u4E00\u662F\u5F53 BITMAP \u57FA\u6570\u8F83\u5927\u65F6\uFF0C\u5982 BITMAP \u5927\u5C0F\u8D85\u8FC7 1g\uFF0C\u7F51\u7EDC/\u78C1\u76D8 IO \u5904\u7406\u65F6\u95F4\u6BD4\u8F83\u957F\uFF1B\u4E8C\u662F\u540E\u7AEF BE \u5B9E\u4F8B\u5728 Scan \u6570\u636E\u540E\u5168\u90E8\u4F20\u8F93\u5230\u9876\u5C42\u8282\u70B9\u8FDB\u884C\u6C42\u4EA4\u548C\u5E76\u8FD0\u7B97\uFF0C\u7ED9\u9876\u5C42\u5355\u8282\u70B9\u5E26\u6765\u538B\u529B\uFF0C\u6210\u4E3A\u5904\u7406\u74F6\u9888\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u89E3\u51B3\u601D\u8DEF\u662F\u5C06 BITMAP \u5217\u7684\u503C\u6309\u7167 Range \u5212\u5206\uFF0C\u4E0D\u540C Range \u7684\u503C\u5B58\u50A8\u5728\u4E0D\u540C\u7684\u5206\u6876\u4E2D\uFF0C\u4FDD\u8BC1\u4E86\u4E0D\u540C\u5206\u6876\u7684 BITMAP \u503C\u662F\u6B63\u4EA4\u7684\u3002\u5F53\u67E5\u8BE2\u65F6\uFF0C\u5148\u5206\u522B\u5BF9\u4E0D\u540C\u5206\u6876\u4E2D\u7684\u6B63\u4EA4 BITMAP \u8FDB\u884C\u805A\u5408\u8BA1\u7B97\uFF0C\u7136\u540E\u9876\u5C42\u8282\u70B9\u76F4\u63A5\u5C06\u805A\u5408\u8BA1\u7B97\u540E\u7684\u503C\u5408\u5E76\u6C47\u603B\uFF0C\u5E76\u8F93\u51FA\u3002\u5982\u6B64\u4F1A\u5927\u5927\u63D0\u9AD8\u8BA1\u7B97\u6548\u7387\uFF0C\u89E3\u51B3\u4E86\u9876\u5C42\u5355\u8282\u70B9\u8BA1\u7B97\u74F6\u9888\u95EE\u9898\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4F7F\u7528\u6307\u5357",children:"\u4F7F\u7528\u6307\u5357"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5EFA\u8868\uFF0C\u589E\u52A0 ",(0,s.jsx)(e.code,{children:"hid"})," \u5217\uFF0C\u8868\u793A BITMAP \u5217\u503C ID \u8303\u56F4\uFF0C\u4F5C\u4E3A Hash \u5206\u6876\u5217"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4F7F\u7528\u573A\u666F"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"create-table",children:"Create Table"}),"\n",(0,s.jsx)(e.p,{children:"\u5EFA\u8868\u65F6\u9700\u8981\u4F7F\u7528\u805A\u5408\u6A21\u578B\uFF0C\u6570\u636E\u7C7B\u578B\u662F BITMAP , \u805A\u5408\u51FD\u6570\u662F BITMAP_UNION"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE `user_tag_bitmap` (\n  `tag` bigint(20) NULL COMMENT "\u7528\u6237\u6807\u7B7E",\n  `hid` smallint(6) NULL COMMENT "\u5206\u6876id",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`tag`, `hid`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`hid`) BUCKETS 3\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8868 Schema \u589E\u52A0 Hid \u5217\uFF0C\u8868\u793A ID \u8303\u56F4\uFF0C\u4F5C\u4E3A Hash \u5206\u6876\u5217\u3002"}),"\n",(0,s.jsx)(e.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,s.jsx)(e.p,{children:"Hid \u6570\u548C BUCKETS \u8981\u8BBE\u7F6E\u5408\u7406\uFF0CHid \u6570\u8BBE\u7F6E\u81F3\u5C11\u662F BUCKETS \u7684 5 \u500D\u4EE5\u4E0A\uFF0C\u4EE5\u4F7F\u6570\u636E Hash \u5206\u6876\u5C3D\u91CF\u5747\u8861"})}),"\n",(0,s.jsx)(e.h3,{id:"data-load",children:"Data Load"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"LOAD LABEL user_tag_bitmap_test\n(\nDATA INFILE('hdfs://abc')\nINTO TABLE user_tag_bitmap\nCOLUMNS TERMINATED BY ','\n(tmp_tag, tmp_user_id)\nSET (\ntag = tmp_tag,\nhid = ceil(tmp_user_id/5000000),\nuser_id = to_bitmap(tmp_user_id)\n)\n)\n\u6CE8\u610F\uFF1A5000000\u8FD9\u4E2A\u6570\u4E0D\u56FA\u5B9A\uFF0C\u53EF\u6309\u9700\u8C03\u6574\n...\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6570\u636E\u683C\u5F0F\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"11111111,1\n11111112,2\n11111113,3\n11111114,4\n...\n"})}),"\n",(0,s.jsx)(e.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,s.jsx)(e.p,{children:"\u7B2C\u4E00\u5217\u4EE3\u8868\u7528\u6237\u6807\u7B7E\uFF0C\u7531\u4E2D\u6587\u8F6C\u6362\u6210\u6570\u5B57"})}),"\n",(0,s.jsx)(e.p,{children:"Load \u6570\u636E\u65F6\uFF0C\u5BF9\u7528\u6237 BITMAP \u503C Range \u8303\u56F4\u7EB5\u5411\u5207\u5272\uFF0C\u4F8B\u5982\uFF0C\u7528\u6237 ID \u5728 1-5000000 \u8303\u56F4\u5185\u7684 Hid \u503C\u76F8\u540C\uFF0CHid \u503C\u76F8\u540C\u7684\u884C\u4F1A\u5206\u914D\u5230\u4E00\u4E2A\u5206\u6876\u5185\uFF0C\u5982\u6B64\u6BCF\u4E2A\u5206\u6876\u5185\u5230\u7684 BITMAP \u90FD\u662F\u6B63\u4EA4\u7684\u3002\u53EF\u4EE5\u5229\u7528\u6876\u5185 BITMAP \u503C\u6B63\u4EA4\u7279\u6027\uFF0C\u8FDB\u884C\u4EA4\u5E76\u96C6\u8BA1\u7B97\uFF0C\u8BA1\u7B97\u7ED3\u679C\u4F1A\u88AB Shuffle \u81F3 Top \u8282\u70B9\u805A\u5408\u3002"}),"\n",(0,s.jsx)(e.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,s.jsx)(e.p,{children:"\u6B63\u4EA4 BITMAP \u51FD\u6570\u4E0D\u80FD\u7528\u5728\u5206\u533A\u8868\uFF0C\u56E0\u4E3A\u5206\u533A\u8868\u5206\u533A\u5185\u6B63\u4EA4\uFF0C\u5206\u533A\u4E4B\u95F4\u7684\u6570\u636E\u662F\u65E0\u6CD5\u4FDD\u8BC1\u6B63\u4EA4\u7684\uFF0C\u5219\u8BA1\u7B97\u7ED3\u679C\u4E5F\u662F\u65E0\u6CD5\u9884\u4F30\u7684\u3002"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"1. orthogonal_bitmap_intersect"})}),"\n",(0,s.jsx)(e.p,{children:"\u6C42 BITMAP \u4EA4\u96C6\u51FD\u6570"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8BED\u6CD5\uFF1A"})," ",(0,s.jsx)(e.code,{children:"orthogonal_bitmap_intersect(bitmap_column, column_to_filter, filter_values)"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u53C2\u6570\uFF1A"})," \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F BITMAP \u5217\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u7528\u6765\u8FC7\u6EE4\u7684\u7EF4\u5EA6\u5217\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u53D8\u957F\u53C2\u6570\uFF0C\u542B\u4E49\u662F\u8FC7\u6EE4\u7EF4\u5EA6\u5217\u7684\u4E0D\u540C\u53D6\u503C"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8BF4\u660E\uFF1A"})," \u67E5\u8BE2\u89C4\u5212\u4E0A\u805A\u5408\u5206 2 \u5C42\uFF0C\u5728\u7B2C\u4E00\u5C42 BE \u8282\u70B9\uFF08Update\u3001Serialize\uFF09\u5148\u6309 filter_values \u4E3A Key \u8FDB\u884C Hash \u805A\u5408\uFF0C\u7136\u540E\u5BF9\u6240\u6709 Key \u7684 BITMAP \u6C42\u4EA4\u96C6\uFF0C\u7ED3\u679C\u5E8F\u5217\u5316\u540E\u53D1\u9001\u81F3\u7B2C\u4E8C\u5C42 BE \u8282\u70B9 (Merge\u3001Finalize)\uFF0C\u5728\u7B2C\u4E8C\u5C42 BE \u8282\u70B9\u5BF9\u6240\u6709\u6765\u6E90\u4E8E\u7B2C\u4E00\u5C42\u8282\u70B9\u7684 BITMAP \u503C\u5FAA\u73AF\u6C42\u5E76\u96C6"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6837\u4F8B\uFF1A"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select BITMAP_COUNT(orthogonal_bitmap_intersect(user_id, tag, 13080800, 11110200)) from user_tag_bitmap  where tag in (13080800, 11110200);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"2. orthogonal_bitmap_intersect_count"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6C42 BITMAP \u4EA4\u96C6 COUNT \u51FD\u6570\uFF0C\u8BED\u6CD5\u540C\u539F\u7248 ",(0,s.jsx)(e.code,{children:"intersect_count"}),"\uFF0C\u4F46\u5B9E\u73B0\u4E0D\u540C"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8BED\u6CD5\uFF1A"})," ",(0,s.jsx)(e.code,{children:"orthogonal_bitmap_intersect_count(bitmap_column, column_to_filter, filter_values)"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u53C2\u6570\uFF1A"})," \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F BITMAP \u5217\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u7528\u6765\u8FC7\u6EE4\u7684\u7EF4\u5EA6\u5217\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u5F00\u59CB\u662F\u53D8\u957F\u53C2\u6570\uFF0C\u542B\u4E49\u662F\u8FC7\u6EE4\u7EF4\u5EA6\u5217\u7684\u4E0D\u540C\u53D6\u503C"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8BF4\u660E\uFF1A"})," \u67E5\u8BE2\u89C4\u5212\u805A\u5408\u4E0A\u5206 2 \u5C42\uFF0C\u5728\u7B2C\u4E00\u5C42 BE \u8282\u70B9\uFF08Update\u3001Serialize\uFF09\u5148\u6309 ",(0,s.jsx)(e.code,{children:"filter_values"})," \u4E3A Key \u8FDB\u884C Hash \u805A\u5408\uFF0C\u7136\u540E\u5BF9\u6240\u6709 Key \u7684 BITMAP \u6C42\u4EA4\u96C6\uFF0C\u518D\u5BF9\u4EA4\u96C6\u7ED3\u679C\u6C42 COUNT\uFF0CCOUNT \u503C\u5E8F\u5217\u5316\u540E\u53D1\u9001\u81F3\u7B2C\u4E8C\u5C42 BE \u8282\u70B9\uFF08Merge\u3001Finalize\uFF09\uFF0C\u5728\u7B2C\u4E8C\u5C42 BE \u8282\u70B9\u5BF9\u6240\u6709\u6765\u6E90\u4E8E\u7B2C\u4E00\u5C42\u8282\u70B9\u7684 COUNT \u503C\u5FAA\u73AF\u6C42 SUM\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"3. orthogonal_bitmap_union_count"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6C42 BITMAP \u5E76\u96C6 COUNT \u51FD\u6570\uFF0C\u8BED\u6CD5\u540C\u539F\u7248 ",(0,s.jsx)(e.code,{children:"bitmap_union_count"}),"\uFF0C\u4F46\u5B9E\u73B0\u4E0D\u540C\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u8BED\u6CD5\uFF1A",(0,s.jsx)(e.code,{children:"orthogonal_bitmap_union_count(bitmap_column)"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u53C2\u6570\uFF1A\u53C2\u6570\u7C7B\u578B\u662F BITMAP\uFF0C\u662F\u5F85\u6C42\u5E76\u96C6 COUNT \u7684\u5217"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u8BF4\u660E\uFF1A\u67E5\u8BE2\u89C4\u5212\u4E0A\u5206 2 \u5C42\uFF0C\u5728\u7B2C\u4E00\u5C42 BE \u8282\u70B9\uFF08update\u3001serialize\uFF09\u5BF9\u6240\u6709 BITMAP \u6C42\u5E76\u96C6\uFF0C\u518D\u5BF9\u5E76\u96C6\u7684\u7ED3\u679C BITMAP \u6C42 COUNT\uFF0CCOUNT \u503C\u5E8F\u5217\u5316\u540E\u53D1\u9001\u81F3\u7B2C\u4E8C\u5C42 BE \u8282\u70B9\uFF08Merge\u3001Finalize\uFF09\uFF0C\u5728\u7B2C\u4E8C\u5C42 BE \u8282\u70B9\u5BF9\u6240\u6709\u6765\u6E90\u4E8E\u7B2C\u4E00\u5C42\u8282\u70B9\u7684 COUNT \u503C\u5FAA\u73AF\u6C42 SUM\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"4. orthogonal_bitmap_expr_calculate"})}),"\n",(0,s.jsx)(e.p,{children:"\u6C42\u8868\u8FBE\u5F0F BITMAP \u4EA4\u5E76\u5DEE\u96C6\u5408\u8BA1\u7B97\u51FD\u6570\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8BED\u6CD5\uFF1A"})," ",(0,s.jsx)(e.code,{children:"orthogonal_bitmap_expr_calculate(bitmap_column, filter_column, input_string)"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u53C2\u6570\uFF1A"})," \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F BITMAP \u5217\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u7528\u6765\u8FC7\u6EE4\u7684\u7EF4\u5EA6\u5217\uFF0C\u5373\u8BA1\u7B97\u7684 Key \u5217\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u8BA1\u7B97\u8868\u8FBE\u5F0F\u5B57\u7B26\u4E32\uFF0C\u542B\u4E49\u662F\u4F9D\u636E Key \u5217\u8FDB\u884C BITMAP \u4EA4\u5E76\u5DEE\u96C6\u8868\u8FBE\u5F0F\u8BA1\u7B97\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u8868\u8FBE\u5F0F\u652F\u6301\u7684\u8BA1\u7B97\u7B26\uFF1A& \u4EE3\u8868\u4EA4\u96C6\u8BA1\u7B97\uFF0C| \u4EE3\u8868\u5E76\u96C6\u8BA1\u7B97\uFF0C- \u4EE3\u8868\u5DEE\u96C6\u8BA1\u7B97\uFF0C^ \u4EE3\u8868\u5F02\u6216\u8BA1\u7B97\uFF0C\\ \u4EE3\u8868\u8F6C\u4E49\u5B57\u7B26"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8BF4\u660E\uFF1A"})}),"\n",(0,s.jsx)(e.p,{children:"\u67E5\u8BE2\u89C4\u5212\u4E0A\u805A\u5408\u5206 2 \u5C42\uFF0C\u7B2C\u4E00\u5C42 BE \u805A\u5408\u8282\u70B9\u8BA1\u7B97\u5305\u62EC init\u3001update\u3001serialize \u6B65\u9AA4\uFF0C\u7B2C\u4E8C\u5C42 BE \u805A\u5408\u8282\u70B9\u8BA1\u7B97\u5305\u62EC merge\u3001finalize \u6B65\u9AA4\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u7B2C\u4E00\u5C42 BE \u8282\u70B9\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Init \u9636\u6BB5\u89E3\u6790 input_string \u5B57\u7B26\u4E32\uFF0C\u8F6C\u6362\u4E3A\u540E\u7F00\u8868\u8FBE\u5F0F\uFF08\u9006\u6CE2\u5170\u5F0F\uFF09\uFF0C\u89E3\u6790\u51FA\u8BA1\u7B97 Key \u503C\uFF0C\u5E76\u5728 ",(0,s.jsx)(e.code,{children:"map<key, bitmap>"})," \u7ED3\u6784\u4E2D\u521D\u59CB\u5316\uFF1B"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Update \u9636\u6BB5\uFF0C\u5E95\u5C42\u5185\u6838 scan \u7EF4\u5EA6\u5217\uFF08filter_column\uFF09\u6570\u636E\u540E\u56DE\u8C03 Update \u51FD\u6570\uFF0C\u7136\u540E\u4EE5\u8BA1\u7B97 Key \u4E3A\u5355\u4F4D\u5BF9\u4E0A\u4E00\u6B65\u7684 map \u7ED3\u6784\u4E2D\u7684 BITMAP \u8FDB\u884C\u805A\u5408\uFF1B"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Serialize \u9636\u6BB5\uFF0C\u6839\u636E\u540E\u7F00\u8868\u8FBE\u5F0F\uFF0C\u89E3\u6790\u51FA\u8BA1\u7B97 Key \u5217\u7684 BITMAP\uFF0C\u5229\u7528\u6808\u7ED3\u6784\u5148\u8FDB\u540E\u51FA\u539F\u5219\uFF0C\u8FDB\u884C BITMAP \u4EA4\u5E76\u5DEE\u96C6\u5408\u8BA1\u7B97\uFF0C\u7136\u540E\u5BF9\u6700\u7EC8\u7684\u7ED3\u679C BITMAP \u5E8F\u5217\u5316\u540E\u53D1\u9001\u81F3\u7B2C\u4E8C\u5C42\u805A\u5408 BE \u8282\u70B9\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u7B2C\u4E8C\u5C42\u805A\u5408 BE \u8282\u70B9\uFF0C\u5BF9\u6240\u6709\u6765\u6E90\u4E8E\u7B2C\u4E00\u5C42\u8282\u70B9\u7684 BITMAP \u503C\u6C42\u5E76\u96C6\uFF0C\u5E76\u8FD4\u56DE\u6700\u7EC8 BITMAP \u7ED3\u679C"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"orthogonal_bitmap_expr_calculate_count"})}),"\n",(0,s.jsx)(e.p,{children:"\u6C42\u8868\u8FBE\u5F0F BITMAP \u4EA4\u5E76\u5DEE\u96C6\u5408\u8BA1\u7B97 count \u51FD\u6570\uFF0C\u8BED\u6CD5\u548C\u53C2\u6570\u540C orthogonal_bitmap_expr_calculate\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u8BED\u6CD5\uFF1A",(0,s.jsx)(e.code,{children:"orthogonal_bitmap_expr_calculate_count(bitmap_column, filter_column, input_string)"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsx)(e.p,{children:"\u67E5\u8BE2\u89C4\u5212\u4E0A\u805A\u5408\u5206 2 \u5C42\uFF0C"}),"\n",(0,s.jsx)(e.p,{children:"\u7B2C\u4E00\u5C42 BE \u805A\u5408\u8282\u70B9\u8BA1\u7B97\u5305\u62EC Init\u3001Update\u3001Serialize \u6B65\u9AA4\uFF0C\u7B2C\u4E8C\u5C42 BE \u805A\u5408\u8282\u70B9\u8BA1\u7B97\u5305\u62EC Merge\u3001Finalize \u6B65\u9AA4\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u7B2C\u4E00\u5C42 BE \u8282\u70B9\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Init \u9636\u6BB5\u89E3\u6790 input_string \u5B57\u7B26\u4E32\uFF0C\u8F6C\u6362\u4E3A\u540E\u7F00\u8868\u8FBE\u5F0F\uFF08\u9006\u6CE2\u5170\u5F0F\uFF09\uFF0C\u89E3\u6790\u51FA\u8BA1\u7B97 Key \u503C\uFF0C\u5E76\u5728 ",(0,s.jsx)(e.code,{children:"map<key, bitmap>"})," \u7ED3\u6784\u4E2D\u521D\u59CB\u5316\uFF1B"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Update \u9636\u6BB5\uFF0C\u5E95\u5C42\u5185\u6838 Scan \u7EF4\u5EA6\u5217\uFF08filter_column\uFF09\u6570\u636E\u540E\u56DE\u8C03 Update \u51FD\u6570\uFF0C\u7136\u540E\u4EE5\u8BA1\u7B97 key \u4E3A\u5355\u4F4D\u5BF9\u4E0A\u4E00\u6B65\u7684 map \u7ED3\u6784\u4E2D\u7684 BITMAP \u8FDB\u884C\u805A\u5408\uFF1B"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Serialize \u9636\u6BB5\uFF0C\u6839\u636E\u540E\u7F00\u8868\u8FBE\u5F0F\uFF0C\u89E3\u6790\u51FA\u8BA1\u7B97 key \u5217\u7684 BITMAP\uFF0C\u5229\u7528\u6808\u7ED3\u6784\u5148\u8FDB\u540E\u51FA\u539F\u5219\uFF0C\u8FDB\u884C BITMAP \u4EA4\u5E76\u5DEE\u96C6\u5408\u8BA1\u7B97\uFF0C\u7136\u540E\u5BF9\u6700\u7EC8\u7684\u7ED3\u679C BITMAP \u7684 COUNT \u503C\u5E8F\u5217\u5316\u540E\u53D1\u9001\u81F3\u7B2C\u4E8C\u5C42\u805A\u5408 BE \u8282\u70B9\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u7B2C\u4E8C\u5C42\u805A\u5408 BE \u8282\u70B9\uFF0C\u5BF9\u6240\u6709\u6765\u6E90\u4E8E\u7B2C\u4E00\u5C42\u8282\u70B9\u7684 COUNT \u503C\u6C42\u52A0\u548C\uFF0C\u5E76\u8FD4\u56DE\u6700\u7EC8 COUNT \u7ED3\u679C\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,s.jsx)(e.p,{children:"\u7B26\u5408\u5BF9 BITMAP \u8FDB\u884C\u6B63\u4EA4\u8BA1\u7B97\u7684\u573A\u666F\uFF0C\u5982\u5728\u7528\u6237\u884C\u4E3A\u5206\u6790\u4E2D\uFF0C\u8BA1\u7B97\u7559\u5B58\uFF0C\u6F0F\u6597\uFF0C\u7528\u6237\u753B\u50CF\u7B49\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"1. \u4EBA\u7FA4\u5708\u9009\uFF1A"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:" select orthogonal_bitmap_intersect_count(user_id, tag, 13080800, 11110200) from user_tag_bitmap where tag in (13080800, 11110200);\n \u6CE8\uFF1A13080800\u300111110200\u4EE3\u8868\u7528\u6237\u6807\u7B7E\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8BA1\u7B97 user_id \u7684\u53BB\u91CD\u503C\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select orthogonal_bitmap_union_count(user_id) from user_tag_bitmap where tag in (13080800, 11110200);\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"2. BITMAP \u4EA4\u5E76\u5DEE\u96C6\u5408\u6DF7\u5408\u8BA1\u7B97\uFF1A"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select orthogonal_bitmap_expr_calculate_count(user_id, tag, '(833736|999777)&(1308083|231207)&(1000|20000-30000)') from user_tag_bitmap where tag in (833736,999777,130808,231207,1000,20000,30000);\n\u6CE8\uFF1A1000\u300120000\u300130000\u7B49\u6574\u5F62tag\uFF0C\u4EE3\u8868\u7528\u6237\u4E0D\u540C\u6807\u7B7E\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"select orthogonal_bitmap_expr_calculate_count(user_id, tag, '(A:a/b|B:2\\\\-4)&(C:1-D:12)&E:23') from user_str_tag_bitmap where tag in ('A:a/b', 'B:2-4', 'C:1', 'D:12', 'E:23');\n \u6CE8\uFF1A'A:a/b', 'B:2-4'\u7B49\u662F\u5B57\u7B26\u4E32\u7C7B\u578Btag\uFF0C\u4EE3\u8868\u7528\u6237\u4E0D\u540C\u6807\u7B7E, \u5176\u4E2D'B:2-4'\u9700\u8981\u8F6C\u4E49\u6210'B:2\\\\-4'\n"})})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return c},a:function(){return t}});var l=i(667294);let s={},r=l.createContext(s);function t(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);