#!/bin/bash
cd /home/ubuntu/
pm2 start index.js
systemctl restart nginx
#npm start
#pm2 start npm --name "myapp" -- start
#pm2 startup
#pm2 save
pm2 restart all
