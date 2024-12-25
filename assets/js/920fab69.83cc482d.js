"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["8930"],{601314:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-CONFIG","title":"ADMIN-SHOW-CONFIG","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-CONFIG.md","sourceDirName":"sql-manual/sql-reference/Database-Administration-Statements","slug":"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-CONFIG","permalink":"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-CONFIG","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ADMIN-SHOW-CONFIG","language":"en"},"sidebar":"docs","previous":{"title":"DROP-USER","permalink":"/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/DROP-USER"},"next":{"title":"ADMIN-SET-CONFIG","permalink":"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-CONFIG"}}'),s=t("785893"),r=t("250065");let a={title:"ADMIN-SHOW-CONFIG",language:"en"},l=void 0,o={},c=[{value:"ADMIN-SHOW-CONFIG",id:"admin-show-config",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"admin-show-config",children:"ADMIN-SHOW-CONFIG"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"ADMIN SHOW CONFIG"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to display the configuration of the current cluster (currently only the configuration items of FE are supported)"}),"\n",(0,s.jsx)(n.p,{children:"grammar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:' ADMIN SHOW FRONTEND CONFIG [LIKE "pattern"];\n'})}),"\n",(0,s.jsx)(n.p,{children:"The columns in the results have the following meanings:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Key: Configuration item name"}),"\n",(0,s.jsx)(n.li,{children:"Value: Configuration item value"}),"\n",(0,s.jsx)(n.li,{children:"Type: Configuration item type"}),"\n",(0,s.jsx)(n.li,{children:"IsMutable: Whether it can be set by ADMIN SET CONFIG command"}),"\n",(0,s.jsx)(n.li,{children:"MasterOnly: Is it only applicable to Master FE"}),"\n",(0,s.jsx)(n.li,{children:"Comment: Configuration item description"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"View the configuration of the current FE node"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ADMIN SHOW FRONTEND CONFIG;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use the like predicate to search the configuration of the current Fe node"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> ADMIN SHOW FRONTEND CONFIG LIKE '%check_java_version%';\n+--------------------+-------+---------+---------- -+------------+---------+\n| Key | Value | Type | IsMutable | MasterOnly | Comment |\n+--------------------+-------+---------+---------- -+------------+---------+\n| check_java_version | true | boolean | false | false | |\n+--------------------+-------+---------+---------- -+------------+---------+\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ADMIN, SHOW, CONFIG, ADMIN SHOW\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(667294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);