"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["981530"],{980935:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD-TASK","title":"SHOW ROUTINE LOAD TASK","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD-TASK.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD-TASK","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD-TASK","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW ROUTINE LOAD TASK","language":"en"},"sidebar":"docs","previous":{"title":"SHOW ROUTINE LOAD","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD"},"next":{"title":"SHOW CREATE ROUTINE LOAD","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-CREATE-ROUTINE-LOAD"}}'),i=n("785893"),a=n("250065");let o={title:"SHOW ROUTINE LOAD TASK",language:"en"},r=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function c(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"View the currently running subtasks of a specified Routine Load job."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'SHOW ROUTINE LOAD TASK\nWHERE JobName = "job_name";\n'})}),"\n",(0,i.jsx)(t.p,{children:"The returned results are as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'              TaskId: d67ce537f1be4b86-abf47530b79ab8e6\n               TxnId: 4\n           TxnStatus: UNKNOWN\n               JobId: 10280\n          CreateTime: 2020-12-12 20:29:48\n    ExecuteStartTime: 2020-12-12 20:29:48\n             Timeout: 20\n                BeId: 10002\nDataSourceProperties: {"0":19}\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"TaskId"}),": The unique ID of the subtask."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"TxnId"}),": The import transaction ID corresponding to the subtask."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"TxnStatus"}),": The import transaction status corresponding to the subtask. When TxnStatus is null, it means that the subtask has not yet started scheduling."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"JobId"}),": The job ID corresponding to the subtask."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"CreateTime"}),": The creation time of the subtask."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ExecuteStartTime"}),": The time when the subtask is scheduled to be executed, usually later than the creation time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Timeout"}),": Subtask timeout, usually twice the ",(0,i.jsx)(t.code,{children:"max_batch_interval"})," set by the job."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"BeId"}),": The ID of the BE node executing this subtask."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"DataSourceProperties"}),": The starting offset of the Kafka Partition that the subtask is ready to consume. is a Json format string. Key is Partition Id. Value is the starting offset of consumption."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Display the subtask information of the routine import task named test1."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'SHOW ROUTINE LOAD TASK WHERE JobName = "test1";\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"SHOW, ROUTINE, LOAD, TASK\n"})}),"\n",(0,i.jsx)(t.h2,{id:"best-practice",children:"Best Practice"}),"\n",(0,i.jsx)(t.p,{children:"With this command, you can view how many subtasks are currently running in a Routine Load job, and which BE node is running on."})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return o}});var s=n(667294);let i={},a=s.createContext(i);function o(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);