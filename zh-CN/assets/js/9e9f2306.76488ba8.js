"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["350065"],{703173:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>i,default:()=>o,assets:()=>a,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/date-trunc","title":"DATE_TRUNC","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/date-time-functions/date-trunc.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/date-trunc","permalink":"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/date-trunc","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"DATE_TRUNC","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DATE_SUB","permalink":"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/date-sub"},"next":{"title":"DATE_FORMAT","permalink":"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/date-format"}}'),c=t("785893"),r=t("250065");let d={title:"DATE_TRUNC",language:"zh-CN"},i=void 0,a={},l=[{value:"date_trunc",id:"date_trunc",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"date_trunc",children:"date_trunc"}),"\n",(0,c.jsx)(e.p,{children:"date_trunc"}),"\n",(0,c.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,c.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"DATETIME DATE_TRUNC(DATETIME datetime, VARCHAR unit)"})}),"\n",(0,c.jsx)(e.p,{children:"\u5C06datetime\u6309\u7167\u6307\u5B9A\u7684\u65F6\u95F4\u5355\u4F4D\u622A\u65AD\u3002"}),"\n",(0,c.jsx)(e.p,{children:"datetime \u53C2\u6570\u662F\u5408\u6CD5\u7684\u65E5\u671F\u8868\u8FBE\u5F0F\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["unit \u53C2\u6570\u662F\u60A8\u5E0C\u671B\u622A\u65AD\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u53EF\u9009\u7684\u503C\u5982\u4E0B\uFF1A[",(0,c.jsx)(e.code,{children:"second"}),",",(0,c.jsx)(e.code,{children:"minute"}),",",(0,c.jsx)(e.code,{children:"hour"}),",",(0,c.jsx)(e.code,{children:"day"}),",",(0,c.jsx)(e.code,{children:"week"}),",",(0,c.jsx)(e.code,{children:"month"}),",",(0,c.jsx)(e.code,{children:"quarter"}),",",(0,c.jsx)(e.code,{children:"year"}),"]\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"mysql> select date_trunc('2010-12-02 19:28:30', 'second');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'second')     |\n+-------------------------------------------------+\n| 2010-12-02 19:28:30                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'minute');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'minute')     |\n+-------------------------------------------------+\n| 2010-12-02 19:28:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'hour');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'hour')       |\n+-------------------------------------------------+\n| 2010-12-02 19:00:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'day');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'day')        |\n+-------------------------------------------------+\n| 2010-12-02 00:00:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2023-4-05 19:28:30', 'week');\n+-------------------------------------------+\n| date_trunc('2023-04-05 19:28:30', 'week') |\n+-------------------------------------------+\n| 2023-04-03 00:00:00                       |\n+-------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'month');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'month')      |\n+-------------------------------------------------+\n| 2010-12-01 00:00:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'quarter');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'quarter')    |\n+-------------------------------------------------+\n| 2010-10-01 00:00:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'year');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'year')       |\n+-------------------------------------------------+\n| 2010-01-01 00:00:00                             |\n+-------------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,c.jsx)(e.p,{children:"DATE_TRUNC,DATE,TRUNC"})]})}function o(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return d}});var s=t(667294);let c={},r=s.createContext(c);function d(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:d(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);