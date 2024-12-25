"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["667265"],{842972:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-fe","title":"Config FE","description":"\x3c!--","source":"@site/docs/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-fe.md","sourceDirName":"install/cluster-deployment/k8s-deploy/compute-storage-decoupled","slug":"/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-fe","permalink":"/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-fe","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Config FE","language":"en"},"sidebar":"docs","previous":{"title":"Config Metaservice","permalink":"/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-ms"},"next":{"title":"Config ComputeGroups","permalink":"/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-cg"}}'),o=t("785893"),r=t("250065");let i={title:"Config FE",language:"en"},a=void 0,c={},l=[{value:"Resource configuration",id:"resource-configuration",level:2},{value:"Configuring compute resources",id:"configuring-compute-resources",level:3},{value:"Configuring storage resources",id:"configuring-storage-resources",level:3},{value:"Custom startup configuration",id:"custom-startup-configuration",level:2}];function d(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In the storage-computation separation mode, the FE (Frontend) is primarily responsible for SQL parsing and interacts with the metadata management component, MetaService. FE supports distributed deployment, and by default, it uses a master-observer configuration. Doris Operator supports deploying the storage-computation separation mode on Kubernetes for Doris versions 3.0.2 and above."}),"\n",(0,o.jsx)(n.h2,{id:"resource-configuration",children:"Resource configuration"}),"\n",(0,o.jsx)(n.h3,{id:"configuring-compute-resources",children:"Configuring compute resources"}),"\n",(0,o.jsxs)(n.p,{children:["By default, FE deployments on Kubernetes do not limit resource usage. The DorisDisaggregatedCluster uses Kubernetes' ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/concepts/configuration/manage-resources-containers/",children:"requests and limits"})," to configure compute resources. To allocate 8 CPU cores and 8 Gi of memory to the FE service, use the following configuration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"spec:\n  feSpec:\n    requests:\n      cpu: 8\n      memory: 8Gi\n    limits:\n      cpu: 8\n      memory: 8Gi\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Update the above configuration in the ",(0,o.jsx)(n.a,{href:"/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#step-3-deploy-the-compute-storage-decoupled-cluster",children:"DorisDisaggregatedCluster resource"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"configuring-storage-resources",children:"Configuring storage resources"}),"\n",(0,o.jsxs)(n.p,{children:["The FE service in the storage-computation separation cluster is a stateful service. When deployed on Kubernetes, it requires persistent storage for metadata. Doris Operator automatically mounts the persistent storage based on the configuration of the metadata storage directory and the storage template. Add the following configuration to the ",(0,o.jsx)(n.a,{href:"/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#step-3-deploy-the-compute-storage-decoupled-cluster",children:"DorisDisaggregatedCluster resource"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"spec:\n  feSpec:\n    persistentVolume:\n      persistentVolumeClaimSpec:\n        storageClassName: ${storageClassName}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: ${storageSize}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Here, ${storageClassName} is the name of the desired StorageClass. If not specified, the cluster\u2019s default StorageClass will be used. ${storageSize} indicates the storage capacity you wish to allocate, and the format follows Kubernetes' ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/",children:"quantity notation"}),", for example: 100Gi."]}),"\n",(0,o.jsx)(n.h2,{id:"custom-startup-configuration",children:"Custom startup configuration"}),"\n",(0,o.jsx)(n.p,{children:"Doris Operator uses Kubernetes' ConfigMap to mount the startup configuration."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Creating a Custom ConfigMap with Startup Configuration.",(0,o.jsx)(n.br,{}),"\nBelow is an example of a ConfigMap for FE, which includes the startup configuration:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: fe-configmap\n  namespace: default\n  labels:\n    app.kubernetes.io/component: fe\ndata:\n  fe.conf: |\n    CUR_DATE=`date +%Y%m%d-%H%M%S`\n    # Log dir\n    LOG_DIR = ${DORIS_HOME}/log\n    # For jdk 17, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_17="-Djavax.security.auth.useSubjectCredsOnly=false -Xmx8192m -Xms8192m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=$LOG_DIR -Xlog:gc*:$LOG_DIR/fe.gc.log.$CUR_DATE:time,uptime:filecount=10,filesize=50M --add-opens=java.base/java.nio=ALL-UNNAMED --add-opens java.base/jdk.internal.ref=ALL-UNNAMED"\n    # INFO, WARN, ERROR, FATAL\n    sys_log_level = INFO\n    # NORMAL, BRIEF, ASYNC\n    sys_log_mode = NORMAL\n    # Default dirs to put jdbc drivers,default value is ${DORIS_HOME}/jdbc_drivers\n    # jdbc_drivers_dir = ${DORIS_HOME}/jdbc_drivers\n    http_port = 8030\n    rpc_port = 9020\n    query_port = 9030\n    edit_log_port = 9010\n    enable_fqdn_mode=true\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In Kubernetes deployments, ",(0,o.jsx)(n.code,{children:"enable_fqdn_mode=true"})," must be set.\n2. Use the following command to deploy the ConfigMap:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl apply -n ${namespace} -f ${feConfigMapName}.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Where ${namespace} is the namespace of the DorisDisaggregatedCluster and ${feConfigMapName} is the filename containing the above configuration.",(0,o.jsx)(n.br,{}),"\n3. Update the ",(0,o.jsx)(n.code,{children:"DorisDisaggregatedCluster"})," resource as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"spec:\n  feSpec:\n    replicas: 2\n    configMaps:\n    - name: fe-configmap\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"DorisDisaggregatedCluster"})," resource, the ",(0,o.jsx)(n.code,{children:"configMaps"})," field is an array, with each element\u2019s ",(0,o.jsx)(n.code,{children:"name"})," representing the name of the ConfigMap in the current namespace."]}),"\n",(0,o.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["In Kubernetes deployments, no need to manually set ",(0,o.jsx)(n.code,{children:"meta_service_endpoint"}),", ",(0,o.jsx)(n.code,{children:"deploy_mode"}),", or ",(0,o.jsx)(n.code,{children:"cluster_id"})," in the startup configuration. These are automatically handled by Doris Operator services."]}),"\n",(0,o.jsxs)(n.li,{children:["When customizing the startup configuration in Kubernetes, always set ",(0,o.jsx)(n.code,{children:"enable_fqdn_mode=true"}),"."]}),"\n"]})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let o={},r=s.createContext(o);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);