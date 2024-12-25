"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["304955"],{340665:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>t,default:()=>a,assets:()=>d,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"admin-manual/cluster-management/elastic-expansion","title":"\u5F39\u6027\u6269\u7F29\u5BB9","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/cluster-management/elastic-expansion.md","sourceDirName":"admin-manual/cluster-management","slug":"/admin-manual/cluster-management/elastic-expansion","permalink":"/zh-CN/docs/dev/admin-manual/cluster-management/elastic-expansion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5F39\u6027\u6269\u7F29\u5BB9","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u96C6\u7FA4\u5347\u7EA7","permalink":"/zh-CN/docs/dev/admin-manual/cluster-management/upgrade"},"next":{"title":"\u8D1F\u8F7D\u5747\u8861","permalink":"/zh-CN/docs/dev/admin-manual/cluster-management/load-balancing"}}'),l=r("785893"),i=r("250065");let o={title:"\u5F39\u6027\u6269\u7F29\u5BB9",language:"zh-CN"},t=void 0,d={},c=[{value:"FE \u6269\u5BB9\u548C\u7F29\u5BB9",id:"fe-\u6269\u5BB9\u548C\u7F29\u5BB9",level:2},{value:"\u589E\u52A0 FE \u8282\u70B9",id:"\u589E\u52A0-fe-\u8282\u70B9",level:3},{value:"\u5220\u9664 FE \u8282\u70B9",id:"\u5220\u9664-fe-\u8282\u70B9",level:3},{value:"BE \u6269\u5BB9\u548C\u7F29\u5BB9",id:"be-\u6269\u5BB9\u548C\u7F29\u5BB9",level:2},{value:"\u589E\u52A0 BE \u8282\u70B9",id:"\u589E\u52A0-be-\u8282\u70B9",level:3},{value:"\u5220\u9664 BE \u8282\u70B9",id:"\u5220\u9664-be-\u8282\u70B9",level:3},{value:"Broker \u6269\u5BB9\u7F29\u5BB9",id:"broker-\u6269\u5BB9\u7F29\u5BB9",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Doris \u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u6269\u5BB9\u548C\u7F29\u5BB9 FE\u3001BE\u3001Broker \u5B9E\u4F8B\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"fe-\u6269\u5BB9\u548C\u7F29\u5BB9",children:"FE \u6269\u5BB9\u548C\u7F29\u5BB9"}),"\n",(0,l.jsx)(n.p,{children:"\u53EF\u4EE5\u901A\u8FC7\u5C06 FE \u6269\u5BB9\u81F3 3 \u4E2A\u4EE5\u4E0A\u8282\u70B9\u6765\u5B9E\u73B0 FE \u7684\u9AD8\u53EF\u7528\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 MySQL \u5BA2\u6237\u7AEF\u767B\u9646 Master FE\u3002\u901A\u8FC7\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"SHOW PROC '/frontends';"})}),"\n",(0,l.jsx)(n.p,{children:"\u6765\u67E5\u770B\u5F53\u524D FE \u7684\u8282\u70B9\u60C5\u51B5\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u4E5F\u53EF\u4EE5\u901A\u8FC7\u524D\u7AEF\u9875\u9762\u8FDE\u63A5\uFF1A",(0,l.jsx)(n.code,{children:"http://fe_hostname:fe_http_port/frontend"})," \u6216\u8005 ",(0,l.jsx)(n.code,{children:"http://fe_hostname:fe_http_port/system?path=//frontends"})," \u6765\u67E5\u770B FE \u8282\u70B9\u7684\u60C5\u51B5\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u4E0A\u65B9\u5F0F\uFF0C\u90FD\u9700\u8981 Doris \u7684 root \u7528\u6237\u6743\u9650\u3002"}),"\n",(0,l.jsx)(n.p,{children:"FE \u8282\u70B9\u7684\u6269\u5BB9\u548C\u7F29\u5BB9\u8FC7\u7A0B\uFF0C\u4E0D\u5F71\u54CD\u5F53\u524D\u7CFB\u7EDF\u8FD0\u884C\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u589E\u52A0-fe-\u8282\u70B9",children:"\u589E\u52A0 FE \u8282\u70B9"}),"\n",(0,l.jsx)(n.p,{children:"FE \u5206\u4E3A Follower \u548C Observer \u4E24\u79CD\u89D2\u8272\uFF0C\u5176\u4E2D Follower \u89D2\u8272\u4F1A\u9009\u4E3E\u51FA\u4E00\u4E2A Follower \u8282\u70B9\u4F5C\u4E3A Master\u3002\u9ED8\u8BA4\u4E00\u4E2A\u96C6\u7FA4\uFF0C\u53EA\u80FD\u6709\u4E00\u4E2A Master \u72B6\u6001\u7684 Follower \u89D2\u8272\uFF0C\u53EF\u4EE5\u6709\u591A\u4E2A Follower \u548C Observer\uFF0C\u540C\u65F6\u9700\u4FDD\u8BC1 Follower \u89D2\u8272\u4E3A\u5947\u6570\u4E2A\u3002\u5176\u4E2D\u6240\u6709 Follower \u89D2\u8272\u7EC4\u6210\u4E00\u4E2A\u9009\u4E3E\u7EC4\uFF0C\u5982\u679C Master \u72B6\u6001\u7684 Follower \u5B95\u673A\uFF0C\u5219\u5269\u4E0B\u7684 Follower \u4F1A\u81EA\u52A8\u9009\u51FA\u65B0\u7684 Master\uFF0C\u4FDD\u8BC1\u5199\u5165\u9AD8\u53EF\u7528\u3002Observer \u540C\u6B65 Master \u7684\u6570\u636E\uFF0C\u4F46\u662F\u4E0D\u53C2\u52A0\u9009\u4E3E\u3002\u5982\u679C\u53EA\u90E8\u7F72\u4E00\u4E2A FE\uFF0C\u5219 FE \u9ED8\u8BA4\u5C31\u662F Master\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7B2C\u4E00\u4E2A\u542F\u52A8\u7684 FE \u81EA\u52A8\u6210\u4E3A Master\u3002\u5728\u6B64\u57FA\u7840\u4E0A\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u82E5\u5E72 Follower \u548C Observer\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u914D\u7F6E\u53CA\u542F\u52A8 Follower \u6216 Observer"})}),"\n",(0,l.jsx)(n.p,{children:"\u8FD9\u91CC Follower \u548C Observer \u7684\u914D\u7F6E\u540C Master \u7684\u914D\u7F6E\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u9996\u5148\u7B2C\u4E00\u6B21\u542F\u52A8\u65F6\uFF0C\u9700\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"./bin/start_fe.sh --helper leader_fe_host:edit_log_port --daemon"})}),"\n",(0,l.jsx)(n.p,{children:"\u5176\u4E2D leader_fe_host \u4E3A Master \u6240\u5728\u8282\u70B9 ip, edit_log_port \u5728 Master \u7684\u914D\u7F6E\u6587\u4EF6 fe.conf \u4E2D\u3002--helper \u53C2\u6570\u4EC5\u5728 follower \u548C observer \u7B2C\u4E00\u6B21\u542F\u52A8\u65F6\u624D\u9700\u8981\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5C06 Follower \u6216 Observer \u52A0\u5165\u5230\u96C6\u7FA4"})}),"\n",(0,l.jsx)(n.p,{children:"\u6DFB\u52A0 Follower \u6216 Observer\u3002\u4F7F\u7528 mysql-client \u8FDE\u63A5\u5230\u5DF2\u542F\u52A8\u7684 FE\uFF0C\u5E76\u6267\u884C\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'ALTER SYSTEM ADD FOLLOWER "follower_host:edit_log_port";'})}),"\n",(0,l.jsx)(n.p,{children:"\u6216"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'ALTER SYSTEM ADD OBSERVER "observer_host:edit_log_port";'})}),"\n",(0,l.jsx)(n.p,{children:"\u5176\u4E2D follower_host \u548C observer_host \u4E3A Follower \u6216 Observer \u6240\u5728\u8282\u70B9 ip\uFF0Cedit_log_port \u5728\u5176\u914D\u7F6E\u6587\u4EF6 fe.conf \u4E2D\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u67E5\u770B Follower \u6216 Observer \u8FD0\u884C\u72B6\u6001\u3002\u4F7F\u7528 mysql-client \u8FDE\u63A5\u5230\u4EFB\u4E00\u5DF2\u542F\u52A8\u7684 FE\uFF0C\u5E76\u6267\u884C\uFF1ASHOW PROC '/frontends'; \u53EF\u4EE5\u67E5\u770B\u5F53\u524D\u5DF2\u52A0\u5165\u96C6\u7FA4\u7684 FE \u53CA\u5176\u5BF9\u5E94\u89D2\u8272\u3002"}),"\n",(0,l.jsxs)(n.admonition,{type:"caution",children:[(0,l.jsx)(n.p,{children:"FE \u6269\u5BB9\u6CE8\u610F\u4E8B\u9879\uFF1A"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Follower FE\uFF08\u5305\u62EC Master\uFF09\u7684\u6570\u91CF\u5FC5\u987B\u4E3A\u5947\u6570\uFF0C\u5EFA\u8BAE\u6700\u591A\u90E8\u7F72 3 \u4E2A\u7EC4\u6210\u9AD8\u53EF\u7528\uFF08HA\uFF09\u6A21\u5F0F\u5373\u53EF\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5F53 FE \u5904\u4E8E\u9AD8\u53EF\u7528\u90E8\u7F72\u65F6\uFF081 \u4E2A Master\uFF0C2 \u4E2A Follower\uFF09\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u901A\u8FC7\u589E\u52A0 Observer FE \u6765\u6269\u5C55 FE \u7684\u8BFB\u670D\u52A1\u80FD\u529B\u3002\u5F53\u7136\u4E5F\u53EF\u4EE5\u7EE7\u7EED\u589E\u52A0 Follower FE\uFF0C\u4F46\u51E0\u4E4E\u662F\u4E0D\u5FC5\u8981\u7684\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u901A\u5E38\u4E00\u4E2A FE \u8282\u70B9\u53EF\u4EE5\u5E94\u5BF9 10-20 \u53F0 BE \u8282\u70B9\u3002\u5EFA\u8BAE\u603B\u7684 FE \u8282\u70B9\u6570\u91CF\u5728 10 \u4E2A\u4EE5\u4E0B\u3002\u800C\u901A\u5E38 3 \u4E2A\u5373\u53EF\u6EE1\u8DB3\u7EDD\u5927\u90E8\u5206\u9700\u6C42\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"helper \u4E0D\u80FD\u6307\u5411 FE \u81EA\u8EAB\uFF0C\u5FC5\u987B\u6307\u5411\u4E00\u4E2A\u6216\u591A\u4E2A\u5DF2\u5B58\u5728\u5E76\u4E14\u6B63\u5E38\u8FD0\u884C\u4E2D\u7684 Master/Follower FE\u3002"}),"\n"]}),"\n"]})]}),"\n",(0,l.jsx)(n.h3,{id:"\u5220\u9664-fe-\u8282\u70B9",children:"\u5220\u9664 FE \u8282\u70B9"}),"\n",(0,l.jsx)(n.p,{children:"\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5220\u9664\u5BF9\u5E94\u7684 FE \u8282\u70B9\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'ALTER SYSTEM DROP FOLLOWER[OBSERVER] "fe_host:edit_log_port";'})}),"\n",(0,l.jsxs)(n.admonition,{type:"caution",children:[(0,l.jsx)(n.p,{children:"FE \u7F29\u5BB9\u6CE8\u610F\u4E8B\u9879\uFF1A"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5220\u9664 Follower FE \u65F6\uFF0C\u786E\u4FDD\u6700\u7EC8\u5269\u4F59\u7684 Follower\uFF08\u5305\u62EC Master\uFF09\u8282\u70B9\u4E3A\u5947\u6570\u3002"}),"\n"]})]}),"\n",(0,l.jsx)(n.h2,{id:"be-\u6269\u5BB9\u548C\u7F29\u5BB9",children:"BE \u6269\u5BB9\u548C\u7F29\u5BB9"}),"\n",(0,l.jsx)(n.p,{children:"\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 mysql-client \u767B\u9646 Master FE\u3002\u901A\u8FC7\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"SHOW PROC '/backends';"})}),"\n",(0,l.jsx)(n.p,{children:"\u6765\u67E5\u770B\u5F53\u524D BE \u7684\u8282\u70B9\u60C5\u51B5\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u4E5F\u53EF\u4EE5\u901A\u8FC7\u524D\u7AEF\u9875\u9762\u8FDE\u63A5\uFF1A",(0,l.jsx)(n.code,{children:"http://fe_hostname:fe_http_port/backend"})," \u6216\u8005 ",(0,l.jsx)(n.code,{children:"http://fe_hostname:fe_http_port/system?path=//backends"})," \u6765\u67E5\u770B BE \u8282\u70B9\u7684\u60C5\u51B5\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u4E0A\u65B9\u5F0F\uFF0C\u90FD\u9700\u8981 Doris \u7684 root \u7528\u6237\u6743\u9650\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["BE \u8282\u70B9\u7684\u6269\u5BB9\u548C\u7F29\u5BB9\u8FC7\u7A0B\uFF0C\u4E0D\u5F71\u54CD\u5F53\u524D\u7CFB\u7EDF\u8FD0\u884C\u4EE5\u53CA\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u5F71\u54CD\u5F53\u524D\u7CFB\u7EDF\u7684\u6027\u80FD\u3002\u6570\u636E\u5747\u8861\u4F1A\u81EA\u52A8\u8FDB\u884C\u3002\u6839\u636E\u96C6\u7FA4\u73B0\u6709\u6570\u636E\u91CF\u7684\u5927\u5C0F\uFF0C\u96C6\u7FA4\u4F1A\u5728\u51E0\u4E2A\u5C0F\u65F6\u5230 1 \u5929\u4E0D\u7B49\u7684\u65F6\u95F4\u5185\uFF0C\u6062\u590D\u5230\u8D1F\u8F7D\u5747\u8861\u7684\u72B6\u6001\u3002\u96C6\u7FA4\u8D1F\u8F7D\u60C5\u51B5\uFF0C\u53EF\u4EE5\u53C2\u89C1 ",(0,l.jsx)(n.a,{href:"/zh-CN/docs/dev/admin-manual/maint-monitor/tablet-repair-and-balance",children:"Tablet \u8D1F\u8F7D\u5747\u8861\u6587\u6863"}),"\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u589E\u52A0-be-\u8282\u70B9",children:"\u589E\u52A0 BE \u8282\u70B9"}),"\n",(0,l.jsxs)(n.p,{children:["BE \u8282\u70B9\u7684\u589E\u52A0\u65B9\u5F0F\u540C ",(0,l.jsx)(n.strong,{children:"BE \u90E8\u7F72"})," \u4E00\u8282\u4E2D\u7684\u65B9\u5F0F\uFF0C\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"ALTER SYSTEM ADD BACKEND"})," \u547D\u4EE4\u589E\u52A0 BE \u8282\u70B9\u3002"]}),"\n",(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsx)(n.p,{children:"BE \u6269\u5BB9\u6CE8\u610F\u4E8B\u9879\uFF1A"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"BE \u6269\u5BB9\u540E\uFF0CDoris \u4F1A\u81EA\u52A8\u6839\u636E\u8D1F\u8F7D\u60C5\u51B5\uFF0C\u8FDB\u884C\u6570\u636E\u5747\u8861\uFF0C\u671F\u95F4\u4E0D\u5F71\u54CD\u4F7F\u7528\u3002"}),"\n"]})]}),"\n",(0,l.jsx)(n.h3,{id:"\u5220\u9664-be-\u8282\u70B9",children:"\u5220\u9664 BE \u8282\u70B9"}),"\n",(0,l.jsx)(n.p,{children:"\u5220\u9664 BE \u8282\u70B9\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1ADROP \u548C DECOMMISSION"}),"\n",(0,l.jsx)(n.p,{children:"DROP \u8BED\u53E5\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'ALTER SYSTEM DROP BACKEND "be_host:be_heartbeat_service_port";'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u6CE8\u610F\uFF1ADROP BACKEND \u4F1A\u76F4\u63A5\u5220\u9664\u8BE5 BE\uFF0C\u5E76\u4E14\u5176\u4E0A\u7684\u6570\u636E\u5C06\u4E0D\u80FD\u518D\u6062\u590D\uFF01\uFF01\uFF01\u6240\u4EE5\u6211\u4EEC\u5F3A\u70C8\u4E0D\u63A8\u8350\u4F7F\u7528 DROP BACKEND \u8FD9\u79CD\u65B9\u5F0F\u5220\u9664 BE \u8282\u70B9\u3002\u5F53\u4F60\u4F7F\u7528\u8FD9\u4E2A\u8BED\u53E5\u65F6\uFF0C\u4F1A\u6709\u5BF9\u5E94\u7684\u9632\u8BEF\u64CD\u4F5C\u63D0\u793A\u3002"})}),"\n",(0,l.jsx)(n.p,{children:"DECOMMISSION \u8BED\u53E5\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'ALTER SYSTEM DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";'})}),"\n",(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsx)(n.p,{children:"DECOMMISSION \u547D\u4EE4\u8BF4\u660E\uFF1A"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8BE5\u547D\u4EE4\u7528\u4E8E\u5B89\u5168\u5220\u9664 BE \u8282\u70B9\u3002\u547D\u4EE4\u4E0B\u53D1\u540E\uFF0CDoris \u4F1A\u5C1D\u8BD5\u5C06\u8BE5 BE \u4E0A\u7684\u6570\u636E\u5411\u5176\u4ED6 BE \u8282\u70B9\u8FC1\u79FB\uFF0C\u5F53\u6240\u6709\u6570\u636E\u90FD\u8FC1\u79FB\u5B8C\u6210\u540E\uFF0CDoris \u4F1A\u81EA\u52A8\u5220\u9664\u8BE5\u8282\u70B9\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u8BE5\u547D\u4EE4\u662F\u4E00\u4E2A\u5F02\u6B65\u64CD\u4F5C\u3002\u6267\u884C\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"SHOW PROC '/backends';"})," \u770B\u5230\u8BE5 BE \u8282\u70B9\u7684 ",(0,l.jsx)(n.code,{children:"SystemDecommissioned"})," \u72B6\u6001\u4E3A true\u3002\u8868\u793A\u8BE5\u8282\u70B9\u6B63\u5728\u8FDB\u884C\u4E0B\u7EBF\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u8BE5\u547D\u4EE4",(0,l.jsx)(n.strong,{children:"\u4E0D\u4E00\u5B9A\u6267\u884C\u6210\u529F"}),"\u3002\u6BD4\u5982\u5269\u4F59 BE \u5B58\u50A8\u7A7A\u95F4\u4E0D\u8DB3\u4EE5\u5BB9\u7EB3\u4E0B\u7EBF BE \u4E0A\u7684\u6570\u636E\uFF0C\u6216\u8005\u5269\u4F59\u673A\u5668\u6570\u91CF\u4E0D\u6EE1\u8DB3\u6700\u5C0F\u526F\u672C\u6570\u65F6\uFF0C\u8BE5\u547D\u4EE4\u90FD\u65E0\u6CD5\u5B8C\u6210\uFF0C\u5E76\u4E14 BE \u4F1A\u4E00\u76F4\u5904\u4E8E ",(0,l.jsx)(n.code,{children:"SystemDecommissioned"})," \u4E3A true \u7684\u72B6\u6001\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["DECOMMISSION \u7684\u8FDB\u5EA6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"SHOW PROC '/backends';"})," \u4E2D\u7684 TabletNum \u67E5\u770B\uFF0C\u5982\u679C\u6B63\u5728\u8FDB\u884C\uFF0CTabletNum \u5C06\u4E0D\u65AD\u51CF\u5C11\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8BE5\u64CD\u4F5C\u53EF\u4EE5\u901A\u8FC7\uFF1A"}),"\n"]}),"\n"]}),(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'CANCEL DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";'})}),(0,l.jsx)(n.p,{children:"\u547D\u4EE4\u53D6\u6D88\u3002\u53D6\u6D88\u540E\uFF0C\u8BE5 BE \u4E0A\u7684\u6570\u636E\u5C06\u7EF4\u6301\u5F53\u524D\u5269\u4F59\u7684\u6570\u636E\u91CF\u3002\u540E\u7EED Doris \u91CD\u65B0\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["\u5BF9\u4E8E\u591A\u79DF\u6237\u90E8\u7F72\u73AF\u5883\u4E0B\uFF0CBE \u8282\u70B9\u7684\u6269\u5BB9\u548C\u7F29\u5BB9\uFF0C\u8BF7\u53C2\u9605 ",(0,l.jsx)(n.a,{href:"../workload-management/resource-group",children:"\u591A\u79DF\u6237\u8BBE\u8BA1\u6587\u6863"}),"\u3002"]})}),"\n",(0,l.jsx)(n.h2,{id:"broker-\u6269\u5BB9\u7F29\u5BB9",children:"Broker \u6269\u5BB9\u7F29\u5BB9"}),"\n",(0,l.jsx)(n.p,{children:"Broker \u5B9E\u4F8B\u7684\u6570\u91CF\u6CA1\u6709\u786C\u6027\u8981\u6C42\u3002\u901A\u5E38\u6BCF\u53F0\u7269\u7406\u673A\u90E8\u7F72\u4E00\u4E2A\u5373\u53EF\u3002Broker \u7684\u6DFB\u52A0\u548C\u5220\u9664\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5B8C\u6210\uFF1A"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:'ALTER SYSTEM ADD BROKER broker_name "broker_host:broker_ipc_port";'}),"\n",(0,l.jsx)(n.code,{children:'ALTER SYSTEM DROP BROKER broker_name "broker_host:broker_ipc_port";'}),"\n",(0,l.jsx)(n.code,{children:"ALTER SYSTEM DROP ALL BROKER broker_name;"})]}),"\n",(0,l.jsx)(n.p,{children:"Broker \u662F\u65E0\u72B6\u6001\u7684\u8FDB\u7A0B\uFF0C\u53EF\u4EE5\u968F\u610F\u542F\u505C\u3002\u5F53\u7136\uFF0C\u505C\u6B62\u540E\uFF0C\u6B63\u5728\u5176\u4E0A\u8FD0\u884C\u7684\u4F5C\u4E1A\u4F1A\u5931\u8D25\uFF0C\u91CD\u8BD5\u5373\u53EF\u3002"})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return o}});var s=r(667294);let l={},i=s.createContext(l);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);