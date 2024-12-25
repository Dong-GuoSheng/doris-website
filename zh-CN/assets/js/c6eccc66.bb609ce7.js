"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["689110"],{299968:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-remove","title":"BITMAP_REMOVE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-remove.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-remove","permalink":"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-remove","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_REMOVE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_TO_BASE64","permalink":"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-to-base64"},"next":{"title":"BITAND","permalink":"/zh-CN/docs/sql-manual/sql-functions/bitwise-functions/bitand"}}'),s=t("785893"),o=t("250065");let r={title:"BITMAP_REMOVE",language:"zh-CN"},l=void 0,a={},c=[{value:"bitmap_remove",id:"bitmap_remove",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"bitmap_remove",children:"bitmap_remove"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"BITMAP BITMAP_REMOVE(BITMAP bitmap, BIGINT input)"})}),"\n",(0,s.jsx)(n.p,{children:"\u4ECEBitmap\u5217\u4E2D\u5220\u9664\u6307\u5B9A\u7684\u503C\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql [(none)]>select bitmap_to_string(bitmap_remove(bitmap_from_string('1, 2, 3'), 3)) res; \n+------+\n| res  |\n+------+\n| 1,2  |\n+------+\n\nmysql [(none)]>select bitmap_to_string(bitmap_remove(bitmap_from_string('1, 2, 3'), null)) res;\n+------+\n| res  |\n+------+\n| NULL |\n+------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"BITMAP_REMOVE,BITMAP\n"})})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(667294);let s={},o=i.createContext(s);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);