"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["291364"],{174289:function(t,n,i){i.r(n),i.d(n,{metadata:()=>e,contentTitle:()=>s,default:()=>_,assets:()=>m,toc:()=>c,frontMatter:()=>a});var e=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap_or_count","title":"bitmap_or_count","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_or_count.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap_or_count","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_or_count","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"bitmap_or_count","language":"zh-CN"},"sidebar":"docs","previous":{"title":"bitmap_xor_count","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count"},"next":{"title":"bitmap_contains","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_contains"}}'),o=i("785893"),r=i("250065");let a={title:"bitmap_or_count",language:"zh-CN"},s=void 0,m={},c=[{value:"bitmap_or_count",id:"bitmap_or_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function p(t){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"bitmap_or_count",children:"bitmap_or_count"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"BigIntVal bitmap_or_count(BITMAP lhs, BITMAP rhs, ...)"})}),"\n",(0,o.jsx)(n.p,{children:"\u8BA1\u7B97\u4E24\u4E2A\u53CA\u4EE5\u4E0A\u8F93\u5165bitmap\u7684\u5E76\u96C6\uFF0C\u8FD4\u56DE\u5E76\u96C6\u7684\u4E2A\u6570."}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"MySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_empty());\n+--------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_empty()) |\n+--------------------------------------------------------------+\n|                                                            3 |\n+--------------------------------------------------------------+\n\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_from_string('1,2,3'));\n+---------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+---------------------------------------------------------------------------+\n|                                                                         3 |\n+---------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'));\n+---------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+---------------------------------------------------------------------------+\n|                                                                         5 |\n+---------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), bitmap_empty());\n+-----------------------------------------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), bitmap_empty()) |\n+-----------------------------------------------------------------------------------------------------------+\n|                                                                                                         6 |\n+-----------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), NULL);\n+-------------------------------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), NULL) |\n+-------------------------------------------------------------------------------------------------+\n|                                                                                            NULL |\n+-------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"BITMAP_OR_COUNT,BITMAP\n"})})]})}function _(t={}){let{wrapper:n}={...(0,r.a)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},250065:function(t,n,i){i.d(n,{Z:function(){return s},a:function(){return a}});var e=i(667294);let o={},r=e.createContext(o);function a(t){let n=e.useContext(r);return e.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),e.createElement(r.Provider,{value:n},t.children)}}}]);