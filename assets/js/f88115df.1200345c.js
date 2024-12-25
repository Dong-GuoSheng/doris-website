"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["844894"],{212010:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>j,assets:()=>l,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/json-extract","title":"JSON_EXTRACT","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/json-functions/json-extract.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/json-extract","permalink":"/docs/2.0/sql-manual/sql-functions/json-functions/json-extract","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"JSON_EXTRACT","language":"en"},"sidebar":"docs","previous":{"title":"JSON_PARSE","permalink":"/docs/2.0/sql-manual/sql-functions/json-functions/json-parse"},"next":{"title":"JSON_EXISTS_PATH","permalink":"/docs/2.0/sql-manual/sql-functions/json-functions/json-exists-path"}}'),i=t("785893"),r=t("250065");let a={title:"JSON_EXTRACT",language:"en"},o=void 0,l={},c=[{value:"json_extract",id:"json_extract",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"json_exists_path and json_type",id:"json_exists_path-and-json_type",level:2},{value:"description",id:"description-1",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"json_extract",children:"json_extract"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"`VARCHAR json_extract(VARCHAR json_str, VARCHAR path[, VARCHAR path] ...))`\nJSON jsonb_extract(JSON j, VARCHAR json_path)\nBOOLEAN json_extract_isnull(JSON j, VARCHAR json_path)\nBOOLEAN json_extract_bool(JSON j, VARCHAR json_path)\nINT json_extract_int(JSON j, VARCHAR json_path)\nBIGINT json_extract_bigint(JSON j, VARCHAR json_path)\nLARGEINT json_extract_largeint(JSON j, VARCHAR json_path)\nDOUBLE json_extract_double(JSON j, VARCHAR json_path)\nSTRING json_extract_string(JSON j, VARCHAR json_path)\n"})}),"\n",(0,i.jsx)(e.p,{children:"json_extract functions extract field specified by json_path from JSON. A series of functions are provided for different datatype."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"json_extract with VARCHAR argument, extract and return VARCHAR datatype"}),"\n",(0,i.jsx)(e.li,{children:"jsonb_extract extract and return JSON datatype"}),"\n",(0,i.jsx)(e.li,{children:"json_extract_isnull check if the field is json null and return BOOLEAN datatype"}),"\n",(0,i.jsx)(e.li,{children:"json_extract_bool extract and return BOOLEAN datatype"}),"\n",(0,i.jsx)(e.li,{children:"json_extract_int extract and return INT datatype"}),"\n",(0,i.jsx)(e.li,{children:"json_extract_bigint extract and return BIGINT datatype"}),"\n",(0,i.jsx)(e.li,{children:"json_extract_largeint extract and return LARGEINT datatype"}),"\n",(0,i.jsx)(e.li,{children:"json_extract_double extract and return DOUBLE datatype"}),"\n",(0,i.jsx)(e.li,{children:"json_extract_STRING extract and return STRING datatype"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"json path syntax:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"'$' for json document root"}),"\n",(0,i.jsxs)(e.li,{children:["'.k1' for element of json object with key 'k1'\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:'If the key column value contains ".", double quotes are required in json_path, For example: SELECT json_extract(\'{"k1.a":"abc","k2":300}\', \'$."k1.a"\');'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["'[i]' for element of json array at index i\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Use '$[last]' to get the last element of json_array, and '$[last-1]' to get the penultimate element, and so on."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Exception handling is as follows:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"if the field specified by json_path does not exist, return NULL"}),"\n",(0,i.jsx)(e.li,{children:"if datatype of the field specified by json_path is not the same with type of json_extract_t, return t if it can be cast to t else NULL"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"json_exists_path-and-json_type",children:"json_exists_path and json_type"}),"\n",(0,i.jsx)(e.h3,{id:"description-1",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"BOOLEAN json_exists_path(JSON j, VARCHAR json_path)\nSTRING json_type(JSON j, VARCHAR json_path)\n"})}),"\n",(0,i.jsx)(e.p,{children:"There are two extra functions to check field existence and type"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"json_exists_path check the existence of the field specified by json_path, return TRUE or FALS"}),"\n",(0,i.jsxs)(e.li,{children:["json_type get the type as follows of the field specified by json_path, return NULL if it does not exist\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"object"}),"\n",(0,i.jsx)(e.li,{children:"array"}),"\n",(0,i.jsx)(e.li,{children:"null"}),"\n",(0,i.jsx)(e.li,{children:"bool"}),"\n",(0,i.jsx)(e.li,{children:"int"}),"\n",(0,i.jsx)(e.li,{children:"bigint"}),"\n",(0,i.jsx)(e.li,{children:"largeint"}),"\n",(0,i.jsx)(e.li,{children:"double"}),"\n",(0,i.jsx)(e.li,{children:"string"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsxs)(e.p,{children:["refer to ",(0,i.jsx)(e.a,{href:"../../sql-reference/Data-Types/JSON.md",children:"json tutorial"})," for more."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> SELECT json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.id');\n+------------------------------------------------------+\n| json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.id') |\n+------------------------------------------------------+\n| 123                                                  |\n+------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('[1, 2, 3]', '$.[1]');\n+------------------------------------+\n| json_extract('[1, 2, 3]', '$.[1]') |\n+------------------------------------+\n| 2                                  |\n+------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('{\"k1\": \"v1\", \"k2\": { \"k21\": 6.6, \"k22\": [1, 2] } }', '$.k1', '$.k2.k21', '$.k2.k22', '$.k2.k22[1]');\n+-------------------------------------------------------------------------------------------------------------------+\n| json_extract('{\"k1\": \"v1\", \"k2\": { \"k21\": 6.6, \"k22\": [1, 2] } }', '$.k1', '$.k2.k21', '$.k2.k22', '$.k2.k22[1]') |\n+-------------------------------------------------------------------------------------------------------------------+\n| [\"v1\",6.6,[1,2],2]                                                                                                |\n+-------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.aaa', '$.name');\n+-----------------------------------------------------------------+\n| json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.aaa', '$.name') |\n+-----------------------------------------------------------------+\n| [null,\"doris\"]                                                  |\n+-----------------------------------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.p,{children:"JSONB, JSON, json_extract, json_extract_isnull, json_extract_bool, json_extract_int, json_extract_bigint, json_extract_largeint,json_extract_double, json_extract_string, json_exists_path, json_type"})]})}function j(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return a}});var s=t(667294);let i={},r=s.createContext(i);function a(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);