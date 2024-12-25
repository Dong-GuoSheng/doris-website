"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["70802"],{737989:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>o,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/years-add","title":"YEARS_ADD","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/date-time-functions/years-add.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/years-add","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/years-add","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"YEARS_ADD","language":"en"},"sidebar":"docs","previous":{"title":"MONTHS_SUB","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/months-sub"},"next":{"title":"YEARS_DIFF","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/years-diff"}}'),a=t("785893"),i=t("250065");let r={title:"YEARS_ADD",language:"en"},d=void 0,l={},o=[{value:"years_add",id:"years_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"years_add",children:"years_add"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"DATETIME YEARS_ADD(DATETIME date, INT years)"})}),"\n",(0,a.jsx)(n.p,{children:"ADD a specified number of years from a datetime or date"}),"\n",(0,a.jsx)(n.p,{children:"The parameter date can be DATETIME or DATE, and the return type is consistent with that of the parameter date."}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"mysql> select years_add(\"2020-01-31 02:02:02\", 1);\n+-------------------------------------+\n| years_add('2020-01-31 02:02:02', 1) |\n+-------------------------------------+\n| 2021-01-31 02:02:02                 |\n+-------------------------------------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"YEARS_ADD\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(667294);let a={},i=s.createContext(a);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);