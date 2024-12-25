"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["74229"],{839349:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY","title":"SHOW-ENCRYPT-KEY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-ENCRYPT-KEY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-EXPORT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT"},"next":{"title":"SHOW-FUNCTIONS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-FUNCTIONS"}}'),r=t("785893"),l=t("250065");let c={title:"SHOW-ENCRYPT-KEY",language:"zh-CN"},i=void 0,a={},o=[{value:"SHOW-ENCRYPT-KEY",id:"show-encrypt-key",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"show-encrypt-key",children:"SHOW-ENCRYPT-KEY"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"SHOW ENCRYPTKEYS"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"\u67E5\u770B\u6570\u636E\u5E93\u4E0B\u6240\u6709\u7684\u81EA\u5B9A\u4E49\u7684\u5BC6\u94A5\u3002\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u6570\u636E\u5E93\uFF0C\u90A3\u4E48\u67E5\u770B\u5BF9\u5E94\u6570\u636E\u5E93\u7684\uFF0C\u5426\u5219\u76F4\u63A5\u67E5\u8BE2\u5F53\u524D\u4F1A\u8BDD\u6240\u5728\u6570\u636E\u5E93\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u9700\u8981\u5BF9\u8FD9\u4E2A\u6570\u636E\u5E93\u62E5\u6709 ",(0,r.jsx)(n.code,{children:"ADMIN"})," \u6743\u9650"]}),"\n",(0,r.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW ENCRYPTKEYS [IN|FROM db] [LIKE 'key_pattern']\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53C2\u6570"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"db"}),": \u8981\u67E5\u8BE2\u7684\u6570\u636E\u5E93\u540D\u5B57\n",(0,r.jsx)(n.code,{children:"key_pattern"}),": \u7528\u6765\u8FC7\u6EE4\u5BC6\u94A5\u540D\u79F0\u7684\u53C2\u6570"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'   mysql> SHOW ENCRYPTKEYS;\n   +-------------------+-------------------+\n   | EncryptKey Name   | EncryptKey String |\n   +-------------------+-------------------+\n   | example_db.my_key | ABCD123456789     |\n   +-------------------+-------------------+\n   1 row in set (0.00 sec)\n\n   mysql> SHOW ENCRYPTKEYS FROM example_db LIKE "%my%";\n   +-------------------+-------------------+\n   | EncryptKey Name   | EncryptKey String |\n   +-------------------+-------------------+\n   | example_db.my_key | ABCD123456789     |\n   +-------------------+-------------------+\n   1 row in set (0.00 sec)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SHOW, ENCRYPT, KEY\n"})}),"\n",(0,r.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(667294);let r={},l=s.createContext(r);function c(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);