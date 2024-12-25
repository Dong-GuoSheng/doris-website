"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["896360"],{539636:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/transaction/BEGIN","title":"BEGIN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/transaction/BEGIN.md","sourceDirName":"sql-manual/sql-statements/transaction","slug":"/sql-manual/sql-statements/transaction/BEGIN","permalink":"/zh-CN/docs/sql-manual/sql-statements/transaction/BEGIN","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BEGIN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"KILL CONNECTION","permalink":"/zh-CN/docs/sql-manual/sql-statements/session/connection/KILL-CONNECTION"},"next":{"title":"COMMIT","permalink":"/zh-CN/docs/sql-manual/sql-statements/transaction/COMMIT"}}'),s=t("785893"),a=t("250065");let i={title:"BEGIN",language:"zh-CN"},r=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u5F00\u542F\u4E00\u4E2A\u663E\u5F0F\u4E8B\u52A1\u3002\u7528\u6237\u53EF\u4EE5\u6307\u5B9A Label\uFF0C\u5982\u672A\u6307\u5B9A\uFF0C\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210 Label\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"BEGIN [ WITH LABEL <label> ]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"[ WITH LABEL <label> ]"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u663E\u5F0F\u6307\u5B9A\u8BE5\u4E8B\u52A1\u5173\u8054\u7684 Label\uFF0C\u5982\u672A\u6307\u5B9A\uFF0C\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210 ",(0,s.jsx)(n.a,{href:"../../../data-operate/transaction#%E4%B8%8D%E9%87%8D%E4%B8%8D%E4%B8%A2",children:"label"})," \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u679C\u5F00\u542F\u4E86\u4E00\u4E2A\u663E\u5F0F\u4E8B\u52A1\uFF0C\u6CA1\u6709\u6267\u884C\u63D0\u4EA4\u6216\u56DE\u6EDA\uFF0C\u518D\u6B21\u6267\u884C BEGIN \u547D\u4EE4\u4E0D\u751F\u6548"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210\u7684 Label \u5F00\u542F\u663E\u5F0F\u4E8B\u52A1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> BEGIN;\n{'label':'txn_insert_624a0e16ef4c43d4-9814c7fa3e83a705', 'status':'PREPARE', 'txnId':''}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A Label \u5F00\u542F\u663E\u5F0F\u4E8B\u52A1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> BEGIN WITH LABEL load_1;\n{'label':'load_1', 'status':'PREPARE', 'txnId':''}\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var l=t(667294);let s={},a=l.createContext(s);function i(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);