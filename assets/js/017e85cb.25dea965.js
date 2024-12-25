"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["621742"],{362132:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>r,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK","title":"REBALANCE DISK","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/REBALANCE-DISK","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"REBALANCE DISK","language":"en"},"sidebar":"docs","previous":{"title":"CANCEL MATERIALIZED VIEW TASK","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/materialized-view/CANCEL-MATERIALIZED-VIEW-TASK"},"next":{"title":"CANCEL REBALANCE DISK","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/CANCEL-REBALANCE-DISK"}}'),s=n("785893"),i=n("250065");let l={title:"REBALANCE DISK",language:"en"},r=void 0,d={},c=[{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function o(e){let t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(t.p,{children:"ADMIN REBALANCE DISK"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This statement is used to try to rebalance disks of the specified backends first, no matter if the cluster is balanced"}),"\n",(0,s.jsx)(t.p,{children:"Grammar:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'ADMIN REBALANCE DISK [ON ("BackendHost1:BackendHeartBeatPort1", "BackendHost2:BackendHeartBeatPort2", ...)];\n'})}),"\n",(0,s.jsx)(t.p,{children:"Explain:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"This statement only means that the system attempts to rebalance disks of specified backends with high priority, no matter if the cluster is balanced."}),"\n",(0,s.jsx)(t.li,{children:"The default timeout is 24 hours. Timeout means that the system will no longer rebalance disks of specified backends with high priority. The command settings need to be reused."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Attempt to rebalance disks of all backends"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"ADMIN REBALANCE DISK;\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Attempt to rebalance disks oof the specified backends"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'ADMIN REBALANCE DISK ON ("192.168.1.1:1234", "192.168.1.2:1234");\n'})}),"\n",(0,s.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(t.p,{children:"ADMIN,REBALANCE,DISK"}),"\n",(0,s.jsx)(t.h2,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var a=n(667294);let s={},i=a.createContext(s);function l(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);