# credits
- https://github.com/SonarSource/docker-sonarqube/blob/master/example-compose-files/sq-with-postgres/docker-compose.yml

# run docker
```
docker-compose up -d
```
- wait 30 seconds

# troubleshoot - max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
https://stackoverflow.com/questions/42111566/elasticsearch-in-windows-docker-image-vm-max-map-count
```bash
docker-compose down
wsl -d docker-desktop  
sysctl -w vm.max_map_count=262144 
exit
```
# Now run as detached mode so its hidden
```
docker-compose up -d
```
- wait 30s

# load into browser (if windows 10 or mac)
localhost:9000

## troubleshoot windows 7
```
docker-machine ip
192.168.99.100
```
## load into browser for windows 7 
```
192.168.99.100:9000
```

# login 
admin, admin

# Add this project to sonar 
- click - + next to [A] > Create new project > my-package-json-project > Generate token - enter [my-package-json-project] - 
```
14d8b0f0ebbbe05704afc7316b8995a92b79a1e9
```
# Now rename your local sonar-project.properties.example
sonar-project.properties.example RENAMED to 
sonar-project.properties 

# Replace token with this.
```
sonar.login=14d8b0f0ebbbe05704afc7316b8995a92b79a1e9
```
# run sonar 
```
npm run sonar 
```

# be sure to click - allow access when firewall dialog appears
allow access

# view this 
```
http://localhost:9000/dashboard?my-package-json-project
```

# teardown
```
docker-compose down
docker volume prune 
Y
docker-network prune
Y
```

# It works when you see this 
```
INFO: ANALYSIS SUCCESSFUL, you can browse http://localhost:9000/dashboard?id=my-package-json-project
INFO: Note that you will be able to access the updated dashboard once the server has processed the submitted analysis report
INFO: More about the report processing at http://localhost:9000/api/ce/task?id=AXi-BHe4eJq73AfUOpUM
INFO: Analysis total time: 38.626 s
INFO: ------------------------------------------------------------------------
INFO: EXECUTION SUCCESS
INFO: ------------------------------------------------------------------------
INFO: Total time: 40.407s
INFO: Final Memory: 13M/54M
INFO: ------------------------------------------------------------------------
[08:37:36] Analysis finished.
```

# Visit browser to look at analysis
localhost:9000

