"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["943435"],{100438:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>r});var a=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/backup-and-restore/CANCEL-RESTORE","title":"CANCEL RESTORE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/data-modification/backup-and-restore/CANCEL-RESTORE.md","sourceDirName":"sql-manual/sql-statements/data-modification/backup-and-restore","slug":"/sql-manual/sql-statements/data-modification/backup-and-restore/CANCEL-RESTORE","permalink":"/docs/sql-manual/sql-statements/data-modification/backup-and-restore/CANCEL-RESTORE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CANCEL RESTORE","language":"en"},"sidebar":"docs","previous":{"title":"SHOW RESTORE","permalink":"/docs/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-RESTORE"},"next":{"title":"SHOW SNAPSHOT","permalink":"/docs/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-SNAPSHOT"}}'),s=t("785893"),i=t("250065");let r={title:"CANCEL RESTORE",language:"en"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to cancel an ongoing RESTORE task."}),"\n",(0,s.jsx)(n.p,{children:"grammar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CANCEL RESTORE FROM db_name;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Notice:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When cancellation is around a COMMIT or later stage of recovery, the table being recovered may be rendered inaccessible. At this time, data recovery can only be performed by executing the recovery job again."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Cancel the RESTORE task under example_db."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CANCEL RESTORE FROM example_db;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:" CANCEL, RESTORE\n"})}),"\n",(0,s.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var a=t(667294);let s={},i=a.createContext(s);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);