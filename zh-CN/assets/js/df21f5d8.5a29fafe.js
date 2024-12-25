"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["156033"],{577011:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/session/queries/SHOW-PROCESSLIST","title":"SHOW PROCESSLIST","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/session/queries/SHOW-PROCESSLIST.md","sourceDirName":"sql-manual/sql-statements/session/queries","slug":"/sql-manual/sql-statements/session/queries/SHOW-PROCESSLIST","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/session/queries/SHOW-PROCESSLIST","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW PROCESSLIST","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW VARIABLES","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/session/variable/SHOW-VARIABLES"},"next":{"title":"KILL QUERY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/session/queries/KILL-QUERY"}}'),i=s("785893"),t=s("250065");let r={title:"SHOW PROCESSLIST",language:"zh-CN"},a=void 0,c={},d=[{value:"Name",id:"name",level:3},{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:3}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(n.p,{children:"SHOW PROCESSLIST"}),"\n",(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u663E\u793A\u7528\u6237\u6B63\u5728\u8FD0\u884C\u7684\u7EBF\u7A0B\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u9664\u4E86 root \u7528\u6237\u80FD\u770B\u5230\u6240\u6709\u6B63\u5728\u8FD0\u884C\u7684\u7EBF\u7A0B\u5916\uFF0C\u5176\u4ED6\u7528\u6237\u90FD\u53EA\u80FD\u770B\u5230\u81EA\u5DF1\u6B63\u5728\u8FD0\u884C\u7684\u7EBF\u7A0B\uFF0C\u770B\u4E0D\u5230\u5176\u5B83\u7528\u6237\u6B63\u5728\u8FD0\u884C\u7684\u7EBF\u7A0B"}),"\n",(0,i.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW [FULL] PROCESSLIST\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CurrentConnected: \u662F\u5426\u4E3A\u5F53\u524D\u8FDE\u63A5\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Id: \u5C31\u662F\u8FD9\u4E2A\u7EBF\u7A0B\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u5F53\u6211\u4EEC\u53D1\u73B0\u8FD9\u4E2A\u7EBF\u7A0B\u6709\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u901A\u8FC7 kill \u547D\u4EE4\uFF0C\u52A0\u4E0A\u8FD9\u4E2A Id \u503C\u5C06\u8FD9\u4E2A\u7EBF\u7A0B\u6740\u6389\u3002"}),"\n",(0,i.jsx)(n.li,{children:"User: \u5C31\u662F\u6307\u542F\u52A8\u8FD9\u4E2A\u7EBF\u7A0B\u7684\u7528\u6237\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Host: \u8BB0\u5F55\u4E86\u53D1\u9001\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEF\u7684 IP \u548C \u7AEF\u53E3\u53F7\u3002\u901A\u8FC7\u8FD9\u4E9B\u4FE1\u606F\u5728\u6392\u67E5\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4F4D\u5230\u662F\u54EA\u4E2A\u5BA2\u6237\u7AEF\u7684\u54EA\u4E2A\u8FDB\u7A0B\u53D1\u9001\u7684\u8BF7\u6C42\u3002"}),"\n",(0,i.jsx)(n.li,{children:"LoginTime: \u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Catalog: \u5F53\u524D\u6267\u884C\u7684\u547D\u4EE4\u662F\u5728\u54EA\u4E00\u4E2A\u6570\u636E\u76EE\u5F55\u4E0A\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Db: \u5F53\u524D\u6267\u884C\u7684\u547D\u4EE4\u662F\u5728\u54EA\u4E00\u4E2A\u6570\u636E\u5E93\u4E0A\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u6570\u636E\u5E93\uFF0C\u5219\u8BE5\u503C\u4E3A NULL\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Command: \u662F\u6307\u6B64\u523B\u8BE5\u7EBF\u7A0B\u6B63\u5728\u6267\u884C\u7684\u547D\u4EE4\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Time: \u4E0A\u4E00\u6761\u547D\u4EE4\u63D0\u4EA4\u5230\u5F53\u524D\u72B6\u6001\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002"}),"\n",(0,i.jsx)(n.li,{children:"State: \u7EBF\u7A0B\u7684\u72B6\u6001\uFF0C\u548C Command \u5BF9\u5E94\u3002"}),"\n",(0,i.jsx)(n.li,{children:"QueryId: \u5F53\u524D\u67E5\u8BE2\u8BED\u53E5\u7684 ID\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Info: \u4E00\u822C\u8BB0\u5F55\u7684\u662F\u7EBF\u7A0B\u6267\u884C\u7684\u8BED\u53E5\u3002\u9ED8\u8BA4\u53EA\u663E\u793A\u524D 100 \u4E2A\u5B57\u7B26\uFF0C\u4E5F\u5C31\u662F\u4F60\u770B\u5230\u7684\u8BED\u53E5\u53EF\u80FD\u662F\u622A\u65AD\u4E86\u7684\uFF0C\u8981\u770B\u5168\u90E8\u4FE1\u606F\uFF0C\u9700\u8981\u4F7F\u7528 show full processlist\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5E38\u89C1\u7684 Command \u7C7B\u578B\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Query: \u8BE5\u7EBF\u7A0B\u6B63\u5728\u6267\u884C\u4E00\u4E2A\u8BED\u53E5"}),"\n",(0,i.jsx)(n.li,{children:"Sleep: \u6B63\u5728\u7B49\u5F85\u5BA2\u6237\u7AEF\u5411\u5B83\u53D1\u9001\u6267\u884C\u8BED\u53E5"}),"\n",(0,i.jsx)(n.li,{children:"Quit: \u8BE5\u7EBF\u7A0B\u6B63\u5728\u9000\u51FA"}),"\n",(0,i.jsx)(n.li,{children:"Kill : \u6B63\u5728\u6267\u884C kill \u8BED\u53E5\uFF0C\u6740\u6B7B\u6307\u5B9A\u7EBF\u7A0B"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4ED6\u7C7B\u578B\u53EF\u4EE5\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/5.6/en/thread-commands.html",children:"MySQL \u5B98\u7F51\u89E3\u91CA"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u67E5\u770B\u5F53\u524D\u7528\u6237\u6B63\u5728\u8FD0\u884C\u7684\u7EBF\u7A0B\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SHOW PROCESSLIST\n"})}),"\n\u8FD4\u56DE\u7ED3\u679C\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MySQL [test]> show full processlist;\n+------------------+------+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+-----------------------+\n| CurrentConnected | Id   | User | Host            | LoginTime           | Catalog  | Db   | Command | Time | State | QueryId                           | Info                  |\n+------------------+------+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+-----------------------+\n| Yes              |    0 | root | 127.0.0.1:34650 | 2023-09-06 12:01:02 | internal | test | Query   |    0 | OK    | c84e397193a54fe7-bbe9bc219318b75e | select 1              |\n|                  |    1 | root | 127.0.0.1:34776 | 2023-09-06 12:01:07 | internal |      | Sleep   |   29 | EOF   | 886ffe2894314f50-8dd73a6ca06699e4 | show full processlist |\n+------------------+------+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+-----------------------+\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SHOW, PROCESSLIST\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var l=s(667294);let i={},t=l.createContext(i);function r(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);