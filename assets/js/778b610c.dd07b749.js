"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["714606"],{179269:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>m,assets:()=>o,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-VIEW","title":"ALTER-VIEW","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-VIEW.md","sourceDirName":"sql-manual/sql-statements/Data-Definition-Statements/Alter","slug":"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-VIEW","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-VIEW","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ALTER-VIEW","language":"en"},"sidebar":"docs","previous":{"title":"CANCEL-ALTER-TABLE","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE"},"next":{"title":"ALTER-POLICY","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-STORAGE-POLICY"}}'),l=t("785893"),s=t("250065");let a={title:"ALTER-VIEW",language:"en"},r=void 0,o={},c=[{value:"ALTER-VIEW",id:"alter-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"alter-view",children:"ALTER-VIEW"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"ALTER VIEW"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to modify the definition of a view"}),"\n",(0,l.jsx)(n.p,{children:"grammar:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER VIEW\n[db_name.]view_name\n(column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n'})}),"\n",(0,l.jsx)(n.p,{children:"illustrate:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Views are all logical, and the data in them will not be stored on physical media. When querying, the view will be used as a subquery in the statement. Therefore, modifying the definition of the view is equivalent to modifying query_stmt."}),"\n",(0,l.jsx)(n.li,{children:"query_stmt is any supported SQL"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Modify the view example_view on example_db"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER VIEW example_db.example_view\n(\nc1 COMMENT "column 1",\nc2 COMMENT "column 2",\nc3 COMMENT "column 3"\n)\nAS SELECT k1, k2, SUM(v1) FROM example_table\nGROUP BY k1, k2\n'})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"ALTER, VIEW\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(667294);let l={},s=i.createContext(l);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);