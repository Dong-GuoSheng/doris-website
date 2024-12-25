"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["942945"],{141788:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/SHOW-TABLE-STATUS","title":"SHOW TABLE STATUS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/table/SHOW-TABLE-STATUS.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/SHOW-TABLE-STATUS","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/SHOW-TABLE-STATUS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW TABLE STATUS","language":"en"},"sidebar":"docs","previous":{"title":"SHOW TABLE ID","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/SHOW-TABLE-ID"},"next":{"title":"SHOW CONVERT LIGHT SCHEMA CHANGE PROCESS","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS"}}'),l=t("785893"),a=t("250065");let i={title:"SHOW TABLE STATUS",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to view some information about the Table."}),"\n",(0,l.jsx)(n.p,{children:"grammar:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SHOW TABLE STATUS\n[FROM db] [LIKE "pattern"]\n'})}),"\n",(0,l.jsx)(n.p,{children:"illustrate:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"This statement is mainly used to be compatible with MySQL syntax, currently only a small amount of information such as Comment is displayed"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"View the information of all tables under the current database"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW TABLE STATUS;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"View the information of the table whose name contains example under the specified database"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SHOW TABLE STATUS FROM db LIKE "%example%";\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"SHOW, TABLE, STATUS\n"})}),"\n",(0,l.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);