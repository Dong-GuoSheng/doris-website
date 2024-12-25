"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["827793"],{629844:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET","title":"ADMIN-COPY-TABLET","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET.md","sourceDirName":"sql-manual/sql-reference/Database-Administration-Statements","slug":"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ADMIN-COPY-TABLET","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ADMIN DIAGNOSE TABLET","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET"},"next":{"title":"ADMIN SHOW TABLET STORAGE FORMAT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-TABLET-STORAGE-FORMAT"}}'),s=t("785893"),l=t("250065");let a={title:"ADMIN-COPY-TABLET",language:"zh-CN"},r=void 0,c={},d=[{value:"ADMIN-COPY-TABLET",id:"admin-copy-tablet",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"admin-copy-tablet",children:"ADMIN-COPY-TABLET"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"ADMIN COPY TABLET"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u4E3A\u6307\u5B9A\u7684 tablet \u5236\u4F5C\u5FEB\u7167\uFF0C\u4E3B\u8981\u7528\u4E8E\u672C\u5730\u52A0\u8F7D tablet \u6765\u590D\u73B0\u95EE\u9898\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN COPY TABLET tablet_id PROPERTIES("xxx");\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u547D\u4EE4\u9700\u8981 ROOT \u6743\u9650\u3002"}),"\n",(0,s.jsx)(n.p,{children:"PROPERTIES \u652F\u6301\u5982\u4E0B\u5C5E\u6027\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"backend_id\uFF1A\u6307\u5B9A\u526F\u672C\u6240\u5728\u7684 BE \u8282\u70B9\u7684 id\u3002\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u5219\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u526F\u672C\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"version\uFF1A\u6307\u5B9A\u5FEB\u7167\u7684\u7248\u672C\u3002\u8BE5\u7248\u672C\u9700\u5C0F\u4E8E\u7B49\u4E8E\u526F\u672C\u7684\u6700\u5927\u7248\u672C\u3002\u5982\u4E0D\u6307\u5B9A\uFF0C\u5219\u4F7F\u7528\u6700\u5927\u7248\u672C\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"expiration_minutes\uFF1A\u5FEB\u7167\u4FDD\u7559\u65F6\u957F\u3002\u9ED8\u8BA4\u4E3A1\u5C0F\u65F6\u3002\u8D85\u65F6\u540E\u4F1A\u81EA\u52A8\u6E05\u7406\u3002\u5355\u4F4D\u5206\u949F\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7ED3\u679C\u5C55\u793A\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'         TabletId: 10020\n        BackendId: 10003\n               Ip: 192.168.10.1\n             Path: /path/to/be/storage/snapshot/20220830101353.2.3600\nExpirationMinutes: 60\n  CreateTableStmt: CREATE TABLE `tbl1` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(k1) BUCKETS 1\nPROPERTIES (\n"replication_num" = "1",\n"version_info" = "2"\n);\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"TabletId: tablet id"}),"\n",(0,s.jsx)(n.li,{children:"BackendId: BE \u8282\u70B9 id"}),"\n",(0,s.jsx)(n.li,{children:"Ip: BE \u8282\u70B9 ip"}),"\n",(0,s.jsx)(n.li,{children:"Path: \u5FEB\u7167\u6240\u5728\u76EE\u5F55"}),"\n",(0,s.jsx)(n.li,{children:"ExpirationMinutes: \u5FEB\u7167\u8FC7\u671F\u65F6\u95F4"}),"\n",(0,s.jsx)(n.li,{children:"CreateTableStmt: tablet \u5BF9\u5E94\u7684\u8868\u7684\u5EFA\u8868\u8BED\u53E5\u3002\u8BE5\u8BED\u53E5\u4E0D\u662F\u539F\u59CB\u7684\u5EFA\u8868\u8BED\u53E5\uFF0C\u800C\u662F\u7528\u4E8E\u4E4B\u540E\u672C\u5730\u52A0\u8F7D tablet \u7684\u7B80\u5316\u540E\u7684\u5EFA\u8868\u8BED\u53E5\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5BF9\u6307\u5B9A BE \u8282\u70B9\u4E0A\u7684\u526F\u672C\u505A\u5FEB\u7167"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN COPY TABLET 10010 PROPERTIES("backend_id" = "10001");\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5BF9\u6307\u5B9A BE \u8282\u70B9\u4E0A\u7684\u526F\u672C\uFF0C\u505A\u6307\u5B9A\u7248\u672C\u7684\u5FEB\u7167"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN COPY TABLET 10010 PROPERTIES("backend_id" = "10001", "version" = "10");\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ADMIN, COPY, TABLET\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(667294);let s={},l=i.createContext(s);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);