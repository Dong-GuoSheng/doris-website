"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["211907"],{771095:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>a,assets:()=>d,toc:()=>r,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/mod","title":"MOD","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/numeric-functions/mod.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/mod","permalink":"/docs/dev/sql-manual/sql-functions/numeric-functions/mod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MOD","language":"en"},"sidebar":"docs","previous":{"title":"RANDOM","permalink":"/docs/dev/sql-manual/sql-functions/numeric-functions/random"},"next":{"title":"RUNNING_DIFFERENCE","permalink":"/docs/dev/sql-manual/sql-functions/numeric-functions/running-difference"}}'),i=s("785893"),o=s("250065");let c={title:"MOD",language:"en"},l=void 0,d={},r=[{value:"mod",id:"mod",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"mod",children:"mod"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"mod(col_a, col_b)"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"column"})," support type\uFF1A",(0,i.jsx)(n.code,{children:"TINYINT"})," ",(0,i.jsx)(n.code,{children:"SMALLINT"})," ",(0,i.jsx)(n.code,{children:"INT"})," ",(0,i.jsx)(n.code,{children:"BIGINT"})," ",(0,i.jsx)(n.code,{children:"LARGEINT"})," ",(0,i.jsx)(n.code,{children:"FLOAT"})," ",(0,i.jsx)(n.code,{children:"DOUBLE"})," ",(0,i.jsx)(n.code,{children:"DECIMAL"})]}),"\n",(0,i.jsx)(n.p,{children:"Find the remainder of a/b. For floating-point types, use the fmod function."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select mod(10, 3);\n+------------+\n| mod(10, 3) |\n+------------+\n|          1 |\n+------------+\n\nmysql> select fmod(10.1, 3.2);\n+-----------------+\n| fmod(10.1, 3.2) |\n+-----------------+\n|      0.50000024 |\n+-----------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MOD\uFF0CFMOD\n"})})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var t=s(667294);let i={},o=t.createContext(i);function c(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);