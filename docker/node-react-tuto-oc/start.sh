#!/bin/bash
DIRECTORY_ROOT="/home/docker/"
APP_NAME="blog"

if [ ! -d "$DIRECTORY_ROOT$APP_NAME" ]; then
  # Control will enter here if $DIRECTORY doesn't exist.
  cd $DIRECTORY_ROOT
  create-react-app $APP_NAME
fi

cd $DIRECTORY_ROOT$APP_NAME
yarn install
yarn start
