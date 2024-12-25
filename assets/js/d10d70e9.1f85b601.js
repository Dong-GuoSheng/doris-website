"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["854313"],{31914:function(t,e,n){n.r(e),n.d(e,{metadata:()=>i,contentTitle:()=>r,default:()=>m,assets:()=>o,toc:()=>u,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-subset-limit","title":"BITMAP_SUBSET_LIMIT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-subset-limit.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-subset-limit","permalink":"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-subset-limit","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_SUBSET_LIMIT","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_AND_NOT,BITMAP_ANDNOT","permalink":"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-and-not"},"next":{"title":"BITMAP_SUBSET_IN_RANGE","permalink":"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-subset-in-range"}}'),s=n("785893"),l=n("250065");let a={title:"BITMAP_SUBSET_LIMIT",language:"en"},r=void 0,o={},u=[{value:"bitmap_subset_limit",id:"bitmap_subset_limit",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(t){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"bitmap_subset_limit",children:"bitmap_subset_limit"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"BITMAP BITMAP_SUBSET_LIMIT(BITMAP src, BIGINT range_start, BIGINT cardinality_limit)"})}),"\n",(0,s.jsx)(e.p,{children:"Create subset of the BITMAP, begin with range from range_start, limit by cardinality_limit\nrange_start: start value for the range\ncardinality_limit: subset upper limit"}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select bitmap_to_string(bitmap_subset_limit(bitmap_from_string('1,2,3,4,5'), 0, 3)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,2,3 |\n+-----------+\n\nmysql> select bitmap_to_string(bitmap_subset_limit(bitmap_from_string('1,2,3,4,5'), 4, 3)) value;\n+-------+\n| value |\n+-------+\n| 4,5     |\n+-------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"BITMAP_SUBSET_LIMIT,BITMAP_SUBSET,BITMAP\n"})})]})}function m(t={}){let{wrapper:e}={...(0,l.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(c,{...t})}):c(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return r},a:function(){return a}});var i=n(667294);let s={},l=i.createContext(s);function a(t){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),i.createElement(l.Provider,{value:e},t.children)}}}]);