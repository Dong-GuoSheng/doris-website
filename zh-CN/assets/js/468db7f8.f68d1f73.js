"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["83592"],{822911:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>s,default:()=>d,assets:()=>c,toc:()=>u,frontMatter:()=>a});var i=JSON.parse('{"id":"install/source-install/compilation-linux","title":"Linux \u5E73\u53F0\u76F4\u63A5\u7F16\u8BD1","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/install/source-install/compilation-linux.md","sourceDirName":"install/source-install","slug":"/install/source-install/compilation-linux","permalink":"/zh-CN/docs/2.0/install/source-install/compilation-linux","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Linux \u5E73\u53F0\u76F4\u63A5\u7F16\u8BD1","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4F7F\u7528 LDB Toolchain \u7F16\u8BD1\uFF08\u63A8\u8350\uFF09","permalink":"/zh-CN/docs/2.0/install/source-install/compilation-with-ldb-toolchain"},"next":{"title":"Arm \u5E73\u53F0\u4E0A\u7F16\u8BD1","permalink":"/zh-CN/docs/2.0/install/source-install/compilation-arm"}}'),l=t("785893"),o=t("250065");let a={title:"Linux \u5E73\u53F0\u76F4\u63A5\u7F16\u8BD1",language:"zh-CN"},s=void 0,c={},u=[{value:"1 \u786E\u4FDD\u62E5\u6709\u4EE5\u4E0B\u7CFB\u7EDF\u4F9D\u8D56",id:"1-\u786E\u4FDD\u62E5\u6709\u4EE5\u4E0B\u7CFB\u7EDF\u4F9D\u8D56",level:2},{value:"2 \u4E0E\u4F7F\u7528 Docker \u5F00\u53D1\u955C\u50CF\u7F16\u8BD1\u4E00\u6837\uFF0C\u7F16\u8BD1\u4E4B\u524D\u5148\u68C0\u67E5\u662F\u5426\u652F\u6301 AVX2 \u6307\u4EE4",id:"2-\u4E0E\u4F7F\u7528-docker-\u5F00\u53D1\u955C\u50CF\u7F16\u8BD1\u4E00\u6837\u7F16\u8BD1\u4E4B\u524D\u5148\u68C0\u67E5\u662F\u5426\u652F\u6301-avx2-\u6307\u4EE4",level:2},{value:"3 \u652F\u6301\u5219\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1",id:"3-\u652F\u6301\u5219\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1",level:2},{value:"4 \u7F16\u8BD1\u5B8C\u6210\u540E\uFF0C\u4EA7\u51FA\u6587\u4EF6\u5728 <code>output/</code> \u76EE\u5F55\u4E2D\u3002",id:"4-\u7F16\u8BD1\u5B8C\u6210\u540E\u4EA7\u51FA\u6587\u4EF6\u5728-output-\u76EE\u5F55\u4E2D",level:2}];function r(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"\u8FD9\u91CC\u4F7F\u7528 Ubuntu 16.04 \u53CA\u4EE5\u4E0A\u7CFB\u7EDF\u6765\u76F4\u63A5\u7F16\u8BD1\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"1-\u786E\u4FDD\u62E5\u6709\u4EE5\u4E0B\u7CFB\u7EDF\u4F9D\u8D56",children:"1 \u786E\u4FDD\u62E5\u6709\u4EE5\u4E0B\u7CFB\u7EDF\u4F9D\u8D56"}),"\n",(0,l.jsx)(e.p,{children:"GCC 10+, Oracle JDK 8+, Python 2.7+, Apache Maven 3.5+, CMake 3.19.2+ , Bison 3.0+"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Plain",children:"sudo apt install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python\nsudo add-apt-repository ppa:ubuntu-toolchain-r/ppa\nsudo apt update\nsudo apt install gcc-10 g++-10 \nsudo apt-get install autoconf automake libtool autopoint\n"})}),"\n",(0,l.jsx)(e.h2,{id:"2-\u4E0E\u4F7F\u7528-docker-\u5F00\u53D1\u955C\u50CF\u7F16\u8BD1\u4E00\u6837\u7F16\u8BD1\u4E4B\u524D\u5148\u68C0\u67E5\u662F\u5426\u652F\u6301-avx2-\u6307\u4EE4",children:"2 \u4E0E\u4F7F\u7528 Docker \u5F00\u53D1\u955C\u50CF\u7F16\u8BD1\u4E00\u6837\uFF0C\u7F16\u8BD1\u4E4B\u524D\u5148\u68C0\u67E5\u662F\u5426\u652F\u6301 AVX2 \u6307\u4EE4"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Plain",children:"$ cat /proc/cpuinfo | grep avx2\n"})}),"\n",(0,l.jsx)(e.h2,{id:"3-\u652F\u6301\u5219\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1",children:"3 \u652F\u6301\u5219\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Plain",children:"# \u9ED8\u8BA4\u7F16\u8BD1\u51FA\u652F\u6301 AVX2 \u7684\n$ sh build.sh\n\n# \u5982\u4E0D\u652F\u6301 AVX2 \u9700\u8981\u52A0 USE_AVX2=0\n$ USE_AVX2=0 sh build.sh\n\n# \u5982\u9700\u7F16\u8BD1 Debug \u7248\u672C\u7684 BE\uFF0C\u589E\u52A0 BUILD_TYPE=Debug\n$ BUILD_TYPE=Debug sh build.sh\n"})}),"\n",(0,l.jsxs)(e.h2,{id:"4-\u7F16\u8BD1\u5B8C\u6210\u540E\u4EA7\u51FA\u6587\u4EF6\u5728-output-\u76EE\u5F55\u4E2D",children:["4 \u7F16\u8BD1\u5B8C\u6210\u540E\uFF0C\u4EA7\u51FA\u6587\u4EF6\u5728 ",(0,l.jsx)(e.code,{children:"output/"})," \u76EE\u5F55\u4E2D\u3002"]})]})}function d(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(r,{...n})}):r(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return s},a:function(){return a}});var i=t(667294);let l={},o=i.createContext(l);function a(n){let e=i.useContext(o);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);