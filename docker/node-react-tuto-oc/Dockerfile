FROM node:latest
MAINTAINER Cellier Florian <cellier.florian@hotmail.fr>

RUN apt-get update \
    && apt-get install -y apt-transport-https ca-certificates

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update \
    && apt-get install -y yarn \
    && npm install pm2@latest -g

RUN yarn global add create-react-app

RUN apt-get clean -y\
    && apt-get autoclean -y \
    && apt-get autoremove -y


CMD ["/home/docker/docker/node-react-tuto-oc/start.sh"]