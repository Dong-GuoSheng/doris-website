"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["443981"],{488267:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>s,toc:()=>l,frontMatter:()=>c});var t=JSON.parse('{"id":"query-acceleration/performance-tuning-overview/tuning-overview","title":"\u8C03\u4F18\u6982\u8FF0","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/performance-tuning-overview/tuning-overview.md","sourceDirName":"query-acceleration/performance-tuning-overview","slug":"/query-acceleration/performance-tuning-overview/tuning-overview","permalink":"/zh-CN/docs/dev/query-acceleration/performance-tuning-overview/tuning-overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u8C03\u4F18\u6982\u8FF0","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5217\u8F6C\u884C (Lateral View)","permalink":"/zh-CN/docs/dev/query-data/lateral-view"},"next":{"title":"\u8BCA\u65AD\u5DE5\u5177","permalink":"/zh-CN/docs/dev/query-acceleration/performance-tuning-overview/diagnostic-tools"}}'),i=r("785893"),o=r("250065");let c={title:"\u8C03\u4F18\u6982\u8FF0",language:"zh-CN"},a=void 0,s={},l=[];function u(e){let n={a:"a",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u67E5\u8BE2\u6027\u80FD\u8C03\u4F18\u662F\u4E00\u4E2A\u7CFB\u7EDF\u5DE5\u7A0B\uFF0C\u9700\u8981\u4ECE\u591A\u5C42\u6B21\u3001\u591A\u7EF4\u5EA6\u5BF9\u6570\u636E\u5E93\u7CFB\u7EDF\u8FDB\u884C\u8C03\u4F18\u3002\u4EE5\u4E0B\u662F\u8C03\u4F18\u6D41\u7A0B\u548C\u65B9\u6CD5\u8BBA\u6982\u8FF0\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u9996\u5148\uFF0C\u4E1A\u52A1\u4EBA\u5458\u548C\u6570\u636E\u5E93\u7BA1\u7406\u5458\uFF08DBA\uFF09\u9700\u8981\u5BF9\u6240\u4F7F\u7528\u7684\u6570\u636E\u5E93\u7CFB\u7EDF\u6709\u5168\u9762\u7684\u4E86\u89E3\uFF0C\u5305\u62EC\u4E1A\u52A1\u7CFB\u7EDF\u4F7F\u7528\u7684\u786C\u4EF6\u3001\u96C6\u7FA4\u7684\u89C4\u6A21\u3001\u4F7F\u7528\u7684\u6570\u636E\u5E93\u8F6F\u4EF6\u7248\u672C\uFF0C\u4EE5\u53CA\u5177\u4F53\u8F6F\u4EF6\u7248\u672C\u6240\u63D0\u4F9B\u7684\u7279\u6027\u7B49\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5176\u6B21\uFF0C\u4E00\u4E2A\u597D\u7528\u7684\u6027\u80FD\u8BCA\u65AD\u5DE5\u5177\u662F\u5B9A\u4F4D\u6027\u80FD\u95EE\u9898\u7684\u5FC5\u8981\u524D\u63D0\u3002\u53EA\u6709\u9AD8\u6548\u5FEB\u901F\u5730\u5B9A\u4F4D\u5230\u95EE\u9898 SQL \u6216\u8005\u6162 SQL\uFF0C\u624D\u80FD\u8FDB\u884C\u540E\u7EED\u7684\u5177\u4F53\u6027\u80FD\u8C03\u4F18\u6D41\u7A0B\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u8FDB\u5165\u6027\u80FD\u8C03\u4F18\u73AF\u8282\u4E4B\u540E\uFF0C\u4E00\u4E9B\u5E38\u7528\u7684\u6027\u80FD\u5206\u6790\u5DE5\u5177\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u3002\u8FD9\u5176\u4E2D\u5305\u62EC\u5F53\u524D\u8FD0\u884C\u6570\u636E\u5E93\u7CFB\u7EDF\u81EA\u5E26\u7684\u7279\u6709\u5DE5\u5177\uFF0C\u4EE5\u53CA\u64CD\u4F5C\u7CFB\u7EDF\u5C42\u9762\u7684\u901A\u7528\u5DE5\u5177\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6709\u4E86\u4E0A\u8FF0\u5DE5\u5177\u4E4B\u540E\uFF0C\u4F7F\u7528\u7279\u6709\u5DE5\u5177\u53EF\u4EE5\u83B7\u53D6 SQL \u8FD0\u884C\u5728\u5F53\u524D\u6570\u636E\u5E93\u7CFB\u7EDF\u4E0A\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5E2E\u52A9\u5B9A\u4F4D\u6027\u80FD\u74F6\u9888\uFF0C\u540C\u65F6\uFF0C\u901A\u7528\u5DE5\u5177\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u8F85\u52A9\u5206\u6790\u624B\u6BB5\u5E2E\u52A9\u5B9A\u4F4D\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u6027\u80FD\u8C03\u4F18\u9700\u8981\u4ECE\u5168\u5C40\u89C6\u89D2\u6765\u8BC4\u4F30\u5F53\u524D\u7CFB\u7EDF\u7684\u6027\u80FD\u72B6\u51B5\u3002\u9996\u5148\u9700\u8981\u5B9A\u4F4D\u5B58\u5728\u6027\u80FD\u95EE\u9898\u7684\u4E1A\u52A1 SQL\uFF0C\u7136\u540E\u8FD0\u7528\u5206\u6790\u5DE5\u5177\u53D1\u73B0\u6027\u80FD\u74F6\u9888\uFF0C\u6700\u540E\u5B9E\u65BD\u5177\u4F53\u7684\u8C03\u4F18\u64CD\u4F5C\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u57FA\u4E8E\u4E0A\u8FF0\u8C03\u4F18\u6D41\u7A0B\u548C\u65B9\u6CD5\u8BBA\uFF0CApache Doris \u5728\u4E0A\u8FF0\u5404\u4E2A\u5C42\u9762\u90FD\u63D0\u4F9B\u4E86\u76F8\u5E94\u7684\u5DE5\u5177\u3002\u4E0B\u6587\u5C06\u5206\u522B\u5BF9\u6027\u80FD",(0,i.jsx)(n.a,{href:"/zh-CN/docs/dev/query-acceleration/performance-tuning-overview/diagnostic-tools",children:"\u8BCA\u65AD\u5DE5\u5177"}),"\u3001",(0,i.jsx)(n.a,{href:"/zh-CN/docs/dev/query-acceleration/performance-tuning-overview/analysis-tools",children:"\u5206\u6790\u5DE5\u5177"}),"\u3001",(0,i.jsx)(n.a,{href:"/zh-CN/docs/dev/query-acceleration/performance-tuning-overview/tuning-process",children:"\u8C03\u4F18\u6D41\u7A0B"}),"\u4E09\u4E2A\u65B9\u9762\u8FDB\u884C\u4ECB\u7ECD\u3002"]})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return c}});var t=r(667294);let i={},o=t.createContext(i);function c(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);