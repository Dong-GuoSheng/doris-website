"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["645454"],{241741:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/system-info-and-help/HELP","title":"HELP","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/system-info-and-help/HELP.md","sourceDirName":"sql-manual/sql-statements/system-info-and-help","slug":"/sql-manual/sql-statements/system-info-and-help/HELP","permalink":"/docs/sql-manual/sql-statements/system-info-and-help/HELP","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"HELP","language":"en"},"sidebar":"docs","previous":{"title":"SHOW PROC","permalink":"/docs/sql-manual/sql-statements/system-info-and-help/SHOW-PROC"},"next":{"title":"All Releases","permalink":"/docs/releasenotes/all-release"}}'),l=t("785893"),i=t("250065");let a={title:"HELP",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"The directory of help can be queried by changing the command"}),"\n",(0,l.jsx)(n.p,{children:"grammar:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"HELP <item>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["All Doris commands can be listed with ",(0,l.jsx)(n.code,{children:"help"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"List of all MySQL commands:\nNote that all text commands must be first on line and end with ';'\n? (\\?) Synonym for `help'.\nclear (\\c) Clear the current input statement.\nconnect (\\r) Reconnect to the server. Optional arguments are db and host.\ndelimiter (\\d) Set statement delimiter.\nedit (\\e) Edit command with $EDITOR.\nego (\\G) Send command to mysql server, display result vertically.\nexit (\\q) Exit mysql. Same as quit.\ngo (\\g) Send command to mysql server.\nhelp (\\h) Display this help.\nnopager (\\n) Disable pager, print to stdout.\nnote (\\t) Don't write into outfile.\npager (\\P) Set PAGER [to_pager]. Print the query results via PAGER.\nprint (\\p) Print current command.\nprompt (\\R) Change your mysql prompt.\nquit (\\q) Quit mysql.\nrehash (\\#) Rebuild completion hash.\nsource (\\.) Execute an SQL script file. Takes a file name as an argument.\nstatus (\\s) Get status information from the server.\nsystem (\\!) Execute a system shell command.\ntee (\\T) Set outfile [to_outfile]. Append everything into given outfile.\nuse (\\u) Use another database. Takes database name as argument.\ncharset (\\C) Switch to another charset. Might be needed for processing binlog with multi-byte charsets.\nwarnings (\\W) Show warnings after every statement.\nnowarning (\\w) Don't show warnings after every statement.\nresetconnection(\\x) Clean session context.\n\nFor server side help, type 'help contents'\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Get the Doris SQL help contents via ",(0,l.jsx)(n.code,{children:"help contents"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"Many help items for your request exist.\nTo make a more specific request, please type 'help <item>',\nwhere <item> is one of the following\ncategories:\n   sql-functions\n   sql-statements\n"})}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"List all SQL help contents of Doris"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"help contents\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The command to list all function directories of the Doris cluster"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"help sql-functions\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"List all functions under the date function"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"help date-time-functions\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"HELP\n"})}),"\n",(0,l.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);