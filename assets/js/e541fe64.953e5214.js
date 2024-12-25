"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["853082"],{224689:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>s});var t=JSON.parse('{"id":"admin-manual/small-file-mgr","title":"Small File Manager","description":"\x3c!--","source":"@site/docs/admin-manual/small-file-mgr.md","sourceDirName":"admin-manual","slug":"/admin-manual/small-file-mgr","permalink":"/docs/dev/admin-manual/small-file-mgr","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Small File Manager","language":"en"},"sidebar":"docs","previous":{"title":"Developing Plugins","permalink":"/docs/dev/admin-manual/plugin-development-manual"},"next":{"title":"Compaction","permalink":"/docs/dev/admin-manual/compaction"}}'),a=i("785893"),l=i("250065");let s={title:"Small File Manager",language:"en"},r="File Manager",d={},o=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Specific operation",id:"specific-operation",level:2},{value:"CREATE FILE",id:"create-file",level:3},{value:"SHOW FILE",id:"show-file",level:3},{value:"DROP FILE",id:"drop-file",level:3},{value:"Implementation details",id:"implementation-details",level:2},{value:"Create and delete files",id:"create-and-delete-files",level:3},{value:"Use of documents",id:"use-of-documents",level:3},{value:"Use restrictions",id:"use-restrictions",level:2},{value:"Relevant configuration",id:"relevant-configuration",level:2},{value:"More Help",id:"more-help",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"file-manager",children:"File Manager"})}),"\n",(0,a.jsx)(n.p,{children:"Some functions in Doris require some user-defined files. For example, public keys, key files, certificate files and so on are used to access external data sources. The File Manager provides a function that allows users to upload these files in advance and save them in Doris system, which can then be referenced or accessed in other commands."}),"\n",(0,a.jsx)(n.h2,{id:"noun-interpretation",children:"Noun Interpretation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"BDBJE: Oracle Berkeley DB Java Edition. Distributed embedded database for persistent metadata in FE."}),"\n",(0,a.jsx)(n.li,{children:"SmallFileMgr: File Manager. Responsible for creating and maintaining user files."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,a.jsx)(n.p,{children:"Files are files created and saved by users in Doris."}),"\n",(0,a.jsxs)(n.p,{children:["A file is located by ",(0,a.jsx)(n.code,{children:"database"}),", ",(0,a.jsx)(n.code,{children:"catalog"}),", ",(0,a.jsx)(n.code,{children:"file_name"}),". At the same time, each file also has a globally unique ID (file_id), which serves as the identification in the system."]}),"\n",(0,a.jsxs)(n.p,{children:["File creation and deletion can only be performed by users with ",(0,a.jsx)(n.code,{children:"admin"})," privileges. A file belongs to a database. Users who have access to a database (queries, imports, modifications, etc.) can use the files created under the database."]}),"\n",(0,a.jsx)(n.h2,{id:"specific-operation",children:"Specific operation"}),"\n",(0,a.jsxs)(n.p,{children:["File management has three main commands: ",(0,a.jsx)(n.code,{children:"CREATE FILE"}),", ",(0,a.jsx)(n.code,{children:"SHOW FILE"})," and ",(0,a.jsx)(n.code,{children:"DROP FILE"}),", creating, viewing and deleting files respectively. The specific syntax of these three commands can be viewed by connecting to Doris and executing ",(0,a.jsx)(n.code,{children:"HELP cmd;"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"create-file",children:"CREATE FILE"}),"\n",(0,a.jsxs)(n.p,{children:["This statement is used to create and upload a file to the Doris cluster. For details, see ",(0,a.jsx)(n.a,{href:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-FILE",children:"CREATE FILE"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'1. Create file ca.pem , classified as kafka\n\n    CREATE FILE "ca.pem"\n    PROPERTIES\n    (\n        "url" = "https://test.bj.bcebos.com/kafka-key/ca.pem",\n        "catalog" = "kafka"\n    );\n\n2. Create a file client.key, classified as my_catalog\n\n    CREATE FILE "client.key"\n    IN my_database\n    PROPERTIES\n    (\n        "url" = "https://test.bj.bcebos.com/kafka-key/client.key",\n        "catalog" = "my_catalog",\n        "md5" = "b5bb901bf10f99205b39a46ac3557dd9"\n    );\n'})}),"\n",(0,a.jsx)(n.h3,{id:"show-file",children:"SHOW FILE"}),"\n",(0,a.jsxs)(n.p,{children:["This statement can view the files that have been created successfully. For details, see ",(0,a.jsx)(n.a,{href:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-FILE",children:"SHOW FILE"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"1. View uploaded files in database my_database\n\n    SHOW FILE FROM my_database;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"drop-file",children:"DROP FILE"}),"\n",(0,a.jsxs)(n.p,{children:["This statement can view and delete an already created file. For specific operations, see ",(0,a.jsx)(n.a,{href:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-FILE",children:"DROP FILE"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'1. delete file ca.pem\n\n    DROP FILE "ca.pem" properties("catalog" = "kafka");\n'})}),"\n",(0,a.jsx)(n.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,a.jsx)(n.h3,{id:"create-and-delete-files",children:"Create and delete files"}),"\n",(0,a.jsxs)(n.p,{children:["When the user executes the ",(0,a.jsx)(n.code,{children:"CREATE FILE"})," command, FE downloads the file from a given URL. The contents of the file are stored in FE memory directly in the form of Base64 encoding. At the same time, the file content and meta-information related to the file will be persisted in BDBJE. All created files, their meta-information and file content reside in FE memory. If the FE goes down and restarts, meta information and file content will also be loaded into memory from the BDBJE. When a file is deleted, the relevant information is deleted directly from FE memory and persistent information is deleted from BDBJE."]}),"\n",(0,a.jsx)(n.h3,{id:"use-of-documents",children:"Use of documents"}),"\n",(0,a.jsx)(n.p,{children:"If the FE side needs to use the created file, SmallFileMgr will directly save the data in FE memory as a local file, store it in the specified directory, and return the local file path for use."}),"\n",(0,a.jsxs)(n.p,{children:["If the BE side needs to use the created file, BE will download the file content to the specified directory on BE through FE's HTTP interface ",(0,a.jsx)(n.code,{children:"api/get_small_file"})," for use. At the same time, BE also records the information of the files that have been downloaded in memory. When BE requests a file, it first checks whether the local file exists and verifies it. If the validation passes, the local file path is returned directly. If the validation fails, the local file is deleted and downloaded from FE again. When BE restarts, local files are preloaded into memory."]}),"\n",(0,a.jsx)(n.h2,{id:"use-restrictions",children:"Use restrictions"}),"\n",(0,a.jsx)(n.p,{children:"Because the file meta-information and content are stored in FE memory. So by default, only files with size less than 1MB can be uploaded. And the total number of files is limited to 100. The configuration items described in the next section can be modified."}),"\n",(0,a.jsx)(n.h2,{id:"relevant-configuration",children:"Relevant configuration"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"FE configuration"}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Small_file_dir"}),": The path used to store uploaded files, defaulting to the ",(0,a.jsx)(n.code,{children:"small_files/"})," directory of the FE runtime directory."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"max_small_file_size_bytes"}),": A single file size limit in bytes. The default is 1MB. File creation larger than this configuration will be rejected."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"max_small_file_number"}),": The total number of files supported by a Doris cluster. The default is 100. When the number of files created exceeds this value, subsequent creation will be rejected."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["If you need to upload more files or increase the size limit of a single file, you can modify the ",(0,a.jsx)(n.code,{children:"max_small_file_size_bytes"})," and ",(0,a.jsx)(n.code,{children:"max_small_file_number"})," parameters by using the ",(0,a.jsx)(n.code,{children:"ADMIN SET CONFIG"})," command. However, the increase in the number and size of files will lead to an increase in FE memory usage."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"BE configuration"}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Small_file_dir"}),": The path used to store files downloaded from FE by default is in the ",(0,a.jsx)(n.code,{children:"lib/small_files/"})," directory of the BE runtime directory."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"more-help",children:"More Help"}),"\n",(0,a.jsxs)(n.p,{children:["For more detailed syntax and best practices used by the file manager, see ",(0,a.jsx)(n.a,{href:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-FILE",children:"CREATE FILE"}),", ",(0,a.jsx)(n.a,{href:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-FILE",children:"DROP FILE"})," and ",(0,a.jsx)(n.a,{href:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-FILE",children:"SHOW FILE"})," command manual, you can also enter ",(0,a.jsx)(n.code,{children:"HELP CREATE FILE"}),", ",(0,a.jsx)(n.code,{children:"HELP DROP FILE"})," and ",(0,a.jsx)(n.code,{children:"HELP SHOW FILE"})," in the MySql client command line to get more help information."]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return s}});var t=i(667294);let a={},l=t.createContext(a);function s(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);