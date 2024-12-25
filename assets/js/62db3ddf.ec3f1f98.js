"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["818648"],{275994:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>s,default:()=>x,assets:()=>r,toc:()=>c,frontMatter:()=>t});var l=JSON.parse('{"id":"data-table/index/bitmap-index","title":"Bitmap Index","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/data-table/index/bitmap-index.md","sourceDirName":"data-table/index","slug":"/data-table/index/bitmap-index","permalink":"/docs/1.2/data-table/index/bitmap-index","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Bitmap Index","language":"en"},"sidebar":"docs","previous":{"title":"BloomFilter index","permalink":"/docs/1.2/data-table/index/bloomfilter"},"next":{"title":"Import Overview","permalink":"/docs/1.2/data-operate/import/load-manual"}}'),a=i("785893"),d=i("250065");let t={title:"Bitmap Index",language:"en"},s="Bitmap Index",r={},c=[{value:"Glossary",id:"glossary",level:2},{value:"Basic Principles",id:"basic-principles",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Create index",id:"create-index",level:3},{value:"View index",id:"view-index",level:3},{value:"Delete index",id:"delete-index",level:3},{value:"Notice",id:"notice",level:2},{value:"More Help",id:"more-help",level:3}];function o(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"bitmap-index",children:"Bitmap Index"})}),"\n",(0,a.jsx)(n.p,{children:"Users can speed up queries by creating a bitmap index\nThis document focuses on how to create an index job, as well as some considerations and frequently asked questions when creating an index."}),"\n",(0,a.jsx)(n.h2,{id:"glossary",children:"Glossary"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"bitmap index: a fast data structure that speeds up queries"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"basic-principles",children:"Basic Principles"}),"\n",(0,a.jsxs)(n.p,{children:["Creating and dropping index is essentially a schema change job. For details, please refer to\n",(0,a.jsx)(n.a,{href:"/docs/1.2/advanced/alter-table/schema-change",children:"Schema Change"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.h3,{id:"create-index",children:"Create index"}),"\n",(0,a.jsx)(n.p,{children:"Create a bitmap index for siteid on table1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX [IF NOT EXISTS] index_name ON table1 (siteid) USING BITMAP COMMENT 'balabala';\n"})}),"\n",(0,a.jsx)(n.h3,{id:"view-index",children:"View index"}),"\n",(0,a.jsx)(n.p,{children:"Display the lower index of the specified table_name"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW INDEX FROM example_db.table_name;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"delete-index",children:"Delete index"}),"\n",(0,a.jsx)(n.p,{children:"Delete the lower index of the specified table_name"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP INDEX [IF EXISTS] index_name ON [db_name.]table_name;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"notice",children:"Notice"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Currently only index of bitmap type is supported."}),"\n",(0,a.jsx)(n.li,{children:"The bitmap index is only created on a single column."}),"\n",(0,a.jsxs)(n.li,{children:["Bitmap indexes can be applied to all columns of the ",(0,a.jsx)(n.code,{children:"Duplicate"})," , ",(0,a.jsx)(n.code,{children:"Uniq"}),"  data model and key columns of the ",(0,a.jsx)(n.code,{children:"Aggregate"}),"  models."]}),"\n",(0,a.jsxs)(n.li,{children:["The data types supported by bitmap indexes are as follows:\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"TINYINT"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"SMALLINT"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"INT"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"BIGINT"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"CHAR"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"VARCHAR"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"DATE"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"DATETIME"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"LARGEINT"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"DECIMAL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"BOOL"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"The bitmap index takes effect only in segmentV2. The table's storage format will be converted to V2 automatically when creating index."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"more-help",children:"More Help"}),"\n",(0,a.jsxs)(n.p,{children:["For more detailed syntax and best practices for using bitmap indexes, please refer to the  ",(0,a.jsx)(n.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX",children:"CREARE INDEX"})," / ",(0,a.jsx)(n.a,{href:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-INDEX",children:"SHOW INDEX"})," / ",(0,a.jsx)(n.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-INDEX",children:"DROP INDEX"}),"  command manual. You can also enter HELP CREATE INDEX / HELP SHOW INDEX / HELP DROP INDEX on the MySql client command line."]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return t}});var l=i(667294);let a={},d=l.createContext(a);function t(e){let n=l.useContext(d);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);