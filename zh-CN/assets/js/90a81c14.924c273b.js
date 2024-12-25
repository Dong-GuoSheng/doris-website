"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["324595"],{277013:function(e,r,n){n.r(r),n.d(r,{metadata:()=>a,contentTitle:()=>i,default:()=>t,assets:()=>c,toc:()=>d,frontMatter:()=>o});var a=JSON.parse('{"id":"admin-manual/memory-management/memory-issue-faq","title":"\u5185\u5B58\u95EE\u9898 FAQ","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/memory-management/memory-issue-faq.md","sourceDirName":"admin-manual/memory-management","slug":"/admin-manual/memory-management/memory-issue-faq","permalink":"/zh-CN/docs/admin-manual/memory-management/memory-issue-faq","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u5185\u5B58\u95EE\u9898 FAQ","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u6982\u8FF0","permalink":"/zh-CN/docs/admin-manual/memory-management/overview"},"next":{"title":"Jemalloc \u5185\u5B58\u5206\u6790","permalink":"/zh-CN/docs/admin-manual/memory-management/memory-analysis/jemalloc-memory-analysis"}}'),s=n("785893"),l=n("250065");let o={title:"\u5185\u5B58\u95EE\u9898 FAQ",language:"zh-CN"},i=void 0,c={},d=[{value:"1 \u67E5\u8BE2\u548C\u5BFC\u5165\u5185\u5B58\u8D85\u9650\u9519\u8BEF",id:"1-\u67E5\u8BE2\u548C\u5BFC\u5165\u5185\u5B58\u8D85\u9650\u9519\u8BEF",level:2},{value:"2 Doris BE OOM Crash",id:"2-doris-be-oom-crash",level:2},{value:"3 \u5185\u5B58\u6CC4\u6F0F",id:"3-\u5185\u5B58\u6CC4\u6F0F",level:2},{value:"4 Doris BE \u8FDB\u7A0B\u5185\u5B58\u4E0D\u4E0B\u964D OR \u6301\u7EED\u4E0A\u6DA8",id:"4-doris-be-\u8FDB\u7A0B\u5185\u5B58\u4E0D\u4E0B\u964D-or-\u6301\u7EED\u4E0A\u6DA8",level:2},{value:"5 \u865A\u62DF\u5185\u5B58\u5360\u7528\u5927",id:"5-\u865A\u62DF\u5185\u5B58\u5360\u7528\u5927",level:2},{value:"6 BE \u8FDB\u7A0B\u521A\u542F\u52A8\u540E\u8FDB\u7A0B\u5185\u5B58\u5C31\u5F88\u5927",id:"6-be-\u8FDB\u7A0B\u521A\u542F\u52A8\u540E\u8FDB\u7A0B\u5185\u5B58\u5C31\u5F88\u5927",level:2},{value:"7 Query \u6CA1\u6709\u590D\u6742\u7B97\u5B50\u53EA\u662F\u7B80\u5355\u7684 Scan \u6570\u636E\uFF0C\u5374\u8981\u4F7F\u7528\u5F88\u5927\u7684\u5185\u5B58",id:"7-query-\u6CA1\u6709\u590D\u6742\u7B97\u5B50\u53EA\u662F\u7B80\u5355\u7684-scan-\u6570\u636E\u5374\u8981\u4F7F\u7528\u5F88\u5927\u7684\u5185\u5B58",level:2},{value:"8. Query Cancel \u8FC7\u7A0B\u4E2D\u5361\u4F4F",id:"8-query-cancel-\u8FC7\u7A0B\u4E2D\u5361\u4F4F",level:2}];function m(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Doris BE \u8FDB\u7A0B\u5185\u5B58\u5206\u6790\u4E3B\u8981\u4F7F\u7528 ",(0,s.jsx)(r.code,{children:"be/log/be.INFO"})," \u65E5\u5FD7\u3001BE \u8FDB\u7A0B\u5185\u5B58\u76D1\u63A7(Metrics)\u3001Doris Bvar \u7EDF\u8BA1\uFF0C\u5982\u679C\u89E6\u53D1\u4E86 OOM Killer \u9700\u8981\u6536\u96C6 ",(0,s.jsx)(r.code,{children:"dmesg -T"})," \u6267\u884C\u7ED3\u679C\uFF0C\u5982\u679C\u5206\u6790\u67E5\u8BE2\u6216\u5BFC\u5165\u4EFB\u52A1\u7684\u5185\u5B58\u9700\u8981\u6536\u96C6 Query Profile\uFF0C\u4F9D\u636E\u8FD9\u4E9B\u4FE1\u606F\u5206\u6790\u5E38\u89C1\u7684\u5185\u5B58\u95EE\u9898\u3002\u5982\u679C\u4F60\u81EA\u884C\u5206\u6790\u65E0\u6CD5\u89E3\u51B3\u95EE\u9898\uFF0C\u9700\u8981\u5411 Doris \u5F00\u53D1\u8005\u4EEC\u6C42\u52A9\uFF0C\u65E0\u8BBA\u4F7F\u7528\u4F55\u79CD\u9014\u5F84\uFF08Github \u63D0\u4EA4 issue\uFF0CDoris \u8BBA\u575B\u521B\u5EFA\u95EE\u9898\uFF0C\u90AE\u4EF6\u6216 WeChat\uFF09\uFF0C\u90FD\u8BF7\u5C06\u4E0A\u8FF0\u4FE1\u606F\u6DFB\u52A0\u5230\u4F60\u7684\u95EE\u9898\u63CF\u8FF0\u4E2D\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u9996\u5148\u5B9A\u4F4D\u5F53\u524D\u89C2\u5BDF\u5230\u7684\u73B0\u8C61\u5C5E\u4E8E\u54EA\u79CD\u5185\u5B58\u95EE\u9898\uFF0C\u5E76\u8FDB\u4E00\u6B65\u6392\u67E5\uFF0C\u901A\u5E38\u9700\u8981\u5148\u5206\u6790\u8FDB\u7A0B\u5185\u5B58\u65E5\u5FD7\uFF0C\u53C2\u8003 ",(0,s.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/memory-log-analysis",children:"\u5185\u5B58\u65E5\u5FD7\u5206\u6790"}),"\uFF0C\u4E0B\u9762\u5217\u4E3E\u5E38\u89C1\u7684\u5185\u5B58\u95EE\u9898\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"1-\u67E5\u8BE2\u548C\u5BFC\u5165\u5185\u5B58\u8D85\u9650\u9519\u8BEF",children:"1 \u67E5\u8BE2\u548C\u5BFC\u5165\u5185\u5B58\u8D85\u9650\u9519\u8BEF"}),"\n",(0,s.jsxs)(r.p,{children:["\u5F53\u67E5\u8BE2\u548C\u5BFC\u5165\u7684\u62A5\u9519\u4FE1\u606F\u4E2D\u51FA\u73B0 ",(0,s.jsx)(r.code,{children:"MEM_LIMIT_EXCEEDED"})," \u65F6\uFF0C\u8BF4\u660E\u4EFB\u52A1\u56E0\u4E3A\u8FDB\u7A0B\u53EF\u7528\u5185\u5B58\u4E0D\u8DB3\uFF0C\u6216\u4EFB\u52A1\u8D85\u8FC7\u5355\u6B21\u6267\u884C\u7684\u5185\u5B58\u4E0A\u9650\u800C\u88AB Cancel\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"ERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.8)[MEM_LIMIT_EXCEEDED] xxxx .\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u82E5\u62A5\u9519\u4FE1\u606F\u5305\u542B ",(0,s.jsx)(r.code,{children:"Process memory not enough"}),"\uFF0C\u8BF4\u660E\u8FDB\u7A0B\u53EF\u7528\u5185\u5B58\u4E0D\u8DB3\uFF0C\u53C2\u8003 ",(0,s.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/query-cancelled-after-process-memory-exceeded",children:"\u67E5\u8BE2\u6216\u5BFC\u5165\u62A5\u9519\u8FDB\u7A0B\u53EF\u7528\u5185\u5B58\u4E0D\u8DB3"})," \u8FDB\u4E00\u6B65\u5206\u6790\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u82E5\u62A5\u9519\u4FE1\u606F\u4E2D\u51FA\u73B0 ",(0,s.jsx)(r.code,{children:"memory tracker limit exceeded"})," \u65F6\uFF0C\u8BF4\u660E\u4EFB\u52A1\u8D85\u8FC7\u5355\u6B21\u6267\u884C\u5185\u5B58\u9650\u5236\uFF0C\u53C2\u8003 ",(0,s.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded",children:"\u67E5\u8BE2\u6216\u5BFC\u5165\u62A5\u9519\u8D85\u8FC7\u5355\u6B21\u6267\u884C\u5185\u5B58\u9650\u5236"})," \u8FDB\u4E00\u6B65\u5206\u6790\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"2-doris-be-oom-crash",children:"2 Doris BE OOM Crash"}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679C BE \u8FDB\u7A0B Crash \u540E ",(0,s.jsx)(r.code,{children:"log/be.out"})," \u4E2D\u6CA1\u6709\u62A5\u9519\u4FE1\u606F\uFF0C\u6267\u884C ",(0,s.jsx)(r.code,{children:"dmesg -T"})," \u5982\u679C\u770B\u5230 ",(0,s.jsx)(r.code,{children:"Out of memory: Killed process {pid} (doris_be)"}),"\uFF0C\u8BF4\u660E\u89E6\u53D1\u4E86 OOM Killer\uFF0C\u53C2\u8003 ",(0,s.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/oom-crash-analysis",children:"OOM Killer Crash \u5206\u6790"})," \u8FDB\u4E00\u6B65\u5206\u6790\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"3-\u5185\u5B58\u6CC4\u6F0F",children:"3 \u5185\u5B58\u6CC4\u6F0F"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"\u5982\u679C\u9047\u5230\u7591\u4F3C\u5185\u5B58\u6CC4\u6F0F\u7684\u73B0\u8C61\uFF0C\u6700\u597D\u7684\u89E3\u51B3\u529E\u6CD5\u662F\u5347\u7EA7\u5230\u6700\u65B0\u7684\u4E09\u4F4D\u6570\u7248\u672C\uFF0C\u5982\u679C\u4F60\u5728\u7528 Doris 2.0\uFF0C\u5C31\u5347\u7EA7\u5230 Doris 2.0.x \u7684\u6700\u65B0\u7248\u672C\uFF0C\u56E0\u4E3A\u5927\u6982\u7387\u5176\u4ED6\u4EBA\u4E5F\u9047\u5230\u8FC7\u540C\u6837\u7684\u73B0\u8C61\uFF0C\u5927\u90E8\u5206\u5185\u5B58\u6CC4\u6F0F\u95EE\u9898\u90FD\u5728\u7248\u672C\u8FED\u4EE3\u4E2D\u88AB\u4FEE\u590D\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u5982\u679C\u89C2\u5BDF\u5230\u4E0B\u9762\u7684\u73B0\u8C61\uFF0C\u8BF4\u660E\u53EF\u80FD\u5B58\u5728\u5185\u5B58\u6CC4\u6F0F\uFF1A"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Doris Grafana \u6216\u670D\u52A1\u5668\u76D1\u63A7\u53D1\u73B0 Doris BE \u8FDB\u7A0B\u5185\u5B58\u4E00\u76F4\u7EBF\u6027\u589E\u957F\uFF0C\u4E14\u96C6\u7FA4\u4E0A\u4EFB\u52A1\u505C\u6B62\u540E\uFF0C\u5185\u5B58\u4E5F\u4E0D\u4E0B\u964D\u3002"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Memory Tracker \u5B58\u5728\u7EDF\u8BA1\u7F3A\u5931\uFF0C\u53C2\u8003 ",(0,s.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/memory-management/memory-feature/memory-tracker",children:"\u5185\u5B58\u8DDF\u8E2A\u5668"})," \u4E2D [Memory Tracker \u7EDF\u8BA1\u7F3A\u5931] \u7AE0\u8282\u5206\u6790\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u5185\u5B58\u6CC4\u6F0F\u901A\u5E38\u90FD\u4F34\u968F\u7740 Memory Tracker \u7EDF\u8BA1\u7F3A\u5931\uFF0C\u6240\u4EE5\u5206\u6790\u65B9\u6CD5\u540C\u6837\u53C2\u8003 [Memory Tracker \u7EDF\u8BA1\u7F3A\u5931] \u7AE0\u8282\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"4-doris-be-\u8FDB\u7A0B\u5185\u5B58\u4E0D\u4E0B\u964D-or-\u6301\u7EED\u4E0A\u6DA8",children:"4 Doris BE \u8FDB\u7A0B\u5185\u5B58\u4E0D\u4E0B\u964D OR \u6301\u7EED\u4E0A\u6DA8"}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679C Doris Grafana \u6216\u670D\u52A1\u5668\u76D1\u63A7\u53D1\u73B0 Doris BE \u8FDB\u7A0B\u5185\u5B58\u4E00\u76F4\u7EBF\u6027\u589E\u957F\uFF0C\u4E14\u96C6\u7FA4\u4E0A\u4EFB\u52A1\u505C\u6B62\u540E\uFF0C\u5185\u5B58\u4E5F\u4E0D\u4E0B\u964D\uFF0C\u9996\u5148\u53C2\u8003 ",(0,s.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/memory-management/memory-feature/memory-tracker",children:"\u5185\u5B58\u8DDF\u8E2A\u5668"})," \u4E2D [Memory Tracker \u7EDF\u8BA1\u7F3A\u5931] \u7AE0\u8282\u5206\u6790\u662F\u5426\u5B58\u5728 Memory Tracker \u7EDF\u8BA1\u7F3A\u5931\uFF0C\u82E5 Memory Tracker \u5B58\u5728\u7EDF\u8BA1\u7F3A\u5931\u5219\u8FDB\u4E00\u6B65\u5206\u6790\u539F\u56E0\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u82E5 Memory Tracker \u4E0D\u5B58\u5728\u7EDF\u8BA1\u7F3A\u5931\uFF0C\u7EDF\u8BA1\u5230\u4E86\u5927\u90E8\u5206\u5185\u5B58\uFF0C\u53C2\u8003 ",(0,s.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/memory-management/overview",children:"Overview"})," \u5206\u6790 Doris BE \u8FDB\u7A0B\u4E0D\u540C\u90E8\u5206\u5185\u5B58\u5360\u7528\u8FC7\u5927\u7684\u539F\u56E0\u4EE5\u53CA\u51CF\u5C11\u5176\u5185\u5B58\u4F7F\u7528\u7684\u65B9\u6CD5\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"5-\u865A\u62DF\u5185\u5B58\u5360\u7528\u5927",children:"5 \u865A\u62DF\u5185\u5B58\u5360\u7528\u5927"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Label=process virtual memory"})," Memory Tracker \u663E\u793A\u5B9E\u65F6\u7684\u865A\u62DF\u5185\u5B58\u5927\u5C0F\uFF0C\u548C ",(0,s.jsx)(r.code,{children:"top -p {pid}"})," \u770B\u5230\u7684 Doris BE \u8FDB\u7A0B\u865A\u62DF\u5185\u5B58\u76F8\u540C\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"MemTrackerLimiter Label=process virtual memory, Type=overview, Limit=-1.00 B(-1 B), Used=44.25 GB(47512956928 B), Peak=44.25 GB(47512956928 B)\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Doris \u76EE\u524D\u4ECD\u5B58\u5728 Doris BE \u8FDB\u7A0B\u865A\u62DF\u5185\u5B58\u8FC7\u5927\u7684\u95EE\u9898\uFF0C\u901A\u5E38\u662F\u56E0\u4E3A Jemalloc \u4FDD\u7559\u4E86\u5927\u91CF\u865A\u62DF\u5185\u5B58\u6620\u5C04\uFF0C\u8FD9\u4E5F\u5C06\u5BFC\u81F4 Jemalloc Metadata \u5360\u7528\u8FC7\u591A\u7684\u5185\u5B58\uFF0C\u53C2\u8003 ",(0,s.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/jemalloc-memory-analysis",children:"Jemalloc \u5185\u5B58\u5206\u6790"})," \u4E2D\u5BF9 Jemalloc Metadata \u5185\u5B58\u7684\u5206\u6790\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"\u9664\u6B64\u4E4B\u5916\u5DF2\u77E5 Doris \u7684 Join Operator \u548C Column \u4E2D\u7F3A\u5C11\u5185\u5B58\u590D\u7528\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u5728\u67D0\u4E9B\u573A\u666F\u7533\u8BF7\u66F4\u591A\u7684\u865A\u62DF\u5185\u5B58\uFF0C\u5E76\u6700\u7EC8\u7F13\u5B58\u5230 Jemalloc Retained \u4E2D\uFF0C\u76EE\u524D\u6CA1\u6709\u5F88\u597D\u7684\u89E3\u51B3\u529E\u6CD5\uFF0C\u5EFA\u8BAE\u5B9A\u671F\u91CD\u542F Doris BE \u8FDB\u7A0B\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"6-be-\u8FDB\u7A0B\u521A\u542F\u52A8\u540E\u8FDB\u7A0B\u5185\u5B58\u5C31\u5F88\u5927",children:"6 BE \u8FDB\u7A0B\u521A\u542F\u52A8\u540E\u8FDB\u7A0B\u5185\u5B58\u5C31\u5F88\u5927"}),"\n",(0,s.jsxs)(r.p,{children:["\u8FD9\u901A\u5E38\u662F\u56E0\u4E3A BE \u8FDB\u7A0B\u542F\u52A8\u65F6\u52A0\u8F7D\u7684\u5143\u6570\u636E\u5185\u5B58\u8FC7\u5927\uFF0C\u53C2\u8003 ",(0,s.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/metadata-memory-analysis",children:"Metadata \u5185\u5B58\u5206\u6790"})," \u67E5\u770B Doris BE Bvar\u3002"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u5982\u679C ",(0,s.jsx)(r.code,{children:"doris_total_tablet_num"})," \u8FC7\u591A\uFF0C\u901A\u5E38\u662F\u56E0\u4E3A\u8868\u7684\u5206\u533A\u548C\u5206\u6876\u6570\u91CF\u8FC7\u591A\uFF0C\u67E5\u770B ",(0,s.jsx)(r.code,{children:"{fe_host}:{fe_http_port}/System?path=//dbs"})," \u627E\u5230 Tablet \u6570\u91CF\u591A\u7684\u8868\uFF0C\u4E00\u4E2A\u8868\u7684 Tablet \u6570\u91CF\u7B49\u4E8E\u5176\u5206\u533A\u6570\u91CF\u4E58\u4EE5\u5206\u6876\u6570\u91CF\uFF0C\u5C1D\u8BD5\u964D\u4F4E\u5176\u5206\u533A\u548C\u5206\u6876\u6570\u91CF\u3002\u6216\u8005\u5220\u9664\u8FC7\u65F6\u4E0D\u4F1A\u88AB\u4F7F\u7528\u7684\u8868\u6216\u5206\u533A\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u5982\u679C ",(0,s.jsx)(r.code,{children:"doris_total_rowset_num"})," \u8FC7\u591A\uFF0C\u4F46 Tablet \u6570\u91CF\u4E0D\u591A\uFF0C\u53C2\u8003 ",(0,s.jsx)(r.code,{children:"SHOW-PROC"})," \u6587\u6863\u627E\u5230 Rowset \u591A\u4F46 Tablet \u4E0D\u591A\u7684\u8868\uFF0C\u7136\u540E\u624B\u52A8\u89E6\u53D1 Compaction\uFF0C\u6216\u8005\u7B49\u81EA\u52A8 Compaction \u5B8C\u6210\uFF0C\u5177\u4F53\u53C2\u8003\u5143\u6570\u636E\u7BA1\u7406\u76F8\u5173\u6587\u6863\uFF0C\u901A\u5E38\u5B58\u5728\u51E0\u5341\u4E07\u4E2A Rowset \u65F6\uFF0C\u5143\u6570\u636E\u5360\u7528\u51E0\u4E2A GB \u662F\u6B63\u5E38\u73B0\u8C61\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u5982\u679C ",(0,s.jsx)(r.code,{children:"tablet_meta_schema_columns_count"})," \u8FC7\u5927\uFF0C\u662F ",(0,s.jsx)(r.code,{children:"doris_total_tablet_schema_num"})," \u7684\u6210\u767E\u4E0A\u5343\u500D\uFF0C\u8BF4\u660E\u96C6\u7FA4\u4E2D\u5B58\u5728\u51E0\u767E\u4E0A\u5343\u5217\u7684\u5927\u5BBD\u8868\uFF0C\u6B64\u65F6\u76F8\u540C\u6570\u91CF\u7684 Tablet \u4F1A\u5360\u7528\u66F4\u591A\u7684\u5185\u5B58\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"7-query-\u6CA1\u6709\u590D\u6742\u7B97\u5B50\u53EA\u662F\u7B80\u5355\u7684-scan-\u6570\u636E\u5374\u8981\u4F7F\u7528\u5F88\u5927\u7684\u5185\u5B58",children:"7 Query \u6CA1\u6709\u590D\u6742\u7B97\u5B50\u53EA\u662F\u7B80\u5355\u7684 Scan \u6570\u636E\uFF0C\u5374\u8981\u4F7F\u7528\u5F88\u5927\u7684\u5185\u5B58"}),"\n",(0,s.jsxs)(r.p,{children:["\u53EF\u80FD\u662F\u8BFB\u53D6 Segment \u65F6\u6253\u5F00\u7684 Column Reader\u3001Index Read \u5360\u7528\u7684\u5185\u5B58\uFF0C\u53C2\u8003 ",(0,s.jsx)(r.a,{href:"/zh-CN/docs/admin-manual/memory-management/memory-analysis/metadata-memory-analysis",children:"Metadata \u5185\u5B58\u5206\u6790"})," \u67E5\u770B Doris BE Bvar \u4E2D\u7684 ",(0,s.jsx)(r.code,{children:"doris_total_segment_num"}),"\u3001",(0,s.jsx)(r.code,{children:"doris_column_reader_num"}),"\u3001",(0,s.jsx)(r.code,{children:"doris_ordinal_index_memory_bytes"}),"\u3001",(0,s.jsx)(r.code,{children:"doris_zone_map_memory_bytes"}),"\u3001",(0,s.jsx)(r.code,{children:"doris_short_key_index_memory_bytes"}),"\u7684\u53D8\u5316\uFF0C\u8FD9\u4E2A\u73B0\u8C61\u540C\u6837\u5E38\u89C1\u4E8E\u8BFB\u53D6\u5927\u5BBD\u8868\uFF0C\u5F53\u6253\u5F00\u51E0\u5341\u4E07\u4E2A Column Reader \u65F6\uFF0C\u5185\u5B58\u53EF\u80FD\u4F1A\u5360\u7528\u51E0\u5341GB\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679C\u4F60\u5728 Heap Profile \u5185\u5B58\u5360\u6BD4\u5927\u7684\u8C03\u7528\u6808\u4E2D\u770B\u5230 ",(0,s.jsx)(r.code,{children:"Segment"}),"\uFF0C",(0,s.jsx)(r.code,{children:"ColumnReader"})," \u5B57\u6BB5\uFF0C\u5219\u57FA\u672C\u53EF\u4EE5\u786E\u8BA4\u662F\u8BFB\u53D6 Segment \u65F6\u5360\u7528\u4E86\u5927\u91CF\u5185\u5B58\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"\u6B64\u65F6\u53EA\u80FD\u901A\u8FC7\u4FEE\u6539 SQL \u964D\u4F4E\u626B\u63CF\u7684\u6570\u636E\u91CF\uFF0C\u6216\u8005\u964D\u4F4E\u5EFA\u8868\u65F6\u6307\u5B9A\u7684\u5206\u6876\u5927\u5C0F\uFF0C\u4ECE\u800C\u6253\u5F00\u66F4\u5C11\u7684 Segment\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"8-query-cancel-\u8FC7\u7A0B\u4E2D\u5361\u4F4F",children:"8. Query Cancel \u8FC7\u7A0B\u4E2D\u5361\u4F4F"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"\u5E38\u89C1\u4E8E Doris 2.1.3 \u4E4B\u524D"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Query \u6267\u884C\u671F\u95F4\u7533\u8BF7\u7684\u5927\u90E8\u5206\u5185\u5B58\u9700\u8981\u7B49\u5230\u67E5\u8BE2\u7ED3\u675F\u65F6\u91CA\u653E\uFF0C\u5728\u8FDB\u7A0B\u5185\u5B58\u5145\u8DB3\u65F6\u901A\u5E38\u65E0\u9700\u5173\u6CE8\u67E5\u8BE2\u7ED3\u675F\u9636\u6BB5\u7684\u5FEB\u6216\u6162\uFF0C\u4F46\u5728\u8FDB\u7A0B\u5185\u5B58\u4E0D\u8DB3\u65F6\u7ECF\u5E38\u4F1A\u6309\u7167\u4E00\u5B9A\u7B56\u7565 Cancel \u90E8\u5206 Query\uFF0C\u4EE5\u91CA\u653E\u5B83\u4EEC\u7684\u5185\u5B58\uFF0C\u907F\u514D\u8FDB\u7A0B\u89E6\u53D1 OOM Killer\u3002\u6B64\u65F6\u5982\u679C Query Cancel \u8FC7\u7A0B\u4E2D\u5361\u4F4F\uFF0C\u65E0\u6CD5\u53CA\u65F6\u91CA\u653E\u5185\u5B58\uFF0C\u9664\u4E86\u4F1A\u589E\u5927\u89E6\u53D1 OOM Killer \u7684\u98CE\u9669\uFF0C\u4E5F\u53EF\u80FD\u4F1A\u5BFC\u81F4\u66F4\u591A\u7684 Query \u56E0\u8FDB\u7A0B\u5185\u5B58\u4E0D\u8DB3\u800C\u88AB Cancel\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["\u82E5\u5DF2\u77E5\u4E00\u4E2A Query \u88AB Cancel\uFF0C\u4E0B\u9762\u4F9D\u636E\u8FD9\u4E2A QueryID \u5206\u6790\u5176\u518D Cancel \u8FC7\u7A0B\u4E2D\u662F\u5426\u5361\u4F4F\u3002\u9996\u5148\u6267\u884C ",(0,s.jsx)(r.code,{children:"grep {queryID} be/log/be.INFO"}),"\uFF0C\u627E\u5230\u7B2C\u4E00\u6B21\u5305\u542B ",(0,s.jsx)(r.code,{children:"Cancel"})," \u5173\u952E\u8BCD\u7684\u65E5\u5FD7\uFF0C\u5BF9\u5E94\u65F6\u95F4\u70B9\u5C31\u662F Query \u88AB Cancel \u7684\u65F6\u95F4\u3002\u627E\u5230\u5305\u542B ",(0,s.jsx)(r.code,{children:"deregister query/load memory tracker"})," \u5173\u952E\u8BCD\u7684\u65E5\u5FD7\uFF0C\u5BF9\u5E94\u7684\u65F6\u95F4\u70B9\u5C31\u662F Query Cancel \u5B8C\u6210\u7684\u65F6\u95F4\uFF0C\u82E5\u6700\u7EC8\u89E6\u53D1\u4E86 OOM Killer\uFF0C\u65E0\u6CD5\u627E\u5230\u5305\u542B ",(0,s.jsx)(r.code,{children:"deregister query/load memory tracker"})," \u5173\u952E\u8BCD\u7684\u65E5\u5FD7\uFF0C\u8BF4\u660E\u76F4\u5230 OOM Killer \u53D1\u751F\u65F6\u8FD9\u4E2A Query \u4ECD\u6CA1\u6709 Cancel \u5B8C\u6210\uFF0C\u901A\u5E38\u82E5 Query Cancel \u8FC7\u7A0B\u7684\u597D\u65F6\u5927\u4E8E 3s\uFF0C\u5C31\u4EFB\u52A1\u8FD9\u4E2A Query \u5728 Cancel \u8FC7\u7A0B\u4E2D\u5361\u4F4F\uFF0C\u9700\u8981\u8FDB\u4E00\u6B65\u5206\u6790 Query \u6267\u884C\u65E5\u5FD7\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u6B64\u5916\uFF0C\u5728\u6267\u884C ",(0,s.jsx)(r.code,{children:"grep {queryID} be/log/be.INFO"})," \u540E\uFF0C\u82E5\u770B\u5230\u5305\u542B ",(0,s.jsx)(r.code,{children:"tasks is being canceled and has not been completed yet"})," \u5173\u952E\u8BCD\u7684\u65E5\u5FD7\uFF0C\u5176\u540E\u9762\u7684 QueryID \u5217\u8868\u662F\u8868\u793A Memory GC \u65F6\u53D1\u73B0\u8FD9\u4E9B Query \u6B63\u5728\u88AB Cancel \u4F46\u6CA1\u6709 Cancel \u5B8C\u6210\uFF0C\u6B64\u65F6\u5C06\u8DF3\u8FC7\u8FD9\u4E9B Query\uFF0C\u7EE7\u7EED\u91CA\u653E\u522B\u5904\u7684\u5185\u5B58\uFF0C\u53EF\u636E\u6B64\u5224\u65AD Memory GC \u7684\u884C\u4E3A\u662F\u5426\u7B26\u5408\u9884\u671F\u3002"]})]})}function t(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return o}});var a=n(667294);let s={},l=a.createContext(s);function o(e){let r=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(l.Provider,{value:r},e.children)}}}]);