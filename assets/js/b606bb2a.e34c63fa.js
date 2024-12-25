"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["812568"],{212956:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-reference/Utility-Statements/USE","title":"USE","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Utility-Statements/USE.md","sourceDirName":"sql-manual/sql-reference/Utility-Statements","slug":"/sql-manual/sql-reference/Utility-Statements/USE","permalink":"/docs/2.0/sql-manual/sql-reference/Utility-Statements/USE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"USE","language":"en"},"sidebar":"docs","previous":{"title":"HELP","permalink":"/docs/2.0/sql-manual/sql-reference/Utility-Statements/HELP"},"next":{"title":"DESCRIBE","permalink":"/docs/2.0/sql-manual/sql-reference/Utility-Statements/DESCRIBE"}}'),l=t("785893"),a=t("250065");let i={title:"USE",language:"en"},r=void 0,c={},d=[{value:"USE",id:"use",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"use",children:"USE"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"USE"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"The USE command allows us to use the database"}),"\n",(0,l.jsx)(n.p,{children:"grammar:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"USE <[CATALOG_NAME].DATABASE_NAME>\n"})}),"\n",(0,l.jsx)(n.p,{children:"illustrate:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"USE CATALOG_NAME.DATABASE_NAME"})," will switch the current catalog into ",(0,l.jsx)(n.code,{children:"CATALOG_NAME"})," and then change the current database into ",(0,l.jsx)(n.code,{children:"DATABASE_NAME"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"If the demo database exists in current catalog, try accessing it:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> use demo;\nDatabase changed\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"If the demo database exists in catalog hms_catalog, try switching the catalog and accessing it:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> use hms_catalog.demo;\nDatabase changed\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"USE\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);