"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["950957"],{218605:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"admin-manual/fe/backends-action","title":"Backends Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/fe/backends-action.md","sourceDirName":"admin-manual/fe","slug":"/admin-manual/fe/backends-action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/backends-action","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Backends Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Query Profile Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/query-profile-action"},"next":{"title":"Bootstrap Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/bootstrap-action"}}'),i=t("785893"),a=t("250065");let r={title:"Backends Action",language:"zh-CN"},c=void 0,o={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}];function l(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET /api/backends\n"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Backends Action \u8FD4\u56DE Backends \u5217\u8868\uFF0C\u5305\u62EC Backend \u7684 IP\u3001PORT \u7B49\u4FE1\u606F\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,i.jsx)(n.p,{children:"\u65E0"}),"\n",(0,i.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"is_alive"})}),"\n",(0,i.jsx)(n.p,{children:"\u53EF\u9009\u53C2\u6570\u3002\u662F\u5426\u8FD4\u56DE\u5B58\u6D3B\u7684 BE \u8282\u70B9\u3002\u9ED8\u8BA4\u4E3A false\uFF0C\u5373\u8FD4\u56DE\u6240\u6709 BE \u8282\u70B9\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,i.jsx)(n.p,{children:"\u65E0"}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "msg": "success", \n    "code": 0, \n    "data": {\n        "backends": [\n            {\n                "ip": "192.1.1.1",\n                "http_port": 8040, \n                "is_alive": true\n            }\n        ]\n    }, \n    "count": 0\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(667294);let i={},a=s.createContext(i);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);