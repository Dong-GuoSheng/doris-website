"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["606482"],{712578:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>i,default:()=>d,assets:()=>c,toc:()=>l,frontMatter:()=>o});var r=JSON.parse('{"id":"query/query-data/cte","title":"Common Table Expressions","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/query/query-data/cte.md","sourceDirName":"query/query-data","slug":"/query/query-data/cte","permalink":"/docs/2.0/query/query-data/cte","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Common Table Expressions","language":"en"},"sidebar":"docs","previous":{"title":"Subquery","permalink":"/docs/2.0/query/query-data/subquery"},"next":{"title":"Column to Row (Lateral View)","permalink":"/docs/2.0/query/query-data/lateral-view"}}'),s=n("785893"),a=n("250065");let o={title:"Common Table Expressions",language:"en"},i=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function u(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Common Table Expression (CTE) define a temporary result set that can be referenced multiple times within the scope of an SQL statement. CTE are primarily used in SELECT statements."}),"\n",(0,s.jsxs)(t.p,{children:["To specify a CTE, use the ",(0,s.jsx)(t.code,{children:"WITH"})," clause with one or more comma-separated clauses. Each clause provides a subquery that generates a result set and associates a name with the subquery."]}),"\n",(0,s.jsxs)(t.p,{children:["Within the statement that contains the ",(0,s.jsx)(t.code,{children:"WITH"})," clause, you can reference each CTE name to access the corresponding CTE result set. CTE names can be referenced in other CTE, allowing you to define CTE based on other CTE."]}),"\n",(0,s.jsxs)(t.p,{children:["Doris ",(0,s.jsx)(t.strong,{children:"DO NOT"})," support recursive CTE."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"The following example defines CTE named cte1 and cte2 within the WITH clause and refers to them in the top-level SELECT below the WITH clause:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"WITH\n  cte1 AS (SELECT a, b FROM table1),\n  cte2 AS (SELECT c, d FROM table2)\nSELECT b, d FROM cte1 JOIN cte2\nWHERE cte1.a = cte2.c;\n"})})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return o}});var r=n(667294);let s={},a=r.createContext(s);function o(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);