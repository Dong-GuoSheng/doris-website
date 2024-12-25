"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["536231"],{600010:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>p,assets:()=>d,toc:()=>o,frontMatter:()=>l});var i=JSON.parse('{"id":"admin-manual/open-api/fe-http/get-ddl-stmt-action","title":"Get DDL Statement Action","description":"\x3c!--","source":"@site/docs/admin-manual/open-api/fe-http/get-ddl-stmt-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/get-ddl-stmt-action","permalink":"/docs/dev/admin-manual/open-api/fe-http/get-ddl-stmt-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Get DDL Statement Action","language":"en"},"sidebar":"docs","previous":{"title":"Fe Version Info Action","permalink":"/docs/dev/admin-manual/open-api/fe-http/fe-version-info-action"},"next":{"title":"Get Load Info Action","permalink":"/docs/dev/admin-manual/open-api/fe-http/get-load-info-action"}}'),a=t("785893"),r=t("250065");let l={title:"Get DDL Statement Action",language:"en"},s="Get DDL Statement Action",d={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"get-ddl-statement-action",children:"Get DDL Statement Action"})}),"\n",(0,a.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET /api/_get_ddl"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Used to get the table creation statement, partition creation statement and rollup statement of the specified table."}),"\n",(0,a.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,a.jsx)(n.p,{children:"None"}),"\n",(0,a.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"db"})}),"\n",(0,a.jsx)(n.p,{children:"Specify database"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"table"})}),"\n",(0,a.jsx)(n.p,{children:"Specify table"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,a.jsx)(n.p,{children:"None"}),"\n",(0,a.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n	"msg": "OK",\n	"code": 0,\n	"data": {\n		"create_partition": ["ALTER TABLE `tbl1` ADD PARTITION ..."],\n		"create_table": ["CREATE TABLE `tbl1` ...],\n		"create_rollup": ["ALTER TABLE `tbl1` ADD ROLLUP ..."]\n	},\n	"count": 0\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Get the DDL statement of the specified table"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'GET GET /api/_get_ddl?db=db1&table=tbl1\n\nResponse\n{\n	"msg": "OK",\n	"code": 0,\n	"data": {\n		"create_partition": [],\n		"create_table": ["CREATE TABLE `tbl1` (\\n  `k1` int(11) NULL COMMENT \\"\\",\\n  `k2` int(11) NULL COMMENT \\"\\"\\n) ENGINE=OLAP\\nDUPLICATE KEY(`k1`, `k2`)\\nCOMMENT \\"OLAP\\"\\nDISTRIBUTED BY HASH(`k1`) BUCKETS 1\\nPROPERTIES (\\n\\"replication_num\\" = \\"1\\",\\n\\"version_info\\" = \\"1,0\\",\\n\\"in_memory\\" = \\"false\\",\\n\\"storage_format\\" = \\"DEFAULT\\"\\n);"],\n		"create_rollup": []\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var i=t(667294);let a={},r=i.createContext(a);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);