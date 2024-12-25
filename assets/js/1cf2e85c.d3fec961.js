"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["467353"],{737510:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>i,default:()=>p,assets:()=>o,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"admin-manual/open-api/be-http/tablet-restore","title":"Restore Tablet","description":"\x3c!--","source":"@site/docs/admin-manual/open-api/be-http/tablet-restore.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/tablet-restore","permalink":"/docs/dev/admin-manual/open-api/be-http/tablet-restore","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Restore Tablet","language":"en"},"sidebar":"docs","previous":{"title":"Reload Tablet","permalink":"/docs/dev/admin-manual/open-api/be-http/tablet-reload"},"next":{"title":"Modify BE VLOG","permalink":"/docs/dev/admin-manual/open-api/be-http/be-vlog"}}'),s=n("785893"),a=n("250065");let l={title:"Restore Tablet",language:"en"},i="Restore Tablet",o={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"restore-tablet",children:"Restore Tablet"})}),"\n",(0,s.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'POST /api/restore_tablet?tablet_id={int}&schema_hash={int}"'})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"To restore the tablet data from trash dir on BE"}),"\n",(0,s.jsx)(t.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"tablet_id"}),"\nID of the tablet"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"schema_hash"}),"\nSchema hash"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(t.p,{children:"None"}),"\n",(0,s.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'```\n{\n    msg: "OK",\n    code: 0\n}\n```\n'})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'```\ncurl -X POST "http://127.0.0.1:8040/api/restore_tablet?tablet_id=123456&schema_hash=1111111"\n\n```\n'})})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return l}});var r=n(667294);let s={},a=r.createContext(s);function l(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);