"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["288509"],{445456:function(t,e,n){n.r(e),n.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>m,assets:()=>r,toc:()=>p,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap_empty","title":"bitmap_empty","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_empty.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap_empty","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_empty","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"bitmap_empty","language":"zh-CN"},"sidebar":"docs","previous":{"title":"bitmap_from_array","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_from_array"},"next":{"title":"bitmap_or","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_or"}}'),s=n("785893"),a=n("250065");let l={title:"bitmap_empty",language:"zh-CN"},o=void 0,r={},p=[{value:"bitmap_empty",id:"bitmap_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(t){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"bitmap_empty",children:"bitmap_empty"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"BITMAP BITMAP_EMPTY()"})}),"\n",(0,s.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u7A7Abitmap\u3002\u4E3B\u8981\u7528\u4E8E insert \u6216 stream load \u65F6\u586B\u5145\u9ED8\u8BA4\u503C\u3002\u4F8B\u5982"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,v1,v2=bitmap_empty()"   http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select bitmap_count(bitmap_empty());\n+------------------------------+\n| bitmap_count(bitmap_empty()) |\n+------------------------------+\n|                            0 |\n+------------------------------+\n\nmysql> select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"BITMAP_EMPTY,BITMAP\n"})})]})}function m(t={}){let{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(c,{...t})}):c(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return o},a:function(){return l}});var i=n(667294);let s={},a=i.createContext(s);function l(t){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:l(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);