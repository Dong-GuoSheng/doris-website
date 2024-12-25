"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["37195"],{474584:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-CONFIG","title":"ADMIN-SET-CONFIG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-CONFIG.md","sourceDirName":"sql-manual/sql-statements/Database-Administration-Statements","slug":"/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-CONFIG","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-CONFIG","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ADMIN-SET-CONFIG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-CONFIG","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/SHOW-CONFIG"},"next":{"title":"SET-VARIABLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/SET-VARIABLE"}}'),i=t("785893"),a=t("250065");let l={title:"ADMIN-SET-CONFIG",language:"zh-CN"},r=void 0,d={},c=[{value:"ADMIN-SET-CONFIG",id:"admin-set-config",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"admin-set-config",children:"ADMIN-SET-CONFIG"}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(n.p,{children:"ADMIN SET CONFIG"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u8BBE\u7F6E\u96C6\u7FA4\u7684\u914D\u7F6E\u9879\uFF08\u5F53\u524D\u4EC5\u652F\u6301\u8BBE\u7F6E FE \u7684\u914D\u7F6E\u9879\uFF09\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u8BBE\u7F6E\u7684\u914D\u7F6E\u9879\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"SHOW FRONTEND CONFIG;"})," \u547D\u4EE4\u67E5\u770B\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ADMIN SET FRONTEND CONFIG ("key" = "value") [ALL];\n-- or\nADMIN SET ALL FRONTENDS CONFIG ("key" = "value");\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["2.0.11 \u548C 2.1.5 \u7248\u672C\u5F00\u59CB\u652F\u6301 ",(0,i.jsx)(n.code,{children:"ALL"})," \u5173\u952E\u8BCD\u3002\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"ALL"})," \u5173\u952E\u5B57\u540E\u914D\u7F6E\u53C2\u6570\u5C06\u5E94\u7528\u4E8E\u6240\u6709 FE(\u9664 ",(0,i.jsx)(n.code,{children:"master_only"})," \u53C2\u6570\u5916)\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u8BE5\u8BED\u6CD5\u4E0D\u4F1A\u6301\u4E45\u5316\u4FEE\u6539\u7684\u914D\u7F6E\uFF0CFE \u91CD\u542F\u540E\uFF0C\u4FEE\u6539\u7684\u914D\u7F6E\u5931\u6548\u3002\u5982\u9700\u6301\u4E45\u5316\uFF0C\u9700\u8981\u5728 fe.conf \u4E2D\u540C\u6B65\u6DFB\u52A0\u914D\u7F6E\u9879\u3002"}),"\n",(0,i.jsx)(n.li,{}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8BBE\u7F6E ",(0,i.jsx)(n.code,{children:"disable_balance"})," \u4E3A true"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ADMIN, SET, CONFIG\n"})}),"\n",(0,i.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let i={},a=s.createContext(i);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);