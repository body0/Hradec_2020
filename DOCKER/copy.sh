#!/bin/bash
set -e

# GIT ROOT
PojectRoot="/home/nykl/Documents/WEB/Hradec_2020"
#PojectRoot=""
cd $PojectRoot


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
rm -f "$PojectRoot/DOCKER/apiService/requirements.txt"
cp "$PojectRoot/FLUSK/requirements.txt" "$PojectRoot/DOCKER/apiService/requirements.txt"

if [[ -f "$PojectRoot/FLUSK/app/__pycache__" ]]; then
    rm -r "$PojectRoot/FLUSK/app/__pycache__"
fi

rm -rf "$PojectRoot/DOCKER/apiService"
cp -r "$PojectRoot/FLUSK/app" "$PojectRoot/DOCKER/apiService/app"

# html
cd "$PojectRoot/HR"
ng build --prod="true" --baseHref / --output-path="$PojectRoot/DOCKER/nginx/app"