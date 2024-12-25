"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["991326"],{129766:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>p,assets:()=>s,toc:()=>u,frontMatter:()=>r});var i=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/optimizing-join-with-colocate-group","title":"Optimizing Join with Colocate Group","description":"\x3c!--","source":"@site/docs/query-acceleration/tuning/tuning-plan/optimizing-join-with-colocate-group.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/optimizing-join-with-colocate-group","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/optimizing-join-with-colocate-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Optimizing Join with Colocate Group","language":"en"},"sidebar":"docs","previous":{"title":"Transparent Rewriting by Async-Materialized View","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-async-mv"},"next":{"title":"Adjusting Join Shuffle with Hint","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/adjusting-join-shuffle"}}'),o=t("785893"),a=t("250065");let r={title:"Optimizing Join with Colocate Group",language:"en"},c=void 0,s={},u=[];function l(e){let n={a:"a",code:"code",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Defining colocate group is an efficient way of Join, through which the execution engine can effectively avoid the transmission overhead of input data in Join operations (for an introduction to Colocate Group, see ",(0,o.jsx)(n.a,{href:"../../../query-data/join",children:"JOIN"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"However, in some use cases, even if a Colocate Group has been successfully established, the execution plan may still show as Shuffle Join or Bucket Shuffle Join. This situation typically occurs when Doris is in the process of data organization, for instance, it may be migrating tablets between BE to ensure a more balanced distribution of data across multiple BE."}),"\n",(0,o.jsxs)(n.p,{children:["You can view the Colocate Group status using the command ",(0,o.jsx)(n.code,{children:'show proc "/colocation_group"'}),"; as shown in the figure below: If ",(0,o.jsx)(n.code,{children:"IsStable"})," appears as false, it indicates that there are unavailable ",(0,o.jsx)(n.code,{children:"colocation_group"})," instances."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Optimizing Join with Colocate Group",src:t(824928).Z+"",width:"2560",height:"1068"})})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},824928:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/use-colocate-group-cde9b3a3c4a0bf5eef5fcf46b51c9565.jpg"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var i=t(667294);let o={},a=i.createContext(o);function r(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);