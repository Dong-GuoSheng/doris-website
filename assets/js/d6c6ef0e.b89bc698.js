"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["261796"],{736400:function(e,r,s){s.r(r),s.d(r,{metadata:()=>o,contentTitle:()=>i,default:()=>d,assets:()=>m,toc:()=>l,frontMatter:()=>n});var o=JSON.parse('{"id":"admin-manual/memory-management/memory-issue-faq","title":"Memory Issue FAQ","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/memory-management/memory-issue-faq.md","sourceDirName":"admin-manual/memory-management","slug":"/admin-manual/memory-management/memory-issue-faq","permalink":"/docs/3.0/admin-manual/memory-management/memory-issue-faq","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Memory Issue FAQ","language":"en"},"sidebar":"docs","previous":{"title":"Overview","permalink":"/docs/3.0/admin-manual/memory-management/overview"},"next":{"title":"Jemalloc Memory Analysis","permalink":"/docs/3.0/admin-manual/memory-management/memory-analysis/jemalloc-memory-analysis"}}'),t=s("785893"),a=s("250065");let n={title:"Memory Issue FAQ",language:"en"},i=void 0,m={},l=[{value:"1 Query and load memory limit error",id:"1-query-and-load-memory-limit-error",level:2},{value:"2 Doris BE OOM Crash",id:"2-doris-be-oom-crash",level:2},{value:"3 Memory Leak",id:"3-memory-leak",level:2},{value:"4 Doris BE process memory does not decrease or continues to increase",id:"4-doris-be-process-memory-does-not-decrease-or-continues-to-increase",level:2},{value:"5 Large virtual memory usage",id:"5-large-virtual-memory-usage",level:2},{value:"6 The process memory is very large after the BE process is just started",id:"6-the-process-memory-is-very-large-after-the-be-process-is-just-started",level:2},{value:"7 Query does not have complex operators but simply scans data, but it uses a lot of memory",id:"7-query-does-not-have-complex-operators-but-simply-scans-data-but-it-uses-a-lot-of-memory",level:2},{value:"8. Query Cancel stuck",id:"8-query-cancel-stuck",level:2}];function c(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Doris BE process memory analysis mainly uses ",(0,t.jsx)(r.code,{children:"be/log/be.INFO"})," log, BE process memory monitoring (Metrics), Doris Bvar statistics. If OOM Killer is triggered, you need to collect ",(0,t.jsx)(r.code,{children:"dmesg -T"})," execution results. If you analyze the memory of query or load tasks, you need to collect Query Profile. Analyze common memory problems based on this information. If you cannot solve the problem by yourself, you need to ask Doris developers for help. No matter which way you use (submit issue on Github, create issue on Doris forum, email or WeChat), please add the above information to your problem description."]}),"\n",(0,t.jsxs)(r.p,{children:["First locate which memory problem the currently observed phenomenon belongs to, and further investigate. Usually, you need to analyze the process memory log first. Refer to ",(0,t.jsx)(r.a,{href:"/docs/3.0/admin-manual/memory-management/memory-analysis/memory-log-analysis",children:"Memory Log Analysis"}),". Common memory problems are listed below."]}),"\n",(0,t.jsx)(r.h2,{id:"1-query-and-load-memory-limit-error",children:"1 Query and load memory limit error"}),"\n",(0,t.jsxs)(r.p,{children:["When ",(0,t.jsx)(r.code,{children:"MEM_LIMIT_EXCEEDED"})," appears in the query and load error message, it means that the task is canceled because the process has insufficient available memory or the task exceeds the memory limit for a single execution."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"ERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.8)[MEM_LIMIT_EXCEEDED] xxxx .\n"})}),"\n",(0,t.jsxs)(r.p,{children:["If the error message contains ",(0,t.jsx)(r.code,{children:"Process memory not enough"}),", it means that the process has insufficient available memory. Refer to ",(0,t.jsx)(r.a,{href:"/docs/3.0/admin-manual/memory-management/memory-analysis/query-cancelled-after-process-memory-exceeded",children:"Query or load error process has insufficient available memory"})," for further analysis."]}),"\n",(0,t.jsxs)(r.p,{children:["If ",(0,t.jsx)(r.code,{children:"memory tracker limit exceeded"})," appears in the error message, it means that the task exceeds the single execution memory limit. Refer to ",(0,t.jsx)(r.a,{href:"/docs/3.0/admin-manual/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded",children:"Query or load error exceeds single execution memory limit"})," for further analysis."]}),"\n",(0,t.jsx)(r.h2,{id:"2-doris-be-oom-crash",children:"2 Doris BE OOM Crash"}),"\n",(0,t.jsxs)(r.p,{children:["If there is no error message in ",(0,t.jsx)(r.code,{children:"log/be.out"})," after the BE process crashes, execute ",(0,t.jsx)(r.code,{children:"dmesg -T"}),". If you see ",(0,t.jsx)(r.code,{children:"Out of memory: Killed process {pid} (doris_be)"}),", it means that the OOM Killer is triggered. Refer to ",(0,t.jsx)(r.a,{href:"/docs/3.0/admin-manual/memory-management/memory-analysis/oom-crash-analysis",children:"OOM Killer Crash Analysis"})," for further analysis."]}),"\n",(0,t.jsx)(r.h2,{id:"3-memory-leak",children:"3 Memory Leak"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"If you encounter a suspected memory leak, the best solution is to upgrade to the latest three-digit version. If you are using Doris 2.0, upgrade to the latest version of Doris 2.0.x, because it is likely that other people have encountered the same phenomenon, and most memory leaks are fixed in version iterations."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"If the following phenomenon is observed, it means that there may be a memory leak:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Doris Grafana or server monitoring finds that the memory of the Doris BE process has been growing linearly, and the memory does not decrease after the task on the cluster stops."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Memory Tracker has missing statistics, refer to ",(0,t.jsx)(r.a,{href:"/docs/3.0/admin-manual/memory-management/memory-feature/memory-tracker",children:"Memory Tracker"})," for analysis."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Memory leaks are usually accompanied by missing statistics in Memory Tracker, so the analysis method also refers to the [Memory Tracker] section."}),"\n",(0,t.jsx)(r.h2,{id:"4-doris-be-process-memory-does-not-decrease-or-continues-to-increase",children:"4 Doris BE process memory does not decrease or continues to increase"}),"\n",(0,t.jsxs)(r.p,{children:["If Doris Grafana or server monitoring finds that the memory of the Doris BE process has been increasing linearly, and the memory does not decrease after the task on the cluster is stopped, first refer to ",(0,t.jsx)(r.a,{href:"/docs/3.0/admin-manual/memory-management/memory-feature/memory-tracker",children:"Memory Tracker"})," in ",(0,t.jsx)(r.a,{href:"/docs/3.0/admin-manual/memory-management/memory-feature/memory-tracker",children:"Memory Tracker"})," to analyze whether there is missing statistics in Memory Tracker. If there is missing statistics in Memory Tracker, further analyze the cause."]}),"\n",(0,t.jsxs)(r.p,{children:["If Memory Tracker does not have missing statistics and has counted most of the memory, refer to ",(0,t.jsx)(r.a,{href:"/docs/3.0/admin-manual/memory-management/overview",children:"Overview"})," to analyze the reasons why different parts of the Doris BE process occupy too much memory and how to reduce its memory usage."]}),"\n",(0,t.jsx)(r.h2,{id:"5-large-virtual-memory-usage",children:"5 Large virtual memory usage"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Label=process virtual memory"})," Memory Tracker displays the real-time virtual memory size, which is the same as the virtual memory of the Doris BE process seen by ",(0,t.jsx)(r.code,{children:"top -p {pid}"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"MemTrackerLimiter Label=process virtual memory, Type=overview, Limit=-1.00 B(-1 B), Used=44.25 GB(47512956928 B), Peak=44.25 GB(47512956928 B)\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Doris currently still has the problem of Doris BE process virtual memory being too large, usually because Jemalloc retains a large number of virtual memory mappings, which will also cause Jemalloc Metadata to occupy too much memory. Refer to ",(0,t.jsx)(r.a,{href:"/docs/3.0/admin-manual/memory-management/memory-analysis/jemalloc-memory-analysis",children:"Jemalloc Memory Analysis"})," for the analysis of Jemalloc Metadata memory."]}),"\n",(0,t.jsx)(r.p,{children:"In addition, it is known that Doris's Join Operator and Column lack memory reuse, which will cause more virtual memory to be requested in some scenarios and eventually cached in Jemalloc Retained. There is currently no good solution. It is recommended to restart the Doris BE process regularly."}),"\n",(0,t.jsx)(r.h2,{id:"6-the-process-memory-is-very-large-after-the-be-process-is-just-started",children:"6 The process memory is very large after the BE process is just started"}),"\n",(0,t.jsxs)(r.p,{children:["This is usually because the metadata memory loaded when the BE process starts is too large. Refer to ",(0,t.jsx)(r.a,{href:"/docs/3.0/admin-manual/memory-management/memory-analysis/metadata-memory-analysis",children:"Metadata Memory Analysis"})," to view Doris BE Bvar."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["If ",(0,t.jsx)(r.code,{children:"doris_total_tablet_num"})," is too much, it is usually because the number of partitions and buckets of the table is too large. Check ",(0,t.jsx)(r.code,{children:"{fe_host}:{fe_http_port}/System?path=//dbs"})," to find a table with a large number of tablets. The number of tablets of a table is equal to the number of its partitions multiplied by the number of buckets. Try to reduce the number of its partitions and buckets. Or delete outdated tables or partitions that will not be used."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["If ",(0,t.jsx)(r.code,{children:"doris_total_rowset_num"})," is too large but the number of tablets is small, refer to the ",(0,t.jsx)(r.code,{children:"SHOW-PROC"})," document to find tables with many rowsets but few tablets, and then manually trigger compaction, or wait for automatic compaction to complete. For details, refer to the metadata management related documents. It is normal for metadata to occupy several GB when there are hundreds of thousands of rowsets."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["If ",(0,t.jsx)(r.code,{children:"tablet_meta_schema_columns_count"})," is too large, hundreds or thousands of times larger than ",(0,t.jsx)(r.code,{children:"doris_total_tablet_schema_num"}),", it means that there are large wide tables with hundreds or thousands of columns in the cluster. At this time, the same number of tablets will occupy more memory."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"7-query-does-not-have-complex-operators-but-simply-scans-data-but-it-uses-a-lot-of-memory",children:"7 Query does not have complex operators but simply scans data, but it uses a lot of memory"}),"\n",(0,t.jsxs)(r.p,{children:["It may be the memory occupied by the Column Reader and Index Read opened when reading the Segment. Refer to ",(0,t.jsx)(r.a,{href:"/docs/3.0/admin-manual/memory-management/memory-analysis/metadata-memory-analysis",children:"Metadata Memory Analysis"})," to view the changes of ",(0,t.jsx)(r.code,{children:"doris_total_segment_num"}),", ",(0,t.jsx)(r.code,{children:"doris_column_reader_num"}),", ",(0,t.jsx)(r.code,{children:"doris_ordinal_index_memory_bytes"}),", ",(0,t.jsx)(r.code,{children:"doris_zone_map_memory_bytes"}),", and ",(0,t.jsx)(r.code,{children:"doris_short_key_index_memory_bytes"})," in Doris BE Bvar. This phenomenon is also common when reading large wide tables. When hundreds of thousands of Column Readers are opened, the memory may occupy tens of GB."]}),"\n",(0,t.jsxs)(r.p,{children:["If you see the ",(0,t.jsx)(r.code,{children:"Segment"})," and ",(0,t.jsx)(r.code,{children:"ColumnReader"})," fields in the call stack with a large memory share in the Heap Profile, it can be basically confirmed that a large amount of memory is occupied when reading the Segment."]}),"\n",(0,t.jsx)(r.p,{children:"At this time, you can only modify the SQL to reduce the amount of data scanned, or reduce the bucket size specified when creating the table, so as to open fewer segments."}),"\n",(0,t.jsx)(r.h2,{id:"8-query-cancel-stuck",children:"8. Query Cancel stuck"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Common before Doris 2.1.3"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Most of the memory requested during query execution needs to be released when the query ends. When the process memory is sufficient, there is usually no need to pay attention to how fast or slow the query ends. However, when the process memory is insufficient, some queries are often canceled according to a certain strategy to release their memory and avoid the process triggering OOM Killer. At this time, if the query cancel process is stuck and the memory cannot be released in time, in addition to increasing the risk of triggering OOM Killer, it may also cause more queries to be canceled due to insufficient process memory."}),"\n",(0,t.jsxs)(r.p,{children:["If a query is known to be canceled, the following is to analyze whether it is stuck in the cancel process based on this QueryID. First, execute ",(0,t.jsx)(r.code,{children:"grep {queryID} be/log/be.INFO"})," to find the first log containing the ",(0,t.jsx)(r.code,{children:"Cancel"})," keyword. The corresponding time point is the time when the query is canceled. Find the log containing the keyword ",(0,t.jsx)(r.code,{children:"deregister query/load memory tracker"}),". The corresponding time point is the time when the query cancel is completed. If the OOM Killer is finally triggered, and no log containing the keyword ",(0,t.jsx)(r.code,{children:"deregister query/load memory tracker"})," is found, it means that the query has not been canceled until the OOM Killer occurs. Usually, if the query cancel process takes more than 3s, the query is stuck in the cancel process, and the query execution log needs to be further analyzed."]}),"\n",(0,t.jsxs)(r.p,{children:["In addition, after executing ",(0,t.jsx)(r.code,{children:"grep {queryID} be/log/be.INFO"}),", if you see a log containing the keyword ",(0,t.jsx)(r.code,{children:"tasks is being canceled and has not been completed yet"}),", the QueryID list behind it means that when the Memory GC is executed, it is found that these queries are being canceled but not canceled. At this time, these queries will be skipped and memory will continue to be released elsewhere. This can be used to determine whether the behavior of the Memory GC is as expected."]})]})}function d(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return i},a:function(){return n}});var o=s(667294);let t={},a=o.createContext(t);function n(e){let r=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);