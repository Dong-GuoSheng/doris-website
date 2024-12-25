"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["786775"],{289369:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>d,assets:()=>r,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/active-queries","title":"ACTIVE_QUERIES","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/table-valued-functions/active-queries.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/active-queries","permalink":"/docs/sql-manual/sql-functions/table-valued-functions/active-queries","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ACTIVE_QUERIES","language":"en"},"sidebar":"docs","previous":{"title":"WORKLOAD_GROUPS","permalink":"/docs/sql-manual/sql-functions/table-valued-functions/workload-group"},"next":{"title":"JOBS","permalink":"/docs/sql-manual/sql-functions/table-valued-functions/jobs"}}'),i=s("785893"),a=s("250065");let o={title:"ACTIVE_QUERIES",language:"en"},l=void 0,r={},c=[{value:"<code>active_queries</code>",id:"active_queries",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"active_queries",children:(0,i.jsx)(n.code,{children:"active_queries"})}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(n.p,{children:"active_queries"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Deprecated. Since 2.1.1, this table function has been moved to the information_schema.active_queries."})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.p,{children:"Table-Value-Function, generate a temporary table named active_queries. This tvf is used to view the information of running queries in doris cluster."}),"\n",(0,i.jsx)(n.p,{children:"This function is used in FROM clauses."}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"active_queries()"})}),"\n",(0,i.jsx)(n.p,{children:"active_queries() table schema\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql [(none)]> desc function active_queries();\n+------------------------+--------+------+-------+---------+-------+\n| Field                  | Type   | Null | Key   | Default | Extra |\n+------------------------+--------+------+-------+---------+-------+\n| BeHost                 | TEXT   | No   | false | NULL    | NONE  |\n| BePort                 | BIGINT | No   | false | NULL    | NONE  |\n| QueryId                | TEXT   | No   | false | NULL    | NONE  |\n| StartTime              | TEXT   | No   | false | NULL    | NONE  |\n| QueryTimeMs            | BIGINT | No   | false | NULL    | NONE  |\n| WorkloadGroupId        | BIGINT | No   | false | NULL    | NONE  |\n| QueryCpuTimeMs         | BIGINT | No   | false | NULL    | NONE  |\n| ScanRows               | BIGINT | No   | false | NULL    | NONE  |\n| ScanBytes              | BIGINT | No   | false | NULL    | NONE  |\n| BePeakMemoryBytes      | BIGINT | No   | false | NULL    | NONE  |\n| CurrentUsedMemoryBytes | BIGINT | No   | false | NULL    | NONE  |\n| Database               | TEXT   | No   | false | NULL    | NONE  |\n| FrontendInstance       | TEXT   | No   | false | NULL    | NONE  |\n| Sql                    | TEXT   | No   | false | NULL    | NONE  |\n+------------------------+--------+------+-------+---------+-------+\n14 rows in set (0.00 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql [(none)]>select * from active_queries();\n+------------+--------+----------------------------------+---------------------+-------------+-----------------+----------------+----------+------------+-------------------+------------------------+----------+------------------+-------+\n| BeHost     | BePort | QueryId                          | StartTime           | QueryTimeMs | WorkloadGroupId | QueryCpuTimeMs | ScanRows | ScanBytes  | BePeakMemoryBytes | CurrentUsedMemoryBytes | Database | FrontendInstance | Sql   |\n+------------+--------+----------------------------------+---------------------+-------------+-----------------+----------------+----------+------------+-------------------+------------------------+----------+------------------+-------+\n| 127.0.0.1 |   6090 | 71fd11b7b0e438c-bc98434b97b8cb98 | 2024-01-16 16:21:15 |        7260 |           10002 |           8392 | 16082249 | 4941889536 |         360470040 |              360420915 | hits     | localhost   | SELECT xxxx |\n+------------+--------+----------------------------------+---------------------+-------------+-----------------+----------------+----------+------------+-------------------+------------------------+----------+------------------+-------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"active_queries\n"})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var t=s(667294);let i={},a=t.createContext(i);function o(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);