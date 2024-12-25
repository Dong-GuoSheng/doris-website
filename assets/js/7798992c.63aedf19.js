"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["344285"],{585216:function(n,e,t){t.r(e),t.d(e,{metadata:()=>d,contentTitle:()=>l,default:()=>x,assets:()=>h,toc:()=>c,frontMatter:()=>r});var d=JSON.parse('{"id":"table-design/data-model/aggregate","title":"Aggregate Key Model","description":"\x3c!--","source":"@site/docs/table-design/data-model/aggregate.md","sourceDirName":"table-design/data-model","slug":"/table-design/data-model/aggregate","permalink":"/docs/dev/table-design/data-model/aggregate","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Aggregate Key Model","language":"en"},"sidebar":"docs","previous":{"title":"Unique Key Model","permalink":"/docs/dev/table-design/data-model/unique"},"next":{"title":"Usage Notes","permalink":"/docs/dev/table-design/data-model/tips"}}'),s=t("785893"),i=t("250065");let r={title:"Aggregate Key Model",language:"en"},l=void 0,h={},c=[{value:"Importing Data Aggregation",id:"importing-data-aggregation",level:3},{value:"Import data and aggregate with existing data.",id:"import-data-and-aggregate-with-existing-data",level:3},{value:"agg_state",id:"agg_state",level:3}];function a(n){let e={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"The aggregate data model, also known as the Aggregate model, aggregates data based on key columns. The Doris storage layer retains the aggregated data, which helps reduce storage space and improve query performance. This model is typically used in scenarios where summarization or aggregation of information (such as totals or averages) is required."}),"\n",(0,s.jsx)(e.p,{children:"The following example illustrates what the aggregate model is and how to use it correctly."}),"\n",(0,s.jsx)(e.h3,{id:"importing-data-aggregation",children:"Importing Data Aggregation"}),"\n",(0,s.jsx)(e.p,{children:"Assume that the business has the following data table schema:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"ColumnName"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"AggregationType"}),(0,s.jsx)(e.th,{children:"Comment"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"userid"}),(0,s.jsx)(e.td,{children:"LARGEINT"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"user id"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"date"}),(0,s.jsx)(e.td,{children:"DATE"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"date of data filling"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"City"}),(0,s.jsx)(e.td,{children:"VARCHAR (20)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"User City"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"age"}),(0,s.jsx)(e.td,{children:"SMALLINT"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"User age"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sex"}),(0,s.jsx)(e.td,{children:"TINYINT"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"User gender"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Last_visit_date"}),(0,s.jsx)(e.td,{children:"DATETIME"}),(0,s.jsx)(e.td,{children:"REPLACE"}),(0,s.jsx)(e.td,{children:"Last user access time"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Cost"}),(0,s.jsx)(e.td,{children:"BIGINT"}),(0,s.jsx)(e.td,{children:"SUM"}),(0,s.jsx)(e.td,{children:"Total User Consumption"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"max dwell time"}),(0,s.jsx)(e.td,{children:"INT"}),(0,s.jsx)(e.td,{children:"MAX"}),(0,s.jsx)(e.td,{children:"Maximum user residence time"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"min dwell time"}),(0,s.jsx)(e.td,{children:"INT"}),(0,s.jsx)(e.td,{children:"MIN"}),(0,s.jsx)(e.td,{children:"User minimum residence time"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"The corresponding to CREATE TABLE statement would be as follows (omitting the Partition and Distribution information):"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'CREATE DATABASE IF NOT EXISTS example_db;\n\nCREATE TABLE IF NOT EXISTS example_db.example_tbl_agg1\n(\n    `user_id` LARGEINT NOT NULL COMMENT "user id",\n    `date` DATE NOT NULL COMMENT "data import time",\n    `city` VARCHAR(20) COMMENT "city",\n    `age` SMALLINT COMMENT "age",\n    `sex` TINYINT COMMENT "gender",\n    `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "last visit date time",\n    `cost` BIGINT SUM DEFAULT "0" COMMENT "user total cost",\n    `max_dwell_time` INT MAX DEFAULT "0" COMMENT "user max dwell time",\n    `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "user min dwell time"\n)\nAGGREGATE KEY(`user_id`, `date`, `city`, `age`, `sex`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,s.jsx)(e.p,{children:"As you can see, this is a typical fact table of user information and visit behaviors. In star models, user information and visit behaviors are usually stored in dimension tables and fact tables, respectively. Here, for the convenience of explanation, we store the two types of information in one single table."}),"\n",(0,s.jsxs)(e.p,{children:["The columns in the table are divided into Key (dimension) columns and Value (indicator columns) based on whether they are set with an ",(0,s.jsx)(e.code,{children:"AggregationType"}),". ",(0,s.jsx)(e.strong,{children:"Key"})," columns are not set with an  ",(0,s.jsx)(e.code,{children:"AggregationType"}),", such as ",(0,s.jsx)(e.code,{children:"user_id"}),", ",(0,s.jsx)(e.code,{children:"date"}),", and  ",(0,s.jsx)(e.code,{children:"age"}),", while ",(0,s.jsx)(e.strong,{children:"Value"})," columns are."]}),"\n",(0,s.jsxs)(e.p,{children:["When data are imported, rows with the same contents in the Key columns will be aggregated into one row, and their values in the Value columns will be aggregated as their ",(0,s.jsx)(e.code,{children:"AggregationType"}),' specify. Currently, there are several aggregation methods and "agg_state" options available:']}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"SUM: Accumulate the values in multiple rows."}),"\n",(0,s.jsx)(e.li,{children:"REPLACE: The newly imported value will replace the previous value."}),"\n",(0,s.jsx)(e.li,{children:"MAX: Keep the maximum value."}),"\n",(0,s.jsx)(e.li,{children:"MIN: Keep the minimum value."}),"\n",(0,s.jsx)(e.li,{children:"REPLACE_IF_NOT_NULL: Non-null value replacement. Unlike REPLACE, it does not replace null values."}),"\n",(0,s.jsx)(e.li,{children:"HLL_UNION: Aggregation method for columns of HLL type, using the HyperLogLog algorithm for aggregation."}),"\n",(0,s.jsx)(e.li,{children:"BITMAP_UNION: Aggregation method for columns of BITMAP type, performing a union aggregation of bitmaps."}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:'If these aggregation methods cannot meet the requirements, you can choose to use the "agg_state" type.'})}),"\n",(0,s.jsx)(e.p,{children:"Suppose that you have the following import data (raw data):"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"user_id"}),(0,s.jsx)(e.th,{children:"date"}),(0,s.jsx)(e.th,{children:"city"}),(0,s.jsx)(e.th,{children:"age"}),(0,s.jsx)(e.th,{children:"sex"}),(0,s.jsx)(e.th,{children:"last_visit_date"}),(0,s.jsx)(e.th,{children:"cost"}),(0,s.jsx)(e.th,{children:"max_dwell_time"}),(0,s.jsx)(e.th,{children:"min_dwell_time"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10000"}),(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Beijing"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-01 06:00"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"10"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10000"}),(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Beijing"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-01 07:00"}),(0,s.jsx)(e.td,{children:"15"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10001"}),(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Beijing"}),(0,s.jsx)(e.td,{children:"30"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"2017-10-01 17:05:45"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"22"}),(0,s.jsx)(e.td,{children:"22"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10002"}),(0,s.jsx)(e.td,{children:"2017-10-02"}),(0,s.jsx)(e.td,{children:"Shanghai"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"2017-10-02 12:59:12"}),(0,s.jsx)(e.td,{children:"200"}),(0,s.jsx)(e.td,{children:"5"}),(0,s.jsx)(e.td,{children:"5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10003"}),(0,s.jsx)(e.td,{children:"2017-10-02"}),(0,s.jsx)(e.td,{children:"Guangzhou"}),(0,s.jsx)(e.td,{children:"32"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-02 11:20:00"}),(0,s.jsx)(e.td,{children:"30"}),(0,s.jsx)(e.td,{children:"11"}),(0,s.jsx)(e.td,{children:"11"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10004"}),(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Shenzhen"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-01 10:00:15"}),(0,s.jsx)(e.td,{children:"100"}),(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"3"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10004"}),(0,s.jsx)(e.td,{children:"2017-10-03"}),(0,s.jsx)(e.td,{children:"Shenzhen"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-03 10:20:22"}),(0,s.jsx)(e.td,{children:"11"}),(0,s.jsx)(e.td,{children:"6"}),(0,s.jsx)(e.td,{children:"6"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"And you can import data with the following sql:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'insert into example_db.example_tbl_agg1 values\n(10000,"2017-10-01","Beijing",20,0,"2017-10-01 06:00:00",20,10,10),\n(10000,"2017-10-01","Beijing",20,0,"2017-10-01 07:00:00",15,2,2),\n(10001,"2017-10-01","Beijing",30,1,"2017-10-01 17:05:45",2,22,22),\n(10002,"2017-10-02","Shanghai",20,1,"2017-10-02 12:59:12",200,5,5),\n(10003,"2017-10-02","Guangzhou",32,0,"2017-10-02 11:20:00",30,11,11),\n(10004,"2017-10-01","Shenzhen",35,0,"2017-10-01 10:00:15",100,3,3),\n(10004,"2017-10-03","Shenzhen",35,0,"2017-10-03 10:20:22",11,6,6);\n'})}),"\n",(0,s.jsx)(e.p,{children:"This is a table recording the user behaviors when visiting a certain commodity page. The first row of data, for example, is explained as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Data"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10000"}),(0,s.jsx)(e.td,{children:"User id, each user uniquely identifies id"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Data storage time, accurate to date"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Beijing"}),(0,s.jsx)(e.td,{children:"User City"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"User Age"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"Gender male (1 for female)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"2017-10-01 06:00"}),(0,s.jsx)(e.td,{children:"User's time to visit this page, accurate to seconds"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"Consumption generated by the user's current visit"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"User's visit, time to stay on the page"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"User's current visit, time spent on the page (redundancy)"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"After this batch of data is imported into Doris correctly, it will be stored in Doris as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"user_id"}),(0,s.jsx)(e.th,{children:"date"}),(0,s.jsx)(e.th,{children:"city"}),(0,s.jsx)(e.th,{children:"age"}),(0,s.jsx)(e.th,{children:"sex"}),(0,s.jsx)(e.th,{children:"last_visit_date"}),(0,s.jsx)(e.th,{children:"cost"}),(0,s.jsx)(e.th,{children:"max_dwell_time"}),(0,s.jsx)(e.th,{children:"min_dwell_time"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10000"}),(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Beijing"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-01 07:00"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10001"}),(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Beijing"}),(0,s.jsx)(e.td,{children:"30"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"2017-10-01 17:05:45"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"22"}),(0,s.jsx)(e.td,{children:"22"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10002"}),(0,s.jsx)(e.td,{children:"2017-10-02"}),(0,s.jsx)(e.td,{children:"Shanghai"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"2017-10-02 12:59:12"}),(0,s.jsx)(e.td,{children:"200"}),(0,s.jsx)(e.td,{children:"5"}),(0,s.jsx)(e.td,{children:"5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10003"}),(0,s.jsx)(e.td,{children:"2017-10-02"}),(0,s.jsx)(e.td,{children:"Guangzhou"}),(0,s.jsx)(e.td,{children:"32"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-02 11:20:00"}),(0,s.jsx)(e.td,{children:"30"}),(0,s.jsx)(e.td,{children:"11"}),(0,s.jsx)(e.td,{children:"11"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10004"}),(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Shenzhen"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-01 10:00:15"}),(0,s.jsx)(e.td,{children:"100"}),(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"3"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10004"}),(0,s.jsx)(e.td,{children:"2017-10-03"}),(0,s.jsx)(e.td,{children:"Shenzhen"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-03 10:20:22"}),(0,s.jsx)(e.td,{children:"11"}),(0,s.jsx)(e.td,{children:"6"}),(0,s.jsx)(e.td,{children:"6"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["The data of User 10000 have been aggregated to one row, while those of other users remain the same. The explanation for the aggregated data of User 10000 is as follows (the first 5 columns remain unchanged, so it starts with Column 6 ",(0,s.jsx)(e.code,{children:"last_visit_date"}),"):"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["The value in the 6th column is 2017-10-01 07:00: The ",(0,s.jsx)(e.code,{children:"last_visit_date"})," column is aggregated by REPLACE, so ",(0,s.jsx)(e.code,{children:"2017-10-01 07:00"})," has replaced  ",(0,s.jsx)(e.code,{children:"2017-10-01 06:00"}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["When using REPLACE to aggregate data from the same import batch, the order of replacement is uncertain. That means, in this case, the data eventually saved in Doris could be ",(0,s.jsx)(e.code,{children:"2017-10-01 06:00"}),". However, for different import batches, it is certain that data from the new batch will replace those from the old batch."]})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["The value in the 7th column is 35: The ",(0,s.jsx)(e.code,{children:"cost"}),"column is aggregated by SUM, so the update value ",(0,s.jsx)(e.code,{children:"35"})," is the result of ",(0,s.jsx)(e.code,{children:"20"})," + ",(0,s.jsx)(e.code,{children:"15"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["The value in the 8th column is 10: The ",(0,s.jsx)(e.code,{children:"max_dwell_time"})," column is aggregated by MAX, so ",(0,s.jsx)(e.code,{children:"10"})," is saved as it is the maximum between ",(0,s.jsx)(e.code,{children:"10"})," and ",(0,s.jsx)(e.code,{children:"2"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["The value in the 9th column is 2: The  ",(0,s.jsx)(e.code,{children:"min_dwell_time"})," column is aggregated by MIN, so ",(0,s.jsx)(e.code,{children:"2"})," is saved as it is the minimum between ",(0,s.jsx)(e.code,{children:"10"})," and ",(0,s.jsx)(e.code,{children:"2"}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"After aggregation, Doris only stores the aggregated data. In other words, the detailed raw data will no longer be available."}),"\n",(0,s.jsx)(e.h3,{id:"import-data-and-aggregate-with-existing-data",children:"Import data and aggregate with existing data."}),"\n",(0,s.jsx)(e.p,{children:"Assuming that the table already contains the previously imported data:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"user_id"}),(0,s.jsx)(e.th,{children:"date"}),(0,s.jsx)(e.th,{children:"city"}),(0,s.jsx)(e.th,{children:"age"}),(0,s.jsx)(e.th,{children:"sex"}),(0,s.jsx)(e.th,{children:"last_visit_date"}),(0,s.jsx)(e.th,{children:"cost"}),(0,s.jsx)(e.th,{children:"max_dwell_time"}),(0,s.jsx)(e.th,{children:"min_dwell_time"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10000"}),(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Beijing"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-01 07:00"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10001"}),(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Beijing"}),(0,s.jsx)(e.td,{children:"30"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"2017-10-01 17:05:45"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"22"}),(0,s.jsx)(e.td,{children:"22"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10002"}),(0,s.jsx)(e.td,{children:"2017-10-02"}),(0,s.jsx)(e.td,{children:"Shanghai"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"2017-10-02 12:59:12"}),(0,s.jsx)(e.td,{children:"200"}),(0,s.jsx)(e.td,{children:"5"}),(0,s.jsx)(e.td,{children:"5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10003"}),(0,s.jsx)(e.td,{children:"2017-10-02"}),(0,s.jsx)(e.td,{children:"Guangzhou"}),(0,s.jsx)(e.td,{children:"32"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-02 11:20:00"}),(0,s.jsx)(e.td,{children:"30"}),(0,s.jsx)(e.td,{children:"11"}),(0,s.jsx)(e.td,{children:"11"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10004"}),(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Shenzhen"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-01 10:00:15"}),(0,s.jsx)(e.td,{children:"100"}),(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"3"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10004"}),(0,s.jsx)(e.td,{children:"2017-10-03"}),(0,s.jsx)(e.td,{children:"Shenzhen"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-03 10:20:22"}),(0,s.jsx)(e.td,{children:"11"}),(0,s.jsx)(e.td,{children:"6"}),(0,s.jsx)(e.td,{children:"6"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"Now import a new batch of data:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"user_id"}),(0,s.jsx)(e.th,{children:"date"}),(0,s.jsx)(e.th,{children:"city"}),(0,s.jsx)(e.th,{children:"age"}),(0,s.jsx)(e.th,{children:"sex"}),(0,s.jsx)(e.th,{children:"last_visit_date"}),(0,s.jsx)(e.th,{children:"cost"}),(0,s.jsx)(e.th,{children:"max_dwell_time"}),(0,s.jsx)(e.th,{children:"min_dwell_time"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10004"}),(0,s.jsx)(e.td,{children:"2017-10-03"}),(0,s.jsx)(e.td,{children:"Shenzhen"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-03 11:22:00"}),(0,s.jsx)(e.td,{children:"44"}),(0,s.jsx)(e.td,{children:"19"}),(0,s.jsx)(e.td,{children:"19"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10005"}),(0,s.jsx)(e.td,{children:"2017-10-03"}),(0,s.jsx)(e.td,{children:"Changsha"}),(0,s.jsx)(e.td,{children:"29"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"2017-10-03 18:11:02"}),(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"1"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"With the following SQL:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'insert into example_db.example_tbl_agg1 values\n(10004,"2017-10-03","Shenzhen",35,0,"2017-10-03 11:22:00",44,19,19),\n(10005,"2017-10-03","Changsha",29,1,"2017-10-03 18:11:02",3,1,1);\n'})}),"\n",(0,s.jsx)(e.p,{children:"After importing, the data stored in Doris will be updated as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"user_id"}),(0,s.jsx)(e.th,{children:"date"}),(0,s.jsx)(e.th,{children:"city"}),(0,s.jsx)(e.th,{children:"age"}),(0,s.jsx)(e.th,{children:"sex"}),(0,s.jsx)(e.th,{children:"last_visit_date"}),(0,s.jsx)(e.th,{children:"cost"}),(0,s.jsx)(e.th,{children:"max_dwell_time"}),(0,s.jsx)(e.th,{children:"min_dwell_time"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10000"}),(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Beijing"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-01 07:00"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10001"}),(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Beijing"}),(0,s.jsx)(e.td,{children:"30"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"2017-10-01 17:05:45"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"22"}),(0,s.jsx)(e.td,{children:"22"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10002"}),(0,s.jsx)(e.td,{children:"2017-10-02"}),(0,s.jsx)(e.td,{children:"Shanghai"}),(0,s.jsx)(e.td,{children:"20"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"2017-10-02 12:59:12"}),(0,s.jsx)(e.td,{children:"200"}),(0,s.jsx)(e.td,{children:"5"}),(0,s.jsx)(e.td,{children:"5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10003"}),(0,s.jsx)(e.td,{children:"2017-10-02"}),(0,s.jsx)(e.td,{children:"Guangzhou"}),(0,s.jsx)(e.td,{children:"32"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-02 11:20:00"}),(0,s.jsx)(e.td,{children:"30"}),(0,s.jsx)(e.td,{children:"11"}),(0,s.jsx)(e.td,{children:"11"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10004"}),(0,s.jsx)(e.td,{children:"2017-10-01"}),(0,s.jsx)(e.td,{children:"Shenzhen"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-01 10:00:15"}),(0,s.jsx)(e.td,{children:"100"}),(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"3"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10004"}),(0,s.jsx)(e.td,{children:"2017-10-03"}),(0,s.jsx)(e.td,{children:"Shenzhen"}),(0,s.jsx)(e.td,{children:"35"}),(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"2017-10-03 11:22:00"}),(0,s.jsx)(e.td,{children:"55"}),(0,s.jsx)(e.td,{children:"19"}),(0,s.jsx)(e.td,{children:"6"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"10005"}),(0,s.jsx)(e.td,{children:"2017-10-03"}),(0,s.jsx)(e.td,{children:"Changsha"}),(0,s.jsx)(e.td,{children:"29"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"2017-10-03 18:11:02"}),(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"1"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"As you can see, the existing data and the newly imported data of User 10004 have been aggregated. Meanwhile, the new data of User 10005 have been added."}),"\n",(0,s.jsx)(e.p,{children:"In Doris, data aggregation happens in the following 3 stages:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"The ETL stage of each batch of import data. At this stage, the batch of import data will be aggregated internally."}),"\n",(0,s.jsx)(e.li,{children:"The data compaction stage of the underlying BE. At this stage, BE will aggregate data from different batches that have been imported."}),"\n",(0,s.jsx)(e.li,{children:"The data query stage. The data involved in the query will be aggregated accordingly."}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["At different stages, data will be aggregated to varying degrees. For example, when a batch of data is just imported, it may not be aggregated with the existing data. But for users, they ",(0,s.jsx)(e.strong,{children:"can only query aggregated data"}),". That is, what users see are the aggregated data, and they ",(0,s.jsx)(e.strong,{children:"should not assume that what they have seen are not or partly aggregated"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"agg_state",children:"agg_state"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"AGG_STATE cannot be used as a key column, and when creating a table, you need to declare the signature of the aggregation function. Users do not need to specify a length or default value. The actual storage size of the data depends on the function implementation."})}),"\n",(0,s.jsxs)(e.p,{children:["Details can be found in  ",(0,s.jsx)(e.a,{href:"/docs/dev/sql-manual/sql-data-types/aggregate/AGG-STATE",children:"agg_state"})," \u3002"]}),"\n",(0,s.jsx)(e.p,{children:"CREATE TABLE"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'set enable_agg_state=true;\ncreate table aggstate(\n    k1 int null,\n    k2 agg_state<sum(int)> generic,\n    k3 agg_state<group_concat(string)> generic\n)\naggregate key (k1)\ndistributed BY hash(k1) buckets 3\nproperties("replication_num" = "1");\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"agg_state"})," is used to declare the data type as ",(0,s.jsx)(e.code,{children:"agg_state,"})," and ",(0,s.jsx)(e.code,{children:"sum/group_concat"})," are the signatures of aggregation functions."]}),"\n",(0,s.jsxs)(e.p,{children:["Please note that ",(0,s.jsx)(e.code,{children:"agg_state"})," is a data type, similar to ",(0,s.jsx)(e.code,{children:"int"}),", ",(0,s.jsx)(e.code,{children:"array"}),", or ",(0,s.jsx)(e.code,{children:"string"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"agg_state"})," can only be used in conjunction with the ",(0,s.jsx)(e.a,{href:"/docs/dev/sql-manual/sql-functions/combinators/state",children:"state"}),"/",(0,s.jsx)(e.a,{href:"/docs/dev/sql-manual/sql-functions/combinators/merge",children:"merge"}),"/",(0,s.jsx)(e.a,{href:"/docs/dev/sql-manual/sql-functions/combinators/union",children:"union"})," function combinators."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"agg_state"})," represents an intermediate result of an aggregation function. For example, with the aggregation function ",(0,s.jsx)(e.code,{children:"sum"}),", ",(0,s.jsx)(e.code,{children:"agg_state"})," can represent the intermediate state of summing values like ",(0,s.jsx)(e.code,{children:"sum(1, 2, 3, 4, 5)"}),", rather than the final result."]}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"agg_state"})," type needs to be generated using the ",(0,s.jsx)(e.code,{children:"state"})," function. For the current table, it would be ",(0,s.jsx)(e.code,{children:"sum_state"})," and ",(0,s.jsx)(e.code,{children:"group_concat_state"}),' for the "sum" and ',(0,s.jsx)(e.code,{children:"group_concat"})," aggregation functions, respectively."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"insert into aggstate values(1,sum_state(1),group_concat_state('a'));\ninsert into aggstate values(1,sum_state(2),group_concat_state('b'));\ninsert into aggstate values(1,sum_state(3),group_concat_state('c'));\n"})}),"\n",(0,s.jsx)(e.p,{children:"At this point, the table contains only one row. Please note that the table below is for illustrative purposes and cannot be selected/displayed directly:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"k1"}),(0,s.jsx)(e.th,{children:"k2"}),(0,s.jsx)(e.th,{children:"k3"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"sum(1,2,3)"}),(0,s.jsx)(e.td,{children:"group_concat_state(a,b,c)"})]})})]}),"\n",(0,s.jsx)(e.p,{children:"Insert another record."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"insert into aggstate values(2,sum_state(4),group_concat_state('d'));\n"})}),"\n",(0,s.jsx)(e.p,{children:"The table's structure at this moment is..."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"k1"}),(0,s.jsx)(e.th,{children:"k2"}),(0,s.jsx)(e.th,{children:"k3"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"sum(1,2,3)"}),(0,s.jsx)(e.td,{children:"group_concat_state(a,b,c)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"sum(4)"}),(0,s.jsx)(e.td,{children:"group_concat_state(d)"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["We can use the ",(0,s.jsx)(e.code,{children:"merge"})," operation to combine multiple states and return the final result calculated by the aggregation function."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select sum_merge(k2) from aggstate;\n+---------------+\n| sum_merge(k2) |\n+---------------+\n|            10 |\n+---------------+\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"sum_merge"})," will first combine sum(1,2,3) and sum(4) into sum(1,2,3,4), and return the calculated result.\nBecause ",(0,s.jsx)(e.code,{children:"group_concat"})," has a specific order requirement, the result is not stable."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select group_concat_merge(k3) from aggstate;\n+------------------------+\n| group_concat_merge(k3) |\n+------------------------+\n| c,b,a,d                |\n+------------------------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"If you do not want the final aggregation result, you can use 'union' to combine multiple intermediate aggregation results and generate a new intermediate result."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"insert into aggstate select 3,sum_union(k2),group_concat_union(k3) from aggstate ;\n"})}),"\n",(0,s.jsx)(e.p,{children:"The table's structure at this moment is..."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"k1"}),(0,s.jsx)(e.th,{children:"k2"}),(0,s.jsx)(e.th,{children:"k3"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"sum(1,2,3)"}),(0,s.jsx)(e.td,{children:"group_concat_state(a,b,c)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"sum(4)"}),(0,s.jsx)(e.td,{children:"group_concat_state(d)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"sum(1,2,3,4)"}),(0,s.jsx)(e.td,{children:"group_concat_state(a,b,c,d)"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"You can achieve this through a query."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select sum_merge(k2) , group_concat_merge(k3)from aggstate;\n+---------------+------------------------+\n| sum_merge(k2) | group_concat_merge(k3) |\n+---------------+------------------------+\n|            20 | c,b,a,d,c,b,a,d        |\n+---------------+------------------------+\n\nmysql> select sum_merge(k2) , group_concat_merge(k3)from aggstate where k1 != 2;\n+---------------+------------------------+\n| sum_merge(k2) | group_concat_merge(k3) |\n+---------------+------------------------+\n|            16 | c,b,a,d,c,b,a          |\n+---------------+------------------------+\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Users can perform more detailed aggregation function operations using ",(0,s.jsx)(e.code,{children:"agg_state"}),"."]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"agg_state"})," comes with a certain performance overhead."]})})]})}function x(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return r}});var d=t(667294);let s={},i=d.createContext(s);function r(n){let e=d.useContext(i);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),d.createElement(i.Provider,{value:e},n.children)}}}]);