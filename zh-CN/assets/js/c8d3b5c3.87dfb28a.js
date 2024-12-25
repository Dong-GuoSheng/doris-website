"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["111270"],{411950:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>h,assets:()=>t,toc:()=>a,frontMatter:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/local","title":"LOCAL","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/table-valued-functions/local.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/local","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/local","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"LOCAL","language":"zh-CN"},"sidebar":"docs","previous":{"title":"HDFS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/hdfs"},"next":{"title":"QUERY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/query"}}'),c=s("785893"),i=s("250065");let d={title:"LOCAL",language:"zh-CN"},r=void 0,t={},a=[{value:"local",id:"local",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Examples",id:"examples",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"local",children:"local"}),"\n",(0,c.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,c.jsx)(n.p,{children:"local"}),"\n",(0,c.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:["Local\u8868\u51FD\u6570\uFF08table-valued-function,tvf\uFF09\uFF0C\u53EF\u4EE5\u8BA9\u7528\u6237\u50CF\u8BBF\u95EE\u5173\u7CFB\u8868\u683C\u5F0F\u6570\u636E\u4E00\u6837\uFF0C\u8BFB\u53D6\u5E76\u8BBF\u95EE be \u4E0A\u7684\u6587\u4EF6\u5185\u5BB9\u3002\u76EE\u524D\u652F\u6301",(0,c.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"}),"\u6587\u4EF6\u683C\u5F0F\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u8BE5\u51FD\u6570\u9700\u8981 ADMIN \u6743\u9650\u3002"}),"\n",(0,c.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:'local(\n  "file_path" = "path/to/file.txt", \n  "backend_id" = "be_id",\n  "format" = "csv",\n  "keyn" = "valuen" \n  ...\n  );\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u53C2\u6570\u8BF4\u660E"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8BBF\u95EElocal\u6587\u4EF6\u7684\u76F8\u5173\u53C2\u6570\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"file_path"})}),"\n",(0,c.jsxs)(n.p,{children:["\uFF08\u5FC5\u586B\uFF09\u5F85\u8BFB\u53D6\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u8BE5\u8DEF\u5F84\u662F\u4E00\u4E2A\u76F8\u5BF9\u4E8E ",(0,c.jsx)(n.code,{children:"user_files_secure_path"})," \u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84, \u5176\u4E2D ",(0,c.jsx)(n.code,{children:"user_files_secure_path"})," \u53C2\u6570\u662F ",(0,c.jsx)(n.a,{href:"/zh-CN/docs/3.0/admin-manual/config/be-config",children:"be\u7684\u4E00\u4E2A\u914D\u7F6E\u9879"})," \u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8DEF\u5F84\u4E2D\u4E0D\u80FD\u5305\u542B ",(0,c.jsx)(n.code,{children:".."}),"\uFF0C\u53EF\u4EE5\u4F7F\u7528 glob \u8BED\u6CD5\u8FDB\u884C\u6A21\u7CCA\u5339\u914D\uFF0C\u5982\uFF1A",(0,c.jsx)(n.code,{children:"logs/*.log"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6267\u884C\u65B9\u5F0F\u76F8\u5173\uFF1A"}),"\n",(0,c.jsx)(n.p,{children:"\u5728 2.1.1 \u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0CDoris \u4EC5\u652F\u6301\u6307\u5B9A\u67D0\u4E00\u4E2A BE \u8282\u70B9\uFF0C\u8BFB\u53D6\u8BE5\u8282\u70B9\u4E0A\u7684\u672C\u5730\u6570\u636E\u6587\u4EF6\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"backend_id"}),":"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6587\u4EF6\u6240\u5728\u7684 be id\u3002 ",(0,c.jsx)(n.code,{children:"backend_id"})," \u53EF\u4EE5\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"show backends"})," \u547D\u4EE4\u5F97\u5230\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4ECE 2.1.2 \u7248\u672C\u5F00\u59CB\uFF0CDoris \u589E\u52A0\u4E86\u65B0\u7684\u53C2\u6570 ",(0,c.jsx)(n.code,{children:"shared_storage"}),"\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"shared_storage"})}),"\n",(0,c.jsx)(n.p,{children:"\u9ED8\u8BA4\u4E3A false\u3002\u5982\u679C\u4E3A true\uFF0C\u8868\u793A\u6307\u5B9A\u7684\u6587\u4EF6\u5B58\u5728\u4E8E\u5171\u4EAB\u5B58\u50A8\u4E0A\uFF08\u6BD4\u5982 NAS\uFF09\u3002\u5171\u4EAB\u5B58\u50A8\u5FC5\u987B\u517C\u5BB9 POXIS \u6587\u4EF6\u63A5\u53E3\uFF0C\u5E76\u4E14\u540C\u65F6\u6302\u8F7D\u5728\u6240\u6709 BE \u8282\u70B9\u4E0A\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5F53 ",(0,c.jsx)(n.code,{children:"shared_storage"})," \u4E3A true \u65F6\uFF0C\u53EF\u4EE5\u4E0D\u8BBE\u7F6E ",(0,c.jsx)(n.code,{children:"backend_id"}),"\uFF0CDoris \u53EF\u80FD\u4F1A\u5229\u7528\u5230\u6240\u6709 BE \u8282\u70B9\u8FDB\u884C\u6570\u636E\u8BBF\u95EE\u3002\u5982\u679C\u8BBE\u7F6E\u4E86 ",(0,c.jsx)(n.code,{children:"backend_id"}),"\uFF0C\u5219\u4ECD\u7136\u4EC5\u5728\u6307\u5B9A BE \u8282\u70B9\u4E0A\u6267\u884C\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6587\u4EF6\u683C\u5F0F\u76F8\u5173\u53C2\u6570\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"format"}),"\uFF1A(\u5FC5\u586B) \u76EE\u524D\u652F\u6301 ",(0,c.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"column_separator"}),"\uFF1A(\u9009\u586B) \u5217\u5206\u5272\u7B26, \u9ED8\u8BA4\u4E3A",(0,c.jsx)(n.code,{children:","}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"line_delimiter"}),"\uFF1A(\u9009\u586B) \u884C\u5206\u5272\u7B26\uFF0C\u9ED8\u8BA4\u4E3A",(0,c.jsx)(n.code,{children:"\\n"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"compress_type"}),": (\u9009\u586B) \u76EE\u524D\u652F\u6301 ",(0,c.jsx)(n.code,{children:"UNKNOWN/PLAIN/GZ/LZO/BZ2/LZ4FRAME/DEFLATE/SNAPPYBLOCK"}),"\u3002 \u9ED8\u8BA4\u503C\u4E3A ",(0,c.jsx)(n.code,{children:"UNKNOWN"}),", \u5C06\u4F1A\u6839\u636E ",(0,c.jsx)(n.code,{children:"uri"})," \u7684\u540E\u7F00\u81EA\u52A8\u63A8\u65AD\u7C7B\u578B\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u4EE5\u4E0B\u53C2\u6570\u9002\u7528\u4E8Ejson\u683C\u5F0F\u7684\u5BFC\u5165\uFF0C\u5177\u4F53\u4F7F\u7528\u65B9\u6CD5\u53EF\u4EE5\u53C2\u7167\uFF1A",(0,c.jsx)(n.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"Json Load"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"read_json_by_line"}),"\uFF1A (\u9009\u586B) \u9ED8\u8BA4\u4E3A ",(0,c.jsx)(n.code,{children:'"true"'})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"strip_outer_array"}),"\uFF1A (\u9009\u586B) \u9ED8\u8BA4\u4E3A ",(0,c.jsx)(n.code,{children:'"false"'})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"json_root"}),"\uFF1A (\u9009\u586B) \u9ED8\u8BA4\u4E3A\u7A7A"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"json_paths"}),"\uFF1A (\u9009\u586B) \u9ED8\u8BA4\u4E3A\u7A7A"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"num_as_string"}),"\uFF1A (\u9009\u586B) \u9ED8\u8BA4\u4E3A ",(0,c.jsx)(n.code,{children:"false"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"fuzzy_parse"}),"\uFF1A (\u9009\u586B) \u9ED8\u8BA4\u4E3A ",(0,c.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u4EE5\u4E0B\u53C2\u6570\u9002\u7528\u4E8Ecsv\u683C\u5F0F\u7684\u5BFC\u5165\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"trim_double_quotes"}),"\uFF1A \u5E03\u5C14\u7C7B\u578B\uFF0C\u9009\u586B\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",(0,c.jsx)(n.code,{children:"false"}),"\uFF0C\u4E3A ",(0,c.jsx)(n.code,{children:"true"})," \u65F6\u8868\u793A\u88C1\u526A\u6389 csv \u6587\u4EF6\u6BCF\u4E2A\u5B57\u6BB5\u6700\u5916\u5C42\u7684\u53CC\u5F15\u53F7"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"skip_lines"}),"\uFF1A \u6574\u6570\u7C7B\u578B\uFF0C\u9009\u586B\uFF0C\u9ED8\u8BA4\u503C\u4E3A0\uFF0C\u542B\u4E49\u4E3A\u8DF3\u8FC7csv\u6587\u4EF6\u7684\u524D\u51E0\u884C\u3002\u5F53\u8BBE\u7F6Eformat\u8BBE\u7F6E\u4E3A ",(0,c.jsx)(n.code,{children:"csv_with_names"})," \u6216 ",(0,c.jsx)(n.code,{children:"csv_with_names_and_types"})," \u65F6\uFF0C\u8BE5\u53C2\u6570\u4F1A\u5931\u6548"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u5176\u4ED6\u53C2\u6570\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"path_partition_keys"}),"\uFF1A\uFF08\u9009\u586B\uFF09\u6307\u5B9A\u6587\u4EF6\u8DEF\u5F84\u4E2D\u643A\u5E26\u7684\u5206\u533A\u5217\u540D\uFF0C\u4F8B\u5982 ",(0,c.jsx)(n.code,{children:'/path/to/city=beijing/date="2023-07-09"'}),", \u5219\u586B\u5199 ",(0,c.jsx)(n.code,{children:'path_partition_keys="city,date"'}),"\uFF0C\u5C06\u4F1A\u81EA\u52A8\u4ECE\u8DEF\u5F84\u4E2D\u8BFB\u53D6\u76F8\u5E94\u5217\u540D\u548C\u5217\u503C\u8FDB\u884C\u5BFC\u5165\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(n.p,{children:"\u5206\u6790\u6307\u5B9A BE \u4E0A\u7684\u65E5\u5FD7\u6587\u4EF6\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:'mysql> select * from local(\n        "file_path" = "log/be.out",\n        "backend_id" = "10006",\n        "format" = "csv")\n       where c1 like "%start_time%" limit 10;\n+--------------------------------------------------------+\n| c1                                                     |\n+--------------------------------------------------------+\n| start time: 2023\u5E74 08\u6708 07\u65E5 \u661F\u671F\u4E00 23:20:32 CST       |\n| start time: 2023\u5E74 08\u6708 07\u65E5 \u661F\u671F\u4E00 23:32:10 CST       |\n| start time: 2023\u5E74 08\u6708 08\u65E5 \u661F\u671F\u4E8C 00:20:50 CST       |\n| start time: 2023\u5E74 08\u6708 08\u65E5 \u661F\u671F\u4E8C 00:29:15 CST       |\n+--------------------------------------------------------+\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u8BFB\u53D6\u548C\u8BBF\u95EE\u4F4D\u4E8E\u8DEF\u5F84",(0,c.jsx)(n.code,{children:"${DORIS_HOME}/student.csv"}),"\u7684 csv\u683C\u5F0F\u6587\u4EF6\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:'mysql> select * from local(\n      "file_path" = "student.csv", \n      "backend_id" = "10003", \n      "format" = "csv");\n+------+---------+--------+\n| c1   | c2      | c3     |\n+------+---------+--------+\n| 1    | alice   | 18     |\n| 2    | bob     | 20     |\n| 3    | jack    | 24     |\n| 4    | jackson | 19     |\n| 5    | liming  | d18    |\n+------+---------+--------+\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u8BBF\u95EE NAS \u4E0A\u7684\u5171\u4EAB\u6570\u636E\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:'mysql> select * from local(\n        "file_path" = "/mnt/doris/prefix_*.txt",\n        "format" = "csv",\n        "column_separator" =",",\n        "shared_storage" = "true");\n+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n| 1    | 2    | 3    |\n| 1    | 2    | 3    |\n| 1    | 2    | 3    |\n| 1    | 2    | 3    |\n| 1    | 2    | 3    |\n+------+------+------+\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u53EF\u4EE5\u914D\u5408",(0,c.jsx)(n.code,{children:"desc function"}),"\u4F7F\u7528"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:'mysql> desc function local(\n      "file_path" = "student.csv", \n      "backend_id" = "10003", \n      "format" = "csv");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| c1    | TEXT | Yes  | false | NULL    | NONE  |\n| c2    | TEXT | Yes  | false | NULL    | NONE  |\n| c3    | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n'})}),"\n",(0,c.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"local, table-valued-function, tvf\n"})}),"\n",(0,c.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5173\u4E8E local tvf \u7684\u66F4\u8BE6\u7EC6\u4F7F\u7528\u65B9\u6CD5\u53EF\u4EE5\u53C2\u7167 ",(0,c.jsx)(n.a,{href:"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/s3",children:"S3"})," tvf, \u552F\u4E00\u4E0D\u540C\u7684\u662F\u8BBF\u95EE\u5B58\u50A8\u7CFB\u7EDF\u7684\u65B9\u5F0F\u4E0D\u4E00\u6837\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u901A\u8FC7 local tvf \u8BBF\u95EE NAS \u4E0A\u7684\u6570\u636E"}),"\n",(0,c.jsx)(n.p,{children:"NAS \u5171\u4EAB\u5B58\u50A8\u5141\u8BB8\u540C\u65F6\u6302\u8F7D\u5230\u591A\u4E2A\u8282\u70B9\u3002\u6BCF\u4E2A\u8282\u70B9\u90FD\u53EF\u4EE5\u50CF\u8BBF\u95EE\u672C\u5730\u6587\u4EF6\u4E00\u6837\u8BBF\u95EE\u5171\u4EAB\u5B58\u50A8\u4E2D\u7684\u6587\u4EF6\u3002\u56E0\u6B64\uFF0C\u53EF\u4EE5\u5C06 NAS \u89C6\u4E3A\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u901A\u8FC7 local tvf \u8FDB\u884C\u8BBF\u95EE\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5F53\u8BBE\u7F6E ",(0,c.jsx)(n.code,{children:'"shared_storage" = "true"'})," \u65F6\uFF0CDoris \u4F1A\u8BA4\u4E3A\u6240\u6307\u5B9A\u7684\u6587\u4EF6\u53EF\u4EE5\u5728\u4EFB\u610F BE \u8282\u70B9\u8BBF\u95EE\u3002\u5F53\u4F7F\u7528\u901A\u914D\u7B26\u6307\u5B9A\u4E86\u4E00\u7EC4\u6587\u4EF6\u65F6\uFF0CDoris \u4F1A\u5C06\u8BBF\u95EE\u6587\u4EF6\u7684\u8BF7\u6C42\u5206\u53D1\u5230\u591A\u4E2A BE \u8282\u70B9\u4E0A\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5229\u7528\u591A\u4E2A\u8282\u70B9\u7684\u8FDB\u884C\u5206\u5E03\u5F0F\u6587\u4EF6\u626B\u63CF\uFF0C\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u3002"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return d}});var l=s(667294);let c={},i=l.createContext(c);function d(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);