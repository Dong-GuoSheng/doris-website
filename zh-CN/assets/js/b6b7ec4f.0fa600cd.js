"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["70499"],{682481:function(e,n,l){l.r(n),l.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>t,frontMatter:()=>i});var r=JSON.parse('{"id":"admin-manual/workload-management/resource-group","title":"Resource Group","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/workload-management/resource-group.md","sourceDirName":"admin-manual/workload-management","slug":"/admin-manual/workload-management/resource-group","permalink":"/zh-CN/docs/dev/admin-manual/workload-management/resource-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Resource Group","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Workload Group","permalink":"/zh-CN/docs/dev/admin-manual/workload-management/workload-group"},"next":{"title":"\u8BA1\u7B97\u7EC4\u64CD\u4F5C","permalink":"/zh-CN/docs/dev/admin-manual/workload-management/compute-group"}}'),s=l("785893"),c=l("250065");let i={title:"Resource Group",language:"zh-CN"},o=void 0,a={},t=[{value:"Doris \u4E2D\u7684\u8282\u70B9",id:"doris-\u4E2D\u7684\u8282\u70B9",level:2},{value:"\u8282\u70B9\u8D44\u6E90\u5212\u5206",id:"\u8282\u70B9\u8D44\u6E90\u5212\u5206",level:2},{value:"\u5355\u67E5\u8BE2\u8D44\u6E90\u9650\u5236",id:"\u5355\u67E5\u8BE2\u8D44\u6E90\u9650\u5236",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5\u548C\u5411\u524D\u517C\u5BB9",id:"\u6700\u4F73\u5B9E\u8DF5\u548C\u5411\u524D\u517C\u5BB9",level:2},{value:"Tag \u5212\u5206\u548C CPU \u9650\u5236\u662F 0.15 \u7248\u672C\u4E2D\u7684\u65B0\u529F\u80FD\u3002\u4E3A\u4E86\u4FDD\u8BC1\u53EF\u4EE5\u4ECE\u8001\u7248\u672C\u5E73\u6ED1\u5347\u7EA7\uFF0CDoris \u505A\u4E86\u5982\u4E0B\u7684\u5411\u524D\u517C\u5BB9\uFF1A",id:"tag-\u5212\u5206\u548C-cpu-\u9650\u5236\u662F-015-\u7248\u672C\u4E2D\u7684\u65B0\u529F\u80FD\u4E3A\u4E86\u4FDD\u8BC1\u53EF\u4EE5\u4ECE\u8001\u7248\u672C\u5E73\u6ED1\u5347\u7EA7doris-\u505A\u4E86\u5982\u4E0B\u7684\u5411\u524D\u517C\u5BB9",level:3},{value:"table \u6570\u91CF\u5F88\u591A\u65F6\u5982\u4F55\u65B9\u4FBF\u7684\u8BBE\u7F6E\u526F\u672C\u5206\u5E03\u7B56\u7565",id:"table-\u6570\u91CF\u5F88\u591A\u65F6\u5982\u4F55\u65B9\u4FBF\u7684\u8BBE\u7F6E\u526F\u672C\u5206\u5E03\u7B56\u7565",level:3}];function d(e){let n={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Doris \u7684\u591A\u79DF\u6237\u548C\u8D44\u6E90\u9694\u79BB\u65B9\u6848\uFF0C\u4E3B\u8981\u76EE\u7684\u662F\u4E3A\u4E86\u591A\u7528\u6237\u5728\u540C\u4E00 Doris \u96C6\u7FA4\u5185\u8FDB\u884C\u6570\u636E\u64CD\u4F5C\u65F6\uFF0C\u51CF\u5C11\u76F8\u4E92\u4E4B\u95F4\u7684\u5E72\u6270\uFF0C\u80FD\u591F\u5C06\u96C6\u7FA4\u8D44\u6E90\u66F4\u5408\u7406\u7684\u5206\u914D\u7ED9\u5404\u7528\u6237\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u65B9\u6848\u4E3B\u8981\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u4E00\u662F\u96C6\u7FA4\u5185\u8282\u70B9\u7EA7\u522B\u7684\u8D44\u6E90\u7EC4\u5212\u5206\uFF0C\u4E8C\u662F\u9488\u5BF9\u5355\u4E2A\u67E5\u8BE2\u7684\u8D44\u6E90\u9650\u5236\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"doris-\u4E2D\u7684\u8282\u70B9",children:"Doris \u4E2D\u7684\u8282\u70B9"}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\u5148\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B Doris \u7684\u8282\u70B9\u7EC4\u6210\u3002\u4E00\u4E2A Doris \u96C6\u7FA4\u4E2D\u6709\u4E24\u7C7B\u8282\u70B9\uFF1AFrontend(FE) \u548C Backend(BE)\u3002"}),"\n",(0,s.jsx)(n.p,{children:"FE \u4E3B\u8981\u8D1F\u8D23\u5143\u6570\u636E\u7BA1\u7406\u3001\u96C6\u7FA4\u7BA1\u7406\u3001\u7528\u6237\u8BF7\u6C42\u7684\u63A5\u5165\u548C\u67E5\u8BE2\u8BA1\u5212\u7684\u89E3\u6790\u7B49\u5DE5\u4F5C\u3002"}),"\n",(0,s.jsx)(n.p,{children:"BE \u4E3B\u8981\u8D1F\u8D23\u6570\u636E\u5B58\u50A8\u3001\u67E5\u8BE2\u8BA1\u5212\u7684\u6267\u884C\u7B49\u5DE5\u4F5C\u3002"}),"\n",(0,s.jsx)(n.p,{children:"FE \u4E0D\u53C2\u4E0E\u7528\u6237\u6570\u636E\u7684\u5904\u7406\u8BA1\u7B97\u7B49\u5DE5\u4F5C\uFF0C\u56E0\u6B64\u662F\u4E00\u4E2A\u8D44\u6E90\u6D88\u8017\u8F83\u4F4E\u7684\u8282\u70B9\u3002\u800C BE \u8D1F\u8D23\u6240\u6709\u7684\u6570\u636E\u8BA1\u7B97\u3001\u4EFB\u52A1\u5904\u7406\uFF0C\u5C5E\u4E8E\u8D44\u6E90\u6D88\u8017\u578B\u7684\u8282\u70B9\u3002\u56E0\u6B64\uFF0C\u672C\u6587\u6240\u4ECB\u7ECD\u7684\u8D44\u6E90\u5212\u5206\u53CA\u8D44\u6E90\u9650\u5236\u65B9\u6848\uFF0C\u90FD\u662F\u9488\u5BF9 BE \u8282\u70B9\u7684\u3002FE \u8282\u70B9\u56E0\u4E3A\u8D44\u6E90\u6D88\u8017\u76F8\u5BF9\u8F83\u4F4E\uFF0C\u5E76\u4E14\u8FD8\u53EF\u4EE5\u6A2A\u5411\u6269\u5C55\uFF0C\u56E0\u6B64\u901A\u5E38\u65E0\u9700\u505A\u8D44\u6E90\u4E0A\u7684\u9694\u79BB\u548C\u9650\u5236\uFF0CFE \u8282\u70B9\u7531\u6240\u6709\u7528\u6237\u5171\u4EAB\u5373\u53EF\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8282\u70B9\u8D44\u6E90\u5212\u5206",children:"\u8282\u70B9\u8D44\u6E90\u5212\u5206"}),"\n",(0,s.jsx)(n.p,{children:"\u8282\u70B9\u8D44\u6E90\u5212\u5206\uFF0C\u662F\u6307\u5C06\u4E00\u4E2A Doris \u96C6\u7FA4\u5185\u7684 BE \u8282\u70B9\u8BBE\u7F6E\u6807\u7B7E\uFF08Tag\uFF09\uFF0C\u6807\u7B7E\u76F8\u540C\u7684 BE \u8282\u70B9\u7EC4\u6210\u4E00\u4E2A\u8D44\u6E90\u7EC4\uFF08Resource Group\uFF09\u3002\u8D44\u6E90\u7EC4\u53EF\u4EE5\u770B\u4F5C\u662F\u6570\u636E\u5B58\u50A8\u548C\u8BA1\u7B97\u7684\u4E00\u4E2A\u7BA1\u7406\u5355\u5143\u3002\u4E0B\u9762\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u5177\u4F53\u793A\u4F8B\uFF0C\u6765\u4ECB\u7ECD\u8D44\u6E90\u7EC4\u7684\u4F7F\u7528\u65B9\u5F0F\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4E3A BE \u8282\u70B9\u8BBE\u7F6E\u6807\u7B7E"}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u8BBE\u5F53\u524D Doris \u96C6\u7FA4\u6709 6 \u4E2A BE \u8282\u70B9\u3002\u5206\u522B\u4E3A host[1-6]\u3002\u5728\u521D\u59CB\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u8282\u70B9\u90FD\u5C5E\u4E8E\u4E00\u4E2A\u9ED8\u8BA4\u8D44\u6E90\u7EC4\uFF08Default\uFF09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06\u8FD9 6 \u4E2A\u8282\u70B9\u5212\u5206\u6210 3 \u4E2A\u8D44\u6E90\u7EC4\uFF1Agroup_a\u3001group_b\u3001group_c\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'alter system modify backend "host1:9050" set ("tag.location" = "group_a");\nalter system modify backend "host2:9050" set ("tag.location" = "group_a");\nalter system modify backend "host3:9050" set ("tag.location" = "group_b");\nalter system modify backend "host4:9050" set ("tag.location" = "group_b");\nalter system modify backend "host5:9050" set ("tag.location" = "group_c");\nalter system modify backend "host6:9050" set ("tag.location" = "group_c");\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD9\u91CC\u6211\u4EEC\u5C06 ",(0,s.jsx)(n.code,{children:"host[1-2]"})," \u7EC4\u6210\u8D44\u6E90\u7EC4 ",(0,s.jsx)(n.code,{children:"group_a"}),"\uFF0C",(0,s.jsx)(n.code,{children:"host[3-4]"})," \u7EC4\u6210\u8D44\u6E90\u7EC4 ",(0,s.jsx)(n.code,{children:"group_b"}),"\uFF0C",(0,s.jsx)(n.code,{children:"host[5-6]"})," \u7EC4\u6210\u8D44\u6E90\u7EC4 ",(0,s.jsx)(n.code,{children:"group_c"}),"\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6CE8\uFF1A\u4E00\u4E2A BE \u53EA\u652F\u6301\u8BBE\u7F6E\u4E00\u4E2A Tag\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6309\u7167\u8D44\u6E90\u7EC4\u5206\u914D\u6570\u636E\u5206\u5E03"}),"\n",(0,s.jsx)(n.p,{children:"\u8D44\u6E90\u7EC4\u5212\u5206\u597D\u540E\u3002\u6211\u4EEC\u53EF\u4EE5\u5C06\u7528\u6237\u6570\u636E\u7684\u4E0D\u540C\u526F\u672C\u5206\u5E03\u5728\u4E0D\u540C\u8D44\u6E90\u7EC4\u5185\u3002\u5047\u8BBE\u4E00\u5F20\u7528\u6237\u8868 UserTable\u3002\u6211\u4EEC\u5E0C\u671B\u5728 3 \u4E2A\u8D44\u6E90\u7EC4\u5185\u5404\u5B58\u653E\u4E00\u4E2A\u526F\u672C\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u5EFA\u8868\u8BED\u53E5\u5B9E\u73B0\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'create table UserTable\n(k1 int, k2 int)\ndistributed by hash(k1) buckets 1\nproperties(\n    "replication_allocation"="tag.location.group_a:1, tag.location.group_b:1, tag.location.group_c:1"\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u6837\u4E00\u6765\uFF0C\u8868 UserTable \u4E2D\u7684\u6570\u636E\uFF0C\u5C06\u4F1A\u4EE5 3 \u526F\u672C\u7684\u5F62\u5F0F\uFF0C\u5206\u522B\u5B58\u50A8\u5728\u8D44\u6E90\u7EC4 group_a\u3001group_b\u3001group_c \u6240\u5728\u7684\u8282\u70B9\u4E2D\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4E0B\u56FE\u5C55\u793A\u4E86\u5F53\u524D\u7684\u8282\u70B9\u5212\u5206\u548C\u6570\u636E\u5206\u5E03\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:" \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502                                                    \u2502\n \u2502         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host1            \u2502  \u2502 host2            \u2502 \u2502\n \u2502         \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502                  \u2502 \u2502\n \u2502 group_a \u2502  \u2502   replica1  \u2502 \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u2502                                                    \u2502\n \u2502         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host3            \u2502  \u2502 host4            \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502 \u2502\n \u2502 group_b \u2502                  \u2502  \u2502  \u2502   replica2  \u2502 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u2502                                                    \u2502\n \u2502         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host5            \u2502  \u2502 host6            \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502 \u2502\n \u2502 group_c \u2502                  \u2502  \u2502  \u2502   replica3  \u2502 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4E3A\u4E86\u65B9\u4FBF\u8BBE\u7F6E table \u7684\u6570\u636E\u5206\u5E03\u7B56\u7565\uFF0C\u53EF\u4EE5\u5728 database \u5C42\u9762\u8BBE\u7F6E\u7EDF\u4E00\u7684\u6570\u636E\u5206\u5E03\u7B56\u7565\uFF0C\u4F46\u662F table \u8BBE\u7F6E\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E database"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE DATABASE db_name PROPERTIES (\n"replication_allocation" = "tag.location.group_a:1, tag.location.group_b:1"\n)\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528\u4E0D\u540C\u8D44\u6E90\u7EC4\u8FDB\u884C\u6570\u636E\u67E5\u8BE2"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u524D\u4E24\u6B65\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u7528\u6237\u7684\u8D44\u6E90\u4F7F\u7528\u6743\u9650\uFF0C\u6765\u9650\u5236\u67D0\u4E00\u7528\u6237\u7684\u67E5\u8BE2\uFF0C\u53EA\u80FD\u4F7F\u7528\u6307\u5B9A\u8D44\u6E90\u7EC4\u4E2D\u7684\u8282\u70B9\u6765\u6267\u884C\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6BD4\u5982\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u8BED\u53E5\uFF0C\u9650\u5236 user1 \u53EA\u80FD\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"group_a"})," \u8D44\u6E90\u7EC4\u4E2D\u7684\u8282\u70B9\u8FDB\u884C\u6570\u636E\u67E5\u8BE2\uFF0Cuser2 \u53EA\u80FD\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"group_b"})," \u8D44\u6E90\u7EC4\uFF0C\u800C user3 \u53EF\u4EE5\u540C\u65F6\u4F7F\u7528 3 \u4E2A\u8D44\u6E90\u7EC4\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"set property for 'user1' 'resource_tags.location' = 'group_a';\nset property for 'user2' 'resource_tags.location' = 'group_b';\nset property for 'user3' 'resource_tags.location' = 'group_a, group_b, group_c';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8BBE\u7F6E\u5B8C\u6210\u540E\uFF0Cuser1 \u5728\u53D1\u8D77\u5BF9 UserTable \u8868\u7684\u67E5\u8BE2\u65F6\uFF0C\u53EA\u4F1A\u8BBF\u95EE ",(0,s.jsx)(n.code,{children:"group_a"})," \u8D44\u6E90\u7EC4\u5185\u8282\u70B9\u4E0A\u7684\u6570\u636E\u526F\u672C\uFF0C\u5E76\u4E14\u67E5\u8BE2\u4EC5\u4F1A\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"group_a"})," \u8D44\u6E90\u7EC4\u5185\u7684\u8282\u70B9\u8BA1\u7B97\u8D44\u6E90\u3002\u800C user3 \u7684\u67E5\u8BE2\u53EF\u4EE5\u4F7F\u7528\u4EFB\u610F\u8D44\u6E90\u7EC4\u5185\u7684\u526F\u672C\u548C\u8BA1\u7B97\u8D44\u6E90\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6CE8\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u7684 ",(0,s.jsx)(n.code,{children:"resource_tags.location"})," \u5C5E\u6027\u4E3A\u7A7A\uFF0C\u5728 2.0.2\uFF08\u542B\uFF09\u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u4E0D\u53D7 tag \u7684\u9650\u5236\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EFB\u610F\u8D44\u6E90\u7EC4\u3002\u5728 2.0.3 \u7248\u672C\u4E4B\u540E\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u666E\u901A\u7528\u6237\u53EA\u80FD\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"default"})," \u8D44\u6E90\u7EC4\u3002root \u548C admin \u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u4EFB\u610F\u8D44\u6E90\u7EC4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,s.jsxs)(n.p,{children:["\u5C5E\u6027 ",(0,s.jsx)(n.code,{children:"resource_tags.location"})," \u6BCF\u6B21\u4FEE\u6539\u5B8C\u6210\u4E4B\u540E\uFF0C\u7528\u6237\u9700\u8981\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\u624D\u80FD\u4F7F\u53D8\u66F4\u751F\u6548\u3002"]})}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u6837\uFF0C\u6211\u4EEC\u901A\u8FC7\u5BF9\u8282\u70B9\u7684\u5212\u5206\uFF0C\u4EE5\u53CA\u5BF9\u7528\u6237\u7684\u8D44\u6E90\u4F7F\u7528\u9650\u5236\uFF0C\u5B9E\u73B0\u4E86\u4E0D\u540C\u7528\u6237\u67E5\u8BE2\u4E0A\u7684\u7269\u7406\u8D44\u6E90\u9694\u79BB\u3002\u66F4\u8FDB\u4E00\u6B65\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7ED9\u4E0D\u540C\u7684\u4E1A\u52A1\u90E8\u95E8\u521B\u5EFA\u4E0D\u540C\u7684\u7528\u6237\uFF0C\u5E76\u9650\u5236\u6BCF\u4E2A\u7528\u6237\u4F7F\u7528\u4E0D\u540C\u7684\u8D44\u6E90\u7EC4\u3002\u4EE5\u907F\u514D\u4E0D\u540C\u4E1A\u52A1\u90E8\u5206\u4E4B\u95F4\u4F7F\u7528\u8D44\u6E90\u5E72\u6270\u3002\u6BD4\u5982\u96C6\u7FA4\u5185\u6709\u4E00\u5F20\u4E1A\u52A1\u8868\u9700\u8981\u5171\u4EAB\u7ED9\u6240\u6709 9 \u4E2A\u4E1A\u52A1\u90E8\u95E8\u4F7F\u7528\uFF0C\u4F46\u662F\u5E0C\u671B\u80FD\u591F\u5C3D\u91CF\u907F\u514D\u4E0D\u540C\u90E8\u95E8\u4E4B\u95F4\u7684\u8D44\u6E90\u62A2\u5360\u3002\u5219\u6211\u4EEC\u53EF\u4EE5\u4E3A\u8FD9\u5F20\u8868\u521B\u5EFA 3 \u4E2A\u526F\u672C\uFF0C\u5206\u522B\u5B58\u50A8\u5728 3 \u4E2A\u8D44\u6E90\u7EC4\u4E2D\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u4E3A 9 \u4E2A\u4E1A\u52A1\u90E8\u95E8\u521B\u5EFA 9 \u4E2A\u7528\u6237\uFF0C\u6BCF 3 \u4E2A\u7528\u6237\u9650\u5236\u4F7F\u7528\u4E00\u4E2A\u8D44\u6E90\u7EC4\u3002\u8FD9\u6837\uFF0C\u8D44\u6E90\u7684\u7ADE\u4E89\u7A0B\u5EA6\u5C31\u7531 9 \u964D\u4F4E\u5230\u4E86 3\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53E6\u4E00\u65B9\u9762\uFF0C\u9488\u5BF9\u5728\u7EBF\u548C\u79BB\u7EBF\u4EFB\u52A1\u7684\u9694\u79BB\u3002\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8D44\u6E90\u7EC4\u7684\u65B9\u5F0F\u5B9E\u73B0\u3002\u6BD4\u5982\u6211\u4EEC\u53EF\u4EE5\u5C06\u8282\u70B9\u5212\u5206\u4E3A Online \u548C Offline \u4E24\u4E2A\u8D44\u6E90\u7EC4\u3002\u8868\u6570\u636E\u4F9D\u7136\u4EE5 3 \u526F\u672C\u7684\u65B9\u5F0F\u5B58\u50A8\uFF0C\u5176\u4E2D 2 \u4E2A\u526F\u672C\u5B58\u653E\u5728 Online \u8D44\u6E90\u7EC4\uFF0C1 \u4E2A\u526F\u672C\u5B58\u653E\u5728 Offline \u8D44\u6E90\u7EC4\u3002Online \u8D44\u6E90\u7EC4\u4E3B\u8981\u7528\u4E8E\u9AD8\u5E76\u53D1\u4F4E\u5EF6\u8FDF\u7684\u5728\u7EBF\u6570\u636E\u670D\u52A1\uFF0C\u800C\u4E00\u4E9B\u5927\u67E5\u8BE2\u6216\u79BB\u7EBF ETL \u64CD\u4F5C\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528 Offline \u8D44\u6E90\u7EC4\u4E2D\u7684\u8282\u70B9\u6267\u884C\u3002\u4ECE\u800C\u5B9E\u73B0\u5728\u7EDF\u4E00\u96C6\u7FA4\u5185\u540C\u65F6\u63D0\u4F9B\u5728\u7EBF\u548C\u79BB\u7EBF\u670D\u52A1\u7684\u80FD\u529B\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5BFC\u5165\u4F5C\u4E1A\u7684\u8D44\u6E90\u7EC4\u5206\u914D"}),"\n",(0,s.jsx)(n.p,{children:"\u5BFC\u5165\u4F5C\u4E1A\uFF08\u5305\u62EC insert\u3001broker load\u3001routine load\u3001stream load \u7B49\uFF09\u7684\u8D44\u6E90\u4F7F\u7528\u53EF\u4EE5\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8BA1\u7B97\u8D44\u6E90\uFF1A\u8D1F\u8D23\u8BFB\u53D6\u6570\u636E\u6E90\u3001\u6570\u636E\u8F6C\u6362\u548C\u5206\u53D1\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5199\u5165\u8D44\u6E90\uFF1A\u8D1F\u8D23\u6570\u636E\u7F16\u7801\u3001\u538B\u7F29\u5E76\u5199\u5165\u78C1\u76D8\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u4E2D\u5199\u5165\u8D44\u6E90\u5FC5\u987B\u662F\u6570\u636E\u526F\u672C\u6240\u5728\u7684\u8282\u70B9\uFF0C\u800C\u8BA1\u7B97\u8D44\u6E90\u7406\u8BBA\u4E0A\u53EF\u4EE5\u9009\u62E9\u4EFB\u610F\u8282\u70B9\u5B8C\u6210\u3002\u6240\u4EE5\u5BF9\u4E8E\u5BFC\u5165\u4F5C\u4E1A\u7684\u8D44\u6E90\u7EC4\u7684\u5206\u914D\u5206\u6210\u4E24\u4E2A\u6B65\u9AA4\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528\u7528\u6237\u7EA7\u522B\u7684 resource tag \u6765\u9650\u5B9A\u8BA1\u7B97\u8D44\u6E90\u6240\u80FD\u4F7F\u7528\u7684\u8D44\u6E90\u7EC4\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528\u526F\u672C\u7684 resource tag \u6765\u9650\u5B9A\u5199\u5165\u8D44\u6E90\u6240\u80FD\u4F7F\u7528\u7684\u8D44\u6E90\u7EC4\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6240\u4EE5\u5982\u679C\u5E0C\u671B\u5BFC\u5165\u64CD\u4F5C\u6240\u4F7F\u7528\u7684\u5168\u90E8\u8D44\u6E90\u90FD\u9650\u5B9A\u5728\u6570\u636E\u6240\u5728\u7684\u8D44\u6E90\u7EC4\u7684\u8BDD\uFF0C\u53EA\u9700\u5C06\u7528\u6237\u7EA7\u522B\u7684 resource tag \u8BBE\u7F6E\u4E3A\u548C\u526F\u672C\u7684 resource tag \u76F8\u540C\u5373\u53EF\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5355\u67E5\u8BE2\u8D44\u6E90\u9650\u5236",children:"\u5355\u67E5\u8BE2\u8D44\u6E90\u9650\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u524D\u9762\u63D0\u5230\u7684\u8D44\u6E90\u7EC4\u65B9\u6CD5\u662F\u8282\u70B9\u7EA7\u522B\u7684\u8D44\u6E90\u9694\u79BB\u548C\u9650\u5236\u3002\u800C\u5728\u8D44\u6E90\u7EC4\u5185\uFF0C\u4F9D\u7136\u53EF\u80FD\u53D1\u751F\u8D44\u6E90\u62A2\u5360\u95EE\u9898\u3002\u6BD4\u5982\u524D\u6587\u63D0\u5230\u7684\u5C06 3 \u4E2A\u4E1A\u52A1\u90E8\u95E8\u5B89\u6392\u5728\u540C\u4E00\u8D44\u6E90\u7EC4\u5185\u3002\u867D\u7136\u964D\u4F4E\u4E86\u8D44\u6E90\u7ADE\u4E89\u7A0B\u5EA6\uFF0C\u4F46\u662F\u8FD9 3 \u4E2A\u90E8\u95E8\u7684\u67E5\u8BE2\u4F9D\u7136\u6709\u53EF\u80FD\u76F8\u4E92\u5F71\u54CD\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u56E0\u6B64\uFF0C\u9664\u4E86\u8D44\u6E90\u7EC4\u65B9\u6848\u5916\uFF0CDoris \u8FD8\u63D0\u4F9B\u4E86\u5BF9\u5355\u67E5\u8BE2\u7684\u8D44\u6E90\u9650\u5236\u529F\u80FD\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u76EE\u524D Doris \u5BF9\u5355\u67E5\u8BE2\u7684\u8D44\u6E90\u9650\u5236\u4E3B\u8981\u5206\u4E3A CPU \u548C \u5185\u5B58\u9650\u5236\u4E24\u65B9\u9762\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5185\u5B58\u9650\u5236"}),"\n",(0,s.jsx)(n.p,{children:"Doris \u53EF\u4EE5\u9650\u5236\u4E00\u4E2A\u67E5\u8BE2\u88AB\u5141\u8BB8\u4F7F\u7528\u7684\u6700\u5927\u5185\u5B58\u5F00\u9500\u3002\u4EE5\u4FDD\u8BC1\u96C6\u7FA4\u7684\u5185\u5B58\u8D44\u6E90\u4E0D\u4F1A\u88AB\u67D0\u4E00\u4E2A\u67E5\u8BE2\u5168\u90E8\u5360\u7528\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8BBE\u7F6E\u5185\u5B58\u9650\u5236\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"# \u8BBE\u7F6E\u4F1A\u8BDD\u53D8\u91CF exec_mem_limit\u3002\u5219\u4E4B\u540E\u8BE5\u4F1A\u8BDD\u5185\uFF08\u8FDE\u63A5\u5185\uFF09\u7684\u6240\u6709\u67E5\u8BE2\u90FD\u4F7F\u7528\u8FD9\u4E2A\u5185\u5B58\u9650\u5236\u3002\nset exec_mem_limit=1G;\n# \u8BBE\u7F6E\u5168\u5C40\u53D8\u91CF exec_mem_limit\u3002\u5219\u4E4B\u540E\u6240\u6709\u65B0\u4F1A\u8BDD\uFF08\u65B0\u8FDE\u63A5\uFF09\u7684\u6240\u6709\u67E5\u8BE2\u90FD\u4F7F\u7528\u8FD9\u4E2A\u5185\u5B58\u9650\u5236\u3002\nset global exec_mem_limit=1G;\n# \u5728 SQL \u4E2D\u8BBE\u7F6E\u53D8\u91CF exec_mem_limit\uFF08\u5355\u4F4D\uFF1A\u5B57\u8282\uFF09\u3002\u5219\u8BE5\u53D8\u91CF\u4EC5\u5F71\u54CD\u8FD9\u4E2A SQL\u3002\nselect /*+ SET_VAR(exec_mem_limit=1073741824) */ id, name from tbl where xxx;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u56E0\u4E3A Doris \u7684\u67E5\u8BE2\u5F15\u64CE\u662F\u57FA\u4E8E\u5168\u5185\u5B58\u7684 MPP \u67E5\u8BE2\u6846\u67B6\u3002\u56E0\u6B64\u5F53\u4E00\u4E2A\u67E5\u8BE2\u7684\u5185\u5B58\u4F7F\u7528\u8D85\u8FC7\u9650\u5236\u540E\uFF0C\u67E5\u8BE2\u4F1A\u88AB\u7EC8\u6B62\u3002\u56E0\u6B64\uFF0C\u5F53\u4E00\u4E2A\u67E5\u8BE2\u65E0\u6CD5\u5728\u5408\u7406\u7684\u5185\u5B58\u9650\u5236\u4E0B\u8FD0\u884C\u65F6\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u901A\u8FC7\u4E00\u4E9B SQL \u4F18\u5316\u624B\u6BB5\uFF0C\u6216\u8005\u96C6\u7FA4\u6269\u5BB9\u7684\u65B9\u5F0F\u6765\u89E3\u51B3\u4E86\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"CPU \u9650\u5236"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6CE8\uFF1A\u4ECE Doris 2.1 \u4E4B\u540E\uFF0Ccpu_resource_limit \u5C06\u9010\u6E10\u88AB workload group \u66FF\u4EE3\uFF0C\u56E0\u6B64\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8BE5\u53C2\u6570\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u9650\u5236\u67E5\u8BE2\u7684 CPU \u8D44\u6E90\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"# \u8BBE\u7F6E\u4F1A\u8BDD\u53D8\u91CF cpu_resource_limit\u3002\u5219\u4E4B\u540E\u8BE5\u4F1A\u8BDD\u5185\uFF08\u8FDE\u63A5\u5185\uFF09\u7684\u6240\u6709\u67E5\u8BE2\u90FD\u4F7F\u7528\u8FD9\u4E2A CPU \u9650\u5236\u3002\nset cpu_resource_limit = 2\n# \u8BBE\u7F6E\u7528\u6237\u7684\u5C5E\u6027 cpu_resource_limit\uFF0C\u5219\u6240\u6709\u8BE5\u7528\u6237\u7684\u67E5\u8BE2\u60C5\u51B5\u90FD\u4F7F\u7528\u8FD9\u4E2A CPU \u9650\u5236\u3002\u8BE5\u5C5E\u6027\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E\u4F1A\u8BDD\u53D8\u91CF cpu_resource_limit\nset property for 'user1' 'cpu_resource_limit' = '3';\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cpu_resource_limit"})," \u7684\u53D6\u503C\u662F\u4E00\u4E2A\u76F8\u5BF9\u503C\uFF0C\u53D6\u503C\u8D8A\u5927\u5219\u80FD\u591F\u4F7F\u7528\u7684 CPU \u8D44\u6E90\u8D8A\u591A\u3002\u4F46\u4E00\u4E2A\u67E5\u8BE2\u80FD\u4F7F\u7528\u7684 CPU \u4E0A\u9650\u4E5F\u53D6\u51B3\u4E8E\u8868\u7684\u5206\u533A\u5206\u6876\u6570\u3002\u539F\u5219\u4E0A\uFF0C\u4E00\u4E2A\u67E5\u8BE2\u7684\u6700\u5927 CPU \u4F7F\u7528\u91CF\u548C\u67E5\u8BE2\u6D89\u53CA\u5230\u7684 tablet \u6570\u91CF\u6B63\u76F8\u5173\u3002\u6781\u7AEF\u60C5\u51B5\u4E0B\uFF0C\u5047\u8BBE\u4E00\u4E2A\u67E5\u8BE2\u4EC5\u6D89\u53CA\u5230\u4E00\u4E2A tablet\uFF0C\u5219\u5373\u4F7F ",(0,s.jsx)(n.code,{children:"cpu_resource_limit"})," \u8BBE\u7F6E\u4E00\u4E2A\u8F83\u5927\u503C\uFF0C\u4E5F\u4EC5\u80FD\u4F7F\u7528 1 \u4E2A CPU \u8D44\u6E90\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u5185\u5B58\u548C CPU \u7684\u8D44\u6E90\u9650\u5236\u3002\u6211\u4EEC\u53EF\u4EE5\u5728\u4E00\u4E2A\u8D44\u6E90\u7EC4\u5185\uFF0C\u5C06\u7528\u6237\u7684\u67E5\u8BE2\u8FDB\u884C\u66F4\u7EC6\u7C92\u5EA6\u7684\u8D44\u6E90\u5212\u5206\u3002\u6BD4\u5982\u6211\u4EEC\u53EF\u4EE5\u8BA9\u90E8\u5206\u65F6\u6548\u6027\u8981\u6C42\u4E0D\u9AD8\uFF0C\u4F46\u662F\u8BA1\u7B97\u91CF\u5F88\u5927\u7684\u79BB\u7EBF\u4EFB\u52A1\u4F7F\u7528\u66F4\u5C11\u7684 CPU \u8D44\u6E90\u548C\u66F4\u591A\u7684\u5185\u5B58\u8D44\u6E90\u3002\u800C\u90E8\u5206\u5EF6\u8FDF\u654F\u611F\u7684\u5728\u7EBF\u4EFB\u52A1\uFF0C\u4F7F\u7528\u66F4\u591A\u7684 CPU \u8D44\u6E90\u4EE5\u53CA\u5408\u7406\u7684\u5185\u5B58\u8D44\u6E90\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5\u548C\u5411\u524D\u517C\u5BB9",children:"\u6700\u4F73\u5B9E\u8DF5\u548C\u5411\u524D\u517C\u5BB9"}),"\n",(0,s.jsx)(n.h3,{id:"tag-\u5212\u5206\u548C-cpu-\u9650\u5236\u662F-015-\u7248\u672C\u4E2D\u7684\u65B0\u529F\u80FD\u4E3A\u4E86\u4FDD\u8BC1\u53EF\u4EE5\u4ECE\u8001\u7248\u672C\u5E73\u6ED1\u5347\u7EA7doris-\u505A\u4E86\u5982\u4E0B\u7684\u5411\u524D\u517C\u5BB9",children:"Tag \u5212\u5206\u548C CPU \u9650\u5236\u662F 0.15 \u7248\u672C\u4E2D\u7684\u65B0\u529F\u80FD\u3002\u4E3A\u4E86\u4FDD\u8BC1\u53EF\u4EE5\u4ECE\u8001\u7248\u672C\u5E73\u6ED1\u5347\u7EA7\uFF0CDoris \u505A\u4E86\u5982\u4E0B\u7684\u5411\u524D\u517C\u5BB9\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6BCF\u4E2A BE \u8282\u70B9\u4F1A\u6709\u4E00\u4E2A\u9ED8\u8BA4\u7684 Tag\uFF1A",(0,s.jsx)(n.code,{children:'"tag.location": "default"'}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"alter system add backend"})," \u8BED\u53E5\u65B0\u589E\u7684 BE \u8282\u70B9\u4E5F\u4F1A\u9ED8\u8BA4\u8BBE\u7F6E Tag\uFF1A",(0,s.jsx)(n.code,{children:'"tag.location": "default"'}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6240\u6709\u8868\u7684\u526F\u672C\u5206\u5E03\u9ED8\u8BA4\u4FEE\u6539\u4E3A\uFF1A",(0,s.jsx)(n.code,{children:'"tag.location.default:xx'}),"\u3002\u5176\u4E2D xx \u4E3A\u539F\u526F\u672C\u6570\u91CF\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7528\u6237\u4F9D\u7136\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:'"replication_num" = "xx"'})," \u5728\u5EFA\u8868\u8BED\u53E5\u4E2D\u6307\u5B9A\u526F\u672C\u6570\uFF0C\u8FD9\u79CD\u5C5E\u6027\u5C06\u4F1A\u81EA\u52A8\u8F6C\u6362\u6210\uFF1A",(0,s.jsx)(n.code,{children:'"tag.location.default:xx'}),"\u3002\u4ECE\u800C\u4FDD\u8BC1\u65E0\u9700\u4FEE\u6539\u539F\u5EFA\u8868\u8BED\u53E5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5355\u67E5\u8BE2\u7684\u5185\u5B58\u9650\u5236\u4E3A\u5355\u8282\u70B9 2GB\uFF0CCPU \u8D44\u6E90\u65E0\u9650\u5236\uFF0C\u548C\u539F\u6709\u884C\u4E3A\u4FDD\u6301\u4E00\u81F4\u3002\u4E14\u7528\u6237\u7684 ",(0,s.jsx)(n.code,{children:"resource_tags.location"})," \u5C5E\u6027\u4E3A\u7A7A\uFF0C\u5373\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u53EF\u4EE5\u8BBF\u95EE\u4EFB\u610F Tag \u7684 BE\uFF0C\u548C\u539F\u6709\u884C\u4E3A\u4FDD\u6301\u4E00\u81F4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u91CC\u6211\u4EEC\u7ED9\u51FA\u4E00\u4E2A\u4ECE\u539F\u96C6\u7FA4\u5347\u7EA7\u5230 0.15 \u7248\u672C\u540E\uFF0C\u5F00\u59CB\u4F7F\u7528\u8D44\u6E90\u5212\u5206\u529F\u80FD\u7684\u6B65\u9AA4\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5173\u95ED\u6570\u636E\u4FEE\u590D\u4E0E\u5747\u8861\u903B\u8F91"}),"\n",(0,s.jsxs)(n.p,{children:["\u56E0\u4E3A\u5347\u7EA7\u540E\uFF0CBE \u7684\u9ED8\u8BA4 Tag \u4E3A ",(0,s.jsx)(n.code,{children:'"tag.location": "default"'}),"\uFF0C\u800C\u8868\u7684\u9ED8\u8BA4\u526F\u672C\u5206\u5E03\u4E3A\uFF1A",(0,s.jsx)(n.code,{children:'"tag.location.default:xx'}),"\u3002\u6240\u4EE5\u5982\u679C\u76F4\u63A5\u4FEE\u6539 BE \u7684 Tag\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u68C0\u6D4B\u5230\u526F\u672C\u5206\u5E03\u7684\u53D8\u5316\uFF0C\u4ECE\u800C\u5F00\u59CB\u6570\u636E\u91CD\u5206\u5E03\u3002\u8FD9\u53EF\u80FD\u4F1A\u5360\u7528\u90E8\u5206\u7CFB\u7EDF\u8D44\u6E90\u3002\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5728\u4FEE\u6539 Tag \u524D\uFF0C\u5148\u5173\u95ED\u6570\u636E\u4FEE\u590D\u4E0E\u5747\u8861\u903B\u8F91\uFF0C\u4EE5\u4FDD\u8BC1\u6211\u4EEC\u5728\u89C4\u5212\u8D44\u6E90\u65F6\uFF0C\u4E0D\u4F1A\u6709\u526F\u672C\u91CD\u5206\u5E03\u7684\u64CD\u4F5C\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");\nADMIN SET FRONTEND CONFIG ("disable_tablet_scheduler" = "true");\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8BBE\u7F6E Tag \u548C\u8868\u526F\u672C\u5206\u5E03"}),"\n",(0,s.jsxs)(n.p,{children:["\u63A5\u4E0B\u6765\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"alter system modify backend"})," \u8BED\u53E5\u8FDB\u884C BE \u7684 Tag \u8BBE\u7F6E\u3002\u4EE5\u53CA\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"alter table"})," \u8BED\u53E5\u4FEE\u6539\u8868\u7684\u526F\u672C\u5206\u5E03\u7B56\u7565\u3002\u793A\u4F8B\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'alter system modify backend "host1:9050" set ("tag.location" = "group_a");\nalter table my_table modify partition p1 set ("replication_allocation" = "tag.location.group_a:2");\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5F00\u542F\u6570\u636E\u4FEE\u590D\u4E0E\u5747\u8861\u903B\u8F91"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Tag \u548C\u526F\u672C\u5206\u5E03\u90FD\u8BBE\u7F6E\u5B8C\u6BD5\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F00\u542F\u6570\u636E\u4FEE\u590D\u4E0E\u5747\u8861\u903B\u8F91\u6765\u89E6\u53D1\u6570\u636E\u7684\u91CD\u5206\u5E03\u4E86\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN SET FRONTEND CONFIG ("disable_balance" = "false");\nADMIN SET FRONTEND CONFIG ("disable_tablet_scheduler" = "false");\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8BE5\u8FC7\u7A0B\u6839\u636E\u6D89\u53CA\u5230\u7684\u6570\u636E\u91CF\u4F1A\u6301\u7EED\u4E00\u6BB5\u65F6\u95F4\u3002\u5E76\u4E14\u4F1A\u5BFC\u81F4\u90E8\u5206 colocation table \u65E0\u6CD5\u8FDB\u884C colocation \u89C4\u5212\uFF08\u56E0\u4E3A\u526F\u672C\u5728\u8FC1\u79FB\u4E2D\uFF09\u3002\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:'show proc "/cluster_balance/"'})," \u6765\u67E5\u770B\u8FDB\u5EA6\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:'show proc "/statistic"'})," \u4E2D ",(0,s.jsx)(n.code,{children:"UnhealthyTabletNum"})," \u7684\u6570\u91CF\u6765\u5224\u65AD\u8FDB\u5EA6\u3002\u5F53 ",(0,s.jsx)(n.code,{children:"UnhealthyTabletNum"})," \u964D\u4E3A 0 \u65F6\uFF0C\u5219\u4EE3\u8868\u6570\u636E\u91CD\u5206\u5E03\u5B8C\u6BD5\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8BBE\u7F6E\u7528\u6237\u7684\u8D44\u6E90\u6807\u7B7E\u6743\u9650\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u7B49\u6570\u636E\u91CD\u5206\u5E03\u5B8C\u6BD5\u540E\u3002\u6211\u4EEC\u5C31\u53EF\u4EE5\u5F00\u59CB\u8BBE\u7F6E\u7528\u6237\u7684\u8D44\u6E90\u6807\u7B7E\u6743\u9650\u4E86\u3002\u56E0\u4E3A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u7684 ",(0,s.jsx)(n.code,{children:"resource_tags.location"})," \u5C5E\u6027\u4E3A\u7A7A\uFF0C\u5373\u53EF\u4EE5\u8BBF\u95EE\u4EFB\u610F Tag \u7684 BE\u3002\u6240\u4EE5\u5728\u524D\u9762\u6B65\u9AA4\u4E2D\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u5DF2\u6709\u7528\u6237\u7684\u6B63\u5E38\u67E5\u8BE2\u3002\u5F53 ",(0,s.jsx)(n.code,{children:"resource_tags.location"})," \u5C5E\u6027\u975E\u7A7A\u65F6\uFF0C\u7528\u6237\u5C06\u88AB\u9650\u5236\u8BBF\u95EE\u6307\u5B9A Tag \u7684 BE\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0A 4 \u6B65\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8F83\u4E3A\u5E73\u6ED1\u7684\u5728\u539F\u6709\u96C6\u7FA4\u5347\u7EA7\u540E\uFF0C\u4F7F\u7528\u8D44\u6E90\u5212\u5206\u529F\u80FD\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"table-\u6570\u91CF\u5F88\u591A\u65F6\u5982\u4F55\u65B9\u4FBF\u7684\u8BBE\u7F6E\u526F\u672C\u5206\u5E03\u7B56\u7565",children:"table \u6570\u91CF\u5F88\u591A\u65F6\u5982\u4F55\u65B9\u4FBF\u7684\u8BBE\u7F6E\u526F\u672C\u5206\u5E03\u7B56\u7565"}),"\n",(0,s.jsxs)(n.p,{children:["\u6BD4\u5982\u6709\u4E00\u4E2A db1,db1 \u4E0B\u6709\u56DB\u4E2A table\uFF0Ctable1 \u9700\u8981\u7684\u526F\u672C\u5206\u5E03\u7B56\u7565\u4E3A ",(0,s.jsx)(n.code,{children:"group_a:1,group_b:2"}),"\uFF0Ctable2\uFF0Ctable3, table4 \u9700\u8981\u7684\u526F\u672C\u5206\u5E03\u7B56\u7565\u4E3A ",(0,s.jsx)(n.code,{children:"group_c:1,group_b:2"})]}),"\n",(0,s.jsx)(n.p,{children:"\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u8BED\u53E5\u521B\u5EFA db1\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:' CREATE DATABASE db1 PROPERTIES (\n "replication_allocation" = "tag.location.group_c:1, tag.location.group_b:2"\n )\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528\u5982\u4E0B\u8BED\u53E5\u521B\u5EFA table1\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE table1\n(k1 int, k2 int)\ndistributed by hash(k1) buckets 1\nproperties(\n"replication_allocation"="tag.location.group_a:1, tag.location.group_b:2"\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["table2\uFF0Ctable3,table4 \u7684\u5EFA\u8868\u8BED\u53E5\u65E0\u9700\u518D\u6307\u5B9A",(0,s.jsx)(n.code,{children:"replication_allocation"}),"\u3002"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,s.jsx)(n.p,{children:"\u66F4\u6539 database \u7684\u526F\u672C\u5206\u5E03\u7B56\u7565\u4E0D\u4F1A\u5BF9\u5DF2\u6709\u7684 table \u4EA7\u751F\u5F71\u54CD\u3002"})})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return o},a:function(){return i}});var r=l(667294);let s={},c=r.createContext(s);function i(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);