"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["656906"],{56874:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-FUNCTION","title":"SHOW-CREATE-FUNCTION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-FUNCTION.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-FUNCTION","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-FUNCTION","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"SHOW-CREATE-FUNCTION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-CREATE-ROUTINE-LOAD","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-ROUTINE-LOAD"},"next":{"title":"SHOW-COLUMNS","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-COLUMNS"}}'),l=s("785893"),r=s("250065");let i={title:"SHOW-CREATE-FUNCTION",language:"zh-CN"},c=void 0,a={},o=[{value:"SHOW-CREATE-FUNCTION",id:"show-create-function",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"show-create-function",children:"SHOW-CREATE-FUNCTION"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"SHOW CREATE FUNCTION"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u7528\u6237\u81EA\u5B9A\u4E49\u51FD\u6570\u7684\u521B\u5EFA\u8BED\u53E5"}),"\n",(0,l.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE [GLOBAL] FUNCTION function_name(arg_type [, ...]) [FROM db_name]];\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8BF4\u660E\uFF1A\n1. ",(0,l.jsx)(n.code,{children:"global"}),": \u8981\u5C55\u793A\u7684\u662F\u5168\u5C40\u51FD\u6570\n2. ",(0,l.jsx)(n.code,{children:"function_name"}),": \u8981\u5C55\u793A\u7684\u51FD\u6570\u540D\u79F0\n3. ",(0,l.jsx)(n.code,{children:"arg_type"}),": \u8981\u5C55\u793A\u7684\u51FD\u6570\u7684\u53C2\u6570\u5217\u8868\n4. \u5982\u679C\u4E0D\u6307\u5B9A db_name\uFF0C\u4F7F\u7528\u5F53\u524D\u9ED8\u8BA4 db"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:'\u6CE8\u610F: "global"\u5173\u952E\u5B57\u5728v2.0\u7248\u672C\u53CA\u4EE5\u540E\u624D\u53EF\u7528'})}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5C55\u793A\u9ED8\u8BA4db\u4E0B\u6307\u5B9A\u51FD\u6570\u7684\u521B\u5EFA\u8BED\u53E5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE FUNCTION my_add(INT, INT)\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5C55\u793A\u6307\u5B9A\u7684\u5168\u5C40\u51FD\u6570\u7684\u521B\u5EFA\u8BED\u53E5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE GLOBAL FUNCTION my_add(INT, INT)\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"SHOW, CREATE, FUNCTION\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let l={},r=t.createContext(l);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);