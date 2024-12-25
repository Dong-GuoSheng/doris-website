"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["376765"],{82095:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/hll-functions/hll-cardinality","title":"HLL_CARDINALITY","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/hll-functions/hll-cardinality.md","sourceDirName":"sql-manual/sql-functions/hll-functions","slug":"/sql-manual/sql-functions/hll-functions/hll-cardinality","permalink":"/docs/sql-manual/sql-functions/hll-functions/hll-cardinality","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"HLL_CARDINALITY","language":"en"},"sidebar":"docs","previous":{"title":"XXHASH_64","permalink":"/docs/sql-manual/sql-functions/hash-functions/xxhash-64"},"next":{"title":"HLL_EMPTY","permalink":"/docs/sql-manual/sql-functions/hll-functions/hll-empty"}}'),i=l("785893"),s=l("250065");let a={title:"HLL_CARDINALITY",language:"en"},r=void 0,c={},o=[{value:"HLL_CARDINALITY",id:"hll_cardinality",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"hll_cardinality",children:"HLL_CARDINALITY"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"HLL_CARDINALITY(hll)"})}),"\n",(0,i.jsx)(n.p,{children:"HLL_CARDINALITY is used to calculate the cardinality of a single HLL type value."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MySQL > select HLL_CARDINALITY(uv_set) from test_uv;\n+---------------------------+\n| hll_cardinality(`uv_set`) |\n+---------------------------+\n|                         3 |\n+---------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.p,{children:"HLL,HLL_CARDINALITY"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return a}});var t=l(667294);let i={},s=t.createContext(i);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);