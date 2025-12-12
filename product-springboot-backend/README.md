# Spring Boot Product Backend (MySQL)

This is a Spring Boot REST API for the Product CRUD application.

## Quick start (Docker + Maven)

1. Start MySQL via Docker Compose (recommended):
   ```
   docker compose up -d
   ```

2. Build & run the backend:
   ```
   mvn -DskipTests package
   mvn spring-boot:run
   ```

3. API endpoints:
   - GET    http://localhost:8080/api/products
   - GET    http://localhost:8080/api/products/{id}
   - POST   http://localhost:8080/api/products
   - PUT    http://localhost:8080/api/products/{id}
   - DELETE http://localhost:8080/api/products/{id}
   - POST   http://localhost:8080/api/products/reset

Default DB credentials (used in docker-compose and application.properties):
- DB: productdb
- USER: prod_user
- PASS: prod_pass

Make sure the database is up before starting the Spring Boot app.
