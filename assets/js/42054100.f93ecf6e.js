"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["886830"],{923585:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/rpad","title":"RPAD","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/rpad.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/rpad","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/rpad","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"RPAD","language":"en"},"sidebar":"docs","previous":{"title":"LPAD","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/lpad"},"next":{"title":"LOWER","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/lower"}}'),i=t("785893"),r=t("250065");let l={title:"RPAD",language:"en"},a=void 0,o={},d=[{value:"rpad",id:"rpad",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"rpad",children:"rpad"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"VARCHAR rpad (VARCHAR str, INT len, VARCHAR pad)"})}),"\n",(0,i.jsx)(e.p,{children:"Returns a string of length len in str, starting with the initials. If len is longer than str, pad characters are added to the right of STR until the length of the string reaches len. If len is less than str's length, the function is equivalent to truncating STR strings and returning only strings of len's length. The len is character length not the bye size."}),"\n",(0,i.jsx)(e.p,{children:"Except when it contains a NULL in parameters, when pad's length is 0, the return value is the empty string."}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> SELECT rpad(\"hi\", 5, \"xy\");\n+---------------------+\n| rpad('hi', 5, 'xy') |\n+---------------------+\n| hixyx               |\n+---------------------+\n\nmysql> SELECT rpad(\"hi\", 1, \"xy\");\n+---------------------+\n| rpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n\nmysql> SELECT rpad(\"\", 0, \"\");\n+-----------------+\n| rpad('', 0, '') |\n+-----------------+\n|                 |\n+-----------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"RPAD\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);