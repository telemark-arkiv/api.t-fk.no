# Server setup

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
```

## Install nodejs and forever
```
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs build-essential
sudo npm -g install forever
```

## Set permissions
```
sudo groupadd ws
mkdir /srv/ws
sudo chown -R $USERNAME:ws /srv/ws
sudo usermod -a -G ws $USERNAME
```

## Clone repo
```
git clone https://github.com/telemark/api.t-fk.no.git
npm install
npm run-script init
forever start --spinSleepTime 10000 index.js
```

## Install nginx
```
sudo apt-get install nginx
```

## nginx config
```
server {

    listen 443 ssl;

    server_name api.t-fk.no;

    ssl_certificate /etc/nginx/ssl/ssl-bundle.crt;

    ssl_certificate_key /etc/nginx/ssl/wildcard.key;

    location / {

        proxy_pass http://localhost:3000;

        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;

        proxy_set_header Connection 'upgrade';

        proxy_set_header Host $host;

        proxy_cache_bypass $http_upgrade;

    }

}
```

## Server config
Set server i DMZ

Setup /etc/network/interfaces
Setup DNS: api.t-fk.no
Setup DNS: postlister.t-fk.no


## Brannmur
Ports for github
outbound: 80/443/9418/22

To get files from fileserver
outbound: cifs -> filserver

For visma webservices
outbound: 8110 -> visma webserver

Inbound
inbound: 80/443/22/25

