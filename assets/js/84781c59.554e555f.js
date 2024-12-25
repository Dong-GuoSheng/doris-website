"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["665326"],{934628:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>A,assets:()=>d,toc:()=>o,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE","title":"ALTER-DATABASE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE.md","sourceDirName":"sql-manual/sql-statements/Data-Definition-Statements/Alter","slug":"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ALTER-DATABASE","language":"en"},"sidebar":"docs","previous":{"title":"ALTER-CATALOG","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG"},"next":{"title":"ALTER-TABLE-COLUMN","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"}}'),s=t("785893"),l=t("250065");let i={title:"ALTER-DATABASE",language:"en"},r=void 0,d={},o=[{value:"ALTER-DATABASE",id:"alter-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"alter-database",children:"ALTER-DATABASE"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"ALTER DATABASE"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to set properties of the specified database. (administrator only)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Set the database data quota, the unit is B/K/KB/M/MB/G/GB/T/TB/P/PB"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE db_name SET DATA QUOTA quota;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Rename the database"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE db_name RENAME new_db_name;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Set the quota for the number of copies of the database"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE db_name SET REPLICA QUOTA quota;\n"})}),"\n",(0,s.jsx)(n.p,{children:"illustrate:\nAfter renaming the database, use the REVOKE and GRANT commands to modify the appropriate user permissions, if necessary.\nThe default data quota for the database is 1024GB, and the default replica quota is 1073741824."}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Modify the properties of an existing database"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER DATABASE db_name SET PROPERTIES ("key"="value", ...); \n'})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Set the specified database data volume quota"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE example_db SET DATA QUOTA 10995116277760;\nThe above unit is bytes, which is equivalent to\nALTER DATABASE example_db SET DATA QUOTA 10T;\n\nALTER DATABASE example_db SET DATA QUOTA 100G;\n\nALTER DATABASE example_db SET DATA QUOTA 200M;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Rename the database example_db to example_db2"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE example_db RENAME example_db2;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Set the quota for the number of copies of the specified database"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE example_db SET REPLICA QUOTA 102400;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Modify the default replica distribution policy for tables in db (this operation only applies to newly created tables and will not modify existing tables in db)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER DATABASE example_db SET PROPERTIES("replication_allocation" = "tag.location.default:2");\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Cancel the default replica distribution policy for tables in db (this operation only applies to newly created tables and will not modify existing tables in db)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER DATABASE example_db SET PROPERTIES("replication_allocation" = "");\n'})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"ALTER,DATABASE,RENAME\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function A(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var a=t(667294);let s={},l=a.createContext(s);function i(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);