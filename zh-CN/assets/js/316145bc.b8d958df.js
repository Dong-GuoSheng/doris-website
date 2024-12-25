"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["765892"],{713231:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>d,assets:()=>a,toc:()=>r,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/json-keys","title":"JSON_KEYS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/json-functions/json-keys.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/json-keys","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-keys","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JSON_KEYS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JSON_SET","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-set"},"next":{"title":"MAP","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/map-functions/map"}}'),o=s("785893"),l=s("250065");let c={title:"JSON_KEYS",language:"zh-CN"},i=void 0,a={},r=[{value:"Json_keys",id:"json_keys",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function u(n){let e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"json_keys",children:"Json_keys"}),"\n",(0,o.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,o.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"ARRAY<STRING> json_keys(JSON, [VARCHAR path])"})}),"\n",(0,o.jsx)(e.p,{children:"JSON_KEYS() \u51FD\u6570\u7528\u4E8E\u4ECE JSON \u5BF9\u8C61\u7684\u9876\u7EA7\u503C\u4E2D\u8FD4\u56DE\u952E\u3002\u8FD9\u4E9B\u952E\u4F5C\u4E3A\u6570\u7EC4\u8FD4\u56DE\uFF0C\u6216\u8005\u5982\u679C\u7ED9\u5B9A\u4E86\u8DEF\u5F84\u53C2\u6570\uFF0C\u5219\u8FD4\u56DE\u6240\u9009\u8DEF\u5F84\u7684\u9876\u7EA7\u952E\u3002\u60A8\u9700\u8981\u5C06 JSON \u6587\u6863\u4F5C\u4E3A\u51FD\u6570\u7684\u53C2\u6570\u63D0\u4F9B\u3002\u60A8\u8FD8\u53EF\u4EE5\uFF08\u53EF\u9009\u5730\uFF09\u63D0\u4F9B\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u4EE5\u6307\u5B9A JSON \u6587\u6863\u4E2D\u201C\u9876\u7EA7\u201D\u8DEF\u5F84\u4ECE\u4F55\u5904\u5F00\u59CB\u3002\n\u5176\u4E2D\uFF0Cjson_doc \u662F JSON \u6587\u6863\uFF0Cpath \u662F\u4E00\u4E2A\u53EF\u9009\u53C2\u6570\uFF0C\u7528\u4E8E\u786E\u5B9A JSON \u6587\u6863\u4E2D\u201C\u9876\u7EA7\u201D\u8DEF\u5F84\u4ECE\u4F55\u5904\u5F00\u59CB\u3002"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"\u6CE8\u610F:"}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679C\u6240\u9009\u5BF9\u8C61\u4E3A\u7A7A\uFF0C\u5219\u7ED3\u679C\u6570\u7EC4\u4E3A\u7A7A\u3002\u5982\u679C\u9876\u7EA7\u503C\u5305\u542B\u5D4C\u5957\u7684\u5B50\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u503C\u4E0D\u5305\u62EC\u8FD9\u4E9B\u5B50\u5BF9\u8C61\u7684\u952E\u3002"}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:'\nmysql> SELECT JSON_KEYS(\'{"a": 1, "b": {"c": 30}}\');\n+-----------------------------------------------------+\n| json_keys(cast(\'{"a": 1, "b": {"c": 30}}\' as JSON)) |\n+-----------------------------------------------------+\n| ["a", "b"]                                          |\n+-----------------------------------------------------+\n1 row in set (0.35 sec)\n\nmysql> SELECT JSON_KEYS(\'{"a": 1, "b": {"c": 30}}\', \'$.b\');\n+------------------------------------------------------------+\n| json_keys(cast(\'{"a": 1, "b": {"c": 30}}\' as JSON), \'$.b\') |\n+------------------------------------------------------------+\n| ["c"]                                                      |\n+------------------------------------------------------------+\n1 row in set (0.07 sec)\n\nmysql> SELECT JSON_KEYS(\'{}\');\n+-------------------------------+\n| json_keys(cast(\'{}\' as JSON)) |\n+-------------------------------+\n| []                            |\n+-------------------------------+\n1 row in set (0.07 sec)\n\nmysql> SELECT JSON_KEYS(\'[1,2]\');\n+----------------------------------+\n| json_keys(cast(\'[1,2]\' as JSON)) |\n+----------------------------------+\n| NULL                             |\n+----------------------------------+\n1 row in set (0.07 sec)\n\nmysql> SELECT JSON_KEYS(\'[]\');\n+-------------------------------+\n| json_keys(cast(\'[]\' as JSON)) |\n+-------------------------------+\n| NULL                          |\n+-------------------------------+\n1 row in set (0.07 sec)\n'})}),"\n",(0,o.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,o.jsx)(e.p,{children:"json,json_keys"})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var t=s(667294);let o={},l=t.createContext(o);function c(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);