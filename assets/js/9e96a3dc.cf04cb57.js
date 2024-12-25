"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["502728"],{466321:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>r,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/distance-functions/cosine-distance","title":"cosine_distance","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/distance-functions/cosine-distance.md","sourceDirName":"sql-manual/sql-functions/distance-functions","slug":"/sql-manual/sql-functions/distance-functions/cosine-distance","permalink":"/docs/2.0/sql-manual/sql-functions/distance-functions/cosine-distance","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"cosine_distance","language":"en"},"sidebar":"docs","previous":{"title":"INET_NTOA","permalink":"/docs/2.0/sql-manual/sql-functions/ip-functions/inet-ntoa"},"next":{"title":"inner_product","permalink":"/docs/2.0/sql-manual/sql-functions/distance-functions/inner-product"}}'),t=s("785893"),c=s("250065");let a={title:"cosine_distance",language:"en"},o=void 0,l={},r=[{value:"cosine_distance",id:"cosine_distance",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"cosine_distance",children:"cosine_distance"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DOUBLE cosine_distance(ARRAY<T> array1, ARRAY<T> array2)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Calculates the cosine distance between two vectors (the values of the vectors are the coordinates).\nReturn NULL if input array is NULL or any element of array is NULL."}),"\n",(0,t.jsx)(n.h4,{id:"notice",children:"Notice"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"nested type of input array support: TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE"}),"\n",(0,t.jsx)(n.li,{children:"input array1 and array2 should have the same element size"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sql> SELECT cosine_distance([1, 2], [2, 3]);\n+-------------------------------------------+\n| cosine_distance(ARRAY(1, 2), ARRAY(2, 3)) |\n+-------------------------------------------+\n|                     0.0077221232863322609 |\n+-------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"COSINE_DISTANCE,DISTANCE,COSINE,ARRAY\n"})})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var i=s(667294);let t={},c=i.createContext(t);function a(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);