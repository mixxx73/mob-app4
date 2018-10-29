#!/bin/bash

# ng run app:ionic-cordova-build:production --platform=android
ionic cordova build android --prod --release

cp /home/mixxx/work/ghi/mob-app4/platforms/android/app/build/outputs/apk/debug/app-debug.apk .
cp app-debug.apk /home/mixxx/Dropbox/apki/.
