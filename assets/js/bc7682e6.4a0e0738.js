"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["543724"],{510344:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/money-format","title":"MONEY_FORMAT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/money-format.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/money-format","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/money-format","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MONEY_FORMAT","language":"en"},"sidebar":"docs","previous":{"title":"SUBSTRING_INDEX","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/substring-index"},"next":{"title":"NGRAM_SEARCH","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/ngram-search"}}'),r=t("785893"),o=t("250065");let i={title:"MONEY_FORMAT",language:"en"},l=void 0,a={},c=[{value:"money_format",id:"money_format",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function m(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"money_format",children:"money_format"}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"VARCHAR money format (Number)"})}),"\n",(0,r.jsx)(e.p,{children:"The number is output in currency format, the integer part is separated by commas every three bits, and the decimal part is reserved for two bits."}),"\n",(0,r.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mysql> select money_format(17014116);\n+------------------------+\n| money_format(17014116) |\n+------------------------+\n| 17,014,116.00          |\n+------------------------+\n\nmysql> select money_format(1123.456);\n+------------------------+\n| money_format(1123.456) |\n+------------------------+\n| 1,123.46               |\n+------------------------+\n\nmysql> select money_format(1123.4);\n+----------------------+\n| money_format(1123.4) |\n+----------------------+\n| 1,123.40             |\n+----------------------+\n"})}),"\n",(0,r.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"MONEY_FORMAT,MONEY,FORMAT\n"})})]})}function u(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(m,{...n})}):m(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},o=s.createContext(r);function i(n){let e=s.useContext(o);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);