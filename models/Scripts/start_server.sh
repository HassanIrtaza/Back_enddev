#!/bin/bash
cd /home/ubuntu/
systemctl restart nginx
pm2 start index.js
#npm start
#pm2 start npm --name "myapp" -- start
#pm2 startup
#pm2 save
pm2 restart all
