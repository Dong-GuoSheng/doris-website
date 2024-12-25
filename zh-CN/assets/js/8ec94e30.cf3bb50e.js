"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["324847"],{733276:function(t,n,e){e.r(n),e.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>m,assets:()=>r,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-to-string","title":"BITMAP_TO_STRING","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-to-string.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-to-string","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-to-string","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"BITMAP_TO_STRING","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_FROM_STRING","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-from-string"},"next":{"title":"BITMAP_TO_ARRAY","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-to-array"}}'),s=e("785893"),o=e("250065");let a={title:"BITMAP_TO_STRING",language:"zh-CN"},l=void 0,r={},c=[{value:"bitmap_to_string",id:"bitmap_to_string",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function p(t){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"bitmap_to_string",children:"bitmap_to_string"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"VARCHAR BITMAP_TO_STRING(BITMAP input)"})}),"\n",(0,s.jsx)(n.p,{children:"\u5C06\u4E00\u4E2Abitmap\u8F6C\u5316\u6210\u4E00\u4E2A\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32\uFF0C\u5B57\u7B26\u4E32\u4E2D\u5305\u542B\u6240\u6709\u8BBE\u7F6E\u7684BIT\u4F4D\u3002\u8F93\u5165\u662Fnull\u7684\u8BDD\u4F1A\u8FD4\u56DEnull\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select bitmap_to_string(null);\n+------------------------+\n| bitmap_to_string(NULL) |\n+------------------------+\n| NULL                   |\n+------------------------+\n\nmysql> select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n\nmysql> select bitmap_to_string(to_bitmap(1));\n+--------------------------------+\n| bitmap_to_string(to_bitmap(1)) |\n+--------------------------------+\n| 1                              |\n+--------------------------------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n| 1,2                                                     |\n+---------------------------------------------------------+\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"BITMAP_TO_STRING,BITMAP\n"})})]})}function m(t={}){let{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(p,{...t})}):p(t)}},250065:function(t,n,e){e.d(n,{Z:function(){return l},a:function(){return a}});var i=e(667294);let s={},o=i.createContext(s);function a(t){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function l(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),i.createElement(o.Provider,{value:n},t.children)}}}]);