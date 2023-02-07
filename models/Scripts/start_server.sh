#!/bin/bash
cd /home/ubuntu/demoNodeProject
pm2 start index.js
pm2 save
systemctl start nginx
#npm start
#pm2 start npm --name "myapp" -- start
#pm2 startup
