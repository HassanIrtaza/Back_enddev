#!/bin/bash

# navigate to app folder
cd /home/ubuntu
curl -fsSL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
bash /tmp/nodesource_setup.sh
apt-get install -y nodejs
#npm install pm2 -g
