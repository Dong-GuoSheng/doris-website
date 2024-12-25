"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["740287"],{18159:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PARTITION","title":"ALTER TABLE PARTITION","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PARTITION.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PARTITION","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-PARTITION","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ALTER TABLE PARTITION","language":"en"},"sidebar":"docs","previous":{"title":"ALTER TABLE COLUMN","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-COLUMN"},"next":{"title":"ALTER TABLE ROLLUP","permalink":"/docs/sql-manual/sql-statements/table-and-view/table/ALTER-TABLE-ROLLUP"}}'),l=t("785893"),s=t("250065");let a={title:"ALTER TABLE PARTITION",language:"en"},r=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to modify a table with a partition."}),"\n",(0,l.jsx)(n.p,{children:"This operation is synchronous, and the return of the command indicates the completion of the execution."}),"\n",(0,l.jsx)(n.p,{children:"grammar:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table alter_clause;\n"})}),"\n",(0,l.jsx)(n.p,{children:"The alter_clause of partition supports the following modification methods"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Add partition"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"grammar:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ADD PARTITION [IF NOT EXISTS] partition_name\npartition_desc ["key"="value"]\n[DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]]\n'})}),"\n",(0,l.jsx)(n.p,{children:"Notice:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["partition_desc supports the following two ways of writing\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'VALUES LESS THAN [MAXVALUE|("value1", ...)]'}),"\n",(0,l.jsx)(n.li,{children:'VALUES [("value1", ...), ("value1", ...))'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"The partition is left closed and right open. If the user only specifies the right boundary, the system will automatically determine the left boundary"}),"\n",(0,l.jsx)(n.li,{children:"If the bucketing method is not specified, the bucketing method and bucket number used for creating the table would be automatically used"}),"\n",(0,l.jsxs)(n.li,{children:["If the bucketing method is specified, only the number of buckets can be modified, not the bucketing method or the bucketing column. If the bucketing method is specified but the number of buckets not be specified, the default value ",(0,l.jsx)(n.code,{children:"10"})," will be used for bucket number instead of the number specified when the table is created. If the number of buckets modified, the bucketing method needs to be specified simultaneously."]}),"\n",(0,l.jsxs)(n.li,{children:['The ["key"="value"] section can set some attributes of the partition, see ',(0,l.jsx)(n.a,{href:"../Create/CREATE-TABLE.md",children:"CREATE TABLE"})]}),"\n",(0,l.jsx)(n.li,{children:"If the user does not explicitly create a partition when creating a table, adding a partition by ALTER is not supported"}),"\n",(0,l.jsxs)(n.li,{children:["If the user uses list partition then they can add default partition to the table. The default partition will store all data not satisfying prior partition key's constraints.\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"ALTER TABLE table_name ADD PARTITION partition_name"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Delete the partition"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"grammar:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DROP PARTITION [IF EXISTS] partition_name [FORCE]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Notice:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"At least one partition must be reserved for tables using partitioning."}),"\n",(0,l.jsx)(n.li,{children:"After executing DROP PARTITION for a period of time, the deleted partition can be recovered through the RECOVER statement. For details, see SQL Manual - Database Management - RECOVER Statement"}),"\n",(0,l.jsx)(n.li,{children:"If you execute DROP PARTITION FORCE, the system will not check whether there are unfinished transactions in the partition, the partition will be deleted directly and cannot be recovered, this operation is generally not recommended"}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"Modify the partition properties"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"grammar:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'MODIFY PARTITION p1|(p1[, p2, ...]) SET ("key" = "value", ...)\n'})}),"\n",(0,l.jsx)(n.p,{children:"illustrate:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Currently supports modifying the following properties of partitions:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"storage_medium\n-storage_cooldown_time"}),"\n",(0,l.jsx)(n.li,{children:"replication_num"}),"\n",(0,l.jsx)(n.li,{children:"in_memory"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"For single-partition tables, partition_name is the same as the table name."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Add partition, existing partition [MIN, 2013-01-01), add partition [2013-01-01, 2014-01-01), use default bucketing method"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2014-01-01");\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Increase the partition and use the new number of buckets"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\nDISTRIBUTED BY HASH(k1) BUCKETS 20;\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"Increase the partition and use the new number of replicas"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\n("replication_num"="1");\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"Modify the number of partition replicas"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nMODIFY PARTITION p1 SET("replication_num"="1");\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsx)(n.li,{children:"Batch modify the specified partition"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nMODIFY PARTITION (p1, p2, p4) SET("replication_num"="1");\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"6",children:["\n",(0,l.jsx)(n.li,{children:"Batch modify all partitions"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nMODIFY PARTITION (*) SET("storage_medium"="HDD");\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"7",children:["\n",(0,l.jsx)(n.li,{children:"Delete partition"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nDROP PARTITION p1;\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"8",children:["\n",(0,l.jsx)(n.li,{children:"Batch delete partition"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nDROP PARTITION p1,\nDROP PARTITION p2,\nDROP PARTITION p3;\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"9",children:["\n",(0,l.jsx)(n.li,{children:"Add a partition specifying upper and lower bounds"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES [("2014-01-01"), ("2014-02-01"));\n'})}),"\n",(0,l.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"ALTER, TABLE, PARTITION, ALTER TABLE\n"})}),"\n",(0,l.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(667294);let l={},s=i.createContext(l);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);