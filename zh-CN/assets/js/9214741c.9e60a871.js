"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["924088"],{549907:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>a,assets:()=>o,toc:()=>r,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/minutes-sub","title":"MINUTES_SUB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/minutes-sub.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/minutes-sub","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/minutes-sub","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MINUTES_SUB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MINUTES_DIFF","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/minutes-diff"},"next":{"title":"SECONDS_ADD","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/seconds-add"}}'),i=t("785893"),u=t("250065");let l={title:"MINUTES_SUB",language:"zh-CN"},c=void 0,o={},r=[{value:"minutes_sub",id:"minutes_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,u.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"minutes_sub",children:"minutes_sub"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME MINUTES_SUB(DATETIME date, INT minutes)"})}),"\n",(0,i.jsx)(n.p,{children:"\u4ECE\u65E5\u671F\u65F6\u95F4\u6216\u65E5\u671F\u51CF\u53BB\u6307\u5B9A\u5206\u949F\u6570"}),"\n",(0,i.jsx)(n.p,{children:"\u53C2\u6570 date \u53EF\u4EE5\u662F DATETIME \u6216\u8005 DATE \u7C7B\u578B\uFF0C\u8FD4\u56DE\u7C7B\u578B\u4E3A DATETIME\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select minutes_sub(\"2020-02-02 02:02:02\", 1);\n+---------------------------------------+\n| minutes_sub('2020-02-02 02:02:02', 1) |\n+---------------------------------------+\n| 2020-02-02 02:01:02                   |\n+---------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MINUTES_SUB\n"})})]})}function a(e={}){let{wrapper:n}={...(0,u.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(667294);let i={},u=s.createContext(i);function l(e){let n=s.useContext(u);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(u.Provider,{value:n},e.children)}}}]);