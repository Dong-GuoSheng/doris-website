"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["816256"],{775016:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>m,assets:()=>d,toc:()=>r,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTENDS-DISKS","title":"SHOW-FRONTENDS-DISKS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTENDS-DISKS.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTENDS-DISKS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTENDS-DISKS","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW-FRONTENDS-DISKS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW FRONTENDS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTENDS"},"next":{"title":"ADD BACKEND","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/ADD-BACKEND"}}'),a=t("785893"),l=t("250065");let i={title:"SHOW-FRONTENDS-DISKS",language:"zh-CN"},c=void 0,d={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:3},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u67E5\u770B FE \u8282\u70B9\u7684\u91CD\u8981\u76EE\u5F55\u5982\uFF1A\u5143\u6570\u636E\u3001\u65E5\u5FD7\u3001\u5BA1\u8BA1\u65E5\u5FD7\u3001\u4E34\u65F6\u76EE\u5F55\u5BF9\u5E94\u7684\u78C1\u76D8\u4FE1\u606F"}),"\n",(0,a.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW FRONTENDS DISKS;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Name \u8868\u793A\u8BE5 FE \u8282\u70B9\u5728 bdbje \u4E2D\u7684\u540D\u79F0\u3002"}),"\n",(0,a.jsx)(n.li,{children:"Host \u8868\u793A\u8BE5 FE \u8282\u70B9\u7684 IP\u3002"}),"\n",(0,a.jsx)(n.li,{children:"DirType \u8868\u793A\u8981\u5C55\u793A\u7684\u76EE\u5F55\u7C7B\u578B\uFF0C\u5206\u522B\u6709\u56DB\u79CD\u7C7B\u578B\uFF1Ameta\u3001log\u3001audit-log\u3001temp\u3001deploy\u3002"}),"\n",(0,a.jsx)(n.li,{children:"Dir \u8868\u793A\u8981\u5C55\u793A\u7684\u76EE\u5F55\u7C7B\u578B\u7684\u76EE\u5F55\u3002"}),"\n",(0,a.jsx)(n.li,{children:"FileSystem \u8868\u793A\u8981\u5C55\u793A\u7684\u76EE\u5F55\u7C7B\u578B\u6240\u5728\u7684 linux \u7CFB\u7EDF\u7684\u6587\u4EF6\u7CFB\u7EDF\u3002"}),"\n",(0,a.jsx)(n.li,{children:"Capacity \u6587\u4EF6\u7CFB\u7EDF\u7684\u5BB9\u91CF\u3002"}),"\n",(0,a.jsx)(n.li,{children:"Used \u6587\u4EF6\u7CFB\u7EDF\u5DF2\u7528\u5927\u5C0F\u3002"}),"\n",(0,a.jsx)(n.li,{children:"Available \u6587\u4EF6\u7CFB\u7EDF\u5269\u4F59\u5BB9\u91CF\u3002"}),"\n",(0,a.jsx)(n.li,{children:"UseRate \u6587\u4EF6\u7CFB\u7EDF\u4F7F\u7528\u5BB9\u91CF\u5360\u6BD4\u3002"}),"\n",(0,a.jsx)(n.li,{children:"MountOn \u6587\u4EF6\u7CFB\u7EDF\u6302\u5728\u76EE\u5F55\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"mysql> show frontends disks;  +-----------------------------------------+-------------+-----------+---------------------------------+------------+----------+------+-----------+---------+------------+ | Name                                    | Host        | DirType   | Dir                             | Filesystem | Capacity | Used | Available | UseRate | MountOn    | +-----------------------------------------+-------------+-----------+---------------------------------+------------+----------+------+-----------+---------+------------+ | fe_a1daac68_5ec0_477c_b5e8_f90a33cdc1bb | 10.xx.xx.90 | meta      | /home/disk/output/fe/doris-meta | /dev/sdf1  | 7T       | 2T   | 4T        | 36%     | /home/disk | | fe_a1daac68_5ec0_477c_b5e8_f90a33cdc1bb | 10.xx.xx.90 | log       | /home/disk/output/fe/log        | /dev/sdf1  | 7T       | 2T   | 4T        | 36%     | /home/disk | | fe_a1daac68_5ec0_477c_b5e8_f90a33cdc1bb | 10.xx.xx.90 | audit-log | /home/disk/output/fe/log        | /dev/sdf1  | 7T       | 2T   | 4T        | 36%     | /home/disk | | fe_a1daac68_5ec0_477c_b5e8_f90a33cdc1bb | 10.xx.xx.90 | temp      | /home/disk/output/fe/temp_dir   | /dev/sdf1  | 7T       | 2T   | 4T        | 36%     | /home/disk | | fe_a1daac68_5ec0_477c_b5e8_f90a33cdc1bb | 10.xx.xx.90 | deploy    | /home/disk/output/fe            | /dev/sdf1  | 7T       | 2T   | 4T        | 36%     | /home/disk | +-----------------------------------------+-------------+-----------+---------------------------------+------------+----------+------+-----------+---------+------------+ 5 rows in set (0.00 sec)"})}),"\n",(0,a.jsx)(n.h3,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SHOW, FRONTENDS\n"})}),"\n",(0,a.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);