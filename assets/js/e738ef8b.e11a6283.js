"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["370047"],{27614:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>r,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE","title":"CANCEL REPAIR","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE","permalink":"/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REPAIR-TABLE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CANCEL REPAIR","language":"en"},"sidebar":"docs","previous":{"title":"REPAIR TABLE","permalink":"/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/REPAIR-TABLE"},"next":{"title":"SET TABLE STATUS","permalink":"/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/SET-TABLE-STATUS"}}'),s=n("785893"),i=n("250065");let l={title:"CANCEL REPAIR",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function o(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This statement is used to cancel the repair of the specified table or partition with high priority"}),"\n",(0,s.jsx)(t.p,{children:"grammar:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"ADMIN CANCEL REPAIR TABLE table_name[ PARTITION (p1,...)];\n"})}),"\n",(0,s.jsx)(t.p,{children:"illustrate:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"This statement simply means that the system will no longer repair shard copies of the specified table or partition with high priority. Replicas are still repaired with the default schedule."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Cancel high priority repair"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:" ADMIN CANCEL REPAIR TABLE tbl PARTITION(p1);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"ADMIN, CANCEL, REPAIR\n"})}),"\n",(0,s.jsx)(t.h2,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var a=n(667294);let s={},i=a.createContext(s);function l(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);