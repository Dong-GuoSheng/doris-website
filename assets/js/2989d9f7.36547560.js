"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["289378"],{763982:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.8","title":"Release 2.0.8","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/releasenotes/v2.0/release-2.0.8.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.8","permalink":"/docs/releasenotes/v2.0/release-2.0.8","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Release 2.0.8","language":"en"},"sidebar":"docs","previous":{"title":"Release 2.0.9","permalink":"/docs/releasenotes/v2.0/release-2.0.9"},"next":{"title":"Release 2.0.7","permalink":"/docs/releasenotes/v2.0/release-2.0.7"}}'),t=s("785893"),r=s("250065");let a={title:"Release 2.0.8",language:"en"},l=void 0,o={},c=[{value:"1 Behavior change",id:"1-behavior-change",level:2},{value:"2 New features",id:"2-new-features",level:2},{value:"3 Improvement and optimizations",id:"3-improvement-and-optimizations",level:2},{value:"4 Credits",id:"4-credits",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Thanks to our community users and developers, about 65 improvements and bug fixes have been made in Doris 2.0.8 version."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Quick Download"})," : ",(0,t.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GitHub"})," : ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-behavior-change",children:"1 Behavior change"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ADMIN SHOW"})," statement can not be executed with high version of MySQL 8.x jdbc driver. So rename these statement, remove the ",(0,t.jsx)(n.code,{children:"ADMIN"})," keywords."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/29492",children:"https://github.com/apache/doris/pull/29492"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ADMIN SHOW CONFIG -> SHOW CONFIG\nADMIN SHOW REPLICA -> SHOW REPLICA\nADMIN DIAGNOSE TABLET -> SHOW TABLET DIAGNOSIS\nADMIN SHOW TABLET -> SHOW TABLET\n"})}),"\n",(0,t.jsx)(n.h2,{id:"2-new-features",children:"2 New features"}),"\n",(0,t.jsx)(n.p,{children:"N/A"}),"\n",(0,t.jsx)(n.h2,{id:"3-improvement-and-optimizations",children:"3 Improvement and optimizations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make Inverted Index work with TopN opt in Nereids"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Limit the max string length to 1024 while collecting column stats to control BE memory usage"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"JDBC Catalog close when JDBC client is not empty"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Accept all Iceberg database and do not check the name format of database"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Refresh external table's rowcount async to avoid cache miss and unstable query plan"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Simplify the isSplitable method of hive external table to avoid too many hadoop metrics"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["See the complete list of improvements and bug fixes on ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/compare/2.0.7...2.0.8",children:"GitHub"})," ."]}),"\n",(0,t.jsx)(n.h2,{id:"4-credits",children:"4 Credits"}),"\n",(0,t.jsx)(n.p,{children:"Thanks all who contribute to this release:"}),"\n",(0,t.jsx)(n.p,{children:"924060929,  AcKing-Sam, amorynan, AshinGau, BePPPower, BiteTheDDDDt, ByteYue, cambyzju,  dongsilun, eldenmoon, feiniaofeiafei, gnehil, Jibing-Li, liaoxin01, luwei16,  morningman, morrySnow, mrhhsg, Mryange, nextdreamblue, platoneko,  starocean999, SWJTU-ZhangLei, wuwenchi, xiaokang, xinyiZzz, Yukang-Lian,  Yulei-Yang, zclllyybb, zddr, zhangstar333, zhiqiang-hhhh, ziyanTOP, zy-kkk,  zzzxl1993"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var i=s(667294);let t={},r=i.createContext(t);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);