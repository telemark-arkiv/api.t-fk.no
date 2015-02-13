# Server setup

## Install mongodb
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

## Config mongo collections
```
cd api.t-fk.no.git/mongoconfig
mongo journals.js
```


## Install nginx
```
sudo apt-get install nginx
```

## nginx config
```

# api.t-fk.no
server {
    listen 443 ssl;
    server_name api.t-fk.no;
    ssl_certificate /etc/nginx/ssl/ssl-bundle.crt;
    ssl_certificate_key /etc/nginx/ssl/wildcard.key;
    
    # Enables gzip
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml ap$

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# postlister.t-fk.no
server {
    listen 443 ssl;
    server_name postlister.t-fk.no;
    ssl_certificate /etc/nginx/ssl/ssl-bundle.crt;
    ssl_certificate_key /etc/nginx/ssl/wildcard.key;
    root /srv/ws/postlister/dist;

    # Enables gzip
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;

    # Static expires
    location ~* \.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc|woff)$ {
      expires 7d;
      access_log off;
      add_header Cache-Control "public";
    }

    # CSS and Javascript
    location ~* \.(?:css|js)$ {
      expires 7d;
      access_log off;
      add_header Cache-Control "public";
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

