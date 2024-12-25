"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["152788"],{558139:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"admin-manual/data-admin/recyclebin","title":"\u4ECE\u56DE\u6536\u7AD9\u6062\u590D","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/data-admin/recyclebin.md","sourceDirName":"admin-manual/data-admin","slug":"/admin-manual/data-admin/recyclebin","permalink":"/zh-CN/docs/3.0/admin-manual/data-admin/recyclebin","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u4ECE\u56DE\u6536\u7AD9\u6062\u590D","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u8DE8\u96C6\u7FA4\u6570\u636E\u540C\u6B65","permalink":"/zh-CN/docs/3.0/admin-manual/data-admin/ccr"},"next":{"title":"\u6570\u636E\u4FEE\u590D","permalink":"/zh-CN/docs/3.0/admin-manual/data-admin/repairing-data"}}'),t=l("785893"),i=l("250065");let d={title:"\u4ECE\u56DE\u6536\u7AD9\u6062\u590D",language:"zh-CN"},r=void 0,c={},a=[{value:"\u6570\u636E\u751F\u547D\u5468\u671F",id:"\u6570\u636E\u751F\u547D\u5468\u671F",level:2},{value:"\u4ECE FE \u56DE\u6536\u7AD9\u6062\u590D",id:"\u4ECE-fe-\u56DE\u6536\u7AD9\u6062\u590D",level:2},{value:"\u67E5\u770B\u53EF\u6062\u590D\u6570\u636E",id:"\u67E5\u770B\u53EF\u6062\u590D\u6570\u636E",level:3},{value:"\u5F00\u59CB\u6570\u636E\u6062\u590D",id:"\u5F00\u59CB\u6570\u636E\u6062\u590D",level:3},{value:"\u4ECE BE \u56DE\u6536\u7AD9\u6062\u590D Tablet",id:"\u4ECE-be-\u56DE\u6536\u7AD9\u6062\u590D-tablet",level:2},{value:"\u4ECE BE \u56DE\u6536\u7AD9\u4E2D\u6062\u590D\u6570\u636E",id:"\u4ECE-be-\u56DE\u6536\u7AD9\u4E2D\u6062\u590D\u6570\u636E",level:3},{value:"\u64CD\u4F5C",id:"\u64CD\u4F5C",level:4},{value:"single mode",id:"single-mode",level:5},{value:"batch mode",id:"batch-mode",level:5},{value:"\u4FEE\u590D\u7F3A\u5931\u6216\u635F\u574F\u7684 Tablet",id:"\u4FEE\u590D\u7F3A\u5931\u6216\u635F\u574F\u7684-tablet",level:3}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u6570\u636E\u751F\u547D\u5468\u671F",children:"\u6570\u636E\u751F\u547D\u5468\u671F"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u7528\u6237\u6267\u884C\u547D\u4EE4",(0,t.jsx)(n.code,{children:"drop database/table/partition"}),"\u4E4B\u540E\uFF0CDoris \u4F1A\u628A\u5220\u9664\u7684\u6570\u636E\u5E93/\u8868/\u5206\u533A\u653E\u5230\u56DE\u6536\u7AD9\uFF0C\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4",(0,t.jsx)(n.code,{children:"recover"}),"\u6765\u6062\u590D\u6574\u4E2A\u6570\u636E\u5E93/\u8868/\u5206\u533A\u7684\u6240\u6709\u6570\u636E\u4ECE\u56DE\u6536\u7AD9\u91CC\u6062\u590D\uFF0C\u628A\u5B83\u4EEC\u4ECE\u4E0D\u53EF\u89C1\u72B6\u6001\uFF0C\u91CD\u65B0\u53D8\u56DE\u53EF\u89C1\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"BE \u4FA7\u5220\u9664\u4E00\u4E2A tablet \u65F6\uFF0C\u9ED8\u8BA4\u4F1A\u628A tablet \u7684\u6570\u636E\u653E\u8FDB BE \u56DE\u6536\u7AD9\u3002\u56E0\u4E3A\u67D0\u4E9B\u8BEF\u64CD\u4F5C\u6216\u8005\u7EBF\u4E0A bug\uFF0C\u5BFC\u81F4 BE \u4E0A\u90E8\u5206 tablet \u88AB\u5220\u9664\uFF0C\u901A\u8FC7\u8FD0\u7EF4\u5DE5\u5177\u628A\u8FD9\u4E9B tablet \u4ECE BE \u56DE\u6536\u7AD9\u4E2D\u62A2\u6551\u56DE\u6765\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4E0A\u9762\u4E24\u4E2A\uFF0C\u524D\u8005\u9488\u5BF9\u7684\u662F\u6570\u636E\u5E93/\u8868/\u5206\u533A\u5728 FE \u4E0A\u5DF2\u7ECF\u4E0D\u53EF\u89C1\uFF0C\u4E14\u6570\u636E\u5E93/\u8868/\u5206\u533A\u7684\u5143\u6570\u636E\u5C1A\u4FDD\u7559\u5728 FE \u7684\u56DE\u6536\u7AD9\u91CC\u3002\u800C\u540E\u8005\u9488\u5BF9\u7684\u662F\u6570\u636E\u5E93/\u8868/\u5206\u533A\u5728 FE \u4E0A\u53EF\u89C1\uFF0C\u4F46\u90E8\u5206 BE tablet \u6570\u636E\u88AB\u5220\u9664\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4E0B\u9762\u5206\u522B\u9610\u8FF0\u8FD9\u4E24\u79CD\u6062\u590D\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4ECE-fe-\u56DE\u6536\u7AD9\u6062\u590D",children:"\u4ECE FE \u56DE\u6536\u7AD9\u6062\u590D"}),"\n",(0,t.jsxs)(n.p,{children:["Doris \u4E3A\u4E86\u907F\u514D\u8BEF\u64CD\u4F5C\u9020\u6210\u7684\u707E\u96BE\uFF0C\u652F\u6301\u5BF9\u8BEF\u5220\u9664\u7684\u6570\u636E\u5E93/\u8868/\u5206\u533A\u8FDB\u884C\u6570\u636E\u6062\u590D\uFF0C\u5728 drop table \u6216\u8005 drop database \u6216\u8005 drop partition \u4E4B\u540E\uFF0CDoris \u4E0D\u4F1A\u7ACB\u523B\u5BF9\u6570\u636E\u8FDB\u884C\u7269\u7406\u5220\u9664\uFF0C\u800C\u662F\u5728 FE \u7684 catalog \u56DE\u6536\u7AD9\u4E2D\u4FDD\u7559\u4E00\u6BB5\u65F6\u95F4\uFF08\u9ED8\u8BA4 1 \u5929\uFF0C\u53EF\u901A\u8FC7 fe.conf \u4E2D",(0,t.jsx)(n.code,{children:"catalog_trash_expire_second"}),"\u53C2\u6570\u914D\u7F6E\uFF09\uFF0C\u7BA1\u7406\u5458\u53EF\u4EE5\u901A\u8FC7 RECOVER \u547D\u4EE4\u5BF9\u8BEF\u5220\u9664\u7684\u6570\u636E\u8FDB\u884C\u6062\u590D\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["\u6CE8\u610F\uFF0C\u5982\u679C\u662F\u4F7F\u7528",(0,t.jsx)(n.code,{children:"drop force"}),"\u8FDB\u884C\u5220\u9664\u7684\uFF0C\u5219\u662F\u76F4\u63A5\u5220\u9664\uFF0C\u65E0\u6CD5\u518D\u6062\u590D\u3002"]})}),"\n",(0,t.jsx)(n.h3,{id:"\u67E5\u770B\u53EF\u6062\u590D\u6570\u636E",children:"\u67E5\u770B\u53EF\u6062\u590D\u6570\u636E"}),"\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B FE \u4E0A\u54EA\u4E9B\u6570\u636E\u53EF\u6062\u590D"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'SHOW CATALOG RECYCLE BIN [ WHERE NAME [ = "name" | LIKE "name_matcher"] ]\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8FD9\u91CC name \u53EF\u4EE5\u662F\u6570\u636E\u5E93/\u8868/\u5206\u533A\u540D\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5173\u4E8E\u8BE5\u547D\u4EE4\u4F7F\u7528\u7684\u66F4\u591A\u8BE6\u7EC6\u8BED\u6CD5\u53CA\u6700\u4F73\u5B9E\u8DF5\uFF0C\u8BF7\u53C2\u9605 ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/3.0/sql-manual/sql-statements/recycle/SHOW-CATALOG-RECYCLE-BIN",children:"SHOW-CATALOG-RECYCLE-BIN"})," \u547D\u4EE4\u624B\u518C\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728 MySql \u5BA2\u6237\u7AEF\u547D\u4EE4\u884C\u4E0B\u8F93\u5165 ",(0,t.jsx)(n.code,{children:"help SHOW CATALOG RECYCLE BIN "})," \u83B7\u53D6\u66F4\u591A\u5E2E\u52A9\u4FE1\u606F\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5F00\u59CB\u6570\u636E\u6062\u590D",children:"\u5F00\u59CB\u6570\u636E\u6062\u590D"}),"\n",(0,t.jsx)(n.p,{children:"1.\u6062\u590D\u540D\u4E3A example_db \u7684 database"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n"})}),"\n",(0,t.jsx)(n.p,{children:"2.\u6062\u590D\u540D\u4E3A example_tbl \u7684 table"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n"})}),"\n",(0,t.jsx)(n.p,{children:"3.\u6062\u590D\u8868 example_tbl \u4E2D\u540D\u4E3A p1 \u7684 partition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6267\u884C",(0,t.jsx)(n.code,{children:"RECOVER"}),"\u547D\u4EE4\u4E4B\u540E\uFF0C\u539F\u6765\u7684\u6570\u636E\u5C06\u6062\u590D\u53EF\u89C1\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5173\u4E8E RECOVER \u4F7F\u7528\u7684\u66F4\u591A\u8BE6\u7EC6\u8BED\u6CD5\u53CA\u6700\u4F73\u5B9E\u8DF5\uFF0C\u8BF7\u53C2\u9605 ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/3.0/sql-manual/sql-statements/recycle/RECOVER",children:"RECOVER"})," \u547D\u4EE4\u624B\u518C\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728 MySql \u5BA2\u6237\u7AEF\u547D\u4EE4\u884C\u4E0B\u8F93\u5165 ",(0,t.jsx)(n.code,{children:"help RECOVER"})," \u83B7\u53D6\u66F4\u591A\u5E2E\u52A9\u4FE1\u606F\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4ECE-be-\u56DE\u6536\u7AD9\u6062\u590D-tablet",children:"\u4ECE BE \u56DE\u6536\u7AD9\u6062\u590D Tablet"}),"\n",(0,t.jsx)(n.h3,{id:"\u4ECE-be-\u56DE\u6536\u7AD9\u4E2D\u6062\u590D\u6570\u636E",children:"\u4ECE BE \u56DE\u6536\u7AD9\u4E2D\u6062\u590D\u6570\u636E"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u6237\u5728\u4F7F\u7528 Doris \u7684\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u53D1\u751F\u56E0\u4E3A\u4E00\u4E9B\u8BEF\u64CD\u4F5C\u6216\u8005\u7EBF\u4E0A bug\uFF0C\u5BFC\u81F4\u4E00\u4E9B\u6709\u6548\u7684 tablet \u88AB\u5220\u9664\uFF08\u5305\u62EC\u5143\u6570\u636E\u548C\u6570\u636E\uFF09\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4E3A\u4E86\u9632\u6B62\u5728\u8FD9\u4E9B\u5F02\u5E38\u60C5\u51B5\u51FA\u73B0\u6570\u636E\u4E22\u5931\uFF0CDoris \u63D0\u4F9B\u4E86\u56DE\u6536\u7AD9\u673A\u5236\uFF0C\u6765\u4FDD\u62A4\u7528\u6237\u6570\u636E\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u7528\u6237\u5220\u9664\u7684 tablet \u6570\u636E\u5728 BE \u7AEF\u4E0D\u4F1A\u88AB\u76F4\u63A5\u5220\u9664\uFF0C\u4F1A\u88AB\u653E\u5728\u56DE\u6536\u7AD9\u4E2D\u5B58\u50A8\u4E00\u6BB5\u65F6\u95F4\uFF0C\u5728\u4E00\u6BB5\u65F6\u95F4\u4E4B\u540E\u4F1A\u6709\u5B9A\u65F6\u6E05\u7406\u673A\u5236\u5C06\u8FC7\u671F\u7684\u6570\u636E\u5220\u9664\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u78C1\u76D8\u7A7A\u95F4\u5360\u7528\u4E0D\u8D85\u8FC7 81%\uFF08BE \u914D\u7F6E",(0,t.jsx)(n.code,{children:"config.storage_flood_stage_usage_percent"})," * 0.9 * 100%\uFF09\u65F6\uFF0CBE \u56DE\u6536\u7AD9\u4E2D\u7684\u6570\u636E\u6700\u957F\u4FDD\u7559 1 \u5929\uFF08\u89C1 BE \u914D\u7F6E",(0,t.jsx)(n.code,{children:"config.trash_file_expire_time_sec"}),"\uFF09\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"BE \u56DE\u6536\u7AD9\u4E2D\u7684\u6570\u636E\u5305\u62EC\uFF1Atablet \u7684 data \u6587\u4EF6 (.dat)\uFF0Ctablet \u7684\u7D22\u5F15\u6587\u4EF6 (.idx) \u548C tablet \u7684\u5143\u6570\u636E\u6587\u4EF6 (.hdr)\u3002\u6570\u636E\u5C06\u4F1A\u5B58\u653E\u5728\u5982\u4E0B\u683C\u5F0F\u7684\u8DEF\u5F84\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/root_path/trash/time_label/tablet_id/schema_hash/\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"root_path"}),"\uFF1A\u5BF9\u5E94 BE \u8282\u70B9\u7684\u67D0\u4E2A\u6570\u636E\u6839\u76EE\u5F55\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"trash"}),"\uFF1A\u56DE\u6536\u7AD9\u7684\u76EE\u5F55\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"time_label"}),"\uFF1A\u65F6\u95F4\u6807\u7B7E\uFF0C\u4E3A\u4E86\u56DE\u6536\u7AD9\u4E2D\u6570\u636E\u76EE\u5F55\u7684\u552F\u4E00\u6027\uFF0C\u540C\u65F6\u8BB0\u5F55\u6570\u636E\u65F6\u95F4\uFF0C\u4F7F\u7528\u65F6\u95F4\u6807\u7B7E\u4F5C\u4E3A\u5B50\u76EE\u5F55\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5F53\u7528\u6237\u53D1\u73B0\u7EBF\u4E0A\u7684\u6570\u636E\u88AB\u8BEF\u5220\u9664\uFF0C\u9700\u8981\u4ECE\u56DE\u6536\u7AD9\u4E2D\u6062\u590D\u88AB\u5220\u9664\u7684 tablet\uFF0C\u9700\u8981\u7528\u5230\u8FD9\u4E2A tablet \u6570\u636E\u6062\u590D\u529F\u80FD\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["BE \u63D0\u4F9B http \u63A5\u53E3\u548C ",(0,t.jsx)(n.code,{children:"restore_tablet_tool.sh"})," \u811A\u672C\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\uFF0C\u652F\u6301\u5355 tablet \u64CD\u4F5C\uFF08single mode\uFF09\u548C\u6279\u91CF\u64CD\u4F5C\u6A21\u5F0F\uFF08batch mode\uFF09\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5728 single mode \u4E0B\uFF0C\u652F\u6301\u5355\u4E2A tablet \u7684\u6570\u636E\u6062\u590D\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5728 batch mode \u4E0B\uFF0C\u652F\u6301\u6279\u91CF tablet \u7684\u6570\u636E\u6062\u590D\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u53E6\u5916\uFF0C\u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4 ",(0,t.jsx)(n.code,{children:"show trash"}),"\u67E5\u770B BE \u4E2D\u7684 trash \u6570\u636E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4",(0,t.jsx)(n.code,{children:"admin clean trash"}),"\u6765\u6E05\u695A BE \u7684 trash \u6570\u636E\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u64CD\u4F5C",children:"\u64CD\u4F5C"}),"\n",(0,t.jsx)(n.h5,{id:"single-mode",children:"single mode"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"http \u8BF7\u6C42\u65B9\u5F0F"}),"\n",(0,t.jsx)(n.p,{children:"BE \u4E2D\u63D0\u4F9B\u5355\u4E2A tablet \u6570\u636E\u6062\u590D\u7684 http \u63A5\u53E3\uFF0C\u63A5\u53E3\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl -X POST "http://be_host:be_webserver_port/api/restore_tablet?tablet_id=11111\\&schema_hash=12345"\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6210\u529F\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{"status": "Success", "msg": "OK"}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5931\u8D25\u7684\u8BDD\uFF0C\u4F1A\u8FD4\u56DE\u76F8\u5E94\u7684\u5931\u8D25\u539F\u56E0\uFF0C\u4E00\u79CD\u53EF\u80FD\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{"status": "Failed", "msg": "create link path failed"}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u811A\u672C\u65B9\u5F0F"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"restore_tablet_tool.sh"})," \u53EF\u7528\u6765\u5B9E\u73B0\u5355 tablet \u6570\u636E\u6062\u590D\u7684\u529F\u80FD\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'sh tools/restore_tablet_tool.sh -b "http://127.0.0.1:8040" -t 12345 -s 11111\nsh tools/restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --tablet_id 12345 --schema_hash 11111\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"batch-mode",children:"batch mode"}),"\n",(0,t.jsx)(n.p,{children:"\u6279\u91CF\u6062\u590D\u6A21\u5F0F\u7528\u4E8E\u5B9E\u73B0\u6062\u590D\u591A\u4E2A tablet \u6570\u636E\u7684\u529F\u80FD\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4F7F\u7528\u7684\u65F6\u5019\u9700\u8981\u9884\u5148\u5C06\u6062\u590D\u7684 tablet id \u548C schema hash \u6309\u7167\u9017\u53F7\u5206\u9694\u7684\u683C\u5F0F\u653E\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u4E00\u4E2A tablet \u4E00\u884C\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u683C\u5F0F\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"12345,11111\n12346,11111\n12347,11111\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540E\u5982\u4E0B\u7684\u547D\u4EE4\u8FDB\u884C\u6062\u590D (\u5047\u8BBE\u6587\u4EF6\u540D\u4E3A\uFF1A",(0,t.jsx)(n.code,{children:"tablets.txt"}),")\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'sh restore_tablet_tool.sh -b "http://127.0.0.1:8040" -f tablets.txt\nsh restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --file tablets.txt\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u4FEE\u590D\u7F3A\u5931\u6216\u635F\u574F\u7684-tablet",children:"\u4FEE\u590D\u7F3A\u5931\u6216\u635F\u574F\u7684 Tablet"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u67D0\u4E9B\u6781\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF0C\u5982\u4EE3\u7801 BUG\u3001\u6216\u4EBA\u4E3A\u8BEF\u64CD\u4F5C\u7B49\uFF0C\u53EF\u80FD\u5BFC\u81F4\u90E8\u5206\u5206\u7247\u7684\u5168\u90E8\u526F\u672C\u90FD\u4E22\u5931\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6570\u636E\u5DF2\u7ECF\u5B9E\u8D28\u6027\u7684\u4E22\u5931\u3002\u4F46\u662F\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u4E1A\u52A1\u4F9D\u7136\u5E0C\u671B\u80FD\u591F\u5728\u5373\u4F7F\u6709\u6570\u636E\u4E22\u5931\u7684\u60C5\u51B5\u4E0B\uFF0C\u4FDD\u8BC1\u67E5\u8BE2\u6B63\u5E38\u4E0D\u62A5\u9519\uFF0C\u964D\u4F4E\u7528\u6237\u5C42\u7684\u611F\u77E5\u7A0B\u5EA6\u3002\u6B64\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u7A7A\u767D Tablet \u586B\u5145\u4E22\u5931\u526F\u672C\u7684\u529F\u80FD\uFF0C\u6765\u4FDD\u8BC1\u67E5\u8BE2\u80FD\u591F\u6B63\u5E38\u6267\u884C\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6CE8\uFF1A\u8BE5\u64CD\u4F5C\u4EC5\u7528\u4E8E\u89C4\u907F\u67E5\u8BE2\u56E0\u65E0\u6CD5\u627E\u5230\u53EF\u67E5\u8BE2\u526F\u672C\u5BFC\u81F4\u62A5\u9519\u7684\u95EE\u9898\uFF0C\u65E0\u6CD5\u6062\u590D\u5DF2\u7ECF\u5B9E\u8D28\u6027\u4E22\u5931\u7684\u6570\u636E"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u67E5\u770B Master FE \u65E5\u5FD7 ",(0,t.jsx)(n.code,{children:"fe.log"})]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u51FA\u73B0\u6570\u636E\u4E22\u5931\u7684\u60C5\u51B5\uFF0C\u5219\u65E5\u5FD7\u4E2D\u4F1A\u6709\u7C7B\u4F3C\u5982\u4E0B\u65E5\u5FD7\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"backend [10001] invalid situation. tablet[20000] has few replica[1], replica num setting is [3]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8FD9\u4E2A\u65E5\u5FD7\u8868\u793A\uFF0CTablet 20000 \u7684\u6240\u6709\u526F\u672C\u5DF2\u635F\u574F\u6216\u4E22\u5931\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4F7F\u7528\u7A7A\u767D\u526F\u672C\u586B\u8865\u7F3A\u5931\u526F\u672C"}),"\n",(0,t.jsx)(n.p,{children:"\u5F53\u786E\u8BA4\u6570\u636E\u5DF2\u7ECF\u65E0\u6CD5\u6062\u590D\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u751F\u6210\u7A7A\u767D\u526F\u672C\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'ADMIN SET FRONTEND CONFIG ("recover_with_empty_tablet" = "true");\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u6CE8\uFF1A\u53EF\u4EE5\u5148\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"SHOW FRONTEND CONFIG;"})," \u547D\u4EE4\u67E5\u770B\u5F53\u524D\u7248\u672C\u662F\u5426\u652F\u6301\u8BE5\u53C2\u6570\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8BBE\u7F6E\u5B8C\u6210\u51E0\u5206\u949F\u540E\uFF0C\u5E94\u8BE5\u4F1A\u5728 Master FE \u65E5\u5FD7 ",(0,t.jsx)(n.code,{children:"fe.log"})," \u4E2D\u770B\u5230\u5982\u4E0B\u65E5\u5FD7\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"tablet 20000 has only one replica 20001 on backend 10001 and it is lost. create an empty replica to recover it.\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u65E5\u5FD7\u8868\u793A\u7CFB\u7EDF\u5DF2\u7ECF\u521B\u5EFA\u4E86\u4E00\u4E2A\u7A7A\u767D Tablet \u7528\u4E8E\u586B\u8865\u7F3A\u5931\u526F\u672C\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u901A\u8FC7\u67E5\u8BE2\u6765\u5224\u65AD\u662F\u5426\u5DF2\u7ECF\u4FEE\u590D\u6210\u529F\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5168\u90E8\u4FEE\u590D\u6210\u529F\u540E\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5173\u95ED ",(0,t.jsx)(n.code,{children:"recover_with_empty_tablet"})," \u53C2\u6570\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'ADMIN SET FRONTEND CONFIG ("recover_with_empty_tablet" = "false");\n'})}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return d}});var s=l(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);