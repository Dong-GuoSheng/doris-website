"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["323335"],{728760:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE-MATERIALIZED-VIEW","title":"SHOW ALTER TABLE MATERIALIZED VIEW","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE-MATERIALIZED-VIEW","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW ALTER TABLE MATERIALIZED VIEW","language":"en"},"sidebar":"docs","previous":{"title":"SHOW ALTER","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/SHOW-ALTER-TABLE"},"next":{"title":"TRUNCATE TABLE","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/TRUNCATE-TABLE"}}'),l=s("785893"),t=s("250065");let r={title:"SHOW ALTER TABLE MATERIALIZED VIEW",language:"en"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["This command is used to view the execution of the Create Materialized View job submitted through the ",(0,l.jsx)(n.a,{href:"../../sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW.md",children:"CREATE-MATERIALIZED-VIEW"})," statement."]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["This statement is equivalent to ",(0,l.jsx)(n.code,{children:"SHOW ALTER TABLE ROLLUP"}),";"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE MATERIALIZED VIEW\n[FROM database]\n[WHERE]\n[ORDER BY]\n[LIMIT OFFSET]\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"database: View jobs under the specified database. If not specified, the current database is used."}),"\n",(0,l.jsxs)(n.li,{children:["WHERE: You can filter the result column, currently only the following columns are supported:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"TableName: Only equal value filtering is supported."}),"\n",(0,l.jsx)(n.li,{children:"State: Only supports equivalent filtering."}),"\n",(0,l.jsx)(n.li,{children:"Createtime/FinishTime: Support =, >=, <=, >, <, !="}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"ORDER BY: The result set can be sorted by any column."}),"\n",(0,l.jsx)(n.li,{children:"LIMIT: Use ORDER BY to perform page-turning query."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Return result description:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> show alter table materialized view\\G\n**************************** 1. row ******************** ******\n          JobId: 11001\n      TableName: tbl1\n     CreateTime: 2020-12-23 10:41:00\n     FinishTime: NULL\n  BaseIndexName: tbl1\nRollupIndexName: r1\n       RollupId: 11002\n  TransactionId: 5070\n          State: WAITING_TXN\n            Msg:\n       Progress: NULL\n        Timeout: 86400\n1 row in set (0.00 sec)\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"JobId"}),": Job unique ID."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"TableName"}),": base table name"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"CreateTime/FinishTime"}),": Job creation time and end time."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"BaseIndexName/RollupIndexName"}),": Base table name and materialized view name."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"RollupId"}),": The unique ID of the materialized view."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"TransactionId"}),": See the description of the State field."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"State"}),": job status."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"PENDING: The job is in preparation."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"WAITING_TXN:"}),"\n",(0,l.jsxs)(n.p,{children:["Before officially starting to generate materialized view data, it will wait for the current running import transaction on this table to complete. And the ",(0,l.jsx)(n.code,{children:"TransactionId"})," field is the current waiting transaction ID. When all previous imports for this ID are complete, the job will actually start."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"RUNNING: The job is running."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"FINISHED: The job ran successfully."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"CANCELLED: The job failed to run."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Msg"}),": error message"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Progress"}),": job progress. The progress here means ",(0,l.jsx)(n.code,{children:"completed tablets/total tablets"}),". Materialized views are created at tablet granularity."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Timeout"}),": Job timeout, in seconds."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"View the materialized view jobs under the database example_db"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE MATERIALIZED VIEW FROM example_db;\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"SHOW, ALTER, TABLE, MATERIALIZED, VIEW\n"})}),"\n",(0,l.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var i=s(667294);let l={},t=i.createContext(l);function r(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);