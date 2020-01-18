# k8s-node-sql
An e2e nodejs and mysql project on k8s.

# Code generation
    npm install -g express-generator
    express k8s-node-sql

# Get Started

## local
    npm install
    PORT=8080 npm run start

## docker
    docker build -t k8s-node-sql:v1 .
    docker run -d --name k8s_node_sql -p 80:8080/tcp k8s-node-sql:v1
    docker logs -f k8s_node_sql

## docker-compose
    docker-compose up

