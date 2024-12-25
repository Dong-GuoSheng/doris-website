"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["372911"],{508739:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>p,assets:()=>r,toc:()=>c,frontMatter:()=>a});var n=JSON.parse('{"id":"sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-POLICY-USING","title":"SHOW-STORAGE-POLICY-USING","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-POLICY-USING.md","sourceDirName":"sql-manual/sql-statements/Show-Statements","slug":"/sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-POLICY-USING","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-POLICY-USING","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW-STORAGE-POLICY-USING","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-POLICY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-POLICY"},"next":{"title":"SHOW-CATALOG-RECYCLE-BIN","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-CATALOG-RECYCLE-BIN"}}'),l=s("785893"),i=s("250065");let a={title:"SHOW-STORAGE-POLICY-USING",language:"zh-CN"},o=void 0,r={},c=[{value:"SHOW-STORAGE-POLICY-USING",id:"show-storage-policy-using",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"show-storage-policy-using",children:"SHOW-STORAGE-POLICY-USING"}),"\n",(0,l.jsx)(t.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(t.p,{children:"SHOW STORAGE POLICY USING"}),"\n",(0,l.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"\u67E5\u770B\u6240\u6709/\u6307\u5B9A\u5B58\u50A8\u7B56\u7565\u5173\u8054\u7684\u8868\u548C\u5206\u533A"}),"\n",(0,l.jsx)(t.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"SHOW STORAGE POLICY USING [FOR some_policy]\n"})}),"\n",(0,l.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"\u67E5\u770B\u6240\u6709\u542F\u7528\u4E86\u5B58\u50A8\u7B56\u7565\u7684\u5BF9\u8C61"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"mysql> show storage policy using;\n+-----------------------+-----------------------------------------+----------------------------------------+------------+\n| PolicyName            | Database                                | Table                                  | Partitions |\n+-----------------------+-----------------------------------------+----------------------------------------+------------+\n| test_storage_policy   | regression_test_cold_heat_separation_p2 | table_with_storage_policy_1            | ALL        |\n| test_storage_policy   | regression_test_cold_heat_separation_p2 | partition_with_multiple_storage_policy | p201701    |\n| test_storage_policy_2 | regression_test_cold_heat_separation_p2 | partition_with_multiple_storage_policy | p201702    |\n| test_storage_policy_2 | regression_test_cold_heat_separation_p2 | table_with_storage_policy_2            | ALL        |\n| test_policy           | db2                                     | db2_test_1                             | ALL        |\n+-----------------------+-----------------------------------------+----------------------------------------+------------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"\u67E5\u770B\u4F7F\u7528\u5B58\u50A8\u7B56\u7565test_storage_policy\u7684\u5BF9\u8C61"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"mysql> show storage policy using for test_storage_policy;\n+---------------------+-----------+---------------------------------+------------+\n| PolicyName          | Database  | Table                           | Partitions |\n+---------------------+-----------+---------------------------------+------------+\n| test_storage_policy | db_1      | partition_with_storage_policy_1 | p201701    |\n| test_storage_policy | db_1      | table_with_storage_policy_1     | ALL        |\n+---------------------+-----------+---------------------------------+------------+\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"SHOW, STORAGE, POLICY, USING\n"})}),"\n",(0,l.jsx)(t.h3,{id:"best-practice",children:"Best Practice"})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return a}});var n=s(667294);let l={},i=n.createContext(l);function a(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);