# k8s-node-sql
An e2e nodejs and mysql project on k8s.

## Prerequisites
    - [optional(local)] node --version v10
    - mysql version 5.7
    - Docker version 19.03.5, build 633a0ea
    - minikube version: v1.6.2 commit: 54f28ac5d3a815d1196cd5d57d707439ee4bb392
    - Helm: [helm 3.0.2]
        Client: &version.Version{SemVer:"v2.11.0", GitCommit:"2e55dbe1fdb5fdb96b75ff144a339489417b146b", GitTreeState:"clean"}
        Server: &version.Version{SemVer:"v2.11.0", GitCommit:"2e55dbe1fdb5fdb96b75ff144a339489417b146b", GitTreeState:"clean"}

## Code generation
    > npm install -g express-generator
    > express k8s-node-sql

## Get Started

### minikube & helm
    > brew install minikube
    > [default --vm-driver=hyperkit] minikube start
    > minikube dashboard
    > [optional if tiller not installed] kubectl apply -f tiller.yaml
    > brew install helm
    > helm install --name mysql helm/k8s_sql/
    > helm install --name nodeapp helm/k8s_node/
    > [*GET URL*] minikube service nodeapp --url
    > [purge all] helm ls --all --short | xargs -L1 helm delete --purge

#### How it looks!
```
$ helm ls
NAME    REVISION        UPDATED                         STATUS          CHART           APP VERSION     NAMESPACE
mysql   1               Mon Jan 20 12:12:31 2020        DEPLOYED        mysql-0.1.0     5.7             default  
nodeapp 1               Mon Jan 20 12:56:03 2020        DEPLOYED        node-0.1.0      latest          default 

$ minikube service nodeapp --url
http://xxx.xxx.xxx.x:31892

$ kubectl get services
NAME         TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE
kubernetes   ClusterIP   10.96.0.1      <none>        443/TCP        3h47m
mysql        ClusterIP   10.96.37.218   <none>        3306/TCP       52m
nodeapp      NodePort    10.96.97.224   <none>        80:31892/TCP   9m16s

$ kubectl get deployment
NAME      READY   UP-TO-DATE   AVAILABLE   AGE
mysql     1/1     1            1           53m
nodeapp   4/4     4            4           9m43s

$ kubectl get pods
NAME                       READY   STATUS    RESTARTS   AGE
mysql-7848b769b9-hlm87     1/1     Running   0          53m
nodeapp-75cdb45658-4b59v   1/1     Running   0          7m20s
nodeapp-75cdb45658-8c57k   1/1     Running   0          7m20s
nodeapp-75cdb45658-dklfg   1/1     Running   0          10m
nodeapp-75cdb45658-szb58   1/1     Running   0          7m20s

$ kubectl get pvc
NAME    STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
mysql   Bound    pvc-92ed2b27-1084-4eca-a3b8-d683d0d53fe7   8Gi        RWO            standard       53m

$ kubectl get ingress
NAME      HOSTS                 ADDRESS   PORTS   AGE
nodeapp   chart-example.local             80      10m
``` 

### Screenshots

#### K8s Dashboard
![K8s Dashboard](https://github.com/duttadeep55/k8s-node-sql/blob/master/images/kube_dashboard.png)

#### K8s Node Logs
![K8s Dashboard](https://github.com/duttadeep55/k8s-node-sql/blob/master/images/kube_node_logs.png)

#### K8s MySql Logs
![K8s Dashboard](https://github.com/duttadeep55/k8s-node-sql/blob/master/images/kube_sql_logs.png)

#### Browser
![K8s Dashboard](https://github.com/duttadeep55/k8s-node-sql/blob/master/images/browser.png)


### local
    > docker run -d --name k8s_sql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=test -e MYSQL_USER=k8s -e MYSQL_PASSWORD=k8s -p 3306:3306/tcp mysql:5.7
    > npm install
    > PORT=8080 npm run start

### docker
    > docker run -d --name k8s_sql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=test -e MYSQL_USER=k8s -e MYSQL_PASSWORD=k8s -p 3306:3306/tcp mysql:5.7
    > [optional] docker build -t duttadeep55/k8s-node-sql:latest .
    > docker run -d --name k8s_node -p 80:8080/tcp duttadeep55/k8s-node-sql:latest
    > docker logs -f k8s_node

### docker-compose
    > docker-compose up
    > docker logs -f k8s_node