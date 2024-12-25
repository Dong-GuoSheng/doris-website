"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["519943"],{340170:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>r,toc:()=>d,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/distance-functions/l2-distance","title":"l2_distance","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/distance-functions/l2-distance.md","sourceDirName":"sql-manual/sql-functions/distance-functions","slug":"/sql-manual/sql-functions/distance-functions/l2-distance","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/distance-functions/l2-distance","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"l2_distance","language":"zh-CN"},"sidebar":"docs","previous":{"title":"l1_distance","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/distance-functions/l1-distance"},"next":{"title":"IGNORE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/debug-functions/ignore"}}'),i=t("785893"),l=t("250065");let c={title:"l2_distance",language:"zh-CN"},a=void 0,r={},d=[{value:"l2_distance",id:"l2_distance",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"l2_distance",children:"l2_distance"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"DOUBLE l2_distance(ARRAY<T> array1, ARRAY<T> array2)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8BA1\u7B97\u6B27\u51E0\u91CC\u5F97\u7A7A\u95F4\u4E2D\u4E24\u70B9\uFF08\u5411\u91CF\u503C\u4E3A\u5750\u6807\uFF09\u4E4B\u95F4\u7684\u8DDD\u79BB\n\u5982\u679C\u8F93\u5165array\u4E3ANULL\uFF0C\u6216\u8005array\u4E2D\u4EFB\u4F55\u5143\u7D20\u4E3ANULL\uFF0C\u5219\u8FD4\u56DENULL"}),"\n",(0,i.jsx)(e.h4,{id:"notice",children:"Notice"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8F93\u5165\u6570\u7EC4\u7684\u5B50\u7C7B\u578B\u652F\u6301\uFF1ATINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE"}),"\n",(0,i.jsx)(e.li,{children:"\u8F93\u5165\u6570\u7EC4array1\u548Carray2\uFF0C\u5143\u7D20\u6570\u91CF\u9700\u4FDD\u6301\u4E00\u81F4"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"sql> SELECT l2_distance([1, 2], [2, 3]);\n+---------------------------------------+\n| l2_distance(ARRAY(1, 2), ARRAY(2, 3)) |\n+---------------------------------------+\n|                    1.4142135623730951 |\n+---------------------------------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"L2_DISTANCE,DISTANCE,L2,ARRAY\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return c}});var s=t(667294);let i={},l=s.createContext(i);function c(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);