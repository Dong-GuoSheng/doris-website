"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["54109"],{517315:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>o,assets:()=>r,toc:()=>u,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/sequence","title":"SEQUENCE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/sequence.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/sequence","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/sequence","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SEQUENCE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ELEMENT_AT","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/element-at"},"next":{"title":"CONVERT_TZ","permalink":"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/convert-tz"}}'),a=t("785893"),i=t("250065");let c={title:"SEQUENCE",language:"zh-CN"},l=void 0,r={},u=[{value:"sequence",id:"sequence",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"sequence",children:"sequence"}),"\n",(0,a.jsx)(n.p,{children:"sequence"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(n.p,{children:"\u51FD\u6570 array_range \u7684\u522B\u79F0"}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ARRAY<Int> sequence(Int end)\nARRAY<Int> sequence(Int start, Int end)\nARRAY<Int> sequence(Int start, Int end, Int step)\nARRAY<Datetime> sequence(Datetime start_datetime, Datetime end_datetime)\nARRAY<Datetime> sequence(Datetime start_datetime, Datetime end_datetime, INTERVAL Int interval_step UNIT)\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u751F\u6210 int \u6570\u7EC4\uFF1A\n\u53C2\u6570\u5747\u4E3A\u6B63\u6574\u6570 start \u9ED8\u8BA4\u4E3A 0, step \u9ED8\u8BA4\u4E3A 1\u3002\n\u6700\u7EC8\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4ECE start \u5230 end - 1, \u6B65\u957F\u4E3A step\u3002"}),"\n",(0,a.jsxs)(n.li,{children:["\u751F\u6210\u65E5\u671F\u65F6\u95F4\u6570\u7EC4\uFF1A\n\u81F3\u5C11\u53D6\u4E24\u4E2A\u53C2\u6570\u3002\n\u524D\u4E24\u4E2A\u53C2\u6570\u90FD\u662F datetimev2\uFF0C\u7B2C\u4E09\u4E2A\u662F\u6B63\u6574\u6570\u3002\n\u5982\u679C\u7F3A\u5C11\u7B2C\u4E09\u90E8\u5206\uFF0C\u5219",(0,a.jsx)(n.code,{children:"INTERVAL 1 DAY"}),"\u5C06\u4E3A\u9ED8\u8BA4\u503C\u3002\nUNIT \u652F\u6301\u5E74/\u6708/\u5468/\u65E5/\u5C0F\u65F6/\u5206\u949F/\u79D2\u3002\n\u8FD4\u56DE start_datetime \u548C\u6700\u63A5\u8FD1 end_datetime \u4E4B\u95F4\u7684 datetimev2 \u6570\u7EC4\uFF08\u6309 Interval_step UNIT \u8BA1\u7B97\uFF09\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"notice",children:"notice"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"\u5982\u679C\u7B2C\u4E09\u4E2A\u53C2\u6570 step/interval_step \u4E3A\u8D1F\u6570\u6216\u8005\u96F6, \u51FD\u6570\u7ED3\u679C\u5C06\u4E3ANULL"})}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"mysql> select sequence(10);\n+--------------------------------+\n| sequence(10)                   |\n+--------------------------------+\n| [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] |\n+--------------------------------+\n\nmysql> select sequence(10,20);\n+------------------------------------------+\n| sequence(10, 20)                         |\n+------------------------------------------+\n| [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] |\n+------------------------------------------+\n\nmysql> select sequence(0,20,2);\n+-------------------------------------+\n| sequence(0, 20, 2)                  |\n+-------------------------------------+\n| [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] |\n+-------------------------------------+\n\nmysql> select sequence(cast('2022-05-15 12:00:00' as datetimev2(0)), cast('2022-05-17 12:00:00' as datetimev2(0))) AS sequence_default;\n+------------------------------------------------+\n| sequence_default                               |\n+------------------------------------------------+\n| [\"2022-05-15 12:00:00\", \"2022-05-16 12:00:00\"] |\n+------------------------------------------------+\n\nmysql> select sequence(cast('2019-05-15 12:00:00' as datetimev2(0)), cast('2022-05-17 12:00:00' as datetimev2(0)), interval 2 year) as sequence_2_year;\n+------------------------------------------------+\n| sequence_2_year                                |\n+------------------------------------------------+\n| [\"2019-05-15 12:00:00\", \"2021-05-15 12:00:00\"] |\n+------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.p,{children:"ARRAY, RANGE, SEQUENCE"})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var s=t(667294);let a={},i=s.createContext(a);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);