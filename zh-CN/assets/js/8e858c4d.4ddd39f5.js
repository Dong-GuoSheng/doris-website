"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["913912"],{56725:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>l});var i=JSON.parse('{"id":"table-design/data-model/overview","title":"\u6A21\u578B\u6982\u8FF0","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/table-design/data-model/overview.md","sourceDirName":"table-design/data-model","slug":"/table-design/data-model/overview","permalink":"/zh-CN/docs/dev/table-design/data-model/overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u6A21\u578B\u6982\u8FF0","language":"zh-CN"},"sidebar":"docs","previous":{"title":"N-Gram \u7D22\u5F15","permalink":"/zh-CN/docs/dev/table-design/index/ngram-bloomfilter-index"},"next":{"title":"\u660E\u7EC6\u6A21\u578B","permalink":"/zh-CN/docs/dev/table-design/data-model/duplicate"}}'),r=t("785893"),o=t("250065");let l={title:"\u6A21\u578B\u6982\u8FF0",language:"zh-CN"},s=void 0,d={},a=[];function c(e){let n={code:"code",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u672C\u6587\u6863\u4E3B\u8981\u4ECE\u903B\u8F91\u5C42\u9762\uFF0C\u63CF\u8FF0 Doris \u7684\u6570\u636E\u6A21\u578B\uFF0C\u4EE5\u5E2E\u52A9\u7528\u6237\u66F4\u597D\u7684\u4F7F\u7528 Doris \u5E94\u5BF9\u4E0D\u540C\u7684\u4E1A\u52A1\u573A\u666F\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 Doris \u4E2D\uFF0C\u6570\u636E\u4EE5\u8868\uFF08Table\uFF09\u7684\u5F62\u5F0F\u8FDB\u884C\u903B\u8F91\u4E0A\u7684\u63CF\u8FF0\u3002\u4E00\u5F20\u8868\u5305\u62EC\u884C\uFF08Row\uFF09\u548C\u5217\uFF08Column\uFF09\u3002Row \u5373\u7528\u6237\u7684\u4E00\u884C\u6570\u636E\uFF0CColumn \u7528\u4E8E\u63CF\u8FF0\u4E00\u884C\u6570\u636E\u4E2D\u4E0D\u540C\u7684\u5B57\u6BB5\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["Column \u53EF\u4EE5\u5206\u4E3A\u4E24\u5927\u7C7B\uFF1AKey \u548C Value\u3002\u4ECE\u4E1A\u52A1\u89D2\u5EA6\u770B\uFF0CKey \u548C Value \u53EF\u4EE5\u5206\u522B\u5BF9\u5E94\u7EF4\u5EA6\u5217\u548C\u6307\u6807\u5217\u3002Doris \u7684 Key \u5217\u662F\u5EFA\u8868\u8BED\u53E5\u4E2D\u6307\u5B9A\u7684\u5217\uFF0C\u5EFA\u8868\u8BED\u53E5\u4E2D\u7684\u5173\u952E\u5B57 ",(0,r.jsx)(n.code,{children:"unique key"})," \u6216 ",(0,r.jsx)(n.code,{children:"aggregate key"})," \u6216 ",(0,r.jsx)(n.code,{children:"duplicate key"})," \u540E\u9762\u7684\u5217\u5C31\u662F Key \u5217\uFF0C\u9664\u4E86 Key \u5217\u5269\u4E0B\u7684\u5C31\u662F Value \u5217\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"Doris \u7684\u6570\u636E\u6A21\u578B\u5206\u4E3A 3 \u7C7B\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u660E\u7EC6\u6A21\u578B\uFF08Duplicate Key Model\uFF09\uFF1A\u5141\u8BB8\u6307\u5B9A\u7684 Key \u5217\u91CD\u590D\uFF0CDoirs \u5B58\u50A8\u5C42\u4FDD\u7559\u6240\u6709\u5199\u5165\u7684\u6570\u636E\uFF0C\u9002\u7528\u4E8E\u5FC5\u987B\u4FDD\u7559\u6240\u6709\u539F\u59CB\u6570\u636E\u8BB0\u5F55\u7684\u60C5\u51B5\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4E3B\u952E\u6A21\u578B\uFF08Unique Key Model\uFF09\uFF1A\u6BCF\u4E00\u884C\u7684 Key \u503C\u552F\u4E00\uFF0C\u53EF\u786E\u4FDD\u7ED9\u5B9A\u7684 Key \u5217\u4E0D\u4F1A\u5B58\u5728\u91CD\u590D\u884C\uFF0CDoris \u5B58\u50A8\u5C42\u5BF9\u6BCF\u4E2A key \u53EA\u4FDD\u7559\u6700\u65B0\u5199\u5165\u7684\u6570\u636E\uFF0C\u9002\u7528\u4E8E\u6570\u636E\u66F4\u65B0\u7684\u60C5\u51B5\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u805A\u5408\u6A21\u578B\uFF08Aggregate Key Model\uFF09\uFF1A\u53EF\u6839\u636E Key \u5217\u805A\u5408\u6570\u636E\uFF0CDoris \u5B58\u50A8\u5C42\u4FDD\u7559\u805A\u5408\u540E\u7684\u6570\u636E\uFF0C\u4ECE\u800C\u53EF\u4EE5\u51CF\u5C11\u5B58\u50A8\u7A7A\u95F4\u548C\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\uFF1B\u901A\u5E38\u7528\u4E8E\u9700\u8981\u6C47\u603B\u6216\u805A\u5408\u4FE1\u606F\uFF08\u5982\u603B\u6570\u6216\u5E73\u5747\u503C\uFF09\u7684\u60C5\u51B5\u3002"}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var i=t(667294);let r={},o=i.createContext(r);function l(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);