"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["506729"],{599725:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>o});var l=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/search/multi-search-all-positions","title":"MULTI_SEARCH_ALL_POSITIONS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/string-functions/search/multi-search-all-positions.md","sourceDirName":"sql-manual/sql-functions/string-functions/search","slug":"/sql-manual/sql-functions/string-functions/search/multi-search-all-positions","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/search/multi-search-all-positions","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MULTI_SEARCH_ALL_POSITIONS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"random_bytes","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/random-bytes"},"next":{"title":"MULTI_MATCH_ANY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/search/multi-match-any"}}'),t=s("785893"),i=s("250065");let o={title:"MULTI_SEARCH_ALL_POSITIONS",language:"zh-CN"},r=void 0,c={},a=[{value:"multi_search_all_positions",id:"multi_search_all_positions",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"multi_search_all_positions",children:"multi_search_all_positions"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ARRAY<INT> multi_search_all_positions(VARCHAR haystack, ARRAY<VARCHAR> needles)"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8FD4\u56DE\u4E00\u4E2A ",(0,t.jsx)(n.code,{children:"ARRAY"}),"\uFF0C\u5176\u4E2D\u7B2C ",(0,t.jsx)(n.code,{children:"i"})," \u4E2A\u5143\u7D20\u4E3A ",(0,t.jsx)(n.code,{children:"needles"})," \u4E2D\u7B2C ",(0,t.jsx)(n.code,{children:"i"})," \u4E2A\u5143\u7D20 ",(0,t.jsx)(n.code,{children:"needle"}),"\uFF0C\u5728\u5B57\u7B26\u4E32 ",(0,t.jsx)(n.code,{children:"haystack"})," \u4E2D",(0,t.jsx)(n.strong,{children:"\u9996\u6B21"}),"\u51FA\u73B0\u7684\u4F4D\u7F6E\u3002\u4F4D\u7F6E\u4ECE1\u5F00\u59CB\u8BA1\u6570\uFF0C0\u4EE3\u8868\u672A\u627E\u5230\u8BE5\u5143\u7D20\u3002",(0,t.jsx)(n.strong,{children:"\u5927\u5C0F\u5199\u654F\u611F"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> select multi_search_all_positions('Hello, World!', ['hello', '!', 'world']);\n+----------------------------------------------------------------------+\n| multi_search_all_positions('Hello, World!', ['hello', '!', 'world']) |\n+----------------------------------------------------------------------+\n| [0,13,0]                                                             |\n+----------------------------------------------------------------------+\n\nselect multi_search_all_positions(\"Hello, World!\", ['hello', '!', 'world', 'Hello', 'World']);\n+---------------------------------------------------------------------------------------------+\n| multi_search_all_positions('Hello, World!', ARRAY('hello', '!', 'world', 'Hello', 'World')) |\n+---------------------------------------------------------------------------------------------+\n| [0, 13, 0, 1, 8]                                                                            |\n+---------------------------------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"MULTI_SEARCH,SEARCH,POSITIONS\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return o}});var l=s(667294);let t={},i=l.createContext(t);function o(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);