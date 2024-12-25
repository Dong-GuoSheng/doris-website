"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["926455"],{817615:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>d,assets:()=>u,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-numbers-outer","title":"Outer \u7EC4\u5408\u5668","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/table-functions/explode-numbers-outer.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-numbers-outer","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-functions/explode-numbers-outer","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Outer \u7EC4\u5408\u5668","language":"zh-CN"},"sidebar":"docs","previous":{"title":"EXPLODE_NUMBERS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-functions/explode-numbers"},"next":{"title":"S3","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/s3"}}'),l=t("785893"),o=t("250065");let r={title:"Outer \u7EC4\u5408\u5668",language:"zh-CN"},i=void 0,u={},c=[{value:"outer\u7EC4\u5408\u5668",id:"outer\u7EC4\u5408\u5668",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"outer\u7EC4\u5408\u5668",children:"outer\u7EC4\u5408\u5668"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728table function\u7684\u51FD\u6570\u540D\u540E\u9762\u6DFB\u52A0",(0,l.jsx)(n.code,{children:"_outer"}),"\u540E\u7F00\u4F7F\u5F97\u51FD\u6570\u884C\u4E3A\u4ECE",(0,l.jsx)(n.code,{children:"non-outer"}),"\u53D8\u4E3A",(0,l.jsx)(n.code,{children:"outer"}),",\u5728\u8868\u51FD\u6570\u751F\u62100\u884C\u6570\u636E\u65F6\u6DFB\u52A0\u4E00\u884C",(0,l.jsx)(n.code,{children:"Null"}),"\u6570\u636E\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"explode_numbers(INT x)"})}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select e1 from (select 1 k1) as t lateral view explode_numbers(0) tmp1 as e1;\nEmpty set\n\nmysql> select e1 from (select 1 k1) as t lateral view explode_numbers_outer(0) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n+------+\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"outer\n"})})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let l={},o=s.createContext(l);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);