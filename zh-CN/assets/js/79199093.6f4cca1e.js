"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["87630"],{374883:function(e,r,n){n.r(r),n.d(r,{metadata:()=>a,contentTitle:()=>s,default:()=>d,assets:()=>i,toc:()=>c,frontMatter:()=>m});var a=JSON.parse('{"id":"admin-manual/memory-management/overview","title":"\u6982\u8FF0","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/memory-management/overview.md","sourceDirName":"admin-manual/memory-management","slug":"/admin-manual/memory-management/overview","permalink":"/zh-CN/docs/3.0/admin-manual/memory-management/overview","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u6982\u8FF0","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u52A0\u5BC6\u548C\u8131\u654F\u51FD\u6570","permalink":"/zh-CN/docs/3.0/admin-manual/auth/encryption-function"},"next":{"title":"\u5185\u5B58\u95EE\u9898 FAQ","permalink":"/zh-CN/docs/3.0/admin-manual/memory-management/memory-issue-faq"}}'),o=n("785893"),t=n("250065");let m={title:"\u6982\u8FF0",language:"zh-CN"},s=void 0,i={},c=[{value:"Doris BE \u5185\u5B58\u7ED3\u6784",id:"doris-be-\u5185\u5B58\u7ED3\u6784",level:2},{value:"\u5185\u5B58\u67E5\u770B",id:"\u5185\u5B58\u67E5\u770B",level:2},{value:"\u5B9E\u65F6\u5185\u5B58\u7EDF\u8BA1",id:"\u5B9E\u65F6\u5185\u5B58\u7EDF\u8BA1",level:3},{value:"\u5386\u53F2\u5185\u5B58\u7EDF\u8BA1",id:"\u5386\u53F2\u5185\u5B58\u7EDF\u8BA1",level:3},{value:"\u5185\u5B58\u5206\u6790",id:"\u5185\u5B58\u5206\u6790",level:2},{value:"\u5185\u5B58\u95EE\u9898 FAQ",id:"\u5185\u5B58\u95EE\u9898-faq",level:2},{value:"\u5185\u5B58\u63A7\u5236\u7B56\u7565",id:"\u5185\u5B58\u63A7\u5236\u7B56\u7565",level:2}];function l(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"\u5185\u5B58\u7BA1\u7406\u662FDoris\u4E2D\u6700\u91CD\u8981\u7684\u7EC4\u6210\u90E8\u5206\u4E4B\u4E00\uFF0C\u5728Doris \u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u8BBA\u5BFC\u5165\u8FD8\u662F\u67E5\u8BE2\u90FD\u4F9D\u8D56\u5927\u91CF\u7684\u5185\u5B58\u64CD\u4F5C\u3002\u5185\u5B58\u7BA1\u7406\u7684\u597D\u574F\u76F4\u63A5\u5F71\u54CD\u5230Doris\u7684\u7A33\u5B9A\u6027\u548C\u6027\u80FD\u3002"}),"\n",(0,o.jsx)(r.p,{children:"Apache Doris \u4F5C\u4E3A\u57FA\u4E8E MPP \u67B6\u6784\u7684 OLAP \u6570\u636E\u5E93\uFF0C\u6570\u636E\u4ECE\u78C1\u76D8\u52A0\u8F7D\u5230\u5185\u5B58\u540E\uFF0C\u4F1A\u5728\u7B97\u5B50\u95F4\u6D41\u5F0F\u4F20\u9012\u5E76\u8BA1\u7B97\uFF0C\u5728\u5185\u5B58\u4E2D\u5B58\u50A8\u8BA1\u7B97\u7684\u4E2D\u95F4\u7ED3\u679C\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u51CF\u5C11\u4E86\u9891\u7E41\u7684\u78C1\u76D8 I/O \u64CD\u4F5C\uFF0C\u5145\u5206\u5229\u7528\u591A\u673A\u591A\u6838\u7684\u5E76\u884C\u8BA1\u7B97\u80FD\u529B\uFF0C\u53EF\u5728\u6027\u80FD\u4E0A\u5448\u73B0\u5DE8\u5927\u4F18\u52BF\u3002"}),"\n",(0,o.jsx)(r.p,{children:"\u5728\u9762\u4E34\u5185\u5B58\u8D44\u6E90\u6D88\u8017\u5DE8\u5927\u7684\u590D\u6742\u8BA1\u7B97\u548C\u5927\u89C4\u6A21\u4F5C\u4E1A\u65F6\uFF0C\u6709\u6548\u7684\u5185\u5B58\u5206\u914D\u3001\u7EDF\u8BA1\u3001\u7BA1\u63A7\u5BF9\u4E8E\u7CFB\u7EDF\u7684\u7A33\u5B9A\u6027\u8D77\u7740\u5341\u5206\u5173\u952E\u7684\u4F5C\u7528\u2014\u2014\u66F4\u5FEB\u7684\u5185\u5B58\u5206\u914D\u901F\u5EA6\u5C06\u6709\u6548\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\uFF0C\u901A\u8FC7\u5BF9\u5185\u5B58\u7684\u5206\u914D\u3001\u8DDF\u8E2A\u4E0E\u9650\u5236\u53EF\u4EE5\u4FDD\u8BC1\u4E0D\u5B58\u5728\u5185\u5B58\u70ED\u70B9\uFF0C\u53CA\u65F6\u51C6\u786E\u5730\u54CD\u5E94\u5185\u5B58\u4E0D\u8DB3\u5E76\u5C3D\u53EF\u80FD\u89C4\u907F OOM \u548C\u67E5\u8BE2\u5931\u8D25\uFF0C\u8FD9\u4E00\u7CFB\u5217\u673A\u5236\u90FD\u5C06\u663E\u8457\u63D0\u9AD8\u7CFB\u7EDF\u7A33\u5B9A\u6027\uFF1B\u540C\u65F6\u66F4\u7CBE\u786E\u7684\u5185\u5B58\u7EDF\u8BA1\uFF0C\u4E5F\u662F\u5927\u67E5\u8BE2\u843D\u76D8\u7684\u57FA\u7840\u3002"}),"\n",(0,o.jsx)(r.h2,{id:"doris-be-\u5185\u5B58\u7ED3\u6784",children:"Doris BE \u5185\u5B58\u7ED3\u6784"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"Memory Structure",src:n(337779).Z+"",width:"1686",height:"1420"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"Server physical memory: \u4F9B\u670D\u52A1\u5668\u4E0A\u6240\u6709\u8FDB\u7A0B\u4F7F\u7528\u7684\u7684\u7269\u7406\u5185\u5B58\uFF0C`cat /proc/meminfo` \u6216 `free -h` \u770B\u5230\u7684 MemTotal\u3002\n    |\n    |---\x3e Linux Kernel Memory And Other Process Memory: Linux \u5185\u6838\u548C\u5176\u4ED6\u8FDB\u7A0B\u4F7F\u7528\u7684\u5185\u5B58\u3002\n    |\n    |---\x3e Doris BE Process Memory: Doris BE \u8FDB\u7A0B\u4F7F\u7528\u7684\u5185\u5B58\uFF0C\u4E0A\u9650\u662F\u670D\u52A1\u5668\u7269\u7406\u5185\u5B58\u51CF\u53BB Linux \u5185\u6838\u548C\u5176\u4ED6\u8FDB\u7A0B\u4F7F\u7528\u7684\u5185\u5B58\uFF0C\u6216\u8005 Cgroup \u914D\u7F6E\u7684\u5185\u5B58\u5927\u5C0F\u3002\n            |\n            |---\x3e untracked: \u6CA1\u6709\u88AB\u8DDF\u8E2A\u548C\u7BA1\u7406\u7684\u5185\u5B58\uFF0C\u5305\u62EC rpc\uFF0Cjvm\uFF0C\u90E8\u5206 metadata \u7B49\u3002\u5728\u8BBF\u95EE\u5916\u8868\u6216\u4F7F\u7528 java udf \u65F6\u4F1A\u7528\u5230 jvm\u3002\n            |\n            |---\x3e tracked: \u88AB\u8DDF\u8E2A\u548C\u7BA1\u7406\u7684\u5185\u5B58\uFF0C\u5141\u8BB8\u5B9E\u65F6\u67E5\u770B\uFF0C\u81EA\u52A8\u5185\u5B58\u56DE\u6536\uFF0C\u901A\u8FC7\u53C2\u6570\u63A7\u5236\u5927\u5C0F\u3002\n                    |\n                    |---\x3e jemalloc: jemalloc \u7BA1\u7406\u7684 cache \u548C metadata\uFF0C\u652F\u6301\u53C2\u6570\u63A7\u5236\uFF0C\u5185\u5B58\u4E0D\u8DB3\u65F6\u81EA\u52A8\u56DE\u6536\u3002\n                    |\n                    |---\x3e global: Doris \u5168\u5C40\u5171\u4EAB\u7684\u5185\u5B58\uFF0C\u4E3B\u8981\u5305\u62EC cache \u548C metadata\u3002\n                    |       |\n                    |       |---\x3e doris cache: doris \u81EA\u5DF1\u7BA1\u7406\u7684 cache\uFF0C\u652F\u6301\u5355\u72EC\u901A\u8FC7\u53C2\u6570\u63A7\u5236\u5BB9\u91CF\u548C\u6DD8\u6C70\u65F6\u957F\uFF0C\u5185\u5B58\u4E0D\u8DB3\u65F6\u81EA\u52A8\u56DE\u6536\u3002\n                    |       |\n                    |       |---\x3e doris metadata: BE \u4E0A\u5B58\u50A8\u6570\u636E\u7684 metadata\uFF0C\u5305\u62EC\u6570\u636E schema \u7B49\u4E00\u7CFB\u5217\u5185\u5B58\u6570\u636E\u7ED3\u6784\u548C\u5B83\u4EEC\u7684\u7F13\u5B58\u3002\n                    |\n                    |---\x3e task: Doris \u4E0A\u6267\u884C\u7684\u4EFB\u52A1\u4F7F\u7528\u7684\u5185\u5B58\uFF0C\u9884\u671F\u5728\u4EFB\u52A1\u7ED3\u675F\u540E\u91CA\u653E\uFF0C\u5305\u62EC query\uFF0Cload\uFF0Ccompaction \u7B49\u3002\n                    |       |\n                    |       |---\x3e query: \u67E5\u8BE2\u671F\u95F4\u4F7F\u7528\u7684\u5185\u5B58\u3002\u4E00\u4E2A\u67E5\u8BE2\u88AB\u62C6\u5206\u6210\u591A\u4E2A fragment \u5355\u72EC\u6267\u884C\uFF0C\u901A\u8FC7\u6570\u636E shuffle \u76F8\u8FDE\u3002\n                    |       |       |\n                    |       |       |---\x3e fragment: \u4E00\u4E2A fragment \u88AB\u62C6\u5206\u6210\u591A\u4E2A operator \u4EE5 pipeline \u7684\u5F62\u5F0F\u6267\u884C\u3002\n                    |       |       |       |\n                    |       |       |       |---\x3e operator: \u5305\u62EC data block, hash table, arena, exchange sink buffer \u7B49\u5185\u5B58\u6570\u636E\u7ED3\u6784\u3002\n                    |       |\n                    |       |---\x3e load: \u6570\u636E\u5BFC\u5165\u671F\u95F4\u4F7F\u7528\u7684\u5185\u5B58\u3002\u6570\u636E\u5BFC\u5165\u5305\u62EC fragment \u8BFB\u53D6\u548C channel \u5199\u5165\u6570\u636E\u4E24\u4E2A\u9636\u6BB5\u3002\n                    |       |       |\n                    |       |       |---\x3e fragment: \u548C\u67E5\u8BE2\u7684 fragment \u6267\u884C\u76F8\u540C\uFF0Cstream load \u901A\u5E38\u53EA\u6709 scan operator\u3002\n                    |       |       |\n                    |       |       |---\x3e channel: tablet channel \u5C06\u6570\u636E\u5199\u5165\u4E34\u65F6\u7684\u6570\u636E\u7ED3\u6784 memtable\uFF0C\u7136\u540E delta writer \u5C06\u6570\u636E\u538B\u7F29\u540E\u5199\u5165\u6587\u4EF6\u3002\n"})}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"\u5185\u5B58\u67E5\u770B",children:"\u5185\u5B58\u67E5\u770B"}),"\n",(0,o.jsx)(r.p,{children:"Doris BE \u4F7F\u7528\u5185\u5B58\u8DDF\u8E2A\u5668\uFF08Memory Tracker\uFF09\u8BB0\u5F55\u8FDB\u7A0B\u5185\u5B58\u4F7F\u7528\uFF0C\u652F\u6301 Web \u9875\u9762\u67E5\u770B\uFF0C\u5E76\u5728\u5185\u5B58\u76F8\u5173\u62A5\u9519\u65F6\u6253\u5370\u5230 BE \u65E5\u5FD7\u4E2D\uFF0C\u7528\u4E8E\u5185\u5B58\u5206\u6790\u548C\u6392\u67E5\u5185\u5B58\u95EE\u9898\u3002"}),"\n",(0,o.jsx)(r.h3,{id:"\u5B9E\u65F6\u5185\u5B58\u7EDF\u8BA1",children:"\u5B9E\u65F6\u5185\u5B58\u7EDF\u8BA1"}),"\n",(0,o.jsxs)(r.p,{children:["\u5B9E\u65F6\u7684\u5185\u5B58\u7EDF\u8BA1\u7ED3\u679C\u901A\u8FC7 Doris BE \u7684 Web \u9875\u9762\u67E5\u770B ",(0,o.jsx)(r.code,{children:"http://{be_host}:{be_web_server_port}/mem_tracker"}),"\uFF0C\u5C55\u793A ",(0,o.jsx)(r.code,{children:"type=overview"})," \u7684 Memory Tracker \u5F53\u524D\u8DDF\u8E2A\u7684\u5185\u5B58\u5927\u5C0F\u548C\u5CF0\u503C\u5185\u5B58\u5927\u5C0F\uFF0C\u5305\u62EC Query/Load/Compaction/Global \u7B49\uFF0C",(0,o.jsx)(r.code,{children:"be_web_server_port"})," \u9ED8\u8BA4 8040\u3002"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:"https://github.com/apache/doris/assets/13197424/f989f4d2-4cc5-4a8e-880e-93ae6073d17d",alt:"image"})}),"\n",(0,o.jsxs)(r.p,{children:["Memory Tracker \u5206\u4E3A\u4E0D\u540C\u7684\u7C7B\u578B\uFF0C\u5176\u4E2D ",(0,o.jsx)(r.code,{children:"type=overview"})," \u7684 Memory Tracker \u4E2D\u9664 ",(0,o.jsx)(r.code,{children:"process resident memory"}),"\u3001",(0,o.jsx)(r.code,{children:"process virtual memory"}),"\u3001",(0,o.jsx)(r.code,{children:"sum of all trackers"})," \u5916\uFF0C\u5176\u4ED6 ",(0,o.jsx)(r.code,{children:"type=overview"})," \u7684 Memory Tracker \u90FD\u53EF\u4EE5\u901A\u8FC7 ",(0,o.jsx)(r.code,{children:"http://{be_host}:{be_web_server_port}/mem_tracker?type=Lable"})," \u67E5\u770B\u8BE6\u60C5\u3002"]}),"\n",(0,o.jsx)(r.p,{children:"Memory Tracker \u62E5\u6709\u5982\u4E0B\u7684\u5C5E\u6027\uFF1A"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"Label: Memory Tracker \u7684\u540D\u79F0"}),"\n",(0,o.jsx)(r.li,{children:"Current Consumption(Bytes): \u5F53\u524D\u5185\u5B58\u503C\uFF0C\u5355\u4F4D B\u3002"}),"\n",(0,o.jsx)(r.li,{children:"Current Consumption(Normalize): \u5F53\u524D\u5185\u5B58\u503C\u7684 .G.M.K \u683C\u5F0F\u5316\u8F93\u51FA\u3002"}),"\n",(0,o.jsx)(r.li,{children:"Peak Consumption(Bytes): BE \u8FDB\u7A0B\u542F\u52A8\u540E\u7684\u5185\u5B58\u5CF0\u503C\uFF0C\u5355\u4F4D B\uFF0CBE \u91CD\u542F\u540E\u91CD\u7F6E\u3002"}),"\n",(0,o.jsx)(r.li,{children:"Peak Consumption(Normalize): BE \u8FDB\u7A0B\u542F\u52A8\u540E\u5185\u5B58\u5CF0\u503C\u7684 .G.M.K \u683C\u5F0F\u5316\u8F93\u51FA\uFF0CBE \u91CD\u542F\u540E\u91CD\u7F6E\u3002"}),"\n",(0,o.jsx)(r.li,{children:"Parent Label: \u7528\u4E8E\u8868\u660E\u4E24\u4E2A Memory Tracker \u7684\u7236\u5B50\u5173\u7CFB\uFF0CChild Tracker \u8BB0\u5F55\u7684\u5185\u5B58\u662F Parent Tracker \u7684\u5B50\u96C6\uFF0CParent \u76F8\u540C\u7684\u4E0D\u540C Tracker \u8BB0\u5F55\u7684\u5185\u5B58\u53EF\u80FD\u5B58\u5728\u4EA4\u96C6\u3002"}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["\u6709\u5173 Memory Tracker \u7684\u66F4\u591A\u4ECB\u7ECD\u53C2\u8003 ",(0,o.jsx)(r.a,{href:"/zh-CN/docs/3.0/admin-manual/memory-management/memory-feature/memory-tracker",children:"\u5185\u5B58\u8DDF\u8E2A\u5668"}),"\u3002"]}),"\n",(0,o.jsx)(r.h3,{id:"\u5386\u53F2\u5185\u5B58\u7EDF\u8BA1",children:"\u5386\u53F2\u5185\u5B58\u7EDF\u8BA1"}),"\n",(0,o.jsxs)(r.p,{children:["\u5386\u53F2\u7684\u5185\u5B58\u7EDF\u8BA1\u7ED3\u679C\u901A\u8FC7 Doris BE \u7684 Bvar \u9875\u9762\u67E5\u770B ",(0,o.jsx)(r.code,{children:"http://http://{be_host}:{brpc_port}/vars/*memory_*"}),"\uFF0C\u7528\u5B9E\u65F6\u5185\u5B58\u7EDF\u8BA1\u9875\u9762 ",(0,o.jsx)(r.code,{children:"http://{be_host}:{be_web_server_port}/mem_tracker"})," \u4E2D Memory Tracker \u7684 Label \u641C\u7D22 Bvar \u9875\u9762\uFF0C\u5373\u53EF\u5F97\u5230\u5BF9\u5E94 Memory Tracker \u8DDF\u8E2A\u7684\u5185\u5B58\u5927\u5C0F\u53D8\u5316\u8D8B\u52BF\uFF0C",(0,o.jsx)(r.code,{children:"brpc_port"})," \u9ED8\u8BA4 8060\u3002"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"Bvar Memory",src:n(68299).Z+"",width:"1592",height:"1792"})}),"\n",(0,o.jsxs)(r.p,{children:["\u5F53\u62A5\u9519\u8FDB\u7A0B\u5185\u5B58\u8D85\u9650\u6216\u53EF\u7528\u5185\u5B58\u4E0D\u8DB3\u65F6\uFF0C\u5728 ",(0,o.jsx)(r.code,{children:"be/log/be.INFO"})," \u65E5\u5FD7\u4E2D\u53EF\u4EE5\u627E\u5230 ",(0,o.jsx)(r.code,{children:"Memory Tracker Summary"}),"\uFF0C\u5305\u542B\u6240\u6709 ",(0,o.jsx)(r.code,{children:"Type=overview"})," \u548C ",(0,o.jsx)(r.code,{children:"Type=global"})," \u7684 Memory Tracker\uFF0C\u5E2E\u52A9\u4F7F\u7528\u8005\u5206\u6790\u5F53\u65F6\u7684\u5185\u5B58\u72B6\u6001\uFF0C\u5177\u4F53\u53C2\u8003 ",(0,o.jsx)(r.a,{href:"/zh-CN/docs/3.0/admin-manual/memory-management/memory-analysis/memory-log-analysis",children:"\u5185\u5B58\u65E5\u5FD7\u5206\u6790"})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"\u5185\u5B58\u5206\u6790",children:"\u5185\u5B58\u5206\u6790"}),"\n",(0,o.jsxs)(r.p,{children:["\u5C06 ",(0,o.jsx)(r.code,{children:"type=overview"})," \u7684 Memory Tracker \u5BF9\u5E94\u5230\u4E0A\u8FF0\u5185\u5B58\u7ED3\u6784\u4E2D ",(0,o.jsx)(r.code,{children:"tracked"})," \u4E0B\u7684\u6BCF\u4E00\u90E8\u5206\u5185\u5B58\uFF1A"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"Doris BE Process Memory\n    |\n    |---\x3e tracked: \u5BF9\u5E94 `MemTrackerLimiter Label=sum of all trackers, Type=overview`\uFF0C\u662F Memory Tracker \u7EDF\u8BA1\u5230\u7684\u6240\u6709\u5185\u5B58\uFF0C\u5373\u9664 `Label=process resident memory` \u548C `Label=process virtual memory` \u5916\uFF0C\u5176\u4ED6 `type=overview` \u7684 Memory Tracker \u7684 Current Consumption \u603B\u548C\u3002\n            |\n            |---\x3e jemalloc\n            |       |\n            |       |---\x3e jemalloc cache: \u5BF9\u5E94 `MemTrackerLimiter Label=tc/jemalloc_cache, Type=overview`\uFF0CJemalloc \u7F13\u5B58\u5305\u62EC Dirty Page\u3001Thread Cache \u4E24\u90E8\u5206\u3002\n            |       |\n            |       |---\x3e jemalloc metadata: \u5BF9\u5E94 `MemTrackerLimiter Label=tc/jemalloc_metadata, Type=overview`\uFF0CJemalloc \u7684 Metadata\u3002\n            |\n            |---\x3e global: \u5BF9\u5E94 `MemTrackerLimiter Label=global, Type=overview`\uFF0C\u5305\u62EC Cache\u3001\u5143\u6570\u636E\u3001\u89E3\u538B\u7F29 \u7B49\u751F\u547D\u5468\u671F\u548C\u8FDB\u7A0B\u76F8\u540C\u7684\u5168\u5C40 Memory Tracker\uFF0CWeb \u9875\u9762 `http://{be_host}:{be_web_server_port}/mem_tracker?type=global` \u5C55\u793A `type=global` \u7684\u6240\u6709 Memory Tracker\u3002\n            |\n            |---\x3e task\n            |       |\n            |       |---\x3e query: \u5BF9\u5E94 `MemTrackerLimiter Label=query, Type=overview`\uFF0C\u5373\u6240\u6709 Query Memory Tracker \u7684 Current Consumption \u603B\u548C\uFF0CWeb \u9875\u9762 `http://{be_host}:{be_web_server_port}/mem_tracker?type=query` \u5C55\u793A `type=query` \u7684\u6240\u6709 Memory Tracker\u3002\n            |       |\n            |       |---\x3e load: \u5BF9\u5E94 `MemTrackerLimiter Label=load, Type=overview`\uFF0C\u6240\u6709 Load Memory Tracker \u7684 Current Consumption \u603B\u548C\uFF0CWeb \u9875\u9762 `http://{be_host}:{be_web_server_port}/mem_tracker?type=load` \u5C55\u793A `type=load` \u7684\u6240\u6709 Memory Tracker\u3002\n            |       |\n            |       |---\x3e reserved: \u5BF9\u5E94 `MemTrackerLimiter Label=reserved_memory, Type=overview`\uFF0C\u88AB\u9884\u7559\u7684\u5185\u5B58\uFF0C\u67E5\u8BE2\u5728\u6784\u5EFA Hash Table \u7B49\u9700\u8981\u5927\u5185\u5B58\u7684\u884C\u4E3A\u4E4B\u524D\uFF0C\u4F1A\u5148\u4ECE Memory Tracker \u4E2D\u9884\u7559\u51FA\u6240\u6784\u5EFA Hash Table \u5927\u5C0F\u7684\u5185\u5B58\uFF0C\u786E\u4FDD\u540E\u7EED\u5185\u5B58\u7533\u8BF7\u80FD\u591F\u6EE1\u8DB3\u3002\n            |       |\n            |       |---\x3e compaction: \u5BF9\u5E94 `MemTrackerLimiter Label=compaction, Type=overview`\uFF0C\u6240\u6709 Compaction Memory Tracker \u7684 Current Consumption \u603B\u548C\uFF0CWeb \u9875\u9762 `http://{be_host}:{be_web_server_port}/mem_tracker?type=compaction` \u5C55\u793A `type=compaction` \u7684\u6240\u6709 Memory Tracker\u3002\n            |       |\n            |       |---\x3e schema_change: \u5BF9\u5E94 `MemTrackerLimiter Label=schema_change, Type=overview`\uFF0C\u6240\u6709 Schema Change Memory Tracker \u7684 Current Consumption \u603B\u548C\uFF0CWeb \u9875\u9762 `http://{be_host}:{be_web_server_port}/mem_tracker?type=schema_change` \u5C55\u793A `type=schema_change` \u7684\u6240\u6709 Memory Tracker\u3002\n\n            |       |\n            |       |---\x3e other: \u5BF9\u5E94 `MemTrackerLimiter Label=other, Type=overview`\uFF0C\u9664\u4E0A\u8FF0\u4E4B\u5916\u5176\u4ED6\u4EFB\u52A1\u7684\u5185\u5B58\u603B\u548C\uFF0C\u4F8B\u5982 EngineAlterTabletTask\u3001EngineCloneTask\u3001CloudEngineCalcDeleteBitmapTask\u3001SnapshotManager \u7B49\uFF0CWeb \u9875\u9762 `http://{be_host}:{be_web_server_port}/mem_tracker?type=other` \u5C55\u793A `type=other` \u7684\u6240\u6709 Memory Tracker\u3002\n    |\n    |---\x3e Doris BE \u8FDB\u7A0B\u7269\u7406\u5185\u5B58\uFF0C\u5BF9\u5E94 `MemTrackerLimiter Label=process resident memory, Type=overview`\uFF0CCurrent Consumption \u53D6\u81EA VmRSS in `/proc/self/status`\uFF0CPeak Consumption \u53D6\u81EA VmHWM in `/proc/self/status`\u3002\n    |\n    |---\x3e Doris BE \u8FDB\u7A0B\u865A\u62DF\u5185\u5B58\uFF0C\u5BF9\u5E94 `MemTrackerLimiter Label=process virtual memory, Type=overview`\uFF0CCurrent Consumption \u53D6\u81EA VmSize in `/proc/self/status`\uFF0CPeak Consumption \u53D6\u81EA VmPeak in `/proc/self/status`\u3002\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u4E0A\u8FF0\u5185\u5B58\u7ED3\u6784\u4E2D\u6BCF\u4E00\u90E8\u5206\u5185\u5B58\u7684\u5206\u6790\u65B9\u6CD5:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/zh-CN/docs/3.0/admin-manual/memory-management/memory-analysis/jemalloc-memory-analysis",children:"Jemalloc \u5185\u5B58\u5206\u6790"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/zh-CN/docs/3.0/admin-manual/memory-management/memory-analysis/global-memory-analysis",children:"\u5168\u5C40\u5185\u5B58\u5206\u6790"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/zh-CN/docs/3.0/admin-manual/memory-management/memory-analysis/query-memory-analysis",children:"Query \u5185\u5B58\u5206\u6790"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/zh-CN/docs/3.0/admin-manual/memory-management/memory-analysis/load-memory-analysis",children:"Load \u5185\u5B58\u5206\u6790"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"\u5185\u5B58\u95EE\u9898-faq",children:"\u5185\u5B58\u95EE\u9898 FAQ"}),"\n",(0,o.jsxs)(r.p,{children:["\u53C2\u8003 ",(0,o.jsx)(r.a,{href:"/zh-CN/docs/3.0/admin-manual/memory-management/memory-issue-faq",children:"\u5185\u5B58\u95EE\u9898 FAQ"})," \u5206\u6790\u5E38\u89C1\u7684\u5185\u5B58\u95EE\u9898\u3002"]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"\u5185\u5B58\u63A7\u5236\u7B56\u7565",children:"\u5185\u5B58\u63A7\u5236\u7B56\u7565"}),"\n",(0,o.jsxs)(r.p,{children:["\u53C2\u8003 ",(0,o.jsx)(r.a,{href:"/zh-CN/docs/3.0/admin-manual/memory-management/memory-feature/memory-control-strategy",children:"\u5185\u5B58\u63A7\u5236\u7B56\u7565"})," \u4E2D\u5BF9\u5185\u5B58\u5206\u914D\u3001\u76D1\u63A7\u3001\u56DE\u6536\u7684\u4ECB\u7ECD\uFF0C\u5B83\u4EEC\u4FDD\u8BC1\u4E86 Doris BE \u8FDB\u7A0B\u5185\u5B58\u7684\u9AD8\u6548\u53EF\u63A7\u3002"]})]})}function d(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},68299:function(e,r,n){n.d(r,{Z:function(){return a}});let a=n.p+"assets/images/bvar-memory-9c598521dff20751a24f3a3ae458096a.png"},337779:function(e,r,n){n.d(r,{Z:function(){return a}});let a=n.p+"assets/images/memory-structure-c33470cfd0abfcf0b7ced0de7e483537.png"},250065:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return m}});var a=n(667294);let o={},t=a.createContext(o);function m(e){let r=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:m(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);