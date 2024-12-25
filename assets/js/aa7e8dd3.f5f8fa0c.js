"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["7507"],{668266:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>d,assets:()=>r,toc:()=>u,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitwise-functions/bitcount","title":"BIT_COUNT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/bitwise-functions/bitcount.md","sourceDirName":"sql-manual/sql-functions/bitwise-functions","slug":"/sql-manual/sql-functions/bitwise-functions/bitcount","permalink":"/docs/3.0/sql-manual/sql-functions/bitwise-functions/bitcount","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BIT_COUNT","language":"en"},"sidebar":"docs","previous":{"title":"BITNOT","permalink":"/docs/3.0/sql-manual/sql-functions/bitwise-functions/bitnot"},"next":{"title":"BIT_SHIFT_LEFT","permalink":"/docs/3.0/sql-manual/sql-functions/bitwise-functions/bitshiftleft"}}'),s=t("785893"),o=t("250065");let l={title:"BIT_COUNT",language:"en"},c=void 0,r={},u=[{value:"bit_count",id:"bit_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"bit_count",children:"bit_count"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"BIT_COUNT(Integer-type x)"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the exist count of one in 2's complement represent of integer x."}),"\n",(0,s.jsx)(n.p,{children:"Integer-type could be: TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT"}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"select \"0b11111111\", bit_count(-1)\n--------------\n\n+--------------+---------------+\n| '0b11111111' | bit_count(-1) |\n+--------------+---------------+\n| 0b11111111   |             8 |\n+--------------+---------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"BITCOUNT, BIT_COUNT\n"})})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var i=t(667294);let s={},o=i.createContext(s);function l(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);