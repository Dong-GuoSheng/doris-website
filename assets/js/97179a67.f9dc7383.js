"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["534174"],{860750:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-statements/security/CREATE-ENCRYPTKEY","title":"CREATE ENCRYPTKEY","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/security/CREATE-ENCRYPTKEY.md","sourceDirName":"sql-manual/sql-statements/security","slug":"/sql-manual/sql-statements/security/CREATE-ENCRYPTKEY","permalink":"/docs/sql-manual/sql-statements/security/CREATE-ENCRYPTKEY","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CREATE ENCRYPTKEY","language":"en"},"sidebar":"docs","previous":{"title":"SHOW FILE","permalink":"/docs/sql-manual/sql-statements/security/SHOW-FILE"},"next":{"title":"DROP ENCRYPTKEY","permalink":"/docs/sql-manual/sql-statements/security/DROP-ENCRYPTKEY"}}'),r=s("785893"),i=s("250065");let a={title:"CREATE ENCRYPTKEY",language:"en"},c=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["This statement creates a custom key. Executing this command requires the user to have ",(0,r.jsx)(n.code,{children:"ADMIN"})," privileges."]}),"\n",(0,r.jsx)(n.p,{children:"grammar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE ENCRYPTKEY key_name AS "key_string"\n'})}),"\n",(0,r.jsx)(n.p,{children:"illustrate:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"key_name"}),": The name of the key to be created, may contain the name of the database. For example: ",(0,r.jsx)(n.code,{children:"db1.my_key"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"key_string"}),": The string to create the key with."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"key_name"})," contains the database name, then the custom key will be created in the corresponding database, otherwise this function will create the database in the current session. The name of the new key cannot be the same as the existing key in the corresponding database, otherwise the creation will fail."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a custom key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE ENCRYPTKEY my_key AS "ABCD123456789";\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use a custom key"}),"\n",(0,r.jsxs)(n.p,{children:["To use a custom key, you need to add the keyword ",(0,r.jsx)(n.code,{children:"KEY"}),"/",(0,r.jsx)(n.code,{children:"key"})," before the key, separated from the ",(0,r.jsx)(n.code,{children:"key_name"})," space."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT HEX(AES_ENCRYPT(\"Doris is Great\", KEY my_key));\n+------------------------------------------------+\n| hex(aes_encrypt('Doris is Great', key my_key)) |\n+------------------------------------------------+\n| D26DB38579D6A343350EDDC6F2AD47C6 |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT AES_DECRYPT(UNHEX('D26DB38579D6A343350EDDC6F2AD47C6'), KEY my_key);\n+------------------------------------------------- -------------------+\n| aes_decrypt(unhex('D26DB38579D6A343350EDDC6F2AD47C6'), key my_key) |\n+------------------------------------------------- -------------------+\n| Doris is Great |\n+------------------------------------------------- -------------------+\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CREATE, ENCRYPTKEY\n"})}),"\n",(0,r.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return a}});var t=s(667294);let r={},i=t.createContext(r);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);