"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["630159"],{27438:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>s,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>l});var a=JSON.parse('{"id":"admin-manual/data-admin/recyclebin","title":"Recover from Recycle Bin","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/admin-manual/data-admin/recyclebin.md","sourceDirName":"admin-manual/data-admin","slug":"/admin-manual/data-admin/recyclebin","permalink":"/docs/2.0/admin-manual/data-admin/recyclebin","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Recover from Recycle Bin","language":"en"},"sidebar":"docs","previous":{"title":"CCR (Cross Cluster Replication)","permalink":"/docs/2.0/admin-manual/data-admin/ccr"},"next":{"title":"Data Recovery","permalink":"/docs/2.0/admin-manual/data-admin/data-recovery"}}'),i=n("785893"),r=n("250065");let l={title:"Recover from Recycle Bin",language:"en"},s=void 0,o={},c=[{value:"Data Lifecycle",id:"data-lifecycle",level:2},{value:"Recover From FE Recycle Bin",id:"recover-from-fe-recycle-bin",level:2},{value:"Query Catalog Recycle Bin",id:"query-catalog-recycle-bin",level:3},{value:"Start Data Recovery",id:"start-data-recovery",level:3},{value:"Recover Tablet from BE Recycle Bin",id:"recover-tablet-from-be-recycle-bin",level:2},{value:"Recover data from BE Recycle Bin",id:"recover-data-from-be-recycle-bin",level:3},{value:"Operation",id:"operation",level:4},{value:"single mode",id:"single-mode",level:5},{value:"batch mode",id:"batch-mode",level:5},{value:"Repair missing or damaged Tablet",id:"repair-missing-or-damaged-tablet",level:3}];function d(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"data-lifecycle",children:"Data Lifecycle"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["When a user executes the ",(0,i.jsx)(t.code,{children:"drop database/table/partition"})," command, Doris moves the deleted database, table, or partition to the recycle bin. The recover command can be used to restore all data of the deleted database, table, or partition from the recycle bin, making them visible again."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"When a tablet is deleted on the BE side, its data is moved to the BE recycle bin by default. In case of accidental operations or online bugs that result in some tablets being deleted on the BE, these tablets can be recovered from the BE recycle bin using maintenance tools."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In the above scenarios, the first one pertains to the situation where the database, table, or partition is no longer visible on the FE, but its metadata is still retained in the FE recycle bin. The second scenario pertains to the situation where the database, table, or partition is still visible on the FE, but some BE tablet data has been deleted."}),"\n",(0,i.jsx)(t.p,{children:"The two recovery methods are described below."}),"\n",(0,i.jsx)(t.h2,{id:"recover-from-fe-recycle-bin",children:"Recover From FE Recycle Bin"}),"\n",(0,i.jsxs)(t.p,{children:["In order to avoid disasters caused by misoperation, Doris supports data recovery of accidentally deleted databases/tables/partitions. After dropping table or database, Doris will not physically delete the data immediately, but will keep it in Trash for a period of time ( The default is 1 day, which can be configured through the ",(0,i.jsx)(t.code,{children:"catalog_trash_expire_second"})," parameter in fe.conf). The administrator can use the RECOVER command to restore accidentally deleted data."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Note that if it is deleted using ",(0,i.jsx)(t.code,{children:"drop force"}),", it will be deleted directly and cannot be recovered."]})}),"\n",(0,i.jsx)(t.h3,{id:"query-catalog-recycle-bin",children:"Query Catalog Recycle Bin"}),"\n",(0,i.jsx)(t.p,{children:"Query FE catalog recycle bin"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'SHOW CATALOG RECYCLE BIN [ WHERE NAME [ = "name" | LIKE "name_matcher"] ]\n'})}),"\n",(0,i.jsxs)(t.p,{children:["For more detailed syntax and best practices, please refer to the ",(0,i.jsx)(t.a,{href:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",children:"SHOW-CATALOG-RECYCLE-BIN"})," command manual, You can also type ",(0,i.jsx)(t.code,{children:"help SHOW CATALOG RECYCLE BIN"})," on the MySql client command line for more help."]}),"\n",(0,i.jsx)(t.h3,{id:"start-data-recovery",children:"Start Data Recovery"}),"\n",(0,i.jsx)(t.p,{children:"1.restore the database named example_db"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n"})}),"\n",(0,i.jsx)(t.p,{children:"2.restore the table named example_tbl"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n"})}),"\n",(0,i.jsx)(t.p,{children:"3.restore partition named p1 in table example_tbl"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["For more detailed syntax and best practices used by RECOVER, please refer to the ",(0,i.jsx)(t.a,{href:"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/RECOVER",children:"RECOVER"})," command manual, You can also type ",(0,i.jsx)(t.code,{children:"HELP RECOVER"})," on the MySql client command line for more help."]}),"\n",(0,i.jsx)(t.h2,{id:"recover-tablet-from-be-recycle-bin",children:"Recover Tablet from BE Recycle Bin"}),"\n",(0,i.jsx)(t.h3,{id:"recover-data-from-be-recycle-bin",children:"Recover data from BE Recycle Bin"}),"\n",(0,i.jsxs)(t.p,{children:["During the user's use of Doris, some valid tablets (including metadata and data) may be deleted due to some misoperations or online bugs. In order to prevent data loss in these abnormal situations, Doris provides a recycle bin mechanism to protect user data. Tablet data deleted by users will not be deleted directly, but will be stored in the recycle bin for a period of time. After a period of time, there will be a regular cleaning mechanism to delete expired data. By default, when the disk space usage does not exceed 81% (BE ",(0,i.jsx)(t.code,{children:"config.storage_flood_stage_usage_percent"})," * 0.9 * 100%), the data in the BE recycle bin is kept for up to 3 days (BE ",(0,i.jsx)(t.code,{children:"config.trash_file_expire_time_sec"}),")."]}),"\n",(0,i.jsx)(t.p,{children:"The data in the BE recycle bin includes: tablet data file (.dat), tablet index file (.idx) and tablet metadata file (.hdr). The data will be stored in a path in the following format:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"/root_path/trash/time_label/tablet_id/schema_hash/\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"root_path"}),": a data root directory corresponding to the BE node."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"trash"}),": The directory of the recycle bin."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"time_label"}),": Time label, for the uniqueness of the data directory in the recycle bin, while recording the data time, use the time label as a subdirectory."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"When a user finds that online data has been deleted by mistake, he needs to recover the deleted tablet from the recycle bin. This tablet data recovery function is needed."}),"\n",(0,i.jsxs)(t.p,{children:["BE provides http interface and ",(0,i.jsx)(t.code,{children:"restore_tablet_tool.sh"})," script to achieve this function, and supports single tablet operation (single mode) and batch operation mode (batch mode)."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"In single mode, data recovery of a single tablet is supported."}),"\n",(0,i.jsx)(t.li,{children:"In batch mode, support batch tablet data recovery."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In addition, users can use the command ",(0,i.jsx)(t.code,{children:"show trash"})," to view the trash data capacity in BE, and use the command ",(0,i.jsx)(t.code,{children:"admin clean trash"})," to clear the trash data in BE."]}),"\n",(0,i.jsx)(t.h4,{id:"operation",children:"Operation"}),"\n",(0,i.jsx)(t.h5,{id:"single-mode",children:"single mode"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"http request method"}),"\n",(0,i.jsx)(t.p,{children:"BE provides an http interface for single tablet data recovery, the interface is as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'curl -X POST "http://be_host:be_webserver_port/api/restore_tablet?tablet_id=11111\\&schema_hash=12345"\n'})}),"\n",(0,i.jsx)(t.p,{children:"The successful results are as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{"status": "Success", "msg": "OK"}\n'})}),"\n",(0,i.jsx)(t.p,{children:"If it fails, the corresponding failure reason will be returned. One possible result is as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{"status": "Failed", "msg": "create link path failed"}\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Script mode"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"restore_tablet_tool.sh"})," can be used to realize the function of single tablet data recovery."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'sh tools/restore_tablet_tool.sh -b "http://127.0.0.1:8040" -t 12345 -s 11111\nsh tools/restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --tablet_id 12345 --schema_hash 11111\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h5,{id:"batch-mode",children:"batch mode"}),"\n",(0,i.jsx)(t.p,{children:"The batch recovery mode is used to realize the function of recovering multiple tablet data."}),"\n",(0,i.jsx)(t.p,{children:"When using, you need to put the restored tablet id and schema hash in a file in a comma-separated format in advance, one tablet per line."}),"\n",(0,i.jsx)(t.p,{children:"The format is as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"12345,11111\n12346,11111\n12347,11111\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then perform the recovery with the following command (assuming the file name is: ",(0,i.jsx)(t.code,{children:"tablets.txt"}),"):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'sh restore_tablet_tool.sh -b "http://127.0.0.1:8040" -f tablets.txt\nsh restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --file tablets.txt\n'})}),"\n",(0,i.jsx)(t.h3,{id:"repair-missing-or-damaged-tablet",children:"Repair missing or damaged Tablet"}),"\n",(0,i.jsx)(t.p,{children:"In some very special circumstances, such as code bugs, or human misoperation, etc., all replicas of some tablets may be lost. In this case, the data has been substantially lost. However, in some scenarios, the business still hopes to ensure that the query will not report errors even if there is data loss, and reduce the perception of the user layer. At this point, we can use the blank Tablet to fill the missing replica to ensure that the query can be executed normally."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note: This operation is only used to avoid the problem of error reporting due to the inability to find a queryable replica, and it is impossible to recover the data that has been substantially lost."})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["View Master FE log ",(0,i.jsx)(t.code,{children:"fe.log"})]}),"\n",(0,i.jsx)(t.p,{children:"If there is data loss, there will be a log similar to the following in the log:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"backend [10001] invalid situation. tablet[20000] has few replica[1], replica num setting is [3]\n"})}),"\n",(0,i.jsx)(t.p,{children:"This log indicates that all replicas of tablet 20000 have been damaged or lost."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Use blank replicas to fill in missing copies"}),"\n",(0,i.jsx)(t.p,{children:"After confirming that the data cannot be recovered, you can execute the following command to generate blank replicas."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'ADMIN SET FRONTEND CONFIG ("recover_with_empty_tablet" = "true");\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Note: You can first check whether the current version supports this parameter through the ",(0,i.jsx)(t.code,{children:"ADMIN SHOW FRONTEND CONFIG;"})," command."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["A few minutes after the setup is complete, you should see the following log in the Master FE log ",(0,i.jsx)(t.code,{children:"fe.log"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"tablet 20000 has only one replica 20001 on backend 10001 and it is lost. create an empty replica to recover it.\n"})}),"\n",(0,i.jsx)(t.p,{children:"The log indicates that the system has created a blank tablet to fill in the missing replica."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Judge whether it has been repaired successfully through query."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return l}});var a=n(667294);let i={},r=a.createContext(i);function l(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);