"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["562521"],{678854:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-data-types/semi-structured/ARRAY","title":"ARRAY","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-data-types/semi-structured/ARRAY.md","sourceDirName":"sql-manual/sql-data-types/semi-structured","slug":"/sql-manual/sql-data-types/semi-structured/ARRAY","permalink":"/docs/2.0/sql-manual/sql-data-types/semi-structured/ARRAY","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY","language":"en"},"sidebar":"docs","previous":{"title":"STRING","permalink":"/docs/2.0/sql-manual/sql-data-types/string-type/STRING"},"next":{"title":"MAP","permalink":"/docs/2.0/sql-manual/sql-data-types/semi-structured/MAP"}}'),r=t("785893"),l=t("250065");let a={title:"ARRAY",language:"en"},i=void 0,d={},c=[{value:"ARRAY",id:"array",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"array",children:"ARRAY"}),"\n",(0,r.jsx)(n.p,{children:"ARRAY"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ARRAY<T>"})}),"\n",(0,r.jsx)(n.p,{children:"An array of T-type items, it cannot be used as a key column. Now ARRAY can only used in Duplicate Model Tables."}),"\n",(0,r.jsx)(n.p,{children:"After version 2.0, it supports the use of non-key columns in Unique model tables."}),"\n",(0,r.jsx)(n.p,{children:"T-type could be any of:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.p,{children:"Create table example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'mysql> CREATE TABLE `array_test` (\n  `id` int(11) NULL COMMENT "",\n  `c_array` ARRAY<int(11)> NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"Insert data example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> INSERT INTO `array_test` VALUES (1, [1,2,3,4,5]);\nmysql> INSERT INTO `array_test` VALUES (2, [6,7,8]), (3, []), (4, null);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Select data example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> SELECT * FROM `array_test`;\n+------+-----------------+\n| id   | c_array         |\n+------+-----------------+\n|    1 | [1, 2, 3, 4, 5] |\n|    2 | [6, 7, 8]       |\n|    3 | []              |\n|    4 | NULL            |\n+------+-----------------+\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ARRAY\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var s=t(667294);let r={},l=s.createContext(r);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);