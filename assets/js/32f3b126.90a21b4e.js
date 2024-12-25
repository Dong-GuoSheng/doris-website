"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["105303"],{430956:function(n,s,a){a.r(s),a.d(s,{metadata:()=>e,contentTitle:()=>i,default:()=>p,assets:()=>o,toc:()=>r,frontMatter:()=>l});var e=JSON.parse('{"id":"sql-manual/sql-functions/map-functions/map-contains-value","title":"MAP_CONTAINS_VALUE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/map-functions/map-contains-value.md","sourceDirName":"sql-manual/sql-functions/map-functions","slug":"/sql-manual/sql-functions/map-functions/map-contains-value","permalink":"/docs/sql-manual/sql-functions/map-functions/map-contains-value","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MAP_CONTAINS_VALUE","language":"en"},"sidebar":"docs","previous":{"title":"MAP_CONTAINS_KEY","permalink":"/docs/sql-manual/sql-functions/map-functions/map-contains-key"},"next":{"title":"MURMUR_HASH3_32","permalink":"/docs/sql-manual/sql-functions/hash-functions/murmur-hash3-32"}}'),t=a("785893"),c=a("250065");let l={title:"MAP_CONTAINS_VALUE",language:"en"},i=void 0,o={},r=[{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function u(n){let s={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"BOOLEAN map_contains_value(Map<K, V> map, V value)"})}),"\n",(0,t.jsxs)(s.p,{children:["Determines whether the given ",(0,t.jsx)(s.code,{children:"map"})," contains a particular value ",(0,t.jsx)(s.code,{children:"value"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"mysql> select map_contains_key(map(1, \"100\", 0.1, 2), \"1\");\n+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| map_contains_key(cast(map(cast(1 as DECIMALV3(2, 1)), '100', cast(0.1 as DECIMALV3(2, 1)), cast(2 as TEXT)) as MAP<DECIMALV3(38, 9),VARCHAR(3)>), cast('1' as DECIMALV3(38, 9))) |\n+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                                                                                1 |\n+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.17 sec)\n\nmysql> select map_contains_key(map(1, \"100\", 0.1, 2), \"abc\");\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| map_contains_key(cast(map(cast(1 as DECIMALV3(2, 1)), '100', cast(0.1 as DECIMALV3(2, 1)), cast(2 as TEXT)) as MAP<DECIMALV3(38, 9),VARCHAR(3)>), cast('abc' as DECIMALV3(38, 9))) |\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                                                                                  0 |\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.16 sec)\n\nmysql> select map_contains_key(map(1, \"100\", 0.1, 2), 0.11);\n+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| map_contains_key(cast(map(cast(1 as DECIMALV3(2, 1)), '100', cast(0.1 as DECIMALV3(2, 1)), cast(2 as TEXT)) as MAP<DECIMALV3(3, 2),VARCHAR(3)>), cast(0.11 as DECIMALV3(3, 2))) |\n+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                                                                               0 |\n+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.15 sec)\n\nmysql> select map_contains_value(map(1, \"100\", 0.1, 2), 100.0);\n+--------------------------------------------------------------------------------------------------------------------------------------+\n| map_contains_value(map(cast(1 as DECIMALV3(2, 1)), '100', cast(0.1 as DECIMALV3(2, 1)), cast(2 as TEXT)), cast(100.0 as VARCHAR(3))) |\n+--------------------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                                    1 |\n+--------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.16 sec)\n\nmysql> select map_contains_value(map(1, \"100\", 0.1, 2), 101);\n+------------------------------------------------------------------------------------------------------------------------------------+\n| map_contains_value(map(cast(1 as DECIMALV3(2, 1)), '100', cast(0.1 as DECIMALV3(2, 1)), cast(2 as TEXT)), cast(101 as VARCHAR(3))) |\n+------------------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                                  0 |\n+------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.14 sec)\n\nmysql> select map_contains_value(map(null, 1, 2, null), null);\n+-------------------------------------------------+\n| map_contains_value(map(NULL, 1, 2, NULL), NULL) |\n+-------------------------------------------------+\n|                                               1 |\n+-------------------------------------------------+\n1 row in set (0.15 sec)\n"})}),"\n",(0,t.jsx)(s.h3,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(s.p,{children:"MAP, CONTAINS, VALUE, MAP_CONTAINS_VALUE"})]})}function p(n={}){let{wrapper:s}={...(0,c.a)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,s,a){a.d(s,{Z:function(){return i},a:function(){return l}});var e=a(667294);let t={},c=e.createContext(t);function l(n){let s=e.useContext(c);return e.useMemo(function(){return"function"==typeof n?n(s):{...s,...n}},[s,n])}function i(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),e.createElement(c.Provider,{value:s},n.children)}}}]);