"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["487284"],{83069:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>s});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-zip","title":"ARRAY_ZIP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-zip.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-zip","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-zip","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_ZIP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_CONCAT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-concat"},"next":{"title":"ARRAY_SHUFFLE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-shuffle"}}'),t=r("785893"),i=r("250065");let s={title:"ARRAY_ZIP",language:"zh-CN"},l=void 0,c={},o=[{value:"array_zip",id:"array_zip",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"array_zip",children:"array_zip"}),"\n",(0,t.jsx)(n.p,{children:"array_zip"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.p,{children:"\u5C06\u6240\u6709\u6570\u7EC4\u5408\u5E76\u6210\u4E00\u4E2A\u5355\u4E00\u7684\u6570\u7EC4\u3002\u7ED3\u679C\u6570\u7EC4\u5305\u542B\u6E90\u6570\u7EC4\u4E2D\u6309\u53C2\u6570\u5217\u8868\u987A\u5E8F\u5206\u7EC4\u7684\u76F8\u5E94\u5143\u7D20\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Array<Struct<T1, T2,...>> array_zip(Array<T1>, Array<T2>, ...)"})}),"\n",(0,t.jsx)(n.h4,{id:"returned-value",children:"Returned value"}),"\n",(0,t.jsx)(n.p,{children:"\u5C06\u6765\u81EA\u6E90\u6570\u7EC4\u7684\u5143\u7D20\u5206\u7EC4\u6210\u7ED3\u6784\u4F53\u7684\u6570\u7EC4\u3002\u7ED3\u6784\u4F53\u4E2D\u7684\u6570\u636E\u7C7B\u578B\u4E0E\u8F93\u5165\u6570\u7EC4\u7684\u7C7B\u578B\u76F8\u540C\uFF0C\u5E76\u6309\u7167\u4F20\u9012\u6570\u7EC4\u7684\u987A\u5E8F\u6392\u5217\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> select array_zip(['a', 'b', 'c'], [1, 2, 3]);\n+-------------------------------------------------+\n| array_zip(ARRAY('a', 'b', 'c'), ARRAY(1, 2, 3)) |\n+-------------------------------------------------+\n| [{'a', 1}, {'b', 2}, {'c', 3}]                  |\n+-------------------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ARRAY,ZIP,ARRAY_ZIP"})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var a=r(667294);let t={},i=a.createContext(t);function s(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);