"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["525519"],{117357:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD","title":"SET LDAP_ADMIN_PASSWORD","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD","permalink":"/docs/sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SET LDAP_ADMIN_PASSWORD","language":"en"},"sidebar":"docs","previous":{"title":"REFRESH LDAP","permalink":"/docs/sql-manual/sql-statements/account-management/REFRESH-LDAP"},"next":{"title":"SET PROPERTY","permalink":"/docs/sql-manual/sql-statements/account-management/SET-PROPERTY"}}'),a=t("785893"),r=t("250065");let i={title:"SET LDAP_ADMIN_PASSWORD",language:"en"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"SET LDAP_ADMIN_PASSWORD"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"  SET LDAP_ADMIN_PASSWORD = PASSWORD('plain password')\n"})}),"\n",(0,a.jsx)(n.p,{children:"The SET LDAP_ADMIN_PASSWORD command is used to set the LDAP administrator password. When using LDAP authentication, doris needs to use the administrator account and password to query the LDAP service for login user information."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Set the LDAP administrator password"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SET LDAP_ADMIN_PASSWORD = PASSWORD('123456')\n"})}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:" LDAP, PASSWORD, LDAP_ADMIN_PASSWORD\n"})}),"\n",(0,a.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let a={},r=s.createContext(a);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);