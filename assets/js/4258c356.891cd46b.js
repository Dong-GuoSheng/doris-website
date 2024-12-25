"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["530430"],{659901:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-DENSE-RANK","title":"WINDOW_FUNCTION_DENSE_RANK","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-DENSE-RANK.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-DENSE-RANK","permalink":"/docs/2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-DENSE-RANK","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"WINDOW_FUNCTION_DENSE_RANK","language":"en"},"sidebar":"docs","previous":{"title":"WINDOW_FUNCTION_RANK","permalink":"/docs/2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-RANK"},"next":{"title":"WINDOW_FUNCTION_FIRST_VALUE","permalink":"/docs/2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-FIRST-VALUE"}}'),o=t("785893"),s=t("250065");let r={title:"WINDOW_FUNCTION_DENSE_RANK",language:"en"},l=void 0,a={},c=[{value:"WINDOW FUNCTION DENSE_RANK",id:"window-function-dense_rank",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"window-function-dense_rank",children:"WINDOW FUNCTION DENSE_RANK"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(n.p,{children:"The DENSE_RANK() function is used to represent rankings. Unlike RANK(), DENSE_RANK() does not have vacancies. For example, if there are two parallel 1s, the third number of DENSE_RANK() is still 2, and the third number of RANK() is 3."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"DENSE_RANK() OVER(partition_by_clause order_by_clause)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(n.p,{children:"Group by the property column to rank column x:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:" select x, y, dense_rank() over(partition by x order by y) as rank from int_t;\n \n | x  | y    | rank     |\n |----|------|----------|\n | 1  | 1    | 1        |\n | 1  | 2    | 2        |\n | 1  | 2    | 2        |\n | 2  | 1    | 1        |\n | 2  | 2    | 2        |\n | 2  | 3    | 3        |\n | 3  | 1    | 1        |\n | 3  | 1    | 1        |\n | 3  | 2    | 2        |\n"})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"WINDOW,FUNCTION,DENSE_RANK\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(667294);let o={},s=i.createContext(o);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);