"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["406669"],{881657:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"releasenotes/v1.2/release-1.2.8","title":"Release 1.2.8","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/releasenotes/v1.2/release-1.2.8.md","sourceDirName":"releasenotes/v1.2","slug":"/releasenotes/v1.2/release-1.2.8","permalink":"/zh-CN/docs/2.0/releasenotes/v1.2/release-1.2.8","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Release 1.2.8","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Release 2.0.0","permalink":"/zh-CN/docs/2.0/releasenotes/v2.0/release-2.0.0"},"next":{"title":"Release 1.2.7","permalink":"/zh-CN/docs/2.0/releasenotes/v1.2/release-1.2.7"}}'),t=s("785893"),l=s("250065");let i={title:"Release 1.2.8",language:"zh-CN"},o=void 0,a={},c=[{value:"\u6539\u8FDB\u548C\u4F18\u5316",id:"\u6539\u8FDB\u548C\u4F18\u5316",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u4EB2\u7231\u7684\u793E\u533A\u5C0F\u4F19\u4F34\u4EEC\uFF0C",(0,t.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"Apache Doris 1.2.8"})," \u7248\u672C\u5DF2\u4E8E 2024 \u5E74 3 \u6708 09 \u65E5\u6B63\u5F0F\u4E0E\u5927\u5BB6\u89C1\u9762\u3002\u8BE5\u7248\u672C\u5BF9\u591A\u4E2A\u529F\u80FD\u8FDB\u884C\u4E86\u66F4\u65B0\u4F18\u5316\uFF0C\u65E8\u5728\u66F4\u597D\u5730\u6EE1\u8DB3\u7528\u6237\u7684\u9700\u6C42, \u6B22\u8FCE\u5927\u5BB6\u4E0B\u8F7D\u4F53\u9A8C\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u5B98\u7F51\u4E0B\u8F7D\uFF1A"})," ",(0,t.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GitHub \u4E0B\u8F7D\uFF1A"})," ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6539\u8FDB\u548C\u4F18\u5316",children:"\u6539\u8FDB\u548C\u4F18\u5316"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4FEE\u590D\u82E5\u5E72\u67E5\u8BE2\u6267\u884C\u7684\u95EE\u9898"}),"\n",(0,t.jsx)(n.li,{children:"\u4FEE\u590D\u82E5\u5E72 Spark Load \u76F8\u5173\u7684\u95EE\u9898"}),"\n",(0,t.jsx)(n.li,{children:"\u4FEE\u590D\u82E5\u5E72 Parquet/ORC \u6587\u4EF6\u8BFB\u53D6\u7684\u95EE\u9898\u3002"}),"\n",(0,t.jsx)(n.li,{children:'\u4FEE\u590D Broker \u8FDB\u884C\u56E0\u4E3A "FileSystem closed" \u9519\u8BEF\u5BFC\u81F4\u8FD0\u884C\u5931\u8D25\u7684\u95EE\u9898\u3002'}),"\n",(0,t.jsx)(n.li,{children:"\u4FEE\u590D\u82E5\u5E72 Broker Load \u76F8\u5173\u7684\u95EE\u9898\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4FEE\u590D\u82E5\u5E72 CTAS \u64CD\u4F5C\u76F8\u5173\u7684\u95EE\u9898\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4FEE\u590D\u82E5\u5E72\u5907\u4EFD\u6062\u590D\u529F\u80FD\u76F8\u5173\u7684\u95EE\u9898\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4FEE\u590D\u82E5\u5E72\u5BFC\u51FA\uFF08Export/Outfile\uFF09\u76F8\u5173\u7684\u95EE\u9898\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,t.jsx)(n.code,{children:"replayEraseTable"})," \u65B9\u6CD5\u5BFC\u81F4 FE \u65E0\u6CD5\u542F\u52A8\u7684\u95EE\u9898\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u4F18\u5316 Iceberg Catalog \u5143\u6570\u636E\u7F13\u5B58\u7684\u6027\u80FD\u3002"}),"\n",(0,t.jsx)(n.li,{children:"Audit Log \u4E2D\u65B0\u589E Catalog \u5217\u3002"}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var r=s(667294);let t={},l=r.createContext(t);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);