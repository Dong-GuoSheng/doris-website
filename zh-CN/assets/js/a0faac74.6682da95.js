"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["609343"],{80130:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>E,assets:()=>c,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT","title":"CREATE-TABLE-AS-SELECT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT.md","sourceDirName":"sql-manual/sql-reference/Data-Definition-Statements/Create","slug":"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"CREATE-TABLE-AS-SELECT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE-ENCRYPT-KEY","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY"},"next":{"title":"CREATE-POLICY","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY"}}'),r=t("785893"),i=t("250065");let l={title:"CREATE-TABLE-AS-SELECT",language:"zh-CN"},a=void 0,c={},o=[{value:"CREATE-TABLE-AS-SELECT",id:"create-table-as-select",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",version:"version",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"create-table-as-select",children:"CREATE-TABLE-AS-SELECT"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"CREATE TABLE AS SELECT"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u901A\u8FC7 Select \u8BED\u53E5\u8FD4\u56DE\u7ED3\u679C\u521B\u5EFA\u8868\u7ED3\u6784\uFF0C\u540C\u65F6\u5BFC\u5165\u6570\u636E"}),"\n",(0,r.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE table_name [( column_name_list )]\n    opt_engine:engineName\n    opt_keys:keys\n    opt_comment:tableComment\n    opt_partition:partition\n    opt_distribution:distribution\n    opt_rollup:index\n    opt_properties:tblProperties\n    opt_ext_properties:extProperties\n    KW_AS query_stmt:query_def\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8BF4\u660E:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7528\u6237\u9700\u8981\u62E5\u6709\u6765\u6E90\u8868\u7684",(0,r.jsx)(n.code,{children:"SELECT"}),"\u6743\u9650\u548C\u76EE\u6807\u5E93\u7684",(0,r.jsx)(n.code,{children:"CREATE"}),"\u6743\u9650"]}),"\n",(0,r.jsx)(n.li,{children:"\u521B\u5EFA\u8868\u6210\u529F\u540E\uFF0C\u4F1A\u8FDB\u884C\u6570\u636E\u5BFC\u5165\uFF0C\u5982\u679C\u5BFC\u5165\u5931\u8D25\uFF0C\u5C06\u4F1A\u5220\u9664\u8868"}),"\n",(0,r.jsxs)(n.li,{children:["\u53EF\u4EE5\u81EA\u884C\u6307\u5B9A key type\uFF0C\u9ED8\u8BA4\u4E3A",(0,r.jsx)(n.code,{children:"Duplicate Key"})]}),"\n"]}),"\n",(0,r.jsxs)(n.version,{since:"1.2",children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6240\u6709\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u5217(varchar/var/string) \u90FD\u4F1A\u88AB\u521B\u5EFA\u4E3A string \u7C7B\u578B\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679C\u521B\u5EFA\u7684\u6765\u6E90\u4E3A\u5916\u90E8\u8868\uFF0C\u5E76\u4E14\u7B2C\u4E00\u5217\u4E3A String \u7C7B\u578B\uFF0C\u5219\u4F1A\u81EA\u52A8\u5C06\u7B2C\u4E00\u5217\u8BBE\u7F6E\u4E3A VARCHAR(65533)\u3002\u56E0\u4E3A Doris \u5185\u90E8\u8868\uFF0C\u4E0D\u5141\u8BB8 String \u5217\u4F5C\u4E3A\u7B2C\u4E00\u5217\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 select \u8BED\u53E5\u4E2D\u7684\u5B57\u6BB5\u540D"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'create table `test`.`select_varchar` \nPROPERTIES(\\"replication_num\\" = \\"1\\") \nas select * from `test`.`varchar_table`\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D(\u9700\u8981\u4E0E\u8FD4\u56DE\u7ED3\u679C\u5B57\u6BB5\u6570\u91CF\u4E00\u81F4)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'create table `test`.`select_name`(user, testname, userstatus) \nPROPERTIES(\\"replication_num\\" = \\"1\\") \nas select vt.userId, vt.username, jt.status \nfrom `test`.`varchar_table` vt join \n`test`.`join_table` jt on vt.userId=jt.userId\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CREATE, TABLE, AS, SELECT\n"})}),"\n",(0,r.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function E(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(667294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);