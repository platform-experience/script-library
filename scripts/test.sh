#!/bin/bash

source ./config/scaffold.sh

script_name=script-115
yarn build client-controller $script_name "Embedded Widget" "A Client Controller script using spUtil.get() to embed a widget in Service Portal."
curl ${CTRL_GIST} > src/client-controller/si-$script_name/script.js
git add .
git commit -a -m "Added client controller sample script"
