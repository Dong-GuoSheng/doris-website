"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["981926"],{346098:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>t,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"lakehouse/datalake-analytics/hudi","title":"Hudi Catalog","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/lakehouse/datalake-analytics/hudi.md","sourceDirName":"lakehouse/datalake-analytics","slug":"/lakehouse/datalake-analytics/hudi","permalink":"/zh-CN/docs/2.0/lakehouse/datalake-analytics/hudi","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Hudi Catalog","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Hive Catalog","permalink":"/zh-CN/docs/2.0/lakehouse/datalake-analytics/hive"},"next":{"title":"Iceberg Catalog","permalink":"/zh-CN/docs/2.0/lakehouse/datalake-analytics/iceberg"}}'),a=i("785893"),s=i("250065");let d={title:"Hudi Catalog",language:"zh-CN"},l=void 0,t={},c=[{value:"\u4F7F\u7528\u9650\u5236",id:"\u4F7F\u7528\u9650\u5236",level:2},{value:"\u521B\u5EFA Catalog",id:"\u521B\u5EFA-catalog",level:2},{value:"\u5217\u7C7B\u578B\u6620\u5C04",id:"\u5217\u7C7B\u578B\u6620\u5C04",level:2},{value:"Skip Merge",id:"skip-merge",level:2},{value:"\u67E5\u8BE2\u4F18\u5316",id:"\u67E5\u8BE2\u4F18\u5316",level:2},{value:"Time Travel",id:"time-travel",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u4F7F\u7528\u9650\u5236",children:"\u4F7F\u7528\u9650\u5236"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Hudi \u8868\u652F\u6301\u7684\u67E5\u8BE2\u7C7B\u578B\u5982\u4E0B\uFF0C\u540E\u7EED\u5C06\u652F\u6301 Incremental Query\u3002"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u8868\u7C7B\u578B"}),(0,a.jsx)(n.th,{children:"\u652F\u6301\u7684\u67E5\u8BE2\u7C7B\u578B"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Copy On Write"}),(0,a.jsx)(n.td,{children:"Snapshot Query + Time Travel"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Merge On Read"}),(0,a.jsx)(n.td,{children:"Snapshot Queries + Read Optimized Queries + Time Travel"})]})]})]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\u76EE\u524D\u652F\u6301 Hive Metastore \u548C\u517C\u5BB9 Hive Metastore \u7C7B\u578B\uFF0C\u4F8B\u5982",(0,a.jsx)(n.a,{href:"../../lakehouse/datalake/hive.md",children:"AWS Glue"}),"/Alibaba DLF \u7684 Catalog\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u521B\u5EFA-catalog",children:"\u521B\u5EFA Catalog"}),"\n",(0,a.jsxs)(n.p,{children:["\u548C Hive Catalog \u57FA\u672C\u4E00\u81F4\uFF0C\u8FD9\u91CC\u4EC5\u7ED9\u51FA\u7B80\u5355\u793A\u4F8B\u3002\u5176\u4ED6\u793A\u4F8B\u53EF\u53C2\u9605 ",(0,a.jsx)(n.a,{href:"../../lakehouse/datalake/hive.md",children:"Hive Catalog"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG hudi PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u53EF\u9009\u914D\u7F6E\u53C2\u6570\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,a.jsx)(n.th,{children:"\u8BF4\u660E"}),(0,a.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"use_hive_sync_partition"}),(0,a.jsx)(n.td,{children:"\u4F7F\u7528 hms \u5DF2\u540C\u6B65\u7684\u5206\u533A\u6570\u636E"}),(0,a.jsx)(n.td,{children:"false"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"\u5217\u7C7B\u578B\u6620\u5C04",children:"\u5217\u7C7B\u578B\u6620\u5C04"}),"\n",(0,a.jsxs)(n.p,{children:["\u548C Hive Catalog \u4E00\u81F4\uFF0C\u53EF\u53C2\u9605 ",(0,a.jsx)(n.a,{href:"../../lakehouse/datalake/hive",children:"Hive Catalog"})," \u4E2D ",(0,a.jsx)(n.strong,{children:"\u5217\u7C7B\u578B\u6620\u5C04"})," \u4E00\u8282\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"skip-merge",children:"Skip Merge"}),"\n",(0,a.jsxs)(n.p,{children:["Spark \u5728\u521B\u5EFA hudi mor \u8868\u7684\u65F6\u5019\uFF0C\u4F1A\u521B\u5EFA ",(0,a.jsx)(n.code,{children:"_ro"})," \u540E\u7F00\u7684 read optimize \u8868\uFF0Cdoris \u8BFB\u53D6 read optimize \u8868\u4F1A\u8DF3\u8FC7 log \u6587\u4EF6\u7684\u5408\u5E76\u3002doris \u5224\u5B9A\u4E00\u4E2A\u8868\u662F\u5426\u4E3A read optimize \u8868\u5E76\u4E0D\u662F\u901A\u8FC7 ",(0,a.jsx)(n.code,{children:"_ro"})," \u540E\u7F00\uFF0C\u800C\u662F\u901A\u8FC7 hive inputformat\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 ",(0,a.jsx)(n.code,{children:"SHOW CREATE TABLE"})," \u547D\u4EE4\u89C2\u5BDF cow/mor/read optimize \u8868\u7684 inputformat \u662F\u5426\u76F8\u540C\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u6B64\u5916 doris \u652F\u6301\u5728 catalog properties \u6DFB\u52A0 hoodie \u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u914D\u7F6E\u9879\u517C\u5BB9 ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations/#Read-Options",children:"Spark Datasource Configs"}),"\u3002\u6240\u4EE5\u7528\u6237\u53EF\u4EE5\u5728 catalog properties \u4E2D\u6DFB\u52A0 ",(0,a.jsx)(n.code,{children:"hoodie.datasource.merge.type=skip_merge"})," \u8DF3\u8FC7\u5408\u5E76 log \u6587\u4EF6\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u67E5\u8BE2\u4F18\u5316",children:"\u67E5\u8BE2\u4F18\u5316"}),"\n",(0,a.jsxs)(n.p,{children:["Doris \u4F7F\u7528 parquet native reader \u8BFB\u53D6 COW \u8868\u7684\u6570\u636E\u6587\u4EF6\uFF0C\u4F7F\u7528 Java SDK(\u901A\u8FC7 JNI \u8C03\u7528 hudi-bundle) \u8BFB\u53D6 MOR \u8868\u7684\u6570\u636E\u6587\u4EF6\u3002\u5728 Upsert \u573A\u666F\u4E0B\uFF0CMOR \u4F9D\u7136\u4F1A\u6709\u6570\u636E\u6587\u4EF6\u6CA1\u6709\u88AB\u66F4\u65B0\uFF0C\u8FD9\u90E8\u5206\u6587\u4EF6\u53EF\u4EE5\u901A\u8FC7 parquet native reader \u8BFB\u53D6\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 ",(0,a.jsx)(n.a,{href:"/zh-CN/docs/2.0/query/query-analysis/query-analytics",children:"explain"})," \u547D\u4EE4\u67E5\u770B Hudi scan \u7684\u6267\u884C\u8BA1\u5212\uFF0C",(0,a.jsx)(n.code,{children:"hudiNativeReadSplits"})," \u8868\u793A\u6709\u591A\u5C11 split \u6587\u4EF6\u901A\u8FC7 parquet native reader \u8BFB\u53D6\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"|0:VHUDI_SCAN_NODE                                                             |\n|      table: minbatch_mor_rt                                                  |\n|      predicates: `o_orderkey` = 100030752                                    |\n|      inputSplitNum=810, totalFileSize=5645053056, scanRanges=810             |\n|      partition=80/80                                                         |\n|      numNodes=6                                                              |\n|      hudiNativeReadSplits=717/810                                            |\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 ",(0,a.jsx)(n.a,{href:"/zh-CN/docs/2.0/admin-manual/fe/profile-action",children:"profile"})," \u67E5\u770B Java SDK \u7684\u6027\u80FD\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"-  HudiJniScanner:  0ns\n  -  FillBlockTime:  31.29ms\n  -  GetRecordReaderTime:  1m5s\n  -  JavaScanTime:  35s991ms\n  -  OpenScannerTime:  1m6s\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"OpenScannerTime"}),": \u521B\u5EFA\u5E76\u521D\u59CB\u5316 JNI Reader \u7684\u65F6\u95F4"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"JavaScanTime"}),": Java SDK \u8BFB\u53D6\u6570\u636E\u7684\u65F6\u95F4"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"FillBlockTime"}),": Java \u6570\u636E\u62F7\u8D1D\u4E3A C++ \u6570\u636E\u7684\u65F6\u95F4"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"GetRecordReaderTime"}),": \u8C03\u7528 Java SDK \u5E76\u521B\u5EFA Hudi Record Reader \u7684\u65F6\u95F4"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"time-travel",children:"Time Travel"}),"\n",(0,a.jsx)(n.p,{children:"\u652F\u6301\u8BFB\u53D6 Hudi \u8868\u6307\u5B9A\u7684 Snapshot\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6BCF\u4E00\u6B21\u5BF9 Hudi \u8868\u7684\u5199\u64CD\u4F5C\u90FD\u4F1A\u4EA7\u751F\u4E00\u4E2A\u65B0\u7684\u5FEB\u7167\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u67E5\u8BE2\u8BF7\u6C42\u53EA\u4F1A\u8BFB\u53D6\u6700\u65B0\u7248\u672C\u7684\u5FEB\u7167\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"FOR TIME AS OF"})," \u8BED\u53E5\uFF0C\u6839\u636E\u5FEB\u7167\u7684\u65F6\u95F4 (",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/quick-start-guide#time-travel-query",children:"\u65F6\u95F4\u683C\u5F0F"}),"\u548C Hudi \u5B98\u7F51\u4FDD\u6301\u4E00\u81F4) \u8BFB\u53D6\u5386\u53F2\u7248\u672C\u7684\u6570\u636E\u3002\u793A\u4F8B\u5982\u4E0B\uFF1A"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'SELECT * FROM hudi_tbl FOR TIME AS OF "2022-10-07 17:20:37";'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'SELECT * FROM hudi_tbl FOR TIME AS OF "20221007172037";'})}),"\n",(0,a.jsxs)(n.p,{children:["Hudi \u8868\u4E0D\u652F\u6301 ",(0,a.jsx)(n.code,{children:"FOR VERSION AS OF"})," \u8BED\u53E5\uFF0C\u4F7F\u7528\u8BE5\u8BED\u6CD5\u67E5\u8BE2 Hudi \u8868\u5C06\u629B\u9519\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return d}});var r=i(667294);let a={},s=r.createContext(a);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);