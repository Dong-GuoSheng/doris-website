"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["20883"],{412745:function(t,e,n){n.r(e),n.d(e,{metadata:()=>l,contentTitle:()=>d,default:()=>a,assets:()=>c,toc:()=>o,frontMatter:()=>r});var l=JSON.parse('{"id":"admin-manual/system-tables/information_schema/workload_groups","title":"workload_groups","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/system-tables/information_schema/workload_groups.md","sourceDirName":"admin-manual/system-tables/information_schema","slug":"/admin-manual/system-tables/information_schema/workload_groups","permalink":"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/workload_groups","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"workload_groups","language":"zh-CN"},"sidebar":"docs","previous":{"title":"workload_group_resource_usage","permalink":"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/workload_group_resource_usage"},"next":{"title":"workload_policy","permalink":"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/workload_policy"}}'),s=n("785893"),i=n("250065");let r={title:"workload_groups",language:"zh-CN"},d=void 0,c={},o=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6240\u5C5E\u6570\u636E\u5E93",id:"\u6240\u5C5E\u6570\u636E\u5E93",level:2},{value:"\u8868\u4FE1\u606F",id:"\u8868\u4FE1\u606F",level:2}];function x(t){let e={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u8BB0\u5F55 Workload Group \u7684\u914D\u7F6E\u4FE1\u606F"}),"\n",(0,s.jsx)(e.h2,{id:"\u6240\u5C5E\u6570\u636E\u5E93",children:"\u6240\u5C5E\u6570\u636E\u5E93"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"information_schema"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8868\u4FE1\u606F",children:"\u8868\u4FE1\u606F"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5217\u540D"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u7C7B\u578B"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ID"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Workload Group \u7684 ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"NAME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Workload Group \u7684\u540D\u5B57"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CPU_SHARE"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Workload Group \u7684 CPU \u8F6F\u9650\u6743\u91CD"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MEMORY_LIMIT"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Workload Group \u7684\u5185\u5B58\u9650\u5236"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ENABLE_MEMORY_OVERCOMMIT"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u662F\u5426\u5F00\u542F Workload Group \u7684\u5185\u5B58\u7684\u8F6F\u9650"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MAX_CONCURRENCY"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Workload Group \u7684\u6700\u5927\u5E76\u53D1\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MAX_QUEUE_SIZE"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Workload Group \u6700\u5927\u6392\u961F\u5927\u5C0F"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"QUEUE_TIMEOUT"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Workload Group \u6392\u961F\u8D85\u65F6"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CPU_HARD_LIMIT"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Workload Group CPU \u786C\u9650\u5927\u5C0F"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SCAN_THREAD_NUM"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u672C\u5730 Scan \u7684\u7EBF\u7A0B\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MAX_REMOTE_SCAN_THREAD_NUM"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8FDC\u7A0B Scan \u7EBF\u7A0B\u6C60\u7684\u6700\u5927\u7EBF\u7A0B\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MIN_REMOTE_SCAN_THREAD_NUM"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8FDC\u7A0B Scan \u7EBF\u7A0B\u6C60\u7684\u6700\u5C0F\u7EBF\u7A0B\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SPILL_THRESHOLD_LOW_WATERMARK"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Workload Group \u843D\u76D8\u7684\u4F4E\u6C34\u4F4D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SPILL_THRESHOLD_HIGH_WATERMARK"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Workload  Group \u843D\u76D8\u7684\u9AD8\u6C34\u4F4D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TAG"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Workload Group \u7684\u6807\u7B7E"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"READ_BYTES_PER_SECOND"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u672C\u5730\u8BFB\u6BCF\u79D2\u626B\u63CF\u7684\u5B57\u8282\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"REMOTE_READ_BYTES_PER_SECOND"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8FDC\u7A0B\u8BFB\u6BCF\u79D2\u626B\u63CF\u7684\u5B57\u8282\u6570"})]})]})]})]})}function a(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(x,{...t})}):x(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return d},a:function(){return r}});var l=n(667294);let s={},i=l.createContext(s);function r(t){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),l.createElement(i.Provider,{value:e},t.children)}}}]);