"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["518216"],{188518:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>r,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>i});var o=JSON.parse('{"id":"table-design/tiered-storage/remote-storage","title":"Remote Storage","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/table-design/tiered-storage/remote-storage.md","sourceDirName":"table-design/tiered-storage","slug":"/table-design/tiered-storage/remote-storage","permalink":"/docs/table-design/tiered-storage/remote-storage","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Remote Storage","language":"en"},"sidebar":"docs","previous":{"title":"SSD and HDD tiered storage","permalink":"/docs/table-design/tiered-storage/diff-disk-medium-migration"},"next":{"title":"Model Overview","permalink":"/docs/table-design/data-model/overview"}}'),a=n("785893"),s=n("250065");let i={title:"Remote Storage",language:"en"},r=void 0,l={},c=[{value:"Feature Overview",id:"feature-overview",level:3},{value:"Usage Guide",id:"usage-guide",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Viewing Remote Storage Usage",id:"viewing-remote-storage-usage",level:2},{value:"Remote Storage Cache",id:"remote-storage-cache",level:2},{value:"Remote Storage Compaction",id:"remote-storage-compaction",level:2},{value:"Remote Storage Schema Change",id:"remote-storage-schema-change",level:2},{value:"Remote Storage Garbage Collection",id:"remote-storage-garbage-collection",level:2},{value:"Common Issues",id:"common-issues",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"feature-overview",children:"Feature Overview"}),"\n",(0,a.jsx)(t.p,{children:"Remote storage supports placing some data in external storage (such as object storage or HDFS), which saves costs without sacrificing functionality."}),"\n",(0,a.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,a.jsx)(t.p,{children:"Data in remote storage only has one replica. The reliability of the data depends on the reliability of the remote storage. You need to ensure that the remote storage employs EC (Erasure Coding) or multi-replica technology to guarantee data reliability."})}),"\n",(0,a.jsx)(t.h3,{id:"usage-guide",children:"Usage Guide"}),"\n",(0,a.jsx)(t.p,{children:"Using S3 object storage as an example, start by creating an S3 RESOURCE:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "s3.endpoint" = "bj.s3.com",\n    "s3.region" = "bj",\n    "s3.bucket" = "test-bucket",\n    "s3.root.path" = "path/to/root",\n    "s3.access_key" = "bbb",\n    "s3.secret_key" = "aaaa",\n    "s3.connection.maximum" = "50",\n    "s3.connection.request.timeout" = "3000",\n    "s3.connection.timeout" = "1000"\n);\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"When creating the S3 RESOURCE, a remote connection check will be performed to ensure the resource is created correctly."})}),"\n",(0,a.jsx)(t.p,{children:"Next, create a STORAGE POLICY and associate it with the previously created RESOURCE:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE STORAGE POLICY test_policy\nPROPERTIES(\n    "storage_resource" = "remote_s3",\n    "cooldown_ttl" = "1d"\n);\n'})}),"\n",(0,a.jsx)(t.p,{children:"Finally, specify the STORAGE POLICY when creating a table:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS create_table_use_created_policy \n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048)\n)\nUNIQUE KEY(k1)\nDISTRIBUTED BY HASH (k1) BUCKETS 3\nPROPERTIES(\n    "enable_unique_key_merge_on_write" = "false",\n    "storage_policy" = "test_policy"\n);\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["If the UNIQUE table has ",(0,a.jsx)(t.code,{children:'"enable_unique_key_merge_on_write" = "true"'}),", this feature cannot be used."]})}),"\n",(0,a.jsx)(t.p,{children:"Create an HDFS RESOURCE:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE RESOURCE "remote_hdfs" PROPERTIES (\n        "type"="hdfs",\n        "fs.defaultFS"="fs_host:default_fs_port",\n        "hadoop.username"="hive",\n        "hadoop.password"="hive",\n        "dfs.nameservices" = "my_ha",\n        "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n        "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n        "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n        "dfs.client.failover.proxy.provider.my_ha" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n    );\n\nCREATE STORAGE POLICY test_policy PROPERTIES (\n    "storage_resource" = "remote_hdfs",\n    "cooldown_ttl" = "300"\n);\n\nCREATE TABLE IF NOT EXISTS create_table_use_created_policy (\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048)\n)\nUNIQUE KEY(k1)\nDISTRIBUTED BY HASH (k1) BUCKETS 3\nPROPERTIES(\n    "enable_unique_key_merge_on_write" = "false",\n    "storage_policy" = "test_policy"\n);\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["If the UNIQUE table has ",(0,a.jsx)(t.code,{children:'"enable_unique_key_merge_on_write" = "true"'}),", this feature cannot be used."]})}),"\n",(0,a.jsx)(t.p,{children:"In addition to creating tables with remote storage, Doris also supports setting remote storage for existing tables or partitions."}),"\n",(0,a.jsx)(t.p,{children:"For an existing table, associate a remote storage policy by running:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE create_table_not_have_policy set ("storage_policy" = "test_policy");\n'})}),"\n",(0,a.jsx)(t.p,{children:"For an existing PARTITION, associate a remote storage policy by running:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE create_table_partition MODIFY PARTITION (*) SET("storage_policy"="test_policy");\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"Note that if you specify different storage policies for the entire table and certain partitions, the storage policy of the table will take precedence for all partitions. If you need a partition to use a different storage policy, you can modify it using the method above for existing partitions."})}),"\n",(0,a.jsxs)(t.p,{children:["For more details, please refer to the documentation in the ",(0,a.jsx)(t.strong,{children:"Docs"})," directory, such as ",(0,a.jsx)(t.a,{href:"../../sql-manual/sql-statements/cluster-management/compute-management/CREATE-RESOURCE",children:"RESOURCE"}),", ",(0,a.jsx)(t.a,{href:"../../sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-POLICY",children:"POLICY"}),", ",(0,a.jsx)(t.a,{href:"../../sql-manual/sql-statements/table-and-view/table/CREATE-TABLE",children:"CREATE TABLE"}),", and ",(0,a.jsx)(t.a,{href:"../../sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COLUMN",children:"ALTER TABLE"}),", which provide detailed explanations."]}),"\n",(0,a.jsx)(t.h3,{id:"limitations",children:"Limitations"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"A single table or partition can only be associated with one storage policy. Once associated, the storage policy cannot be dropped until the association is removed."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The storage path information associated with a storage policy (e.g., bucket, endpoint, root_path) cannot be modified after the policy is created."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Storage policies support creation, modification, and deletion. However, before deleting a policy, you need to ensure that no tables are referencing this storage policy."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The Unique model with Merge-on-write enabled may face restrictions..."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"viewing-remote-storage-usage",children:"Viewing Remote Storage Usage"}),"\n",(0,a.jsxs)(t.p,{children:["Method 1: You can view the size uploaded to the object storage by each BE by using ",(0,a.jsx)(t.code,{children:"show proc '/backends'"}),", specifically the ",(0,a.jsx)(t.code,{children:"RemoteUsedCapacity"})," item. Note that this method may have some delay."]}),"\n",(0,a.jsxs)(t.p,{children:["Method 2: You can view the object size used by each tablet of a table by using ",(0,a.jsx)(t.code,{children:"show tablets from tableName"}),", specifically the ",(0,a.jsx)(t.code,{children:"RemoteDataSize"})," item."]}),"\n",(0,a.jsx)(t.h2,{id:"remote-storage-cache",children:"Remote Storage Cache"}),"\n",(0,a.jsx)(t.p,{children:"To optimize query performance and save object storage resources, the concept of cache is introduced. When querying data from remote storage for the first time, Doris will load the data from remote storage to the BE's local disk as a cache. The cache has the following characteristics:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The cache is stored on the BE's disk and does not occupy memory space."}),"\n",(0,a.jsx)(t.li,{children:"The cache can be limited in size, with data cleanup performed using an LRU (Least Recently Used) policy."}),"\n",(0,a.jsxs)(t.li,{children:["The implementation of the cache is the same as the federated query catalog cache. For more information, refer to the ",(0,a.jsx)(t.a,{href:"../../lakehouse/filecache",children:"documentation"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"remote-storage-compaction",children:"Remote Storage Compaction"}),"\n",(0,a.jsx)(t.p,{children:'The data in remote storage is considered to be "ingested" at the moment the rowset file is written to the local disk, plus the cooldown time. Since data is not written and cooled all at once, to avoid the small file problem in object storage, Doris will perform compaction on remote storage data. However, the frequency and priority of remote storage compaction are not very high. It is recommended to perform compaction on local hot data before executing cooldown. The following BE parameters can be adjusted:'}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The BE parameter ",(0,a.jsx)(t.code,{children:"cold_data_compaction_thread_num"})," sets the concurrency for performing compaction on remote storage. The default value is 2."]}),"\n",(0,a.jsxs)(t.li,{children:["The BE parameter ",(0,a.jsx)(t.code,{children:"cold_data_compaction_interval_sec"})," sets the time interval for executing remote storage compaction. The default value is 1800 seconds (30 minutes)."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"remote-storage-schema-change",children:"Remote Storage Schema Change"}),"\n",(0,a.jsx)(t.p,{children:"Remote storage schema changes are supported. These include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Adding or removing columns"}),"\n",(0,a.jsx)(t.li,{children:"Modifying column types"}),"\n",(0,a.jsx)(t.li,{children:"Adjusting column order"}),"\n",(0,a.jsx)(t.li,{children:"Adding or modifying indexes"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"remote-storage-garbage-collection",children:"Remote Storage Garbage Collection"}),"\n",(0,a.jsx)(t.p,{children:"Remote storage garbage data refers to data that is not being used by any replica. Garbage data may occur on object storage in the following cases:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Rowsets upload fails but some segments are successfully uploaded."}),"\n",(0,a.jsx)(t.li,{children:"The FE re-selects a CooldownReplica, causing an inconsistency between the rowset versions of the old and new CooldownReplica. FollowerReplicas synchronize the CooldownMeta of the new CooldownReplica, and the rowsets with version mismatches in the old CooldownReplica become garbage data."}),"\n",(0,a.jsx)(t.li,{children:"After a remote storage compaction, the rowsets before merging cannot be immediately deleted because they may still be used by other replicas. Eventually, once all FollowerReplicas use the latest merged rowset, the pre-merge rowsets become garbage data."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Additionally, garbage data on objects will not be cleaned up immediately. The BE parameter ",(0,a.jsx)(t.code,{children:"remove_unused_remote_files_interval_sec"})," sets the time interval for remote storage garbage collection, with a default value of 21600 seconds (6 hours)."]}),"\n",(0,a.jsx)(t.h2,{id:"common-issues",children:"Common Issues"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"ERROR 1105 (HY000): errCode = 2, detailMessage = Failed to create repository: connect to s3 failed: Unable to marshall request to JSON: host must not be null."})}),"\n",(0,a.jsxs)(t.p,{children:["The S3 SDK uses the virtual-hosted style access method by default. However, some object storage systems (such as MinIO) may not have virtual-hosted style access enabled or supported. In this case, you can add the ",(0,a.jsx)(t.code,{children:"use_path_style"})," parameter to force path-style access:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "s3.endpoint" = "bj.s3.com",\n    "s3.region" = "bj",\n    "s3.bucket" = "test-bucket",\n    "s3.root.path" = "path/to/root",\n    "s3.access_key" = "bbb",\n    "s3.secret_key" = "aaaa",\n    "s3.connection.maximum" = "50",\n    "s3.connection.request.timeout" = "3000",\n    "s3.connection.timeout" = "1000",\n    "use_path_style" = "true"\n);\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var o=n(667294);let a={},s=o.createContext(a);function i(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);