"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["347768"],{180593:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>l});var a=JSON.parse('{"id":"admin-manual/open-api/fe-http/query-stats-action","title":"Query Stats Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/fe-http/query-stats-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/query-stats-action","permalink":"/zh-CN/docs/dev/admin-manual/open-api/fe-http/query-stats-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Query Stats Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Query Schema Action","permalink":"/zh-CN/docs/dev/admin-manual/open-api/fe-http/query-schema-action"},"next":{"title":"Row Count Action","permalink":"/zh-CN/docs/dev/admin-manual/open-api/fe-http/row-count-action"}}'),s=t("785893"),r=t("250065");let l={title:"Query Stats Action",language:"zh-CN"},i=void 0,c={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Example",id:"example",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u67E5\u770B\nget api/query_stats/<catalog_name>\nget api/query_stats/<catalog_name>/<db_name>\nget api/query_stats/<catalog_name>/<db_name>/<tbl_name>\n\n\u6E05\u7A7A\ndelete api/query_stats/<catalog_name>/<db_name>\ndelete api/query_stats/<catalog_name>/<db_name>/<tbl_name>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"\u83B7\u53D6\u6216\u8005\u5220\u9664\u6307\u5B9A\u7684 catalog \u6570\u636E\u5E93\u6216\u8005\u8868\u4E2D\u7684\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u5982\u679C\u662F doris catalog \u53EF\u4EE5\u4F7F\u7528 default_cluster"}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"<catalog_name>"})}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u7684 catalog \u540D\u79F0"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"<db_name>"})}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u7684\u6570\u636E\u5E93\u540D\u79F0"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"<tbl_name>"})}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u7684\u8868\u540D\u79F0"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"summary"}),"\n\u5982\u679C\u4E3A true \u5219\u53EA\u8FD4\u56DE summary \u4FE1\u606F\uFF0C\u5426\u5219\u8FD4\u56DE\u6240\u6709\u7684\u8868\u7684\u8BE6\u7EC6\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u53EA\u5728 get \u65F6\u4F7F\u7528"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/query_stats/default_cluster/test_query_db/baseall?summary=false\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "summary": {\n            "query": 2\n        },\n        "detail": {\n            "baseall": {\n                "summary": {\n                    "query": 2\n                }\n            }\n        }\n    },\n    "count": 0\n}\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8FD4\u56DE\u7ED3\u679C\u96C6"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528 curl \u547D\u4EE4\u83B7\u53D6\u7EDF\u8BA1\u4FE1\u606F"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl --location -u root: 'http://127.0.0.1:8030/api/query_stats/default_cluster/test_query_db/baseall?summary=false'\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var a=t(667294);let s={},r=a.createContext(s);function l(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);