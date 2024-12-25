"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["77975"],{681521:function(e,n,s){s.r(n),s.d(n,{metadata:()=>c,contentTitle:()=>t,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>i});var c=JSON.parse('{"id":"sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY","title":"SET-PROPERTY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY.md","sourceDirName":"sql-manual/sql-reference/Account-Management-Statements","slug":"/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SET-PROPERTY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SET-PASSWORD","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD"},"next":{"title":"LDAP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/LDAP"}}'),l=s("785893"),r=s("250065");let i={title:"SET-PROPERTY",language:"zh-CN"},t=void 0,a={},d=[{value:"SET PROPERTY",id:"set-property",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"set-property",children:"SET PROPERTY"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"SET PROPERTY"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"\u8BBE\u7F6E\u7528\u6237\u7684\u5C5E\u6027\uFF0C\u5305\u62EC\u5206\u914D\u7ED9\u7528\u6237\u7684\u8D44\u6E90\u3001\u5BFC\u5165cluster\u7B49"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8FD9\u91CC\u8BBE\u7F6E\u7684\u7528\u6237\u5C5E\u6027\uFF0C\u662F\u9488\u5BF9 user \u7684\uFF0C\u800C\u4E0D\u662F user_identity\u3002\u5373\u5047\u8BBE\u901A\u8FC7 CREATE USER \u8BED\u53E5\u521B\u5EFA\u4E86\u4E24\u4E2A\u7528\u6237 'jack'@'%' \u548C 'jack'@'192.%'\uFF0C\u5219\u4F7F\u7528 SET PROPERTY \u8BED\u53E5\uFF0C\u53EA\u80FD\u9488\u5BF9 jack \u8FD9\u4E2A\u7528\u6237\uFF0C\u800C\u4E0D\u662F 'jack'@'%' \u6216 'jack'@'192.%'"}),"\n",(0,l.jsx)(n.p,{children:"key:"}),"\n",(0,l.jsx)(n.p,{children:"\u8D85\u7EA7\u7528\u6237\u6743\u9650:"}),"\n",(0,l.jsx)(n.p,{children:"\u200B        max_user_connections: \u6700\u5927\u8FDE\u63A5\u6570\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u200B        max_query_instances: \u7528\u6237\u540C\u4E00\u65F6\u95F4\u70B9\u6267\u884C\u67E5\u8BE2\u53EF\u4EE5\u4F7F\u7528\u7684instance\u4E2A\u6570\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u200B        sql_block_rules: \u8BBE\u7F6E sql block rules\u3002\u8BBE\u7F6E\u540E\uFF0C\u8BE5\u7528\u6237\u53D1\u9001\u7684\u67E5\u8BE2\u5982\u679C\u5339\u914D\u89C4\u5219\uFF0C\u5219\u4F1A\u88AB\u62D2\u7EDD\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u200B        cpu_resource_limit: \u9650\u5236\u67E5\u8BE2\u7684cpu\u8D44\u6E90\u3002\u8BE6\u89C1\u4F1A\u8BDD\u53D8\u91CF ",(0,l.jsx)(n.code,{children:"cpu_resource_limit"})," \u7684\u4ECB\u7ECD\u3002-1 \u8868\u793A\u672A\u8BBE\u7F6E\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u200B        exec_mem_limit: \u9650\u5236\u67E5\u8BE2\u7684\u5185\u5B58\u4F7F\u7528\u3002\u8BE6\u89C1\u4F1A\u8BDD\u53D8\u91CF ",(0,l.jsx)(n.code,{children:"exec_mem_limit"})," \u7684\u4ECB\u7ECD\u3002-1 \u8868\u793A\u672A\u8BBE\u7F6E\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u200B        resource_tags\uFF1A\u6307\u5B9A\u7528\u6237\u7684\u8D44\u6E90\u6807\u7B7E\u6743\u9650\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u200B        query_timeout\uFF1A\u6307\u5B9A\u7528\u6237\u7684\u67E5\u8BE2\u8D85\u65F6\u6743\u9650\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"\u6CE8\uFF1A`cpu_resource_limit`, `exec_mem_limit` \u4E24\u4E2A\u5C5E\u6027\u5982\u679C\u672A\u8BBE\u7F6E\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528\u4F1A\u8BDD\u53D8\u91CF\u4E2D\u503C\u3002\n"})}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u6539\u7528\u6237 jack \u6700\u5927\u8FDE\u63A5\u6570\u4E3A1000"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u6539\u7528\u6237jack\u7684\u67E5\u8BE2\u53EF\u7528instance\u4E2A\u6570\u4E3A3000"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'max_query_instances' = '3000';\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u6539\u7528\u6237jack\u7684sql block rule"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'sql_block_rules' = 'rule1, rule2';\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u6539\u7528\u6237jack\u7684 cpu \u4F7F\u7528\u9650\u5236"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'cpu_resource_limit' = '2';\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u6539\u7528\u6237\u7684\u8D44\u6E90\u6807\u7B7E\u6743\u9650"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'resource_tags.location' = 'group_a, group_b';\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u6539\u7528\u6237\u7684\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528\u9650\u5236\uFF0C\u5355\u4F4D\u5B57\u8282"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'exec_mem_limit' = '2147483648';\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4FEE\u6539\u7528\u6237\u7684\u67E5\u8BE2\u8D85\u65F6\u9650\u5236\uFF0C\u5355\u4F4D\u79D2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY FOR 'jack' 'query_timeout' = '500';\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"SET, PROPERTY\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return i}});var c=s(667294);let l={},r=c.createContext(l);function i(e){let n=c.useContext(r);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);