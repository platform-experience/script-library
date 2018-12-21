#!/bin/bash

source ./config/scaffold.sh

yarn build client-controller script-115 "Embedded Widget" "A Client Controller script using spUtil.get() to embed a widget in Service Portal."
curl ${CTRL_GIST} > src/client-controller/si-script-115/script.js
git add .
git commit -a -m "Added client controller sample script"
