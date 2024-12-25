"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["531109"],{910970:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"admin-manual/config/user-property","title":"User Property","description":"\x3c!--","source":"@site/docs/admin-manual/config/user-property.md","sourceDirName":"admin-manual/config","slug":"/admin-manual/config/user-property","permalink":"/docs/dev/admin-manual/config/user-property","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"User Property","language":"en"},"sidebar":"docs","previous":{"title":"BE Configuration","permalink":"/docs/dev/admin-manual/config/be-config"},"next":{"title":"Overview","permalink":"/docs/dev/admin-manual/system-tables/overview"}}'),r=i("785893"),s=i("250065");let o={title:"User Property",language:"en"},l="User configuration item",a={},c=[{value:"View configuration items",id:"view-configuration-items",level:2},{value:"Set configuration items",id:"set-configuration-items",level:2},{value:"Application examples",id:"application-examples",level:2},{value:"Configuration item list",id:"configuration-item-list",level:2},{value:"max_user_connections",id:"max_user_connections",level:3},{value:"max_query_instances",id:"max_query_instances",level:3},{value:"resource",id:"resource",level:3},{value:"quota",id:"quota",level:3},{value:"default_load_cluster",id:"default_load_cluster",level:3},{value:"load_cluster",id:"load_cluster",level:3}];function u(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"user-configuration-item",children:"User configuration item"})}),"\n",(0,r.jsx)(n.p,{children:"This document mainly introduces related configuration items at the User level. The configuration of the User level is mainly effective for a single user. Each user can set their own User property. Does not affect each other."}),"\n",(0,r.jsx)(n.h2,{id:"view-configuration-items",children:"View configuration items"}),"\n",(0,r.jsx)(n.p,{children:"After the FE is started, on the MySQL client, use the following command to view the User configuration items:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"SHOW PROPERTY [FOR user] [LIKE key pattern]"})}),"\n",(0,r.jsxs)(n.p,{children:["The specific syntax can be queried through the command: ",(0,r.jsx)(n.code,{children:"help show property;"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"set-configuration-items",children:"Set configuration items"}),"\n",(0,r.jsx)(n.p,{children:"After FE is started, on the MySQL client, modify the User configuration items with the following command:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"SET PROPERTY [FOR'user'] 'key' = 'value' [,'key' ='value']"})}),"\n",(0,r.jsxs)(n.p,{children:["The specific syntax can be queried through the command: ",(0,r.jsx)(n.code,{children:"help set property;"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"User-level configuration items will only take effect for the specified users, and will not affect the configuration of other users."}),"\n",(0,r.jsx)(n.h2,{id:"application-examples",children:"Application examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Modify the max_user_connections of user Billie"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"SHOW PROPERTY FOR 'Billie' LIKE '%max_user_connections%';"})," to check that the current maximum number of links for Billie users is 100."]}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"SET PROPERTY FOR 'Billie' 'max_user_connections' = '200';"})," to modify the current maximum number of connections for Billie users to 200."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-item-list",children:"Configuration item list"}),"\n",(0,r.jsx)(n.h3,{id:"max_user_connections",children:"max_user_connections"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"The maximum number of user connections, the default value is 100 In general, this parameter does not need to be changed unless the number of concurrent queries exceeds the default value.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"max_query_instances",children:"max_query_instances"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"The maximum number of instances that the user can use at a certain point in time, The default value is -1, negative number means use default_max_query_instances config.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"resource",children:"resource"}),"\n",(0,r.jsx)(n.h3,{id:"quota",children:"quota"}),"\n",(0,r.jsx)(n.h3,{id:"default_load_cluster",children:"default_load_cluster"}),"\n",(0,r.jsx)(n.h3,{id:"load_cluster",children:"load_cluster"})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return o}});var t=i(667294);let r={},s=t.createContext(r);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);