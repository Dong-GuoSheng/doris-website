"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["559079"],{712148:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"data-operate/import/import-way/insert-into-manual","title":"Insert Into","description":"\x3c!--","source":"@site/docs/data-operate/import/import-way/insert-into-manual.md","sourceDirName":"data-operate/import/import-way","slug":"/data-operate/import/import-way/insert-into-manual","permalink":"/docs/dev/data-operate/import/import-way/insert-into-manual","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Insert Into","language":"en"},"sidebar":"docs","previous":{"title":"Routine Load","permalink":"/docs/dev/data-operate/import/import-way/routine-load-manual"},"next":{"title":"Insert Into Values","permalink":"/docs/dev/data-operate/import/import-way/insert-into-values-manual"}}'),s=t("785893"),i=t("250065");let r={title:"Insert Into",language:"en"},l=void 0,o={},d=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Get started",id:"get-started",level:2},{value:"Preparation",id:"preparation",level:3},{value:"Create an INSERT INTO job",id:"create-an-insert-into-job",level:3},{value:"View INSERT INTO jobs",id:"view-insert-into-jobs",level:3},{value:"Cancel INSERT INTO jobs",id:"cancel-insert-into-jobs",level:3},{value:"Manual",id:"manual",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameter configuration",id:"parameter-configuration",level:3},{value:"Return values",id:"return-values",level:3},{value:"Best practice",id:"best-practice",level:2},{value:"Data size",id:"data-size",level:3},{value:"View error rows",id:"view-error-rows",level:3},{value:"Ingest external data via Multi-Catalog",id:"ingest-external-data-via-multi-catalog",level:2},{value:"Create Hive Catalog",id:"create-hive-catalog",level:3},{value:"Ingest data",id:"ingest-data",level:3},{value:"Notes",id:"notes",level:3},{value:"Ingest data by TVF",id:"ingest-data-by-tvf",level:2},{value:"Automatic column type inference",id:"automatic-column-type-inference",level:3},{value:"Notes",id:"notes-1",level:3},{value:"More help",id:"more-help",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The INSERT INTO statement supports importing the results of a Doris query into another table. INSERT INTO is a synchronous import method, where the import result is returned after the import is executed. Whether the import is successful can be determined based on the returned result. INSERT INTO ensures the atomicity of the import task, meaning that either all the data is imported successfully or none of it is imported."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"INSERT INTO tbl SELECT..."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"applicable-scenarios",children:"Applicable scenarios"}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"If a user wants to perform ETL on existing data in a Doris table and then import it into a new Doris table, the INSERT INTO SELECT syntax is applicable."}),"\n",(0,s.jsx)(n.li,{children:"In conjunction with the Multi-Catalog external table mechanism, tables from MySQL or Hive systems can be mapped via Multi-Catalog. Then, data from external tables can be imported into Doris tables using the INSERT INTO SELECT syntax."}),"\n",(0,s.jsx)(n.li,{children:"Utilizing the Table Value Functions (TVFs), users can directly query data stored in object storage or files on HDFS as tables, with automatic column type inference. Then, data from external tables can be imported into Doris tables using the INSERT INTO SELECT syntax."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(n.p,{children:"When using INSERT INTO, the import job needs to be initiated and submitted to the FE node using the MySQL protocol. The FE generates an execution plan, which includes query-related operators, with the last operator being the OlapTableSink. The OlapTableSink operator is responsible for writing the query result to the target table. The execution plan is then sent to the BE nodes for execution. Doris designates one BE node as the Coordinator, which receives and distributes the data to other BE nodes."}),"\n",(0,s.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,s.jsx)(n.p,{children:"An INSERT INTO job is submitted and transmitted using the MySQL protocol. The following example demonstrates submitting an import job using INSERT INTO through the MySQL command-line interface."}),"\n",(0,s.jsx)(n.p,{children:"Detailed syntax can be found in the INSERT INTO documentation."}),"\n",(0,s.jsx)(n.h3,{id:"preparation",children:"Preparation"}),"\n",(0,s.jsx)(n.p,{children:"INSERT INTO requires INSERT permissions on the target table. You can grant permissions to user accounts using the GRANT command."}),"\n",(0,s.jsx)(n.h3,{id:"create-an-insert-into-job",children:"Create an INSERT INTO job"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a source table"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE testdb.test_table(\n    user_id            BIGINT       NOT NULL COMMENT "User ID",\n    name               VARCHAR(20)           COMMENT "User name",\n    age                INT                   COMMENT "User age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Import data into the source table using any load method. (Here we use ",(0,s.jsx)(n.code,{children:"INSERT INTO VALUES"})," for example)."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'INSERT INTO testdb.test_table (user_id, name, age)\nVALUES (1, "Emily", 25),\n       (2, "Benjamin", 35),\n       (3, "Olivia", 28),\n       (4, "Alexander", 60),\n       (5, "Ava", 17);\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Building upon the above operations, create a new table as the target table (with the same schema as the source table)."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE testdb.test_table2 LIKE testdb.test_table;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Ingest data into the new table using ",(0,s.jsx)(n.code,{children:"INSERT INTO SELECT"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO testdb.test_table2\nSELECT * FROM testdb.test_table WHERE age < 30;\nQuery OK, 3 rows affected (0.544 sec)\n{'label':'label_9c2bae970023407d_b2c5b78b368e78a7', 'status':'VISIBLE', 'txnId':'9084'}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"View imported data."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"MySQL> SELECT * FROM testdb.test_table2 ORDER BY age;\n+---------+--------+------+\n| user_id | name   | age  |\n+---------+--------+------+\n|       5 | Ava    |   17 |\n|       1 | Emily  |   25 |\n|       3 | Olivia |   28 |\n+---------+--------+------+\n3 rows in set (0.02 sec)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/scheduler/job-scheduler",children:"JOB"})," make the INSERT operation execute asynchronously."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Sources can be ",(0,s.jsx)(n.a,{href:"/docs/dev/lakehouse/file",children:"tvf"})," or tables in a ",(0,s.jsx)(n.a,{href:"../../../lakehouse/database",children:"catalog"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"view-insert-into-jobs",children:"View INSERT INTO jobs"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"SHOW LOAD"})," command to view the completed INSERT INTO tasks."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'MySQL> SHOW LOAD FROM testdb;\n+--------+-----------------------------------------+----------+--------------------+--------+---------+----------------------------------------------------------------------+----------+---------------------+---------------------+---------------------+---------------------+---------------------+------+-----------------------------------------------------------------------------------------------------------------------+---------------+--------------+------+---------+\n| JobId  | Label                                   | State    | Progress           | Type   | EtlInfo | TaskInfo                                                             | ErrorMsg | CreateTime          | EtlStartTime        | EtlFinishTime       | LoadStartTime       | LoadFinishTime      | URL  | JobDetails                                                                                                            | TransactionId | ErrorTablets | User | Comment |\n+--------+-----------------------------------------+----------+--------------------+--------+---------+----------------------------------------------------------------------+----------+---------------------+---------------------+---------------------+---------------------+---------------------+------+-----------------------------------------------------------------------------------------------------------------------+---------------+--------------+------+---------+\n| 376416 | label_3e52da787aab4222_9126d2fce8f6d1e5 | FINISHED | Unknown id: 376416 | INSERT | NULL    | cluster:N/A; timeout(s):26200; max_filter_ratio:0.0; priority:NORMAL | NULL     | 2024-02-27 01:22:17 | 2024-02-27 01:22:17 | 2024-02-27 01:22:17 | 2024-02-27 01:22:17 | 2024-02-27 01:22:18 |      | {"Unfinished backends":{},"ScannedRows":0,"TaskNumber":0,"LoadBytes":0,"All backends":{},"FileNumber":0,"FileSize":0} | 9081          | {}           | root |         |\n| 376664 | label_9c2bae970023407d_b2c5b78b368e78a7 | FINISHED | Unknown id: 376664 | INSERT | NULL    | cluster:N/A; timeout(s):26200; max_filter_ratio:0.0; priority:NORMAL | NULL     | 2024-02-27 01:39:37 | 2024-02-27 01:39:37 | 2024-02-27 01:39:37 | 2024-02-27 01:39:37 | 2024-02-27 01:39:38 |      | {"Unfinished backends":{},"ScannedRows":0,"TaskNumber":0,"LoadBytes":0,"All backends":{},"FileNumber":0,"FileSize":0} | 9084          | {}           | root |         |\n+--------+-----------------------------------------+----------+--------------------+--------+---------+----------------------------------------------------------------------+----------+---------------------+---------------------+---------------------+---------------------+---------------------+------+-----------------------------------------------------------------------------------------------------------------------+---------------+--------------+------+---------+\n'})}),"\n",(0,s.jsx)(n.h3,{id:"cancel-insert-into-jobs",children:"Cancel INSERT INTO jobs"}),"\n",(0,s.jsx)(n.p,{children:"You can cancel the currently executing INSERT INTO job via Ctrl-C."}),"\n",(0,s.jsx)(n.h2,{id:"manual",children:"Manual"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:"The syntax of INSERT INTO is as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"INSERT INTO SELECT"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"INSERT INTO SELECT is used to write the query results to the target table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO target_table SELECT ... FROM source_table;\n"})}),"\n",(0,s.jsx)(n.p,{children:"The SELECT statement above is similar to a regular SELECT query, allowing operations such as WHERE and JOIN."}),"\n",(0,s.jsx)(n.h3,{id:"parameter-configuration",children:"Parameter configuration"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FE"})," ",(0,s.jsx)(n.strong,{children:"configuration"})]}),"\n",(0,s.jsx)(n.p,{children:"insert_load_default_timeout_second"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default value: 14400s (4 hours)"}),"\n",(0,s.jsx)(n.li,{children:"Description: Timeout for import tasks, measured in seconds. If the import task does not complete within this timeout period, it will be canceled by the system and marked as CANCELLED."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Environment parameters"})}),"\n",(0,s.jsx)(n.p,{children:"insert_timeout"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default value: 14400s (4 hours)"}),"\n",(0,s.jsx)(n.li,{children:"Description: Timeout for INSERT INTO as an SQL statement, measured in seconds."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"enable_insert_strict"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default value: true"}),"\n",(0,s.jsx)(n.li,{children:"Description: If this is set to true, INSERT INTO will fail when the task involves invalid data. If set to false, INSERT INTO will ignore invalid rows, and the import will be considered successful as long as at least one row is imported successfully."}),"\n",(0,s.jsx)(n.li,{children:"Explanation: Until version 2.1.4. INSERT INTO cannot control the error rate, so this parameter is used to either strictly check data quality or completely ignore invalid data. Common reasons for data invalidity include: source data column length exceeding destination column length, column type mismatch, partition mismatch, and column order mismatch."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"insert_max_filter_ratio"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Default value: 1.0"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Description: Since version 2.1.5. Only effective when ",(0,s.jsx)(n.code,{children:"enable_insert_strict"})," is false. Used to control the error tolerance when using ",(0,s.jsx)(n.code,{children:"INSERT INTO FROM S3/HDFS/LOCAL()"}),". The default value is 1.0, which means all errors are tolerated. It can be a decimal between 0 and 1. It means that when the number of error rows exceeds this ratio, the INSERT task will fail."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"return-values",children:"Return values"}),"\n",(0,s.jsx)(n.p,{children:"INSERT INTO an SQL statement, and it returns different results based on different query outcomes:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Empty result set"})}),"\n",(0,s.jsx)(n.p,{children:"If the query result set of the SELECT statement in INSERT INTO is empty, the returned value will be as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"mysql> INSERT INTO tbl1 SELECT * FROM empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Query OK"})," indicates successful execution. ",(0,s.jsx)(n.code,{children:"0 rows affected"})," means no data was imported."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Non-empty result set and successful INSERT"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"mysql> INSERT INTO tbl1 SELECT * FROM tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'INSERT_8510c568-9eda-4173-9e36-6adc7d35291c', 'status':'visible', 'txnId':'4005'}\n\nmysql> INSERT INTO tbl1 WITH LABEL my_label1 SELECT * FROM tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n\nmysql> INSERT INTO tbl1 SELECT * FROM tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'INSERT_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'visible', 'txnId':'4005'}\n\nmysql> INSERT INTO tbl1 SELECT * FROM tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'INSERT_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Query OK"})," indicates successful execution. ",(0,s.jsx)(n.code,{children:"4 rows affected"})," indicates that a total of 4 rows of data have been imported. ",(0,s.jsx)(n.code,{children:"2 warnings"})," indicates the number of rows that were filtered out."]}),"\n",(0,s.jsx)(n.p,{children:"Additionally, a JSON string is returned:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'INSERT_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Parameter description:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TxnId"}),(0,s.jsx)(n.td,{children:"ID of the import transaction"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Label"}),(0,s.jsx)(n.td,{children:'Label of the import job: can be specified using "INSERT INTO tbl WITH LABEL label..."'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Status"}),(0,s.jsxs)(n.td,{children:['Visibility of the imported data: If it is visible, it will be displayed as "visible." If not, it will be displayed as "committed." In the "committed" state, the import is completed, but the data may be delayed in becoming visible. There is no need to retry in this case.',(0,s.jsx)(n.code,{children:"visible"}),": The import is successful and the data is visible.",(0,s.jsx)(n.code,{children:"committed"}),": The import is completed, but the data may be delayed in becoming visible. There is no need to retry in this case.Label Already Exists: The specified label already exists and needs to be changed to a different one.Fail: The import fails."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Err"}),(0,s.jsx)(n.td,{children:"Error message"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.a,{href:"../../../sql-manual/sql-statements/Show-Statements/SHOW-LOAD/",children:"SHOW LOAD"})," statement to view the filtered rows."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'SHOW LOAD WHERE label="xxx";\n'})}),"\n",(0,s.jsx)(n.p,{children:'The result of this statement will include a URL that can be used to query the error data. For more details, refer to the "View error rows" section below.'}),"\n",(0,s.jsx)(n.p,{children:"The invisible state of data is temporary, and the data will eventually become visible."}),"\n",(0,s.jsxs)(n.p,{children:["You can check the visibility status of a batch of data using the ",(0,s.jsx)(n.a,{href:"../../../sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION/",children:"SHOW TRANSACTION"})," statement."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW TRANSACTION WHERE id=4005;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"TransactionStatus"})," column in the result is ",(0,s.jsx)(n.code,{children:"visible"}),", it indicates that the data is visible."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'INSERT_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Non-empty result set but failed INSERT"})}),"\n",(0,s.jsx)(n.p,{children:"Failed execution means that no data was successfully imported. An error message will be returned:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'mysql> INSERT INTO tbl1 SELECT * FROM tbl2 WHERE k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. url: http://10.74.167.16:8042/api/_load_error_log?file=_shard_2/error_loginsert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0bf8a2\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ERROR 1064 (HY000): all partitions have no load data"}),' indicates the root cause for the failure. The URL provided in the error message can be used to locate the error data. For more details, refer to the "View error rows" section below.']}),"\n",(0,s.jsx)(n.h2,{id:"best-practice",children:"Best practice"}),"\n",(0,s.jsx)(n.h3,{id:"data-size",children:"Data size"}),"\n",(0,s.jsxs)(n.p,{children:["INSERT INTO imposes no limitations on data volume and can support large-scale data imports. However, if you are importing a large amount of data, it is recommended to adjust the system's INSERT INTO timeout settings to ensure that ",(0,s.jsx)(n.code,{children:"import timeout >= data volume ``/`` estimated import speed"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["FE configuration parameter ",(0,s.jsx)(n.code,{children:"insert_load_default_timeout_second"})]}),"\n",(0,s.jsxs)(n.li,{children:["Environment parameter ",(0,s.jsx)(n.code,{children:"insert_timeout"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"view-error-rows",children:"View error rows"}),"\n",(0,s.jsx)(n.p,{children:"When the INSERT INTO result includes a URL field, you can use the following command to view the error rows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'SHOW LOAD WARNINGS ON "url";\n'})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'SHOW LOAD WARNINGS ON "http://ip:port/api/_load_error_log?file=_shard_13/error_loginsert_stmt_d2cac0a0a16d482d-9041c949a4b71605_d2cac0a0a16d482d_9041c949a4b71605";\n'})}),"\n",(0,s.jsx)(n.p,{children:"Common reasons for errors include: source data column length exceeding destination column length, column type mismatch, partition mismatch, and column order mismatch."}),"\n",(0,s.jsxs)(n.p,{children:["You can control whether INSERT INTO ignores error rows by configuring the environment variable ",(0,s.jsx)(n.code,{children:"enable_insert_strict"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ingest-external-data-via-multi-catalog",children:"Ingest external data via Multi-Catalog"}),"\n",(0,s.jsxs)(n.p,{children:["Doris supports the creation of external tables. Once created, data from external tables can be imported into Doris internal tables using ",(0,s.jsx)(n.code,{children:"INSERT INTO SELECT"}),", or queried directly using SELECT statements."]}),"\n",(0,s.jsx)(n.p,{children:"With its Multi-Catalog feature, Doris supports connections to various mainstream data lakes and databases including Apache Hive, Apache Iceberg, Apache Hudi, Apache Paimon (Incubating), Elasticsearch, MySQL, Oracle, and SQL Server."}),"\n",(0,s.jsxs)(n.p,{children:["For more information on Multi-Catalog, please refer to ",(0,s.jsx)(n.a,{href:"../../../lakehouse/lakehouse-overview/#multi-catalog",children:"Lakehouse overview"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The followings illustrate importing data from a Hive external table into a Doris internal table."}),"\n",(0,s.jsx)(n.h3,{id:"create-hive-catalog",children:"Create Hive Catalog"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:8088',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:8088',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ingest-data",children:"Ingest data"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a target table for the data import in Doris."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `target_tbl` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n)\nCOMMENT "Doris Table"\nDISTRIBUTED BY HASH(k1) BUCKETS 2\nPROPERTIES (\n    "replication_num" = "1"\n);\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For detailed instructions on creating Doris tables, please refer to ",(0,s.jsx)(n.a,{href:"../../../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE/",children:"CREATE TABLE"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Importing data (from the ",(0,s.jsx)(n.code,{children:"hive.db1.source_tbl"})," table into the ",(0,s.jsx)(n.code,{children:"target_tbl"})," table)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO target_tbl SELECT k1,k2,k3 FROM  hive.db1.source_tbl limit 100;\n"})}),"\n",(0,s.jsx)(n.p,{children:"The INSERT command is a synchronous command. If it returns a result, that indicates successful import."}),"\n",(0,s.jsx)(n.h3,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure that the external data source and the Doris cluster can communicate, including mutual network accessibility between BE nodes and external data sources."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ingest-data-by-tvf",children:"Ingest data by TVF"}),"\n",(0,s.jsx)(n.p,{children:"Doris can directly query and analyze files stored in object storage or HDFS as tables through the Table Value Functions (TVFs), which supports automatic column type inference. For detailed information, please refer to the Lakehouse/TVF documentation."}),"\n",(0,s.jsx)(n.h3,{id:"automatic-column-type-inference",children:"Automatic column type inference"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:'DESC FUNCTION s3 (\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style"="true"\n);\n+---------------+--------------+------+-------+---------+-------+\n| Field         | Type         | Null | Key   | Default | Extra |\n+---------------+--------------+------+-------+---------+-------+\n| p_partkey     | INT          | Yes  | false | NULL    | NONE  |\n| p_name        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_mfgr        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_brand       | TEXT         | Yes  | false | NULL    | NONE  |\n| p_type        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_size        | INT          | Yes  | false | NULL    | NONE  |\n| p_container   | TEXT         | Yes  | false | NULL    | NONE  |\n| p_retailprice | DECIMAL(9,0) | Yes  | false | NULL    | NONE  |\n| p_comment     | TEXT         | Yes  | false | NULL    | NONE  |\n+---------------+--------------+------+-------+---------+-------+\n'})}),"\n",(0,s.jsx)(n.p,{children:"In this example of an S3 TVF, the file path, connection information, and authentication information are specified."}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"DESC FUNCTION"})," syntax to view the schema of this file."]}),"\n",(0,s.jsx)(n.p,{children:"It can be seen that for Parquet files, Doris automatically infers column types based on the metadata within the file."}),"\n",(0,s.jsx)(n.p,{children:"Currently, Doris supports analysis and column type inference for Parquet, ORC, CSV, and JSON formats."}),"\n",(0,s.jsxs)(n.p,{children:["It can be used in combination with the ",(0,s.jsx)(n.code,{children:"INSERT INTO SELECT"})," syntax to quickly import files into Doris tables for faster analysis."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:'// 1. Create Doris internal table\nCREATE TABLE IF NOT EXISTS test_table\n(\n    id int,\n    name varchar(50),\n    age int\n)\nDISTRIBUTED BY HASH(id) BUCKETS 4\nPROPERTIES("replication_num" = "1");\n\n// 2. Insert data by S3 Table Value Function\nINSERT INTO test_table (id,name,age)\nSELECT cast(id as INT) as id, name, cast (age as INT) as age\nFROM s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style" = "true");\n'})}),"\n",(0,s.jsx)(n.h3,{id:"notes-1",children:"Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the URI specified in the ",(0,s.jsx)(n.code,{children:"S3 / hdfs"})," TVF does not match any files, or if all matched files are empty, the ",(0,s.jsx)(n.code,{children:"S3 / hdfs"})," TVF will return an empty result set. In such cases, if you use ",(0,s.jsx)(n.code,{children:"DESC FUNCTION"})," to view the schema of the file, you will see a dummy column ",(0,s.jsx)(n.code,{children:"__dummy_col"}),", which can be ignored."]}),"\n",(0,s.jsxs)(n.li,{children:["If the format specified for the TVF is CSV and the file being read is not empty but the first line of the file is empty, an error will be prompted: ",(0,s.jsx)(n.code,{children:"The first line is empty, can not parse column numbers"}),". This is because the schema cannot be parsed from the first line of the file."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"more-help",children:"More help"}),"\n",(0,s.jsxs)(n.p,{children:["For more detailed syntax on INSERT INTO, refer to the ",(0,s.jsx)(n.a,{href:"../../../sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT/",children:"INSERT INTO"})," command manual. You can also type ",(0,s.jsx)(n.code,{children:"HELP INSERT"})," at the MySQL client command line for further information."]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var a=t(667294);let s={},i=a.createContext(s);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);