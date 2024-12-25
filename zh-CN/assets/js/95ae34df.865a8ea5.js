"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["932398"],{662122:function(r,o,n){n.r(o),n.d(o,{metadata:()=>e,contentTitle:()=>i,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>d});var e=JSON.parse('{"id":"admin-manual/workload-management/workload-group","title":"Workload Group","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/workload-management/workload-group.md","sourceDirName":"admin-manual/workload-management","slug":"/admin-manual/workload-management/workload-group","permalink":"/zh-CN/docs/admin-manual/workload-management/workload-group","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Workload Group","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u6982\u8FF0","permalink":"/zh-CN/docs/admin-manual/workload-management/workload-management-summary"},"next":{"title":"Resource Group","permalink":"/zh-CN/docs/admin-manual/workload-management/resource-group"}}'),l=n("785893"),s=n("250065");let d={title:"Workload Group",language:"zh-CN"},i=void 0,a={},c=[{value:"\u7248\u672C\u5347\u7EA7\u8BF4\u660E",id:"\u7248\u672C\u5347\u7EA7\u8BF4\u660E",level:2},{value:"\u914D\u7F6E CGroup \u73AF\u5883",id:"\u914D\u7F6E-cgroup-\u73AF\u5883",level:2},{value:"\u786E\u5B9A BE \u8282\u70B9\u5B89\u88C5 CGroup",id:"\u786E\u5B9A-be-\u8282\u70B9\u5B89\u88C5-cgroup",level:3},{value:"\u786E\u5B9A CGroup \u7248\u672C",id:"\u786E\u5B9A-cgroup-\u7248\u672C",level:4},{value:"\u4F7F\u7528 CGroup V1 \u7248\u672C",id:"\u4F7F\u7528-cgroup-v1-\u7248\u672C",level:3},{value:"\u4F7F\u7528 CGroup V2 \u7248\u672C",id:"\u4F7F\u7528-cgroup-v2-\u7248\u672C",level:3},{value:"\u4E3A BE \u8282\u70B9\u914D\u7F6E CGroup \u73AF\u5883",id:"\u4E3A-be-\u8282\u70B9\u914D\u7F6E-cgroup-\u73AF\u5883",level:3},{value:"\u4F7F\u7528 Workload Group \u7BA1\u7406\u8D44\u6E90",id:"\u4F7F\u7528-workload-group-\u7BA1\u7406\u8D44\u6E90",level:2},{value:"\u521B\u5EFA\u81EA\u5B9A\u4E49 Workload Group",id:"\u521B\u5EFA\u81EA\u5B9A\u4E49-workload-group",level:3},{value:"\u4FEE\u6539 Workload Group \u7684\u8D44\u6E90\u89C4\u5219",id:"\u4FEE\u6539-workload-group-\u7684\u8D44\u6E90\u89C4\u5219",level:3},{value:"\u6DFB\u52A0\u4E0E\u4FEE\u6539\u8D44\u6E90\u9879",id:"\u6DFB\u52A0\u4E0E\u4FEE\u6539\u8D44\u6E90\u9879",level:4},{value:"\u914D\u7F6E\u8D44\u6E90\u8F6F\u9650\u4E0E\u786C\u9650",id:"\u914D\u7F6E\u8D44\u6E90\u8F6F\u9650\u4E0E\u786C\u9650",level:4},{value:"\u4E3A\u79DF\u6237\u7ED1\u5B9A Workload Group",id:"\u4E3A\u79DF\u6237\u7ED1\u5B9A-workload-group",level:3},{value:"\u4E3A Workload Group \u8BBE\u7F6E\u5206\u7EC4",id:"\u4E3A-workload-group-\u8BBE\u7F6E\u5206\u7EC4",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function u(r){let o={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...r.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.p,{children:"\u5728 Doris \u4E2D\u4F7F\u7528 Workload Group \u7BA1\u7406\u4E0E\u9650\u5236\u8D44\u6E90\u3002\u901A\u8FC7\u8D44\u6E90\u7BA1\u63A7\u65B9\u5F0F\u53EF\u4EE5\u6709\u6548\u9650\u5236\u67E5\u8BE2\u4E0E\u5BFC\u5165\u7B49\u8D1F\u8F7D\u6240\u7528\u7684 CPU\u3001\u5185\u5B58\u4E0E IO \u8D44\u6E90\uFF0C\u4E5F\u53EF\u4EE5\u521B\u5EFA\u67E5\u8BE2\u961F\u5217\uFF0C\u63A7\u5236\u96C6\u7FA4\u4E2D\u7684\u67E5\u8BE2\u6700\u5927\u5E76\u53D1\u91CF\u3002\u81EA Doris 2.1 \u7248\u672C\u540E\uFF0C\u4F7F\u7528\u57FA\u4E8E CGroup \u5BF9 CPU \u8D44\u6E90\u8FDB\u884C\u9650\u5236\u3002\u5728\u4F7F\u7528 Workload \u8D44\u6E90\u7BA1\u63A7\u529F\u80FD\u524D\uFF0C\u9700\u8981\u5148\u914D\u7F6E CGroup \u73AF\u5883\u3002\u5728\u521B\u5EFA Workload Group \u7BA1\u63A7\u8D44\u6E90\u524D\uFF0C\u9700\u8981\u6839\u636E\u4E1A\u52A1\u9009\u62E9\u5BF9\u8D44\u6E90\u8FDB\u884C\u8F6F\u9650\u6216\u786C\u9650\uFF1A"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u8BBE\u7F6E\u8D44\u6E90\u8F6F\u9650\uFF0C\u5728\u6CA1\u6709\u8D44\u6E90\u4E89\u7528\u65F6\uFF0C\u53EF\u4EE5\u501F\u7528\u5176\u4ED6 Workload Group \u8D44\u6E90\uFF0C\u8D85\u8FC7\u8F6F\u9650\uFF1B"}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u8BBE\u7F6E\u8D44\u6E90\u786C\u9650\uFF0C\u65E0\u8BBA\u662F\u5426\u5B58\u5728\u8D44\u6E90\u4E89\u7528\uFF0C\u90FD\u65E0\u6CD5\u8D85\u8FC7\u786C\u9650\u8BBE\u7F6E\u7684\u8D44\u6E90\u914D\u989D\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(o.p,{children:"\u5728\u4F7F\u7528 Workload \u8D44\u6E90\u7BA1\u63A7\u65F6\uFF0C\u9700\u8981\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A"}),"\n",(0,l.jsxs)(o.ol,{children:["\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u521B\u5EFA Workload Group\uFF1B"}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u5411 Workload Group \u4E2D\u6DFB\u52A0\u8D44\u6E90\u9650\u5236\u89C4\u5219\uFF1B"}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u4E3A\u79DF\u6237\u7ED1\u5B9A Workload Group\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(o.h2,{id:"\u7248\u672C\u5347\u7EA7\u8BF4\u660E",children:"\u7248\u672C\u5347\u7EA7\u8BF4\u660E"}),"\n",(0,l.jsx)(o.p,{children:"\u81EA Doris 2.0 \u7248\u672C\u5F00\u59CB\u63D0\u4F9B Workload \u8D44\u6E90\u7BA1\u63A7\u529F\u80FD\u3002\u5728 Doris 2.0 \u7248\u672C\u4E2D\uFF0CWorkload \u8D44\u6E90\u7BA1\u63A7\u4E0D\u4F9D\u8D56\u4E8E CGroup\uFF0C\u800C Doris 2.1 \u7248\u672C\u4E2D\u9700\u8981\u4F9D\u8D56 CGroup\u3002"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u4ECE Doris 1.2 \u5347\u7EA7\u5230 2.0\uFF1A\u5EFA\u8BAE\u96C6\u7FA4\u5347\u7EA7\u5B8C\u6210\u540E\uFF0C\u518D\u5F00\u542F Workload \u8D44\u6E90\u7BA1\u63A7\u529F\u80FD\u3002\u53EA\u5347\u7EA7\u90E8\u5206 follower FE \u8282\u70B9\uFF0C\u53EF\u80FD\u4F1A\u56E0\u4E3A\u672A\u5347\u7EA7\u7684 FE \u8282\u70B9\u6CA1\u6709 Workload Group \u7684\u5143\u6570\u636E\u4FE1\u606F\uFF0C\u5BFC\u81F4\u5DF2\u5347\u7EA7\u7684 follower FE \u8282\u70B9\u67E5\u8BE2\u5931\u8D25\u3002"}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u4ECE Doris 2.0 \u5347\u7EA7\u5230 2.1\uFF1A\u7531\u4E8E 2.1 \u7248\u672C\u7684 Workload \u8D44\u6E90\u7BA1\u63A7\u529F\u80FD\u4F9D\u8D56\u4E8E CGroup\uFF0C\u9700\u8981\u5148\u914D\u7F6E CGroup \u73AF\u5883\uFF0C\u5728\u5347\u7EA7\u5230 Doris 2.1 \u7248\u672C\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(o.h2,{id:"\u914D\u7F6E-cgroup-\u73AF\u5883",children:"\u914D\u7F6E CGroup \u73AF\u5883"}),"\n",(0,l.jsx)(o.p,{children:"\u5728 Doris \u7684 2.0 \u7248\u672C\u4F7F\u7528\u57FA\u4E8E Doris \u7684\u8C03\u5EA6\u5B9E\u73B0 CPU \u8D44\u6E90\u7684\u9650\u5236\uFF0C\u867D\u7136\u63D0\u4F9B\u4E86\u6781\u5927\u7684\u7075\u6D3B\u6027\uFF0C\u4F46\u7531\u4E8E CPU \u7684\u9694\u79BB\u4E0D\u591F\u7CBE\u51C6\uFF0C\u65E0\u6CD5\u63D0\u4F9B CPU \u7684\u786C\u9694\u79BB\u9650\u5236\u3002\u4ECE 2.1 \u7248\u672C\u8D77\uFF0CDoris \u4F7F\u7528\u57FA\u4E8E CGroup \u5BF9 CPU \u8D44\u6E90\u8FDB\u884C\u9650\u5236\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u5BF9\u8D44\u6E90\u9694\u79BB\u6709\u5F3A\u70C8\u9700\u6C42\u7684\u7528\u6237\u5347\u7EA7\u5230 2.1 \u7248\u672C\uFF0C\u540C\u65F6\u5728\u6240\u6709 BE \u8282\u70B9\u4E0A\u5DF2\u7ECF\u5B89\u88C5\u597D CGroup \u7684\u73AF\u5883\u3002\n\u7528\u6237\u5982\u679C\u5728 2.0 \u7248\u672C\u4F7F\u7528\u4E86 Workload Group \u7684\u8F6F\u9650\u5E76\u5347\u7EA7\u5230\u4E86 2.1 \u7248\u672C\uFF0C\u90A3\u4E48\u4E5F\u9700\u8981\u914D\u7F6E CGroup\uFF0C\u5426\u5219\u53EF\u80FD\u5BFC\u81F4\u8F6F\u9650\u5931\u6548\u3002\u5728\u4E0D\u914D\u7F6E cgroup \u7684\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 Workload Group \u9664 CPU \u9650\u5236\u5916\u7684\u6240\u6709\u529F\u80FD\u3002"}),"\n",(0,l.jsx)(o.admonition,{type:"tip",children:(0,l.jsxs)(o.ol,{children:["\n",(0,l.jsx)(o.li,{children:"Doris BE \u8282\u70B9\u80FD\u591F\u5F88\u597D\u7684\u4F7F\u7528\u673A\u5668\u7684 CPU \u4E0E\u5185\u5B58\u8D44\u6E90\uFF0C\u5EFA\u8BAE\u5355\u53F0\u673A\u5668\u4E0A\u53EA\u90E8\u7F72\u4E00\u4E2A BE \u5B9E\u4F8B\uFF0C\u76EE\u524D\u7684 Workload \u8D44\u6E90\u7BA1\u63A7\u4E0D\u652F\u6301\u4E00\u4E2A\u673A\u5668\u591A\u4E2A BE \u7684\u90E8\u7F72\u65B9\u5F0F\uFF1B"}),"\n",(0,l.jsx)(o.li,{children:"\u5F53\u673A\u5668\u91CD\u542F\u4E4B\u540E\uFF0C\u4EE5\u4E0B\u7684 CGroup \u914D\u7F6E\u5C31\u4F1A\u6E05\u7A7A\u3002\u5982\u679C\u671F\u671B\u914D\u7F6E\u91CD\u542F\u4E4B\u540E\u53EF\u4EE5\u4E5F\u53EF\u4EE5\u751F\u6548\uFF0C\u53EF\u4EE5\u4F7F\u7528 systemd \u628A\u64CD\u4F5C\u8BBE\u7F6E\u6210\u7CFB\u7EDF\u7684\u81EA\u5B9A\u4E49\u670D\u52A1\uFF0C\u8FD9\u6837\u5728\u6BCF\u6B21\u673A\u5668\u91CD\u542F\u7684\u65F6\u5019\uFF0C\u81EA\u52A8\u5B8C\u6210\u521B\u5EFA\u548C\u6388\u6743\u64CD\u4F5C"}),"\n",(0,l.jsx)(o.li,{children:"\u5982\u679C\u662F\u5728\u5BB9\u5668\u5185\u4F7F\u7528 CGroup\uFF0C\u9700\u8981\u5BB9\u5668\u5177\u5907\u64CD\u4F5C\u5BBF\u4E3B\u673A\u7684\u6743\u9650\u3002"}),"\n"]})}),"\n",(0,l.jsx)(o.h3,{id:"\u786E\u5B9A-be-\u8282\u70B9\u5B89\u88C5-cgroup",children:"\u786E\u5B9A BE \u8282\u70B9\u5B89\u88C5 CGroup"}),"\n",(0,l.jsx)(o.p,{children:"\u901A\u8FC7\u68C0\u67E5 /proc/filesystems \u6587\u4EF6\u53EF\u4EE5\u5224\u65AD\u662F\u5426\u5B89\u88C5 CGroup\uFF1A"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{children:"cat /proc/filesystems | grep cgroup\nnodev   cgroup\nnodev   cgroup2\nnodev   cgroupfs\n"})}),"\n",(0,l.jsx)(o.p,{children:"\u5728\u4E0A\u8FF0\u8FD4\u56DE\u7ED3\u679C\u4E2D\uFF0C\u5217\u51FA\u4E86 cgroup\uFF0Ccgroup2 \u4E0E cgroupfs\uFF0C\u8FD9\u8868\u660E\u5185\u6838\u652F\u6301\u4E86 CGroup\u3002\u8FD8\u9700\u8981\u8FDB\u4E00\u6B65\u67E5\u770B CGroup \u7248\u672C\u3002"}),"\n",(0,l.jsx)(o.h4,{id:"\u786E\u5B9A-cgroup-\u7248\u672C",children:"\u786E\u5B9A CGroup \u7248\u672C"}),"\n",(0,l.jsx)(o.p,{children:"\u7CFB\u7EDF\u4F7F\u7528 CGroup V1\uFF0C\u4F1A\u6709\u591A\u4E2A\u5B50\u7CFB\u7EDF\u5206\u522B\u6302\u5728\u5728 /sys/fs/cgroup \u76EE\u5F55\u4E0B\u3002\u5982\u679C\u5305\u542B\u4E86 /sys/fs/cgroup/cpu \u76EE\u5F55\uFF0C\u8BF4\u660E\u76EE\u524D\u751F\u6548\u7684\u662F CGroup V1\uFF1A"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-shell",children:"## \u5305\u542B /sys/fs/cgroup/cpu \u76EE\u5F55\uFF0CCGroup V1 \u751F\u6548\nls /sys/fs/cgroup/cpu\n"})}),"\n",(0,l.jsx)(o.p,{children:"\u7CFB\u7EDF\u4F7F\u7528 CGroup V2\uFF0C\u4F1A\u91C7\u7528\u7EDF\u4E00\u7684\u5C42\u7EA7\u7ED3\u6784\uFF0C\u6240\u6709\u7684\u63A7\u5236\u5668\u90FD\u5728\u4E00\u4E2A\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u7BA1\u7406\u3002\u5982\u679C\u5305\u542B\u4E86 /sys/fs/cgroup/cgroup.controllers \u76EE\u5F55\uFF0C\u5219\u8BC1\u660E\u76EE\u524D\u751F\u6548\u7684\u662F CGroup V2\uFF1A"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-shell",children:"## \u5305\u542B /sys/fs/cgroup/cgroup.controllers \u76EE\u5F55\uFF0CCGroup V2 \u751F\u6548\nls /sys/fs/cgroup/cgroup.controllers\n"})}),"\n",(0,l.jsx)(o.p,{children:"\u5728 Doris \u4E2D\u4F7F\u7528 Workload \u7BA1\u63A7\u8D44\u6E90\uFF0C\u9700\u8981\u9488\u5BF9\u4E8E CGroup \u7684\u7248\u672C\u5206\u522B\u914D\u7F6E\u3002"}),"\n",(0,l.jsx)(o.h3,{id:"\u4F7F\u7528-cgroup-v1-\u7248\u672C",children:"\u4F7F\u7528 CGroup V1 \u7248\u672C"}),"\n",(0,l.jsx)(o.p,{children:"\u5982\u679C\u4F7F\u7528 CGroup V1 \u7248\u672C\uFF0C\u9700\u8981\u4E3A Doris \u5728 /sys/fs/cgroup/cpu \u76EE\u5F55\u4E0B\u521B\u5EFA CPU \u7BA1\u63A7\u76EE\u5F55\u3002\u60A8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8BE5\u76EE\u5F55\u540D\u79F0\uFF0C\u4E0B\u4F8B\u4E2D\u4F7F\u7528 /sys/fs/cgroup/cpu/doris\uFF1A"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-shell",children:"## Create cgroup dir for Doris\nmkdir /sys/fs/cgroup/cpu/doris\n\n## Modify the Doris cgroup directory permissions\nchmod 770 /sys/fs/cgroup/cpu/doris\n\n## Grant user permissions for Doris usage\nchown -R doris:doris /sys/fs/cgroup/cpu/doris\n"})}),"\n",(0,l.jsx)(o.h3,{id:"\u4F7F\u7528-cgroup-v2-\u7248\u672C",children:"\u4F7F\u7528 CGroup V2 \u7248\u672C"}),"\n",(0,l.jsx)(o.p,{children:"\u56E0\u4E3A CGroup V2 \u5BF9\u4E8E\u6743\u9650\u7BA1\u63A7\u6BD4\u8F83\u4E25\u683C\uFF0C\u9700\u8981\u5177\u5907\u6839\u76EE\u5F55\u7684 cgroup.procs \u6587\u4EF6\u7684\u5199\u6743\u9650\u624D\u80FD\u5B9E\u73B0\u8FDB\u7A0B\u5728 group \u4E4B\u95F4\u7684\u79FB\u52A8\u3002\n\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u4E3A cgroup.procs \u76EE\u5F55\u6388\u6743\uFF1A"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-shell",children:"chmod a+w /sys/fs/cgroup/cgroup.procs\n"})}),"\n",(0,l.jsx)(o.h3,{id:"\u4E3A-be-\u8282\u70B9\u914D\u7F6E-cgroup-\u73AF\u5883",children:"\u4E3A BE \u8282\u70B9\u914D\u7F6E CGroup \u73AF\u5883"}),"\n",(0,l.jsx)(o.p,{children:"\u5728\u4F7F\u7528 Workload \u8FDB\u884C\u8D44\u6E90\u7BA1\u63A7\u524D\uFF0C\u9700\u8981\u5728 BE \u7684\u914D\u7F6E\u6587\u4EF6 be/conf/be.conf \u4E2D\u914D\u7F6E CGroup \u7684\u8DEF\u5F84\uFF1A"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{children:"doris_cgroup_cpu_path = /sys/fs/cgroup/cpu/doris\n"})}),"\n",(0,l.jsx)(o.p,{children:"\u5728\u914D\u7F6E be.conf \u6587\u4EF6\u540E\uFF0C\u9700\u8981\u91CD\u542F BE \u8282\u70B9\uFF0C\u5728 BE.INFO \u65E5\u5FD7\u6587\u4EF6\u4E2D\u53EF\u4EE5\u67E5\u770B\u5230 add thread {pid} to group \u63D0\u793A\uFF0C\u8868\u793A\u914D\u7F6E\u6210\u529F\u3002"}),"\n",(0,l.jsx)(o.h2,{id:"\u4F7F\u7528-workload-group-\u7BA1\u7406\u8D44\u6E90",children:"\u4F7F\u7528 Workload Group \u7BA1\u7406\u8D44\u6E90"}),"\n",(0,l.jsx)(o.p,{children:"\u5728\u521B\u5EFA Workload Group \u540E\uFF0C\u53EF\u4EE5\u4E3A Workload Group \u6DFB\u52A0\u8D44\u6E90\u9650\u5236\u89C4\u5219\u3002Doris \u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8D44\u6E90\u7684\u89C4\u5219\u9650\u5236\uFF1A"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u5BF9 CPU \u8FDB\u884C\u786C\u9650\u6216\u8F6F\u9650"}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u5BF9\u5185\u5B58\u8FDB\u884C\u786C\u9650\u6216\u8F6F\u9650"}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u5BF9\u8FDC\u7A0B\u6216\u672C\u5730 IO \u8FDB\u884C\u9650\u5236"}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u521B\u5EFA\u67E5\u8BE2\u961F\u5217\u7BA1\u7406\u67E5\u8BE2\u4F5C\u4E1A"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(o.h3,{id:"\u521B\u5EFA\u81EA\u5B9A\u4E49-workload-group",children:"\u521B\u5EFA\u81EA\u5B9A\u4E49 Workload Group"}),"\n",(0,l.jsxs)(o.p,{children:["\u9700\u8981\u4F7F\u7528\u5177\u6709 ADMIN \u6743\u9650\u7684\u7528\u6237\u521B\u5EFA Workload Group\uFF0C\u540C\u65F6\u6DFB\u52A0\u8D44\u6E90\u89C4\u5219\u3002\u901A\u8FC7 ",(0,l.jsx)(o.code,{children:"CREATE WORKLOAD GROUP"})," \u8BED\u53E5\u53EF\u4EE5\u521B\u5EFA\u81EA\u5B9A\u4E49 Workload Group\u3002\u81EA Doris 2.1 \u7248\u672C\u8D77\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u521B\u5EFA\u540D\u4E3A Normal \u7684 Workload Group\uFF0C\u7528\u6237\u4F1A\u9ED8\u8BA4\u7ED1\u5B9A\u5230 Normal \u4E0B\u3002\u5728\u4EE5\u4E0B\u793A\u4F8B\u4E2D\u521B\u5EFA\u4E86 Workload Group g1\uFF0C\u540C\u65F6\u6DFB\u52A0\u4E86 CPU \u4E0E\u5185\u5B58\u8D44\u6E90\u7684\u9650\u5236\u89C4\u5219\uFF1A"]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{children:'CREATE Workload Group IF NOT EXISTS g1\nPROPERTIES(\n    "cpu_share"="1024",\n    "memory_limit"="30%"\n);\n'})}),"\n",(0,l.jsx)(o.h3,{id:"\u4FEE\u6539-workload-group-\u7684\u8D44\u6E90\u89C4\u5219",children:"\u4FEE\u6539 Workload Group \u7684\u8D44\u6E90\u89C4\u5219"}),"\n",(0,l.jsxs)(o.p,{children:["\u8BBF\u95EE Doris \u7CFB\u7EDF\u8868 ",(0,l.jsx)(o.code,{children:"information_schema.workload_groups"})," \u53EF\u4EE5\u67E5\u770B\u521B\u5EFA\u7684 Workload Group \u4FE1\u606F\u3002\n\u5220\u9664 Workload Group \u53EF\u4EE5\u53C2\u8003 ",(0,l.jsx)(o.a,{href:"../../sql-manual/sql-statements/cluster-management/compute-management/DROP-RESOURCE",children:"DROP WORKLOAD GROUP"}),";\n\u901A\u8FC7 ALTER-WORKLOAD-GROUP \u547D\u4EE4\u53EF\u4EE5\u8C03\u6574\u4E0E\u4FEE\u6539 Workload Group \u914D\u7F6E\uFF0C\u53C2\u8003 ",(0,l.jsx)(o.a,{href:"/zh-CN/docs/sql-manual/sql-statements/cluster-management/compute-management/ALTER-WORKLOAD-GROUP",children:"ALTER-WORKLOAD-GROUP"}),"."]}),"\n",(0,l.jsx)(o.h4,{id:"\u6DFB\u52A0\u4E0E\u4FEE\u6539\u8D44\u6E90\u9879",children:"\u6DFB\u52A0\u4E0E\u4FEE\u6539\u8D44\u6E90\u9879"}),"\n",(0,l.jsx)(o.p,{children:"\u5728\u4EE5\u4E0B\u793A\u4F8B\u4E2D\uFF0C\u4E3A g1 \u8D44\u6E90\u7EC4\u4FEE\u6539\u4E86\u5185\u5B58\u9650\u5236\u89C4\u5219\uFF1A"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-sql",children:"ALTER Workload Group g1 PROPERTIES('memory_limit'='10%');\n"})}),"\n",(0,l.jsx)(o.p,{children:"\u901A\u8FC7 information_schema.workload_groups \u7CFB\u7EDF\u8868\u53EF\u4EE5\u67E5\u770B\u5230\u4FEE\u6539\u540E\u7684\u5185\u5B58\u9650\u5236\uFF1A"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-sql",children:"SELECT name, memory_limit FROM information_schema.workload_groups;\n+--------+--------------+\n| name   | memory_limit |\n+--------+--------------+\n| normal | 30%          |\n| g1     | 10%          |\n+--------+--------------+\n"})}),"\n",(0,l.jsx)(o.h4,{id:"\u914D\u7F6E\u8D44\u6E90\u8F6F\u9650\u4E0E\u786C\u9650",children:"\u914D\u7F6E\u8D44\u6E90\u8F6F\u9650\u4E0E\u786C\u9650"}),"\n",(0,l.jsx)(o.p,{children:"\u4F7F\u7528 Workload Group \u529F\u80FD\uFF0C\u53EF\u4EE5\u4E3A CPU \u4EE5\u53CA\u5185\u5B58\u8D44\u6E90\u8BBE\u7F6E\u8F6F\u9650\u4E0E\u786C\u9650\uFF0C\u5BF9\u4E8E\u8FDC\u7A0B\u4E0E\u672C\u5730 IO\uFF0C\u53EA\u63D0\u4F9B\u786C\u9650\u80FD\u529B\uFF1A"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u8F6F\u9650\uFF1A\u8F6F\u9650\u4F5C\u4E3A\u8D44\u6E90\u7684\u8B66\u6212\u7EBF\uFF0C\u7528\u6237\u6B63\u5E38\u64CD\u4F5C\u4E2D\u4E0D\u4F1A\u8D85\u8FC7\u8FD9\u4E2A\u9650\u5EA6\u3002\u5F53\u5176\u4ED6 Workload Group \u8D1F\u8F7D\u8F83\u4F4E\u65F6\uFF0C\u53EF\u4EE5\u501F\u7528\u5176\u4ED6 Workload Group \u8D44\u6E90\uFF0C\u8D85\u8FC7\u8F6F\u9650\u8BBE\u7F6E\uFF1B"}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u786C\u9650\uFF1A\u786C\u9650\u4F5C\u4E3A\u8D44\u6E90\u7684\u7EDD\u5BF9\u4F7F\u7528\u4E0A\u9650\uFF0C\u65E0\u8BBA\u5176\u4ED6 Workload Group \u662F\u5426\u6709\u8D1F\u8F7D\uFF0C\u90FD\u4E0D\u80FD\u8D85\u8FC7\u786C\u9650\u4E0A\u9650\u3002\u786C\u9650\u901A\u5E38\u7528\u6765\u9632\u6B62\u7CFB\u7EDF\u8D44\u6E90\u88AB\u6EE5\u7528\u3002"}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(o.table,{children:[(0,l.jsx)(o.thead,{children:(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.th,{}),(0,l.jsx)(o.th,{children:"\u8F6F\u9650\u5F00\u5173\u4E0E\u53C2\u6570"}),(0,l.jsx)(o.th,{children:"\u786C\u9650\u5F00\u5173\u4E0E\u53C2\u6570"}),(0,l.jsx)(o.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(o.tbody,{children:[(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"CPU"}),(0,l.jsx)(o.td,{children:"\u5F00\u5173\uFF1AFE Config - enable_cpu_hard_limit = false \u53C2\u6570\uFF1AProperty - cpu_share"}),(0,l.jsxs)(o.td,{children:["\u5F00\u5173\uFF1AFE Config - enable_cpu_hard_limit = true ",(0,l.jsx)(o.br,{})," \u53C2\u6570\uFF1Aproperty - cpu_hard_limit \u4FEE\u6539 CPU \u786C\u9650"]}),(0,l.jsx)(o.td,{children:"\u4E0D\u540C Workload Group \u53EA\u80FD\u540C\u65F6\u8BBE\u7F6E\u8F6F\u9650\u6216\u786C\u9650\uFF0C\u65E0\u6CD5\u8BBE\u7F6E\u90E8\u5206\u7EC4\u786C\u9650\u53CA\u90E8\u5206\u7EC4\u8F6F\u9650"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"Memory"}),(0,l.jsxs)(o.td,{children:["\u5F00\u5173\uFF1Aproperty - enable_memory_overcommit = true ",(0,l.jsx)(o.br,{})," \u53C2\u6570\uFF1Aproperty - memory_limit"]}),(0,l.jsxs)(o.td,{children:["\u5F00\u5173\uFF1Aproperty - enable_memory_overcommit = false ",(0,l.jsx)(o.br,{})," \u53C2\u6570\uFF1Aproperty - memory_limit"]}),(0,l.jsx)(o.td,{children:"\u4E0D\u540C Workload Group \u53EF\u4EE5\u4EFB\u610F\u8BBE\u7F6E\u8F6F\u9650\u6216\u786C\u9650\uFF0C\u90E8\u5206\u7EC4\u53EF\u4EE5\u8BBE\u7F6E\u786C\u9650\uFF0C\u90E8\u5206\u7EC4\u53EF\u4EE5\u8BBE\u7F6E\u8F6F\u9650"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"\u672C\u5730 IO"}),(0,l.jsx)(o.td,{children:"\u65E0"}),(0,l.jsx)(o.td,{children:"\u53C2\u6570\uFF1Aread_bytes_per_second"}),(0,l.jsx)(o.td,{children:"\u6682\u65F6\u53EA\u63D0\u4F9B\u672C\u5730 IO \u786C\u9650"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"\u8FDC\u7A0B IO"}),(0,l.jsx)(o.td,{children:"\u65E0"}),(0,l.jsx)(o.td,{children:"\u53C2\u6570\uFF1Aremote_read_bytes_per_second"}),(0,l.jsx)(o.td,{children:"\u6682\u65F6\u53EA\u63D0\u4F9B\u8FDC\u7A0B IO \u786C\u9650"})]})]})]}),"\n",(0,l.jsx)(o.h3,{id:"\u4E3A\u79DF\u6237\u7ED1\u5B9A-workload-group",children:"\u4E3A\u79DF\u6237\u7ED1\u5B9A Workload Group"}),"\n",(0,l.jsx)(o.p,{children:"\u4F7F\u7528\u975E ADMIN \u7528\u6237\uFF0C\u9700\u8981\u5148\u786E\u5B9A\u662F\u5426\u5177\u6709\u8BE5 Workload Group \u7684\u6743\u9650\u3002\u901A\u8FC7\u67E5\u770B information_schema.workload_groups \u7CFB\u7EDF\u8868\u5224\u65AD\u662F\u5426\u5177\u6709\u4F7F\u7528 Workload Group \u7684\u6743\u9650\u3002\u5F53\u53EF\u4EE5\u67E5\u8BE2\u5230 Workload Group \u65F6\uFF0C\u4EE3\u8868\u5177\u6709\u4F7F\u7528\u8BE5 Workload Group \u7684\u6743\u9650\u3002\u4E0B\u4F8B\u4E2D\u4EE3\u8868\u53EF\u4EE5\u4F7F\u7528 g1 \u4E0E normal Workload Group\uFF1A"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-sql",children:"SELECT name FROM information_schema.workload_groups;\n+--------+\n| name   |\n+--------+\n| normal |\n| g1     |\n+--------+\n"})}),"\n",(0,l.jsx)(o.p,{children:"\u5982\u679C\u65E0\u6CD5\u770B\u5230 g1 Workload Group\uFF0C\u53EF\u4EE5\u4F7F\u7528 GRANT \u8BED\u53E5\u4E3A\u7528\u6237\u6388\u6743\u3002\n\u5728\u4E3A\u79DF\u6237\u7ED1\u5B9A Workload Group \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E user property \u6216\u6307\u5B9A session \u53D8\u91CF\u4E24\u79CD\u65B9\u5F0F\u3002\u5F53\u540C\u65F6\u4F7F\u7528\u4E86\u4E24\u79CD\u65B9\u5F0F\u65F6\uFF0Csession \u53D8\u91CF\u7684\u4F18\u5148\u7EA7\u8981\u9AD8\u4E8E user property\uFF1A"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u4F7F\u7528 user property \u7ED1\u5B9A Workload Group\uFF1A\u4E00\u822C\u7531\u7BA1\u7406\u5458\u4F7F\u7528 SET-PROPERTY \u547D\u4EE4\u4E3A\u79DF\u6237\u7ED1\u5B9A\u9ED8\u8BA4\u7684 Workload Group\u3002\u5728\u4EE5\u4E0B\u793A\u4F8B\u4E2D\uFF0C\u4E3A test_wlg \u79DF\u6237\u7ED1\u5B9A\u4E86\u9ED8\u8BA4 Workload Group g1:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-sql",children:"set property for 'test_wlg' 'default_workload_group' = 'g1';\n"})}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u4F7F\u7528 session \u53D8\u91CF\u7ED1\u5B9A Workload Group\uFF1A\u5728\u4E1A\u52A1\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5373\u4FBF\u7BA1\u7406\u5458\u914D\u7F6E\u4E86\u9ED8\u8BA4\u7684 Workload Group\uFF0C\u4E5F\u53EF\u4EE5\u5728 session \u4E2D\u901A\u8FC7 workload_group \u53D8\u91CF\u4FEE\u6539\u3002\u5728\u4EE5\u4E0B\u793A\u4F8B\u4E2D\uFF0C\u4E3A\u5F53\u524D session \u914D\u7F6E\u4E86\u7ED1\u5B9A Workload Group g1\uFF1A"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-sql",children:"SET workload_group = 'g1';\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(o.h2,{id:"\u4E3A-workload-group-\u8BBE\u7F6E\u5206\u7EC4",children:"\u4E3A Workload Group \u8BBE\u7F6E\u5206\u7EC4"}),"\n",(0,l.jsx)(o.p,{children:"\u5728\u591A\u8D1F\u8F7D\u6216\u591A\u79DF\u6237\u73AF\u5883\u4E2D\uFF0C\u4E00\u4E2A Doris \u96C6\u7FA4\u53EF\u80FD\u88AB\u62C6\u5206\u6210\u591A\u4E2A\u5B50\u96C6\u7FA4\u4F7F\u7528\uFF0C\u5982\u90E8\u5206\u8282\u70B9\u7528\u4E8E\u5916\u90E8\u5B58\u50A8\u7684\u8054\u90A6\u67E5\u8BE2\uFF0C\u90E8\u5206\u8282\u70B9\u7528\u4E8E\u5185\u8868\u5B9E\u65F6\u67E5\u8BE2\u3002Workload Group \u53EF\u4EE5\u4E3A BE \u8282\u70B9\u6253\u6807\u7B7E\uFF08tag\uFF09\uFF0C\u6807\u7B7E\u76F8\u540C\u7684 BE \u8282\u70B9\u7EC4\u6210\u5B50\u96C6\u7FA4\u3002\u6BCF\u4E2A\u5B50\u96C6\u7FA4\u7684\u8D44\u6E90\u72EC\u7ACB\u8BA1\u7B97\uFF0C\u5B50\u96C6\u7FA4\u5185\u7D2F\u52A0\u503C\u4E0D\u80FD\u8D85\u8FC7 100%\u3002\u5728\u4E0B\u4F8B\u4E2D\uFF0C\u5C06\u4E03\u53F0\u673A\u5668\u5206\u6210 sub_a \u4E0E sub_b \u4E24\u4E2A\u5B50\u96C6\u7FA4\uFF0C\u4E24\u4E2A\u5B50\u96C6\u7FA4\u4E2D\u5206\u522B\u521B\u5EFA\u4E86\u4E24\u4E2A Workload Group\u3002\n\u5728\u591A\u8D1F\u8F7D\u6216\u591A\u79DF\u6237\u7684\u73AF\u5883\u4E2D\uFF0C\u4E00\u4E2A Doris \u96C6\u7FA4\u53EF\u80FD\u88AB\u62C6\u5206\u6210\u591A\u4E2A\u5B50\u96C6\u7FA4\u4F7F\u7528\uFF0C\u5982\u90E8\u5206\u8282\u70B9\u7528\u4E8E\u5916\u90E8\u5B58\u50A8\u7684\u8054\u90A6\u67E5\u8BE2\uFF0C\u90E8\u5206\u8282\u70B9\u7528\u4E8E\u5185\u90E8\u8868\u7684\u4E8B\u5B9E\u67E5\u8BE2\uFF0C\u4E24\u4E2A\u81EA\u5DF1\u7FA4\u5728\u6570\u636E\u5206\u5E03\u4E0E\u8D44\u6E90\u4F7F\u7528\u4E0A\u5B8C\u5168\u9694\u79BB\u3002\u5728\u540C\u4E00\u4E2A\u5B50\u96C6\u7FA4\u7FA4\u5185\uFF0C\u9700\u8981\u521B\u5EFA\u591A\u4E2A\u79DF\u6237\u5E76\u521B\u5EFA\u79DF\u6237\u4E4B\u95F4\u7684\u8D44\u6E90\u4F7F\u7528\u9694\u79BB\u89C4\u5219\u3002\u9488\u5BF9\u4E8E\u8FD9\u7C7B\u590D\u6742\u7684\u8D44\u6E90\u9694\u79BB\u8981\u6C42\uFF0C\u53EF\u4EE5\u7ED3\u5408 Resource Group \u4E0E Workload Group \u529F\u80FD\uFF0C\u4F7F\u7528 Resource Group \u5B9E\u73B0\u591A\u4E2A\u5B50\u96C6\u7FA4\u7684\u8282\u70B9\u7C92\u5EA6\u9694\u79BB\uFF0C\u5728\u81EA\u5DF1\u7FA4\u5185\u4F7F\u7528 Workload Group \u8FDB\u884C\u79DF\u6237\u95F4\u7684\u8D44\u6E90\u9694\u79BB\u3002\u5982\u4E0B\u56FE\u4E2D\u5212\u5206\u6210 A\u3001B \u4E24\u4E2A\u5B50\u96C6\u7FA4\uFF0C\u6BCF\u4E2A\u5B50\u96C6\u7FA4\u4E2D\u6709\u5404\u81EA\u7684 Workload Group \u8FDB\u884C\u8D44\u6E90\u7BA1\u63A7\uFF1A"}),"\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.img,{alt:"group_workload_group_1",src:n(806901).Z+"",width:"1938",height:"820"})}),"\n",(0,l.jsxs)(o.ol,{children:["\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u521B\u5EFA A \u4E0E B \u4E24\u4E2A Resource Group\uFF0C\u5C06 7 \u53F0\u673A\u5668\u5212\u5206\u6210\u4E24\u4E2A\u5B50\u96C6\u7FA4"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-sql",children:'-- create resource group sub_cluster_a\nALTER SYSTEM MODIFY BACKEND "192.168.88.31:9050" SET("tag.location" = "sub_cluster_a");\nALTER SYSTEM MODIFY BACKEND "192.168.88.32:9050" SET("tag.location" = "sub_cluster_a");\nALTER SYSTEM MODIFY BACKEND "192.168.88.33:9050" SET("tag.location" = "sub_cluster_a");\n\n-- create resource group sub_cluster_b\nALTER SYSTEM MODIFY BACKEND "192.168.88.34:9050" SET("tag.location" = "sub_cluster_b");\nALTER SYSTEM MODIFY BACKEND "192.168.88.35:9050" SET("tag.location" = "sub_cluster_b");\n'})}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u4E3A\u5B50\u96C6\u7FA4\u521B\u5EFA Workload Group \u8FDB\u884C\u5185\u5B58\u8D44\u6E90\u9694\u79BB"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-sql",children:'-- create Workload Groups for sub cluster A\nCREATE Workload Group a_wlg_1 PROPERTIES(\'tag\' = "sub_cluster_a", "memory_limit" = "30");\nCREATE Workload Group a_wlg_2 PROPERTIES(\'tag\' = "sub_cluster_a", "memory_limit" = "30");\nCREATE Workload Group a_wlg_3 PROPERTIES(\'tag\' = "sub_cluster_a", "memory_limit" = "30");\n\n-- create Workload Groups for sub cluster B\nCREATE Workload Group b_wlg_1 PROPERTIES(\'tag\' = "sub_cluster_b", "memory_limit" = "30");\nCREATE Workload Group b_wlg_2 PROPERTIES(\'tag\' = "sub_cluster_b", "memory_limit" = "30");\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(o.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsxs)(o.ol,{children:["\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"\u5728 Kubernetes \u4E2D\u4F7F\u7528 Workload \u7BA1\u63A7\u8D44\u6E90\u3002Workload \u7684 CPU \u7BA1\u7406\u662F\u57FA\u4E8E CGroup \u5B9E\u73B0\u7684\uFF0C\u5982\u679C\u671F\u671B\u5728\u5BB9\u5668\u4E2D\u4F7F\u7528 Workload Group\uFF0C\u90A3\u4E48\u9700\u8981\u4EE5\u7279\u6743\u6A21\u5F0F\u542F\u52A8\u5BB9\u5668\uFF0C\u5BB9\u5668\u5185\u7684 Doris \u8FDB\u7A0B\u624D\u80FD\u5177\u5907\u8BFB\u5199\u5BBF\u4E3B\u673A CGroup \u6587\u4EF6\u7684\u6743\u9650\u3002\u5F53 Doris \u5728\u5BB9\u5668\u5185\u8FD0\u884C\u65F6\uFF0CWorkload Group \u7684 CPU \u8D44\u6E90\u7528\u91CF\u662F\u5728\u5BB9\u5668\u53EF\u7528\u8D44\u6E90\u7684\u60C5\u51B5\u4E0B\u518D\u5212\u5206\u7684\uFF0C\u4F8B\u5982\u5BBF\u4E3B\u673A\u6574\u673A\u662F 64 \u6838\uFF0C\u5BB9\u5668\u88AB\u5206\u914D\u4E86 8 \u4E2A\u6838\u7684\u8D44\u6E90\uFF0CWorkload Group \u914D\u7F6E\u7684 CPU \u786C\u9650\u4E3A 50%\uFF0C\u90A3\u4E48 Workload Group \u5B9E\u9645\u53EF\u7528\u6838\u6570\u4E3A 4 \u4E2A\uFF088 \u6838 * 50%\uFF09\u3002"}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:"WorkloadGroup \u7684\u5185\u5B58\u7BA1\u7406\u548C IO \u7BA1\u7406\u529F\u80FD\u662F Doris \u5185\u90E8\u5B9E\u73B0\uFF0C\u4E0D\u4F9D\u8D56\u5916\u90E8\u7EC4\u4EF6\uFF0C\u56E0\u6B64\u5728\u5BB9\u5668\u548C\u7269\u7406\u673A\u4E0A\u90E8\u7F72\u4F7F\u7528\u5E76\u6CA1\u6709\u533A\u522B\u3002\u5982\u679C\u8981\u5728 K8S \u4E0A\u4F7F\u7528 Doris\uFF0C\u5EFA\u8BAE\u4F7F\u7528 Doris Operator \u8FDB\u884C\u90E8\u7F72\uFF0C\u53EF\u4EE5\u5C4F\u853D\u5E95\u5C42\u7684\u6743\u9650\u7EC6\u8282\u95EE\u9898\u3002"}),"\n"]}),"\n"]})]})}function p(r={}){let{wrapper:o}={...(0,s.a)(),...r.components};return o?(0,l.jsx)(o,{...r,children:(0,l.jsx)(u,{...r})}):u(r)}},806901:function(r,o,n){n.d(o,{Z:function(){return e}});let e=n.p+"assets/images/group_wg_1-a694a599828cd02daab4d370132cb844.png"},250065:function(r,o,n){n.d(o,{Z:function(){return i},a:function(){return d}});var e=n(667294);let l={},s=e.createContext(l);function d(r){let o=e.useContext(s);return e.useMemo(function(){return"function"==typeof r?r(o):{...o,...r}},[o,r])}function i(r){let o;return o=r.disableParentContext?"function"==typeof r.components?r.components(l):r.components||l:d(r.components),e.createElement(s.Provider,{value:o},r.children)}}}]);