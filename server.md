# Server setup

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
```

```
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install nodejs
apt-get install -y build-essential
sudo npm -g install forever
```

```
sudo groupadd ws
mkdir /srv/ws
sudo chown -R $USERNAME:ws /srv/ws
sudo usermod -a -G ws $USERNAME
```

```
git config --global user.email "mail@mail.com"
git config --global user.name "username"
```

```
ssh-keygen -t rsa -C "mail@mail.com"
cat ~/.ssh/id_rsa.pub
ssh -T git@github.com
```

```
git clone https://github.com/telemark/api.t-fk.no.git
npm install
npm run-script init
forever start --spinSleepTime 10000 index.js
```

```
sudo apt-get install nginx
```

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


sette i DMZ

sette opp /etc/network/interfaces


sett opp dns
api.t-fk.no -> root til api
postlister.t-fk.no -> frotend til postlister


## Brannmur
Trenger porter mot github
outbound: 80/443/9418/22

for å hente filer fra filserver
outbound: cifs -> filserver

for visma
outbound: 8110 -> visma webserver

inbound: 80/443/22/25

sette opp node med https

route med nginx
