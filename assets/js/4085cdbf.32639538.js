"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["677165"],{788320:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/s3","title":"S3","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/table-valued-functions/s3.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/s3","permalink":"/docs/3.0/sql-manual/sql-functions/table-valued-functions/s3","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"S3","language":"en"},"sidebar":"docs","previous":{"title":"EXPLODE_NUMBERS_OUTER","permalink":"/docs/3.0/sql-manual/sql-functions/table-functions/explode-numbers-outer"},"next":{"title":"HDFS","permalink":"/docs/3.0/sql-manual/sql-functions/table-valued-functions/hdfs"}}'),a=s("785893"),r=s("250065");let i={title:"S3",language:"en"},o=void 0,l={},c=[{value:"S3",id:"s3",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"s3",children:"S3"}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(n.p,{children:"S3"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,a.jsxs)(n.p,{children:["S3 table-valued-function(tvf), allows users to read and access file contents on S3-compatible object storage, just like accessing relational table. Currently supports ",(0,a.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"})," file format."]}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'s3(\n  "uri" = "..",\n  "s3.access_key" = "...",\n  "s3.secret_key" = "...",\n  "s3.region" = "...",\n  "s3.endpoint" = "...",\n  "format" = "csv",\n  "keyn" = "valuen",\n  ...\n  );\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"parameter description"})}),"\n",(0,a.jsxs)(n.p,{children:["Each parameter in S3 tvf is a pair of ",(0,a.jsx)(n.code,{children:'"key"="value"'}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Related parameters for accessing S3:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"uri"}),": (required) The S3 tvf will decide whether to use the path style access method according to the ",(0,a.jsx)(n.code,{children:"use_path_style"})," parameter, and the default access method is the virtual-hosted style method."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"s3.access_key"}),"\uFF1A (required)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"s3.secret_key"}),"\uFF1A (required)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"s3.region"}),"\uFF1A (required)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"s3.endpoint"}),"\uFF1A(required)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"s3.session_token"}),"\uFF1A (optional)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"use_path_style"}),": (optional) default ",(0,a.jsx)(n.code,{children:"false"})," . The S3 SDK uses the virtual-hosted style by default. However, some object storage systems may not be enabled or support virtual-hosted style access. At this time, we can add the ",(0,a.jsx)(n.code,{children:"use_path_style"})," parameter to force the use of path style access method."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"force_parsing_by_standard_uri"}),": (optional) default ",(0,a.jsx)(n.code,{children:"false"})," . We can add ",(0,a.jsx)(n.code,{children:"force_parsing_by_standard_uri"})," parameter to force parsing unstandard uri as standard uri."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Note:\nFor AWS S3, standard uri styles should be:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["AWS Client Style(Hadoop S3 Style): ",(0,a.jsx)(n.code,{children:"s3://my-bucket/path/to/file?versionId=abc123&partNumber=77&partNumber=88"})]}),"\n",(0,a.jsxs)(n.li,{children:["Virtual Host Style: ",(0,a.jsx)(n.code,{children:"https://my-bucket.s3.us-west-1.amazonaws.com/resources/doc.txt?versionId=abc123&partNumber=77&partNumber=88"})]}),"\n",(0,a.jsxs)(n.li,{children:["Path Style: ",(0,a.jsx)(n.code,{children:"https://s3.us-west-1.amazonaws.com/my-bucket/resources/doc.txt?versionId=abc123&partNumber=77&partNumber=88"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In addition to supporting the common uri styles of the above three standards, it also supports some other uri styles (maybe not common, but there may be):"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Virtual Host AWS Client (Hadoop S3) Mixed Style:\n",(0,a.jsx)(n.code,{children:"s3://my-bucket.s3.us-west-1.amazonaws.com/resources/doc.txt?versionId=abc123&partNumber=77&partNumber=88"})]}),"\n",(0,a.jsxs)(n.li,{children:["Path AWS Client (Hadoop S3) Mixed Style:\n",(0,a.jsx)(n.code,{children:"s3://s3.us-west-1.amazonaws.com/my-bucket/resources/doc.txt?versionId=abc123&partNumber=77&partNumber=88"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"For detailed use cases, you can refer to Best Practice at the bottom."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"file format parameter:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"format"}),": (required) Currently support ",(0,a.jsx)(n.code,{children:"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"column_separator"}),": (optional) default ",(0,a.jsx)(n.code,{children:"\\t"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"line_delimiter"}),": (optional) default ",(0,a.jsx)(n.code,{children:"\\n"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"compress_type"}),": (optional) Currently support ",(0,a.jsx)(n.code,{children:"UNKNOWN/PLAIN/GZ/LZO/BZ2/LZ4FRAME/DEFLATE/SNAPPYBLOCK"}),". Default value is ",(0,a.jsx)(n.code,{children:"UNKNOWN"}),", it will automatically infer the type based on the suffix of ",(0,a.jsx)(n.code,{children:"uri"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The following 6 parameters are used for loading in json format. For specific usage methods, please refer to: ",(0,a.jsx)(n.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"Json Load"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"read_json_by_line"}),": (optional) default ",(0,a.jsx)(n.code,{children:'"true"'})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"strip_outer_array"}),": (optional) default ",(0,a.jsx)(n.code,{children:'"false"'})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"json_root"}),": (optional) default ",(0,a.jsx)(n.code,{children:'""'})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"jsonpaths"}),": (optional) default ",(0,a.jsx)(n.code,{children:'""'})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"num_as_string"}),": (optional) default ",(0,a.jsx)(n.code,{children:'"false"'})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"fuzzy_parse"}),": (optional) default ",(0,a.jsx)(n.code,{children:'"false"'})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The following 2 parameters are used for loading in csv format"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"trim_double_quotes"}),": Boolean type (optional), the default value is ",(0,a.jsx)(n.code,{children:"false"}),". True means that the outermost double quotes of each field in the csv file are trimmed."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"skip_lines"}),": Integer type (optional), the default value is 0. It will skip some lines in the head of csv file. It will be disabled when the format is ",(0,a.jsx)(n.code,{children:"csv_with_names"})," or ",(0,a.jsx)(n.code,{children:"csv_with_names_and_types"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"other parameter:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"path_partition_keys"}),': (optional) Specifies the column names carried in the file path. For example, if the file path is /path/to/city=beijing/date="2023-07-09", you should fill in ',(0,a.jsx)(n.code,{children:'path_partition_keys="city,date"'}),". It will automatically read the corresponding column names and values from the path during load process."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"resource"}),"\uFF1A\uFF08optional\uFF09Specify the resource name. S3 tvf can use the existing S3 resource to directly access S3. You can refer to the method for creating an S3 resource: ",(0,a.jsx)(n.a,{href:"/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/CREATE-RESOURCE",children:"CREATE-RESOURCE"}),". This property is supported starting from version 2.1.4 ."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,a.jsx)(n.p,{children:"To directly query a TVF or create a VIEW based on that TVF, you need to have usage permission for that resource. To query a VIEW created based on TVF, you only need select permission for that VIEW."})}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"Read and access csv format files on S3-compatible object storage."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select * from s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n                "s3.access_key"= "minioadmin",\n                "s3.secret_key" = "minioadmin",\n                "s3.endpoint" = "http://127.0.0.1:9312",\n                "s3.region" = "us-east-1",\n                "format" = "csv",\n                "use_path_style" = "true") order by c1;\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Can be used with ",(0,a.jsx)(n.code,{children:"desc function"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n                 "s3.access_key"= "minioadmin",\n                 "s3.secret_key" = "minioadmin",\n                 "s3.endpoint" = "http://127.0.0.1:9312",\n                 "s3.region" = "us-east-1",\n                 "format" = "csv",\n                 "use_path_style" = "true");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"s3, table-valued-function, tvf\n"})}),"\n",(0,a.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,a.jsx)(n.p,{children:"Since the S3 table-valued-function does not know the table schema in advance, it will read the file first to parse out the table schema."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Usage of different uri schemas"}),"\nExample of http:// \u3001https://"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'// Note how to write your bucket of URI and set the \'use_path_style\' parameter, as well as http://.\n// Because of "use_path_style"="true", s3 will be accessed in \'path style\'.\nselect * from s3(\n    "URI" = "https://endpoint/bucket/file/student.csv",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.endpoint" = "endpoint",\n    "s3.region" = "region",\n    "format" = "csv",\n    "use_path_style"="true");\n\n// Note how to write your bucket of URI and set the \'use_path_style\' parameter, as well as http://.\n// Because of "use_path_style"="false", s3 will be accessed in \'virtual-hosted style\'.\nselect * from s3(\n    "URI" = "https://bucket.endpoint/file/student.csv",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.endpoint" = "endpoint",\n    "s3.region" = "region",\n    "format" = "csv",\n    "use_path_style"="false");    \n    \n// The OSS on Alibaba Cloud and The COS on Tencent Cloud will use \'virtual-hosted style\' to access s3.\n// OSS\nselect * from s3(\n    "URI" = "http://example-bucket.oss-cn-beijing.aliyuncs.com/your-folder/file.parquet",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.endpoint" = "oss-cn-beijing.aliyuncs.com",\n    "s3.region" = "oss-cn-beijing",\n    "format" = "parquet",\n    "use_path_style" = "false");\n// COS\nselect * from s3(\n    "URI" = "https://example-bucket.cos.ap-hongkong.myqcloud.com/your-folder/file.parquet",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.endpoint" = "cos.ap-hongkong.myqcloud.com",\n    "s3.region" = "ap-hongkong",\n    "format" = "parquet",\n    "use_path_style" = "false");\n\n// MinIO\nselect * from s3(\n    "uri" = "s3://bucket/file.csv",\n    "s3.endpoint" = "http://172.21.0.101:9000",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "us-east-1",\n    "format" = "csv"\n);\n\n// The BOS on Baidu Cloud will use \'virtual-hosted style\' compatible with the S3 protocol to access s3.\n// BOS\nselect * from s3(\n    "uri" = "https://example-bucket.s3.bj.bcebos.com/your-folder/file.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "bj",\n    "s3.endpoint" = "http://bj.bcebos.com",\n    "format" = "parquet",\n    "use_path_style" = "false");\n'})}),"\n",(0,a.jsx)(n.p,{children:"Example of s3://\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'// Note how to write your bucket of URI, no need to set \'use_path_style\'.\n// s3 will be accessed in \'virtual-hosted style\'.\nselect * from s3(\n    "URI" = "s3://bucket/file/student.csv",\n    "s3.endpoint"= "endpont",\n    "s3.region" = "region",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv");    \n'})}),"\n",(0,a.jsx)(n.p,{children:"Example of other uri styles:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'// Virtual Host AWS Client (Hadoop S3) Mixed Style. Used by setting `use_path_style = false` and `force_parsing_by_standard_uri = true`.\nselect * from s3(\n    "URI" = "s3://my-bucket.s3.us-west-1.amazonaws.com/resources/doc.txt?versionId=abc123&partNumber=77&partNumber=88",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.endpoint"= "endpont",\n    "s3.region"= "region",\n    "format" = "csv",\n    "use_path_style"="false",\n    "force_parsing_by_standard_uri"="true");\n\n// Path AWS Client (Hadoop S3) Mixed Style. Used by setting `use_path_style = true` and `force_parsing_by_standard_uri = true`.\nselect * from s3(\n    "URI" = "s3://s3.us-west-1.amazonaws.com/my-bucket/resources/doc.txt?versionId=abc123&partNumber=77&partNumber=88",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.endpoint"= "endpont",\n    "s3.region"= "region",\n    "format" = "csv",\n    "use_path_style"="true",\n    "force_parsing_by_standard_uri"="true");\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"csv format"}),"\n",(0,a.jsx)(n.code,{children:"csv"})," format: Read the file on S3 and process it as a csv file, read the first line in the file to parse out the table schema. The number of columns in the first line of the file ",(0,a.jsx)(n.code,{children:"n"})," will be used as the number of columns in the table schema, and the column names of the table schema will be automatically named ",(0,a.jsx)(n.code,{children:"c1, c2, ..., cn"}),", and the column type is set to ",(0,a.jsx)(n.code,{children:"String"})," , for example:"]}),"\n",(0,a.jsx)(n.p,{children:"The file content of student1.csv:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"1,ftw,12\n2,zs,18\n3,ww,20\n"})}),"\n",(0,a.jsx)(n.p,{children:"use S3 tvf"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "s3.endpoint" = "http://127.0.0.1:9312",\n->                 "s3.region" = "us-east-1",\n->                 "format" = "csv",\n->                 "use_path_style" = "true") order by c1;\n+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n'})}),"\n",(0,a.jsxs)(n.p,{children:["use ",(0,a.jsx)(n.code,{children:"desc function S3()"})," to view the table schema"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "s3.endpoint" = "http://127.0.0.1:9312",\n->                 "s3.region" = "us-east-1",\n->                 "format" = "csv",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| c1    | TEXT | Yes  | false | NULL    | NONE  |\n| c2    | TEXT | Yes  | false | NULL    | NONE  |\n| c3    | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"csv_with_names format"}),"\n",(0,a.jsx)(n.code,{children:"csv_with_names"})," format: The first line of the file is used as the number and name of the columns of the table schema, and the column type is set to ",(0,a.jsx)(n.code,{children:"String"}),", for example:"]}),"\n",(0,a.jsx)(n.p,{children:"The file content of student_with_names.csv:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"id,name,age\n1,ftw,12\n2,zs,18\n3,ww,20\n"})}),"\n",(0,a.jsx)(n.p,{children:"use S3 tvf"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student_with_names.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "s3.endpoint" = "http://127.0.0.1:9312",\n->                 "s3.region" = "us-east-1",\n->                 "format" = "csv_with_names",\n->                 "use_path_style" = "true") order by id;\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can also use ",(0,a.jsx)(n.code,{children:"desc function S3()"})," to view the Table Schema."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student_with_names.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "s3.endpoint" = "http://127.0.0.1:9312",\n->                 "s3.region" = "us-east-1",\n->                 "format" = "csv_with_names",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| id    | TEXT | Yes  | false | NULL    | NONE  |\n| name  | TEXT | Yes  | false | NULL    | NONE  |\n| age   | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"csv_with_names_and_types format"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"csv_with_names_and_types"})," format: Currently, it does not support parsing the column type from a csv file. When using this format, S3 tvf will parse the first line of the file as the number and name of the columns of the table schema, and set the column type to String. Meanwhile, the second line of the file is ignored."]}),"\n",(0,a.jsx)(n.p,{children:"The file content of student_with_names_and_types.csv:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"id,name,age\nINT,STRING,INT\n1,ftw,12\n2,zs,18\n3,ww,20\n"})}),"\n",(0,a.jsx)(n.p,{children:"use S3 tvf"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student_with_names_and_types.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "s3.endpoint" = "http://127.0.0.1:9312",\n->                 "s3.region" = "us-east-1",\n->                 "format" = "csv_with_names_and_types",\n->                 "use_path_style" = "true") order by id;\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can also use ",(0,a.jsx)(n.code,{children:"desc function S3()"})," to view the Table Schema."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student_with_names_and_types.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "s3.endpoint" = "http://127.0.0.1:9312",\n->                 "s3.region" = "us-east-1",\n->                 "format" = "csv_with_names_and_types",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| id    | TEXT | Yes  | false | NULL    | NONE  |\n| name  | TEXT | Yes  | false | NULL    | NONE  |\n| age   | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"json format"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"json"})," format: The json format involves many optional parameters, and the meaning of each parameter can be referred to: ",(0,a.jsx)(n.a,{href:"../../../data-operate/import/import-way/load-json-format.md",children:"Json Load"}),". When S3 tvf queries the json format file, it locates a json object according to the ",(0,a.jsx)(n.code,{children:"json_root"})," and ",(0,a.jsx)(n.code,{children:"jsonpaths"})," parameters, and uses the ",(0,a.jsx)(n.code,{children:"key"})," in the object as the column name of the table schema, and sets the column type to String. For example:"]}),"\n",(0,a.jsx)(n.p,{children:"The file content of data.json:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[{"id":1, "name":"ftw", "age":18}]\n[{"id":2, "name":"xxx", "age":17}]\n[{"id":3, "name":"yyy", "age":19}]\n'})}),"\n",(0,a.jsx)(n.p,{children:"use S3 tvf:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3(\n    "uri" = "http://127.0.0.1:9312/test2/data.json",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "s3.endpoint" = "http://127.0.0.1:9312",\n    "s3.region" = "us-east-1",\n    "format" = "json",\n    "strip_outer_array" = "true",\n    "read_json_by_line" = "true",\n    "use_path_style"="true");\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 18   |\n| 2    | xxx  | 17   |\n| 3    | yyy  | 19   |\n+------+------+------+\n\nMySQL [(none)]> select * from s3(\n    "uri" = "http://127.0.0.1:9312/test2/data.json",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "s3.endpoint" = "http://127.0.0.1:9312",\n    "s3.region" = "us-east-1",\n    "format" = "json",\n    "strip_outer_array" = "true",\n    "jsonpaths" = "[\\"$.id\\", \\"$.age\\"]",\n    "use_path_style"="true");\n+------+------+\n| id   | age  |\n+------+------+\n| 1    | 18   |\n| 2    | 17   |\n| 3    | 19   |\n+------+------+\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"parquet format"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"parquet"})," format: S3 tvf supports parsing the column names and column types of the table schema from the parquet file. Example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "s3.endpoint" = "http://127.0.0.1:9312",\n    "s3.region" = "us-east-1",\n    "format" = "parquet",\n    "use_path_style"="true") limit 5;\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n| p_partkey | p_name                                   | p_mfgr         | p_brand  | p_type                  | p_size | p_container | p_retailprice | p_comment           |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n|         1 | goldenrod lavender spring chocolate lace | Manufacturer#1 | Brand#13 | PROMO BURNISHED COPPER  |      7 | JUMBO PKG   |           901 | ly. slyly ironi     |\n|         2 | blush thistle blue yellow saddle         | Manufacturer#1 | Brand#13 | LARGE BRUSHED BRASS     |      1 | LG CASE     |           902 | lar accounts amo    |\n|         3 | spring green yellow purple cornsilk      | Manufacturer#4 | Brand#42 | STANDARD POLISHED BRASS |     21 | WRAP CASE   |           903 | egular deposits hag |\n|         4 | cornflower chocolate smoke green pink    | Manufacturer#3 | Brand#34 | SMALL PLATED BRASS      |     14 | MED DRUM    |           904 | p furiously r       |\n|         5 | forest brown coral puff cream            | Manufacturer#3 | Brand#32 | STANDARD POLISHED TIN   |     15 | SM PKG      |           905 |  wake carefully     |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> desc function s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "s3.endpoint" = "http://127.0.0.1:9312",\n    "s3.region" = "us-east-1",\n    "format" = "parquet",\n    "use_path_style"="true");\n+---------------+--------------+------+-------+---------+-------+\n| Field         | Type         | Null | Key   | Default | Extra |\n+---------------+--------------+------+-------+---------+-------+\n| p_partkey     | INT          | Yes  | false | NULL    | NONE  |\n| p_name        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_mfgr        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_brand       | TEXT         | Yes  | false | NULL    | NONE  |\n| p_type        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_size        | INT          | Yes  | false | NULL    | NONE  |\n| p_container   | TEXT         | Yes  | false | NULL    | NONE  |\n| p_retailprice | DECIMAL(9,0) | Yes  | false | NULL    | NONE  |\n| p_comment     | TEXT         | Yes  | false | NULL    | NONE  |\n+---------------+--------------+------+-------+---------+-------+\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"orc format"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"orc"})," format: Same as ",(0,a.jsx)(n.code,{children:"parquet"})," format, set ",(0,a.jsx)(n.code,{children:"format"})," parameter to orc."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.orc",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "s3.endpoint" = "http://127.0.0.1:9312",\n    "s3.region" = "us-east-1",\n    "format" = "orc",\n    "use_path_style"="true") limit 5;\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n| p_partkey | p_name                                   | p_mfgr         | p_brand  | p_type                  | p_size | p_container | p_retailprice | p_comment           |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n|         1 | goldenrod lavender spring chocolate lace | Manufacturer#1 | Brand#13 | PROMO BURNISHED COPPER  |      7 | JUMBO PKG   |           901 | ly. slyly ironi     |\n|         2 | blush thistle blue yellow saddle         | Manufacturer#1 | Brand#13 | LARGE BRUSHED BRASS     |      1 | LG CASE     |           902 | lar accounts amo    |\n|         3 | spring green yellow purple cornsilk      | Manufacturer#4 | Brand#42 | STANDARD POLISHED BRASS |     21 | WRAP CASE   |           903 | egular deposits hag |\n|         4 | cornflower chocolate smoke green pink    | Manufacturer#3 | Brand#34 | SMALL PLATED BRASS      |     14 | MED DRUM    |           904 | p furiously r       |\n|         5 | forest brown coral puff cream            | Manufacturer#3 | Brand#32 | STANDARD POLISHED TIN   |     15 | SM PKG      |           905 |  wake carefully     |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"avro format"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"avro"})," format: S3 tvf supports parsing the column names and column types of the table schema from the avro file. Example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'select * from s3(\n         "uri" = "http://127.0.0.1:9312/test2/person.avro",\n         "ACCESS_KEY" = "ak",\n         "SECRET_KEY" = "sk",\n         "s3.endpoint" = "http://127.0.0.1:9312",\n         "s3.region" = "us-east-1",\n         "FORMAT" = "avro");\n+--------+--------------+-------------+-----------------+\n| name   | boolean_type | double_type | long_type       |\n+--------+--------------+-------------+-----------------+\n| Alyssa |            1 |     10.0012 | 100000000221133 |\n| Ben    |            0 |    5555.999 |      4009990000 |\n| lisi   |            0 | 5992225.999 |      9099933330 |\n+--------+--------------+-------------+-----------------+\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"uri contains wildcards"})}),"\n",(0,a.jsx)(n.p,{children:"uri can use wildcards to read multiple files. Note: If wildcards are used, the format of each file must be consistent (especially csv/csv_with_names/csv_with_names_and_types count as different formats), S3 tvf uses the first file to parse out the table schema. For example:"}),"\n",(0,a.jsx)(n.p,{children:"The following two csv files:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"// file1.csv\n1,aaa,18\n2,qqq,20\n3,qwe,19\n\n// file2.csv\n5,cyx,19\n6,ftw,21\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can use wildcards on the uri to query."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'MySQL [(none)]> select * from s3(\n        "uri" = "http://127.0.0.1:9312/test2/file*.csv",\n        "s3.access_key"= "minioadmin",\n        "s3.secret_key" = "minioadmin",\n        "s3.endpoint" = "http://127.0.0.1:9312",\n        "s3.region" = "us-east-1",\n        "format" = "csv",\n        "use_path_style"="true");\n+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n| 1    | aaa  | 18   |\n| 2    | qqq  | 20   |\n| 3    | qwe  | 19   |\n| 5    | cyx  | 19   |\n| 6    | ftw  | 21   |\n+------+------+------+\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Using ",(0,a.jsx)(n.code,{children:"S3"})," tvf with ",(0,a.jsx)(n.code,{children:"insert into"})," and ",(0,a.jsx)(n.code,{children:"cast"})]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'// Create doris internal table\nCREATE TABLE IF NOT EXISTS ${testTable}\n    (\n        id int,\n        name varchar(50),\n        age int\n    )\n    COMMENT "my first table"\n    DISTRIBUTED BY HASH(id) BUCKETS 32\n    PROPERTIES("replication_num" = "1");\n\n// Insert data using S3\ninsert into ${testTable} (id,name,age)\nselect cast (id as INT) as id, name, cast (age as INT) as age\nfrom s3(\n    "uri" = "${uri}",\n    "s3.access_key"= "${ak}",\n    "s3.secret_key" = "${sk}",\n    "s3.endpoint" = "http://127.0.0.1:9312",\n    "s3.region" = "us-east-1",\n    "format" = "${format}",\n    "strip_outer_array" = "true",\n    "read_json_by_line" = "true",\n    "use_path_style" = "true");\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let a={},r=t.createContext(a);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);