"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["214875"],{315163:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>d});var t=JSON.parse('{"id":"lakehouse/database/sqlserver","title":"SQL Server","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/lakehouse/database/sqlserver.md","sourceDirName":"lakehouse/database","slug":"/lakehouse/database/sqlserver","permalink":"/docs/2.0/lakehouse/database/sqlserver","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SQL Server","language":"en"},"sidebar":"docs","previous":{"title":"Oracle","permalink":"/docs/2.0/lakehouse/database/oracle"},"next":{"title":"ClickHouse","permalink":"/docs/2.0/lakehouse/database/clickhouse"}}'),s=r("785893"),i=r("250065");let d={title:"SQL Server",language:"en"},a=void 0,c={},l=[{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"Connect to SQL Server",id:"connect-to-sql-server",level:2},{value:"Connection security",id:"connection-security",level:3},{value:"Hierarchical mapping",id:"hierarchical-mapping",level:2},{value:"Type mapping",id:"type-mapping",level:2},{value:"SQL Server to Doris type mapping",id:"sql-server-to-doris-type-mapping",level:3},{value:"Query optimization",id:"query-optimization",level:2},{value:"Predicate pushdown",id:"predicate-pushdown",level:3},{value:"Row limit",id:"row-limit",level:3},{value:"Escape characters",id:"escape-characters",level:3},{value:"FAQ",id:"faq",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Doris JDBC Catalog supports connecting to SQL Server databases through the standard JDBC interface. This document describes how to configure a SQL Server database connection."}),"\n",(0,s.jsx)(n.h2,{id:"terms-and-conditions",children:"Terms and Conditions"}),"\n",(0,s.jsx)(n.p,{children:"To connect to a SQL Server database you need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"SQL Server 2012 or later, or Azure SQL Database."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["JDBC driver for SQL Server database, you can download the latest or specified version of SQL Server JDBC driver from ",(0,s.jsx)(n.a,{href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc",children:"Maven repository"}),". **It is recommended to use SQL Server JDBC Driver 11.2.x and above. **"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Doris Network connection between each FE and BE node and the SQL Server server, default port is 1433."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"connect-to-sql-server",children:"Connect to SQL Server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG sqlserver PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="secret",\n    "jdbc_url" = "jdbc:sqlserver://<host>:<port>;databaseName=<databaseName>;encrypt=false",\n    "driver_url" = "mssql-jdbc-11.2.3.jre8.jar",\n    "driver_class" = "com.microsoft.sqlserver.jdbc.SQLServerDriver"\n)\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"remarks",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"jdbc_url"})," defines the connection information and parameters to be passed to the SQL Server JDBC driver. URL support is provided in ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en/sql/connect/jdbc/building-the-connection-url?view=sql-server-ver16",children:"SQL Server JDBC Driver Documentation"})," parameters."]})}),"\n",(0,s.jsx)(n.h3,{id:"connection-security",children:"Connection security"}),"\n",(0,s.jsx)(n.p,{children:"The JDBC driver and connector automatically use Transport Layer Security (TLS) encryption and certificate verification. This requires configuring the appropriate TLS certificate on the SQL Server database host."}),"\n",(0,s.jsx)(n.p,{children:"If you have not set up the necessary configuration, you can disable encryption in the connection string using the encrypt attribute:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'"jdbc_url"="jdbc:sqlserver://<host>:<port>;databaseName=<databaseName>;encrypt=false"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en/sql/connect/jdbc/using-ssl-encryption?view=sql-server-ver16",children:"The TLS section of the SQL Server JDBC driver documentation"})," describes trustServerCertificate in detail , hostNameInCertificate, trustStore and trustStorePassword and other parameters."]}),"\n",(0,s.jsx)(n.h2,{id:"hierarchical-mapping",children:"Hierarchical mapping"}),"\n",(0,s.jsxs)(n.p,{children:["When mapping SQLServer, a Database in Doris corresponds to a Schema under the specified Database (",(0,s.jsx)(n.code,{children:"<databaseName>"})," in the ",(0,s.jsx)(n.code,{children:"jdbc_url"})," parameter) in SQL Server. The Table under Doris' Database corresponds to the Tables under Schema in SQL Server. That is, the mapping relationship is as follows:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Doris"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"SQLServer"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Catalog"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Database"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Database"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Schema"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Table"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Table"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"type-mapping",children:"Type mapping"}),"\n",(0,s.jsx)(n.h3,{id:"sql-server-to-doris-type-mapping",children:"SQL Server to Doris type mapping"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"SQL Server Type"}),(0,s.jsx)(n.th,{children:"Doris Type"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bit"}),(0,s.jsx)(n.td,{children:"BOOLEAN"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tinyint"}),(0,s.jsx)(n.td,{children:"SMALLINT"}),(0,s.jsx)(n.td,{children:"SQLServer's tinyint is an unsigned number, so it is mapped to Doris's SMALLINT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"smallint"}),(0,s.jsx)(n.td,{children:"SMALLINT"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bigint"}),(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"real"}),(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"float"}),(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"money"}),(0,s.jsx)(n.td,{children:"DECIMAL(19,4)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"smallmoney"}),(0,s.jsx)(n.td,{children:"DECIMAL(10,4)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"decimal/numeric"}),(0,s.jsx)(n.td,{children:"DECIMAL"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"date"}),(0,s.jsx)(n.td,{children:"DATE"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"datetime/datetime2/smalldatetime"}),(0,s.jsx)(n.td,{children:"DATETIMEV2"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"char/varchar/text/nchar/nvarchar/ntext"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"time/datetimeoffset"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsx)(n.td,{children:"Read the hexadecimal display of binary data, no practical significance"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Other"}),(0,s.jsx)(n.td,{children:"UNSUPPORTED"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"query-optimization",children:"Query optimization"}),"\n",(0,s.jsx)(n.h3,{id:"predicate-pushdown",children:"Predicate pushdown"}),"\n",(0,s.jsxs)(n.p,{children:["When executing a query like ",(0,s.jsx)(n.code,{children:"where dt = '2022-01-01'"}),", Doris can push these filtering conditions down to the external data source, thereby directly excluding data that does not meet the conditions at the data source level, reducing inaccuracies. Necessary data acquisition and transmission. This greatly improves query performance while also reducing the load on external data sources."]}),"\n",(0,s.jsx)(n.h3,{id:"row-limit",children:"Row limit"}),"\n",(0,s.jsxs)(n.p,{children:["If you have the limit keyword in the query, Doris will escape the limit into SQL Server's ",(0,s.jsx)(n.code,{children:"TOP"})," syntax to reduce the amount of data transfer."]}),"\n",(0,s.jsx)(n.h3,{id:"escape-characters",children:"Escape characters"}),"\n",(0,s.jsx)(n.p,{children:"Doris will automatically add the escape character ([]) to the field names and table names in the query statements sent to SQL Server to avoid conflicts between field names, table names and SQL Server internal keywords."}),"\n",(0,s.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Certificate authentication exception occurs when connecting to SQL Server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'SQLServerException: The driver could not establish a secure connection to SQL Server by using Secure Sockets Layer (SSL) encryption.\nError: "sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException:\nunable to find valid certification path to requested target". ClientConnectionId:a92f3817-e8e6-4311-bc21-7c66\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can add ",(0,s.jsx)(n.code,{children:"encrypt=false"})," to the end of the JDBC connection string when creating the Catalog, such as ",(0,s.jsx)(n.code,{children:'"jdbc_url" = "jdbc:sqlserver://127.0.0.1:1433;DataBaseName=doris_test;encrypt=false"'})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"TLS exception occurs when connecting to SQL Server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"The server selected protocol version TLS10 is not accepted by client preferences [TLS13, TLS12]\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is due to a TLS protocol version mismatch between SQL Server and the JDBC client. The connected SQL Server only supports TLS 1.0, and the JAVA environment where the JDBC client is located has TLS 1.0 disabled by default."}),"\n",(0,s.jsx)(n.p,{children:"The solution is as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Enable TLS 1.2 on SQL Server.\nReference: ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/connect/tls-1-2-support-microsoft-sql-server",children:"SQL Server TLS 1.2 support"})]}),"\n",(0,s.jsxs)(n.li,{children:["Enable TLS 1.0 for the JDK.\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"vim ${JAVA_HOME}/lib/security/java.security\n#find this paragraph\njdk.tls.disabledAlgorithms=SSLv3, TLSv1, TLSv1.1, RC4, DES, MD5withRSA, \\\nDH keySize < 1024, EC keySize < 224, 3DES_EDE_CBC, anon, NULL, \\\ninclude jdk.disabled.namedCurves\n\n#Delete TLSv1, TLSv1.1 and change it to the following\njdk.tls.disabledAlgorithms=SSLv3, RC4, DES, MD5withRSA, \\\nDH keySize < 1024, EC keySize < 224, anon, NULL, \\\ninclude jdk.disabled.namedCurves\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var t=r(667294);let s={},i=t.createContext(s);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);