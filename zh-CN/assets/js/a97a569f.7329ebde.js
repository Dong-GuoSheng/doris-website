"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["583160"],{105266:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE","title":"SET-VARIABLE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE.md","sourceDirName":"sql-manual/sql-reference/Database-Administration-Statements","slug":"/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"SET-VARIABLE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ADMIN-CANCEL-REPAIR","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR"},"next":{"title":"ADMIN-SET-CONFIG","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-CONFIG"}}'),s=i("785893"),t=i("250065");let r={title:"SET-VARIABLE",language:"zh-CN"},c=void 0,a={},d=[{value:"SET-VARIABLE",id:"set-variable",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"set-variable",children:"SET-VARIABLE"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"SET VARIABLE"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["\u8BE5\u8BED\u53E5\u4E3B\u8981\u662F\u7528\u6765\u4FEE\u6539 Doris \u7CFB\u7EDF\u53D8\u91CF\uFF0C\u8FD9\u4E9B\u7CFB\u7EDF\u53D8\u91CF\u53EF\u4EE5\u5206\u4E3A\u5168\u5C40\u4EE5\u53CA\u4F1A\u8BDD\u7EA7\u522B\u5C42\u9762\u6765\u4FEE\u6539\uFF0C\u6709\u4E9B\u4E5F\u53EF\u4EE5\u8FDB\u884C\u52A8\u6001\u4FEE\u6539\u3002\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"SHOW VARIABLE"})," \u6765\u67E5\u770B\u8FD9\u4E9B\u7CFB\u7EDF\u53D8\u91CF\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET variable_assignment [, variable_assignment] ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"variable_assignment:\nuser_var_name = expr\n| [GLOBAL | SESSION] system_var_name = expr"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u53EA\u6709 ADMIN \u7528\u6237\u53EF\u4EE5\u8BBE\u7F6E\u53D8\u91CF\u7684\u5168\u5C40\u751F\u6548"}),"\n",(0,s.jsx)(n.li,{children:"\u5168\u5C40\u751F\u6548\u7684\u53D8\u91CF\u4E0D\u5F71\u54CD\u5F53\u524D\u4F1A\u8BDD\u7684\u53D8\u91CF\u503C\uFF0C\u4EC5\u5F71\u54CD\u65B0\u7684\u4F1A\u8BDD\u4E2D\u7684\u53D8\u91CF\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u65E2\u652F\u6301\u5F53\u524D\u4F1A\u8BDD\u751F\u6548\u53C8\u652F\u6301\u5168\u5C40\u751F\u6548\u7684\u53D8\u91CF\u5305\u62EC\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"time_zone"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"wait_timeout"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sql_mode"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"enable_profile"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"query_timeout"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"insert_timeout"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"exec_mem_limit"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"batch_size"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"allow_partition_column_nullable"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"insert_visible_timeout_ms"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"enable_fold_constant_by_be"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u53EA\u652F\u6301\u5168\u5C40\u751F\u6548\u7684\u53D8\u91CF\u5305\u62EC\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"default_rowset_type"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8BBE\u7F6E\u65F6\u533A\u4E3A\u4E1C\u516B\u533A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'SET time_zone = "Asia/Shanghai";\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8BBE\u7F6E\u5168\u5C40\u7684\u6267\u884C\u5185\u5B58\u5927\u5C0F"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SET GLOBAL exec_mem_limit = 137438953472\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SET, VARIABLE\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return r}});var l=i(667294);let s={},t=l.createContext(s);function r(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);