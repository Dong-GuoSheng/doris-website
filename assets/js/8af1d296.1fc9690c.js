"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["303254"],{732197:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>c,assets:()=>a,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-split","title":"EXPLODE_SPLIT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-functions/explode-split.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-split","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/explode-split","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EXPLODE_SPLIT","language":"en"},"sidebar":"docs","previous":{"title":"POSEXPLODE","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/posexplode"},"next":{"title":"EXPLODE_MAP","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/explode_map"}}'),s=l("785893"),i=l("250065");let r={title:"EXPLODE_SPLIT",language:"en"},o=void 0,a={},d=[{value:"explode_split",id:"explode_split",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function p(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"explode_split",children:"explode_split"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"explode_split(str, delimiter)"})}),"\n",(0,s.jsx)(n.p,{children:"Table functions must be used in conjunction with Lateral View."}),"\n",(0,s.jsx)(n.p,{children:"Split a string into multiple substrings according to the specified delimiter."}),"\n",(0,s.jsx)(n.p,{children:"grammar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"explode_split(str, delimiter)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.p,{children:"Original table data:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select * from example1 order by k1;\n+------+---------+\n| k1   | k2      |\n+------+---------+\n|    1 |         |\n|    2 | NULL    |\n|    3 | ,       |\n|    4 | 1       |\n|    5 | 1,2,3   |\n|    6 | a, b, c |\n+------+---------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Lateral View:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |      |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 2 order by k1, e1;\nEmpty set\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 3 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    3 |      |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 4 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    4 | 1    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 5 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    5 | 2    |\n|    5 | 3    |\n|    5 | 1    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 6 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    6 |  b   |\n|    6 |  c   |\n|    6 | a    |\n+------+------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"explode,split,explode_split"})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return o},a:function(){return r}});var t=l(667294);let s={},i=t.createContext(s);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);