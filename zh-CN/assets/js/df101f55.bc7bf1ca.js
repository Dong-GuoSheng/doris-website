"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["535509"],{965378:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/encrypt-digest-functions/aes-encrypt","title":"AES_ENCRYPT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/encrypt-digest-functions/aes-encrypt.md","sourceDirName":"sql-manual/sql-functions/encrypt-digest-functions","slug":"/sql-manual/sql-functions/encrypt-digest-functions/aes-encrypt","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/encrypt-digest-functions/aes-encrypt","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"AES_ENCRYPT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"running_difference","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/math-functions/running_difference"},"next":{"title":"AES_DECRYPT","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/encrypt-digest-functions/aes-decrypt"}}'),i=s("785893"),c=s("250065");let r={title:"AES_ENCRYPT",language:"zh-CN"},l=void 0,o={},d=[{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Remarks",id:"remarks",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["AES \u52A0\u5BC6\u51FD\u6570\u3002\u8BE5\u51FD\u6570\u4E0E MySQL \u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"AES_ENCRYPT"})," \u51FD\u6570\u884C\u4E3A\u4E00\u81F4\u3002\u9ED8\u8BA4\u91C7\u7528 ",(0,i.jsx)(n.code,{children:"AES_128_ECB"})," \u7B97\u6CD5\uFF0Cpadding \u6A21\u5F0F\u4E3A ",(0,i.jsx)(n.code,{children:"PKCS7"}),"\u3002\u5E95\u5C42\u4F7F\u7528 OpenSSL \u5E93\u8FDB\u884C\u52A0\u5BC6\u3002\nReference: ",(0,i.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt",children:"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt"})]}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"VARCHAR AES_ENCRYPT(VARCHAR str, VARCHAR key_str[, VARCHAR init_vector][, VARCHAR encryption_mode])"})}),"\n",(0,i.jsx)(n.p,{children:"\u8FD4\u56DE\u52A0\u5BC6\u540E\u7684\u7ED3\u679C\uFF0C\u5176\u4E2D\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"})," \u4E3A\u5F85\u52A0\u5BC6\u6587\u672C\uFF1B"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"key_str"})," \u4E3A\u5BC6\u94A5\u3002\u6CE8\u610F\u6B64\u5BC6\u94A5\u5E76\u975E 16 \u8FDB\u5236\u7F16\u7801\uFF0C\u800C\u662F\u7F16\u7801\u540E\u7684\u5B57\u7B26\u4E32\u8868\u793A\u3002\u4F8B\u5982\u5BF9\u4E8E 128 \u4F4D\u5BC6\u94A5\u52A0\u5BC6\uFF0C",(0,i.jsx)(n.code,{children:"key_str"})," \u957F\u5EA6\u5E94\u4E3A 16\u3002\u5982\u679C\u5BC6\u94A5\u957F\u5EA6\u4E0D\u8DB3\uFF0C\u4F7F\u7528",(0,i.jsx)(n.strong,{children:"\u96F6\u586B\u5145"}),"\u8865\u9F50\u3002\u5982\u679C\u957F\u5EA6\u8D85\u51FA\uFF0C\u4F7F\u7528\u5FAA\u73AF\u5F02\u6216\u7684\u65B9\u5F0F\u6C42\u51FA\u6700\u7EC8\u5BC6\u94A5\u3002\u4F8B\u5982\u7B97\u6CD5\u4F7F\u7528\u7684 128 \u4F4D\u5BC6\u94A5\u4E3A ",(0,i.jsx)(n.code,{children:"key"}),"\uFF0C\u5219 ",(0,i.jsx)(n.code,{children:"key[i] = key_str[i] ^ key_str[i+128] ^ key_str[i+256] ^ ..."})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"init_vector"})," \u4E3A\u7B97\u6CD5\u4E2D\u4F7F\u7528\u5230\u7684\u521D\u59CB\u5411\u91CF\uFF0C\u4EC5\u5728\u7279\u5B9A\u7B97\u6CD5\u4E0B\u751F\u6548\uFF0C\u5982\u4E0D\u6307\u5B9A\uFF0C\u5219 Doris \u4F7F\u7528\u5185\u7F6E\u5411\u91CF\uFF1B"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"encryption_mode"})," \u4E3A\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u53EF\u9009\u503C\u89C1\u4E8E\uFF1A",(0,i.jsx)(n.a,{href:"../../../advanced/variables",children:"\u53D8\u91CF"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["\u4E24\u53C2\u6570\u7248\u672C\uFF0C\u4F1A\u65E0\u89C6 session variable ",(0,i.jsx)(n.code,{children:"block_encryption_mode"}),"\uFF0C\u59CB\u7EC8\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"AES_128_ECB"})," \u7B97\u6CD5\u8FDB\u884C\u52A0\u5BC6\u3002\u56E0\u6B64\u4E0D\u63A8\u8350\u8C03\u7528\u3002"]})}),"\n",(0,i.jsx)(n.h4,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(n.p,{children:"AES_ENCRYPT \u51FD\u6570\u5BF9\u4E8E\u4F20\u5165\u7684\u5BC6\u94A5\uFF0C\u5E76\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528\uFF0C\u800C\u662F\u4F1A\u8FDB\u4E00\u6B65\u505A\u5904\u7406\uFF0C\u5177\u4F53\u6B65\u9AA4\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6839\u636E\u4F7F\u7528\u7684\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u786E\u5B9A\u5BC6\u94A5\u7684\u5B57\u8282\u6570\uFF0C\u6BD4\u5982\u4F7F\u7528 AES_128_ECB \u7B97\u6CD5\uFF0C\u5219\u5BC6\u94A5\u5B57\u8282\u6570\u4E3A ",(0,i.jsx)(n.code,{children:"128 / 8 = 16"}),"\uFF08\u5982\u679C\u4F7F\u7528 AES_256_ECB \u7B97\u6CD5\uFF0C\u5219\u5BC6\u94A5\u5B57\u8282\u6570\u4E3A ",(0,i.jsx)(n.code,{children:"128 / 8 = 32"}),"\uFF09\uFF1B"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7136\u540E\u9488\u5BF9\u7528\u6237\u8F93\u5165\u7684\u5BC6\u94A5\uFF0C\u7B2C ",(0,i.jsx)(n.code,{children:"i"})," \u4F4D\u548C\u7B2C ",(0,i.jsx)(n.code,{children:"16*k+i"})," \u4F4D\u8FDB\u884C\u5F02\u6216\uFF0C\u5982\u679C\u7528\u6237\u8F93\u5165\u7684\u5BC6\u94A5\u4E0D\u8DB3 16 \u4F4D\uFF0C\u5219\u540E\u9762\u8865 0\uFF1B"]}),"\n",(0,i.jsx)(n.li,{children:"\u6700\u540E\uFF0C\u518D\u4F7F\u7528\u65B0\u751F\u6210\u7684\u5BC6\u94A5\u8FDB\u884C\u52A0\u5BC6\uFF1B"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3'));\n+--------------------------------+\n| to_base64(aes_encrypt('text')) |\n+--------------------------------+\n| wr2JEDVXzL9+2XtRhgIloA==       |\n+--------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u4F60\u60F3\u66F4\u6362\u5176\u4ED6\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u53EF\u4EE5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"set block_encryption_mode=\"AES_256_CBC\";\n\nselect to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n+-----------------------------------------------------+\n| to_base64(aes_encrypt('text', '***', '0123456789')) |\n+-----------------------------------------------------+\n| tsmK1HzbpnEdR2//WhO+MA==                            |\n+-----------------------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"AES_ENCRYPT, AES, ENCRYPT\n"})})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var t=s(667294);let i={},c=t.createContext(i);function r(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);