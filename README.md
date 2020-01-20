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
    npm install -g express-generator
    express k8s-node-sql

## Get Started

### minikube
    > brew install minikube
    > minikube start
    > minikube dashboard
    > [optional if tiller not installed] kubectl apply -f tiller.yaml
#### helm
    > brew install helm
    > helm install --name mysql helm/k8s_sql/
    > helm install --name nodeapp helm/k8s_node/
    > [*GET URL*] minikube service nodeapp --url
    > [purge all] helm ls --all --short | xargs -L1 helm delete --purge

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