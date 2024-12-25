"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["309547"],{228805:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>r});var a=JSON.parse('{"id":"admin-manual/open-api/fe-http/query-stats-action","title":"Query Stats Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/fe-http/query-stats-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/query-stats-action","permalink":"/docs/admin-manual/open-api/fe-http/query-stats-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Query Stats Action","language":"en"},"sidebar":"docs","previous":{"title":"Query Schema Action","permalink":"/docs/admin-manual/open-api/fe-http/query-schema-action"},"next":{"title":"Row Count Action","permalink":"/docs/admin-manual/open-api/fe-http/row-count-action"}}'),s=t("785893"),i=t("250065");let r={title:"Query Stats Action",language:"en"},l=void 0,o={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"View  \nget api/query_stats/<catalog_name>  \nget api/query_stats/<catalog_name>/<db_name>  \nget api/query_stats/<catalog_name>/<db_name>/<tbl_name>  \n  \nClear  \ndelete api/query_stats/<catalog_name>/<db_name>  \ndelete api/query_stats/<catalog_name>/<db_name>/<tbl_name>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Get or delete the statistics information of the specified catalog database or table, if it is a doris catalog, you can use default_cluster"}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<catalog_name>"}),"\nspecified catalog name"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<db_name>"}),"\nspecified database name"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<tbl_name>"}),"\nspecified table name"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"summary"}),"\nif true, only return summary information, otherwise return all the detailed statistics information of the table, only used in get"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/query_stats/default_cluster/test_query_db/baseall?summary=false\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "summary": {\n            "query": 2\n        },\n        "detail": {\n            "baseall": {\n                "summary": {\n                    "query": 2\n                }\n            }\n        }\n    },\n    "count": 0\n}\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"return statistics information"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"use curl"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl --location -u root: 'http://127.0.0.1:8030/api/query_stats/default_cluster/test_query_db/baseall?summary=false'\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var a=t(667294);let s={},i=a.createContext(s);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);