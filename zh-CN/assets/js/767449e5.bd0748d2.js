"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["6654"],{832389:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>d,assets:()=>c,toc:()=>u,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null","title":"IPV4_STRING_TO_NUM_OR_NULL","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"IPV4_STRING_TO_NUM_OR_NULL","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IPV4_STRING_TO_NUM_OR_DEFAULT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default"},"next":{"title":"IPV6_NUM_TO_STRING","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv6-num-to-string"}}'),s=t("785893"),l=t("250065");let r={title:"IPV4_STRING_TO_NUM_OR_NULL",language:"zh-CN"},o=void 0,c={},u=[{value:"IPV4_STRING_TO_NUM_OR_NULL",id:"ipv4_string_to_num_or_null",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function _(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"ipv4_string_to_num_or_null",children:"IPV4_STRING_TO_NUM_OR_NULL"}),"\n",(0,s.jsx)(e.p,{children:"IPV4_STRING_TO_NUM_OR_NULL"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"BIGINT IPV4_STRING_TO_NUM_OR_NULL(VARCHAR ipv4_string)"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"BIGINT INET_ATON(VARCHAR ipv4_string)"})}),"\n",(0,s.jsx)(e.p,{children:"\u83B7\u53D6\u5305\u542B IPv4 \u5730\u5740\u7684\u5B57\u7B26\u4E32\uFF0C\u683C\u5F0F\u4E3A A.B.C.D\uFF08\u70B9\u5206\u9694\u7684\u5341\u8FDB\u5236\u6570\u5B57\uFF09\u3002\u8FD4\u56DE\u4E00\u4E2A BIGINT \u6570\u5B57\uFF0C\u8868\u793A\u76F8\u5E94\u7684\u5927\u7AEF IPv4 \u5730\u5740\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"notice",children:"Notice"}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679C\u8F93\u5165\u5B57\u7B26\u4E32\u4E0D\u662F\u6709\u6548\u7684 IPv4 \u5730\u5740\uFF0C\u5C06\u8FD4\u56DE ",(0,s.jsx)(e.code,{children:"NULL"}),"\u3002\u8BE5\u51FD\u6570\u6709\u4E00\u4E2A\u522B\u540D\u4E3A ",(0,s.jsx)(e.code,{children:"INET_ATON"}),"\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"mysql> select ipv4_string_to_num_or_null('192.168.0.1'); \n+-------------------------------------------+ \n| ipv4_string_to_num_or_null('192.168.0.1') | \n+-------------------------------------------+ \n| 3232235521                                | \n+-------------------------------------------+ \n1 row in set (0.01 sec)\n\nmysql> select str, ipv4_string_to_num_or_null(str) from ipv4_str; \n+-----------------+---------------------------------+ \n|str              | ipv4_string_to_num_or_null(str) | \n+-----------------+---------------------------------+ \n| 0.0.0.0         | 0                               | \n| 127.0.0.1       | 2130706433                      | \n| 255.255.255.255 | 4294967295                      | \n| invalid         | NULL                            | \n+-----------------+---------------------------------+ \n4 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(e.p,{children:"IPV4_STRING_TO_NUM_OR_NULL, INET_ATON, IP"})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(_,{...n})}):_(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return r}});var i=t(667294);let s={},l=i.createContext(s);function r(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);