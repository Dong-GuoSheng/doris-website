"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["129860"],{924415:function(r,n,a){a.r(n),a.d(n,{metadata:()=>e,contentTitle:()=>c,default:()=>d,assets:()=>i,toc:()=>l,frontMatter:()=>o});var e=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array_sortby","title":"array_sortby","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/array_sortby.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array_sortby","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_sortby","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"array_sortby","language":"zh-CN"},"sidebar":"docs","previous":{"title":"array_reverse_sort","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_reverse_sort"},"next":{"title":"array_position","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_position"}}'),s=a("785893"),t=a("250065");let o={title:"array_sortby",language:"zh-CN"},c=void 0,i={},l=[{value:"array_sortby",id:"array_sortby",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function y(r){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"array_sortby",children:"array_sortby"}),"\n",(0,s.jsx)(n.p,{children:"array_sortby"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ARRAY<T> array_sortby(ARRAY<T> src,Array<T> key)\nARRAY<T> array_sortby(lambda,array....)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\u5C06 key \u5217\u5347\u5E8F\u6392\u5217\uFF0C\u7136\u540E\u5C06 src \u5217\u6309\u6B64\u987A\u5E8F\u6392\u5E8F\u540E\u7684\u5BF9\u5E94\u5217\u505A\u4E3A\u7ED3\u679C\u8FD4\u56DE;\n\u5982\u679C\u8F93\u5165\u6570\u7EC4 src \u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL\u3002\n\u5982\u679C\u8F93\u5165\u6570\u7EC4 key \u4E3A NULL\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE src \u6570\u7EC4\u3002\n\u5982\u679C\u8F93\u5165\u6570\u7EC4 key \u5143\u7D20\u5305\u542B NULL, \u5219\u8F93\u51FA\u7684\u6392\u5E8F\u6570\u7EC4\u4F1A\u5C06 NULL \u653E\u5728\u6700\u524D\u9762\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"notice",children:"notice"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"\u4EC5\u652F\u6301\u5411\u91CF\u5316\u5F15\u64CE\u4E2D\u4F7F\u7528"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql [test]>select array_sortby(['a','b','c'],[3,2,1]);\n+----------------------------------------------------+\n| array_sortby(ARRAY('a', 'b', 'c'), ARRAY(3, 2, 1)) |\n+----------------------------------------------------+\n| ['c', 'b', 'a']                                    |\n+----------------------------------------------------+\n\nmysql [test]>select array_sortby([1,2,3,4,5],[10,5,1,20,80]);\n+-------------------------------------------------------------+\n| array_sortby(ARRAY(1, 2, 3, 4, 5), ARRAY(10, 5, 1, 20, 80)) |\n+-------------------------------------------------------------+\n| [3, 2, 1, 4, 5]                                             |\n+-------------------------------------------------------------+\n\nmysql [test]>select *,array_sortby(c_array1,c_array2) from test_array_sortby order by id;\n+------+-----------------+-------------------------+--------------------------------------+\n| id   | c_array1        | c_array2                | array_sortby(`c_array1`, `c_array2`) |\n+------+-----------------+-------------------------+--------------------------------------+\n|    0 | NULL            | [2]                     | NULL                                 |\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [5, 3, 1, 2, 4]                      |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [6, 7, 8]                            |\n|    3 | [1]             | [-100]                  | [1]                                  |\n|    4 | NULL            | NULL                    | NULL                                 |\n|    5 | [3]             | NULL                    | [3]                                  |\n|    6 | [1, 2]          | [2, 1]                  | [2, 1]                               |\n|    7 | [NULL]          | [NULL]                  | [NULL]                               |\n|    8 | [1, 2, 3]       | [3, 2, 1]               | [3, 2, 1]                            |\n+------+-----------------+-------------------------+--------------------------------------+\n\nmysql [test]>select *, array_map((x,y)->(y+x),c_array1,c_array2) as arr_sum,array_sortby((x,y)->(y+x),c_array1,c_array2) as arr_sort from array_test2;\n+------+-----------------+--------------+----------------+-----------------+\n| id   | c_array1        | c_array2     | arr_sum        | arr_sort        |\n+------+-----------------+--------------+----------------+-----------------+\n|    1 | [1, 2, 3]       | [10, 11, 12] | [11, 13, 15]   | [1, 2, 3]       |\n|    2 | [4, 3, 5]       | [10, 20, 30] | [14, 23, 35]   | [4, 3, 5]       |\n|    3 | [-40, 30, -100] | [30, 10, 20] | [-10, 40, -80] | [-100, -40, 30] |\n+------+-----------------+--------------+----------------+-----------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"ARRAY, SORT, ARRAY_SORTBY"})]})}function d(r={}){let{wrapper:n}={...(0,t.a)(),...r.components};return n?(0,s.jsx)(n,{...r,children:(0,s.jsx)(y,{...r})}):y(r)}},250065:function(r,n,a){a.d(n,{Z:function(){return c},a:function(){return o}});var e=a(667294);let s={},t=e.createContext(s);function o(r){let n=e.useContext(t);return e.useMemo(function(){return"function"==typeof r?r(n):{...n,...r}},[n,r])}function c(r){let n;return n=r.disableParentContext?"function"==typeof r.components?r.components(s):r.components||s:o(r.components),e.createElement(t.Provider,{value:n},r.children)}}}]);