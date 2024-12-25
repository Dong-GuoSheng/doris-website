"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["830048"],{490426:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>t});var s=JSON.parse('{"id":"advanced/broker","title":"Broker","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/advanced/broker.md","sourceDirName":"advanced","slug":"/advanced/broker","permalink":"/docs/1.2/advanced/broker","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Broker","language":"en"},"sidebar":"docs","previous":{"title":"AutoBucket","permalink":"/docs/1.2/advanced/autobucket"},"next":{"title":"Query Analysis","permalink":"/docs/1.2/advanced/best-practice/query-analysis"}}'),o=r("785893"),i=r("250065");let t={title:"Broker",language:"en"},a="Broker",d={},c=[{value:"Supported Storage System",id:"supported-storage-system",level:2},{value:"Function provided by Broker",id:"function-provided-by-broker",level:2},{value:"Broker Information",id:"broker-information",level:2},{value:"Broker Name",id:"broker-name",level:3},{value:"Certification Information",id:"certification-information",level:3},{value:"Community HDFS",id:"community-hdfs",level:4},{value:"Tencent Cloud CHDFS",id:"tencent-cloud-chdfs",level:4},{value:"Aliyun OSS",id:"aliyun-oss",level:4},{value:"Huawei Cloud OBS",id:"huawei-cloud-obs",level:4},{value:"Amazon S3",id:"amazon-s3",level:4},{value:"JuiceFS",id:"juicefs",level:4}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"broker",children:"Broker"})}),"\n",(0,o.jsx)(n.p,{children:"Broker is an optional process in the Doris cluster. It is mainly used to support Doris to read and write files or directories on remote storage. Now support:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Apache HDFS"}),"\n",(0,o.jsx)(n.li,{children:"Aliyun OSS"}),"\n",(0,o.jsx)(n.li,{children:"Tencent Cloud CHDFS"}),"\n",(0,o.jsx)(n.li,{children:"Tencent Cloud GFS (since 1.2.0)"}),"\n",(0,o.jsx)(n.li,{children:"Huawei Cloud OBS (since 1.2.0)"}),"\n",(0,o.jsx)(n.li,{children:"Amazon S3"}),"\n",(0,o.jsx)(n.li,{children:"JuiceFS (since 2.0.0)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Broker provides services through an RPC service port. It is a stateless JVM process that is responsible for encapsulating some POSIX-like file operations for read and write operations on remote storage, such as open, pred, pwrite, and so on.\nIn addition, the Broker does not record any other information, so the connection information, file information, permission information, and so on stored remotely need to be passed to the Broker process in the RPC call through parameters in order for the Broker to read and write files correctly ."}),"\n",(0,o.jsx)(n.p,{children:"Broker only acts as a data channel and does not participate in any calculations, so it takes up less memory. Usually one or more Broker processes are deployed in a Doris system. And the same type of Broker will form a group and set a ** Broker name **."}),"\n",(0,o.jsx)(n.p,{children:"Broker's position in the Doris system architecture is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"+----+   +----+\n| FE |   | BE |\n+-^--+   +--^-+\n  |         |\n  |         |\n+-v---------v-+\n|   Broker    |\n+------^------+\n       |\n       |\n+------v------+\n|HDFS/BOS/AFS |\n+-------------+\n"})}),"\n",(0,o.jsx)(n.p,{children:"This document mainly introduces the parameters that Broker needs when accessing different remote storages, such as connection information,\nauthorization information, and so on."}),"\n",(0,o.jsx)(n.h2,{id:"supported-storage-system",children:"Supported Storage System"}),"\n",(0,o.jsx)(n.p,{children:"Different types of brokers support different storage systems."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Community HDFS"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Support simple authentication access"}),"\n",(0,o.jsx)(n.li,{children:"Support kerberos authentication access"}),"\n",(0,o.jsx)(n.li,{children:"Support HDFS HA mode access"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Object storage"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"All object stores that support the S3 protocol"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"function-provided-by-broker",children:"Function provided by Broker"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/1.2/data-operate/import/import-way/broker-load-manual",children:"Broker Load"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/1.2/data-operate/export/export-manual",children:"Export"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/1.2/admin-manual/data-admin/backup",children:"Backup"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"broker-information",children:"Broker Information"}),"\n",(0,o.jsx)(n.p,{children:"Broker information includes two parts: ** Broker name ** and ** Certification information **. The general syntax is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'WITH BROKER "broker_name" \n(\n    "username" = "xxx",\n    "password" = "yyy",\n    "other_prop" = "prop_value",\n    ...\n);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"broker-name",children:"Broker Name"}),"\n",(0,o.jsxs)(n.p,{children:["Usually the user needs to specify an existing Broker Name through the ",(0,o.jsx)(n.code,{children:'WITH BROKER" broker_name "'})," clause in the operation command.\nBroker Name is a name that the user specifies when adding a Broker process through the ALTER SYSTEM ADD BROKER command.\nA name usually corresponds to one or more broker processes. Doris selects available broker processes based on the name.\nYou can use the ",(0,o.jsx)(n.code,{children:"SHOW BROKER"})," command to view the Brokers that currently exist in the cluster."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Note: Broker Name is just a user-defined name and does not represent the type of Broker."})}),"\n",(0,o.jsx)(n.h3,{id:"certification-information",children:"Certification Information"}),"\n",(0,o.jsxs)(n.p,{children:["Different broker types and different access methods need to provide different authentication information.\nAuthentication information is usually provided as a Key-Value in the Property Map after ",(0,o.jsx)(n.code,{children:'WITH BROKER" broker_name "'}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"community-hdfs",children:"Community HDFS"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Simple Authentication"}),"\n",(0,o.jsxs)(n.p,{children:["Simple authentication means that Hadoop configures ",(0,o.jsx)(n.code,{children:"hadoop.security.authentication"})," to",(0,o.jsx)(n.code,{children:" simple"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Use system users to access HDFS. Or add in the environment variable started by Broker: ",(0,o.jsx)(n.code,{children:"HADOOP_USER_NAME"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'(\n    "username" = "user",\n    "password" = ""\n);\n'})}),"\n",(0,o.jsx)(n.p,{children:"Just leave the password blank."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Kerberos Authentication"}),"\n",(0,o.jsx)(n.p,{children:"The authentication method needs to provide the following information::"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"hadoop.security.authentication"}),": Specify the authentication method as kerberos."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"kerberos_principal"}),": Specify the principal of kerberos."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"kerberos_keytab"}),": Specify the path to the keytab file for kerberos. The file must be an absolute path to a file on the server where the broker process is located. And can be accessed by the Broker process."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"kerberos_keytab_content"}),": Specify the content of the keytab file in kerberos after base64 encoding. You can choose one of these with ",(0,o.jsx)(n.code,{children:"kerberos_keytab"})," configuration."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Examples are as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'(\n    "hadoop.security.authentication" = "kerberos",\n    "kerberos_principal" = "doris@YOUR.COM",\n    "kerberos_keytab" = "/home/doris/my.keytab"\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'(\n    "hadoop.security.authentication" = "kerberos",\n    "kerberos_principal" = "doris@YOUR.COM",\n    "kerberos_keytab_content" = "ASDOWHDLAWIDJHWLDKSALDJSDIWALD"\n)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If Kerberos authentication is used, the ",(0,o.jsx)(n.a,{href:"https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html",children:"krb5.conf"})," file is required when deploying the Broker process.\nThe krb5.conf file contains Kerberos configuration information, Normally, you should install your krb5.conf file in the directory /etc. You can override the default location by setting the environment variable KRB5_CONFIG.\nAn example of the contents of the krb5.conf file is as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"[libdefaults]\n    default_realm = DORIS.HADOOP\n    default_tkt_enctypes = des3-hmac-sha1 des-cbc-crc\n    default_tgs_enctypes = des3-hmac-sha1 des-cbc-crc\n    dns_lookup_kdc = true\n    dns_lookup_realm = false\n\n[realms]\n    DORIS.HADOOP = {\n        kdc = kerberos-doris.hadoop.service:7005\n    }\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"HDFS HA Mode"}),"\n",(0,o.jsx)(n.p,{children:"This configuration is used to access HDFS clusters deployed in HA mode."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"dfs.nameservices"}),': Specify the name of the hdfs service, custom, such as "dfs.nameservices" = "my_ha".']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"dfs.ha.namenodes.xxx"}),":  Custom namenode names. Multiple names are separated by commas, where xxx is the custom name in ",(0,o.jsx)(n.code,{children:"dfs.nameservices"}),', such as" dfs.ha.namenodes.my_ha "=" my_nn ".']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"dfs.namenode.rpc-address.xxx.nn"}),": Specify the rpc address information of namenode, Where nn represents the name of the namenode configured in ",(0,o.jsx)(n.code,{children:"dfs.ha.namenodes.xxx"}),', such as: "dfs.namenode.rpc-address.my_ha.my_nn" = "host:port".']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"dfs.client.failover.proxy.provider.[nameservice ID]"}),": Specify the provider for the client to connect to the namenode. The default is: org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Examples are as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'(\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider.my_ha" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"The HA mode can be combined with the previous two authentication methods for cluster access. If you access HA HDFS with simple authentication:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'(\n    "username"="user",\n    "password"="passwd",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider.my_ha" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"The configuration for accessing the HDFS cluster can be written to the hdfs-site.xml file. When users use the Broker process to read data from the HDFS cluster, they only need to fill in the cluster file path and authentication information."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"tencent-cloud-chdfs",children:"Tencent Cloud CHDFS"}),"\n",(0,o.jsx)(n.p,{children:"Same as Apache HDFS"}),"\n",(0,o.jsx)(n.h4,{id:"aliyun-oss",children:"Aliyun OSS"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'(\n    "fs.oss.accessKeyId" = "",\n    "fs.oss.accessKeySecret" = "",\n    "fs.oss.endpoint" = ""\n)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"huawei-cloud-obs",children:"Huawei Cloud OBS"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'(\n    "fs.obs.access.key" = "xx",\n    "fs.obs.secret.key" = "xx",\n    "fs.obs.endpoint" = "xx"\n)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"amazon-s3",children:"Amazon S3"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'(\n    "fs.s3a.access.key" = "xx",\n    "fs.s3a.secret.key" = "xx",\n    "fs.s3a.endpoint" = "xx"\n)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"juicefs",children:"JuiceFS"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'(\n    "fs.defaultFS" = "jfs://xxx/",\n    "fs.jfs.impl" = "io.juicefs.JuiceFileSystem",\n    "fs.AbstractFileSystem.jfs.impl" = "io.juicefs.JuiceFS",\n    "juicefs.meta" = "xxx",\n    "juicefs.access-log" = "xxx"\n)\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return t}});var s=r(667294);let o={},i=s.createContext(o);function t(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);