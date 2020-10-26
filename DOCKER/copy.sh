#!/bin/bash
set -e

# GIT ROOT
PojectRoot="/home/nykl/Documents/WEB/Hradec_2020"
cd $PojectRoot


# version inc
source $PojectRoot/DOCKER/appVersion.txt
    #$priVersion = 
    #$sesVersion = 
    #$terVersion = 
newVersion=$(($terVersion+1))
fullVersion=" '$priVersion.$sesVersion.$terVersion'" 
echo $fullVersion

sed -ir -e "s/\(terVersion=\).*/\1$newVersion/" "$PojectRoot/DOCKER/appVersion.txt"
sed -ir -e "s/\(appVersion:\).*/\1$fullVersion,/" "$PojectRoot/HR/src/environments/environment.prod.ts"

# python
echo 'copy python'
if [[ -f "$PojectRoot/DOCKER/apiService/requirements.txt" ]]; then
    rm -f "$PojectRoot/DOCKER/apiService/requirements.txt"
fi
cp "$PojectRoot/FLUSK/requirements.txt" "$PojectRoot/DOCKER/apiService/requirements.txt"

if [[ -d "$PojectRoot/FLUSK/app/__pycache__" ]]; then
    rm -r "$PojectRoot/FLUSK/app/__pycache__"
fi
if [[ -d "$PojectRoot/DOCKER/apiService/app" ]]; then
   rm -rf "$PojectRoot/DOCKER/apiService/app"
fi
cp -r "$PojectRoot/FLUSK/app" "$PojectRoot/DOCKER/apiService/app"

# exit 0

# html
echo 'build angualr'
if [[ -d "$PojectRoot/DOCKER/nginx/app" ]]; then
   rm -rf "$PojectRoot/DOCKER/nginx/app/*"
fi
cd "$PojectRoot/HR"
ng build --prod="true" --baseHref / --output-path="$PojectRoot/DOCKER/nginx/app"