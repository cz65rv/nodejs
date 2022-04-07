#!/bin/bash
sed "s/Tag/$1/g" nodejs-deploy.yaml > nodejs-deployment.yaml
#Modified