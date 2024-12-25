"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["756664"],{827870:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/DML/SHOW-LAST-INSERT","title":"SHOW LAST INSERT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/data-modification/DML/SHOW-LAST-INSERT.md","sourceDirName":"sql-manual/sql-statements/data-modification/DML","slug":"/sql-manual/sql-statements/data-modification/DML/SHOW-LAST-INSERT","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/DML/SHOW-LAST-INSERT","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW LAST INSERT","language":"en"},"sidebar":"docs","previous":{"title":"INSERT OVERWRITE","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/DML/INSERT-OVERWRITE"},"next":{"title":"UPDATE","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/DML/UPDATE"}}'),i=t("785893"),a=t("250065");let l={title:"SHOW LAST INSERT",language:"en"},r=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This syntax is used to view the result of the latest insert operation in the current session connection"}),"\n",(0,i.jsx)(n.p,{children:"grammar:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW LAST INSERT\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example of returned result:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"     TransactionId: 64067\n             Label: insert_ba8f33aea9544866-8ed77e2844d0cc9b\n          Database: default_cluster:db1\n             Table: t1\nTransactionStatus: VISIBLE\n        LoadedRows: 2\n      FilteredRows: 0\n"})}),"\n",(0,i.jsx)(n.p,{children:"illustrate:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"TransactionId: transaction id"}),"\n",(0,i.jsx)(n.li,{children:"Label: the label corresponding to the insert task"}),"\n",(0,i.jsx)(n.li,{children:"Database: the database corresponding to insert"}),"\n",(0,i.jsx)(n.li,{children:"Table: the table corresponding to insert"}),"\n",(0,i.jsxs)(n.li,{children:["TransactionStatus: transaction status\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PREPARE: preparation stage"}),"\n",(0,i.jsx)(n.li,{children:"PRECOMMITTED: Pre-commit stage"}),"\n",(0,i.jsx)(n.li,{children:"COMMITTED: The transaction succeeded, but the data was not visible"}),"\n",(0,i.jsx)(n.li,{children:"VISIBLE: The transaction succeeded and the data is visible"}),"\n",(0,i.jsx)(n.li,{children:"ABORTED: Transaction failed"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"LoadedRows: Number of imported rows"}),"\n",(0,i.jsx)(n.li,{children:"FilteredRows: The number of rows being filtered"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SHOW, LASR ,INSERT\n"})}),"\n",(0,i.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let i={},a=s.createContext(i);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);