#!/bin/bash
cd /home/ubuntu/
pm2 start index.js
#npm start
#pm2 start npm --name "myapp" -- start
#pm2 startup
pm2 save
