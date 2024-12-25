"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["893235"],{853530:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>u,assets:()=>r,toc:()=>a,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/collect-list","title":"COLLECT_LIST","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/collect-list.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/collect-list","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/collect-list","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"COLLECT_LIST","language":"zh-CN"},"sidebar":"docs","previous":{"title":"COLLECT_SET","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/collect-set"},"next":{"title":"RETENTION","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/retention"}}'),s=l("785893"),c=l("250065");let o={title:"COLLECT_LIST",language:"zh-CN"},i=void 0,r={},a=[{value:"COLLECT_LIST",id:"collect_list",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"collect_list",children:"COLLECT_LIST"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ARRAY<T> collect_list(expr[,max_size])"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B expr \u4E2D\u6240\u6709\u5143\u7D20(\u4E0D\u5305\u62ECNULL)\u7684\u6570\u7EC4\uFF0C\u53EF\u9009\u53C2\u6570",(0,s.jsx)(n.code,{children:"max_size"}),"\uFF0C\u901A\u8FC7\u8BBE\u7F6E\u8BE5\u53C2\u6570\u80FD\u591F\u5C06\u7ED3\u679C\u6570\u7EC4\u7684\u5927\u5C0F\u9650\u5236\u4E3A ",(0,s.jsx)(n.code,{children:"max_size"})," \u4E2A\u5143\u7D20\u3002\n\u5F97\u5230\u7684\u7ED3\u679C\u6570\u7EC4\u4E2D\u4E0D\u5305\u542BNULL\u5143\u7D20\uFF0C\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u987A\u5E8F\u4E0D\u56FA\u5B9A\u3002\u8BE5\u51FD\u6570\u5177\u6709\u522B\u540D",(0,s.jsx)(n.code,{children:"group_array"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select k1,k2,k3 from collect_list_test order by k1;\n+------+------------+-------+\n| k1   | k2         | k3    |\n+------+------------+-------+\n|    1 | 2023-01-01 | hello |\n|    2 | 2023-01-02 | NULL  |\n|    2 | 2023-01-02 | hello |\n|    3 | NULL       | world |\n|    3 | 2023-01-02 | hello |\n|    4 | 2023-01-02 | sql   |\n|    4 | 2023-01-03 | sql   |\n+------+------------+-------+\n\nmysql> select collect_list(k1),collect_list(k1,3) from collect_list_test;\n+-------------------------+--------------------------+\n| collect_list(`k1`)      | collect_list(`k1`,3)     |\n+-------------------------+--------------------------+\n| [1,2,2,3,3,4,4]         | [1,2,2]                  |\n+-------------------------+--------------------------+\n\nmysql> select k1,collect_list(k2),collect_list(k3,1) from collect_list_test group by k1 order by k1;\n+------+-------------------------+--------------------------+\n| k1   | collect_list(`k2`)      | collect_list(`k3`,1)     |\n+------+-------------------------+--------------------------+\n|    1 | [2023-01-01]            | [hello]                  |\n|    2 | [2023-01-02,2023-01-02] | [hello]                  |\n|    3 | [2023-01-02]            | [world]                  |\n|    4 | [2023-01-02,2023-01-03] | [sql]                    |\n+------+-------------------------+--------------------------+\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"COLLECT_LIST,GROUP_ARRAY,COLLECT_SET,ARRAY"})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return o}});var t=l(667294);let s={},c=t.createContext(s);function o(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);