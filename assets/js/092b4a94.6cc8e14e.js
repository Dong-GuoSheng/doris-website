"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["335146"],{237264:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>d,assets:()=>c,toc:()=>r,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/json-keys","title":"JSON_KEYS","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/json-functions/json-keys.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/json-keys","permalink":"/docs/dev/sql-manual/sql-functions/json-functions/json-keys","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JSON_KEYS","language":"en"},"sidebar":"docs","previous":{"title":"JSON_SET","permalink":"/docs/dev/sql-manual/sql-functions/json-functions/json-set"},"next":{"title":"MAP","permalink":"/docs/dev/sql-manual/sql-functions/map-functions/map"}}'),o=s("785893"),a=s("250065");let l={title:"JSON_KEYS",language:"en"},i=void 0,c={},r=[{value:"Json_keys",id:"json_keys",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function u(n){let e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"json_keys",children:"Json_keys"}),"\n",(0,o.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,o.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"ARRAY<STRING> json_keys(JSON, [VARCHAR path])"})}),"\n",(0,o.jsx)(e.p,{children:"Returns the keys from the top-level value of a JSON object as a JSON array, or, if a path argument is given, the top-level keys from the selected path. Returns NULL if any argument is NULL, the json_doc argument is not an object, or path, if given, does not locate an object. An error occurs if the json_doc argument is not a valid JSON document or the path argument is not a valid path expression"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"Note:"}),"\n",(0,o.jsx)(e.p,{children:"The result array is empty if the selected object is empty. If the top-level value has nested subobjects, the return value does not include keys from those subobjects."}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:'\nmysql> SELECT JSON_KEYS(\'{"a": 1, "b": {"c": 30}}\');\n+-----------------------------------------------------+\n| json_keys(cast(\'{"a": 1, "b": {"c": 30}}\' as JSON)) |\n+-----------------------------------------------------+\n| ["a", "b"]                                          |\n+-----------------------------------------------------+\n1 row in set (0.35 sec)\n\nmysql> SELECT JSON_KEYS(\'{"a": 1, "b": {"c": 30}}\', \'$.b\');\n+------------------------------------------------------------+\n| json_keys(cast(\'{"a": 1, "b": {"c": 30}}\' as JSON), \'$.b\') |\n+------------------------------------------------------------+\n| ["c"]                                                      |\n+------------------------------------------------------------+\n1 row in set (0.07 sec)\n\nmysql> SELECT JSON_KEYS(\'{}\');\n+-------------------------------+\n| json_keys(cast(\'{}\' as JSON)) |\n+-------------------------------+\n| []                            |\n+-------------------------------+\n1 row in set (0.07 sec)\n\nmysql> SELECT JSON_KEYS(\'[1,2]\');\n+----------------------------------+\n| json_keys(cast(\'[1,2]\' as JSON)) |\n+----------------------------------+\n| NULL                             |\n+----------------------------------+\n1 row in set (0.07 sec)\n\nmysql> SELECT JSON_KEYS(\'[]\');\n+-------------------------------+\n| json_keys(cast(\'[]\' as JSON)) |\n+-------------------------------+\n| NULL                          |\n+-------------------------------+\n1 row in set (0.07 sec)\n'})}),"\n",(0,o.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,o.jsx)(e.p,{children:"json,json_keys"})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return l}});var t=s(667294);let o={},a=t.createContext(o);function l(n){let e=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);