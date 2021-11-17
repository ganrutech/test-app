#!/bin/bash
pm2 describe "ecom-app" > /dev/null
RUNNING=$?

if [ "${RUNNING}" -ne 0 ]; then
  pm2 start npm --name "ecom-app" -- start
else
  pm2 restart "ecom-app"
fi;