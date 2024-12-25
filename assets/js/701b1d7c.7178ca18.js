"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["885406"],{67446:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>s});var l=JSON.parse('{"id":"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP","title":"ALTER-WORKLOAD-GROUP","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP.md","sourceDirName":"sql-manual/sql-reference/Data-Definition-Statements/Alter","slug":"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ALTER-WORKLOAD-GROUP","language":"en"},"sidebar":"docs","previous":{"title":"ALTER-COLOCATE-GROUP","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP"},"next":{"title":"ALTER-SQL-BLOCK-RULE","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE"}}'),r=t("785893"),i=t("250065");let s={title:"ALTER-WORKLOAD-GROUP",language:"en"},a=void 0,o={},c=[{value:"ALTER-WORKLOAD-GROUP",id:"alter-workload-group",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"alter-workload-group",children:"ALTER-WORKLOAD-GROUP"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"ALTER WORKLOAD GROUP"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This statement is used to modify the workload group."}),"\n",(0,r.jsx)(n.p,{children:"Syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'ALTER WORKLOAD GROUP "rg_name"\nPROPERTIES (\n    property_list\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"NOTE:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Modify the memory_limit property in such a way that the sum of all memory_limit values does not exceed 100%;"}),"\n",(0,r.jsx)(n.li,{children:"Support modifying some properties, for example, if only cpu_share is modified, just fill in cpu_share in properties."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Modify the workload group named g1:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'alter workload group g1\nproperties (\n    "cpu_share"="30",\n    "memory_limit"="30%"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER, WORKLOAD, GROUP\n"})}),"\n",(0,r.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var l=t(667294);let r={},i=l.createContext(r);function s(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);