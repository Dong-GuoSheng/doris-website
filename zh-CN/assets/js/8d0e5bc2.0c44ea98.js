"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["395129"],{213191:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>t});var r=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.10","title":"Release 2.0.10","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/releasenotes/v2.0/release-2.0.10.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.10","permalink":"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.10","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Release 2.0.10","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Release 2.0.11","permalink":"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.11"},"next":{"title":"Release 2.0.9","permalink":"/zh-CN/docs/dev/releasenotes/v2.0/release-2.0.9"}}'),l=s("785893"),i=s("250065");let t={title:"Release 2.0.10",language:"zh-CN"},a=void 0,o={},c=[{value:"\u6539\u8FDB\u548C\u4F18\u5316",id:"\u6539\u8FDB\u548C\u4F18\u5316",level:2},{value:"\u81F4\u8C22",id:"\u81F4\u8C22",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["\u4EB2\u7231\u7684\u793E\u533A\u5C0F\u4F19\u4F34\u4EEC\uFF0C",(0,l.jsxs)(n.strong,{children:[(0,l.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"Apache Doris 2.0.10"})," \u7248\u672C\u5DF2\u4E8E 2024 \u5E74 5 \u6708 16 \u65E5\u6B63\u5F0F\u4E0E\u5927\u5BB6\u89C1\u9762"]}),"\uFF0C\u8BE5\u7248\u672C\u63D0\u4EA4\u4E86 83 \u4E2A\u6539\u8FDB\u9879\u4EE5\u53CA\u95EE\u9898\u4FEE\u590D\uFF0C\u8FDB\u4E00\u6B65\u63D0\u5347\u4E86\u7CFB\u7EDF\u7684\u6027\u80FD\u53CA\u7A33\u5B9A\u6027\uFF0C\u6B22\u8FCE\u5927\u5BB6\u4E0B\u8F7D\u4F53\u9A8C\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u5B98\u7F51\u4E0B\u8F7D\uFF1A"})," ",(0,l.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"GitHub \u4E0B\u8F7D\uFF1A"})," ",(0,l.jsx)(n.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u6539\u8FDB\u548C\u4F18\u5316",children:"\u6539\u8FDB\u548C\u4F18\u5316"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u589E\u52A0\u4E86",(0,l.jsx)(n.code,{children:"read_only"}),"\u548C",(0,l.jsx)(n.code,{children:"super_read_only"}),"\u53D8\u91CF\u4EE5\u4FDD\u6301\u548C MySQL \u517C\u5BB9"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4EC5\u5728 IO_ERROR \u7684\u9519\u8BEF\u624D\u628A\u6570\u636E\u76EE\u5F55\u52A0\u5165 Broken List\uFF0C\u9632\u6B62 fd \u8D85\u9650\u7B49\u9519\u8BEF\u5BFC\u81F4\u8BEF\u52A0\u5165"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u57FA\u4E8E\u5916\u8868 CTAS \u521B\u5EFA\u65B0\u8868\u65F6\uFF0C\u628A ",(0,l.jsx)(n.code,{children:"VARCHAR"})," \u7C7B\u578B\u8F6C\u6210 ",(0,l.jsx)(n.code,{children:"STRING"})," \u7C7B\u578B"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u652F\u6301\u628A Paimon \u7684 ",(0,l.jsx)(n.code,{children:"ROW"})," \u7C7B\u578B\u6620\u5C04\u6210 Doris \u7684 ",(0,l.jsx)(n.code,{children:"STRUCT"})," \u7C7B\u578B"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u521B\u5EFA Tablet \u9009\u62E9\u6570\u636E\u76D8\u65F6\uFF0C\u5141\u8BB8\u5B58\u5728\u5C11\u91CF\u7684\u503E\u659C"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5BF9 ",(0,l.jsx)(n.code,{children:"set replica drop"})," \u547D\u4EE4\u8BB0\u5F55 Editlog\uFF0C\u4EE5\u9632\u6B62\u5728 Follower \u8282\u70B9\u6267\u884C\u547D\u4EE4\u540E\uFF0C\u5176\u72B6\u6001\u663E\u793A\u4E0D\u6B63\u786E"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Schema Change \u5185\u5B58\u81EA\u9002\u5E94\u907F\u514D\u5185\u5B58\u8D85\u9650"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5012\u6392\u7D22\u5F15\u4E2D Unicode \u5206\u8BCD\u5668\u53EF\u4EE5\u914D\u7F6E\u4E0D\u4F7F\u7528\u505C\u7528\u8BCD"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u81F4\u8C22",children:"\u81F4\u8C22"}),"\n",(0,l.jsx)(n.p,{children:"@airborne12, @BePPPower, @ByteYue, @CalvinKirs, @cambyzju, @csun5285, @dataroaring, @deardeng, @DongLiang-0, @eldenmoon, @felixwluo, @HappenLee, @hubgeter, @jackwener, @kaijchen, @kaka11chen, @Lchangliang, @liaoxin01, @LiBinfeng-01, @luennng, @morningman, @morrySnow, @Mryange, @nextdreamblue, @qidaye, @starocean999, @suxiaogang223, @SWJTU-ZhangLei, @w41ter, @xiaokang, @xy720, @yujun777, @Yukang-Lian, @zhangstar333, @zxealous, @zy-kkk, @zzzxl1993"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var r=s(667294);let l={},i=r.createContext(l);function t(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);