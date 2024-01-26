Node/Express:
-> npm install
-> npm start
-> Run postman to test:
example: http://localhost:8080/data?n=1&m=2

Docker:
Build Docker Image: docker build -t my-optimized-server .
Create docker container: docker run -d --memory=1500m --cpus=2 -p 8080:8080 -it my-optimized-server
List all running contains: docker ps
Kill a Running Docker Container: docker kill <cotaierid>
